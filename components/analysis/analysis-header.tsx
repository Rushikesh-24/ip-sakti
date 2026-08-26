"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ANALYSIS_RESULTS_DEMO } from "@/lib/phase3-data";

export function AnalysisHeader() {
  const data = ANALYSIS_RESULTS_DEMO.innovation;

  return (
    <div className="mb-6 space-y-4">
      {/* Top Meta & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[13px] text-warm-muted">
          <Link
            href="/dashboard"
            className="hover:text-forest hover:underline underline-offset-2 transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/analyses"
            className="hover:text-forest hover:underline underline-offset-2 transition-colors"
          >
            My Analyses
          </Link>
          <span>/</span>
          <span className="text-charcoal font-medium">Ashwagandha Extraction</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-forest/10 border border-forest/20 text-forest text-xs font-semibold">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-forest"></span>
            </span>
            {data.status}
          </div>
        </div>
      </div>

      {/* Main Title & Secondary Meta */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-charcoal">
          {data.title}
        </h1>
        <div className="flex items-center gap-3 mt-2 text-sm text-warm-muted">
          <span className="flex items-center gap-1">
            <span className="text-base">🇮🇳</span> {data.metadata.jurisdiction}
          </span>
          <span className="text-warm-border">•</span>
          <span>{data.metadata.language}</span>
          <span className="text-warm-border">•</span>
          <span className="font-medium text-sage">{data.metadata.type}</span>
        </div>
      </div>
    </div>
  );
}
