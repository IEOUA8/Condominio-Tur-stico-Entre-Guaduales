/* ==========================================================================
   MOTOR DE PRECIOS (§10)
   nights = 1        -> tarifa_1_noche
   nights = 2        -> tarifa_2_noches
   nights >= 3       -> tarifa_2_noches + (nights - 2) * tarifa_noche_adicional
   Excepción "Dos Familias": valores "desde", requiere cotización (§10.2).
   ========================================================================== */
import type { Experience } from "@/content/experiences";

export type PriceBreakdown = {
  nights: number;
  base: number; // valor de 1 o 2 noches
  baseLabel: string;
  additionalNights: number;
  additionalNightsTotal: number;
  total: number;
  isEstimate: boolean; // true para tarifas "desde"
  requiresQuote: boolean; // Dos Familias
};

export function computePrice(exp: Experience, nights: number): PriceBreakdown {
  const n = Math.max(1, Math.floor(nights || 1));
  let base: number;
  let baseLabel: string;
  let additionalNights = 0;
  let additionalNightsTotal = 0;

  if (n === 1) {
    base = exp.oneNightPrice;
    baseLabel = "1 noche";
  } else {
    base = exp.twoNightPrice;
    baseLabel = "2 noches";
    additionalNights = n - 2;
    additionalNightsTotal = additionalNights * exp.additionalNightPrice;
  }

  return {
    nights: n,
    base,
    baseLabel,
    additionalNights,
    additionalNightsTotal,
    total: base + additionalNightsTotal,
    isEstimate: exp.startingAt,
    requiresQuote: exp.startingAt, // Dos Familias => cotización personalizada
  };
}

/** Precio "gancho" para las cards (1 noche). */
export function startingPrice(exp: Experience): { amount: number; from: boolean } {
  return { amount: exp.oneNightPrice, from: exp.startingAt };
}
