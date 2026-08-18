import Image from "next/image";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const blocks = [
  {
    img: "/images/lugar/zona-social.jpg",
    alt: "Sala exterior con pérgola y zona BBQ entre jardines",
    title: "Privacidad para reencontrarse",
    text: "Cada cabaña es un refugio íntimo con jacuzzi privado. Un espacio para bajar el ritmo, conversar sin prisa y dejar que el atardecer haga el resto.",
  },
  {
    img: "/images/lugar/fogatero-noche.jpg",
    alt: "Fogatero encendido rodeado de bancas al caer la noche",
    title: "Tiempo compartido alrededor del fuego",
    text: "El fogatero y la zona BBQ reúnen a la familia y a los amigos cuando cae la noche. Historias, risas y un cielo despejado que invita a quedarse un rato más.",
  },
  {
    img: "/images/lugar/fogatero-jardines.jpg",
    alt: "Jardines, flores y zonas verdes que rodean el fogatero del condominio",
    title: "Naturaleza que rodea cada rincón",
    text: "Senderos entre la guadua, jardines, un lago y amplias zonas verdes. La naturaleza no es el fondo: es parte de la experiencia, en cada mañana y cada caminata.",
  },
];

export function Narrative() {
  return (
    <Section tone="white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>El lugar</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Más que un alojamiento, una forma de estar
          </h2>
          <p className="mt-4 text-forest-900/70">
            Entre Guaduales no vende únicamente noches. Ofrece tiempo de calidad,
            privacidad y momentos memorables en contacto con la naturaleza.
          </p>
        </div>

        <div className="mt-12 space-y-16 lg:space-y-24">
          {blocks.map((b, i) => (
            <Reveal key={b.title}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_24px_60px_-28px_rgba(11,33,27,0.55)]">
                  <Image
                    src={b.img}
                    alt={b.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <div className="max-w-md">
                  <span className="font-display text-5xl text-sand-300">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-2xl text-forest-900 sm:text-3xl">{b.title}</h3>
                  <p className="mt-4 leading-relaxed text-forest-900/75">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
