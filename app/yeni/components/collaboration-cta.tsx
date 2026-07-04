export function CollaborationCta() {
  return (
    <section
      id="iletisim"
      aria-labelledby="cta-heading"
      className="mx-auto max-w-4xl px-6 py-16 md:py-24"
    >
      <div className="rounded-2xl bg-[var(--yeni-subtle)] px-6 py-14 text-center md:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="relative mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16 2v4M8 2v4M3 10h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect x="7" y="14" width="3" height="3" rx="1" fill="currentColor" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full border-2 border-[var(--yeni-subtle)] bg-amber-400" />
        </div>

        <h2
          id="cta-heading"
          className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-tight text-[var(--yeni-fg)] md:text-[40px] md:leading-[1.15]"
        >
          Birlikte harika bir şey inşa edelim.
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--yeni-muted)] md:text-lg">
          Ne inşa ettiğini duymak için sabırsızlanıyorum. Yaz bana, gerçekten
          özel bir şey çıkaralım.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:eekardas@gmail.com"
            className="inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] px-8 py-4 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)] motion-reduce:transform-none"
          >
            İletişime geç
          </a>
          <a
            href="https://cal.com/emrekardas/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-[var(--yeni-border)] px-8 py-4 text-sm font-semibold text-[var(--yeni-fg)] transition-colors duration-200 hover:bg-[#d1d5db] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
          >
            Görüşme ayarla
          </a>
        </div>
      </div>
    </section>
  );
}
