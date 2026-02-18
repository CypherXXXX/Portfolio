"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let mouseX = width / 2;
        let mouseY = height / 2;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        handleResize();

        const gridSize = 50;
        let time = 0;

        const draw = () => {
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, width, height);

            time += 0.005;

            ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
            ctx.lineWidth = 1;

            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            const yOffset = (time * 20) % gridSize;
            for (let y = yOffset; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            const spotlightRadius = width < 768 ? 300 : 600;
            const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, spotlightRadius);
            gradient.addColorStop(0, "rgba(34, 211, 238, 0.08)");
            gradient.addColorStop(0.4, "rgba(168, 85, 247, 0.05)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            ctx.globalCompositeOperation = "lighter";
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "source-over";

            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 bg-background">
            <canvas ref={canvasRef} className="absolute inset-0 block" />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, #050505 100%)",
                    opacity: 0.7
                }}
            />
        </div>
    );
}
