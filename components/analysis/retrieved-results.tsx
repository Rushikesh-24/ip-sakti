"use client";

import { ANALYSIS_RESULTS_DEMO } from "@/lib/phase3-data";

export function RetrievedResults() {
  const results = ANALYSIS_RESULTS_DEMO.topResults;

  return (
    <div className="rounded-xl border border-warm-border bg-white shadow-sm overflow-hidden">
      <div className="p-5 border-b border-warm-border flex items-center justify-between">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          Top Retrieved Results
        </h2>
        <span className="text-xs text-warm-muted">5 key documents</span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-cream/50 text-[10px] uppercase tracking-wider text-warm-muted">
            <tr>
              <th className="px-5 py-3 font-semibold">Source</th>
              <th className="px-5 py-3 font-semibold">Title</th>
              <th className="px-5 py-3 font-semibold">Relevance</th>
              <th className="px-5 py-3 font-semibold">Similarity</th>
              <th className="px-5 py-3 font-semibold">Jurisdiction</th>
              <th className="px-5 py-3 font-semibold">Key Match</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-warm-border">
            {results.map((result) => (
              <tr key={result.id} className="hover:bg-forest/5 transition-colors group">
                <td className="px-5 py-3 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-md bg-white border border-warm-border px-2 py-0.5 text-[10px] font-medium text-charcoal shadow-sm">
                    {result.source}
                  </span>
                </td>
                <td className="px-5 py-3 font-medium text-charcoal max-w-[200px] truncate group-hover:text-forest transition-colors">
                  {result.title}
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs text-warm-muted">
                    {result.relevance}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className="text-xs font-semibold text-forest">
                    {result.similarity}
                  </span>
                </td>
                <td className="px-5 py-3 whitespace-nowrap text-xs text-warm-muted">
                  {result.jurisdiction}
                </td>
                <td className="px-5 py-3 text-xs text-charcoal">
                  {result.keyMatch}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
