import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { SITE } from "@/constants/site";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Agência de Marketing e Comunicação`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "agência de marketing",
    "branding",
    "comunicação visual",
    "gestão de redes sociais",
    "design gráfico",
    "UrbanClick",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Agência de Marketing e Comunicação`,
    description: SITE.description,
    images: [
      {
        url: "/images/og-cover.svg",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — We Create. You Grow.`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Agência de Marketing e Comunicação`,
    description: SITE.description,
    images: ["/images/og-cover.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0A06",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
