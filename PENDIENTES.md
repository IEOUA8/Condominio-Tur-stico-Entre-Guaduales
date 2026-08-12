# Datos del cliente — estado

Casi todos los datos ya fueron proporcionados por el cliente e integrados en el sitio.
La mayoría vive en **`src/content/site.ts`**.

## ✅ Confirmado e integrado
- **WhatsApp** oficial: +57 311 679 1517
- **Correo** oficial: admin@condominioturisticoentreguaduales.com
- **RNT:** 220283
- **Responsable:** Rubén Darío Vargas Echeverri (C.C. 15.444.992)
- **Ubicación:** Vereda Los Pinos, Finca 188, Rionegro, Antioquia (Plus Code 6J4X+H2) — **mapa público visible** en la home y en /ubicacion (2026-08-12)
- **Check-in/out:** 3:00 p. m. / 12:00 m.
- **Pagos:** transferencia bancaria (Bancolombia) — datos de cuenta NO publicados, se comparten en privado al reservar
- **Depósito de garantía:** $500.000 (devuelto al día siguiente del check-out)
- **Cancelación:** 100% hasta 24 h antes del check-in; reembolso o reprogramación
- **Transporte:** coordinado con el anfitrión, costo adicional
- **Distribución real** de las 3 cabañas (Sirirí 10 camas, Barranquero 8, Guacharaca 8)
- **Servicios** con specs reales (jacuzzi 8 pers/1300 L/35°, BBQ industrial, fogatero)
- **Redes:** Instagram, Threads, Facebook, TikTok, Airbnb y perfil de Google integrados (footer)

## ✅ Resuelto en esta iteración (2026-08-12)
- **Testimonios / reseñas** — el cliente autorizó publicar sus reseñas de Airbnb
  ("son públicas"). Se integraron **7 reseñas reales (todas 5★)** en
  `src/content/testimonials.ts` (Andrea, Daniela, Santiago, Dayana, Sandra Yanette,
  Gabriel, Mateo), tomadas textualmente de las capturas, con corrección ligera de
  tildes. La home ya las muestra en la sección "Reserva con tranquilidad".
- **Datos de la cuenta bancaria** — el cliente los envió (titular Blanca Nelli
  Echeverri Quintero, Bancolombia Ahorros N.° 41239051063, C.C. 39.434.748). **NO se
  publican en la web** por seguridad/antifraude (el repo es público en GitHub y expondría
  datos personales de un tercero). Se mantiene el modelo de compartirlos en privado al
  reservar. Datos guardados fuera del repo; el equipo los tiene.
- **Cancelación como único medio por la web** — la página `/politica-de-cancelacion` ya
  deja explícito que las solicitudes se reciben únicamente por los canales oficiales
  (WhatsApp, correo y la solicitud desde la web) y que la marca de tiempo de recepción por
  ese canal es la que determina el cumplimiento del plazo de 24 h.
- **Facebook, TikTok y Airbnb (los 3 enlaces) + correo** — el cliente envió los datos buenos
  el 2026-08-12 (2ª entrega):
  - Facebook: `https://www.facebook.com/profile.php?id=61580204087108` → footer.
  - TikTok: `https://www.tiktok.com/@cond.turistico.en` → footer (icono nuevo).
  - Airbnb (URLs canónicas `/rooms/{id}`, sin params de rastreo): Sirirí `1505894084580266005`,
    Barranquero `1284802899806939624`, Guacharaca `1347007135384451783` → `site.social.airbnbListings`
    + icono de Airbnb en el footer.
  - Correo: confirmó `admin@condominioturisticoentreguaduales.com` como bandeja única.

## ✅ Resuelto en iteración previa (2026-08-07)
- **Fotos de la Cabaña Guacharaca** — la carpeta ya llegó con imágenes. Se seleccionaron
  y optimizaron las 8 mejores en `public/images/guacharaca/` (habitación principal/auxiliar,
  literas, fachada, jardín de noche, BBQ, baño y ducha) y se integraron en la galería.
- **Instagram, Threads y Google** — handles confirmados por el cliente e integrados en el
  footer (`site.social`). Facebook y TikTok se ocultan automáticamente hasta tener la URL/@ exactos.
- **Teléfono** — el cliente no tiene línea fija/adicional; se unificó al mismo WhatsApp
  (+57 311 679 1517) y se quitó el placeholder.

## ⚠️ Aún pendiente / por confirmar
- [ ] **Validación jurídica final** de los textos legales (ya llevan los datos reales).

## 🔧 Gestionado fuera del código
- **Tiempo de respuesta** — ✅ definido: "máximo 2 horas" (`site.operations.responseTime`).
  Se muestra en la home (paso "Confirmamos por WhatsApp") y en la página de contacto.
- **DNS del dominio** `condominioturisticoentreguaduales.com` → lo asigna el equipo manualmente.
- **Google Analytics / Tag Manager** → diferido hasta que el cliente confirme (`src/app/layout.tsx`).
