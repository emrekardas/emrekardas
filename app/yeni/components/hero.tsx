import Image from "next/image";
import { AvailabilityBadge } from "./availability-badge";
import { ScrollIndicator } from "./scroll-indicator";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <div className="mb-6">
            <AvailabilityBadge />
          </div>

          <p className="mb-3 text-lg text-[var(--yeni-muted)]">
            <span className="mr-2 inline-block animate-[wave_1.8s_ease-in-out_infinite] motion-reduce:animate-none">
              👋
            </span>
            Selam, ben Emre.
          </p>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--yeni-fg)] md:text-[44px] md:leading-[1.1]">
            Startup&apos;lara 4 haftada canlıya çıkan{" "}
            <span className="whitespace-nowrap rounded-md bg-[var(--yeni-fg)] px-2 py-1 text-[var(--yeni-bg)]">
              mobil ve web ürünleri
            </span>{" "}
            tasarlıyorum.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--yeni-muted)] md:text-lg">
            Son 12 ayda 8 ürün teslim ettim; birkaçı hâlâ canlıda büyüyor. Fikir
            aşamasından App Store&apos;a çıkışa kadar tek başıma götürebiliyorum
            — ya da senin ekibine katılabilirim.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:eekardas@gmail.com"
              className="inline-flex items-center justify-center rounded-lg bg-[var(--yeni-fg)] px-6 py-3 text-sm font-semibold text-[var(--yeni-bg)] transition-colors duration-200 hover:bg-[var(--yeni-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)] cursor-pointer"
            >
              Proje konuşalım
            </a>
            <a
              href="https://cal.com/emrekardas/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--yeni-fg)] bg-[var(--yeni-bg)] px-6 py-3 text-sm font-semibold text-[var(--yeni-fg)] transition-colors duration-200 hover:bg-[var(--yeni-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--yeni-accent)] cursor-pointer"
            >
              30 dk keşif görüşmesi
            </a>
          </div>

          <ScrollIndicator />
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 z-10 hidden max-w-[240px] rounded-2xl bg-gradient-to-br from-[var(--yeni-accent)] to-[var(--yeni-accent-2)] px-4 py-3 text-sm font-semibold leading-snug text-white shadow-lg md:block"
            >
              Mobil uygulama, web ve AI entegrasyonu — 8+ yıldır.
              <span className="absolute -bottom-2 right-6 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[var(--yeni-accent-2)]" />
            </div>

            <div className="relative overflow-hidden rounded-full border border-[var(--yeni-border)]">
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80"
                alt="Emre Kardaş portresi"
                width={280}
                height={280}
                className="block h-[220px] w-[220px] object-cover md:h-[280px] md:w-[280px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
      `}</style>
    </section>
  );
}
