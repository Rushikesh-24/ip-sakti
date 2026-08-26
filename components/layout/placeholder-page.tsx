"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  PlusCircle,
  FileText,
  Search,
  Database,
  Network,
  GitCompareArrows,
  FileOutput,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "plus-circle": PlusCircle,
  "file-text": FileText,
  search: Search,
  database: Database,
  network: Network,
  "git-compare-arrows": GitCompareArrows,
  "file-output": FileOutput,
  "help-circle": HelpCircle,
};

interface PlaceholderPageProps {
  icon: string;
  title: string;
  description: string;
  backAction?: boolean;
  cta?: string;
  ctaHref?: string;
}

export function PlaceholderPage({
  icon,
  title,
  description,
  backAction,
  cta,
  ctaHref = "/analysis/new",
}: PlaceholderPageProps) {
  const Icon = ICON_MAP[icon] || FileText;

  return (
    <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-3.5rem)]">
      {backAction && (
        <div className="mb-6 hidden lg:block">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium text-warm-muted hover:text-forest transition-colors"
          >
            <ChevronLeft className="mr-1 size-4" />
            Back to Dashboard
          </Link>
        </div>
      )}
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-center space-y-4"
        >
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-forest/6 text-forest">
            <Icon className="size-7" />
          </div>
          <h2 className="text-xl font-semibold text-charcoal">{title}</h2>
          <p className="text-sm text-warm-muted leading-relaxed mb-6">
            {description}
          </p>
          <div className="pt-2">
            {cta ? (
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-lg bg-forest px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-forest/90 shadow-sm"
              >
                {cta}
              </Link>
            ) : (
              <span className="inline-block text-[11px] font-medium tracking-wider uppercase text-sage/60 bg-sage/8 px-3 py-1.5 rounded-full">
                Coming in the next module
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
