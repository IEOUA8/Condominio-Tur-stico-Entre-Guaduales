import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell, H2, P, UL, Pending } from "@/components/legal/LegalShell";

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
      updatedAt="por definir"
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

      <H2>3. Pagos</H2>
      <P>
        Los métodos de pago autorizados y el porcentaje inicial o depósito se informan al coordinar la reserva:{" "}
        <Pending>[métodos de pago por confirmar]</Pending>. Realiza pagos únicamente por los canales oficiales y
        verifica el titular y tu número de solicitud antes de transferir.
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
        Los horarios de ingreso y salida se confirman al coordinar la reserva:{" "}
        <Pending>[horarios por confirmar]</Pending>.
      </P>

      <H2>6. Daños y responsabilidad</H2>
      <P>
        Los daños ocasionados al inmueble o su equipamiento, así como los elementos faltantes, serán asumidos por
        los huéspedes cubriendo el costo de reparación o reemplazo.
      </P>

      <H2>7. Cancelaciones</H2>
      <P>
        Las condiciones de cancelación y reprogramación se detallan en la{" "}
        <Link href="/politica-de-cancelacion" className="font-medium text-guadua-700 underline">
          política de cancelación
        </Link>
        .
      </P>
    </LegalShell>
  );
}
