/* ==========================================================================
   TESTIMONIOS (§7.10)
   El documento prohíbe publicar testimonios inventados. Hasta contar con
   reseñas verificables (Google, Airbnb, etc.) la lista permanece vacía y la
   interfaz muestra un estado honesto e invitador.
   ========================================================================== */
export type Testimonial = {
  name: string;
  tripType: string;
  date: string;
  experience: string;
  quote: string;
  source?: string; // Google, Airbnb, etc. (verificable)
};

export const testimonials: Testimonial[] = [];

export const testimonialsPending = true;
