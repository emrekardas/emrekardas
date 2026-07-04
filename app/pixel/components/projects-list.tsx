"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { pixelProjects } from "../lib/data";
import { useLang } from "../lib/i18n";

export function ProjectsList() {
  const { t } = useLang();

  return (
    <section aria-labelledby="px-projects">
      <h2 id="px-projects" className="px-h2">
        {t({ tr: "> projeler", en: "> projects" })}
      </h2>

      <nav
        className="projects-list"
        aria-label={t({ tr: "Proje listesi", en: "Project list" })}
      >
        {pixelProjects.map((project, index) => {
          const isLast = index === pixelProjects.length - 1;
          return (
            <div className="project-stage" key={project.slug}>
              <Link
                href={project.href}
                className="project-link"
                onDragStart={(e) => e.preventDefault()}
              >
                <div>
                  <div className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="project-name">{project.name}</div>
                  <div className="project-meta">{project.stack}</div>
                </div>
                <span className="project-todo">
                  {t({ tr: "// demo →", en: "// demo →" })}
                </span>
              </Link>
              {isLast && <Sprite />}
            </div>
          );
        })}
      </nav>
    </section>
  );
}

function Sprite() {
  const spriteRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });
  const [falling, setFalling] = useState(false);

  const resetStyles = useCallback(() => {
    const el = spriteRef.current;
    if (!el) return;
    el.style.position = "";
    el.style.left = "";
    el.style.top = "";
    el.style.right = "";
    el.style.bottom = "";
  }, []);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const el = spriteRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      offsetRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      draggingRef.current = true;
      el.setPointerCapture(event.pointerId);
      el.classList.add("is-held");

      el.style.position = "fixed";
      el.style.left = `${rect.left}px`;
      el.style.top = `${rect.top}px`;
      el.style.right = "auto";
      el.style.bottom = "auto";
    },
    []
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      const el = spriteRef.current;
      if (!el) return;
      el.style.left = `${event.clientX - offsetRef.current.x}px`;
      el.style.top = `${event.clientY - offsetRef.current.y}px`;
    },
    []
  );

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      const el = spriteRef.current;
      if (!el) return;
      el.classList.remove("is-held");
      try {
        el.releasePointerCapture(event.pointerId);
      } catch {}

      setFalling(true);

      const viewportBottom = window.innerHeight + 40;
      el.style.top = `${viewportBottom}px`;

      window.setTimeout(() => {
        resetStyles();
        setFalling(false);
      }, 550);
    },
    [resetStyles]
  );

  useEffect(() => {
    return () => {
      resetStyles();
    };
  }, [resetStyles]);

  return (
    <div
      ref={spriteRef}
      className={`project-sprite${falling ? " is-falling" : ""}`}
      role="img"
      aria-label="Sürüklenebilir pixel karakter"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        width: 96,
        height: 96,
      }}
    >
      <svg
        viewBox="0 0 16 16"
        width="100%"
        height="100%"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect width="16" height="16" fill="transparent" />
        <rect x="5" y="2" width="6" height="5" fill="#f5d491" />
        <rect x="4" y="3" width="1" height="3" fill="#3d2f1f" />
        <rect x="11" y="3" width="1" height="3" fill="#3d2f1f" />
        <rect x="6" y="4" width="1" height="1" fill="#0d1117" />
        <rect x="9" y="4" width="1" height="1" fill="#0d1117" />
        <rect x="7" y="6" width="2" height="1" fill="#b1464a" />
        <rect x="4" y="7" width="8" height="5" fill="#22d3ee" />
        <rect x="4" y="7" width="8" height="1" fill="#0d1117" />
        <rect x="5" y="12" width="2" height="3" fill="#30363d" />
        <rect x="9" y="12" width="2" height="3" fill="#30363d" />
        <rect x="3" y="9" width="1" height="3" fill="#22d3ee" />
        <rect x="12" y="9" width="1" height="3" fill="#22d3ee" />
        <rect x="2" y="10" width="2" height="2" fill="#f59e0b" />
        <rect x="2" y="10" width="2" height="1" fill="#ef4444" />
      </svg>
    </div>
  );
}
