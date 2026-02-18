"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <section className="py-20 md:py-32 w-full px-4 md:px-10 max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-12 md:mb-16">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    transition={{ duration: 1 }}
                    className="h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"
                />
                <h2 className="text-2xl md:text-4xl font-rajdhani font-bold text-white tracking-widest uppercase shrink-0">
                    Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Journey</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-px bg-white/10 grow"
                />
            </div>

            <div className="relative space-y-12 md:space-y-16 py-6 md:py-10">
                <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-purple-500/30 to-transparent md:-translate-x-1/2" />

                {DATA.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row items-center gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        <div className="absolute left-3 md:left-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#0a0a0a] border-4 border-purple-500 shadow-[0_0_15px_#a855f7] -translate-x-[9px] md:-translate-x-1/2 z-20" />

                        <div className="hidden md:block w-full md:w-1/2" />

                        <div className="w-full md:w-1/2 pl-10 md:pl-0 pr-0 md:pr-12 md:box-border">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] group relative overflow-hidden md:mx-12">
                                <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide mb-2 group-hover:text-purple-300 transition-colors">
                                        {exp.company}
                                    </h3>

                                    <div className="flex flex-col gap-1 mb-4 md:mb-6 border-l-2 border-purple-500/50 pl-4">
                                        <h4 className="text-base md:text-lg text-cyan-400 font-rajdhani font-bold tracking-wider uppercase">
                                            {exp.role}
                                        </h4>
                                        <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="text-gray-300 leading-relaxed text-sm font-rajdhani font-medium tracking-wide">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
