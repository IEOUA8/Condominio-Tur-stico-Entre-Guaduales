import type { Metadata } from "next";
import { LegalShell, H2, P, UL } from "@/components/legal/LegalShell";
import { site, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de cancelación",
  description: "Condiciones de cancelación y reprogramación de reservas en Entre Guaduales.",
  alternates: { canonical: "/politica-de-cancelacion" },
  robots: { index: true, follow: false },
};

const CANCEL_WA_MESSAGE =
  "Hola, quiero solicitar la cancelación o reprogramación de mi reserva en Entre Guaduales. Mi número de solicitud es:";

export default function CancelacionPage() {
  return (
    <LegalShell
      slug="politica-de-cancelacion"
      title="Política de cancelación y reprogramación"
      subtitle="Condiciones aplicables a la cancelación y el cambio de fechas."
      updatedAt="12 de agosto de 2026"
    >
      <H2>1. Cancelación</H2>
      <P>
        Con la solicitud de cancelación realizada al menos 24 horas antes del check-in (3:00 p. m.) se
        devuelve el 100% del valor pagado. Para que aplique este beneficio, la solicitud debe presentarse
        por el canal oficial indicado en el punto 4: la fecha y hora en que se reciba por ese canal es la
        única que se tiene en cuenta para verificar el cumplimiento del plazo de 24 horas.
      </P>

      <H2>2. Reprogramación</H2>
      <P>
        Con la cancelación oportuna (al menos 24 horas antes del check-in), a elección del huésped se
        reembolsa el valor o se reprograma la estadía según disponibilidad.
      </P>

      <H2>3. Depósito de garantía</H2>
      <P>
        Se requiere un depósito de garantía de $500.000, que se devuelve al día siguiente del check-out al
        titular de la reserva.
      </P>

      <H2>4. Cómo y dónde solicitarlo (único medio válido)</H2>
      <P>
        Las solicitudes de cancelación o reprogramación se reciben <strong>únicamente</strong> a través de
        los canales oficiales de Entre Guaduales. No se tramitan solicitudes por otros medios (redes
        sociales, mensajes a terceros o intermediarios no autorizados). Los canales oficiales son:
      </P>
      <UL>
        <li>
          WhatsApp oficial:{" "}
          <a href={whatsappLink(CANCEL_WA_MESSAGE)} className="font-medium text-guadua-700 underline">
            {site.contact.whatsappDisplay}
          </a>
        </li>
        <li>
          Correo oficial:{" "}
          <a href={`mailto:${site.contact.email}`} className="font-medium text-guadua-700 underline">
            {site.contact.email}
          </a>
        </li>
        <li>La solicitud de reserva gestionada desde este sitio web.</li>
      </UL>
      <P>
        Al escribirnos, indica siempre tu número de solicitud. La cancelación se considera realizada en la
        fecha y hora en que la recibimos por el canal oficial, y esa marca de tiempo es la que determina si
        se cumple el plazo de 24 horas antes del check-in.
      </P>
    </LegalShell>
  );
}
