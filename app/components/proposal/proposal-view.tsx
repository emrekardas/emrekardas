import { Proposal } from "@/app/lib/data";

const Icon = ({ name }: { name: string }) => {
  const common = "stroke-current";
  switch (name) {
    case "layers":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13l9 5 9-5" />
          <path d="M3 18l9 5 9-5" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <path d="M12 3v6" />
          <path d="m6 6 4 4" />
          <path d="m18 6-4 4" />
          <path d="M12 9v12" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <path d="M8 8 4 12l4 4" />
          <path d="m16 8 4 4-4 4" />
          <path d="M10 20 14 4" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "device":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    default:
      return null;
  }
};

const SectionHeader = ({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex flex-col gap-3">
    <span className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-300/80">
      {kicker}
    </span>
    <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">
      {title}
    </h2>
    {subtitle ? <p className="text-sm md:text-base text-white/60">{subtitle}</p> : null}
  </div>
);

export function ProposalView({ proposal }: { proposal: Proposal }) {
  return (
    <div className="relative min-h-screen bg-[#0b0d10] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse" />
        <div className="absolute left-0 top-40 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-40 h-[280px] w-[280px] rounded-full bg-amber-400/10 blur-[120px]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-28 pt-16">
        <section className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-emerald-200/80">
              Dijital Teklif
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">
                {proposal.projectTitle}
              </h1>
              <p className="text-lg text-white/70">{proposal.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex flex-col">
                <span className="text-xs text-white/40">Hazırlanan</span>
                <span className="font-medium text-white">{proposal.clientName}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/40">Teklif ID</span>
                <span className="font-mono text-white">{proposal.proposalId}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-white/40">Geçerlilik</span>
                <span className="font-medium text-white">{proposal.validity}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
              >
                Protokolü Başlat
              </a>
              <a
                href="#timeline"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              >
                Takvimi Görüntüle
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(16,185,129,0.12)] animate-fade-up [animation-delay:120ms]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-200/60">
                Toplam Yatırım
              </p>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase text-emerald-200">
                Onay Bekliyor
              </span>
            </div>
            <div className="mt-6 text-4xl font-display font-semibold">{proposal.total}</div>
            <p className="mt-2 text-sm text-white/60">
              %50 başlangıç, %50 teslim. Teklif şartları {proposal.validity} boyunca
              sabittir.
            </p>
            <div className="mt-6 space-y-3">
              {proposal.pricing.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/10 pb-3 text-sm"
                >
                  <div>
                    <p className="text-white/80">{item.label}</p>
                    <p className="text-xs font-mono text-white/40">{item.code}</p>
                  </div>
                  <span className="font-mono text-white/70">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
          <SectionHeader
            kicker="01 / Vizyon"
            title="Dijital kimliğinizi tek bir deneyimde topluyoruz."
            subtitle="Kurumsal güveni artıran, hız ve estetik dengesini koruyan, yüksek dönüşüm odaklı bir yapı."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {proposal.highlights.map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70 animate-fade-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            kicker="02 / Kapsam"
            title="Proje teslimatları"
            subtitle="Her adımı net, ölçülebilir ve sizinle ortak ilerleyen bir süreç."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proposal.scopeItems.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/10 animate-fade-up"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-emerald-200">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="grid gap-12 md:grid-cols-[0.45fr_0.55fr]">
          <SectionHeader
            kicker="03 / Zaman Çizelgesi"
            title="Aşamalı teslim planı"
            subtitle="Şeffaf bir timeline ile süreci görünür kılıyoruz."
          />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="space-y-6">
              {proposal.timeline.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-xs font-semibold text-emerald-200">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-base font-semibold">{step.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/50">
                        {step.time}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="grid gap-12 md:grid-cols-[0.55fr_0.45fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
            <SectionHeader
              kicker="04 / Garanti"
              title="Lansman sonrası destek"
              subtitle="Yayın sonrası 12 ay boyunca bakım, güncelleme ve güvenlik kontrolleri."
            />
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>İçerik giriş desteği ve panel eğitimi</li>
              <li>Performans ölçümü ve öneri raporu</li>
              <li>Haftalık yedekleme kontrolü</li>
              <li>SEO ve hız iyileştirme önerileri</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <SectionHeader kicker="05 / SSS" title="Kısa cevaplar" />
            <div className="mt-6 space-y-4">
              {proposal.faqs.map((item) => (
                <div key={item.q} className="border-b border-white/10 pb-4">
                  <p className="text-sm font-semibold">{item.q}</p>
                  <p className="mt-2 text-sm text-white/60">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="rounded-3xl border border-emerald-400/30 bg-gradient-to-r from-emerald-500/15 via-white/5 to-transparent p-10 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-emerald-200/80">
            Son Adım
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">
            Teklifi onaylayalım ve projeye başlayalım.
          </h2>
          <p className="mt-3 text-sm text-white/60">
            Onay sonrası 24 saat içinde proje planı ve erişimler paylaşılır.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="#cta"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
            >
              Hemen Onayla
            </a>
            <a
              href="#faq"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Sorularım Var
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
