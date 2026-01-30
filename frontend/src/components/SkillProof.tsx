
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsProofData, SkillProofData } from "@/data/skillsProof";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Layers, Code2, Bug } from "lucide-react";

const SkillProof = () => {
    const [selectedSkill, setSelectedSkill] = useState<SkillProofData | null>(null);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 14
            },
        },
    };

    return (
        <section id="skills-proof" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/30">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm tracking-widest uppercase border-primary/30 bg-primary/5">
                            Technical Deep Dive
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
                    >
                        Proof of Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Don't just take my word for it. Click on a technology to explore real-world scenarios, architectural decisions, and honest lessons I've learned.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
                >
                    {skillsProofData.map((skill) => (
                        <motion.div key={skill.id} variants={itemVariants}>
                            <Card
                                className="group relative cursor-pointer h-full border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-border/80"
                                onClick={() => setSelectedSkill(skill)}
                                style={{
                                    // @ts-ignore
                                    "--skill-color": skill.color
                                }}
                            >
                                {/* Glow Effect on Hover using CSS var */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{ backgroundColor: skill.color }}
                                />

                                <CardContent className="p-8 flex flex-col items-center text-center h-full relative z-10">
                                    <div
                                        className="w-20 h-20 rounded-2xl bg-secondary/80 flex items-center justify-center text-5xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500 ring-1 ring-border/50"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[var(--skill-color)] transition-colors duration-300">
                                        {skill.name}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {skill.brief}
                                    </p>

                                    <div className="w-full pt-4 border-t border-border/40">
                                        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                                            <span className="opacity-70 group-hover:opacity-100 transition-opacity">Explore Proof</span>
                                            <CheckCircle2 className="w-4 h-4 group-hover:text-emerald-500 transition-colors" />
                                        </div>
                                    </div>
                                </CardContent>

                                {/* Bottom colored line */}
                                <div
                                    className="h-1.5 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center absolute bottom-0"
                                    style={{ backgroundColor: skill.color }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedSkill && (
                        <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col p-0 gap-0 border-border/60 shadow-2xl">

                                <DialogHeader className="p-6 md:p-8 border-b bg-secondary/20 relative overflow-hidden">
                                    {/* Header Background Gradient */}
                                    <div
                                        className="absolute inset-0 opacity-5 pointer-events-none"
                                        style={{ backgroundColor: selectedSkill.color }}
                                    />

                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                                        <div className="text-5xl p-4 bg-background rounded-2xl shadow-sm border border-border/50">
                                            {selectedSkill.icon}
                                        </div>
                                        <div>
                                            <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">
                                                {selectedSkill.name} Mastery
                                            </DialogTitle>
                                            <DialogDescription className="text-lg text-muted-foreground">
                                                Evidence of engineering depth and practical experience.
                                            </DialogDescription>
                                        </div>
                                    </div>
                                </DialogHeader>

                                <ScrollArea className="flex-1 p-6 md:p-8 bg-background/50">
                                    <Accordion type="single" collapsible defaultValue="code" className="space-y-6">

                                        {/* 1. Real Code Snippets */}
                                        <AccordionItem value="code" className="border rounded-xl px-2 shadow-sm bg-card">
                                            <AccordionTrigger className="text-lg font-semibold py-5 px-4 hover:no-underline hover:bg-muted/50 rounded-t-xl transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                                        <Code2 className="w-5 h-5" />
                                                    </div>
                                                    <span>Real Code Snippets</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2 pb-6 px-4 space-y-6">
                                                {selectedSkill.sections.codeSnippets.map((snippet, idx) => (
                                                    <div key={idx} className="bg-muted/30 rounded-xl p-5 border border-border/60">
                                                        <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                                                            <h4 className="font-bold text-base text-foreground">
                                                                {snippet.title}
                                                            </h4>
                                                            <Badge variant="secondary" className="text-xs font-mono">Snippet</Badge>
                                                        </div>

                                                        <p className="text-sm text-muted-foreground mb-4 font-medium">
                                                            <span className="text-primary/70 uppercase text-xs tracking-wider mr-2">Problem:</span>
                                                            {snippet.problem}
                                                        </p>

                                                        <div className="relative group">
                                                            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm font-mono my-3 border border-slate-800 shadow-inner">
                                                                {snippet.code}
                                                            </pre>
                                                        </div>

                                                        <div className="flex items-start gap-2 mt-4 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/10 p-3 rounded-lg border border-emerald-100 dark:border-emerald-800/30">
                                                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                                                            <span className="font-medium">Why: {snippet.why}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* 2. Architecture / Design */}
                                        <AccordionItem value="architecture" className="border rounded-xl px-2 shadow-sm bg-card">
                                            <AccordionTrigger className="text-lg font-semibold py-5 px-4 hover:no-underline hover:bg-muted/50 rounded-t-xl transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                        <Layers className="w-5 h-5" />
                                                    </div>
                                                    <span>Architecture & Design</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2 pb-6 px-4">
                                                <div className="prose dark:prose-invert max-w-none">
                                                    <h4 className="text-lg font-bold mb-3 text-foreground">{selectedSkill.sections.architecture.title}</h4>
                                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                                        {selectedSkill.sections.architecture.content}
                                                    </p>
                                                    {selectedSkill.sections.architecture.diagram && (
                                                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl font-mono text-sm whitespace-pre overflow-x-auto border-l-4 border-purple-500 shadow-sm">
                                                            {selectedSkill.sections.architecture.diagram}
                                                        </div>
                                                    )}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* 3. Performance Optimizations */}
                                        <AccordionItem value="performance" className="border rounded-xl px-2 shadow-sm bg-card">
                                            <AccordionTrigger className="text-lg font-semibold py-5 px-4 hover:no-underline hover:bg-muted/50 rounded-t-xl transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                                                        <Zap className="w-5 h-5" />
                                                    </div>
                                                    <span>Performance Optimizations</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2 pb-6 px-4 space-y-4">
                                                {selectedSkill.sections.performance.map((perf, idx) => (
                                                    <div key={idx} className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-900/10 border border-amber-100 dark:border-amber-800/30">
                                                        <div className="mt-1 bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0 shadow-sm">
                                                            <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                                        </div>
                                                        <div>
                                                            <h4 className="font-bold text-foreground mb-1">{perf.title}</h4>
                                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                                {perf.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>

                                        {/* 4. Mistakes & Fixes */}
                                        <AccordionItem value="mistakes" className="border rounded-xl px-2 shadow-sm bg-card">
                                            <AccordionTrigger className="text-lg font-semibold py-5 px-4 hover:no-underline hover:bg-muted/50 rounded-t-xl transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                                                        <Bug className="w-5 h-5" />
                                                    </div>
                                                    <span>Mistakes & Lessons (Honesty)</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pt-2 pb-6 px-4 space-y-6">
                                                {selectedSkill.sections.mistakes.map((mistake, idx) => (
                                                    <div key={idx} className="border-l-4 border-red-500 pl-6 py-2">
                                                        <h4 className="font-bold text-xl mb-4 text-foreground">"{mistake.title}"</h4>

                                                        <div className="grid gap-6 md:grid-cols-2">
                                                            <div className="space-y-4">
                                                                <div className="bg-red-50 dark:bg-red-900/10 p-4 rounded-lg border border-red-100 dark:border-red-900/20">
                                                                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-2">The Mistake</span>
                                                                    <p className="text-sm text-foreground/80">{mistake.error}</p>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">Discovery</span>
                                                                    <p className="text-sm text-muted-foreground">{mistake.discovery}</p>
                                                                </div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg border border-emerald-100 dark:border-emerald-900/20">
                                                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">The Fix</span>
                                                                    <p className="text-sm text-foreground/80">{mistake.fix}</p>
                                                                </div>
                                                                <div className="bg-secondary/50 p-4 rounded-lg">
                                                                    <span className="text-xs font-bold uppercase tracking-wider text-primary/70 block mb-1">Key Lesson</span>
                                                                    <p className="text-sm italic text-foreground">"{mistake.lesson}"</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </AccordionContent>
                                        </AccordionItem>

                                    </Accordion>
                                </ScrollArea>
                            </DialogContent>
                        </Dialog>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default SkillProof;
