"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { Analysis } from "@/lib/demo-data";
import { STATUS_CONFIG } from "@/lib/demo-data";

interface AnalysisCardProps {
  analysis: Analysis;
  index?: number;
}

export function AnalysisCard({ analysis, index = 0 }: AnalysisCardProps) {
  const statusConfig = STATUS_CONFIG[analysis.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <Link
        href="/analyses"
        className="block rounded-xl border border-warm-border bg-white p-5 transition-shadow duration-200 hover:shadow-md hover:shadow-forest/5"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-forest/6 text-forest mt-0.5">
              <FlaskConical className="size-4" />
            </div>
            <div className="min-w-0 space-y-1">
              <h3 className="text-sm font-medium text-charcoal truncate">
                {analysis.title}
              </h3>
              <p className="text-xs text-warm-muted truncate">
                {analysis.description}
              </p>
            </div>
          </div>
          <ArrowRight className="size-4 text-warm-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className={cn(
              "text-[11px] font-medium px-2 py-0.5",
              statusConfig.className
            )}
          >
            {statusConfig.label}
          </Badge>
          {analysis.noveltyInsight && (
            <span className="text-[11px] text-sage">
              {analysis.noveltyInsight}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] text-warm-muted">
            {analysis.lastAnalyzed}
          </span>
          <span className="text-[11px] font-medium text-sage">
            {analysis.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
