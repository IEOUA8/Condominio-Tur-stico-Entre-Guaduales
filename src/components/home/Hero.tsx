import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { QuickSearchCard } from "@/components/home/QuickSearchCard";

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden lg:min-h-[88svh]">
      {/* Fondo fotográfico real */}
      <Image
        src="/images/jacuzzi/jacuzzi-atardecer.jpg"
        alt="Jacuzzi privado iluminado al atardecer en el Condominio Turístico Entre Guaduales"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Scrim de legibilidad en dos capas: lateral (anclado al texto) + inferior.
          Mantiene la foto visible y garantiza contraste del texto. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/45 to-forest-950/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-950/25 to-forest-950/35" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-ivory-50/85">
            <span aria-hidden className="h-px w-8 bg-gold-400/80" />
            Condominio turístico boutique
          </span>

          <h1 className="mt-6 max-w-[16ch] font-display text-[2.6rem] leading-[1.04] text-white sm:text-6xl lg:text-[4.25rem]">
            Un lugar para detener el tiempo
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ivory-50/90 sm:text-lg">
            Cabañas privadas, jacuzzi y naturaleza para compartir experiencias
            inolvidables en pareja, familia o con amigos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/reservar" variant="gold" size="lg" icon="arrowRight">
              Encontrar mi experiencia
            </Button>
            <Button
              href="/condominio"
              variant="outline"
              size="lg"
              className="border-ivory-50/50 text-white hover:bg-ivory-50 hover:text-forest-900"
            >
              Explorar el lugar
            </Button>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <QuickSearchCard />
        </div>
      </div>

      {/* Indicador de scroll sutil */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-4 hidden justify-center lg:flex">
        <span className="h-9 w-5 rounded-full border border-ivory-50/40">
          <span className="mx-auto mt-1.5 block h-1.5 w-1 animate-bounce rounded-full bg-ivory-50/70" />
        </span>
      </div>
    </section>
  );
}
