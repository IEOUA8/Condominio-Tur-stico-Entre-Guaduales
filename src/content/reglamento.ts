/* ==========================================================================
   REGLAMENTO DEL CONDOMINIO (§24, §25)
   Contenido literal del documento maestro. Versión y fecha registrables.
   ========================================================================== */

export const reglamentoVersion = {
  version: "1.0",
  updatedAt: "2026-08-05",
};

export const reglamentoIntro =
  "Este lugar está diseñado y equipado para el disfrute, la comodidad y el descanso de sus huéspedes. Cada detalle dentro de las instalaciones ha sido incluido pensando en el bienestar y confort de tu familia. Queremos que te sientas como en casa y esperamos el máximo respeto por cada elemento de las instalaciones de la casa finca.";

export type ReglamentoCategory = {
  id: string;
  title: string;
  rules: { n: number; text: string }[];
};

export const reglamento: ReglamentoCategory[] = [
  {
    id: "generales",
    title: "Reglas generales",
    rules: [
      { n: 1, text: "Solo se permitirá el ingreso de huéspedes que hayan realizado los procedimientos de identificación y que estén debidamente incluidos en la reserva." },
      { n: 2, text: "Los jóvenes y niños pequeños son bienvenidos, pero cada uno debe estar especificado en la reserva." },
      { n: 3, text: "No se permiten fiestas ni eventos." },
      { n: 4, text: "El turismo sexual está estrictamente prohibido en toda la propiedad." },
      { n: 5, text: "Está completamente prohibido el consumo de cualquier tipo de droga alucinógena." },
      { n: 6, text: "El consumo de licor debe ser moderado para evitar situaciones que puedan afectar a la comunidad y la sana convivencia." },
      { n: 7, text: "Está prohibido fumar dentro de la casa. Solo se permite esta práctica en zonas comunes al aire libre, realizando una adecuada disposición de los residuos." },
      { n: 8, text: "Se permiten mascotas bajo la responsabilidad del huésped, quien deberá garantizar su adecuado cuidado, la recolección de desechos, la higiene y la protección del inmueble y del mobiliario. Debe tenerse en cuenta que los habitantes del sector tienen mascotas que suelen transitar libremente por los alrededores de la finca, lo cual puede generar situaciones entre los animales." },
      { n: 9, text: "Al ser una zona residencial, no se deben hacer ruidos fuertes después de las 11:00 p. m. La música, después de esa hora, debe mantenerse a un volumen moderado para no incomodar a los vecinos." },
      { n: 10, text: "No se permite la práctica de actos obscenos al aire libre ni salir desnudo por las áreas exteriores de la propiedad." },
      { n: 11, text: "El mal uso de elementos de aseo personal, como toallas y ropa de cama, que impida su uso normal dará lugar al cobro del valor total del elemento." },
      { n: 12, text: "Cualquier daño ocasionado por los huéspedes al inmueble o a su equipamiento deberá ser asumido por estos, cubriendo el costo de reparación o reemplazo." },
      { n: 13, text: "No está permitido recolectar frutos o plantas de la propiedad sin autorización previa del anfitrión." },
      { n: 14, text: "No está permitido retirar elementos de la casa finca, tales como toallas, ropa de cama, utensilios de cocina o electrodomésticos. En caso de ocurrir, se cobrará el valor correspondiente." },
      { n: 15, text: "No se permiten visitas ni la permanencia, así sea por una sola noche, de personas no registradas en la reserva." },
      { n: 16, text: "La casa finca está monitoreada las 24 horas mediante un sistema de cámaras de seguridad." },
    ],
  },
  {
    id: "limpieza",
    title: "Limpieza y mantenimiento",
    rules: [
      { n: 17, text: "Los residuos de papel higiénico, toallas higiénicas, tampones y demás desechos no deben arrojarse a los sanitarios. Deben depositarse en las canecas ubicadas en cada baño." },
      { n: 18, text: "La basura generada debe dejarse en una bolsa bien cerrada en la zona de ropas para su posterior disposición por parte del personal de aseo." },
      { n: 19, text: "La casa finca dispone de elementos básicos de aseo, de los cuales se espera un uso adecuado por parte de los huéspedes." },
      { n: 20, text: "Los residuos de aceites usados deben recogerse y dejarse debidamente almacenados. Está prohibido verterlos por los desagües." },
      { n: 21, text: "Si se detectan fugas de agua, gas o riesgos eléctricos, se debe informar inmediatamente al anfitrión." },
    ],
  },
  {
    id: "parqueadero",
    title: "Parqueadero",
    rules: [
      { n: 22, text: "Los vehículos deben quedar estacionados en posición de salida y dentro del parqueadero privado." },
      { n: 23, text: "Está prohibido dejar vehículos en la portería o en caminos de acceso que impidan la circulación." },
      { n: 24, text: "Se prohíbe el lavado de vehículos." },
      { n: 25, text: "El ingreso de mecánicos u otros técnicos debe ser autorizado por el anfitrión." },
      { n: 26, text: "Se prohíbe el uso de equipos de sonido de vehículos que perturben la tranquilidad." },
    ],
  },
  {
    id: "bbq-gas",
    title: "Zona BBQ a gas",
    rules: [
      { n: 27, text: "Es de uso exclusivo para personas mayores de edad. Debe evitarse la manipulación por niños y el acceso de mascotas." },
      { n: 28, text: "Debe evitarse el derramamiento de aceites, grasas o residuos." },
      { n: 29, text: "Se debe verificar que no queden fogones abiertos o escapes de gas y hacer uso responsable del agua." },
    ],
  },
  {
    id: "fogatero",
    title: "Fogatero y BBQ externo",
    rules: [
      { n: 30, text: "Es de uso exclusivo para personas mayores de edad. Los menores solo podrán utilizarlo bajo supervisión adulta. Debe evitarse el acceso de mascotas." },
      { n: 31, text: "El encendido debe estar a cargo de un adulto." },
      { n: 32, text: "Se debe moderar la cantidad de madera." },
      { n: 33, text: "El uso como fogón de leña o asador será responsabilidad de un adulto." },
      { n: 34, text: "El fogatero se entrega con una carga inicial de madera, un mechero y líquido inflamable. Su uso adecuado es responsabilidad del huésped." },
      { n: 35, text: "Se prohíbe esparcir madera o residuos de carbón sobre las zonas verdes." },
      { n: 36, text: "Se prohíbe utilizar este espacio para fines diferentes a fogatero o fogón de leña." },
    ],
  },
  {
    id: "jacuzzi",
    title: "Jacuzzi",
    rules: [
      { n: 37, text: "Es de uso exclusivo para personas mayores de edad. Los menores deben estar acompañados permanentemente por un adulto." },
      { n: 38, text: "El tiempo de uso es de tres horas por cada encendido, con apagado automático." },
      { n: 39, text: "No es apto para personas en alto estado de embriaguez." },
      { n: 40, text: "Está prohibido el ingreso de mascotas." },
      { n: 41, text: "Está prohibido consumir alimentos dentro del jacuzzi." },
      { n: 42, text: "La temperatura máxima permitida es de 35 °C." },
      { n: 43, text: "Se recomienda que los adultos mayores ingresen y salgan acompañados." },
      { n: 44, text: "Se prohíbe manipular el sistema eléctrico o hidráulico." },
      { n: 45, text: "Se prohíbe ingresar elementos cortopunzantes, objetos de vidrio o juguetes no aptos para el agua." },
      { n: 46, text: "El jacuzzi debe apagarse cuando no esté en uso." },
    ],
  },
  {
    id: "zonas-verdes",
    title: "Zonas verdes y jardines",
    rules: [
      { n: 47, text: "Se espera el máximo respeto por los jardines y el entorno natural." },
      { n: 48, text: "Las zonas verdes presentan pendientes que, especialmente en épocas de lluvia, pueden ocasionar caídas. Los huéspedes deben desplazarse con precaución, especialmente los adultos mayores." },
    ],
  },
];

/** Reglas críticas a destacar antes de enviar la solicitud (§24.3). */
export const criticalRules: string[] = [
  "Solo ingresan huéspedes registrados.",
  "No se permiten fiestas ni eventos.",
  "Turismo sexual prohibido.",
  "Drogas alucinógenas prohibidas.",
  "Consumo moderado de licor.",
  "No fumar dentro de la casa.",
  "Mascotas bajo responsabilidad del huésped.",
  "Ruido moderado después de las 11:00 p. m.",
  "No se permiten visitas no registradas.",
  "Daños y elementos faltantes serán cobrados.",
  "Cámaras de seguridad 24 horas.",
  "Uso responsable de jacuzzi, BBQ y fogatero.",
];
