import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emre Kardas | Software Engineer",
  description: "Portfolio of Emre Kardas - Software Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: ["software engineer", "react", "next.js", "typescript", "web development"],
  authors: [{ name: "Emre Kardas" }],
  openGraph: {
    title: "Emre Kardas | Software Engineer",
    description: "Portfolio of Emre Kardas - Software Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
