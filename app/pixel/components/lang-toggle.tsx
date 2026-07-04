"use client";

import { useLang } from "../lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Dili değiştir">
      <button
        type="button"
        className={lang === "tr" ? "is-active" : ""}
        onClick={() => setLang("tr")}
        aria-pressed={lang === "tr"}
      >
        TR
      </button>
      <button
        type="button"
        className={lang === "en" ? "is-active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
