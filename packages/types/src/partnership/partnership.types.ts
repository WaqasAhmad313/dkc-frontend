export enum PartnershipSystemSlug {
  CORE_TRADE = 'core-trade',
  BRAND_EXPANSION = 'brand-expansion',
  COLLABORATIVE = 'collaborative',
  INSTITUTIONAL = 'institutional',
}

export interface PartnershipSystem {
  id: string;
  name: string;
  slug: PartnershipSystemSlug;
  description: string;
  subPartnerships: import('./sub-partnership.types').SubPartnership[];
}
