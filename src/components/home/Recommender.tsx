"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { recommend } from "@/lib/recommend";
import { computePrice } from "@/lib/pricing";
import { formatCOP } from "@/lib/format";
import type { TripReason } from "@/lib/booking";
import { track } from "@/lib/analytics";

const groupOptions: { value: TripReason; label: string; icon: IconName; guests: number }[] = [
  { value: "pareja", label: "Pareja", icon: "hotTub", guests: 2 },
  { value: "familia", label: "Familia", icon: "users", guests: 6 },
  { value: "dos-familias", label: "Dos familias", icon: "users", guests: 16 },
  { value: "amigos", label: "Amigos o grupo", icon: "sparkles", guests: 12 },
];

export function Recommender() {
  const [reason, setReason] = useState<TripReason>("familia");
  const [guests, setGuests] = useState(6);
  const [nights, setNights] = useState(2);
  const [pets, setPets] = useState(false);

  const result = useMemo(() => recommend({ guests, reason, pets }), [guests, reason, pets]);
  const price = useMemo(() => computePrice(result.primary, nights), [result.primary, nights]);

  useEffect(() => {
    track("recommendation_generated", { experience: result.primary.slug, guests, nights });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result.primary.slug]);

  const pickGroup = (value: TripReason, presetGuests: number) => {
    setReason(value);
    setGuests(presetGuests);
  };

  return (
    <Section id="recomendador" tone="sand">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Recomendador</Eyebrow>
          <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
            Encuentra tu experiencia ideal
          </h2>
          <p className="mt-4 text-forest-900/70">
            Cuéntanos sobre tu viaje y te sugerimos la mejor opción con una tarifa
            estimada. Puedes ajustar tus respuestas cuando quieras.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-stretch">
          {/* Controles */}
          <div className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_-24px_rgba(11,33,27,0.4)] sm:p-8">
            <fieldset>
              <legend className="text-sm font-semibold text-forest-900">¿Con quién viajas?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {groupOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={reason === opt.value}
                    onClick={() => pickGroup(opt.value, opt.guests)}
                    className={cn(
                      "flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 text-xs font-medium transition-colors",
                      reason === opt.value
                        ? "border-guadua-700 bg-guadua-700/10 text-guadua-700"
                        : "border-forest-900/10 text-forest-900/70 hover:border-forest-900/25",
                    )}
                  >
                    <Icon name={opt.icon} size={22} />
                    {opt.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Stepper label="¿Cuántas personas?" value={guests} min={1} max={26} onChange={setGuests} />
              <Stepper label="¿Cuántas noches?" value={nights} min={1} max={14} onChange={setNights} />
            </div>

            <div className="mt-6">
              <span className="text-sm font-semibold text-forest-900">¿Viajan con mascota?</span>
              <div className="mt-3 flex gap-2.5">
                {[
                  { v: false, l: "No" },
                  { v: true, l: "Sí" },
                ].map((o) => (
                  <button
                    key={o.l}
                    type="button"
                    aria-pressed={pets === o.v}
                    onClick={() => setPets(o.v)}
                    className={cn(
                      "flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                      pets === o.v
                        ? "border-guadua-700 bg-guadua-700/10 text-guadua-700"
                        : "border-forest-900/10 text-forest-900/70 hover:border-forest-900/25",
                    )}
                  >
                    {o.v && <Icon name="paw" size={16} />}
                    {o.l}
                  </button>
                ))}
              </div>
              {pets && (
                <p className="mt-2 text-xs text-forest-900/60">
                  Se permiten mascotas bajo responsabilidad del huésped. No ingresan al jacuzzi ni a la zona BBQ.
                </p>
              )}
            </div>
          </div>

          {/* Resultado */}
          <div className="relative overflow-hidden rounded-3xl bg-forest-950 text-ivory-50">
            <Image
              src={result.primary.featured.src}
              alt={result.primary.featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-35"
            />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-400">
                  <Icon name="sparkles" size={13} /> Te recomendamos
                </span>
                <h3 className="mt-4 font-display text-3xl">{result.primary.name}</h3>
                <p className="mt-2 text-sm text-ivory-50/80">{result.reason}</p>
              </div>

              <div className="mt-6">
                <div className="flex items-end justify-between border-t border-white/15 pt-5">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ivory-50/60">
                      Estimado · {nights} {nights === 1 ? "noche" : "noches"}
                    </p>
                    <p className="tnum font-display text-3xl text-white">
                      {price.requiresQuote || price.isEstimate ? "desde " : ""}
                      {formatCOP(price.total)}
                    </p>
                    {price.requiresQuote && (
                      <p className="mt-1 text-xs text-gold-400/90">Sujeto a cotización personalizada</p>
                    )}
                  </div>
                  <Icon name="users" size={20} className="mb-2 text-ivory-50/50" />
                </div>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  <Button
                    href={`/reservar?exp=${result.primary.slug}&guests=${guests}&nights=${nights}`}
                    variant="gold"
                    icon="arrowRight"
                  >
                    Consultar disponibilidad
                  </Button>
                  <Link
                    href={`/experiencias/${result.primary.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-2.5 text-sm font-medium text-ivory-50 hover:bg-white/10"
                  >
                    Ver experiencia
                  </Link>
                </div>
                {result.alternatives.length > 0 && (
                  <p className="mt-4 text-xs text-ivory-50/60">
                    También compatible:{" "}
                    {result.alternatives.map((a, i) => (
                      <span key={a.slug}>
                        <Link href={`/experiencias/${a.slug}`} className="underline hover:text-gold-400">
                          {a.name}
                        </Link>
                        {i < result.alternatives.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <span className="text-sm font-semibold text-forest-900">{label}</span>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="button"
          aria-label={`Disminuir ${label}`}
          onClick={() => onChange(Math.max(min, value - 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
        >
          <Icon name="minus" size={16} />
        </button>
        <span className="tnum w-10 text-center font-display text-2xl text-forest-900">{value}</span>
        <button
          type="button"
          aria-label={`Aumentar ${label}`}
          onClick={() => onChange(Math.min(max, value + 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
        >
          <Icon name="plus" size={16} />
        </button>
      </div>
    </div>
  );
}
