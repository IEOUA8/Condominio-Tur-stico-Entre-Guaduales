import { Container } from "@/components/ui/Container";
import { Icon, type IconName } from "@/components/ui/Icon";

const items: { icon: IconName; label: string }[] = [
  { icon: "cabin", label: "Cabañas privadas" },
  { icon: "hotTub", label: "Jacuzzi privado" },
  { icon: "grill", label: "Zona BBQ privada" },
  { icon: "flame", label: "Zona fogata privada" },
  { icon: "trail", label: "Senderos ecológicos" },
  { icon: "paw", label: "Pet friendly" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-forest-900/8 bg-ivory-100/70">
      <Container className="py-5">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((it) => (
            <li key={it.label} className="flex items-center gap-2.5 text-forest-900">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-guadua-700/10 text-guadua-700">
                <Icon name={it.icon} size={18} />
              </span>
              <span className="text-sm font-medium">{it.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
