/**
 * Homepage Content De Koshur Crafts B2B Connect
 * ---------------------------------------------------------------------------
 * Single source of truth for all homepage section content.
 *
 * FILE LOCATION:
 *   apps/web/src/content/homepage.content.ts
 *
 * SECTION MAP (9 sections after merging StructuredEntry + Trust):
 *   1. Hero              role-aware entry + role selector
 *   2. EntryJourney      5-step zigzag pathway from discovery to partnership
 *   3. TwoMarkets        EcosystemDiagram + three-band architecture
 *   4. Pathways          4 interactive pathway cards, role-aware detail panel
 *   5. WhyItWorks        merged StructuredEntry + Trust (12 pillars → 2×3 grid)
 *   6. Placement         5-stage onboarding journey stepper
 *   7. Finder            interactive role + objective selector with result card
 *   8. Signals           live opportunity signals, role-filtered
 *   9. Closing           ProofBand + Positioning contrast + FinalCTA
 *
 * ARCHITECTURE NOTE:
 * Structured to map directly to database records when the platform moves to
 * dynamic content. Each top-level key = a DB table or collection.
 * Role variants stored as sibling fields (default / buyer / vendor) so the
 * backend can return the correct variant based on authenticated user role
 * without any frontend branching logic.
 *
 * FUTURE MIGRATION PATH:
 *   1. Create a `homepage_content` table with columns matching these keys
 *   2. Seed it with this data
 *   3. Replace this import with a TanStack Query call to the API
 *   4. The consuming components need zero changes same shape, same keys
 * ---------------------------------------------------------------------------
 */

import { PUBLIC_ROUTES } from '@dkc/constants';

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface Cta {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface RoleContent<T> {
  default: T;
  buyer: T;
  vendor: T;
}

// ---------------------------------------------------------------------------
// Section 1 Hero
// ---------------------------------------------------------------------------

interface HeroRoleVariant {
  sectionLabel: string;
  subheading: string;
  supportLine: string;
  ctas: [Cta, Cta];
}

export const heroContent: RoleContent<HeroRoleVariant> = {
  default: {
    sectionLabel: 'Partnership Gateway',
    subheading:
      'A high-trust gateway where global buyers and Kashmir-origin craft vendors discover fit, enter verified pathways, and move into structured partnership environments.',
    supportLine:
      'Verified entry. Guided qualification. Protected onboarding. Partnership-led progression.',
    ctas: [
      { label: 'Enter as Buyer', href: PUBLIC_ROUTES.REGISTER + '?role=buyer', variant: 'primary' },
      { label: 'Book a Consultation', href: PUBLIC_ROUTES.BOOK_CONSULTATION, variant: 'secondary' },
    ],
  },
  buyer: {
    sectionLabel: 'Buyer Entry',
    subheading:
      'A disciplined route for global businesses seeking Kashmir-origin craft through verified sourcing, partnership-led onboarding, and trust-conscious commercial pathways.',
    supportLine:
      'Verified entry. Guided qualification. Protected onboarding. Partnership-led progression.',
    ctas: [
      { label: 'Explore Pathways', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS, variant: 'primary' },
      {
        label: 'Book Consultation',
        href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=buyer',
        variant: 'secondary',
      },
    ],
  },
  vendor: {
    sectionLabel: 'Vendor Entry',
    subheading:
      'A structured market-entry route for artisans, workshops, cooperatives, and exporters seeking qualified access to global demand through protected partnership pathways.',
    supportLine:
      'Verified entry. Guided qualification. Protected onboarding. Partnership-led progression.',
    ctas: [
      { label: 'Explore Pathways', href: PUBLIC_ROUTES.PARTNERSHIP_PATHS, variant: 'primary' },
      {
        label: 'Book Consultation',
        href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=vendor',
        variant: 'secondary',
      },
    ],
  },
};

export const heroShared = {
  headline: 'Structured Partnership Access for Kashmir-Origin Craft Trade',
  trustStrip: [
    'Verified participant entry',
    'Origin-aware pathways',
    'Traceability-ready routes',
    'Structured onboarding',
  ],
  roleSelector: {
    buyer: { title: 'I am a Buyer', desc: 'Sourcing · Retail · Institutional' },
    vendor: { title: 'I am a Vendor', desc: 'Artisan · Cooperative · Exporter' },
  },
} as const;

// ---------------------------------------------------------------------------
// Section 2 Entry Journey (zigzag 5-step)
// ---------------------------------------------------------------------------

export const entryJourneyContent = {
  sectionLabel: 'How Entry Becomes Partnership',
  headline: 'A Structured Route from Discovery to Active Partnership',
  intro:
    'Built not for passive browsing, but for disciplined entry into real partnership environments.',
  steps: [
    {
      number: 1,
      title: 'Select Your Role',
      body: 'Identify yourself as a buyer or vendor to surface the right pathway options for your situation.',
      roleVariant: null,
    },
    {
      number: 2,
      title: 'Explore Relevant Pathways',
      body: 'Review the partnership models shaped around your readiness, scale, and commercial intent.',
      roleVariant: {
        buyer: 'Sourcing, wholesale, private label, institutional, and collaboration pathways.',
        vendor: 'Market-entry, supply, export, private label, and collaboration pathways.',
      } as Record<'buyer' | 'vendor', string>,
    },
    {
      number: 3,
      title: 'Qualify and Apply',
      body: 'Complete the qualification process to confirm fit and submit your entry application for review.',
      roleVariant: null,
    },
    {
      number: 4,
      title: 'Complete Verified Onboarding',
      body: 'Move through the structured onboarding sequence designed for your pathway and readiness level.',
      roleVariant: null,
    },
    {
      number: 5,
      title: 'Enter the Partnership Environment',
      body: 'Once approved, you are placed into the operational partnership environment suited to your profile.',
      roleVariant: null,
    },
  ],
  ctas: {
    primary: { label: 'Start Entry', href: PUBLIC_ROUTES.APPLY, variant: 'primary' as const },
    secondary: {
      label: 'Book a Consultation',
      href: PUBLIC_ROUTES.BOOK_CONSULTATION,
      variant: 'secondary' as const,
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Section 3 Two Markets (houses EcosystemDiagram)
// ---------------------------------------------------------------------------

export const twoMarketsContent = {
  sectionLabel: 'Two Markets. One Partnership Architecture.',
  headline: 'Built for Global Demand and Kashmir-Origin Supply',
  intro:
    'The platform is designed around both sides of the relationship giving buyers a disciplined route into authentic craft sourcing and vendors a credible route into structured global market access.',
  closingLine:
    'The objective is not simple discovery. It is better alignment before partnership begins.',
  columns: {
    demand: {
      title: 'Global Demand',
      body: 'Premium retailers, hospitality buyers, museums and institutions, private label brands, distributors, and curated commerce operators.',
      participants: [
        'Premium Retailers',
        'Hospitality Buyers',
        'Museums & Institutions',
        'Private Label Brands',
        'Distributors',
        'Curated Commerce',
      ],
    },
    core: {
      title: 'The Partnership Layer',
      body: 'Role-aware entry, fit evaluation, trust architecture, guided onboarding, routing into the correct business environment.',
      functions: [
        'Role-aware entry',
        'Fit evaluation',
        'Trust architecture',
        'Guided onboarding',
        'Routing & placement',
      ],
    },
    supply: {
      title: 'Kashmir-Origin Supply',
      body: 'Artisans, workshops, cooperatives, organised craft businesses, exporters, and globally operating Kashmir-linked vendors.',
      participants: [
        'Master Artisans',
        'Craft Workshops',
        'Cooperatives',
        'Export Businesses',
        'Heritage Manufacturers',
        'GI Certified Vendors',
      ],
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Section 4 Pathways (interactive tab panel)
// ---------------------------------------------------------------------------

interface PathwayCard {
  system: string;
  title: string;
  description: string;
  subPaths: string[];
  buyer: { emphasis: string; cta: string };
  vendor: { emphasis: string; cta: string };
}

export const pathwaysContent = {
  sectionLabel: 'Pathway Architecture',
  headline: 'Partnership Models Designed Around How Serious Craft Business Actually Moves',
  intro:
    'Rather than forcing every participant into a single commercial model, the platform organises entry through distinct partnership pathways each shaped around readiness, relationship depth, and commercial scale.',
  supportLine:
    'Each pathway carries its own entry logic, trust requirements, onboarding sequence, and operational destination.',
  pathways: [
    {
      system: 'core-trade',
      title: 'Core Trade',
      description: 'The foundational commercial models for direct buyer-vendor trade at scale.',
      subPaths: ['Dropshipping', 'Consignment', 'Wholesale', 'Import / Export'],
      buyer: {
        emphasis: 'Structured sourcing, volume procurement, and verified supply access.',
        cta: 'Explore Core Trade Pathways',
      },
      vendor: {
        emphasis: 'Fulfil on demand, place in global retail, and access certified export routes.',
        cta: 'Explore Core Trade Pathways',
      },
    },
    {
      system: 'brand-expansion',
      title: 'Brand Expansion',
      description: 'Models built for premium placement, brand development, and market presence.',
      subPaths: ['Exhibition', 'Auction & Bidding', 'White Label', 'Brick & Mortar'],
      buyer: {
        emphasis: 'Source from premium showcases, bid on rare pieces, private label at scale.',
        cta: 'Explore Brand Expansion Pathways',
      },
      vendor: {
        emphasis: 'Exhibit to qualified buyers, manufacture for buyer brands, enter global retail.',
        cta: 'Explore Brand Expansion Pathways',
      },
    },
    {
      system: 'collaborative',
      title: 'Collaborative',
      description:
        'Partnership models centred on co-creation, storytelling, and shared infrastructure.',
      subPaths: [
        'Packaging',
        'Design Collaboration',
        'Storytelling & Media',
        'Warehouse & Fulfilment',
      ],
      buyer: {
        emphasis: 'Commission content, co-design products, access US warehousing and fulfilment.',
        cta: 'Explore Collaborative Pathways',
      },
      vendor: {
        emphasis: 'Collaborate with buyers, share your craft story, access global fulfilment.',
        cta: 'Explore Collaborative Pathways',
      },
    },
    {
      system: 'institutional',
      title: 'Institutional',
      description:
        'Specialist routes for institutional, governmental, and technology-led partnerships.',
      subPaths: [
        'Logistics',
        'Museum & Institutional',
        'NGO & Government',
        'Technology Partnership',
      ],
      buyer: {
        emphasis: 'End-to-end logistics, institutional procurement, and platform integration.',
        cta: 'Explore Institutional Pathways',
      },
      vendor: {
        emphasis:
          'Logistics integration, supply to museums, NGO programmes, and tech partnerships.',
        cta: 'Explore Institutional Pathways',
      },
    },
  ] satisfies PathwayCard[],
} as const;

// ---------------------------------------------------------------------------
// Section 5 Why It Works (merged StructuredEntry + Trust)
// ---------------------------------------------------------------------------

export const whyItWorksContent = {
  sectionLabel: 'Built on Structure, Trust, and Standards',
  headline: 'Because Serious Partnerships Require More Than Discovery',
  intro:
    'High-value cross-border craft business depends on participant quality, standards visibility, and a controlled entry model that reduces avoidable friction on both sides.',
  closingLine: 'For premium trade, trust is infrastructure not merely a promise.',
  /**
   * Left column why structured entry matters (from StructuredEntry)
   * Right column trust and protection standards (from Trust)
   * Rendered as 2×3 grid on desktop, 1-column stack on mobile.
   */
  leftPillars: [
    {
      id: 'verified-entry',
      title: 'Verified Participant Entry',
      body: 'Every participant is screened before access. Entry is earned, not assumed.',
    },
    {
      id: 'commercial-fit',
      title: 'Commercial Fit Before Commitment',
      body: 'Pathway selection happens before onboarding reducing mismatched partnerships.',
    },
    {
      id: 'origin-authenticity',
      title: 'Origin and Authenticity Awareness',
      body: 'Kashmir-origin supply is identified, documented, and traceable from source.',
    },
  ],
  rightPillars: [
    {
      id: 'traceability',
      title: 'Traceability-Ready Pathways',
      body: 'Built-in traceability logic supports GI compliance and provenance requirements.',
    },
    {
      id: 'protected-onboarding',
      title: 'Protected Onboarding Structure',
      body: 'Onboarding is governed. Participants move through stages, not around them.',
    },
    {
      id: 'partnership-growth',
      title: 'Partnership-Led Growth',
      body: 'Progression is structured. Unlocking next-level pathways requires demonstrated performance.',
    },
  ],
} as const;

// ---------------------------------------------------------------------------
// Section 6 Placement (5-stage onboarding stepper)
// ---------------------------------------------------------------------------

export const placementContent = {
  sectionLabel: 'From Entry to Placement',
  headline: 'A Disciplined Onboarding Experience for Both Sides of the Market',
  intro:
    'Entry is treated as the first layer of partnership qualification, preparing each participant for the environment they are most suited to enter.',
  closingLine: 'The purpose of onboarding is not simply access. It is correct placement.',
  stages: [
    {
      number: 1,
      title: 'Create Your Account',
      body: 'Register your profile and declare your role, segment, and initial intent.',
    },
    {
      number: 2,
      title: 'Define Business Readiness',
      body: 'Complete the readiness assessment that determines your pathway eligibility.',
    },
    {
      number: 3,
      title: 'Receive Pathway Direction',
      body: 'Based on your profile, the platform recommends the most suitable partnership paths.',
    },
    {
      number: 4,
      title: 'Complete Review and Onboarding',
      body: 'Move through the verified onboarding sequence for your chosen pathway.',
    },
    {
      number: 5,
      title: 'Enter the Operational Platform',
      body: 'Once placed, you are routed into the live partnership environment suited to your profile.',
    },
  ],
  cta: { label: 'Start Your Entry', href: PUBLIC_ROUTES.APPLY, variant: 'primary' as const },
} as const;

// ---------------------------------------------------------------------------
// Section 7 Finder (interactive opportunity finder)
// ---------------------------------------------------------------------------

export const finderContent = {
  sectionLabel: 'Find Your Best Entry Path',
  headline: 'Different Businesses Should Not Enter Through the Same Door',
  intro:
    'Whether the objective is sourcing, supply, private label, institutional placement, or collaboration the right entry path should be visible before onboarding begins.',
  cta: {
    label: 'Find My Path',
    href: PUBLIC_ROUTES.APPLY + '?finder=true',
    variant: 'primary' as const,
  },
  prompts: {
    role: 'Who are you?',
    objective: 'What is your immediate objective?',
    options: {
      buyer: [
        'Structured wholesale route',
        'Private label or design collaboration',
        'Hospitality / retail / institutional procurement',
        'Stronger trust and origin visibility',
      ],
      vendor: [
        'Wholesale or export pathways',
        'White label or collaboration',
        'More credible market-entry structure',
        'Stronger positioning around authenticity, GI, or traceability',
      ],
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Section 8 Signals (live opportunity visibility)
// ---------------------------------------------------------------------------

export const signalsContent = {
  sectionLabel: 'Current Partnership Signals',
  headline: 'Live Opportunity Visibility for Both Sides of the Market',
  intro:
    'The platform surfaces commercially relevant openings based on pathway logic, demand type, and participant readiness not generic promotional content.',
  closingLine: 'This is live commercial relevance, not generic activity.',

  tabs: [
    {
      key: 'artstay',
      label: 'Artstay',
      cards: [
        {
          id: 'artstay-sourcing-windows',
          label: 'Active Sourcing Windows',
          role: 'buyer' as const,
          description:
            'Verified buyers are currently open to receiving introductions from qualified supply partners.',
        },
        {
          id: 'artstay-supply-openings',
          label: 'Supply-Side Openings',
          role: 'vendor' as const,
          description:
            'Capacity is available on the supply side for partnership evaluation and volume discussion.',
        },
        {
          id: 'artstay-private-label',
          label: 'Private Label Requests',
          role: 'both' as const,
          description:
            'Requests are open for white label manufacturing and design collaboration at scale.',
        },
        {
          id: 'artstay-institutional-areas',
          label: 'Institutional Interest Areas',
          role: 'buyer' as const,
          description:
            'Institutional procurement channels are accepting supply submissions in specific categories.',
        },
        {
          id: 'artstay-collaboration-calls',
          label: 'Collaboration Calls',
          role: 'both' as const,
          description:
            'Co-creation and storytelling partnership openings for vendors and buyers aligned on narrative.',
        },
        {
          id: 'artstay-vendor-pathways',
          label: 'Vendor Pathway Openings',
          role: 'vendor' as const,
          description:
            'Structured entry pathways are available for qualified vendors seeking global market access.',
        },
      ],
    },
    {
      key: 'hamdan-craft',
      label: 'Hamdan Craft',
      cards: [
        {
          id: 'hamdan-sourcing-windows',
          label: 'Active Sourcing Windows',
          role: 'buyer' as const,
          description:
            'Verified buyers are currently open to receiving introductions from qualified supply partners.',
        },
        {
          id: 'hamdan-supply-openings',
          label: 'Supply-Side Openings',
          role: 'vendor' as const,
          description:
            'Capacity is available on the supply side for partnership evaluation and volume discussion.',
        },
        {
          id: 'hamdan-private-label',
          label: 'Private Label Requests',
          role: 'both' as const,
          description:
            'Requests are open for white label manufacturing and design collaboration at scale.',
        },
        {
          id: 'hamdan-institutional-areas',
          label: 'Institutional Interest Areas',
          role: 'buyer' as const,
          description:
            'Institutional procurement channels are accepting supply submissions in specific categories.',
        },
        {
          id: 'hamdan-collaboration-calls',
          label: 'Collaboration Calls',
          role: 'both' as const,
          description:
            'Co-creation and storytelling partnership openings for vendors and buyers aligned on narrative.',
        },
        {
          id: 'hamdan-vendor-pathways',
          label: 'Vendor Pathway Openings',
          role: 'vendor' as const,
          description:
            'Structured entry pathways are available for qualified vendors seeking global market access.',
        },
      ],
    },
    {
      key: 'craftlore',
      label: 'Craftlore',
      cards: [
        {
          id: 'craftlore-sourcing-windows',
          label: 'Active Sourcing Windows',
          role: 'buyer' as const,
          description:
            'Verified buyers are currently open to receiving introductions from qualified supply partners.',
        },
        {
          id: 'craftlore-supply-openings',
          label: 'Supply-Side Openings',
          role: 'vendor' as const,
          description:
            'Capacity is available on the supply side for partnership evaluation and volume discussion.',
        },
        {
          id: 'craftlore-private-label',
          label: 'Private Label Requests',
          role: 'both' as const,
          description:
            'Requests are open for white label manufacturing and design collaboration at scale.',
        },
        {
          id: 'craftlore-institutional-areas',
          label: 'Institutional Interest Areas',
          role: 'buyer' as const,
          description:
            'Institutional procurement channels are accepting supply submissions in specific categories.',
        },
        {
          id: 'craftlore-collaboration-calls',
          label: 'Collaboration Calls',
          role: 'both' as const,
          description:
            'Co-creation and storytelling partnership openings for vendors and buyers aligned on narrative.',
        },
        {
          id: 'craftlore-vendor-pathways',
          label: 'Vendor Pathway Openings',
          role: 'vendor' as const,
          description:
            'Structured entry pathways are available for qualified vendors seeking global market access.',
        },
      ],
    },
    {
      key: 'pls',
      label: 'Pls',
      cards: [
        {
          id: 'pls-sourcing-windows',
          label: 'Active Sourcing Windows',
          role: 'buyer' as const,
          description:
            'Verified buyers are currently open to receiving introductions from qualified supply partners.',
        },
        {
          id: 'pls-supply-openings',
          label: 'Supply-Side Openings',
          role: 'vendor' as const,
          description:
            'Capacity is available on the supply side for partnership evaluation and volume discussion.',
        },
        {
          id: 'pls-private-label',
          label: 'Private Label Requests',
          role: 'both' as const,
          description:
            'Requests are open for white label manufacturing and design collaboration at scale.',
        },
        {
          id: 'pls-institutional-areas',
          label: 'Institutional Interest Areas',
          role: 'buyer' as const,
          description:
            'Institutional procurement channels are accepting supply submissions in specific categories.',
        },
        {
          id: 'pls-collaboration-calls',
          label: 'Collaboration Calls',
          role: 'both' as const,
          description:
            'Co-creation and storytelling partnership openings for vendors and buyers aligned on narrative.',
        },
        {
          id: 'pls-vendor-pathways',
          label: 'Vendor Pathway Openings',
          role: 'vendor' as const,
          description:
            'Structured entry pathways are available for qualified vendors seeking global market access.',
        },
      ],
    },
  ],

  emptyState: {
    default: 'Select your role to see relevant partnership signals.',
    buyer: 'No active sourcing windows at this time. Check back soon or book a consultation.',
    vendor: 'No open demand signals at this time. Explore available pathways.',
  },
} as const;

// ---------------------------------------------------------------------------
// Section 9 Closing (ProofBand + Positioning + FinalCTA)
//
// Restructured: ProofBand becomes a full-width statement row.
// Positioning becomes a two-column contrast panel on warm ivory.
// FinalCTA becomes a dark atmospheric close headline + 3 CTAs.
// ---------------------------------------------------------------------------

export const closingContent = {
  /**
   * 9a Proof band
   */
  network: {
    sectionLabel: 'Business Network',
    headline: 'The Business Network Behind Structured Craft Trade',
    description:
      'A role-aware view of the businesses, professionals, and market participants that shape how buyers source and vendors grow through the platform.',
    stats: {
      buyer: [
        { value: '1645', label: 'Individual Purchasers' },
        { value: '473', label: 'Retail Customers' },
        { value: '433', label: 'Wholesale Purchasers' },
        { value: '140', label: 'Online Purchasers' },
        { value: '190', label: 'Interior Designers' },
        { value: '130', label: 'Corporate Purchasers' },
        { value: '327', label: 'Art Preservationists' },
        { value: '174', label: 'Global Merchandisers' },
        { value: '143', label: 'Hospitality Chains' },
        { value: '150', label: 'Fashion Designers' },
      ],
      vendor: [
        { value: '1154', label: 'Individual Artisans' },
        { value: '137', label: 'Artisan Communities' },
        { value: '145', label: 'Small Businesses' },
        { value: '128', label: 'Women Entrepreneurs' },
        { value: '139', label: 'Export Specialists' },
        { value: '144', label: 'Online Merchandisers' },
        { value: '125', label: 'Design Professionals' },
        { value: '138', label: 'Luxury Merchandisers' },
        { value: '135', label: 'Wholesale Suppliers' },
        { value: '129', label: 'Craft Professionals' },
      ],
    },
  },

  /**
   * 9b Positioning contrast
   */
  whyPartnership: {
    sectionLabel: 'Why Structured Partnership Matters',
    headline: 'Where Craft Businesses Break and How They Actually Grow',
    description:
      'Global craft trade is not limited by talent, but by access, structure, and execution. These are the real barriers — and how structured partnerships resolve them.',

    items: [
      {
        title: 'Limited Global Market Access',
        challenge:
          'Artisans and small craft businesses struggle to reach international buyers, limiting visibility and commercial growth.',
        solution:
          'Structured pathways connect vendors to verified global buyers through sourcing, retail, and partnership-led access models.',
      },
      {
        title: 'Operational and Logistics Complexity',
        challenge:
          'Logistics, warehousing, and cross-border processes create friction that most small producers cannot manage alone.',
        solution:
          'The platform manages operational complexity through integrated logistics, enabling vendors to focus on production and quality.',
      },
      {
        title: 'Compliance and Standards',
        challenge:
          'Meeting global expectations around sustainability, compliance, and fair trade is difficult without structured guidance.',
        solution:
          'Built-in trust architecture ensures alignment with international standards, strengthening credibility and buyer confidence.',
      },
      {
        title: 'High Financial Entry Risk',
        challenge:
          'Upfront costs for distribution, marketing, and expansion create barriers for smaller businesses entering global markets.',
        solution:
          'Flexible partnership models reduce risk exposure while enabling gradual, performance-based commercial scaling.',
      },
      {
        title: 'Weak Brand Visibility',
        challenge:
          'Craft producers often lack the positioning and exposure required to compete in international markets.',
        solution:
          'Brand and market-facing pathways improve visibility through structured promotion, collaborations, and retail placement.',
      },
      {
        title: 'Quality and Packaging Gaps',
        challenge:
          'Meeting international expectations in product quality and packaging requires resources many vendors do not have.',
        solution:
          'Access to tools, expertise, and standards frameworks improves product readiness for global distribution.',
      },
      {
        title: 'Lack of Industry Network Access',
        challenge:
          'Without access to serious buyers and networks, vendors remain isolated from high-value opportunities.',
        solution:
          'The platform connects participants to strategic networks, enabling entry into real commercial ecosystems.',
      },
      {
        title: 'Unstable Business Models',
        challenge:
          'Seasonal demand and limited diversification restrict long-term sustainability for craft businesses.',
        solution:
          'Multiple partnership pathways enable diversified revenue models and more stable commercial growth.',
      },
      {
        title: 'Risk of Counterfeits and Misrepresentation',
        challenge:
          'Lack of authenticity protection leads to counterfeits, loss of trust, and reduced market value.',
        solution:
          'Verification and traceability mechanisms protect product authenticity and ensure trusted global trade.',
      },
    ],
  },

  /**
   * 9c Final CTA
   * Deep dark, atmospheric. Headline + subheading + 3 CTAs.
   * Role-aware: if role is set, primary CTA adapts.
   */
  finalCta: {
    sectionLabel: 'Enter Through the Right Partnership Path',
    headline: 'Begin Where Better Partnerships Begin',
    subheading:
      'Whether you are sourcing from a global market or building from Kashmir-origin supply, the platform is designed to help serious participants enter with greater clarity, stronger trust, and a more suitable route to active partnership.',
    supportLine:
      'Approved participants are placed into the appropriate operational partnership environment following qualification and onboarding.',
    ctas: {
      default: [
        {
          label: 'Enter as Buyer',
          href: PUBLIC_ROUTES.REGISTER + '?role=buyer',
          variant: 'primary' as const,
        },
        {
          label: 'Enter as Vendor',
          href: PUBLIC_ROUTES.REGISTER + '?role=vendor',
          variant: 'secondary' as const,
        },
        {
          label: 'Book a Private Consultation',
          href: PUBLIC_ROUTES.BOOK_CONSULTATION,
          variant: 'ghost' as const,
        },
      ],
      buyer: [
        {
          label: 'Start Buyer Entry',
          href: PUBLIC_ROUTES.REGISTER + '?role=buyer',
          variant: 'primary' as const,
        },
        {
          label: 'Explore Buyer Pathways',
          href: PUBLIC_ROUTES.PARTNERSHIP_PATHS + '?role=buyer',
          variant: 'secondary' as const,
        },
        {
          label: 'Book a Consultation',
          href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=buyer',
          variant: 'ghost' as const,
        },
      ],
      vendor: [
        {
          label: 'Start Vendor Entry',
          href: PUBLIC_ROUTES.REGISTER + '?role=vendor',
          variant: 'primary' as const,
        },
        {
          label: 'Explore Vendor Pathways',
          href: PUBLIC_ROUTES.PARTNERSHIP_PATHS + '?role=vendor',
          variant: 'secondary' as const,
        },
        {
          label: 'Book a Consultation',
          href: PUBLIC_ROUTES.BOOK_CONSULTATION + '?role=vendor',
          variant: 'ghost' as const,
        },
      ],
    },
  },
} as const;

// ---------------------------------------------------------------------------
// Master export
// ---------------------------------------------------------------------------

export const HOMEPAGE = {
  hero: { shared: heroShared, roles: heroContent },
  entryJourney: entryJourneyContent,
  twoMarkets: twoMarketsContent,
  pathways: pathwaysContent,
  whyItWorks: whyItWorksContent,
  placement: placementContent,
  finder: finderContent,
  signals: signalsContent,
  closing: closingContent,
} as const;

export type HomepageContent = typeof HOMEPAGE;
