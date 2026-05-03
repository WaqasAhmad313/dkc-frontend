export type ConsignmentAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type ConsignmentQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const consignmentMeta = {
  slug: 'consignment',
  system: 'core-trade',
  tier: 1,
  label: 'Consignment',
  pageTitle: 'Consignment Partnerships',
  seoDescription:
    'A low-risk retail expansion pathway where buyers stock authentic Kashmiri handmade products without upfront payment and vendors gain verified retail visibility through structured, compliant consignment systems.',
  kpiRequired: '6.0+',
  retentionRequired: '12 months',
  previousSlug: 'dropshipping',
  nextSlug: 'wholesale',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['retail', 'pay-after-sale', 'low-risk', 'boutique', 'placement'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer and vendor have materially different propositions.
// Screenshot 1 headline upgraded from raw file.

export const consignmentHero = {
  sectionLabel: 'Retail Consignment Partnership',
  shared: {
    badge: 'Core Trade — Tier 1',
    statusChip: 'KPI 6.0+ Required',
  },
  roles: {
    buyer: {
      headline: 'Stock Kashmir Craft. Pay Only After It Sells.',
      description:
        'Access GI-certified Kashmiri handmade products for your retail shelves without paying upfront — DKC handles compliance, inventory tracking, and settlement.',
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
      headline: 'Place Craft in Premium Retail. Get Paid When It Sells.',
      description:
        'Enter verified retail channels globally without upfront export costs — your products reach boutiques and curated retail environments with ownership retained until confirmed sale.',
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
// Shared: the problem and solution context applies equally to both roles.
// Screenshot 1 overview copy upgraded from raw file.

export const consignmentOverview = {
  sectionLabel: 'Why Consignment',
  headline: 'Unlocking Retail Without Upfront Risk',
  description:
    'Retail entry is costly and uncertain for both sides. Consignment enables vendors to access stores while buyers pay only after products are sold.',
  problems: [
    'Buyers avoid upfront investment in unfamiliar craft products',
    'Vendors lack access to established retail channels',
    'Seasonal demand is lost without flexible supply models',
    'Traditional consignment lacks structure and transparent settlement',
  ],
  solutions: [
    'Retail placement without upfront cost for vendors',
    'Buyers pay only after confirmed sales',
    'Structured agreements managing timelines and ownership',
    'Performance unlocks progression to higher trade models',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// "Consignee/Consignor" terminology from raw file replaced with buyer/vendor.

export const consignmentModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not Informal Consignment. Structured. Verified. Governed.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade crafts — every consignment is contract-backed, KYC-verified, and GI-authenticated.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Retail Network',
      description:
        'Verified Kashmiri vendors connect with verified retail buyers across boutiques and curated marketplaces globally.',
    },
    {
      icon: 'Handshake',
      title: 'Standardised Contracts',
      description:
        'Digital agreements govern commission splits, settlement timelines, ownership transfer, and dispute resolution.',
    },
    {
      icon: 'BarChart3',
      title: 'AI Inventory Tracking',
      description:
        'Real-time dashboards monitor stock across all retail locations with full sell-through and settlement visibility.',
    },
    {
      icon: 'Shield',
      title: 'Blockchain Ownership',
      description:
        'Vendor ownership is tracked on-chain until confirmed sale — no ownership transfer without a completed transaction.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Zero Upfront Cost',
          description:
            'Stock Kashmiri craft without purchasing inventory — pay the vendor only after confirmed sales are recorded.',
        },
        {
          icon: 'Package',
          title: 'GI-Certified Catalog',
          description:
            'Curated GI-certified Kashmir craft — Pashmina, Kani shawls, papier-mâché, crewelwork — tailored to boutique retail.',
        },
        {
          icon: 'FileText',
          title: 'SKU-Level Reporting',
          description:
            'Detailed performance data per product and location helps you rotate stock and identify top-performing categories.',
        },
        {
          icon: 'TrendingUp',
          title: 'Range Expansion',
          description:
            'Pilot new craft categories and validate demand before committing to wholesale purchase volumes.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Verified Retail Placement',
          description:
            'Place craft in premium boutiques and retail stores without managing logistics or upfront export costs.',
        },
        {
          icon: 'Lock',
          title: 'Ownership Until Sale',
          description:
            'Full legal ownership of every product is retained until confirmed sale, enforced through blockchain records.',
        },
        {
          icon: 'DollarSign',
          title: 'Structured Revenue Flow',
          description:
            'Automated settlement cycles trigger payments on confirmed sales — no manual reconciliation required.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Pathway to Wholesale',
          description:
            'Consignment KPI performance unlocks Wholesale — the next tier with guaranteed bulk purchase orders.',
        },
      ],
    },
  },
} as const;

// ─── Key Features Section (NEW) ───────────────────────────────────────────────
// Source: Screenshot 2 — eight tabbed feature categories.
// Shared: platform features are not role-specific.
// Renderer: tabbed grid. Default active tab = 'placement'.

// export const consignmentKeyFeatures = {
//   sectionLabel: 'Platform Features',
//   headline: 'Built for High-End Craft Retail.',
//   subheadline:
//     'Platform making Kashmir consignment trade reliable, transparent, and profitable globally.',
//   defaultTab: 'placement',
//   categories: [
//     {
//       id: 'placement',
//       label: 'Retail Placement',
//       items: [
//         'GI-certified artisan collections stocked without upfront cost',
//         'Product placement optimised for maximum in-store visibility',
//         'Seasonal collections aligned with peak retail demand periods',
//       ],
//     },
//     {
//       id: 'ownership',
//       label: 'Ownership Retention',
//       items: [
//         'Full inventory ownership retained until confirmed sale',
//         'Independent pricing control to maximise vendor profitability',
//         'Structured return process for unsold inventory rotation',
//       ],
//     },
//     {
//       id: 'tracking',
//       label: 'Sales Tracking',
//       items: [
//         'Real-time sales analytics across all retail locations',
//         'SKU-level tracking with automated settlement reconciliation',
//         'AI-powered demand forecasting and seasonal sell-through models',
//       ],
//     },
//     {
//       id: 'inventory',
//       label: 'Inventory Management',
//       items: [
//         'Centralised stock management across all partner locations',
//         'Automated restocking and replenishment for high-demand products',
//         'Reverse logistics for efficient unsold inventory return',
//       ],
//     },
//   ],
// } as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// KPI and retention values taken from cluster file (coreTrade_content.ts).
// See CLIENT FLAG 1 above.

export const consignmentEligibilityRules = {
  sectionLabel: 'Consignment Entry Rules',
  headline: 'Demonstrated Trade Readiness Required',
  description:
    'Consignment requires a KPI threshold and retention period — partners entering have demonstrated basic trade performance and are ready for structured retail placement.',
  requirements: [
    {
      label: 'KPI Required',
      value: '6.0+',
      note: 'Minimum performance score from prior Dropshipping trade.',
    },
    {
      label: 'Retention Period',
      value: '12 months',
      note: 'Minimum time on platform before progressing to Wholesale.',
    },
    {
      label: 'Previous Level',
      value: 'Dropshipping',
      note: 'Standard path requires Dropshipping completion.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention requirements.',
    },
  ],
  progressionNote:
    'Completing 12 months at Consignment with KPI 6.5+ unlocks Wholesale — the next Core Trade tier with guaranteed bulk orders.',
  nextSlug: 'wholesale',
  nextLabel: 'Wholesale',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All next steps and messages extracted from EligibilityProvider.tsx
// calculateResults() consignment block.

export const consignmentEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Consignment, your readiness level, and a personalised next-step recommendation.',
  introCard: {
    icon: 'Target',
    title: 'Consignment Eligibility Assessment',
    description:
      'Fourteen questions. Personalised results. No email required. Understand your consignment readiness and what progression path is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '14 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Consignment Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Consignment',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How do you ensure the authenticity of your products or sourcing?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'Use mixed or synthetic materials',
          'Mostly authentic with some substitutions',
          'Verified sourcing from known suppliers',
          'GI tag or KHCRF certification for some products',
          'Full GI and blockchain traceability for all products',
        ],
        category: 'general' as ConsignmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you rate the overall quality of your products?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'Inconsistent, frequent defects',
          'Acceptable but with noticeable flaws',
          'High quality with minor imperfections',
          'Meets industry and export standards consistently',
          'Exceeds export standards with excellence',
        ],
        category: 'general' as ConsignmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'How sustainable are your production and trade practices?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'No sustainability measures in place',
          'Some sustainable raw materials used',
          'Significant portion of processes are eco-friendly',
          'Primarily eco-friendly with waste reduction policies',
          'Fully zero-waste, carbon-tracked, and eco-certified',
        ],
        category: 'general' as ConsignmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How do you ensure a positive customer or buyer experience?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'No defined customer experience policy',
          'Limited communication, inconsistent follow-up',
          'Satisfactory experience with basic service',
          'Well-managed service with strong communication',
          'Personalised, exceptional service with a feedback loop',
        ],
        category: 'general' as ConsignmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair wages and safe working conditions?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'No policies on wages or safety',
          'Legal minimum wages only, limited safety measures',
          'Fair wages with partial workplace safety',
          'Fair wages with strong safety policies',
          'Full fair trade compliance with certified safe workplaces',
        ],
        category: 'general' as ConsignmentAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'dropshipping_retention',
        question: 'Did you complete 12 months retention in Dropshipping?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'dropshipping_kpi',
        question: 'Did you maintain KPI 5.0 or above in Dropshipping?',
        type: 'yesno' as ConsignmentQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'khcrf_orientation',
        question: 'Did you complete KHCRF orientation requirements?',
        type: 'yesno' as ConsignmentQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'digital_api_readiness',
        question:
          'Do you have basic digital presence and API readiness from your Dropshipping period?',
        type: 'yesno' as ConsignmentQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ConsignmentAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_handicrafts_years',
        question: 'How long have you been active in handicraft production?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Less than 1 year', '1–3 years', '3–5 years', '5+ years'],
        category: 'vendor' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_production_scale',
        question: 'What is your current production scale?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Individual artisan', 'Workshop or studio', 'Enterprise or cooperative'],
        category: 'vendor' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications',
        question: 'Do you currently hold any craft certifications?',
        type: 'single' as ConsignmentQuestionType,
        options: ['None', 'GI tag', 'KHCRF approval', 'GI tag and KHCRF approval'],
        category: 'vendor' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_growth_goal',
        question: 'What is your primary goal in moving to Consignment?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'Gain retail placement visibility',
          'Build toward wholesale demand',
          'Enter export channels',
          'Build a global brand presence',
        ],
        category: 'vendor' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these consignment readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ConsignmentQuestionType,
        options: [
          'Packaging and labelling compliance — retail-ready presentation',
          'Inventory transparency — reconciliation and tracking capability',
          'API or ERP integration for consignment stock management',
        ],
        category: 'vendor' as ConsignmentAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What type of buyer best describes you?',
        type: 'single' as ConsignmentQuestionType,
        options: [
          'Small or independent retailer',
          'Wholesaler or distributor',
          'Institutional or corporate buyer',
        ],
        category: 'buyer' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity',
        question: 'What is your approximate sourcing budget per year?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Under $5,000', '$5,000–$25,000', 'Over $25,000'],
        category: 'buyer' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_authenticity_importance',
        question: 'How important is cultural authenticity to your retail offering?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Low importance', 'Moderate importance', 'Essential requirement'],
        category: 'buyer' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_commitment_level',
        question: 'Which trade model are you most interested in progressing toward?',
        type: 'single' as ConsignmentQuestionType,
        options: ['Consignment', 'Wholesale', 'White Label', 'Exhibition'],
        category: 'buyer' as ConsignmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these consignment readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ConsignmentQuestionType,
        options: [
          'Consignment-friendly cash flow model — can handle pay-after-sale terms',
          'Willingness to manage unsold inventory return process',
          'Digital integration — ERP or API for real-time inventory tracking',
        ],
        category: 'buyer' as ConsignmentAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Consignment (TIER 1 / L2)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Consignment + Fast Track to Wholesale',
        fastTrackEligible: true,
        nextLevel: 'Wholesale',
      },
      21: {
        eligibility: 'Wholesale (TIER 1 / L3)',
        fastTrackEligible: true,
        nextLevel: 'Wholesale',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 6.0,
      },
      buyer: {
        commitment: 'Consignment',
        kpiThreshold: 6.0,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Consignment (TIER 1 / L2)':
          "You're eligible for Consignment. Build your retail capabilities and progress from here.",
        'Consignment + Fast Track to Wholesale':
          "Great fundamentals. You're eligible for Consignment with a fast track to Wholesale.",
        'Wholesale (TIER 1 / L3)':
          'Exceptional. Your strong operational record makes you eligible for Wholesale via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Consignment (TIER 1 / L2)': [
          'Join the Consignment programme.',
          'Complete KHCRF orientation requirements.',
          'Improve digital integration and inventory tracking systems.',
          'Ensure full packaging and labelling compliance.',
        ],
        'Consignment + Fast Track to Wholesale': [
          'Join the Consignment programme.',
          'Enrol in the Readiness Programme (RP).',
          'Strengthen API and ERP integration for inventory management.',
          'Prepare operational systems for the Wholesale transition.',
        ],
        'Wholesale (TIER 1 / L3)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Upload consignment compliance documents for review.',
          'Complete KHCRF progression review.',
          'Connect with wholesale-tier buyers on the platform.',
        ],
      },
      strengthsByOutcome: {
        'Consignment (TIER 1 / L2)': [
          'Commitment to consignment trade',
          'Solid operational foundation',
        ],
        'Consignment + Fast Track to Wholesale': [
          'Sufficient handicraft or retail experience',
          'Strong consignment readiness',
          'Clear growth trajectory',
        ],
        'Wholesale (TIER 1 / L3)': [
          'Export-ready operations',
          'Strong compliance record',
          'Demonstrated retail performance',
        ],
      },
      improvementsByOutcome: {
        'Consignment (TIER 1 / L2)': [
          'Strengthen GI or KHCRF certifications.',
          'Improve inventory tracking and reconciliation systems.',
          'Improve packaging and labelling for retail compliance.',
        ],
        'Consignment + Fast Track to Wholesale': [
          'Enhance operational scale for higher volume.',
          'Build API and ERP integration capability.',
        ],
        'Wholesale (TIER 1 / L3)': [],
      },
      defaultStrengths: [
        'Commitment to structured retail trade',
        'Solid production or sourcing foundation',
        'Customer-focused operational approach',
        'Readiness for governed retail partnership',
      ],
      defaultDevelopmentAreas: [
        'Strengthen certifications and compliance documentation.',
        'Improve inventory and digital integration systems.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Consignee/Consignor" terminology from raw file replaced with buyer/vendor.

export const consignmentCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Consignment Trade Without Inventory Risk',
  subheadline:
    'Sell globally with ownership control, pay-after-sale settlement, and managed retail placement.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Verified retail buyers connected with certified vendors',
        'Standardised agreements with automated sale-based settlement',
        'Secure platform ensuring compliance and accountability',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Zero upfront inventory cost with pay-after-sale model',
        'Insured storage and compliance-driven inventory handling',
        'Reverse logistics for returns and stock reconciliation',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Real-time sales tracking across retail locations',
        'SKU-level performance insights and demand forecasting',
        'Low-risk pilot launches before scaling to wholesale',
      ],
    },
    {
      title: 'Ownership & Governance',
      icon: 'Handshake',
      items: [
        'Vendor ownership retained until confirmed sale',
        'Fair-trade governance protecting artisan value',
        'Blockchain-backed ownership and settlement tracking',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Authentic GI-certified craft with verified quality',
        'Exclusive handmade products not found in mass retail',
        'Zero inventory risk with built-in logistics support',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Global retail exposure without upfront export cost',
        'Protected pricing and fair-trade governed agreements',
        'Operations handled across logistics and payments',
      ],
    },
  },

  impact: [
    {
      title: 'Economic Empowerment',
      description: 'Sustainable retail access increasing artisan income and opportunity',
    },
    {
      title: 'Heritage Preservation',
      description: 'Structured retail channels sustaining traditional craft practices',
    },
    {
      title: 'Global Recognition',
      description: 'Positioning Kashmir craft as a premium global handmade category',
    },
  ],
} as const;

// ─── Comparison Section (NEW) ─────────────────────────────────────────────────
// Source: Screenshots 3, 4 (platform comparison) and 6, 7 (cost comparison).
// Shared: not role-specific. Two tabs — 'platform' and 'cost'.
// Competitors: Kiva, Trade Aid, Artisan Connect.

export const consignmentComparison = {
  sectionLabel: 'Platform Comparison',
  headline: 'See How DKC Consignment Compares',
  subheadline:
    'A transparent look at where DKC Connect stands against alternative consignment platforms — on features and on cost.',
  defaultTab: 'platform',
  tabs: [
    {
      id: 'platform',
      label: 'Feature Comparison',
      description: 'Compare consignment capabilities, craft focus, and platform standards.',
      parameters: [
        'Tailored Consignment Strategies',
        'Consignment Inventory Automation',
        'Real-Time Sales Analytics',
        'Blockchain-Based Product Verification',
        'Cultural Storytelling for Displays',
        'Customised Retail Placement',
        'Eco-Friendly Retail Solutions',
        'Fair Trade and Transparent Payments',
        'Sustainable Packaging Support',
        'Vendor Support and Training',
        'Revenue Reconciliation Transparency',
        'B2B Retail Networking Opportunities',
        'Localised Marketing Support',
        'Pricing Transparency for Vendors',
        'Sustainability Scorecard Integration',
        'Seasonal and Festival Promotions',
        'Customised Product Displays',
        'Artisan Empowerment Programmes',
        'Exclusive Retail Event Participation',
        'Virtual Consignment Management Tools',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'Tailored for Kashmiri crafts',
            'Yes — with advanced automation systems',
            'Yes',
            'Yes',
            'Yes',
            'Tailored for artisan products',
            'Yes',
            'Yes',
            'Yes',
            'Comprehensive',
            'Yes',
            'Yes',
            'Tailored to Kashmiri crafts',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
          ],
        },
        {
          id: 'kiva',
          name: 'Kiva',
          highlight: false,
          values: [
            'Generic',
            'Vendor Managed',
            'Limited',
            'No',
            'No',
            'Generic',
            'No',
            'Limited',
            'No',
            'Limited',
            'Limited',
            'Limited',
            'No',
            'Limited',
            'No',
            'No',
            'Generic',
            'No',
            'No',
            'No',
          ],
        },
        {
          id: 'trade-aid',
          name: 'Trade Aid',
          highlight: false,
          values: [
            'Limited',
            'None',
            'Minimal',
            'No',
            'Limited',
            'Limited',
            'No',
            'No',
            'No',
            'Minimal',
            'No',
            'Minimal',
            'Minimal',
            'No',
            'No',
            'No',
            'No',
            'No',
            'Limited',
            'No',
          ],
        },
        {
          id: 'artisan-connect',
          name: 'Artisan Connect',
          highlight: false,
          values: [
            'Limited',
            'None',
            'Minimal',
            'No',
            'Limited',
            'Limited',
            'No',
            'No',
            'No',
            'Minimal',
            'No',
            'Minimal',
            'Minimal',
            'No',
            'No',
            'No',
            'No',
            'No',
            'Limited',
            'No',
          ],
        },
      ],
    },
    {
      id: 'cost',
      label: 'Cost Comparison',
      description: 'Compare consignment fees, commissions, and included services.',
      parameters: [
        'Monthly Participation Fee',
        'Commission on Sales',
        'Inventory Management Fee',
        'Restocking Fees',
        'Storage Fees',
        'Return Handling Fee',
        'Marketing & Promotion Fee',
        'Consignment Processing Fee',
        'Shipping Logistics Assistance',
        'Sales Reporting & Analytics Fee',
        'Fair Trade Certification Fee',
        'Sustainability Compliance Fee',
        'B2B Networking Fee',
        'Retail Placement Optimisation',
        'Custom Product Display Support',
        'Contract Negotiation Assistance',
        'Blockchain Traceability Service',
        'Vendor Training & Workshops',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            '$20',
            '70/30 (Buyer/Vendor)',
            'Free',
            'None',
            'Free (Platform-Included)',
            'Free',
            'Free',
            'Free',
            'Platform-Assisted',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
          ],
        },
        {
          id: 'kiva',
          name: 'Kiva',
          highlight: false,
          values: [
            '$200',
            '50/50 (Buyer/Vendor)',
            '$20 per Month',
            '$3 per item',
            '$10 per Month',
            'Vendor Responsibility',
            '$50 per Month',
            '$50 per shipment',
            'Vendor Responsibility',
            '$2',
            'No Service',
            '$2',
            '$3',
            '$2',
            '$3',
            'Limited',
            'No Service',
            'Limited',
          ],
        },
        {
          id: 'trade-aid',
          name: 'Trade Aid',
          highlight: false,
          values: [
            '$175',
            '60/40 (Buyer/Vendor)',
            '$30 per Month',
            'Negotiable',
            '$15 per Month',
            'Vendor Responsibility',
            '$55 per Month',
            'Negotiable',
            'Vendor Responsibility',
            '$2',
            'No Service',
            '$5',
            '$2',
            '$5',
            '$3',
            'Limited',
            'No Service',
            '$50',
          ],
        },
        {
          id: 'artisan-connect',
          name: 'Artisan Connect',
          highlight: false,
          values: [
            '$175',
            '60/40 (Buyer/Vendor)',
            '$30 per Month',
            'Negotiable',
            '$15 per Month',
            'Vendor Responsibility',
            '$55 per Month',
            'Negotiable',
            'Vendor Responsibility',
            '$2',
            'No Service',
            '$5',
            '$2',
            '$5',
            '$3',
            'Limited',
            'No Service',
            '$50',
          ],
        },
      ],
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact is shared — always shown for both roles.
// "US-Based" buyer framing removed per global architecture.
// Content upgraded from Screenshot 5.

// export const consignmentPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's consignment model gives buyers retail flexibility and vendors market access while driving economic and cultural impact across the Kashmir craft ecosystem.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Authentic Craftsmanship',
//           description:
//             'Every piece GI-certified and quality-checked — your customers receive verified Kashmiri craft, not mass-market substitutes.',
//         },
//         {
//           title: 'Exclusive Products',
//           description:
//             'One-of-a-kind handmade Kashmir crafts rich in cultural heritage, unavailable through standard retail channels.',
//         },
//         {
//           title: 'Zero Inventory Risk',
//           description:
//             'Source globally and sell locally — no upfront capital commitment, logistics built into the platform.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Global Market Expansion',
//           description:
//             'Reach verified retail buyers across global markets without agent dependency or upfront export spend.',
//         },
//         {
//           title: 'Fair Trade Governance',
//           description:
//             'Governed trade terms protect artisan wages and ensure ethical production standards are enforced.',
//         },
//         {
//           title: 'Streamlined Operations',
//           description:
//             'Inventory, fulfilment, and payment processing are handled on-platform — focus on production, not logistics.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Economic Empowerment',
//         description:
//           'Sustainable market access increases earnings and creates opportunity across Kashmir craft communities.',
//       },
//       {
//         title: 'Heritage Preservation',
//         description:
//           'Structured retail channels help preserve Kashmiri craft traditions for future generations.',
//       },
//       {
//         title: 'Global Recognition',
//         description:
//           'A structured platform establishes Kashmir handicraft as a globally recognised hub for authentic handmade products.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// Price and billingPeriod split per dropshipping pattern.
// Recommended flag added.

export const consignmentPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Structured for Retail Trade.',
  description:
    'Three clear package tiers aligned to consignment complexity and retail ambition. Every fee disclosed before you commit.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the consignment partnership.',
  freeOffer: {
    title: 'Free Onboarding Period',
    description:
      'Enrol within the first six months and access the full consignment partnership at no cost for six months.',
    note: 'After the free period, select a monthly package to continue.',
    badge: 'Limited Time — Early Adopter Offer',
  },
  packages: [
    {
      name: 'Standard',
      price: '$50',
      billingPeriod: 'month',
      features: [
        'Boutique consignment network access',
        'Pay-after-sale setup and contract support',
        'Basic packaging templates',
        '5% logistics waiver',
        'Standard inventory tracking',
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: '$125',
      billingPeriod: 'month',
      features: [
        'Expanded retail placement access',
        'Branded packaging kit',
        '10% logistics waiver',
        'Faster settlement cycle — 20 to 30 days',
        'Performance analytics dashboard',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: '$250',
      billingPeriod: 'month',
      features: [
        'Premium seasonal showcase placement',
        'Customised packaging solutions',
        '15% logistics waiver',
        'Dedicated retail account manager',
        'Priority settlement cycle — 7 to 10 days',
      ],
      recommended: false,
    },
  ],
  range: '$50–$250',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from main content — retained as neutral support line.

export const consignmentTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Consignment and Inventory Systems Built for Scale',
  description:
    'DKC Connect provides automated settlement workflows and intelligent inventory management purpose-built for structured consignment trade.',
  features: [
    {
      icon: 'ListChecks',
      title: 'Inventory Reconciliation',
      description:
        'Real-time SKU tracking with automated sales matching and auditable vendor reporting.',
    },
    {
      icon: 'DollarSign',
      title: 'Revenue Sharing Automation',
      description:
        'Instant payment splits on confirmed sales with transparent commission payout tracking.',
    },
    {
      icon: 'FileSignature',
      title: 'Digital Contract Management',
      description:
        'Digitise agreements, automate renewals, and monitor ongoing contractual compliance.',
    },
    {
      icon: 'Lock',
      title: 'Blockchain Ownership Tracking',
      description:
        'Vendor ownership verified on-chain — legal transfer only after confirmed sale with immutable audit trail.',
    },
    {
      icon: 'Activity',
      title: 'AI Stock Forecasting',
      description:
        'Predict demand patterns, flag slow-moving inventory, and optimise restocking cycles.',
    },
    {
      icon: 'MapPin',
      title: 'Multi-Location Stock Sync',
      description:
        'Unified POS data across all retail partner locations in a single inventory dashboard.',
    },
    {
      icon: 'Repeat',
      title: 'Reverse Logistics',
      description:
        'Automate unsold inventory returns and streamline redistribution to alternative channels.',
    },
    {
      icon: 'BarChart2',
      title: 'Performance Analytics',
      description:
        'SKU-level profitability analysis and vendor-buyer performance trends across all consignment relationships.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and reliable integration support for all consignment trade operations.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers integrating POS/retail systems
// and vendors integrating inventory management.
// "Prime Logic Solutions" removed from support.

export const consignmentApiIntegration = {
  sectionLabel: 'Retail Integration',
  headline: 'Already Running Retail? Integrate Consignment Seamlessly.',
  description:
    'Connect your POS, Shopify, or ERP system to DKC Connect and bring authenticated Kashmir consignment inventory into your retail operation immediately.',
  features: [
    {
      icon: 'FileText',
      title: 'Contract Automation',
      description:
        'Digital agreements manage commission splits, settlement timelines, and renewals transparently.',
    },
    {
      icon: 'Package',
      title: 'Inventory Sync',
      description:
        'Live SKU updates, cross-location stock visibility, and automated reconciliation across all retail locations.',
    },
    {
      icon: 'CreditCard',
      title: 'Payment Assurance',
      description:
        'Automated settlement confirmation triggers accurate, on-schedule payouts with no manual delays.',
    },
    {
      icon: 'BarChart3',
      title: 'Performance Analytics',
      description:
        'KPIs, inventory turnover ratios, and stock efficiency metrics per consignment relationship.',
    },
    {
      icon: 'PlugZap',
      title: 'API & ERP Connectors',
      description:
        'POS, Shopify, and ERP plug-ins keep consignment data synchronised across your business systems.',
    },
  ],
  support: {
    description:
      'Retail integration support covering POS onboarding, API connectors, inventory mapping, blockchain verification, sandbox environments, SDKs, and documented SLAs.',
    note: 'API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const consignmentWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'Application to Active Retail in Four Steps',
  description:
    'A structured, governed activation process with every step defined before you begin.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description: 'Submit your application with identity, business details, and trade intent.',
    },
    {
      step: 2,
      label: 'KPI Evaluation',
      description:
        'Platform reviews your Dropshipping KPI record — minimum 6.0 required for standard entry.',
    },
    {
      step: 3,
      label: 'Onboard & Activate',
      description:
        'Contract execution, inventory setup, packaging review, and retail placement activation.',
    },
    {
      step: 4,
      label: 'Trade and Progress',
      description:
        'Settlement cycles run on confirmed sales — KPI 6.5+ and 12 months unlocks Wholesale.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'wholesale',
    name: 'Wholesale',
    kpiRequired: '6.5+',
    retentionRequired: '12 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const consignmentFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Consignment',
  items: [
    {
      question: 'Do buyers pay vendors upfront in consignment?',
      answer:
        'No. Consignment runs on pay-after-sale terms — buyers only pay vendors after products are confirmed sold through the automated settlement system.',
    },
    {
      question: 'What KPI score is required to enter Consignment?',
      answer:
        'A minimum KPI of 6.0 from Dropshipping is required for standard entry. KHCRF lateral evaluation can bypass this requirement for qualified partners.',
    },
    {
      question: 'Can I skip Dropshipping and enter Consignment directly?',
      answer:
        'Yes, through the KHCRF lateral evaluation fast-track — qualified partners can enter Consignment without completing the standard Dropshipping retention period.',
    },
    {
      question: 'What happens to unsold consignment inventory?',
      answer:
        "Vendor ownership is retained throughout. Unsold stock can be returned or redistributed through the platform's reverse logistics system under your consignment agreement.",
    },
    {
      question: 'How do I progress to Wholesale after Consignment?',
      answer:
        'Maintain KPI 6.5+ and complete 12 months of consignment performance — Wholesale unlocks with guaranteed bulk purchase orders and higher revenue potential.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const consignmentFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Retail Access for Kashmir Craft. Risk Shared on Both Sides.',
    description:
      'Pay after sales, retain ownership until sold — a governed consignment partnership with full compliance and settlement automation built in.',
  },
  roles: {
    buyer: {
      headline: 'Stock Premium Kashmir Craft Without Upfront Cost',
      supportingPoints: [
        'Pay vendors only after confirmed sales — zero upfront inventory risk.',
        'GI-certified, blockchain-verified products on every consignment shelf.',
        'Most buyers are live with active consignment placements within 3 weeks.',
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
      headline: 'Place Your Craft in Verified Retail Without the Infrastructure Burden',
      supportingPoints: [
        'Full legal ownership retained until confirmed sale — no risk on unsold stock.',
        'GI certification and blockchain provenance on every retail listing.',
        'Most vendors are placed with first retail partners within 3–4 weeks.',
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

export const CONSIGNMENT = {
  meta: consignmentMeta,
  heroSection: consignmentHero,
  overviewSection: consignmentOverview,
  modelDifferenceSection: consignmentModelDifference,
  // keyFeaturesSection: consignmentKeyFeatures,
  eligibilityRulesSection: consignmentEligibilityRules,
  eligibilityAssessmentSection: consignmentEligibilityAssessment,
  capabilitiesSection: consignmentCapabilities,
  comparisonSection: consignmentComparison,
  // platformAdvantageSection: consignmentPlatformAdvantage,
  pricingSection: consignmentPricing,
  technologySection: consignmentTechnology,
  apiIntegrationSection: consignmentApiIntegration,
  workflowSection: consignmentWorkflow,
  faqSection: consignmentFaq,
  finalCtaSection: consignmentFinalCta,
} as const;

export type ConsignmentContent = typeof CONSIGNMENT;
