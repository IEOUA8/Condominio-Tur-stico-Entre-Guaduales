import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AntifraudNotice } from "@/components/ui/AntifraudNotice";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/content/site";

const steps = [
  { n: 1, title: "Cuéntanos tu plan", text: "Fechas, huéspedes y tipo de viaje en pocos pasos." },
  { n: 2, title: "Recibe tu recomendación", text: "Te sugerimos la experiencia ideal con una tarifa estimada." },
  { n: 3, title: "Confirmamos por WhatsApp", text: "Recibes un número de solicitud y coordinamos disponibilidad." },
];

export function ConversionClose() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-20 text-ivory-50 sm:py-28">
      <Image
        src="/images/momentos/luna-lago.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/50" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <span aria-hidden className="h-px w-8 bg-gold-400/70" />
            Tu escapada empieza aquí
            <span aria-hidden className="h-px w-8 bg-gold-400/70" />
          </span>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            Tu próxima historia puede comenzar entre guaduales
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory-50/80">
            Envía tu solicitud en pocos pasos y coordina tu estadía con nuestro
            equipo. Sin compromiso hasta confirmar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/reservar" variant="gold" size="lg" icon="arrowRight">
              Consultar disponibilidad
            </Button>
            <Button
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              variant="whatsapp"
              size="lg"
              icon="whatsapp"
              iconPosition="left"
            >
              Hablar por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/12 bg-white/5 p-6 text-left backdrop-blur-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 font-display text-lg text-forest-950">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-ivory-50/75">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <AntifraudNotice tone="dark" />
        </div>
      </Container>
    </section>
  );
}
