import type { Metadata } from "next";

import { Reveal } from "@/app/components/animations/Reveal";
import { DemoRequestForm } from "@/app/components/forms/DemoRequestForm";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Request a personalized demo. See how Coubber unifies your athlete data and generates decision-ready insights in seconds.",
};

export default function DemoPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Book a Demo
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Get a personalized walkthrough of Coubber — tailored to your data
              types and reporting workflow.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <DemoRequestForm />
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 md:p-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  What to expect
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>30-minute personalized demo</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>See Coubber with your data types</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>Q&amp;A with our team</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-primary-600/15 bg-primary-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Typical response time
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    &lt; 24 hours
                  </p>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <p className="text-sm font-semibold text-gray-900">
                  Testimonial
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  “The AI narrative is what changed the game for us — it
                  connects testing outputs to decisions without losing nuance.”
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  — Rehab Lead, High-Performance Institute
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
