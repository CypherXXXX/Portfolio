"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/5 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="z-10 text-center w-full max-w-7xl px-4">
                <div className="mb-8 w-full flex justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[clamp(1rem,4.5vw,3.5rem)] leading-none font-black tracking-wider md:tracking-widest uppercase text-transparent bg-clip-text bg-linear-to-b from-white to-white/60 mb-6 font-orbitron drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] whitespace-nowrap"
                    >
                        {DATA.profile.name}
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex justify-center px-2"
                >
                    <div className="relative px-5 py-2.5 md:px-8 md:py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)] group overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] animate-[shimmer_3s_infinite]" />
                        <span className="text-base md:text-2xl text-purple-200 font-rajdhani font-semibold tracking-[0.15em] md:tracking-[0.2em] uppercase relative z-10 flex items-center gap-2 md:gap-3">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
                            {DATA.profile.role}
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-500 animate-pulse delay-75 shadow-[0_0_10px_#22d3ee]" />
                        </span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer z-50 group"
                onClick={() => {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <div className="flex flex-col items-center gap-2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="p-3 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm group-hover:border-white/30 transition-colors"
                    >
                        <ArrowDown className="w-5 h-5 text-white/70" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
