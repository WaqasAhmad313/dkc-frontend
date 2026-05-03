export type DesignCollaborationAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type DesignCollaborationQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const designCollaborationMeta = {
  slug: 'design-collaboration',
  system: 'collaborative',
  tier: 3,
  label: 'Design Collaboration',
  pageTitle: 'Design Collaboration Partnerships',
  seoDescription:
    'A collaborative co-creation pathway where Kashmiri artisans and global buyers design original handmade products together — with IP protection, blockchain authentication, secure digital workflows, and market-ready development support.',
  kpiRequired: '8.0+',
  retentionRequired: '4 months at Packaging',
  previousSlug: 'packaging',
  nextSlug: 'storytelling-media',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: [
    'co-creation',
    'design',
    'ip-protection',
    'innovation',
    'collaborative',
    'custom-products',
  ],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer co-creates exclusive product lines with artisan vendors.
// Vendor gains structured access to modern design methods, IP protection,
// and global design partners.

export const designCollaborationHero = {
  sectionLabel: 'Design Collaboration Partnership',
  shared: {
    badge: 'Collaborative — Tier 3',
    statusChip: 'KPI 8.0+ Required — Packaging Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Co-Create Exclusive Kashmir Craft Collections That No Competitor Can Source.',
      description:
        'Partner directly with master Kashmiri artisans to design original, custom product lines — from initial concept through prototype to market-ready collection. Every co-created design is IP-protected, blockchain-authenticated, and exclusively yours under governed co-creation contracts.',
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
      headline: 'Co-Create With Global Design Partners. Protect Your Work. Reach Premium Markets.',
      description:
        'Collaborate with global buyers and design partners to develop original product lines that blend Kashmiri craft heritage with contemporary market demand — with your intellectual property secured through blockchain authentication, copyright registration, and KHCRF compliance from the moment co-creation begins.',
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

export const designCollaborationOverview = {
  sectionLabel: 'Why Design Collaboration',
  headline: 'Enabling Structured Craft Co-Creation',
  description:
    'Design collaboration between buyers and artisans lacks structure and protection. This pathway enables secure co-creation, scalable development, and market-ready design outcomes.',
  problems: [
    'Buyers have limited customization in traditional craft sourcing',
    'Vendors lack support to develop market-ready designs',
    'Co-created designs lack protection against copying and misuse',
    'No structured system exists for large-scale collaboration',
  ],
  solutions: [
    'Platform for secure co-creation between buyers and artisans',
    'Support for developing designs into market-ready products',
    'Protection systems for co-created intellectual property',
    'Scalable workflows for ongoing design partnerships',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// "Partner" terminology replaced with buyer throughout.
// Sparkles icon kept — valid Lucide icon.

export const designCollaborationModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Structured Co-Creation. Full IP Protection. Commercially Ready.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass production, no design work without IP protection. Every co-created design is blockchain-secured from the first sketch.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Design Partner Network',
      description:
        'Platform connects Kashmiri craft vendors with global design experts, innovation partners, and buyers seeking co-creation — with governed contracts, IP rights, and royalty structures defined from day one.',
    },
    {
      icon: 'Brush',
      title: 'Heritage-Meets-Modern Design Integration',
      description:
        'Combines deep Kashmiri artisan skills with contemporary design methodologies — creating products that are rooted in cultural heritage yet positioned for modern global retail and luxury markets.',
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Labs and Co-Creation Workshops',
      description:
        'Hybrid physical-digital innovation labs enable secure co-creation workshops between artisans and buyers — with CAD tools, AR/VR previews, and prototype tracking built into every design workflow.',
    },
    {
      icon: 'BarChart3',
      title: 'Market Intelligence for Design Direction',
      description:
        'AI-powered demand data aligns co-created designs with real consumer trends and retail market demand — ensuring every collaboration produces commercially viable, market-ready product lines.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'Sparkles',
          title: 'Exclusive Collections No Competitor Can Access',
          description:
            'Co-created designs are IP-protected and exclusively yours — giving you unique product lines with genuine artisan provenance that no competitor can source, replicate, or position against.',
        },
        {
          icon: 'TrendingUp',
          title: 'Retail Differentiation Through Cultural Co-Branding',
          description:
            'Products co-created with Kashmiri master artisans carry authentic cultural storytelling that differentiates your retail brand — building narrative-rich collections that resonate with discerning consumers.',
        },
        {
          icon: 'Award',
          title: 'Adaptable Design for Your Market',
          description:
            'Collaborate directly with artisans to adapt traditional Kashmir craft patterns, finishes, and forms to suit your specific retail market — from luxury home décor to contemporary fashion.',
        },
        {
          icon: 'Users',
          title: 'Flexible Innovation With Artisan Expertise',
          description:
            'Iterate designs collaboratively with artisan input, prototype runs, and market testing — with full buyer control over final product specifications, packaging, and launch timeline.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Access to Modern Design Methods and Global Markets',
          description:
            'Gain structured exposure to contemporary design practices, global buyer requirements, and market-driven product development — building the design capability that premium export and retail markets demand.',
        },
        {
          icon: 'Lock',
          title: 'Full IP Protection on Every Co-Created Design',
          description:
            'Your craft originality is protected through KHCRF compliance, blockchain-based IP frameworks, copyright registration, and DRM — ensuring no co-created design can be used without your governed consent.',
        },
        {
          icon: 'DollarSign',
          title: 'Premium Pricing for Exclusive Collaborative Designs',
          description:
            'Co-created exclusive designs command significantly higher market pricing than standard craft — elevating artisan earnings, building buyer loyalty, and establishing long-term design partnership revenue.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Design Innovation as a Pathway to Premium Markets',
          description:
            'Design collaboration builds the creative track record and IP portfolio that prepares vendors for premium export, franchise, and institutional partnership entry across global markets.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values from cluster file and specialRules (KPI 8.0+, 4 months Packaging).
// See CLIENT FLAG 1.

export const designCollaborationEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Design Collaboration Requires Packaging Completion and Creative Readiness',
  description:
    'Design Collaboration is the second tier of the Collaborative system. Partners entering Design Collaboration have completed structured packaging compliance through the Packaging partnership and are ready for governed artisan-buyer co-creation with IP protection.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.0+',
      note: 'Minimum performance score from prior Packaging trade.',
    },
    {
      label: 'Retention Period',
      value: '4 months at Packaging',
      note: 'Full Packaging retention must be completed before Design Collaboration entry.',
    },
    {
      label: 'Previous Level',
      value: 'Packaging',
      note: 'Standard path requires Packaging completion within the Collaborative tier.',
    },
    {
      label: 'Compliance',
      value: 'Co-Creation Agreements and Digital Design Integration',
      note: 'Active co-creation agreements and digital design file integration required at entry.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Design Collaboration with strong performance, partners unlock Storytelling & Media — the next Collaborative tier — with campaign-ready content, heritage narrative systems, and digital media partnerships.',
  nextSlug: 'storytelling-media',
  nextLabel: 'Storytelling & Media',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() designcollaboration block.

export const designCollaborationEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Design Collaboration, your co-creation readiness, and whether you qualify for faster progression into Storytelling & Media.',
  introCard: {
    icon: 'Target',
    title: 'Design Collaboration Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your co-creation readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Design Collaboration Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Design Collaboration',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified',
        ],
        category: 'general' as DesignCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Exceeds export excellence standards',
        ],
        category: 'general' as DesignCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and design?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Full zero-waste, carbon-tracked commitment',
        ],
        category: 'general' as DesignCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Personalised with active feedback loop',
        ],
        category: 'general' as DesignCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Fully certified safe workplaces and fair trade',
        ],
        category: 'general' as DesignCollaborationAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'packaging_retention',
        question: 'Did you complete 4 months retention in Packaging?',
        type: 'single' as DesignCollaborationQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'packaging_kpi',
        question: 'Did you maintain KPI 8.0 or above in Packaging?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'co_creation_agreements',
        question: 'Do you have active co-creation agreements with designers or buyers?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'digital_design_integration',
        question:
          'Have you integrated digital design files — CAD, 3D modelling, or API-ready formats?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_design_resources',
        question: 'Do you have dedicated R&D or design resources within your craft operation?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_co_develop_designs',
        question: 'Can you co-develop new designs with global buyers or design partners?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_limited_edition',
        question: 'Are you capable of producing limited-edition or experimental craft runs?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these co-creation readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as DesignCollaborationQuestionType,
        options: [
          'Design IP protection policies — formal IP governance documentation in place',
          'Prototype development capacity — able to produce design samples and test runs',
          'Integration with buyer design systems — able to receive and work with design briefs',
        ],
        category: 'vendor' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your design collaboration buying operation?',
        type: 'single' as DesignCollaborationQuestionType,
        options: [
          'Luxury retailer — seeking exclusive co-created Kashmir craft product lines',
          'Lifestyle brand — integrating artisan craft into brand identity and collections',
          'Interior design firm — sourcing custom, co-designed Kashmir craft for clients',
        ],
        category: 'buyer' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_exclusive_collections',
        question: 'Do you require exclusive or semi-exclusive co-branded co-created collections?',
        type: 'yesno' as DesignCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these buyer co-creation readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as DesignCollaborationQuestionType,
        options: [
          'Ability to commit to long-term design collaborations — multi-season or annual agreements',
          'Marketing budgets for co-branded product lines — campaign resources allocated',
          'Commitment to protecting artisan design IP — aligned with platform IP governance policies',
        ],
        category: 'buyer' as DesignCollaborationAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Design Collaboration (TIER 3 / L10)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Design Collaboration + Fast Track to Storytelling & Media',
        fastTrackEligible: true,
        nextLevel: 'Storytelling & Media',
      },
      21: {
        eligibility: 'Storytelling & Media (TIER 3 / L11)',
        fastTrackEligible: true,
        nextLevel: 'Storytelling & Media',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Design Collaboration',
        kpiThreshold: 8.0,
        retentionPeriod: '4 months at Packaging',
        minCommitment: '4 months at Design Collaboration',
      },
      buyer: {
        commitment: 'Design Collaboration',
        kpiThreshold: 8.0,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Design Collaboration (TIER 3 / L10)':
          "You're eligible for Design Collaboration. Build your co-creation capability and progress toward Storytelling & Media from here.",
        'Design Collaboration + Fast Track to Storytelling & Media':
          "Great fundamentals. You're eligible for Design Collaboration with a fast track to Storytelling & Media.",
        'Storytelling & Media (TIER 3 / L11)':
          'Exceptional. Your design collaboration record makes you eligible for Storytelling & Media via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Design Collaboration (TIER 3 / L10)': [
          'Join the Design Collaboration programme.',
          'Enrol in the Readiness Programme (RP).',
          'Build prototype labs and artisan-buyer co-creation workflows.',
          'Strengthen digital design collaboration and IP protection capacity.',
        ],
        'Design Collaboration + Fast Track to Storytelling & Media': [
          'Prepare fast-track documentation for Storytelling & Media progression.',
          'Strengthen IP protections, prototype systems, and collaborative design workflows.',
          'Complete advanced KHCRF co-creation and rights-readiness review.',
          'Align content-ready product storytelling systems for media activation.',
        ],
        'Storytelling & Media (TIER 3 / L11)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit co-creation and design portfolio documentation.',
          'Complete KHCRF narrative design and media-readiness progression review.',
          'Prepare for direct transition into Storytelling & Media onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Design Collaboration (TIER 3 / L10)': [
          'Solid design foundation and co-creation potential',
          'Strong Collaborative tier foundation from Packaging',
        ],
        'Design Collaboration + Fast Track to Storytelling & Media': [
          'IP protection readiness',
          'Prototype development and digital design integration',
          'Clear Storytelling & Media progression trajectory',
        ],
        'Storytelling & Media (TIER 3 / L11)': [
          'Full co-creation and IP governance capability',
          'Strong KHCRF compliance and design rights record',
          'Campaign-ready design assets and content systems',
        ],
      },
      improvementsByOutcome: {
        'Design Collaboration (TIER 3 / L10)': [
          'Enhance IP safeguards and design rights documentation.',
          'Build prototype development capacity and digital design integration.',
          'Develop co-creation agreements and buyer design brief workflows.',
        ],
        'Design Collaboration + Fast Track to Storytelling & Media': [
          'Advance content-ready storytelling systems for media tier.',
          'Strengthen campaign-ready design assets and narrative documentation.',
        ],
        'Storytelling & Media (TIER 3 / L11)': [],
      },
      defaultStrengths: [
        'Solid design foundation and co-creation potential',
        'Strong Collaborative tier progression from Packaging',
      ],
      defaultDevelopmentAreas: [
        'Enhance IP safeguards and design protection documentation.',
        'Build prototype development and digital design collaboration capacity.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Design Partner Advantages" renamed to "Buyer and Design Partner Advantages".

export const designCollaborationCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Co-Creation Infrastructure for Kashmir Craft Innovation',
  subheadline: 'Secure design collaboration blending tradition with global innovation.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Artisans connected with global design partners',
        'Smart contracts managing IP rights and royalties',
        'Blockchain-backed ownership of co-created designs',
      ],
    },
    {
      title: 'Design Protection',
      icon: 'Shield',
      items: [
        'Secure co-creation environments with IP protection',
        'AI and blockchain tools verifying design originality',
        'Audit trails ensuring transparent ownership records',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Demand insights for co-created product success',
        'Revenue tracking across design collaborations',
        'Expansion into premium global market segments',
      ],
    },
    {
      title: 'Innovation Enablement',
      icon: 'Palette',
      items: [
        'Collaborative product development with global designers',
        'Cultural integration with modern design trends',
        'Exclusive design outputs for premium positioning',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Exclusive co-created product lines with full IP protection',
        'Differentiation through authentic cultural collaboration',
        'Market-aligned designs with artisan expertise',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Premium pricing through exclusive design collaborations',
        'Skill development via global design partnerships',
        'Stronger brand positioning through innovation',
      ],
    },
  },

  impact: [
    {
      title: 'Innovation Growth',
      description: 'Expanding product diversity while preserving craft identity',
    },
    {
      title: 'Global Collaboration',
      description: 'Building cross-cultural design partnerships worldwide',
    },
    {
      title: 'Creative Economy',
      description: 'Positioning Kashmir as a hub for craft innovation',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const designCollaborationPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Design Collaboration partnership enables co-creation between Kashmiri artisans and global buyers — fostering product innovation while preserving heritage identity and unlocking premium pricing opportunities for both sides.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Exclusive Co-Created Product Lines',
//           description:
//             'Develop exclusive product lines that no competitor can access — designed in direct collaboration with master Kashmiri artisans, protected under IP contracts, and available only to you.',
//         },
//         {
//           title: 'Competitive Advantage Through Cultural Co-Branding',
//           description:
//             'Gain genuine competitive advantage with authentic co-branded Kashmir craft products — carrying artisan provenance, cultural storytelling, and design exclusivity that generic sourcing cannot replicate.',
//         },
//         {
//           title: 'Market-Aligned Design With Artisan Expertise',
//           description:
//             'Adapt Kashmiri craft patterns, finishes, and forms to align with your specific retail market design trends — with direct artisan input, prototype iterations, and flexible innovation processes.',
//         },
//         {
//           title: 'Enriched Brand Storytelling Through Collaboration',
//           description:
//             'Enhance your brand narrative with authentic artisan collaboration stories — creating marketing content, product provenance, and campaign material that resonates with premium consumer audiences.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Premium Pricing for Exclusive Collaborative Designs',
//           description:
//             'Co-created exclusive designs command premium market pricing — elevating artisan earnings, building long-term buyer loyalty, and establishing recurring collaborative design contract revenue.',
//         },
//         {
//           title: 'New Skills From International Design Partnerships',
//           description:
//             'Learn contemporary design methods, international market preferences, and modern product development practices — building the creative capability that premium global markets demand from artisans.',
//         },
//         {
//           title: 'Stronger Artisan Reputation Through Innovation',
//           description:
//             'Position your craft business as an innovative, collaborative, globally-competitive Kashmiri brand — not just a traditional craft producer — through demonstrated co-creation and IP-protected design work.',
//         },
//         {
//           title: 'Long-Term Loyal Design Collaborator Relationships',
//           description:
//             'Build stable, recurring relationships with global design partners and buyers through structured co-creation contracts — creating predictable revenue and multi-season collaborative design pipelines.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Innovation Without Losing Traditional Identity',
//         description:
//           "Structured design collaboration promotes product innovation while KHCRF governance and blockchain protection ensure Kashmir's traditional craft identity and heritage patterns are preserved throughout.",
//       },
//       {
//         title: 'Expanded Product Diversity for Global Markets',
//         description:
//           "Co-created product ranges diversify Kashmir's craft offering — expanding market adaptability and reducing the sector's dependency on a narrow set of traditional product categories.",
//       },
//       {
//         title: 'Cross-Cultural Design Linkages With International Industries',
//         description:
//           'Structured artisan-buyer collaborations build genuine cross-cultural design relationships — positioning Kashmir as a trusted, creative partner in global fashion, interior design, and luxury markets.',
//       },
//       {
//         title: 'Kashmir as a Hub for Craft Innovation',
//         description:
//           'A governed co-creation ecosystem with IP protection positions Kashmir as a globally recognised hub for authentic craft innovation — attracting premium design partners and institutional collaborators.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// $300 one-time onboarding fee covers IP registration, contracts, and secure hosting.
// Yearly billing. See CLIENT FLAGS 2 and 3.

export const designCollaborationPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Protected Co-Creation.',
  description:
    'Three clear yearly package tiers covering co-creation access, IP protection depth, and design support services. One-time onboarding fee covers contract setup, IP registration, and secure design hosting.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Design Collaboration partnership.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $300 one-time onboarding fee covers co-creation contract setup, IP registration, and secure design hosting infrastructure configuration.',
    note: 'Annual package fees apply after onboarding is complete.',
    badge: 'Required for All Design Collaboration Partners',
  },
  packages: [
    {
      name: 'Standard',
      price: '$75',
      billingPeriod: 'year',
      features: [
        'Access to artisan-buyer co-creation hub',
        'Secure encrypted design file hosting',
        'DRM and reverse image protection',
        'Standard IP compliance documentation',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$150',
      billingPeriod: 'year',
      features: [
        'Expanded co-creation design partner pool',
        'Branded co-creation packaging options',
        'Geographical distribution licensing management',
        'Priority exhibition and showcase placement',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Dedicated design collaboration consultant',
        'Full copyright registration coverage globally',
        'Priority global IP infringement monitoring alerts',
        'Legal action framework and enforcement coverage',
      ],
      recommended: false,
    },
  ],
  range: '$75–$300/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// All 8 icons are valid Lucide icons — preserved from raw file.
// Support line is clean — no Prime Logic reference — preserved as-is.

export const designCollaborationTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Design Protection Framework',
  description:
    "Every co-created Kashmir craft design is secured under DKC's Partnership Protection Suite — providing blockchain authentication, global monitoring, and legal enforcement infrastructure from first concept.",
  features: [
    {
      icon: 'ShieldCheck',
      title: 'Design Authentication',
      description:
        'Blockchain-based digital signature applied to every co-created design — providing immutable proof of originality, authorship, and creation timestamp.',
    },
    {
      icon: 'Globe',
      title: 'Global IP Monitoring',
      description:
        'Proactive infringement detection system continuously monitors global digital channels for unauthorised use of co-created design assets.',
    },
    {
      icon: 'Lock',
      title: 'Digital Rights Management',
      description:
        'DRM systems prevent unauthorised access, reproduction, or distribution of protected co-created design files and digital assets.',
    },
    {
      icon: 'Search',
      title: 'Reverse Image Search',
      description:
        'Automated internet scanning detects misuse of co-created visual design elements across online retail, social media, and global marketplaces.',
    },
    {
      icon: 'Server',
      title: 'Secure Encrypted Hosting',
      description:
        'Military-grade encrypted storage for all co-created design files, prototypes, and IP documentation — accessible only to authorised co-creation partners.',
    },
    {
      icon: 'Map',
      title: 'Regional Distribution Control',
      description:
        'Define and enforce geographic licensing boundaries — controlling exactly where each co-created product can be sold, marketed, or distributed globally.',
    },
    {
      icon: 'FileCheck',
      title: 'Copyright Registration Systems',
      description:
        'Direct integration with intellectual property authorities for formal copyright registration of co-created designs across all relevant jurisdictions.',
    },
    {
      icon: 'Gavel',
      title: 'Legal Enforcement Framework',
      description:
        'Immediate access to legal consultation, cease-and-desist infrastructure, and structured enforcement mechanisms for any IP violation.',
    },
  ],
  support:
    'Every co-created design is secured for long-term business protection and creative confidence across all global markets.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers managing design briefs and vendors managing production.
// 12 features preserved from raw file.
// Tool → Wrench (Tool is not standard Lucide, Wrench is).
// Prime Logic removed throughout.

export const designCollaborationApiIntegration = {
  sectionLabel: 'Design Integration',
  headline: 'Already Creating New Products? Accelerate With DKC.',
  description:
    'Accelerate product co-creation with secure collaboration tools, IP protection infrastructure, and global launch support — all integrated into a single design workflow platform.',
  features: [
    {
      icon: 'Shield',
      title: 'Secure Co-Creation Agreements',
      description:
        'NDAs, master service agreements, royalty structures, licensing terms, and contributor attribution — all standardised and digitally executed.',
    },
    {
      icon: 'FileText',
      title: 'Design Brief Management',
      description:
        'Structured design requirements, technical specifications, creative constraints, acceptance criteria, and project timeline alignment for every collaboration.',
    },
    {
      icon: 'Cube',
      title: 'CAD and 3D Design Pipelines',
      description:
        'Parametric modelling, toolpath generation, and export-safe preset configurations for artisan manufacturers across all craft categories.',
    },
    {
      icon: 'Glasses',
      title: 'AR Showrooms and Previews',
      description:
        'Immersive augmented reality product previews for buyers — with instant feedback loops directly to artisan designers for rapid iteration.',
    },
    {
      icon: 'Database',
      title: 'Materials Library Management',
      description:
        'Approved material specifications, surface finishes, manufacturing tolerances, and versioned BOM management with approved alternates.',
    },
    {
      icon: 'Wrench',
      title: 'Prototype Workflow Management',
      description:
        'Design requests, iteration tracking, approval stages, courier tracking, and full cost and time analytics for every prototype run.',
    },
    {
      icon: 'CheckSquare',
      title: 'Compliance-Led Design',
      description:
        'GI alignment verification, CPSIA and REACH compliance, labelling requirements, and safety testing integrated from early design stages.',
    },
    {
      icon: 'Award',
      title: 'Quality-Led Design Framework',
      description:
        'Test plans, AQL quality targets, failure mode identification, and corrective action tracking integrated throughout the design process.',
    },
    {
      icon: 'DollarSign',
      title: 'Cost and Margin Simulation',
      description:
        'Landed cost modelling, duty calculations, packaging cost integration, logistics scenarios, and contribution margin analysis per design concept.',
    },
    {
      icon: 'Leaf',
      title: 'Sustainability-Led Design',
      description:
        'Material sustainability scoring, life cycle assessment snapshots, and eco-packaging recommendations embedded into design development workflows.',
    },
    {
      icon: 'Link',
      title: 'PIM and PLM Integrations',
      description:
        'Sync design assets, technical specifications, and version history to PLM, DAM, PIM, and ERP systems seamlessly.',
    },
    {
      icon: 'Rocket',
      title: 'Market Readiness and Launch',
      description:
        'Packaging handoff documentation, photography brief generation, copy kit preparation, and full product launch checklist management.',
    },
  ],
  support: {
    description:
      'Design collaboration integration support covering PLM and CAD onboarding, DAM configuration, blockchain IP registry setup, AI watermarking SDKs, AR and VR API integrations, sandbox environments, and documented SLAs.',
    note: 'Sandbox environments, SDKs, and SLAs available for all active Design Collaboration partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const designCollaborationWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Co-Creation — Six Steps',
  description:
    'A structured, IP-governed activation process for artisan-buyer design collaboration.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Design Collaboration application with identity, business details, and Packaging completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Check',
      description:
        'Platform validates KPI from Packaging (8.0+ required), co-creation agreement status, and digital design integration readiness.',
    },
    {
      step: 3,
      label: 'Onboarding and IP Setup',
      description:
        'Contract execution, IP registration, blockchain authentication setup, and secure design hosting configuration activated.',
    },
    {
      step: 4,
      label: 'Co-Creation Begins',
      description:
        'Artisan-buyer design collaboration launches. Briefs, prototypes, iterations, and AR previews flow through the secure platform.',
    },
    {
      step: 5,
      label: 'Protection Applied',
      description:
        'Every finalised co-created design receives blockchain authentication, copyright registration, DRM, and global monitoring activation.',
    },
    {
      step: 6,
      label: 'Market Expansion',
      description:
        'Launched co-created products enter global markets. KPI builds toward Storytelling & Media — the next Collaborative tier.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'storytelling-media',
    name: 'Storytelling & Media',
    kpiRequired: '8.0+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const designCollaborationFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Design Collaboration',
  items: [
    {
      question: 'Do I need to complete the Packaging partnership before joining?',
      answer:
        'Yes. Four months of Packaging with KPI 8.0+ is required for the standard path. KHCRF lateral evaluation can bypass this for qualified partners with existing co-creation and IP management capability.',
    },
    {
      question: 'How are co-created designs protected?',
      answer:
        'Through blockchain authentication at first creation, formal copyright registration, DRM access controls, reverse image scanning, and global IP infringement monitoring — all applied automatically under the partnership.',
    },
    {
      question: 'Can buyers customise extensively?',
      answer:
        'Yes. Buyers and artisans collaborate directly on product design — with support for packaging alignment, brand storytelling integration, and heritage narrative development. The platform supports full creative co-direction.',
    },
    {
      question: 'What is the risk for vendors in co-creation?',
      answer:
        'None. Vendors retain full ownership of their craft techniques and heritage knowledge. Co-created designs are jointly owned or buyer-licensed based on the contract terms agreed at onboarding — never transferred without consent.',
    },
    {
      question: 'Does Design Collaboration replace previous partnership tiers?',
      answer:
        'No. It builds on and extends the Brand Expansion and Packaging foundations. Partners continue their existing trade relationships while adding structured co-creation capability through this Collaborative partnership.',
    },
    {
      question: 'What does Design Collaboration unlock after completion?',
      answer:
        'Completing 4 months at Design Collaboration with KPI 8.0+ unlocks Storytelling & Media — the next Collaborative tier — with campaign-ready content systems, heritage narrative platforms, and digital media partnerships.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const designCollaborationFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline:
      'Co-Create the Next Generation of Authentic Kashmir Craft. Protected. Exclusive. Global.',
    description:
      'Blockchain-authenticated IP, structured co-creation contracts, and market-ready design workflows — a Design Collaboration partnership that makes artisan-buyer co-creation genuinely safe, commercially powerful, and globally scalable.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Co-Create Exclusive Kashmir Craft Collections No Competitor Can Source?',
      supportingPoints: [
        'IP-protected, blockchain-authenticated exclusive designs — governed contracts from day one.',
        'Direct artisan collaboration with full creative control over product specifications and market positioning.',
        'Co-created collections carry authentic heritage provenance that mass-market sourcing cannot replicate.',
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
      headline: 'Ready to Co-Create Premium Designs With Global Partners and Protect Your Work?',
      supportingPoints: [
        'Full IP protection from first sketch — blockchain authentication and copyright registration included.',
        'Premium pricing for exclusive co-created designs — recurring revenue from design contract relationships.',
        'Design Collaboration performance is the gateway to Storytelling & Media and beyond.',
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

export const DESIGN_COLLABORATION = {
  meta: designCollaborationMeta,
  heroSection: designCollaborationHero,
  overviewSection: designCollaborationOverview,
  modelDifferenceSection: designCollaborationModelDifference,
  eligibilityRulesSection: designCollaborationEligibilityRules,
  eligibilityAssessmentSection: designCollaborationEligibilityAssessment,
  capabilitiesSection: designCollaborationCapabilities,
  // platformAdvantageSection: designCollaborationPlatformAdvantage,
  pricingSection: designCollaborationPricing,
  technologySection: designCollaborationTechnology,
  apiIntegrationSection: designCollaborationApiIntegration,
  workflowSection: designCollaborationWorkflow,
  faqSection: designCollaborationFaq,
  finalCtaSection: designCollaborationFinalCta,
} as const;

export type DesignCollaborationContent = typeof DESIGN_COLLABORATION;
