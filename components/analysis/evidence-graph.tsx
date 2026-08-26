"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Network, ExternalLink, Activity } from "lucide-react";
import { ANALYSIS_RESULTS_DEMO, type GraphNode } from "@/lib/phase3-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

// Positions based on circular layout around center
const POSITIONS = [
  { top: "50%", left: "50%" }, // Center
  { top: "15%", left: "50%" }, // Top
  { top: "25%", left: "80%" }, // Top Right
  { top: "65%", left: "85%" }, // Bottom Right
  { top: "85%", left: "50%" }, // Bottom
  { top: "65%", left: "15%" }, // Bottom Left
  { top: "25%", left: "20%" }, // Top Left
];

export function EvidenceGraph() {
  const nodes = ANALYSIS_RESULTS_DEMO.graphNodes;
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);

  // SVG lines connecting center (index 0) to others
  const lines = nodes.slice(1).map((node, i) => {
    const isHigh = node.similarity > 85;
    const isMedium = node.similarity > 70 && node.similarity <= 85;

    return {
      id: `line-${i}`,
      strokeWidth: isHigh ? 3 : isMedium ? 2 : 1,
      opacity: isHigh ? 0.6 : 0.3,
      strokeDasharray: isMedium ? "4 4" : "0",
      x2: POSITIONS[i + 1].left,
      y2: POSITIONS[i + 1].top,
      isHigh,
    };
  });

  return (
    <div className="relative rounded-xl border border-warm-border bg-gradient-to-br from-cream/20 to-white shadow-sm overflow-hidden flex flex-col h-[500px] sm:h-[600px]">

      {/* Premium Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L0 20M0 0l20 20' stroke='%23000000' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 bg-white/80 backdrop-blur-md p-3 rounded-lg border border-warm-border shadow-sm">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage flex items-center gap-1.5">
          <Network className="size-3.5" />
          Knowledge Graph
        </h2>
        <p className="text-[10px] text-warm-muted">
          Connecting innovation to evidence
        </p>
      </div>

      {/* Similarity Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-md p-3 rounded-lg border border-warm-border flex flex-col gap-2 text-[10px] text-warm-muted shadow-sm">
        <div className="flex items-center gap-2 font-medium text-charcoal">
          <Activity className="size-3 text-sage" />
          Relevance Score
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-forest opacity-60"></div>
          <span>High similarity (`&gt;`85%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-0.5 bg-forest opacity-30 border-dashed border-t border-forest"></div>
          <span>Moderate similarity (70-85%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-px bg-forest opacity-20"></div>
          <span>Low similarity (`&lt;`70%)</span>
        </div>
      </div>

      <div className="relative flex-1 w-full h-full min-h-[400px]">
        {/* Connection Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none text-forest">
          {lines.map((line, i) => (
            <g key={line.id}>
              <motion.line
                x1="50%"
                y1="50%"
                x2={line.x2}
                y2={line.y2}
                stroke="currentColor"
                strokeWidth={line.strokeWidth}
                strokeDasharray={line.strokeDasharray}
                opacity={line.opacity}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.1 }}
              />
              {/* Optional glowing effect for high similarity */}
              {line.isHigh && (
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={line.x2}
                  y2={line.y2}
                  stroke="currentColor"
                  strokeWidth={line.strokeWidth * 3}
                  opacity={0.1}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.1 }}
                />
              )}
            </g>
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isCenter = i === 0;
          const pos = POSITIONS[i];
          const isSelected = selectedNode?.id === node.id;

          return (
            <motion.button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
              }}
              className={cn(
                "flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-300 hover:scale-105 active:scale-95 text-left group",
                isCenter
                  ? "bg-forest text-white shadow-xl w-44 z-20 border-transparent ring-4 ring-forest/10"
                  : "bg-white border-warm-border shadow-sm hover:shadow-lg hover:border-forest/40 w-36 z-10",
                isSelected && !isCenter && "ring-2 ring-forest/50 border-forest shadow-md"
              )}
            >
              {isCenter && (
                <div className="absolute inset-0 rounded-lg bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
              <span
                className={cn(
                  "text-[9px] font-bold tracking-wider uppercase mb-1.5",
                  isCenter ? "text-forest-100 opacity-90" : "text-sage"
                )}
              >
                {node.type}
              </span>
              <span
                className={cn(
                  "text-xs font-semibold leading-tight text-center line-clamp-3",
                  isCenter ? "text-white" : "text-charcoal"
                )}
              >
                {node.label}
              </span>
              {!isCenter && (
                <span className={cn(
                  "mt-2 text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full transition-colors",
                  node.similarity > 85 ? "bg-forest/10 text-forest" :
                    node.similarity > 70 ? "bg-sage/10 text-sage" :
                      "bg-warm-border text-warm-muted"
                )}>
                  {node.similarity}% MATCH
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute top-0 right-0 bottom-0 w-[300px] sm:w-[340px] bg-white/95 backdrop-blur-xl border-l border-warm-border shadow-2xl z-30 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-warm-border bg-white/50">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Network className="size-3" />
                </span>
                <span className="text-[10px] font-bold tracking-wider text-sage uppercase">
                  Node Details
                </span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="p-1.5 rounded-full hover:bg-cream text-warm-muted transition-colors"
              >
                <X className="size-4" />
              </button>
            </div>

            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-warm-muted uppercase mb-1 block">
                    {selectedNode.type}
                  </span>
                  <h3 className="text-sm font-semibold text-charcoal mb-3 leading-snug">
                    {selectedNode.label}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 bg-forest/10 text-forest rounded font-semibold border border-forest/20">
                      {selectedNode.similarity}% Similarity
                    </span>
                    <span className="px-2 py-1 bg-cream text-warm-muted rounded font-medium border border-warm-border">
                      {selectedNode.jurisdiction}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 p-4 rounded-lg bg-cream/30 border border-warm-border/50">
                  <span className="text-[10px] font-bold text-sage tracking-wider uppercase flex items-center gap-1.5">
                    <Activity className="size-3" />
                    Key Overlap
                  </span>
                  <div className="text-sm text-charcoal leading-relaxed font-medium">
                    {selectedNode.keyOverlap}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-warm-muted tracking-wider uppercase">
                    Why it matters
                  </span>
                  <p className="text-sm text-warm-muted/90 leading-relaxed">
                    {selectedNode.reason}
                  </p>
                </div>
              </div>
            </ScrollArea>

            <div className="p-5 border-t border-warm-border bg-white shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
              <Button
                variant="outline"
                className="w-full text-xs gap-2 border-forest/20 text-forest hover:bg-forest/5 font-semibold"
                onClick={() => toast.success("Document opened in demo mode")}
              >
                View Source Document
                <ExternalLink className="size-3" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
