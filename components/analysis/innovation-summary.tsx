"use client";

import Link from "next/link";
import { Edit2 } from "lucide-react";
import { ANALYSIS_RESULTS_DEMO } from "@/lib/phase3-data";

export function InnovationSummary() {
  const data = ANALYSIS_RESULTS_DEMO.innovation.summary;

  return (
    <div className="rounded-xl border border-warm-border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          Your Innovation
        </h2>
        <Link
          href="/analysis/new"
          className="flex items-center gap-1.5 text-[11px] font-medium text-warm-muted hover:text-forest transition-colors"
        >
          <Edit2 className="size-3" />
          Edit Innovation
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 sm:gap-6">
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Formulation
          </span>
          <div className="inline-flex items-center rounded-md bg-forest/5 border border-forest/10 px-2.5 py-1 text-xs font-medium text-forest shadow-sm">
            {data.formulation}
          </div>
        </div>
        
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Application
          </span>
          <div className="inline-flex items-center rounded-md bg-forest/5 border border-forest/10 px-2.5 py-1 text-xs font-medium text-forest shadow-sm">
            {data.application}
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Process
          </span>
          <div className="inline-flex items-center rounded-md bg-forest/5 border border-forest/10 px-2.5 py-1 text-xs font-medium text-forest shadow-sm">
            {data.process}
          </div>
        </div>
      </div>
    </div>
  );
}
