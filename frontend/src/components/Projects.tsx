import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

const projectImages: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-24 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-label text-primary">Selected Works</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-8"
          >
            Crafting Digital <br />
            <span className="text-gradient-neon">Masterpieces</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed font-light"
          >
            A curated selection of projects where technical precision meets high-end aesthetics. 
            Each piece is a journey through complex engineering and user-centric design.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative rounded-[2rem] overflow-hidden glass border border-white/5 shadow-ambient hover:shadow-neon transition-all duration-700">
                {/* Project Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-700 z-10`}
                  />
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Floating Tech Tags on Image */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-[10px] font-label bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-10 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-4xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                         <Button
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 rounded-full border border-white/5 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-10 h-10 rounded-full border border-white/5 hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm font-label text-primary/70 tracking-[0.2em]">
                      {project.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="group/btn relative px-8 h-12 flex items-center gap-2 overflow-hidden bg-transparent border border-primary/30 rounded-full hover:border-primary/60 transition-all font-semibold"
                    >
                      <span className="relative z-10 transition-colors group-hover/btn:text-black">Experience the Live Prototype</span>
                      {/* Animated Hover Background */}
                      <div className="absolute inset-x-0 inset-y-0 translate-y-full group-hover/btn:translate-y-0 bg-gradient-to-r from-primary via-secondary to-tertiary transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                    </Button>

                    <div className="w-12 h-[1px] bg-white/10 group-hover:w-24 group-hover:bg-primary/30 transition-all duration-700" />
                  </div>
                </div>

                {/* Animated highlight border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                  <div className="absolute inset-[1px] rounded-[2rem] border border-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
