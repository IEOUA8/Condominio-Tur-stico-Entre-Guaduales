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

        {/* Testimonios: solo reseñas verificables (reseñas reales de Airbnb).
            Carrusel en bucle continuo: una sola fila, ~3 visibles, se pausa al
            pasar el cursor. La lista se duplica para el loop sin salto. */}
        {hasTestimonials ? (
          <div className="mt-12">
            <p className="text-center text-sm font-medium text-forest-900/55">
              Reseñas reales de nuestros huéspedes · Airbnb ★★★★★
            </p>
            <div
              className="marquee-viewport mt-6 overflow-hidden rounded-3xl bg-sand-200/40 py-8"
              aria-label="Reseñas de huéspedes en Airbnb"
            >
              <ul className="marquee-track flex w-max items-stretch">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <li
                    key={i}
                    aria-hidden={i >= testimonials.length}
                    className="mr-5 flex w-[270px] shrink-0 flex-col rounded-2xl bg-white p-6 text-left shadow-sm sm:w-[310px] lg:w-[340px]"
                  >
                    <div className="flex text-gold-500" aria-hidden>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Icon key={s} name="star" size={16} className="fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-forest-900/80">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 pt-3 text-xs font-medium text-forest-900">
                      {t.name} · <span className="text-forest-900/60">{t.tripType}</span>
                      {t.source && <span className="text-forest-900/50"> · {t.source}</span>}
                    </figcaption>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-sand-200/40 p-8 text-center sm:p-10">
            <Icon name="sparkles" size={28} className="mx-auto text-gold-500" />
            <h3 className="mt-3 font-display text-2xl text-forest-900">
              Sé de los primeros en compartir tu experiencia
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-forest-900/70">
              Publicaremos aquí las reseñas verificadas de nuestros huéspedes.
              Preferimos no inventar testimonios: cuando vivas Entre Guaduales,
              tu opinión real tendrá su lugar.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
