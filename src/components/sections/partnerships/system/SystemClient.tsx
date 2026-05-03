'use client';

import { useRoleStore } from '@/store/role.store';
import type { PartnershipSystemData } from '@/data/partnership';

// ── Section imports ────────────────────────────────────────────────
import { HeroSection } from './HeroSection';
import { TradeModelsSection } from './TradeModelsSection';
import { MarketProblemSection } from './MarketProblemSection';
import { EligibilitySection } from './EligibilitySection';
import { TracksSection } from './TracksSection';
import { ProcessSection } from './ProcessSection';
import { JourneySection } from './JourneySection';
import { PricingSection } from './PricingSection';
import { RoleBenefitsSection } from './RoleBenefitsSection';
import { EntryPathSection } from './EntryPathSection';
import { FaqSection } from './FaqSection';
import { PartnershipCtaSection } from './PartnershipCtaSection';

/* ── Types ─────────────────────────────────────────────────────── */

type PartnershipRole = 'buyer' | 'vendor';

interface SystemClientProps {
  data: PartnershipSystemData;
}

/* ── Role resolver ──────────────────────────────────────────────── */

function resolveRole(activeRole: unknown): PartnershipRole {
  if (activeRole === 'buyer' || activeRole === 'vendor') return activeRole;
  return 'buyer'; // default fallback
}

/* ── SystemClient ───────────────────────────────────────────────── */

export default function SystemClient({ data }: SystemClientProps) {
  const { activeRole, setRole } = useRoleStore();
  const role = resolveRole(activeRole);

  function handleRoleSwitch() {
    setRole(role === 'buyer' ? 'vendor' : 'buyer');
  }

  return (
    <main>
      {/* §01 — Hero */}
      <HeroSection
        data={data.heroSection}
        role={role}
        systemLabel={data.meta.pageLabel}
        tier={data.meta.tier}
        modelCards={data.tradeModelsSection.cards}
      />

      {/* §02 — Trade Models */}
      <TradeModelsSection data={data.tradeModelsSection} role={role} />

      {/* §03 — Market Problem */}
      <MarketProblemSection data={data.marketProblemSection} role={role} />

      {/* §04 — Eligibility */}
      <EligibilitySection data={data.eligibilitySection} role={role} />

      {/* §05 — Tracks */}
      <TracksSection data={data.tracksSection} tier={data.meta.tier} />

      {/* §06 — Process */}
      <ProcessSection data={data.processSection} />

      {/* §07 — Journey */}
      <JourneySection data={data.journeySection} />

      {/* §08 — Pricing */}
      <PricingSection data={data.pricingSection} />

      {/* §09 — Role Benefits */}
      <RoleBenefitsSection data={data.roleBenefitsSection} />

      {/* §10 — Entry Path */}
      <EntryPathSection data={data.entryPathSection} />

      {/* §11 — FAQ */}
      <FaqSection data={data.faqSection} />

      {/* §12 — CTA */}
      <PartnershipCtaSection
        role={role}
        systemLabel={data.meta.pageLabel}
        onRoleSwitch={handleRoleSwitch}
      />
    </main>
  );
}
