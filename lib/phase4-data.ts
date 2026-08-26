import {
  FileText,
  Search,
  Scale,
  ShieldAlert,
  AlertTriangle,
  Info,
  CheckCircle2,
  FileSearch,
  Users
} from "lucide-react";

export const REPORT_DATA_DEMO = {
  meta: {
    title: "IP-SAKTI Analysis Report",
    subtitle: "Preliminary IP & regulatory intelligence for your innovation.",
    jurisdiction: "India",
    language: "English",
  },

  innovationSummary: {
    formulation: "Ashwagandha + Turmeric formulation",
    process: "Novel extraction method",
    application: "Recovery",
    jurisdiction: "India",
  },

  assessment: {
    heading: "Potential novelty identified",
    description:
      "Some elements of the innovation show substantial overlap with existing knowledge [1], while the specific extraction process appears less represented in the retrieved sources [2].",
    disclaimer: "Preliminary AI-assisted assessment — not a legal opinion.",
    known: [
      "Ashwagandha therapeutic applications [3]",
      "Traditional uses of Ashwagandha [3]",
      "Turmeric-related therapeutic uses [3]",
      "Similar herbal formulations [2]",
      "Existing extraction approaches [4]",
    ],
    different: [
      "Specific extraction sequence [4]",
      "Specific formulation ratio [1]",
      "Combination of process + formulation [1]",
    ],
  },

  ipRoutes: [
    {
      id: "patent",
      title: "PATENT",
      description: "Potentially relevant for:\nNovel formulation\nNovel process\nInventive technical features",
      status: "Potentially relevant",
      statusColor: "text-botanical bg-botanical/10 border-botanical/20",
    },
    {
      id: "trademark",
      title: "TRADEMARK",
      description: "Relevant for:\nBrand name\nProduct identity",
      status: "Context dependent",
      statusColor: "text-sage bg-sage/10 border-sage/20",
    },
    {
      id: "design",
      title: "DESIGN",
      description: "Relevant where:\nProduct appearance / packaging qualifies",
      status: "Context dependent",
      statusColor: "text-sage bg-sage/10 border-sage/20",
    },
    {
      id: "trade_secret",
      title: "TRADE SECRET",
      description: "Relevant for:\nConfidential processes / know-how",
      status: "Requires review",
      statusColor: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      id: "other",
      title: "OTHER / REVIEW",
      description: "GI\nCopyright\nPlant variety protection\netc. where applicable",
      status: "Requires review",
      statusColor: "text-warm-muted bg-cream border-warm-border",
    },
  ],

  risks: [
    {
      id: "tkdl",
      title: "TRADITIONAL KNOWLEDGE",
      description: "Potential overlap detected",
      status: "Review",
      icon: LandmarkIcon, // Note: We'll map icons in the component to avoid passing components in data
      statusStyle: "bg-amber-100 text-amber-800",
    },
    {
      id: "abs",
      title: "ABS / BIOLOGICAL RESOURCES",
      description: "Review applicability",
      status: "Attention",
      icon: ScaleIcon,
      statusStyle: "bg-rose-100 text-rose-700",
    },
    {
      id: "prior_art",
      title: "PRIOR ART",
      description: "Existing related material found",
      status: "Review",
      icon: FileSearchIcon,
      statusStyle: "bg-amber-100 text-amber-800",
    },
    {
      id: "regulatory",
      title: "REGULATORY CLASSIFICATION",
      description: "Requires product classification",
      status: "Informational",
      icon: ShieldAlertIcon,
      statusStyle: "bg-blue-100 text-blue-700",
    },
    {
      id: "legal",
      title: "LEGAL REVIEW",
      description: "Recommended before filing",
      status: "Informational",
      icon: ScaleIcon,
      statusStyle: "bg-forest/10 text-forest",
    },
  ],

  absChecklist: [
    { id: "abs1", label: "Identify biological resources used" },
    { id: "abs2", label: "Determine source / origin" },
    { id: "abs3", label: "Check applicable access requirements" },
    { id: "abs4", label: "Review benefit-sharing obligations" },
    { id: "abs5", label: "Document associated traditional knowledge" },
  ],

  sources: [
    {
      id: "src1",
      type: "PATENT ACT",
      title: "The Patents Act, 1970",
      relevance: "Patentability framework",
      jurisdiction: "India",
      whyRetrieved:
        "Relevant because the innovation contains potentially patent-related technical features which are subject to Sections 3(p) and 3(e) of the Act.",
      status: "Official / Authoritative",
    },
    {
      id: "src2",
      type: "AYUSH GUIDELINES",
      title: "Guidelines for Examination of AYUSH Related Inventions",
      relevance: "AYUSH invention examination",
      jurisdiction: "India",
      whyRetrieved:
        "Provides specific examination criteria for Ayurveda formulations and combinations.",
      status: "Official / Authoritative",
    },
    {
      id: "src3",
      type: "TKDL",
      title: "Traditional Knowledge Digital Library",
      relevance: "Traditional knowledge / prior-art context",
      jurisdiction: "India",
      whyRetrieved:
        "Retrieved due to the presence of Ashwagandha and Turmeric, both of which have documented traditional uses in Rasayana and healing therapies.",
      status: "Reference Database",
    },
    {
      id: "src4",
      type: "RESEARCH",
      title: "Extraction Methods for Withania Somnifera",
      relevance: "Prior-art process evaluation",
      jurisdiction: "Global",
      whyRetrieved:
        "Details existing extraction techniques which should be compared against the novel process described.",
      status: "Scientific Literature",
    },
    {
      id: "src5",
      type: "BIOLOGICAL DIVERSITY",
      title: "The Biological Diversity Act, 2002",
      relevance: "ABS Compliance",
      jurisdiction: "India",
      whyRetrieved:
        "Relevant for determining if prior approval from the National Biodiversity Authority (NBA) is required for IP application.",
      status: "Official / Authoritative",
    },
  ],

  nextSteps: [
    {
      id: "ns1",
      title: "DOCUMENT",
      description: "Record exact formulation and process details.",
      icon: FileTextIcon,
    },
    {
      id: "ns2",
      title: "SEARCH",
      description: "Perform deeper prior-art review.",
      icon: SearchIcon,
    },
    {
      id: "ns3",
      title: "REVIEW",
      description: "Check applicable AYUSH / ABS requirements.",
      icon: CheckCircle2Icon,
    },
    {
      id: "ns4",
      title: "CONSULT",
      description: "Escalate to an IP professional before filing.",
      icon: UsersIcon,
    },
  ],
};

// Dummy exports for icon mapping in components
function LandmarkIcon() {}
function ScaleIcon() {}
function FileSearchIcon() {}
function ShieldAlertIcon() {}
function FileTextIcon() {}
function SearchIcon() {}
function CheckCircle2Icon() {}
function UsersIcon() {}
