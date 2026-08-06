import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotografías reales del Condominio Turístico Entre Guaduales: cabañas, habitaciones, jacuzzi, naturaleza, lago y los momentos que se viven aquí.",
  alternates: { canonical: "/galeria" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Galería", href: "/galeria" },
];

export default function GaleriaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Galería"
        title="Espacios reales, luz real"
        subtitle="Recorre el condominio a través de fotografías reales. Filtra por categoría y toca cualquier imagen para ampliarla."
        image="/images/interiores/sala.jpg"
        imageAlt="Sala amplia con ventanales hacia el verde"
        breadcrumbs={breadcrumbs}
        compact
      />
      <GalleryExplorer />
    </>
  );
}
