import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://coubber.com"),
  title: {
    default: "Coubber — Informes de rendimiento con IA en 30 segundos",
    template: "%s — Coubber",
  },
  description:
    "Plataforma automatizada de análisis de rendimiento deportivo. Unifica datos de atletas desde plataformas de fuerza, VBT, GPS y más. Genera informes listos para decidir al instante.",
  openGraph: {
    title: "Coubber — Informes de rendimiento con IA en 30 segundos",
    description:
      "Análisis con IA que unifica datos de atletas y entrega insights listos para decidir para entrenadores y profesionales.",
    type: "website",
    siteName: "Coubber",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
