import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
// import project4 from "@/assets/project-4.jpg";

const projectImages: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  // "project-4": project4,
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Impressive Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            HERE'S A SELECTION OF PROJECTS THAT SHOWCASE MY PASSION FOR DESIGN
            AND DEVELOPMENT, REFLECTING CREATIVITY AND INNOVATION.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-0 shadow-medium hover:shadow-large transition-all duration-500 h-full">
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <img
                    src={projectImages[project.image]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Project Info */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      className="flex-1 group/btn"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
