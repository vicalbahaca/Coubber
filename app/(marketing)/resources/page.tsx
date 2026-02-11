import type { Metadata } from "next";

import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { RESOURCES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, templates, and research notes on performance reporting, athlete monitoring, and applied sports science.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Resources
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Guides, templates, and checklists on performance reporting and
              athlete monitoring — written for practitioners.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Latest
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Prelaunch content is rolling out. Start with these foundational
              resources.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <Reveal key={r.slug}>
                <Card className="h-full p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="primary">{r.category}</Badge>
                    <p className="text-xs font-semibold text-gray-600">
                      {r.readingTime}
                    </p>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{r.description}</p>
                  <div className="mt-6">
                    <Link
                      href={`/resources/${r.slug}`}
                      className="text-sm font-semibold text-primary-700 hover:text-primary-800"
                    >
                      Read →
                    </Link>
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
