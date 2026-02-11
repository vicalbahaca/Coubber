"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/app/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

