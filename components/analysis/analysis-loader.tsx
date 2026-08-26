"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, CheckCircle2, Loader2 } from "lucide-react";

const LOADING_STEPS = [
  "Understanding formulation",
  "Identifying key concepts",
  "Searching patents",
  "Searching research",
  "Checking traditional knowledge",
  "Comparing retrieved evidence",
  "Building evidence graph",
];

interface AnalysisLoaderProps {
  onComplete: () => void;
}

export function AnalysisLoader({ onComplete }: AnalysisLoaderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Progress through steps quickly (total ~2 seconds)
    const stepDuration = 2000 / LOADING_STEPS.length;
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= LOADING_STEPS.length) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // slight delay before unmounting
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ivory/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-sm rounded-2xl border border-warm-border bg-white p-8 shadow-xl"
      >
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex size-12 items-center justify-center rounded-xl bg-forest text-white">
            <Leaf className="size-6 animate-pulse" />
          </div>
          
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-charcoal">
              Analyzing Innovation...
            </h2>
            <p className="text-xs text-warm-muted">
              Running AI research pipeline
            </p>
          </div>

          <div className="w-full space-y-3 text-left">
            {LOADING_STEPS.map((step, idx) => {
              const isCompleted = currentStep > idx;
              const isCurrent = currentStep === idx;
              const isPending = currentStep < idx;

              return (
                <div key={step} className="flex items-center gap-3 text-sm">
                  {isCompleted ? (
                    <CheckCircle2 className="size-4 text-forest" />
                  ) : isCurrent ? (
                    <Loader2 className="size-4 text-botanical animate-spin" />
                  ) : (
                    <div className="size-4 rounded-full border-2 border-warm-border" />
                  )}
                  <span
                    className={
                      isCompleted
                        ? "text-charcoal"
                        : isCurrent
                        ? "text-botanical font-medium"
                        : "text-warm-muted"
                    }
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
