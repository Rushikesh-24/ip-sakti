"use client";

import { useState } from "react";
import { Search, Filter, Plus, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEMO_ANALYSES, STATUS_CONFIG, type AnalysisStatus } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AnalysesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | AnalysisStatus>("all");

  const filteredAnalyses = DEMO_ANALYSES.filter((analysis) => {
    const matchesSearch = analysis.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          analysis.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || analysis.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-forest">My Analyses</h1>
            <p className="text-sm text-warm-muted mt-1">
              Review previous innovation assessments and continue your research.
            </p>
          </div>
          <Link href="/analysis/new">
            <Button className="bg-forest text-white hover:bg-forest/90 w-full sm:w-auto">
              <Plus className="size-4 mr-2" />
              New Analysis
            </Button>
          </Link>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-warm-muted" />
            <Input 
              placeholder="Search analyses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white border-warm-border focus-visible:ring-forest"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            {["all", "complete", "review_required", "in_progress"].map((filter) => {
              const label = filter === "all" ? "All" : STATUS_CONFIG[filter as AnalysisStatus].label;
              return (
                <button
                  key={filter}
                  onClick={() => setStatusFilter(filter as any)}
                  className={cn(
                    "whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors border",
                    statusFilter === filter
                      ? "bg-forest text-white border-forest"
                      : "bg-white text-warm-muted border-warm-border hover:bg-cream hover:text-charcoal"
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredAnalyses.length > 0 ? (
            filteredAnalyses.map((analysis) => {
              const statusConfig = STATUS_CONFIG[analysis.status];
              return (
                <div 
                  key={analysis.id}
                  className="bg-white border border-warm-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-5 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold tracking-wider text-sage uppercase">
                        {analysis.category}
                      </span>
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border",
                        statusConfig.className
                      )}>
                        {statusConfig.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-1 group-hover:text-forest transition-colors">
                      {analysis.title}
                    </h3>
                    <p className="text-sm text-warm-muted line-clamp-2 sm:line-clamp-1">
                      {analysis.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-3 sm:w-48 shrink-0">
                    <span className="text-[11px] font-medium text-warm-muted">
                      Last analyzed {analysis.lastAnalyzed.toLowerCase()}
                    </span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {analysis.status === "complete" ? (
                        <Link href={`/analysis/${analysis.id}/report`} className="flex-1 sm:flex-none">
                          <Button variant="outline" className="w-full text-xs font-semibold border-warm-border hover:bg-forest/5 hover:text-forest hover:border-forest/20">
                            View Report
                          </Button>
                        </Link>
                      ) : (
                        <Link href={`/analysis/${analysis.id}`} className="flex-1 sm:flex-none">
                          <Button variant="outline" className="w-full text-xs font-semibold border-warm-border hover:bg-forest/5 hover:text-forest hover:border-forest/20">
                            View Analysis
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-cream/30 rounded-xl border border-warm-border border-dashed">
              <div className="flex size-12 items-center justify-center rounded-full bg-white text-warm-muted mb-4 shadow-sm">
                <FileText className="size-6" />
              </div>
              <h3 className="text-base font-semibold text-charcoal mb-1">No analyses found</h3>
              <p className="text-sm text-warm-muted max-w-sm mb-6">
                Try another filter or start a new analysis to generate IP insights.
              </p>
              <Link href="/analysis/new">
                <Button className="bg-forest text-white hover:bg-forest/90">
                  <Plus className="size-4 mr-2" />
                  New Analysis
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
  );
}
