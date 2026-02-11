import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { REPORT_TEMPLATES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Reports",
  description:
    "Explore Coubber’s report templates built for performance, medical, and leadership workflows.",
};

export default function ReportsPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Reports
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              A library of templates designed for performance, medical, and
              leadership workflows — with AI interpretation built in.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#sample-report">See Sample Report</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Report Library
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Start from templates that match how teams actually work — then
              customize narratives, thresholds, and groupings.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REPORT_TEMPLATES.map((r) => (
              <Reveal key={r.title}>
                <Card className="h-full p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{r.description}</p>
                  <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="h-3 w-3/4 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-2/3 rounded bg-gray-200" />
                    <div className="mt-4 grid grid-cols-8 items-end gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded bg-primary-600/25"
                          style={{ height: 10 + ((i * 11) % 34) }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="secondary">
                      <Link href="/demo">See it in a demo</Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="sample-report" className="bg-gray-50">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Sample Report Preview
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Here&apos;s a simplified preview of what teams get: key trends,
                flags, and an interpreted narrative that explains what changed —
                and what to do next.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/demo">Request Demo</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>

            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">
                  Weekly Microcycle Report
                </p>
                <p className="text-xs font-semibold text-primary-700">
                  Generated in ~30s
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-primary-600/15 bg-primary-50 p-4">
                <p className="text-xs font-semibold text-primary-700">
                  AI Interpretation
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  Readiness decreased driven by reduced jump impulse and
                  elevated high-speed load across two sessions.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Recommendation: reduce peak speed exposure tomorrow, keep
                  eccentric hamstring work, and re-test CMJ post-session.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-600">Load</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">+8%</p>
                  <div className="mt-3 h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-2/3 rounded-full bg-primary-600" />
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-600">Readiness</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">Amber</p>
                  <div className="mt-3 h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-1/2 rounded-full bg-accent-600" />
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
