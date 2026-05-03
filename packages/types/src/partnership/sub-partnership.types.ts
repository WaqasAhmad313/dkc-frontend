export enum SubPartnershipSlug {
  // Core Trade
  DROPSHIPPING = 'dropshipping',
  CONSIGNMENT = 'consignment',
  WHOLESALE = 'wholesale',
  IMPORT_EXPORT = 'import-export',
  // Brand Expansion
  EXHIBITION = 'exhibition',
  AUCTION_BIDDING = 'auction-bidding',
  WHITE_LABEL = 'white-label',
  BRICK_MORTAR = 'brick-mortar',
  // Collaborative
  PACKAGING = 'packaging',
  DESIGN_COLLABORATION = 'design-collaboration',
  STORYTELLING_MEDIA = 'storytelling-media',
  WAREHOUSE_FULFILLMENT = 'warehouse-fulfillment',
  // Institutional
  LOGISTICS = 'logistics',
  MUSEUM_INSTITUTIONAL = 'museum-institutional',
  NGO_GOVERNMENT = 'ngo-government',
  TECHNOLOGY_PARTNERSHIP = 'technology-partnership',
}

export enum SubPartnershipStatus {
  AVAILABLE = 'available',
  LOCKED = 'locked',
  IN_REVIEW = 'in_review',
  ELIGIBLE_LATERAL = 'eligible_lateral',
  APPROVED = 'approved',
  ONBOARDING = 'onboarding',
  PLACED = 'placed',
  ACTIVE = 'active',
  PAYMENT_DUE = 'payment_due',
}

export interface SubPartnership {
  id: string;
  partnershipSystemId: string;
  name: string;
  slug: SubPartnershipSlug;
  description: string;
  bestFor: string;
  stakeholders: string[];
  kpiRules: string;
  retentionPeriodMonths: number;
  requiredPackageIds: string[];
  nextUnlockId?: string;
}
