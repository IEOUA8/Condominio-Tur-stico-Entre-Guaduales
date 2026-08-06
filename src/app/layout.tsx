import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { CookieBanner } from "@/components/layout/CookieBanner";
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
    default: `${site.legalName} · Cabañas privadas y naturaleza`,
    template: `%s · ${site.name}`,
  },
  description:
    "Condominio turístico boutique con cabañas privadas, jacuzzi, zona BBQ y naturaleza. Experiencias para pareja, familia o grupos de 2 a 26 huéspedes.",
  applicationName: site.name,
  keywords: [
    "cabañas privadas",
    "condominio turístico",
    "jacuzzi privado",
    "escapada romántica",
    "alojamiento familiar",
    "cabañas para grupos",
    "Entre Guaduales",
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} · Cabañas privadas y naturaleza`,
    description:
      "Cabañas privadas, jacuzzi y naturaleza. Experiencias para crear recuerdos inolvidables en pareja, familia o con amigos.",
    images: [
      {
        url: "/images/exteriores/panoramica-lago.jpg",
        width: 1200,
        height: 630,
        alt: "Vista panorámica del Condominio Turístico Entre Guaduales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName}`,
    description: "Cabañas privadas, jacuzzi y naturaleza. Experiencias inolvidables.",
    images: ["/images/exteriores/panoramica-lago.jpg"],
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
      </body>
    </html>
  );
}
