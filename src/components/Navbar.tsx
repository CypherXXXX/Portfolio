"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { DATA } from "@/lib/data";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuVariants = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        },
    } as any;

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
    };

    const mobileLinkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } },
    } as any;

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 rounded-full transition-all duration-500 ${scrolled
                    ? "py-3 px-6 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    : "py-4 px-6 bg-transparent border border-transparent"
                    }`}
            >
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tighter z-50 text-white relative group font-syne">
                        <span className="relative z-10">ARD</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <nav className="hidden md:flex gap-8 items-center z-50 text-white">
                        <a
                            href="/___Ankit_Resume___.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 bg-white/10 hover:bg-white hover:text-black border border-white/10 rounded-full transition-all duration-300 text-xs font-mono uppercase tracking-widest hover:scale-105 active:scale-95"
                        >
                            Resume
                        </a>
                        {["Projects", "Skills", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative group text-xs font-mono uppercase tracking-widest hover:text-purple-400 transition-colors"
                            >
                                <span className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                                {item}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden z-50 text-white hover:scale-110 transition-transform active:scale-95 p-2 bg-white/5 rounded-full border border-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-black origin-top z-40 flex flex-col justify-center items-center"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-8 text-center"
                        >
                            {[
                                { label: "Resume", href: "/___Ankit_Resume___.pdf", external: true },
                                { label: "Projects", href: "#projects" },
                                { label: "Skills", href: "#skills" },
                                { label: "Contact", href: "#contact" },
                            ].map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <a
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                            className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-white/50 tracking-tighter hover:to-white transition-all"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div
                            variants={{ initial: { opacity: 0 }, open: { opacity: 1, transition: { delay: 1 } }, exit: { opacity: 0 } }}
                            className="absolute bottom-10 text-white/40 text-sm font-mono"
                        >
                            {DATA.profile.contact.email}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
