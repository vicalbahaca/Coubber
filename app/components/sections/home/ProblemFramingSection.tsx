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
            Tus datos no deberían ser tu cuello de botella
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Ya recopilas los datos. El problema es convertirlos en decisiones
            consistentes lo suficientemente rápido como para que importen.
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
                <p className="text-sm font-semibold text-gray-900">Antes</p>
                <p className="text-sm text-gray-600">Reportes manuales</p>
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
                Hojas de cálculo, exportes y formateo roban horas cada semana.
              </p>
            </Card>
          </Reveal>

          <Reveal>
            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Después</p>
                <p className="text-sm text-gray-600">Informes de Coubber</p>
              </div>
              <div className="mt-6 rounded-xl border border-primary-600/20 bg-primary-50 p-4">
                <p className="text-xs font-semibold text-primary-700">
                  Interpretación con IA
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  El readiness va a la baja por menor impulso de salto y
                  mayor carga de carrera a alta velocidad.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Recomendación: reduce la exposición a velocidad pico mañana,
                  prioriza trabajo de isquiotibiales en flywheel y re-test de CMJ
                  post-sesión.
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
                Insights listos para decidir que tu staff puede accionar al instante.
              </p>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
