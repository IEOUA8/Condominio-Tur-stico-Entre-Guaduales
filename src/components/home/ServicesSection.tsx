import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <Section id="servicios" tone="ivory">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <Eyebrow>Servicios incluidos</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
              Todo lo esencial, entre la naturaleza
            </h2>
          </div>
          <p className="max-w-sm text-sm text-forest-900/60">
            Cada experiencia incluye estos servicios. El transporte tiene un costo
            adicional y se coordina con anticipación.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 5) * 50}>
              <div className="group flex h-full flex-col rounded-2xl border border-forest-900/8 bg-white p-5 transition-colors hover:border-guadua-700/30">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-guadua-700/10 text-guadua-700 transition-colors group-hover:bg-guadua-700 group-hover:text-ivory-50">
                  <Icon name={s.icon as IconName} size={22} />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-forest-900">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-forest-900/60">{s.description}</p>
                {s.note && (
                  <span className="mt-2 inline-block w-fit rounded-full bg-sand-200/70 px-2 py-0.5 text-[11px] font-medium text-clay-600">
                    {s.note}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
