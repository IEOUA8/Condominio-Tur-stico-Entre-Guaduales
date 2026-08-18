import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} · Cabañas con jacuzzi en Rionegro, Antioquia`,
    template: `%s · ${site.name}`,
  },
  description:
    "Cabañas privadas con jacuzzi, zona BBQ, fogatero y naturaleza en Rionegro, Antioquia. Un lugar para volver a estar juntos: escapadas en pareja, en familia o en grupo, hasta 26 huéspedes.",
  applicationName: site.name,
  keywords: [
    "cabañas privadas",
    "cabañas con jacuzzi",
    "cabañas Rionegro",
    "cabañas en Rionegro Antioquia",
    "alojamiento Rionegro",
    "cabañas Oriente Antioqueño",
    "cabañas cerca de Medellín",
    "condominio turístico",
    "jacuzzi privado",
    "zona BBQ",
    "fogatero",
    "turismo de naturaleza Antioquia",
    "escapada romántica en pareja",
    "alojamiento familiar",
    "cabañas para grupos",
    "finca turística Rionegro",
    "Entre Guaduales",
    "Condominio Turístico Entre Guaduales",
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} · Un lugar para volver a estar juntos`,
    description:
      "Cabañas privadas con jacuzzi, zona BBQ, fogatero y naturaleza en Rionegro, Antioquia. Escapadas en pareja, en familia o en grupo, hasta 26 huéspedes.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Condominio Turístico Entre Guaduales — naturaleza y comodidad al atardecer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} · Un lugar para volver a estar juntos`,
    description:
      "Cabañas privadas con jacuzzi, zona BBQ y naturaleza en Rionegro, Antioquia. En pareja, en familia o en grupo.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#0b211b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-ivory-50 antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-ivory-50"
        >
          Saltar al contenido
        </a>
        <OrganizationJsonLd />
        <Header />
        <main id="contenido" className="pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <WhatsAppFab />
        <CookieBanner />
        <MetaPixel />
      </body>
    </html>
  );
}
