"use client";

import { useState } from "react";
import { FileOutput, Search, Download, ExternalLink, Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { toast } from "sonner";

const DEMO_REPORTS = [
  {
    id: "rep-001",
    analysisId: "ashwagandha-extraction",
    title: "Ashwagandha Formulation",
    type: "IP & Regulatory Intelligence Report",
    status: "Complete",
    jurisdiction: "India",
    date: "Today",
  },
  {
    id: "rep-002",
    analysisId: "turmeric-formulation",
    title: "Turmeric Formulation",
    type: "Research Summary",
    status: "Draft",
    jurisdiction: "Global",
    date: "Yesterday",
  }
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredReports = DEMO_REPORTS.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || report.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    toast.success("Report Exported", {
      description: "PDF report has been downloaded (Demo).",
    });
  };

  return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-forest/10 text-forest">
                <FileOutput className="size-4" />
              </div>
              <h1 className="text-2xl font-bold text-forest">Reports</h1>
            </div>
            <p className="text-sm text-warm-muted mt-2 max-w-2xl leading-relaxed">
              Access your generated IP-SHAKTI analysis reports.
            </p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-warm-muted" />
            <Input 
              placeholder="Search reports..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white border-warm-border focus-visible:ring-forest"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            {["All", "Complete", "Draft"].map((filter) => (
              <button
                key={filter}
                onClick={() => setStatusFilter(filter)}
                className={cn(
                  "whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium transition-colors border",
                  statusFilter === filter
                    ? "bg-forest text-white border-forest"
                    : "bg-white text-warm-muted border-warm-border hover:bg-cream hover:text-charcoal"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <div 
                key={report.id}
                className="bg-white border border-warm-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-forest/30 transition-all flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-cream text-warm-muted group-hover:bg-forest/10 group-hover:text-forest transition-colors shrink-0">
                    <FileOutput className="size-5" />
                  </div>
                  <span className={cn(
                    "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border",
                    report.status === "Complete" 
                      ? "bg-forest/10 text-forest border-forest/20" 
                      : "bg-sage/10 text-sage border-sage/20"
                  )}>
                    {report.status}
                  </span>
                </div>
                
                <h3 className="text-base font-semibold text-charcoal mb-1 group-hover:text-forest transition-colors">
                  {report.title}
                </h3>
                <p className="text-xs font-medium text-warm-muted uppercase tracking-wider mb-4">
                  {report.type}
                </p>

                <div className="flex items-center gap-4 text-[11px] text-warm-muted font-medium mb-6">
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-warm-border"></span>
                    {report.jurisdiction}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-warm-border"></span>
                    Generated {report.date}
                  </div>
                </div>
                
                <div className="mt-auto flex items-center gap-2 pt-4 border-t border-warm-border/50">
                  <Link href={`/analysis/${report.analysisId}/report`} className="flex-1">
                    <Button 
                      variant="outline" 
                      className="w-full text-xs font-semibold border-warm-border text-charcoal hover:text-forest hover:border-forest/30 hover:bg-forest/5"
                    >
                      <ExternalLink className="size-3 mr-2" />
                      View Report
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="shrink-0 border-warm-border text-charcoal hover:text-forest hover:border-forest/30 hover:bg-forest/5"
                    onClick={handleExport}
                  >
                    <Download className="size-4" />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center p-12 text-center bg-cream/30 rounded-xl border border-warm-border border-dashed">
              <div className="flex size-12 items-center justify-center rounded-full bg-white text-warm-muted mb-4 shadow-sm">
                <FileOutput className="size-5" />
              </div>
              <h3 className="text-sm font-semibold text-charcoal mb-1">No reports yet</h3>
              <p className="text-sm text-warm-muted max-w-sm mb-6">
                Complete an innovation analysis to generate your first report.
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
