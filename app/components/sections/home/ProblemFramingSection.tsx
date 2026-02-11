"use client";

import { Clock3, FileSpreadsheet, Layers3 } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { PROBLEM_POINTS } from "@/app/lib/constants";

const icons = [Clock3, Layers3, FileSpreadsheet] as const;

export function ProblemFramingSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Your Data Shouldn&apos;t Be Your Bottleneck
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            You already collect the data. The problem is turning it into
            consistent decisions fast enough to matter.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PROBLEM_POINTS.map((p, idx) => {
            const Icon = icons[idx];
            return (
              <Reveal key={p.title}>
                <Card className="h-full p-6 md:p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Before</p>
                <p className="text-sm text-gray-600">Manual reporting</p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-3 w-4/5 rounded bg-gray-200" />
                <div className="h-3 w-3/5 rounded bg-gray-200" />
                <div className="h-3 w-2/3 rounded bg-gray-200" />
                <div className="mt-6 grid grid-cols-6 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-10 rounded bg-gray-200"
                      style={{ opacity: 0.35 + (i % 6) * 0.08 }}
                    />
                  ))}
                </div>
                <div className="mt-6 h-20 rounded bg-gray-200" />
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Spreadsheets, exports, and formatting steal hours every week.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">After</p>
                <p className="text-sm text-gray-600">Coubber reports</p>
              </div>
              <div className="mt-6 rounded-xl border border-primary-600/20 bg-primary-50 p-4">
                <p className="text-xs font-semibold text-primary-700">
                  AI Interpretation
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  Readiness is trending down due to reduced jump impulse and
                  increased high-speed running load.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Recommendation: reduce peak speed exposure tomorrow, prioritize
                  flywheel hamstring work, and re-test CMJ post-session.
                </p>
              </div>
              <div className="mt-5 grid grid-cols-6 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-12 rounded bg-white"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(37,99,235,0.12)" }}
                  >
                    <div
                      className="mx-auto mt-3 h-6 w-2 rounded bg-primary-600"
                      style={{ opacity: 0.35 + i * 0.1, height: 10 + i * 5 }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Decision-ready insights your staff can act on immediately.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

