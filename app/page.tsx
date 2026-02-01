"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import { BeamsBackground } from "@/app/components/effects/beams-background";
import { DistortionCanvas } from "@/app/components/effects/distortion-canvas";
import { Footer } from "@/app/components/layout/footer";
import { HeroSection } from "@/app/components/sections/hero-section";
import { ProjectsSection } from "@/app/components/sections/projects-section";

export default function Home() {
  const [isDarkMode] = useState(true);

  return (
    <div
      className={cn(
        "min-h-screen font-sans transition-colors duration-500",
        !isDarkMode && "light"
      )}
    >
      <BeamsBackground />
      <DistortionCanvas />

      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
}
