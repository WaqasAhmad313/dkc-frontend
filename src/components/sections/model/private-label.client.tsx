'use client';

import { privateLabelPage } from '@/data/models/privateLabel.content';
import { useRoleStore } from '@/store/role.store';

// ── Live section imports ──────────────────────────────────────────
import { HeroSection } from './hero-section';
import { WhyChooseSection } from './why-choose-section';
import { BrandPathSection } from './brand-path-section';
import { EligibilitySection } from './eligibility-section';
import WhatYouGetSection from './what-you-get-section';
import { StatsSection } from './stats-section';
import { ProcessKpiSection } from './process-kpi-section';
import { FastTrackPricingSection } from './fasttrack-pricing-section';
import { GrowthPathSection } from './growth-path-section';
import { FinalCTASection } from './final-cta-section';

// ── NEW SECTION imports — pending UI build ────────────────────────
import OverviewSection from './OverviewSection';
import ModelDifferenceSection from './ModelDifferenceSection';
import EligibilityAssessmentSection from './EligibilityAssessmentSection';
import ComparisonSection from './ComparisonSection';
import PlatformStrengthSection from './PlatformStrengthSection';
import FAQSection from './FAQSection';

/* ── PrivateLabelClient ─────────────────────────────────────────── */

export default function PrivateLabelClient() {
  const { activeRole } = useRoleStore();

  // ── Hero — role-resolved data ─────────────────────────────────────
  const heroBase = privateLabelPage.hero;
  const heroRoleData =
    activeRole === 'buyer' || activeRole === 'vendor' ? heroBase.roles?.[activeRole] : undefined;
  const heroData = {
    ...heroBase,
    ...(heroRoleData?.headline && { headline: heroRoleData.headline }),
    ...(heroRoleData?.description && { description: heroRoleData.description }),
    ...(heroRoleData && {
      ctas: [heroRoleData.primaryCta, heroRoleData.secondaryCta].filter(
        Boolean,
      ) as typeof heroBase.ctas,
    }),
  };
  const whyChooseData = privateLabelPage.whyChoose;
  const brandPathData = privateLabelPage.brandPath;
  const eligibilityData = privateLabelPage.eligibility;
  const whatYouGetData = privateLabelPage.whatYouGet;
  const statsData = privateLabelPage.stats;
  const processData = privateLabelPage.process;
  const kpiData = privateLabelPage.kpi;
  const fastTrackData = privateLabelPage.fastTrack;
  const pricingData = privateLabelPage.pricing;
  const growthPathData = privateLabelPage.growthPath;
  const finalCTAData = privateLabelPage.finalCTA;

  return (
    <main>
      {/* §01 — Hero */}
      <HeroSection data={heroData} />

      {/* §02 — Why Choose */}
      <WhyChooseSection data={whyChooseData} />

      {/* §03 — Model Difference */}
      {privateLabelPage.modelDifference && (
        <ModelDifferenceSection data={privateLabelPage.modelDifference} activeRole={activeRole} />
      )}

      {/* §03 — Overview */}
      {privateLabelPage.overview && (
        <OverviewSection data={privateLabelPage.overview} activeRole={activeRole} />
      )}

      {/* §04 — What You Get */}
      <WhatYouGetSection data={whatYouGetData} />

      {/* §05 — Eligibility */}
      <EligibilitySection data={eligibilityData} activeRole={activeRole} />

      {/* §06 — Brand Path */}
      <BrandPathSection data={brandPathData} activeRole={activeRole} />

      {/* §07 — Eligibility Assessment */}
      {privateLabelPage.eligibilityAssessment && (
        <EligibilityAssessmentSection
          data={privateLabelPage.eligibilityAssessment}
          activeRole={activeRole}
        />
      )}

      {/* §08 — Pricing */}
      <FastTrackPricingSection pricing={pricingData} activeRole={activeRole} />

      {/* §09 — Process / KPI / FastTrack */}
      <ProcessKpiSection
        process={processData}
        kpi={kpiData}
        fastTrack={fastTrackData}
        activeRole={activeRole}
      />

      {/* §10 — Platform Strength */}
      {privateLabelPage.platformStrength && (
        <PlatformStrengthSection data={privateLabelPage.platformStrength} />
      )}

      {/* §11 — Comparison */}
      {privateLabelPage.comparison && <ComparisonSection data={privateLabelPage.comparison} />}

      {/* §12 — Stats */}
      <StatsSection data={statsData} />

      {/* §13 — Growth Path */}
      <GrowthPathSection data={growthPathData} />

      {/* §14 — FAQ */}
      {privateLabelPage.faq && <FAQSection data={privateLabelPage.faq} />}

      {/* §15 — Final CTA */}
      <FinalCTASection data={finalCTAData} activeRole={activeRole} />
    </main>
  );
}
