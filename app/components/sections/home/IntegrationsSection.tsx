"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Dumbbell,
  Gauge,
  MapPinned,
  Repeat2,
  Ruler,
} from "lucide-react";

import { Reveal } from "@/app/components/animations/Reveal";
import { Container } from "@/app/components/layout/Container";
import { Section } from "@/app/components/layout/Section";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { INTEGRATION_CATEGORIES } from "@/app/lib/constants";
import { cn } from "@/app/lib/utils";

const categoryIcons = [Gauge, Dumbbell, Repeat2, Ruler, MapPinned, ArrowDownToLine];

function IntegrationsFlowVisual() {
  const nodes = [
    { label: "Force Plates", x: 90, y: 60 },
    { label: "VBT", x: 330, y: 40 },
    { label: "Flywheel", x: 510, y: 120 },
    { label: "GPS", x: 520, y: 260 },
    { label: "Rehab", x: 320, y: 320 },
    { label: "CSV", x: 90, y: 280 },
  ];

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-primary-50/60 to-amber-50 shadow-xl">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 360"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgba(37,99,235,0.25)" />
            <stop offset="1" stopColor="rgba(245,158,11,0.18)" />
          </linearGradient>
        </defs>
        {nodes.map((n) => (
          <line
            key={n.label}
            x1={n.x}
            y1={n.y}
            x2={300}
            y2={180}
            stroke="url(#line)"
            strokeWidth={2}
            strokeDasharray="4 6"
          />
        ))}
      </svg>

      <motion.div
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-primary-600/20 bg-white p-4 shadow-lg"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="text-xs font-semibold text-primary-700">Coubber</div>
        <div className="mt-2 text-sm font-semibold text-gray-900">
          Unified Data
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
          <motion.div
            className="h-2 rounded-full bg-accent-600"
            animate={{ width: ["25%", "78%", "48%", "64%"] }}
            transition={{ duration: 2.8, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>

      {nodes.map((n, idx) => (
        <motion.div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: n.x, top: n.y }}
          animate={{ y: [0, -4, 0], opacity: [0.95, 1, 0.95] }}
          transition={{
            duration: 4.4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: idx * 0.15,
          }}
        >
          <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-800 shadow-sm">
            {n.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function IntegrationsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                All Your Data, One Platform
              </h2>
              <p className="text-base text-gray-600 md:text-lg">
                Connect the tools you already use. Coubber consolidates athlete
                profiles, aligns naming, and keeps reporting consistent across
                departments.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4">
              {INTEGRATION_CATEGORIES.map((c, idx) => {
                const Icon = categoryIcons[idx];
                return (
                  <Reveal key={c.title}>
                    <Card className="p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {c.title}
                          </h3>
                          <div className={cn("mt-3 flex flex-wrap gap-2")}>
                            {c.items.map((item) => (
                              <Badge key={item}>{item}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-8">
              <Button asChild variant="secondary">
                <Link href="/integrations">View all integrations</Link>
              </Button>
            </Reveal>
          </div>

          <Reveal>
            <IntegrationsFlowVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

