"use client";

import { useEffect, useState, useCallback } from "react";
import { GLITCH_CHARS } from "@/app/constants/data";
import { cn } from "@/app/lib/utils";

interface GlitchMorphTextProps {
  texts: string[];
  className?: string;
  as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p";
  displayDuration?: number; // How long to show each text before morphing (ms)
  morphDuration?: number; // How long the morph effect takes (ms)
}

type MorphState = "typing" | "displaying" | "deleting" | "waiting";

export function GlitchMorphText({
  texts,
  className,
  as: Component = "div",
  displayDuration = 3000, // Show text for 3 seconds
  morphDuration = 1500, // Morph effect takes 1.5 seconds
}: GlitchMorphTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [morphState, setMorphState] = useState<MorphState>("waiting");

  const currentTargetText = texts[currentTextIndex];
  const nextTextIndex = (currentTextIndex + 1) % texts.length;

  // Glitch type effect - gradually reveals the text with glitch characters
  const glitchType = useCallback(
    (targetText: string, onComplete: () => void) => {
      const chars = GLITCH_CHARS;
      const length = targetText.length;
      let frame = 0;
      const totalFrames = Math.floor(morphDuration / 16); // ~60fps
      const charRevealFrames = Math.floor(totalFrames / length);

      const queue: {
        char: string;
        finalChar: string;
        revealAt: number;
        isRevealed: boolean;
      }[] = [];

      // Initialize queue with random glitch characters
      for (let i = 0; i < length; i++) {
        queue.push({
          char: chars[Math.floor(Math.random() * chars.length)],
          finalChar: targetText[i],
          revealAt: i * charRevealFrames + Math.floor(Math.random() * 10),
          isRevealed: false,
        });
      }

      const animate = () => {
        let output = "";
        let allRevealed = true;

        for (let i = 0; i < length; i++) {
          const item = queue[i];

          if (frame >= item.revealAt) {
            // Time to reveal this character
            if (!item.isRevealed) {
              // Random chance to glitch before settling
              if (Math.random() < 0.3 && frame < item.revealAt + 5) {
                item.char = chars[Math.floor(Math.random() * chars.length)];
              } else {
                item.char = item.finalChar;
                item.isRevealed = true;
              }
            }
            output += item.char;
          } else {
            // Still in glitch phase
            allRevealed = false;
            if (Math.random() < 0.4) {
              item.char = chars[Math.floor(Math.random() * chars.length)];
            }
            output += item.char;
          }
        }

        setDisplayText(output);
        frame++;

        if (!allRevealed || frame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final text is correct
          setDisplayText(targetText);
          onComplete();
        }
      };

      animate();
    },
    [morphDuration]
  );

  // Glitch delete effect - gradually removes text with glitch characters
  const glitchDelete = useCallback(
    (startText: string, onComplete: () => void) => {
      const chars = GLITCH_CHARS;
      const length = startText.length;
      let frame = 0;
      const totalFrames = Math.floor(morphDuration / 16);
      const charDeleteFrames = Math.floor(totalFrames / length);

      // Track which characters are still visible
      const visibleChars: { char: string; deleteAt: number }[] = [];
      for (let i = 0; i < length; i++) {
        visibleChars.push({
          char: startText[i],
          deleteAt: (length - 1 - i) * charDeleteFrames + Math.floor(Math.random() * 10),
        });
      }

      const animate = () => {
        let output = "";
        let allDeleted = true;

        for (let i = 0; i < length; i++) {
          const item = visibleChars[i];

          if (frame >= item.deleteAt) {
            // Character is deleted - replace with glitch or space
            if (frame < item.deleteAt + 3) {
              output += chars[Math.floor(Math.random() * chars.length)];
            }
            // Otherwise, don't add anything (deleted)
          } else {
            // Character still visible but might glitch
            allDeleted = false;
            if (Math.random() < 0.3) {
              output += chars[Math.floor(Math.random() * chars.length)];
            } else {
              output += item.char;
            }
          }
        }

        setDisplayText(output);
        frame++;

        if (!allDeleted || frame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          setDisplayText("");
          onComplete();
        }
      };

      animate();
    },
    [morphDuration]
  );

  // Main morph loop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const runMorphCycle = () => {
      // Step 1: Type the current text
      setMorphState("typing");
      glitchType(currentTargetText, () => {
        // Step 2: Display for a while
        setMorphState("displaying");
        timeoutId = setTimeout(() => {
          // Step 3: Delete the text
          setMorphState("deleting");
          glitchDelete(currentTargetText, () => {
            // Step 4: Move to next text
            setCurrentTextIndex(nextTextIndex);
            setMorphState("waiting");
          });
        }, displayDuration);
      });
    };

    // Start the cycle
    if (morphState === "waiting") {
      runMorphCycle();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    currentTargetText,
    currentTextIndex,
    nextTextIndex,
    morphState,
    glitchType,
    glitchDelete,
    displayDuration,
  ]);

  return (
    <Component className={cn("relative", className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </Component>
  );
}
