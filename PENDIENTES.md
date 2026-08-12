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

## ✅ Resuelto en iteración previa (2026-08-07)
- **Fotos de la Cabaña Guacharaca** — la carpeta ya llegó con imágenes. Se seleccionaron
  y optimizaron las 8 mejores en `public/images/guacharaca/` (habitación principal/auxiliar,
  literas, fachada, jardín de noche, BBQ, baño y ducha) y se integraron en la galería.
- **Instagram, Threads y Google** — handles confirmados por el cliente e integrados en el
  footer (`site.social`). Facebook y TikTok se ocultan automáticamente hasta tener la URL/@ exactos.
- **Teléfono** — el cliente no tiene línea fija/adicional; se unificó al mismo WhatsApp
  (+57 311 679 1517) y se quitó el placeholder.

## ⚠️ Aún pendiente / por confirmar
> El documento del 2026-08-12 volvió a enviar estos datos igual que antes: **no aportan
> lo que faltaba**, siguen pendientes.
- [ ] **URL exacta de la página de Facebook** — el doc 2026-08-12 dio dos nombres
      ("Condominio Turístico Entre Guaduales" y "Rubén Darío Vargas Echeverri"), pero **sigue
      sin la URL** de la página → `site.social.facebook` (oculto hasta tenerla).
- [ ] **Handle (@) exacto de TikTok** — sigue llegando con espacios ("Cond turistico entre
      guaduales"); falta el @ exacto → `site.social.tiktok` (oculto hasta tenerlo).
- [ ] **Enlace PÚBLICO de Airbnb de la cabaña Sirirí** — el doc 2026-08-12 **volvió a enviar
      el enlace del editor de anfitrión (privado)**: `.../hosting/listings/editor/1505894084580266005/...`.
      Se necesita el enlace público (formato `airbnb.com.co/h/...`). Barranquero y Guacharaca ya están.
- [ ] **Tiempo de respuesta** comprometido (`site.operations.responseTime`) — el cliente no lo definió.
- [ ] **Correo de privacidad** — en el doc 2026-08-12 lo volvió a escribir con los mismos typos
      ("adminin@condomnioturisticoentreguaduales.com"). Se mantiene el oficial
      `admin@condominioturisticoentreguaduales.com`. **Confirmar cuál es el correcto.**
- [ ] **Validación jurídica final** de los textos legales (ya llevan los datos reales).
- [ ] **DNS del dominio** `condominioturisticoentreguaduales.com` para conectarlo en Vercel.
- [ ] **Google Analytics / Tag Manager** (opcional, `src/app/layout.tsx`).
