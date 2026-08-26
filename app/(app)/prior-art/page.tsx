"use client";

import { useState } from "react";
import { Search, Filter, ArrowRight, ShieldAlert, FileText, FlaskConical, Landmark, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const PRIOR_ART_RESULTS = [
  {
    id: "DEMO-PAT-001",
    type: "PATENT",
    title: "Herbal extraction composition",
    description: "Composition and method for extracting active compounds from Withania somnifera using sequential solvent extraction.",
    jurisdiction: "India",
    relevance: "High",
    icon: FileText,
  },
  {
    id: "DEMO-RES-042",
    type: "RESEARCH",
    title: "Ashwagandha extraction and recovery study",
    description: "Comparative study of traditional and modern extraction techniques for maximum withanolide recovery.",
    jurisdiction: "Global",
    relevance: "Medium",
    icon: FlaskConical,
  },
  {
    id: "DEMO-TK-105",
    type: "TRADITIONAL KNOWLEDGE",
    title: "Ashwagandha traditional applications",
    description: "Ayurvedic texts describing the use of Ashwagandha roots in Rasayana therapies for vitality.",
    jurisdiction: "India",
    relevance: "High",
    icon: Landmark,
  },
  {
    id: "DEMO-REG-012",
    type: "REGULATION",
    title: "AYUSH invention examination guidance",
    description: "Guidelines for patentability of Ayurveda formulations and combinations.",
    jurisdiction: "India",
    relevance: "Medium",
    icon: Scale,
  },
];

export default function PriorArtPage() {
  const [searchQuery, setSearchQuery] = useState("Ashwagandha");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 800);
  };

  const filteredResults = PRIOR_ART_RESULTS.filter(
    (res) => sourceFilter === "All" || res.type === sourceFilter.toUpperCase()
  );

  return (
      <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-forest">Prior Art Search</h1>
          <p className="text-sm text-warm-muted mt-1 max-w-2xl">
            Explore patents, research, traditional knowledge and regulatory references relevant to your innovation.
          </p>
        </div>

        {/* Search Workspace */}
        <div className="bg-white rounded-xl border border-warm-border p-5 sm:p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-warm-muted" />
              <Input 
                placeholder="Search an invention, formulation, process or keyword..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-12 text-base bg-cream/30 border-warm-border focus-visible:ring-forest"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="h-12 px-8 bg-forest text-white hover:bg-forest/90 whitespace-nowrap"
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : (
                <>Search Prior Art <ArrowRight className="size-4 ml-2" /></>
              )}
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-warm-muted font-medium text-xs uppercase tracking-wider">Source:</span>
              <select 
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="bg-transparent border-b border-warm-border/50 pb-1 text-charcoal focus:outline-none focus:border-forest"
              >
                <option>All</option>
                <option>Patent</option>
                <option>Research</option>
                <option>Traditional Knowledge</option>
                <option>Regulation</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-warm-muted font-medium text-xs uppercase tracking-wider">Jurisdiction:</span>
              <select className="bg-transparent border-b border-warm-border/50 pb-1 text-charcoal focus:outline-none focus:border-forest">
                <option>Global (All)</option>
                <option>India</option>
                <option>WIPO</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-warm-muted font-medium text-xs uppercase tracking-wider">Mode:</span>
              <select className="bg-transparent border-b border-warm-border/50 pb-1 text-charcoal focus:outline-none focus:border-forest">
                <option>Hybrid</option>
                <option>Semantic</option>
                <option>Keyword</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-semibold text-charcoal">
                Results for "{searchQuery}"
              </h2>
              <span className="text-xs text-warm-muted font-medium">
                {filteredResults.length} matches found
              </span>
            </div>

            {filteredResults.length > 0 ? (
              filteredResults.map((result) => {
                const Icon = result.icon;
                return (
                  <div 
                    key={result.id}
                    className="bg-white border border-warm-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-forest/30 transition-all flex flex-col sm:flex-row gap-5 group"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-cream text-warm-muted shrink-0 group-hover:bg-forest/10 group-hover:text-forest transition-colors">
                      <Icon className="size-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <span className="text-[10px] font-bold tracking-wider text-sage uppercase">
                          {result.type}
                        </span>
                        <span className="text-[10px] font-bold tracking-wider text-warm-muted uppercase px-2 py-0.5 bg-cream rounded-full">
                          {result.id}
                        </span>
                        <span className="text-[10px] font-bold tracking-wider text-warm-muted uppercase px-2 py-0.5 bg-cream rounded-full">
                          {result.jurisdiction}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-charcoal mb-1 truncate group-hover:text-forest transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-warm-muted line-clamp-2">
                        {result.description}
                      </p>
                    </div>

                    <div className="flex flex-col justify-between sm:items-end shrink-0 gap-4 mt-2 sm:mt-0">
                      <span className={cn(
                        "text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider inline-flex items-center self-start sm:self-auto",
                        result.relevance === "High" 
                          ? "bg-forest/10 text-forest" 
                          : "bg-sage/10 text-sage"
                      )}>
                        {result.relevance} Relevance
                      </span>
                      <Button variant="ghost" size="sm" className="text-xs font-semibold text-charcoal hover:text-forest hover:bg-forest/5 self-start sm:self-auto px-0 sm:px-3 -ml-2 sm:ml-0">
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center p-12 text-center bg-cream/30 rounded-xl border border-warm-border border-dashed">
                <Search className="size-8 text-warm-muted/50 mb-3" />
                <h3 className="text-sm font-semibold text-charcoal mb-1">No results found</h3>
                <p className="text-sm text-warm-muted max-w-sm">
                  Try adjusting your filters or search terms.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
  );
}
