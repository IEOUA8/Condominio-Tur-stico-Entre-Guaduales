import { Container, Section, Eyebrow } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";

export function LocationTeaser() {
  return (
    <Section tone="ivory">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Ubicación y entorno</Eyebrow>
            <h2 className="mt-3 font-display text-3xl text-forest-900 sm:text-4xl">
              Naturaleza cerca, sin renunciar a la comodidad
            </h2>
            <p className="mt-4 leading-relaxed text-forest-900/75">
              Un entorno tranquilo rodeado de montañas y vegetación. Por privacidad
              y seguridad, compartimos la ubicación exacta e indicaciones de llegada
              al confirmar tu reserva.
            </p>

            <ul className="mt-6 space-y-3">
              <LocationRow icon="mapPin" label={`${site.contact.region} · ${site.contact.city}`} />
              <LocationRow icon="info" label="Ubicación exacta compartida al confirmar la reserva" />
              <LocationRow icon="van" label="Servicio de transporte disponible con costo adicional" />
            </ul>

            <Button href="/ubicacion" variant="primary" className="mt-7" icon="arrowRight">
              Ver cómo llegar
            </Button>
          </div>

          {/* Mapa: placeholder hasta confirmar ubicación (§7.11) */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-forest-900/10 bg-sage-500/15">
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(120,149,121,0.5), transparent 45%), radial-gradient(circle at 70% 60%, rgba(49,93,73,0.35), transparent 45%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-guadua-700 text-ivory-50">
                <Icon name="mapPin" size={26} />
              </span>
              <p className="mt-4 max-w-xs text-sm font-medium text-forest-900">
                Oriente Antioqueño, cerca de Rionegro. Consulta el mapa y cómo llegar.
              </p>
              <span className="mt-2 rounded-full bg-white/70 px-3 py-1 text-xs text-guadua-700">
                Ver ubicación
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function LocationRow({
  icon,
  label,
  pending,
}: {
  icon: "mapPin" | "info" | "van";
  label: string;
  pending?: boolean;
}) {
  return (
    <li className="flex items-start gap-3 text-forest-900/80">
      <Icon name={icon} size={20} className="mt-0.5 shrink-0 text-guadua-700" />
      <span className="text-sm">
        {label}
        {pending && (
          <span className="ml-2 rounded-full bg-sand-200/70 px-2 py-0.5 text-[11px] text-clay-600">
            por confirmar
          </span>
        )}
      </span>
    </li>
  );
}
