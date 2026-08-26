"use client";

import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function RetrievalControls() {
  const [searchMode, setSearchMode] = useState("Hybrid");
  const [jurisdiction, setJurisdiction] = useState("India");
  const [source, setSource] = useState("All");
  const [sort, setSort] = useState("Relevance");

  const ControlGroup = ({ label, value, options, onChange }: any) => (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-warm-muted font-medium">{label}:</span>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-1.5 rounded bg-cream px-2 py-1 text-charcoal font-medium hover:bg-warm-border transition-colors outline-none">
          {value}
          <ChevronDown className="size-3 text-warm-muted" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32 min-w-[120px]">
          {options.map((opt: string) => (
            <DropdownMenuItem
              key={opt}
              onSelect={() => onChange(opt)}
              className={cn(
                "text-xs",
                value === opt && "bg-forest/5 text-forest font-medium"
              )}
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-warm-border bg-white p-3 shadow-sm">
      <div className="flex items-center gap-2 text-sage text-[11px] font-semibold uppercase tracking-wider px-1">
        <Filter className="size-3.5" />
        Filters
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 ml-auto">
        <ControlGroup
          label="Mode"
          value={searchMode}
          options={["Semantic", "Keyword", "Hybrid"]}
          onChange={setSearchMode}
        />
        <ControlGroup
          label="Jurisdiction"
          value={jurisdiction}
          options={["India", "Global"]}
          onChange={setJurisdiction}
        />
        <ControlGroup
          label="Source"
          value={source}
          options={["All", "Patents", "Research", "TKDL", "Regulations"]}
          onChange={setSource}
        />
        <ControlGroup
          label="Sort"
          value={sort}
          options={["Relevance", "Date", "Similarity"]}
          onChange={setSort}
        />
      </div>
    </div>
  );
}
