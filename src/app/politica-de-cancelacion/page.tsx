import type { Metadata } from "next";
import { LegalShell, H2, P } from "@/components/legal/LegalShell";

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
      updatedAt="7 de agosto de 2026"
    >
      <H2>1. Cancelación</H2>
      <P>
        Con la cancelación realizada al menos 24 horas antes del check-in (3:00 p. m.) se devuelve el 100%
        del valor pagado.
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

      <H2>4. Cómo solicitar un cambio</H2>
      <P>
        Para cancelar o reprogramar, escríbenos por los canales oficiales indicando tu número de solicitud. Te
        confirmaremos las condiciones aplicables a tu caso.
      </P>
    </LegalShell>
  );
}
