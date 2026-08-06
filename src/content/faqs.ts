/* ==========================================================================
   PREGUNTAS FRECUENTES (§7.12)
   Respuestas fundamentadas en el reglamento (§25) y el documento maestro.
   `pending: true` marca respuestas que dependen de datos por confirmar (§23).
   ========================================================================== */
export type Faq = {
  q: string;
  a: string;
  category: string;
  pending?: boolean;
};

export const faqs: Faq[] = [
  {
    category: "Capacidad",
    q: "¿Para cuántas personas es el condominio?",
    a: "Contamos con experiencias para grupos desde 2 hasta 26 huéspedes. Cada experiencia tiene una capacidad definida y puedes reservar desde una cabaña hasta el condominio completo.",
  },
  {
    category: "Tarifas",
    q: "¿El precio es por persona o por alojamiento?",
    a: "Las tarifas corresponden al alojamiento completo de la experiencia (no por persona). En la página de cada experiencia puedes calcular el total según el número de noches.",
  },
  {
    category: "Tarifas",
    q: "¿Por qué la experiencia Dos Familias muestra precios «desde»?",
    a: "Porque la tarifa varía según la combinación de cabañas y la preferencia de privacidad del grupo. Por eso trabajamos una propuesta personalizada antes de confirmar un valor.",
  },
  {
    category: "Horarios",
    q: "¿Cuáles son los horarios de check-in y check-out?",
    a: "Los horarios de ingreso y salida se confirman al coordinar la reserva.",
    pending: true,
  },
  {
    category: "Mascotas",
    q: "¿Puedo llevar mi mascota?",
    a: "Sí, se permiten mascotas bajo la responsabilidad del huésped, quien garantiza su cuidado, la recolección de desechos y la protección del inmueble. Ten en cuenta que en el sector hay mascotas que transitan libremente. No se permiten mascotas dentro del jacuzzi ni en las zonas de BBQ y fogatero.",
  },
  {
    category: "Niños",
    q: "¿Es un lugar apto para niños?",
    a: "Los niños y jóvenes son bienvenidos y deben estar incluidos en la reserva. El jacuzzi, la zona BBQ y el fogatero son de uso para adultos; los menores solo pueden usarlos bajo supervisión permanente de un adulto.",
  },
  {
    category: "Jacuzzi",
    q: "¿Cómo funciona el jacuzzi?",
    a: "El jacuzzi es privado y funciona por encendidos de tres horas con apagado automático. La temperatura máxima permitida es de 35 °C. Es de uso para adultos; los menores deben estar acompañados. No se permite consumir alimentos dentro ni el ingreso de mascotas.",
  },
  {
    category: "Transporte",
    q: "¿Ofrecen servicio de transporte?",
    a: "Sí, contamos con servicio de transporte con costo adicional, que se coordina con anticipación al momento de la reserva.",
  },
  {
    category: "Parqueadero",
    q: "¿Hay parqueadero?",
    a: "Sí, la propiedad cuenta con parqueadero privado. Los vehículos deben quedar estacionados en posición de salida dentro del parqueadero.",
  },
  {
    category: "Visitas",
    q: "¿Pueden ingresar visitantes que no están en la reserva?",
    a: "No. Solo pueden ingresar y permanecer los huéspedes debidamente registrados en la reserva, ni siquiera por una noche.",
  },
  {
    category: "Eventos",
    q: "¿Se permiten fiestas o eventos?",
    a: "No se permiten fiestas ni eventos. El condominio está en una zona residencial y priorizamos el descanso y la sana convivencia.",
  },
  {
    category: "Ruido",
    q: "¿Hay restricciones de ruido?",
    a: "Sí. Al ser una zona residencial, no se deben hacer ruidos fuertes después de las 11:00 p. m. La música debe mantenerse a un volumen moderado para no incomodar a los vecinos.",
  },
  {
    category: "Pagos",
    q: "¿Qué formas de pago aceptan?",
    a: "Los métodos de pago autorizados se informan al coordinar la reserva por los canales oficiales. Realiza pagos únicamente por estos canales y verifica siempre el titular y tu número de solicitud.",
    pending: true,
  },
  {
    category: "Cancelaciones",
    q: "¿Puedo cancelar o reprogramar?",
    a: "Las condiciones de cancelación y reprogramación se detallan en nuestra política y se confirman al momento de la reserva.",
    pending: true,
  },
  {
    category: "Daños",
    q: "¿Cómo se manejan los daños o elementos faltantes?",
    a: "Cualquier daño ocasionado al inmueble o a su equipamiento, así como elementos faltantes, será asumido por los huéspedes cubriendo el costo de reparación o reemplazo.",
  },
  {
    category: "Seguridad",
    q: "¿La propiedad tiene cámaras de seguridad?",
    a: "Sí. La casa finca está monitoreada las 24 horas mediante un sistema de cámaras de seguridad en zonas comunes y exteriores.",
  },
  {
    category: "Qué llevar",
    q: "¿Qué recomiendan llevar?",
    a: "Ropa cómoda, calzado adecuado para caminar por zonas verdes con pendientes, abrigo para las noches frescas y traje de baño para el jacuzzi. La cabaña se entrega dotada con lo esencial.",
  },
  {
    category: "Disponibilidad",
    q: "¿Cómo consulto disponibilidad y reservo?",
    a: "Completa el formulario de reserva en pocos pasos y recibirás un número de solicitud. Finalizamos la coordinación por WhatsApp con nuestro equipo.",
  },
];

export function faqCategories(): string[] {
  return Array.from(new Set(faqs.map((f) => f.category)));
}
