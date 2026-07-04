export type Project = {
  slug: string;
  title: string;
  client?: string;
  summary: string;
  cover: string;
  year: string;
  duration: string;
  teamSize: string;
  problem: string;
  role: string;
  process: string[];
  stack: string[];
  result: {
    metric?: string;
    outcome: string;
  };
  screenshots?: {
    src: string;
    caption: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  };
  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "teklif-app",
    title: "Teklif — Freelancerlar için teklif yönetimi",
    client: "Kendi ürünüm",
    summary:
      "Freelancerların müşterilerine hızlıca teklif hazırlayıp gönderebildiği bir SaaS.",
    cover:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1600&q=80",
    year: "2025",
    duration: "6 hafta",
    teamSize: "Solo",
    problem:
      "Küçük stüdyolar ve freelancerlar tekliflerini Word ve PDF arasında kaybediyor, onay sürecini takip edemiyordu.",
    role: "Solo — ürün tasarımı, frontend, backend ve dağıtım.",
    process: [
      "15 freelancerla görüşme yapıp gerçek acıyı çıkardım",
      "Figma'da 2 günde düşük sadakatli prototip",
      "Next.js + Supabase ile MVP, 3 hafta",
      "İlk 10 kullanıcıya birebir onboarding, haftalık iterasyon",
    ],
    stack: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Stripe"],
    result: {
      metric: "İlk 60 günde 42 ücretli kullanıcı",
      outcome:
        "Teklif gönderim süresi ortalama 45 dakikadan 6 dakikaya düştü.",
    },
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
        caption: "Dashboard — aktif teklifler ve onay durumu tek ekranda.",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
        caption: "Teklif oluşturma — hazır şablonlardan 90 saniyede hazır.",
      },
    ],
    testimonial: {
      quote:
        "Teklif gönderme sürecim bu araçtan önce haftada 3 saati yiyordu. Şimdi bir kahve molasında hallediyorum.",
      author: "Ayşe Demir",
      role: "Freelance UI/UX Designer",
    },
    links: {
      live: "https://example.com",
    },
  },
  {
    slug: "mobil-fitness",
    title: "Fit — iOS & Android fitness uygulaması",
    client: "FitCo (seed stage)",
    summary:
      "Kişiye özel antrenman planları ve ilerleme takibi sunan bir mobil uygulama.",
    cover:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    year: "2024",
    duration: "4 ay",
    teamSize: "3 kişilik ekip",
    problem:
      "Kurucu ekip native kodla hızlı iterasyon yapamıyordu, iki platformda farklı bug'lar birikiyordu.",
    role: "Lead mobile engineer — mimari, state yönetimi, offline senkronizasyon.",
    process: [
      "React Native + Expo'ya geçiş kararını ekiple onayladık",
      "Mevcut kodu 6 haftada modüllere ayırıp taşıdım",
      "Detox ile e2e test altyapısı",
      "TestFlight + Play Internal Track üzerinden haftalık release",
    ],
    stack: ["React Native", "Expo", "Zustand", "TanStack Query", "Supabase"],
    result: {
      metric: "Crash-free users %99.3",
      outcome:
        "Release döngüsü 6 haftadan 1 haftaya indi, bug backlog %70 azaldı.",
    },
    screenshots: [
      {
        src: "https://images.unsplash.com/photo-1511296265581-c2450046447d?auto=format&fit=crop&w=1400&q=80",
        caption: "Antrenman akışı — offline senkronizasyon ile saha kullanımı.",
      },
    ],
    testimonial: {
      quote:
        "Emre sadece kod yazmadı; ekibimizin mühendislik kültürünü yeniden şekillendirdi. Release korkumuz geçti.",
      author: "Mert Yılmaz",
      role: "CTO, FitCo",
    },
  },
  {
    slug: "ai-destek",
    title: "AI Destek — e-ticaret için canlı asistan",
    client: "Modalab (Shopify Plus mağaza)",
    summary:
      "Bir e-ticaret firmasının destek kuyruğunu küçülten GPT tabanlı asistan.",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    year: "2024",
    duration: "8 hafta",
    teamSize: "Solo",
    problem:
      "Günde 1.200+ destek talebi vardı; çoğu iade ve kargo sorgusuydu. Takım tükeniyordu.",
    role: "Solo — RAG mimarisi, prompt tasarımı, entegrasyon.",
    process: [
      "Son 6 ayın ticket datasını kategorize ettim",
      "Ürün katalogu + iade politikası için RAG pipeline",
      "Intercom üzerinden canlı entegrasyon",
      "İnsan-devir eşiği için güven skoru kalibrasyonu",
    ],
    stack: ["Claude API", "Next.js", "PostgreSQL", "pgvector", "Intercom"],
    result: {
      metric: "Ticket hacminin %62'si tam otomatik çözüldü",
      outcome:
        "Ortalama yanıt süresi 4 saatten 20 saniyeye düştü, NPS +18 puan arttı.",
    },
    testimonial: {
      quote:
        "Emre 8 haftada destek ekibimize bir kişilik yük çıkardı — ama insan kimliğini kaybetmeden. Müşteri yorumları bile iyileşti.",
      author: "Selin Kara",
      role: "Operations Lead, Modalab",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? projects[i - 1] : undefined,
    next: i < projects.length - 1 ? projects[i + 1] : undefined,
  };
}
