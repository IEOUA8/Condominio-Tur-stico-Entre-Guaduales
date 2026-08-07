import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, H2, P, UL } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Condiciones de la solicitud y reserva de estadías en Entre Guaduales.",
  alternates: { canonical: "/terminos-y-condiciones" },
  robots: { index: true, follow: false },
};

export default function TerminosPage() {
  return (
    <LegalShell
      slug="terminos-y-condiciones"
      title="Términos y condiciones de reserva"
      subtitle="Condiciones aplicables a las solicitudes y reservas de estadía."
      updatedAt="7 de agosto de 2026"
    >
      <H2>1. Solicitud vs. reserva confirmada</H2>
      <P>
        El envío del formulario constituye una <strong className="text-forest-900">solicitud de disponibilidad</strong>,
        no una reserva confirmada. La reserva se considera confirmada únicamente cuando así te lo comuniquemos por los
        canales oficiales y se cumplan las condiciones de pago aplicables.
      </P>

      <H2>2. Tarifas</H2>
      <P>
        Las tarifas corresponden al alojamiento completo de la experiencia seleccionada (no por persona). Desde la
        tercera noche aplica la tarifa de noche adicional. La experiencia «Dos Familias» se cotiza según la
        combinación de cabañas.
      </P>

      <H2>3. Pagos y depósito</H2>
      <P>
        Aceptamos pago por transferencia bancaria; los datos de la cuenta oficial se comparten al coordinar
        la reserva. Se requiere un depósito de garantía de $500.000, que se devuelve al día siguiente del
        check-out al titular de la reserva. Realiza pagos únicamente por los canales oficiales y verifica el
        titular y tu número de solicitud antes de transferir.
      </P>

      <H2>4. Capacidad y huéspedes</H2>
      <UL>
        <li>Solo pueden ingresar y permanecer los huéspedes registrados en la reserva.</li>
        <li>No se permiten fiestas ni eventos.</li>
        <li>El uso de las instalaciones se rige por el reglamento del condominio.</li>
      </UL>
      <P>
        Consulta el{" "}
        <Link href="/reglamento" className="font-medium text-guadua-700 underline">
          reglamento completo
        </Link>
        , que forma parte de estas condiciones.
      </P>

      <H2>5. Check-in y check-out</H2>
      <P>
        El check-in es a partir de las 3:00 p. m. y el check-out hasta las 12:00 m. (mediodía).
      </P>

      <H2>6. Daños y responsabilidad</H2>
      <P>
        Los daños ocasionados al inmueble o su equipamiento, así como los elementos faltantes, serán asumidos por
        los huéspedes cubriendo el costo de reparación o reemplazo.
      </P>

      <H2>7. Cancelaciones</H2>
      <P>
        Con la cancelación realizada al menos 24 horas antes del check-in (3:00 p. m.) se devuelve el 100%.
        En ese caso, a elección del huésped, se reembolsa el valor o se reprograma la estadía según
        disponibilidad. Más detalles en la{" "}
        <Link href="/politica-de-cancelacion" className="font-medium text-guadua-700 underline">
          política de cancelación
        </Link>
        .
      </P>
    </LegalShell>
  );
}
