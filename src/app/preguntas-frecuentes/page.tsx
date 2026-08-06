import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs, faqCategories } from "@/content/faqs";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/content/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos tus dudas sobre capacidad, tarifas, mascotas, jacuzzi, transporte, pagos y más en Entre Guaduales.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
];

export default function FaqPage() {
  const categories = faqCategories();
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FaqJsonLd items={faqs.map((f) => ({ q: f.q, a: f.a }))} />
      <PageHero
        eyebrow="Preguntas frecuentes"
        title="Todo lo que quieres saber antes de venir"
        subtitle="Las respuestas a lo que más nos preguntan. Si te queda alguna duda, escríbenos con gusto."
        image="/images/interiores/comedor-flores.jpg"
        imageAlt="Comedor con flores frescas"
        breadcrumbs={breadcrumbs}
        compact
      />

      <Section tone="ivory">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {categories.map((cat) => {
              const items: AccordionItem[] = faqs
                .filter((f) => f.category === cat)
                .map((f) => ({ q: f.q, a: f.a, badge: f.pending ? "por confirmar" : undefined }));
              return (
                <div key={cat}>
                  <h2 className="mb-3 font-display text-xl text-forest-900">{cat}</h2>
                  <Accordion items={items} />
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-forest-950 p-8 text-center text-ivory-50">
            <h2 className="font-display text-2xl">¿No encontraste tu respuesta?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-ivory-50/80">
              Escríbenos por WhatsApp y con gusto resolvemos cualquier duda sobre tu estadía.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} variant="whatsapp" icon="whatsapp" iconPosition="left">
                Escríbenos por WhatsApp
              </Button>
              <Button href="/reservar" variant="gold" icon="arrowRight">
                Consultar disponibilidad
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
