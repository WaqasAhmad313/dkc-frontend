export type BrickMortarAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type BrickMortarQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const brickMortarMeta = {
  slug: 'brick-mortar',
  system: 'brand-growth',
  tier: 2,
  label: 'Brick & Mortar',
  pageTitle: 'Shared Brick & Mortar Partnerships',
  seoDescription:
    'A shared-store retail model that gives Kashmiri craft vendors and retail buyers permanent physical US market presence — with full operational management, omni-channel integration, and real-time store performance insights.',
  kpiRequired: '8.0+',
  retentionRequired: '18 months',
  previousSlug: 'white-label',
  nextSlug: 'packaging',
  nextSystem: 'collaborative',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['retail', 'physical-store', 'omnichannel', 'flagship', 'brand-expansion', 'us-market'],
} as const;

export const brickMortarHero = {
  sectionLabel: 'Brick & Mortar Partnership',
  shared: {
    badge: 'Brand Expansion — Tier 2 Final',
    statusChip: 'KPI 8.0+ Required — White Label Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Bring Premium Kashmir Craft Into Your Retail Store. We Handle Everything Else.',
      description:
        'Add an exclusive, curated Kashmiri handicraft collection to your physical retail environment without managing sourcing, supply chain, or compliance. DKC handles vendor integration, store operations, staffing, licensing, and omni-channel visibility. You pay a fixed monthly rent and focus on your customers.',
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
      headline: 'Place Your Kashmir Craft in Premium US Retail Stores. No Operational Burden.',
      description:
        "Establish permanent physical retail presence in major US markets through DKC's shared store model. We run the stores — operations, staff, licensing, marketing, and omni-channel integration. You ship inventory, pay fixed monthly rent, and track your store performance in real time.",
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
// Shared: problem and solution context applies to both roles.
// Screenshot 1 overview copy used and upgraded. "US" framing broadened.

export const brickMortarOverview = {
  sectionLabel: 'Why Brick & Mortar',
  headline: 'Accessing Physical Retail Without Ownership',
  description:
    'Physical retail requires high investment and operational complexity. This model enables vendors to access managed retail spaces without handling operations or compliance.',
  problems: [
    'High costs and operational complexity block retail entry',
    'Compliance and licensing create barriers for global vendors',
    'No structured access to premium retail without ownership',
    'Returns and logistics make retail unsustainable for small vendors',
  ],
  solutions: [
    'Access to retail stores without operational responsibility',
    'Managed compliance, licensing, and staffing',
    'Shared retail model in high-value markets',
    'Real-time insights into sales, inventory, and performance',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Raw file had three DollarSign icons — resolved with distinct icons per feature.
// "Owner" terminology replaced with "buyer" throughout.

export const brickMortarModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not a Store Lease. A Fully Managed Retail Partnership.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass production, no unverified supply. Every store placement is GI-authenticated, KHCRF-compliant, and managed end-to-end by DKC.',
  sharedFeatures: [
    {
      icon: 'Building2',
      title: 'Fully Managed Shared Store Infrastructure',
      description:
        'DKC operates the stores — staffing, utilities, compliance, licensing, and omni-channel integration. Partners pay fixed rent and focus entirely on product and brand growth.',
    },
    {
      icon: 'Shield',
      title: 'Complete US Retail and Consumer Compliance',
      description:
        'Every store operates under full US retail, safety, and consumer regulation compliance — managed and maintained by DKC on behalf of all partners in the shared space.',
    },
    {
      icon: 'TabletSmartphone',
      title: 'Omni-Channel Retail Visibility',
      description:
        'Physical store presence is integrated with online sales, loyalty systems, geo-fenced marketing, and mobile engagement — creating a unified retail experience across every channel.',
    },
    {
      icon: 'BarChart2',
      title: 'Live Store Performance Dashboards',
      description:
        'Real-time sales data, footfall analytics, stock levels, and buyer engagement metrics — accessible through a live dashboard for every partner in the shared store network.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'DollarSign',
          title: 'Commission Revenue From Authentic Craft Sales',
          description:
            'Earn a commission on every sale of Kashmiri craft products in your store — adding a premium, high-margin revenue stream without managing sourcing, stock, or supplier relationships.',
        },
        {
          icon: 'Package',
          title: 'Exclusive Curated Kashmiri Collections',
          description:
            'Offer customers a curated selection of GI-certified Kashmiri artisan products unavailable in generic retail — differentiating your store and attracting discerning buyers who value authenticity.',
        },
        {
          icon: 'Tag',
          title: 'Heritage Storytelling and Brand Identity',
          description:
            "Strengthen your store's identity through authentic Kashmiri cultural storytelling displays — positioning your retail environment as a destination for luxury, heritage, and craft excellence.",
        },
        {
          icon: 'TrendingUp',
          title: 'Product Line Expansion Without Inventory Risk',
          description:
            'Add new Kashmiri craft categories to your retail offering without inventory investment — vendors supply and manage their own stock within your shared store space.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'US Physical Retail Presence Without Overhead',
          description:
            'Place your craft in high-traffic US retail locations — DKC handles operations, compliance, and staffing. You pay fixed rent and gain the retail visibility that drives commercial growth.',
        },
        {
          icon: 'BarChart3',
          title: 'Transparent Post-Sale Settlement',
          description:
            'Earn fair, transparent profits through post-sale settlement systems — with real-time tracking of every sale, automated payout processing, and full revenue visibility per store.',
        },
        {
          icon: 'Lock',
          title: 'Tracked, Insured, Protected Inventory',
          description:
            "All vendor inventory in shared retail spaces is digitally tracked, insured, and protected under DKC's marketplace management — no exposure to theft, loss, or damage liability.",
        },
        {
          icon: 'MapPin',
          title: 'Multi-City US Retail Expansion',
          description:
            'Scale physical retail presence across multiple US cities through the shared store network — from neighbourhood boutiques to flagship cultural showcases in major markets.',
        },
      ],
    },
  },
} as const;

// ─── Key Features Section (NEW) ───────────────────────────────────────────────
// Source: Screenshot 2 — six tabbed feature categories.
// Shared: platform features are not role-specific.
// Renderer: tabbed grid. Default active tab = 'infrastructure'.

// export const brickMortarKeyFeatures = {
//   sectionLabel: 'Platform Features',
//   headline: 'Retail Infrastructure Built for Premium Kashmir Craft in US Markets.',
//   subheadline:
//     'Platform engineered in the US — designed to elevate retailers and vendors with premium Kashmiri handicrafts in physical and digital retail environments.',
//   defaultTab: 'infrastructure',
//   categories: [
//     {
//       id: 'infrastructure',
//       label: 'Exclusive Retail Spaces for Luxury Kashmir Handicrafts',
//       items: [
//         'Seamless vendor integration for premium Kashmiri handicrafts in US retail environments.',
//         'Customisable in-store showcases for high-end artisan collections.',
//         'Centralised inventory tracking for streamlined retail operations across all locations.',
//         'Dedicated premium retail zones exclusively for verified artisan brands.',
//         'Climate-controlled storage for delicate, high-value Kashmiri craftsmanship.',
//         'Networking opportunities directly with top Kashmiri artisan vendors.',
//         'Multi-channel retail visibility for increased customer engagement across all touchpoints.',
//       ],
//     },
//     {
//       id: 'logistics',
//       label: 'Optimised Supply Chain for Luxury Imports',
//       items: [
//         'End-to-end import facilitation for seamless cross-border transactions.',
//         'Customs clearance assistance for smooth product entry into US retail.',
//         'US market packaging and compliance solutions for all craft categories.',
//         'Multi-location retail distribution for expanded national reach.',
//         'AI-driven inventory tracking for real-time product availability management.',
//         'Integrated vendor consignment logistics for high-end goods management.',
//         'Optimised freight services for fragile and premium Kashmiri products.',
//       ],
//     },
//     {
//       id: 'marketing',
//       label: 'Brand Storytelling & Retail Visibility',
//       items: [
//         'Custom marketing and storytelling campaigns for premium Kashmiri craft.',
//         'Celebrity-endorsed campaigns for luxury market positioning and brand elevation.',
//         'Visual merchandising strategies tailored to premium retail buyers.',
//         'In-store and online luxury brand promotions across all channels.',
//         'Exclusive retail exhibitions for high-end product launches and previews.',
//         'VIP-only shopping experiences for affluent and high-net-worth customers.',
//         'Luxury gift catalog integration for specialty stores and seasonal campaigns.',
//       ],
//     },
//     {
//       id: 'engagement',
//       label: 'Curating an Authentic Kashmir Craft Experience',
//       items: [
//         'Live craft demonstrations for immersive in-store customer interaction.',
//         'Cultural experience activations for high-end and discerning clientele.',
//         'AR technology showcases for interactive and immersive product exploration.',
//         'Artisan-trained retail staff providing in-depth product knowledge and provenance.',
//         'In-store exclusive personalised product selection services for premium buyers.',
//         'Wearable craft trials for custom fashion and lifestyle integration.',
//         'Dedicated product feedback collection for continuous retail improvement.',
//       ],
//     },
//     {
//       id: 'loyalty',
//       label: 'Building Long-Term Retail Partnerships',
//       items: [
//         'Exclusive loyalty programmes designed for premium retail partners.',
//         'VIP-tiered access for luxury buyers and high-net-worth clientele.',
//         'Early access to new Kashmiri artisan collections for partner stores.',
//         'Reward-based programmes to boost high-value retail purchases.',
//         'Personalised luxury shopping incentives for repeat customers.',
//         'High-end referral programmes for boutique and specialty clientele.',
//         'Holiday-exclusive Kashmir collections for specialty stores and gifting seasons.',
//       ],
//     },
//     {
//       id: 'financing',
//       label: 'Financial Flexibility & Growth for High-End Retailers',
//       items: [
//         'Zero-risk vendor financing solutions for premium retail buyers.',
//         'Seasonal cash flow support for luxury product acquisitions.',
//         'Flexible payment terms tailored to retail growth strategies.',
//         'High-value layaway plans for large-scale purchase programmes.',
//         'Exclusive financial incentives for flagship store collaborations.',
//         'Working capital solutions for luxury product line expansion.',
//         'Crowdfunding integration for unique artisan-backed retail projects.',
//       ],
//     },
//   ],
// } as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// KPI from cluster file (8.0+). Retention 18 months from specialRules.
// See CLIENT FLAGS 1 and 2.

export const brickMortarEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Brick & Mortar Requires White Label Completion and US Retail Readiness',
  description:
    'Brick & Mortar is the final tier of Brand Expansion and the highest-commitment partnership in the system. Partners entering Brick & Mortar have demonstrated private-label retail capability through White Label and are ready for permanent, managed physical US retail presence.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.0+',
      note: 'Minimum performance score from prior White Label trade.',
    },
    {
      label: 'Retention Period',
      value: '18 months',
      note: 'Extended retention reflects the long-term commitment of physical retail.',
    },
    {
      label: 'Previous Level',
      value: 'White Label',
      note: 'Standard path requires White Label completion within Brand Expansion.',
    },
    {
      label: 'Compliance',
      value: 'KHCRF Retail Readiness Review',
      note: 'Mandatory retail readiness and US placement compliance review for all partners.',
    },
    {
      label: 'Category Declaration',
      value: 'Required at Onboarding',
      note: 'Product category declared at onboarding to prevent overlap with other vendors in the same store.',
    },
  ],
  progressionNote:
    'After completing 18 months at Brick & Mortar with strong performance, partners unlock Packaging — the first Collaborative tier — and move beyond Brand Expansion into cross-partner production and supply collaboration.',
  nextSlug: 'packaging',
  nextSystem: 'collaborative',
  nextLabel: 'Packaging',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() brickmortar block.

export const brickMortarEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Brick & Mortar, your retail readiness, and whether you qualify for faster progression into the Collaborative tier.',
  introCard: {
    icon: 'Target',
    title: 'Brick & Mortar Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your US retail readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Brick & Mortar Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Brick & Mortar',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as BrickMortarAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and retail standards',
          'Exceeds premium retail and flagship store standards',
        ],
        category: 'general' as BrickMortarAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as BrickMortarAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as BrickMortarAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully certified safe workplaces',
        ],
        category: 'general' as BrickMortarAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'white_label_retention',
        question: 'Did you complete 4 months retention in White Label?',
        type: 'single' as BrickMortarQuestionType,
        options: ['No', 'In Progress', 'Yes'],
        category: 'validation' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'white_label_kpi',
        question: 'Did you maintain KPI 8.0 or above in White Label?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'retail_contracts',
        question: 'Do you have approved US retail placement contracts in place?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'retail_readiness_review',
        question: 'Have you passed the KHCRF retail readiness review?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as BrickMortarAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_retail_inventory',
        question: 'Do you have the capacity to maintain consistent US retail inventory levels?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_store_management',
        question: 'Can you manage store-level branding, merchandising, and customer service?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_certifications_retail',
        question: 'Which certifications do you currently hold? Select all that apply.',
        type: 'multiple' as BrickMortarQuestionType,
        options: [
          'GI certification — verified Geographical Indication',
          'KHCRF certification — Kashmiri craft compliance approved',
          'US retail compliance — labelling and safety standards met',
          'Valid passport for US retail travel and events',
        ],
        category: 'vendor' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_retail_readiness',
        question: 'Which of these retail readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as BrickMortarQuestionType,
        options: [
          'US packaging and labelling compliance — retail-grade presentation ready',
          'Shelf replenishment capability — able to maintain stock levels across store locations',
          'Retail pricing strategies — premium pricing and margin structure defined',
        ],
        category: 'vendor' as BrickMortarAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type_retail',
        question: 'What best describes your retail buying or store hosting operation?',
        type: 'single' as BrickMortarQuestionType,
        options: [
          'Retail chain — multiple store locations with established operations',
          'Distributor — placing craft product into third-party retail environments',
          'Lifestyle or boutique store — premium or specialty single-location retail',
        ],
        category: 'buyer' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_shelf_management',
        question: 'Do you currently manage retail shelf allocation and planogram compliance?',
        type: 'yesno' as BrickMortarQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as BrickMortarAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_retail_readiness',
        question:
          'Which of these buyer retail readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as BrickMortarQuestionType,
        options: [
          'Long-term retail partnership commitment — able to commit to 18-month retail agreements',
          'Store compliance with KHCRF guidelines — confirmed awareness and alignment',
          'Marketing and promotion budgets — dedicated retail campaign budget available',
        ],
        category: 'buyer' as BrickMortarAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Brick & Mortar (TIER 2 / L8)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Brick & Mortar + Fast Track to Packaging',
        fastTrackEligible: true,
        nextLevel: 'Packaging',
      },
      21: {
        eligibility: 'Packaging (TIER 3 / L9)',
        fastTrackEligible: true,
        nextLevel: 'Packaging',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 8.0,
        retentionPeriod: '18 months',
      },
      buyer: {
        commitment: null,
        kpiThreshold: 8.0,
        retentionPeriod: '18 months',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Brick & Mortar (TIER 2 / L8)':
          "You're eligible for Brick & Mortar. Build your US physical retail presence from here.",
        'Brick & Mortar + Fast Track to Packaging':
          "Great fundamentals. You're eligible for Brick & Mortar with a fast track to Packaging.",
        'Packaging (TIER 3 / L9)':
          'Exceptional. Your retail record makes you eligible for Packaging via Lateral Entry into the Collaborative tier.',
      },
      nextStepsByOutcome: {
        'Brick & Mortar (TIER 2 / L8)': [
          'Join the Brick & Mortar programme.',
          'Submit retail documentation and US placement credentials.',
          'Complete KHCRF retail readiness review.',
          'Build your US physical retail presence.',
        ],
        'Brick & Mortar + Fast Track to Packaging': [
          'Prepare fast-track documentation for Packaging progression.',
          'Strengthen packaging, shelf replenishment, and retail compliance systems.',
          'Complete advanced KHCRF retail-readiness review.',
          'Align merchandising and store-operations workflows for Collaborative entry.',
        ],
        'Packaging (TIER 3 / L9)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit retail performance records and store operation credentials.',
          'Complete KHCRF Packaging and Collaborative tier review.',
          'Prepare for direct transition into Packaging onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Brick & Mortar (TIER 2 / L8)': [
          'Commitment to US physical retail',
          'Strong Brand Expansion foundation from White Label',
        ],
        'Brick & Mortar + Fast Track to Packaging': [
          'Retail inventory capacity and shelf management',
          'Store-level branding and merchandising capability',
          'Clear Collaborative tier progression trajectory',
        ],
        'Packaging (TIER 3 / L9)': [
          'Full US retail presence established',
          'Strong compliance and KHCRF retail record',
          'Proven physical retail performance',
        ],
      },
      improvementsByOutcome: {
        'Brick & Mortar (TIER 2 / L8)': [
          'Strengthen US packaging and labelling compliance.',
          'Improve retail logistics and shelf replenishment capability.',
          'Pursue GI, KHCRF, and US retail certifications.',
        ],
        'Brick & Mortar + Fast Track to Packaging': [
          'Advance category packaging and replenishment systems.',
          'Strengthen merchandising and store-operations workflows.',
        ],
        'Packaging (TIER 3 / L9)': [],
      },
      defaultStrengths: [
        'Commitment to US physical retail partnerships',
        'Strong Brand Expansion foundation from White Label',
        'Retail inventory and store management capability',
      ],
      defaultDevelopmentAreas: [
        'Strengthen packaging compliance and certification documentation.',
        'Improve retail logistics and shelf replenishment systems.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Store Owner" terminology replaced with "buyer" throughout.

export const brickMortarCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Physical Retail Infrastructure for Kashmir Craft',
  subheadline: 'Premium in-store presence with shared operations and verified supply.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Verified vendors integrated into premium retail environments',
        'Structured agreements covering placement, pricing, and settlement',
        'Compliant retail operations aligned with global standards',
      ],
    },
    {
      title: 'Fulfilment & Support',
      icon: 'Truck',
      items: [
        'Shared POS, staffing, and store operations management',
        'Real-time inventory tracking across all retail locations',
        'Centralised returns and customer service handling',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Sales and footfall analytics across retail locations',
        'Category performance insights for optimisation',
        'Retail data supporting expansion into wholesale and export',
      ],
    },
    {
      title: 'Retail Presence',
      icon: 'Building',
      items: [
        'Premium storefront exposure in high-traffic markets',
        'Cultural storytelling enhancing in-store experience',
        'Omnichannel visibility across physical and digital retail',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Offer authentic Kashmir craft without managing supply chains',
        'Earn commission through curated artisan product placement',
        'Enhance brand identity with heritage-driven retail experiences',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Access premium retail locations with full operational support',
        'Build brand credibility through physical store presence',
        'Increase sales through direct customer exposure',
      ],
    },
  },

  impact: [
    {
      title: 'Retail Expansion',
      description: 'Introducing Kashmir craft into premium global retail environments',
    },
    {
      title: 'Ethical Commerce',
      description: 'Supporting artisan livelihoods through transparent retail partnerships',
    },
    {
      title: 'Cultural Presence',
      description: 'Bringing heritage craftsmanship into physical consumer experiences',
    },
  ],
} as const;

// ─── Comparison Section (NEW) ─────────────────────────────────────────────────
// Source: Screenshots 3/4 (platform) and 6/7 (cost).
// Shared: not role-specific. Two tabs.
// Competitors: Makers Market, 10,000 Villages, Artisan's Marketplace.

export const brickMortarComparison = {
  sectionLabel: 'Platform Comparison',
  headline: 'See How DKC Brick & Mortar Compares',
  subheadline:
    'A transparent look at where DKC Connect stands against alternative retail craft platforms — on features and on cost.',
  defaultTab: 'platform',
  tabs: [
    {
      id: 'platform',
      label: 'Feature Comparison',
      description: 'Compare shared retail capabilities, craft focus, and vendor support standards.',
      parameters: [
        'Shared Retail Spaces',
        'Customisable Displays',
        'Real-Time Tracking',
        'Centralised Warehousing',
        'Phygital Experiences',
        'Omni-Channel Integration',
        'Artisan Training Programmes',
        'Visa and Travel Support',
        'Customs Assistance',
        'Marketing Campaigns',
        'Loyalty Rewards Programmes',
        'Eco-Friendly Workspaces',
        'Cultural Storytelling',
        'Flexible Leasing Options',
        'Seasonal Promotions',
        'Networking Lounges',
        'Packaging and Branding',
        'Customer Engagement',
        'Predictive Sales Analytics',
        'Integrated POS Solutions',
        'Transparent Pricing',
        'High-Value Product',
        'Community Building',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'High',
            'Highly Customisable',
            'Advanced Integration',
            'Available',
            'AR/VR Tools',
            'High',
            'Kashmir Craft-Focused',
            'Fully Facilitated',
            'Seamless',
            'Tailored to Kashmir Crafts',
            'Comprehensive, Tier-Based',
            'Integrated',
            'Extensive Kashmir Focus',
            'Vendor-Specific',
            'Supported',
            'Available',
            'Available',
            'Kashmir Live Demos',
            'Advanced Insights',
            'Seamless',
            'High',
            'Kashmir Crafts',
            'Kashmir Artisan-Oriented',
          ],
        },
        {
          id: 'makers-market',
          name: 'Makers Market',
          highlight: false,
          values: [
            'Limited',
            'Minimal',
            'Limited',
            'Limited',
            'None',
            'Moderate',
            'Minimal',
            'None',
            'Minimal',
            'Minimal',
            'Limited',
            'None',
            'None',
            'Limited',
            'Minimal',
            'None',
            'Limited',
            'Limited',
            'Limited',
            'Moderate',
            'Variable',
            'None',
            'None',
          ],
        },
        {
          id: '10000-villages',
          name: '10,000 Villages',
          highlight: false,
          values: [
            'Moderate',
            'Moderate',
            'Moderate',
            'Limited',
            'None',
            'Low',
            'Limited',
            'None',
            'None',
            'Moderate',
            'Minimal',
            'Limited',
            'Moderate',
            'Variable',
            'Limited',
            'Limited',
            'None',
            'None',
            'None',
            'Limited',
            'Moderate',
            'None',
            'None',
          ],
        },
        {
          id: 'artisans-marketplace',
          name: "Artisan's Marketplace",
          highlight: false,
          values: [
            'Low',
            'Variable',
            'None',
            'None',
            'Low',
            'None',
            'None',
            'None',
            'None',
            'Limited',
            'None',
            'None',
            'Limited',
            'Variable',
            'None',
            'None',
            'None',
            'None',
            'None',
            'None',
            'Limited',
            'Minimal',
            'None',
          ],
        },
      ],
    },
    {
      id: 'cost',
      label: 'Cost Comparison',
      description:
        'Compare retail space fees, commissions, and included services across platforms.',
      parameters: [
        'Brick & Mortar Locations',
        'Vendor Location In Store',
        'Vendor Space Size (sqft)',
        'Monthly Rental Fees',
        'Monthly Maintenance Fees',
        'Monthly Branding Fees',
        'Monthly Utility Fees',
        'Total Yearly Fee',
        'Annual Referral Fee',
        'Annual Listing Fee',
        'Annual Vendor Training Fee',
        'Annual Campaign Fee',
        'Annual POS Fee',
        'Placement Fee (One Time)',
        'Transaction Fee',
        'Store Theme',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'California, Texas, New York, Florida, Illinois, Georgia, Virginia',
            'Back, Main Aisle, Front',
            'Up to 50 / 50–100 / 100–200',
            '$1,000 / $1,300 / $2,500',
            '$250 / $300 / $400',
            '$50 / $100 / $200',
            '$80 / $100 / $150',
            '$16,560 / $21,600 / $38,400',
            '2%',
            '$1 per Item',
            '$150',
            '$500',
            '$100',
            '$500',
            '1%',
            'Kashmir Craft Oriented',
          ],
        },
        {
          id: 'makers-market',
          name: 'Makers Market',
          highlight: false,
          values: [
            'Illinois, Ohio, Georgia, North Carolina, Pennsylvania',
            'Back, Main Aisle, Front',
            'Up to 50 / 50–100 / 100–200',
            '$1,500 / $2,000 / $3,000',
            '$350 / $500 / $700',
            '$200 / $300 / $500',
            '$100 / $150 / $200',
            '$26,400 / $36,600 / $52,800',
            '3%',
            '$12 per Item',
            '$300',
            '$400',
            '$800',
            '$999',
            '2.5%',
            'Global Craft Oriented',
          ],
        },
        {
          id: '10000-villages',
          name: '10,000 Villages',
          highlight: false,
          values: [
            'Pennsylvania, North Carolina, Massachusetts',
            'Back, Main Aisle, Front',
            'Up to 50 / 50–100 / 100–200',
            '$1,700 / $2,100 / $3,200',
            '$250 / $350 / $600',
            '$100 / $150 / $300',
            '$120 / $200 / $250',
            '$25,440 / $34,800 / $50,400',
            '4%',
            '$14 per Item',
            '$200',
            '$400',
            '$800',
            '$1,200',
            '2.9%',
            'Global Craft Oriented',
          ],
        },
        {
          id: 'artisans-marketplace',
          name: "Artisan's Marketplace",
          highlight: false,
          values: [
            'California, Texas, North Carolina, Georgia, Virginia, Colorado',
            'Back, Main Aisle, Front',
            'Up to 50 / 50–100 / 100–200',
            '$1,900 / $2,300 / $3,500',
            '$450 / $500 / $750',
            '$250 / $300 / $400',
            '$150 / $200 / $300',
            '$32,400 / $38,400 / $57,600',
            '5%',
            '$14 per Item',
            '$500',
            '$900',
            '$1,300',
            '$1,400',
            '3%',
            'Global Craft Oriented',
          ],
        },
      ],
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.
// Screenshot 5 content used and enhanced.

// export const brickMortarPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Brick & Mortar partnership offers a unique opportunity to establish physical retail presence in premium US markets — with proven operations, exclusive Kashmir craft access, and comprehensive support for both buyers hosting the collections and vendors supplying them.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Exclusive In-Store Access to Premium Kashmir Craft',
//           description:
//             'Offer customers a curated selection of premium, GI-certified Kashmiri craft within your physical store — providing an exclusive in-person shopping experience for luxury and discerning clientele.',
//         },
//         {
//           title: 'Personalised Concierge-Level Shopping',
//           description:
//             'Buyers receive access to product experts and artisan-trained staff — enabling customers to explore the heritage behind each piece and make informed purchase decisions in-store.',
//         },
//         {
//           title: 'Immediate Purchase and No Shipping Wait',
//           description:
//             'Luxury customers can purchase handcrafted items instantly — no wait times for shipping or fulfilment, providing immediate gratification when acquiring rare and exclusive Kashmiri craft.',
//         },
//         {
//           title: 'Supporting Ethical Retail and Artisan Livelihoods',
//           description:
//             'By featuring Kashmiri crafts in your retail store, you directly support artisans, promote fair trade, and contribute to the preservation of cultural heritage while offering a sustainable shopping choice.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Premium Craft Presence in US Retail',
//           description:
//             'Establish a distinguished retail experience by integrating high-end Kashmiri products into premium US store environments — enhancing positioning as a destination for discerning buyers.',
//         },
//         {
//           title: 'Brand Credibility Through Physical Retail',
//           description:
//             "Hosting authentic Kashmiri products in luxury retail spaces strengthens your brand's appeal — allowing you to showcase rare craftsmanship and exclusive collections to walk-in clientele.",
//         },
//         {
//           title: 'High-Margin Revenue Growth',
//           description:
//             'Luxury retail environments attract affluent customers — creating high-margin sales opportunities while fostering brand loyalty and long-term buyer relationships in premium markets.',
//         },
//         {
//           title: 'Customer Engagement and In-Store Experience',
//           description:
//             'Enhance in-store experiences through craft storytelling, live product demonstrations, and VIP shopping events — driving deeper customer engagement and repeat purchase behaviour.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Expanding Luxury Retail for Kashmir Craft',
//         description:
//           'High-end retail stores elevate Kashmiri craft visibility — introducing an exclusive category of handcrafted luxury products to US consumer markets and establishing a new retail standard.',
//       },
//       {
//         title: 'Job Creation and Ethical Sourcing',
//         description:
//           'By partnering with artisan-led businesses, retailers support sustainable employment — ensuring ethical procurement and fair compensation throughout the Kashmir craft supply chain.',
//       },
//       {
//         title: 'Preserving Cultural Heritage in Retail',
//         description:
//           'Hosting authentic Kashmiri crafts in prestigious retail spaces helps preserve centuries-old artistry — allowing customers to experience and appreciate genuine traditional craftsmanship.',
//       },
//       {
//         title: 'Elevating Store Prestige in Premium Landscapes',
//         description:
//           'Luxury stores featuring authentic, limited-edition Kashmiri crafts stand out in premium retail landscapes — enhancing brand prestige and setting themselves apart as leaders in exclusive, curated retail.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both buyers and vendors.
// IMPORTANT: Brick & Mortar pricing is MONTHLY — different from Exhibition,
// Auction, and White Label which are yearly. This reflects the ongoing
// operational nature of physical retail tenancy.
// Three distinct package names reflecting retail location type.

export const brickMortarPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Monthly Retail Rental. No Hidden Operational Costs.',
  description:
    'Three clear monthly rental packages aligned to US retail location type and market tier. DKC covers operations, staffing, licensing, and compliance — you pay fixed rent and ship inventory.',
  note: 'Vendors are responsible for shipping inventory to store locations. DKC handles all in-store operations from there.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'Brick & Mortar partnerships have no separate onboarding fee. Select a monthly rental package to begin your US retail activation.',
    note: 'Vendors ship inventory to stores at their own cost. Physical exhibition and in-store display materials are coordinated through the platform.',
    badge: 'Monthly Rental — DKC Manages All Store Operations',
  },
  packages: [
    {
      name: 'Local Community Outlet',
      price: '$1,600',
      billingPeriod: 'month',
      features: [
        'Neighbourhood-centric boutique retail exposure',
        'Basic in-store Kashmiri cultural branding',
        'Shared omni-channel integration and online visibility',
        'Standard live store performance dashboard',
      ],
      recommended: false,
    },
    {
      name: 'Lifestyle Mall Store',
      price: '$2,550',
      billingPeriod: 'month',
      features: [
        'Shared section in premium lifestyle mall environment',
        'Seasonal promotional campaigns and marketing support',
        'Enhanced omni-channel visibility across all channels',
        'Priority shelf placement and product curation support',
      ],
      recommended: true,
    },
    {
      name: 'Flagship Showcase Store',
      price: '$4,500',
      billingPeriod: 'month',
      features: [
        'Heritage and cultural zone placement in flagship location',
        'Premium branding, display customisation, and storytelling integration',
        'Dedicated account support and store performance management',
        'VIP buyer events and exclusive product launch access',
      ],
      recommended: false,
    },
  ],
  range: '$1,600–$4,500/month',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from support line.

export const brickMortarTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Shared Retail Technology Built for Physical and Digital Integration',
  description:
    'DKC Connect integrates physical and digital retail through smart space management, inventory synchronisation, omni-channel systems, and real-time store intelligence — purpose-built for premium Kashmir craft retail environments.',
  features: [
    {
      icon: 'Layout',
      title: 'Digital Space Allocation',
      description:
        'Assign vendor retail slots, manage floor mapping, and optimise shared store space allocation through a fully digital floor management system.',
    },
    {
      icon: 'TabletSmartphone',
      title: 'Phygital POS Integration',
      description:
        'Connect offline in-store purchases with digital loyalty programmes, e-commerce platforms, and mobile payment wallets for a unified customer experience.',
    },
    {
      icon: 'Monitor',
      title: 'Smart Digital Signage',
      description:
        'Smart shelf displays, QR-enabled product information panels, and dynamic pricing systems for real-time in-store engagement and promotion.',
    },
    {
      icon: 'RefreshCcw',
      title: 'Cross-Channel Inventory Sync',
      description:
        'Track and synchronise vendor stock levels across physical stores, warehouses, and online sales channels in real time — eliminating stockouts and overstock.',
    },
    {
      icon: 'Radio',
      title: 'In-Store Engagement Beacons',
      description:
        'RFID, NFC, and Bluetooth beacon technology for location-aware in-store promotions, product guidance, and customer engagement triggers.',
    },
    {
      icon: 'Link',
      title: 'Omni-Channel Retail APIs',
      description:
        'Connect physical store systems with online dashboards, vendor management portals, and e-commerce platforms through a unified API layer.',
    },
    {
      icon: 'BarChart2',
      title: 'Real-Time Store Analytics',
      description:
        'Heat maps, dwell time analysis, vendor-level sales insights, and footfall conversion tracking across all shared store locations.',
    },
    {
      icon: 'PieChart',
      title: 'Unified Experience Dashboards',
      description:
        'Monitor offline and online KPIs, campaign performance, customer flow patterns, and vendor-level metrics through a single integrated dashboard.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated retail operations integration for unified physical and digital commerce.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: 12 features — the most comprehensive of any file.
// Relevant to both buyers integrating store systems and vendors managing inventory.
// "Prime Logic Solutions" removed throughout.

export const brickMortarApiIntegration = {
  sectionLabel: 'Retail Integration',
  headline: 'Already In-Store? Go Omni-Channel With DKC.',
  description:
    'Share retail space, unify inventory across physical and digital channels, fulfil from anywhere, and grow your Kashmir craft retail presence faster — through a single integrated omni-channel platform.',
  features: [
    {
      icon: 'FileSignature',
      title: 'Onboarding and Space Contracts',
      description:
        'Digital retail leases, SLAs, compliance documentation, and insurance standardised for all shared storefront arrangements.',
    },
    {
      icon: 'ServerCog',
      title: 'POS and OMS Connectors',
      description:
        'Prebuilt integrations for Shopify POS, Square, Lightspeed, NCR, Oracle Retail, and all major point-of-sale and order management systems.',
    },
    {
      icon: 'Boxes',
      title: 'Inventory and Planogram Management',
      description:
        'Real-time stock tracking, planogram compliance management, RFID inventory counts, and automated shelf replenishment alerts.',
    },
    {
      icon: 'Truck',
      title: 'Ship-from-Store and BOPIS',
      description:
        'Pick, pack, curbside pickup, locker fulfilment, and Buy Online Pick Up In Store workflows with SLA timers and automated carrier label generation.',
    },
    {
      icon: 'TabletSmartphone',
      title: 'Endless Aisle and In-Store Kiosks',
      description:
        'In-store ordering stations, assisted selling tools, QR-linked product catalogs, and clienteling apps for personalised retail experiences.',
    },
    {
      icon: 'Undo2',
      title: 'Returns and BORIS Hub',
      description:
        'Cross-channel returns processing, in-store exchanges, product refurbishment workflows, and full audit-ready return trail documentation.',
    },
    {
      icon: 'CreditCard',
      title: 'Payments, Commissions, and Settlements',
      description:
        'Split tender payment processing, automated commission calculations, tax compliance, and vendor-level payout processing per store.',
    },
    {
      icon: 'LayoutDashboard',
      title: 'Visual Merchandising Control',
      description:
        'Brand zone templates, in-store signage management, compliance photography workflows, and visual merchandising approval processes.',
    },
    {
      icon: 'Users',
      title: 'Staff Operations Suite',
      description:
        'Task management, staff scheduling, training programme delivery, performance dashboards, and role-based access controls for all store staff.',
    },
    {
      icon: 'MessageSquare',
      title: 'Customer Engagement Tools',
      description:
        'Loyalty programme management, in-store events, localised promotional offers, SMS and email push campaigns, and customer review collection.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Compliance and Safety Management',
      description:
        'OSHA compliance, ADA accessibility management, product labelling verification, incident logging, and scheduled store audit workflows.',
    },
    {
      icon: 'BarChart3',
      title: 'Performance Analytics',
      description:
        'Footfall tracking, conversion rate analysis, dwell time monitoring, sales mix reporting, heat mapping, and vendor space allocation optimisation.',
    },
  ],
  support: {
    description:
      'Omni-channel retail integration support covering POS and OMS onboarding, tax engine configuration, planogram management, RFID setup, BOPIS and BORIS workflows, payment processing, sandbox environments, SDKs, and documented SLAs.',
    note: 'Unified commerce layer bridging physical and digital retail for all active Brick & Mortar partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const brickMortarWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active US Retail — Six Steps',
  description:
    'A structured, compliance-governed activation process for physical US retail market entry.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Brick & Mortar application with identity, business details, and White Label completion credentials.',
    },
    {
      step: 2,
      label: 'Confirm Eligibility',
      description:
        'Platform validates KPI from White Label (8.0+ required), KHCRF retail readiness status, and US placement compliance.',
    },
    {
      step: 3,
      label: 'Select Store Package',
      description:
        'Choose between Local Community Outlet, Lifestyle Mall Store, or Flagship Showcase Store based on your retail ambition and budget.',
    },
    {
      step: 4,
      label: 'Choose In-Store Placement',
      description:
        'Select product category, shelf location (Back, Main Aisle, or Front), and vendor space size within the chosen retail environment.',
    },
    {
      step: 5,
      label: 'Category Verification',
      description:
        'Product category confirmed and locked — first onboarded vendor receives category exclusivity within that store location.',
    },
    {
      step: 6,
      label: 'Store Launch and Monitoring',
      description:
        'Retail activation begins. Live dashboard goes live. DKC manages store operations. You monitor performance and ship replenishment inventory.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'packaging',
    system: 'collaborative',
    name: 'Packaging',
    kpiRequired: '8.0+',
    retentionRequired: '18 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const brickMortarFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Brick & Mortar',
  items: [
    {
      question: 'Do I only pay the monthly rent?',
      answer:
        'Yes. The monthly rental package covers your store space allocation. DKC covers all staffing, store licensing, day-to-day operations, and compliance management. You pay rent and ship inventory — nothing else.',
    },
    {
      question: 'Can I take retail space in multiple stores?',
      answer:
        'Yes. Partners can hold space in multiple store locations across different cities — with unique product categories per store to avoid category overlap with other vendors at the same location.',
    },
    {
      question: 'How do I track my store performance?',
      answer:
        'Through a live real-time dashboard delivering sales data, stock levels, footfall metrics, and customer engagement insights — available at all times for every vendor in the shared store network.',
    },
    {
      question: 'What if two vendors want the same product category in the same store?',
      answer:
        'The first vendor onboarded to that store location receives exclusivity for that product category within that store. Category declarations are locked at onboarding to protect all partners from overlap.',
    },
    {
      question: 'Is warehousing and logistics included?',
      answer:
        "DKC manages all in-store operations from the moment inventory arrives at the store. Shipping inventory to the store is the vendor's responsibility. DKC handles all storage, display, and retail operations in-store.",
    },
    {
      question: 'Can vendors visit their store locations?',
      answer:
        'Yes. Visa support documentation is provided for international vendor travel to US store locations. Visa approval is determined by the relevant embassy — DKC provides supporting documentation only and cannot guarantee approval.',
    },
    {
      question: 'What does Brick & Mortar unlock after completion?',
      answer:
        "Completing Brick & Mortar with KPI 8.0+ and 18 months of performance unlocks Packaging — the first Collaborative tier — and marks entry into the platform's highest level of cross-partner production and supply collaboration.",
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.
// Raw file secondaryCtas included /brand-growth and non-registration URLs.
// All CTAs cleaned to /registration or /book-consultation only.

export const brickMortarFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Physical US Retail Presence for Kashmir Craft. Fully Managed. Omni-Channel Ready.',
    description:
      'Fixed monthly rent. DKC-run operations. Live performance dashboards. A retail partnership model that puts authentic Kashmir craft in premium US stores without the operational burden that has kept artisans out of physical retail for too long.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Add Exclusive Kashmir Craft to Your Retail Store?',
      supportingPoints: [
        'Commission revenue on every Kashmir craft sale — no sourcing, supply chain, or compliance to manage.',
        'GI-certified, culturally authentic product collections that differentiate your store from competitors.',
        'DKC handles staffing, licensing, and all store operations from day one.',
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
      headline: 'Ready to Establish Permanent US Physical Retail Presence?',
      supportingPoints: [
        'Pay fixed monthly rent — DKC covers staffing, licensing, operations, and compliance entirely.',
        'GI certification and live inventory tracking on every product in your shared retail space.',
        'Brick & Mortar is the final Brand Expansion step before entry into the Collaborative tier.',
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

export const BRICK_MORTAR = {
  meta: brickMortarMeta,
  heroSection: brickMortarHero,
  overviewSection: brickMortarOverview,
  modelDifferenceSection: brickMortarModelDifference,
  // keyFeaturesSection: brickMortarKeyFeatures,
  eligibilityRulesSection: brickMortarEligibilityRules,
  eligibilityAssessmentSection: brickMortarEligibilityAssessment,
  capabilitiesSection: brickMortarCapabilities,
  comparisonSection: brickMortarComparison,
  // platformAdvantageSection: brickMortarPlatformAdvantage,
  pricingSection: brickMortarPricing,
  technologySection: brickMortarTechnology,
  apiIntegrationSection: brickMortarApiIntegration,
  workflowSection: brickMortarWorkflow,
  faqSection: brickMortarFaq,
  finalCtaSection: brickMortarFinalCta,
} as const;

export type BrickMortarContent = typeof BRICK_MORTAR;
