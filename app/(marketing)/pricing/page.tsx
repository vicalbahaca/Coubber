import type { Metadata } from "next";

import { PricingTable } from "@/app/components/sections/pricing/PricingTable";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Reveal } from "@/app/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Precios transparentes que escalan con tu equipo — desde planes estándar hasta enterprise.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Precios
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Precios transparentes que escalan con tu equipo. Elige Standard
              para un despliegue rápido — o Enterprise para integraciones,
              seguridad y soporte avanzados.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <PricingTable />
        </Container>
      </Section>
    </>
  );
}
