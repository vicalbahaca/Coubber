import { SITE } from "@/app/lib/constants";

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    description:
      "AI-powered sports performance analysis platform that unifies athlete data and generates decision-ready reports in 30 seconds.",
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

