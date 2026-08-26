// Demo data constants for Phase 1
// Replace with API calls in later phases

export type AnalysisStatus = "complete" | "review_required" | "in_progress";

export interface Analysis {
  id: string;
  title: string;
  description: string;
  status: AnalysisStatus;
  noveltyInsight?: string;
  lastAnalyzed: string;
  category: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface KnowledgeSource {
  id: string;
  label: string;
  description: string;
}

export const DEMO_ANALYSES: Analysis[] = [
  {
    id: "analysis-001",
    title: "Ashwagandha Recovery Formulation",
    description: "Novel extraction process using supercritical CO₂",
    status: "complete",
    noveltyInsight: "Extraction process may be novel",
    lastAnalyzed: "Today",
    category: "Formulation",
  },
  {
    id: "analysis-002",
    title: "Turmeric-Piperine Topical Gel",
    description: "Enhanced bioavailability topical application",
    status: "review_required",
    noveltyInsight: "Combination ratio requires review",
    lastAnalyzed: "Yesterday",
    category: "Topical",
  },
  {
    id: "analysis-003",
    title: "Triphala Nanoparticle Delivery",
    description: "Nano-encapsulated traditional formulation",
    status: "in_progress",
    noveltyInsight: "Delivery mechanism under analysis",
    lastAnalyzed: "2 days ago",
    category: "Drug Delivery",
  },
];

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "qa-new",
    title: "New Analysis",
    description: "Analyze an Ayurveda innovation against prior art",
    icon: "plus-circle",
    href: "/analysis/new",
  },
  {
    id: "qa-prior-art",
    title: "Prior Art Search",
    description: "Explore similar patents & research literature",
    icon: "search",
    href: "/prior-art",
  },
  {
    id: "qa-ask",
    title: "Ask IP-SAKTI",
    description: "Ask an IP or regulatory question",
    icon: "message-circle",
    href: "/help",
  },
];

export const KNOWLEDGE_SOURCES: KnowledgeSource[] = [
  {
    id: "src-patents",
    label: "Patents",
    description: "Indian & international patent databases",
  },
  {
    id: "src-ayush",
    label: "AYUSH",
    description: "Ministry of AYUSH regulatory framework",
  },
  {
    id: "src-tkdl",
    label: "TKDL",
    description: "Traditional Knowledge Digital Library",
  },
  {
    id: "src-research",
    label: "Research",
    description: "PubMed, DHARA & peer-reviewed journals",
  },
  {
    id: "src-regulations",
    label: "Regulations",
    description: "IP law & regulatory guidelines",
  },
];

export const NAV_ITEMS = {
  main: [
    { label: "Home", href: "/dashboard", icon: "home" },
    { label: "New Analysis", href: "/analysis/new", icon: "plus" },
    { label: "My Analyses", href: "/analyses", icon: "file-text" },
    { label: "Prior Art Search", href: "/prior-art", icon: "search" },
  ],
  knowledge: [
    { label: "Sources", href: "/sources", icon: "database" },
    { label: "Knowledge Graph", href: "/knowledge-graph", icon: "network" },
    { label: "Comparisons", href: "/comparisons", icon: "git-compare-arrows" },
  ],
  output: [
    { label: "Reports", href: "/reports", icon: "file-output" },
  ],
  help: [
    { label: "Help Center", href: "/help", icon: "help-circle" },
    { label: "Team", href: "/team", icon: "users" },
  ],
} as const;

export const JURISDICTIONS = [
  { value: "india", label: "India", icon: "map-pin" },
  { value: "international", label: "International", icon: "globe" },
] as const;

export const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिन्दी" },
  { value: "mr", label: "मराठी" },
  { value: "gom", label: "कोंकणी" },
] as const;

export const DEMO_INNOVATION = {
  id: "ashwagandha-extraction",
  title: "Analyze Your Innovation",
  subtitle: "Describe your Ayurveda formulation, process or product. IP-SAKTI will identify relevant concepts and prepare a prior-art analysis.",
  description: "I developed an Ayurvedic formulation containing Ashwagandha and Turmeric using a novel extraction process for improving recovery.",
  type: ["Formulation", "Process"],
  jurisdiction: "india",
  language: "en",
  concepts: {
    "INNOVATION TYPE": ["Formulation", "Process"],
    "INGREDIENTS": ["Ashwagandha", "Turmeric"],
    "APPLICATION": ["Recovery"],
    "PROCESS": ["Novel extraction"],
  },
} as const;

export const STATUS_CONFIG: Record<
  AnalysisStatus,
  { label: string; className: string }
> = {
  complete: {
    label: "Analysis Complete",
    className: "bg-forest/10 text-forest border-forest/20",
  },
  review_required: {
    label: "Review Required",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-sage/10 text-botanical border-sage/20",
  },
};
