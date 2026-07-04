import type { Metadata } from "next";
import { DM_Sans, Caveat } from "next/font/google";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Emre Kardaş — Freelance Full-Stack Developer";
const description =
  "Startup'lara 4 haftada canlıya çıkan mobil ve web ürünleri tasarlıyorum. Son 12 ayda 8 ürün teslim ettim.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "freelance developer",
    "full-stack developer",
    "react native developer",
    "next.js developer",
    "mobil uygulama geliştirici",
    "AI entegrasyonu",
    "Emre Kardaş",
  ],
  authors: [{ name: "Emre Kardaş" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "tr_TR",
    siteName: "Emre Kardaş",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function YeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${dmSans.variable} ${caveat.variable}`}
      style={{
        ["--yeni-bg" as string]: "#ffffff",
        ["--yeni-fg" as string]: "#0a0a0a",
        ["--yeni-muted" as string]: "#6b7280",
        ["--yeni-subtle" as string]: "#f3f4f6",
        ["--yeni-border" as string]: "#e5e7eb",
        ["--yeni-accent" as string]: "#4f46e5",
        ["--yeni-accent-2" as string]: "#7c3aed",
        ["--yeni-success" as string]: "#10b981",
        ["--yeni-text-display" as string]: "clamp(2.25rem, 4.5vw, 3rem)",
        ["--yeni-text-heading" as string]: "clamp(1.75rem, 3vw, 2.25rem)",
        ["--yeni-text-subhead" as string]: "1.25rem",
        ["--yeni-text-body" as string]: "1rem",
        ["--yeni-text-caption" as string]: "0.875rem",
        backgroundColor: "var(--yeni-bg)",
        color: "var(--yeni-fg)",
        fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        minHeight: "100vh",
      }}
    >
      <a
        href="#ana-icerik"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-[var(--yeni-fg)] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-[var(--yeni-bg)]"
      >
        Ana içeriğe atla
      </a>
      {children}
    </div>
  );
}
