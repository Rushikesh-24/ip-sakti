"use client";

import { ArrowDown } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { cn } from "@/lib/utils";

export function IpRouteCards() {
  const routes = REPORT_DATA_DEMO.ipRoutes;

  return (
    <div className="rounded-xl border border-warm-border bg-white p-5 shadow-sm h-full flex flex-col">
      <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-6">
        Potentially Relevant IP Routes
      </h2>

      <div className="flex-1 flex flex-col items-center justify-between gap-2 relative">
        {routes.map((route, idx) => {
          const isLast = idx === routes.length - 1;
          
          return (
            <div key={route.id} className="w-full flex flex-col items-center gap-2">
              <div className="w-full sm:w-11/12 rounded-lg border border-warm-border bg-white p-3 hover:shadow-sm transition-shadow cursor-default flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-bold text-charcoal tracking-wider uppercase mb-1">
                    {route.title}
                  </h3>
                  <p className="text-[11px] text-warm-muted leading-relaxed whitespace-pre-line">
                    {route.description}
                  </p>
                </div>
                
                <div className={cn(
                  "shrink-0 px-2.5 py-1 rounded-md text-[10px] font-medium border text-center max-w-[100px]",
                  route.statusColor
                )}>
                  {route.status}
                </div>
              </div>

              {!isLast && (
                <div className="text-sage/40">
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
