import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/content/faqs";

const featured = ["Capacidad", "Mascotas", "Jacuzzi", "Eventos", "Pagos", "Cancelaciones"];

export function FaqPreview() {
  const items: AccordionItem[] = featured
    .map((cat) => faqs.find((f) => f.category === cat))
    .filter((f): f is NonNullable<typeof f> => Boolean(f))
    .map((f) => ({ q: f.q, a: f.a, badge: f.pending ? "por confirmar" : undefined }));

  return (
    <Section tone="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
              Resolvemos tus dudas
            </h2>
            <p className="mt-4 text-forest-900/70">
              Las respuestas a lo que más nos preguntan. Si te queda alguna duda,
              escríbenos y con gusto te ayudamos.
            </p>
            <Button href="/preguntas-frecuentes" variant="secondary" className="mt-6" icon="arrowRight">
              Ver todas las preguntas
            </Button>
          </div>
          <Accordion items={items} defaultOpen={0} />
        </div>
      </Container>
    </Section>
  );
}
