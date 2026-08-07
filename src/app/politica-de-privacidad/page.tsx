import type { Metadata } from "next";
import { LegalShell, H2, P, UL } from "@/components/legal/LegalShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo tratamos y protegemos tus datos personales en Entre Guaduales.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: false },
};

export default function PrivacidadPage() {
  return (
    <LegalShell
      slug="politica-de-privacidad"
      title="Política de privacidad y tratamiento de datos"
      subtitle="Cómo recolectamos, usamos y protegemos tu información personal."
      updatedAt="7 de agosto de 2026"
    >
      <H2>1. Responsable del tratamiento</H2>
      <P>
        El responsable del tratamiento de los datos personales es{" "}
        <strong className="text-forest-900">{site.legal.responsibleName}</strong> ({site.legal.documentId}),
        prestador de servicios turísticos con Registro Nacional de Turismo No. {site.legal.rnt}. Para
        asuntos de privacidad puedes escribir a{" "}
        <a href={`mailto:${site.legal.privacyEmail}`} className="font-medium text-guadua-700 underline">
          {site.legal.privacyEmail}
        </a>
        .
      </P>

      <H2>2. Datos que recolectamos</H2>
      <P>Cuando envías una solicitud de disponibilidad o nos contactas, podemos recolectar:</P>
      <UL>
        <li>Nombre y apellido.</li>
        <li>Número de WhatsApp y correo electrónico.</li>
        <li>Ciudad o país de origen.</li>
        <li>Detalles de tu solicitud: fechas, número de huéspedes, preferencias y comentarios.</li>
      </UL>

      <H2>3. Finalidad</H2>
      <P>Utilizamos tus datos únicamente para:</P>
      <UL>
        <li>Responder tu solicitud y coordinar la disponibilidad de tu estadía.</li>
        <li>Enviarte confirmaciones e información relacionada con tu reserva.</li>
        <li>Mejorar nuestro servicio y atención.</li>
      </UL>

      <H2>4. Autorización</H2>
      <P>
        Al enviar tu solicitud autorizas el tratamiento de tus datos conforme a esta política. No compartimos
        tu información con terceros para fines comerciales ajenos a tu reserva.
      </P>

      <H2>5. Tus derechos</H2>
      <P>
        Puedes conocer, actualizar, rectificar y solicitar la supresión de tus datos, así como revocar la
        autorización, escribiendo a nuestro correo de privacidad.
      </P>

      <H2>6. Seguridad</H2>
      <P>
        Adoptamos medidas razonables para proteger tu información. Recuerda realizar pagos únicamente por los
        canales oficiales de {site.legalName} y verificar el titular y tu número de solicitud antes de transferir.
      </P>
    </LegalShell>
  );
}
