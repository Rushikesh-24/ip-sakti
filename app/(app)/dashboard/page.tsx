import { Hero } from "@/components/dashboard/hero";
import { AnalysisCard } from "@/components/dashboard/analysis-card";
import { QuickAction } from "@/components/dashboard/quick-action";
import { SourceStrip } from "@/components/dashboard/source-strip";
import { DEMO_ANALYSES, QUICK_ACTIONS } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 p-4 sm:p-6 lg:p-8">
      {/* Hero */}
      <Hero />

      {/* Continue Your Research */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-charcoal">
              Continue Your Research
            </h2>
            <p className="text-xs text-warm-muted mt-0.5">
              Recent analyses and ongoing work
            </p>
          </div>
          <span className="text-[10px] font-medium tracking-wider uppercase text-sage/60 bg-sage/8 px-2.5 py-1 rounded-full">
            Demo Workspace
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DEMO_ANALYSES.map((analysis, i) => (
            <AnalysisCard key={analysis.id} analysis={analysis} index={i} />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold text-charcoal">
          Start with an action
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_ACTIONS.map((action, i) => (
            <QuickAction key={action.id} action={action} index={i} />
          ))}
        </div>
      </section>

      {/* Source Strip */}
      <SourceStrip />

      {/* Bottom padding */}
      <div className="h-4" />
    </div>
  );
}
