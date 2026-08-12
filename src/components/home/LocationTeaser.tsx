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
              Un entorno tranquilo rodeado de montañas y vegetación, en la Vereda
              Los Pinos (Rionegro, Antioquia), sobre la zona de la Vía a Galicia.
              Te enviamos las indicaciones de llegada al confirmar tu reserva.
            </p>

            <ul className="mt-6 space-y-3">
              <LocationRow icon="mapPin" label={`${site.contact.region} · ${site.contact.city}`} />
              <LocationRow icon="info" label="Indicaciones de llegada al confirmar la reserva" />
              <LocationRow icon="van" label="Servicio de transporte disponible con costo adicional" />
            </ul>

            <Button href="/ubicacion" variant="primary" className="mt-7" icon="arrowRight">
              Ver cómo llegar
            </Button>
          </div>

          {/* Mapa real de la ubicación */}
          <div className="overflow-hidden rounded-3xl border border-forest-900/10">
            <iframe
              src={site.contact.mapEmbedUrl}
              title="Ubicación de Entre Guaduales en el mapa"
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
