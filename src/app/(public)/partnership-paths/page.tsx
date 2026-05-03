import { Suspense } from 'react';
import type { Metadata } from 'next';
import PartnershipPathsClient from '@/components/sections/partnerships/PartnershipPathsClient';

/* ── Metadata ───────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Partnership Paths — De Koshur Crafts B2B Connect',
  description:
    'A complete catalog of structured sourcing and supply partnership models available to buyers and vendors. Clear commercial detail, entry requirements, and progression logic for every pathway.',
  keywords: [
    'Kashmir craft partnership models',
    'B2B craft sourcing paths',
    'craft vendor supply partnerships',
    'Kashmir trade entry models',
    'wholesale craft partnership',
  ],
  openGraph: {
    title: 'Partnership Paths — De Koshur Crafts B2B Connect',
    description:
      'Structured partnership models for Kashmir-origin craft trade. Choose the pathway that fits your sourcing model, scale, and market ambition.',
    type: 'website',
  },
};

export default function PartnershipPathsPage() {
  return (
    <Suspense fallback={null}>
      <PartnershipPathsClient />
    </Suspense>
  );
}
