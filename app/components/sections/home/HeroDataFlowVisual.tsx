"use client";

import { motion } from "framer-motion";
import { Activity, Dumbbell, Gauge, HeartPulse } from "lucide-react";

import { cn } from "@/app/lib/utils";

function SourceCard({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Activity;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/90 p-3 shadow-soft backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-gray-900">
            {title}
          </div>
          <div className="truncate text-xs text-gray-600">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function DataPacket({
  from,
  to,
  top,
  delay,
  className,
}: {
  from: string;
  to: string;
  top: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute h-2.5 w-2.5 rounded-full bg-accent-600 shadow-[0_0_0_6px_rgba(245,158,11,0.12)]",
        className,
      )}
      animate={{
        left: [from, to],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2.6,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
      style={{ top }}
    />
  );
}

export function HeroDataFlowVisual() {
  return (
    <div className="relative isolate h-[360px] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-primary-50/60 to-amber-50 shadow-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(17,24,39,0.08) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative grid h-full grid-cols-3 items-center gap-4 p-6">
        <div className="space-y-3">
          <SourceCard
            icon={Gauge}
            title="Force Plates"
            subtitle="Impulse • Asymmetry • RFD"
          />
          <SourceCard
            icon={Dumbbell}
            title="VBT"
            subtitle="Velocity • Power • Fatigue"
          />
          <SourceCard
            icon={Activity}
            title="GPS & Wearables"
            subtitle="Load • HSR • HR"
          />
          <SourceCard
            icon={HeartPulse}
            title="Rehab Testing"
            subtitle="ROM • Dynamometry"
          />
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[180px] flex-col items-center justify-center rounded-2xl border border-primary-600/20 bg-white p-5 shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
        >
          <div className="text-xs font-semibold text-primary-700">
            Coubber Platform
          </div>
          <div className="mt-2 text-center text-sm font-semibold text-gray-900">
            Athlete Profiles
            <br />
            + Unified Metrics
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
            <motion.div
              className="h-2 rounded-full bg-primary-600"
              animate={{ width: ["22%", "86%", "45%", "72%"] }}
              transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
          <div className="mt-3 grid w-full grid-cols-3 gap-2">
            {["Load", "Readiness", "Risk"].map((t) => (
              <div
                key={t}
                className="rounded-lg bg-primary-50 px-2 py-2 text-center text-[10px] font-semibold text-primary-700"
              >
                {t}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="ml-auto w-full max-w-[240px] rounded-2xl border border-gray-200 bg-white p-5 shadow-lg"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-gray-700">
              Weekly Microcycle
            </div>
            <div className="rounded-full bg-accent-600/10 px-2 py-1 text-[10px] font-semibold text-accent-700">
              Generated
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-4/5 rounded bg-gray-100" />
            <div className="h-3 w-3/5 rounded bg-gray-100" />
            <div className="mt-3 grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded bg-primary-50"
                  style={{ opacity: 0.4 + i * 0.1 }}
                />
              ))}
            </div>
            <div className="mt-3 h-16 rounded bg-gray-100" />
          </div>
        </motion.div>
      </div>

      {/* Animated packets */}
      <div className="pointer-events-none absolute inset-0">
        <DataPacket from="10%" to="46%" top="20%" delay={0.0} />
        <DataPacket from="10%" to="46%" top="35%" delay={0.35} />
        <DataPacket from="10%" to="46%" top="52%" delay={0.65} />
        <DataPacket from="10%" to="46%" top="68%" delay={0.95} />
        <DataPacket from="52%" to="92%" top="44%" delay={0.15} />
        <DataPacket
          from="52%"
          to="92%"
          top="58%"
          delay={0.75}
          className="bg-primary-600 shadow-[0_0_0_6px_rgba(37,99,235,0.12)]"
        />
      </div>
    </div>
  );
}

