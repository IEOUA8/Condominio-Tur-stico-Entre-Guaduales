import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { testimonials } from "@/content/testimonials";

const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Fotografías y datos reales", text: "Todo lo que ves corresponde al condominio. Sin imágenes de banco." },
  { icon: "whatsapp", title: "Canales oficiales", text: "Coordinamos tu reserva por canales oficiales, con número de solicitud." },
  { icon: "info", title: "Reglamento claro", text: "Conoces las condiciones y el reglamento antes de confirmar tu estadía." },
  { icon: "clock", title: "Cámaras de seguridad 24 h", text: "La propiedad está monitoreada las 24 horas en zonas comunes." },
];

export function TrustAndTestimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <Section tone="white">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Confianza</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Reserva con tranquilidad
          </h2>
          <p className="mt-4 text-forest-900/70">
            Queremos que reserves con total confianza. Estos son nuestros
            compromisos contigo antes, durante y después de tu estadía.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="rounded-2xl border border-forest-900/8 bg-ivory-50 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-guadua-700/10 text-guadua-700">
                <Icon name={t.icon} size={22} />
              </span>
              <h3 className="mt-4 text-base font-semibold text-forest-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-900/65">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonios: solo reseñas verificables. Estado honesto mientras tanto. */}
        <div className="mt-10 rounded-3xl bg-sand-200/40 p-8 text-center sm:p-10">
          {hasTestimonials ? (
            <div className="grid gap-6 sm:grid-cols-3">
              {testimonials.map((t, i) => (
                <figure key={i} className="rounded-2xl bg-white p-6 text-left shadow-sm">
                  <div className="flex text-gold-500" aria-hidden>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size={16} className="fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm text-forest-900/80">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-xs font-medium text-forest-900">
                    {t.name} · <span className="text-forest-900/60">{t.tripType}</span>
                    {t.source && <span className="text-forest-900/50"> · {t.source}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <>
              <Icon name="sparkles" size={28} className="mx-auto text-gold-500" />
              <h3 className="mt-3 font-display text-2xl text-forest-900">
                Sé de los primeros en compartir tu experiencia
              </h3>
              <p className="mx-auto mt-3 max-w-lg text-sm text-forest-900/70">
                Publicaremos aquí las reseñas verificadas de nuestros huéspedes.
                Preferimos no inventar testimonios: cuando vivas Entre Guaduales,
                tu opinión real tendrá su lugar.
              </p>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
