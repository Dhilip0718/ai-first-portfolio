"use client";

import { useReducedMotion } from "framer-motion";
import { Linkedin, Mail, User, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const COPY = {
  greeting: "Hi, I am Dhilip",
  name: "Dhilip",
  title: "Senior Full Stack Software Engineer",
  subtitle:
    "I build high-performance web applications and distributed systems—React, TypeScript, GraphQL, and Next.js—plus AI/developer tooling (MCP, Python) with strong DevOps and design-system delivery.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Get In Touch",
  codeFile: "developer.ts",
  skills: ["React", "TypeScript", "Next.js", "Python", "MCP"] as const,
  passion: "Building user-centric software at scale",
};

const INITIAL_TRANSFORM =
  "perspective(800px) rotateX(-15deg) translateY(-8px) translateZ(0px)";
const INITIAL_GLOW = "0 0 80px 6px rgba(14, 165, 233, 0.3)";

function updateCardStyle(scrollY: number): { transform: string; boxShadow: string } {
  const maxScroll = 400;
  const progress = Math.min(scrollY / maxScroll, 1);
  const rotateX = Math.round(-15 * (1 - progress) * 10) / 10;
  const translateY = Math.round(-8 * (1 - progress) * 10) / 10;
  const glowIntensity = Math.round(80 * (1 - progress * 0.5));
  const glowSpread = Math.round(6 * (1 - progress * 0.3) * 10) / 10;
  const glowOpacity = Math.round((0.3 - progress * 0.15) * 100) / 100;
  return {
    transform: `perspective(800px) rotateX(${rotateX}deg) translateY(${translateY}px) translateZ(0px)`,
    boxShadow: `0 0 ${glowIntensity}px ${glowSpread}px rgba(14, 165, 233, ${glowOpacity})`,
  };
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [cardStyle, setCardStyle] = useState({
    transform: INITIAL_TRANSFORM,
    boxShadow: INITIAL_GLOW,
  });

  useEffect(() => {
    if (reduceMotion) {
      setCardStyle({
        transform: "none",
        boxShadow: "0 0 40px rgba(14, 165, 233, 0.15)",
      });
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setCardStyle(updateCardStyle(window.scrollY));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reduceMotion]);

  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-heading"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 pb-28 pt-8 md:px-8 md:pb-24 md:pt-12"
      >
        <div
          className="relative z-20 w-full max-w-[1400px] overflow-hidden rounded-4xl border border-sky-500/15 bg-linear-to-br from-slate-800 via-slate-950 to-slate-800 transition-shadow duration-200 will-change-transform md:rounded-[3rem]"
          style={{
            transform: reduceMotion ? undefined : cardStyle.transform,
            boxShadow: cardStyle.boxShadow,
            minHeight: "min(calc(100vh - 12rem), 900px)",
          }}
        >
          <div className="grid w-full max-w-[1200px] grid-cols-1 gap-12 px-8 py-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:px-16 md:py-16 lg:items-center">
            <div className="text-center md:text-left">
              <span className="mb-3 inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-400">
                {COPY.greeting}
              </span>
              <h1
                id="hero-heading"
                className="mb-2 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-tight text-slate-50"
              >
                {COPY.name}
              </h1>
              <h2 className="mb-4 bg-linear-to-br from-sky-500 to-sky-400 bg-clip-text text-[clamp(1.25rem,3vw,1.75rem)] font-semibold text-transparent">
                {COPY.title}
              </h2>
              <p className="mx-auto mb-8 max-w-[500px] text-[1.1rem] leading-relaxed text-slate-400 md:mx-0">
                {COPY.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#projects"
                  className="rounded-xl bg-linear-to-br from-sky-500 to-sky-400 px-8 py-3.5 text-base font-semibold text-slate-950 shadow-[0_4px_20px_rgba(14,165,233,0.3)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(14,165,233,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  {COPY.ctaPrimary}
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border-2 border-sky-500/50 bg-transparent px-8 py-3.5 text-base font-semibold text-slate-50 transition-colors hover:border-sky-400 hover:bg-sky-500/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  {COPY.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="w-full max-w-full md:rotate-2">
                <div className="overflow-hidden rounded-2xl border border-sky-400/10 bg-[#0d1117] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_40px_rgba(14,165,233,0.1)]">
                  <div className="flex items-center gap-2 border-b border-sky-400/10 bg-[#161b22] px-4 py-3">
                    <span className="size-3 rounded-full bg-[#ff5f56]" aria-hidden />
                    <span className="size-3 rounded-full bg-[#ffbd2e]" aria-hidden />
                    <span className="size-3 rounded-full bg-[#27ca40]" aria-hidden />
                    <span className="ml-auto font-mono text-xs text-slate-400">
                      {COPY.codeFile}
                    </span>
                  </div>
                  <pre className="m-0 overflow-x-auto p-6 font-mono text-[0.875rem] leading-relaxed text-slate-200 sm:p-6 sm:text-[0.875rem] max-[480px]:p-4 max-[480px]:text-xs">
                    <code>
                      <span className="text-[#ff7b72]">const</span>{" "}
                      <span className="text-[#79c0ff]">developer</span>{" "}
                      <span className="text-[#ff7b72]">=</span> {"{"}
                      {"\n"}
                      {"  "}
                      <span className="text-[#d2a8ff]">name</span>
                      {": "}
                      <span className="text-[#a5d6ff]">&apos;{COPY.name}&apos;</span>,
                      {"\n"}
                      {"  "}
                      <span className="text-[#d2a8ff]">skills</span>
                      {": ["}
                      {"\n"}
                      {COPY.skills.map((skill, i) => (
                        <span key={skill}>
                          {"    "}
                          <span className="text-[#a5d6ff]">&apos;{skill}&apos;</span>
                          {i < COPY.skills.length - 1 ? "," : ""}
                          {"\n"}
                        </span>
                      ))}
                      {"  "}],{"\n"}
                      {"  "}
                      <span className="text-[#d2a8ff]">passion</span>
                      {": "}
                      <span className="text-[#a5d6ff]">
                        &apos;{COPY.passion}&apos;
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="text-[#7ee787]">createAwesome</span>
                      {": () => "}
                      <span className="text-[#ff7b72]">true</span>
                      {"\n"}
                      {"};"}
                    </code>
                  </pre>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/15 px-4 py-2 backdrop-blur-md md:bottom-8 md:left-auto md:-right-2 md:translate-x-0">
                <Zap className="size-4 text-sky-400" aria-hidden />
                <span className="whitespace-nowrap text-sm font-medium text-sky-400">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-sky-500/10 bg-slate-900/95 px-4 py-3 backdrop-blur-md md:px-8"
        role="region"
        aria-label="Quick links"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-slate-700 to-slate-800 text-sky-400/50">
            <User className="size-5 p-1" aria-hidden />
          </div>
          <span className="hidden text-sm font-medium text-slate-50 sm:inline">
            {COPY.name}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:dhilipram@gmail.com"
            className="flex size-9 items-center justify-center text-slate-300 transition-colors hover:text-sky-400"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dhilip-sriram-rk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center text-slate-300 transition-colors hover:text-sky-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </>
  );
}
