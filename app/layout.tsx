import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/providers/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emre Kardaş | Developer & Designer",
  description: "Personal portfolio showcasing web development, mobile applications, and creative projects.",
  keywords: ["developer", "designer", "portfolio", "web development", "mobile apps", "react", "next.js"],
  authors: [{ name: "Emre Kardaş" }],
  openGraph: {
    title: "Emre Kardaş | Developer & Designer",
    description: "Personal portfolio showcasing web development, mobile applications, and creative projects.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Kardaş | Developer & Designer",
    description: "Personal portfolio showcasing web development, mobile applications, and creative projects.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
