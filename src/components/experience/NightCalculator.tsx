"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { formatCOP } from "@/lib/format";
import { computePrice } from "@/lib/pricing";
import type { Experience } from "@/content/experiences";

export function NightCalculator({ exp }: { exp: Experience }) {
  const [nights, setNights] = useState(2);
  const p = useMemo(() => computePrice(exp, nights), [exp, nights]);

  return (
    <div className="rounded-3xl border border-forest-900/10 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(11,33,27,0.35)] sm:p-7">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-xl text-forest-900">Calcula tu estadía</h3>
        <span className="rounded-full bg-guadua-700/10 px-3 py-1 text-xs font-medium text-guadua-700">
          {exp.minGuests === exp.maxGuests ? `${exp.maxGuests}` : `${exp.minGuests}–${exp.maxGuests}`} huéspedes
        </span>
      </div>

      <div className="mt-5">
        <span className="text-sm font-medium text-forest-900/80">Número de noches</span>
        <div className="mt-3 flex items-center gap-4">
          <button
            type="button"
            aria-label="Menos noches"
            onClick={() => setNights((n) => Math.max(1, n - 1))}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
          >
            <Icon name="minus" size={18} />
          </button>
          <span className="tnum w-12 text-center font-display text-3xl text-forest-900">{nights}</span>
          <button
            type="button"
            aria-label="Más noches"
            onClick={() => setNights((n) => Math.min(30, n + 1))}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900/8 text-forest-900 hover:bg-forest-900/15"
          >
            <Icon name="plus" size={18} />
          </button>
        </div>
      </div>

      {/* Desglose */}
      <dl className="mt-6 space-y-2 border-t border-forest-900/10 pt-5 text-sm">
        <div className="flex justify-between text-forest-900/70">
          <dt>{p.baseLabel}</dt>
          <dd className="tnum">{formatCOP(p.base)}</dd>
        </div>
        {p.additionalNights > 0 && (
          <div className="flex justify-between text-forest-900/70">
            <dt>
              {p.additionalNights} {p.additionalNights === 1 ? "noche adicional" : "noches adicionales"}
              <span className="text-forest-900/45"> · {formatCOP(exp.additionalNightPrice)} c/u</span>
            </dt>
            <dd className="tnum">{formatCOP(p.additionalNightsTotal)}</dd>
          </div>
        )}
        <div className="flex items-end justify-between border-t border-forest-900/10 pt-3">
          <dt className="font-semibold text-forest-900">Total estimado</dt>
          <dd className="tnum font-display text-2xl text-guadua-700">
            {p.isEstimate && <span className="text-sm font-normal text-forest-900/50">desde </span>}
            {formatCOP(p.total)}
          </dd>
        </div>
      </dl>

      {p.requiresQuote && (
        <p className="mt-3 flex items-start gap-2 rounded-xl bg-sand-200/40 p-3 text-xs text-clay-600">
          <Icon name="info" size={15} className="mt-0.5 shrink-0" />
          El valor final depende de la combinación de cabañas. Solicita una cotización personalizada.
        </p>
      )}

      <Link
        href={`/reservar?exp=${exp.slug}&nights=${nights}`}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 font-semibold text-forest-950 transition-colors hover:bg-gold-400"
      >
        Consultar disponibilidad
        <Icon name="arrowRight" size={18} />
      </Link>
      <p className="mt-3 text-center text-xs text-forest-900/50">
        Valor por alojamiento completo. No es una reserva confirmada.
      </p>
    </div>
  );
}
