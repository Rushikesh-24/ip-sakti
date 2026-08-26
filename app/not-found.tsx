"use client";

import { Compass, Leaf, ArrowLeft, Search } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] p-4 sm:p-6 animate-in fade-in duration-500 bg-gradient-to-b from-transparent to-cream/30">
        
        <div className="relative mb-8">
          {/* Subtle connected nodes/botanical illustration */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 animate-pulse">
            <Compass className="size-32" strokeWidth={1} />
          </div>
          <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl bg-forest text-white shadow-xl rotate-3 transition-transform hover:rotate-6">
            <Leaf className="size-10" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-forest mb-4 text-center tracking-tight">
          404
        </h1>
        
        <h2 className="text-xl font-semibold text-charcoal mb-2 text-center">
          Page not found
        </h2>
        
        <p className="text-sm sm:text-base text-warm-muted text-center max-w-md mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved. Let's get you back to your research workspace.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xs sm:max-w-none justify-center">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <Button className="w-full bg-forest text-white hover:bg-forest/90 h-11 px-8 rounded-full">
              <ArrowLeft className="size-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <Link href="/analyses" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-warm-border text-charcoal hover:text-forest hover:bg-forest/5 hover:border-forest/30 h-11 px-8 rounded-full">
              <Search className="size-4 mr-2" />
              Go to My Analyses
            </Button>
          </Link>
        </div>

      </div>
  );
}
