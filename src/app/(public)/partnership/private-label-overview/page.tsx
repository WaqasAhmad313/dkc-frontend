import type { Metadata } from 'next';
import PrivateLabelOverviewClient from '@/components/sections/model/private-label-overview.client';

export const metadata: Metadata = {
  title: 'Private Label Overview',
  description: 'Private Label Partnership — overview of the pathway, pricing, and growth track.',
};

export default function PrivateLabelOverviewPage() {
  return <PrivateLabelOverviewClient />;
}
