import type { Metadata } from "next";

import { PricingTable } from "@/app/components/sections/pricing/PricingTable";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Reveal } from "@/app/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing that scales with your team — from standard plans to enterprise deployments.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Pricing
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Transparent pricing that scales with your team. Choose Standard
              for fast deployment — or Enterprise for advanced integrations,
              security, and support.
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
