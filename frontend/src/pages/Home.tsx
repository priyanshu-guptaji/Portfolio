import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import { projects } from "@/data/portfolio";
import project1 from "@/assets/project-1.png";

const projectImages: Record<string, string> = {
  "project-1": project1,
};

const Home = () => {
  const navigate = useNavigate();
  const featuredProject = projects[0];

  // Marquee list of qualities
  const qualities = [
    "Aesthetic Interface Design",
    "Scalable Java backend architecture",
    "Framer Motion Fluid Interactions",
    "React & TypeScript Engineering",
    "Clean Microservice Systems",
    "Creative Problem Solving",
  ];

  return (
    <PageTransition>
      <div className="relative pb-32">
        {/* Main Hero Component */}
        <Hero />

        {/* Endless Marquee Section */}
        <div className="w-full bg-secondary/10 border-y border-white/5 py-6 overflow-hidden select-none relative mb-32">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-16 whitespace-nowrap text-xs font-label text-muted-foreground/80 tracking-widest"
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {/* Double the list to create a seamless infinite loop */}
            {[...qualities, ...qualities].map((quality, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>{quality}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Feature Grid / Teasers */}
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Left: Featured Project teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-primary font-label text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Featured Work</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">Featured Project</h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A highlight of where frontend interface design meets structured full-stack mechanics.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/projects")}
              className="group cursor-pointer rounded-2xl overflow-hidden glass border border-white/5 shadow-ambient hover:shadow-neon transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={projectImages[featuredProject.image]}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{featuredProject.title}</h3>
                    <p className="text-sm text-primary font-label">{featuredProject.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <button
              onClick={() => navigate("/projects")}
              className="inline-flex items-center gap-2 text-sm font-label text-white hover:text-primary transition-colors group mt-4"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right: Skills & Proof teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-secondary font-label text-sm">
                <Code2 className="w-4 h-4" />
                <span>Skills & Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">Design & Code Depth</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I focus on clean interfaces backed by well-written, secure backend code. Click to explore specific case logs, architecture schemas, and real lessons learned.
              </p>

              {/* Graphical stats box */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <span className="text-3xl font-bold text-gradient-neon font-label">4+</span>
                  <p className="text-xs text-muted-foreground font-light">Bespoke Projects Completed</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                  <span className="text-3xl font-bold text-gradient-neon font-label">8+</span>
                  <p className="text-xs text-muted-foreground font-light">Core Stacks Mastered</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/skills")}
              className="inline-flex items-center gap-2 text-sm font-label text-white hover:text-secondary transition-colors group mt-4 align-self-start"
            >
              <span>Explore My Skills</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
