"use client";

import { GitCompareArrows, CheckCircle2, AlertTriangle } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";

export default function ComparisonsPage() {
  return (
      <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-forest/10 text-forest">
              <GitCompareArrows className="size-4" />
            </div>
            <h1 className="text-2xl font-bold text-forest">Comparisons</h1>
          </div>
          <p className="text-sm text-warm-muted mt-2 max-w-2xl leading-relaxed">
            Compare retrieved evidence against your innovation to identify similarities and potentially differentiated elements.
          </p>
        </div>

        {/* Innovation Context */}
        <div className="bg-white rounded-xl border border-warm-border p-6 mb-8 shadow-sm">
          <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-sage mb-3">
            Your Innovation
          </h2>
          <h3 className="text-lg font-semibold text-charcoal mb-1">
            Ashwagandha + Turmeric
          </h3>
          <p className="text-sm text-warm-muted">
            Novel Extraction Process
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl border border-warm-border shadow-sm overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-cream/50 text-charcoal border-b border-warm-border text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="px-6 py-4 w-1/4">Feature</th>
                  <th className="px-6 py-4 w-3/8 border-l border-warm-border">Your Innovation</th>
                  <th className="px-6 py-4 w-3/8 border-l border-warm-border">Retrieved Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border/50 text-charcoal/80">
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal">Ingredients</td>
                  <td className="px-6 py-4 border-l border-warm-border">Ashwagandha, Turmeric</td>
                  <td className="px-6 py-4 border-l border-warm-border">Common in traditional texts and prior formulations</td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal">Extraction Method</td>
                  <td className="px-6 py-4 border-l border-warm-border text-forest font-medium">Specific sequential extraction sequence</td>
                  <td className="px-6 py-4 border-l border-warm-border">Similar, but generally uses standard hydro-alcoholic approaches</td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal">Application</td>
                  <td className="px-6 py-4 border-l border-warm-border">Targeted recovery</td>
                  <td className="px-6 py-4 border-l border-warm-border">General therapeutic / wellness applications</td>
                </tr>
                <tr className="hover:bg-forest/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-charcoal">Formulation Ratio</td>
                  <td className="px-6 py-4 border-l border-warm-border text-forest font-medium">Proprietary optimized ratio</td>
                  <td className="px-6 py-4 border-l border-warm-border">Standard documented ratios in TKDL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-forest/5 rounded-xl border border-forest/10 p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="size-4 text-forest" />
              <h3 className="text-sm font-bold text-forest uppercase tracking-wider">
                What May Be Different
              </h3>
            </div>
            <ul className="space-y-3 flex-1">
              <li className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-forest mt-0.5">•</span>
                <span>Specific extraction sequence</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-forest mt-0.5">•</span>
                <span>Specific formulation ratio</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-charcoal/80">
                <span className="text-forest mt-0.5">•</span>
                <span>Combination of formulation + process</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-amber-50 rounded-xl border border-amber-100 p-6 flex flex-col justify-center">
            <div className="flex flex-col items-center text-center">
              <AlertTriangle className="size-6 text-amber-500 mb-3" />
              <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2">
                Preliminary Comparison
              </h3>
              <p className="text-sm text-amber-700/80 leading-relaxed max-w-sm">
                This comparison highlights similarities and potentially differentiated elements based on automated retrieval. 
                <strong className="block mt-2 font-semibold">Detailed professional review is recommended before filing.</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
  );
}
