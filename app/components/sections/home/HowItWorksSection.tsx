"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileOutput,
  MessageSquareText,
  Plug,
  Users,
} from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { HOW_IT_WORKS_STEPS } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";

const stepIcons = [Plug, Users, Brain, MessageSquareText, FileOutput] as const;

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative h-20 rounded-xl border border-gray-200 bg-white">
        <div className="absolute left-3 top-3 h-3 w-10 rounded bg-primary-50" />
        <div className="absolute left-3 top-8 h-3 w-14 rounded bg-gray-100" />
        <div className="absolute left-3 top-13 h-3 w-12 rounded bg-gray-100" />
        <div className="absolute right-3 top-4 h-10 w-10 rounded-xl bg-accent-600/10" />
        <div className="absolute right-3 top-[52px] h-4 w-24 rounded bg-primary-50" />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative h-20 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="absolute left-4 top-4 h-12 w-12 rounded-full bg-primary-50" />
        <div className="absolute left-10 top-8 h-12 w-12 rounded-full bg-accent-600/10" />
        <div className="absolute right-4 top-5 h-10 w-24 rounded-lg bg-gray-100" />
        <div className="absolute right-4 top-9 h-3 w-16 rounded bg-gray-200" />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="relative h-20 rounded-xl border border-gray-200 bg-white p-3">
        <div className="grid h-full grid-cols-8 items-end gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded bg-primary-600/30"
              style={{ height: 10 + i * 6 }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className="relative h-20 rounded-xl border border-gray-200 bg-white p-3">
        <div className="h-3 w-3/4 rounded bg-gray-100" />
        <div className="mt-2 h-3 w-2/3 rounded bg-gray-100" />
        <div className="mt-2 h-3 w-4/5 rounded bg-gray-100" />
        <div className="mt-3 inline-flex rounded-full bg-primary-50 px-2 py-1 text-[10px] font-semibold text-primary-700">
          Explainable insight
        </div>
      </div>
    );
  }
  return (
    <div className="relative h-20 rounded-xl border border-gray-200 bg-white p-3">
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg bg-accent-600/10" />
        <div className="space-y-1">
          <div className="h-3 w-32 rounded bg-gray-100" />
          <div className="h-3 w-24 rounded bg-gray-100" />
        </div>
      </div>
      <div className="mt-3 h-9 rounded-lg bg-primary-50" />
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            From Raw Data to Decisions in 3 Steps
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Five actions, one workflow — designed to remove reporting friction
            without losing context.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {HOW_IT_WORKS_STEPS.map((s, idx) => {
            const Icon = stepIcons[idx];
            return (
              <Reveal key={s.title} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="h-full"
                >
                  <Card className={cn("h-full p-6 md:p-8")}>
                    <motion.div
                      whileHover={{ rotate: 2, scale: 1.03 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{s.description}</p>

                    <div className="mt-5">
                      <StepVisual index={idx} />
                    </div>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

