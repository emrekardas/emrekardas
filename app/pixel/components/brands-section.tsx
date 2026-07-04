"use client";

import { useMemo, useState } from "react";
import { pixelBrands, toEmbedUrl } from "../lib/data";
import { useLang } from "../lib/i18n";

export function BrandsSection() {
  const { t } = useLang();
  const [activeId, setActiveId] = useState<string | null>(null);

  const half = Math.ceil(pixelBrands.length / 2);
  const leftBrands = pixelBrands.slice(0, half);
  const rightBrands = pixelBrands.slice(half);

  const active = useMemo(
    () => pixelBrands.find((b) => b.id === activeId) ?? null,
    [activeId]
  );

  const embedUrl = active?.videoUrl ? toEmbedUrl(active.videoUrl) : null;

  return (
    <section className="brands-section" aria-labelledby="px-brands">
      <h2 id="px-brands" className="px-h2">
        {t({ tr: "> stack & işbirlikleri", en: "> stack & collabs" })}
      </h2>

      <div className="brands-layout">
        <div className="brands-col brands-col-left">
          {leftBrands.map((brand) => (
            <BrandChip
              key={brand.id}
              label={brand.label}
              isActive={brand.id === activeId}
              onClick={() => setActiveId(brand.id)}
            />
          ))}
        </div>

        <div className="phone-mockup" aria-live="polite">
          <div className="phone-embed">
            {active && embedUrl ? (
              <iframe
                src={embedUrl}
                title={active.label}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : active && active.videoUrl ? (
              <div className="phone-placeholder">
                <div>{active.label}</div>
                <a
                  className="phone-fallback"
                  href={active.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t({ tr: "Videoyu aç", en: "Open video" })}
                </a>
              </div>
            ) : (
              <div className="phone-placeholder">
                {t({
                  tr: "Bir logoya tıkla — demosu burada oynar.",
                  en: "Click a logo — its demo plays here.",
                })}
              </div>
            )}
          </div>
        </div>

        <div className="brands-col brands-col-right">
          {rightBrands.map((brand) => (
            <BrandChip
              key={brand.id}
              label={brand.label}
              isActive={brand.id === activeId}
              onClick={() => setActiveId(brand.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandChip({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`brand-chip${isActive ? " is-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
