"use client";

import { X, ExternalLink, ShieldAlert, BookOpen, Database, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { toast } from "sonner";

interface SourceDrawerProps {
  source: any;
  isOpen: boolean;
  onClose: () => void;
}

export function SourceDrawer({ source, isOpen, onClose }: SourceDrawerProps) {
  if (!source) return null;

  // Render an appropriate icon based on the source type text
  const getIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes("patent") || t.includes("act")) return <ShieldAlert className="size-8 text-forest" />;
    if (t.includes("tkdl")) return <Database className="size-8 text-forest" />;
    if (t.includes("research")) return <BookOpen className="size-8 text-forest" />;
    return <FileText className="size-8 text-forest" />;
  };

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full sm:max-w-md p-0 overflow-y-auto border-l-warm-border">
        {/* Custom Header Area */}
        <div className="bg-cream/30 p-6 border-b border-warm-border relative">
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 outline-none">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
          
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex size-14 items-center justify-center rounded-xl bg-white border border-warm-border shadow-sm">
              {getIcon(source.type)}
            </div>
            
            <div>
              <span className="text-[10px] font-bold tracking-wider text-sage uppercase">
                {source.type}
              </span>
              <SheetTitle className="text-xl font-semibold text-charcoal mt-1">
                {source.title}
              </SheetTitle>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-8">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-warm-muted uppercase tracking-wider">
                Jurisdiction
              </span>
              <div className="text-sm font-medium text-charcoal">
                {source.jurisdiction}
              </div>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-warm-muted uppercase tracking-wider">
                Source Status
              </span>
              <div className="inline-flex items-center rounded-md bg-sage/10 px-2.5 py-0.5 text-xs font-medium text-sage">
                {source.status}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold text-warm-muted uppercase tracking-wider">
              Relevance
            </span>
            <div className="text-sm text-charcoal font-medium">
              {source.relevance}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold text-warm-muted uppercase tracking-wider">
              Why Retrieved
            </span>
            <div className="rounded-lg bg-cream/50 p-4 border border-warm-border text-sm text-charcoal leading-relaxed">
              "{source.whyRetrieved}"
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="p-6 border-t border-warm-border mt-auto flex flex-col gap-3">
          <div className="flex gap-3">
            <Button className="flex-1 bg-forest hover:bg-forest/90 text-primary-foreground gap-2">
              Open Document
              <ExternalLink className="size-4" />
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-forest/20 text-forest hover:bg-forest/5 gap-2"
              onClick={() => toast.success(`"${source.title}" added to report`)}
            >
              Add to Report
            </Button>
          </div>
          <p className="text-[10px] text-center text-warm-muted mt-1">
            Prototype demo: external links are disabled.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
