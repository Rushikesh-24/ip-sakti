"use client";

import { Check, Info, AlertCircle } from "lucide-react";
import { ANALYSIS_RESULTS_DEMO } from "@/lib/phase3-data";

export function NoveltySummary() {
  const { known, different, disclaimer } = ANALYSIS_RESULTS_DEMO.noveltyAssessment;

  return (
    <div className="rounded-xl border border-warm-border bg-white shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-warm-border bg-cream/30">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-1 flex items-center gap-1.5">
          <Info className="size-3.5" />
          Preliminary Assessment
        </h2>
        <p className="text-[10px] text-warm-muted">
          Based on retrieved overlapping documents
        </p>
      </div>

      <div className="flex-1 p-5 space-y-6">
        <div>
          <h3 className="text-xs font-bold text-warm-muted uppercase tracking-wider mb-3">
            What Looks Known
          </h3>
          <ul className="space-y-2.5">
            {known.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal">
                <div className="flex size-4 shrink-0 items-center justify-center rounded-full bg-cream text-warm-muted mt-0.5">
                  <Check className="size-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-forest uppercase tracking-wider mb-3">
            What May Be Different
          </h3>
          <ul className="space-y-2.5">
            {different.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal font-medium">
                <div className="flex size-4 shrink-0 items-center justify-center rounded-sm bg-forest/10 text-forest mt-0.5">
                  <div className="size-1.5 bg-forest rounded-sm rotate-45" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 bg-amber-50/50 border-t border-amber-100 flex items-start gap-3 mt-auto">
        <AlertCircle className="size-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800 leading-relaxed">
          {disclaimer}
        </p>
      </div>
    </div>
  );
}
