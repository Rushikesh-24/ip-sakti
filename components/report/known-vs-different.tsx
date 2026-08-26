import { CheckCircle2, AlertTriangle, Fingerprint } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { cn } from "@/lib/utils";

export function KnownVsDifferent({ onCitationClick }: { onCitationClick?: (id: string) => void }) {
  const { known, different } = REPORT_DATA_DEMO.assessment;

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
    <div className="rounded-xl border border-warm-border bg-white p-5 sm:p-6 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <Fingerprint className="size-4 text-forest" />
        <h2 className="text-sm font-semibold text-charcoal">
          Prior Art Overlap Analysis
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 flex-1">
        {/* Known */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex size-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <AlertTriangle className="size-3" />
            </div>
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-charcoal">
              Appears in Prior Art
            </h3>
          </div>
          <ul className="space-y-3 flex-1 bg-cream/30 p-4 rounded-lg border border-warm-border/50">
            {known.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{renderTextWithCitations(item)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Different */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex size-6 items-center justify-center rounded-full bg-forest/10 text-forest">
              <CheckCircle2 className="size-3" />
            </div>
            <h3 className="text-[11px] font-bold tracking-wider uppercase text-charcoal">
              Potentially Novel
            </h3>
          </div>
          <ul className="space-y-3 flex-1 bg-forest/5 p-4 rounded-lg border border-forest/10">
            {different.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-forest mt-1 flex-shrink-0">•</span>
                <span className="leading-relaxed">{renderTextWithCitations(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
