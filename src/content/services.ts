/* Servicios incluidos (§7.7). `icon` referencia claves en components/ui/Icon. */
export type Service = {
  icon: string;
  title: string;
  description: string;
  note?: string;
};

export const services: Service[] = [
  { icon: "cabin", title: "Cabaña privada dotada", description: "Espacios completos y equipados, listos para descansar desde el primer momento." },
  { icon: "hotTub", title: "Jacuzzi privado", description: "Para 8 personas (1.300 L), hasta 35 °C, con encendido asistido por el anfitrión." },
  { icon: "flame", title: "Fogatero", description: "Para 8 a 10 personas; se entrega con leña, mechero y encendido asistido." },
  { icon: "grill", title: "Zona BBQ", description: "Fogón industrial a gas, estufa de 4 puestos, plancha, asador y barril." },
  { icon: "car", title: "Parqueadero privado", description: "Estacionamiento dentro de la propiedad para tu tranquilidad." },
  { icon: "trail", title: "Senderos ecológicos", description: "Caminos entre la vegetación para recorrer con calma." },
  { icon: "leaf", title: "Zonas verdes y jardines", description: "Amplias zonas verdes, jardines y naturaleza alrededor de las cabañas." },
  { icon: "water", title: "Lago", description: "Un lago que acompaña el paisaje y los atardeceres del condominio." },
  { icon: "moon", title: "Sol & Luna", description: "Un ambiente donde los astros de la naturaleza se unen y están al alcance de todos." },
  { icon: "van", title: "Servicio de transporte", description: "Transporte disponible con costo adicional, coordinado con anticipación.", note: "Costo adicional" },
];
