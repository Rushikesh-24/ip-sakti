"use client";

import { useState } from "react";
import { Info, Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function JurisdictionPanel() {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  return (
    <div className="rounded-xl border border-warm-border bg-white shadow-sm overflow-hidden h-full flex flex-col">
      <div className="flex border-b border-warm-border">
        <button
          onClick={() => setActiveTab("india")}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold tracking-wider uppercase transition-colors",
            activeTab === "india" 
              ? "text-forest border-b-2 border-forest bg-forest/5" 
              : "text-warm-muted hover:bg-cream"
          )}
        >
          <span className="text-base">🇮🇳</span> India
        </button>
        <button
          onClick={() => setActiveTab("international")}
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-bold tracking-wider uppercase transition-colors",
            activeTab === "international" 
              ? "text-charcoal border-b-2 border-charcoal bg-charcoal/5" 
              : "text-warm-muted hover:bg-cream"
          )}
        >
          <Globe className="size-3.5" /> International
        </button>
      </div>

      <div className="flex-1 p-5 sm:p-6 bg-cream/20">
        {activeTab === "india" ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-left-2 duration-300">
            <h3 className="text-xs font-semibold text-charcoal mb-4">
              Local IP Context
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <MapPin className="size-4 text-forest shrink-0 mt-0.5" />
                <span>Indian patent framework (Sections 3(p) & 3(e))</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <MapPin className="size-4 text-forest shrink-0 mt-0.5" />
                <span>AYUSH examination guidance for formulations</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <MapPin className="size-4 text-forest shrink-0 mt-0.5" />
                <span>Traditional knowledge preservation context</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <MapPin className="size-4 text-forest shrink-0 mt-0.5" />
                <span>Biological diversity / ABS considerations (NBA approval)</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-right-2 duration-300">
            <h3 className="text-xs font-semibold text-charcoal mb-4">
              Global Treaties & Treaties
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <Globe className="size-4 text-charcoal shrink-0 mt-0.5" />
                <span>TRIPS (Trade-Related Aspects of IP Rights)</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <Globe className="size-4 text-charcoal shrink-0 mt-0.5" />
                <span>PCT (Patent Cooperation Treaty) for international filing</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <Globe className="size-4 text-charcoal shrink-0 mt-0.5" />
                <span>Nagoya Protocol on Access and Benefit-sharing</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-charcoal">
                <Globe className="size-4 text-charcoal shrink-0 mt-0.5" />
                <span>WIPO IGC on GRs, TK, and Folklore</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      <div className="p-4 bg-white border-t border-warm-border flex items-start gap-2">
        <Info className="size-4 text-warm-muted shrink-0 mt-0.5" />
        <p className="text-[11px] text-warm-muted leading-relaxed">
          {activeTab === "international" 
            ? "International requirements vary significantly by target jurisdiction." 
            : "Reviewing Indian compliance requirements is a critical first step."}
        </p>
      </div>
    </div>
  );
}
