'use client';

import { useRoleStore, type PlatformRole } from '@/store/role.store';

import HeroSection from './HeroSection';
import EntryJourneySection from './EntryJourneySection';
import TwoMarketsSection from './TwoMarketsSection';
import PathwaysSection from './PathwaysSection';
import WhyItWorksSection from './WhyItWorksSection';
import PlacementSection from './PlacementSection';
import FinderSection from './FinderSection';
import SignalsSection from './SignalsSection';
import ClosingSection from './ClosingSections';

export default function HomeClient() {
  const { activeRole, setRole } = useRoleStore();

  return (
    <main>
      {/* §01 — Hero (dark emerald) */}
      <HeroSection activeRole={activeRole} onRoleSelect={setRole} />
      <PathwaysSection activeRole={activeRole} />
      <FinderSection activeRole={activeRole} />
      <EntryJourneySection activeRole={activeRole} />
      <TwoMarketsSection />
      <WhyItWorksSection />
      <PlacementSection />
      <SignalsSection activeRole={activeRole} />
      <ClosingSection activeRole={activeRole} />
    </main>
  );
}

export type { PlatformRole };
