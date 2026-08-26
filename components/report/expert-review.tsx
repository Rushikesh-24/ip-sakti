"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";

export function ExpertReview() {
  return (
    <div className="rounded-xl border border-forest/20 bg-forest/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-forest/10 text-forest">
          <ShieldCheck className="size-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-charcoal mb-1">
            Need Professional Review?
          </h3>
          <p className="text-sm text-warm-muted">
            Connect this report with an IP facilitator or legal professional for formal evaluation.
          </p>
        </div>
      </div>
      
      <button 
        onClick={() => alert("Expert escalation workflow — prototype.")}
        className="shrink-0 flex items-center gap-2 rounded-lg bg-forest px-5 py-2.5 text-sm font-medium text-white hover:bg-forest/90 transition-colors shadow-sm"
      >
        Request Expert Review
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
