export type ImportExportAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type ImportExportQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const importExportMeta = {
  slug: 'import-export',
  system: 'core-trade',
  tier: 1,
  label: 'Import & Export',
  pageTitle: 'Certified Import & Export Partnerships',
  seoDescription:
    'A globally compliant trade pathway connecting certified Kashmir craft vendors and compliance-driven buyers through GI-certified, fair-trade, and blockchain-tracked international partnerships.',
  kpiRequired: '7.0+',
  retentionRequired: '4 months',
  previousSlug: 'wholesale',
  nextSlug: 'exhibition',
  nextSystem: 'brand-growth',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['certified-export', 'gi-certified', 'compliance', 'cross-border', 'institutional'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: Import/Export is the final Core Trade tier.
// Buyer and vendor propositions diverge significantly at this level.
// Screenshot 1 buyer-oriented copy upgraded and role-split added.

export const importExportHero = {
  sectionLabel: 'Import & Export Partnership',
  shared: {
    badge: 'Core Trade — Tier 1 Final',
    statusChip: 'KPI 7.0+ Required — GI Certification Required — Fast-Track Available',
  },
  roles: {
    buyer: {
      headline: 'Import Authentic Kashmir Craft. GI-Certified. Fully Compliant. Globally Ready.',
      description:
        'GI-certified Kashmir craft import — blockchain-traced provenance, customs compliance support, and the structured trade infrastructure global distributors and institutional buyers require.',
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
      headline: 'Export Your Kashmir Craft to the World. Certified. Compliant. Commercially Ready.',
      description:
        'Enter verified international markets through a structured export pathway — with GI certification, fair-trade compliance, customs documentation support, and a global buyer network that recognises and rewards authenticated Kashmir craft.',
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

export const importExportOverview = {
  sectionLabel: 'Why Import & Export',
  headline: 'Fixing Compliance in Global Craft Trade',
  description:
    'Global craft trade is limited by compliance gaps, counterfeits, and complex documentation. This pathway enables verified supply chains, protected artisan work, and structured international trade.',
  problems: [
    'No standardized export compliance for Kashmir craft in global markets',
    'Counterfeit products circulate without reliable authentication',
    'Buyers lack access to verified and traceable supply chains',
    'Complex documentation prevents genuine vendors from exporting',
  ],
  solutions: [
    'Verified vendors with certified and authenticated products',
    'Traceable supply chains from artisan to buyer',
    'Automated compliance and documentation processes',
    'Secure agreements governing cross-border trade relationships',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Importer/Exporter terminology from raw file fully replaced with buyer/vendor.

export const importExportModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline:
    'The Only Platform Where Heritage, Compliance, and Technology Converge for International Trade.',
  exclusivityNote:
    'Every Import & Export relationship on DKC is GI-certified, blockchain-traced, WTO-aligned, and governed by structured international trade contracts.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Trade Hub',
      description:
        'Certified marketplace connecting verified Kashmiri craft vendors with compliance-ready global buyers.',
    },
    {
      icon: 'FileText',
      title: 'Automated Customs Documentation',
      description:
        'AI-generated invoices, certificates of origin, HS codes, and export declarations — every shipment.',
    },
    {
      icon: 'Shield',
      title: 'WTO and International Compliance',
      description:
        'WTO, US, and EU-aligned trade — automated embargo checks, duty calculations, and compliance validation.',
    },
    {
      icon: 'Layers',
      title: 'Blockchain Provenance Registry',
      description:
        'Blockchain-verified provenance from artisan registration through GI certification to final delivery.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'Package',
          title: 'GI-Certified Import Pipeline',
          description:
            'GI-certified import pipeline with blockchain provenance and customs compliance built in.',
        },
        {
          icon: 'CheckCircle',
          title: 'Blockchain-Backed Authenticity',
          description:
            'Immutable provenance record verifiable by procurement teams, customers, and compliance officers.',
        },
        {
          icon: 'Truck',
          title: 'Predictive Logistics and Delivery',
          description:
            'AI-optimised logistics reduce shipping costs and provide real-time container tracking.',
        },
        {
          icon: 'TrendingUp',
          title: 'Multi-Country Sourcing Expansion',
          description:
            'Expand into multiple markets with a verified vendor base — no compliance rebuild required.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Verified International Buyer Access',
          description:
            'Enter international markets and reach institutional buyers and global retail brands directly.',
        },
        {
          icon: 'Lock',
          title: 'Insurance and Compliance Protection',
          description:
            'Cargo insurance and compliance systems protect inventory and payment throughout international transit.',
        },
        {
          icon: 'DollarSign',
          title: 'Export Financing and Guaranteed Settlement',
          description:
            'Export financing and payment guarantees on confirmed international deliveries — no chasing buyers.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Gateway to Brand Expansion',
          description:
            'Strong performance here directly prepares vendors for Exhibition and Brand Expansion.',
        },
      ],
    },
  },
} as const;

// ─── Key Features Section (NEW) ───────────────────────────────────────────────
// Source: Screenshot 2 — eight tabbed feature categories.
// Shared: platform features are not role-specific.
// Renderer: tabbed grid. Default active tab = 'procurement'.

// export const importExportKeyFeatures = {
//   sectionLabel: 'Platform Features',
//   headline: 'Global Trade Infrastructure. Built Exclusively for Kashmir Craft.',
//   subheadline:
//     'Business model tailored to empower global buyers and vendors for seamless sourcing and export of authenticated Kashmiri handicrafts.',
//   defaultTab: 'procurement',
//   categories: [
//     {
//       id: 'procurement',
//       label: 'Smart Procurement Architecture',
//       items: [
//         'AI-powered sourcing recommendations for international buyers.',
//         'Streamlined bulk purchasing system for institutional procurement.',
//         'Advanced order management designed for international buyers at scale.',
//         'Real-time inventory insights enabling seamless international restocking.',
//         'Vendor performance tracking for consistent quality across all shipments.',
//         'Buyer-specific dashboards with full analytics and order history visibility.',
//       ],
//     },
//     {
//       id: 'api-integrations',
//       label: 'Seamless API Integrations',
//       items: [
//         'Trade APIs for automated bulk order processing at international scale.',
//         'Secure Payment Gateways with full multi-currency settlement support.',
//         'Customs Compliance APIs for smooth and automated import documentation.',
//         'Logistics APIs for real-time shipping and container tracking updates.',
//         'E-commerce Integration APIs for retailers and wholesalers worldwide.',
//         'Multi-language APIs for global buyer support across all major markets.',
//       ],
//     },
//     {
//       id: 'product-verification',
//       label: 'Product Verification & Authenticity',
//       items: [
//         'GI Certification and Blockchain Tracking for full provenance verification.',
//         'Anti-Counterfeit Protection with digital authenticity seals per product.',
//         'Quality Control Metrics ensuring consistent craftsmanship standards globally.',
//         'Sustainable and Ethical Sourcing Labels aligned with international fair trade.',
//         'Direct-to-Artisan Transparency enabling heritage preservation documentation.',
//       ],
//     },
//     {
//       id: 'marketing',
//       label: 'Trade-Optimised Marketing Features',
//       items: [
//         'AI-Powered Demand Forecasting for buyers across international markets.',
//         'Personalised Sourcing Recommendations based on live market trends.',
//         'Influencer and Luxury Market Collaborations for premium positioning.',
//         'Customisable Digital Catalogs for business buyers and distributors.',
//         'Exclusive Previews of Limited-Edition Collections for priority buyers.',
//       ],
//     },
//     {
//       id: 'logistics',
//       label: 'Efficient Global Logistics & Supply Chain',
//       items: [
//         'Priority International Shipping with real-time container tracking.',
//         'Freight Forwarding Partnerships for consolidated bulk import shipments.',
//         'Customs Clearance Assistance for hassle-free cross-border imports.',
//         'Reverse Logistics and Returns Support for international trade operations.',
//         'Optimised Packaging meeting US and international import standards.',
//       ],
//     },
//     {
//       id: 'trade-support',
//       label: 'Trade Support',
//       items: [
//         'Regulatory compliance guidance for smooth international market entry.',
//         'Trade agreement advisory services for better pricing and terms.',
//         'Cross-border tax compliance for hassle-free international transactions.',
//         'Legal support for international trade contracts and dispute resolution.',
//         'Partnership matchmaking for strategic global market expansion.',
//       ],
//     },
//     {
//       id: 'financing',
//       label: 'Buyer Financing & Payment Solutions',
//       items: [
//         'Flexible Payment Plans including BNPL (Buy Now, Pay Later) for buyers.',
//         'Pre-Approved Credit Lines for high-volume international buyers.',
//         'Deferred Payment Options for large wholesale and distribution orders.',
//         'Secure Cross-Border Transactions with multi-layer fraud protection.',
//         'Export-Linked Financing for retail and distribution partnerships.',
//       ],
//     },
//     {
//       id: 'buyer-experience',
//       label: 'Next-Level Buyer Experience',
//       items: [
//         'Immersive Shopping Tools — interactive digital catalogs and 3D product previews.',
//         'Virtual Try-Ons and AR Configurators for enhanced product visualisation.',
//         'AI-Powered Product Matching for personalised sourcing recommendations.',
//         'Live Buyer Support and Trade Assistance with real-time AI chat.',
//         'Craftsmanship Video Showcases for deeper cultural and heritage engagement.',
//       ],
//     },
//   ],
// } as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values taken from cluster file (coreTrade_content.ts). See CLIENT FLAG 1.

export const importExportEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Import & Export Requires Certification and Proven Trade Performance',
  description:
    'Import & Export is the final tier of Core Trade and the highest-compliance partnership in the system. Partners entering this tier have demonstrated consistent wholesale performance and are ready for structured international trade with GI certification and full compliance documentation.',
  requirements: [
    {
      label: 'KPI Required',
      value: '7.0+',
      note: 'Minimum performance score from prior Wholesale trade.',
    },
    {
      label: 'Retention Period',
      value: '4 months',
      note: 'Minimum time at Import & Export before progressing to Brand Expansion.',
    },
    {
      label: 'Previous Level',
      value: 'Wholesale',
      note: 'Standard path requires Wholesale completion.',
    },
    {
      label: 'Certification',
      value: 'GI or Fair-Trade Required',
      note: 'Mandatory for all vendors entering the Import & Export pathway.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Import & Export with strong performance, partners unlock Exhibition — the first Brand Expansion tier — and move beyond Core Trade into premium market visibility and brand-building partnerships.',
  nextSlug: 'exhibition',
  nextSystem: 'brand-growth',
  nextLabel: 'Exhibition',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() importexport block.

export const importExportEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Import & Export, your readiness level, and whether you qualify for faster progression into Brand Expansion tracks.',
  introCard: {
    icon: 'Target',
    title: 'Import & Export Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your international trade readiness and what progression is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Import & Export Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Import Export',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as ImportExportAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and international standards',
          'Exceeds international export standards',
        ],
        category: 'general' as ImportExportAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and trade?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as ImportExportAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as ImportExportAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your international operations?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully certified safe workplaces',
        ],
        category: 'general' as ImportExportAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'wholesale_retention',
        question: 'Did you complete 4 months retention in Wholesale?',
        type: 'single' as ImportExportQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'wholesale_kpi',
        question: 'Did you maintain KPI 6.5 or above in Wholesale?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'khcrf_packaging_audit',
        question: 'Did you pass the KHCRF bulk packaging and invoicing audit?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'export_documentation',
        question:
          'Do you have export documentation capability — HS codes, certificates of origin, customs forms?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ImportExportAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_export_licenses',
        question: 'Do you hold export licences and customs compliance documentation?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_logistics',
        question: 'Can you manage international logistics partners for air and ocean freight?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications',
        question: 'Which international certifications do you currently hold?',
        type: 'single' as ImportExportQuestionType,
        options: ['GI tag only', 'KHCRF approval only', 'Both GI tag and KHCRF approval'],
        category: 'vendor' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these international trade readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ImportExportQuestionType,
        options: [
          'International labelling standards — compliant with target market requirements',
          'Customs clearance capability — in-house or via freight forwarder',
          'Currency and forex transaction readiness — multi-currency settlement capability',
        ],
        category: 'vendor' as ImportExportAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your international buying operation?',
        type: 'single' as ImportExportQuestionType,
        options: [
          'International wholesaler or distributor',
          'Institutional buyer — NGO, government, or museum',
        ],
        category: 'buyer' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity',
        question: 'What is your approximate annual sourcing capacity for international imports?',
        type: 'single' as ImportExportQuestionType,
        options: ['$25,000–$250,000', 'Over $250,000'],
        category: 'buyer' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_compliance_reports',
        question: 'Do you require country-specific compliance reports for your procurement?',
        type: 'yesno' as ImportExportQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as ImportExportAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these international import readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ImportExportQuestionType,
        options: [
          'Import licence verification — licences current and in good standing',
          'Payment security — Letter of Credit or Escrow payment capability',
          'International warehousing network — storage in target import markets',
        ],
        category: 'buyer' as ImportExportAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Import & Export (TIER 1 / L4)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Import & Export + Fast Track to Exhibition',
        fastTrackEligible: true,
        nextLevel: 'Exhibition',
      },
      21: {
        eligibility: 'Exhibition (TIER 2 / L5)',
        fastTrackEligible: true,
        nextLevel: 'Exhibition',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 7.0,
      },
      buyer: {
        commitment: null,
        kpiThreshold: 7.0,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Import & Export (TIER 1 / L4)':
          "You're eligible for Import & Export. Build your global trade capabilities and progress from here.",
        'Import & Export + Fast Track to Exhibition':
          "Great fundamentals. You're eligible for Import & Export with a fast track to Exhibition.",
        'Exhibition (TIER 2 / L5)':
          'Exceptional. Your global trade record makes you eligible for Exhibition via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Import & Export (TIER 1 / L4)': [
          'Join the Import & Export programme.',
          'Submit export documentation for review.',
          'Complete KHCRF customs compliance review.',
          'Build international warehousing and logistics capability.',
        ],
        'Import & Export + Fast Track to Exhibition': [
          'Join the Import & Export programme.',
          'Enrol in the Readiness Programme (RP).',
          'Strengthen international logistics and customs compliance systems.',
          'Prepare cross-border documentation and Exhibition readiness.',
        ],
        'Exhibition (TIER 2 / L5)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit export licences, GI certification, and brand credentials.',
          'Complete KHCRF customs and brand progression review.',
          'Prepare for direct transition into Exhibition onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Import & Export (TIER 1 / L4)': [
          'Export trade commitment',
          'International logistics foundation',
        ],
        'Import & Export + Fast Track to Exhibition': [
          'Strong export capabilities',
          'Global market potential',
          'Clear Brand Expansion trajectory',
        ],
        'Exhibition (TIER 2 / L5)': [
          'Global market readiness',
          'Strong compliance and certification record',
          'Demonstrated international trade performance',
        ],
      },
      improvementsByOutcome: {
        'Import & Export (TIER 1 / L4)': [
          'Enhance international logistics partnerships.',
          'Strengthen customs and forex transaction capability.',
          'Build international warehousing infrastructure.',
        ],
        'Import & Export + Fast Track to Exhibition': [
          'Advance customs, labelling, and forex readiness for Exhibition.',
        ],
        'Exhibition (TIER 2 / L5)': [],
      },
      defaultStrengths: [
        'Export trade commitment',
        'Global market potential',
        'International compliance awareness',
      ],
      defaultDevelopmentAreas: [
        'Strengthen logistics partnerships for international routes.',
        'Enhance customs documentation and forex capabilities.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// Importer/Exporter terminology from raw file replaced with buyer/vendor.

export const importExportCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Global Trade Infrastructure for Kashmir Craft',
  subheadline:
    'Seamless cross-border trade with compliance, logistics, and verified sourcing built in.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Database',
      items: [
        'Verified vendors connected to global institutional buyers',
        'Automated trade agreements and documentation processing',
        'Smart contracts governing pricing and transactions',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Freight forwarding with consolidated global shipping',
        'Automated customs clearance and compliance handling',
        'Insured shipments with reverse logistics support',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Market-level demand insights across global regions',
        'Analytics on pricing, margins, and buyer behaviour',
        'Export performance tracking for scaling decisions',
      ],
    },
    {
      title: 'Global Trade Enablement',
      icon: 'Globe',
      items: [
        'GI-certified sourcing with verified product authenticity',
        'Multi-market distribution across wholesale and retail',
        'Secure cross-border payments with guaranteed settlement',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Direct access to verified Kashmiri suppliers',
        'Lower costs through removal of intermediaries',
        'Ethical and compliant sourcing aligned with global standards',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Entry into international markets with full compliance support',
        'Streamlined logistics and cross-border operations',
        'Global brand visibility through structured trade channels',
      ],
    },
  },

  impact: [
    {
      title: 'Global Trade Access',
      description: 'Structured entry into international markets for Kashmir craft',
    },
    {
      title: 'Economic Growth',
      description: 'Increased income and job creation through global demand',
    },
    {
      title: 'Heritage Preservation',
      description: 'Sustaining traditional crafts through international exposure',
    },
  ],
} as const;

// ─── Comparison Section (NEW) ─────────────────────────────────────────────────
// Source: Screenshots 3, 4 (platform comparison) and 6, 7 (cost comparison).
// Shared: not role-specific.
// Two tabs — 'platform' and 'cost'.
// Competitors: Home Goods Inc., Newton Buying Corp., Marshalls of MA Inc., Michael Aram Inc.

export const importExportComparison = {
  sectionLabel: 'Platform Comparison',
  headline: 'See How DKC Import & Export Compares',
  subheadline:
    'A transparent look at where DKC Connect stands against alternative import/export platforms — on features and on cost.',
  defaultTab: 'platform',
  tabs: [
    {
      id: 'platform',
      label: 'Feature Comparison',
      description:
        'Compare international trade capabilities, certification focus, and compliance standards.',
      parameters: [
        'Global Market Entry Strategy',
        'Customs Documentation Automation',
        'Predictive Logistics & Supply Chain',
        'Blockchain-Based Traceability',
        'International Shipping Expertise',
        'Localisation for Target Markets',
        'GI-Certified Product Focus',
        'Export-Ready Packaging Compliance',
        'Fair Trade Practices',
        'Eco-Friendly Practices',
        'Dynamic Trade Optimisation (DTO)',
        'B2B Networking Opportunities',
        'Trade Fair Participation Support',
        'Cultural Storytelling for Exports',
        'Pricing Transparency',
        'Sustainability Scorecards',
        'Virtual Export Hubs',
        'Artisan Empowerment Programmes',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'Tailored for Kashmiri crafts',
            'Automated Solutions',
            'Yes',
            'Yes — with GI Certification',
            'Yes',
            'Tailored for target markets',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
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
          id: 'home-goods-inc',
          name: 'Home Goods Inc.',
          highlight: false,
          values: [
            'Generic',
            'Vendor Managed',
            'No',
            'No',
            'Yes',
            'Generic',
            'No',
            'No',
            'Limited',
            'Limited',
            'No',
            'Limited',
            'Limited',
            'Limited',
            'Limited',
            'No',
            'No',
            'No',
          ],
        },
        {
          id: 'newton-buying-corp',
          name: 'Newton Buying Corp.',
          highlight: false,
          values: [
            'Limited',
            'None',
            'No',
            'No',
            'Limited',
            'Minimal',
            'No',
            'No',
            'No',
            'Limited',
            'No',
            'No',
            'No',
            'No',
            'No',
            'No',
            'No',
            'No',
          ],
        },
        {
          id: 'marshalls-of-ma',
          name: 'Marshalls of MA Inc.',
          highlight: false,
          values: [
            'Generic',
            'Vendor Managed',
            'Limited',
            'No',
            'Yes',
            'Limited',
            'No',
            'No',
            'Limited',
            'No',
            'Limited',
            'Limited',
            'Limited',
            'Limited',
            'Yes',
            'No',
            'No',
            'No',
          ],
        },
        {
          id: 'michael-aram-inc',
          name: 'Michael Aram Inc.',
          highlight: false,
          values: [
            'Brand Centric',
            'Vendor Managed',
            'Yes',
            'No',
            'Yes',
            'Luxury',
            'No',
            'Yes',
            'Limited',
            'Yes',
            'No',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Limited',
            'No',
          ],
        },
      ],
    },
    {
      id: 'cost',
      label: 'Cost Comparison',
      description:
        'Compare platform fees, transaction costs, and included services across import/export platforms.',
      parameters: [
        'Starter Plan (Monthly)',
        'Basic Plan (Monthly)',
        'Growth Plan (Monthly)',
        'Premium Plan (Monthly)',
        'Transaction Fees',
        'Commission',
        'Listing Fees',
        'Payment Processing Fees',
        'Customs Clearance Support',
        'GI Certification Support',
        'Marketing Tools Fee',
        'Advertising Costs',
        'Shipping Logistics Support',
        'Return & Claims Support',
        'Eco-Friendly Practices',
        'B2B Networking Fees',
        'Training & Support',
        'Loyalty Rewards',
        'Blockchain Traceability',
        'Custom Branding',
        'Multimedia Storytelling',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            '$25.00',
            '$119.99',
            '$199.99',
            '$549.99',
            'Flat 1.5%',
            '3%',
            'None',
            'None',
            'Free',
            'Free',
            'Free',
            'Free',
            'Platform-Assisted',
            'Platform-Assisted',
            'Standard (No extra cost)',
            'Free',
            'Free',
            'Available (Fee Discounts)',
            'Free',
            'Free',
            'Free',
          ],
        },
        {
          id: 'home-goods-inc',
          name: 'Home Goods Inc.',
          highlight: false,
          values: [
            '$139',
            '$199.99',
            '$291',
            'Custom Pricing',
            '2%–8%',
            'Varies by agreement',
            'Included in subscription plans',
            '3%–5%',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Paid',
            'Vendor Responsibility',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Limited',
            'No Service',
            'No Service',
            'Paid',
            'No Service',
          ],
        },
        {
          id: 'newton-buying-corp',
          name: 'Newton Buying Corp.',
          highlight: false,
          values: [
            '$83.30',
            '$416.66',
            '$833.33',
            'Custom Pricing',
            'Negotiable',
            'Varies by agreement',
            'Included in subscription plans',
            'Negotiable',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Paid',
            'Vendor Responsibility',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Paid',
            'No Service',
            'No Service',
            'Paid',
            'No Service',
          ],
        },
        {
          id: 'marshalls-of-ma',
          name: 'Marshalls of MA Inc.',
          highlight: false,
          values: [
            '$40',
            '$100',
            '$200',
            'Custom Pricing',
            '2%–5%',
            'Varies by agreement',
            'None',
            '2%–4%',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Paid',
            'Vendor Responsibility',
            'Vendor Responsibility',
            'No Service',
            'Paid',
            'Paid',
            'No Service',
            'No Service',
            'Paid',
            'No Service',
          ],
        },
      ],
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact is shared — always shown for both roles.
// "US-Based" framing removed per global architecture.
// Content upgraded from Screenshot 5.

// export const importExportPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Import & Export partnership offers unparalleled access to global markets — streamlined logistics, supply chain optimisation, and customised solutions for efficient cross-border trade that benefits buyers, vendors, and the Kashmir craft ecosystem.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Direct Global Access',
//           description:
//             'Direct access to certified Kashmiri vendors — verified origin and craftsmanship across every international shipment.',
//         },
//         {
//           title: 'Competitive Pricing Through Direct Supply',
//           description:
//             'Eliminate intermediary layers — direct supply reduces costs and improves procurement efficiency.',
//         },
//         {
//           title: 'Sustainable and Ethical Sourcing',
//           description:
//             'Sustainable materials and ethical production — meets ESG and international procurement compliance requirements.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Global Market Expansion',
//           description:
//             'Enter international markets with structured compliance support and expand beyond any single regional market.',
//         },
//         {
//           title: 'Streamlined International Logistics',
//           description:
//             'Efficient customs support and international shipping solutions reduce operational costs and improve reliability.',
//         },
//         {
//           title: 'Brand Recognition in Global Markets',
//           description:
//             'Structured international trade enhances brand visibility in the global authentic Kashmir handicraft market.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Global Trade Access',
//         description:
//           'The import-export platform provides the Kashmir handicraft industry with structured access to international markets — increasing global demand and recognition for authentic products.',
//       },
//       {
//         title: 'Economic Growth',
//         description:
//           'By connecting artisans and vendors with global buyers, the industry creates sustainable economic growth — increasing job opportunities and raising incomes across Kashmir communities.',
//       },
//       {
//         title: 'Heritage Preservation',
//         description:
//           'Import-export partnerships promote global awareness of Kashmiri heritage — ensuring traditional crafts reach international audiences and remain economically viable for future generations.',
//       },
//       {
//         title: 'Environmental Responsibility',
//         description:
//           'Focus on sustainable materials and ethical production in all import-export initiatives reinforces the commitment to eco-friendly practices and responsible global craft trade.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// Import & Export has a $1,000 one-time onboarding fee for GI/fair-trade verification.
// Price and billingPeriod split per established pattern.

export const importExportPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Structured for International Trade.',
  description:
    'Three clear package tiers built for the compliance complexity and global reach of certified import and export operations.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Import & Export partnership.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $1,000 one-time onboarding fee covers GI and fair-trade certification verification, export compliance setup, and international trade platform configuration.',
    note: 'Monthly package fees apply after onboarding is complete.',
    badge: 'Required for All Import & Export Partners',
  },
  packages: [
    {
      name: 'Compliance',
      price: '$150',
      billingPeriod: 'month',
      features: [
        'GI certificate validation and compliance packaging',
        '5% logistics waiver',
        'Basic international trade advisory',
        'Standard customs documentation support',
      ],
      recommended: false,
    },
    {
      name: 'Expansion',
      price: '$375',
      billingPeriod: 'month',
      features: [
        'Global buyer directory access',
        'Branded international export packaging',
        '10% logistics waiver',
        'Priority international market matching',
        'Advanced compliance reporting',
      ],
      recommended: true,
    },
    {
      name: 'Institutional',
      price: '$750',
      billingPeriod: 'month',
      features: [
        'NGO, government, and institutional buyer linkage',
        'Premium export packaging solutions',
        '15% logistics waiver',
        'Legal concierge and policy-level engagement',
        'Dedicated international trade manager',
      ],
      recommended: false,
    },
  ],
  range: '$150–$750',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from main description and support line.

export const importExportTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'International Trade Infrastructure Built for Compliance at Scale',
  description:
    'DKC Connect supports global craft trade with automated customs documentation, compliant cross-border operations, and AI-powered logistics — purpose-built for the demands of authenticated international trade.',
  features: [
    {
      icon: 'FileText',
      title: 'Customs Automation',
      description:
        'AI-generated invoices, export declarations, HS codes, and compliance documentation for every shipment.',
    },
    {
      icon: 'Shield',
      title: 'Trade Compliance Engine',
      description:
        'Embargo checks, denied-party screening, duty calculation, and regulatory alignment across all markets.',
    },
    {
      icon: 'Layers',
      title: 'Blockchain Traceability',
      description:
        'Verifies product origin, supports GI documentation, and prevents counterfeits in certified channels.',
    },
    {
      icon: 'CreditCard',
      title: 'International Payment Gateways',
      description:
        'Multi-currency support, forex management, escrow options, and secure cross-border remittance.',
    },
    {
      icon: 'Activity',
      title: 'Logistics Intelligence',
      description:
        'Route optimisation, demand forecasting, port alerts, and real-time shipment monitoring globally.',
    },
    {
      icon: 'Truck',
      title: 'Carrier and Shipping APIs',
      description:
        'Integrate with freight carriers, automate customs brokerage, and track containers in real time.',
    },
    {
      icon: 'Package',
      title: 'Export Packaging Standards',
      description:
        'Eco-friendly export labels, adaptive packing specifications, and shipment condition monitoring.',
    },
    {
      icon: 'BarChart2',
      title: 'Global Trade Intelligence',
      description:
        'Market trends, tariff tracking, demand forecasting, and buyer behaviour insights globally.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated international trade compliance integration support.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers and vendors operating cross-border.
// "Prime Logic Solutions" removed throughout.

export const importExportApiIntegration = {
  sectionLabel: 'Trade Integration',
  headline: 'Already Trading Cross-Border? Accelerate With DKC.',
  description:
    'Automate documentation, compliance, duties, logistics, and international payments — at global scale, through a single integrated trade platform.',
  features: [
    {
      icon: 'FileText',
      title: 'Trade Documentation Automation',
      description:
        'Generate commercial invoices, certificates of origin, packing lists, and air waybills automatically.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Compliance and Screening',
      description:
        'HS code classification, denied-party screening, embargo checks, and dual-use export control verification.',
    },
    {
      icon: 'Calculator',
      title: 'Duty and Tax Calculation',
      description:
        'Landed-cost calculations covering import duties, VAT, GST, and de minimis thresholds.',
    },
    {
      icon: 'Truck',
      title: 'Freight Orchestration',
      description:
        'Ocean, air, and ground freight with Incoterms configuration, carrier selection, and milestone tracking.',
    },
    {
      icon: 'CreditCard',
      title: 'International Payments and Financing',
      description:
        'Escrow, letters of credit, net payment terms, multi-currency settlement, and full cross-border transaction reconciliation.',
    },
  ],
  support: {
    description:
      'International trade integration support covering customs filings, HTS mapping, denied-party screening, Incoterms configuration, broker and carrier API connections, sandbox environments, SDKs, and documented SLAs.',
    note: 'API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const importExportWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Certified International Trade — Four Steps',
  description:
    'A structured, compliance-governed activation process for serious international trade participants.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your application with identity, business details, certification documentation, and international trade intent.',
    },
    {
      step: 2,
      label: 'KPI and Certification Validation',
      description:
        'Platform validates KPI record from Wholesale (7.0+ required) and confirms GI or fair-trade certification status.',
    },
    {
      step: 3,
      label: 'Onboard & Activate',
      description:
        'Contract execution, customs documentation setup, and compliance packaging complete — trade relationships activate, buyers import, vendors export.',
    },
    {
      step: 4,
      label: 'Progress to Brand Expansion',
      description:
        'With strong performance, unlock Exhibition — the first Brand Expansion tier — and move beyond Core Trade into global premium visibility.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'exhibition',
    system: 'brand-growth',
    name: 'Exhibition',
    kpiRequired: '7.0+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const importExportFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Import & Export',
  items: [
    {
      question: 'Is GI or fair-trade certification mandatory for vendors?',
      answer:
        'Yes. GI certification or fair-trade certification is mandatory for all vendors entering the Import & Export pathway.',
    },
    {
      question: 'Can smaller vendors enter Import & Export directly?',
      answer:
        'Only if they hold GI or fair-trade certification and have achieved KPI 7.0+. Smaller vendors without this record are better served starting at Dropshipping and building through Consignment and Wholesale first.',
    },
    {
      question: 'What type of buyers does Import & Export serve?',
      answer:
        'This track is specifically designed for large distributors, institutional buyers, NGOs, government procurement organisations, and global retail brands that require verified, compliant, documented supply chains.',
    },
    {
      question: 'What is included in the Institutional package?',
      answer:
        'The Institutional package includes NGO and government buyer linkage, premium export packaging, a 15% logistics waiver, legal concierge support, policy-level engagement, and a dedicated international trade account manager.',
    },
    {
      question: 'Can I fast-track into Import & Export without completing Wholesale retention?',
      answer:
        'Yes, through KHCRF lateral evaluation. If your evaluation outcome is strong, you can enter Import & Export directly by paying the lateral fee — bypassing the standard Wholesale retention period.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const importExportFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline:
      'The Most Compliant, Certified, and Globally Recognised Pathway for Kashmir Craft Trade.',
    description:
      'GI-certified. Blockchain-traced. WTO-aligned. A trade partnership built for institutions, large distributors, and global retail brands — with full international compliance infrastructure from day one.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Import Authenticated Kashmir Craft at International Scale?',
      supportingPoints: [
        'GI-certified, blockchain-traced supply with full customs compliance support included.',
        'Every vendor KYC-verified, KPI-assessed, and certification-confirmed before engagement.',
        'Institutional package includes NGO, government, and museum procurement linkage.',
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
      headline: 'Ready to Export Kashmir Craft to Global Markets With Full Compliance?',
      supportingPoints: [
        'GI certification and blockchain provenance on every international shipment.',
        'Export financing and payment guarantees — no chasing buyers across borders.',
        'Strong performance unlocks Exhibition — the Brand Expansion gateway.',
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

export const IMPORT_EXPORT = {
  meta: importExportMeta,
  heroSection: importExportHero,
  overviewSection: importExportOverview,
  modelDifferenceSection: importExportModelDifference,
  // keyFeaturesSection: importExportKeyFeatures,
  eligibilityRulesSection: importExportEligibilityRules,
  eligibilityAssessmentSection: importExportEligibilityAssessment,
  capabilitiesSection: importExportCapabilities,
  comparisonSection: importExportComparison,
  // platformAdvantageSection: importExportPlatformAdvantage,
  pricingSection: importExportPricing,
  technologySection: importExportTechnology,
  apiIntegrationSection: importExportApiIntegration,
  workflowSection: importExportWorkflow,
  faqSection: importExportFaq,
  finalCtaSection: importExportFinalCta,
} as const;

export type ImportExportContent = typeof IMPORT_EXPORT;
