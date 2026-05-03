import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPartnershipData, SYSTEM_SLUGS, type SystemSlug } from '@/data/partnership';
import SystemClient from '@/components/sections/partnerships/system/SystemClient';

/* ── Static params — pre-renders all 4 system pages ────────────── */

export function generateStaticParams() {
  return SYSTEM_SLUGS.map((slug) => ({ system: slug }));
}

/* ── Metadata — dynamic per system ─────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ system: string }>;
}): Promise<Metadata> {
  const { system } = await params;
  const data = getPartnershipData(system);

  if (!data) {
    return {
      title: 'Partnership Not Found — De Koshur Crafts B2B Connect',
    };
  }

  return {
    title: `${data.meta.pageTitle} — De Koshur Crafts B2B Connect`,
    description: data.meta.pageDescription,
    openGraph: {
      title: `${data.meta.pageTitle} — De Koshur Crafts B2B Connect`,
      description: data.meta.pageDescription,
      type: 'website',
    },
  };
}

/* ── Page ───────────────────────────────────────────────────────── */

export default async function SystemPage({ params }: { params: Promise<{ system: string }> }) {
  const { system } = await params;
  const data = getPartnershipData(system);

  // Invalid slug → 404
  if (!data) notFound();

  /*
   * Data is fetched server-side and passed as a prop to the client.
   * When moving to API/CMS: replace getPartnershipData() here only.
   * SystemClient and all sections stay untouched.
   */
  return <SystemClient data={data} />;
}
