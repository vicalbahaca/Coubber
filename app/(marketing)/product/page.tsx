import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";

export const metadata: Metadata = {
  title: "Producto",
  description:
    "Descubre cómo Coubber unifica datos de rendimiento entre dispositivos y genera informes listos para decidir en segundos.",
};

export default function ProductPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Producto
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Coubber unifica plataformas de fuerza, VBT, GPS, isoinerciales y
              testing de rehab en un solo perfil de atleta — y luego genera
              informes interpretados en menos de 30 segundos.
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
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Captura de datos agnóstica al dispositivo
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Conecta plataformas de fuerza, VBT, flywheels, GPS/wearables y
                  dinamometría — además de cargas CSV — sin cambiar tus
                  herramientas del día a día.
                </p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Consolidación del perfil de atleta
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Alinea automáticamente nomenclaturas y consolida métricas en
                  un modelo consistente entre departamentos.
                </p>
              </Card>
            </Reveal>
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Interpretación con IA, no solo gráficos
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Obtén narrativas explicables que convierten outputs crudos en
                  insights que tu staff puede discutir y accionar — rápido.
                </p>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Flujos de trabajo de reportes que encajan con el deporte real
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                La semana de partido no es un proyecto científico. Coubber te
                ayuda a entregar reportes consistentes bajo presión — con
                definiciones claras, contexto de tendencias y outputs listos
                para partes interesadas.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>Resúmenes de microciclo semanal con alertas clave</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>Dashboards de return-to-play con criterios y contexto</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-600" />
                  <span>PDFs que los entrenadores realmente abren</span>
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <Card className="p-6 md:p-8">
                <p className="text-sm font-semibold text-primary-700">
                  Ejemplo de narrativa con IA
                </p>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  El readiness va a la baja por menor impulso de salto y mayor
                  carga de carrera a alta velocidad. Recomendación: reduce la
                  exposición a velocidad pico mañana y prioriza trabajo de
                  cadena posterior.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Load", "Readiness", "Risk"].map((k) => (
                    <div
                      key={k}
                      className="rounded-xl border border-primary-600/15 bg-primary-50 px-3 py-3 text-center"
                    >
                      <p className="text-xs font-semibold text-gray-600">
                        {k === "Load" ? "Carga" : k === "Readiness" ? "Readiness" : "Riesgo"}
                      </p>
                      <p className="mt-1 text-lg font-bold text-gray-900">
                        {k === "Load" ? "+8%" : k === "Readiness" ? "Ámbar" : "Bajo"}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              ¿Quieres verlo con tus tipos de datos?
            </h2>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Solicita acceso anticipado y agenda una sesión de 30 minutos
              adaptada a tus dispositivos, roles del staff y cadencia de reportes.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/demo">Acceso anticipado</Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
