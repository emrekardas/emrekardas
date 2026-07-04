"use client";

import { useLang } from "../lib/i18n";

export function Hero() {
  const { t } = useLang();
  return (
    <header className="hero">
      <span className="hero-kicker">/pixel</span>
      <h1 className="hero-title">
        emre.kardas
        <span className="caret" aria-hidden="true" />
      </h1>
      <p className="hero-sub">
        {t({
          tr: "Freelance full-stack geliştirici. Terminalde yaşar, pixel'lerle oynar. Startup'lara 4 haftada canlıya çıkan ürünler kurar.",
          en: "Freelance full-stack developer. Lives in the terminal, plays with pixels. Ships products for startups in ~4 weeks.",
        })}
      </p>
    </header>
  );
}
