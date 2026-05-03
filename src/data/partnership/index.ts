import { coreTradeData } from './coreTrade.content';
import { brandGrowthData } from './brandGrowth.content';
import { collaborativeData } from './collaborative.content';
import { institutionalData } from './institutional.content';

// ── Registry ──────────────────────────────────────────────────────

export const PARTNERSHIP_REGISTRY = {
  'core-trade': coreTradeData,
  'brand-expansion': brandGrowthData,
  collaborative: collaborativeData,
  institutional: institutionalData,
} as const;

// ── Types ──────────────────────────────────────────────────────────

export type SystemSlug = keyof typeof PARTNERSHIP_REGISTRY;

export type PartnershipSystemData = (typeof PARTNERSHIP_REGISTRY)[SystemSlug];

// ── Helpers ────────────────────────────────────────────────────────

/**
 * Get data for a partnership system by slug.
 * Returns undefined if slug is invalid — page should 404.
 *
 * FUTURE: swap this body for an API call.
 * The return type stays the same — nothing else changes.
 */
export function getPartnershipData(slug: string): PartnershipSystemData | undefined {
  if (!isSystemSlug(slug)) return undefined;
  return PARTNERSHIP_REGISTRY[slug];
}

/**
 * Type guard — confirms a string is a valid system slug.
 */
export function isSystemSlug(slug: string): slug is SystemSlug {
  return slug in PARTNERSHIP_REGISTRY;
}

/**
 * All valid system slugs — used for generateStaticParams().
 */
export const SYSTEM_SLUGS = Object.keys(PARTNERSHIP_REGISTRY) as SystemSlug[];

// ── Re-exports ─────────────────────────────────────────────────────
// Import individual datasets if needed (rare — prefer getPartnershipData)

export { coreTradeData } from './coreTrade.content';
export { brandGrowthData } from './brandGrowth.content';
export { collaborativeData } from './collaborative.content';
export { institutionalData } from './institutional.content';
