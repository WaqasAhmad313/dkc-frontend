export type AuctionAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type AuctionQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const auctionMeta = {
  slug: 'auction',
  system: 'brand-growth',
  tier: 2,
  label: 'Auction & Bidding',
  pageTitle: 'Auction & Bidding Partnerships',
  seoDescription:
    'A premium auction pathway connecting certified Kashmiri handmade crafts with global collectors, institutional buyers, and high-value bidders through verified listings, transparent bidding, and heritage-first trade.',
  kpiRequired: '7.5+',
  retentionRequired: '4 months',
  previousSlug: 'exhibition',
  nextSlug: 'white-label',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['auction', 'bidding', 'premium', 'collectors', 'heritage', 'brand-expansion'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer is a collector, institutional buyer, or auction participant.
// Vendor is an artisan or craft business listing premium products for auction.

export const auctionHero = {
  sectionLabel: 'Auction & Bidding Partnership',
  shared: {
    badge: 'Brand Expansion — Tier 2',
    statusChip: 'KPI 7.5+ Required — Exhibition Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Bid on Rare, Certified Kashmir Craft. Transparent. Competitive. Global.',
      description:
        'Bid on GI-certified, blockchain-backed Kashmiri craft at live and digital auctions — transparent bidding with authenticity guaranteed on every lot.',
      primaryCta: {
        label: 'Start Buyer Application',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'List Your Premium Kashmir Craft for Global Auction. Achieve True Market Value.',
      description:
        'List your premium and limited-edition Kashmir craft for competitive global bidding — GI certification, blockchain provenance, and KHCRF verification on every lot.',
      primaryCta: {
        label: 'Start Vendor Application',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Consultation',
        href: '/book-consultation',
      },
    },
  },
} as const;

// ─── Overview Section ─────────────────────────────────────────────────────────
// Shared: problem and solution framing applies to both roles.

export const auctionOverview = {
  sectionLabel: 'Why Auction & Bidding',
  headline: 'Creating Transparent Pricing for Premium Craft',
  description:
    'High-value craft lacks structured auction systems, leading to inconsistent pricing and counterfeit risks. This pathway enables verified listings, transparent bidding, and fair market valuation.',
  problems: [
    'Vendors face inconsistent pricing with no market benchmark',
    'Buyers encounter counterfeits without verified provenance',
    'No structured auction system for certified craft',
    'High-value pieces are undervalued without competitive bidding',
  ],
  solutions: [
    'Verified participants for all auction listings',
    'Authenticated products with traceable provenance',
    'Transparent bidding with full pricing visibility',
    'Structured progression into advanced trade pathways',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Organizer/Artisan/Seller terminology replaced with buyer/vendor throughout.

export const auctionModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not a Generic Auction Platform. Kashmir-Exclusive. Heritage-First. Fully Verified.',
  exclusivityNote:
    'Exclusively for certified Kashmiri handmade craft — no replicas, no unverified lots, no intermediary extraction. Every auction on DKC is GI-authenticated, blockchain-traced, and KHCRF-compliant.',
  sharedFeatures: [
    {
      icon: 'Gavel',
      title: 'Live and Digital Auction Infrastructure',
      description:
        'Live, timed, sealed-bid, and hybrid auction formats with anti-sniping controls built in.',
    },
    {
      icon: 'Eye',
      title: 'Full Bidding Transparency',
      description:
        'Bid histories, reserve pricing, and valuations published in real time for every event.',
    },
    {
      icon: 'ShieldCheck',
      title: 'GI and Blockchain Authentication on Every Lot',
      description:
        'Every lot verified through GI certification, blockchain records, KHCRF review, and curator audit.',
    },
    {
      icon: 'Megaphone',
      title: 'Targeted Auction Promotion',
      description:
        'Events marketed through global collector networks, cultural media, and institutional buyer channels.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'Package',
          title: 'Rare and Verified Kashmir Craft Access',
          description:
            'Rare and premium Kashmir craft — every lot GI-certified and blockchain-traced before auction.',
        },
        {
          icon: 'CheckCircle',
          title: 'Fair-Value Pricing Through Open Competition',
          description:
            'Transparent competitive bidding establishes true market price on every winning lot.',
        },
        {
          icon: 'Users',
          title: 'Access to Exclusive Artisan-Driven Events',
          description:
            'Seasonal and thematic auctions curated for collectors, institutions, and serious craft buyers.',
        },
        {
          icon: 'TrendingUp',
          title: 'Retail Differentiation Through Heritage Acquisition',
          description:
            'Acquire collectible heritage pieces that differentiate your collection from mass-market alternatives.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Global Collector and Institutional Buyer Access',
          description:
            'List premium Kashmir craft for collectors and institutional buyers — no intermediary extraction.',
        },
        {
          icon: 'Award',
          title: 'Artisan Recognition Through Competitive Auctions',
          description:
            'Strong auction results earn elevated platform status and priority positioning in future events.',
        },
        {
          icon: 'DollarSign',
          title: 'Maximum Revenue Through Competitive Bidding',
          description:
            'Competitive bidding eliminates price suppression — artisans achieve true value for premium craft.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Pathway to White Label and Institutional Tiers',
          description:
            'Auction performance builds credibility that unlocks White Label and institutional partnerships.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values taken from cluster file (brandGrowth_content.ts). See CLIENT FLAG 1.

export const auctionEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Auction Requires Exhibition Completion and Premium Product Readiness',
  description:
    'Auction & Bidding is the second tier of Brand Expansion. Partners entering Auction have demonstrated exhibition performance and are ready for competitive global bidding with premium, limited-edition, and collector-grade Kashmiri craft.',
  requirements: [
    {
      label: 'KPI Required',
      value: '7.5+',
      note: 'Minimum performance score from prior Exhibition trade.',
    },
    {
      label: 'Retention Period',
      value: '4 months',
      note: 'Minimum time at Auction before progressing to White Label.',
    },
    {
      label: 'Previous Level',
      value: 'Exhibition',
      note: 'Standard path requires Exhibition completion within Brand Expansion.',
    },
    {
      label: 'Product Standard',
      value: 'Premium / Limited-Edition',
      note: 'Auction requires collector-grade, GI-certified, KHCRF-verified products.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Auction with strong performance, partners unlock White Label — the next Brand Expansion tier — with private label product development and exclusive branded Kashmir craft partnerships.',
  nextSlug: 'white-label',
  nextLabel: 'White Label',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() auction block.

export const auctionEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Auction, your readiness level, and whether you qualify for faster progression into White Label.',
  introCard: {
    icon: 'Target',
    title: 'Auction & Bidding Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your auction readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Auction & Bidding Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Auction',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as AuctionQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as AuctionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as AuctionQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and auction standards',
          'Exceeds auction and collector-grade standards',
        ],
        category: 'general' as AuctionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as AuctionQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as AuctionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as AuctionQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as AuctionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as AuctionQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully certified safe workplaces',
        ],
        category: 'general' as AuctionAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'exhibition_retention',
        question: 'Did you complete 4 months retention in Exhibition?',
        type: 'single' as AuctionQuestionType,
        options: ['No', 'In Progress', 'Yes'],
        category: 'validation' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'exhibition_kpi',
        question: 'Did you maintain KPI 7.0 or above in Exhibition?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'exhibition_participation',
        question: 'Did you participate in at least one certified exhibition or trade fair?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'auction_catalogs',
        question: 'Have you prepared digital catalogs and verified product listings for auction?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as AuctionAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_premium_products',
        question:
          'Do you have limited-edition or collector-grade premium craft products ready for auction?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_auction_logistics',
        question:
          'Can you handle live auction demand, packaging, and rapid post-auction logistics?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_khcrf_verification',
        question:
          'Have you completed KHCRF product authenticity verification for your auction lots?',
        type: 'yesno' as AuctionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_auction_readiness',
        question:
          'Which of these auction readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as AuctionQuestionType,
        options: [
          'Auction pricing strategy — reserve pricing and lot valuation defined',
          'Inventory allocation for bidding events — dedicated lots identified',
          'Digital listing compliance — all metadata, images, and provenance documents ready',
        ],
        category: 'vendor' as AuctionAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type_auction',
        question: 'What best describes your auction buying intent?',
        type: 'single' as AuctionQuestionType,
        options: [
          'Collector — acquiring heritage craft for personal or investment collection',
          'Wholesaler or distributor — sourcing premium lots at volume',
          'Institutional buyer — museum, gallery, or cultural procurement',
        ],
        category: 'buyer' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_auction_budget',
        question: 'What is your approximate per-auction budget?',
        type: 'single' as AuctionQuestionType,
        options: ['Under $10,000', 'Over $10,000'],
        category: 'buyer' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_auction_preference',
        question: 'Do you prefer live, digital, or hybrid auction formats?',
        type: 'single' as AuctionQuestionType,
        options: [
          'Live auctions — in-person bidding events',
          'Digital auctions — remote online bidding',
          'Both — flexible across formats',
        ],
        category: 'buyer' as AuctionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_auction_readiness',
        question:
          'Which of these buyer auction readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as AuctionQuestionType,
        options: [
          'Payment system ready — Letter of Credit, escrow, or digital wallet in place',
          'KHCRF auction policy compliance — aware of and aligned with participation rules',
          'Commitment to authentic sourcing — will only bid on GI-certified verified lots',
        ],
        category: 'buyer' as AuctionAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Auction (TIER 2 / L6)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Auction + Fast Track to White Label',
        fastTrackEligible: true,
        nextLevel: 'White Label',
      },
      21: {
        eligibility: 'White Label (TIER 2 / L7)',
        fastTrackEligible: true,
        nextLevel: 'White Label',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 7.5,
        retentionPeriod: '4 months',
      },
      buyer: {
        commitment: null,
        kpiThreshold: 7.5,
        retentionPeriod: '4 months',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Auction (TIER 2 / L6)':
          "You're eligible for Auction. Build your premium product listings and global collector presence from here.",
        'Auction + Fast Track to White Label':
          "Great fundamentals. You're eligible for Auction with a fast track to White Label.",
        'White Label (TIER 2 / L7)':
          'Exceptional. Your auction record makes you eligible for White Label via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Auction (TIER 2 / L6)': [
          'Join the Auction programme.',
          'Submit auction documentation and lot credentials.',
          'Complete KHCRF product authenticity verification.',
          'Build premium product listings for your first auction event.',
        ],
        'Auction + Fast Track to White Label': [
          'Join the Auction programme.',
          'Enrol in the Readiness Programme (RP).',
          'Strengthen branding, packaging, and premium presentation materials.',
          'Prepare operational systems for the White Label transition.',
        ],
        'White Label (TIER 2 / L7)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit auction sales records and performance credentials.',
          'Complete KHCRF white label onboarding review.',
          'Prepare for direct transition into private label partnerships.',
        ],
      },
      strengthsByOutcome: {
        'Auction (TIER 2 / L6)': [
          'Commitment to premium auction participation',
          'Strong operational foundation from Exhibition',
        ],
        'Auction + Fast Track to White Label': [
          'Premium product readiness',
          'Auction logistics and catalogue management',
          'Clear White Label progression trajectory',
        ],
        'White Label (TIER 2 / L7)': [
          'Collector-grade product standards',
          'Strong auction performance record',
          'Premium brand positioning capability',
        ],
      },
      improvementsByOutcome: {
        'Auction (TIER 2 / L6)': [
          'Strengthen product verification and KHCRF documentation.',
          'Improve auction logistics and rapid post-auction fulfilment.',
          'Build premium product listings with full provenance records.',
        ],
        'Auction + Fast Track to White Label': [
          'Advance White Label branding and packaging capability.',
          'Strengthen private label documentation for transition.',
        ],
        'White Label (TIER 2 / L7)': [],
      },
      defaultStrengths: [
        'Commitment to premium auction participation',
        'Strong Brand Expansion foundation from Exhibition',
        'Premium and limited-edition product readiness',
      ],
      defaultDevelopmentAreas: [
        'Strengthen product verification and provenance documentation.',
        'Improve auction logistics and post-event fulfilment capability.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// Organizer/Seller/Exhibitor terminology replaced with buyer/vendor.

export const auctionCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Premium Auction Infrastructure for Kashmir Craft',
  subheadline: 'Competitive bidding unlocks true market value for rare and collectible craft.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Verified vendors connected with global collectors and institutions',
        'Real-time digital bidding with transparent auction flow',
        'Curated catalogs showcasing authenticated premium craft',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'End-to-end handling, shipping, and post-auction storage',
        'GI-certified lots under KHCRF and fair-trade governance',
        'Insured inventory with secure settlement after delivery',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Bidding insights and buyer behaviour analytics per event',
        'Lot-level performance and valuation reporting',
        'Demand signals for future auction positioning',
      ],
    },
    {
      title: 'Market Positioning',
      icon: 'Users',
      items: [
        'Direct access to premium collector and luxury markets',
        'True price discovery through competitive bidding',
        'Pathways into museum, luxury, and institutional channels',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Access to rare, authenticated heritage craft',
        'Transparent pricing through open bidding competition',
        'Collectible pieces with verified provenance',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Premium pricing through competitive bidding dynamics',
        'Real-time market validation of craft value',
        'Luxury positioning within global collector markets',
      ],
    },
  },

  impact: [
    {
      title: 'Luxury Market Entry',
      description: 'Positioning Kashmir craft within global collectible and luxury sectors',
    },
    {
      title: 'Higher Artisan Valuation',
      description: 'Competitive auctions raising global pricing benchmarks',
    },
    {
      title: 'Transparent Pricing',
      description: 'Open bidding establishing fair and visible market value',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const auctionPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Auction & Bidding partnership introduces Kashmiri handicrafts to global auction markets — enabling premium pricing, competitive bidding, and stronger access to collectors and high-value institutional buyers worldwide.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Access to Rare and Unique Craft',
//           description:
//             'Transparent auctions with GI-certified, blockchain-backed authenticity on every rare Kashmir lot.',
//         },
//         {
//           title: 'Fair-Value Pricing Through Open Competition',
//           description:
//             'Competitive bidding establishes genuine market value — transparent pricing on every winning lot.',
//         },
//         {
//           title: 'Collectible Heritage with Cultural Prestige',
//           description:
//             'Authenticated heritage pieces with documented provenance — differentiates your collection globally.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Premium Pricing Through Competitive Bidding',
//           description:
//             'Competitive bidding eliminates price suppression — artisans achieve true value for premium craft.',
//         },
//         {
//           title: 'Real-Time Market Validation',
//           description:
//             'Auction results provide immediate market feedback on craft demand and premium valuation.',
//         },
//         {
//           title: 'Luxury and Collector Market Positioning',
//           description:
//             'Auction positions Kashmir craft in the luxury tier — building credibility with collectors globally.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Elevation into Luxury and Investment Markets',
//         description:
//           'Structured auction access positions Kashmir craft in global luxury and collectible investment markets — raising the international commercial profile of the entire craft sector.',
//       },
//       {
//         title: 'Increased Overall Artisan Valuation',
//         description:
//           'Competitive bidding raises the benchmark valuation of Kashmiri artisan products globally — benefiting not just auction participants but the entire craft category internationally.',
//       },
//       {
//         title: 'Transparent and Fair Craft Pricing',
//         description:
//           'Published bid histories and open competition build a transparent pricing record for Kashmir craft — strengthening sector credibility and reducing exploitation of artisans in informal markets.',
//       },
//       {
//         title: 'International Prestige for Kashmir Heritage',
//         description:
//           'Auction participation on global platforms builds lasting international prestige for Kashmiri heritage craft — encouraging younger artisans to invest in premium craftsmanship standards.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// IMPORTANT: Auction pricing is YEARLY not monthly — same as Exhibition.
// billingPeriod: 'year' throughout.
// No onboarding fee — packages cover membership and catalog placement only.

export const auctionPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Auction Participation.',
  description:
    'Three clear yearly package tiers covering membership, catalog placement, and auction support. Physical auction costs are separate and disclosed in advance for each event.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Auction & Bidding partnership.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'Auction partnerships have no separate onboarding fee. Select a yearly package to begin participation.',
    note: 'Physical auction costs — lot handling, venue logistics, insurance, transport — are separate and shared with partners in advance of each event.',
    badge: 'Yearly Membership — No Upfront Onboarding Cost',
  },
  packages: [
    {
      name: 'Standard',
      price: '$100',
      billingPeriod: 'year',
      features: [
        'Basic access to online and digital auction events',
        'Standard catalog listing per auction',
        'Basic branding and product profile support',
        'Post-auction performance summary',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Extended catalog visibility across multiple events',
        'Priority lot listing and AR product integration',
        'Buyer lead-sharing after each auction event',
        'Enhanced digital marketing promotion per lot',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$500',
      billingPeriod: 'year',
      features: [
        'Unlimited auction lot listings across all events',
        'Dedicated auction support team per event',
        'Premium catalog placement and collector targeting',
        'Post-auction storage access and priority buyer matchmaking',
      ],
      recommended: false,
    },
  ],
  range: '$100–$500/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from support line.

export const auctionTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Auction and Bidding Infrastructure Built for Speed, Security, and Trust',
  description:
    'DKC Connect powers auction events with real-time bidding engines, blockchain-secured authentication, transparent price analytics, and automated settlement — purpose-built for premium Kashmiri craft at global auction scale.',
  features: [
    {
      icon: 'Activity',
      title: 'High-Speed Bidding Engines',
      description:
        'High-throughput live processing with anti-sniping controls and configurable bid increments.',
    },
    {
      icon: 'Settings',
      title: 'Flexible Auction Formats',
      description:
        'Timed, live, sealed-bid, and hybrid auction formats via single unified management interface.',
    },
    {
      icon: 'BookOpen',
      title: 'Automated Catalog Publishing',
      description:
        'Auto-generated catalogs with images, provenance records, and reserve pricing for global distribution.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Blockchain Provenance and Tracking',
      description:
        'Blockchain-verified ownership records ensure authenticity and prevent counterfeit lots from buyers.',
    },
    {
      icon: 'CreditCard',
      title: 'Secure Multi-Currency Payment and Escrow',
      description:
        'Escrow payments, multi-currency settlement, and fraud detection held until verified delivery.',
    },
    {
      icon: 'UserCheck',
      title: 'KYC and Bidder Verification',
      description:
        'KYC and AML compliance verify all participants before bidding access is granted.',
    },
    {
      icon: 'TrendingUp',
      title: 'Real-Time Price Transparency',
      description: 'Bid history, price analytics, and valuation benchmarks published in real time.',
    },
    {
      icon: 'FileCheck',
      title: 'Automated Auction Settlement',
      description:
        'Post-auction invoicing, tax calculation, ownership transfer, and payout automated on settlement.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated auction operations integration for smooth bidding event management.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers and vendors participating in auctions.
// "Prime Logic Solutions" removed throughout.

export const auctionApiIntegration = {
  sectionLabel: 'Auction Integration',
  headline: 'Already Running Auctions? Accelerate With DKC.',
  description:
    'Launch verified lots, drive competitive global bids, automate settlement payouts, and manage post-auction logistics — all through a single integrated auction platform.',
  features: [
    {
      icon: 'UserCheck',
      title: 'Vendor and Buyer Onboarding',
      description:
        'KYC and AML verification, GI and KHCRF validation, consent management, and contract execution.',
    },
    {
      icon: 'Image',
      title: 'Lot Cataloging and Media',
      description:
        'Lot intake, condition reports, multi-image support, provenance metadata, and reserve pricing.',
    },
    {
      icon: 'Gavel',
      title: 'Bidding Engine Integration',
      description:
        'Timed and live auction APIs with proxy bidding, anti-sniping, and real-time bid status feeds.',
    },
    {
      icon: 'CreditCard',
      title: 'Payments and Escrow',
      description:
        'Card, ACH, and wire payments with escrow released on verified post-auction settlement.',
    },
    {
      icon: 'Truck',
      title: 'Post-Auction Logistics and Insurance',
      description:
        'Lot pickup, packing, carrier booking, shipment tracking, cargo coverage, and claims workflow.',
    },
  ],
  support: {
    description:
      'Auction integration support covering KYC and AML systems, escrow payment gateways, live bidding APIs, anti-sniping configuration, reserve logic, DAM and CRM mappings, sandbox environments, SDKs, and documented SLAs.',
    note: 'API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const auctionWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Global Auction — Four Steps',
  description:
    'A structured, professionally managed pathway from application to active bidding participation.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Auction application with identity, business details, and Exhibition completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Verification',
      description:
        'Platform validates KPI from Exhibition (7.5+ required), KHCRF certification, and premium product readiness.',
    },
    {
      step: 3,
      label: 'Catalog & Bid',
      description:
        'Lot documentation, provenance verification, and catalog publication complete — timed and live auction events go global.',
    },
    {
      step: 4,
      label: 'Settle & Progress',
      description:
        'Escrow payments released on verified delivery, ownership recorded on blockchain — KPI builds toward White Label.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'white-label',
    name: 'White Label',
    kpiRequired: '7.5+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const auctionFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Auction & Bidding',
  items: [
    {
      question: 'Do I need a KPI score to enter Auction?',
      answer:
        'Yes. A minimum KPI of 7.5 from Exhibition is required, along with completion of at least one certified exhibition or trade fair.',
    },
    {
      question: 'Do vendors get paid immediately after an auction?',
      answer:
        'No — funds are held in escrow and released only after verified settlement and confirmed delivery. This protects both vendors and buyers and ensures every transaction is fully completed before payment transfers.',
    },
    {
      question: 'What is the difference between live and digital auctions?',
      answer:
        'Digital auctions are fully remote — buyers bid online from anywhere. Physical live auctions involve in-person events with additional booth, venue, and logistics support.',
    },
    {
      question: 'How are craft pieces valued before auction listing?',
      answer:
        'Lot valuation uses AI-powered appraisal tools, independent expert review, blockchain ownership logging, and GI certificate verification — providing a transparent, evidence-based reserve price for every listed piece.',
    },
    {
      question: 'Can buyers from anywhere in the world participate?',
      answer:
        'Yes. Global buyers participate in digital auctions from any location — physical event access is confirmed per event.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const auctionFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Premium Kashmir Craft. Global Auction. Transparent Value.',
    description:
      'Blockchain-verified lots, competitive global bidding, and escrow-protected settlement — establishing true market value for authenticated Kashmir craft.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Bid on Rare, Certified Kashmir Craft at Global Auction?',
      supportingPoints: [
        'Every lot GI-certified, blockchain-traced, and independently authenticated before listing.',
        'Transparent bid histories — real-time price visibility for all participants.',
        'Digital and live auction formats — bid from anywhere globally.',
      ],
      primaryCta: {
        label: 'Start Buyer Application',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'Ready to List Your Premium Kashmir Craft for Competitive Global Bidding?',
      supportingPoints: [
        'Competitive bidding eliminates informal price suppression — achieve true market value.',
        'KHCRF verification and blockchain provenance on every lot.',
        'Strong performance builds the record that unlocks White Label.',
      ],
      primaryCta: {
        label: 'Start Vendor Application',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Consultation',
        href: '/book-consultation',
      },
    },
  },
} as const;

// ─── Master Export ────────────────────────────────────────────────────────────

export const AUCTION = {
  meta: auctionMeta,
  heroSection: auctionHero,
  overviewSection: auctionOverview,
  modelDifferenceSection: auctionModelDifference,
  eligibilityRulesSection: auctionEligibilityRules,
  eligibilityAssessmentSection: auctionEligibilityAssessment,
  capabilitiesSection: auctionCapabilities,
  // platformAdvantageSection: auctionPlatformAdvantage,
  pricingSection: auctionPricing,
  technologySection: auctionTechnology,
  apiIntegrationSection: auctionApiIntegration,
  workflowSection: auctionWorkflow,
  faqSection: auctionFaq,
  finalCtaSection: auctionFinalCta,
} as const;

export type AuctionContent = typeof AUCTION;
