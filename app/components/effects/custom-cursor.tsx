"use client";

import { useEffect, useRef } from "react";

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    let targetScale = 1;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const animateCursor = () => {
      cursor.x = lerp(cursor.x, mouse.x, 0.12);
      cursor.y = lerp(cursor.y, mouse.y, 0.12);

      const targetSize = isHovering ? 56 : 40;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%) scale(${targetScale})`;
        cursorRef.current.style.width = `${targetSize}px`;
        cursorRef.current.style.height = `${targetSize}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    const addHover = () => {
      isHovering = true;
      targetScale = 1.3;
    };
    
    const removeHover = () => {
      isHovering = false;
      targetScale = 1;
    };

    const setupHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, .project-item-trigger, [role='button'], input, textarea, select"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    setTimeout(setupHoverListeners, 500);
    
    const observer = new MutationObserver(() => {
      setupHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove);
    const animId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Merkez nokta - daha belirgin */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[6px] w-[6px] rounded-full bg-white"
      />
      {/* Dış halka - daha belirgin border */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/80 bg-white/5 backdrop-blur-sm transition-[width,height] duration-200"
      />
    </>
  );
}
