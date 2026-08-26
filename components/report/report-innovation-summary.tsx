"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";

export function ReportInnovationSummary() {
  const data = REPORT_DATA_DEMO.innovationSummary;

  return (
    <div className="rounded-xl border border-warm-border bg-white p-4 sm:p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          Your Innovation
        </h2>
        <Link
          href="/analysis/ashwagandha-extraction"
          className="flex items-center gap-1.5 text-[11px] font-medium text-forest hover:opacity-80 transition-opacity"
        >
          View Analysis
          <ArrowRight className="size-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Formulation
          </span>
          <p className="text-sm font-medium text-charcoal">{data.formulation}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Process
          </span>
          <p className="text-sm font-medium text-charcoal">{data.process}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Application
          </span>
          <p className="text-sm font-medium text-charcoal">{data.application}</p>
        </div>
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold tracking-wider text-warm-muted/70">
            Jurisdiction
          </span>
          <p className="text-sm font-medium text-charcoal">🇮🇳 {data.jurisdiction}</p>
        </div>
      </div>
    </div>
  );
}
