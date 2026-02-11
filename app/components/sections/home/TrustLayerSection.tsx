"use client";

import { ShieldCheck } from "lucide-react";

import { CountUp } from "@/app/components/animations/CountUp";
import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { TRUST_STATS } from "@/app/lib/constants";

export function TrustLayerSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
              <ShieldCheck className="h-4 w-4" />
              Built with practitioners from elite sports
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Credibility you can feel in the workflow
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Designed with performance and medical teams who live in messy data
              realities — match weeks, testing blocks, return-to-play, and
              everything in between.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {TRUST_STATS.map((stat) => (
              <Reveal key={stat.label} className="h-full">
                <Card className="h-full p-6 md:p-8">
                  <div className="text-3xl font-bold tracking-tight text-gray-900">
                    {typeof stat.value === "number" ? (
                      <CountUp value={stat.value} suffix={stat.suffix} />
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-success" />
                        Yes
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-gray-700">
                    {stat.label}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

