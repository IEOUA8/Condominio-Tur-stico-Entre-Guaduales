import type { Metadata } from "next";
import { LegalShell, H2, P, Pending } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Política de cancelación",
  description: "Condiciones de cancelación y reprogramación de reservas en Entre Guaduales.",
  alternates: { canonical: "/politica-de-cancelacion" },
  robots: { index: true, follow: false },
};

export default function CancelacionPage() {
  return (
    <LegalShell
      slug="politica-de-cancelacion"
      title="Política de cancelación y reprogramación"
      subtitle="Condiciones aplicables a la cancelación y el cambio de fechas."
      updatedAt="por definir"
    >
      <H2>1. Cancelación</H2>
      <P>
        Las condiciones y plazos de cancelación, así como los eventuales reembolsos, se definen con el cliente y
        se comunican al confirmar la reserva: <Pending>[condiciones de cancelación por confirmar]</Pending>.
      </P>

      <H2>2. Reprogramación</H2>
      <P>
        La posibilidad de reprogramar fechas, sujeta a disponibilidad, y sus condiciones se informan al coordinar
        la reserva: <Pending>[condiciones de reprogramación por confirmar]</Pending>.
      </P>

      <H2>3. Depósitos</H2>
      <P>
        Si aplica un depósito o anticipo, su valor y las condiciones para su devolución se detallan al momento de
        la reserva: <Pending>[política de depósitos por confirmar]</Pending>.
      </P>

      <H2>4. Cómo solicitar un cambio</H2>
      <P>
        Para cancelar o reprogramar, escríbenos por los canales oficiales indicando tu número de solicitud. Te
        confirmaremos las condiciones aplicables a tu caso.
      </P>
    </LegalShell>
  );
}
