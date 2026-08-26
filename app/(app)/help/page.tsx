"use client";

import { useState } from "react";
import { HelpCircle, Search, ChevronDown, MessageSquare } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HELP_SECTIONS = [
  {
    title: "GETTING STARTED",
    items: [
      {
        question: "How to start an innovation analysis",
        answer: "Navigate to the 'New Analysis' page and describe your Ayurveda formulation, process, or product. Our AI will automatically extract key concepts."
      },
      {
        question: "Understanding the analysis workflow",
        answer: "The workflow proceeds from describing the innovation to extracting concepts, running automated prior-art retrieval, mapping the knowledge graph, and generating a preliminary IP report."
      },
      {
        question: "Using jurisdiction selection",
        answer: "You can change the target jurisdiction from the top navigation bar. This updates the regulatory databases and frameworks (e.g. AYUSH guidelines in India) applied to your analysis."
      }
    ]
  },
  {
    title: "RESEARCH",
    items: [
      {
        question: "How prior-art retrieval works",
        answer: "IP-SHAKTI uses hybrid search across structured databases (patents, TKDL, academic journals) to find existing knowledge matching your extracted concepts."
      },
      {
        question: "Understanding the evidence graph",
        answer: "The knowledge graph visually connects your innovation (center) to retrieved evidence nodes. The connection line style indicates relevance/similarity score."
      },
      {
        question: "Reading similarity and relevance",
        answer: "High relevance means substantial overlap with your concepts. Medium/Low relevance indicates partial matches or tangential context."
      }
    ]
  },
  {
    title: "IP GUIDANCE",
    items: [
      {
        question: "Understanding potential IP routes",
        answer: "The system assesses if your innovation might be suited for Patents (novel tech), Trade Secrets (processes), or if it falls under traditional knowledge exemptions."
      },
      {
        question: "Traditional knowledge and TKDL",
        answer: "If overlap with the Traditional Knowledge Digital Library (TKDL) is found, the system will flag potential non-patentability under relevant national laws (e.g. Section 3(p) in India)."
      },
      {
        question: "ABS compliance pointers",
        answer: "The system provides an initial Access and Benefit Sharing (ABS) checklist to remind innovators about obligations when using national biological resources."
      }
    ]
  },
  {
    title: "REPORTS",
    items: [
      {
        question: "Understanding citations",
        answer: "Citations like [1] or [2] refer to specific sources retrieved during analysis. Click on a citation to view the detailed source document in the side drawer."
      },
      {
        question: "Exporting reports",
        answer: "From the Reports page, click the download icon on any completed report card to generate a PDF summary of the IP intelligence."
      },
      {
        question: "Requesting expert review",
        answer: "Since IP-SHAKTI provides automated preliminary analysis, we strongly recommend sharing the generated report with a qualified IP attorney before making filing decisions."
      }
    ]
  }
];

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-warm-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left font-medium text-charcoal hover:text-forest transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={cn("size-4 text-warm-muted transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-sm text-warm-muted leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
      <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex size-12 items-center justify-center rounded-xl bg-forest/10 text-forest mb-4">
            <HelpCircle className="size-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-forest mb-3">IP-SHAKTI Help Center</h1>
          <p className="text-sm sm:text-base text-warm-muted max-w-xl leading-relaxed">
            Learn how to use IP-SHAKTI for Ayurveda IP research, understand the analysis workflow, and interpret regulatory intelligence.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-warm-muted" />
          <Input 
            placeholder="Search help..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-base bg-white border-warm-border focus-visible:ring-forest shadow-sm rounded-xl"
          />
        </div>

        {/* Sections */}
        <div className="space-y-10 mb-12">
          {HELP_SECTIONS.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-warm-border p-6 shadow-sm">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-sage mb-4">
                {section.title}
              </h2>
              <div className="flex flex-col">
                {section.items.map((item, i) => (
                  <AccordionItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-forest/5 to-cream rounded-xl border border-warm-border p-8 text-center flex flex-col items-center">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-sage mb-3">
            Need Human Help?
          </h2>
          <p className="text-sm text-charcoal/80 mb-6 max-w-md mx-auto">
            IP-SHAKTI provides information and preliminary research support, not legal advice. For formal patent filing or legal clearance, consult an IP professional.
          </p>
          <Button className="bg-forest text-white hover:bg-forest/90">
            <MessageSquare className="size-4 mr-2" />
            Request Expert Review
          </Button>
        </div>

      </div>
  );
}
