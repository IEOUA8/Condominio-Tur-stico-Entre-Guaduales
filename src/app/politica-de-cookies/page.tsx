import type { Metadata } from "next";
import { LegalShell, H2, P, UL } from "@/components/legal/LegalShell";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies usamos en el sitio de Entre Guaduales y cómo gestionarlas.",
  alternates: { canonical: "/politica-de-cookies" },
  robots: { index: true, follow: false },
};

export default function CookiesPage() {
  return (
    <LegalShell
      slug="politica-de-cookies"
      title="Política de cookies"
      subtitle="Qué cookies utilizamos y cómo puedes gestionarlas."
      updatedAt="por definir"
    >
      <H2>1. Qué son las cookies</H2>
      <P>
        Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un sitio web y
        permiten recordar información sobre tu navegación.
      </P>

      <H2>2. Cookies que usamos</H2>
      <UL>
        <li>
          <strong className="text-forest-900">Esenciales:</strong> necesarias para el funcionamiento del sitio y tus
          preferencias (por ejemplo, tu elección sobre cookies).
        </li>
        <li>
          <strong className="text-forest-900">Analíticas (opcionales):</strong> con tu consentimiento, nos ayudan a
          entender cómo se usa el sitio para mejorarlo. No registran datos sensibles como nombres, teléfonos o correos.
        </li>
      </UL>

      <H2>3. Gestión de cookies</H2>
      <P>
        Al ingresar puedes aceptar todas las cookies o mantener solo las esenciales. También puedes eliminar o
        bloquear las cookies desde la configuración de tu navegador en cualquier momento.
      </P>

      <H2>4. Consentimiento</H2>
      <P>
        Solo activamos cookies analíticas si otorgas tu consentimiento. Tu elección se guarda localmente en tu
        dispositivo y puedes cambiarla cuando quieras.
      </P>
    </LegalShell>
  );
}
