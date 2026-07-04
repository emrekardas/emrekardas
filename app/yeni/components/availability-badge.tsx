export function AvailabilityBadge() {
  return (
    <div
      role="status"
      aria-label="Müsaitlik durumu: yeni projelere açık"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--yeni-success)]/30 bg-[var(--yeni-success)]/10 px-3 py-1.5 text-xs font-semibold text-[var(--yeni-success)]"
    >
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--yeni-success)] opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--yeni-success)]" />
      </span>
      Aktif olarak proje alıyorum · Q2 2026
    </div>
  );
}
