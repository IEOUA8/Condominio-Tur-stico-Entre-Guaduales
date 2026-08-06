import { site } from "@/content/site";

/* ==========================================================================
   DATOS ESTRUCTURADOS (§17.2)
   Solo propiedades verificables. No incluimos dirección exacta, teléfono ni
   reseñas hasta que el cliente los confirme (evita marcado falso).
   ========================================================================== */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON controlado por nosotros, no entrada de usuario.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: site.legalName,
        alternateName: site.name,
        url: site.url,
        description:
          "Condominio turístico boutique con cabañas privadas, jacuzzi, zona BBQ, fogatero y naturaleza. Experiencias para 2 a 26 huéspedes.",
        image: `${site.url}/images/exteriores/panoramica-lago.jpg`,
        logo: `${site.url}/brand/logo-mark.png`,
        slogan: site.promise,
        petsAllowed: true,
        amenityFeature: [
          "Jacuzzi privado",
          "Zona BBQ",
          "Fogatero",
          "Parqueadero privado",
          "Senderos ecológicos",
          "Lago",
        ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${site.url}${it.href}`,
        })),
      }}
    />
  );
}

export function ExperienceJsonLd({
  name,
  description,
  image,
  slug,
  price,
  from,
}: {
  name: string;
  description: string;
  image: string;
  slug: string;
  price: number;
  from: boolean;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Accommodation",
        name,
        description,
        url: `${site.url}/experiencias/${slug}`,
        image: `${site.url}${image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "COP",
          price,
          ...(from ? { description: "Precio desde, varía según configuración" } : {}),
          availability: "https://schema.org/InStock",
        },
      }}
    />
  );
}
