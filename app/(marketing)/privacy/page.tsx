import type { Metadata } from "next";

import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Política de privacidad de Coubber (placeholder de prelaunch).",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Política de privacidad
          </h1>
          <p className="text-base text-gray-600">
            Este es un placeholder de prelaunch. Publicaremos la política
            completa antes del lanzamiento público.
          </p>
        </div>
      </Container>
    </Section>
  );
}
