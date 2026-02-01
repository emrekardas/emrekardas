"use client";

import { PROJECTS } from "@/app/constants/data";
import { cn } from "@/app/lib/utils";

interface ProjectsSectionProps {
  className?: string;
}

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <section className={cn("py-32", className)}>
      <div className="mb-16 px-6 mix-blend-difference text-white md:px-24">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-40">
          <span className="h-[1px] w-4 bg-white/40"></span>
          Selected Works
        </span>
      </div>

      <div>
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.url}
            className="project-item-trigger group relative block border-b border-[var(--line-color)] px-6 py-16 transition-colors hover:bg-white/[0.02] md:px-24"
            data-img={project.img}
          >
            <div className="pointer-events-none flex flex-col mix-blend-difference text-white md:flex-row md:items-center md:justify-between">
              <h2 className="font-display text-5xl font-bold outline-text transition-all duration-500 ease-out group-hover:translate-x-6 group-hover:text-[var(--text-main)] md:text-8xl">
                {project.title}
              </h2>
              <span className="mt-2 rounded-full border border-current px-3 py-1 font-mono text-xs uppercase tracking-widest opacity-40 transition-opacity group-hover:opacity-100 md:mt-0 md:text-sm">
                {project.category}
              </span>
            </div>
            <div className="pointer-events-none mt-4 flex gap-4 font-mono text-xs opacity-30 mix-blend-difference text-white">
              {project.tags.map((tag, i) => (
                <span key={i}>
                  {tag}
                  {i < project.tags.length - 1 ? " // " : ""}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
