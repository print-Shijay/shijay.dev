"use client";

import { useEffect, useRef } from "react";

import Ticker from "@/components/Ticker";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  speed: number;
}

const stackMarquee = [
  { label: "Laravel", initial: "L" },
  { label: "React", initial: "R" },
  { label: "Next.js", initial: "N" },
  { label: "Tailwind", initial: "T" },
  { label: "Python", initial: "P" },
  { label: "Azure", initial: "A" },
  { label: "Docker", initial: "D" },
  { label: "GitHub", initial: "G" },
  { label: "FastAPI", initial: "F" },
  { label: "MySQL", initial: "M" },
];

const marqueeLoopItems = [
  ...stackMarquee.map((item) => ({ ...item, id: `${item.label}-first` })),
  ...stackMarquee.map((item) => ({ ...item, id: `${item.label}-second` })),
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let animationFrameId = 0;
    let elapsedTime = 0;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      const { clientWidth, clientHeight } = canvas;

      canvas.width = Math.floor(clientWidth * pixelRatio);
      canvas.height = Math.floor(clientHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * clientWidth,
        y: Math.random() * clientHeight * 0.75,
        r: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.004 + 0.002,
      }));
    };

    const draw = () => {
      const { clientWidth, clientHeight } = canvas;
      context.clearRect(0, 0, clientWidth, clientHeight);
      elapsedTime += 0.016;

      stars.forEach((star) => {
        const twinkle =
          star.opacity *
          (0.7 + 0.3 * Math.sin(elapsedTime * star.speed * 60 + star.x));

        context.beginPath();
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(200, 220, 255, ${twinkle})`;
        context.fill();
      });

      animationFrameId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-section border-b border-[var(--color-border)]"
    >
      <Ticker />

      <div className="hero-bg">
        <canvas ref={canvasRef} className="hero-stars" />
        <div className="planet-glow" />
        <div className="planet-arc" />
        <div className="horizon-glow" />
        <div className="horizon-line" />
        <div className="horizon-bloom" />
        <div className="grid-overlay" />
        <div className="vignette" />
      </div>

      <div className="hero-content mx-auto w-full max-w-6xl md:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-amber-border)] bg-[var(--color-amber-bg)] px-4 py-1.5">
          <span className="pulse-dot h-2 w-2 rounded-full bg-[var(--color-teal)]" />
          <span className="font-mono text-[11px] leading-[1.4] text-[var(--color-text)]">
            Available for freelance projects
          </span>
        </div>

        <h1 className="font-display max-w-4xl text-[clamp(32px,5vw,60px)] font-bold leading-[1.1] tracking-tight">
          Full-Stack Dev.
          <br />
          Code Hard, Ride Free.
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] leading-[1.7] text-[var(--color-text-muted)]">
          Ciejay from San Pablo, Laguna, Philippines. I build web apps with
          Laravel, React, and a pinch of AI.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-amber)] px-6 py-2.5 text-[13px] font-medium leading-[1.4] text-[var(--color-amber-text)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] px-6 py-2.5 text-[13px] font-medium leading-[1.4] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            Let&apos;s Work Together
          </a>
        </div>
      </div>

      <div className="logo-strip overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="marquee-track flex items-center py-4">
          {marqueeLoopItems.map((item) => (
            <div
              key={item.id}
              className="mx-3 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1.5"
            >
              <span className="font-mono inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-teal)] text-[11px] text-[var(--color-teal)]">
                {item.initial}
              </span>
              <span className="font-mono text-[11px] leading-[1.4] text-[var(--color-text-muted)]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
