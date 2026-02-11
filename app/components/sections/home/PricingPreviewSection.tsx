"use client";

import Link from "next/link";
import { Check } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { PRICING } from "@/app/lib/constants";

export function PricingPreviewSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Precios transparentes que escalan contigo
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Elige el plan que se adapta a tu flujo de trabajo hoy y escala cuando
              necesites integraciones y gobernanza más avanzadas.
            </p>
          </Reveal>
          <Reveal>
            <Button asChild variant="secondary">
              <Link href="/pricing">Ver precios completos</Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {PRICING.standard.name}
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                    €{PRICING.standard.monthlyPerAthleteEur}
                    <span className="text-base font-semibold text-gray-600">
                      {" "}
                      / atleta / mes
                    </span>
                  </p>
                </div>
                <div className="rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
                  Prelanzamiento
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                {PRICING.standard.features.map((f) => (
                  <div key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-success" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/demo">Acceso anticipado</Link>
                </Button>
              </div>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="h-full p-6 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {PRICING.enterprise.name}
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                    {PRICING.enterprise.priceLabel}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    Seguridad avanzada, integraciones y soporte para programas
                    grandes.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                {PRICING.enterprise.features.map((f) => (
                  <div key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 text-success" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild variant="secondary" className="w-full">
                  <Link href="/demo">Solicitar info</Link>
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
