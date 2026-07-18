import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, BookOpen, GraduationCap, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import profileImage from "@/assets/hero-portrait.jpg";

const timelineEvents = [
  {
    id: 1,
    title: "Matriculation",
    institution: "Sachidanand Gyan Bharti Model School",
    location: "Ranchi, Jharkhand",
    period: "2009 - 2021",
    type: "school",
    details: "Acquired secondary school certification with strong foundational grades.",
  },
  {
    id: 2,
    title: "Intermediate (PCM)",
    institution: "Bridgeford School",
    location: "Ranchi, Jharkhand",
    period: "2021 - 2023",
    type: "school",
    details: "Focused on Physics, Chemistry, and Mathematics (PCM) with core engineering preparation.",
  },
  {
    id: 3,
    title: "Bachelor of Technology (B.Tech)",
    institution: "Gandhi Institute of Engineering and Technology",
    location: "Gunupur, Odisha",
    period: "2023 - 2027",
    type: "university",
    details: "Pursuing major in Computer Science and Engineering. Deep-diving into algorithm structures, web engines, and system designs.",
  },
  {
    id: 4,
    title: "Member, Data Science Club",
    institution: "GIET University",
    location: "Gunupur",
    period: "2025 - Present",
    type: "club",
    details: "Engaged in data analytics projects, machine learning application workshops, and peer-to-peer engineering study groups.",
  },
];

const AboutPage = () => {
  const navigate = useNavigate();

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
            <GraduationCap className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-label text-primary">About & Journey</span>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass border border-white/5 relative group">
              <img
                src={profileImage}
                alt="Priyanshu Gupta"
                className="w-full h-full object-cover grayscale-image hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Quick summary card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-white/10 rounded-2xl p-6 shadow-float max-w-xs glass">
              <p className="text-xs text-muted-foreground italic font-light leading-relaxed">
                "{personalInfo.footerTagline}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">
                Priyanshu <span className="text-gradient-neon">Gupta</span>
              </h1>
              <p className="text-sm font-label text-primary tracking-widest uppercase">
                Creative Developer & Student
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              {personalInfo.intro}
            </p>

            <p className="text-sm text-muted-foreground/80 leading-relaxed font-light">
              {personalInfo.about}
            </p>

            {/* Profile Meta Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-white/5 bg-card/30">
                <span className="text-[10px] font-label text-muted-foreground block mb-1">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  Ranchi, Jharkhand / Gunupur, Odisha
                </span>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-card/30">
                <span className="text-[10px] font-label text-muted-foreground block mb-1">
                  Current Role
                </span>
                <span className="text-sm font-semibold text-white">
                  CSE Student @ GIET University
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-label text-primary uppercase tracking-widest">Chronology</span>
          </div>
          <h2 className="text-4xl font-bold">Academic Journey & Experience</h2>
        </div>

        {/* Custom Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central tracking line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary/20" />

          {/* Timeline Nodes */}
          <div className="space-y-16 relative">
            {timelineEvents.map((evt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={evt.id}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline item card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] rounded-3xl border border-white/5 bg-card/35 backdrop-blur-md p-8 shadow-ambient hover:border-white/10 hover:shadow-neon transition-all duration-500 glass"
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-mono text-primary font-semibold">
                        {evt.period}
                      </span>
                      <span className="p-2 rounded-full bg-white/5 text-muted-foreground">
                        {evt.type === "school" ? (
                          <GraduationCap className="w-4 h-4 text-secondary" />
                        ) : evt.type === "university" ? (
                          <BookOpen className="w-4 h-4 text-primary" />
                        ) : (
                          <Users className="w-4 h-4 text-tertiary" />
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">
                      {evt.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground font-label tracking-wider uppercase mb-4">
                      {evt.institution}, {evt.location}
                    </p>

                    <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                      {evt.details}
                    </p>
                  </motion.div>

                  {/* Bullet center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-neon z-10 hidden md:block" />

                  {/* Empty spacer block for layouts */}
                  <div className="w-[45%] hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
