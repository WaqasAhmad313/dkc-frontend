export type LogisticsAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type LogisticsQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const logisticsMeta = {
  slug: 'logistics',
  system: 'institutional',
  previousSystem: 'collaborative',
  tier: 4,
  label: 'Logistics',
  pageTitle: 'Logistics Partnerships',
  seoDescription:
    'An institutional logistics partnership that gives Kashmiri craft vendors and buyers structured freight forwarding, customs compliance, insurance coverage, and end-to-end supply chain support for global institutional trade.',
  kpiRequired: '9.0+',
  retentionRequired: '12 months at Warehousing',
  previousSlug: 'warehousing',
  nextSlug: 'museum',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['logistics', 'freight', 'customs', 'institutional', 'global-trade', 'supply-chain'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyers gain reliable, transparent, cost-efficient global import logistics.
// Vendors gain professional export freight infrastructure without building it independently.

export const logisticsHero = {
  sectionLabel: 'Logistics Partnership',
  shared: {
    badge: 'Institutional — Tier 4',
    statusChip: 'KPI 9.0+ Required — Warehousing Completion Required',
  },
  roles: {
    buyer: {
      headline:
        'Import Authentic Kashmir Craft With the Logistics Infrastructure Institutional Trade Demands.',
      description:
        'Access end-to-end logistics support for Kashmir craft imports — consolidated freight, automated customs compliance, shipment insurance, and real-time tracking built for the volume, reliability, and regulatory standards that institutional buyers, retail chains, and large distributors require.',
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
      headline: 'Export Kashmir Craft to Global Markets With Professional Freight Infrastructure.',
      description:
        'Move beyond informal export. Access certified freight forwarding, automated customs documentation, cargo insurance, and AI-optimised routing — with a logistics framework built specifically for the complexity and compliance demands of institutional-scale Kashmiri craft trade.',
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
// Solutions reframed from overlapping with Warehousing — focused on what
// Logistics adds at the institutional tier: freight, customs, insurance, compliance.

export const logisticsOverview = {
  sectionLabel: 'Why Logistics',
  headline: 'Enabling Reliable Global Craft Delivery',
  description:
    'Global delivery is limited by high costs, weak compliance, and unreliable shipping. This pathway ensures efficient, compliant, and scalable logistics for international trade.',
  problems: [
    'High logistics costs reduce profitability for small export volumes',
    'No structured system for returns and reverse logistics',
    'Vendors lack customs compliance for international shipping',
    'Shipments face delays, risk, and lack of proper insurance',
  ],
  solutions: [
    'Optimized freight reducing per-unit shipping costs',
    'Structured handling of returns and reverse logistics',
    'Support for customs compliance and documentation',
    'Secure and reliable shipment handling with insurance coverage',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.

export const logisticsModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Institutional-Grade Logistics Built Exclusively for Kashmir Craft Trade.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — every logistics solution is configured for the specific compliance, insurance, and handling requirements of GI-certified heritage craft at institutional scale.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Certified Global Logistics Provider Network',
      description:
        'Platform connects Kashmir craft vendors and buyers with certified international logistics and freight forwarding providers — with governed service contracts, compliance standards, and insurance coverage built into every arrangement.',
    },
    {
      icon: 'Truck',
      title: 'Consolidated Freight Forwarding',
      description:
        'Consolidated cargo solutions group smaller shipments into cost-efficient institutional-volume freight — reducing per-unit logistics costs dramatically across air, ocean LCL, FCL, and ground freight modes.',
    },
    {
      icon: 'FileText',
      title: 'Automated Customs Documentation',
      description:
        'AI-generated commercial invoices, certificates of origin, HS code classification, customs declarations, and export/import compliance documentation — prepared automatically for every cross-border shipment.',
    },
    {
      icon: 'Map',
      title: 'AI-Optimised Predictive Routing',
      description:
        'AI-driven route optimisation selects the most cost-efficient, reliable freight path for every shipment — factoring in lead times, port congestion, carrier performance, and SLA requirements.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Consolidated Shipments With Real-Time Tracking',
          description:
            'Receive consolidated Kashmir craft shipments from multiple vendors through a single logistics hub — with end-to-end real-time tracking from origin through customs to institutional delivery.',
        },
        {
          icon: 'Shield',
          title: 'Compliance-Driven Shipment Assurance',
          description:
            'All inbound shipments are managed under full customs and trade compliance standards — with cargo insurance, documented handling protocols, and quality assurance built into every delivery.',
        },
        {
          icon: 'Layers',
          title: 'Multi-Modal Freight Flexibility',
          description:
            'Select the freight mode — air for urgent procurement, ocean LCL or FCL for bulk volume — based on timeline, budget, and product category requirements across all sourcing relationships.',
        },
        {
          icon: 'TrendingUp',
          title: 'Scalable Import Infrastructure',
          description:
            'Scale Kashmir craft sourcing volumes without proportionally scaling logistics complexity — unified freight management supports growth from small institutional orders to large distribution volumes.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Global Export Without Building Freight Infrastructure',
          description:
            'Move Kashmir craft products to global institutional buyers through certified freight partners — without needing to build, manage, or fund independent export logistics infrastructure.',
        },
        {
          icon: 'Lock',
          title: 'Insured, Tracked Shipments From Origin',
          description:
            'Every shipment is digitally tracked from Kashmir production origin to institutional buyer destination — with all-risk cargo insurance protecting against loss, damage, delay, and theft throughout transit.',
        },
        {
          icon: 'DollarSign',
          title: 'Faster Delivery Cycles Improve Payment Timing',
          description:
            'Optimised routing and consolidated freight reduce transit times — accelerating order completion, triggering faster payment settlement cycles, and improving vendor cash flow predictability.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Logistics Readiness for Institutional and Franchise Expansion',
          description:
            'Certified logistics operations with documented compliance history position vendors for institutional procurement frameworks, museum acquisitions, NGO partnerships, and franchise trade relationships.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values from specialRules (KPI 9.0+, 12 months Warehousing). See FLAGS 1 and 2.

export const logisticsEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Logistics Requires Warehousing Completion and Institutional Trade Readiness',
  description:
    'Logistics is the first tier of the Institutional system — the most advanced level in the entire platform. Partners entering Logistics have completed the full Collaborative journey through Warehousing and are ready for institutional-grade freight, customs compliance, and global supply chain infrastructure.',
  requirements: [
    {
      label: 'KPI Required',
      value: '9.0+',
      note: 'The highest KPI threshold on the platform — reflects institutional trade readiness standard.',
    },
    {
      label: 'Prior Retention',
      value: '12 months at Warehousing',
      note: 'Full Warehousing commitment must be completed before Logistics entry.',
    },
    {
      label: 'Logistics Commitment',
      value: '6-month minimum',
      note: 'Minimum 6-month engagement at Logistics before progression to other institutional tracks.',
    },
    {
      label: 'Previous Level',
      value: 'Warehousing',
      note: 'Standard path requires Warehousing completion within the Collaborative tier.',
    },
    {
      label: 'Compliance',
      value: 'Global Freight Contracts and Customs Documentation',
      note: 'Active global freight forwarder contracts and customs/trade documentation compliance required.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified institutional partners.',
    },
  ],
  progressionNote:
    'After completing 6 months at Logistics with strong performance, partners unlock Museum, NGO & Government, or Technology Partnership tracks — the remaining Institutional tiers — based on their specific sector focus and institutional partner relationships.',
  nextSlug: 'museum',
  nextLabel: 'Museum',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// Threshold labels preserved exactly — must match EligibilityProvider.
// Validation question corrected: "Warehouse (T3/L12)" → "Warehousing (T3/L12)".
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() logistics block.

export const logisticsEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Logistics, your freight and compliance readiness, and whether you qualify for faster progression into other Institutional partnership tracks.',
  introCard: {
    icon: 'Target',
    title: 'Logistics Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your institutional logistics readiness and what progression is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Logistics Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Logistics',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified',
        ],
        category: 'general' as LogisticsAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Exceeds export excellence standards',
        ],
        category: 'general' as LogisticsAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and logistics?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Full zero-waste, carbon-tracked commitment',
        ],
        category: 'general' as LogisticsAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Personalised with active feedback loop',
        ],
        category: 'general' as LogisticsAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Fully certified safe workplaces and fair trade',
        ],
        category: 'general' as LogisticsAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'warehouse_retention',
        question: 'Did you complete 12 months retention in Warehousing (T3/L12)?',
        type: 'single' as LogisticsQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'warehouse_kpi',
        question: 'Did you maintain KPI 8.5 or above in Warehousing?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'global_freight_contracts',
        question:
          'Do you have active contracts with global freight forwarders for air or ocean freight?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'customs_compliance',
        question:
          'Do you comply with customs and trade documentation standards for the US, EU, and India?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as LogisticsAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_shipping_methods',
        question: 'Can you ship via air freight, ocean LCL, or ocean FCL?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_export_compliance',
        question:
          'Do you maintain export compliance documentation — FDA, US Customs, or equivalent?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_digital_freight',
        question: 'Do you use digital freight platforms for shipment tracking and management?',
        type: 'yesno' as LogisticsQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these logistics readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as LogisticsQuestionType,
        options: [
          'Customs clearance readiness — documentation and broker relationships established',
          'Reverse logistics capacity — returns, exchanges, and resale flows managed',
          'Freight cost optimisation systems — rate negotiation and carrier selection capability',
        ],
        category: 'vendor' as LogisticsAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your logistics buying operation?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'International importer — sourcing Kashmir craft for national distribution',
          'Retail chain — managing multi-location Kashmir craft import and distribution',
          'Wholesaler — consolidating Kashmir craft imports for regional distribution networks',
        ],
        category: 'buyer' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_freight_preference',
        question: 'What freight mode best fits your Kashmir craft procurement requirements?',
        type: 'single' as LogisticsQuestionType,
        options: [
          'Air freight — priority delivery for urgent or high-value procurement',
          'Ocean freight — bulk volume consolidated shipping for cost efficiency',
          'No fixed preference — varies by order size, urgency, and category',
        ],
        category: 'buyer' as LogisticsAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these buyer logistics readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as LogisticsQuestionType,
        options: [
          'Import licence readiness — active import licences for target markets',
          'Warehousing on arrival confirmed — receiving facilities and docking arrangements in place',
          'Trade finance and payment compliance — LC, escrow, or equivalent payment capability',
        ],
        category: 'buyer' as LogisticsAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys.
    // Compound threshold labels preserved exactly as-is (see FLAG 4).
    thresholds: {
      10: {
        eligibility: 'Logistics (TIER 4 / L13)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Logistics + Fast Track to Museum/NGO/Government/Technology',
        fastTrackEligible: true,
        nextLevel: 'Museum/NGO/Government/Technology',
      },
      21: {
        eligibility: 'Museum/NGO/Government/Technology (TIER 4 / L14–16)',
        fastTrackEligible: true,
        nextLevel: 'Museum/NGO/Government/Technology',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Logistics',
        kpiThreshold: 9.0,
        retentionPeriod: '12 months at Warehousing',
        minCommitment: '6 months at Logistics',
      },
      buyer: {
        commitment: 'Logistics',
        kpiThreshold: 9.0,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Logistics (TIER 4 / L13)':
          "You're eligible for Logistics. Build your institutional freight capability and advance toward other Institutional tracks from here.",
        'Logistics + Fast Track to Museum/NGO/Government/Technology':
          "Great fundamentals. You're eligible for Logistics with a fast track to institutional partnership tracks.",
        'Museum/NGO/Government/Technology (TIER 4 / L14–16)':
          'Exceptional. Your logistics record makes you eligible for institutional partnership tracks via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Logistics (TIER 4 / L13)': [
          'Join the Logistics programme.',
          'Secure freight forwarder contracts for air and ocean freight.',
          'Complete KHCRF logistics compliance review.',
          'Improve digital freight tracking and customs documentation systems.',
        ],
        'Logistics + Fast Track to Museum/NGO/Government/Technology': [
          'Prepare fast-track documentation for institutional progression.',
          'Strengthen freight, customs, and cross-border compliance systems.',
          'Complete advanced KHCRF logistics and institutional-readiness review.',
          'Align trade documentation and partner-facing operating procedures.',
        ],
        'Museum/NGO/Government/Technology (TIER 4 / L14–16)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit logistics compliance, freight, and partnership documentation.',
          'Complete KHCRF institutional progression review.',
          'Prepare for direct transition into the selected institutional track onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Logistics (TIER 4 / L13)': [
          'Commitment to institutional-grade logistics operations',
          'Strong Collaborative tier foundation from Warehousing',
        ],
        'Logistics + Fast Track to Museum/NGO/Government/Technology': [
          'Global freight and customs compliance capability',
          'Digital freight tracking and reverse logistics readiness',
          'Clear institutional partnership progression trajectory',
        ],
        'Museum/NGO/Government/Technology (TIER 4 / L14–16)': [
          'Full institutional logistics infrastructure established',
          'Strong KHCRF compliance and global trade documentation record',
          'Institutional-grade freight and customs capability demonstrated',
        ],
      },
      improvementsByOutcome: {
        'Logistics (TIER 4 / L13)': [
          'Strengthen customs compliance documentation and broker relationships.',
          'Enhance freight cost optimisation systems and carrier selection.',
          'Build reverse logistics capacity for returns and resale flows.',
        ],
        'Logistics + Fast Track to Museum/NGO/Government/Technology': [
          'Advance sector-specific operational and reporting systems for institutional tracks.',
          'Align trade documentation with institutional partner operating procedures.',
        ],
        'Museum/NGO/Government/Technology (TIER 4 / L14–16)': [],
      },
      defaultStrengths: [
        'Commitment to institutional logistics operations',
        'Strong Collaborative tier foundation from Warehousing',
      ],
      defaultDevelopmentAreas: [
        'Strengthen customs compliance and freight documentation.',
        'Enhance freight cost optimisation and digital tracking systems.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.

export const logisticsCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Institutional Logistics Infrastructure for Kashmir Craft',
  subheadline: 'Freight, customs, and delivery systems built for reliable international trade.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Vendors and buyers connected with certified logistics providers',
        'Structured contracts covering freight, customs, and insurance',
        'Real-time shipment tracking across global trade lanes',
      ],
    },
    {
      title: 'Freight & Fulfilment',
      icon: 'Truck',
      items: [
        'Consolidated cargo planning through global freight networks',
        'Streamlined dispatch and last-mile coordination',
        'Centralised reverse logistics for returns and exchanges',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Lane performance insights on cost, delays, and reliability',
        'Predictive planning for shipment timing and demand cycles',
        'ROI tracking across freight, insurance, and trade lanes',
      ],
    },
    {
      title: 'Institutional Readiness',
      icon: 'Package',
      items: [
        'Customs-compliant movement for global institutional buyers',
        'Insured, traceable shipments with stronger supply confidence',
        'Infrastructure supporting museum, NGO, and government channels',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Timely deliveries through managed institutional logistics',
        'Transparent customs processing and compliance visibility',
        'Lower shipping costs through consolidated freight',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Simplified exports through certified freight services',
        'Reduced risk through insurance and compliance support',
        'Stronger reputation as an export-ready supplier',
      ],
    },
  },

  impact: [
    {
      title: 'Logistics Backbone',
      description: 'Building durable global movement infrastructure for Kashmir craft',
    },
    {
      title: 'Export Competitiveness',
      description: 'Improving reliability, compliance, and premium trade readiness',
    },
    {
      title: 'Barrier Removal',
      description: 'Reducing customs, insurance, and freight bottlenecks sector-wide',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const logisticsPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Logistics partnership enables streamlined global exports and imports for Kashmir craft — with customs compliance, efficient freight forwarding, and reliable international supply flows that institutional trade demands.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Timely Deliveries With Streamlined Logistics Management',
//           description:
//             'Access Kashmir craft through a managed, institutional-grade import logistics framework — with consolidated shipments, automated customs clearance, and delivery SLA management that retail and institutional procurement requires.',
//         },
//         {
//           title: 'Transparent Customs and Compliance Processes',
//           description:
//             'Benefit from fully documented, compliant customs processing on every Kashmir craft import — with real-time status visibility that eliminates the uncertainty of informal trade channel compliance.',
//         },
//         {
//           title: 'Reduced Shipping Costs Through Consolidated Freight',
//           description:
//             'Access significantly lower per-unit shipping costs through consolidated freight solutions — grouping multiple Kashmir craft sourcing relationships into institutional-volume shipments with competitive carrier rates.',
//         },
//         {
//           title: 'Reliable International Supply Flow Stability',
//           description:
//             'Gain the supply chain reliability that institutional procurement frameworks demand — with predictable delivery timelines, insurance coverage, and reverse logistics that make Kashmir craft a dependable product category.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Simplified Exports With Professional Freight Services',
//           description:
//             'Access certified freight forwarding, automated export documentation, and customs clearance support — removing the compliance complexity that prevents most Kashmir craft vendors from reaching institutional buyers directly.',
//         },
//         {
//           title: 'Reduced Risk Through Compliance and Insurance',
//           description:
//             'Comprehensive customs clearance support and all-risk cargo insurance eliminates the two largest commercial risks in Kashmir craft export — compliance failure and uninsured transit loss.',
//         },
//         {
//           title: 'Global Market Access Through Efficient Shipping',
//           description:
//             'Reach institutional buyers across North America, Europe, the Gulf, and East Asia through certified global freight channels — without building independent export logistics infrastructure.',
//         },
//         {
//           title: 'Institutional Reputation as an Export-Ready Supplier',
//           description:
//             'Demonstrated logistics compliance and professional freight management strengthens vendor reputation as an institutional-grade export supplier — the standard that Museum, NGO, and Government buyers require.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Building a Global Logistics Backbone for Kashmir Craft',
//         description:
//           'Structured institutional logistics partnerships create a durable, scalable logistics infrastructure for Kashmir craft trade — reducing the fragility of current informal supply chains and enabling consistent global market access.',
//       },
//       {
//         title: 'Strengthening Export Competitiveness',
//         description:
//           'Professional logistics infrastructure raises the export competitiveness of Kashmir craft against comparable artisan product categories globally — enabling premium positioning and consistent supply reliability.',
//       },
//       {
//         title: 'Reducing Bottlenecks That Limit Artisan Market Access',
//         description:
//           'Compliance, insurance, and customs bottlenecks are the primary barriers preventing Kashmiri artisans from reaching institutional markets. This partnership systematically removes each one.',
//       },
//       {
//         title: 'Positioning Kashmir for Sustainable International Growth',
//         description:
//           'Transparent, documented, and compliant logistics practices build the institutional trade credibility that sustains long-term international growth for Kashmir craft as a globally recognised export category.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// No onboarding fee — select a package to start (per raw file).
// Yearly billing. NOTE: Premium package is $6,000/year — see CLIENT FLAG 3.
// This is intentional for institutional-grade logistics concierge services.

export const logisticsPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built for Institutional Logistics Scale.',
  description:
    'Three package tiers covering logistics access, compliance depth, and insurance coverage. The Premium tier is priced for institutional-grade logistics concierge services and reflects the complexity of high-value Kashmir craft international trade.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Logistics partnership.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'Logistics partnerships have no separate onboarding fee. Select a yearly package to begin institutional logistics activation.',
    note: 'Select the package that matches your freight volume, insurance requirements, and compliance complexity.',
    badge: 'Yearly Membership — No Upfront Onboarding Cost',
  },
  packages: [
    {
      name: 'Standard',
      price: '$120',
      billingPeriod: 'year',
      features: [
        'Access to shared institutional logistics network',
        'Basic warehousing support and coordination',
        'Carbon footprint report per shipment',
        'Standard digital freight tracking',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Priority warehousing allocation and fulfilment',
        'Reverse logistics support for returns and resale',
        'Dedicated customs compliance documentation support',
        'Cargo insurance up to $25,000 shipment value',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$6,000',
      billingPeriod: 'year',
      features: [
        'Exclusive warehouse sections and dedicated storage',
        'Institutional-level customs concierge service',
        'Cargo insurance up to $100,000 shipment value',
        'Dedicated logistics relationship manager',
      ],
      recommended: false,
    },
  ],
  range: '$120–$6,000/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// Container is valid in current Lucide. FileSearch valid. ShieldAlert valid.
// All others valid. Prime Logic removed from support line.

export const logisticsTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Institutional Logistics Technology Platform',
  description:
    'Enables large-scale freight management, automated customs processing, and multi-modal transport operations with full compliance integration and real-time visibility across all trade lanes.',
  features: [
    {
      icon: 'Truck',
      title: 'Multi-Modal Freight Corridors',
      description:
        'Integrate rail, road, air, and ocean freight routing through a unified visibility platform — with real-time status across all active trade lanes and freight modes.',
    },
    {
      icon: 'FileSearch',
      title: 'Automated Customs Gateways',
      description:
        'Automated customs clearance processing, bonded warehouse integration, denied-party screening, and full trade compliance documentation generation.',
    },
    {
      icon: 'Container',
      title: 'Port and Container Systems',
      description:
        'Container tracking, vessel scheduling management, yard management integration, and port congestion monitoring for ocean freight operations.',
    },
    {
      icon: 'Map',
      title: 'Multi-Modal Transport Hub Coordination',
      description:
        'Coordinate rail, ocean, air, and road trucking logistics through a unified hub coordination system — ensuring seamless intermodal handoffs and delivery optimisation.',
    },
    {
      icon: 'Monitor',
      title: 'Real-Time Monitoring Dashboards',
      description:
        'Live visibility over freight lane performance, warehouse status, port operations, trade zone activities, and carrier SLA compliance in one unified dashboard.',
    },
    {
      icon: 'ShoppingCart',
      title: 'Institutional Procurement Portals',
      description:
        'Centralised procurement management for NGO, government, and institutional supply chain purchasing — with vendor scorecards, order management, and compliance tracking.',
    },
    {
      icon: 'ShieldAlert',
      title: 'Cargo Security Systems',
      description:
        'Cargo scanning integration, tamper-evident seal tracking, real-time risk notification systems, and all-risk incident reporting across all active freight movements.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Compliance and ESG Engines',
      description:
        'Automated carbon footprint reporting, ESG audit support, global trade alignment verification, and sustainability compliance documentation for institutional partners.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated institutional logistics compliance integration.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers and vendors managing institutional freight.
// 15 features preserved from raw file — the most comprehensive API section.
// Plug → PlugZap. Grid → LayoutGrid. Prime Logic removed throughout.
// AlertTriangle is valid Lucide — kept.

export const logisticsApiIntegration = {
  sectionLabel: 'Logistics Integration',
  headline: 'Already Shipping Globally? Accelerate With DKC.',
  description:
    'Accelerate global Kashmir craft logistics with unified freight management, customs automation, last-mile orchestration, and returns handling — all integrated into a single institutional logistics platform.',
  features: [
    {
      icon: 'UserCheck',
      title: 'Onboarding and Service-Level Agreements',
      description:
        'Digital carrier contracts, NDAs, service tier configurations, transit KPI definitions, and penalty clause management standardised for all logistics partnerships.',
    },
    {
      icon: 'PlugZap',
      title: 'Logistics System Connectors',
      description:
        'Prebuilt integrations for Project44, FourKites, Shippo, EasyPost, UPS, FedEx, DHL, and major freight forwarder platforms — deployed without custom development.',
    },
    {
      icon: 'DollarSign',
      title: 'Rate and Contract Management',
      description:
        'Spot rate and contract rate management, dimensional weight rules, fuel surcharge tracking, accessorial management, and automated carrier rate selection.',
    },
    {
      icon: 'Package',
      title: 'Shipping Document Generation',
      description:
        'Automated carrier label production, packing slip generation, commercial invoice creation, electronic air waybill and bill of lading, and certificate of origin management.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Trade Compliance Automation',
      description:
        'HTS and HS code classification, denied-party screening, embargo checks, dual-use export control verification, and AES/ACE filing integration.',
    },
    {
      icon: 'Globe',
      title: 'Duty and Tax Calculation',
      description:
        'Import duty calculation, VAT and GST management, de minimis threshold checking, and instant landed-cost quote generation across all target markets.',
    },
    {
      icon: 'LayoutGrid',
      title: 'Shipment Planning and Optimisation',
      description:
        'Multi-stop consolidation routing, cross-dock coordination, zone-skip optimisation, palletisation planning, and load building for all freight modes.',
    },
    {
      icon: 'TrendingUp',
      title: 'Carrier Routing Optimisation',
      description:
        'Mode and route selection optimisation across air, ocean, and ground freight — with SLA target matching, cost modelling, and carrier performance scoring.',
    },
    {
      icon: 'Eye',
      title: 'Real-Time Event Tracking',
      description:
        'Milestone event capture, EDI and API event processing, geofence triggers, AI-powered ETA predictions, and automated customer delivery notifications.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Claims and Exceptions Management',
      description:
        'Delay, damage, and shortage workflows with root-cause analysis, credit issuance, carrier recovery processes, and structured claims documentation.',
    },
    {
      icon: 'ArrowLeft',
      title: 'Returns and Reverse Flow Management',
      description:
        'RMA creation, return label generation, pickup and drop-off coordination, product grading, refurbishment routing, and final disposition management.',
    },
    {
      icon: 'Truck',
      title: 'Last-Mile Delivery Orchestration',
      description:
        'BOPIS and BORIS workflows, locker delivery, courier dispatch, crowdsourced delivery management, and signature and ID verification at delivery.',
    },
    {
      icon: 'Box',
      title: 'Packaging and Dangerous Goods',
      description:
        'Hazardous goods validation, dangerous goods documentation, ISTA test compliance, carton right-sizing optimisation, and void-fill specification management.',
    },
    {
      icon: 'Shield',
      title: 'Risk and Insurance Coverage',
      description:
        'All-risk cargo coverage configuration, insurance premium modelling, digital evidence capture for claims, and structured digital settlement processing.',
    },
    {
      icon: 'BarChart2',
      title: 'Logistics Cost and Performance Analytics',
      description:
        'Freight spend analytics, OTIF performance tracking, damage rate monitoring, cost-to-serve modelling, and trade lane performance optimisation dashboards.',
    },
  ],
  support: {
    description:
      'Institutional logistics integration support covering EDI 204/214/210 transport management sets, 850/855/856/940/945 procurement and warehouse transactions, ACE and AES filing integration, eAWB and eB/L electronic document management, and carrier and freight forwarder API connections.',
    note: 'Sandbox environments, SDKs, and SLAs available for all active Logistics partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const logisticsWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Institutional Logistics — Five Steps',
  description:
    'A structured, compliance-governed activation process for institutional Kashmir craft logistics.',
  steps: [
    {
      step: 1,
      label: 'Apply for Partnership',
      description:
        'Submit your Logistics application with identity, business details, and Warehousing completion credentials.',
    },
    {
      step: 2,
      label: 'KPI and Retention Validation',
      description:
        'Platform validates KPI from Warehousing (9.0+ required), freight forwarder contract status, and customs compliance readiness.',
    },
    {
      step: 3,
      label: 'Export and Import Compliance Check',
      description:
        'Customs documentation standards, trade compliance requirements, and freight partner certifications verified and confirmed.',
    },
    {
      step: 4,
      label: 'Warehousing and Insurance Activation',
      description:
        'Warehousing allocation confirmed, cargo insurance configured, freight partners integrated, and digital tracking activated.',
    },
    {
      step: 5,
      label: 'Full Logistics Pathway Live',
      description:
        'Institutional logistics operations active. Freight, customs, tracking, and insurance operational. Progression toward Museum, NGO, Government, or Technology tracks begins.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'museum',
    name: 'Museum',
    kpiRequired: '9.0+',
    retentionRequired: '6 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const logisticsFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Logistics',
  items: [
    {
      question: 'Is logistics support available to all partners?',
      answer:
        'Only partners who have completed 12 months at Warehousing with KPI 9.0+ are eligible for the standard Logistics path. KHCRF lateral evaluation can bypass this for qualified institutional partners with existing certified freight infrastructure.',
    },
    {
      question: 'Is reverse logistics available on the Standard package?',
      answer:
        'Reverse logistics support starts from the Growth package and above. Standard package covers shared logistics network access, basic warehousing coordination, and carbon footprint reporting only.',
    },
    {
      question: 'How is cargo insurance handled?',
      answer:
        'Insurance coverage is volume-linked to package tier — $25,000 shipment value coverage on Growth and $100,000 on Premium. Additional coverage for higher-value consignments can be arranged through the dedicated logistics manager at Premium tier.',
    },
    {
      question: 'Do you provide customs clearance support?',
      answer:
        'Yes. Growth package includes dedicated customs compliance documentation support. Premium members receive institutional-level customs concierge services with direct access to customs specialists for complex cross-border trade.',
    },
    {
      question: 'What is the minimum commitment at Logistics?',
      answer:
        'A minimum 6-month commitment at Logistics is required before progression into other Institutional partnership tracks such as Museum, NGO & Government, or Technology Partnership.',
    },
    {
      question: 'What does Logistics unlock after completion?',
      answer:
        'Completing 6 months at Logistics with strong performance unlocks Museum, NGO & Government, and Technology Partnership tracks — the remaining Institutional tiers — based on your sector focus and institutional partner relationships.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const logisticsFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Institutional-Grade Kashmir Craft Logistics. Compliant. Insured. Globally Ready.',
    description:
      'Certified freight forwarding, automated customs compliance, AI-optimised routing, and cargo insurance — a Logistics partnership that removes every structural barrier between Kashmir craft and the global institutional markets ready to receive it.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Import Kashmir Craft With the Reliability Institutional Trade Demands?',
      supportingPoints: [
        'Consolidated freight, automated customs, and real-time tracking — institutional-grade supply chain.',
        'Cargo insurance up to $100,000 per shipment at Premium tier — full protection on every import.',
        'Transparent compliance processes eliminate the uncertainty of informal import channels entirely.',
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
      headline:
        'Ready to Export Kashmir Craft Through Professional Institutional Freight Infrastructure?',
      supportingPoints: [
        'Certified freight forwarding, customs compliance, and cargo insurance — from Kashmir to global institutional buyers.',
        "KPI 9.0+ required — this is the platform's highest-level export trade infrastructure partnership.",
        'Logistics completion unlocks Museum, NGO & Government, and Technology institutional partnerships.',
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

export const LOGISTICS = {
  meta: logisticsMeta,
  heroSection: logisticsHero,
  overviewSection: logisticsOverview,
  modelDifferenceSection: logisticsModelDifference,
  eligibilityRulesSection: logisticsEligibilityRules,
  eligibilityAssessmentSection: logisticsEligibilityAssessment,
  capabilitiesSection: logisticsCapabilities,
  // platformAdvantageSection: logisticsPlatformAdvantage,
  pricingSection: logisticsPricing,
  technologySection: logisticsTechnology,
  apiIntegrationSection: logisticsApiIntegration,
  workflowSection: logisticsWorkflow,
  faqSection: logisticsFaq,
  finalCtaSection: logisticsFinalCta,
} as const;

export type LogisticsContent = typeof LOGISTICS;
