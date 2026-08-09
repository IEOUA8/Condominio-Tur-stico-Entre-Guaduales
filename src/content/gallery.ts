/* ==========================================================================
   GALERÍA INMERSIVA (§7.8) — manifiesto categorizado de fotografías reales.
   Todas las imágenes provienen del material del cliente (fotos reales).
   ========================================================================== */
export type GalleryCategory =
  | "Cabañas"
  | "Habitaciones"
  | "Interiores"
  | "Jacuzzi"
  | "BBQ y fogatero"
  | "Naturaleza"
  | "Noche"
  | "Exteriores";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** Sugerencia de tamaño para la composición editorial (masonry). */
  feature?: boolean;
};

export const galleryItems: GalleryItem[] = [
  // Exteriores / lago
  { src: "/images/exteriores/panoramica-lago.jpg", alt: "Vista panorámica del condominio con lago y jardines", category: "Exteriores", feature: true },
  { src: "/images/exteriores/entorno-valle.jpg", alt: "Entorno del condominio con vista al valle", category: "Exteriores" },
  { src: "/images/exteriores/jardin-pergola.jpg", alt: "Jardín con pérgola y zona de descanso", category: "Exteriores" },
  { src: "/images/exteriores/jardin-flores.jpg", alt: "Jardín florido con amplias zonas verdes", category: "Exteriores" },
  { src: "/images/exteriores/jardin-verde.jpg", alt: "Zonas verdes del condominio", category: "Exteriores" },
  { src: "/images/exteriores/mirador-dia.jpg", alt: "Mirador tipo cabaña abierta en el jardín", category: "Exteriores" },

  // Cabañas / fachadas
  { src: "/images/exteriores/cabana-fachada.jpg", alt: "Fachada de cabaña rodeada de jardines", category: "Cabañas", feature: true },
  { src: "/images/exteriores/cabana-arboles.jpg", alt: "Cabaña rodeada de árboles", category: "Cabañas" },
  { src: "/images/exteriores/paisaje-piscina.jpg", alt: "Paisaje del condominio con terrazas verdes", category: "Cabañas" },

  // Jacuzzi
  { src: "/images/jacuzzi/jacuzzi-atardecer.jpg", alt: "Jacuzzi privado iluminado al atardecer", category: "Jacuzzi", feature: true },
  { src: "/images/jacuzzi/jacuzzi-detalle.jpg", alt: "Detalle del jacuzzi privado", category: "Jacuzzi" },

  // BBQ y fogatero
  { src: "/images/exteriores/bbq-zona.jpg", alt: "Zona BBQ cubierta en el exterior", category: "BBQ y fogatero" },
  { src: "/images/momentos/fogatero-personas.jpg", alt: "Grupo compartiendo alrededor del fogatero de noche", category: "BBQ y fogatero", feature: true },

  // Habitaciones
  { src: "/images/interiores/habitacion-cama.jpg", alt: "Habitación con cama y ventana al jardín", category: "Habitaciones" },
  { src: "/images/interiores/habitacion-literas.jpg", alt: "Habitación con literas de madera", category: "Habitaciones" },
  { src: "/images/interiores/habitacion-literas2.jpg", alt: "Segunda habitación con literas", category: "Habitaciones" },

  // Interiores / zonas comunes
  { src: "/images/interiores/sala.jpg", alt: "Sala amplia con sofás y ventanales", category: "Interiores", feature: true },
  { src: "/images/interiores/sala-escalera.jpg", alt: "Sala de doble altura con escalera", category: "Interiores" },
  { src: "/images/interiores/cocina.jpg", alt: "Cocina equipada con nevera y mesón", category: "Interiores" },
  { src: "/images/interiores/comedor-flores.jpg", alt: "Comedor iluminado con flores frescas", category: "Interiores" },
  { src: "/images/interiores/comedor.jpg", alt: "Comedor de madera para grupos", category: "Interiores" },
  { src: "/images/interiores/bano-lavamanos.jpg", alt: "Baño con lavamanos tipo vasija", category: "Interiores" },
  { src: "/images/interiores/bano-ducha.jpg", alt: "Ducha de la cabaña", category: "Interiores" },
  { src: "/images/interiores/ducha-exterior.jpg", alt: "Ducha exterior en piedra", category: "Interiores" },

  // Noche / momentos
  { src: "/images/momentos/luna-lago.jpg", alt: "Luna decorativa reflejada en el lago de noche", category: "Noche", feature: true },
  { src: "/images/momentos/mirador-noche.jpg", alt: "Mirador iluminado en la noche", category: "Noche" },
  { src: "/images/momentos/noche-mirador.jpg", alt: "Ambiente nocturno del condominio", category: "Noche" },
  { src: "/images/momentos/luna-sendero.jpg", alt: "Sendero iluminado en la noche", category: "Noche" },

  // Naturaleza
  { src: "/images/naturaleza/palma.jpg", alt: "Palma del entorno natural", category: "Naturaleza" },
  { src: "/images/naturaleza/flor-roja.jpg", alt: "Flores rojas con cielo azul", category: "Naturaleza" },
  { src: "/images/naturaleza/heliconia.jpg", alt: "Heliconia del jardín", category: "Naturaleza" },
  { src: "/images/naturaleza/orquidea.jpg", alt: "Orquídea blanca", category: "Naturaleza" },
  { src: "/images/naturaleza/flores-amarillas.jpg", alt: "Flores amarillas del jardín", category: "Naturaleza" },
  { src: "/images/naturaleza/drone-bosque.jpg", alt: "Vista aérea del bosque circundante", category: "Naturaleza" },
  { src: "/images/naturaleza/cafetal.jpg", alt: "Vegetación y cultivos del entorno", category: "Naturaleza" },

  // Cabaña Guacharaca
  { src: "/images/guacharaca/fachada.jpg", alt: "Fachada de la Cabaña Guacharaca con jardines y vista al valle", category: "Cabañas" },
  { src: "/images/guacharaca/habitacion-principal.jpg", alt: "Habitación principal de la Cabaña Guacharaca con techo abovedado en madera y ventanas al jardín", category: "Habitaciones", feature: true },
  { src: "/images/guacharaca/habitacion-auxiliar.jpg", alt: "Habitación auxiliar de la Cabaña Guacharaca con cama doble y vista al verde", category: "Habitaciones" },
  { src: "/images/guacharaca/habitacion-literas.jpg", alt: "Habitación con literas de madera en la Cabaña Guacharaca", category: "Habitaciones" },
  { src: "/images/guacharaca/ducha.jpg", alt: "Ducha de diseño con enchape en madera en la Cabaña Guacharaca", category: "Interiores" },
  { src: "/images/guacharaca/bano.jpg", alt: "Baño de la Cabaña Guacharaca con lavamanos tipo vasija", category: "Interiores" },
  { src: "/images/guacharaca/bbq-parrilla.jpg", alt: "Zona BBQ de la Cabaña Guacharaca con parrilla y fogón industrial a gas", category: "BBQ y fogatero" },
  { src: "/images/guacharaca/noche-jardin.jpg", alt: "Jardín iluminado de la Cabaña Guacharaca al anochecer, entre guaduas", category: "Noche" },
];

export const galleryCategories: GalleryCategory[] = [
  "Exteriores",
  "Cabañas",
  "Interiores",
  "Habitaciones",
  "Jacuzzi",
  "BBQ y fogatero",
  "Noche",
  "Naturaleza",
];
