import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Sirve AVIF (y WebP como respaldo) a los navegadores compatibles.
    // Con esto, todas las imágenes que pasan por next/image se entregan
    // optimizadas y en formatos modernos sin convertir los archivos fuente.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
