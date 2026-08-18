"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/* ==========================================================================
   META PIXEL (Facebook) — se carga SOLO con consentimiento de analítica.
   Respeta el banner de cookies (§14.1, §18.3): la clave `eg_cookie_consent`
   debe valer "accepted". Si el visitante elige "Solo esenciales", no se carga.
   El CookieBanner emite el evento `eg-cookie-consent` al decidir, para
   activar el pixel sin recargar la página.
   ========================================================================== */

const PIXEL_ID = "1123442596786904";
const CONSENT_KEY = "eg_cookie_consent";

export function MetaPixel() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        setConsented(window.localStorage.getItem(CONSENT_KEY) === "accepted");
      } catch {
        /* almacenamiento no disponible */
      }
    };
    check();
    window.addEventListener("eg-cookie-consent", check);
    window.addEventListener("storage", check); // consentimiento en otra pestaña
    return () => {
      window.removeEventListener("eg-cookie-consent", check);
      window.removeEventListener("storage", check);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
