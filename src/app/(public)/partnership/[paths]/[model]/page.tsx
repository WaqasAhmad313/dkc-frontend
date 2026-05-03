import type { Metadata } from 'next';
import PrivateLabelClient from '@/components/sections/model/private-label.client';

/* ── Static params — stub, populate when registry exists ────────── */

export function generateStaticParams() {
  // TODO: map from a model registry (same pattern as SYSTEM_SLUGS)
  return [];
}

/* ── Metadata ───────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paths: string; model: string }>;
}): Promise<Metadata> {
  const { model } = await params;
  // TODO: resolve model data from registry and return real title/description
  return {
    title: `${model} — De Koshur Crafts B2B Connect`,
  };
}

/* ── Page ───────────────────────────────────────────────────────── */

export default async function ModelPage({
  params,
}: {
  params: Promise<{ paths: string; model: string }>;
}) {
  const { model } = await params;

  // TODO: replace with registry lookup + notFound() guard, e.g.:
  // const data = getModelData(model);
  // if (!data) notFound();

  /*
   * Data will be fetched server-side and passed as a prop to the client.
   * When moving to API/CMS: replace the lookup here only.
   * PrivateLabelClient and all sections stay untouched.
   */
  return <PrivateLabelClient />;
}
