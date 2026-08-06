# Condominio Turístico Entre Guaduales — Sitio web oficial

Plataforma turística boutique, *mobile first* y de alta conversión, construida a partir del
**documento maestro** (`../documento_maestro_entre_guaduales.md`).

- **Dominio:** https://condominioturisticoentreguaduales.com
- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- **Modo de reserva actual:** solicitudes por WhatsApp (`BOOKING_MODE = "whatsapp"`),
  con arquitectura preparada para activar checkout con pasarela de pagos.

## Requisitos
- Node.js 18.18+ (probado con Node 25).

## Comandos
```bash
npm install       # instalar dependencias
npm run dev       # desarrollo en http://localhost:3000
npm run build     # build de producción
npm run start     # servir el build de producción
npm run lint      # linter
```

## Estructura
```
src/
  app/                     Rutas (App Router)
    page.tsx               Landing de alta conversión
    experiencias/          Índice + detalle [slug] (5 experiencias, SSG)
    condominio, galeria, servicios, ubicacion,
    preguntas-frecuentes, reglamento, reservar, contacto
    politica-de-*, terminos-y-condiciones   Páginas legales (borradores)
    sitemap.ts, robots.ts, not-found.tsx    SEO técnico
  components/
    layout/      Header, Footer, MobileNav (barra app), WhatsAppFab, CookieBanner
    home/        Secciones de la landing
    experience/  Card, calculadora de noches, CTA sticky
    booking/     Wizard de reserva por microdecisiones (7 pasos)
    gallery/     Galería con lightbox accesible
    ui/          Primitivas (Button, Icon, Accordion, Reveal, PageHero…)
    seo/         JSON-LD (LodgingBusiness, FAQPage, Breadcrumb, Accommodation)
  content/       Capa de contenido editable (site, experiencias, servicios, faqs, reglamento, galería)
  lib/           Motor de precios, reserva/WhatsApp, recomendador, analítica, formato
public/
  images/        Fotografías reales optimizadas (exteriores, interiores, jacuzzi, momentos, naturaleza)
  brand/         Logo
```

## Contenido y datos
Todo el contenido editable vive en `src/content/`. **Los datos comerciales/legales
pendientes de confirmar están centralizados en `src/content/site.ts`** y listados en
[`PENDIENTES.md`](./PENDIENTES.md).

## Imágenes
Se usan fotografías reales del cliente, optimizadas a tamaños web. `next/image` sirve
automáticamente WebP/AVIF y tamaños responsivos. Para añadir fotos, colócalas en
`public/images/<categoría>/` y referéncialas en `src/content/`.

## Reserva por WhatsApp → checkout (futuro)
El wizard (`src/components/booking/BookingWizard.tsx`) consume una interfaz común
(`src/lib/booking.ts`). Genera un identificador de solicitud y un mensaje estructurado
para WhatsApp. Para activar pagos en el futuro, cambia `BOOKING_MODE` a `"checkout"` y
completa esa rama; el formulario no necesita reconstruirse.

## Analítica
`src/lib/analytics.ts` empuja eventos a `window.dataLayer` (compatible con Tag Manager).
Nunca envía datos sensibles (nombres, teléfonos, correos). Inserta tu GTM/GA4 en
`src/app/layout.tsx` cuando se active.

## Despliegue
Compatible con cualquier infraestructura que soporte Next.js (p. ej. Vercel). Configurar
el dominio y DNS según el proveedor del cliente. Verificar SSL y redirecciones.
```bash
npm run build && npm run start
```

## Estado
Sitio completo y funcional (frontend + reserva por WhatsApp). Pendiente: completar datos
reales del cliente ([`PENDIENTES.md`](./PENDIENTES.md)) y, a futuro, backend/panel
administrativo/checkout descritos en el documento maestro.
