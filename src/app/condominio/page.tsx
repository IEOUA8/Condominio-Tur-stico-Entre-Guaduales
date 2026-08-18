import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "El condominio",
  description:
    "Un condominio turístico entre la guadua: cabañas privadas, jacuzzi, lago, zona BBQ, fogatero, senderos y amplias zonas verdes.",
  alternates: { canonical: "/condominio" },
};

const breadcrumbs = [
  { name: "Inicio", href: "/" },
  { name: "El condominio", href: "/condominio" },
];

const highlights: { icon: IconName; title: string; text: string }[] = [
  { icon: "cabin", title: "Cabañas privadas", text: "Unidades independientes y completamente dotadas para cada experiencia." },
  { icon: "water", title: "Lago y zonas verdes", text: "Un lago, jardines y amplias zonas verdes rodean la propiedad." },
  { icon: "flame", title: "Fogatero y BBQ", text: "Espacios al aire libre para compartir de día y de noche." },
  { icon: "trail", title: "Senderos ecológicos", text: "Caminos entre la guadua para recorrer con calma." },
];

export default function CondominioPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <PageHero
        eyebrow="El lugar"
        title="Un refugio entre la guadua y la naturaleza"
        subtitle="Entre Guaduales es un condominio turístico pensado para el descanso, la privacidad y el tiempo compartido en contacto con la naturaleza."
        image="/images/exteriores/panoramica-lago.jpg"
        imageAlt="Vista panorámica del condominio con lago"
        breadcrumbs={breadcrumbs}
      />

      <Section tone="white">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-lg">
              <Eyebrow>Nuestra esencia</Eyebrow>
              <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
                Tiempo de calidad, privacidad y naturaleza
              </h2>
              <p className="mt-4 leading-relaxed text-forest-900/75">
                No ofrecemos únicamente noches de alojamiento. Ofrecemos un lugar para
                detener el ritmo, reconectar con quienes quieres y crear recuerdos que
                permanecen. Cada cabaña es un espacio privado; cada rincón exterior, una
                invitación a estar presente.
              </p>
              <p className="mt-4 leading-relaxed text-forest-900/75">
                Desde escapadas en pareja hasta el condominio completo para tu grupo, aquí
                encuentras la escala justa de intimidad y encuentro.
              </p>
              <Button href="/experiencias" variant="primary" className="mt-6" icon="arrowRight">
                Ver las experiencias
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/images/jacuzzi/jacuzzi-atardecer.jpg" alt="Jacuzzi privado al atardecer" fill sizes="50vw" className="object-cover" />
              </div>
              <div className="mt-8 grid gap-3">
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image src="/images/exteriores/cabana-fachada.jpg" alt="Fachada de cabaña" fill sizes="50vw" className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-3xl">
                  <Image src="/images/naturaleza/heliconia.jpg" alt="Heliconia del jardín" fill sizes="50vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ivory">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Espacios</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">Lo que hace especial al lugar</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 60}>
                <div className="h-full rounded-3xl border border-forest-900/8 bg-white p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-guadua-700/10 text-guadua-700">
                    <Icon name={h.icon} size={24} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-forest-900">{h.title}</h3>
                  <p className="mt-2 text-sm text-forest-900/70">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/galeria" variant="secondary" icon="arrowRight">Ver la galería</Button>
            <Button href="/ubicacion" variant="ghost" icon="arrowRight">Cómo llegar</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
