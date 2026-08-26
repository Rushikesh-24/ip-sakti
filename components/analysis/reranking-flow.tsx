"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, Search, Layers, FileOutput } from "lucide-react";

export function RerankingFlow() {
  const steps = [
    { label: "Query Understanding", icon: Cpu },
    { label: "Semantic + Keyword", icon: Search },
    { label: "Re-ranking", icon: Layers },
    { label: "Top Results", icon: FileOutput },
  ];

  return (
    <div className="rounded-xl border border-warm-border bg-white p-5 shadow-sm">
      <h2 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-sage mb-5">
        Re-Ranking & Filtering
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 relative px-2">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-[2px] bg-sage/20 -z-10 -translate-y-1/2" />
        
        {/* Vertical Connector Line for Mobile */}
        <div className="sm:hidden absolute left-1/2 top-8 bottom-8 w-[2px] bg-sage/20 -z-10 -translate-x-1/2" />

        {steps.map((step, idx) => {
          const isLast = idx === steps.length - 1;
          return (
            <div
              key={step.label}
              className="flex sm:flex-col items-center gap-3 sm:gap-2 w-full sm:w-auto relative"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.15, duration: 0.3 }}
                className="flex size-8 sm:size-10 items-center justify-center rounded-full bg-cream border border-warm-border shadow-sm text-forest relative z-10"
              >
                <step.icon className="size-4 sm:size-4" />
              </motion.div>
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.15 }}
                className="text-[10px] sm:text-xs font-medium text-charcoal sm:text-center"
              >
                {step.label}
              </motion.span>

              {/* Mobile Arrow */}
              {!isLast && (
                <div className="sm:hidden flex items-center justify-center text-sage/40 h-6">
                  <ArrowDown className="size-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
