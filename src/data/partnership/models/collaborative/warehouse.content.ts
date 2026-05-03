export type WarehouseAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type WarehouseQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const warehousingMeta = {
  slug: 'warehousing',
  system: 'collaborative',
  tier: 3,
  label: 'Warehousing',
  pageTitle: 'Warehousing Partnerships',
  seoDescription:
    'A collaborative warehousing partnership that gives Kashmiri craft vendors and buyers secure certified storage, compliant fulfilment, real-time inventory visibility, and stronger global logistics readiness.',
  kpiRequired: '8.5+',
  retentionRequired: '4 months at Storytelling & Media',
  previousSlug: 'storytelling-media',
  nextSlug: 'logistics',
  nextSystem: 'institutional',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['warehousing', 'storage', 'fulfilment', 'inventory', 'logistics', 'collaborative'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer gains inventory reliability, faster fulfilment, and
// reduced logistics burden. Vendor gains secure certified storage without
// building their own distribution infrastructure.

export const warehousingHero = {
  sectionLabel: 'Warehousing Partnership',
  shared: {
    badge: 'Collaborative — Tier 3 Final',
    statusChip: 'KPI 8.5+ Required — Storytelling & Media Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Get Kashmir Craft From Warehouse to Your Door. Faster, Cheaper, More Reliable.',
      description:
        'Access certified warehoused Kashmir craft inventory held in strategic global distribution hubs — with real-time stock visibility, just-in-time fulfilment, consolidated shipping, and significantly reduced customs and logistics costs compared to direct import.',
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
      headline: 'Store Your Kashmir Craft in Certified Global Hubs. Fulfil Faster. Scale Further.',
      description:
        'Place export-ready Kashmir craft inventory in certified warehousing facilities — without building your own storage or distribution infrastructure. Secure, insured, blockchain-tracked storage with AI-powered inventory dashboards and integrated order fulfilment.',
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
// Shared: problem and solution framing covers both roles.
// Solutions broadened from "US-based" to global per platform architecture.

export const warehousingOverview = {
  sectionLabel: 'Why Warehousing',
  headline: 'Enabling Reliable Storage and Distribution',
  description:
    'Informal storage and weak logistics disrupt supply and delivery. This pathway provides structured warehousing, inventory control, and scalable distribution systems.',
  problems: [
    'Vendors lack secure and compliant storage for inventory',
    'Buyers face delays and inconsistent product availability',
    'Returns and reverse logistics create high operational costs',
    'No structured infrastructure for global distribution scale',
  ],
  solutions: [
    'Secure and compliant storage in key distribution locations',
    'Reliable inventory availability and fulfillment systems',
    'Centralized handling of returns and reverse logistics',
    'Infrastructure supporting global-scale distribution',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Warehouse icon valid Lucide. ArrowLeftRight valid. Restructured.

export const warehousingModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Certified Warehousing That Protects Kashmir Craft Heritage and Enables Global Scale.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass production goods, no unverified inventory. Every stored product is GI-certified, blockchain-tracked, and compliance-documented.',
  sharedFeatures: [
    {
      icon: 'Warehouse',
      title: 'Certified Global Warehousing Network',
      description:
        'Vendors place inventory in certified, compliance-audited warehousing facilities in strategic distribution hubs — with international trade standards, climate control, and full insurance coverage from day one.',
    },
    {
      icon: 'Package',
      title: 'Shared Operations and Value-Added Services',
      description:
        'Marketplace provides labelling, packaging, kitting, staffing, and point-of-sale service infrastructure — eliminating the need for vendors to build or manage their own fulfilment operations.',
    },
    {
      icon: 'BarChart3',
      title: 'AI-Powered Inventory Monitoring',
      description:
        'Real-time AI dashboards track product movement, shrinkage, replenishment timelines, and demand signals — giving both buyers and vendors full visibility over warehouse inventory status at all times.',
    },
    {
      icon: 'ArrowLeftRight',
      title: 'Centralised Return and Reverse Logistics Management',
      description:
        'A unified return handling system manages exchanges, repairs, refurbishment, and reverse logistics efficiently — reducing the cost burden of returns for both buyers and vendors.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Faster Fulfilment Through Local Inventory',
          description:
            'Orders fulfilled from warehoused inventory in distribution hubs eliminate extended import timelines — enabling same-region delivery speeds for Kashmir craft that direct-from-source shipping cannot achieve.',
        },
        {
          icon: 'Shield',
          title: 'Quality Assurance on Arrival',
          description:
            'All warehoused goods are stored under compliance-driven standards with climate control, handling protocols, and regular quality audits — ensuring product condition is maintained from storage through delivery.',
        },
        {
          icon: 'Layers',
          title: 'Multi-Vendor Sourcing From a Single Hub',
          description:
            'Shared warehouse pools allow consolidated sourcing from multiple Kashmir craft vendors simultaneously — reducing per-unit logistics costs and simplifying multi-vendor order management.',
        },
        {
          icon: 'TrendingUp',
          title: 'Scalable Sourcing With Reduced Logistics Burden',
          description:
            'Warehoused inventory scales sourcing capacity without proportionally scaling logistics complexity — enabling growth in Kashmir craft procurement without the operational overhead that direct import creates.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Lock',
          title: 'Insured, Tracked, Protected Storage',
          description:
            'Products stored in certified facilities are insured against theft, loss, and damage — with blockchain-linked warehouse receipts providing an immutable record of every inventory movement.',
        },
        {
          icon: 'DollarSign',
          title: 'Improved Cash Flow Through Faster Fulfilment',
          description:
            'Warehoused inventory enables faster order fulfilment cycles — accelerating payment settlement timelines and improving vendor cash flow compared to direct-from-source shipping models.',
        },
        {
          icon: 'Briefcase',
          title: 'Value-Added Services Without Infrastructure Investment',
          description:
            'Access packaging, labelling, kitting, and compliance documentation services through the warehouse facility — without building independent fulfilment infrastructure or hiring dedicated logistics staff.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Wholesale and Export Scale Enablement',
          description:
            'Certified warehousing with proven fulfilment capability is the operational prerequisite for wholesale, export, and institutional partner channels — this partnership builds that foundation directly.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values from specialRules (KPI 8.5+, 4 months Storytelling & Media,
// 12-month minimum commitment at Warehousing). See CLIENT FLAG 1.
// Cross-system: next partnership is Logistics in the Institutional tier.

export const warehousingEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Warehousing Requires Storytelling & Media Completion and Logistics Readiness',
  description:
    'Warehousing is the final tier of the Collaborative system. Partners entering Warehousing have completed the full Collaborative journey through Storytelling & Media and are ready for certified storage, professional fulfilment, and the logistics infrastructure that supports global distribution at institutional scale.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.5+',
      note: 'Minimum performance score from prior Storytelling & Media — same as preceding tier.',
    },
    {
      label: 'Prior Retention',
      value: '4 months at Storytelling & Media',
      note: 'Full Storytelling & Media retention must be completed before Warehousing entry.',
    },
    {
      label: 'Warehousing Commitment',
      value: '12-month minimum',
      note: 'Warehousing requires a minimum 12-month commitment — longer than all preceding tiers.',
    },
    {
      label: 'Previous Level',
      value: 'Storytelling & Media',
      note: 'Standard path requires Storytelling & Media completion within the Collaborative tier.',
    },
    {
      label: 'Compliance',
      value: 'Logistics Partnerships and Digital Inventory Traceability',
      note: 'Active logistics contracts and ERP/API-enabled inventory traceability required at entry.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    "After completing 12 months at Warehousing with strong performance, partners unlock Logistics — the first Institutional tier — marking entry into the platform's most advanced level of global trade infrastructure, institutional partnerships, and governmental collaboration.",
  nextSlug: 'logistics',
  nextSystem: 'institutional',
  nextLabel: 'Logistics',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// Assessment name corrected from "Warehouse" to "Warehousing".
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() warehousing block.

export const warehousingEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Warehousing, your logistics readiness, and whether you qualify for faster progression into the Institutional tier.',
  introCard: {
    icon: 'Target',
    title: 'Warehousing Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your warehousing and logistics readiness and what progression pathway is available.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Warehousing Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Warehousing',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified',
        ],
        category: 'general' as WarehouseAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Exceeds export excellence standards',
        ],
        category: 'general' as WarehouseAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and logistics?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Full zero-waste, carbon-tracked commitment',
        ],
        category: 'general' as WarehouseAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Personalised with active feedback loop',
        ],
        category: 'general' as WarehouseAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Fully certified safe workplaces and fair trade',
        ],
        category: 'general' as WarehouseAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'storytelling_media_retention',
        question: 'Did you complete 4 months retention in Storytelling & Media?',
        type: 'single' as WarehouseQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'storytelling_media_kpi',
        question: 'Did you maintain KPI 8.5 or above in Storytelling & Media?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'logistics_partnerships',
        question: 'Do you have active logistics partnerships or fulfilment contracts in place?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'inventory_trackable',
        question: 'Is your inventory digitally trackable through ERP or API-enabled systems?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as WarehouseAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_export_inventory',
        question: 'Do you have export-ready inventory volumes prepared for warehousing?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_shared_warehouse',
        question:
          'Can you manage shared warehouse space allocation across multiple distribution hubs?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_sku_traceability',
        question: 'Do you provide SKU-level product traceability across all inventory lines?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these warehousing readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WarehouseQuestionType,
        options: [
          'Barcode and QR compliance — all inventory SKUs labelled and scan-ready',
          'Digital inventory management system — ERP, WMS, or equivalent in operation',
          'Seasonal storage readiness — able to manage stock levels across demand cycles',
        ],
        category: 'vendor' as WarehouseAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your warehousing buying operation?',
        type: 'single' as WarehouseQuestionType,
        options: [
          'Wholesaler — sourcing bulk Kashmir craft for regional distribution',
          'Institutional buyer — government, museum, or NGO requiring reliable large-volume supply',
          'Retail distributor — managing Kashmir craft across multiple retail store locations',
        ],
        category: 'buyer' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_just_in_time',
        question: 'Do you require just-in-time fulfilment for your Kashmir craft procurement?',
        type: 'yesno' as WarehouseQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as WarehouseAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these buyer warehousing readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as WarehouseQuestionType,
        options: [
          'Ability to commit to 12-month storage contracts — long-term warehousing agreements',
          'API-driven order fulfilment integration — connected to WMS or OMS platform',
          'Demand forecasting partnership — able to share procurement forecasts for inventory planning',
        ],
        category: 'buyer' as WarehouseAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Warehousing (TIER 3 / L12)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Warehousing + Fast Track to Logistics',
        fastTrackEligible: true,
        nextLevel: 'Logistics',
      },
      21: {
        eligibility: 'Logistics (TIER 4 / L13)',
        fastTrackEligible: true,
        nextLevel: 'Logistics',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Warehousing',
        kpiThreshold: 8.5,
        retentionPeriod: '4 months at Storytelling & Media',
        minCommitment: '12 months at Warehousing',
      },
      buyer: {
        commitment: 'Warehousing',
        kpiThreshold: 8.5,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Warehousing (TIER 3 / L12)':
          "You're eligible for Warehousing. Build your storage and fulfilment capability and progress toward the Institutional tier from here.",
        'Warehousing + Fast Track to Logistics':
          "Great fundamentals. You're eligible for Warehousing with a fast track to Logistics.",
        'Logistics (TIER 4 / L13)':
          'Exceptional. Your warehousing record makes you eligible for Logistics via Lateral Entry into the Institutional tier.',
      },
      nextStepsByOutcome: {
        'Warehousing (TIER 3 / L12)': [
          'Join the Warehousing programme.',
          'Secure shared storage allocation in certified distribution hubs.',
          'Complete KHCRF warehouse compliance review.',
          'Improve digital inventory traceability through ERP or API integration.',
        ],
        'Warehousing + Fast Track to Logistics': [
          'Prepare fast-track documentation for Logistics progression.',
          'Strengthen storage systems, fulfilment workflows, and SKU traceability readiness.',
          'Complete advanced KHCRF warehouse and logistics compliance review.',
          'Align distribution contracts and operational capacity plans for Institutional entry.',
        ],
        'Logistics (TIER 4 / L13)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit warehousing, distribution, and compliance documentation.',
          'Complete KHCRF distribution-readiness and Logistics progression review.',
          'Prepare for direct transition into Logistics onboarding in the Institutional tier.',
        ],
      },
      strengthsByOutcome: {
        'Warehousing (TIER 3 / L12)': [
          'Commitment to professional warehousing operations',
          'Strong Collaborative tier foundation from Storytelling & Media',
        ],
        'Warehousing + Fast Track to Logistics': [
          'Export-ready inventory and digital traceability capability',
          'Logistics partnerships and storage contract readiness',
          'Clear Institutional tier progression trajectory',
        ],
        'Logistics (TIER 4 / L13)': [
          'Full warehousing and fulfilment infrastructure established',
          'Strong KHCRF compliance and distribution readiness record',
          'Channel-level inventory and SLA systems operational',
        ],
      },
      improvementsByOutcome: {
        'Warehousing (TIER 3 / L12)': [
          'Strengthen SKU-level traceability and digital inventory management.',
          'Build seasonal storage capacity and demand forecasting capability.',
          'Establish active logistics partnerships and fulfilment contracts.',
        ],
        'Warehousing + Fast Track to Logistics': [
          'Strengthen channel-level inventory and SLA systems for Institutional tier.',
          'Align distribution-ready operational capacity with Logistics requirements.',
        ],
        'Logistics (TIER 4 / L13)': [],
      },
      defaultStrengths: [
        'Commitment to professional warehousing and distribution operations',
        'Strong Collaborative tier foundation from Storytelling & Media',
      ],
      defaultDevelopmentAreas: [
        'Strengthen SKU-level traceability and digital inventory systems.',
        'Build seasonal storage capacity and logistics partnership infrastructure.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Consignee/Consignor" labels in raw file replaced with buyer/vendor.

export const warehousingCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Shared Warehousing Infrastructure for Global Distribution',
  subheadline:
    'Certified storage, fulfilment, and returns systems improving speed and reliability.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Vendors connected with certified warehousing partners',
        'Structured agreements for storage, insurance, and handling',
        'Compliant facilities aligned with global trade standards',
      ],
    },
    {
      title: 'Fulfilment & Support',
      icon: 'Truck',
      items: [
        'Scalable storage across certified distribution hubs',
        'Centralised packing, labelling, and dispatch operations',
        'Managed returns and reverse logistics workflows',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Inventory insights on stock flow and replenishment timing',
        'Demand forecasting for seasonal distribution planning',
        'ROI tracking across fulfilment and warehousing performance',
      ],
    },
    {
      title: 'Distribution Readiness',
      icon: 'Package',
      items: [
        'Ready-stock reliability for wholesale and retail buyers',
        'Insured inventory with traceable storage records',
        'Infrastructure supporting institutional and export growth',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Faster delivery from pre-positioned warehoused inventory',
        'Lower logistics costs through consolidated imports',
        'More stable stock availability for retail planning',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Global distribution presence without owning facilities',
        'Reduced delivery delays and supply uncertainty',
        'Stronger buyer trust through reliable fulfilment',
      ],
    },
  },

  impact: [
    {
      title: 'Distribution Backbone',
      description: 'Embedding Kashmir craft into dependable global supply infrastructure',
    },
    {
      title: 'Market Expansion',
      description: 'Opening more markets through faster and more reliable delivery',
    },
    {
      title: 'Sector Stability',
      description: 'Supporting predictable demand and stronger long-term partnerships',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const warehousingPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Warehousing partnership enables faster global distribution for Kashmir craft — reducing shipping delays, creating dependable fulfilment systems, and establishing the supply chain infrastructure that institutional and retail partners require.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Faster Delivery From Warehoused Inventory',
//           description:
//             'Access Kashmir craft from certified distribution hubs — dramatically reducing delivery timelines compared to direct-from-source imports and enabling the replenishment speeds retail operations demand.',
//         },
//         {
//           title: 'Lower Shipping Costs Through Consolidated Imports',
//           description:
//             'Consolidated warehouse shipping across multiple vendors reduces per-unit logistics costs — giving buyers significantly better economics on Kashmir craft procurement at any volume level.',
//         },
//         {
//           title: 'Stable Craft Supply for Retail Planning',
//           description:
//             'Warehoused inventory removes supply uncertainty from retail planning — enabling promotional campaigns, seasonal purchasing commitments, and long-term procurement strategies with genuine stock confidence.',
//         },
//         {
//           title: 'Reduced Customs and Import-Related Delays',
//           description:
//             'Pre-cleared, compliance-documented warehoused products reduce customs friction significantly — enabling faster product movement from warehouse to retail floor or distribution centre.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'US and Global Distribution Presence',
//           description:
//             'Access certified storage in strategic global distribution hubs — establishing a physical inventory presence in key markets that enables the fulfilment speed and reliability premium buyers require.',
//         },
//         {
//           title: 'Reduced Shipping Delays and Supply Uncertainty',
//           description:
//             'Warehoused inventory eliminates the shipping timeline variability that direct-from-Kashmir supply creates — giving buyers the confidence in availability that drives repeat ordering and long-term partnerships.',
//         },
//         {
//           title: 'Attract More Buyers Through Ready-Stock Reliability',
//           description:
//             'Buyers consistently prioritise vendors with warehoused, immediately available inventory — giving vendors with certified storage a measurable commercial advantage in wholesale and institutional procurement.',
//         },
//         {
//           title: 'Long-Term Trust Through Consistent Fulfilment',
//           description:
//             'Reliable, professional fulfilment from certified facilities builds buyer trust and supply chain credibility — the foundation for repeat orders, long-term contracts, and institutional partnership development.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Establishing Kashmir Crafts in Global Distribution Infrastructure',
//         description:
//           'Structured warehousing partnerships integrate Kashmir craft into the global distribution ecosystem — establishing supply chain infrastructure that makes the sector accessible to institutional and large-scale retail buyers.',
//       },
//       {
//         title: 'Expanding Market Reach Through Dependable Supply Chains',
//         description:
//           'Reliable warehoused supply expands the range of global markets Kashmir craft can serve — removing the logistical constraints that have historically limited the sector to buyers willing to accept long lead times.',
//       },
//       {
//         title: 'Building Trust for Long-Term Retail and Institutional Partnerships',
//         description:
//           'Consistent, professionally managed fulfilment builds the commercial trust that sustains long-term retail and institutional partnerships — a trust that informal supply chains fundamentally cannot deliver.',
//       },
//       {
//         title: 'Supporting Sector Stability Through Consistent Global Demand',
//         description:
//           'Warehousing infrastructure supports stable, predictable demand patterns for Kashmir craft — reducing the revenue volatility that seasonal informal trade creates and enabling sustainable artisan production planning.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// $500 one-time onboarding fee covers warehousing setup, insurance, and compliance contracts.
// Yearly billing. Additional pallet overage: $50–$75/month per pallet (see FAQ and FLAG 4).

export const warehousingPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Reliable Storage and Fulfilment.',
  description:
    'Three clear yearly package tiers covering storage volume, inventory visibility, and fulfilment support depth. One-time onboarding fee covers warehousing setup, insurance, and compliance contracts.',
  note: 'Additional pallets beyond package limits are available at $50–$75 per pallet per month. Confirm with your account manager at onboarding.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $500 one-time onboarding fee covers warehousing facility setup, insurance documentation, and compliance contract preparation.',
    note: 'Annual package fees apply after onboarding is complete.',
    badge: 'Required for All Warehousing Partners',
  },
  packages: [
    {
      name: 'Standard',
      price: '$200',
      billingPeriod: 'year',
      features: [
        'Up to 2 pallets of secure certified storage',
        'Basic AI-powered inventory dashboard',
        'Standard packaging and labelling access',
        'Baseline compliance documentation support',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$400',
      billingPeriod: 'year',
      features: [
        'Up to 5 pallets of priority storage allocation',
        'Priority inventory access and fulfilment handling',
        'Smart packaging kit and sustainability reporting',
        'AI-powered demand forecasting tools',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$750',
      billingPeriod: 'year',
      features: [
        '10+ pallets with institutional-grade storage',
        'Dedicated account manager and logistics concierge',
        'Blockchain-linked warehousing receipts per shipment',
        'Full institutional logistics and compliance support',
      ],
      recommended: false,
    },
  ],
  range: '$200–$750/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// Non-standard icons replaced:
//   Blockchain → Link2 (non-standard Lucide)
//   Clipboard  → ClipboardList (valid Lucide equivalent)
// All other icons valid. Support line is clean — preserved as-is.

export const warehousingTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Warehousing Protection Framework',
  description:
    "Every warehoused Kashmir craft product is protected under DKC's end-to-end Protection Suite — ensuring inventory security, compliance traceability, and full transparency for both buyers and vendors.",
  features: [
    {
      icon: 'Shield',
      title: 'Comprehensive Insurance Coverage',
      description:
        'All-risk insurance coverage for stored goods — protecting against loss, theft, damage, and transit incidents throughout the warehousing lifecycle.',
    },
    {
      icon: 'Link2',
      title: 'Blockchain Warehouse Receipts',
      description:
        'Blockchain-linked digital receipts for every storage transaction — providing secure, immutable traceability from inventory inbound through order fulfilment and delivery.',
    },
    {
      icon: 'CheckCircle',
      title: 'Regular Inventory Audits',
      description:
        'Scheduled and surprise inventory audits across all facilities — ensuring stock accuracy, compliance adherence, and quality standard maintenance throughout storage.',
    },
    {
      icon: 'Lock',
      title: 'Advanced Fraud and Theft Prevention',
      description:
        'CCTV surveillance, access control systems, tamper-evident sealing, and all-risk security infrastructure protecting stored Kashmir craft against fraud and theft.',
    },
    {
      icon: 'Thermometer',
      title: 'Climate-Controlled Storage',
      description:
        'Temperature and humidity monitoring systems protect delicate Kashmir craft — Pashmina, silk, lacquerwork, papier-mâché — from environmental damage throughout storage.',
    },
    {
      icon: 'Gavel',
      title: 'Claims and Legal Support',
      description:
        'Structured claims processing and direct legal assistance for any warehousing incident — providing quick, governed resolution for loss, damage, or fulfilment failures.',
    },
    {
      icon: 'Truck',
      title: 'Integrated Logistics Dispatch',
      description:
        'Seamless carrier integration for outbound dispatch — with route optimisation, carrier selection, shipment tracking, and SLA management built into the fulfilment workflow.',
    },
    {
      icon: 'ClipboardList',
      title: 'Regulatory Compliance Tracking',
      description:
        'Continuous tracking of warehousing compliance against international trade, customs, safety, and storage regulations — with automated alerts for any compliance gap.',
    },
  ],
  support:
    'Every warehoused Kashmir craft product is protected with end-to-end inventory security, compliance transparency, and robust fulfilment infrastructure.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers managing procurement and vendors managing inventory.
// 12 features preserved from raw file.
// Plug → PlugZap (standard Lucide). Grid → LayoutGrid (valid Lucide).
// Prime Logic removed throughout.

export const warehousingApiIntegration = {
  sectionLabel: 'Warehousing Integration',
  headline: 'Already Running Warehousing Operations? Accelerate With DKC.',
  description:
    'Unify WMS and OMS systems, enhance real-time inventory visibility, standardise fulfilment SLAs, and scale distribution globally — all through a single integrated warehousing platform.',
  features: [
    {
      icon: 'UserCheck',
      title: 'Onboarding and Service-Level Agreements',
      description:
        'Digital storage contracts, KYC verification, standard operating procedures, safety compliance, and service tier configurations standardised for all warehousing partnerships.',
    },
    {
      icon: 'PlugZap',
      title: 'WMS and ERP Connectors',
      description:
        'Prebuilt integrations for Manhattan Associates, Blue Yonder, ShipBob, 3PL Central, Oracle WMS, and Shopify fulfilment — deployed without custom development.',
    },
    {
      icon: 'Eye',
      title: 'Real-Time Inventory Visibility',
      description:
        'Live stock level tracking, lot and batch management, FIFO and FEFO rotation, cycle counting workflows, and RFID and IoT sensor integration across all facilities.',
    },
    {
      icon: 'Package',
      title: 'Inbound Quality Control',
      description:
        'Advanced Shipping Notice management, appointment scheduling, directed putaway, inbound inspection workflows, nonconformance logging, and vendor performance scorecards.',
    },
    {
      icon: 'Truck',
      title: 'Pick, Pack, and Dispatch Automation',
      description:
        'Wave and zone pick methods, packing specification rules, automated carrier label generation, shipment manifests, and SLA timer management for outbound fulfilment.',
    },
    {
      icon: 'Box',
      title: 'Value-Added Warehousing Services',
      description:
        'Kitting and assembly, product relabelling, gift packaging, promotional insert management, product repairs, and personalisation services available within warehouse facilities.',
    },
    {
      icon: 'ArrowLeft',
      title: 'Returns and Reverse Logistics Hub',
      description:
        'RMA processing, product grading and inspection, refurbishment workflows, reboxing and repackaging, disposition management, and warranty return documentation.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Compliance and Provenance Custody',
      description:
        'GI and KHCRF provenance documentation management, product labelling compliance, hazardous and fragile goods handling protocols, and full warehouse audit trail maintenance.',
    },
    {
      icon: 'LayoutGrid',
      title: 'Storage Space Optimisation',
      description:
        'ABC velocity-based slotting, optimal bin size allocation, vertical space utilisation modelling, and congestion heat map analysis for maximum warehouse efficiency.',
    },
    {
      icon: 'Lock',
      title: 'Security and Insurance Management',
      description:
        'CCTV monitoring integration, access control management, shipment seal tracking, all-risk cargo coverage, and structured claims handling workflows.',
    },
    {
      icon: 'DollarSign',
      title: '3PL Billing and Cost Management',
      description:
        'Activity-based billing automation, accessorial surcharge management, billing audits, chargeback prevention controls, and cost recovery management.',
    },
    {
      icon: 'TrendingUp',
      title: 'Capacity Planning and Demand Intelligence',
      description:
        'Demand signal integration, labour capacity planning, dock appointment calendar management, seasonal overflow strategies, and operational throughput optimisation.',
    },
  ],
  support: {
    description:
      'Warehousing integration support covering WMS, OMS, and ERP onboarding, EDI 940/945/943/944/846 transaction sets, GS1 and UCC label configuration, 856 ASN management, and RFID and IoT feed integration.',
    note: 'Sandbox environments, SDKs, and SLAs available for all active Warehousing partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.
// nextUnlock crosses into Institutional system.

export const warehousingWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Global Warehousing — Five Steps',
  description:
    'A structured, compliance-driven activation process for professional Kashmir craft warehousing.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Warehousing application with identity, business details, and Storytelling & Media completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Check',
      description:
        'Platform validates KPI from Storytelling & Media (8.5+ required), logistics partnership status, and digital inventory traceability readiness.',
    },
    {
      step: 3,
      label: 'Warehouse Setup',
      description:
        'Storage allocation confirmed, insurance documentation executed, compliance contracts signed, and inventory inbound process activated.',
    },
    {
      step: 4,
      label: 'Activation',
      description:
        'Inventory placed into certified facilities. Real-time dashboards go live. Fulfilment operations begin. Buyers gain stock visibility.',
    },
    {
      step: 5,
      label: 'Growth and Progression',
      description:
        'Warehousing performance tracked over 12-month commitment. Strong performance unlocks Logistics — the first Institutional tier.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'logistics',
    system: 'institutional',
    name: 'Logistics',
    kpiRequired: '8.5+',
    retentionRequired: '12 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const warehousingFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Warehousing',
  items: [
    {
      question: 'Do I need to complete Storytelling & Media before joining?',
      answer:
        'Yes. Four months at Storytelling & Media with KPI 8.5+ is required for the standard path. KHCRF lateral evaluation can bypass this for qualified partners with existing certified warehousing and logistics infrastructure.',
    },
    {
      question: 'What types of Kashmir craft goods are stored?',
      answer:
        'Only verified Kashmiri handmade crafts — carpets and rugs, papier-mâché, walnut wood carving, Pashmina and shawls, crewelwork, and other KHCRF-certified products. No mass-produced or non-Kashmir goods are stored in the network.',
    },
    {
      question: 'How is pricing calculated if I exceed my package storage limits?',
      answer:
        'Additional pallets beyond your package limit are charged at $50–$75 per pallet per month depending on facility location and product type. Your account manager confirms applicable rates at onboarding.',
    },
    {
      question: 'How are stored goods protected?',
      answer:
        'All-risk insurance coverage, blockchain-linked warehouse receipts, CCTV surveillance, access control systems, and climate-controlled storage for delicate craft categories. Goods are fully protected from the moment they enter the facility.',
    },
    {
      question: 'Can buyers access inventory availability in real time?',
      answer:
        'Yes. Buyers with API-integrated dashboards or WMS connectors can view real-time stock levels, fulfilment status, and replenishment timelines across all warehouse locations where their sourced products are held.',
    },
    {
      question: 'What does Warehousing unlock after completion?',
      answer:
        "Completing 12 months at Warehousing with KPI 8.5+ unlocks Logistics — the first Institutional tier — marking entry into the platform's most advanced level of global trade infrastructure, institutional partnerships, and governmental collaboration.",
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const warehousingFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Certified Storage. Professional Fulfilment. Global Distribution Ready.',
    description:
      'Insurance-backed inventory, blockchain-linked receipts, AI-powered dashboards, and integrated logistics — a Warehousing partnership that gives Kashmir craft the distribution infrastructure it needs to compete at global institutional scale.',
  },
  roles: {
    buyer: {
      headline:
        'Ready to Source Kashmir Craft With the Speed and Reliability Your Business Requires?',
      supportingPoints: [
        'Faster delivery from certified hubs — no extended direct-import timelines.',
        'Consolidated shipping reduces per-unit logistics costs across all Kashmir craft categories.',
        'Real-time inventory visibility enables confident retail planning and promotional commitments.',
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
      headline: 'Ready to Give Your Kashmir Craft a Professional Global Distribution Presence?',
      supportingPoints: [
        'Insured, blockchain-tracked, climate-controlled storage — without building your own infrastructure.',
        'Faster fulfilment cycles improve cash flow and build the buyer trust that drives repeat orders.',
        'Warehousing is the final Collaborative step before entry into the Institutional tier.',
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

export const WAREHOUSING = {
  meta: warehousingMeta,
  heroSection: warehousingHero,
  overviewSection: warehousingOverview,
  modelDifferenceSection: warehousingModelDifference,
  eligibilityRulesSection: warehousingEligibilityRules,
  eligibilityAssessmentSection: warehousingEligibilityAssessment,
  capabilitiesSection: warehousingCapabilities,
  // platformAdvantageSection: warehousingPlatformAdvantage,
  pricingSection: warehousingPricing,
  technologySection: warehousingTechnology,
  apiIntegrationSection: warehousingApiIntegration,
  workflowSection: warehousingWorkflow,
  faqSection: warehousingFaq,
  finalCtaSection: warehousingFinalCta,
} as const;

export type WarehousingContent = typeof WAREHOUSING;
