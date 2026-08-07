import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { NightCalculator } from "@/components/experience/NightCalculator";
import { StickyExperienceCTA } from "@/components/experience/StickyExperienceCTA";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import {
  experiences,
  getExperience,
  relatedExperiences,
  experienceSlugs,
} from "@/content/experiences";
import { formatCOP } from "@/lib/format";
import { faqs } from "@/content/faqs";
import { BreadcrumbJsonLd, ExperienceJsonLd } from "@/components/seo/JsonLd";
import { PageView } from "@/components/analytics/PageView";

export function generateStaticParams() {
  return experienceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return {};
  return {
    title: exp.name,
    description: exp.shortDescription,
    alternates: { canonical: `/experiencias/${exp.slug}` },
    openGraph: {
      title: `${exp.name} · Entre Guaduales`,
      description: exp.shortDescription,
      images: [{ url: exp.featured.src, width: 1200, height: 630, alt: exp.featured.alt }],
    },
  };
}

const relevantFaqCategories = ["Capacidad", "Jacuzzi", "Mascotas", "Niños", "Pagos", "Cancelaciones"];

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  const related = relatedExperiences(exp.slug, 3);
  const breadcrumbs = [
    { name: "Inicio", href: "/" },
    { name: "Experiencias", href: "/experiencias" },
    { name: exp.name, href: `/experiencias/${exp.slug}` },
  ];

  const faqItems: AccordionItem[] = relevantFaqCategories
    .map((cat) => faqs.find((f) => f.category === cat))
    .filter((f): f is NonNullable<typeof f> => Boolean(f))
    .map((f) => ({ q: f.q, a: f.a, badge: f.pending ? "por confirmar" : undefined }));

  return (
    <>
      <PageView event="view_experience" params={{ experience: exp.slug }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <ExperienceJsonLd
        name={exp.name}
        description={exp.shortDescription}
        image={exp.featured.src}
        slug={exp.slug}
        price={exp.oneNightPrice}
        from={exp.startingAt}
      />

      <PageHero
        eyebrow={exp.concept}
        title={exp.name}
        subtitle={exp.shortDescription}
        image={exp.featured.src}
        imageAlt={exp.featured.alt}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-ivory-50 backdrop-blur">
            <Icon name="users" size={16} />
            {exp.minGuests === exp.maxGuests ? `${exp.maxGuests} huéspedes` : `${exp.minGuests}–${exp.maxGuests} huéspedes`}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-ivory-50 backdrop-blur">
            <Icon name="sparkles" size={16} className="text-gold-400" />
            {exp.differentiator}
          </span>
          <Button href={`/reservar?exp=${exp.slug}`} variant="gold" icon="arrowRight">
            {exp.ctaLabel}
          </Button>
        </div>
      </PageHero>

      <Section tone="white" className="pb-10">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
            {/* Contenido principal */}
            <div className="space-y-14">
              {/* Descripción emocional */}
              <div>
                <Eyebrow>La experiencia</Eyebrow>
                <p className="mt-4 max-w-2xl font-display text-2xl leading-relaxed text-forest-900 sm:text-3xl">
                  {exp.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.narrativeFocus.map((n) => (
                    <span key={n} className="rounded-full bg-sand-200/50 px-3 py-1 text-sm text-forest-800">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Galería */}
              <div>
                <h2 className="font-display text-2xl text-forest-900">Galería</h2>
                <p className="mt-2 text-sm text-forest-900/60">Toca cualquier foto para ampliarla.</p>
                <div className="mt-5">
                  <PhotoGrid photos={exp.gallery} />
                </div>
              </div>

              {/* Capacidad y distribución */}
              <div>
                <h2 className="font-display text-2xl text-forest-900">Capacidad y distribución</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <InfoStat
                    icon="users"
                    label="Capacidad"
                    value={
                      exp.minGuests === exp.maxGuests
                        ? `${exp.maxGuests} huéspedes`
                        : `${exp.minGuests}–${exp.maxGuests} huéspedes`
                    }
                  />
                  <InfoStat icon="hotTub" label="Jacuzzi" value="Privado" />
                </div>
                {exp.distribution.length > 0 && (
                  <div className="mt-5 rounded-2xl border border-forest-900/10 bg-ivory-50 p-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-forest-900">
                      <Icon name="cabin" size={17} className="text-guadua-700" />
                      Distribución
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {exp.distribution.map((info) => (
                        <li key={info} className="flex items-start gap-2 text-sm text-forest-900/80">
                          <Icon name="check" size={15} className="mt-0.5 shrink-0 text-guadua-700" />
                          {info}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Servicios incluidos */}
              <div>
                <h2 className="font-display text-2xl text-forest-900">Servicios incluidos</h2>
                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  {exp.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-forest-900/80">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-guadua-700/12 text-guadua-700">
                        <Icon name="check" size={15} />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reglas relevantes + mascotas */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-forest-900/10 bg-ivory-50 p-6">
                  <h3 className="flex items-center gap-2 font-display text-xl text-forest-900">
                    <Icon name="info" size={20} className="text-guadua-700" />
                    Antes de reservar
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-forest-900/75">
                    <li>Solo ingresan huéspedes registrados en la reserva.</li>
                    <li>No se permiten fiestas ni eventos.</li>
                    <li>Ruido moderado después de las 11:00 p. m.</li>
                    <li>Cámaras de seguridad 24 h en zonas comunes.</li>
                  </ul>
                  <Link href="/reglamento" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-guadua-700 hover:underline">
                    Ver reglamento completo <Icon name="arrowRight" size={15} />
                  </Link>
                </div>
                <div className="rounded-2xl border border-forest-900/10 bg-ivory-50 p-6">
                  <h3 className="flex items-center gap-2 font-display text-xl text-forest-900">
                    <Icon name="paw" size={20} className="text-guadua-700" />
                    Política de mascotas
                  </h3>
                  <p className="mt-4 text-sm text-forest-900/75">
                    Se permiten mascotas bajo la responsabilidad del huésped, garantizando su cuidado,
                    la recolección de desechos y la protección del inmueble. No ingresan al jacuzzi ni a
                    la zona BBQ.
                  </p>
                </div>
              </div>

              {/* FAQ específicas */}
              <div>
                <h2 className="font-display text-2xl text-forest-900">Preguntas frecuentes</h2>
                <div className="mt-5">
                  <Accordion items={faqItems} defaultOpen={0} />
                </div>
              </div>
            </div>

            {/* Sidebar: tarifa + calculadora (sticky en desktop) */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="space-y-4">
                <div className="rounded-3xl bg-forest-950 p-6 text-ivory-50">
                  <p className="text-xs uppercase tracking-wide text-ivory-50/60">Tarifas</p>
                  <div className="mt-3 space-y-2 text-sm">
                    <PriceRow label="1 noche" value={exp.oneNightPrice} from={exp.startingAt} />
                    <PriceRow label="2 noches" value={exp.twoNightPrice} from={exp.startingAt} />
                    <PriceRow label="Noche adicional" value={exp.additionalNightPrice} from={exp.startingAt} muted />
                  </div>
                </div>
                <NightCalculator exp={exp} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Otras experiencias */}
      <Section tone="ivory">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl text-forest-900 sm:text-3xl">Otras experiencias</h2>
            <Button href="/experiencias" variant="ghost" size="sm" icon="arrowRight">
              Ver todas
            </Button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ExperienceCard key={r.slug} exp={r} />
            ))}
          </div>
        </Container>
      </Section>

      <StickyExperienceCTA exp={exp} />
    </>
  );
}

function InfoStat({
  icon,
  label,
  value,
}: {
  icon: "users" | "hotTub";
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-forest-900/10 bg-ivory-50 p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-guadua-700/12 text-guadua-700">
        <Icon name={icon} size={22} />
      </span>
      <div>
        <p className="text-xs text-forest-900/55">{label}</p>
        <p className="font-semibold text-forest-900">{value}</p>
      </div>
    </div>
  );
}

function PriceRow({
  label,
  value,
  from,
  muted,
}: {
  label: string;
  value: number;
  from: boolean;
  muted?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between ${muted ? "text-ivory-50/70" : ""}`}>
      <span>{label}</span>
      <span className="tnum font-medium">
        {from && <span className="text-xs text-ivory-50/50">desde </span>}
        {formatCOP(value)}
      </span>
    </div>
  );
}
