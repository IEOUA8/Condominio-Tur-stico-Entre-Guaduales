import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { Container } from "@/components/ui/Container";
import { PageView } from "@/components/analytics/PageView";

export const metadata: Metadata = {
  title: "Reservar tu estadía",
  description:
    "Consulta disponibilidad en Entre Guaduales en pocos pasos: fechas, huéspedes y experiencia. Recibe una tarifa estimada y finaliza por WhatsApp.",
  alternates: { canonical: "/reservar" },
  robots: { index: true, follow: true },
};

export default function ReservarPage() {
  return (
    <>
      <PageView event="open_booking" params={{ source: "page" }} />
      <Suspense fallback={<WizardFallback />}>
        <BookingWizard />
      </Suspense>
    </>
  );
}

function WizardFallback() {
  return (
    <Container className="min-h-[60vh] pt-28">
      <div className="animate-pulse space-y-4">
        <div className="h-2 w-full rounded-full bg-forest-900/10" />
        <div className="h-64 w-full rounded-3xl bg-forest-900/5" />
      </div>
    </Container>
  );
}
