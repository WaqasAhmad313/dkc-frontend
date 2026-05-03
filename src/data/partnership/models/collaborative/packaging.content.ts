export type PackagingAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type PackagingQuestionType = 'single' | 'multiple' | 'yesno';

export const packagingMeta = {
  slug: 'packaging',
  system: 'collaborative',
  previousSystem: 'brand-growth',
  tier: 3,
  label: 'Packaging',
  pageTitle: 'Packaging Partnerships',
  seoDescription:
    'A collaborative packaging partnership that improves shelf appeal, protection, compliance, and eco-ready presentation for Kashmiri handmade crafts — with branded packaging kits, smart GI-tagged labelling, and global retail-ready solutions.',
  kpiRequired: '8.0+',
  retentionRequired: '18 months at Brick & Mortar',
  previousSlug: 'brick-mortar',
  nextSlug: 'design-collaboration',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['packaging', 'branding', 'eco-friendly', 'compliance', 'retail-ready', 'collaborative'],
} as const;

export const packagingHero = {
  sectionLabel: 'Packaging Partnership',
  shared: {
    badge: 'Collaborative — Tier 3',
    statusChip: 'KPI 8.0+ Required — Brick & Mortar Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Receive Kashmir Craft That Is Shelf-Ready, Compliant, and Beautifully Packaged.',
      description:
        'Source Kashmiri handmade craft that arrives retail-ready — with sustainable packaging, verified GI labelling, international compliance documentation, and premium brand presentation built in. No re-packaging required. No compliance gaps. Direct to shelf.',
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
      headline: 'Give Your Kashmir Craft the Professional Packaging It Deserves.',
      description:
        'Access certified packaging providers, branded packaging kits, eco-compliant materials, and smart GI-tagged labelling — without heavy upfront investment. Elevate your craft presentation, meet global retail standards, and enter premium markets with packaging that tells your heritage story.',
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

export const packagingOverview = {
  sectionLabel: 'Why Packaging',
  headline: 'Making Craft Retail-Ready for Global Markets',
  description:
    'Poor packaging reduces product value and leads to damage, rejection, and lost sales. This pathway ensures consistent, compliant, and retail-ready packaging for global distribution.',
  problems: [
    'Poor packaging leads to damage, rejection, and lost sales',
    'Vendors lack access to premium, compliant packaging standards',
    'Weak packaging prevents entry into high-value retail markets',
    'Costs are high due to lack of structured packaging solutions',
  ],
  solutions: [
    'Standardized packaging aligned with global retail requirements',
    'Access to certified, cost-effective packaging providers',
    'Branded packaging supporting retail presentation and identity',
    'Packaging systems designed for safe and compliant delivery',
  ],
} as const;

export const packagingModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Packaging That Preserves Heritage and Builds Retail Brands.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass production, no unbranded generic packaging. Every solution is tailored to Kashmir craft heritage and the global retail markets it enters.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Certified Packaging Provider Network',
      description:
        'Marketplace connects vendors directly with certified packaging and branding providers — eliminating the cost and complexity of sourcing compliant packaging solutions independently.',
    },
    {
      icon: 'Package',
      title: 'Custom Heritage-Aligned Solutions',
      description:
        'Tailored packaging designed to reflect Kashmiri cultural identity while meeting modern retail standards — preserving artisan authenticity while satisfying premium buyer expectations.',
    },
    {
      icon: 'Shield',
      title: 'Global Retail Compliance Built In',
      description:
        'All packaging solutions meet US, EU, and international retail standards — with FDA compliance, GS1 barcoding, multilingual labels, and CPSIA/REACH certification where applicable.',
    },
    {
      icon: 'Leaf',
      title: 'Eco-Certified Sustainable Materials',
      description:
        'FSC-certified, recycled, and carbon-tracked packaging materials that reduce environmental impact while meeting the eco-packaging requirements of premium global retail buyers.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'Store',
          title: 'Retail Shelf-Ready Product Delivery',
          description:
            'Receive Kashmir craft products that are already packaged, labelled, and compliant — ready for direct retail shelf placement without any additional processing or re-packaging.',
        },
        {
          icon: 'Tag',
          title: 'Consistent Labelling for Simplified Operations',
          description:
            'Access standardised GI-tagged, compliance-verified labelling across all Kashmir craft products — simplifying retail operations, restocking, and category management.',
        },
        {
          icon: 'TrendingUp',
          title: 'Premium Presentation That Reduces Returns',
          description:
            'Proper packaging engineering reduces product damage and return rates — with premium presentation that enhances the customer unboxing experience and drives repeat purchase.',
        },
        {
          icon: 'Users',
          title: 'Eco-Conscious Consumer Appeal',
          description:
            'Source products packaged with sustainable, eco-certified materials — giving your retail offering credibility with eco-conscious consumers and sustainability-driven procurement policies.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Camera',
          title: 'Professional Brand Identity Without Heavy Investment',
          description:
            'Access branded packaging kits, marketing assets, photo shoots, and promotional materials — building a professional retail brand identity at a fraction of the cost of independent development.',
        },
        {
          icon: 'Lock',
          title: 'GI Protection Through Standardised Labelling',
          description:
            'Your GI certification is embedded and protected through standardised packaging and labelling systems — reinforcing authenticity on every product that leaves your workshop.',
        },
        {
          icon: 'DollarSign',
          title: 'Increased Sales Appeal Across Global Markets',
          description:
            'Professional branding and compliant packaging significantly increase perceived product value and buyer acceptance — directly improving sales performance across global retail networks.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Packaging Readiness for Wholesale and Export',
          description:
            'Compliant, professional packaging is the prerequisite for wholesale, export, and retail channel access. This partnership ensures your packaging meets every standard needed for global distribution.',
        },
      ],
    },
  },
} as const;

export const packagingEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Packaging Requires Brick & Mortar Completion and Compliance Readiness',
  description:
    'Packaging is the first tier of the Collaborative system. Partners entering Packaging have completed the full Brand Expansion journey through Brick & Mortar and are ready to collaborate with certified packaging providers, branding specialists, and eco-compliance systems.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.0+',
      note: 'Minimum performance score from prior Brick & Mortar trade.',
    },
    {
      label: 'Retention Period',
      value: '18 months at Brick & Mortar',
      note: 'Full Brick & Mortar retention must be completed before Packaging entry.',
    },
    {
      label: 'Previous Level',
      value: 'Brick & Mortar',
      note: 'Standard path requires Brick & Mortar completion within Brand Expansion.',
    },
    {
      label: 'Compliance',
      value: 'Export Packaging and Eco Certifications',
      note: 'FDA/US/EU export packaging compliance and eco-packaging certifications required.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Packaging with strong performance, partners unlock Design Collaboration — the next Collaborative tier — with cross-partner craft design, cultural storytelling systems, and co-design partnerships.',
  nextSlug: 'design-collaboration',
  nextLabel: 'Design Collaboration',
} as const;

export const packagingEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Packaging, your compliance readiness, and whether you qualify for faster progression into Design Collaboration.',
  introCard: {
    icon: 'Target',
    title: 'Packaging Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your packaging readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Packaging Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Packaging',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as PackagingQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified',
        ],
        category: 'general' as PackagingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as PackagingQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Exceeds export excellence standards',
        ],
        category: 'general' as PackagingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and packaging?',
        type: 'single' as PackagingQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Full zero-waste, carbon-tracked commitment',
        ],
        category: 'general' as PackagingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as PackagingQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Personalised with active feedback loop',
        ],
        category: 'general' as PackagingAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as PackagingQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Fully certified safe workplaces and fair trade',
        ],
        category: 'general' as PackagingAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'brick_mortar_retention',
        question: 'Did you complete 18 months retention in Brick & Mortar?',
        type: 'single' as PackagingQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'brick_mortar_kpi',
        question: 'Did you maintain KPI 8.0 or above in Brick & Mortar?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'export_packaging_compliance',
        question:
          'Do you comply with export packaging and labelling requirements — FDA, US, or EU?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'eco_packaging_certifications',
        question: 'Do you hold eco-packaging and branding certifications?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as PackagingAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_eco_packaging',
        question: 'Can you currently provide eco-friendly packaging materials for your products?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_custom_packaging',
        question: 'Can you customise packaging for different retail chains and export markets?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_branding_consistency',
        question:
          'Do you maintain consistent branding and visual identity across all product lines?',
        type: 'yesno' as PackagingQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these packaging readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as PackagingQuestionType,
        options: [
          'Packaging certification — eco, FDA, or ISO certification in place',
          'Inventory-level labelling compliance — product-level GI and regulatory labels ready',
          'Digital design and branding integration — design systems connected to packaging production',
        ],
        category: 'vendor' as PackagingAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your buying operation?',
        type: 'single' as PackagingQuestionType,
        options: [
          'Retailer — physical or online stores requiring retail-ready packaged product',
          'Distributor — placing product into multiple retail environments',
          'International buyer — importing for overseas markets with specific compliance requirements',
        ],
        category: 'buyer' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity',
        question: 'What is your approximate annual sourcing capacity?',
        type: 'single' as PackagingQuestionType,
        options: ['Under $50,000', '$50,000–$100,000', 'Over $100,000'],
        category: 'buyer' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_packaging_expectations',
        question: 'What are your primary packaging requirements from vendors?',
        type: 'single' as PackagingQuestionType,
        options: [
          'Eco-certified — sustainable, recyclable packaging materials',
          'Luxury — premium presentation for high-end retail environments',
          'Customised branding — private-label packaging with buyer brand identity',
        ],
        category: 'buyer' as PackagingAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these buyer packaging readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as PackagingQuestionType,
        options: [
          'Compliance with import country packaging standards — regulatory requirements confirmed',
          'Branding guidelines for private labels — brand specifications documented and ready',
          'Marketing and storytelling integration — product narrative prepared for packaging use',
        ],
        category: 'buyer' as PackagingAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Packaging (TIER 3 / L9)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Packaging + Fast Track to Design Collaboration',
        fastTrackEligible: true,
        nextLevel: 'Design Collaboration',
      },
      21: {
        eligibility: 'Design Collaboration (TIER 3 / L10)',
        fastTrackEligible: true,
        nextLevel: 'Design Collaboration',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Packaging',
        kpiThreshold: 8.0,
        retentionPeriod: '18 months at Brick & Mortar',
        minCommitment: '4 months at Packaging',
      },
      buyer: {
        commitment: 'Packaging',
        kpiThreshold: 8.0,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Packaging (TIER 3 / L9)':
          "You're eligible for Packaging. Elevate your craft presentation and build toward Design Collaboration from here.",
        'Packaging + Fast Track to Design Collaboration':
          "Great fundamentals. You're eligible for Packaging with a fast track to Design Collaboration.",
        'Design Collaboration (TIER 3 / L10)':
          'Exceptional. Your packaging performance makes you eligible for Design Collaboration via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Packaging (TIER 3 / L9)': [
          'Join the Packaging programme.',
          'Upload packaging design and certification documents.',
          'Complete KHCRF eco-packaging review.',
          'Upgrade to eco-friendly and fully compliant packaging systems.',
        ],
        'Packaging + Fast Track to Design Collaboration': [
          'Prepare fast-track documentation for Design Collaboration progression.',
          'Strengthen packaging systems, labelling, and design integration workflows.',
          'Complete advanced KHCRF compliance and branding review.',
          'Align storytelling and private-label readiness requirements.',
        ],
        'Design Collaboration (TIER 3 / L10)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit advanced branding, packaging, and design system documentation.',
          'Complete KHCRF Design Collaboration progression review.',
          'Prepare for direct transition into Design Collaboration onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Packaging (TIER 3 / L9)': [
          'Commitment to professional packaging standards',
          'Strong Collaborative tier foundation from Brick & Mortar',
        ],
        'Packaging + Fast Track to Design Collaboration': [
          'Eco-packaging and branding consistency capability',
          'Export and retail compliance readiness',
          'Clear Design Collaboration progression trajectory',
        ],
        'Design Collaboration (TIER 3 / L10)': [
          'Full packaging compliance and branding infrastructure',
          'Strong KHCRF and eco-certification record',
          'Design integration and market-facing visual identity',
        ],
      },
      improvementsByOutcome: {
        'Packaging (TIER 3 / L9)': [
          'Strengthen eco-certification and packaging compliance documentation.',
          'Improve branding consistency across all product lines.',
          'Build digital design and branding integration workflows.',
        ],
        'Packaging + Fast Track to Design Collaboration': [
          'Advance design system integration and storytelling readiness.',
          'Strengthen cross-channel brand consistency for Design Collaboration.',
        ],
        'Design Collaboration (TIER 3 / L10)': [],
      },
      defaultStrengths: [
        'Commitment to professional packaging and brand presentation',
        'Strong Brand Expansion foundation from Brick & Mortar',
      ],
      defaultDevelopmentAreas: [
        'Strengthen eco-certifications and packaging compliance.',
        'Improve branding consistency and digital design integration.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve all roles.
// "Service Provider Advantages" renamed to reflect Collaborative tier context.

export const packagingCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Packaging Infrastructure for Global Retail Readiness',
  subheadline: 'Compliant, sustainable packaging enhancing product value and market acceptance.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Vendors connected with certified packaging providers',
        'Standardised contracts defining design and compliance',
        'Packaging aligned with global retail regulations',
      ],
    },
    {
      title: 'Fulfilment & Support',
      icon: 'Truck',
      items: [
        'Centralised packaging design and production systems',
        'Eco-certified materials for sustainable packaging',
        'Distribution-ready packaging for global shipping',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Insights on packaging performance and sales impact',
        'Adaptive solutions across product categories',
        'Packaging readiness enabling export and retail entry',
      ],
    },
    {
      title: 'Brand Enablement',
      icon: 'Briefcase',
      items: [
        'Retail-grade packaging improving product perception',
        'GI-backed labelling reinforcing authenticity',
        'Design storytelling enhancing brand identity',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Receive shelf-ready products with full compliance',
        'Reduced damage and return rates during transit',
        'Eco-friendly packaging aligned with market expectations',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Access professional packaging without high upfront cost',
        'Increase product value through premium presentation',
        'Meet global compliance standards with ease',
      ],
    },
  },

  impact: [
    {
      title: 'Retail Standardisation',
      description: 'Elevating Kashmir craft to global packaging benchmarks',
    },
    {
      title: 'Sustainable Practices',
      description: 'Encouraging eco-friendly production and packaging adoption',
    },
    {
      title: 'Trade Efficiency',
      description: 'Reducing compliance failures and shipment rejections',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const packagingPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Packaging partnership enhances Kashmiri handicrafts with international compliance, eco-certified solutions, and premium retail-ready presentation — giving buyers what they need from supply chains and giving vendors what they need to compete globally.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Retail Shelf-Ready Product Delivery',
//           description:
//             'Receive Kashmir craft products packaged, labelled, and compliant — ready for direct retail shelf placement without re-packaging, relabelling, or additional compliance processing.',
//         },
//         {
//           title: 'Reduced Return Rates Through Proper Standards',
//           description:
//             'Proper packaging engineering reduces product damage during transit and delivery — directly lowering return rates and the operational cost they create in retail operations.',
//         },
//         {
//           title: 'Eco-Conscious Consumer Appeal',
//           description:
//             'Source Kashmir craft in sustainable, eco-certified packaging — giving your retail brand credibility with eco-conscious consumers and satisfying sustainability-driven procurement requirements.',
//         },
//         {
//           title: 'Consistent Labelling for Simplified Retail Operations',
//           description:
//             'Standardised GI-tagged, compliance-verified labelling across all Kashmir craft products simplifies retail operations — making restocking, category management, and compliance audit straightforward.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'International Packaging Compliance Without Complexity',
//           description:
//             'Meet international packaging and labelling compliance requirements — FDA, EU, GS1, CPSIA, REACH — through certified provider partnerships rather than building independent compliance infrastructure.',
//         },
//         {
//           title: 'Increased Product Value Through Professional Packaging',
//           description:
//             'Premium eco-packaging significantly increases perceived product value and buyer acceptance — directly improving sales performance and market positioning across global retail networks.',
//         },
//         {
//           title: 'Reduced Damage and Shipping Losses',
//           description:
//             'Engineered packaging for specific craft categories — carpet rolls, papier-mâché foam inserts, textile wrapping — dramatically reduces damage rates and returns during global shipment.',
//         },
//         {
//           title: 'Acceptance in Mainstream Premium Retail Stores',
//           description:
//             'Professional, compliant packaging is the prerequisite for mainstream premium retail acceptance. This partnership provides exactly the packaging standard that premium retailers require.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Elevating Kashmir Crafts to Global Retail Standards',
//         description:
//           "Structured packaging partnerships raise the entire sector's presentation standard — making Kashmir craft genuinely competitive in global retail environments that mass-market products dominate.",
//       },
//       {
//         title: 'Encouraging Eco-Friendly Production Practices',
//         description:
//           "Wide adoption of eco-certified packaging across the Kashmir craft sector encourages sustainable production practices — building the industry's environmental credibility globally.",
//       },
//       {
//         title: 'Reducing Trade Rejections and Compliance Failures',
//         description:
//           'Poor packaging compliance is one of the leading causes of Kashmir craft trade rejections at customs and retail entry. This partnership eliminates that barrier sector-wide.',
//       },
//       {
//         title: 'Heritage Branding Through Professional Retail Packaging',
//         description:
//           'Professional packaging that tells the Kashmir craft heritage story — through design, labels, and cultural storytelling assets — builds authentic brand recognition in global consumer markets.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// Packaging has a $200 one-time onboarding fee (like Wholesale and Import/Export).
// Yearly billing — same as Exhibition, Auction, White Label.
// See CLIENT FLAGS 2 and 3.

export const packagingPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Packaging Excellence.',
  description:
    'Three clear yearly package tiers covering packaging solution access, branded kit complexity, and compliance support depth. One-time onboarding fee covers branding setup and packaging template creation.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Packaging partnership.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $200 one-time onboarding fee covers branding setup, initial packaging template creation, and platform configuration for packaging operations.',
    note: 'Annual package fees apply after onboarding is complete.',
    badge: 'Required for All Packaging Partners',
  },
  packages: [
    {
      name: 'Standard',
      price: '$150',
      billingPeriod: 'year',
      features: [
        'Access to eco-friendly standard packaging templates',
        'GI and craft authenticity labelling included',
        'Basic branded packaging options',
        'Standard compliance documentation support',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Branded packaging kit — logos, labels, and co-branding',
        'Smart packaging with carbon footprint metrics',
        'Priority access to premium logistics packaging handling',
        'Marketing asset creation support',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$500',
      billingPeriod: 'year',
      features: [
        'Fully customised heritage packaging solutions',
        'Blockchain-linked packaging authenticity receipts',
        'AR and VR product preview integration for buyers',
        'Dedicated packaging compliance consultant',
      ],
      recommended: false,
    },
  ],
  range: '$150–$500/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// Raw file had non-standard icons — replaced with valid Lucide equivalents:
//   Blockchain → Link2
//   Document   → FileText
//   Leaf       → Sprout
//   Thermometer → Thermometer (valid Lucide icon, kept)
//   Map        → Map (valid, kept)
// Support line from raw file is clean — no Prime Logic reference. Preserved.

export const packagingTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Packaging Protection Framework',
  description:
    'Every packaged Kashmir craft is safeguarded by a multi-layer protection system combining blockchain authentication, GI certification, transit insurance, and global compliance documentation.',
  features: [
    {
      icon: 'Link2',
      title: 'Blockchain Packaging Receipts',
      description:
        'Digital packaging receipts linked to blockchain records — providing secure, immutable traceability from packaging origin to final delivery destination.',
    },
    {
      icon: 'Tag',
      title: 'GI Authentication Tags',
      description:
        'Scannable authenticity tags embedded into every package — verifying GI certification and product origin for buyers, retailers, and customs officials globally.',
    },
    {
      icon: 'Lock',
      title: 'Tamper-Proof Security Seals',
      description:
        'Tamper-evident seals protect Kashmir craft product integrity throughout transit — providing buyers with clear visual confirmation of uncompromised packaging.',
    },
    {
      icon: 'Shield',
      title: 'Transit Insurance Coverage',
      description:
        'Comprehensive insurance coverage included against transit damage, loss, and theft — protecting vendor revenue and buyer procurement from shipping risk.',
    },
    {
      icon: 'FileText',
      title: 'Export Compliance Documentation',
      description:
        'Standardised export compliance documents automatically generated for every packaged shipment — accelerating customs clearance and reducing regulatory delays globally.',
    },
    {
      icon: 'Sprout',
      title: 'Carbon Certification',
      description:
        'Carbon-certified packaging and shipments with verified environmental impact data — supporting eco-conscious buyer procurement requirements and sustainability reporting.',
    },
    {
      icon: 'Thermometer',
      title: 'Specialist Temperature Packaging',
      description:
        'Specialised packaging solutions for temperature-sensitive or climate-affected Kashmiri craft — ensuring product quality is maintained through all shipping conditions.',
    },
    {
      icon: 'Map',
      title: 'Real-Time Shipment Tracking',
      description:
        'End-to-end shipment tracking from packaging origin through every transit point to final delivery — with live status updates accessible to both buyers and vendors.',
    },
  ],
  support:
    'Every packaging solution ensures craft safety, regulatory compliance, and authentic presentation across all global markets.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to vendors managing packaging production and buyers managing compliance.
// 12 features preserved from raw file.
// "Prime Logic Solutions" removed from support.

export const packagingApiIntegration = {
  sectionLabel: 'Packaging Integration',
  headline: 'Already Packaging for Retail? Accelerate With DKC.',
  description:
    'Simplify end-to-end packaging workflows — from design compliance and eco-material sourcing to quality checks, logistics readiness, and retail catalog syndication — through a single integrated packaging platform.',
  features: [
    {
      icon: 'Package',
      title: 'Brand and Compliance Management',
      description:
        'Manage NDAs, co-brand agreements, territory rights, pricing structures, and full sustainability compliance records for all packaging relationships.',
    },
    {
      icon: 'LayoutTemplate',
      title: 'Design Dielines and Templates',
      description:
        'Access structured dielines, packaging specifications, material finishes, tolerance definitions, and accessibility guideline compliance documentation.',
    },
    {
      icon: 'Workflow',
      title: 'Artwork Versioning and Approval Workflow',
      description:
        'Structured artwork versioning, multi-stakeholder approval stages, annotation management, IP rights tracking, export formats, and full audit trail.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Label Compliance Automation',
      description:
        'Automated GI and KHCRF label compliance, CPSIA and REACH certification, EPR regulatory requirements, safety warnings, and multilingual label panel generation.',
    },
    {
      icon: 'Barcode',
      title: 'Barcode and Traceability System',
      description:
        'Generate UPC, EAN, ITF-14, SSCC barcodes and QR and NFC tags for full product traceability, retail compliance, and buyer engagement integration.',
    },
    {
      icon: 'Leaf',
      title: 'Eco-Material Sourcing and Certification',
      description:
        'FSC-certified and recycled stock management, eco-ink and adhesive compliance, and full carbon footprint data certification per packaging SKU.',
    },
    {
      icon: 'Printer',
      title: 'Colour Proofing and Print Management',
      description:
        'Soft and hard proof management, Pantone target matching, ICC colour profile management, and print curve calibration for consistent production output.',
    },
    {
      icon: 'ShoppingCart',
      title: 'Packaging Vendor Bidding',
      description:
        'RFQ management, vendor scoring and qualification, volume pricing breaks, SLA definitions, and reservation management for packaging supply contracts.',
    },
    {
      icon: 'CheckCircle',
      title: 'Quality Control and Audit',
      description:
        'AQL inspection plans, production audit workflows, carton compression testing, and defect pattern analytics for continuous packaging quality improvement.',
    },
    {
      icon: 'Truck',
      title: 'Logistics-Ready Packaging',
      description:
        'ISTA certification compliance, DIM weight optimisation, pallet layout engineering, and fragile product handling specifications built into every packaging design.',
    },
    {
      icon: 'Database',
      title: 'Retail Catalog Synchronisation',
      description:
        'Publish SKU attributes, packaging certifications, compliance documentation, and product media to retailer portals and e-commerce platforms seamlessly.',
    },
    {
      icon: 'TrendingUp',
      title: 'Packaging Cost and Impact Analytics',
      description:
        'Track unit packaging costs, material reclaim rates, shelf impact metrics, return rate reduction data, and full packaging KPI performance dashboard.',
    },
  ],
  support: {
    description:
      'Packaging integration support covering DAM and PIM onboarding, artwork versioning systems, GS1 and EPR compliance configuration, printer and ERP system mappings, sandbox environments, SDKs, and documented SLAs.',
    note: 'Sandbox environments, SDKs, and SLAs included for all active Packaging partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const packagingWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Packaging Partnership — Five Steps',
  description:
    'A structured, compliance-driven activation process for professional Kashmir craft packaging.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Packaging application with identity, business details, and Brick & Mortar completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Check',
      description:
        'Platform validates KPI from Brick & Mortar (8.0+ required), packaging compliance status, and eco-certification readiness.',
    },
    {
      step: 3,
      label: 'Packaging Setup',
      description:
        'Brand setup, packaging template creation, compliance documentation preparation, and packaging provider matching.',
    },
    {
      step: 4,
      label: 'Activation',
      description:
        'Packaging solutions go live. Vendors begin shipping in compliant, branded packaging. Buyers receive retail-ready products.',
    },
    {
      step: 5,
      label: 'Growth and Progression',
      description:
        'Packaging performance tracked. With 4 months and strong KPI, partners unlock Design Collaboration — the next Collaborative tier.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'design-collaboration',
    name: 'Design Collaboration',
    kpiRequired: '8.0+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const packagingFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Packaging',
  items: [
    {
      question: 'Do I need prior retention before joining Packaging?',
      answer:
        'Yes. A minimum of 18 months in Brick & Mortar with KPI 8.0+ is required for the standard path. KHCRF lateral evaluation can bypass this for qualified partners with strong packaging compliance records.',
    },
    {
      question: 'Can I use my own existing packaging?',
      answer:
        "Your own packaging can be used provided it meets platform-approved compliance standards. DKC's packaging review will confirm whether existing packaging meets GI labelling, FDA, and retail compliance requirements.",
    },
    {
      question: 'How does GI tagging work in packaging?',
      answer:
        'Each package carries a scannable GI label that verifies product authenticity and origin. Buyers, retailers, and customs authorities can scan the label to access the full GI certification and blockchain provenance record.',
    },
    {
      question: 'What if my craft requires specialist packaging?',
      answer:
        'Specialist options are available for all major Kashmir craft categories — carpet rolls for rugs, papier-mâché foam inserts for decorative items, textile fold-protection for Pashmina and shawls. Specialist requirements are assessed during setup.',
    },
    {
      question: 'Does professional packaging increase my export costs?',
      answer:
        'No — it reduces them. Proper packaging engineering reduces product damage rates, customs compliance failures, and return processing costs. The net effect on export costs is consistently positive.',
    },
    {
      question: 'What does Packaging unlock after completion?',
      answer:
        'Completing 4 months at Packaging with strong performance unlocks Design Collaboration — the next Collaborative tier — with cross-partner craft design workflows, cultural storytelling systems, and co-design partnerships.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const packagingFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Professional Packaging. Heritage-Protected. Retail-Ready.',
    description:
      'Sustainable, GI-tagged, branded, and compliant — packaging that gives Kashmiri handmade craft the presentation it deserves and the retail credibility it needs to compete globally.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Receive Kashmir Craft That Arrives Shelf-Ready?',
      supportingPoints: [
        'GI-tagged, compliance-verified packaging — direct to retail shelf, no re-processing needed.',
        'Eco-certified materials that satisfy sustainability-driven procurement requirements.',
        'Reduced damage rates, lower returns, and consistent labelling across all product categories.',
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
      headline: 'Ready to Give Your Kashmir Craft Professional Retail-Grade Packaging?',
      supportingPoints: [
        'Branded packaging kits, compliance documentation, and GI labelling — without heavy upfront cost.',
        'Eco-certified, internationally compliant packaging that opens premium retail and export markets.',
        'Packaging readiness is the foundation for Design Collaboration and every Collaborative tier ahead.',
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

export const PACKAGING = {
  meta: packagingMeta,
  heroSection: packagingHero,
  overviewSection: packagingOverview,
  modelDifferenceSection: packagingModelDifference,
  eligibilityRulesSection: packagingEligibilityRules,
  eligibilityAssessmentSection: packagingEligibilityAssessment,
  capabilitiesSection: packagingCapabilities,
  // platformAdvantageSection: packagingPlatformAdvantage,
  pricingSection: packagingPricing,
  technologySection: packagingTechnology,
  apiIntegrationSection: packagingApiIntegration,
  workflowSection: packagingWorkflow,
  faqSection: packagingFaq,
  finalCtaSection: packagingFinalCta,
} as const;

export type PackagingContent = typeof PACKAGING;
