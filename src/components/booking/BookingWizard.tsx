"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { AntifraudNotice } from "@/components/ui/AntifraudNotice";
import { Stepper, ChipOption, Field, inputClass } from "@/components/booking/fields";
import { cn } from "@/lib/cn";
import { experiences, getExperience, type Experience } from "@/content/experiences";
import { computePrice } from "@/lib/pricing";
import { recommend } from "@/lib/recommend";
import { formatCOP, formatDateShort } from "@/lib/format";
import {
  submitBookingRequest,
  totalGuests,
  TRIP_REASON_LABELS,
  type TripReason,
  type BookingRequest,
  type GuestGroup,
  type BookingAddons,
  type BookingContact,
} from "@/lib/booking";
import { track } from "@/lib/analytics";

const STEPS = ["Fechas", "Huéspedes", "Motivo", "Experiencia", "Adicionales", "Contacto", "Resumen"];

function nightsBetween(a: string, b: string): number {
  if (!a || !b) return 0;
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  const diff = Math.round((d2.getTime() - d1.getTime()) / 86_400_000);
  return diff > 0 ? diff : 0;
}
const todayISO = () => new Date().toISOString().slice(0, 10);

export function BookingWizard() {
  const params = useSearchParams();

  const [step, setStep] = useState(0);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [group, setGroup] = useState<GuestGroup>({ adults: 2, children: 0, babies: 0, pets: 0 });
  const [reason, setReason] = useState<TripReason | null>(null);
  const [manualExp, setManualExp] = useState<string | null>(null);
  const [addons, setAddons] = useState<BookingAddons>({
    transport: false,
    pet: false,
    specialOccasion: "",
    accessibility: false,
    arrivalTime: "",
    comments: "",
  });
  const [contact, setContact] = useState<BookingContact>({
    firstName: "",
    lastName: "",
    whatsapp: "",
    email: "",
    origin: "",
    preferredContact: "whatsapp",
    dataConsent: false,
    termsAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [result, setResult] = useState<{ id: string; url?: string } | null>(null);

  // Prefill desde la URL (?exp, ?guests, ?nights, ?checkin, ?checkout)
  useEffect(() => {
    const exp = params.get("exp");
    const guests = params.get("guests");
    const ci = params.get("checkin");
    const co = params.get("checkout");
    if (exp && getExperience(exp)) setManualExp(exp);
    if (ci) setCheckIn(ci);
    if (co) setCheckOut(co);
    if (guests) {
      const g = Math.max(1, Math.min(26, parseInt(guests, 10) || 2));
      setGroup((prev) => ({ ...prev, adults: g }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nights = nightsBetween(checkIn, checkOut);
  const guests = totalGuests(group);
  const recommendation = useMemo(
    () => recommend({ guests, reason, pets: group.pets > 0 }),
    [guests, reason, group.pets],
  );
  const selectedExp = useMemo(() => {
    if (manualExp) return getExperience(manualExp) ?? recommendation.primary;
    return recommendation.primary;
  }, [manualExp, recommendation.primary]);
  const price = useMemo(() => computePrice(selectedExp, Math.max(1, nights)), [selectedExp, nights]);
  const overCapacity = guests > selectedExp.maxGuests;

  const validateStep = (s: number): boolean => {
    const e: Record<string, string> = {};
    if (s === 0) {
      if (!checkIn) e.checkIn = "Selecciona la fecha de llegada.";
      if (!checkOut) e.checkOut = "Selecciona la fecha de salida.";
      if (checkIn && checkOut && nights <= 0) e.checkOut = "La salida debe ser posterior a la llegada.";
    }
    if (s === 1) {
      if (guests < 1) e.guests = "Indica al menos un huésped.";
      if (guests > 26) e.guests = "La capacidad máxima del condominio es de 26 huéspedes.";
    }
    if (s === 2 && !reason) e.reason = "Cuéntanos el motivo de tu viaje.";
    if (s === 5) {
      if (!contact.firstName.trim()) e.firstName = "Ingresa tu nombre.";
      if (!contact.lastName.trim()) e.lastName = "Ingresa tu apellido.";
      if (!/^[\d+()\s-]{7,}$/.test(contact.whatsapp)) e.whatsapp = "Ingresa un número de WhatsApp válido.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) e.email = "Ingresa un correo válido.";
      if (!contact.dataConsent) e.dataConsent = "Necesitamos tu autorización para contactarte.";
      if (!contact.termsAccepted) e.termsAccepted = "Debes aceptar las condiciones de la solicitud.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    track("booking_step_completed", { step: STEPS[step], index: step });
    if (step === 0) track("select_dates", { nights });
    if (step === 1) track("select_guests", { guests });
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(0, s - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = () => {
    if (!validateStep(5)) {
      setStep(5);
      return;
    }
    const req: BookingRequest = {
      experienceSlug: selectedExp.slug,
      experienceName: selectedExp.name,
      checkIn,
      checkOut,
      nights: Math.max(1, nights),
      group,
      reason,
      addons,
      contact,
      estimatedTotal: price.total,
      isEstimate: price.isEstimate,
      requiresQuote: price.requiresQuote,
    };
    const r = submitBookingRequest(req);
    track("booking_submitted", {
      experience: selectedExp.slug,
      nights: Math.max(1, nights),
      guests,
      transport: addons.transport,
    });
    setResult({ id: r.id, url: r.whatsappUrl });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (result) {
    return <Confirmation id={result.id} url={result.url} exp={selectedExp.name} />;
  }

  return (
    <div className="pb-40">
      {/* Progreso */}
      <Container className="pt-24 sm:pt-28">
        <ol className="flex items-center gap-1.5 overflow-x-auto pb-2" aria-label="Pasos de la reserva">
          {STEPS.map((label, i) => (
            <li key={label} className="flex flex-1 items-center gap-1.5">
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={cn(
                  "flex h-1.5 w-full rounded-full transition-colors",
                  i < step ? "bg-guadua-700" : i === step ? "bg-gold-500" : "bg-forest-900/12",
                )}
                aria-label={`Paso ${i + 1}: ${label}`}
              />
            </li>
          ))}
        </ol>
        <p className="mt-2 text-sm font-medium text-forest-900/70">
          Paso {step + 1} de {STEPS.length} · <span className="text-forest-900">{STEPS[step]}</span>
        </p>
      </Container>

      <Container className="mt-6">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="rounded-3xl border border-forest-900/8 bg-white p-6 shadow-[0_18px_50px_-28px_rgba(11,33,27,0.4)] sm:p-8">
            {step === 0 && (
              <StepWrap title="¿Cuándo quieres venir?" desc="Elige tus fechas de llegada y salida.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Fecha de llegada" htmlFor="checkin" error={errors.checkIn} required>
                    <input
                      id="checkin"
                      type="date"
                      min={todayISO()}
                      value={checkIn}
                      onChange={(e) => {
                        setCheckIn(e.target.value);
                        if (checkOut && e.target.value >= checkOut) setCheckOut("");
                      }}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Fecha de salida" htmlFor="checkout" error={errors.checkOut} required>
                    <input
                      id="checkout"
                      type="date"
                      min={checkIn || todayISO()}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                </div>
                {nights > 0 && (
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-guadua-700/10 px-4 py-2 text-sm font-medium text-guadua-700">
                    <Icon name="calendar" size={16} /> {nights} {nights === 1 ? "noche" : "noches"}
                  </p>
                )}
              </StepWrap>
            )}

            {step === 1 && (
              <StepWrap title="¿Quiénes viajan?" desc="Cuéntanos la composición de tu grupo.">
                <div className="space-y-3">
                  <Stepper label="Adultos" value={group.adults} min={1} max={26} onChange={(v) => setGroup({ ...group, adults: v })} />
                  <Stepper label="Niños" hint="De 2 a 12 años" value={group.children} max={26} onChange={(v) => setGroup({ ...group, children: v })} />
                  <Stepper label="Bebés" hint="Menores de 2 años" value={group.babies} max={10} onChange={(v) => setGroup({ ...group, babies: v })} />
                  <Stepper label="Mascotas" value={group.pets} max={4} onChange={(v) => { setGroup({ ...group, pets: v }); setAddons((a) => ({ ...a, pet: v > 0 })); if (v > 0) track("pet_selected"); }} />
                </div>
                {errors.guests && (
                  <p className="mt-3 text-sm text-clay-600" role="alert">{errors.guests}</p>
                )}
                <p className="mt-4 text-sm text-forest-900/70">
                  Total: <span className="font-semibold text-forest-900">{guests} huéspedes</span>
                  {group.pets > 0 && ` · ${group.pets} mascota${group.pets > 1 ? "s" : ""}`}
                </p>
              </StepWrap>
            )}

            {step === 2 && (
              <StepWrap title="¿Cuál es el motivo del viaje?" desc="Nos ayuda a recomendarte la mejor experiencia.">
                <div className="flex flex-wrap gap-2.5">
                  {(Object.keys(TRIP_REASON_LABELS) as TripReason[]).map((r) => (
                    <ChipOption key={r} active={reason === r} onClick={() => setReason(r)}>
                      {TRIP_REASON_LABELS[r]}
                    </ChipOption>
                  ))}
                </div>
                {errors.reason && <p className="mt-3 text-sm text-clay-600" role="alert">{errors.reason}</p>}
              </StepWrap>
            )}

            {step === 3 && (
              <StepWrap title="Tu experiencia recomendada" desc="Según tu grupo, esta es la mejor opción. Puedes cambiarla.">
                {!manualExp && (
                  <p className="mb-4 flex items-start gap-2 rounded-xl bg-guadua-700/8 p-3 text-sm text-guadua-700">
                    <Icon name="sparkles" size={16} className="mt-0.5 shrink-0" />
                    {recommendation.reason}
                  </p>
                )}
                <div className="space-y-3">
                  {experiences.map((exp) => {
                    const active = selectedExp.slug === exp.slug;
                    const fits = guests <= exp.maxGuests && guests >= 1;
                    return (
                      <button
                        key={exp.slug}
                        type="button"
                        onClick={() => setManualExp(exp.slug)}
                        className={cn(
                          "flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition-colors",
                          active ? "border-guadua-700 bg-guadua-700/8" : "border-forest-900/10 hover:border-forest-900/25",
                        )}
                      >
                        <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                          <Image src={exp.featured.src} alt={exp.featured.alt} fill sizes="80px" className="object-cover" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="font-medium text-forest-900">{exp.name}</span>
                            {!manualExp && recommendation.primary.slug === exp.slug && (
                              <span className="rounded-full bg-gold-500/20 px-2 py-0.5 text-[11px] font-medium text-clay-600">Recomendada</span>
                            )}
                          </span>
                          <span className="mt-0.5 block text-xs text-forest-900/60">
                            {exp.minGuests === exp.maxGuests ? `${exp.maxGuests}` : `${exp.minGuests}–${exp.maxGuests}`} huéspedes ·{" "}
                            {exp.startingAt ? "desde " : ""}
                            {formatCOP(exp.oneNightPrice)}/noche
                          </span>
                          {!fits && <span className="mt-0.5 block text-[11px] text-clay-600">Capacidad insuficiente para {guests} huéspedes</span>}
                        </span>
                        <span className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full border", active ? "border-guadua-700 bg-guadua-700 text-white" : "border-forest-900/25")}>
                          {active && <Icon name="check" size={14} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {overCapacity && (
                  <p className="mt-3 flex items-start gap-2 rounded-xl bg-clay-500/10 p-3 text-sm text-clay-600">
                    <Icon name="info" size={16} className="mt-0.5 shrink-0" />
                    Tu grupo de {guests} supera la capacidad de esta experiencia. Considera otra opción o el condominio completo.
                  </p>
                )}
              </StepWrap>
            )}

            {step === 4 && (
              <StepWrap title="Adicionales" desc="Opcional. Personaliza tu estadía.">
                <div className="space-y-4">
                  <ToggleRow
                    label="Servicio de transporte"
                    hint="Con costo adicional, coordinado con anticipación."
                    checked={addons.transport}
                    onChange={(v) => { setAddons({ ...addons, transport: v }); if (v) track("transport_selected"); }}
                  />
                  <ToggleRow
                    label="Requiero accesibilidad"
                    hint="Nos anticipamos a tus necesidades."
                    checked={addons.accessibility}
                    onChange={(v) => setAddons({ ...addons, accessibility: v })}
                  />
                  <Field label="Ocasión especial (opcional)" htmlFor="occasion">
                    <input id="occasion" type="text" value={addons.specialOccasion} onChange={(e) => setAddons({ ...addons, specialOccasion: e.target.value })} placeholder="Aniversario, cumpleaños…" className={inputClass} />
                  </Field>
                  <Field label="Hora aproximada de llegada (opcional)" htmlFor="arrival">
                    <input id="arrival" type="time" value={addons.arrivalTime} onChange={(e) => setAddons({ ...addons, arrivalTime: e.target.value })} className={inputClass} />
                  </Field>
                  <Field label="Comentarios (opcional)" htmlFor="comments">
                    <textarea id="comments" rows={3} value={addons.comments} onChange={(e) => setAddons({ ...addons, comments: e.target.value })} placeholder="Cuéntanos cualquier detalle que debamos saber." className={inputClass} />
                  </Field>
                </div>
              </StepWrap>
            )}

            {step === 5 && (
              <StepWrap title="Tus datos de contacto" desc="Para enviarte la confirmación y coordinar tu reserva.">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre" htmlFor="firstName" error={errors.firstName} required>
                    <input id="firstName" value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} className={inputClass} autoComplete="given-name" />
                  </Field>
                  <Field label="Apellido" htmlFor="lastName" error={errors.lastName} required>
                    <input id="lastName" value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} className={inputClass} autoComplete="family-name" />
                  </Field>
                  <Field label="WhatsApp" htmlFor="whatsapp" error={errors.whatsapp} required>
                    <input id="whatsapp" inputMode="tel" value={contact.whatsapp} onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })} placeholder="+57 300 000 0000" className={inputClass} autoComplete="tel" />
                  </Field>
                  <Field label="Correo electrónico" htmlFor="email" error={errors.email} required>
                    <input id="email" type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="tucorreo@ejemplo.com" className={inputClass} autoComplete="email" />
                  </Field>
                  <Field label="Ciudad o país de origen (opcional)" htmlFor="origin">
                    <input id="origin" value={contact.origin} onChange={(e) => setContact({ ...contact, origin: e.target.value })} className={inputClass} />
                  </Field>
                  <Field label="Prefiero que me contacten por" htmlFor="pref">
                    <select id="pref" value={contact.preferredContact} onChange={(e) => setContact({ ...contact, preferredContact: e.target.value as BookingContact["preferredContact"] })} className={inputClass}>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="correo">Correo</option>
                      <option value="llamada">Llamada</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-5 space-y-3">
                  <Checkbox
                    checked={contact.dataConsent}
                    onChange={(v) => setContact({ ...contact, dataConsent: v })}
                    error={errors.dataConsent}
                  >
                    Autorizo el tratamiento de mis datos personales conforme a la{" "}
                    <Link href="/politica-de-privacidad" className="font-medium text-guadua-700 underline" target="_blank">
                      política de privacidad
                    </Link>.
                  </Checkbox>
                  <Checkbox
                    checked={contact.termsAccepted}
                    onChange={(v) => { setContact({ ...contact, termsAccepted: v }); if (v) track("accept_terms"); }}
                    error={errors.termsAccepted}
                  >
                    He leído el{" "}
                    <Link href="/reglamento" className="font-medium text-guadua-700 underline" target="_blank">reglamento</Link>{" "}
                    y acepto las condiciones de esta solicitud.
                  </Checkbox>
                </div>
              </StepWrap>
            )}

            {step === 6 && (
              <StepWrap title="Revisa tu solicitud" desc="Confirma que todo esté correcto antes de enviar.">
                <Summary
                  exp={selectedExp.name}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  nights={Math.max(1, nights)}
                  group={group}
                  reason={reason}
                  addons={addons}
                  price={price}
                  onEdit={setStep}
                />
              </StepWrap>
            )}
          </div>

          {/* Panel lateral: resumen persistente */}
          <SidePanel exp={selectedExp} nights={nights} guests={guests} checkIn={checkIn} checkOut={checkOut} price={price} overCapacity={overCapacity} />
        </div>
      </Container>

      {/* Barra de acción fija */}
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-white/90 backdrop-blur">
        <Container className="flex items-center justify-between gap-3 py-3">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium text-forest-900 disabled:opacity-30"
          >
            <Icon name="chevronLeft" size={18} /> Atrás
          </button>
          <div className="hidden text-sm text-forest-900/60 sm:block">
            {nights > 0 && selectedExp && (
              <>
                {price.isEstimate ? "desde " : ""}
                <span className="tnum font-semibold text-forest-900">{formatCOP(price.total)}</span> estimado
              </>
            )}
          </div>
          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-3 text-sm font-semibold text-ivory-50 hover:bg-guadua-700"
            >
              Continuar <Icon name="arrowRight" size={18} />
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-950 hover:bg-gold-400"
            >
              Enviar solicitud <Icon name="whatsapp" size={18} />
            </button>
          )}
        </Container>
      </div>
    </div>
  );
}

/* ----------------------------- Sub-componentes ---------------------------- */

function StepWrap({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-forest-900 sm:text-3xl">{title}</h2>
      <p className="mt-1.5 text-sm text-forest-900/65">{desc}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function ToggleRow({ label, hint, checked, onChange }: { label: string; hint?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className="flex w-full items-center justify-between rounded-2xl border border-forest-900/10 bg-white px-4 py-3 text-left"
    >
      <span>
        <span className="block text-sm font-medium text-forest-900">{label}</span>
        {hint && <span className="block text-xs text-forest-900/55">{hint}</span>}
      </span>
      <span className={cn("relative h-6 w-11 rounded-full transition-colors", checked ? "bg-guadua-700" : "bg-forest-900/20")}>
        <span className={cn("absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all", checked ? "left-[1.375rem]" : "left-0.5")} />
      </span>
    </button>
  );
}

function Checkbox({ checked, onChange, error, children }: { checked: boolean; onChange: (v: boolean) => void; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="flex cursor-pointer items-start gap-3">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors", checked ? "border-guadua-700 bg-guadua-700 text-white" : "border-forest-900/30")}
        >
          {checked && <Icon name="check" size={13} />}
        </button>
        <span className="text-sm text-forest-900/80">{children}</span>
      </label>
      {error && <p className="ml-8 mt-1 text-xs text-clay-600" role="alert">{error}</p>}
    </div>
  );
}

function SidePanel({
  exp,
  nights,
  guests,
  checkIn,
  checkOut,
  price,
  overCapacity,
}: {
  exp: Experience;
  nights: number;
  guests: number;
  checkIn: string;
  checkOut: string;
  price: ReturnType<typeof computePrice>;
  overCapacity: boolean;
}) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-3xl border border-forest-900/8 bg-white shadow-[0_18px_50px_-28px_rgba(11,33,27,0.4)]">
        <div className="relative h-32">
          <Image src={exp.featured.src} alt={exp.featured.alt} fill sizes="400px" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent" />
          <p className="absolute bottom-3 left-4 font-display text-lg text-ivory-50">{exp.name}</p>
        </div>
        <div className="space-y-2.5 p-5 text-sm">
          <Row label="Fechas" value={checkIn && checkOut ? `${formatDateShort(checkIn)} → ${formatDateShort(checkOut)}` : "Por definir"} />
          <Row label="Noches" value={nights > 0 ? String(nights) : "—"} />
          <Row label="Huéspedes" value={String(guests)} />
          <div className="flex items-end justify-between border-t border-forest-900/10 pt-3">
            <span className="text-forest-900/70">Total estimado</span>
            <span className="tnum font-display text-xl text-guadua-700">
              {price.isEstimate && <span className="text-xs font-normal text-forest-900/50">desde </span>}
              {formatCOP(price.total)}
            </span>
          </div>
          {overCapacity && (
            <p className="rounded-lg bg-clay-500/10 p-2 text-xs text-clay-600">Grupo por encima de la capacidad seleccionada.</p>
          )}
          <p className="pt-1 text-[11px] text-forest-900/50">Valor por alojamiento completo. Solicitud, no reserva confirmada.</p>
        </div>
      </div>
    </aside>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-forest-900/60">{label}</span>
      <span className="font-medium text-forest-900">{value}</span>
    </div>
  );
}

function Summary({
  exp,
  checkIn,
  checkOut,
  nights,
  group,
  reason,
  addons,
  price,
  onEdit,
}: {
  exp: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  group: GuestGroup;
  reason: TripReason | null;
  addons: BookingAddons;
  price: ReturnType<typeof computePrice>;
  onEdit: (step: number) => void;
}) {
  return (
    <div className="space-y-3">
      <SummaryRow label="Experiencia" value={exp} onEdit={() => onEdit(3)} />
      <SummaryRow label="Fechas" value={`${formatDateShort(checkIn)} → ${formatDateShort(checkOut)} · ${nights} ${nights === 1 ? "noche" : "noches"}`} onEdit={() => onEdit(0)} />
      <SummaryRow
        label="Huéspedes"
        value={`${group.adults} adultos, ${group.children} niños, ${group.babies} bebés${group.pets ? ` · ${group.pets} mascota(s)` : ""}`}
        onEdit={() => onEdit(1)}
      />
      <SummaryRow label="Motivo" value={reason ? TRIP_REASON_LABELS[reason] : "—"} onEdit={() => onEdit(2)} />
      <SummaryRow
        label="Adicionales"
        value={[addons.transport && "Transporte", addons.accessibility && "Accesibilidad", addons.specialOccasion && `Ocasión: ${addons.specialOccasion}`].filter(Boolean).join(", ") || "Ninguno"}
        onEdit={() => onEdit(4)}
      />

      <div className="flex items-end justify-between rounded-2xl bg-forest-950 p-5 text-ivory-50">
        <div>
          <p className="text-xs uppercase tracking-wide text-ivory-50/60">Valor estimado</p>
          {price.requiresQuote && <p className="text-xs text-gold-400">Sujeto a cotización</p>}
        </div>
        <p className="tnum font-display text-3xl">
          {(price.isEstimate || price.requiresQuote) && <span className="text-base font-normal text-ivory-50/60">desde </span>}
          {formatCOP(price.total)}
        </p>
      </div>

      <div className="rounded-2xl bg-sand-200/40 p-4 text-sm text-forest-900/75">
        <p className="font-medium text-forest-900">Antes de enviar, ten en cuenta:</p>
        <ul className="mt-2 space-y-1 text-xs">
          <li>· Esta es una solicitud de disponibilidad, no una reserva confirmada.</li>
          <li>· Solo ingresan huéspedes registrados. No se permiten fiestas ni eventos.</li>
          <li>· Confirmaremos disponibilidad y condiciones por tu canal preferido.</li>
        </ul>
      </div>
      <AntifraudNotice />
    </div>
  );
}

function SummaryRow({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-forest-900/10 bg-ivory-50 p-4">
      <div className="min-w-0">
        <p className="text-xs text-forest-900/55">{label}</p>
        <p className="text-sm font-medium text-forest-900">{value}</p>
      </div>
      <button type="button" onClick={onEdit} className="shrink-0 rounded-full px-3 py-1 text-xs font-medium text-guadua-700 hover:bg-guadua-700/8">
        Editar
      </button>
    </div>
  );
}

function Confirmation({ id, url, exp }: { id: string; url?: string; exp: string }) {
  return (
    <Container className="min-h-[70vh] pt-28 pb-20">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-guadua-700 text-ivory-50">
          <Icon name="check" size={32} />
        </span>
        <h1 className="mt-6 font-display text-3xl text-forest-900 sm:text-4xl">Solicitud registrada</h1>
        <p className="mt-3 text-forest-900/70">
          Tu solicitud para <span className="font-medium text-forest-900">{exp}</span> quedó registrada.
          Guarda tu número de solicitud.
        </p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-sand-200/50 px-5 py-2.5">
          <span className="text-sm text-forest-900/60">Solicitud</span>
          <span className="font-display text-xl text-forest-900">{id}</span>
        </div>

        <div className="mt-8 rounded-2xl border border-forest-900/10 bg-white p-6 text-left">
          <p className="text-sm text-forest-900/75">
            Para finalizar, envíanos tu solicitud por WhatsApp. Ya preparamos el mensaje con tus datos.
          </p>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("whatsapp_click", { location: "booking_confirmation" })}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-[#06381f] hover:brightness-105"
            >
              <Icon name="whatsapp" size={20} /> Enviar por WhatsApp
            </a>
          )}
          <p className="mt-3 text-center text-xs text-forest-900/50">
            Si WhatsApp no se abre, escríbenos indicando tu número de solicitud {id}.
          </p>
        </div>

        <div className="mt-6">
          <AntifraudNotice />
        </div>
        <Link href="/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-guadua-700 hover:underline">
          Volver al inicio
        </Link>
      </div>
    </Container>
  );
}
