export type WholesaleAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type WholesaleQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const wholesaleMeta = {
  slug: 'wholesale',
  system: 'core-trade',
  tier: 1,
  label: 'Wholesale',
  pageTitle: 'Wholesale Partnerships',
  seoDescription:
    'A scalable bulk-trade pathway for distributors, chain stores, and large buyers to source authentic Kashmiri handmade crafts with competitive pricing, verified supply, and full trade compliance.',
  kpiRequired: '6.5+',
  retentionRequired: '4 months',
  previousSlug: 'consignment',
  nextSlug: 'import-export',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['bulk', 'wholesale', 'distributor', 'scale', 'supply-chain'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer and vendor propositions are materially different at wholesale scale.

export const wholesaleHero = {
  sectionLabel: 'Wholesale Trade Partnership',
  shared: {
    badge: 'Core Trade — Tier 1',
    statusChip: 'KPI 6.5+ Required',
  },
  roles: {
    buyer: {
      headline: 'Source Kashmir Craft at Scale. Pricing and Reliability Included.',
      description:
        'Bulk procurement of GI-certified Kashmiri craft with volume-based pricing, verified supply, and compliance infrastructure built for serious buyers.',
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
      headline: 'Secure Bulk Orders. Build Stable Revenue. Scale Your Craft.',
      description:
        'Access wholesale buyers — distributors, chain stores, and large retailers — with guaranteed purchase orders, predictable cashflow, and a clear path toward export.',
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
// Shared: problem and solution framing applies equally to both roles.

export const wholesaleOverview = {
  sectionLabel: 'Why Wholesale',
  headline: 'Enabling Reliable Bulk Craft Trade',
  description:
    'Bulk craft trade lacks consistency, structure, and trust. Wholesale introduces verified supply, standardized agreements, and systems built for large-scale transactions.',
  problems: [
    'No reliable bulk supply channels for verified vendors',
    'Lack of structured compliance for large international orders',
    'Inconsistent packaging and logistics at scale',
    'No transparent system for pricing and settlement',
  ],
  solutions: [
    'Verified vendors and buyers before bulk engagement',
    'Standardized agreements for pricing, volume, and delivery',
    'Packaging and logistics systems built for scale',
    'Structured progression into advanced trade pathways',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Consignee/Consignor terminology from raw file fully replaced with buyer/vendor.

export const wholesaleModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not Informal Bulk Trade. Structured. Compliant. Built for Volume.',
  exclusivityNote:
    'The most scalable wholesale pathway for authentic Kashmiri craft — every relationship is contract-backed, KPI-governed, and GI-authenticated.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Wholesale Marketplace',
      description:
        'Verified wholesale buyers connect with certified Kashmiri vendors — structured onboarding on both sides.',
    },
    {
      icon: 'Box',
      title: 'Bulk Order Infrastructure',
      description:
        'Automated processing, tiered pricing, consolidated shipments, and real-time order tracking at distribution scale.',
    },
    {
      icon: 'BarChart3',
      title: 'SKU-Level Transparency',
      description:
        'Live dashboards deliver SKU-level reporting, inventory turnover data, and demand forecasting.',
    },
    {
      icon: 'Shield',
      title: 'Cross-Border Compliance',
      description:
        'Contracts and logistics align with US, EU, and international standards — customs documentation automated.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Volume Pricing',
          description:
            'GI-certified bulk Kashmir craft at volume pricing — clear cost advantage over retail sourcing.',
        },
        {
          icon: 'Package',
          title: 'GI-Certified Supply',
          description:
            'Verified bulk supply of Kashmir craft for chain stores and global distributors.',
        },
        {
          icon: 'CheckCircle',
          title: 'Verified Supplier Reliability',
          description:
            'Every vendor is KYC-verified and KPI-assessed — eliminating supply chain uncertainty at wholesale volume.',
        },
        {
          icon: 'TrendingUp',
          title: 'Multi-Region Distribution',
          description:
            'Scale across multiple regions and hubs with logistics integration, customs support, and consolidated shipments.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Direct Bulk Buyer Access',
          description:
            'Connect with distributors, chain stores, and large retailers worldwide — no agents, no margin extraction.',
        },
        {
          icon: 'DollarSign',
          title: 'Predictable Revenue',
          description:
            'Guaranteed order volumes and predictable payment cycles give production planning a stable commercial foundation.',
        },
        {
          icon: 'Lock',
          title: 'Contract Security',
          description:
            'Structured contracts with defined pricing, delivery terms, and payment timelines enforced through the platform.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Gateway to Export',
          description:
            'Wholesale KPI record and compliance documentation directly unlock Import & Export.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values taken from cluster file (coreTrade_content.ts). See CLIENT FLAG 1.

export const wholesaleEligibilityRules = {
  sectionLabel: 'Wholesale Entry Rules',
  headline: 'Demonstrated Scale Readiness Required',
  description:
    'Wholesale is Core Trade Tier 3. Partners entering have demonstrated retail performance through Consignment and are ready for structured bulk procurement.',
  requirements: [
    {
      label: 'KPI Required',
      value: '6.5+',
      note: 'Minimum performance score from prior Consignment trade.',
    },
    {
      label: 'Retention Period',
      value: '4 months',
      note: 'Minimum time at Wholesale before progressing to Import & Export.',
    },
    {
      label: 'Previous Level',
      value: 'Consignment',
      note: 'Standard path requires Consignment completion.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention requirements.',
    },
  ],
  progressionNote:
    'Completing 4 months at Wholesale with KPI 7.0+ unlocks Import & Export — the final Core Trade tier.',
  nextSlug: 'import-export',
  nextLabel: 'Import & Export',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() wholesale block.

export const wholesaleEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Wholesale, your readiness level, and a personalised next-step recommendation.',
  introCard: {
    icon: 'Target',
    title: 'Wholesale Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your wholesale readiness and what progression path is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Wholesale Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Wholesale',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as WholesaleQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as WholesaleAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as WholesaleQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and export standards',
          'Exceeds export standards',
        ],
        category: 'general' as WholesaleAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as WholesaleQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as WholesaleAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as WholesaleQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as WholesaleAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your business?',
        type: 'single' as WholesaleQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully safe workplaces',
        ],
        category: 'general' as WholesaleAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'consignment_retention',
        question: 'Did you complete 4 months retention in Consignment?',
        type: 'single' as WholesaleQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'consignment_kpi',
        question: 'Did you maintain KPI 6.0 or above in Consignment?',
        type: 'yesno' as WholesaleQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'khcrf_packaging',
        question: 'Did you comply with KHCRF packaging and labelling standards in Consignment?',
        type: 'yesno' as WholesaleQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'erp_api_integration',
        question: 'Do you have ERP or API integration for inventory and order management?',
        type: 'yesno' as WholesaleQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WholesaleAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_production_scale',
        question: 'What best describes your current production scale?',
        type: 'single' as WholesaleQuestionType,
        options: ['Workshop or studio', 'Enterprise or cooperative'],
        category: 'vendor' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_bulk_capacity',
        question: 'Can you fulfil bulk orders of 100 or more pieces per SKU?',
        type: 'yesno' as WholesaleQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications',
        question: 'Which certifications do you currently hold?',
        type: 'single' as WholesaleQuestionType,
        options: ['GI tag only', 'KHCRF approval only', 'Both GI tag and KHCRF approval'],
        category: 'vendor' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these wholesale readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WholesaleQuestionType,
        options: [
          'Bulk packaging compliance — large-volume shipment ready',
          'Inventory management automation — ERP or equivalent in place',
          'Export invoicing capability — commercial invoice and packing list generation',
        ],
        category: 'vendor' as WholesaleAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your buying operation?',
        type: 'single' as WholesaleQuestionType,
        options: ['Wholesaler or distributor', 'B2B distributor or chain retail'],
        category: 'buyer' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity',
        question: 'What is your approximate annual sourcing budget for wholesale?',
        type: 'single' as WholesaleQuestionType,
        options: ['Under $5,000', '$5,000–$25,000', 'Over $25,000'],
        category: 'buyer' as WholesaleAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these wholesale readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WholesaleQuestionType,
        options: [
          'Storage capacity — facilities for bulk import inventory',
          'Digital integration — connected to KHCRF marketplace or ERP system',
          'Fair trade commitment — aligned with platform pricing and ethics standards',
        ],
        category: 'buyer' as WholesaleAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Wholesale (TIER 1 / L3)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Wholesale + Fast Track to Import & Export',
        fastTrackEligible: true,
        nextLevel: 'Import & Export',
      },
      21: {
        eligibility: 'Import & Export (TIER 1 / L4)',
        fastTrackEligible: true,
        nextLevel: 'Import & Export',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 6.5,
      },
      buyer: {
        commitment: null,
        kpiThreshold: 6.5,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Wholesale (TIER 1 / L3)':
          "You're eligible for Wholesale. Strengthen your systems and build toward higher tiers from here.",
        'Wholesale + Fast Track to Import & Export':
          "Great fundamentals. You're eligible for Wholesale with a fast track to Import & Export.",
        'Import & Export (TIER 1 / L4)':
          'Outstanding. Your operational record makes you eligible for Import & Export via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Wholesale (TIER 1 / L3)': [
          'Join the Wholesale programme.',
          'Ensure full KHCRF compliance for bulk trade.',
          'Automate inventory management and order processing.',
          'Build bulk packaging and labelling capabilities to standard.',
        ],
        'Wholesale + Fast Track to Import & Export': [
          'Prepare fast-track documentation for Import & Export progression.',
          'Strengthen invoicing, packaging, and automation systems.',
          'Complete advanced KHCRF compliance review.',
          'Build export-readiness documentation and trade processes.',
        ],
        'Import & Export (TIER 1 / L4)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit export compliance and supplier documentation.',
          'Complete KHCRF progression review for Import & Export.',
          'Prepare direct activation into Import & Export operations.',
        ],
      },
      strengthsByOutcome: {
        'Wholesale (TIER 1 / L3)': ['Wholesale trade commitment', 'Solid operational capacity'],
        'Wholesale + Fast Track to Import & Export': [
          'Strong wholesale foundation',
          'Operational scale and reliability',
          'Clear export growth potential',
        ],
        'Import & Export (TIER 1 / L4)': [
          'Bulk order readiness',
          'Export compliance capability',
          'Demonstrated trade performance',
        ],
      },
      improvementsByOutcome: {
        'Wholesale (TIER 1 / L3)': [
          'Pursue GI and KHCRF certifications for stronger compliance.',
          'Improve export invoicing and documentation systems.',
          'Expand production to enterprise-level capacity.',
          'Automate inventory management and bulk order processing.',
        ],
        'Wholesale + Fast Track to Import & Export': [
          'Enhance export readiness documentation.',
          'Upgrade ERP and API systems for larger volume.',
        ],
        'Import & Export (TIER 1 / L4)': [],
      },
      defaultStrengths: [
        'Wholesale trade commitment',
        'Operational capacity for bulk supply',
        'Structured approach to volume trade',
      ],
      defaultDevelopmentAreas: [
        'Pursue GI and KHCRF certifications.',
        'Improve bulk invoicing and packaging systems.',
        'Expand production capacity for enterprise-level orders.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// Consignee/Consignor terminology removed — replaced with buyer/vendor.

export const wholesaleCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Wholesale Trade Infrastructure Built for Scale',
  subheadline: 'Verified bulk sourcing, compliant logistics, and predictable global distribution.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Database',
      items: [
        'Verified wholesale buyers matched with certified vendors',
        'Standardised bulk agreements with automated processing',
        'Volume pricing with fair and transparent trade terms',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Consolidated bulk shipments for global distribution',
        'Automated customs documentation and clearance',
        'Full compliance across US, EU, and global trade',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Predictive demand insights for bulk sourcing decisions',
        'SKU-level tracking for fulfilment and supply monitoring',
        'KPI-driven progression toward export readiness',
      ],
    },
    {
      title: 'Trade Governance',
      icon: 'Handshake',
      items: [
        'Fair-trade oversight ensuring vendor compensation',
        'Transparent contracts for long-term trade stability',
        'Structured pathways into global distribution networks',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Lower unit costs through volume-based pricing',
        'Consistent, verified supply with no informal risk',
        'Flexible bulk customisation across products and logistics',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Guaranteed bulk orders with contract-backed demand',
        'Stable revenue through long-term supply agreements',
        'Built-in export readiness through compliance systems',
      ],
    },
  },

  impact: [
    {
      title: 'Economic Empowerment',
      description: 'Bulk trade creating employment and stable income across artisan communities',
    },
    {
      title: 'Production Excellence',
      description: 'Wholesale demand driving quality control and scalable production systems',
    },
    {
      title: 'Global Integration',
      description: 'Connecting Kashmir craft to international distribution at commercial scale',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact is shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const wholesalePlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's wholesale model gives buyers lower costs and reliable supply while giving vendors guaranteed orders and a pathway to export.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Lower Cost Per Unit',
//           description:
//             'Volume-based pricing delivers significant per-unit cost advantages over consignment or retail sourcing.',
//         },
//         {
//           title: 'Verified Supply',
//           description:
//             'Every vendor is KYC-verified and KPI-assessed — consistent, authenticated supply with no informal uncertainty.',
//         },
//         {
//           title: 'Customisable Orders',
//           description:
//             'Customise bulk orders by product mix, packaging specifications, labelling, and delivery timelines.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Guaranteed Bulk Orders',
//           description:
//             'Contract-backed purchase commitments replace retail uncertainty with predictable production demand.',
//         },
//         {
//           title: 'Stable Revenue',
//           description:
//             'Long-term wholesale contracts support production planning and cashflow without agent dependency.',
//         },
//         {
//           title: 'Export Readiness Built In',
//           description:
//             'Wholesale compliance discipline and documentation directly prepares vendors for Import & Export entry.',
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
//           'Structured wholesale access creates employment opportunities for Kashmiri artisans at community level.',
//       },
//       {
//         title: 'Production Excellence',
//         description:
//           'Wholesale demand drives investment in quality control and production systems across the craft industry.',
//       },
//       {
//         title: 'Global Integration',
//         description:
//           'Wholesale trade bridges Kashmir craft into international distribution networks at commercial scale.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// Wholesale has a one-time onboarding fee — not a free period.
// Shape aligned to dropshipping/consignment pattern with freeOffer used
// to communicate the onboarding fee structure.

export const wholesalePricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Structured for Bulk Trade.',
  description:
    'Three clear package tiers built for wholesale scale and distribution complexity. One-time onboarding fee covers compliance setup and contract preparation.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the wholesale partnership.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $500 one-time onboarding fee covers contract preparation, compliance setup, and platform configuration for wholesale operations.',
    note: 'Monthly package fees apply after onboarding is complete.',
    badge: 'Required for All Wholesale Partners',
  },
  packages: [
    {
      name: 'Standard',
      price: '$125',
      billingPeriod: 'month',
      features: [
        'Bulk order contract access',
        'Basic packaging templates',
        '5% logistics waiver',
        'KPI monitoring dashboard',
        'Standard buyer-vendor matching',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$250',
      billingPeriod: 'month',
      features: [
        'Distributor and chain store access',
        'Branded packaging kit',
        '10% logistics waiver',
        'Priority buyer allocation',
        'Performance analytics dashboard',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$500',
      billingPeriod: 'month',
      features: [
        'Strategic wholesale partnership access',
        'Premium custom packaging bundles',
        '15% logistics waiver',
        'Dedicated account manager',
        'Early progression pathway to Import & Export',
      ],
      recommended: false,
    },
  ],
  range: '$125–$500',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from main description and support line.

export const wholesaleTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Wholesale and Distribution Infrastructure Built for Volume',
  description:
    'DKC Connect provides a robust wholesale and distribution ecosystem — with automated bulk order management, integrated supplier systems, and logistics infrastructure designed for high-volume international craft trade.',
  features: [
    {
      icon: 'Package',
      title: 'Bulk Order Management',
      description:
        'Automate large-volume B2B orders with tiered pricing, approvals, and fast processing.',
    },
    {
      icon: 'Link',
      title: 'Supplier Catalog Integration',
      description:
        'Sync supplier catalogs in real time, automate purchase orders, and track inventory.',
    },
    {
      icon: 'TrendingUp',
      title: 'Dynamic Volume Pricing',
      description:
        'Offer volume discounts, manage contract pricing, and optimise strategy with AI-driven insights.',
    },
    {
      icon: 'Boxes',
      title: 'Multi-Warehouse Management',
      description:
        'Track inventory across warehouse locations, manage batch production, and coordinate distribution fulfilment.',
    },
    {
      icon: 'Activity',
      title: 'Supply Chain Forecasting',
      description:
        'Analyse demand patterns, optimise stock levels, and reduce supply chain risk via AI.',
    },
    {
      icon: 'UserSquare',
      title: 'Buyer and Vendor Portals',
      description:
        'Custom dashboards for buyers and vendors — manage contracts, orders, KPIs, and wholesale ordering.',
    },
    {
      icon: 'FileText',
      title: 'Trade Compliance Automation',
      description:
        'Automate commercial invoice generation, customs documentation, and cross-border compliance for shipments.',
    },
    {
      icon: 'Truck',
      title: 'Logistics API Integration',
      description:
        'Integrate with freight forwarding partners, optimise routes, and track bulk shipments globally.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated wholesale operations integration support.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers integrating ERP/distribution systems
// and vendors integrating production and inventory management.
// "Prime Logic Solutions" removed throughout.

export const wholesaleApiIntegration = {
  sectionLabel: 'System Integration',
  headline: 'Already Running a Wholesale Operation? Plug In and Scale.',
  description:
    'Connect your existing ERP, distribution management, or wholesale system directly to DKC Connect — whether you operate on SAP, Oracle NetSuite, or a custom-built wholesale infrastructure.',
  features: [
    {
      icon: 'PlugZap',
      title: 'ERP Connectors',
      description:
        'Prebuilt integrations for SAP, Oracle NetSuite, and major ERP platforms — no custom development.',
    },
    {
      icon: 'Wrench',
      title: 'Custom System Support',
      description:
        'REST and GraphQL APIs sync bulk orders, inventory, and compliance data with any system.',
    },
    {
      icon: 'Package',
      title: 'Automated Bulk Fulfilment',
      description:
        'Real-time bulk order routing, automated processing, and shipment coordination at wholesale volume.',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics and Forecasting API',
      description:
        'Pull demand forecasting, KPI dashboards, and inventory analytics into your BI infrastructure.',
    },
    {
      icon: 'Puzzle',
      title: 'Custom Wholesale Extensions',
      description:
        'Private-label packaging, distributor management modules, and custom order tools for enterprise workflows.',
    },
  ],
  support: {
    description:
      'Wholesale integration support covering ERP onboarding, API connectors, bulk order mapping, compliance documentation, sandbox environments, SDKs, and documented SLAs.',
    note: 'Wholesale API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.
// KPI in workflow step aligned to cluster file value.

export const wholesaleWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Bulk Trade — Four Steps',
  description: 'A structured, governed activation process designed for wholesale scale.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your wholesale application with identity, business details, and bulk trade intent.',
    },
    {
      step: 2,
      label: 'KPI Evaluation',
      description:
        'KPI record from Consignment is assessed — minimum 6.5 required for standard entry.',
    },
    {
      step: 3,
      label: 'Onboard & Activate',
      description:
        'Contract execution, packaging compliance, and ERP setup complete — bulk order relationships activate and KPI tracking begins.',
    },
    {
      step: 4,
      label: 'Trade and Progress',
      description:
        'With KPI 7.0+ and 4 months of wholesale performance, unlock Import & Export — the final Core Trade tier.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'import-export',
    name: 'Import & Export',
    kpiRequired: '7.0+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const wholesaleFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Wholesale',
  items: [
    {
      question: 'What KPI score is required to enter Wholesale?',
      answer:
        'A minimum KPI of 6.5 from your Consignment period is required for the standard entry path. KHCRF lateral evaluation can bypass this for qualified partners.',
    },
    {
      question: 'How does Wholesale differ from Consignment?',
      answer:
        'Wholesale involves upfront bulk procurement against a purchase order — buyers pay on delivery. Consignment is pay-after-sale with no upfront commitment.',
    },
    {
      question: 'Do vendors need GI certification for Wholesale?',
      answer:
        'GI certification is strongly recommended at Wholesale level and required for progression into Import & Export. KHCRF certification is required for standard Wholesale entry.',
    },
    {
      question: 'Can I move directly to Import & Export from Wholesale?',
      answer:
        'Yes. Maintaining KPI 7.0+ and completing 4 months at Wholesale unlocks Import & Export through the standard path. KHCRF fast-track evaluation can accelerate this for proven performers.',
    },
    {
      question: 'Can buyers request private-label bulk packaging?',
      answer:
        'Yes. Custom private-label bulk packaging is available under the Growth and Premium package tiers — with full branding, custom specifications, and dedicated account management.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const wholesaleFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Bulk Trade in Kashmir Craft. Structured, Verified, and Built to Scale.',
    description:
      'Guaranteed purchase orders. Volume pricing. Compliance infrastructure. A governed wholesale partnership that works for serious buyers and serious vendors — with a clear progression path to Import & Export.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Source Authentic Kashmir Craft at Wholesale Scale?',
      supportingPoints: [
        'Volume pricing with GI-certified verified supply — bulk advantage included.',
        'Every vendor KYC-verified and KPI-assessed — no supply chain uncertainty.',
        'Most buyers are active within 3–4 weeks of approval.',
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
      headline: 'Ready to Secure Bulk Orders and Build Stable Revenue?',
      supportingPoints: [
        'Guaranteed bulk purchase orders — contract-backed, predictable production demand.',
        'GI certification and blockchain provenance displayed on every wholesale listing.',
        'Wholesale performance builds the record that unlocks Import & Export.',
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

export const WHOLESALE = {
  meta: wholesaleMeta,
  heroSection: wholesaleHero,
  overviewSection: wholesaleOverview,
  modelDifferenceSection: wholesaleModelDifference,
  eligibilityRulesSection: wholesaleEligibilityRules,
  eligibilityAssessmentSection: wholesaleEligibilityAssessment,
  capabilitiesSection: wholesaleCapabilities,
  // platformAdvantageSection: wholesalePlatformAdvantage,
  pricingSection: wholesalePricing,
  technologySection: wholesaleTechnology,
  apiIntegrationSection: wholesaleApiIntegration,
  workflowSection: wholesaleWorkflow,
  faqSection: wholesaleFaq,
  finalCtaSection: wholesaleFinalCta,
} as const;

export type WholesaleContent = typeof WHOLESALE;
