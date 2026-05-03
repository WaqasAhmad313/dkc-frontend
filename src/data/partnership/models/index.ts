import { DROPSHIPPING } from './core_trade/dropshipping.content';
import { CONSIGNMENT } from './core_trade/consignment.content';
import { WHOLESALE } from './core_trade/wholesale.content';
import { IMPORT_EXPORT } from './core_trade/importexport.content';
import { EXHIBITION } from './brand_expansion/exhibition.content';
import { AUCTION } from './brand_expansion/auctionBidding.content';
import { WHITE_LABEL } from './brand_expansion/whiteLabel.content';
import { BRICK_MORTAR } from './brand_expansion/brickMortar.content';
import { PACKAGING } from './collaborative/packaging.content';
import { DESIGN_COLLABORATION } from './collaborative/designCollaboration.content';
import { STORYTELLING_MEDIA } from './collaborative/storytellingMedia.content';
import { WAREHOUSING } from './collaborative/warehouse.content';
import { LOGISTICS } from './institutional/logistics.content';
import { MUSEUM } from './institutional/museumInstitutional.content';
import { NGO_GOVERNMENT } from './institutional/ngoGovernment.content';
import { TECHNOLOGY_PARTNERSHIP } from './institutional/technology.content';

// ── Registry ───────────────────────────────────────────────────────────────────
// System keys match PARTNERSHIP_REGISTRY in apps/web/src/data/partnership/index.ts.
// Note: brand_expansion model files have system: 'brand-growth' — this is a
// pre-existing data inconsistency. The routing key is 'brand-expansion'.

export const MODEL_REGISTRY = {
  'core-trade': {
    dropshipping: DROPSHIPPING,
    consignment: CONSIGNMENT,
    wholesale: WHOLESALE,
    'import-export': IMPORT_EXPORT,
  },
  'brand-expansion': {
    exhibition: EXHIBITION,
    auction: AUCTION,
    'white-label': WHITE_LABEL,
    'brick-mortar': BRICK_MORTAR,
  },
  collaborative: {
    packaging: PACKAGING,
    'design-collaboration': DESIGN_COLLABORATION,
    'storytelling-media': STORYTELLING_MEDIA,
    warehousing: WAREHOUSING,
  },
  institutional: {
    logistics: LOGISTICS,
    museum: MUSEUM,
    'ngo-government': NGO_GOVERNMENT,
    'technology-partnership': TECHNOLOGY_PARTNERSHIP,
  },
} as const;

// ── Types ──────────────────────────────────────────────────────────────────────

export type ModelSystemSlug = keyof typeof MODEL_REGISTRY;

export type ModelSlug =
  | keyof (typeof MODEL_REGISTRY)['core-trade']
  | keyof (typeof MODEL_REGISTRY)['brand-expansion']
  | keyof (typeof MODEL_REGISTRY)['collaborative']
  | keyof (typeof MODEL_REGISTRY)['institutional'];

// Union of all 16 model content types — the TypeScript contract for any model page
export type ModelPageContent =
  | typeof DROPSHIPPING
  | typeof CONSIGNMENT
  | typeof WHOLESALE
  | typeof IMPORT_EXPORT
  | typeof EXHIBITION
  | typeof AUCTION
  | typeof WHITE_LABEL
  | typeof BRICK_MORTAR
  | typeof PACKAGING
  | typeof DESIGN_COLLABORATION
  | typeof STORYTELLING_MEDIA
  | typeof WAREHOUSING
  | typeof LOGISTICS
  | typeof MUSEUM
  | typeof NGO_GOVERNMENT
  | typeof TECHNOLOGY_PARTNERSHIP;

// ── Helpers ────────────────────────────────────────────────────────────────────

/**
 * Get model content by system and slug.
 * Returns null for unknown system or slug — page should 404.
 *
 * FUTURE: swap this body for an API call.
 * The return type stays the same — nothing else changes.
 */
export function getModelData(system: string, slug: string): ModelPageContent | null {
  if (!(system in MODEL_REGISTRY)) return null;
  const systemEntry = MODEL_REGISTRY[system as ModelSystemSlug] as Record<string, ModelPageContent>;
  return systemEntry[slug] ?? null;
}

/**
 * All valid system+slug pairs — used for generateStaticParams().
 * Pre-renders all 16 model pages at build time.
 */
export function getAllModelParams(): Array<{ system: string; slug: string }> {
  return Object.entries(MODEL_REGISTRY).flatMap(([system, models]) =>
    Object.keys(models).map((slug) => ({ system, slug })),
  );
}
