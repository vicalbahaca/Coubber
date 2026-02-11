import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { RESOURCES } from "@/app/lib/constants";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) return { title: "Recurso" };

  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) notFound();

  return (
    <>
      <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Badge variant="primary">{resource.category}</Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              {resource.title}
            </h1>
            <p className="mt-5 text-base text-gray-600 md:text-lg">
              {resource.description}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-white pt-0">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-8">
            <Card className="p-6 md:p-8">
              <div className="prose prose-gray max-w-none">
                <h2>Resumen</h2>
                <p>
                  Este es un artículo placeholder de prelaunch. El recurso final
                  incluirá ejemplos, capturas y plantillas para ayudar a tu
                  equipo a estandarizar reportes y toma de decisiones.
                </p>

                <h2>Ideas clave</h2>
                <ul>
                  <li>Define métricas y umbrales antes de automatizar.</li>
                  <li>Prioriza outputs listos para decidir sobre dashboards infinitos.</li>
                  <li>Mantén los reportes consistentes entre roles y departamentos.</li>
                </ul>

                <h2>Qué automatiza Coubber</h2>
                <p>
                  Coubber unifica datos de atletas entre dispositivos y genera
                  informes interpretados en segundos — para que tu staff se
                  enfoque en coaching e intervenciones, no en formateo.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/demo">Acceso anticipado</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/resources">Volver a recursos</Link>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
