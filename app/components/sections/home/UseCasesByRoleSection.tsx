"use client";

import { Briefcase, HeartPulse, TrendingUp } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Card } from "@/app/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { ROLE_USE_CASES } from "@/app/lib/constants";

const roleIcons: Record<string, typeof TrendingUp> = {
  performance: TrendingUp,
  medical: HeartPulse,
  directors: Briefcase,
};

function RolePreview({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-gray-700">{title}</div>
        <div className="rounded-full bg-primary-50 px-2 py-1 text-[10px] font-semibold text-primary-700">
          Vista por rol
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-4/5 rounded bg-gray-100" />
        <div className="h-3 w-2/3 rounded bg-gray-100" />
        <div className="mt-4 grid grid-cols-6 gap-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-10 rounded bg-primary-50"
              style={{ opacity: 0.35 + i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function UseCasesByRoleSection() {
  const defaultTab = ROLE_USE_CASES[0]?.key ?? "performance";

  return (
    <Section className="bg-gray-50">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Hecho para tu rol
          </h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Distintas partes interesadas necesitan distintas vistas — sin romper
            el modelo de datos.
          </p>
        </Reveal>

        <div className="mt-12">
          <Tabs defaultValue={defaultTab} className="w-full">
            <TabsList className="mx-auto flex w-full max-w-3xl">
              {ROLE_USE_CASES.map((r) => (
                <TabsTrigger key={r.key} value={r.key} className="flex-1">
                  {r.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {ROLE_USE_CASES.map((r) => {
              const Icon = roleIcons[r.key];
              return (
                <TabsContent key={r.key} value={r.key}>
                  <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                    <Reveal>
                      <Card className="h-full p-6 md:p-8">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                          {r.headline}
                        </h3>
                        <ul className="mt-5 space-y-3 text-sm text-gray-700">
                          {r.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-600" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Reveal>

                    <Reveal>
                      <RolePreview title={`Dashboard para ${r.label}`} />
                      <p className="mt-4 text-sm text-gray-600">
                        Terminología y definiciones consistentes entre el staff —
                        para que todos estén alineados.
                      </p>
                    </Reveal>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </Container>
    </Section>
  );
}
