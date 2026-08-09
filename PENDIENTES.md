# Datos del cliente — estado

Casi todos los datos ya fueron proporcionados por el cliente e integrados en el sitio.
La mayoría vive en **`src/content/site.ts`**.

## ✅ Confirmado e integrado
- **WhatsApp** oficial: +57 311 679 1517
- **Correo** oficial: admin@condominioturisticoentreguaduales.com
- **RNT:** 220283
- **Responsable:** Rubén Darío Vargas Echeverri (C.C. 15.444.992)
- **Ubicación:** Oriente Antioqueño, cerca de Rionegro (Antioquia) + mapa de Google
- **Check-in/out:** 3:00 p. m. / 12:00 m.
- **Pagos:** transferencia bancaria (Bancolombia) — datos de cuenta NO publicados, se comparten en privado al reservar
- **Depósito de garantía:** $500.000 (devuelto al día siguiente del check-out)
- **Cancelación:** 100% hasta 24 h antes del check-in; reembolso o reprogramación
- **Transporte:** coordinado con el anfitrión, costo adicional
- **Distribución real** de las 3 cabañas (Sirirí 10 camas, Barranquero 8, Guacharaca 8)
- **Servicios** con specs reales (jacuzzi 8 pers/1300 L/35°, BBQ industrial, fogatero)
- **Redes:** Instagram y perfil de Google integrados

## ✅ Resuelto en esta iteración (2026-08-07)
- **Fotos de la Cabaña Guacharaca** — la carpeta ya llegó con imágenes. Se seleccionaron
  y optimizaron las 8 mejores en `public/images/guacharaca/` (habitación principal/auxiliar,
  literas, fachada, jardín de noche, BBQ, baño y ducha) y se integraron en la galería.
- **Instagram, Threads y Google** — handles confirmados por el cliente e integrados en el
  footer (`site.social`). Facebook y TikTok se ocultan automáticamente hasta tener la URL/@ exactos.
- **Teléfono** — el cliente no tiene línea fija/adicional; se unificó al mismo WhatsApp
  (+57 311 679 1517) y se quitó el placeholder.

## ⚠️ Aún pendiente / por confirmar
- [ ] **URL exacta de la página de Facebook** (el cliente dio el nombre, no el enlace) → `site.social.facebook`
- [ ] **Handle (@) exacto de TikTok** (llegó con espacios: "Cond turistico entre guaduales") → `site.social.tiktok`
- [ ] **Enlace PÚBLICO de Airbnb de la cabaña Sirirí** — el enviado era del editor de anfitrión
      (privado). Barranquero y Guacharaca ya están en `site.social.airbnbListings`.
- [ ] **Tiempo de respuesta** comprometido (`site.operations.responseTime`)
- [ ] **Textos de testimonios** — el cliente tiene muchas reseñas 5★ en Airbnb y ofrece bajarlas
      todas (son públicas) con su autorización. Hoy `src/content/testimonials.ts` está vacío.
      Decidir si se publican y con qué texto/nombres (o enlazar a Airbnb para "ver reseñas").
- [ ] **Validación jurídica final** de los textos legales (ya llevan los datos reales).
- [ ] **DNS del dominio** `condominioturisticoentreguaduales.com` para conectarlo en Vercel.
- [ ] **Google Analytics / Tag Manager** (opcional, `src/app/layout.tsx`).

## Nota
El correo de privacidad que envió el cliente venía con typos ("adminin@condomnio…");
se usó el correo oficial `admin@condominioturisticoentreguaduales.com`. Confirmar si es correcto.
