import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Cabaña privada dotada, jacuzzi, zona BBQ, fogatero, parqueadero, senderos, lago y transporte con costo adicional. Todo lo que incluye Entre Guaduales.",
  alternates: { canonical: "/servicios" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/servicios" },
];

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Servicios"
        title="Todo lo esencial, entre la naturaleza"
        subtitle="Cada experiencia incluye estos servicios. El transporte tiene un costo adicional y se coordina con anticipación."
        image="/images/exteriores/bbq-zona.jpg"
        imageAlt="Zona BBQ cubierta del condominio"
        breadcrumbs={breadcrumbs}
      />
      <Section tone="ivory">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 60}>
                <div className="flex h-full flex-col rounded-3xl border border-forest-900/8 bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-guadua-700/10 text-guadua-700">
                    <Icon name={s.icon as IconName} size={24} />
                  </span>
                  <h2 className="mt-4 font-display text-xl text-forest-900">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-900/70">{s.description}</p>
                  {s.note && (
                    <span className="mt-3 inline-block w-fit rounded-full bg-sand-200/70 px-2.5 py-1 text-xs font-medium text-clay-600">
                      {s.note}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-forest-950 p-8 text-ivory-50 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl">¿Listo para vivir la experiencia?</h2>
              <p className="mt-2 text-sm text-ivory-50/80">Consulta disponibilidad y arma tu estadía en pocos pasos.</p>
            </div>
            <Button href="/reservar" variant="gold" size="lg" icon="arrowRight">
              Consultar disponibilidad
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
