import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/content/experiences";
import { formatCOP } from "@/lib/format";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageView } from "@/components/analytics/PageView";

export const metadata: Metadata = {
  title: "Experiencias y tarifas",
  description:
    "Cinco experiencias para 2 a 26 huéspedes: escapada en pareja, familiar, premium Sirirí, dos familias y el condominio exclusivo. Consulta tarifas y capacidades.",
  alternates: { canonical: "/experiencias" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Experiencias", href: "/experiencias" },
];

export default function ExperienciasPage() {
  return (
    <>
      <PageView event="view_experience" params={{ view: "index" }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Catálogo"
        title="Una experiencia para cada forma de compartir"
        subtitle="Desde una escapada íntima en pareja hasta el condominio completo para tu grupo. Todas incluyen cabaña dotada, jacuzzi, naturaleza y privacidad."
        image="/images/exteriores/jardin-flores.jpg"
        imageAlt="Jardines florecidos del condominio"
        breadcrumbs={breadcrumbs}
      />

      <Section tone="ivory">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map((exp, i) => (
              <Reveal key={exp.slug} delay={(i % 3) * 60}>
                <ExperienceCard exp={exp} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tabla de tarifas */}
      <Section id="tarifas" tone="white">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-guadua-700">Tarifas</span>
            <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">Precios claros por alojamiento</h2>
            <p className="mt-4 text-forest-900/70">
              Los valores corresponden al alojamiento completo (no por persona). Desde
              la tercera noche aplica la tarifa de noche adicional.
            </p>
          </div>

          {/* Móvil: tarjetas apiladas (sin scroll lateral) */}
          <div className="mt-8 space-y-3 sm:hidden">
            {experiences.map((exp) => (
              <div key={exp.slug} className="rounded-2xl border border-forest-900/10 bg-ivory-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg text-forest-900">{exp.name}</h3>
                    <p className="mt-0.5 text-xs text-forest-900/60">
                      {exp.minGuests === exp.maxGuests ? exp.maxGuests : `${exp.minGuests}–${exp.maxGuests}`} huéspedes
                    </p>
                  </div>
                  <Button href={`/experiencias/${exp.slug}`} variant="ghost" size="sm" icon="arrowRight">
                    Ver
                  </Button>
                </div>
                <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-forest-900/10 pt-3 text-center">
                  {[
                    { l: "1 noche", v: exp.oneNightPrice },
                    { l: "2 noches", v: exp.twoNightPrice },
                    { l: "Noche adic.", v: exp.additionalNightPrice },
                  ].map((row) => (
                    <div key={row.l}>
                      <dt className="text-[11px] text-forest-900/55">{row.l}</dt>
                      <dd className="tnum mt-0.5 text-sm font-semibold text-forest-900">
                        {exp.startingAt && <span className="text-[10px] font-normal text-forest-900/45">desde </span>}
                        {formatCOP(row.v)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          {/* Escritorio: tabla comparativa */}
          <div className="mt-8 hidden overflow-x-auto sm:block">
            <table className="w-full min-w-[680px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr className="text-forest-900/60">
                  <th className="px-4 py-3 font-semibold">Experiencia</th>
                  <th className="px-4 py-3 font-semibold">Capacidad</th>
                  <th className="px-4 py-3 font-semibold">1 noche</th>
                  <th className="px-4 py-3 font-semibold">2 noches</th>
                  <th className="px-4 py-3 font-semibold">Noche adicional</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {experiences.map((exp) => (
                  <tr key={exp.slug} className="group">
                    <td className="rounded-l-xl border-y border-l border-forest-900/8 bg-ivory-50 px-4 py-4 font-medium text-forest-900 group-hover:bg-sand-200/30">
                      {exp.name}
                    </td>
                    <td className="border-y border-forest-900/8 bg-ivory-50 px-4 py-4 text-forest-900/70 group-hover:bg-sand-200/30">
                      {exp.minGuests === exp.maxGuests ? exp.maxGuests : `${exp.minGuests}–${exp.maxGuests}`} huéspedes
                    </td>
                    <td className="tnum border-y border-forest-900/8 bg-ivory-50 px-4 py-4 text-forest-900 group-hover:bg-sand-200/30">
                      {exp.startingAt && <span className="text-xs text-forest-900/50">desde </span>}
                      {formatCOP(exp.oneNightPrice)}
                    </td>
                    <td className="tnum border-y border-forest-900/8 bg-ivory-50 px-4 py-4 text-forest-900 group-hover:bg-sand-200/30">
                      {exp.startingAt && <span className="text-xs text-forest-900/50">desde </span>}
                      {formatCOP(exp.twoNightPrice)}
                    </td>
                    <td className="tnum border-y border-forest-900/8 bg-ivory-50 px-4 py-4 text-forest-900 group-hover:bg-sand-200/30">
                      {exp.startingAt && <span className="text-xs text-forest-900/50">desde </span>}
                      {formatCOP(exp.additionalNightPrice)}
                    </td>
                    <td className="rounded-r-xl border-y border-r border-forest-900/8 bg-ivory-50 px-4 py-4 group-hover:bg-sand-200/30">
                      <Button href={`/experiencias/${exp.slug}`} variant="ghost" size="sm" icon="arrowRight">
                        Ver
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 flex items-start gap-2 text-xs text-forest-900/55">
            <Icon name="info" size={15} className="mt-0.5 shrink-0" />
            La experiencia Uniendo familias muestra valores «desde»: la tarifa final depende de
            la combinación de cabañas y se confirma con una cotización personalizada.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/reservar" variant="gold" size="lg" icon="arrowRight">
              Consultar disponibilidad
            </Button>
            <Button href="/preguntas-frecuentes" variant="secondary" size="lg">
              Ver preguntas frecuentes
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
