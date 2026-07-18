import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs to avoid jittery movements and create a natural "weight"
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, hidden]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Look up parent tree to find interactive elements
      const interactiveEl = target.closest("button, a, [role='button'], [data-cursor]");
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor") || "pointer";
        setHoveredType(type);
      } else {
        setHoveredType(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (hidden) return null;

  // Visual state depending on what we are hovering over
  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "var(--neon-primary)",
      boxShadow: "0 0 10px var(--neon-primary)",
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: "transparent",
      border: "1.5px solid var(--neon-secondary)",
      boxShadow: "0 0 15px rgba(105, 156, 255, 0.3)",
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "rgba(243, 130, 255, 0.15)",
      border: "1px solid var(--neon-primary)",
      boxShadow: "0 0 20px rgba(243, 130, 255, 0.2)",
    },
    text: {
      width: 60,
      height: 60,
      backgroundColor: "transparent",
      border: "1px dashed var(--neon-tertiary)",
      borderRadius: "8px",
    }
  };

  const getVariant = () => {
    if (!hoveredType) return "default";
    if (hoveredType === "view") return "view";
    if (hoveredType === "text") return "text";
    return "pointer";
  };

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={cursorVariants}
        animate={getVariant()}
        className="rounded-full flex items-center justify-center overflow-hidden transition-colors duration-200"
      >
        {hoveredType === "view" && (
          <span className="text-[10px] font-label text-neon-on-surface font-bold animate-pulse">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;
