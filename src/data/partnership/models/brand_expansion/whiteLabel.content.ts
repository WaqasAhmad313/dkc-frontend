export type WhiteLabelAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type WhiteLabelQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const whiteLabelMeta = {
  slug: 'white-label',
  system: 'brand-growth',
  tier: 2,
  label: 'White Label',
  pageTitle: 'White Label Partnerships',
  seoDescription:
    'Launch your own private-label brand using authentic, GI-certified Kashmiri craft — with verified sourcing, custom-branded packaging, compliance-ready trade systems, and a structured pathway into physical retail.',
  kpiRequired: '8.0+',
  retentionRequired: '4 months',
  previousSlug: 'auction',
  nextSlug: 'brick-mortar',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: [
    'white-label',
    'private-label',
    'branding',
    'retail',
    'custom-packaging',
    'brand-expansion',
  ],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer is a retailer or brand launching a private-label Kashmir craft line.
// Vendor is an artisan or craft business supplying products under buyer brand identities.

export const whiteLabelHero = {
  sectionLabel: 'White Label Partnership',
  shared: {
    badge: 'Brand Expansion — Tier 2',
    statusChip: 'KPI 8.0+ Required — Auction Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Launch Your Own Private-Label Kashmir Craft Brand. Without the Production Burden.',
      description:
        'Build and scale exclusive private-label collections using GI-certified, authentic Kashmiri handmade craft — without managing your own production. DKC handles sourcing, branding execution, compliance, and logistics. You control the brand identity, the product line, and the market positioning.',
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
      headline: 'Supply Global Retail Brands with Your Authentic Kashmir Craft. At Scale.',
      description:
        'Become the verified production partner behind global private-label Kashmir craft collections — with stable long-term contracts, consistent order volumes, predictable revenue, and a pathway from private-label supply into full export and franchise partnerships.',
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

export const whiteLabelOverview = {
  sectionLabel: 'Why White Label',
  headline: 'Enabling Private-Label Craft Retail',
  description:
    'Private-label retail requires reliable sourcing, compliance, and branding. This pathway connects verified vendors with retailers through structured supply and customized branding systems.',
  problems: [
    'Vendors lack access to stable private-label supply opportunities',
    'Buyers face quality inconsistency and counterfeit risks',
    'No structured compliance for craft in private-label retail',
    'Packaging and logistics gaps reduce retail readiness',
  ],
  solutions: [
    'Verified vendors supplying authenticated craft products',
    'Consistent quality and sourcing for private-label lines',
    'Structured compliance and contract-based partnerships',
    'Custom packaging and retail-ready supply systems',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Raw file had duplicate DollarSign icons — resolved with distinct icons per feature.

export const whiteLabelModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not Generic Private Label. Kashmir-Exclusive. Heritage-Verified. Retail-Ready.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass production, no unverified sourcing. Every white label product is GI-certified, KHCRF-compliant, and blockchain-traced from artisan to retail shelf.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Verified Private-Label Marketplace',
      description:
        'A governed platform connecting buyers seeking private-label Kashmir craft with certified vendors ready to supply consistent, retail-grade product under buyer brand identities.',
    },
    {
      icon: 'Tag',
      title: 'Custom Branding and Packaging Infrastructure',
      description:
        'Full private-label branding support — custom labels, packaging design, cultural storytelling integration, and brand identity execution from brief to finished retail-ready product.',
    },
    {
      icon: 'Shield',
      title: 'US and EU Retail Compliance',
      description:
        'White label products meet US and EU retail, trade, and safety standards — with automated compliance checks, GS1 barcoding, multilingual labelling, and certification documentation.',
    },
    {
      icon: 'Truck',
      title: 'End-to-End Private-Label Supply Chain',
      description:
        'Centralised logistics coordination for production, branded packaging, quality control, warehousing, and direct-to-store distribution — managed as a single integrated supply chain.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Exclusive Brand Launch Without Production Burden',
          description:
            'Launch exclusive private-label Kashmiri craft collections without owning or managing production — DKC handles sourcing, quality control, packaging execution, and supply chain coordination.',
        },
        {
          icon: 'CheckCircle',
          title: 'Certified Authenticity Under Your Brand',
          description:
            'Source GI-certified, blockchain-traced Kashmiri craft for your private label — giving your brand the credibility of verified artisan origin while maintaining full brand ownership.',
        },
        {
          icon: 'TrendingUp',
          title: 'Premium Retail and International Market Expansion',
          description:
            'Expand white-label offerings into premium retail channels, international markets, and exclusive distribution partnerships — with product compliance and logistics already handled.',
        },
        {
          icon: 'BarChart3',
          title: 'Lower Development Cost Than Proprietary Manufacturing',
          description:
            'Access distinctive, heritage-rich private-label product lines at a fraction of the cost of building proprietary manufacturing — with stronger authenticity and cultural differentiation.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Stable Supply Contracts With Global Retail Brands',
          description:
            'Supply authentic Kashmiri craft to global retailers and brand owners under their private labels — with long-term, structured contracts that provide volume certainty and payment stability.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Volume Scaling Across Multiple Product Categories',
          description:
            'White-label partnerships expand vendor production volumes systematically across multiple craft categories — building the operational scale that supports export and franchise entry.',
        },
        {
          icon: 'DollarSign',
          title: 'Predictable, Higher-Margin Revenue',
          description:
            'Recurring white-label contracts provide predictable, long-term revenue streams at margins that reflect the premium quality of authentic Kashmir craft — not informal market pricing.',
        },
        {
          icon: 'Award',
          title: 'Global Market Access and Credibility',
          description:
            "Although products carry the buyer's brand label, GI certification and KHCRF compliance build vendor credibility as a globally recognised, certified Kashmir craft manufacturer.",
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values taken from cluster file (brandGrowth_content.ts). See CLIENT FLAG 1.

export const whiteLabelEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'White Label Requires Auction Completion and Private-Label Production Readiness',
  description:
    'White Label is the third tier of Brand Expansion. Partners entering White Label have demonstrated premium product capability through Auction and are ready for structured private-label contracts with retail-grade compliance and branded supply chains.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.0+',
      note: 'Minimum performance score from prior Auction participation.',
    },
    {
      label: 'Retention Period',
      value: '4 months',
      note: 'Minimum time at White Label before progressing to Brick & Mortar.',
    },
    {
      label: 'Previous Level',
      value: 'Auction & Bidding',
      note: 'Standard path requires Auction completion within Brand Expansion.',
    },
    {
      label: 'Compliance',
      value: 'KHCRF IP and Branding Review',
      note: 'Mandatory IP compliance and branding contract review for all partners.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at White Label with strong performance, partners unlock Brick & Mortar — the final Brand Expansion tier — with physical retail store activation and permanent market presence.',
  nextSlug: 'brick-mortar',
  nextLabel: 'Brick & Mortar',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() whitelabel block.

export const whiteLabelEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for White Label, your readiness level, and whether you qualify for faster progression into Brick & Mortar.',
  introCard: {
    icon: 'Target',
    title: 'White Label Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your private-label readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your White Label Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'White Label',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as WhiteLabelAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and retail standards',
          'Exceeds retail and private-label grade standards',
        ],
        category: 'general' as WhiteLabelAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as WhiteLabelAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as WhiteLabelAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully certified safe workplaces',
        ],
        category: 'general' as WhiteLabelAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'auction_retention',
        question: 'Did you complete 4 months retention in Auction & Bidding?',
        type: 'single' as WhiteLabelQuestionType,
        options: ['No', 'In Progress', 'Yes'],
        category: 'validation' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'auction_kpi',
        question: 'Did you maintain KPI 7.5 or above in Auction?',
        type: 'yesno' as WhiteLabelQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'auction_sales',
        question: 'Did you successfully sell the minimum required lots in Auction?',
        type: 'yesno' as WhiteLabelQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'white_label_onboarding',
        question: 'Have you completed the KHCRF white label onboarding and IP compliance review?',
        type: 'yesno' as WhiteLabelQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WhiteLabelAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_customization',
        question:
          'Do you have the capacity to customise branding, labelling, and packaging for private-label buyers?',
        type: 'yesno' as WhiteLabelQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_production_volume',
        question:
          'Can you consistently meet minimum white-label production volumes across multiple SKUs?',
        type: 'yesno' as WhiteLabelQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications_white_label',
        question: 'Which certifications do you currently hold? Select all that apply.',
        type: 'multiple' as WhiteLabelQuestionType,
        options: [
          'GI certification — verified Geographical Indication',
          'KHCRF certification — Kashmiri craft compliance approved',
          'Brand IP readiness — IP compliance documentation prepared',
        ],
        category: 'vendor' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_white_label_readiness',
        question:
          'Which of these white-label readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WhiteLabelQuestionType,
        options: [
          'IP and copyright compliance — no infringement risk in design or production',
          'Design adaptability — able to produce under buyer-specified brand guidelines',
          'Supply consistency — able to maintain quality and volume across long-term contracts',
        ],
        category: 'vendor' as WhiteLabelAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type_white_label',
        question: 'What best describes your private-label buying operation?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'Retail chain or boutique network launching a branded Kashmir craft line',
          'Distributor building private-label supply across multiple retail channels',
        ],
        category: 'buyer' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity_white_label',
        question: 'What is your approximate annual sourcing budget for white-label product?',
        type: 'single' as WhiteLabelQuestionType,
        options: ['Under $50,000', 'Over $50,000'],
        category: 'buyer' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_branding_rights',
        question: 'What type of branding rights do you require for your private-label collection?',
        type: 'single' as WhiteLabelQuestionType,
        options: [
          'Exclusive — sole rights within your market for specific product categories',
          'Semi-exclusive — shared with a limited number of non-competing buyers',
          'Non-exclusive — open supply under your brand without market restriction',
        ],
        category: 'buyer' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_white_label_readiness',
        question:
          'Which of these white-label readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WhiteLabelQuestionType,
        options: [
          'Long-term contract commitment — ability to commit to multi-year supply agreements',
          'Private-label branding standards compliance — brand guidelines and specifications prepared',
          'Retail-level product positioning — retail merchandising and channel strategy defined',
        ],
        category: 'buyer' as WhiteLabelAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'White Label (TIER 2 / L7)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'White Label + Fast Track to Brick & Mortar',
        fastTrackEligible: true,
        nextLevel: 'Brick & Mortar',
      },
      21: {
        eligibility: 'Brick & Mortar (TIER 2 / L8)',
        fastTrackEligible: true,
        nextLevel: 'Brick & Mortar',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 8.0,
        retentionPeriod: '4 months',
      },
      buyer: {
        commitment: null,
        kpiThreshold: 8.0,
        retentionPeriod: '4 months',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'White Label (TIER 2 / L7)':
          "You're eligible for White Label. Build your private-label partnerships and retail supply capabilities from here.",
        'White Label + Fast Track to Brick & Mortar':
          "Great fundamentals. You're eligible for White Label with a fast track to Brick & Mortar.",
        'Brick & Mortar (TIER 2 / L8)':
          'Exceptional. Your private-label performance makes you eligible for Brick & Mortar via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'White Label (TIER 2 / L7)': [
          'Join the White Label programme.',
          'Submit white label documentation and IP compliance credentials.',
          'Complete KHCRF white label onboarding review.',
          'Build private-label partnerships with verified retail buyers.',
        ],
        'White Label + Fast Track to Brick & Mortar': [
          'Prepare fast-track documentation for Brick & Mortar progression.',
          'Strengthen packaging, branding, and supply-consistency systems.',
          'Complete advanced KHCRF compliance and onboarding review.',
          'Align retail logistics and long-term contract readiness.',
        ],
        'Brick & Mortar (TIER 2 / L8)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit white label performance records and retail supply credentials.',
          'Complete KHCRF retail store progression review.',
          'Prepare for direct transition into Brick & Mortar onboarding.',
        ],
      },
      strengthsByOutcome: {
        'White Label (TIER 2 / L7)': [
          'Commitment to private-label trade',
          'Strong Brand Expansion foundation from Auction',
        ],
        'White Label + Fast Track to Brick & Mortar': [
          'Customisation and production volume capability',
          'Retail-level product positioning',
          'Clear Brick & Mortar progression trajectory',
        ],
        'Brick & Mortar (TIER 2 / L8)': [
          'Proven private-label supply capability',
          'Strong compliance and branding record',
          'Physical retail readiness',
        ],
      },
      improvementsByOutcome: {
        'White Label (TIER 2 / L7)': [
          'Strengthen US and EU retail compliance documentation.',
          'Improve retail logistics and last-mile supply systems.',
          'Pursue additional GI and KHCRF certifications.',
        ],
        'White Label + Fast Track to Brick & Mortar': [
          'Advance store-level compliance and merchandising readiness.',
          'Strengthen physical retail and long-term contract capability.',
        ],
        'Brick & Mortar (TIER 2 / L8)': [],
      },
      defaultStrengths: [
        'Commitment to private-label retail partnerships',
        'Strong Auction and Brand Expansion foundation',
        'Customisation and packaging capability',
      ],
      defaultDevelopmentAreas: [
        'Strengthen retail compliance and certification documentation.',
        'Improve supply consistency for long-term white-label contracts.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.

export const whiteLabelCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Private-Label Infrastructure for Global Retail',
  subheadline: 'Custom-branded Kashmir craft scaled through compliant production and supply.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Verified vendors matched with global retail brands',
        'Standardised contracts defining IP, pricing, and supply terms',
        'Production oversight aligned with brand quality standards',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Coordinated shipping, warehousing, and store fulfilment',
        'Packaging and labelling compliant with global retail standards',
        'Centralised returns and after-sales handling',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Demand forecasting for private-label product planning',
        'Sales and category performance insights for vendors',
        'Structured scaling across multiple retail markets',
      ],
    },
    {
      title: 'Brand Enablement',
      icon: 'ShoppingCart',
      items: [
        'Custom product development for private-label collections',
        'Full control over branding, packaging, and positioning',
        'Scalable production for long-term retail partnerships',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Launch exclusive private-label Kashmir craft collections',
        'Customise products, packaging, and retail presentation',
        'Differentiate with heritage-backed authentic products',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Stable long-term contracts with global retail brands',
        'Predictable revenue through recurring production cycles',
        'Global credibility as certified craft manufacturers',
      ],
    },
  },

  impact: [
    {
      title: 'Global Retail Integration',
      description: 'Embedding Kashmir craft into international private-label supply chains',
    },
    {
      title: 'Scalable Production',
      description: 'Consistent quality and volume across global retail demand',
    },
    {
      title: 'Next-Gen Artisan Pathways',
      description: 'Creating structured growth opportunities for future artisans',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const whiteLabelPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's White Label partnership facilitates private-label relationships between Kashmiri craft vendors and global retail brands — enabling exclusive collections, scalable production, and long-term international retail collaborations.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Exclusive Private-Label Kashmir Craft Collections',
//           description:
//             'Launch exclusive private-label Kashmiri craft lines tailored to your specific retail market — with full branding control, packaging customisation, and cultural differentiation that mass-market products cannot replicate.',
//         },
//         {
//           title: 'Product Customisation for Your Market',
//           description:
//             'Customise Kashmir craft products to meet specific retail market requirements — product mix, packaging specifications, label design, size variants, and seasonal collection planning.',
//         },
//         {
//           title: 'Differentiation Through Heritage-Rich Branding',
//           description:
//             'Differentiate your retail brand with unique, heritage-certified product lines that carry GI-backed authenticity — strengthening customer loyalty and positioning your collection above generic alternatives.',
//         },
//         {
//           title: 'Full Packaging and Presentation Control',
//           description:
//             'Control every aspect of your private-label product presentation — packaging design, labelling, brand storytelling, and retail merchandising — while DKC handles the production and compliance execution.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Stable Long-Term Contracts With Global Brands',
//           description:
//             'Secure recurring supply contracts with established global retail brands and distributors — providing the production volume certainty and payment stability that enables sustainable artisan business growth.',
//         },
//         {
//           title: 'Consistent Revenue Through Private-Label Orders',
//           description:
//             'Long-term white-label agreements replace unpredictable one-off sales with structured, recurring revenue — enabling better production planning, workforce stability, and investment in craft quality.',
//         },
//         {
//           title: 'Global Credibility as a Certified Craft Manufacturer',
//           description:
//             'GI certification and KHCRF compliance position vendors as internationally certified Kashmir craft manufacturers — building a production reputation that extends well beyond individual white-label relationships.',
//         },
//         {
//           title: 'Premium Market Positioning Through Co-Brand Partnerships',
//           description:
//             'Supplying premium global retail brands positions vendors at the top tier of the Kashmir craft supply chain — creating a track record that supports export, franchise, and institutional partnership entry.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Integration Into Global Private-Label Supply Chains',
//         description:
//           'White-label partnerships integrate Kashmiri crafts into the global retail private-label supply ecosystem — expanding market scope far beyond traditional export and wholesale channels.',
//       },
//       {
//         title: 'Innovation While Retaining Cultural Identity',
//         description:
//           "Private-label production encourages artisans to adapt craft techniques for modern retail requirements — while the GI and KHCRF framework ensures Kashmir's cultural identity is preserved throughout.",
//       },
//       {
//         title: 'Reputation for Scalable, Consistent Production',
//         description:
//           "Demonstrating consistent, retail-grade supply quality across white-label contracts builds the Kashmir craft sector's international reputation as a reliable, scalable production ecosystem.",
//       },
//       {
//         title: 'Pathway for Younger Artisans Into Global Markets',
//         description:
//           'White-label supply contracts create structured employment and income pathways for younger Kashmiri artisans — aligning global retail trends with traditional craft skills and sustainable livelihoods.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// IMPORTANT: White Label pricing is YEARLY not monthly — same as Exhibition/Auction.
// billingPeriod: 'year' throughout.
// No onboarding fee. Early enrollment 50% discount — preserved. See CLIENT FLAG 2.

export const whiteLabelPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built for Private-Label Scale.',
  description:
    'Three clear yearly package tiers aligned to private-label complexity and retail ambition. No onboarding fee — early enrollment discount available.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the White Label partnership.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'White Label partnerships have no separate onboarding fee. Select a yearly package to begin private-label activation.',
    note: 'Early enrollment discount: 50% off yearly package fees for qualifying partners who enrol during the launch period.',
    badge: 'Early Enrollment — 50% Discount Available',
  },
  packages: [
    {
      name: 'Standard',
      price: '$150',
      billingPeriod: 'year',
      features: [
        'Up to 25 SKUs under white-label branding',
        'Basic branded packaging templates',
        '5% logistics waiver',
        'Standard vendor-buyer matching',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$375',
      billingPeriod: 'year',
      features: [
        'Up to 100 SKUs across product categories',
        'Custom-branded packaging kits',
        '10% logistics waiver',
        'Marketing catalog placement and buyer promotion',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$750',
      billingPeriod: 'year',
      features: [
        'Unlimited SKUs across all categories',
        'Premium branded packaging with AR integration',
        '15% logistics waiver',
        'Dedicated account manager and IP compliance support',
      ],
      recommended: false,
    },
  ],
  range: '$150–$750/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from support line.

export const whiteLabelTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'White Label Platform Technology Built for Brand Control and Production Scale',
  description:
    'DKC Connect enables private-label brands with custom product development tools, compliance automation, blockchain supply chain transparency, and scalable white-label production management.',
  features: [
    {
      icon: 'Sliders',
      title: 'Dynamic Product Customisation',
      description:
        'Dynamic labelling configuration, design personalisation tools, and scalable packaging specification management for any private-label brief.',
    },
    {
      icon: 'Folder',
      title: 'Brand Asset Management',
      description:
        'Centralised storage for brand logos, guidelines, packaging dielines, and all creative assets — versioned and accessible for all approved vendor partners.',
    },
    {
      icon: 'Users',
      title: 'Vendor Collaboration and Approval Workflows',
      description:
        'Secure vendor communication channels with structured artwork approval workflows, sample review stages, and production sign-off management.',
    },
    {
      icon: 'Shield',
      title: 'Automated Compliance Systems',
      description:
        'FDA, ISO, textile standards, CPSIA, and regional certification compliance checks automated across all white-label product categories and markets.',
    },
    {
      icon: 'Activity',
      title: 'AI-Powered Demand Forecasting',
      description:
        'Predict order volumes, seasonal demand patterns, and replenishment cycles for custom-branded Kashmir craft product lines using AI analytics.',
    },
    {
      icon: 'Layers',
      title: 'Blockchain Supply Chain Transparency',
      description:
        'Trace materials from raw sourcing through production and branded packaging to retail delivery — with an immutable blockchain record for every SKU.',
    },
    {
      icon: 'Link',
      title: 'Multi-Channel Distribution APIs',
      description:
        'Sync private-label products across e-commerce storefronts, retail buyer portals, and distributor systems through prebuilt API connectors.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Quality Control Dashboards',
      description:
        'Track QC inspection logs, defect rates, and batch certifications across all white-label production runs in real time.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated white-label production and compliance integration support.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers managing brand IP and vendors managing production.
// Nine features preserved from raw file — more comprehensive than previous partnerships.
// "Prime Logic Solutions" removed throughout.

export const whiteLabelApiIntegration = {
  sectionLabel: 'Brand Integration',
  headline: 'Already Operating White Label? Accelerate With DKC.',
  description:
    'Launch private-label briefs, approve artwork, enforce compliance, manage production scheduling, and scale branded Kashmir craft globally — through a single integrated white-label platform.',
  features: [
    {
      icon: 'FileSignature',
      title: 'Onboarding and Brand Contracts',
      description:
        'Digital NDAs, master supply agreements, SLAs, co-brand terms, territory rights, and pricing agreements — executed and managed through the platform.',
    },
    {
      icon: 'Palette',
      title: 'Design Briefs and Artwork Approval',
      description:
        'Structured creative briefs, packaging dieline management, multi-round artwork approvals, and versioned brand assets stored in a centralised DAM.',
    },
    {
      icon: 'Calculator',
      title: 'Specifications, BOM, and Costing',
      description:
        'Material specifications, bill of materials management, finishing tolerances, landed-cost calculations, and margin analysis for all private-label SKUs.',
    },
    {
      icon: 'Factory',
      title: 'Vendor Sourcing and Qualification',
      description:
        'Audited vendor qualification, production capacity verification, sample run coordination, and pilot batch validation before full private-label activation.',
    },
    {
      icon: 'ShieldCheck',
      title: 'QA, QC, and Compliance',
      description:
        'AQL inspection plans, test reports, GI and KHCRF compliance, CPSIA and REACH certification, and sustainability compliance documentation.',
    },
    {
      icon: 'Package',
      title: 'Packaging and Labelling Systems',
      description:
        'GS1 barcode generation, eco-certification marks, mandatory safety warnings, multilingual regulatory label panels, and retail-ready packaging production.',
    },
    {
      icon: 'Layers',
      title: 'PIM and Retail Catalog Syndication',
      description:
        'Publish SKU attributes, product media, and compliance data to retailer buyer portals, e-commerce platforms, and distributor systems seamlessly.',
    },
    {
      icon: 'CalendarClock',
      title: 'Order and Production Scheduling',
      description:
        'Purchase order management, production milestone tracking, capacity planning, critical-path dashboards, and automated delay alerts.',
    },
    {
      icon: 'Copyright',
      title: 'IP Protection and Licensing',
      description:
        'Brand ownership clauses, royalty management, design watermarking, and blockchain-backed proofs of originality for all private-label assets.',
    },
  ],
  support: {
    description:
      'White label integration support covering PIM and DAM setup, artwork versioning, GS1 and UPC registration, EPR labelling compliance, ERP, PLM, and MES system mappings, sandbox environments, SDKs, and documented SLAs.',
    note: 'End-to-end integration support available for retailers, brand licensors, and private-label brand owners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const whiteLabelWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Private-Label Supply — Five Steps',
  description:
    'A structured, compliance-governed pathway from application to retail-scale private-label production.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your White Label application with identity, business details, and Auction completion credentials.',
    },
    {
      step: 2,
      label: 'KPI and Retention Check',
      description:
        'Platform validates KPI from Auction (8.0+ required), KHCRF IP compliance status, and white-label production readiness.',
    },
    {
      step: 3,
      label: 'Vendor–Buyer Match',
      description:
        'Platform matches verified vendors with buyers based on product category, branding requirements, and supply capacity.',
    },
    {
      step: 4,
      label: 'White Label Activation',
      description:
        'Brand contracts executed, packaging briefs launched, IP compliance reviewed, and private-label production activated.',
    },
    {
      step: 5,
      label: 'Retail Supply and Growth',
      description:
        'Private-label supply begins. KPI tracking continues. Strong performance builds toward Brick & Mortar progression.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'brick-mortar',
    name: 'Brick & Mortar',
    kpiRequired: '8.0+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const whiteLabelFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About White Label',
  items: [
    {
      question: 'Can small vendors participate in White Label?',
      answer:
        'Yes, but only after completing the Auction & Bidding tier with KPI 8.0+. White Label requires demonstrated premium product capability and KHCRF IP compliance review before entry.',
    },
    {
      question: 'Who owns the brand in a White Label partnership?',
      answer:
        "The buyer or retailer owns the brand fully. Kashmiri artisan vendors remain verified, GI-certified, and compensated under fair-trade rules — but the product carries the buyer's brand identity in retail.",
    },
    {
      question: 'Are branded packaging and logistics included in packages?',
      answer:
        'Yes. Branded packaging kits are included at all three package tiers — with logistics waivers of 5%, 10%, or 15% depending on the package selected.',
    },
    {
      question: 'Can I integrate my e-commerce store with White Label supply?',
      answer:
        'Yes. Prebuilt API connectors for Shopify, WooCommerce, Magento, BigCommerce, and major retail buyer portals are provided for seamless private-label catalog syndication.',
    },
    {
      question: 'Is there a fast-track option for White Label?',
      answer:
        'Yes. Qualified partners with strong Auction performance can access KHCRF lateral evaluation and fast-track approval — bypassing standard retention period requirements.',
    },
    {
      question: 'What does White Label unlock after completion?',
      answer:
        'Completing White Label with KPI 8.0+ and 4 months of private-label performance unlocks Brick & Mortar — the final Brand Expansion tier — with physical retail store activation and permanent market presence.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const whiteLabelFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Authentic Kashmir Craft. Your Brand. Retail-Ready at Scale.',
    description:
      'GI-certified, blockchain-traced, compliance-ready — a White Label partnership that lets serious buyers build exclusive private-label brands and serious vendors secure the long-term contracts that sustain craft excellence.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Launch Your Own Exclusive Kashmir Craft Brand?',
      supportingPoints: [
        'Full branding control — packaging, labelling, storytelling, and market positioning.',
        'GI-certified supply with KHCRF compliance on every private-label SKU from day one.',
        'Exclusive, semi-exclusive, and non-exclusive branding rights available per agreement.',
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
      headline: 'Ready to Supply Global Retail Brands With Your Authentic Kashmir Craft?',
      supportingPoints: [
        'Long-term supply contracts with recurring order volumes and predictable revenue.',
        'GI certification and KHCRF compliance build credibility as a world-class craft manufacturer.',
        'White Label performance is the final step before Brick & Mortar retail activation.',
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

export const WHITE_LABEL = {
  meta: whiteLabelMeta,
  heroSection: whiteLabelHero,
  overviewSection: whiteLabelOverview,
  modelDifferenceSection: whiteLabelModelDifference,
  eligibilityRulesSection: whiteLabelEligibilityRules,
  eligibilityAssessmentSection: whiteLabelEligibilityAssessment,
  capabilitiesSection: whiteLabelCapabilities,
  // platformAdvantageSection: whiteLabelPlatformAdvantage,
  pricingSection: whiteLabelPricing,
  technologySection: whiteLabelTechnology,
  apiIntegrationSection: whiteLabelApiIntegration,
  workflowSection: whiteLabelWorkflow,
  faqSection: whiteLabelFaq,
  finalCtaSection: whiteLabelFinalCta,
} as const;

export type WhiteLabelContent = typeof WHITE_LABEL;
