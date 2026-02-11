import type { Metadata } from "next";

import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Coubber privacy policy (prelaunch placeholder).",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-base text-gray-600">
            This is a prelaunch placeholder. We&apos;ll publish the full privacy
            policy before public launch.
          </p>
        </div>
      </Container>
    </Section>
  );
}

