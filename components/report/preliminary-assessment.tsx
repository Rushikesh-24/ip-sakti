"use client";

import { Info } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";

export function PreliminaryAssessment({ onCitationClick }: { onCitationClick?: (id: string) => void }) {
  const data = REPORT_DATA_DEMO.assessment;

  // Simple parser to turn "[1]" into a clickable button
  const renderTextWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    return parts.map((part, i) => {
      if (part.match(/\[\d+\]/)) {
        const num = part.replace(/[\[\]]/g, "");
        return (
          <button
            key={i}
            onClick={() => onCitationClick && onCitationClick(`src${num}`)}
            className="inline-flex items-center justify-center rounded-sm bg-forest/10 px-1 py-0.5 text-[10px] font-bold text-forest hover:bg-forest hover:text-white transition-colors cursor-pointer mx-0.5 align-baseline"
          >
            {num}
          </button>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="rounded-xl border border-warm-border bg-gradient-to-br from-forest/5 to-white p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-4">
        Preliminary Assessment
      </h2>
      
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold text-forest mb-3">
          {data.heading}
        </h3>
        <p className="text-sm text-charcoal/80 leading-relaxed mb-6 max-w-md">
          {renderTextWithCitations(data.description)}
        </p>
      </div>

      <div className="mt-auto flex items-start gap-2 pt-4 border-t border-warm-border/60">
        <Info className="size-3.5 text-warm-muted shrink-0 mt-0.5" />
        <p className="text-[11px] text-warm-muted leading-relaxed">
          {data.disclaimer}
        </p>
      </div>
    </div>
  );
}
