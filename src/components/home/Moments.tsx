import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const moments = [
  { time: "Amanecer", img: "/images/exteriores/jardin-verde.jpg", alt: "Mañana entre las zonas verdes", text: "El día empieza con niebla ligera sobre el verde y el canto de los pájaros." },
  { time: "Tarde de descanso", img: "/images/jacuzzi/jacuzzi-atardecer.jpg", alt: "Jacuzzi privado por la tarde", text: "Horas lentas: jacuzzi, lectura y el sonido del viento entre la guadua." },
  { time: "Atardecer para compartir", img: "/images/exteriores/panoramica-lago.jpg", alt: "Atardecer sobre el lago", text: "La luz dorada cae sobre el lago mientras se enciende la zona BBQ." },
  { time: "Noche junto al fogatero", img: "/images/momentos/fogatero-personas.jpg", alt: "Noche alrededor del fogatero", text: "El fuego, las historias y un cielo despejado cierran el día." },
];

export function Moments() {
  return (
    <Section tone="ivory">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Un día entre guaduales</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Cada momento tiene su propia luz
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {moments.map((m, i) => (
            <Reveal key={m.time} delay={i * 70}>
              <article className="group relative h-80 overflow-hidden rounded-3xl">
                <Image
                  src={m.img}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory-50">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl">{m.time}</h3>
                  <p className="mt-1.5 text-sm text-ivory-50/85">{m.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
