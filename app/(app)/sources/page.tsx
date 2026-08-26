"use client";

import { useState } from "react";
import { Database, FileText, ArrowRight, ShieldCheck, Scale, Landmark, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";
import { SourceDrawer } from "@/components/report/source-drawer";
import { cn } from "@/lib/utils";

// Map types to icons
const getIconForType = (type: string) => {
  if (type.includes("PATENT")) return FileText;
  if (type.includes("AYUSH")) return ShieldCheck;
  if (type.includes("TKDL")) return Landmark;
  if (type.includes("BIODIVERSITY")) return Scale;
  return Globe;
};

export default function SourcesPage() {
  const sources = REPORT_DATA_DEMO.sources;
  const [selectedSource, setSelectedSource] = useState<any>(null);

  // Group sources by type for better layout
  const categories = Array.from(new Set(sources.map(s => s.type)));

  return (
    <>
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-forest/10 text-forest">
              <Database className="size-4" />
            </div>
            <h1 className="text-2xl font-bold text-forest">Knowledge Sources</h1>
          </div>
          <p className="text-sm text-warm-muted mt-2 max-w-2xl leading-relaxed">
            Authoritative databases, regulatory frameworks, and reference libraries used to ground IP-SHAKTI's research and provide evidence-based insights.
          </p>
        </div>

        {/* Sources Grid */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySources = sources.filter(s => s.type === category);
            
            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-sage">
                    {category}
                  </h2>
                  <div className="h-px bg-warm-border flex-1"></div>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySources.map((source) => {
                    const Icon = getIconForType(source.type);
                    return (
                      <div 
                        key={source.id}
                        className="bg-white border border-warm-border rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col group"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex size-10 items-center justify-center rounded-lg bg-cream text-warm-muted group-hover:bg-forest/10 group-hover:text-forest transition-colors">
                            <Icon className="size-5" />
                          </div>
                          <span className={cn(
                            "text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border",
                            source.status.includes("Authoritative") || source.status.includes("Official")
                              ? "bg-forest/5 text-forest border-forest/20"
                              : "bg-sage/10 text-sage border-sage/20"
                          )}>
                            {source.status}
                          </span>
                        </div>
                        
                        <h3 className="text-sm font-semibold text-charcoal mb-2 leading-snug">
                          {source.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-4 text-[11px] text-warm-muted font-medium">
                          <span>{source.jurisdiction}</span>
                          <span className="size-1 rounded-full bg-warm-border"></span>
                          <span className="truncate">{source.relevance}</span>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-warm-border/50">
                          <Button 
                            variant="ghost" 
                            className="w-full justify-between text-xs font-semibold text-charcoal hover:text-forest hover:bg-forest/5 h-8 px-2"
                            onClick={() => setSelectedSource(source)}
                          >
                            View Details
                            <ArrowRight className="size-3" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SourceDrawer 
        isOpen={!!selectedSource} 
        onClose={() => setSelectedSource(null)} 
        source={selectedSource} 
      />
    </>
  );
}
