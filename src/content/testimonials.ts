/* ==========================================================================
   TESTIMONIOS (§7.10)
   El documento maestro prohíbe inventar testimonios. Estos son reseñas
   REALES de huéspedes en Airbnb (todas 5★), aportadas y autorizadas para
   publicación por el cliente el 2026-08-12 ("son públicas"). Texto tomado
   textualmente de las capturas de Airbnb, con corrección ligera de tildes.
   ========================================================================== */
export type Testimonial = {
  name: string;
  tripType: string;
  date: string;
  experience: string;
  quote: string;
  source?: string; // Google, Airbnb, etc. (verificable)
};

export const testimonials: Testimonial[] = [
  {
    name: "Andrea",
    tripType: "Semana Santa en familia",
    date: "abr (2–5)",
    experience: "En familia",
    quote:
      "Nuestra estadía en esta Semana Santa fue simplemente perfecta. Desde que llegamos, sentimos que estábamos en un lugar especial, lleno de paz, belleza y armonía. Cada rincón está pensado con amor y detalle. Sin duda, un sitio al que queremos volver.",
    source: "Airbnb",
  },
  {
    name: "Daniela",
    tripType: "Huésped recurrente",
    date: "mar (21–23)",
    experience: "Descanso",
    quote:
      "Es la tercera vez que visito el lugar y cada vez me voy más enamorada. Las cabañas tienen todo lo que uno necesita para una excelente estadía. Rubén es un excelente anfitrión: atento, servicial y amigable. En general, todo es 10/10.",
    source: "Airbnb",
  },
  {
    name: "Santiago",
    tripType: "6 noches en familia",
    date: "abr (1–7)",
    experience: "En familia",
    quote:
      "Una estadía espectacular en casa de Rubén. Ambiente muy tranquilo y perfecto para familia. Y Rubén, un señor que nos atendió a lo máximo.",
    source: "Airbnb",
  },
  {
    name: "Dayana",
    tripType: "Estadía de 2 noches",
    date: "abr (2–4)",
    experience: "Descanso",
    quote:
      "Rubén fue un anfitrión increíble. El lugar es muy tranquilo y rodeado de zona verde, perfecto para relajarse. Las habitaciones son muy cómodas y el ambiente, acogedor. Definitivamente volvería a hospedarme aquí.",
    source: "Airbnb",
  },
  {
    name: "Sandra Yanette",
    tripType: "Estadía de 2 noches",
    date: "may (9–11)",
    experience: "Descanso",
    quote:
      "Felicitaciones por su hospitalidad, amabilidad, respeto y compromiso. Las instalaciones, impecables y muy completa su dotación. Súper recomendable este sitio y las atenciones de don Rubén.",
    source: "Airbnb",
  },
  {
    name: "Gabriel",
    tripType: "Estadía de 2 noches",
    date: "jun (27–29)",
    experience: "Escapada",
    quote:
      "¡Excepcional! Recomendado al 100%, seguro regresaremos. Felicitaciones a Rubén por su hermoso condominio y muchísimas gracias por su amabilidad y permanente atención.",
    source: "Airbnb",
  },
  {
    name: "Mateo",
    tripType: "Estadía de 2 noches",
    date: "mar (22–24)",
    experience: "Descanso",
    quote:
      "Todo muy limpio, todo perfecto. Un lugar muy tranquilo y organizado.",
    source: "Airbnb",
  },
];

export const testimonialsPending = testimonials.length === 0;
