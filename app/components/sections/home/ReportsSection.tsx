"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { REPORT_TEMPLATES } from "@/app/lib/constants";

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
} as const;

const previewVariants = {
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 1, y: -4 },
} as const;

const revealVariants = {
  rest: { opacity: 0, y: 6 },
  hover: { opacity: 1, y: 0 },
} as const;

function ReportMiniPreview() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="h-3 w-32 rounded bg-gray-100" />
        <div className="h-6 w-16 rounded-full bg-primary-50" />
      </div>
      <div className="mt-3 grid grid-cols-8 items-end gap-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded bg-primary-600/25"
            style={{ height: 10 + ((i * 11) % 34) }}
          />
        ))}
      </div>
      <div className="mt-3 space-y-2">
        <div className="h-3 w-4/5 rounded bg-gray-100" />
        <div className="h-3 w-2/3 rounded bg-gray-100" />
      </div>
    </div>
  );
}

export function ReportsSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
              <FileText className="h-4 w-4" />
              Plantillas de informes
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Biblioteca de informes hecha para tu flujo de trabajo
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Empieza con plantillas probadas y adáptalas a tu deporte, fase y
              estándares internos.
            </p>
          </Reveal>

          <Reveal className="shrink-0">
            <Button asChild variant="secondary">
              <Link href="/reports">Explorar todas las plantillas</Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REPORT_TEMPLATES.map((r) => (
            <Reveal key={r.title}>
              <motion.div
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardVariants}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="h-full p-6 md:p-8">
                  <motion.div variants={previewVariants}>
                    <ReportMiniPreview />
                  </motion.div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{r.description}</p>

                  <motion.div variants={revealVariants} className="mt-4">
                    <div className="rounded-lg border border-primary-600/15 bg-primary-50 px-3 py-2 text-xs font-semibold text-primary-700">
                      Vista al pasar: alertas clave, deltas de tendencia y una
                      narrativa breve con IA.
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
