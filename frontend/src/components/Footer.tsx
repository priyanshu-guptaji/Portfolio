import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-2xl font-light">{personalInfo.footerTagline}</p>
            <h3 className="text-8xl md:text-9xl font-bold tracking-tight">
              Priyanshu
            </h3>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 45 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="w-32 h-32 rounded-full bg-primary-foreground text-primary flex items-center justify-center shadow-large hover:shadow-xl transition-shadow"
          >
            <ArrowUpRight className="w-8 h-8" />
          </motion.button>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-primary-foreground/20"
        >
          {/* Copyright */}
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Priyanshu. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
