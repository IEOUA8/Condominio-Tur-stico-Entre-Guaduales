import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <span className="font-display text-7xl text-sand-300">404</span>
      <h1 className="mt-4 font-display text-3xl text-forest-900 sm:text-4xl">
        Esta página se perdió entre la guadua
      </h1>
      <p className="mt-3 max-w-md text-forest-900/70">
        No encontramos lo que buscabas, pero tu próxima escapada sigue disponible.
        Volvamos al camino.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary" icon="arrowRight">
          Volver al inicio
        </Button>
        <Button href="/reservar" variant="gold" icon="arrowRight">
          Consultar disponibilidad
        </Button>
      </div>
      <nav className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-forest-900/60">
        {primaryNav.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-guadua-700">
            {item.label}
          </Link>
        ))}
      </nav>
    </Container>
  );
}
