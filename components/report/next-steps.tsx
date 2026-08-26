"use client";

import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { FileText, Search, CheckCircle2, Users } from "lucide-react";

// Mapping icons back
const ICON_MAP: Record<string, any> = {
  ns1: FileText,
  ns2: Search,
  ns3: CheckCircle2,
  ns4: Users,
};

export function NextSteps() {
  const steps = REPORT_DATA_DEMO.nextSteps;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-1">
          Recommended Next Steps
        </h2>
        <h3 className="text-xl font-semibold text-charcoal">
          What should you do next?
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const Icon = ICON_MAP[step.id] || FileText;
          return (
            <div
              key={step.id}
              className="relative flex flex-col rounded-xl border border-warm-border bg-white p-5 shadow-sm"
            >
              <div className="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full bg-forest text-white text-[10px] font-bold shadow-sm">
                {idx + 1}
              </div>
              
              <div className="flex size-10 items-center justify-center rounded-lg bg-cream text-forest mb-4">
                <Icon className="size-5" />
              </div>
              
              <h4 className="text-xs font-bold text-charcoal tracking-wider uppercase mb-2">
                {step.title}
              </h4>
              <p className="text-xs text-warm-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
