import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Terminal, Cpu, Zap, Bug, CheckCircle2, Copy, Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { skillsProofData, SkillProofData } from "@/data/skillsProof";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

const SkillsPage = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = useState<SkillProofData>(skillsProofData[0]);
  const [activeConsoleTab, setActiveConsoleTab] = useState<"code" | "arch" | "perf" | "post">("code");
  const [copiedSnippetIdx, setCopiedSnippetIdx] = useState<number | null>(null);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIdx(idx);
    setTimeout(() => setCopiedSnippetIdx(null), 2000);
  };

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
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-label text-primary">Skills</span>
          </div>
        </div>

        {/* Title and Intro */}
        <div className="max-w-4xl mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            Skills & <span className="text-gradient-neon">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            An interactive review of languages, architecture designs, and performance practices I apply to my work. Click on a language on the left to see details.
          </p>
        </div>

        {/* Console Container */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Left Sidebar: Technologies Selectors */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
            {skillsProofData.map((skill) => {
              const isSelected = selectedSkill.id === skill.id;
              return (
                <button
                  key={skill.id}
                  onClick={() => {
                    setSelectedSkill(skill);
                    // Reset to first tab when changing technology
                    setActiveConsoleTab("code");
                  }}
                  className={`w-full text-left px-5 py-4 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 border font-label text-sm whitespace-nowrap lg:whitespace-normal shrink-0 ${
                    isSelected
                      ? "bg-primary/10 border-primary/45 text-white shadow-neon"
                      : "bg-card/40 border-white/5 text-muted-foreground hover:border-white/15 hover:text-white"
                  }`}
                  style={{
                    // @ts-ignore
                    "--skill-glow": skill.color,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  {isSelected && (
                    <motion.div
                      layoutId="active-console-indicator"
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Console: Code Panel */}
          <div className="lg:col-span-3 rounded-3xl border border-white/5 bg-slate-950/80 shadow-ambient overflow-hidden flex flex-col min-h-[600px] glass">
            {/* Console Header Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-black/40 border-b border-white/5 p-4 sm:px-6 gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-muted-foreground ml-3 uppercase">
                  Documentation / {selectedSkill.name}
                </span>
              </div>

              {/* Console Tabs */}
              <div className="flex bg-black/30 border border-white/5 p-0.5 rounded-full self-start sm:self-auto">
                <button
                  onClick={() => setActiveConsoleTab("code")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-label font-medium transition-all ${
                    activeConsoleTab === "code"
                      ? "bg-primary text-black"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  Code
                </button>
                <button
                  onClick={() => setActiveConsoleTab("arch")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-label font-medium transition-all ${
                    activeConsoleTab === "arch"
                      ? "bg-primary text-black"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  <Cpu className="w-3 h-3" />
                  Architecture
                </button>
                <button
                  onClick={() => setActiveConsoleTab("perf")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-label font-medium transition-all ${
                    activeConsoleTab === "perf"
                      ? "bg-primary text-black"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  <Zap className="w-3 h-3" />
                  Performance
                </button>
                <button
                  onClick={() => setActiveConsoleTab("post")}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-label font-medium transition-all ${
                    activeConsoleTab === "post"
                      ? "bg-primary text-black"
                      : "text-muted-foreground hover:text-white"
                  }`}
                >
                  <Bug className="w-3 h-3" />
                  Lessons
                </button>
              </div>
            </div>

            {/* Console Screen Panel */}
            <div className="p-6 sm:p-8 flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSkill.id}-${activeConsoleTab}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* TAB 1: Code snippets */}
                  {activeConsoleTab === "code" && (
                    <div className="space-y-8">
                      {selectedSkill.sections.codeSnippets.map((snippet, idx) => (
                        <div key={idx} className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold text-white">{snippet.title}</h3>
                            <button
                              onClick={() => handleCopyCode(snippet.code, idx)}
                              className="p-2 rounded-full border border-white/5 bg-black/40 hover:bg-black/60 text-muted-foreground hover:text-white transition-all"
                              title="Copy Code"
                            >
                              {copiedSnippetIdx === idx ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>

                          <div className="text-sm text-muted-foreground">
                            <span className="font-mono text-primary text-xs uppercase tracking-wider mr-2">[Problem]</span>
                            {snippet.problem}
                          </div>

                          {/* Code block editor */}
                          <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-black/60 shadow-inner">
                            <pre className="p-5 font-mono text-xs sm:text-sm text-white/90 overflow-x-auto leading-relaxed">
                              <code>{snippet.code}</code>
                            </pre>
                          </div>

                          {/* Why box */}
                          <div className="flex items-start gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm">
                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold mr-1">Rationale:</span>
                              {snippet.why}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TAB 2: System Architecture */}
                  {activeConsoleTab === "arch" && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {selectedSkill.sections.architecture.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {selectedSkill.sections.architecture.content}
                        </p>
                      </div>

                      {selectedSkill.sections.architecture.diagram && (
                        <div className="space-y-3">
                          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                            Topology Schema
                          </span>
                          <pre className="p-6 font-mono text-xs sm:text-sm text-white/80 bg-black/40 border border-white/5 rounded-2xl overflow-x-auto leading-relaxed border-l-2 border-primary/50">
                            {selectedSkill.sections.architecture.diagram}
                          </pre>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 3: Telemetry / Performance */}
                  {activeConsoleTab === "perf" && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {selectedSkill.sections.performance.map((perf, idx) => (
                          <div
                            key={idx}
                            className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-4 hover:border-white/10 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Zap className="w-4 h-4" />
                              </div>
                              <h4 className="font-bold text-white">{perf.title}</h4>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed font-light">
                              {perf.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: Post-Mortem / Git Diff */}
                  {activeConsoleTab === "post" && (
                    <div className="space-y-8">
                      {selectedSkill.sections.mistakes.map((mistake, idx) => (
                        <div key={idx} className="space-y-6 border-l-2 border-red-500/50 pl-6">
                          <div>
                            <h3 className="text-xl font-bold text-white">"{mistake.title}"</h3>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Left Col: Mistake and Discovery */}
                            <div className="space-y-4">
                              <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-2">
                                <span className="text-[10px] font-label font-bold text-red-400 block tracking-widest uppercase">
                                  - The Mistake
                                </span>
                                <p className="text-sm text-white/95 leading-relaxed">
                                  {mistake.error}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-[9px] font-label text-muted-foreground tracking-wider uppercase block">
                                  Discovery Log
                                </span>
                                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                                  {mistake.discovery}
                                </p>
                              </div>
                            </div>

                            {/* Right Col: Fix and Lesson */}
                            <div className="space-y-4">
                              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                                <span className="text-[10px] font-label font-bold text-emerald-400 block tracking-widest uppercase">
                                  + The Fix
                                </span>
                                <p className="text-sm text-white/95 leading-relaxed">
                                  {mistake.fix}
                                </p>
                              </div>
                              <div className="p-5 rounded-2xl bg-white/5 space-y-2 border border-white/5">
                                <span className="text-[10px] font-label font-bold text-primary block tracking-widest uppercase">
                                  Key Lesson
                                </span>
                                <p className="text-xs italic text-muted-foreground leading-relaxed">
                                  "{mistake.lesson}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SkillsPage;
