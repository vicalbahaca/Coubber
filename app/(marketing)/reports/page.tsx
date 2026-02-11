import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { REPORT_TEMPLATES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Informes",
  description:
    "Explora las plantillas de informes de Coubber diseñadas para rendimiento, médico y dirección.",
};

export default function ReportsPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Informes
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Una biblioteca de plantillas diseñada para rendimiento, médico y
              dirección — con interpretación de IA integrada.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/demo">Acceso anticipado</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/demo">Accede al acceso anticipado</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Biblioteca de informes
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Empieza con plantillas que reflejan cómo trabajan los equipos — y
              luego personaliza narrativas, umbrales y agrupaciones.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REPORT_TEMPLATES.map((r) => (
              <Reveal key={r.title}>
                <Card className="h-full p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{r.description}</p>
                  <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="h-3 w-3/4 rounded bg-gray-200" />
                    <div className="mt-2 h-3 w-2/3 rounded bg-gray-200" />
                    <div className="mt-4 grid grid-cols-8 items-end gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded bg-primary-600/25"
                          style={{ height: 10 + ((i * 11) % 34) }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild variant="secondary">
                      <Link href="/demo">Acceso anticipado</Link>
                    </Button>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="sample-report" className="bg-gray-50">
        <Container>
          <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Vista previa del informe de muestra
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Aquí tienes una vista simplificada de lo que reciben los equipos:
                tendencias clave, alertas y una narrativa interpretada que
                explica qué cambió y qué hacer después.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/demo">Solicitar acceso anticipado</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/pricing">Ver precios</Link>
                </Button>
              </div>
            </div>

            <Card className="p-6 md:p-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">
                  Informe semanal de microciclo
                </p>
                <p className="text-xs font-semibold text-primary-700">
                  Generado en ~30s
                </p>
              </div>

              <div className="mt-5 rounded-xl border border-primary-600/15 bg-primary-50 p-4">
                <p className="text-xs font-semibold text-primary-700">
                  Interpretación con IA
                </p>
                <p className="mt-2 text-sm font-semibold text-gray-900">
                  El readiness disminuyó por menor impulso de salto y mayor
                  carga de alta velocidad en dos sesiones.
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Recomendación: reduce la exposición a velocidad pico mañana,
                  mantén trabajo excéntrico de isquios y re-test de CMJ post-sesión.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-600">Carga</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">+8%</p>
                  <div className="mt-3 h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-2/3 rounded-full bg-primary-600" />
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-600">Readiness</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">Ámbar</p>
                  <div className="mt-3 h-2 rounded-full bg-gray-100">
                    <div className="h-2 w-1/2 rounded-full bg-accent-600" />
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
