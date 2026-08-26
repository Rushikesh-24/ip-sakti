"use client";

import { useState, useEffect } from "react";
import { ReportHeader } from "@/components/report/report-header";
import { ReportInnovationSummary } from "@/components/report/report-innovation-summary";
import { PreliminaryAssessment } from "@/components/report/preliminary-assessment";
import { KnownVsDifferent } from "@/components/report/known-vs-different";
import { IpRouteCards } from "@/components/report/ip-route-cards";
import { JurisdictionPanel } from "@/components/report/jurisdiction-panel";
import { RiskCompliance } from "@/components/report/risk-compliance";
import { AbsChecklist } from "@/components/report/abs-checklist";
import { EvidenceSection } from "@/components/report/evidence-section";
import { NextSteps } from "@/components/report/next-steps";
import { ExpertReview } from "@/components/report/expert-review";
import { SourceDrawer } from "@/components/report/source-drawer";
import { REPORT_DATA_DEMO } from "@/lib/phase4-data";

export default function AnalysisReportPage() {
  const [selectedSource, setSelectedSource] = useState<any>(null);

  // Ensure we start at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenSource = (sourceId: string) => {
    const source = REPORT_DATA_DEMO.sources.find((s) => s.id === sourceId);
    if (source) {
      setSelectedSource(source);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8 animate-in fade-in duration-500">
      <ReportHeader />
      
      <div className="mb-10">
        <ReportInnovationSummary />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="lg:w-4/12">
          <PreliminaryAssessment onCitationClick={handleOpenSource} />
        </div>
        <div className="lg:w-8/12">
          <KnownVsDifferent onCitationClick={handleOpenSource} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="lg:w-1/3">
          <IpRouteCards />
        </div>
        <div className="lg:w-2/3 flex flex-col gap-6">
          <JurisdictionPanel />
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <RiskCompliance />
            </div>
            <div className="flex-1">
              <AbsChecklist />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <EvidenceSection onOpenSource={handleOpenSource} />
      </div>

      <div className="mb-10">
        <NextSteps />
      </div>

      <div className="mb-12">
        <ExpertReview />
      </div>

      <SourceDrawer
        source={selectedSource}
        isOpen={!!selectedSource}
        onClose={() => setSelectedSource(null)}
      />
    </div>
  );
}
