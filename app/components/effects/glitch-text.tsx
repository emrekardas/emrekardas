"use client";

import { useEffect, useState } from "react";
import { GLITCH_CHARS } from "@/app/constants/data";
import { GlitchTextProps } from "@/app/types";
import { cn } from "@/app/lib/utils";

export function GlitchText({
  text,
  className,
  as: Component = "div",
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let frame = 0;
    const queue: {
      from: string;
      to: string;
      start: number;
      end: number;
      char: string;
    }[] = [];
    const length = text.length;

    for (let i = 0; i < length; i++) {
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      queue.push({ from: "", to: text[i], start, end, char: "" });
    }

    const update = () => {
      let output = "";
      let complete = 0;

      for (let i = 0; i < length; i++) {
        const { to, start, end, char } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char =
              GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
          output += queue[i].char;
        } else {
          output += "";
        }
      }

      setDisplayText(output);

      if (complete < length) {
        frame++;
        requestAnimationFrame(update);
      }
    };

    update();
  }, [text]);

  return <Component className={cn(className)}>{displayText}</Component>;
}
