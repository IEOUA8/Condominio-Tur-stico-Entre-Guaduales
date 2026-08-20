import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

/* Contenedor común para páginas legales. Incluye aviso de borrador (§23). */
export function LegalShell({
  title,
  subtitle,
  updatedAt,
  slug,
  children,
  draftNotice = true,
}: {
  title: string;
  subtitle: string;
  updatedAt: string;
  slug: string;
  children: React.ReactNode;
  /** Muestra el aviso de "contenido informativo / validación jurídica".
   *  Debe ser false en documentos legales oficiales ya aprobados. */
  draftNotice?: boolean;
}) {
  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: title, href: `/${slug}` },
  ];
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero eyebrow="Legal" title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} compact />
      <Section tone="ivory">
        <Container className="max-w-3xl">
          {draftNotice && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-clay-500/25 bg-clay-500/8 p-4 text-sm text-forest-900/80">
              <Icon name="info" size={20} className="mt-0.5 shrink-0 text-clay-600" />
              <p>
                <strong className="font-semibold text-forest-900">Contenido informativo.</strong> Incluye los datos
                y políticas confirmados por el prestador (responsable, RNT, pagos, horarios y cancelación).
                Recomendamos una validación jurídica final del texto antes de considerarlo definitivo.
              </p>
            </div>
          )}

          <div className="legal-prose space-y-5 text-forest-900/85">{children}</div>

          <p className="mt-8 text-xs text-forest-900/55">Última actualización: {updatedAt}.</p>
        </Container>
      </Section>
    </>
  );
}

/* Primitivas de contenido legal (estilo prosa manual, sin plugin). */
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-2 font-display text-2xl text-forest-900">{children}</h2>;
}
export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-1 font-display text-lg text-forest-900">{children}</h3>;
}
export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed">{children}</p>;
}
export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="ml-1 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-guadua-700">{children}</ul>;
}
export function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="ml-1 list-decimal space-y-1.5 pl-5 leading-relaxed marker:font-semibold marker:text-guadua-700">
      {children}
    </ol>
  );
}
export function Pending({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-sand-200/70 px-1.5 py-0.5 text-sm text-clay-600" title="Dato pendiente de confirmar">
      {children}
    </span>
  );
}
