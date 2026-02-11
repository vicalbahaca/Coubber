"use client";

import { Quote } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { TESTIMONIALS } from "@/app/lib/constants";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

export function CustomerProofSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Socios de diseño
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Equipos en etapa temprana nos ayudan a definir el flujo de trabajo,
            las plantillas y las prioridades de integración.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <Card className="h-full p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {initials(t.name)}
                  </div>
                  <Quote className="h-6 w-6 text-primary-600/40" aria-hidden="true" />
                </div>

                <blockquote className="mt-5 text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">“</span>
                  {t.quote}
                  <span className="font-semibold text-gray-900">”</span>
                </blockquote>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">
                    {t.role} — {t.org}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
