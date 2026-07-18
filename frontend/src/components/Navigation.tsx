import { motion } from "framer-motion";
import { Home, Briefcase, Code, User, Mail, Github, Instagram, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Skills", path: "/skills", icon: Code },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: MessageSquare },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/priyanshu-guptaji", icon: Github },
  { name: "Instagram", href: "https://www.instagram.com/itspriyanshuguptaaa/", icon: Instagram },
  { name: "Email", href: "mailto:priyanshusgbm05@gmail.com", icon: Mail },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4"
    >
      {/* Main Pages Dock */}
      <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur-xl px-3 py-2 rounded-full border border-white/5 shadow-ambient relative">
        {navLinks.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredTab(item.name)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative p-3 rounded-full text-muted-foreground hover:text-white transition-colors duration-300"
              aria-label={item.name}
            >
              {/* Active Indicator Pill */}
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {/* Hover Indicator Background */}
              {hoveredTab === item.name && !isActive && (
                <motion.div
                  layoutId="hover-nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}

              <Icon className={`w-5 h-5 relative z-10 ${isActive ? "text-primary filter drop-shadow-[0_0_8px_rgba(243,130,255,0.5)]" : ""}`} />

              {/* Tooltip */}
              {hoveredTab === item.name && (
                <motion.span
                  initial={{ opacity: 0, y: 10, x: "-50%" }}
                  animate={{ opacity: 1, y: -45, x: "-50%" }}
                  exit={{ opacity: 0, y: 10, x: "-50%" }}
                  className="absolute left-1/2 text-[10px] font-label bg-black/80 border border-white/10 text-white px-2.5 py-1 rounded-md pointer-events-none whitespace-nowrap shadow-float"
                >
                  {item.name}
                </motion.span>
              )}
            </button>
          );
        })}
      </div>

      {/* Vertical Separator */}
      <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />

      {/* Social Links Dock */}
      <div className="hidden sm:flex items-center gap-1 bg-card/85 backdrop-blur-xl px-2.5 py-2 rounded-full border border-white/5 shadow-ambient">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-300"
              aria-label={item.name}
            >
              <Icon className="w-4.5 h-4.5" />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
