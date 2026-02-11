import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Product",
  description:
    "See how Coubber unifies performance data across devices and generates decision-ready reports in seconds.",
};

export default function ProductPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Product
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Coubber unifies force plates, VBT, GPS, isoinertials, and rehab
              testing into a single athlete profile — then generates interpreted
              reports in under 30 seconds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/reports#sample-report">See Sample Report</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Device-agnostic data capture
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Connect force plates, VBT systems, flywheels, GPS/wearables,
                  and dynamometry — plus CSV uploads — without changing your
                  day-to-day tools.
                </p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Athlete profile consolidation
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Automatically align naming conventions and consolidate metrics
                  into a consistent athlete model across departments.
                </p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  AI interpretation, not just charts
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Get explainable narratives that turn raw outputs into insights
                  your staff can discuss and act on — fast.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Reporting workflows that match real sport
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Match week is not a science project. Coubber helps you ship
                consistent reporting under pressure — with clear definitions,
                trend context, and stakeholder-ready outputs.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>Weekly microcycle summaries with key flags</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>Return-to-play dashboards with criteria and context</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>PDF exports that coaches actually open</span>
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <Card className="p-6 md:p-8">
                <p className="text-sm font-semibold text-primary-700">
                  Example AI narrative
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  Readiness is trending down driven by reduced jump impulse and
                  increased high-speed running load. Recommendation: reduce peak
                  speed exposure tomorrow and prioritize posterior chain work.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Load", "Readiness", "Risk"].map((k) => (
                    <div
                      key={k}
                      className="rounded-xl border border-primary-600/15 bg-primary-50 px-3 py-3 text-center"
                    >
                      <p className="text-xs font-semibold text-gray-600">{k}</p>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {k === "Load" ? "+8%" : k === "Readiness" ? "Amber" : "Low"}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Want to see it with your data types?
            </h2>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              We&apos;ll tailor a 30-minute demo to your devices, staff roles, and
              reporting cadence.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
