"use client";

import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";

const NODE_DATA = [
  { label: "Your Innovation", y: 0 },
  { label: "Similar Work", y: 1 },
  { label: "Comparison", y: 2 },
  { label: "Potential Novelty", y: 3 },
];

function ReasoningDiagram() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center py-4">
      <svg
        width="180"
        height="260"
        viewBox="0 0 180 260"
        fill="none"
        className="text-forest"
      >
        {/* Connecting lines */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={`line-${i}`}
            x1="90"
            y1={30 + i * 70}
            x2="90"
            y2={60 + i * 70}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity={0.3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
          />
        ))}
        {/* Nodes */}
        {NODE_DATA.map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
          >
            <rect
              x="14"
              y={4 + i * 70}
              width="152"
              height="32"
              rx="8"
              fill={i === 0 ? "currentColor" : "transparent"}
              stroke="currentColor"
              strokeWidth={i === 0 ? "0" : "1.5"}
              opacity={i === 0 ? 1 : 0.25}
            />
            <text
              x="90"
              y={24 + i * 70}
              textAnchor="middle"
              fontSize="12"
              fontWeight="500"
              fill={i === 0 ? "#faf8f5" : "currentColor"}
              opacity={i === 0 ? 1 : 0.7}
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-xl border border-warm-border bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left: Copy */}
        <div className="max-w-xl space-y-5">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
            IP Intelligence for Ayurveda
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-tight text-charcoal">
            Understand what is known.
            <br />
            <span className="text-botanical">Discover what may be novel.</span>
          </h2>

          <p className="text-sm leading-relaxed text-warm-muted max-w-md">
            Analyze Ayurveda formulations, processes and products against
            patents, research, traditional knowledge and regulatory sources.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/analysis/new"
              className={buttonVariants({
                size: "lg",
                className: "bg-forest hover:bg-forest/90 text-primary-foreground",
              })}
            >
              <Plus className="size-4 mr-1.5" />
              New Analysis
            </Link>
            <Link
              href="/prior-art"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "border-warm-border",
              })}
            >
              Explore Prior Art
              <ArrowRight className="size-4 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* Right: Reasoning diagram */}
        <ReasoningDiagram />
      </div>

      {/* Subtle decorative gradient */}
      <div className="absolute -right-20 -top-20 size-64 rounded-full bg-sage/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-10 -bottom-10 size-40 rounded-full bg-forest/3 blur-2xl pointer-events-none" />
    </motion.section>
  );
}
