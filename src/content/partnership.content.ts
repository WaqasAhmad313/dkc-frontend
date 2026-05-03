/**
 * Partnership Paths Content + Frontend Logic
 * ---------------------------------------------------------------------------
 * FILE LOCATION:
 *   apps/web/src/content/partnership.content.ts
 *
 * NOTE:
 * This page has NO default role state.
 * It is rendered only for:
 *   /buyer/partnership-paths
 *   /vendor/partnership-paths
 *
 * Role must come from route params or page-level loader.
 * ---------------------------------------------------------------------------
 *
 * SECTION ORDER (updated):
 *   §01 — Hero
 *   §02 — Role Context Banner
 *   §03 — Catalogue  (filters + card grid + comparison — combined)
 *   §04 — Pathway Systems
 *   §05 — Entry Recommender
 *   §06 — Process Strip
 *   §07 — Why These Paths Exist
 *   §08 — Final CTA
 * ---------------------------------------------------------------------------
 */

import { PUBLIC_ROUTES } from '@dkc/constants';

/* -------------------------------------------------------------------------- */
/* CORE TYPES                                                                 */
/* -------------------------------------------------------------------------- */

export type Role = 'buyer' | 'vendor';

export type PathwayId = 'core-trade' | 'brand-expansion' | 'collaborative' | 'institutional';

export type EntryRequirement = 'low' | 'moderate' | 'advanced';
export type RiskLevel = 'low' | 'balanced' | 'high';
export type ProgressionSpeed = 'fast' | 'steady' | 'long-term';
export type ReadinessLevel = 'early' | 'market-ready' | 'export-ready' | 'scale-ready';
export type ScaleLevel = 'small-batch' | 'stable' | 'medium-scale' | 'high-volume';

export interface Cta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface RoleOnlyContent<T> {
  buyer: T;
  vendor: T;
}

export interface BuyerCriteria {
  buyerType: BuyerType;
  primaryGoal: BuyerGoal;
  riskComfort: BuyerRiskComfort;
  readiness: BuyerReadiness;
}

export interface VendorCriteria {
  vendorType: VendorType;
  primaryGoal: VendorGoal;
  readiness: ReadinessLevel;
  capacity: ScaleLevel;
}

export type BuyerType =
  | 'retailer'
  | 'distributor'
  | 'online-store'
  | 'institution'
  | 'interior-designer'
  | 'corporate-purchaser'
  | 'hospitality-buyer'
  | 'fashion-brand';

export type VendorType =
  | 'artisan'
  | 'workshop'
  | 'craft-business'
  | 'exporter'
  | 'manufacturer'
  | 'cooperative';

export type BuyerGoal =
  | 'test-demand'
  | 'source-for-retail'
  | 'bulk-scale'
  | 'private-label'
  | 'institutional-procurement'
  | 'creative-collaboration';

export type VendorGoal =
  | 'global-exposure'
  | 'retail-placement'
  | 'repeat-wholesale-demand'
  | 'export-entry'
  | 'private-label-production'
  | 'creative-collaboration';

export type BuyerRiskComfort = 'low-risk' | 'moderate-commitment' | 'large-scale-trade';

export type BuyerReadiness = 'exploring' | 'clear-sourcing-plan' | 'trade-ready';

export interface CompareRow {
  label: string;
  buyerValue: string;
  vendorValue: string;
}

export interface PartnershipCard {
  slug: string;
  label: string;
  pathway: PathwayId;
  tags: string[];

  metadata: {
    entryRequirement: EntryRequirement;
    riskLevel: RiskLevel;
    progressionSpeed: ProgressionSpeed;
    buyerFit: BuyerType[];
    buyerGoals: BuyerGoal[];
    vendorFit: VendorType[];
    vendorGoals: VendorGoal[];
    readinessLevels: ReadinessLevel[];
    capacityFit: ScaleLevel[];
    recommendedSortWeight: number;
    scalePotentialWeight: number;
    institutionalWeight: number;
  };

  buyer: {
    headline: string;
    description: string;
    bestFor: string[];
    keyRequirement: string;
    package: string;
    progressionNote: string;
    compare: CompareRow[];
    ctaLabel: string;
  };

  vendor: {
    headline: string;
    description: string;
    bestFor: string[];
    keyRequirement: string;
    package: string;
    progressionNote: string;
    compare: CompareRow[];
    ctaLabel: string;
  };
}

export interface BuyerFilterState {
  buyerType?: BuyerType;
  entryRequirement?: EntryRequirement;
  riskLevel?: RiskLevel;
  primaryGoal?: BuyerGoal;
  progressionSpeed?: ProgressionSpeed;
  sortBy?: 'recommended' | 'low-risk' | 'scale-potential' | 'institutional';
}

export interface VendorFilterState {
  vendorType?: VendorType;
  entryRequirement?: EntryRequirement;
  readinessLevel?: ReadinessLevel;
  primaryGoal?: VendorGoal;
  progressionSpeed?: ProgressionSpeed;
  sortBy?: 'recommended' | 'easy-entry' | 'scale-potential' | 'institutional';
}

/* -------------------------------------------------------------------------- */
/* SECTION 1 — HERO                                                           */
/* -------------------------------------------------------------------------- */

export const partnershipHero = {
  shared: {
    headline: 'Structured Partnership Models. Built for Real Trade.',
  },

  roles: {
    buyer: {
      sectionLabel: 'Buyer Partnership Paths',
      subheading:
        'A complete catalog of sourcing and trade partnership options available to buyers with clear commercial detail, entry requirements, and progression logic.',
      supportLine: 'Choose the pathway that fits your sourcing model, scale, and market ambition.',
      ctas: [
        {
          label: 'Start Buyer Application',
          href: PUBLIC_ROUTES.APPLY + '?role=buyer',
          variant: 'primary' as const,
        },
        {
          label: 'Book Buyer Consultation',
          href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=buyer',
          variant: 'secondary' as const,
        },
      ],
    },
    vendor: {
      sectionLabel: 'Vendor Partnership Paths',
      subheading:
        'A complete catalog of supply, export, and trade partnership options available to vendors with clear commercial detail, entry requirements, and progression logic.',
      supportLine: 'Choose the pathway that fits your readiness, capacity, and growth direction.',
      ctas: [
        {
          label: 'Start Vendor Application',
          href: PUBLIC_ROUTES.APPLY + '?role=vendor',
          variant: 'primary' as const,
        },
        {
          label: 'Book Vendor Consultation',
          href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=vendor',
          variant: 'secondary' as const,
        },
      ],
    },
  },
} as const;

/* -------------------------------------------------------------------------- */
/* SECTION 2 — ROLE CONTEXT BANNER                                            */
/* -------------------------------------------------------------------------- */

export const roleContextBanner: RoleOnlyContent<{
  title: string;
  body: string;
  switchLabel: string;
}> = {
  buyer: {
    title: 'Buyer View Active',
    body: 'You are viewing partnership paths from the buyer perspective — sourcing, procurement, market access, and commercial expansion.',
    switchLabel: 'Switch to Vendor View',
  },
  vendor: {
    title: 'Vendor View Active',
    body: 'You are viewing partnership paths from the vendor perspective — supply, export, market entry, and structured commercial growth.',
    switchLabel: 'Switch to Buyer View',
  },
};

/* -------------------------------------------------------------------------- */
/* SECTION 3 — CATALOGUE                                                      */
/* (Filters + Card Grid + Comparison — unified section)                       */
/* -------------------------------------------------------------------------- */

/**
 * catalogueSection owns all content for the unified catalogue experience:
 *
 *   filters     — 4-dropdown filter bar (role-specific)
 *   sort        — sort strip options (role-specific)
 *   comparison  — comparison panel config (shared selectionLimit + compareFields)
 *
 * The card data lives in subPartnershipCards below.
 * Filter/sort/comparison logic functions are exported at the bottom of this file.
 */
export const catalogueSection: RoleOnlyContent<{
  sectionLabel: string;
  headline: string;
  intro: string;
  filters: {
    id: string;
    label: string;
    helpText: string;
    options: { label: string; value: string }[];
  }[];
  sort: {
    id: string;
    label: string;
    helpText: string;
    options: { label: string; value: string }[];
  };
  comparison: {
    triggerLabel: string;
    panelHeadline: string;
    panelIntro: string;
    compareFields: string[];
    helperText: string;
    selectionLimit: number;
    clearLabel: string;
  };
}> = {
  buyer: {
    sectionLabel: 'Partnership Catalogue',
    headline: 'Find and compare the sourcing model that fits your business',
    intro:
      'Filter paths by your buyer type, entry preference, risk comfort, and objective. Select up to three to compare side by side.',
    filters: [
      {
        id: 'buyerType',
        label: 'Buyer Type',
        helpText: 'What type of buying business do you operate?',
        options: [
          { label: 'Retailer', value: 'retailer' },
          { label: 'Distributor', value: 'distributor' },
          { label: 'Online Store', value: 'online-store' },
          { label: 'Institution', value: 'institution' },
          { label: 'Interior Designer', value: 'interior-designer' },
          { label: 'Corporate Purchaser', value: 'corporate-purchaser' },
          { label: 'Hospitality Buyer', value: 'hospitality-buyer' },
          { label: 'Fashion Brand', value: 'fashion-brand' },
        ],
      },
      {
        id: 'entryRequirement',
        label: 'Entry Requirement',
        helpText: 'How much readiness or commitment can you bring?',
        options: [
          { label: 'Low Entry Requirement', value: 'low' },
          { label: 'Moderate Entry Requirement', value: 'moderate' },
          { label: 'Advanced Entry Requirement', value: 'advanced' },
        ],
      },
      {
        id: 'riskLevel',
        label: 'Risk Preference',
        helpText: 'How much commercial risk are you comfortable with?',
        options: [
          { label: 'Low Risk Entry', value: 'low' },
          { label: 'Balanced Risk', value: 'balanced' },
          { label: 'High Commitment / High Scale', value: 'high' },
        ],
      },
      {
        id: 'primaryGoal',
        label: 'Primary Objective',
        helpText: 'What do you want to achieve commercially?',
        options: [
          { label: 'Test Market Demand', value: 'test-demand' },
          { label: 'Source for Retail', value: 'source-for-retail' },
          { label: 'Source at Scale', value: 'bulk-scale' },
          { label: 'Private Label', value: 'private-label' },
          { label: 'Institutional Procurement', value: 'institutional-procurement' },
          { label: 'Creative Collaboration', value: 'creative-collaboration' },
        ],
      },
    ],
    sort: {
      id: 'sortBy',
      label: 'Sort Paths',
      helpText: 'Re-order paths by the priority that matters most.',
      options: [
        { label: 'Recommended First', value: 'recommended' },
        { label: 'Low Risk First', value: 'low-risk' },
        { label: 'Scale Potential First', value: 'scale-potential' },
        { label: 'Institutional First', value: 'institutional' },
      ],
    },
    comparison: {
      triggerLabel: 'Compare selected',
      panelHeadline: 'Compare up to three buyer paths side by side',
      panelIntro:
        'Select paths from the catalogue above, then compare entry requirements, risk, package, and progression in one view.',
      compareFields: [
        'Best For',
        'Entry Requirement',
        'Risk Level',
        'Recommended Package',
        'Progression',
      ],
      helperText:
        'Use comparison when deciding between low-risk entry, repeat trade, branded growth, or institutional procurement.',
      selectionLimit: 3,
      clearLabel: 'Clear comparison',
    },
  },

  vendor: {
    sectionLabel: 'Partnership Catalogue',
    headline: 'Find and compare the supply model that fits your business',
    intro:
      'Filter paths by your vendor type, readiness level, entry preference, and growth objective. Select up to three to compare side by side.',
    filters: [
      {
        id: 'vendorType',
        label: 'Vendor Type',
        helpText: 'What type of supply business are you?',
        options: [
          { label: 'Artisan', value: 'artisan' },
          { label: 'Workshop', value: 'workshop' },
          { label: 'Craft Business', value: 'craft-business' },
          { label: 'Exporter', value: 'exporter' },
          { label: 'Manufacturer', value: 'manufacturer' },
          { label: 'Cooperative', value: 'cooperative' },
        ],
      },
      {
        id: 'entryRequirement',
        label: 'Entry Requirement',
        helpText: 'How much readiness or documentation can you bring?',
        options: [
          { label: 'Low Entry Requirement', value: 'low' },
          { label: 'Moderate Entry Requirement', value: 'moderate' },
          { label: 'Advanced Entry Requirement', value: 'advanced' },
        ],
      },
      {
        id: 'readinessLevel',
        label: 'Readiness Level',
        helpText: 'How ready is your business for structured trade?',
        options: [
          { label: 'Early Stage', value: 'early' },
          { label: 'Market Ready', value: 'market-ready' },
          { label: 'Export Ready', value: 'export-ready' },
          { label: 'Scale Ready', value: 'scale-ready' },
        ],
      },
      {
        id: 'primaryGoal',
        label: 'Primary Objective',
        helpText: 'What kind of commercial growth do you want?',
        options: [
          { label: 'Global Exposure', value: 'global-exposure' },
          { label: 'Retail Placement', value: 'retail-placement' },
          { label: 'Repeat Wholesale Demand', value: 'repeat-wholesale-demand' },
          { label: 'Export Entry', value: 'export-entry' },
          { label: 'Private Label Production', value: 'private-label-production' },
          { label: 'Creative Collaboration', value: 'creative-collaboration' },
        ],
      },
    ],
    sort: {
      id: 'sortBy',
      label: 'Sort Paths',
      helpText: 'Re-order paths by the priority that matters most.',
      options: [
        { label: 'Recommended First', value: 'recommended' },
        { label: 'Easy Entry First', value: 'easy-entry' },
        { label: 'Scale Potential First', value: 'scale-potential' },
        { label: 'Institutional First', value: 'institutional' },
      ],
    },
    comparison: {
      triggerLabel: 'Compare selected',
      panelHeadline: 'Compare up to three vendor paths side by side',
      panelIntro:
        'Select paths from the catalogue above, then compare entry requirements, readiness fit, package, and progression in one view.',
      compareFields: [
        'Best For',
        'Entry Requirement',
        'Risk Level',
        'Recommended Package',
        'Progression',
      ],
      helperText:
        'Use comparison when deciding between early exposure, retail placement, export entry, or larger contract routes.',
      selectionLimit: 3,
      clearLabel: 'Clear comparison',
    },
  },
};

/* -------------------------------------------------------------------------- */
/* SECTION 3 — CARD DATA (subPartnershipCards)                                */
/* -------------------------------------------------------------------------- */

export const subPartnershipCards: PartnershipCard[] = [
  {
    slug: 'dropshipping',
    label: 'Dropshipping',
    pathway: 'core-trade',
    tags: ['low-risk', 'fast-entry', 'online', 'starter'],
    metadata: {
      entryRequirement: 'low',
      riskLevel: 'low',
      progressionSpeed: 'fast',
      buyerFit: ['online-store', 'retailer'],
      buyerGoals: ['test-demand', 'source-for-retail'],
      vendorFit: ['artisan', 'workshop', 'craft-business'],
      vendorGoals: ['global-exposure'],
      readinessLevels: ['early', 'market-ready'],
      capacityFit: ['small-batch', 'stable'],
      recommendedSortWeight: 95,
      scalePotentialWeight: 50,
      institutionalWeight: 10,
    },
    buyer: {
      headline: 'Source Without Inventory',
      description:
        'List and sell Kashmir-origin craft products without holding inventory. A low-risk way to test demand and enter trade quickly.',
      bestFor: ['Online Stores', 'New Retail Entrants', 'Low-Risk Market Testing'],
      keyRequirement: 'Low entry requirement. Suitable for early buyer entry.',
      package: 'Starter Entry',
      progressionNote: 'Strong starting point before moving toward wholesale relationships.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Low-risk market testing',
          vendorValue: 'Early global exposure',
        },
        { label: 'Entry Requirement', buyerValue: 'Low', vendorValue: 'Low' },
        { label: 'Risk Level', buyerValue: 'Low', vendorValue: 'Low' },
        { label: 'Recommended Package', buyerValue: 'Starter Entry', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Fast', vendorValue: 'Fast' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Sell Without Stock Burden',
      description:
        'Place products into a dropship-enabled supply path that reaches global buyers without requiring full-scale export infrastructure on day one.',
      bestFor: ['Artisans', 'Small Workshops', 'Early Market Entry'],
      keyRequirement: 'Basic product quality check and KYC verification.',
      package: 'Trade Growth',
      progressionNote: 'Can open the way to wholesale and wider buyer access over time.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Low-risk market testing',
          vendorValue: 'Early global exposure',
        },
        { label: 'Entry Requirement', buyerValue: 'Low', vendorValue: 'Low' },
        { label: 'Risk Level', buyerValue: 'Low', vendorValue: 'Low' },
        { label: 'Recommended Package', buyerValue: 'Starter Entry', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Fast', vendorValue: 'Fast' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'consignment',
    label: 'Consignment',
    pathway: 'core-trade',
    tags: ['retail', 'balanced-risk', 'placement'],
    metadata: {
      entryRequirement: 'moderate',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['retailer', 'online-store'],
      buyerGoals: ['source-for-retail', 'test-demand'],
      vendorFit: ['artisan', 'craft-business', 'cooperative'],
      vendorGoals: ['retail-placement', 'global-exposure'],
      readinessLevels: ['early', 'market-ready'],
      capacityFit: ['small-batch', 'stable', 'medium-scale'],
      recommendedSortWeight: 90,
      scalePotentialWeight: 60,
      institutionalWeight: 15,
    },
    buyer: {
      headline: 'Retail With Lower Upfront Risk',
      description:
        'Access authentic products for retail placement with reduced upfront inventory exposure and a more flexible commercial structure.',
      bestFor: ['Retailers', 'Physical Stores', 'Test-Market Operators'],
      keyRequirement: 'Moderate entry requirement with retail readiness expected.',
      package: 'Trade Growth',
      progressionNote: 'A practical bridge between low-risk entry and stronger repeat trade.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Retail testing with flexibility',
          vendorValue: 'Retail placement visibility',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Place Inventory Into Live Retail Channels',
      description:
        'Place products into structured retail pathways while retaining stronger visibility into placement and demand.',
      bestFor: ['Artisans', 'Craft Businesses', 'Retail-Oriented Vendors'],
      keyRequirement: 'Quality consistency, KYC, and basic commercial readiness.',
      package: 'Trade Growth',
      progressionNote: 'Can progress toward wholesale or stronger retail placement routes.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Retail testing with flexibility',
          vendorValue: 'Retail placement visibility',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'wholesale-distribution',
    label: 'Wholesale & Distribution',
    pathway: 'core-trade',
    tags: ['scale', 'bulk', 'repeat-orders'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'high',
      progressionSpeed: 'steady',
      buyerFit: ['distributor', 'retailer', 'hospitality-buyer'],
      buyerGoals: ['bulk-scale', 'source-for-retail'],
      vendorFit: ['exporter', 'manufacturer', 'craft-business'],
      vendorGoals: ['repeat-wholesale-demand'],
      readinessLevels: ['market-ready', 'export-ready', 'scale-ready'],
      capacityFit: ['medium-scale', 'high-volume'],
      recommendedSortWeight: 88,
      scalePotentialWeight: 98,
      institutionalWeight: 30,
    },
    buyer: {
      headline: 'Source at Scale Through Structured Trade',
      description:
        'Bulk procurement model for buyers who need stronger pricing, repeat supply, and operational continuity.',
      bestFor: ['Distributors', 'Retail Chains', 'High-Volume Buyers'],
      keyRequirement: 'Stronger sourcing readiness, budget clarity, and trade intent.',
      package: 'Trade Growth',
      progressionNote: 'Positions buyers for long-term high-volume trade relationships.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Bulk sourcing and repeat trade',
          vendorValue: 'Repeat bulk demand',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Secure Repeat Orders Through Bulk Supply',
      description:
        'Structured wholesale pathway for vendors ready to supply in volume through fixed commercial relationships.',
      bestFor: ['Exporters', 'Manufacturers', 'Scale-Ready Craft Businesses'],
      keyRequirement: 'Production capacity, quality consistency, and operational discipline.',
      package: 'Trade Growth',
      progressionNote: 'A major route into scale, stronger contracts, and export growth.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Bulk sourcing and repeat trade',
          vendorValue: 'Repeat bulk demand',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'import-export',
    label: 'Import & Export',
    pathway: 'core-trade',
    tags: ['cross-border', 'compliance', 'trade-ready'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'high',
      progressionSpeed: 'steady',
      buyerFit: ['distributor', 'institution', 'hospitality-buyer'],
      buyerGoals: ['bulk-scale', 'institutional-procurement'],
      vendorFit: ['exporter', 'manufacturer', 'craft-business'],
      vendorGoals: ['export-entry'],
      readinessLevels: ['export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale', 'high-volume'],
      recommendedSortWeight: 84,
      scalePotentialWeight: 95,
      institutionalWeight: 40,
    },
    buyer: {
      headline: 'Access Trade-Ready Cross-Border Supply',
      description:
        'Import authenticated craft products through a pathway shaped around compliance, customs support, and structured international trade.',
      bestFor: ['Importers', 'Compliance-Sensitive Buyers', 'Cross-Border Retail Operators'],
      keyRequirement: 'Trade awareness, documentation readiness, and import intent.',
      package: 'Trade Growth',
      progressionNote: 'Ideal for buyers moving beyond sourcing into regulated cross-border trade.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Cross-border sourcing with compliance',
          vendorValue: 'Verified export entry',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Enter Verified Export Pathways',
      description:
        'Export-ready route for vendors seeking international market access through structured compliance and credibility layers.',
      bestFor: ['Exporters', 'Trade-Ready Businesses', 'GI-Aligned Vendors'],
      keyRequirement: 'Export readiness, documentation, and stronger quality/compliance alignment.',
      package: 'Trade Growth',
      progressionNote: 'A foundational pathway for serious global supply capability.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Cross-border sourcing with compliance',
          vendorValue: 'Verified export entry',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        { label: 'Recommended Package', buyerValue: 'Trade Growth', vendorValue: 'Trade Growth' },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'exhibition',
    label: 'Exhibition',
    pathway: 'brand-expansion',
    tags: ['visibility', 'premium', 'showcase'],
    metadata: {
      entryRequirement: 'moderate',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['retailer', 'fashion-brand', 'interior-designer'],
      buyerGoals: ['source-for-retail', 'creative-collaboration'],
      vendorFit: ['artisan', 'craft-business', 'cooperative'],
      vendorGoals: ['global-exposure', 'retail-placement'],
      readinessLevels: ['market-ready', 'export-ready'],
      capacityFit: ['small-batch', 'stable', 'medium-scale'],
      recommendedSortWeight: 76,
      scalePotentialWeight: 58,
      institutionalWeight: 18,
    },
    buyer: {
      headline: 'Source Through Curated Showcases',
      description:
        'Discover suppliers and premium products through curated showcase environments built around visibility and selection quality.',
      bestFor: ['Curated Retailers', 'Premium Buyers', 'Discovery-Led Buyers'],
      keyRequirement: 'Moderate entry requirement with category clarity.',
      package: 'Brand Expansion',
      progressionNote: 'Useful for premium discovery before deeper commercial commitment.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Curated premium discovery',
          vendorValue: 'Premium visibility to buyers',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Showcase Craft to Qualified Buyers',
      description:
        'Present products in structured exhibition environments that improve visibility and support premium market positioning.',
      bestFor: ['Artisans', 'Premium Craft Vendors', 'Showcase-Ready Businesses'],
      keyRequirement: 'Presentation quality and product readiness.',
      package: 'Brand Expansion',
      progressionNote: 'Strong route into visibility, premium placement, and qualified discovery.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Curated premium discovery',
          vendorValue: 'Premium visibility to buyers',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'auction-bidding',
    label: 'Auction & Bidding',
    pathway: 'brand-expansion',
    tags: ['premium', 'rare', 'collector'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['institution', 'retailer', 'fashion-brand'],
      buyerGoals: ['source-for-retail', 'institutional-procurement'],
      vendorFit: ['artisan', 'craft-business'],
      vendorGoals: ['global-exposure'],
      readinessLevels: ['market-ready', 'export-ready'],
      capacityFit: ['small-batch', 'stable'],
      recommendedSortWeight: 62,
      scalePotentialWeight: 40,
      institutionalWeight: 50,
    },
    buyer: {
      headline: 'Acquire Premium Pieces Through Competitive Access',
      description:
        'Bid on selected craft pieces through a structured premium acquisition model suited to rare or high-value work.',
      bestFor: ['Collectors', 'Premium Buyers', 'Institutional Curators'],
      keyRequirement: 'Premium buying intent and pricing flexibility.',
      package: 'Brand Expansion',
      progressionNote:
        'Best for high-value or differentiated acquisition rather than repeat bulk trade.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Rare or premium acquisition',
          vendorValue: 'High-value premium visibility',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Place High-Value Work Into Premium Demand Channels',
      description:
        'Present premium or rare craft pieces in a structured competitive bidding environment designed for higher-value visibility.',
      bestFor: ['Master Artisans', 'Premium Vendors', 'Rare Product Holders'],
      keyRequirement: 'Strong product authenticity and premium presentation.',
      package: 'Brand Expansion',
      progressionNote: 'Supports premium positioning and access to higher-value buyers.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Rare or premium acquisition',
          vendorValue: 'High-value premium visibility',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'white-label',
    label: 'White Label',
    pathway: 'brand-expansion',
    tags: ['branding', 'private-label', 'long-term'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'high',
      progressionSpeed: 'steady',
      buyerFit: ['fashion-brand', 'retailer', 'online-store'],
      buyerGoals: ['private-label'],
      vendorFit: ['manufacturer', 'exporter', 'craft-business'],
      vendorGoals: ['private-label-production'],
      readinessLevels: ['market-ready', 'export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale', 'high-volume'],
      recommendedSortWeight: 85,
      scalePotentialWeight: 90,
      institutionalWeight: 20,
    },
    buyer: {
      headline: 'Build Your Brand on Authentic Supply',
      description:
        'Private-label authentic Kashmir-origin craft products under your own brand through structured supply partnerships.',
      bestFor: ['Brands', 'Retailers', 'Private Label Operators'],
      keyRequirement: 'Brand clarity, volume intent, and stronger buyer readiness.',
      package: 'Brand Expansion',
      progressionNote: 'Opens long-term branded trade relationships and repeat supply structures.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Brand-led product development',
          vendorValue: 'Long-term production contracts',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Manufacture for Buyer Brands',
      description:
        'Supply products under buyer branding through a more stable and commercially durable production relationship.',
      bestFor: ['Manufacturers', 'Export Businesses', 'Production-Ready Vendors'],
      keyRequirement: 'Production consistency, quality discipline, and collaboration readiness.',
      package: 'Brand Expansion',
      progressionNote: 'A strong route into long-term contracts and stable commercial demand.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Brand-led product development',
          vendorValue: 'Long-term production contracts',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'brick-mortar',
    label: 'Brick & Mortar',
    pathway: 'brand-expansion',
    tags: ['retail', 'physical', 'placement'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'high',
      progressionSpeed: 'long-term',
      buyerFit: ['retailer', 'interior-designer', 'hospitality-buyer'],
      buyerGoals: ['source-for-retail', 'institutional-procurement'],
      vendorFit: ['craft-business', 'exporter', 'cooperative'],
      vendorGoals: ['retail-placement'],
      readinessLevels: ['market-ready', 'export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale'],
      recommendedSortWeight: 70,
      scalePotentialWeight: 65,
      institutionalWeight: 35,
    },
    buyer: {
      headline: 'Place Kashmir Craft in Physical Retail',
      description:
        'Structured pathway for buyers seeking authentic craft products for physical store placement with consistent supply.',
      bestFor: ['Retail Operators', 'Interior Designers', 'Hospitality Buyers'],
      keyRequirement: 'Retail infrastructure and consistent demand capacity.',
      package: 'Brand Expansion',
      progressionNote: 'Long-term placement route for buyers with physical retail presence.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Physical retail placement',
          vendorValue: 'Physical retail channel access',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Enter Physical Retail Channels',
      description:
        'Access structured physical retail placement routes for craft products that are ready for consistent shop-floor demand.',
      bestFor: ['Craft Businesses', 'Cooperatives', 'Retail-Ready Vendors'],
      keyRequirement: 'Consistent product supply and retail-ready presentation.',
      package: 'Brand Expansion',
      progressionNote: 'Supports durable physical retail relationships and repeat demand.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Physical retail placement',
          vendorValue: 'Physical retail channel access',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Brand Expansion',
          vendorValue: 'Brand Expansion',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'packaging',
    label: 'Packaging',
    pathway: 'collaborative',
    tags: ['presentation', 'branding', 'support'],
    metadata: {
      entryRequirement: 'moderate',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['retailer', 'fashion-brand', 'corporate-purchaser'],
      buyerGoals: ['private-label', 'creative-collaboration'],
      vendorFit: ['craft-business', 'manufacturer', 'cooperative'],
      vendorGoals: ['creative-collaboration'],
      readinessLevels: ['market-ready', 'export-ready'],
      capacityFit: ['stable', 'medium-scale'],
      recommendedSortWeight: 60,
      scalePotentialWeight: 35,
      institutionalWeight: 10,
    },
    buyer: {
      headline: 'Source Packaging That Supports Brand Value',
      description:
        'Access packaging support aligned with product story, sustainability expectations, and premium presentation.',
      bestFor: ['Brands', 'Gifting Businesses', 'Presentation-Sensitive Buyers'],
      keyRequirement: 'Clear product/brand presentation goals.',
      package: 'Collaboration Enablement',
      progressionNote: 'Best used as a value-enhancer around broader commercial pathways.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Presentation and packaging support',
          vendorValue: 'Presentation strengthening',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Offer Packaging-Ready Product Presentation',
      description:
        'Strengthen how products are received and perceived through better packaging and presentation collaboration.',
      bestFor: ['Craft Businesses', 'Premium Vendors', 'Export-Facing Producers'],
      keyRequirement: 'Presentation readiness and collaboration fit.',
      package: 'Collaboration Enablement',
      progressionNote: 'Improves market readiness and product competitiveness.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Presentation and packaging support',
          vendorValue: 'Presentation strengthening',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'design-collaboration',
    label: 'Design Collaboration',
    pathway: 'collaborative',
    tags: ['co-create', 'exclusive', 'design'],
    metadata: {
      entryRequirement: 'moderate',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['fashion-brand', 'interior-designer', 'retailer'],
      buyerGoals: ['creative-collaboration', 'private-label'],
      vendorFit: ['artisan', 'workshop', 'craft-business'],
      vendorGoals: ['creative-collaboration'],
      readinessLevels: ['market-ready', 'export-ready'],
      capacityFit: ['small-batch', 'stable', 'medium-scale'],
      recommendedSortWeight: 74,
      scalePotentialWeight: 52,
      institutionalWeight: 12,
    },
    buyer: {
      headline: 'Co-Create Exclusive Product Lines',
      description:
        'Develop differentiated products through direct design collaboration with verified craft suppliers.',
      bestFor: ['Design-Led Brands', 'Retail Innovators', 'Interior/Fashion Buyers'],
      keyRequirement: 'Creative direction and collaboration intent.',
      package: 'Collaboration Enablement',
      progressionNote: 'Useful for differentiation, exclusivity, and stronger branded positioning.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Exclusive co-created products',
          vendorValue: 'Premium collaborative output',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Collaborate on Exclusive Product Development',
      description:
        'Work directly with buyers and designers on exclusive lines that create higher-value positioning and shared opportunity.',
      bestFor: ['Master Artisans', 'Design-Ready Workshops', 'Creative Vendors'],
      keyRequirement: 'Product adaptability and collaboration readiness.',
      package: 'Collaboration Enablement',
      progressionNote: 'Can elevate vendors beyond standard supply into premium co-created work.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Exclusive co-created products',
          vendorValue: 'Premium collaborative output',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'storytelling-media',
    label: 'Storytelling & Media',
    pathway: 'collaborative',
    tags: ['narrative', 'brand', 'media'],
    metadata: {
      entryRequirement: 'moderate',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['retailer', 'online-store', 'fashion-brand'],
      buyerGoals: ['creative-collaboration', 'source-for-retail'],
      vendorFit: ['artisan', 'craft-business', 'cooperative'],
      vendorGoals: ['global-exposure', 'creative-collaboration'],
      readinessLevels: ['early', 'market-ready', 'export-ready'],
      capacityFit: ['small-batch', 'stable', 'medium-scale'],
      recommendedSortWeight: 58,
      scalePotentialWeight: 30,
      institutionalWeight: 10,
    },
    buyer: {
      headline: 'Strengthen Sourcing Through Authentic Narrative',
      description:
        'Commission media and storytelling assets that deepen product value, customer trust, and sourcing transparency.',
      bestFor: ['Premium Retailers', 'Brand Builders', 'Narrative-Led Commerce'],
      keyRequirement: 'Clear branding or sourcing communication need.',
      package: 'Collaboration Enablement',
      progressionNote:
        'Supports conversion, trust, and brand differentiation rather than direct trade volume.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Narrative-led commerce support',
          vendorValue: 'Artisan and product storytelling',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Bring Craft Identity to Global Audiences',
      description:
        'Use storytelling and media support to present artisan value, heritage, and product authenticity more effectively.',
      bestFor: ['Artisans', 'Heritage Vendors', 'Premium Product Makers'],
      keyRequirement: 'Strong story, product identity, and presentation readiness.',
      package: 'Collaboration Enablement',
      progressionNote: 'Strengthens visibility, trust, and premium positioning.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Narrative-led commerce support',
          vendorValue: 'Artisan and product storytelling',
        },
        { label: 'Entry Requirement', buyerValue: 'Moderate', vendorValue: 'Moderate' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'warehouse',
    label: 'Warehouse',
    pathway: 'collaborative',
    tags: ['fulfilment', 'storage', 'operations'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['retailer', 'online-store', 'distributor'],
      buyerGoals: ['bulk-scale', 'source-for-retail'],
      vendorFit: ['exporter', 'manufacturer', 'craft-business'],
      vendorGoals: ['repeat-wholesale-demand', 'global-exposure'],
      readinessLevels: ['market-ready', 'export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale', 'high-volume'],
      recommendedSortWeight: 66,
      scalePotentialWeight: 82,
      institutionalWeight: 18,
    },
    buyer: {
      headline: 'Access Structured Storage and Fulfilment Support',
      description:
        'Use warehousing pathways to support stocked inventory, order flow, and faster fulfilment operations.',
      bestFor: ['Scaling Buyers', 'Repeat Sellers', 'Operationally Mature Retailers'],
      keyRequirement: 'Ongoing volume and fulfilment need.',
      package: 'Collaboration Enablement',
      progressionNote: 'Best for buyers moving from sourcing into deeper operational continuity.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Stocked inventory and fulfilment support',
          vendorValue: 'Faster fulfilment and delivery coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Reduce Delivery Friction Through Structured Storage',
      description:
        'Use warehouse-linked pathways to support fulfilment speed, inventory placement, and more reliable downstream delivery.',
      bestFor: ['Exporters', 'Repeat Supply Vendors', 'Scale-Ready Businesses'],
      keyRequirement: 'Product flow consistency and operational readiness.',
      package: 'Collaboration Enablement',
      progressionNote: 'Strengthens service quality and supports larger buyer relationships.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Stocked inventory and fulfilment support',
          vendorValue: 'Faster fulfilment and delivery coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Collaboration Enablement',
          vendorValue: 'Collaboration Enablement',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'logistics',
    label: 'Logistics',
    pathway: 'institutional',
    tags: ['movement', 'delivery', 'cross-border'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'balanced',
      progressionSpeed: 'steady',
      buyerFit: ['distributor', 'institution', 'hospitality-buyer'],
      buyerGoals: ['bulk-scale', 'institutional-procurement'],
      vendorFit: ['exporter', 'manufacturer'],
      vendorGoals: ['export-entry', 'repeat-wholesale-demand'],
      readinessLevels: ['export-ready', 'scale-ready'],
      capacityFit: ['medium-scale', 'high-volume'],
      recommendedSortWeight: 64,
      scalePotentialWeight: 86,
      institutionalWeight: 72,
    },
    buyer: {
      headline: 'De-Risk Cross-Border Movement',
      description:
        'Structured logistics support for moving products through import pathways with better clarity and fewer operational gaps.',
      bestFor: ['Importers', 'Cross-Border Buyers', 'Compliance-Sensitive Operators'],
      keyRequirement: 'Trade intent and logistics relevance to the buying model.',
      package: 'Institutional Alliance',
      progressionNote:
        'Useful where movement, customs, and delivery reliability are core concerns.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Movement and logistics reliability',
          vendorValue: 'Structured delivery coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Plug Into Structured Delivery Networks',
      description:
        'Use logistics-linked pathways to support smoother delivery into target markets and stronger fulfilment coordination.',
      bestFor: ['Exporters', 'Trade-Ready Vendors', 'Scale-Oriented Suppliers'],
      keyRequirement: 'Operational readiness and shipping relevance.',
      package: 'Institutional Alliance',
      progressionNote: 'Supports higher-complexity supply routes and institutional reliability.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Movement and logistics reliability',
          vendorValue: 'Structured delivery coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Steady', vendorValue: 'Steady' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'museum-institutional',
    label: 'Museum / Institutional',
    pathway: 'institutional',
    tags: ['museum', 'institution', 'authenticity'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'balanced',
      progressionSpeed: 'long-term',
      buyerFit: ['institution'],
      buyerGoals: ['institutional-procurement'],
      vendorFit: ['artisan', 'cooperative', 'craft-business'],
      vendorGoals: ['global-exposure'],
      readinessLevels: ['market-ready', 'export-ready'],
      capacityFit: ['small-batch', 'stable', 'medium-scale'],
      recommendedSortWeight: 54,
      scalePotentialWeight: 42,
      institutionalWeight: 100,
    },
    buyer: {
      headline: 'Procure Through Trust-Sensitive Institutional Routes',
      description:
        'Access authenticated craft pieces and structured procurement pathways suited to museums, galleries, and institutions.',
      bestFor: ['Museums', 'Cultural Buyers', 'Institutional Curators'],
      keyRequirement: 'Institutional procurement intent and authenticity sensitivity.',
      package: 'Institutional Alliance',
      progressionNote:
        'High-trust pathway built for long-horizon and credibility-sensitive relationships.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Institutional cultural procurement',
          vendorValue: 'Institution-grade placement',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Supply Into Cultural and Institutional Channels',
      description:
        'Present authenticated products through institutional pathways that require stronger trust, documentation, and positioning.',
      bestFor: ['Master Artisans', 'Heritage Vendors', 'Authenticity-Led Suppliers'],
      keyRequirement: 'Strong authenticity, presentation, and institutional fit.',
      package: 'Institutional Alliance',
      progressionNote: 'Useful for premium legitimacy and institution-grade placement.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Institutional cultural procurement',
          vendorValue: 'Institution-grade placement',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'ngo-government',
    label: 'NGO & Government',
    pathway: 'institutional',
    tags: ['programmatic', 'procurement', 'impact'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'balanced',
      progressionSpeed: 'long-term',
      buyerFit: ['institution', 'corporate-purchaser'],
      buyerGoals: ['institutional-procurement'],
      vendorFit: ['cooperative', 'craft-business', 'exporter'],
      vendorGoals: ['global-exposure', 'repeat-wholesale-demand'],
      readinessLevels: ['market-ready', 'export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale', 'high-volume'],
      recommendedSortWeight: 56,
      scalePotentialWeight: 70,
      institutionalWeight: 96,
    },
    buyer: {
      headline: 'Source Through Programmatic Procurement Channels',
      description:
        'Access craft products through pathways aligned with fair trade, public-interest, and policy-driven procurement structures.',
      bestFor: ['NGOs', 'Government Buyers', 'Impact Procurement Teams'],
      keyRequirement: 'Program or procurement structure with governance expectations.',
      package: 'Institutional Alliance',
      progressionNote: 'Structured for compliance-minded and impact-oriented buying contexts.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Governed and impact-linked procurement',
          vendorValue: 'Programmatic supply opportunities',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Enter Programmatic Procurement Opportunities',
      description:
        'Access NGO and government-aligned demand through a structured pathway built around accountability and fit.',
      bestFor: ['Cooperatives', 'Impact-Led Vendors', 'Structured Supply Groups'],
      keyRequirement: 'Documentation, consistency, and governance readiness.',
      package: 'Institutional Alliance',
      progressionNote: 'Can unlock stable programmatic demand beyond standard commercial channels.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Governed and impact-linked procurement',
          vendorValue: 'Programmatic supply opportunities',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'Balanced', vendorValue: 'Balanced' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
  {
    slug: 'technology-partnership',
    label: 'Technology Partnership',
    pathway: 'institutional',
    tags: ['integration', 'infrastructure', 'systems'],
    metadata: {
      entryRequirement: 'advanced',
      riskLevel: 'high',
      progressionSpeed: 'long-term',
      buyerFit: ['institution', 'distributor', 'corporate-purchaser'],
      buyerGoals: ['institutional-procurement', 'bulk-scale'],
      vendorFit: ['manufacturer', 'exporter', 'craft-business'],
      vendorGoals: ['export-entry', 'repeat-wholesale-demand'],
      readinessLevels: ['export-ready', 'scale-ready'],
      capacityFit: ['stable', 'medium-scale', 'high-volume'],
      recommendedSortWeight: 48,
      scalePotentialWeight: 78,
      institutionalWeight: 90,
    },
    buyer: {
      headline: 'Extend Platform Capability Into Your Operations',
      description:
        'Use technology-aligned partnerships where system integration, data flow, or operational coordination matters.',
      bestFor: ['Enterprise Buyers', 'Platform Operators', 'Infrastructure-Led Businesses'],
      keyRequirement: 'Operational complexity and integration need.',
      package: 'Institutional Alliance',
      progressionNote: 'High-structure route for organizations with deeper system requirements.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Systems and infrastructure alignment',
          vendorValue: 'Infrastructure-linked commercial coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Buyer',
    },
    vendor: {
      headline: 'Partner Around Commerce Infrastructure',
      description:
        'Engage through technology-aligned routes that support structured craft commerce, fulfilment, or operational coordination.',
      bestFor: ['Scale Vendors', 'Operational Partners', 'Infrastructure-Ready Businesses'],
      keyRequirement: 'Operational maturity and integration relevance.',
      package: 'Institutional Alliance',
      progressionNote: 'Best suited to advanced participants operating beyond basic trade entry.',
      compare: [
        {
          label: 'Best For',
          buyerValue: 'Systems and infrastructure alignment',
          vendorValue: 'Infrastructure-linked commercial coordination',
        },
        { label: 'Entry Requirement', buyerValue: 'Advanced', vendorValue: 'Advanced' },
        { label: 'Risk Level', buyerValue: 'High', vendorValue: 'High' },
        {
          label: 'Recommended Package',
          buyerValue: 'Institutional Alliance',
          vendorValue: 'Institutional Alliance',
        },
        { label: 'Progression', buyerValue: 'Long-Term', vendorValue: 'Long-Term' },
      ],
      ctaLabel: 'Apply as Vendor',
    },
  },
];

/* -------------------------------------------------------------------------- */
/* SECTION 4 — PATHWAY SYSTEMS                                                */
/* -------------------------------------------------------------------------- */

export const pathwaySystems = {
  sectionLabel: 'Four Structured Pathway Systems',
  headline: 'Partnerships are organized into clear commercial systems',
  intro:
    'Each partnership path belongs to a broader system shaped around a different commercial logic — direct trade, market expansion, collaborative value creation, or institutional engagement.',
  pathways: [
    {
      id: 'core-trade',
      title: 'Core Trade',
      sharedSummary:
        'Trade-centric partnerships including dropshipping, consignment, wholesale distribution, and import / export.',
      buyer: {
        emphasis:
          'Built for buyers who want dependable sourcing models, controlled risk, and clearer access to supply.',
        weight: [
          'Operationally direct',
          'Commercially practical',
          'Best for repeat trade relationships',
        ],
        subPaths: ['Dropshipping', 'Consignment', 'Wholesale & Distribution', 'Import & Export'],
      },
      vendor: {
        emphasis:
          'Built for vendors who want direct market pathways, order flow, and structured commercial growth.',
        weight: [
          'Strongest for market access',
          'Best for repeat demand',
          'Most direct path to trade activation',
        ],
        subPaths: ['Dropshipping', 'Consignment', 'Wholesale & Distribution', 'Import & Export'],
      },
    },
    {
      id: 'brand-expansion',
      title: 'Brand Expansion',
      sharedSummary:
        'Expand market reach through exhibitions, auctions, white-label programs, and physical retail presence.',
      buyer: {
        emphasis:
          'Built for buyers who want premium placement, private label opportunities, and differentiated sourcing presence.',
        weight: [
          'Strong for market visibility',
          'Supports premium positioning',
          'Useful for brands and retail operators',
        ],
        subPaths: ['Exhibition', 'Auction & Bidding', 'White-Label', 'Brick & Mortar'],
      },
      vendor: {
        emphasis:
          'Built for vendors who want stronger visibility, brand presence, and access to premium placement opportunities.',
        weight: [
          'Supports product visibility',
          'Useful for premium craft positioning',
          'Best for vendors beyond basic supply',
        ],
        subPaths: ['Exhibition', 'Auction & Bidding', 'White-Label', 'Brick & Mortar'],
      },
    },
    {
      id: 'collaborative',
      title: 'Collaborative',
      sharedSummary:
        'Collaboration across packaging, design studios, media production, and warehouse support services.',
      buyer: {
        emphasis:
          'Built for buyers who want more than sourcing — co-creation, narrative support, packaging, and fulfilment capability.',
        weight: [
          'Differentiates product lines',
          'Supports storytelling and presentation',
          'Adds operational support around trade',
        ],
        subPaths: ['Packaging', 'Design Collaboration', 'Storytelling & Media', 'Warehouse'],
      },
      vendor: {
        emphasis:
          'Built for vendors who want to co-create, strengthen product presentation, and access collaborative support systems.',
        weight: [
          'Strengthens brand and presentation',
          'Creates shared-value partnerships',
          'Useful beyond pure supply transactions',
        ],
        subPaths: ['Packaging', 'Design Collaboration', 'Storytelling & Media', 'Warehouse'],
      },
    },
    {
      id: 'institutional',
      title: 'Institutional',
      sharedSummary:
        'Institutional alliances with logistics, museums, NGOs, government sectors, and technology-driven partnership structures.',
      buyer: {
        emphasis:
          'Built for buyers and organizations that require higher trust, compliance, and structured institutional engagement.',
        weight: [
          'Strongest for governed procurement',
          'Supports compliance-sensitive relationships',
          'Designed for long-horizon engagement',
        ],
        subPaths: [
          'Logistics',
          'Museum / Institutional',
          'NGO & Government',
          'Technology Partnership',
        ],
      },
      vendor: {
        emphasis:
          'Built for vendors ready for structured contracts, institutional visibility, logistics support, and strategic alliances.',
        weight: [
          'Supports institutional legitimacy',
          'Useful for complex partnerships',
          'High-trust and high-structure routes',
        ],
        subPaths: [
          'Logistics',
          'Museum / Institutional',
          'NGO & Government',
          'Technology Partnership',
        ],
      },
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* SECTION 5 — ENTRY RECOMMENDER                                              */
/* -------------------------------------------------------------------------- */

export const entryRecommender: RoleOnlyContent<{
  sectionLabel: string;
  headline: string;
  intro: string;
  resultCard: {
    title: string;
    fields: string[];
  };
}> = {
  buyer: {
    sectionLabel: 'Smart Entry Recommender',
    headline: 'Find the buyer path that fits how you actually want to source',
    intro:
      'Answer a few straightforward questions. The system should return the partnership model that best fits your business type, sourcing objective, risk preference, and readiness.',
    resultCard: {
      title: 'Recommended Buyer Path',
      fields: [
        'Recommended partnership',
        'Why it fits',
        'What you will likely need to enter',
        'What it can unlock next',
      ],
    },
  },
  vendor: {
    sectionLabel: 'Smart Entry Recommender',
    headline: 'Find the vendor path that fits how you actually want to grow',
    intro:
      'Answer a few straightforward questions. The system should return the partnership model that best fits your vendor type, production readiness, market objective, and growth direction.',
    resultCard: {
      title: 'Recommended Vendor Path',
      fields: [
        'Recommended partnership',
        'Why it fits',
        'What you will likely need to enter',
        'What it can unlock next',
      ],
    },
  },
};

/* -------------------------------------------------------------------------- */
/* SECTION 6 — PROCESS STRIP                                                  */
/* -------------------------------------------------------------------------- */

export const processStrip = {
  sectionLabel: 'How Activation Works',
  headline: 'A structured route from registration to live partnership',
  intro:
    'The partnership system is activated through a governed sequence rather than a casual sign-up flow.',
  steps: [
    'Registration Start',
    'Document Submission',
    'Eligibility Review',
    'Agreement Certification',
    'Profile Setup',
    'Customs / Compliance Alignment',
    'Partnership Onboarding',
    'Training Checkup',
    'Portal Activation',
    'Partnership Launch',
    'KPI Engagement',
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* SECTION 7 — WHY THESE PATHS EXIST                                          */
/* -------------------------------------------------------------------------- */

export const whyPartnershipsMatter = {
  sectionLabel: 'Why These Paths Exist',
  headline: 'The partnership system is designed to solve real trade friction',
  intro:
    'These paths are not categories for display. They exist because informal trade creates real barriers for both buyers and vendors.',
  items: [
    {
      title: 'Market Access',
      challenge:
        'Participants often struggle to reach the right markets with enough visibility and credibility.',
      solution:
        'Structured pathways create direct access to buyers, channels, and commercial environments that are otherwise hard to reach.',
    },
    {
      title: 'Infrastructure Gaps',
      challenge:
        'Logistics, warehousing, customs, fulfilment, and coordination can block real trade even when demand exists.',
      solution:
        'The partnership system adds operational pathways that reduce friction and allow participants to focus on buying or supplying effectively.',
    },
    {
      title: 'Trust and Standards',
      challenge:
        'Authenticity, compliance, fair trade alignment, and product credibility are difficult to establish informally.',
      solution:
        'Structured pathways make trust more visible through verification, standards, and governed entry.',
    },
    {
      title: 'Financial Risk',
      challenge:
        'High upfront commitment can stop early participation for both buyers and vendors.',
      solution:
        'Lower-risk models such as dropshipping and consignment create controlled entry before larger-scale commitment.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* SECTION 8 — FINAL CTA                                                      */
/* -------------------------------------------------------------------------- */

export const partnershipFinalCta: RoleOnlyContent<{
  headline: string;
  subheading: string;
  ctas: Cta[];
}> = {
  buyer: {
    headline: 'Choose the buyer path that matches how you want to source',
    subheading:
      'Use the filters, compare your options, and enter the model that best fits your business rather than forcing your business into the wrong model.',
    ctas: [
      {
        label: 'Start Buyer Application',
        href: PUBLIC_ROUTES.APPLY + '?role=buyer',
        variant: 'primary',
      },
      {
        label: 'Book Buyer Consultation',
        href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=buyer',
        variant: 'secondary',
      },
    ],
  },
  vendor: {
    headline: 'Choose the vendor path that matches how you want to grow',
    subheading:
      'Use the filters, compare your options, and enter the model that best fits your readiness and direction rather than guessing your way into the wrong one.',
    ctas: [
      {
        label: 'Start Vendor Application',
        href: PUBLIC_ROUTES.APPLY + '?role=vendor',
        variant: 'primary',
      },
      {
        label: 'Book Vendor Consultation',
        href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=vendor',
        variant: 'secondary',
      },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* FILTER LOGIC                                                               */
/* -------------------------------------------------------------------------- */

export function filterBuyerPartnerships(
  cards: PartnershipCard[],
  state: BuyerFilterState,
): PartnershipCard[] {
  return cards.filter((card) => {
    if (state.buyerType && !card.metadata.buyerFit.includes(state.buyerType)) return false;
    if (state.entryRequirement && card.metadata.entryRequirement !== state.entryRequirement)
      return false;
    if (state.riskLevel && card.metadata.riskLevel !== state.riskLevel) return false;
    if (state.primaryGoal && !card.metadata.buyerGoals.includes(state.primaryGoal)) return false;
    if (state.progressionSpeed && card.metadata.progressionSpeed !== state.progressionSpeed)
      return false;
    return true;
  });
}

export function filterVendorPartnerships(
  cards: PartnershipCard[],
  state: VendorFilterState,
): PartnershipCard[] {
  return cards.filter((card) => {
    if (state.vendorType && !card.metadata.vendorFit.includes(state.vendorType)) return false;
    if (state.entryRequirement && card.metadata.entryRequirement !== state.entryRequirement)
      return false;
    if (state.readinessLevel && !card.metadata.readinessLevels.includes(state.readinessLevel))
      return false;
    if (state.primaryGoal && !card.metadata.vendorGoals.includes(state.primaryGoal)) return false;
    if (state.progressionSpeed && card.metadata.progressionSpeed !== state.progressionSpeed)
      return false;
    return true;
  });
}

export function sortBuyerPartnerships(
  cards: PartnershipCard[],
  sortBy: BuyerFilterState['sortBy'] = 'recommended',
): PartnershipCard[] {
  const copy = [...cards];
  copy.sort((a, b) => {
    if (sortBy === 'low-risk') {
      const w = (r: RiskLevel) => (r === 'low' ? 3 : r === 'balanced' ? 2 : 1);
      return w(b.metadata.riskLevel) - w(a.metadata.riskLevel);
    }
    if (sortBy === 'scale-potential')
      return b.metadata.scalePotentialWeight - a.metadata.scalePotentialWeight;
    if (sortBy === 'institutional')
      return b.metadata.institutionalWeight - a.metadata.institutionalWeight;
    return b.metadata.recommendedSortWeight - a.metadata.recommendedSortWeight;
  });
  return copy;
}

export function sortVendorPartnerships(
  cards: PartnershipCard[],
  sortBy: VendorFilterState['sortBy'] = 'recommended',
): PartnershipCard[] {
  const copy = [...cards];
  copy.sort((a, b) => {
    if (sortBy === 'easy-entry') {
      const w = (l: EntryRequirement) => (l === 'low' ? 3 : l === 'moderate' ? 2 : 1);
      return w(b.metadata.entryRequirement) - w(a.metadata.entryRequirement);
    }
    if (sortBy === 'scale-potential')
      return b.metadata.scalePotentialWeight - a.metadata.scalePotentialWeight;
    if (sortBy === 'institutional')
      return b.metadata.institutionalWeight - a.metadata.institutionalWeight;
    return b.metadata.recommendedSortWeight - a.metadata.recommendedSortWeight;
  });
  return copy;
}

/* -------------------------------------------------------------------------- */
/* COMPARISON LOGIC                                                           */
/* -------------------------------------------------------------------------- */

export function getComparisonCards(
  slugs: string[],
  role: Role,
): Array<{
  slug: string;
  label: string;
  pathway: PathwayId;
  rows: { label: string; value: string }[];
}> {
  return subPartnershipCards
    .filter((card) => slugs.includes(card.slug))
    .slice(0, 3)
    .map((card) => {
      const source = role === 'buyer' ? card.buyer.compare : card.vendor.compare;
      return {
        slug: card.slug,
        label: card.label,
        pathway: card.pathway,
        rows: source.map((row) => ({
          label: row.label,
          value: role === 'buyer' ? row.buyerValue : row.vendorValue,
        })),
      };
    });
}

/* -------------------------------------------------------------------------- */
/* RECOMMENDER LOGIC                                                          */
/* -------------------------------------------------------------------------- */

export interface RecommenderResult {
  slug: string;
  label: string;
  pathway: PathwayId;
  score: number;
  whyItFits: string[];
  keyRequirement: string;
  progressionNote: string;
}

export function recommendBuyerPartnership(criteria: BuyerCriteria): RecommenderResult[] {
  const scored = subPartnershipCards.map((card) => {
    let score = 0;
    const reasons: string[] = [];

    if (card.metadata.buyerFit.includes(criteria.buyerType)) {
      score += 3;
      reasons.push(`Matches your buyer type: ${criteria.buyerType}`);
    }
    if (card.metadata.buyerGoals.includes(criteria.primaryGoal)) {
      score += 4;
      reasons.push('Aligned with your primary commercial objective');
    }
    if (criteria.riskComfort === 'low-risk' && card.metadata.riskLevel === 'low') {
      score += 3;
      reasons.push('Matches your low-risk preference');
    }
    if (criteria.riskComfort === 'moderate-commitment' && card.metadata.riskLevel === 'balanced') {
      score += 3;
      reasons.push('Matches your moderate commitment preference');
    }
    if (criteria.riskComfort === 'large-scale-trade' && card.metadata.riskLevel === 'high') {
      score += 3;
      reasons.push('Fits your readiness for larger-scale trade');
    }
    if (criteria.readiness === 'exploring' && card.metadata.entryRequirement === 'low') {
      score += 2;
      reasons.push('Fits an exploratory starting point');
    }
    if (
      criteria.readiness === 'clear-sourcing-plan' &&
      (card.metadata.entryRequirement === 'moderate' ||
        card.metadata.entryRequirement === 'advanced')
    ) {
      score += 2;
      reasons.push('Fits a buyer with a clearer sourcing plan');
    }
    if (criteria.readiness === 'trade-ready' && card.metadata.entryRequirement === 'advanced') {
      score += 2;
      reasons.push('Fits a trade-ready buying profile');
    }

    return {
      slug: card.slug,
      label: card.label,
      pathway: card.pathway,
      score,
      whyItFits: reasons,
      keyRequirement: card.buyer.keyRequirement,
      progressionNote: card.buyer.progressionNote,
    };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}

export function recommendVendorPartnership(criteria: VendorCriteria): RecommenderResult[] {
  const scored = subPartnershipCards.map((card) => {
    let score = 0;
    const reasons: string[] = [];

    if (card.metadata.vendorFit.includes(criteria.vendorType)) {
      score += 3;
      reasons.push(`Matches your vendor type: ${criteria.vendorType}`);
    }
    if (card.metadata.vendorGoals.includes(criteria.primaryGoal)) {
      score += 4;
      reasons.push('Aligned with your primary commercial objective');
    }
    if (card.metadata.readinessLevels.includes(criteria.readiness)) {
      score += 3;
      reasons.push('Matches your current readiness level');
    }
    if (card.metadata.capacityFit.includes(criteria.capacity)) {
      score += 2;
      reasons.push('Fits your current capacity profile');
    }

    return {
      slug: card.slug,
      label: card.label,
      pathway: card.pathway,
      score,
      whyItFits: reasons,
      keyRequirement: card.vendor.keyRequirement,
      progressionNote: card.vendor.progressionNote,
    };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, 3);
}

/* -------------------------------------------------------------------------- */
/* HELPER: FRONTEND READY CARD FETCHERS                                       */
/* -------------------------------------------------------------------------- */

export function getBuyerVisiblePartnerships(state: BuyerFilterState = {}): PartnershipCard[] {
  return sortBuyerPartnerships(filterBuyerPartnerships(subPartnershipCards, state), state.sortBy);
}

export function getVendorVisiblePartnerships(state: VendorFilterState = {}): PartnershipCard[] {
  return sortVendorPartnerships(filterVendorPartnerships(subPartnershipCards, state), state.sortBy);
}

export function getPartnershipBySlug(slug: string): PartnershipCard | undefined {
  return subPartnershipCards.find((card) => card.slug === slug);
}

/* -------------------------------------------------------------------------- */
/* MASTER EXPORT                                                              */
/* -------------------------------------------------------------------------- */

export const PARTNERSHIP = {
  hero: partnershipHero,
  roleContextBanner,
  catalogue: catalogueSection,
  pathwaySystems,
  recommender: entryRecommender,
  processStrip,
  whyPartnershipsMatter,
  finalCta: partnershipFinalCta,
} as const;

export type PartnershipContent = typeof PARTNERSHIP;
