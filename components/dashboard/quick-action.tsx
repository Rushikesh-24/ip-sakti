"use client";

import Link from "next/link";
import {
  PlusCircle,
  Search,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type { QuickAction as QuickActionData } from "@/lib/demo-data";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  "plus-circle": PlusCircle,
  search: Search,
  "message-circle": MessageCircle,
};

interface QuickActionProps {
  action: QuickActionData;
  index?: number;
}

export function QuickAction({ action, index = 0 }: QuickActionProps) {
  const Icon = ICON_MAP[action.icon] || PlusCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
      whileHover={{ scale: 1.01 }}
      className="group"
    >
      <Link
        href={action.href}
        className="flex items-center gap-4 rounded-xl border border-warm-border bg-white p-5 transition-all duration-200 hover:shadow-md hover:shadow-forest/5 hover:border-sage/30"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-forest/6 text-forest transition-colors group-hover:bg-forest/10">
          <Icon className="size-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-charcoal">
            {action.title}
          </h3>
          <p className="text-xs text-warm-muted mt-0.5">{action.description}</p>
        </div>
        <ArrowRight className="size-4 text-warm-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
      </Link>
    </motion.div>
  );
}
