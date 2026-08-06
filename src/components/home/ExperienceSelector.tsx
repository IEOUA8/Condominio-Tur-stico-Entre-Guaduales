import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Icon } from "@/components/ui/Icon";
import { experiences } from "@/content/experiences";

export function ExperienceSelector() {
  return (
    <Section id="experiencias" tone="ivory">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Experiencias</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Una experiencia para cada forma de compartir
          </h2>
          <p className="mt-4 text-forest-900/70">
            Desde una escapada íntima en pareja hasta el condominio completo para
            tu grupo. Elige la que mejor se ajusta a tu viaje.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.slug} delay={i * 60}>
              <ExperienceCard exp={exp} priority={i < 2} />
            </Reveal>
          ))}

          {/* Tile de cierre: recomendador (editorial, no "botón en caja") */}
          <Reveal delay={experiences.length * 60}>
            <Link
              href="#recomendador"
              className="group flex h-full flex-col justify-between rounded-3xl bg-forest-950 p-8 text-ivory-50 ring-1 ring-white/5 transition-colors hover:bg-forest-900"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400/90">
                  Recomendador
                </span>
                <h3 className="mt-4 font-display text-2xl leading-snug">¿No sabes cuál elegir?</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-50/75">
                  Responde tres preguntas y te sugerimos la experiencia ideal para tu
                  grupo, con una tarifa estimada.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                Usar el recomendador
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
