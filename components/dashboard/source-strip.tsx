"use client";

import {
  ScrollText,
  Landmark,
  BookOpen,
  GraduationCap,
  Scale,
} from "lucide-react";
import { motion } from "framer-motion";
import { KNOWLEDGE_SOURCES } from "@/lib/demo-data";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "src-patents": ScrollText,
  "src-ayush": Landmark,
  "src-tkdl": BookOpen,
  "src-research": GraduationCap,
  "src-regulations": Scale,
};

export function SourceStrip() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="rounded-xl border border-warm-border bg-white p-6 sm:p-8"
    >
      <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-6">
        Grounded in Authoritative Sources
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
        {KNOWLEDGE_SOURCES.map((source) => {
          const Icon = ICON_MAP[source.id] || BookOpen;
          return (
            <div
              key={source.id}
              className="flex flex-col items-center gap-2 text-center group"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-cream text-warm-muted transition-colors group-hover:bg-forest/6 group-hover:text-forest">
                <Icon className="size-5" />
              </div>
              <span className="text-xs font-medium text-charcoal">
                {source.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
