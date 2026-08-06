/* ==========================================================================
   RECOMENDADOR DE EXPERIENCIA (§7.5, §11.4)
   Sugiere la experiencia adecuada según número de huéspedes y tipo de viaje.
   ========================================================================== */
import { experiences, getExperience, type Experience } from "@/content/experiences";
import type { TripReason } from "@/lib/booking";

export type RecommendationInput = {
  guests: number;
  reason?: TripReason | null;
  pets?: boolean;
};

export type Recommendation = {
  primary: Experience;
  alternatives: Experience[];
  reason: string;
};

function bySlug(slug: string): Experience {
  return getExperience(slug)!;
}

export function recommend(input: RecommendationInput): Recommendation {
  const g = Math.max(1, Math.floor(input.guests || 1));
  let slug: string;
  let reason: string;

  if (input.reason === "pareja" || g <= 2) {
    slug = "para-dos";
    reason = "Ideal para una escapada íntima en pareja con jacuzzi privado.";
  } else if (g <= 8) {
    slug = "familiar";
    reason = `Espacio y comodidad suficientes para ${g} huéspedes en familia.`;
  } else if (g <= 10) {
    slug = "familiar-premium-siriri";
    reason = `La cabaña Sirirí ofrece la distribución adecuada para ${g} personas.`;
  } else if (g <= 18 || input.reason === "dos-familias") {
    slug = "dos-familias";
    reason = "Cabañas combinadas con áreas privadas e independientes para dos grupos.";
  } else {
    slug = "exclusivo";
    reason = `Para ${g} huéspedes recomendamos reservar el condominio completo.`;
  }

  const primary = bySlug(slug);

  // Alternativas: experiencias cuya capacidad máxima admite al grupo.
  const alternatives = experiences
    .filter((e) => e.slug !== slug && e.maxGuests >= g && e.minGuests <= g + 2)
    .slice(0, 2);

  return { primary, alternatives, reason };
}
