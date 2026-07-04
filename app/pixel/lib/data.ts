export type PixelProject = {
  slug: string;
  name: string;
  stack: string;
  href: string;
};

export type PixelBrand = {
  id: string;
  label: string;
  videoUrl?: string;
};

export const pixelProjects: PixelProject[] = [
  {
    slug: "teklif",
    name: "Teklif",
    stack: "Next.js · Supabase",
    href: "/yeni/proje/teklif-app",
  },
  {
    slug: "fit",
    name: "Fit",
    stack: "React Native · Expo",
    href: "/yeni/proje/mobil-fitness",
  },
  {
    slug: "ai-destek",
    name: "AI Destek",
    stack: "Claude · pgvector",
    href: "/yeni/proje/ai-destek",
  },
];

export const pixelBrands: PixelBrand[] = [
  { id: "react", label: "React" },
  { id: "nextjs", label: "Next" },
  { id: "node", label: "Node" },
  { id: "typescript", label: "TS" },
  { id: "supabase", label: "Supa" },
  { id: "stripe", label: "Stripe" },
  { id: "vercel", label: "Vercel" },
  { id: "postgres", label: "PG" },
  { id: "docker", label: "Docker" },
  { id: "tailwind", label: "Tailw" },
  { id: "expo", label: "Expo" },
  { id: "claude", label: "Claude" },
];

export function toEmbedUrl(url: string): string | null {
  try {
    if (url.includes("instagram.com/reel/") || url.includes("instagram.com/p/")) {
      const base = url.split("?")[0].replace(/\/$/, "");
      return `${base}/embed/`;
    }
    if (url.includes("youtube.com/watch?v=")) {
      const id = new URL(url).searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1]?.split(/[?&#]/)[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (url.includes("tiktok.com") && url.includes("/video/")) {
      const id = url.split("/video/")[1]?.split(/[?&#]/)[0];
      return id ? `https://www.tiktok.com/embed/v2/${id}` : null;
    }
    return null;
  } catch {
    return null;
  }
}
