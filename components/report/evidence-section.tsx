"use client";

import { useState } from "react";
import { FileText } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { Button } from "@/components/ui/button";

interface EvidenceSectionProps {
  onOpenSource?: (id: string) => void;
}

export function EvidenceSection({ onOpenSource }: EvidenceSectionProps) {
  const { sources } = REPORT_DATA_DEMO;
  const [filter, setFilter] = useState("all");

  const filteredSources =
    filter === "all" ? sources : sources.filter((s) => s.type === filter);

  return (
    <div className="rounded-xl border border-warm-border bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="p-5 sm:p-6 border-b border-warm-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-cream/30">
        <div>
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-1">
            Supporting Evidence
          </h2>
          <p className="text-sm text-charcoal font-medium">
            Sources cited in this report
          </p>
        </div>
        <div className="flex gap-2">
          {["all", "patent", "research", "tkdl"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-colors ${
                filter === type
                  ? "bg-charcoal text-white"
                  : "bg-white border border-warm-border text-warm-muted hover:text-charcoal hover:bg-cream"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 bg-warm-border/50">
        {filteredSources.map((source, idx) => (
          <div
            key={source.id}
            className={`p-5 sm:p-6 bg-white flex flex-col hover:bg-forest/5 transition-colors group ${
              idx % 3 !== 2 ? "lg:border-r border-warm-border" : ""
            } ${
              idx < filteredSources.length - 3
                ? "border-b border-warm-border"
                : ""
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="inline-flex items-center rounded-md bg-cream px-2 py-1 text-[10px] font-medium text-warm-muted uppercase tracking-wider">
                {source.type}
              </span>
              <span className="text-[10px] font-bold text-sage bg-sage/10 px-1.5 rounded">
                [{source.id.replace("src", "")}]
              </span>
            </div>
            <h3 className="text-sm font-semibold text-charcoal mb-2 line-clamp-2">
              {source.title}
            </h3>
            <p className="text-xs text-warm-muted line-clamp-3 mb-4 flex-1">
              {source.whyRetrieved}
            </p>
            <Button
              variant="outline"
              className="w-full text-xs font-medium border-warm-border text-charcoal group-hover:border-forest/30 group-hover:text-forest transition-colors"
              onClick={() => onOpenSource && onOpenSource(source.id)}
            >
              <FileText className="size-3 mr-2" />
              View Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
