const brands = [
  { name: "Vercel", mark: "▲" },
  { name: "Supabase", mark: "⚡" },
  { name: "Stripe", mark: "§" },
  { name: "Shopify", mark: "S" },
  { name: "Intercom", mark: "◉" },
  { name: "Linear", mark: "L" },
];

export function LogoWall() {
  return (
    <section
      aria-label="Çalıştığım şirketler ve entegrasyonlar"
      className="mx-auto max-w-6xl px-6 py-10 md:py-14"
    >
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--yeni-muted)]">
        Birlikte çalıştığım ekipler ve entegre ettiğim araçlar
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-70">
        {brands.map((b) => (
          <li
            key={b.name}
            className="flex items-center gap-2 text-[var(--yeni-muted)] transition-colors duration-200 hover:text-[var(--yeni-fg)]"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {b.mark}
            </span>
            <span className="text-sm font-semibold tracking-tight">
              {b.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
