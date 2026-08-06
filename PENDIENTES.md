# Datos pendientes por confirmar — Entre Guaduales

El sitio está construido y funcional. Estos son los datos reales que el cliente debe
confirmar para reemplazar los **placeholders** claramente marcados en el código.
El documento maestro (§16, §23) prohíbe inventar estos datos, por eso hoy usan
marcadores evidentes, no información falsa.

> La mayoría vive en un solo archivo: **`src/content/site.ts`**. Edítalo y los cambios
> se aplican en todo el sitio.

## 1. Contacto (`src/content/site.ts` → `site.contact`)
- [ ] **WhatsApp oficial** — `whatsapp` (solo dígitos con código país, ej. `573001234567`) y `whatsappDisplay`. Poner `whatsappIsPlaceholder: false` al confirmar.
- [ ] **Teléfono** — `phone` (+ `phoneIsPlaceholder: false`).
- [ ] **Correo oficial de reservas** — `email` (+ `emailIsPlaceholder: false`).
- [ ] **Ciudad / región** — `city`, `region`.
- [ ] **Mapa de Google Maps** — `mapEmbedUrl` (URL de "insertar mapa"). Al ponerla, la página `/ubicacion` muestra el mapa real automáticamente.

## 2. Legales y registro (`site.legal`)
- [ ] **Razón social o responsable** — `responsibleName`.
- [ ] **NIT / documento** — `documentId`.
- [ ] **Correo de privacidad** — `privacyEmail`.
- [ ] **Registro Nacional de Turismo (RNT)** — `rnt`. Al ponerlo, aparece en el footer.

## 3. Operación (`site.operations`)
- [ ] **Check-in / Check-out** — `checkIn`, `checkOut`.
- [ ] **Métodos de pago autorizados** — `paymentMethods`.
- [ ] **Tiempo de respuesta comprometido** — `responseTime` (no prometer sin confirmar).
- [ ] **Política de depósitos** — `depositPolicy`.

## 4. Redes sociales (`site.social`)
- [ ] Instagram, Facebook, perfil de Google Business. (Al llenarlos aparecen en el footer.)

## 5. Contenido legal (revisar con asesoría jurídica)
Los borradores están en `src/app/politica-de-*`, `terminos-y-condiciones`. Deben validarse
y completar los datos marcados `[por confirmar]`:
- [ ] Política de privacidad y tratamiento de datos.
- [ ] Política de cookies.
- [ ] Términos y condiciones de reserva.
- [ ] Política de cancelación y reprogramación.

## 6. Fotografía
- [ ] **Cabaña Guacharaca**: la carpeta de origen estaba vacía; falta material fotográfico.
- [ ] Datos de unidad por cabaña (habitaciones, camas, baños, área) — se muestran como
      "Detalles en confirmación" en cada experiencia (`src/content/experiences.ts` → `pendingUnitInfo`).
- [ ] **Testimonios**: hoy la sección muestra un estado honesto ("sé de los primeros").
      Agregar reseñas verificables en `src/content/testimonials.ts` cuando existan.

## 7. Analítica (opcional, cuando se active)
- [ ] Insertar Google Tag Manager / GA4 en `src/app/layout.tsx`. El código ya empuja
      eventos a `window.dataLayer` (ver `src/lib/analytics.ts`).

---

## Cómo pasar de "solicitud por WhatsApp" a "checkout con pagos"
La arquitectura ya está preparada (§19.2). El flujo de reserva usa una **interfaz común**
(`src/lib/booking.ts` → `submitBookingRequest`). Hoy `BOOKING_MODE = "whatsapp"`
(en `src/content/site.ts`). Cuando se implemente el backend/pasarela, se cambia a
`"checkout"` y se completa esa rama sin reconstruir el formulario.
