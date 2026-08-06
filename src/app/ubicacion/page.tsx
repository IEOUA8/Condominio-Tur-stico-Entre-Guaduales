import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Ubicación y cómo llegar",
  description:
    "Un entorno tranquilo rodeado de naturaleza. Por privacidad, la ubicación exacta y las indicaciones de llegada se comparten al confirmar la reserva.",
  alternates: { canonical: "/ubicacion" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Ubicación", href: "/ubicacion" },
];

const info: { icon: IconName; title: string; text: string; pending?: boolean }[] = [
  { icon: "mapPin", title: "Región", text: `${site.contact.region} · ${site.contact.city}`, pending: true },
  { icon: "info", title: "Dirección exacta", text: "Se comparte al confirmar la reserva, por privacidad y seguridad." },
  { icon: "van", title: "Transporte", text: "Servicio disponible con costo adicional, coordinado con anticipación." },
  { icon: "car", title: "Parqueadero", text: "Parqueadero privado dentro de la propiedad." },
];

export default function UbicacionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Ubicación y entorno"
        title="Naturaleza cerca, sin renunciar a la comodidad"
        subtitle="Un entorno tranquilo rodeado de montañas y vegetación. Compartimos la ubicación exacta e indicaciones de llegada al confirmar tu reserva."
        image="/images/exteriores/entorno-valle.jpg"
        imageAlt="Entorno del condominio con vista al valle"
        breadcrumbs={breadcrumbs}
      />

      <Section tone="ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">Un camino que vale la llegada</h2>
              <ul className="mt-6 space-y-4">
                {info.map((it) => (
                  <li key={it.title} className="flex items-start gap-3.5 rounded-2xl border border-forest-900/8 bg-white p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-guadua-700/10 text-guadua-700">
                      <Icon name={it.icon} size={20} />
                    </span>
                    <div>
                      <p className="flex items-center gap-2 font-medium text-forest-900">
                        {it.title}
                        {it.pending && (
                          <span className="rounded-full bg-sand-200/70 px-2 py-0.5 text-[11px] text-clay-600">por confirmar</span>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-forest-900/70">{it.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button href="/reservar" variant="primary" className="mt-7" icon="arrowRight">
                Consultar disponibilidad
              </Button>
            </div>

            {/* Mapa embebido o placeholder */}
            <div className="lg:sticky lg:top-24">
              {site.contact.mapEmbedUrl ? (
                <iframe
                  src={site.contact.mapEmbedUrl}
                  title="Ubicación de Entre Guaduales"
                  className="aspect-[4/3] w-full rounded-3xl border border-forest-900/10"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-3xl border border-forest-900/10 bg-sage-500/15 p-8 text-center">
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, rgba(120,149,121,0.5), transparent 45%), radial-gradient(circle at 70% 60%, rgba(49,93,73,0.35), transparent 45%)",
                    }}
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-guadua-700 text-ivory-50">
                    <Icon name="mapPin" size={26} />
                  </span>
                  <p className="relative mt-4 max-w-xs text-sm font-medium text-forest-900">
                    Mapa interactivo disponible al confirmar la ubicación exacta con el cliente.
                  </p>
                  <span className="relative mt-2 rounded-full bg-white/70 px-3 py-1 text-xs text-clay-600">
                    Contenido pendiente de confirmación
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
