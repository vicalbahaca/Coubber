import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { INTEGRATION_CATEGORIES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect force plates, VBT systems, GPS wearables, and more. Bring all athlete data into one platform.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Integrations
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Bring force plates, VBT, GPS, flywheels, dynamometry and rehab
              testing into one platform — without breaking your existing stack.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:hello@coubber.com?subject=Integration%20request">
                  Request an integration
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Supported Data Sources
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              We&apos;re expanding integrations continuously. If you don&apos;t see your
              device, tell us — we&apos;ll prioritize based on design partner needs.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {INTEGRATION_CATEGORIES.map((cat) => (
              <Reveal key={cat.title}>
                <Card className="h-full p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((i) => (
                      <Badge key={i}>{i}</Badge>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="secondary">
                      <Link href="/demo">See your workflow</Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
