import type { Metadata } from "next";

import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";

export const metadata: Metadata = {
  title: "Términos de servicio",
  description: "Términos de servicio de Coubber (placeholder de prelaunch).",
};

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Términos de servicio
          </h1>
          <p className="text-base text-gray-600">
            Este es un placeholder de prelaunch. Publicaremos los términos
            completos antes del lanzamiento público.
          </p>
        </div>
      </Container>
    </Section>
  );
}
