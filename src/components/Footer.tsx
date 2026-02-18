"use client";

import { DATA } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="w-full py-20 px-4 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm border-t border-white/5">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-10 text-center tracking-tighter text-white px-2">
                Let&apos;s Build the Future
            </h2>

            <div className="flex gap-8 mb-10">
                <a
                    href={DATA.profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    <Github className="w-6 h-6" />
                </a>
                <a
                    href={DATA.profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href={`mailto:${DATA.profile.contact.email}`}
                    className="p-4 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 active:scale-95"
                >
                    <Mail className="w-6 h-6" />
                </a>
            </div>

            <p className="text-gray-500 font-mono text-sm">
                © {new Date().getFullYear()} {DATA.profile.name}. All rights reserved.
            </p>
        </footer>
    );
}
