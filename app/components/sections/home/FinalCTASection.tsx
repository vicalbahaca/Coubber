"use client";

import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/app/lib/constants";

export function FinalCTASection() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.18),transparent_55%)]"
      />
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-primary-50 via-white to-amber-50 p-10 shadow-xl md:p-14">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Ready to Transform Your Performance Analysis?
            </h2>
            <p className="mt-4 text-base text-gray-700 md:text-lg">
              See how Coubber turns your device data into coach-ready insights
              in under 30 seconds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={SECONDARY_CTA.href}>{SECONDARY_CTA.label}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

