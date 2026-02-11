import type { Metadata } from "next";

import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Coubber terms of service (prelaunch placeholder).",
};

export default function TermsPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Terms of Service
          </h1>
          <p className="text-base text-gray-600">
            This is a prelaunch placeholder. We&apos;ll publish the full terms
            before public launch.
          </p>
        </div>
      </Container>
    </Section>
  );
}

