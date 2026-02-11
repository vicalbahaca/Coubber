"use client";

import * as React from "react";
import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { cn } from "@/app/lib/utils";

type Billing = "monthly" | "annual";

const STANDARD_FEATURES = [
  "Generación automática de informes",
  "40+ integraciones de fuentes de datos",
  "Exportes PDF compartibles",
  "Acceso móvil y web",
  "Plantillas estándar de informes",
  "Soporte por email",
] as const;

const ENTERPRISE_ADDITIONALS = [
  "SSO y seguridad avanzada",
  "Plantillas de informes a medida",
  "Integraciones prioritarias",
  "Acceso a API y webhooks",
  "Onboarding dedicado",
  "Soporte prioritario 24/7",
  "Retención de datos a medida",
] as const;

const ATHLETE_TIERS = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50+", value: 50 },
] as const;

function formatEur(amount: number) {
  const rounded = Math.round(amount * 100) / 100;
  const str = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
  return `€${str}`;
}

export function PricingTable() {
  const [billing, setBilling] = React.useState<Billing>("monthly");
  const [athletes, setAthletes] = React.useState<(typeof ATHLETE_TIERS)[number]>(
    ATHLETE_TIERS[1],
  );

  const monthlyPerAthlete = 14;
  const annualDiscount = 0.2;
  const perAthlete =
    billing === "annual" ? monthlyPerAthlete * (1 - annualDiscount) : monthlyPerAthlete;
  const estimatedTotal = perAthlete * athletes.value;

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-gray-600">
          Cambia la facturación para ver el ahorro anual.
        </div>
        <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-semibold transition-colors",
              billing === "monthly"
                ? "bg-primary-50 text-gray-900"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={cn(
              "relative rounded-md px-4 py-2 text-sm font-semibold transition-colors",
              billing === "annual"
                ? "bg-primary-50 text-gray-900"
                : "text-gray-700 hover:bg-gray-100",
            )}
          >
            Anual
            <span className="ml-2 rounded-full bg-accent-600/10 px-2 py-0.5 text-[10px] font-bold text-accent-700">
              Ahorra 20%
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Standard */}
        <Card className="h-full p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700">STANDARD</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                {formatEur(perAthlete)}
                <span className="text-base font-semibold text-gray-600">
                  {" "}
                  / atleta / mes
                </span>
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {billing === "annual" ? "Facturación anual." : "Facturación mensual."}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
              <Sparkles className="h-4 w-4" />
              Prelanzamiento
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold text-gray-900">Atletas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {ATHLETE_TIERS.map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setAthletes(tier)}
                  className={cn(
                    "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors",
                    tier.value === athletes.value
                      ? "border-primary-600/20 bg-primary-50 text-gray-900"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                  )}
                >
                  {tier.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Total estimado:{" "}
              <span className="font-semibold text-gray-900">
                {formatEur(estimatedTotal)}
              </span>
              <span className="text-gray-600"> / mes</span>
            </p>
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold text-gray-900">Qué incluye</p>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              {STANDARD_FEATURES.map((f) => (
                <div key={f} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-success" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button asChild className="w-full" size="lg">
              <Link href="/demo">Solicitar acceso anticipado</Link>
            </Button>
            <p className="mt-3 text-center text-sm text-gray-600">
              ¿Tienes dudas?{" "}
              <Link href="/demo" className="font-semibold text-primary-700">
                Solicita acceso anticipado
              </Link>
            </p>
          </div>
        </Card>

        {/* Enterprise */}
        <Card className="h-full p-6 md:p-8">
          <div>
            <p className="text-sm font-semibold text-gray-700">ENTERPRISE</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Precio a medida
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Pensado para despliegues multi-equipo, gobernanza estricta e
              integraciones avanzadas.
            </p>
          </div>

          <div className="mt-7">
            <p className="text-sm font-semibold text-gray-900">
              Todo en Standard, más:
            </p>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              {ENTERPRISE_ADDITIONALS.map((f) => (
                <div key={f} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 text-success" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Button asChild className="w-full" size="lg" variant="secondary">
              <Link href="/demo">Solicitar info</Link>
            </Button>
            <p className="mt-3 text-center text-sm text-gray-600">
              Tiempo de respuesta típico:{" "}
              <span className="font-semibold">&lt; 24 horas</span>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
