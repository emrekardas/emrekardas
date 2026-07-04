import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./pixel.css";
import { LangProvider } from "./lib/i18n";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const title = "pixel · emre.kardas";
const description =
  "Pixel tarzı developer portfolyo — sürüklenebilir karakter, terminal penceresi ve interaktif demolar.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function PixelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`pixel-root ${jetbrains.variable}`}>
      <a
        href="#pixel-main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-[var(--px-accent)] focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-[var(--px-bg)]"
      >
        Ana içeriğe atla
      </a>
      <LangProvider>{children}</LangProvider>
    </div>
  );
}
