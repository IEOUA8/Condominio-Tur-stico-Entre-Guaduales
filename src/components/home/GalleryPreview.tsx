import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/* Composición editorial (no cuadrícula monótona, §7.8). */
const shots = [
  { src: "/images/interiores/sala.jpg", alt: "Sala amplia con ventanales", cls: "col-span-2 row-span-2" },
  { src: "/images/jacuzzi/jacuzzi-atardecer.jpg", alt: "Jacuzzi privado al atardecer", cls: "" },
  { src: "/images/exteriores/cabana-fachada.jpg", alt: "Fachada de cabaña entre jardines", cls: "" },
  { src: "/images/interiores/cocina.jpg", alt: "Cocina equipada", cls: "" },
  { src: "/images/momentos/luna-lago.jpg", alt: "Ambiente nocturno junto al lago", cls: "" },
  { src: "/images/naturaleza/heliconia.jpg", alt: "Heliconia del jardín", cls: "" },
  { src: "/images/interiores/habitacion-cama.jpg", alt: "Habitación con vista al jardín", cls: "" },
];

export function GalleryPreview() {
  return (
    <Section id="galeria" tone="forest">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Eyebrow tone="ivory">Galería</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-ivory-50 sm:text-4xl">
              Espacios reales, luz real
            </h2>
            <p className="mt-4 text-ivory-50/70">
              Fotografías del condominio: cabañas, habitaciones, jacuzzi,
              naturaleza y los momentos que se viven aquí.
            </p>
          </div>
          <Button
            href="/galeria"
            variant="outline"
            className="border-ivory-50/40 text-ivory-50 hover:bg-ivory-50 hover:text-forest-900"
            icon="arrowRight"
          >
            Ver galería completa
          </Button>
        </div>

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-4">
          {shots.map((s) => (
            <div key={s.src} className={`relative overflow-hidden rounded-2xl ${s.cls}`}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
