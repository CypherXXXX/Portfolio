"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function SkillsBento() {
    const categories = [
        { name: "Languages", skills: DATA.skills.languages },
        { name: "AI Engineering", skills: DATA.skills.ai },
        { name: "Frontend", skills: DATA.skills.frontend },
        { name: "Backend", skills: DATA.skills.backend },
        { name: "DevOps & Tools", skills: DATA.skills.devops },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 w-full px-4 md:px-10 max-w-7xl mx-auto relative">
            <div className="flex items-center gap-4 mb-16">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    transition={{ duration: 1 }}
                    className="h-[2px] bg-cyan-500 shadow-[0_0_10px_#22d3ee]"
                />
                <h2 className="text-2xl md:text-4xl font-rajdhani font-bold text-white tracking-widest uppercase shrink-0">
                    Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">Arsenal</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-px bg-white/10 grow"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`
                            p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 
                            hover:border-cyan-500/50 transition-all duration-300 
                            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group flex flex-col h-full
                            ${index === 3 || index === 4 ? "lg:col-span-1.5" : ""} 
                        `}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] group-hover:animate-pulse" />
                            <h3 className="text-2xl font-bold text-white font-orbitron tracking-wider">
                                {category.name}
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {category.skills?.map((skill) => (
                                <motion.span
                                    key={skill}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm hover:text-white hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 cursor-default font-rajdhani font-semibold tracking-wide"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
