import type { Metadata } from "next";
import { LegalShell, H2, H3, P, UL, OL } from "@/components/legal/LegalShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description:
    "Política de tratamiento de datos personales del Condominio Turístico Entre Guaduales: responsable, finalidades, derechos de los titulares, TRA, SIRE y seguridad.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: false },
};

const email = site.legal.privacyEmail;
const wa = `https://wa.me/${site.contact.whatsapp}`;

function Mail() {
  return (
    <a href={`mailto:${email}`} className="font-medium text-guadua-700 underline">
      {email}
    </a>
  );
}
function Wa() {
  return (
    <a href={wa} className="font-medium text-guadua-700 underline">
      311 679 1517
    </a>
  );
}

export default function PrivacidadPage() {
  return (
    <LegalShell
      slug="politica-de-privacidad"
      title="Política de tratamiento de datos personales"
      subtitle="Cómo el Condominio Turístico Entre Guaduales recolecta, usa, protege y reporta tu información personal."
      updatedAt="19 de agosto de 2026"
      draftNotice={false}
    >
      <div className="rounded-2xl border border-forest-900/10 bg-white/60 p-4 text-sm text-forest-900/70">
        <strong className="font-semibold text-forest-900">Condominio Turístico Entre Guaduales</strong>
        <br />
        Versión: 1.2 · Fecha de entrada en vigencia: 1 de julio de 2026 · Fecha de aprobación: 30 de junio de 2026 ·
        Última actualización: 19 de agosto de 2026.
      </div>

      <H2>1. Responsable del tratamiento</H2>
      <P>
        El responsable del tratamiento de los datos personales es{" "}
        <strong className="text-forest-900">{site.legal.responsibleName}</strong>, identificado con cédula de
        ciudadanía No. 15.444.992 de Rionegro, Antioquia, en calidad de prestador de servicios turísticos, con
        Registro Nacional de Turismo – RNT No. {site.legal.rnt}, quien desarrolla la actividad bajo el
        establecimiento Condominio Turístico Entre Guaduales.
      </P>
      <P>Para efectos de esta Política, se denominará “Entre Guaduales”.</P>
      <H3>Datos de contacto del Responsable</H3>
      <UL>
        <li>
          Correo electrónico: <Mail />
        </li>
        <li>
          Teléfono / WhatsApp: <Wa />
        </li>
        <li>Dirección física: Finca 188, vereda Los Pinos de Rionegro.</li>
        <li>Municipio: Rionegro, Antioquia, Colombia.</li>
      </UL>

      <H2>2. Marco normativo</H2>
      <P>
        La presente Política se adopta en cumplimiento de las disposiciones aplicables en materia de protección de
        datos personales y, en particular:
      </P>
      <UL>
        <li>Artículo 15 de la Constitución Política de Colombia.</li>
        <li>Ley Estatutaria 1581 de 2012.</li>
        <li>
          Decreto 1074 de 2015, en las disposiciones aplicables al régimen de protección de datos personales.
        </li>
        <li>
          Ley 2068 de 2020, en lo relacionado con el registro de huéspedes y la Tarjeta de Registro de Alojamiento –
          TRA.
        </li>
        <li>
          Decreto 1836 de 2021 y demás disposiciones aplicables al Registro Nacional de Turismo y a los prestadores
          de servicios turísticos.
        </li>
        <li>
          Normativa aplicable al Sistema de Información para el Reporte de Extranjeros – SIRE.
        </li>
        <li>Las normas que modifiquen, adicionen, reglamenten o sustituyan las anteriores.</li>
        <li>
          Las instrucciones y lineamientos expedidos por la Superintendencia de Industria y Comercio – SIC.
        </li>
      </UL>
      <P>
        La Ley 1581 de 2012 regula el derecho de las personas a conocer, actualizar y rectificar la información que
        se haya recogido sobre ellas y establece, entre otros aspectos, los principios, derechos de los titulares,
        deberes de responsables y encargados y reglas sobre autorización y transferencias internacionales.
      </P>

      <H2>3. Objeto</H2>
      <P>
        La presente Política establece los criterios bajo los cuales Entre Guaduales recolecta, almacena, utiliza,
        consulta, actualiza, transmite, transfiere y, cuando corresponda, suprime datos personales.
      </P>
      <P>
        Su finalidad es garantizar el derecho constitucional de Hábeas Data de los titulares y establecer las reglas
        para el tratamiento adecuado, legítimo y seguro de su información personal.
      </P>

      <H2>4. Ámbito de aplicación</H2>
      <P>
        Esta Política aplica a todos los datos personales tratados por Entre Guaduales, independientemente del medio
        utilizado para su recolección. Comprende información obtenida mediante:
      </P>
      <UL>
        <li>Página web.</li>
        <li>Formularios electrónicos.</li>
        <li>Formularios de reserva.</li>
        <li>WhatsApp.</li>
        <li>Correo electrónico.</li>
        <li>Redes sociales.</li>
        <li>Llamadas telefónicas.</li>
        <li>Formularios físicos.</li>
        <li>Reservas directas.</li>
        <li>Plataformas de alojamiento y reservas, incluyendo Airbnb.</li>
        <li>Plataformas tecnológicas de gestión de alojamiento, incluyendo Hospy.</li>
        <li>Procesos digitales de check-in y check-out.</li>
        <li>Tarjeta de Registro de Alojamiento – TRA.</li>
        <li>Sistema de Información para el Reporte de Extranjeros – SIRE.</li>
        <li>Otros canales habilitados por Entre Guaduales.</li>
      </UL>

      <H2>5. Datos personales que podemos recolectar</H2>
      <P>
        Dependiendo de la relación del titular con Entre Guaduales y de las finalidades y obligaciones aplicables,
        podrán recolectarse y tratarse los siguientes datos:
      </P>
      <H3>5.1. Datos del titular de la reserva</H3>
      <UL>
        <li>Nombre y apellidos.</li>
        <li>Tipo y número de documento de identificación.</li>
        <li>Imagen, fotografía o copia digitalizada del documento de identificación.</li>
        <li>Nacionalidad.</li>
        <li>Número telefónico.</li>
        <li>Número de WhatsApp.</li>
        <li>Correo electrónico.</li>
        <li>Ciudad, departamento o país de procedencia.</li>
        <li>Fechas de ingreso y salida.</li>
        <li>Información relacionada con la reserva.</li>
        <li>Número de huéspedes.</li>
        <li>Información necesaria para pagos y facturación.</li>
        <li>Solicitudes, comentarios y preferencias relacionadas con la estadía.</li>
        <li>Información contenida en las comunicaciones realizadas con Entre Guaduales.</li>
      </UL>
      <H3>5.2. Datos de huéspedes y acompañantes</H3>
      <P>
        Cuando corresponda, Entre Guaduales podrá recolectar información de cada uno de los huéspedes y acompañantes
        que hagan parte de una reserva, incluyendo:
      </P>
      <UL>
        <li>Nombre y apellidos.</li>
        <li>Tipo y número de documento de identificación.</li>
        <li>Imagen, fotografía o copia digitalizada del documento de identificación.</li>
        <li>Nacionalidad.</li>
        <li>Fecha de ingreso.</li>
        <li>Fecha de salida.</li>
      </UL>
      <H3>5.3. Información del documento de identificación</H3>
      <P>
        La imagen o copia digitalizada del documento de identificación podrá ser solicitada mediante el proceso de
        check-in habilitado por Entre Guaduales y gestionado mediante la plataforma tecnológica Hospy. Esta
        información podrá ser utilizada para:
      </P>
      <UL>
        <li>Identificar al huésped.</li>
        <li>Facilitar la validación de la información suministrada.</li>
        <li>Gestionar el proceso de check-in.</li>
        <li>Registrar la estadía.</li>
        <li>Cumplir las obligaciones legales aplicables al alojamiento turístico.</li>
        <li>Facilitar los reportes obligatorios ante las autoridades competentes.</li>
      </UL>
      <P>
        Entre Guaduales procurará recolectar únicamente información pertinente, adecuada y necesaria para las
        finalidades informadas y para el cumplimiento de las obligaciones legales aplicables.
      </P>

      <H2>6. Datos sensibles</H2>
      <P>
        Entre Guaduales no solicitará datos sensibles salvo cuando exista una finalidad legítima que lo justifique y
        se cumplan las condiciones previstas en la legislación aplicable.
      </P>
      <P>
        Actualmente, el proceso de registro de huéspedes de Entre Guaduales no contempla reconocimiento facial,
        selfie, video de identificación ni otros mecanismos de tratamiento de datos biométricos.
      </P>
      <P>
        Si en el futuro se implementara alguna funcionalidad que implique tratamiento de datos sensibles, Entre
        Guaduales realizará previamente los ajustes correspondientes a sus mecanismos de información y autorización,
        cuando sean legalmente exigibles.
      </P>
      <P>Cuando excepcionalmente se requiera el tratamiento de datos sensibles:</P>
      <UL>
        <li>Se informará al titular sobre su carácter facultativo, cuando corresponda.</li>
        <li>Se explicará la finalidad específica.</li>
        <li>Se solicitará la autorización correspondiente cuando sea exigible.</li>
        <li>Se aplicarán las medidas de seguridad reforzadas que resulten necesarias.</li>
      </UL>

      <H2>7. Niños, niñas y adolescentes</H2>
      <P>
        Entre Guaduales podrá prestar servicios a grupos familiares en los que participen niños, niñas o
        adolescentes.
      </P>
      <P>
        Cuando sea necesario tratar sus datos personales, se observarán las reglas especiales establecidas por la
        legislación colombiana, garantizando su interés superior y el respeto de sus derechos fundamentales.
      </P>
      <P>
        No se recolectará información de niños, niñas o adolescentes para fines comerciales sin contar con las
        autorizaciones y condiciones legalmente exigibles.
      </P>
      <P>
        Cuando resulte necesario registrar a un menor como huésped o acompañante para efectos de la prestación del
        servicio o del cumplimiento de obligaciones legales, la información será tratada exclusivamente para las
        finalidades correspondientes.
      </P>

      <H2>8. Finalidades del tratamiento</H2>
      <P>Los datos personales serán tratados para las siguientes finalidades:</P>
      <H3>8.1. Solicitudes y reservas</H3>
      <UL>
        <li>Atender solicitudes de disponibilidad.</li>
        <li>Gestionar reservas.</li>
        <li>Confirmar fechas y condiciones de alojamiento.</li>
        <li>Gestionar modificaciones o cancelaciones.</li>
        <li>Identificar al titular y huéspedes.</li>
        <li>Coordinar ingreso y salida.</li>
      </UL>
      <H3>8.2. Prestación del servicio</H3>
      <UL>
        <li>Prestar los servicios turísticos contratados.</li>
        <li>Contactar al huésped.</li>
        <li>Enviar instrucciones relacionadas con su estadía.</li>
        <li>Informar condiciones de utilización de las instalaciones.</li>
        <li>Atender inquietudes y solicitudes.</li>
      </UL>
      <H3>8.3. Pagos y facturación</H3>
      <UL>
        <li>Gestionar pagos.</li>
        <li>Emitir facturas y documentos equivalentes cuando corresponda.</li>
        <li>Llevar registros contables y administrativos.</li>
        <li>Cumplir obligaciones tributarias y legales.</li>
      </UL>
      <H3>8.4. Seguridad</H3>
      <UL>
        <li>Gestionar el ingreso y permanencia de huéspedes.</li>
        <li>Proteger a huéspedes, visitantes, trabajadores e instalaciones.</li>
        <li>Atender incidentes de seguridad.</li>
        <li>Facilitar la identificación de huéspedes y acompañantes.</li>
      </UL>
      <H3>8.5. Servicio al cliente</H3>
      <UL>
        <li>Atender peticiones, quejas, reclamos y sugerencias.</li>
        <li>Evaluar la calidad del servicio.</li>
        <li>Mejorar la atención y experiencia del huésped.</li>
      </UL>
      <H3>8.6. Cumplimiento legal</H3>
      <UL>
        <li>Atender requerimientos de autoridades competentes.</li>
        <li>Cumplir obligaciones legales, contractuales, administrativas, contables y tributarias.</li>
        <li>Cumplir las obligaciones aplicables a los prestadores de servicios turísticos.</li>
      </UL>
      <H3>8.7. Marketing y comunicaciones comerciales</H3>
      <P>
        Cuando exista autorización específica, previa y separada, los datos podrán utilizarse para enviar:
      </P>
      <UL>
        <li>Promociones.</li>
        <li>Descuentos.</li>
        <li>Tarifas especiales.</li>
        <li>Novedades.</li>
        <li>Experiencias.</li>
        <li>Ofertas.</li>
        <li>Información comercial de Entre Guaduales.</li>
      </UL>
      <P>
        La autorización para marketing será independiente de la autorización necesaria para gestionar una reserva o
        prestar el servicio.
      </P>
      <H3>8.8. Validación de información</H3>
      <P>
        Los datos contenidos en los documentos de identificación podrán ser procesados mediante herramientas
        tecnológicas de validación, incluyendo mecanismos de inteligencia artificial utilizados por la plataforma
        Hospy, con el propósito de verificar la correspondencia de la información suministrada por el huésped con el
        documento presentado.
      </P>
      <H3>8.9. Registro y reporte de huéspedes</H3>
      <P>
        Los datos personales serán tratados para cumplir las obligaciones legales y reglamentarias aplicables a Entre
        Guaduales como prestador de servicios de alojamiento turístico, incluyendo:
      </P>
      <UL>
        <li>El diligenciamiento y reporte de la Tarjeta de Registro de Alojamiento – TRA.</li>
        <li>
          El cumplimiento de las obligaciones de reporte de huéspedes extranjeros mediante el Sistema de Información
          para el Reporte de Extranjeros – SIRE, cuando corresponda.
        </li>
        <li>
          La atención de requerimientos de autoridades administrativas, migratorias, judiciales o de policía
          competentes.
        </li>
      </UL>
      <P>
        La TRA es el sistema habilitado por el Ministerio de Comercio, Industria y Turismo para que los prestadores
        de alojamiento turístico registren a sus huéspedes.
      </P>
      <P>
        El SIRE es la herramienta oficial de Migración Colombia para reportar, entre otros, el alojamiento y
        hospedaje de extranjeros.
      </P>

      <H2>9. Autorización para el tratamiento</H2>
      <P>
        Entre Guaduales solicitará autorización previa, expresa e informada al titular para el tratamiento de sus
        datos personales, salvo las excepciones previstas en la ley. La autorización podrá obtenerse mediante:
      </P>
      <UL>
        <li>Formularios físicos.</li>
        <li>Formularios electrónicos.</li>
        <li>Página web.</li>
        <li>Correo electrónico.</li>
        <li>WhatsApp.</li>
        <li>Procesos de reserva.</li>
        <li>Otros mecanismos que permitan demostrar posteriormente la autorización.</li>
      </UL>
      <P>Entre Guaduales conservará evidencia de las autorizaciones obtenidas.</P>
      <P>
        Cuando el tratamiento se encuentre amparado por una obligación legal o por alguna de las excepciones
        previstas en la legislación, no se solicitará una autorización que no resulte jurídicamente necesaria.
      </P>

      <H2>10. Uso de WhatsApp</H2>
      <P>
        Cuando el titular suministre su número de WhatsApp y autorice su utilización, Entre Guaduales podrá utilizar
        este canal para:
      </P>
      <UL>
        <li>Responder solicitudes.</li>
        <li>Gestionar disponibilidad.</li>
        <li>Confirmar reservas.</li>
        <li>Coordinar fechas de llegada y salida.</li>
        <li>Enviar instrucciones de ingreso.</li>
        <li>Compartir ubicación e información necesaria para la estadía.</li>
        <li>Informar modificaciones relacionadas con la reserva.</li>
        <li>Atender inquietudes.</li>
        <li>Gestionar peticiones, quejas y reclamos.</li>
        <li>Mantener las comunicaciones necesarias para prestar adecuadamente el servicio.</li>
      </UL>
      <P>
        Las comunicaciones podrán incluir texto, fotografías, documentos, audios u otros recursos necesarios para la
        prestación del servicio.
      </P>
      <P>
        La autorización para utilizar WhatsApp con fines operativos no constituye autorización para recibir
        publicidad. El envío de comunicaciones comerciales requerirá una autorización independiente.
      </P>
      <P>
        La información personal y los documentos suministrados mediante el proceso de check-in de Hospy serán
        gestionados dentro de las funcionalidades habilitadas para la administración de huéspedes y no serán
        enviados directamente por Hospy mediante canales de chat.
      </P>

      <H2>11. Comunicaciones comerciales</H2>
      <P>
        Cuando el titular otorgue autorización específica, Entre Guaduales podrá enviar comunicaciones comerciales
        mediante:
      </P>
      <UL>
        <li>WhatsApp.</li>
        <li>Correo electrónico.</li>
        <li>Mensajes de texto.</li>
        <li>Otros canales autorizados.</li>
      </UL>
      <P>
        Estas comunicaciones podrán contener promociones, descuentos, tarifas, disponibilidad, experiencias y
        novedades.
      </P>
      <P>La autorización comercial será:</P>
      <UL>
        <li>Opcional.</li>
        <li>Independiente de la autorización para gestionar una reserva.</li>
        <li>Revocable en cualquier momento.</li>
      </UL>
      <P>El titular podrá solicitar el retiro de las comunicaciones comerciales mediante:</P>
      <UL>
        <li>
          Correo: <Mail />
        </li>
        <li>
          WhatsApp: <Wa />
        </li>
      </UL>
      <P>
        Entre Guaduales no utilizará mecanismos que pretendan obtener consentimiento mediante silencio, inacción o
        casillas previamente marcadas.
      </P>

      <H2>12. Airbnb y otras plataformas de reservas</H2>
      <P>
        Entre Guaduales podrá utilizar plataformas de reservas y alojamiento turístico, incluyendo Airbnb, para
        promocionar, gestionar y comercializar sus servicios. Cuando una reserva sea realizada a través de una
        plataforma de terceros:
      </P>
      <UL>
        <li>
          El tratamiento realizado directamente por la plataforma estará sujeto a su propia política de privacidad.
        </li>
        <li>
          Entre Guaduales tratará la información que reciba o a la que legítimamente tenga acceso para gestionar la
          reserva y prestar el servicio contratado.
        </li>
        <li>
          Entre Guaduales podrá utilizar dicha información para gestionar ingreso, salida, comunicaciones, pagos,
          facturación, atención al huésped y demás actividades relacionadas con la reserva.
        </li>
        <li>
          La información recibida podrá ser utilizada para cumplir las obligaciones legales relacionadas con el
          registro y reporte de huéspedes.
        </li>
      </UL>
      <P>
        La información recibida será utilizada exclusivamente para finalidades legítimas y compatibles con la
        relación existente con el huésped.
      </P>

      <H2>13. TRA, SIRE y reportes a autoridades</H2>
      <P>
        En desarrollo de su actividad como prestador de servicios de alojamiento turístico, Entre Guaduales
        recolectará y tratará la información necesaria para cumplir las obligaciones legales de registro y reporte de
        huéspedes.
      </P>
      <H3>13.1. Tarjeta de Registro de Alojamiento – TRA</H3>
      <P>
        Entre Guaduales utiliza la plataforma tecnológica Hospy para facilitar el proceso de registro de huéspedes.
      </P>
      <P>
        Cuando el huésped complete el proceso de check-in y Entre Guaduales tenga configurados los requisitos
        técnicos correspondientes, incluyendo su RNT y token de integración, Hospy realizará automáticamente el envío
        de la información correspondiente a la TRA al Ministerio de Comercio, Industria y Turismo, conforme a la
        configuración y funcionamiento del servicio contratado.
      </P>
      <H3>13.2. Sistema de Información para el Reporte de Extranjeros – SIRE</H3>
      <P>
        Cuando se trate de huéspedes extranjeros, y Entre Guaduales tenga configurados sus datos de SIRE y el código
        correspondiente del alojamiento, Hospy podrá realizar automáticamente los reportes requeridos al SIRE de
        Migración Colombia, incluyendo los correspondientes al ingreso y salida, siempre que el huésped complete el
        proceso de registro requerido.
      </P>
      <P>
        El SIRE constituye una obligación legal para quienes tengan bajo su responsabilidad el alojamiento o
        hospedaje de extranjeros en los casos establecidos por la normativa aplicable.
      </P>
      <H3>13.3. Otros reportes oficiales</H3>
      <P>
        Entre Guaduales podrá suministrar información a las autoridades competentes cuando exista una obligación
        legal, reglamentaria, administrativa o judicial que así lo exija. La información será suministrada únicamente
        en la medida necesaria para cumplir la finalidad legal correspondiente.
      </P>

      <H2>14. Hospy, proveedores y encargados del tratamiento</H2>
      <P>
        Entre Guaduales podrá contratar terceros para desarrollar actividades relacionadas con:
      </P>
      <UL>
        <li>Reservas.</li>
        <li>Alojamiento.</li>
        <li>Pagos.</li>
        <li>Facturación.</li>
        <li>Contabilidad.</li>
        <li>Tecnología.</li>
        <li>Almacenamiento.</li>
        <li>Comunicaciones.</li>
        <li>Atención al cliente.</li>
        <li>Gestión y registro de huéspedes.</li>
        <li>Procesos de check-in y check-out.</li>
        <li>Validación de documentos.</li>
        <li>Gestión de información relacionada con reservas.</li>
        <li>Cumplimiento de obligaciones relacionadas con TRA y SIRE.</li>
      </UL>
      <P>
        Entre Guaduales utiliza Hospy como plataforma tecnológica para la gestión de reservas, huéspedes y procesos
        de check-in y check-out.
      </P>
      <P>
        A través de Hospy, los huéspedes podrán suministrar información de identificación y una imagen o copia
        digitalizada de su documento de identificación.
      </P>
      <P>
        Hospy podrá utilizar herramientas tecnológicas, incluyendo inteligencia artificial, para validar la
        correspondencia entre la información suministrada por el huésped y el documento presentado.
      </P>
      <P>
        Hospy podrá facilitar y ejecutar, de acuerdo con la configuración del servicio contratado, los procesos de
        transmisión de información relacionados con la TRA y el SIRE.
      </P>
      <P>
        Cuando Hospy actúe como Encargado del Tratamiento, tratará los datos personales por cuenta de Entre
        Guaduales, de acuerdo con las instrucciones, finalidades y condiciones establecidas por Entre Guaduales y con
        las obligaciones aplicables en materia de protección de datos personales.
      </P>
      <P>
        Entre Guaduales procurará establecer con Hospy y demás encargados los contratos, acuerdos o mecanismos
        correspondientes que permitan garantizar la seguridad, confidencialidad y adecuado tratamiento de los datos
        personales.
      </P>

      <H2>15. Transmisión y transferencia de datos personales</H2>
      <P>
        Cuando resulte necesario para la operación de Entre Guaduales, la prestación de los servicios o el
        cumplimiento de obligaciones legales, los datos personales podrán ser transmitidos o transferidos a terceros
        ubicados dentro o fuera de Colombia. Esto podrá comprender:
      </P>
      <UL>
        <li>Hospy y los proveedores tecnológicos que intervengan en la prestación de sus servicios.</li>
        <li>Plataformas de reservas.</li>
        <li>Proveedores de almacenamiento y procesamiento de información.</li>
        <li>Procesadores de pagos.</li>
        <li>Proveedores de tecnología y comunicaciones.</li>
        <li>Ministerio de Comercio, Industria y Turismo, en relación con la TRA.</li>
        <li>Migración Colombia, en relación con el SIRE.</li>
        <li>Otras autoridades públicas competentes.</li>
      </UL>
      <P>
        Cuando se realice una transmisión de datos a un Encargado del Tratamiento, Entre Guaduales procurará
        establecer las medidas contractuales, técnicas y administrativas necesarias para proteger la información.
      </P>
      <P>
        Cuando exista transferencia o transmisión internacional de datos personales, se observarán las condiciones y
        requisitos establecidos en la legislación colombiana aplicable.
      </P>

      <H2>16. Derechos de los titulares</H2>
      <P>El titular de los datos personales tiene derecho a:</P>
      <OL>
        <li>Conocer los datos personales que sean objeto de tratamiento.</li>
        <li>Solicitar la actualización de sus datos.</li>
        <li>Solicitar la rectificación de sus datos cuando sean inexactos, incompletos o desactualizados.</li>
        <li>Solicitar información sobre el uso y tratamiento de sus datos.</li>
        <li>Solicitar prueba de la autorización otorgada, cuando esta sea exigible.</li>
        <li>Solicitar la supresión de sus datos cuando sea procedente.</li>
        <li>Revocar la autorización cuando legalmente sea posible.</li>
        <li>Presentar consultas.</li>
        <li>Presentar reclamos.</li>
        <li>Acceder gratuitamente a sus datos personales.</li>
        <li>
          Presentar quejas ante la Superintendencia de Industria y Comercio, una vez agotado el procedimiento
          correspondiente ante Entre Guaduales.
        </li>
      </OL>
      <P>
        El ejercicio de estos derechos estará sujeto a las limitaciones y excepciones establecidas en la legislación
        aplicable.
      </P>

      <H2>17. Procedimiento para consultas y reclamos</H2>
      <P>
        El titular, sus causahabientes, representantes o las personas autorizadas legalmente podrán ejercer sus
        derechos mediante:
      </P>
      <UL>
        <li>
          Correo electrónico: <Mail />
        </li>
        <li>
          WhatsApp: <Wa />
        </li>
      </UL>
      <P>La solicitud deberá contener, como mínimo, información que permita:</P>
      <UL>
        <li>Identificar al titular.</li>
        <li>Identificar los datos respecto de los cuales se formula la solicitud.</li>
        <li>Indicar claramente la petición.</li>
        <li>Señalar los datos de contacto para recibir respuesta.</li>
      </UL>
      <P>
        Cuando corresponda, Entre Guaduales podrá solicitar información adicional necesaria para verificar la
        identidad del solicitante y evitar el acceso no autorizado a información personal.
      </P>
      <H3>17.1. Consultas</H3>
      <P>Las consultas serán atendidas dentro del término establecido por la legislación aplicable.</P>
      <P>
        Cuando no sea posible atender la consulta dentro del término legal, se informará al interesado indicando los
        motivos de la demora y la fecha en que será atendida.
      </P>
      <H3>17.2. Reclamos</H3>
      <P>
        Cuando el titular considere que la información contenida en una base de datos debe ser corregida,
        actualizada, suprimida o cuando advierta un presunto incumplimiento de las obligaciones legales, podrá
        presentar el correspondiente reclamo.
      </P>
      <P>Entre Guaduales dará respuesta dentro de los términos establecidos por la legislación aplicable.</P>

      <H2>18. Seguridad de la información</H2>
      <P>
        Entre Guaduales implementará medidas técnicas, administrativas, humanas y organizacionales razonables y
        proporcionales para proteger los datos personales contra:
      </P>
      <UL>
        <li>Pérdida.</li>
        <li>Adulteración.</li>
        <li>Acceso no autorizado.</li>
        <li>Uso indebido.</li>
        <li>Divulgación no autorizada.</li>
        <li>Alteración.</li>
        <li>Destrucción.</li>
        <li>Tratamiento no autorizado.</li>
      </UL>
      <P>
        El acceso a la información estará limitado a quienes requieran conocerla para el cumplimiento de sus
        funciones.
      </P>
      <P>
        Entre Guaduales procurará que sus proveedores y encargados adopten medidas razonables de seguridad acordes
        con la naturaleza de la información tratada.
      </P>

      <H2>19. Confidencialidad</H2>
      <P>
        Las personas que tengan acceso a datos personales en desarrollo de sus funciones deberán mantener la
        confidencialidad de la información.
      </P>
      <P>
        Esta obligación permanecerá vigente incluso después de terminada la relación con Entre Guaduales cuando
        legalmente corresponda.
      </P>

      <H2>20. Conservación de los datos</H2>
      <P>
        Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades para las
        cuales fueron recolectados y durante los períodos exigidos por las obligaciones:
      </P>
      <UL>
        <li>Contractuales.</li>
        <li>Contables.</li>
        <li>Tributarias.</li>
        <li>Legales.</li>
        <li>Administrativas.</li>
        <li>Relacionadas con la actividad turística.</li>
        <li>Relacionadas con el registro y reporte de huéspedes.</li>
      </UL>
      <P>
        La información podrá conservarse durante los términos necesarios para atender obligaciones legales,
        requerimientos de autoridades, eventuales reclamaciones o responsabilidades derivadas de la prestación del
        servicio.
      </P>
      <P>
        Una vez finalizado el período de conservación aplicable, Entre Guaduales procederá, cuando corresponda, a
        eliminar, anonimizar o conservar la información de acuerdo con las obligaciones legales aplicables.
      </P>

      <H2>21. Información suministrada sobre terceros</H2>
      <P>
        Cuando un titular suministre información personal de otros huéspedes o acompañantes, deberá contar con la
        legitimidad necesaria para proporcionar dicha información cuando sea exigible.
      </P>
      <P>
        Entre Guaduales podrá solicitar al titular que informe a dichas personas sobre el tratamiento de sus datos y
        sobre la existencia de esta Política.
      </P>
      <P>
        Lo anterior se entiende sin perjuicio de los datos que deban ser recolectados y tratados directamente para
        cumplir las obligaciones legales relacionadas con el registro de huéspedes y los reportes a las autoridades
        competentes.
      </P>

      <H2>22. Aviso de privacidad</H2>
      <P>
        En los formularios, página web, procesos de reserva y demás canales de recolección de información, Entre
        Guaduales podrá utilizar un aviso de privacidad que informe de manera clara y resumida sobre:
      </P>
      <UL>
        <li>Identidad del Responsable.</li>
        <li>Datos recolectados.</li>
        <li>Finalidades.</li>
        <li>Derechos del titular.</li>
        <li>Canales de atención.</li>
        <li>Forma de consultar la presente Política.</li>
      </UL>
      <P>
        El aviso de privacidad podrá remitir a la versión completa de esta Política disponible en la página web de
        Entre Guaduales.
      </P>

      <H2>23. Modificaciones de la Política</H2>
      <P>Entre Guaduales podrá modificar esta Política cuando resulte necesario por cambios:</P>
      <UL>
        <li>Normativos.</li>
        <li>Operativos.</li>
        <li>Tecnológicos.</li>
        <li>Comerciales.</li>
        <li>En las finalidades del tratamiento.</li>
        <li>En los sistemas o plataformas utilizados para la gestión de información.</li>
        <li>En los servicios tecnológicos contratados.</li>
      </UL>
      <P>
        Cuando las modificaciones sean sustanciales y puedan afectar las finalidades del tratamiento o los derechos
        de los titulares, serán informadas a través de los medios disponibles y, cuando sea necesario, se
        solicitarán las autorizaciones correspondientes.
      </P>

      <H2>24. Vigencia</H2>
      <P>
        La presente Política entra en vigencia el 1 de julio de 2026 y permanecerá vigente mientras Entre Guaduales
        realice actividades de tratamiento de datos personales.
      </P>
      <P>
        Versión: 1.2 · Fecha de aprobación: 30 de junio de 2026 · Última actualización: 19 de agosto de 2026.
      </P>
    </LegalShell>
  );
}
