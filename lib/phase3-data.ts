import { Shield, GraduationCap, Landmark, Scale } from "lucide-react";

export type SimilarityLevel = "High" | "Medium" | "Low" | "Relevant" | "Strong overlap";

export interface RetrievalSource {
  id: string;
  title: string;
  type: "Patents" | "Research" | "Traditional Knowledge" | "Regulations";
  searched: number;
  relevant: number;
  icon: any;
}

export interface GraphNode {
  id: string;
  label: string;
  type: string;
  similarity: number;
  jurisdiction: string;
  reason: string;
  keyOverlap: string;
}

export interface SearchResult {
  id: string;
  source: string;
  title: string;
  relevance: string;
  similarity: string;
  jurisdiction: string;
  keyMatch: string;
}

export const ANALYSIS_RESULTS_DEMO = {
  innovation: {
    title: "Ashwagandha Formulation",
    subtitle: "Novel Extraction Process",
    status: "Analysis Complete",
    metadata: {
      jurisdiction: "India",
      language: "English",
      type: "Demo Analysis",
    },
    summary: {
      formulation: "Ashwagandha + Turmeric",
      application: "Recovery",
      process: "Novel extraction",
    },
  },

  retrievalSummary: [
    {
      id: "patents",
      title: "PATENTS",
      type: "Patents",
      searched: 12842,
      relevant: 127,
      icon: Shield,
    },
    {
      id: "research",
      title: "RESEARCH",
      type: "Research",
      searched: 3421,
      relevant: 46,
      icon: GraduationCap,
    },
    {
      id: "tkdl",
      title: "TRADITIONAL KNOWLEDGE",
      type: "Traditional Knowledge",
      searched: 582,
      relevant: 23,
      icon: Landmark,
    },
    {
      id: "regs",
      title: "REGULATIONS",
      type: "Regulations",
      searched: 145,
      relevant: 18,
      icon: Scale,
    },
  ] as RetrievalSource[],

  graphNodes: [
    {
      id: "center",
      label: "Ashwagandha + Turmeric\nNovel Extraction",
      type: "Your Innovation",
      similarity: 100,
      jurisdiction: "India",
      reason: "Your submitted innovation.",
      keyOverlap: "N/A",
    },
    {
      id: "node-1",
      label: "Novel herbal composition",
      type: "Patent",
      similarity: 82,
      jurisdiction: "India",
      reason: "Retrieved because the document describes an extraction process involving similar botanical materials.",
      keyOverlap: "Extraction process",
    },
    {
      id: "node-2",
      label: "Extraction method",
      type: "Patent",
      similarity: 75,
      jurisdiction: "Global",
      reason: "Describes supercritical CO2 extraction methods for related botanicals.",
      keyOverlap: "Extraction technique",
    },
    {
      id: "node-3",
      label: "Ashwagandha recovery study",
      type: "Research Paper",
      similarity: 88,
      jurisdiction: "Global",
      reason: "Clinical study on Ashwagandha for muscle recovery.",
      keyOverlap: "Therapeutic application",
    },
    {
      id: "node-4",
      label: "Ashwagandha traditional use",
      type: "TKDL",
      similarity: 95,
      jurisdiction: "India",
      reason: "Classical Ayurvedic reference for Ashwagandha in Rasayana therapy.",
      keyOverlap: "Traditional use",
    },
    {
      id: "node-5",
      label: "Classical formulation reference",
      type: "Ayurveda Standard",
      similarity: 90,
      jurisdiction: "India",
      reason: "Standard references from Ayurvedic Pharmacopoeia of India.",
      keyOverlap: "Formulation ingredients",
    },
    {
      id: "node-6",
      label: "AYUSH / Patent guidance",
      type: "Regulation",
      similarity: 50,
      jurisdiction: "India",
      reason: "Guidelines for patenting Ayurvedic compositions under section 3(p).",
      keyOverlap: "Patentability criteria",
    },
  ] as GraphNode[],

  topResults: [
    {
      id: "DEMO-PAT-001",
      source: "Patent",
      title: "Herbal extraction composition",
      relevance: "High",
      similarity: "82%",
      jurisdiction: "India",
      keyMatch: "Extraction technique",
    },
    {
      id: "DEMO-RES-002",
      source: "Research",
      title: "Ashwagandha recovery study",
      relevance: "Medium",
      similarity: "76%",
      jurisdiction: "Global",
      keyMatch: "Therapeutic application",
    },
    {
      id: "DEMO-TK-003",
      source: "TKDL",
      title: "Traditional Ashwagandha use",
      relevance: "Strong overlap",
      similarity: "95%",
      jurisdiction: "India",
      keyMatch: "Traditional use",
    },
    {
      id: "DEMO-REG-004",
      source: "AYUSH Guideline",
      title: "AYUSH invention examination",
      relevance: "Relevant",
      similarity: "—",
      jurisdiction: "India",
      keyMatch: "Patent examination",
    },
    {
      id: "DEMO-RES-005",
      source: "Research",
      title: "Botanical extraction methods",
      relevance: "Medium",
      similarity: "68%",
      jurisdiction: "Global",
      keyMatch: "Extraction process",
    },
  ] as SearchResult[],

  noveltyAssessment: {
    known: [
      "Ashwagandha therapeutic use",
      "Turmeric traditional use",
      "Similar herbal formulations",
      "Existing extraction approaches",
    ],
    different: ["Specific extraction process", "Specific formulation ratio"],
    disclaimer:
      "Potential novelty identified — requires detailed prior-art and professional review.",
  },
};
