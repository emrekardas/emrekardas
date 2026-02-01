"use client";

import { cn } from "@/app/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/emrekardas" },
    { name: "LinkedIn", href: "https://linkedin.com/in/emrekardas" },
  ];

  return (
    <footer
      className={cn(
        "flex h-[60vh] flex-col items-center justify-center border-t border-[var(--line-color)] px-6 text-center mix-blend-difference text-white",
        className
      )}
    >
      <h2 className="mb-10 font-display text-4xl font-bold md:text-6xl">
        Let&apos;s build the <br /> impossible.
      </h2>
      <a
        href="mailto:eekardas@gmail.com"
        className="border-b border-white/20 pb-2 font-display text-xl transition-all hover:border-white md:text-3xl"
      >
        eekardas@gmail.com
      </a>
      <div className="mt-24 flex gap-12 font-mono text-xs uppercase tracking-widest opacity-40">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
