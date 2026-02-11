"use client";

import { FileDown, Link2, Sparkles, Timer } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { ADVANTAGES } from "@/app/lib/constants";

const icons = [Sparkles, Timer, Link2, FileDown] as const;

export function PlatformAdvantagesSection() {
  return (
    <Section className="bg-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Por qué los equipos eligen Coubber
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Reportar más rápido es clave — pero consistencia, contexto y
            confianza son lo que hace que el sistema se mantenga.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map((a, idx) => {
            const Icon = icons[idx];
            return (
              <Reveal key={a.title}>
                <Card className="h-full p-6 md:p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{a.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
