import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NO me agendes",
  description:
    "Aplicación para mandar mensajes a números de whatsapp sin agendarlos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6FSR2JCZ7P"></Script>
        <Script id="ga-4">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-6FSR2JCZ7P');
        `}
        </Script>
        <head>
          {/* <!-- Título del contenido --> */}
          <meta property="og:title" content="No me agendes" />
          {/* <!-- Descripción del contenido --> */}
          <meta
            property="og:description"
            content="Manda mensajes de WhatsApp sin agendar el contacto"
          />
          {/* <!-- URL canónica de la página --> */}
          <meta
            property="og:url"
            content="https://no-me-agendes.vercel.app/"
          />
          {/* <!-- Imagen que aparecerá en la vista previa --> */}
          <meta
            property="og:image"
            content="https://www.tusitio.com/imagen.png"
          />
          {/* <!-- Tipo de contenido (website, article, etc.) --> */}
          <meta property="og:type" content="website" />
          {/* <!-- Nombre del sitio --> */}
          <meta property="og:site_name" content="No me agendes" />
          {/* <!-- Idioma y región --> */}
          <meta property="og:locale" content="es_UY" />
        </head>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
