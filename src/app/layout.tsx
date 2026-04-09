import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import CookiePopup from "@/components/CookiePopup";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Clawbit — AI Automation pentru Afaceri Mici din România",
  description:
    "Automatizează social media, emailurile și recenziile Google cu AI. Câștigă timp, crești vizibilitatea, fără efort suplimentar.",
  keywords:
    "AI automation, social media automation, email triage, Google reviews, afaceri mici, Romania",
  openGraph: {
    title: "Clawbit — AI Automation pentru Afaceri Mici",
    description:
      "Automatizează social media, emailurile și recenziile Google cu AI.",
    url: "https://clawbit.ro",
    siteName: "Clawbit",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://clawbit.ro/content/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clawbit - Agenție de Automatizări AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawbit — AI Automation pentru Afaceri Mici",
    description: "Automatizează social media, emailurile și recenziile Google cu AI.",
    images: ["https://clawbit.ro/content/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#E8E8E8]`}>
        {children}
        <CookiePopup />
      </body>
    </html>
  );
}
