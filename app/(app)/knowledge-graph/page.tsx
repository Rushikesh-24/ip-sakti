"use client";

import { Network } from "lucide-react";
import { EvidenceGraph } from "@/components/analysis/evidence-graph";

export default function KnowledgeGraphPage() {
  return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500 h-[calc(100vh-3.5rem)] flex flex-col">
        
        {/* Header */}
        <div className="mb-6 shrink-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-forest/10 text-forest">
              <Network className="size-4" />
            </div>
            <h1 className="text-2xl font-bold text-forest">Knowledge Graph</h1>
          </div>
          <p className="text-sm text-warm-muted mt-2 max-w-2xl leading-relaxed">
            Explore relationships between your innovation, prior art, research literature, and traditional knowledge.
          </p>
        </div>

        {/* Graph Container */}
        <div className="flex-1 min-h-[500px]">
          {/* We reuse the EvidenceGraph but make it take full height */}
          <div className="h-full [&>div]:h-full">
            <EvidenceGraph />
          </div>
        </div>
      </div>
  );
}
