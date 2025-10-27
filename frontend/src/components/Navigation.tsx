import { motion } from "framer-motion";
import { Home, Mail, Instagram, User, FileText, Github, Info } from "lucide-react";
import { navItems } from "@/data/portfolio";

const iconMap: Record<string, any> = {
  Home,
  Mail,
  Instagram,
  User,
  FileText,
  Github,
  Info,
};

const Navigation = () => {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-primary/95 backdrop-blur-lg px-4 py-3 rounded-full shadow-large">
        {navItems.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.button
              key={item.name}
              onClick={() => handleClick(item.href)}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="p-3 rounded-full bg-background/10 hover:bg-accent transition-colors text-primary-foreground hover:text-accent-foreground"
              aria-label={item.name}
            >
              <Icon className="w-5 h-5" />
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navigation;
