export type DropshippingAssessmentCategory = 'general' | 'vendor' | 'buyer';
export type DropshippingQuestionType = 'single' | 'multiple';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const dropshippingMeta = {
  slug: 'dropshipping',
  system: 'core-trade',
  tier: 1,
  label: 'Dropshipping',
  pageTitle: 'Dropshipping Partnerships',
  seoDescription:
    'A zero-risk entry pathway into global Kashmir craft trade. No inventory, no upfront cost, no KPI requirement. The universal entry point for vendors and buyers on DKC Connect.',
  kpiRequired: 'None',
  retentionRequired: 'None',
  previousSlug: null,
  nextSlug: 'consignment',
  lateralEntryAvailable: false,
  fastTrackAvailable: false,
  tags: ['zero-risk', 'no-inventory', 'universal-entry', 'fast-entry', 'online'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: headline and description differ by role.

export const dropshippingHero = {
  sectionLabel: 'Zero-Inventory Craft Trade',
  shared: {
    badge: 'Core Trade — Tier 1',
    statusChip: 'Universal Entry',
  },
  roles: {
    buyer: {
      headline: 'Source Kashmir Craft. Zero Inventory Required.',
      description:
        'List and sell authentic Kashmiri craft without holding stock — DKC handles sourcing, fulfilment, and logistics so you can focus on your market.',
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
      headline: 'Reach Global Buyers. Zero Stock Burden.',
      description:
        'Place Kashmiri craft into a global buyer network without managing export infrastructure, warehousing, or upfront shipping costs.',
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

export const dropshippingOverview = {
  sectionLabel: 'Why Dropshipping',
  headline: 'Simplifying Entry into Global Craft Trade',
  description:
    'Middlemen reduce margins and counterfeit products break trust. Dropshipping enables direct, verified trade between artisans and global buyers without inventory or upfront risk.',
  problems: [
    'Intermediaries reduce vendor margins with no pricing transparency',
    'Buyers lack reliable authentication for Kashmir craft products',
    'No direct system connecting artisan production to global retail',
    'Artisans operate without fair-trade protection in informal channels',
  ],
  solutions: [
    'Verified vendors and buyers before any transaction begins',
    'No upfront inventory required on either side',
    'Authenticated products with traceable origin and certification',
    'Fastest and lowest-risk entry into structured trade',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared features + role-split feature groups.

export const dropshippingModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Kashmir-Exclusive Dropshipping. Artisan-First.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade crafts — no mass-produced goods, no anonymous suppliers, no unverified listings.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Verified Global Marketplace',
      description:
        'Single platform connecting verified Kashmiri vendors with verified global buyers — structured onboarding on both sides.',
    },
    {
      icon: 'Shield',
      title: 'Blockchain Traceability',
      description:
        'Every product carries a blockchain-verified provenance record from artisan registration through delivery.',
    },
    {
      icon: 'CreditCard',
      title: 'Multi-Currency Payments',
      description:
        'Fraud-protected, multi-currency settlement with real-time processing — no payment uncertainty.',
    },
    {
      icon: 'Target',
      title: 'Kashmir-Only Sourcing',
      description:
        'Every product sourced exclusively from verified Kashmiri artisans — no generic dropshipping inventory.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'ShoppingCart',
          title: 'Zero Inventory Risk',
          description:
            'List and sell without upfront stock purchase — fulfilled directly from verified vendors on confirmed orders.',
        },
        {
          icon: 'Package',
          title: 'GI-Certified Catalog',
          description:
            'Access GI-certified Kashmir craft — Pashmina, Kani shawls, papier-mâché, walnut carving, crewelwork.',
        },
        {
          icon: 'BarChart3',
          title: 'Live Sourcing Dashboard',
          description:
            'Track product availability, delivery timelines, and pricing through a real-time buyer dashboard.',
        },
        {
          icon: 'TrendingUp',
          title: 'Test Before Committing',
          description:
            'Test new craft categories and validate demand before committing to wholesale purchase volumes.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Instant Global Listing',
          description:
            'Reach verified buyers worldwide immediately — no export infrastructure or warehousing required.',
        },
        {
          icon: 'Lock',
          title: 'GI Protection on Every Listing',
          description:
            'GI certification displayed on every product — protecting your work from counterfeit and misrepresentation.',
        },
        {
          icon: 'DollarSign',
          title: 'Revenue Without Warehousing',
          description:
            'Payments trigger on confirmed sales — no warehouse costs, no unsold stock risk.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Foundation for Progression',
          description:
            'Dropshipping performance builds the KPI record that unlocks Consignment and higher trade tiers.',
        },
      ],
    },
  },
} as const;

// ─── Key Features Section ─────────────────────────────────────────────────────
// Shared: platform infrastructure applies to both roles.
// Renderer: tabbed grid. Default active tab = 'core-capabilities'.

// export const dropshippingKeyFeatures = {
//   sectionLabel: 'Platform Features',
//   headline: 'Built for Kashmir Craft Trade.',
//   subheadline: 'Infrastructure that makes global craft trade reliable, transparent, and scalable.',
//   defaultTab: 'core-capabilities',
//   categories: [
//     {
//       id: 'core-capabilities',
//       label: 'Core Dropshipping',
//       items: [
//         'Zero-inventory fulfilment on confirmed orders only',
//         'AI-powered buyer recommendations and product discovery',
//         'Real-time inventory signals across vendor catalogs',
//       ],
//     },
//     {
//       id: 'payment-transaction',
//       label: 'Payments & Transactions',
//       items: [
//         'Multi-currency support with real-time exchange rates',
//         'PCI-compliant gateways with automated invoice generation',
//         'Flexible payment plans for high-value craft orders',
//       ],
//     },
//     {
//       id: 'security',
//       label: 'Security',
//       items: [
//         'End-to-end encryption with MFA on all accounts',
//         'Real-time fraud detection and WAF protection',
//         'GDPR-aligned compliance with continuous monitoring',
//       ],
//     },
//     {
//       id: 'marketing',
//       label: 'Marketing & Analytics',
//       items: [
//         'Behavioural targeting for high-intent buyer segments',
//         'Predictive analytics for seasonal craft demand forecasting',
//         'Multi-channel campaign management with conversion tracking',
//       ],
//     },
//   ],
// } as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: entry rules are identical for both roles on Dropshipping.

export const dropshippingEligibilityRules = {
  sectionLabel: 'Dropshipping Entry Rules',
  headline: 'No KPI. No Retention. Open to All.',
  description:
    'Dropshipping is the only DKC Connect partnership with no KPI requirement and no retention period — open to every vendor and buyer who passes KYC verification.',
  requirements: [
    {
      label: 'KPI Required',
      value: 'None',
      note: 'No performance score needed to enter.',
    },
    {
      label: 'Retention Period',
      value: 'None',
      note: 'No waiting period before progressing.',
    },
    {
      label: 'Previous Level',
      value: 'None',
      note: 'No prior partnership required.',
    },
    {
      label: 'Eligibility',
      value: 'Universal',
      note: 'Open to all verified vendors and buyers.',
    },
  ],
  progressionNote:
    'Partners build their KPI record through trade performance. KPI 6.0+ and 12 months on platform unlocks Consignment.',
  nextSlug: 'consignment',
  nextLabel: 'Consignment',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime by the component
// using category: 'general' | 'vendor' | 'buyer'.
//
// IMPORTANT: resultContent keys must match threshold eligibility strings EXACTLY.
// The component uses eligibility string as the lookup key into resultContent.
//
// Next steps and messages extracted directly from EligibilityProvider.tsx
// calculateResults() dropshipping block — no hardcoding needed in the component.

export const dropshippingEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit, readiness level, and a personalised next-step recommendation — in under three minutes.',
  introCard: {
    icon: 'Target',
    title: 'Dropshipping Eligibility Assessment',
    description:
      'Ten questions. Personalised results. No email required. Get a clear picture of your dropshipping readiness and what comes next.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '10 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Dropshipping Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Dropshipping',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as DropshippingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform standards',
          'Exceeds platform standards',
        ],
        category: 'general' as DropshippingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as DropshippingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as DropshippingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your business?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully safe workplaces',
        ],
        category: 'general' as DropshippingAssessmentCategory,
        weight: 1,
      },

      // ── Vendor-only questions — unscored, used for role-specific recommendations ──
      {
        id: 'vendor_active_years',
        question: 'How long has your craft business been active?',
        type: 'single' as DropshippingQuestionType,
        options: ['New business', '1–3 years', '3–5 years', '5+ years'],
        category: 'vendor' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_production_scale',
        question: 'What best describes your production scale?',
        type: 'single' as DropshippingQuestionType,
        options: ['Individual artisan', 'Workshop or studio', 'Enterprise or cooperative'],
        category: 'vendor' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications',
        question: 'Do you currently hold any craft certifications?',
        type: 'single' as DropshippingQuestionType,
        options: ['None', 'GI tag', 'KHCRF approval', 'GI tag and KHCRF approval'],
        category: 'vendor' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_growth_goal',
        question: 'What is your primary goal in joining DKC Connect?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'Reach retail buyers globally',
          'Build wholesale demand',
          'Enter export channels',
          'Build a global brand presence',
        ],
        category: 'vendor' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question: 'Which of these readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as DropshippingQuestionType,
        options: [
          'Digital presence — website, catalog, or active social media',
          'Packaging standards — safe, minimum compliance met',
          'Inventory visibility — 10 to 20 pieces available and tracked',
          'Tech compatibility — can integrate with API, spreadsheet, or e-commerce platform',
        ],
        category: 'vendor' as DropshippingAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored, used for role-specific recommendations ──
      {
        id: 'buyer_type',
        question: 'What type of buyer best describes you?',
        type: 'single' as DropshippingQuestionType,
        options: [
          'Small or independent retailer',
          'Wholesaler or distributor',
          'Institutional or corporate buyer',
        ],
        category: 'buyer' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity',
        question: 'What is your approximate sourcing budget per year?',
        type: 'single' as DropshippingQuestionType,
        options: ['Under $5,000', '$5,000–$25,000', 'Over $25,000'],
        category: 'buyer' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_authenticity_importance',
        question: 'How important is verified product authenticity to your business?',
        type: 'single' as DropshippingQuestionType,
        options: ['Low importance', 'Moderate importance', 'Essential requirement'],
        category: 'buyer' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_commitment_level',
        question: 'Which trade model are you most interested in starting with?',
        type: 'single' as DropshippingQuestionType,
        options: ['Dropshipping', 'Consignment', 'Wholesale', 'Exhibition'],
        category: 'buyer' as DropshippingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question: 'Which of these readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as DropshippingQuestionType,
        options: [
          'Fulfilment capability — prior dropshipping or e-commerce experience',
          'Return handling — clear process for managing returns',
          'Promotion willingness — able to use artisan storytelling in listings',
          'Tech compatibility — Shopify, WooCommerce, or API integration ready',
        ],
        category: 'buyer' as DropshippingAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      5: {
        eligibility: 'Dropshipping (TIER 1 / L1)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      11: {
        eligibility: 'Dropshipping + Fast Track to Consignment',
        fastTrackEligible: true,
        nextLevel: 'Consignment',
      },
      16: {
        eligibility: 'Consignment (TIER 1 / L2)',
        fastTrackEligible: true,
        nextLevel: 'Consignment',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: false,
        commitment: null,
      },
      buyer: {
        commitment: 'Dropshipping',
      },
    },

    // ── Result content ────────────────────────────────────────────────────
    // All keys match threshold eligibility strings exactly.
    // Extracted from EligibilityProvider.tsx calculateResults() dropshipping block.
    // Component reads from here — no hardcoding needed.
    resultContent: {
      messagesByOutcome: {
        'Dropshipping (TIER 1 / L1)':
          "You're ready to start with Dropshipping. Build your foundation and grow from here.",
        'Dropshipping + Fast Track to Consignment':
          "Great potential. You're eligible for Dropshipping with a fast track to Consignment.",
        'Consignment (TIER 1 / L2)':
          'Outstanding. Your strong fundamentals make you eligible for Consignment via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Dropshipping (TIER 1 / L1)': [
          'Join the Dropshipping programme.',
          'Access free educational resources.',
          'Connect with the DKC community support network.',
          'Build operational capabilities for future progression.',
        ],
        'Dropshipping + Fast Track to Consignment': [
          'Start with the Dropshipping programme.',
          'Enrol in the Readiness Programme (RP).',
          'Access training resources.',
          'Build initial partner connections.',
        ],
        'Consignment (TIER 1 / L2)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Connect with premium trade partners.',
          'Access advanced onboarding resources.',
          'Schedule a consultation with a partnership specialist.',
        ],
      },
      strengthsByOutcome: {
        'Dropshipping (TIER 1 / L1)': ['Entrepreneurial mindset', 'Commitment to growth'],
        'Dropshipping + Fast Track to Consignment': [
          'Solid operational fundamentals',
          'Clear growth potential',
        ],
        'Consignment (TIER 1 / L2)': [
          'High-quality standards',
          'Strong authenticity',
          'Excellent customer focus',
        ],
      },
      improvementsByOutcome: {
        'Dropshipping (TIER 1 / L1)': [
          'Improve product authenticity and quality systems.',
          'Develop consistent fair trade practices.',
        ],
        'Dropshipping + Fast Track to Consignment': [
          'Enhance quality and sustainability documentation.',
        ],
        'Consignment (TIER 1 / L2)': [],
      },
      defaultStrengths: [
        'High-quality product standards',
        'Strong authenticity commitment',
        'Customer-focused operational mindset',
        'Clear readiness for platform entry',
      ],
      defaultDevelopmentAreas: [
        'Build more structured operational documentation.',
        'Strengthen trade readiness systems before progression.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles equally.

export const dropshippingPlatformCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'The Infrastructure Behind Every Trade',
  subheadline: 'Launch globally with verified supply, managed logistics, and zero inventory risk.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Cpu',
      items: [
        'Multi-currency payments with real-time settlement',
        'Blockchain-backed product and transaction verification',
        'Scalable cloud infrastructure with global uptime',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Integrated global shipping and delivery coordination',
        'Automated customs clearance and documentation',
        'Centralised returns and fulfilment management',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Real-time demand and performance analytics',
        'Predictive insights for seasonal craft trends',
        'Vendor KPIs and partnership progression tracking',
      ],
    },
    {
      title: 'Dropshipping Model',
      icon: 'Package',
      items: [
        'Zero-inventory fulfilment on confirmed orders',
        'Test markets before committing to production',
        'Direct link between artisans and global buyers',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Verified authenticity with GI and blockchain traceability',
        'Access to curated Kashmir craft beyond mass marketplaces',
        'No logistics handling or fulfilment overhead',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Direct access to global buyers without intermediaries',
        'Built-in brand exposure across verified marketplaces',
        'Logistics, payments, and fulfilment fully managed',
      ],
    },
  },

  impact: [
    {
      title: 'Economic Empowerment',
      description: 'Global market access driving sustainable artisan income and growth',
    },
    {
      title: 'Heritage Preservation',
      description: 'Structured trade sustaining traditional Kashmir craft across generations',
    },
    {
      title: 'Global Visibility',
      description: 'Raising international demand for authentic, high-quality handmade products',
    },
  ],
} as const;

// ─── Comparison Section ───────────────────────────────────────────────────────
// Shared: not role-specific.
// Two tabs — 'platform' (feature comparison) and 'cost' (cost comparison).
// Default active tab = 'platform'.
// Source: Screenshots 3, 4 (platform) and Screenshots 6, 7 (cost).

export const dropshippingComparison = {
  sectionLabel: 'Platform Comparison',
  headline: 'See How DKC Compares',
  subheadline:
    'A transparent look at where DKC Connect stands against the alternatives — on features and on cost.',
  defaultTab: 'platform',
  tabs: [
    {
      id: 'platform',
      label: 'Feature Comparison',
      description: 'Compare platform capabilities, craft focus, and trust standards.',
      parameters: [
        'Breadth of Handicraft Products',
        'Kashmir Heritage Focus',
        'Full Kashmir Product Line',
        'Seller Verification',
        'Artisan Support',
        'GI Tags and Certifications',
        'Origin Traceability',
        'Fair Trade Policies',
        'Eco-Friendly Practices',
        'Cultural Storytelling',
        'Multimedia Content',
        'Personalised Suggestions',
        'Thematic Collections',
        'Pricing Transparency',
        'Value-Added Services',
        'International Shipping',
        'B2B Networking',
        'Customer Education',
        'Return Policies',
        'Brand Trust',
        'Influencer Partnerships',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'Extensive Kashmir craft offerings',
            'Strong emphasis on craftsmanship',
            'Full Kashmir craft representation',
            'Thorough KYC verification process',
            'High artisan support programme',
            'Prominent GI certification for all products',
            'Detailed blockchain traceability',
            'Integrated fair trade policies',
            'Strong eco-friendly practice focus',
            'Rich visual storytelling of artisan culture',
            'Extensive multimedia content library',
            'Highly curated seasonal collections',
            'Seasonal and festival-based collections',
            'Fully transparent pricing for all products',
            'Tailored artisan resource logistics',
            'Available for artisans and buyers',
            'Extensive B2B networking opportunities',
            'Extensive buyer education resources',
            'Flexible return policies',
            'High trust focused on craftsmanship',
            'Planned influencer partnership programme',
          ],
        },
        {
          id: 'eprolo',
          name: 'EPROLO',
          highlight: false,
          values: [
            'Broad range of artisan products',
            'Minimal emphasis on heritage',
            'No Kashmir representation',
            'Moderate seller verification',
            'Moderate artisan support',
            'No GI certifications',
            'Limited traceability',
            'Minimal fair trade policies',
            'Moderate eco-friendly efforts',
            'Limited cultural storytelling',
            'Limited multimedia content',
            'Limited product suggestions',
            'Seasonal collections',
            'Transparent pricing model',
            'Business credit and promotional discounts',
            'Available for global buyers',
            'B2B networking opportunities',
            'Moderate educational resources',
            'Flexible return policies for buyers',
            'Moderate trust with artisan vendors',
            'No focus on influencer partnerships',
          ],
        },
        {
          id: 'modalyst',
          name: 'Modalyst',
          highlight: false,
          values: [
            'On-demand product offerings',
            'No emphasis on heritage',
            'Limited to on-demand items',
            'Verified sellers with on-demand model',
            'Limited artisan support',
            'No GI certifications',
            'Traceability based on demand',
            'Optional fair trade practices',
            'Focused on sustainable materials',
            'No cultural storytelling',
            'Limited multimedia content',
            'Personalised based on preferences',
            'Limited collections',
            'Transparent pricing for products',
            'Custom on-demand services',
            'Global shipping available',
            'Limited networking opportunities',
            'Moderate educational resources',
            'Standard return policies',
            'Moderate trust with on-demand model',
            'No focus on influencer partnerships',
          ],
        },
        {
          id: 'spocket',
          name: 'Spocket',
          highlight: false,
          values: [
            'General product offerings',
            'No heritage focus',
            'Limited to dropshipping items',
            'Moderate seller verification',
            'Limited artisan support',
            'No GI certifications',
            'Basic traceability',
            'Optional fair trade policies',
            'Focus on eco-friendly suppliers',
            'No cultural storytelling',
            'Limited multimedia content',
            'Personalised based on dropshipping',
            'Seasonal and niche collections',
            'Transparent pricing',
            'Product sourcing integration',
            'Global shipping available',
            'Networking within dropshipping',
            'Limited educational resources',
            'Flexible returns based on dropshipping model',
            'Moderate trust with suppliers',
            'No focus on influencer partnerships',
          ],
        },
        {
          id: 'cjdropshipping',
          name: 'CJDropshipping',
          highlight: false,
          values: [
            'Customisable product range',
            'Low heritage emphasis',
            'No comprehensive Kashmir products',
            'Low seller verification',
            'No artisan support',
            'No GI certifications',
            'Minimal traceability',
            'No fair trade policies',
            'Low eco-friendly practices',
            'No cultural storytelling',
            'Minimal content',
            'Variable product suggestions',
            'Minimal thematic collections',
            'Variable pricing transparency',
            'Variable value-added services',
            'Variable international shipping',
            'Low B2B networking support',
            'Low customer education',
            'Variable return policies',
            'Limited brand trust',
            'Variable influencer partnerships',
          ],
        },
      ],
    },
    {
      id: 'cost',
      label: 'Cost Comparison',
      description: 'Compare pricing, fees, and what is included at no extra cost.',
      parameters: [
        'Platform Cost',
        'Subscription Fees',
        'Transaction Fees',
        'Payment Processing Fees',
        'Product Cost',
        'Shipping Fees',
        'GI Certification Support',
        'Marketing Tools',
        'Return Costs',
        'Loyalty Rewards',
        'Blockchain Traceability',
        'Custom Branding',
        'Multimedia Storytelling',
        'Eco-Friendly Practices',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'Free for Early Adopters',
            'None',
            '1.5%',
            'None',
            'Competitive pricing',
            'Paid by buyer',
            'Available for artisan products',
            'Subsidised support and digital tools',
            'Buyer responsibility',
            'Available',
            'Included for all products',
            'Available for all vendors',
            'Available for artisan stories',
            'Integrated with platform',
          ],
        },
        {
          id: 'eprolo',
          name: 'EPROLO',
          highlight: false,
          values: [
            'Free for Buyers',
            'No monthly fee',
            '15% commission fee',
            '2.9% + $0.30',
            'Varies, set by vendor',
            'Paid by buyer',
            'Not available',
            'Discount and promotional tools',
            'Buyer responsibility',
            'No',
            'Not available',
            'No',
            'No',
            'Not emphasised',
          ],
        },
        {
          id: 'modalyst',
          name: 'Modalyst',
          highlight: false,
          values: [
            'Free for Buyers',
            'No monthly fee',
            'Based on product cost and shipping',
            'None',
            'Based on on-demand model',
            'Paid by buyer',
            'Not applicable',
            'Limited marketing tools',
            'Buyer responsibility',
            'No',
            'Not available',
            'Available',
            'No',
            'Available for certain products',
          ],
        },
        {
          id: 'spocket',
          name: 'Spocket',
          highlight: false,
          values: [
            'Free for Buyers',
            'No monthly fee',
            'Based on product cost and shipping',
            '2.9% + $0.30',
            'Varies, set by vendor',
            'Paid by buyer',
            'Not available',
            'Limited marketing tools',
            'Buyer responsibility',
            'No',
            'Not available',
            'Available',
            'No',
            'Not emphasised',
          ],
        },
        {
          id: 'cjdropshipping',
          name: 'CJDropshipping',
          highlight: false,
          values: [
            'Free for Buyers',
            'No monthly fee',
            'Based on product cost and shipping',
            '2.9% + $0.30',
            'Varies, set by vendor',
            'Paid by buyer',
            'Not available',
            'Limited marketing tools',
            'Buyer responsibility',
            'No',
            'Not available',
            'Available',
            'No',
            'Not emphasised',
          ],
        },
      ],
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact is shared — always shown for both roles.

// export const dropshippingPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's dropshipping model creates distinct commercial advantages for buyers and vendors while driving broader impact for the Kashmir craft ecosystem.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Authenticity Guaranteed',
//           description:
//             'GI certification and blockchain traceability deliver verifiable proof of origin your customers can trust.',
//         },
//         {
//           title: 'Curated Catalog',
//           description:
//             'Genuine handmade Kashmir products unavailable through mass-market or generic dropshipping platforms.',
//         },
//         {
//           title: 'Zero Logistics Friction',
//           description:
//             'Source and sell authentic Kashmir craft globally without managing shipping or fulfilment yourself.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Global Market Access',
//           description:
//             'Reach verified buyers across North America, Europe, and the Gulf without agents or upfront marketing spend.',
//         },
//         {
//           title: 'Brand Exposure at Scale',
//           description:
//             'Platform infrastructure amplifies your craft story to serious buyers and strengthens brand recognition.',
//         },
//         {
//           title: 'Operations Handled',
//           description:
//             'Logistics, payment processing, and fulfilment coordination are managed within the platform.',
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
//           'Connecting artisans with global markets drives sustainable economic growth and community-level opportunity.',
//       },
//       {
//         title: 'Heritage Preservation',
//         description:
//           'Platform trade ensures Kashmiri craft traditions reach future generations rather than fade through informal channels.',
//       },
//       {
//         title: 'Global Visibility',
//         description:
//           'A structured global stage raises international demand for authentic, high-quality Kashmir handmade products.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.

export const dropshippingPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. No Hidden Costs.',
  description:
    'Three clear package tiers. One early-adopter free period. Every fee disclosed before you commit.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the dropshipping partnership.',
  freeOffer: {
    title: 'Free Onboarding Period',
    description:
      'Enrol within the first six months and access the full dropshipping partnership at no cost for six months.',
    note: 'After the free period, select a monthly package to continue.',
    badge: 'Limited Time — Early Adopter Offer',
  },
  packages: [
    {
      name: 'Basic',
      price: '$12.50',
      billingPeriod: 'month',
      features: [
        'Up to 25 product listings',
        'Basic packaging templates',
        '5% logistics waiver',
        'Standard vendor-buyer matching',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$37.50',
      billingPeriod: 'month',
      features: [
        'Up to 100 product listings',
        'Branded packaging kit',
        'Analytics dashboard access',
        '10% logistics waiver',
        'Priority buyer matching',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$75.00',
      billingPeriod: 'month',
      features: [
        'Unlimited product listings',
        'Premium packaging bundle',
        'Top catalog placement',
        '15% logistics waiver',
        'Full support access',
      ],
      recommended: false,
    },
  ],
  range: '$12.50–$75',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.

export const dropshippingTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Enterprise-Grade Infrastructure for Craft Commerce',
  description:
    'DKC Connect runs on modern, scalable infrastructure purpose-built for authenticated international craft trade at global scale.',
  features: [
    {
      icon: 'Layers',
      title: 'MACH Architecture',
      description:
        'Microservices, API-first, cloud-native headless PWA with database intelligence and geofencing.',
    },
    {
      icon: 'Link',
      title: 'API Integrations',
      description:
        'Prebuilt connectors for storefronts, payments, shipping, chatbots, and fraud detection.',
    },
    {
      icon: 'FileText',
      title: 'Content Management',
      description:
        'WYSIWYG editing, metadata modelling, personalisation, SEO tools, and A/B testing.',
    },
    {
      icon: 'Shield',
      title: 'Security & Compliance',
      description:
        'PCI compliance, encryption, intrusion detection, SIEM monitoring, and vulnerability scanning.',
    },
    {
      icon: 'BarChart',
      title: 'Marketing Automation',
      description:
        'AI personalisation, omnichannel campaign management, predictive targeting, and ROI analytics.',
    },
    {
      icon: 'Cube',
      title: 'Immersive Technology',
      description: 'AR try-on tools, 3D configurators, digital lookbooks, and catalog support.',
    },
    {
      icon: 'PieChart',
      title: 'Data & Analytics',
      description:
        'Predictive modelling, behavioural segmentation, live dashboards, and KPI optimisation.',
    },
    {
      icon: 'Cloud',
      title: 'Cloud Infrastructure',
      description:
        'Azure serverless hosting with enterprise availability, scalability, and full integration support.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and seamless digital marketing integration for global trade reach.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers and vendors.

export const dropshippingApiIntegration = {
  sectionLabel: 'E-Commerce Integration',
  headline: 'Already Selling Online? Plug In and Scale.',
  description:
    'Connect Shopify, WooCommerce, Magento, or BigCommerce directly to DKC Connect and list authenticated Kashmir craft immediately.',
  features: [
    {
      icon: 'PlugZap',
      title: 'E-Commerce Connectors',
      description:
        'Prebuilt connectors for Shopify, WooCommerce, Magento, and BigCommerce — live in hours.',
    },
    {
      icon: 'Wrench',
      title: 'Custom Store APIs',
      description:
        'REST and GraphQL APIs sync products, inventory, and orders across any platform architecture.',
    },
    {
      icon: 'Package',
      title: 'Automated Fulfilment',
      description:
        'Real-time routing, tracking, labels, and shipping manifests automated for every verified vendor.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Secure API Gateways',
      description:
        'Token authentication, rate limiting, audit logging, and zero-trust security controls.',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics API',
      description:
        'Pull KPIs, retention metrics, and sales data into your existing analytics infrastructure.',
    },
  ],
  support: {
    description:
      'Enterprise integration support with full implementation, testing, sandbox environments, SDKs, and documented SLAs.',
    note: 'API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const dropshippingWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'Application to Active Trade in Four Steps',
  description: 'A structured, fast activation process with no ambiguity about what comes next.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description: 'Submit your application with basic identity and business details.',
    },
    {
      step: 2,
      label: 'Quick Approval',
      description: 'KYC verification and application review completed within 48 hours.',
    },
    {
      step: 3,
      label: 'Activate & List',
      description:
        'Profile setup, onboarding, and product listing or sourcing activation completed.',
    },
    {
      step: 4,
      label: 'Trade and Progress',
      description:
        'Begin trading, build your KPI record, and unlock Consignment after 12 months at KPI 6.0+.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'consignment',
    name: 'Consignment',
    kpiRequired: '6.0+',
    retentionRequired: '12 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const dropshippingFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Dropshipping',
  items: [
    {
      question: 'Is Dropshipping free to enter on DKC Connect?',
      answer:
        'Early adopters who enrol within the first six months get six months of full platform access at no cost. After that, monthly packages start at $12.50.',
    },
    {
      question: 'Do I need a KPI score or retention period to join?',
      answer:
        'No. Dropshipping is the only DKC Connect partnership with zero KPI requirement and zero retention period — the universal entry point for all verified participants.',
    },
    {
      question: 'How do I progress beyond Dropshipping?',
      answer:
        'Build your KPI record through trade performance and complete 12 months on the platform. Reaching KPI 6.0+ unlocks Consignment — and from there, Wholesale and Import/Export.',
    },
    {
      question: 'What makes DKC Dropshipping different from Shopify or Amazon?',
      answer:
        'DKC focuses exclusively on authentic Kashmiri handmade craft — with GI-certified sourcing, blockchain provenance, artisan-first governance, and a structured progression system no generic platform offers.',
    },
    {
      question: 'What does a vendor need to get started?',
      answer:
        'Basic KYC verification, a product catalogue, and minimum packaging compliance. No export infrastructure, upfront shipping costs, or inventory commitment required.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const dropshippingFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Zero Inventory. Zero KPI. Open from Day One.',
    description:
      'The most accessible partnership on the platform — open to every verified buyer and vendor with no inventory commitment and no entry threshold.',
  },
  roles: {
    buyer: {
      headline: 'Source Kashmir Craft Without the Risk',
      supportingPoints: [
        'Sell before you buy — zero inventory commitment required.',
        'GI-certified products with blockchain provenance on every listing.',
        'Most buyers are live and trading within 2–3 weeks of application.',
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
      headline: 'Reach Global Buyers Without the Infrastructure Burden',
      supportingPoints: [
        'No export setup needed — DKC handles logistics end to end.',
        'GI certification displayed on every product listing from day one.',
        'Most vendors are placed with their first buyer within 3–4 weeks.',
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

export const DROPSHIPPING = {
  meta: dropshippingMeta,
  heroSection: dropshippingHero,
  overviewSection: dropshippingOverview,
  modelDifferenceSection: dropshippingModelDifference,
  // keyFeaturesSection: dropshippingKeyFeatures,
  eligibilityRulesSection: dropshippingEligibilityRules,
  eligibilityAssessmentSection: dropshippingEligibilityAssessment,
  capabilitiesSection: dropshippingPlatformCapabilities,
  comparisonSection: dropshippingComparison,
  // platformAdvantageSection: dropshippingPlatformAdvantage,
  pricingSection: dropshippingPricing,
  technologySection: dropshippingTechnology,
  apiIntegrationSection: dropshippingApiIntegration,
  workflowSection: dropshippingWorkflow,
  faqSection: dropshippingFaq,
  finalCtaSection: dropshippingFinalCta,
} as const;

export type DropshippingContent = typeof DROPSHIPPING;
