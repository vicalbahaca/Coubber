import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { withBasePath } from "@/app/lib/utils";
import {
  API_HARDWARE_INTEGRATIONS,
  DEVICE_TYPES,
  INTEGRATION_CATEGORIES,
} from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Integraciones",
  description:
    "Conecta plataformas de fuerza, sistemas VBT, wearables GPS y más. Lleva todos los datos a una sola plataforma.",
};

export default function IntegrationsPage() {
  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Integraciones
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              Lleva plataformas de fuerza, VBT, GPS, flywheels, dinamometría y
              testing de rehab a una sola plataforma — sin romper tu stack
              actual.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/demo">Acceso anticipado</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href="mailto:hello@coubber.com?subject=Integration%20request">
                  Solicitar integración
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <Reveal className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Fuentes de datos soportadas
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Seguimos ampliando integraciones. Si no ves tu dispositivo,
              cuéntanoslo — priorizaremos según las necesidades de los socios de
              diseño.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {INTEGRATION_CATEGORIES.map((cat) => (
              <Reveal key={cat.title}>
                <Card className="h-full p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {cat.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((i) => (
                      <Badge key={i}>{i}</Badge>
                    ))}
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

          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Hardware conectado por API
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Estas integraciones conectan directamente por API. Si usas
                  aplicaciones adicionales de Chronojump o MyJumpLab, dínoslo y
                  mapeamos los campos a tus plantillas de reportes.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {API_HARDWARE_INTEGRATIONS.map((i) => (
                    <div
                      key={i.name}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50">
                        <Image
                          src={withBasePath(i.iconSrc)}
                          alt={`${i.name} icon`}
                          width={34}
                          height={34}
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-gray-900">
                          {i.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button asChild>
                    <Link href="/demo">Acceso anticipado</Link>
                  </Button>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="h-full p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Tipos de dispositivos
                </h2>
                <p className="mt-3 text-sm text-gray-600">
                  Coubber está pensado para outputs reales de hardware en fuerza,
                  rehab y monitoreo.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {DEVICE_TYPES.map((d) => (
                    <div
                      key={d.name}
                      className="rounded-xl border border-gray-200 bg-white p-4"
                    >
                      <Image
                        src={withBasePath(d.imageSrc)}
                        alt={`${d.name} illustration`}
                        width={160}
                        height={120}
                        className="h-20 w-auto"
                        loading="lazy"
                      />
                      <p className="mt-3 text-sm font-semibold text-gray-900">
                        {d.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        {d.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
