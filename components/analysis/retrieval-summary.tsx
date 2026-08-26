"use client";

import { ANALYSIS_RESULTS_DEMO } from "@/lib/phase3-data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function RetrievalSummary() {
  const sources = ANALYSIS_RESULTS_DEMO.retrievalSummary;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          Demo Retrieval Results
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sources.map((src, i) => (
          <motion.div
            key={src.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.4 }}
            className="group flex flex-col rounded-xl border border-warm-border bg-white p-4 shadow-sm hover:shadow-md hover:border-sage/30 transition-all cursor-default"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-cream text-warm-muted group-hover:bg-forest/10 group-hover:text-forest transition-colors">
                  <src.icon className="size-4" />
                </div>
                <span className="text-xs font-bold tracking-wider text-charcoal uppercase">
                  {src.title}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-auto">
              <div className="flex items-center justify-between text-xs">
                <span className="text-warm-muted">Searched:</span>
                <span className="font-mono font-medium text-charcoal">
                  {src.searched.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-warm-muted">Relevant:</span>
                <span className="font-mono font-medium text-forest">
                  {src.relevant.toLocaleString()}
                </span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-warm-border flex items-center justify-between text-[10px] text-warm-muted/70 group-hover:text-forest transition-colors">
              <span className="font-medium tracking-wide uppercase">View Results</span>
              <ArrowRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
