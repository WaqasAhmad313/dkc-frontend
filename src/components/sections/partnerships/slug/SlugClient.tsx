'use client';

import { useRoleStore } from '@/store/role.store';
import type { ModelPageContent } from '@/data/partnership/models';

// ── Section imports ────────────────────────────────────────────────
import HeroSection from '@/components/sections/partnerships/slug/HeroSection';
import OverviewSection from '@/components/sections/partnerships/slug/OverviewSection';
import WorkflowSection from '@/components/sections/partnerships/slug/WorkflowSection';
import ModelDifferenceSection from '@/components/sections/partnerships/slug/ModelDifferenceSection';
import CoreCapabilitiesSection from '@/components/sections/partnerships/slug/CoreCapabilitiesSection';
import QualificationSection from '@/components/sections/partnerships/slug/QualificationSection';
import PricingSection from '@/components/sections/partnerships/slug/PricingSection';
import ComparisonSection from '@/components/sections/partnerships/slug/ComparisonSection';
import TechnologySection from '@/components/sections/partnerships/slug/TechnologySection';
import FaqSection from '@/components/sections/partnerships/slug/FaqSection';
import FinalCtaSection from '@/components/sections/partnerships/slug/FinalCtaSection';

/* ── Types ─────────────────────────────────────────────────────── */

type Role = 'buyer' | 'vendor';

interface SlugClientProps {
  data: ModelPageContent;
}

/* ── Role resolver ──────────────────────────────────────────────── */

function resolveRole(activeRole: unknown): Role {
  if (activeRole === 'buyer' || activeRole === 'vendor') return activeRole;
  return 'buyer';
}

/* ── SlugClient ─────────────────────────────────────────────────── */

export default function SlugClient({ data }: SlugClientProps) {
  const { activeRole } = useRoleStore();
  const role = resolveRole(activeRole);

  return (
    <main>
      {/* §01 — Hero */}
      <HeroSection
        data={data.heroSection}
        role={role}
        tier={data.meta.tier}
        modelLabel={data.meta.label}
        modelSystem={data.meta.system}
      />

      {/* §02 — Overview */}
      <OverviewSection
        data={data.overviewSection}
        kpiRequired={data.meta.kpiRequired}
        tier={data.meta.tier}
      />

      {/* §03 — Workflow */}
      <WorkflowSection data={data.workflowSection} role={role} system={data.meta.system} />

      {/* §04 — Model Difference */}
      <ModelDifferenceSection data={data.modelDifferenceSection} />

      {/* §05 — Core Capabilities */}
      <CoreCapabilitiesSection
        capabilitiesSection={data.capabilitiesSection}
        role={role}
      />

      {/* §06 — Qualification (merged: eligibility rules + assessment) */}
      <QualificationSection
        rulesData={data.eligibilityRulesSection}
        assessmentData={data.eligibilityAssessmentSection}
        role={role}
        modelSystem={data.meta.system}
      />

      {/* §07 — Pricing */}
      <PricingSection data={data.pricingSection} role={role} />

      {/* §08 — Comparison (optional) */}
      {'comparisonSection' in data && <ComparisonSection data={data.comparisonSection} />}

      {/* §09 — Technology (merged: technology + API integration) */}
      <TechnologySection data={data.technologySection} apiData={data.apiIntegrationSection} />

      {/* §10 — FAQ */}
      <FaqSection data={data.faqSection} />

      {/* §11 — Final CTA */}
      <FinalCtaSection data={data.finalCtaSection} role={role} />
    </main>
  );
}
