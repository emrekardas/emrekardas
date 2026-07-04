"use client";

import { useLang } from "../lib/i18n";

const socials = [
  { label: "GitHub", href: "https://github.com/emrekardas", short: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emrekardas", short: "IN" },
  { label: "Twitter", href: "https://twitter.com/emrekardas", short: "X" },
  { label: "Instagram", href: "https://www.instagram.com/emrekardas", short: "IG" },
];

export function FooterContact() {
  const { t } = useLang();
  return (
    <footer className="footer-contact">
      <a className="footer-mail" href="mailto:eekardas@gmail.com">
        <span aria-hidden="true">✉</span>
        eekardas@gmail.com
      </a>
      <nav
        className="footer-socials"
        aria-label={t({ tr: "Sosyal medya", en: "Social media" })}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
          >
            {s.short}
          </a>
        ))}
      </nav>
    </footer>
  );
}
