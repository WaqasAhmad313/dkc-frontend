export type TechnologyPartnershipAssessmentCategory = 'general' | 'vendor' | 'buyer';
export type TechnologyPartnershipQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const technologyPartnershipMeta = {
  slug: 'technology-partnership',
  system: 'institutional',
  tier: 4,
  label: 'Technology Partnership',
  pageTitle: 'Technology Partnerships',
  seoDescription:
    'An institutional technology partnership that integrates Kashmiri handmade craft ecosystems with blockchain provenance, AI analytics, AR/VR immersive commerce, and enterprise platform integrations — for global scalability without losing artisan authenticity.',
  kpiRequired: '9.0+',
  retentionRequired: 'None — institutional qualification required',
  previousSlug: 'ngo-government',
  nextSlug: null,
  isTerminal: true,
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['technology', 'blockchain', 'ar-vr', 'ai', 'api', 'institutional', 'innovation'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer (tech partner) integrates Kashmir craft infrastructure
// with their technology stack. Vendor gains advanced digital tools that
// compete globally while preserving artisan authenticity.

export const technologyPartnershipHero = {
  sectionLabel: 'Technology Partnership',
  shared: {
    badge: 'Institutional — Tier 4 Final',
    statusChip: 'KPI 9.0+ Required — Institutional Qualification Required',
  },
  roles: {
    buyer: {
      headline: 'Build Technology That Serves the Global Kashmir Craft Ecosystem.',
      description:
        "Partner with DKC to deliver blockchain provenance, AI-powered analytics, AR/VR commerce experiences, and enterprise platform integrations to the world's most authentic handmade craft ecosystem — with access to artisan supply chain data, GI certification infrastructure, and a governed institutional partnership framework for responsible heritage-tech innovation.",
      primaryCta: {
        label: 'Apply for Technology Partnership',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'Compete Globally With Technology That Preserves Your Handmade Integrity.',
      description:
        'Access enterprise-grade blockchain traceability, AI demand forecasting, AR/VR showrooms, and seamless API integrations — built specifically for authentic Kashmiri craft trade. Technology that proves your authenticity, accelerates your payments, expands your market reach, and scales your business without compromising what makes your craft irreplaceable.',
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

export const technologyPartnershipOverview = {
  sectionLabel: 'Why Technology Partnership',
  headline: 'Modernizing Craft Trade Infrastructure',
  description:
    'Traditional systems limit scalability and visibility in global markets. This pathway introduces modern digital tools for discovery, trust, and efficient trade operations.',
  problems: [
    'Existing systems limit scalability and global reach',
    'Lack of advanced discovery and targeting capabilities',
    'Weak data-driven marketing and buyer engagement',
    'No immersive experience for product visualization',
  ],
  solutions: [
    'Digital systems supporting scalable global operations',
    'Improved product discovery and targeted reach',
    'Data-driven insights for better market decisions',
    'Enhanced product visualization and buyer experience',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Plug → PlugZap (non-standard Lucide).
// "Partner" labels replaced with clear tech-partner / buyer framing.

export const technologyPartnershipModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Technology Purpose-Built for Kashmir Craft. Not Adapted From Generic Commerce.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — every technology integration is designed around the specific provenance, compliance, and authenticity requirements of GI-certified heritage craft.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Tech and Software Partner Network',
      description:
        'Platform connects Kashmir craft vendors with global software houses, technology companies, and innovation partners — with governed integration agreements, institutional security standards, and data governance frameworks.',
    },
    {
      icon: 'PlugZap',
      title: 'Enterprise API Integration',
      description:
        'Seamless API connectivity for e-commerce platforms, payment gateways, live inventory systems, ERP integrations, and third-party partner workflows — with SDKs, sandbox environments, and SLA-backed deployment.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Blockchain-Backed Authenticity Verification',
      description:
        'Every Kashmir craft product carries an immutable blockchain provenance record — GI certification linked, tamper-proof, and verifiable by buyers, institutions, and customs authorities globally.',
    },
    {
      icon: 'BarChart3',
      title: 'AI-Powered Market Intelligence',
      description:
        'Predictive analytics optimise demand forecasting, dynamic pricing, buyer targeting, and inventory planning — giving Kashmir craft vendors and buyers the data-driven intelligence that global market competition requires.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Tech Partners and Institutions Get',
      features: [
        {
          icon: 'Users',
          title: 'Structured Access to the Kashmir Craft Tech Ecosystem',
          description:
            "Software houses and technology companies gain governed access to DKC's Kashmir craft digital infrastructure — with artisan supply chain data, GI systems, provenance APIs, and institutional partnership frameworks.",
        },
        {
          icon: 'Lock',
          title: 'Institutional-Grade Security Infrastructure',
          description:
            'Cybersecurity layers — OAuth/SSO, RBAC, end-to-end encryption, audit trails, and privacy-aligned controls — support trusted technology implementation across all craft trade system integrations.',
        },
        {
          icon: 'Sparkles',
          title: 'Heritage-Tech Innovation Differentiation',
          description:
            'Develop AR/VR immersive craft experiences, haptic commerce, and cultural storytelling technologies that create genuine differentiation in the heritage-tech market — with artisan provenance as the foundation.',
        },
        {
          icon: 'TrendingUp',
          title: 'Long-Term Market Leadership in Ethical Commerce',
          description:
            'Build scalable SaaS and platform infrastructure for global Kashmir craft trade — with institutional partnerships, ESG-aligned positioning, and long-term market leadership in the growing ethical commerce sector.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'E-Commerce, Payments, and Logistics Integration',
          description:
            'Integrate your craft business with leading e-commerce platforms, digital payment gateways, logistics APIs, and marketplace connectors — managed through a single institutional-grade platform.',
        },
        {
          icon: 'Shield',
          title: 'Fraud-Resistant Trade and Secure Transactions',
          description:
            'Technology layers eliminate transaction fraud, opacity in trade relationships, and operational security risks — providing vendors with the protected digital trading environment institutional buyers require.',
        },
        {
          icon: 'DollarSign',
          title: 'Automated Payouts and Financial Stability',
          description:
            'Smart automation accelerates payment settlement cycles, reduces payout delays, and improves vendor cash flow predictability — creating financial stability that manual trade settlement cannot provide.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Wholesale, Export, and Institutional Expansion Readiness',
          description:
            'Software-backed systems with blockchain provenance and compliance documentation directly prepare vendors for wholesale, institutional export, and franchise partnership entry at global scale.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// specialRules states retentionPeriod: "None" — consistent with Museum/NGO.
// See CLIENT FLAGS 1 and 2.

export const technologyPartnershipEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Technology Partnership Requires Institutional Qualification and Digital Readiness',
  description:
    'Technology Partnership is the final tier of the Institutional system and the terminal destination of the entire DKC B2B Connect platform. Like Museum and NGO & Government, entry does not require completing a specific prior retention period — it is governed by KPI threshold, institutional qualification, and demonstrated technology integration capability.',
  requirements: [
    {
      label: 'KPI Required',
      value: '9.0+',
      note: 'Platform-maximum KPI threshold — the same institutional grade as Museum and NGO & Government.',
    },
    {
      label: 'Prior Retention',
      value: 'None required',
      note: 'Technology Partnership entry does not require a specific prior retention period — consistent with all Institutional tracks.',
    },
    {
      label: 'Commitment',
      value: '12-month minimum',
      note: 'Minimum 12-month engagement at Technology Partnership.',
    },
    {
      label: 'Vendor Qualification',
      value: 'API Integration and Digital Technology Readiness',
      note: 'Vendors must use or be prepared to adopt API integrations, AI forecasting, and blockchain traceability tools.',
    },
    {
      label: 'Institution Qualification',
      value: 'Registered Technology Company or Software Institution',
      note: 'Institutional buyers must be formally registered technology companies, software houses, or innovation-focused organisations.',
    },
    {
      label: 'Fee Structure',
      value: 'Based on Integration Scope',
      note: 'Platform fees may vary based on the depth and complexity of technology integration required.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation available for qualified partners with existing institutional tech capabilities.',
    },
  ],
  progressionNote:
    'Technology Partnership is the terminal tier of the DKC B2B Connect platform. Strong performance and advanced technology integration capability opens pathways to Global Innovation Alliances — partnerships beyond the current platform structure.',
  nextSlug: null,
  nextLabel: 'Global Innovation Alliances',
  isTerminal: true,
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// IMPORTANT: No validation category — only general, vendor, buyer.
// 12 questions total (5 general + 3 vendor + 4 buyer).
// Buyer has 4 questions — one more than Museum/NGO (which have 3 each).
// resultContent keys match threshold eligibility strings exactly.
// "Global Innovation Alliances" preserved exactly — see FLAG 4.

export const technologyPartnershipEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Technology Partnership and your readiness for advanced craft-tech integrations and institutional innovation pathways.',
  introCard: {
    icon: 'Target',
    title: 'Technology Partnership Eligibility Assessment',
    description:
      'Twelve questions. Personalised results. No email required. Understand your digital and technology integration readiness and what pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '12 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Technology Partnership Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Technology Partnership',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as TechnologyPartnershipQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Digitally certified and blockchain-tagged',
        ],
        category: 'general' as TechnologyPartnershipAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as TechnologyPartnershipQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Enhanced through digital quality standards and monitoring',
        ],
        category: 'general' as TechnologyPartnershipAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and technology?',
        type: 'single' as TechnologyPartnershipQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Tech-enabled eco-monitoring and zero-waste systems',
        ],
        category: 'general' as TechnologyPartnershipAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your digital customer or buyer experience approach?',
        type: 'single' as TechnologyPartnershipQuestionType,
        options: [
          'Basic or non-existent',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'AI-driven personalisation and data-backed optimisation',
        ],
        category: 'general' as TechnologyPartnershipAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as TechnologyPartnershipQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Digitally audited fair-trade compliance with full documentation',
        ],
        category: 'general' as TechnologyPartnershipAssessmentCategory,
        weight: 1,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_api_integration',
        question:
          'Do you currently use API integrations with e-commerce marketplaces or platforms?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_ai_forecasting',
        question:
          'Are you able to adopt AI-driven inventory forecasting and demand planning tools?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_digital_twin',
        question:
          'Are you open to digital twin modelling for craft products and production processes?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },

      // ── Buyer (tech partner / institution) questions — unscored ──────────
      // Note: 4 buyer questions — one more than Museum/NGO
      {
        id: 'buyer_blockchain',
        question:
          'Can you provide blockchain traceability infrastructure for supply chain verification?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_ar_vr',
        question: 'Do you enable AR/VR or haptic experiences for immersive craft commerce?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_predictive_analytics',
        question: 'Do you offer predictive analytics and AI-powered market intelligence tools?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_digital_twin_iot',
        question:
          'Can you support digital twin modelling or IoT sensor integrations for craft production?',
        type: 'yesno' as TechnologyPartnershipQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as TechnologyPartnershipAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys.
    // "Global Innovation Alliances" is a beyond-platform destination — see FLAG 4.
    thresholds: {
      10: {
        eligibility: 'Technology Partnership (TIER 4 / L16)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Technology Partnership + Fast Track to Global Innovation Alliances',
        fastTrackEligible: true,
        nextLevel: 'Global Innovation Alliances',
      },
      21: {
        eligibility: 'Global Innovation Alliances',
        fastTrackEligible: true,
        nextLevel: 'Global Innovation Alliances',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Technology Partnership',
        kpiThreshold: 9.0,
        retentionPeriod: 'None',
        minCommitment: '12 months at Technology Partnership',
        tpif: 'Blockchain, AR/VR, Predictive Analytics, Digital Twins',
        mpf: 'Based on integration scope',
      },
      buyer: {
        commitment: 'Technology Partnership',
        kpiThreshold: 9.0,
        cep: 'Open Access',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Technology Partnership (TIER 4 / L16)':
          "You're eligible for Technology Partnership. Build your craft-tech integration capability from here.",
        'Technology Partnership + Fast Track to Global Innovation Alliances':
          "Great fundamentals. You're eligible for Technology Partnership with a fast track to Global Innovation Alliances.",
        'Global Innovation Alliances':
          'Exceptional. Your technology record makes you eligible for Global Innovation Alliances — beyond the current platform.',
      },
      nextStepsByOutcome: {
        'Technology Partnership (TIER 4 / L16)': [
          'Join the Technology Partnership programme.',
          'Submit integration roadmap and technology alignment documentation.',
          'Complete KHCRF Technology Review.',
          'Expand API integration and ERP readiness.',
        ],
        'Technology Partnership + Fast Track to Global Innovation Alliances': [
          'Prepare fast-track documentation for Global Innovation Alliances.',
          'Strengthen integration architecture, traceability, and immersive-commerce systems.',
          'Complete advanced KHCRF technology and interoperability review.',
          'Align institution-ready digital governance and partner workflows.',
        ],
        'Global Innovation Alliances': [
          'Apply for Global Innovation Alliances consideration.',
          'Submit advanced technology, security, and integration documentation.',
          'Strengthen alliance-ready APIs, analytics, and digital twin capabilities.',
          'Complete KHCRF progression review for Global Innovation pathway.',
        ],
      },
      strengthsByOutcome: {
        'Technology Partnership (TIER 4 / L16)': [
          'Commitment to technology integration and digital operations',
          'Strong digital foundation from institutional progression',
        ],
        'Technology Partnership + Fast Track to Global Innovation Alliances': [
          'API integration and blockchain traceability capability',
          'AI forecasting and immersive commerce readiness',
          'Clear Global Innovation Alliances progression trajectory',
        ],
        'Global Innovation Alliances': [
          'Full institutional technology integration infrastructure',
          'Strong KHCRF compliance and digital trade record',
          'Alliance-ready APIs, analytics, and digital twin capability',
        ],
      },
      improvementsByOutcome: {
        'Technology Partnership (TIER 4 / L16)': [
          'Adopt AI-driven forecasting and inventory management tools.',
          'Strengthen blockchain provenance and AR/VR commerce capabilities.',
          'Expand API integration and ERP system connectivity.',
        ],
        'Technology Partnership + Fast Track to Global Innovation Alliances': [
          'Advance digital governance documentation for global alliance entry.',
          'Strengthen interoperability systems and alliance-ready infrastructure.',
        ],
        'Global Innovation Alliances': [],
      },
      defaultStrengths: [
        'Commitment to technology and digital trade infrastructure',
        'Strong institutional-tier progression foundation',
      ],
      defaultDevelopmentAreas: [
        'Adopt AI-driven forecasting and digital supply chain tools.',
        'Strengthen blockchain and AR/VR integration capabilities.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Vendor & Buyer Advantages" combined section split into separate sections.
// Cpu and Network are valid Lucide icons — kept.

export const technologyPartnershipCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Digital Infrastructure for Global Kashmir Craft Trade',
  subheadline: 'AI, blockchain, and automation enabling secure, scalable commerce.',

  capabilities: [
    {
      title: 'Core Infrastructure',
      icon: 'Cpu',
      items: [
        'Unified platform connecting artisans, buyers, and tech partners',
        'API-driven integration across payments, inventory, and workflows',
        'Blockchain securing product authenticity and provenance',
      ],
    },
    {
      title: 'Digital Enablement',
      icon: 'Network',
      items: [
        'Automation tools modernising vendor operations',
        'AR/VR experiences enhancing product engagement',
        'Secure systems protecting transactions and data',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'AI-driven demand forecasting and pricing insights',
        'Behaviour analytics across buyers and trade flows',
        'Performance tracking for global market readiness',
      ],
    },
    {
      title: 'Technology Integration',
      icon: 'Building2',
      items: [
        'Digital infrastructure enabling global scalability',
        'Verified systems building trust across all transactions',
        'Tools supporting institutional and premium market entry',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Technology Partner Advantages',
      items: [
        'Lead innovation in heritage-driven commerce technology',
        'Access structured supply chain and provenance data',
        'Strengthen ESG positioning through transparency systems',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Prove authenticity through blockchain verification',
        'Use AI insights for better production planning',
        'Access global buyers through digital platforms',
      ],
    },
  },

  impact: [
    {
      title: 'Digital Transformation',
      description: 'Turning traditional craft into a modern global trade system',
    },
    {
      title: 'Supply Chain Trust',
      description: 'Building verifiable, tamper-proof provenance records',
    },
    {
      title: 'Innovation Ecosystem',
      description: 'Positioning Kashmir as a craft-tech innovation hub',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: tech partner (buyer) and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// Non-standard raw section labels rebuilt to standard pattern.

// export const technologyPartnershipPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir and Global Innovation.',
//   description:
//     "DKC's Technology Partnership integrates innovation, blockchain, AI, and immersive commerce — enhancing authentic Kashmir craft's global competitiveness while positioning the sector as a leader in heritage-driven digital trade.",
//   roles: {
//     buyer: {
//       headline: 'Technology Partner and Institutional Advantages',
//       items: [
//         {
//           title: 'Leadership in Heritage-Tech Innovation',
//           description:
//             "Lead innovation at the intersection of cultural heritage and next-generation commerce technology — integrating blockchain, AI, AR/VR, and IoT with one of the world's most authentic artisan supply chains.",
//         },
//         {
//           title: 'Access to Unique Artisan Supply Chain Data',
//           description:
//             'Access structured, institutionally verified Kashmir craft supply chain data — provenance records, GI certification data, trade flow analytics, and artisan production metrics — for global research and platform development.',
//         },
//         {
//           title: 'ESG Reputation Through Blockchain-Driven Transparency',
//           description:
//             "Enhance institutional ESG positioning through verifiable, blockchain-backed supply chain transparency — demonstrating responsible innovation in partnership with one of the world's most heritage-significant craft ecosystems.",
//         },
//         {
//           title: 'Long-Term Leadership in Ethical Commerce Technology',
//           description:
//             'Build long-term market leadership in the rapidly growing ethical commerce technology sector — with institutional credentials, cultural relevance, and a governed partnership framework that mass-market platforms cannot replicate.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Blockchain-Enabled Authenticity Proof',
//           description:
//             'Prove product authenticity to global buyers with immutable blockchain-backed certification systems — giving institutional buyers, museums, and government procurement bodies the provenance verification they require.',
//         },
//         {
//           title: 'AR/VR for Immersive Craft Marketing',
//           description:
//             'Use AR/VR showrooms and immersive product visualisation to present Kashmir craft to premium global buyers — closing the gap between the physical tactile experience of craft and the digital purchase decision.',
//         },
//         {
//           title: 'AI-Driven Production and Demand Efficiency',
//           description:
//             'Improve production planning and market responsiveness with AI-powered demand analytics — forecasting buyer demand, optimising seasonal production, and reducing the overstock and understock cycles that harm artisan businesses.',
//         },
//         {
//           title: 'Global Digital Platform Access for Buyer Collaboration',
//           description:
//             'Access digital platforms, marketplace connectors, and collaboration tools that connect Kashmir craft vendors with the global buyer networks institutional trade and premium retail require.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Transforming Kashmir Into a Global Craft-Tech Innovation Hub',
//         description:
//           "Technology partnerships transform Kashmir's craft sector from a traditional trade ecosystem into a globally recognised craft-tech innovation hub — attracting investment, institutional partnerships, and international talent.",
//       },
//       {
//         title: 'Building Tamper-Proof Supply Chain Trust',
//         description:
//           'Blockchain-backed traceability builds consumer and institutional trust that is structurally impossible to fake — creating a permanent, verifiable provenance record that elevates every Kashmir craft product globally.',
//       },
//       {
//         title: 'Enabling Artisan-Technology Co-Creation',
//         description:
//           'Structured technology partnerships encourage genuine artisan-technology co-creation — giving Kashmiri craftspeople access to innovation tools and global technology communities without losing traditional craft knowledge.',
//       },
//       {
//         title: 'Positioning Kashmir as a Heritage-Driven Digital Economy Pioneer',
//         description:
//           'By combining authentic GI-certified craft heritage with institutional-grade digital infrastructure, Kashmir can lead the global movement toward heritage-driven digital economies that value authenticity as a commercial asset.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// Pricing differs from Logistics/NGO — Premium is $800/year not $6,000/year.
// No onboarding fee. See CLIENT FLAG 3.

export const technologyPartnershipPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built for Technology Integration Scale.',
  description:
    'Three yearly package tiers covering digital tool access, technology integration depth, and advanced commerce capability. Fees may vary based on the scope and complexity of specific technology integration requirements.',
  note: 'Integration-specific fees may apply depending on the scope of API, blockchain, or AR/VR system implementation required.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'Technology Partnership has no separate onboarding fee. Select a yearly package based on your technology integration requirements and scalability needs.',
    note: 'Due to advanced integration infrastructure requirements, all tiers require a paid plan. A paid plan starts at $120/year.',
    badge: 'Yearly Membership — Integration Scope Determines Total Cost',
  },
  packages: [
    {
      name: 'Standard',
      price: '$120',
      billingPeriod: 'year',
      features: [
        'Baseline access to Kashmir craft digital tools',
        'Basic API integrations for e-commerce and payments',
        'Standard analytics and performance dashboard',
        'Blockchain provenance record access',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Advanced marketing and demand intelligence tools',
        'AR/VR showroom support and immersive product visualisation',
        'Predictive logistics and inventory integration',
        'AI-powered buyer targeting and demand forecasting',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$800',
      billingPeriod: 'year',
      features: [
        'Full-stack technology suite and enterprise API access',
        'Haptic feedback and advanced immersive commerce integration',
        'Geo-fencing and programmatic advertising capabilities',
        'Dedicated technology integration manager',
      ],
      recommended: false,
    },
  ],
  range: '$120–$800/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// Code, Megaphone, BookOpen, Link all valid Lucide icons.
// Prime Logic removed from support line.

export const technologyPartnershipTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'The Technology Stack Powering Kashmir Craft Digital Infrastructure',
  description:
    'Equips the Kashmir craft trade ecosystem with digital platforms, AI-driven marketing tools, blockchain traceability systems, immersive commerce infrastructure, and scalable enterprise integration — purpose-built for authentic handmade craft at institutional scale.',
  features: [
    {
      icon: 'Code',
      title: 'Enterprise Software Platforms',
      description:
        'Build and deploy ERP, CRM, and management systems purpose-configured for Kashmir craft ecosystem operations, inventory, and institutional trade workflows.',
    },
    {
      icon: 'Globe',
      title: 'Web and Marketplace Development',
      description:
        'Develop responsive e-commerce sites, artisan storefronts, and Kashmir craft online marketplaces optimised for global buyer discovery and conversion.',
    },
    {
      icon: 'Megaphone',
      title: 'AI-Powered Marketing Suites',
      description:
        'Run AI-driven SEO campaigns, programmatic advertising, and influencer-backed brand growth strategies tailored for premium Kashmir craft audiences.',
    },
    {
      icon: 'FileText',
      title: 'Multilingual Content Systems',
      description:
        'Host multilingual Kashmir craft heritage histories, artisan biographies, and cultural storytelling content across all digital channels and markets.',
    },
    {
      icon: 'Link',
      title: 'Blockchain Traceability Software',
      description:
        'Verify product authenticity with GI certification-linked blockchain solutions — providing immutable provenance records for every Kashmir craft product.',
    },
    {
      icon: 'BarChart',
      title: 'Buyer Intelligence Dashboards',
      description:
        'Monitor buyer demographics, purchasing behaviour, market performance data, and demand signals across all active digital trade channels.',
    },
    {
      icon: 'BookOpen',
      title: 'Artisan Training and Digital Literacy Portals',
      description:
        'Teach Kashmiri artisans digital marketing, financial literacy, compliance requirements, and technology adoption through structured online learning.',
    },
    {
      icon: 'Users',
      title: 'Buyer Outreach and Matchmaking Tools',
      description:
        'Enable digital product catalogs, AI-powered buyer-vendor matchmaking, and virtual trade fair access for global Kashmir craft market expansion.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated technology integration engineering for all active partnership deployments.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: 15 features — same count as Logistics.
// Stamp (non-standard Lucide) → BadgeCheck.
// BookImage (non-standard Lucide) → BookOpen.
// All other icons valid. Prime Logic removed throughout.

export const technologyPartnershipApiIntegration = {
  sectionLabel: 'Technology Integration',
  headline: 'Already Building Handicraft Technology? Partner With DKC.',
  description:
    'Unify provenance APIs, compliance systems, AI analytics, immersive commerce infrastructure, and enterprise data pipelines — purpose-built for authentic Kashmir craft digital trade at global institutional scale.',
  features: [
    {
      icon: 'ScrollText',
      title: 'CraftLore Provenance and Registry',
      description:
        'Immutable blockchain registry for product origin, ownership chain, GI validation, and counterfeit intelligence — the authoritative source of Kashmir craft authenticity.',
    },
    {
      icon: 'BadgeCheck',
      title: 'GI Verification Services',
      description:
        'Programmatic Geographical Indication checks, digital certificate generation, authenticity seal management, and structured dispute resolution workflows.',
    },
    {
      icon: 'Scale',
      title: 'Price Valuation and Fair Pricing Intelligence',
      description:
        'Market reference pricing indices, anti-counterfeit pricing enforcement, product category benchmarks, and real-time anomaly detection and alerts.',
    },
    {
      icon: 'IdCard',
      title: 'Trade and Vendor Registry',
      description:
        'Verified vendor identity management, trade rating systems, sanctions and compliance screening, and longitudinal vendor performance history.',
    },
    {
      icon: 'Leaf',
      title: 'Carbon and Sustainability APIs',
      description:
        'Per-product carbon footprint calculation, material sustainability scoring, eco-certification label management, and carbon offset integration.',
    },
    {
      icon: 'BookOpen',
      title: 'PIM, DAM, and Catalog SDKs',
      description:
        'Product information management, digital asset delivery, attribute and media publishing, and multi-language translation to all connected marketplaces and retailers.',
    },
    {
      icon: 'ShoppingCart',
      title: 'E-Commerce and POS Connectors',
      description:
        'Pre-built connectors for Shopify, WooCommerce, Magento, BigCommerce, Square, and Lightspeed — deployed without custom development.',
    },
    {
      icon: 'Truck',
      title: 'Logistics and Customs Integrations',
      description:
        'HTS and HS code classification, landed cost computation, eAWB and electronic bill of lading management, freight broker and forwarder API connections, and real-time tracking.',
    },
    {
      icon: 'CreditCard',
      title: 'Payments and Escrow Gateways',
      description:
        'Multi-currency payment processing, letter of credit management, net payment terms, split payout automation, and reconciliation webhook infrastructure.',
    },
    {
      icon: 'Shield',
      title: 'Design and IP Protection Toolkit',
      description:
        'Blockchain timestamp management for design IP, AI watermarking, usage licence rule enforcement, and automated royalty settlement systems.',
    },
    {
      icon: 'Cube',
      title: 'AR/VR Commerce Assets',
      description:
        'GLB and USDZ 3D model management, virtual try-on experiences, room placement viewers, embeddable AR player SDKs, and immersive asset production pipelines.',
    },
    {
      icon: 'BarChart3',
      title: 'Analytics and BI Connectors',
      description:
        'Real-time sales dashboards, KPI monitoring, buyer retention analytics, provenance intelligence reports, and export-ready data pipelines.',
    },
    {
      icon: 'Lock',
      title: 'Security and Compliance Stack',
      description:
        'OAuth and SSO authentication, role-based access control, end-to-end encryption, audit trail management, and privacy-regulation-aligned data governance controls.',
    },
    {
      icon: 'Cog',
      title: 'DevOps and Observability',
      description:
        'Sandbox tenant management, SDK delivery, CI/CD pipeline templates, application metrics, distributed tracing, alerting infrastructure, and technical runbook management.',
    },
    {
      icon: 'Database',
      title: 'Data Pipelines and Analytics Lakes',
      description:
        'ETL and ELT pipeline management, event bus infrastructure, schema registry, deduplication systems, and data quality monitoring for all trade data flows.',
    },
  ],
  support: {
    description:
      'Technology Partnership integration support covering API design review, partner SDK delivery, SSO and OAuth configuration, webhook catalog documentation, sandbox tenant provisioning, solution engineering consultation, and SLA-backed deployment.',
    note: 'Future-proof integration infrastructure designed for global Kashmir craft digital trade ecosystems.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for tech partners and vendors.

export const technologyPartnershipWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Technology Integration — Five Steps',
  description:
    'A structured, governance-driven activation process for institutional Kashmir craft technology partnerships.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Technology Partnership application with institutional credentials, technology capability documentation, and KPI status.',
    },
    {
      step: 2,
      label: 'Evaluation',
      description:
        'Platform evaluates technology integration readiness, institutional qualification, API capabilities, and KPI 9.0+ status for all applicants.',
    },
    {
      step: 3,
      label: 'Activation',
      description:
        'Integration roadmap agreed, technology alignment documentation submitted, KHCRF Tech Review completed, and partnership activated.',
    },
    {
      step: 4,
      label: 'Integration',
      description:
        'Technology systems integrated — blockchain provenance, AI analytics, AR/VR commerce, API connectivity, and enterprise data pipelines deployed.',
    },
    {
      step: 5,
      label: 'Sustain and Scale',
      description:
        'Technology partnership operational. Performance tracked. Global Innovation Alliances pathway activated for exceptional partners.',
    },
  ],
  nextUnlock: {
    label: 'Beyond the Platform',
    slug: null,
    name: 'Global Innovation Alliances',
    kpiRequired: '9.0+',
    retentionRequired: '12 months',
    isTerminal: true,
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const technologyPartnershipFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Technology Partnerships',
  items: [
    {
      question: 'What makes this different from standard e-commerce platforms?',
      answer:
        'DKC Technology Partnership is exclusive to Kashmiri handmade craft — with blockchain GI provenance, AR/VR immersive product experiences, haptic commerce capability, geo-fencing marketing, and an institutional-grade trust infrastructure built specifically for artisan trade. Generic platforms have none of this.',
    },
    {
      question: 'Is there a free tier for Technology Partnerships?',
      answer:
        'No. Due to the advanced integration infrastructure and institutional-grade digital systems required, all Technology Partnership tiers require a paid plan. Plans start at $120/year for baseline digital tool access.',
    },
    {
      question: 'Is AR/VR showroom support available on the Standard plan?',
      answer:
        'AR/VR showroom support is available from the Growth plan and above. The Standard plan covers baseline digital tools, API integrations, and analytics dashboards.',
    },
    {
      question: 'How does haptic feedback work for buyers?',
      answer:
        'Haptic commerce integration supports immersive digital product experiences designed to simulate tactile craft interaction in advanced haptic-enabled environments — helping premium buyers experience Kashmir craft texture and quality before purchase.',
    },
    {
      question: 'What qualifications are required to join Technology Partnership?',
      answer:
        'KPI 9.0+ and institutional qualification as a technology company, software house, or innovation organisation. Vendors must demonstrate API integration readiness and openness to adopting AI, blockchain, and digital twin tools.',
    },
    {
      question: 'What is "Global Innovation Alliances" referenced in the assessment results?',
      answer:
        'Global Innovation Alliances is the beyond-platform destination for the highest-performing Technology Partnership participants — a network of global institutional innovation collaborations beyond the current DKC B2B Connect structure. Details are provided to qualifying partners directly.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: different framing for tech partners vs vendors.
// Raw file secondaryCtas pointed to /contact and /institutional.
// All CTAs cleaned to /registration or /book-consultation only.

export const technologyPartnershipFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Kashmir Craft Meets Institutional Technology. Global Scale. Authentic Heritage.',
    description:
      "Blockchain provenance, AI analytics, AR/VR immersive commerce, and enterprise API integrations — the Technology Partnership that closes the gap between the world's most authentic handmade craft and the global institutional digital infrastructure it deserves.",
  },
  roles: {
    buyer: {
      headline:
        'Ready to Build the Technology Infrastructure for the Global Kashmir Craft Ecosystem?',
      supportingPoints: [
        'Access unique artisan supply chain data and GI certification infrastructure for heritage-tech innovation.',
        'ESG and institutional credibility through blockchain-backed supply chain transparency.',
        'Technology leadership in ethical, authentic, cultural-heritage digital commerce.',
      ],
      primaryCta: {
        label: 'Apply for Technology Partnership',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'Ready to Give Your Kashmir Craft the Technology It Needs to Compete Globally?',
      supportingPoints: [
        'Blockchain authenticity, AI forecasting, AR/VR showrooms — without losing what makes your craft irreplaceable.',
        "Technology Partnership is the terminal tier of DKC B2B Connect — the platform's highest honour.",
        'Exceptional performance opens the pathway to Global Innovation Alliances beyond the platform.',
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

export const TECHNOLOGY_PARTNERSHIP = {
  meta: technologyPartnershipMeta,
  heroSection: technologyPartnershipHero,
  overviewSection: technologyPartnershipOverview,
  modelDifferenceSection: technologyPartnershipModelDifference,
  eligibilityRulesSection: technologyPartnershipEligibilityRules,
  eligibilityAssessmentSection: technologyPartnershipEligibilityAssessment,
  capabilitiesSection: technologyPartnershipCapabilities,
  // platformAdvantageSection: technologyPartnershipPlatformAdvantage,
  pricingSection: technologyPartnershipPricing,
  technologySection: technologyPartnershipTechnology,
  apiIntegrationSection: technologyPartnershipApiIntegration,
  workflowSection: technologyPartnershipWorkflow,
  faqSection: technologyPartnershipFaq,
  finalCtaSection: technologyPartnershipFinalCta,
} as const;

export type TechnologyPartnershipContent = typeof TECHNOLOGY_PARTNERSHIP;
