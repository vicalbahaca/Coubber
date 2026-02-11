import { SITE } from "@/app/lib/constants";

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description:
      "Plataforma de análisis de rendimiento deportivo con IA que unifica datos de atletas y genera informes listos para decidir en 30 segundos.",
    url: "https://coubber.com",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "14",
      availability: "https://schema.org/PreOrder",
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
