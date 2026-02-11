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
  if (!resource) return { title: "Resource" };

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
                <h2>Summary</h2>
                <p>
                  This is a prelaunch placeholder article. The final resource
                  will include examples, screenshots, and templates to help your
                  team standardize reporting and decision-making.
                </p>

                <h2>Key Takeaways</h2>
                <ul>
                  <li>Define metrics and thresholds before you automate.</li>
                  <li>Prioritize decision-ready outputs over dashboard sprawl.</li>
                  <li>Keep reporting consistent across roles and departments.</li>
                </ul>

                <h2>What Coubber Automates</h2>
                <p>
                  Coubber unifies athlete data across devices and generates
                  interpreted reports in seconds — so your staff focuses on
                  coaching and interventions, not formatting.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/demo">Book a Demo</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/resources">Back to Resources</Link>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
