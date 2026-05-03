import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getModelData, getAllModelParams } from '@/data/partnership/models';
import SlugClient from '@/components/sections/partnerships/slug/SlugClient';

/* ── Static params — pre-renders all 16 model pages ────────────── */

export function generateStaticParams() {
  return getAllModelParams();
}

/* ── Metadata — dynamic per model ───────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ system: string; slug: string }>;
}): Promise<Metadata> {
  const { system, slug } = await params;
  const data = getModelData(system, slug);

  if (!data) {
    return {
      title: 'Partnership Model Not Found — De Koshur Crafts B2B Connect',
    };
  }

  return {
    title: `${data.meta.pageTitle} — De Koshur Crafts B2B Connect`,
    description: data.meta.seoDescription,
    openGraph: {
      title: `${data.meta.pageTitle} — De Koshur Crafts B2B Connect`,
      description: data.meta.seoDescription,
      type: 'website',
    },
  };
}

/* ── Page ───────────────────────────────────────────────────────── */

export default async function SlugPage({
  params,
}: {
  params: Promise<{ system: string; slug: string }>;
}) {
  const { system, slug } = await params;
  const data = getModelData(system, slug);

  // Invalid system or slug → 404
  if (!data) notFound();

  /*
   * Data is fetched server-side and passed as a prop to the client.
   * When moving to API/CMS: replace getModelData() here only.
   * SlugClient and all sections stay untouched.
   */
  return <SlugClient data={data} />;
}
