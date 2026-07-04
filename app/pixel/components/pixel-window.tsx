"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../lib/i18n";

export function PixelWindow() {
  const { t } = useLang();
  const [hidden, setHidden] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(true);
  const windowRef = useRef<HTMLDivElement | null>(null);

  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  const onPointerDownTitle = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const el = windowRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      offsetRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      draggingRef.current = true;
      el.style.transition = "none";
      (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    },
    []
  );

  const onPointerMoveTitle = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      const el = windowRef.current;
      if (!el) return;
      const nextLeft = Math.max(
        8,
        Math.min(
          window.innerWidth - el.offsetWidth - 8,
          event.clientX - offsetRef.current.x
        )
      );
      const nextTop = Math.max(
        8,
        Math.min(
          window.innerHeight - 48,
          event.clientY - offsetRef.current.y
        )
      );
      el.style.left = `${nextLeft}px`;
      el.style.top = `${nextTop}px`;
    },
    []
  );

  const onPointerUpTitle = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = false;
      try {
        (event.currentTarget as HTMLElement).releasePointerCapture(
          event.pointerId
        );
      } catch {}
    },
    []
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !hidden) setHidden(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hidden]);

  return (
    <>
      <aside
        ref={windowRef}
        className={`pixel-window${hidden ? " is-hidden" : ""}`}
        aria-label={t({ tr: "Hakkımda penceresi", en: "About window" })}
      >
        <div
          className="pixel-titlebar"
          onPointerDown={onPointerDownTitle}
          onPointerMove={onPointerMoveTitle}
          onPointerUp={onPointerUpTitle}
          onPointerCancel={onPointerUpTitle}
        >
          <span className="pixel-titlebar-label">~/about.md</span>
          <div className="pixel-window-controls">
            <button
              type="button"
              className="pixel-control"
              aria-label={t({ tr: "Pencereyi kapat", en: "Close window" })}
              onClick={() => setHidden(true)}
            >
              ×
            </button>
          </div>
        </div>

        <div className="pixel-window-body">
          <div
            className="pixel-portrait"
            aria-hidden="true"
            style={{
              background:
                "repeating-linear-gradient(45deg, #1c222b 0 4px, #11161d 4px 8px)",
            }}
          />

          <button
            type="button"
            className="about-toggle"
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen((prev) => !prev)}
          >
            {t({ tr: "> HAKKIMDA", en: "> ABOUT" })}
          </button>

          <div className="about-panel" hidden={!aboutOpen}>
            <p>
              {t({
                tr: "Merhaba, ben Emre. Startup'lara 4 haftada canlıya çıkan mobil ve web ürünleri kuruyorum.",
                en: "Hey, I'm Emre. I ship production-ready mobile & web products for startups in ~4 weeks.",
              })}
            </p>
            <p>
              <strong>Stack: </strong>
              Next.js · React Native · TypeScript · Postgres
            </p>
          </div>
        </div>
      </aside>

      <AboutReopen hidden={hidden} onOpen={() => setHidden(false)} />
    </>
  );
}

function AboutReopen({
  hidden,
  onOpen,
}: {
  hidden: boolean;
  onOpen: () => void;
}) {
  const { t } = useLang();
  return (
    <button
      type="button"
      className={`about-reopen${hidden ? " is-visible" : ""}`}
      aria-label={t({ tr: "Hakkımda'yı aç", en: "Open About" })}
      onClick={onOpen}
    >
      <span className="about-reopen-dot" aria-hidden="true" />
      {t({ tr: "HAKKIMDA", en: "ABOUT" })}
    </button>
  );
}
