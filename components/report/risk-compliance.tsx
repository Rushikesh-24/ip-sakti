"use client";

import { ShieldAlert, Scale, FileSearch, Landmark } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { cn } from "@/lib/utils";

// Mapping icons back since we didn't store React components in the JSON directly
const ICON_MAP: Record<string, any> = {
  tkdl: Landmark,
  abs: Scale,
  prior_art: FileSearch,
  regulatory: ShieldAlert,
  legal: Scale,
};

export function RiskCompliance() {
  const risks = REPORT_DATA_DEMO.risks;

  return (
    <div className="rounded-xl border border-warm-border bg-white shadow-sm overflow-hidden h-full">
      <div className="p-5 border-b border-warm-border bg-cream/30">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          Risk & Compliance Check
        </h2>
      </div>

      <div className="divide-y divide-warm-border">
        {risks.map((risk) => {
          const Icon = ICON_MAP[risk.id] || Info;
          return (
            <div key={risk.id} className="p-4 sm:p-5 flex items-start gap-4 hover:bg-cream/20 transition-colors">
              <div className="flex size-8 items-center justify-center rounded-lg bg-cream border border-warm-border text-warm-muted shrink-0 mt-1">
                <Icon className="size-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-[11px] font-bold text-charcoal tracking-wider uppercase mb-1">
                  {risk.title}
                </h3>
                <p className="text-sm text-charcoal/80 mb-2">
                  {risk.description}
                </p>
              </div>

              <div className={cn(
                "shrink-0 px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase",
                risk.statusStyle
              )}>
                {risk.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Info(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
