/* Servicios incluidos (§7.7). `icon` referencia claves en components/ui/Icon. */
export type Service = {
  icon: string;
  title: string;
  description: string;
  note?: string;
};

export const services: Service[] = [
  { icon: "cabin", title: "Cabaña privada dotada", description: "Espacios completos y equipados, listos para descansar desde el primer momento." },
  { icon: "hotTub", title: "Jacuzzi privado", description: "Agua caliente al aire libre para relajarse al atardecer o bajo las estrellas." },
  { icon: "flame", title: "Fogatero", description: "Se entrega con carga inicial de madera para las noches al aire libre." },
  { icon: "grill", title: "Zona BBQ", description: "Zona de asado y BBQ a gas para compartir en grupo." },
  { icon: "car", title: "Parqueadero privado", description: "Estacionamiento dentro de la propiedad para tu tranquilidad." },
  { icon: "trail", title: "Senderos ecológicos", description: "Caminos entre la vegetación para recorrer con calma." },
  { icon: "leaf", title: "Zonas verdes y jardines", description: "Amplias zonas verdes, jardines y guadua alrededor de las cabañas." },
  { icon: "water", title: "Lago", description: "Un lago que acompaña el paisaje y los atardeceres del condominio." },
  { icon: "moon", title: "Ambientes de descanso", description: "Rincones pensados para leer, conversar o simplemente no hacer nada." },
  { icon: "van", title: "Servicio de transporte", description: "Transporte disponible con costo adicional, coordinado con anticipación.", note: "Costo adicional" },
];
