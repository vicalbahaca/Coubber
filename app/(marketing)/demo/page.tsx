import type { Metadata } from "next";

import { Reveal } from "@/app/components/animations/Reveal";
import { DemoRequestForm } from "@/app/components/forms/DemoRequestForm";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Acceso anticipado",
  description:
    "Solicita acceso anticipado a Coubber. Te mostramos la plataforma con tus datos y definimos un piloto en minutos.",
};

export default function DemoPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Acceso anticipado
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Solicita acceso anticipado y agenda una sesión personalizada para
              ver Coubber con tus datos y flujo de trabajo.
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
                  Qué esperar
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>Sesión personalizada de 30 minutos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>Revisión de tus dispositivos y fuentes de datos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                    <span>Q&amp;A y próximos pasos para el piloto</span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-primary-600/15 bg-primary-50 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Tiempo de respuesta típico
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    &lt; 24 horas
                  </p>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <p className="text-sm font-semibold text-gray-900">
                  Testimonio
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  “La narrativa con IA fue lo que nos cambió el juego — conecta
                  los outputs de testing con decisiones sin perder matices.”
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                  — Responsable de rehab, organización confidencial
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
