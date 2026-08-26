"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function AbsChecklist() {
  const items = REPORT_DATA_DEMO.absChecklist;
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      const nextCompletedCount = Object.values(next).filter(Boolean).length;
      
      if (nextCompletedCount === items.length && completedCount !== items.length) {
        toast.success("Checklist progress saved", {
          description: "All compliance pointers reviewed.",
        });
      }
      
      return next;
    });
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className="rounded-xl border border-warm-border bg-white p-5 shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage">
          ABS Compliance Pointer
        </h2>
        <span className="text-[10px] font-medium text-warm-muted">
          {completedCount} / {items.length}
        </span>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-cream rounded-full mb-5 overflow-hidden">
        <div 
          className="h-full bg-sage transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 space-y-3">
        {items.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="flex items-start gap-3 w-full text-left group"
            >
              <div
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded border transition-colors mt-0.5",
                  isChecked
                    ? "bg-forest border-forest text-white"
                    : "bg-white border-warm-border text-transparent group-hover:border-sage"
                )}
              >
                <Check className="size-3.5" />
              </div>
              <span
                className={cn(
                  "text-sm transition-colors",
                  isChecked ? "text-warm-muted line-through" : "text-charcoal"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-warm-border flex items-start gap-2 text-warm-muted">
        <Info className="size-3.5 shrink-0 mt-0.5" />
        <p className="text-[10px] leading-relaxed">
          Checklist is informational and does not replace professional compliance advice from NBA authorities.
        </p>
      </div>
    </div>
  );
}
