import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { PageView } from "@/components/analytics/PageView";
import { reglamento, criticalRules, reglamentoIntro, reglamentoVersion } from "@/content/reglamento";
import { formatDateShort } from "@/lib/format";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Reglamento del condominio",
  description:
    "Reglamento del Condominio Turístico Entre Guaduales: reglas generales, limpieza, parqueadero, BBQ, fogatero, jacuzzi y zonas verdes.",
  alternates: { canonical: "/reglamento" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Reglamento", href: "/reglamento" },
];

export default function ReglamentoPage() {
  const items: AccordionItem[] = reglamento.map((cat) => ({
    q: cat.title,
    a: (
      <ol className="space-y-2.5">
        {cat.rules.map((r) => (
          <li key={r.n} className="flex gap-3 text-sm">
            <span className="tnum shrink-0 font-semibold text-guadua-700">{r.n}.</span>
            <span>{r.text}</span>
          </li>
        ))}
      </ol>
    ),
  }));

  return (
    <>
      <PageView event="view_rules" />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Convivencia"
        title="Reglamento del condominio"
        subtitle="Diseñamos cada detalle para tu comodidad y descanso. Conocer estas normas garantiza una experiencia agradable para todos."
        image="/images/exteriores/jardin-verde.jpg"
        imageAlt="Zonas verdes del condominio"
        breadcrumbs={breadcrumbs}
        compact
      />

      <Section tone="ivory">
        <Container className="max-w-3xl">
          <p className="rounded-2xl border border-forest-900/10 bg-white p-5 text-sm leading-relaxed text-forest-900/80">
            {reglamentoIntro}
          </p>

          {/* Reglas críticas destacadas */}
          <div className="mt-8">
            <h2 className="flex items-center gap-2 font-display text-xl text-forest-900">
              <Icon name="shield" size={20} className="text-clay-600" />
              Lo esencial de un vistazo
            </h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {criticalRules.map((r) => (
                <li key={r} className="flex items-start gap-2 rounded-xl border border-forest-900/8 bg-white p-3 text-sm text-forest-900/80">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-guadua-700" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Reglamento completo por categorías */}
          <div className="mt-10">
            <h2 className="mb-3 font-display text-xl text-forest-900">Reglamento completo</h2>
            <Accordion items={items} defaultOpen={0} />
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-forest-900/55">
            <Icon name="info" size={14} />
            Versión {reglamentoVersion.version} · Actualizado el {formatDateShort(reglamentoVersion.updatedAt)}
          </p>
        </Container>
      </Section>
    </>
  );
}
