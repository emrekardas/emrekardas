"use client";

import { GlitchMorphText } from "@/app/components/effects/glitch-morph-text";

export function HeroSection() {
  const heroTexts = ["EMRE KARDAS", "SOFTWARE ENGINEER"];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="relative z-10 mix-blend-difference text-white">
        <GlitchMorphText
          as="h1"
          texts={heroTexts}
          className="cursor-default text-[10vw] font-bold leading-none tracking-tighter md:text-[8vw]"
          displayDuration={3000}
          morphDuration={1200}
        />
      </div>

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 mix-blend-difference text-white">
        <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
          Scroll to Explore
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
