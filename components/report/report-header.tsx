"use client";

import Link from "next/link";
import { ChevronDown, Download, Share2 } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ReportHeader() {
  const { meta } = REPORT_DATA_DEMO;

  return (
    <div className="mb-6 space-y-5">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[13px] text-warm-muted flex-wrap">
          <Link href="/dashboard" className="hover:text-forest hover:underline underline-offset-2 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/analyses" className="hover:text-forest hover:underline underline-offset-2 transition-colors">
            My Analyses
          </Link>
          <span>/</span>
          <Link href="/analysis/ashwagandha-extraction" className="hover:text-forest hover:underline underline-offset-2 transition-colors">
            Ashwagandha Extraction
          </Link>
          <span>/</span>
          <span className="text-charcoal font-medium">Report</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-xs border-warm-border text-warm-muted">
              {meta.jurisdiction} <ChevronDown className="size-3 ml-1" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 text-xs border-warm-border text-warm-muted">
              {meta.language} <ChevronDown className="size-3 ml-1" />
            </Button>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" size="sm" className="h-8 text-xs border-warm-border text-charcoal bg-white hover:bg-cream">
                  <Download className="size-3 mr-1.5 text-sage" />
                  Export Report
                </Button>
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toast.success("PDF Report prepared for export", { description: "Prototype download simulated."})} className="text-xs">PDF Report</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success("Research Summary prepared for export")} className="text-xs">Research Summary</DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.success("IP Checklist prepared for export")} className="text-xs">IP Checklist</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="sm" onClick={() => toast.success("Share link copied to clipboard")} className="h-8 text-xs border-warm-border text-charcoal bg-white hover:bg-cream">
            <Share2 className="size-3 mr-1.5 text-sage" />
            Share
          </Button>
        </div>
      </div>

      {/* Main Title */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-charcoal">
              {meta.title}
            </h1>
          </div>
          <p className="text-sm text-warm-muted">{meta.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-forest border border-forest/20">
            <span className="relative flex size-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75"></span>
              <span className="relative inline-flex rounded-full size-1.5 bg-forest"></span>
            </span>
            Analysis Complete
          </span>
          <span className="inline-flex items-center rounded-full bg-sage/10 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-sage border border-sage/20">
            Demo Report
          </span>
        </div>
      </div>
    </div>
  );
}
