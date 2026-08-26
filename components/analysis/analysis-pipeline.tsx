"use client";

import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PIPELINE_STEPS = [
  "Innovation",
  "Understanding",
  "Retrieval",
  "Analysis",
  "Insights",
];

export function AnalysisPipeline() {
  return (
    <div className="py-4">
      <div className="flex items-center justify-between">
        {PIPELINE_STEPS.map((step, idx) => {
          const isLast = idx === PIPELINE_STEPS.length - 1;
          // In this view, we are at the final step (Insights), so all are "completed"
          // We'll highlight the final step as active/current state.
          const isCurrent = isLast;
          
          return (
            <div key={step} className="flex flex-col items-center relative flex-1">
              <div className="flex items-center justify-center w-full relative z-10">
                <div
                  className={cn(
                    "flex size-6 sm:size-8 items-center justify-center rounded-full border-2 transition-colors bg-white",
                    isCurrent 
                      ? "border-forest text-forest shadow-sm ring-4 ring-forest/10"
                      : "border-sage/50 text-sage"
                  )}
                >
                  <CheckCircle2 className={cn("size-3.5 sm:size-4", isCurrent ? "text-forest" : "text-sage")} />
                </div>
              </div>
              <span
                className={cn(
                  "mt-2 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-center absolute top-8 sm:top-10 w-24",
                  isCurrent ? "text-forest" : "text-warm-muted"
                )}
              >
                {step}
              </span>

              {/* Connecting Line */}
              {!isLast && (
                <div className="absolute top-3 sm:top-4 left-[50%] w-full h-[2px] -z-0">
                  <div className="h-full w-full bg-sage/30" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="h-6 sm:h-8" /> {/* Spacer for absolute text */}
    </div>
  );
}
