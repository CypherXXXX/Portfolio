import type { Metadata } from "next";
import { Orbitron, Rajdhani, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Ranjan Das | Full Stack & AI Engineer",
  description: "Portfolio of Ankit Ranjan Das - Full Stack & AI Engineer. Cyber-Minimalism meets Fluid Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        <SmoothScroll>
          <AnimatedBackground />
          <div className="grain-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
