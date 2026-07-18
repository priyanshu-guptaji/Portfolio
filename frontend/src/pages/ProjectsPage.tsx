import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ExternalLink, Github, ArrowLeft, Terminal, Cpu, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/portfolio";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const projectImages: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
};

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Extract all unique technologies from all projects
  const allFilters = ["All", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"];

  // Filter projects by search query and category tags
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter === "All" || project.stack.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 pb-36 relative">
        {/* Header navigation */}
        <div className="mb-12 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="group font-label text-xs tracking-widest text-muted-foreground hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-label text-primary">Projects</span>
          </div>
        </div>

        {/* Title and Intro */}
        <div className="max-w-4xl mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Featured <span className="text-gradient-neon">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            A showcase of software projects and visual interfaces I've built. Click on any card to read challenges and specifications.
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects by key..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-card/45 border-white/10 rounded-full text-sm focus-visible:ring-primary/50"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-label rounded-full border transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary border-primary text-black font-semibold shadow-neon-strong"
                    : "border-white/5 bg-card/30 text-muted-foreground hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="rounded-3xl overflow-hidden glass border border-white/5 shadow-ambient hover:shadow-neon hover:border-white/15 transition-all duration-500 flex flex-col h-full">
                    {/* Project Image Aspect Ratio */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
                      <img
                        src={projectImages[project.image]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                      />
                      {/* Floating tech count badge */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/80 font-label z-20">
                        {project.stack.length} Techs
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 flex flex-col justify-between flex-grow space-y-6">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-xs font-label text-primary/70 tracking-widest uppercase">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack row */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-label px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="text-[9px] font-label px-2 py-1 bg-white/5 border border-white/5 rounded-full text-muted-foreground">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-muted-foreground font-mono text-sm"
            >
              No projects found matching the criteria.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-card border-white/10 text-white rounded-3xl p-0 overflow-hidden glass shadow-float">
            {selectedProject && (
              <div className="flex flex-col max-h-[85vh] overflow-y-auto">
                {/* Banner Image */}
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-30 z-10`} />
                  <img
                    src={projectImages[selectedProject.image]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Action Buttons */}
                  <div className="absolute bottom-4 right-4 flex gap-2.5 z-20">
                    <Button
                      size="sm"
                      onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                      className="bg-black/60 hover:bg-black/80 text-white border border-white/10 rounded-full font-label text-[10px]"
                    >
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Repository
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                      className="bg-primary hover:bg-primary/95 text-black rounded-full font-label text-[10px] font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Info and Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold">{selectedProject.title}</h2>
                    <p className="text-sm font-label text-primary tracking-wider uppercase mt-1">
                      {selectedProject.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {selectedProject.description}
                  </p>

                  <div className="border-t border-white/5 pt-6">
                    <h4 className="text-xs font-label text-muted-foreground uppercase tracking-widest mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-white/5 border-white/10 px-3 py-1 font-label text-[10px] rounded-full text-white/90"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Specs Tab System */}
                  <div className="border-t border-white/5 pt-6">
                    <Tabs defaultValue="architecture" className="w-full">
                      <TabsList className="bg-black/20 border border-white/5 p-1 rounded-full w-full justify-start">
                        <TabsTrigger
                          value="architecture"
                          className="rounded-full px-4 text-xs font-label data-[state=active]:bg-primary data-[state=active]:text-black"
                        >
                          <Cpu className="w-3.5 h-3.5 mr-1.5" />
                          Overview
                        </TabsTrigger>
                        <TabsTrigger
                          value="challenges"
                          className="rounded-full px-4 text-xs font-label data-[state=active]:bg-primary data-[state=active]:text-black"
                        >
                          <Terminal className="w-3.5 h-3.5 mr-1.5" />
                          Challenges
                        </TabsTrigger>
                        <TabsTrigger
                          value="future"
                          className="rounded-full px-4 text-xs font-label data-[state=active]:bg-primary data-[state=active]:text-black"
                        >
                          <Lightbulb className="w-3.5 h-3.5 mr-1.5" />
                          Future Scope
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="architecture" className="mt-4 text-sm text-muted-foreground leading-relaxed space-y-2 font-light">
                        <p>
                          Built using modular development practices. The front end is fully responsive, leveraging local state synchronization to ensure fast load times and clean component lifecycles.
                        </p>
                        <p>
                          Styling is fully integrated with layout primitives, compiling down to a very small size for quick loading.
                        </p>
                      </TabsContent>
                      <TabsContent value="challenges" className="mt-4 text-sm text-muted-foreground leading-relaxed space-y-2 font-light">
                        <p>
                          <strong>The Challenge:</strong> Managing UI animations and calculations without causing layout shifts or slowing down interactive elements.
                        </p>
                        <p>
                          <strong>The Solution:</strong> Implemented hardware-accelerated animations using Framer Motion spring physics, keeping response times extremely fast.
                        </p>
                      </TabsContent>
                      <TabsContent value="future" className="mt-4 text-sm text-muted-foreground leading-relaxed space-y-2 font-light">
                        <p>
                          Planned enhancements include deeper mobile layout optimizations, localized storage support, and accessibility standards integration.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
