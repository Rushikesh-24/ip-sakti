"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, ArrowRight } from "lucide-react";
import Link from "next/link";

import { AnalysisLoader } from "@/components/analysis/analysis-loader";
import { AnalysisHeader } from "@/components/analysis/analysis-header";
import { InnovationSummary } from "@/components/analysis/innovation-summary";
import { AnalysisPipeline } from "@/components/analysis/analysis-pipeline";
import { RetrievalSummary } from "@/components/analysis/retrieval-summary";
import { RetrievalControls } from "@/components/analysis/retrieval-controls";
import { RerankingFlow } from "@/components/analysis/reranking-flow";
import { EvidenceGraph } from "@/components/analysis/evidence-graph";
import { RetrievedResults } from "@/components/analysis/retrieved-results";
import { NoveltySummary } from "@/components/analysis/novelty-summary";

export default function AnalysisResultPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isAnalyzing && (
          <AnalysisLoader onComplete={() => setIsAnalyzing(false)} />
        )}
      </AnimatePresence>

      <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
        <AnalysisHeader />
        
        <div className="mb-8">
          <InnovationSummary />
        </div>

        {/* Pipeline Visualizer */}
        <div className="mb-10">
          <AnalysisPipeline />
        </div>

        {/* Replay Button (Demo only) */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsAnalyzing(true)}
            className="flex items-center gap-1.5 text-xs font-medium text-warm-muted hover:text-forest transition-colors"
          >
            <RotateCcw className="size-3" />
            Replay Analysis Animation
          </button>
        </div>

        {/* Main Hero Area (Retrieval vs Knowledge Graph) */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Left Panel: Retrieval Pipeline */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            <RetrievalControls />
            <RetrievalSummary />
            <RerankingFlow />
          </div>

          {/* Right Panel: Knowledge Graph */}
          <div className="lg:w-7/12">
            <EvidenceGraph />
          </div>
        </div>

        {/* Bottom Area (Novelty Summary & Results) */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Left: Novelty / Differences */}
          <div className="lg:w-1/3">
            <NoveltySummary />
          </div>

          {/* Right: Results Table */}
          <div className="lg:w-2/3">
            <RetrievedResults />
          </div>
        </div>
        
        {/* Call to Action for Phase 4 */}
        <div className="flex justify-center mb-12">
          <Link
            href="/analysis/ashwagandha-extraction/report"
            className="group flex items-center gap-2 rounded-lg bg-forest px-8 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-forest/90 transition-all"
          >
            View IP Guidance Report
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
}
