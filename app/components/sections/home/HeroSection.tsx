"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { PRIMARY_CTA, SECONDARY_CTA, TRUST_LOGOS } from "@/app/lib/constants";
import { withBasePath } from "@/app/lib/utils";

const heroContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12 } },
} as const;

const heroItem = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
} as const;

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-[-80px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.32),transparent_60%)] blur-2xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={heroContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div variants={heroItem} className="space-y-4">
              <Badge variant="accent">Acceso anticipado</Badge>
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Informes de rendimiento en 30 segundos, no 30 horas
              </h1>
              <p className="text-base text-gray-600 md:text-lg">
                Análisis con IA que unifica tus datos de atletas y entrega
                insights listos para decidir para entrenadores y profesionales
              </p>
            </motion.div>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href={PRIMARY_CTA.href}>{PRIMARY_CTA.label}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={SECONDARY_CTA.href}>{SECONDARY_CTA.label}</Link>
              </Button>
            </motion.div>

            <motion.div variants={heroItem} className="space-y-3">
              <p className="text-sm font-semibold text-gray-700">
                Con la confianza de equipos que aceleran su flujo de trabajo
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {TRUST_LOGOS.slice(0, 6).map((l) => (
                  <div
                    key={l.name}
                    className="flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-center text-xs font-semibold text-gray-700 shadow-sm"
                    aria-label={`Logo placeholder: ${l.name}`}
                  >
                    {l.name}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="primary">Plataformas de fuerza</Badge>
                <Badge variant="primary">VBT</Badge>
                <Badge variant="primary">GPS</Badge>
                <Badge variant="primary">Rehab</Badge>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <Image
                src={withBasePath("/files/home.png")}
                alt="Vista previa de reportes de Coubber"
                width={1200}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
