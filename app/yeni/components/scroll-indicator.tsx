export function ScrollIndicator() {
  return (
    <a
      href="#calismalarim"
      className="mt-10 inline-flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--yeni-muted)] transition-colors duration-200 hover:text-[var(--yeni-fg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--yeni-accent)] focus-visible:rounded"
    >
      <span
        aria-hidden="true"
        className="animate-[scroll-bounce_2s_ease-in-out_infinite] text-lg motion-reduce:animate-none"
      >
        ↓
      </span>
      Çalışmalarıma bak
      <style>{`
        @keyframes scroll-bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }
      `}</style>
    </a>
  );
}
