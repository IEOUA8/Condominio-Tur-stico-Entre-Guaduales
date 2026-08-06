/* ==========================================================================
   CATÁLOGO DE EXPERIENCIAS (§8)
   Tarifas y capacidades tomadas literalmente del documento maestro.
   La info de unidad (habitaciones, camas, baños, área) NO está confirmada:
   se lista en `pendingUnitInfo` y se muestra como "en confirmación" (§9.2).
   ========================================================================== */

export type Photo = { src: string; alt: string };

export type GroupType = "pareja" | "familia" | "dos-familias" | "grupo";

export type Experience = {
  slug: string;
  name: string;
  concept: string;
  groupLabel: string;
  groupType: GroupType[];
  minGuests: number;
  maxGuests: number;

  /** Tarifas en COP. `startingAt` => mostrar "desde" (§10.2). */
  oneNightPrice: number;
  twoNightPrice: number;
  additionalNightPrice: number;
  startingAt: boolean;

  shortDescription: string;
  longDescription: string;
  differentiator: string;
  narrativeFocus: string[];

  featured: Photo;
  gallery: Photo[];

  amenities: string[];
  /** Datos de la unidad pendientes de confirmar (§9.2). */
  pendingUnitInfo: string[];

  ctaLabel: string;
  accent: "clay" | "guadua" | "gold" | "forest" | "sage";
};

export const experiences: Experience[] = [
  {
    slug: "para-dos",
    name: "Entre Guaduales para Dos",
    concept: "Escapada romántica en naturaleza",
    groupLabel: "Parejas",
    groupType: ["pareja"],
    minGuests: 2,
    maxGuests: 2,
    oneNightPrice: 650_000,
    twoNightPrice: 990_000,
    additionalNightPrice: 500_000,
    startingAt: false,
    shortDescription:
      "Intimidad, jacuzzi privado y silencio de montaña para reencontrarse sin prisa.",
    longDescription:
      "Una cabaña pensada para dos: jacuzzi privado al atardecer, el sonido del viento entre la guadua y la calma de un entorno donde el tiempo se detiene. Ideal para aniversarios, lunas de miel o simplemente desconectar del mundo y volver a encontrarse.",
    differentiator: "Jacuzzi privado y máxima privacidad para dos.",
    narrativeFocus: ["Intimidad", "Privacidad", "Jacuzzi", "Desconexión", "Tiempo en pareja", "Naturaleza"],
    featured: { src: "/images/jacuzzi/jacuzzi-atardecer.jpg", alt: "Jacuzzi privado al atardecer entre naturaleza en Entre Guaduales" },
    gallery: [
      { src: "/images/jacuzzi/jacuzzi-atardecer.jpg", alt: "Jacuzzi privado iluminado al caer la tarde" },
      { src: "/images/momentos/luna-lago.jpg", alt: "Luna decorativa reflejada en el lago durante la noche" },
      { src: "/images/exteriores/jardin-pergola.jpg", alt: "Jardín con pérgola y zona de descanso rodeada de verde" },
      { src: "/images/jacuzzi/jacuzzi-detalle.jpg", alt: "Detalle del jacuzzi privado de la cabaña" },
      { src: "/images/naturaleza/orquidea.jpg", alt: "Orquídea blanca del entorno natural" },
      { src: "/images/momentos/luna-sendero.jpg", alt: "Sendero iluminado en la noche" },
    ],
    amenities: ["Cabaña privada dotada", "Jacuzzi privado", "Zona BBQ", "Fogatero", "Parqueadero", "Senderos ecológicos", "Zonas verdes", "Lago"],
    pendingUnitInfo: ["Número de habitaciones", "Tipo y número de camas", "Número de baños", "Área aproximada", "Agua caliente y ventilación", "Conectividad"],
    ctaLabel: "Planear una escapada para dos",
    accent: "clay",
  },
  {
    slug: "familiar",
    name: "Experiencia Familiar",
    concept: "Comodidad y descanso para compartir en familia",
    groupLabel: "Familias",
    groupType: ["familia"],
    minGuests: 3,
    maxGuests: 8,
    oneNightPrice: 1_500_000,
    twoNightPrice: 1_990_000,
    additionalNightPrice: 800_000,
    startingAt: false,
    shortDescription:
      "Espacio, seguridad y naturaleza para que la familia comparta y descanse con tranquilidad.",
    longDescription:
      "Una cabaña amplia y completamente dotada para la familia: cocina equipada, zonas comunes cómodas, jardines para los niños y actividades tranquilas al aire libre. Un lugar seguro y privado donde cada generación encuentra su ritmo.",
    differentiator: "Amplitud y comodidad para hasta 8 huéspedes.",
    narrativeFocus: ["Espacio", "Convivencia", "Naturaleza", "Seguridad", "Comodidad", "Actividades tranquilas"],
    featured: { src: "/images/exteriores/cabana-fachada.jpg", alt: "Fachada de cabaña familiar rodeada de jardines" },
    gallery: [
      { src: "/images/exteriores/cabana-fachada.jpg", alt: "Fachada de la cabaña entre jardines" },
      { src: "/images/interiores/sala.jpg", alt: "Sala amplia con sofás y ventanales hacia el verde" },
      { src: "/images/interiores/cocina.jpg", alt: "Cocina equipada con nevera y mesón" },
      { src: "/images/interiores/comedor-flores.jpg", alt: "Comedor iluminado con flores frescas" },
      { src: "/images/interiores/habitacion-cama.jpg", alt: "Habitación con cama y ventana al jardín" },
      { src: "/images/exteriores/jardin-flores.jpg", alt: "Jardín florido con zonas verdes para compartir" },
    ],
    amenities: ["Cabaña privada dotada", "Jacuzzi privado", "Zona BBQ", "Fogatero", "Parqueadero", "Senderos ecológicos", "Zonas verdes", "Lago", "Ambientes de descanso"],
    pendingUnitInfo: ["Número de habitaciones", "Distribución de camas", "Número de baños", "Área aproximada", "Capacidad de parqueadero", "Equipamiento de cocina"],
    ctaLabel: "Consultar fechas para mi familia",
    accent: "guadua",
  },
  {
    slug: "familiar-premium-siriri",
    name: "Experiencia Familiar Premium Sirirí",
    concept: "Más espacio para compartir",
    groupLabel: "Familias amplias",
    groupType: ["familia"],
    minGuests: 4,
    maxGuests: 10,
    oneNightPrice: 1_700_000,
    twoNightPrice: 2_200_000,
    additionalNightPrice: 1_000_000,
    startingAt: false,
    shortDescription:
      "La cabaña Sirirí ofrece una distribución superior y más comodidad para grupos familiares amplios.",
    longDescription:
      "La experiencia Premium Sirirí suma amplitud y una distribución pensada para grupos familiares grandes: más camas, zonas sociales generosas y el mismo entorno natural privado. Comodidad superior sin renunciar a la privacidad.",
    differentiator: "Distribución superior y amplitud para hasta 10 huéspedes.",
    narrativeFocus: ["Amplitud", "Distribución", "Comodidad superior", "Privacidad", "Grupo familiar amplio"],
    featured: { src: "/images/interiores/sala-escalera.jpg", alt: "Sala de doble altura con escalera de la cabaña Sirirí" },
    gallery: [
      { src: "/images/interiores/sala-escalera.jpg", alt: "Sala de doble altura con escalera" },
      { src: "/images/interiores/habitacion-literas.jpg", alt: "Habitación con literas de madera y vista al verde" },
      { src: "/images/interiores/habitacion-literas2.jpg", alt: "Segunda habitación con literas" },
      { src: "/images/interiores/comedor.jpg", alt: "Comedor de madera para grupos" },
      { src: "/images/interiores/cocina.jpg", alt: "Cocina equipada de la cabaña Sirirí" },
      { src: "/images/exteriores/bbq-zona.jpg", alt: "Zona BBQ cubierta en el exterior" },
    ],
    amenities: ["Cabaña privada dotada", "Jacuzzi privado", "Zona BBQ", "Fogatero", "Parqueadero", "Senderos ecológicos", "Zonas verdes", "Lago", "Ambientes de descanso"],
    pendingUnitInfo: ["Número de habitaciones", "Distribución exacta de camas y literas", "Número de baños", "Área aproximada", "Equipamiento de cocina", "Conectividad y televisión"],
    ctaLabel: "Descubrir la experiencia Sirirí",
    accent: "sage",
  },
  {
    slug: "dos-familias",
    name: "Experiencia Dos Familias",
    concept: "Compartir juntos, conservando la privacidad",
    groupLabel: "Dos familias o grupos",
    groupType: ["dos-familias", "grupo"],
    minGuests: 16,
    maxGuests: 18,
    oneNightPrice: 3_000_000,
    twoNightPrice: 3_900_000,
    additionalNightPrice: 1_600_000,
    startingAt: true,
    shortDescription:
      "Cabañas combinadas y áreas comunes para que dos familias compartan sin perder su independencia.",
    longDescription:
      "Pensada para dos familias que quieren estar juntas sin renunciar a su espacio: cabañas combinadas, áreas privadas e independientes y zonas comunes para compartir. La tarifa se ajusta según la combinación elegida, por eso trabajamos una propuesta personalizada para tu grupo.",
    differentiator: "Cabañas combinadas con áreas privadas e independientes.",
    narrativeFocus: ["Cercanía entre grupos", "Independencia", "Cabañas combinadas", "Áreas comunes", "Organización personalizada"],
    featured: { src: "/images/exteriores/panoramica-lago.jpg", alt: "Vista panorámica del condominio con lago y jardines" },
    gallery: [
      { src: "/images/exteriores/panoramica-lago.jpg", alt: "Panorámica del condominio con lago" },
      { src: "/images/exteriores/jardin-verde.jpg", alt: "Amplias zonas verdes del condominio" },
      { src: "/images/exteriores/bbq-zona.jpg", alt: "Zona BBQ para compartir en grupo" },
      { src: "/images/exteriores/cabana-arboles.jpg", alt: "Cabaña rodeada de árboles" },
      { src: "/images/exteriores/entorno-valle.jpg", alt: "Entorno del condominio con vista al valle" },
      { src: "/images/momentos/fogatero-personas.jpg", alt: "Grupo compartiendo alrededor del fogatero de noche" },
    ],
    amenities: ["Varias cabañas combinadas", "Jacuzzi", "Zona BBQ", "Fogatero", "Parqueadero privado", "Senderos ecológicos", "Zonas verdes", "Lago", "Áreas comunes"],
    pendingUnitInfo: ["Combinación de cabañas disponible", "Distribución total de habitaciones y camas", "Número de baños", "Capacidad exacta de parqueadero", "Reglas de áreas compartidas"],
    ctaLabel: "Solicitar una propuesta para dos familias",
    accent: "forest",
  },
  {
    slug: "exclusivo",
    name: "Entre Guaduales Exclusivo",
    concept: "Todo el condominio para un solo grupo",
    groupLabel: "Grupos privados",
    groupType: ["grupo", "dos-familias"],
    minGuests: 18,
    maxGuests: 26,
    oneNightPrice: 4_700_000,
    twoNightPrice: 5_900_000,
    additionalNightPrice: 2_600_000,
    startingAt: false,
    shortDescription:
      "El condominio completo, sin otros huéspedes: exclusividad total para tu grupo de hasta 26 personas.",
    longDescription:
      "La experiencia más privada: todo el condominio reservado para un solo grupo. Uso completo de cabañas, jardines, lago, jacuzzi, zona BBQ y fogatero, con logística centralizada y acompañamiento personalizado. Ideal para celebraciones íntimas, retiros y encuentros familiares grandes.",
    differentiator: "Exclusividad total del condominio para hasta 26 huéspedes.",
    narrativeFocus: ["Exclusividad total", "Privacidad del grupo", "Uso completo del condominio", "Experiencia personalizada", "Logística centralizada"],
    featured: { src: "/images/exteriores/entorno-valle.jpg", alt: "Vista del condominio completo entre naturaleza" },
    gallery: [
      { src: "/images/exteriores/entorno-valle.jpg", alt: "Vista del condominio completo" },
      { src: "/images/exteriores/panoramica-lago.jpg", alt: "Panorámica del lago y los jardines" },
      { src: "/images/momentos/fogatero-personas.jpg", alt: "Grupo reunido alrededor del fogatero" },
      { src: "/images/momentos/luna-lago.jpg", alt: "Ambiente nocturno junto al lago" },
      { src: "/images/exteriores/mirador-dia.jpg", alt: "Mirador tipo cabaña abierta en el jardín" },
      { src: "/images/exteriores/jardin-flores.jpg", alt: "Jardines florecidos del condominio" },
    ],
    amenities: ["Condominio completo", "Todas las cabañas", "Jacuzzi", "Zona BBQ", "Fogatero", "Parqueadero privado", "Senderos ecológicos", "Zonas verdes", "Lago", "Ambientes de descanso"],
    pendingUnitInfo: ["Número total de cabañas y su distribución", "Camas y baños totales", "Área total del predio", "Capacidad de parqueadero", "Reglas para celebraciones permitidas"],
    ctaLabel: "Reservar el condominio completo",
    accent: "gold",
  },
];

export function getExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function experienceSlugs(): string[] {
  return experiences.map((e) => e.slug);
}

/** Experiencias relacionadas (para el bloque "otras experiencias", §9.1). */
export function relatedExperiences(slug: string, count = 2): Experience[] {
  return experiences.filter((e) => e.slug !== slug).slice(0, count);
}
