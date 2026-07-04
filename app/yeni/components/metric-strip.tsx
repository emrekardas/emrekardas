const metrics = [
  { value: "50+", label: "Teslim edilen proje" },
  { value: "8+", label: "Yıl deneyim" },
  { value: "12", label: "Farklı ülkeden müşteri" },
  { value: "%98", label: "Tekrar çalışma oranı" },
];

export function MetricStrip() {
  return (
    <section
      aria-label="Özet istatistikler"
      className="mx-auto max-w-6xl px-6"
    >
      <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-[var(--yeni-border)] bg-[var(--yeni-subtle)] px-6 py-8 md:grid-cols-4 md:gap-8 md:py-10">
        {metrics.map((m) => (
          <div key={m.label} className="text-center md:text-left">
            <dt className="text-xs font-medium uppercase tracking-wider text-[var(--yeni-muted)]">
              {m.label}
            </dt>
            <dd className="mt-1 text-3xl font-bold tracking-tight text-[var(--yeni-fg)] md:text-4xl">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
