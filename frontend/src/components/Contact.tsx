import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
              That's all for now.
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Got a project in mind?
              <br />
              Let's talk
            </h2>
          </motion.div>

          {/* Contact Info & CTA */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-sm text-muted-foreground">Email:</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xl font-medium hover:text-accent transition-colors block"
              >
                {personalInfo.email}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-sm text-muted-foreground">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-xl font-medium hover:text-accent transition-colors block"
              >
                {personalInfo.phone}
              </a>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-end"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-48 h-48 rounded-full text-xl font-semibold bg-accent hover:bg-accent/90 shadow-large group relative overflow-hidden"
                  onClick={() => window.location.href = `mailto:${personalInfo.email}`}
                >
                  <span className="relative z-10 flex flex-col items-center gap-2">
                    Get in touch
                    <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 group-hover:scale-110 transition-transform duration-500" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-px bg-border my-20 origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
