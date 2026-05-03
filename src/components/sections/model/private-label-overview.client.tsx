'use client';

import { privateLabelPage } from '@/data/models/privateLabel.content';
import { useRoleStore } from '@/store/role.store';

import { HeroSection } from './hero-section';
import { WhyChooseSection } from './why-choose-section';
import { BrandPathSection } from './brand-path-section';
import { EligibilitySection } from './eligibility-section';
import { StatsSection } from './stats-section';
import { ProcessKpiSection } from './process-kpi-section';
import { FastTrackPricingSection } from './fasttrack-pricing-section';
import { GrowthPathSection } from './growth-path-section';
import { FinalCTASection } from './final-cta-section';

export default function PrivateLabelOverviewClient() {
  const { activeRole } = useRoleStore();

  // Hero — role-resolved (same pattern as main client)
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

  return (
    <main>
      {/* §01 — Hero */}
      <HeroSection data={heroData} />

      {/* §02 — Why Choose */}
      <WhyChooseSection data={privateLabelPage.whyChoose} />

      {/* §03 — Brand Path */}
      <BrandPathSection data={privateLabelPage.brandPath} activeRole={activeRole} />

      {/* §04 — Eligibility */}
      <EligibilitySection data={privateLabelPage.eligibility} activeRole={activeRole} />

      {/* §05 — Stats */}
      <StatsSection data={privateLabelPage.stats} />

      {/* §06 — Process / KPI / FastTrack */}
      <ProcessKpiSection
        process={privateLabelPage.process}
        kpi={privateLabelPage.kpi}
        fastTrack={privateLabelPage.fastTrack}
        activeRole={activeRole}
      />

      {/* §07 — Pricing */}
      <FastTrackPricingSection pricing={privateLabelPage.pricing} activeRole={activeRole} />

      {/* §08 — Growth Path */}
      <GrowthPathSection data={privateLabelPage.growthPath} />

      {/* §09 — Final CTA */}
      <FinalCTASection data={privateLabelPage.finalCTA} activeRole={activeRole} />
    </main>
  );
}
