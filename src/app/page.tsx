import type { Metadata } from 'next';
import HomeClient from '@/components/sections/Home/HomeClient';

export const metadata: Metadata = {
  title:
    'De Koshur Crafts B2B Connect — Structured Partnership Access for Kashmir-Origin Craft Trade',
  description:
    'A high-trust B2B gateway where global buyers and Kashmir-origin craft vendors discover fit, enter verified pathways, and move into structured partnership environments designed for serious commercial growth.',
  keywords: [
    'Kashmir craft B2B',
    'Kashmir artisan partnership',
    'wholesale Kashmir crafts',
    'Kashmir origin trade',
    'craft vendor partnership',
    'B2B craft sourcing',
  ],
  openGraph: {
    title: 'De Koshur Crafts B2B Connect',
    description:
      'Structured partnership access for Kashmir-origin craft trade. Verified entry. Guided qualification. Protected onboarding.',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
