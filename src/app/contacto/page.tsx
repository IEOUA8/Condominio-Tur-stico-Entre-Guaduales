import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { AntifraudNotice } from "@/components/ui/AntifraudNotice";
import { Button } from "@/components/ui/Button";
import { site, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/content/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos por WhatsApp o correo para consultar disponibilidad, resolver dudas o coordinar tu estadía en Entre Guaduales.",
  alternates: { canonical: "/contacto" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Contacto", href: "/contacto" },
];

const channels: { icon: IconName; title: string; value: string; href: string; cta: string; pending?: boolean }[] = [
  {
    icon: "whatsapp",
    title: "WhatsApp",
    value: site.contact.whatsappDisplay,
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    cta: "Abrir WhatsApp",
    pending: site.contact.whatsappIsPlaceholder,
  },
  {
    icon: "mail",
    title: "Correo",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    cta: "Enviar correo",
    pending: site.contact.emailIsPlaceholder,
  },
];

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu próxima escapada"
        subtitle="Estamos para ayudarte a elegir la experiencia ideal y coordinar tu estadía. Escríbenos por tu canal preferido."
        image="/images/momentos/fogatero-personas.jpg"
        imageAlt="Grupo compartiendo alrededor del fogatero"
        breadcrumbs={breadcrumbs}
        compact
      />

      <Section tone="ivory">
        <Container className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-guadua-700/10 px-4 py-2 text-sm text-guadua-800">
            <Icon name="clock" size={16} />
            Respondemos en {site.operations.responseTime} en horario de atención.
          </p>

          <div className="grid gap-5 sm:grid-cols-2">
            {channels.map((c) => (
              <div key={c.title} className="flex flex-col rounded-3xl border border-forest-900/8 bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-guadua-700/10 text-guadua-700">
                  <Icon name={c.icon} size={24} />
                </span>
                <h2 className="mt-4 font-display text-xl text-forest-900">{c.title}</h2>
                <p className="mt-1 flex items-center gap-2 text-sm text-forest-900/70">
                  {c.value}
                  {c.pending && (
                    <span className="rounded-full bg-sand-200/70 px-2 py-0.5 text-[11px] text-clay-600">por confirmar</span>
                  )}
                </p>
                <Button href={c.href} variant="secondary" className="mt-5 self-start" icon="arrowUpRight">
                  {c.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-forest-900/8 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-guadua-700/10 text-guadua-700">
                <Icon name="mapPin" size={24} />
              </span>
              <h2 className="mt-4 font-display text-xl text-forest-900">Ubicación</h2>
              <p className="mt-1 text-sm text-forest-900/70">
                {site.contact.region} · {site.contact.city}
              </p>
              <p className="mt-1 text-xs text-forest-900/55">{site.contact.addressPublic}</p>
            </div>
            <div className="flex flex-col justify-between rounded-3xl bg-forest-950 p-6 text-ivory-50">
              <div>
                <h2 className="font-display text-xl">¿Listo para reservar?</h2>
                <p className="mt-2 text-sm text-ivory-50/80">Consulta disponibilidad en pocos pasos y recibe tu número de solicitud.</p>
              </div>
              <Button href="/reservar" variant="gold" className="mt-5 self-start" icon="arrowRight">
                Consultar disponibilidad
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <AntifraudNotice />
          </div>
        </Container>
      </Section>
    </>
  );
}
