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

## ⚠️ Aún pendiente / por confirmar
- [ ] **URL exacta de Facebook** y **confirmar los handles** de Instagram/TikTok/Threads
      (el doc traía espacios/typos; ver `site.social`). Verificar que los enlaces abran bien.
- [ ] **Teléfono fijo/adicional** — ¿es el mismo del WhatsApp? (`site.contact.phone`)
- [ ] **Tiempo de respuesta** comprometido (`site.operations.responseTime`)
- [ ] **Fotos de la Cabaña Guacharaca** (la carpeta llegó sin imágenes)
- [ ] **Textos de testimonios** — el cliente tiene muchas reseñas 5★ en Airbnb; falta el
      texto/nombres con autorización para publicarlos (hoy `src/content/testimonials.ts` está vacío).
      Enlaces Airbnb por cabaña disponibles para "ver reseñas".
- [ ] **Validación jurídica final** de los textos legales (ya llevan los datos reales).
- [ ] **DNS del dominio** `condominioturisticoentreguaduales.com` para conectarlo en Vercel.
- [ ] **Google Analytics / Tag Manager** (opcional, `src/app/layout.tsx`).

## Nota
El correo de privacidad que envió el cliente venía con typos ("adminin@condomnio…");
se usó el correo oficial `admin@condominioturisticoentreguaduales.com`. Confirmar si es correcto.
