import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--yeni-accent)]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--yeni-fg)] md:text-4xl">
        Bu sayfa burada değil.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-[var(--yeni-muted)]">
        Belki link eski, belki de henüz yayına almadım. Ana sayfadan devam
        edebilirsin.
      </p>
      <Link
        href="/yeni"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--yeni-fg)] px-6 py-3 text-sm font-semibold text-[var(--yeni-bg)] transition-colors duration-200 hover:bg-[var(--yeni-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)]"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}
