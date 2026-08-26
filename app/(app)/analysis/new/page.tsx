"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  ArrowRight,
  Shield,
  Lightbulb,
  Landmark,
  Scale,
  GraduationCap,
  Sparkles,
  ChevronLeft,
  Mic,
  Square,
  Globe,
  MapPin,
} from "lucide-react";
import { DEMO_INNOVATION, LANGUAGES, JURISDICTIONS } from "@/lib/demo-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const INNOVATION_TYPES = [
  "Formulation",
  "Process",
  "Product",
  "Research / Method",
];

const SOURCE_PREVIEWS = [
  {
    id: "patents",
    label: "PATENTS",
    desc: "Existing inventions & prior art",
    icon: Shield,
  },
  {
    id: "research",
    label: "RESEARCH",
    desc: "Scientific publications",
    icon: GraduationCap,
  },
  {
    id: "tkdl",
    label: "TRADITIONAL KNOWLEDGE",
    desc: "Ayurveda / TKDL references",
    icon: Landmark,
  },
  {
    id: "regs",
    label: "REGULATIONS",
    desc: "IP & AYUSH requirements",
    icon: Scale,
  },
];

export default function NewAnalysisPage() {
  const router = useRouter();
  const [description, setDescription] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [jurisdiction, setJurisdiction] = useState<string>("india");
  const [language, setLanguage] = useState<string>("en");

  // Demo States
  const [isListening, setIsListening] = useState(false);
  const [hasUploadedImage, setHasUploadedImage] = useState(false);
  const [hasUploadedDoc, setHasUploadedDoc] = useState(false);

  // In a real app, this would be reactive to the textarea content via an API
  const showConcepts = description.length > 20 || selectedTypes.length > 0;

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    // Simulate recording for 3 seconds then setting text
    setTimeout(() => {
      setIsListening(false);
      setDescription(DEMO_INNOVATION.description);
      setSelectedTypes([...DEMO_INNOVATION.type]);
      toast.success("Voice input complete", {
        description: "Prototype simulation.",
      });
    }, 3000);
  };

  const handleImageUpload = () => {
    toast.success("Demo image uploaded", {
      description: "Image analysis is simulated in this prototype.",
    });
    setHasUploadedImage(true);
  };

  const handleDocUpload = () => {
    toast.success("Demo document uploaded", {
      description: "Document parsing is simulated in this prototype.",
    });
    setHasUploadedDoc(true);
  };

  return (
    <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">
      {/* Contextual Back Button */}
      <div className="mb-6 hidden lg:block">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm font-medium text-warm-muted hover:text-forest transition-colors"
        >
          <ChevronLeft className="mr-1 size-4" />
          Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-charcoal">
          {DEMO_INNOVATION.title}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-warm-muted">
          {DEMO_INNOVATION.subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT COLUMN: Input Workspace */}
        <div className="flex-1 space-y-8">
          <section className="rounded-xl border border-warm-border bg-white p-5 sm:p-6 shadow-sm">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-4">
              Your Innovation
            </h2>

            {/* Description Textarea */}
            <div className="space-y-2 relative">
              <label className="text-sm font-medium text-charcoal flex justify-between">
                <span>What did you create?</span>
              </label>
              
              <div className="relative">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your formulation, process, product or research innovation..."
                  className="w-full min-h-[140px] rounded-lg border border-warm-border bg-background px-4 py-3 text-sm text-charcoal placeholder:text-warm-muted/50 focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest transition-all resize-y pb-12"
                />
                
                {/* Voice & Meta Controls inside textarea */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <AnimatePresence mode="wait">
                    {isListening ? (
                      <motion.div
                        key="listening"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Button
                          size="sm"
                          variant="destructive"
                          className="h-7 text-[10px] uppercase font-bold tracking-wider"
                          onClick={() => setIsListening(false)}
                        >
                          <Square className="size-3 mr-1" />
                          Stop
                        </Button>
                        <span className="flex items-center gap-1 text-[11px] font-bold text-rose-500 animate-pulse tracking-widest uppercase">
                          <span className="size-1.5 rounded-full bg-rose-500" />
                          Listening
                        </span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs border-warm-border text-warm-muted hover:text-forest"
                          onClick={handleVoiceInput}
                        >
                          <Mic className="size-3 mr-1" />
                          Voice
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="text-[11px] text-warm-muted">
                    {description.length} characters
                  </span>
                </div>
              </div>
            </div>

            {/* Innovation Type */}
            <div className="mt-6 space-y-3">
              <label className="text-sm font-medium text-charcoal">
                Innovation type
              </label>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                {INNOVATION_TYPES.map((type) => {
                  const isSelected = selectedTypes.includes(type);
                  return (
                    <button
                      key={type}
                      onClick={() => toggleType(type)}
                      className={cn(
                        "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all",
                        isSelected
                          ? "border-forest bg-forest/5 text-forest font-medium"
                          : "border-warm-border bg-white text-warm-muted hover:border-sage hover:bg-cream"
                      )}
                    >
                      <div
                        className={cn(
                          "flex size-4 items-center justify-center rounded-full border transition-colors",
                          isSelected
                            ? "border-forest bg-forest"
                            : "border-warm-muted/30 bg-transparent"
                        )}
                      >
                        {isSelected && (
                          <CheckCircle2 className="size-3 text-white" />
                        )}
                      </div>
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Attachments (Demo) */}
            <div className="mt-8 space-y-3">
              <label className="text-sm font-medium text-charcoal">
                Add supporting material
              </label>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDocUpload}
                  className="flex items-center gap-2 rounded-lg border border-warm-border border-dashed bg-cream/50 px-4 py-2.5 text-sm font-medium text-warm-muted hover:bg-cream hover:text-charcoal transition-colors group"
                >
                  <Upload className="size-4 text-sage group-hover:text-forest transition-colors" />
                  Upload Document
                </button>
                <button
                  onClick={handleImageUpload}
                  className="flex items-center gap-2 rounded-lg border border-warm-border border-dashed bg-cream/50 px-4 py-2.5 text-sm font-medium text-warm-muted hover:bg-cream hover:text-charcoal transition-colors group"
                >
                  <ImageIcon className="size-4 text-sage group-hover:text-forest transition-colors" />
                  Add Image
                </button>
              </div>
              <p className="text-[11px] text-warm-muted">
                Accepted: PDF, DOCX, PNG, JPG
              </p>

              {/* Demo Uploaded Files */}
              <div className="flex flex-col gap-2 mt-3">
                {hasUploadedDoc && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 rounded-lg border border-warm-border bg-white p-3 w-fit">
                    <div className="flex size-8 items-center justify-center rounded bg-forest/10 text-forest">
                      <FileText className="size-4" />
                    </div>
                    <div className="flex flex-col pr-4">
                      <span className="text-xs font-medium text-charcoal">Research_Document.pdf</span>
                      <span className="text-[10px] text-warm-muted">2.4 MB • Uploaded</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[9px] font-bold tracking-wider text-sage bg-sage/10 px-1.5 rounded uppercase">Demo Input</span>
                    </div>
                  </motion.div>
                )}
                {hasUploadedImage && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 rounded-lg border border-warm-border bg-white p-3 w-fit">
                    <div className="flex size-8 items-center justify-center rounded bg-forest/10 text-forest">
                      <ImageIcon className="size-4" />
                    </div>
                    <div className="flex flex-col pr-4">
                      <span className="text-xs font-medium text-charcoal">formulation_diagram.png</span>
                      <span className="text-[10px] text-warm-muted">1.1 MB • Uploaded</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[9px] font-bold tracking-wider text-sage bg-sage/10 px-1.5 rounded uppercase">Demo Input</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          <section className="grid sm:grid-cols-2 gap-4">
            {/* Jurisdiction */}
            <div className="rounded-xl border border-warm-border bg-white p-5 sm:p-6 shadow-sm space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">
                  Where do you want to explore protection?
                </label>
                <p className="text-[11px] text-warm-muted leading-relaxed">
                  IP-SAKTI keeps national and international guidance separate.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                {JURISDICTIONS.map((j) => (
                  <button
                    key={j.value}
                    onClick={() => {
                      setJurisdiction(j.value);
                      toast.success(`Jurisdiction set to ${j.label}`);
                    }}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all text-left",
                      jurisdiction === j.value
                        ? "border-forest bg-forest/5 text-forest font-medium"
                        : "border-warm-border bg-white text-warm-muted hover:border-sage hover:bg-cream"
                    )}
                  >
                    {j.icon === "globe" ? (
                      <Globe className="size-4" />
                    ) : (
                      <MapPin className="size-4" />
                    )}
                    {j.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div className="rounded-xl border border-warm-border bg-white p-5 sm:p-6 shadow-sm space-y-3">
              <label className="text-sm font-medium text-charcoal">
                Response Language
              </label>
              <div className="flex flex-col gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.value}
                    onClick={() => {
                      setLanguage(l.value);
                      toast.success(`Language set to ${l.label}`);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-lg border px-3 py-2.5 text-sm transition-all text-left",
                      language === l.value
                        ? "border-forest bg-forest/5 text-forest font-medium"
                        : "border-warm-border bg-white text-warm-muted hover:border-sage hover:bg-cream"
                    )}
                  >
                    {l.label}
                    {language === l.value && (
                      <CheckCircle2 className="size-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Live Understanding */}
        <div className="lg:w-[380px] xl:w-[420px] shrink-0">
          <div className="sticky top-20 rounded-xl border border-warm-border bg-cream/30 p-5 sm:p-6 shadow-sm overflow-hidden relative">
            <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sage mb-1 flex items-center gap-2">
              <Sparkles className="size-3.5 text-botanical" />
              IP-SAKTI Understands
            </h2>
            <p className="text-[10px] text-warm-muted mb-6">
              Preliminary concept mapping
            </p>

            {/* Concept Mapping */}
            <div className="space-y-5 min-h-[160px]">
              {showConcepts ? (
                Object.entries(DEMO_INNOVATION.concepts).map(
                  ([category, tags], i) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="space-y-1.5"
                    >
                      <h3 className="text-[10px] font-semibold text-warm-muted tracking-wider uppercase">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-white border border-forest/10 px-2 py-1 text-xs font-medium text-forest shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                )
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-warm-muted/50 italic py-8 text-center">
                  Waiting for description... <br/> Try clicking the Voice button or typing.
                </div>
              )}
            </div>

            <Separator className="my-6 bg-warm-border" />

            {/* Research Preview */}
            <div>
              <h3 className="text-[10px] font-semibold text-warm-muted tracking-wider mb-3">
                WHAT WE'LL INVESTIGATE
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {SOURCE_PREVIEWS.map((src, i) => (
                  <motion.div
                    key={src.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 rounded-lg bg-white border border-warm-border p-2.5 shadow-sm"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded bg-cream text-warm-muted">
                      <src.icon className="size-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-bold tracking-wider text-charcoal">
                        {src.label}
                      </span>
                      <span className="text-[10px] text-warm-muted truncate">
                        {src.desc}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Analysis Summary & CTA */}
            <div className="mt-8 pt-6 border-t border-warm-border">
              <h3 className="text-xs font-semibold text-charcoal mb-1">
                Ready for analysis
              </h3>
              <p className="text-[11px] text-warm-muted mb-5 leading-relaxed">
                Your innovation will be compared across Patents, Research,
                Traditional Knowledge, and Regulatory sources.
              </p>
              
              <Link
                href={`/analysis/${DEMO_INNOVATION.id}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full justify-between bg-forest hover:bg-forest/90 text-primary-foreground shadow-md group transition-all"
                )}
              >
                <span className="font-medium">Analyze Innovation</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -right-12 -top-12 size-32 rounded-full bg-forest/3 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div className="h-12" />
    </div>
  );
}
