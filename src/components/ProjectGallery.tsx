"use client";

import { DATA } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function ProjectGallery() {
    return (
        <section id="projects" className="py-20 md:py-32 w-full px-4 md:px-10 max-w-7xl mx-auto relative">
            <div className="flex items-center gap-4 mb-16">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    transition={{ duration: 1 }}
                    className="h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"
                />
                <h2 className="text-2xl md:text-4xl font-rajdhani font-bold text-white tracking-widest uppercase shrink-0">
                    Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Projects</span>
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-px bg-white/10 grow"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {DATA.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group flex flex-col gap-6 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] hover:-translate-y-2"
                    >
                        <Link
                            href={project.links.demo || project.links.github}
                            target="_blank"
                            className="relative w-full aspect-video rounded-lg overflow-hidden block"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-white font-rajdhani font-bold text-lg flex items-center gap-2 border border-white/50 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors uppercase tracking-wider">
                                    View Project <ArrowUpRight className="w-5 h-5" />
                                </span>
                            </div>
                        </Link>

                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl font-bold text-white font-orbitron tracking-wide">{project.name}</h3>
                                <div className="flex gap-2">
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors border border-white/10"
                                    >
                                        <Github className="w-4 h-4" />
                                    </Link>
                                    {project.links.demo && (
                                        <Link
                                            href={project.links.demo}
                                            target="_blank"
                                            className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors border border-white/10"
                                        >
                                            <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed font-rajdhani font-medium tracking-wide">
                                {project.features[0]}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2 pt-4 border-t border-white/5">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-rajdhani font-bold uppercase tracking-wider text-cyan-200 bg-cyan-900/10 border border-cyan-500/20 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
