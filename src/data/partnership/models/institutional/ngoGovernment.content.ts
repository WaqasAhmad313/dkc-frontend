export type NgoGovernmentAssessmentCategory = 'general' | 'vendor' | 'buyer';
export type NgoGovernmentQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const ngoGovernmentMeta = {
  slug: 'ngo-government',
  system: 'institutional',
  tier: 4,
  label: 'NGO & Government',
  pageTitle: 'NGO & Government Partnerships',
  seoDescription:
    'An institutional partnership model that integrates Kashmiri handmade crafts into fair-trade, sustainability, development, and policy-driven programmes through NGO and government collaborations aligned with global SDG frameworks.',
  kpiRequired: '9.0+',
  retentionRequired: 'None — institutional qualification required',
  previousSlug: 'museum',
  nextSlug: 'technology-partnership',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['ngo', 'government', 'fair-trade', 'sdg', 'development', 'policy', 'institutional'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer (institution) integrates Kashmir craft into development
// and policy programmes. Vendor gains structured institutional market access
// and policy-backed protection.

export const ngoGovernmentHero = {
  sectionLabel: 'NGO & Government Partnership',
  shared: {
    badge: 'Institutional — Tier 4',
    statusChip: 'KPI 9.0+ Required — Institutional Qualification Required',
  },
  roles: {
    buyer: {
      headline: 'Integrate Authentic Kashmir Craft Into Your Development and Policy Programmes.',
      description:
        'Partner with verified Kashmiri artisan vendors to embed authentic handmade craft into fair-trade initiatives, sustainability programmes, government procurement frameworks, and SDG-aligned development projects — with transparent compliance documentation, measurable impact reporting, and fully governed institutional agreements.',
      primaryCta: {
        label: 'Apply as an Institution',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'Access Policy-Backed Markets, Fair-Trade Programmes, and Institutional Funding.',
      description:
        'Enter structured institutional procurement frameworks — NGO development projects, government fair-trade programmes, and SDG-aligned initiatives — with policy-backed protection, fair wage guarantees, and institutional recognition that commercial trade channels alone cannot provide.',
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

export const ngoGovernmentOverview = {
  sectionLabel: 'Why NGO & Government',
  headline: 'Connecting Craft With Institutional Programs',
  description:
    'Artisans are often excluded from policy and development programs. This pathway enables structured collaboration with NGOs and government bodies through verified systems.',
  problems: [
    'Artisans are excluded from institutional decision-making processes',
    'No structured collaboration with NGOs or government bodies',
    'Limited access to funding and development programs',
    'Weak integration into global social impact initiatives',
  ],
  solutions: [
    'Direct collaboration with NGOs and government programs',
    'Verified onboarding for institutional participation',
    'Access to funding and structured development initiatives',
    'Transparent systems aligned with global program standards',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Globe2 (non-standard) → Leaf. HeartHandshake valid. BadgeCheck valid.
// Scale valid. Wallet valid. Megaphone valid.
// SDG references preserved — appropriate for institutional buyer context.

export const ngoGovernmentModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Policy-Backed, SDG-Aligned Kashmir Craft Partnerships. Institutional Grade.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — verified GI certification, fair-trade compliance, and KHCRF governance on every institutional partnership.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'SDG-Aligned Policy Integration',
      description:
        'Platform supports SDG 8 (Decent Work and Economic Growth) through structured fair-trade partnerships — connecting Kashmiri artisans with NGO and government institutional programmes that require verified, compliant supply chains.',
    },
    {
      icon: 'Megaphone',
      title: 'Advocacy and Artisan Rights Support',
      description:
        'Drives reduced inequalities (SDG 10) through structured artisan rights frameworks, inclusive market participation, and advocacy support that gives Kashmiri craft producers a voice in the institutional programmes that affect them.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Compliance and Ethical Procurement Oversight',
      description:
        'Strengthens responsible consumption (SDG 12) with ethical supply chain documentation, procurement alignment with government standards, and full transparency in every artisan-institution relationship.',
    },
    {
      icon: 'Wallet',
      title: 'Institutional Funding and Grant Channels',
      description:
        'Links verified Kashmiri vendors to financing pathways — NGO grants, government development subsidies, and partnership-funded programmes that provide financial stability beyond commercial market dependency.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Institutions Get',
      features: [
        {
          icon: 'Building',
          title: 'Verified Artisan Supply for Development Programmes',
          description:
            'Access a structured, compliance-verified Kashmiri craft supply chain that meets the fair-trade, traceability, and institutional procurement standards your development programmes and CSR frameworks require.',
        },
        {
          icon: 'Scale',
          title: 'Transparent Governance and Policy Alignment',
          description:
            'Embed Kashmir craft into institutional frameworks with transparent governance documentation — SDG reporting, impact evidence, procurement compliance records, and artisan attribution all provided.',
        },
        {
          icon: 'Leaf',
          title: 'Measurable Sustainability and SDG Impact',
          description:
            'Track and report measurable social, cultural, and environmental outcomes from Kashmir craft integration — with carbon metrics, gender inclusion data, and SDG alignment evidence for programme reporting.',
        },
        {
          icon: 'TrendingUp',
          title: 'Global Reach Through Cultural Diplomacy',
          description:
            'Strengthen global cultural diplomacy and institutional reputation by showcasing authentic Kashmiri craft heritage — building cross-cultural programme visibility and expanding international development partner networks.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Users',
          title: 'Policy-Backed Institutional Market Access',
          description:
            'Enter NGO and government procurement frameworks that actively seek fair-trade, GI-certified Kashmiri craft — gaining stable institutional contracts unavailable through commercial trade channels.',
        },
        {
          icon: 'HeartHandshake',
          title: 'Health, Safety, and Labour Protections',
          description:
            'Policy-backed protections support safer, healthier artisan work conditions — with formal compliance documentation, labour standards monitoring, and institutional accountability for every partnership.',
        },
        {
          icon: 'BadgeCheck',
          title: 'NGO-Backed Fair-Trade Credentials',
          description:
            'Gain verified fair-trade certification endorsement and institutional credibility — with NGO-backed ethical sourcing guarantees that open premium procurement channels globally.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Government-Supported Export and Market Scaling',
          description:
            'Government institutional support accelerates export market access and programme-linked tourism opportunities — building sustainable global reach through policy-driven market development.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// specialRules states retentionPeriod: "None" — same as Museum.
// 12-month min commitment at NGO & Government. See CLIENT FLAGS 2 and 3.

export const ngoGovernmentEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'NGO & Government Requires Institutional Qualification and Compliance Readiness',
  description:
    'NGO & Government is a parallel Institutional pathway — like Museum, it does not require completing a specific prior partnership retention period. Entry is governed by KPI threshold, institutional qualification, and fair-trade compliance documentation. NGOs, development agencies, and government bodies apply directly.',
  requirements: [
    {
      label: 'KPI Required',
      value: '9.0+',
      note: 'Platform-maximum KPI threshold — confirms institutional trade readiness.',
    },
    {
      label: 'Prior Retention',
      value: 'None required',
      note: 'NGO & Government entry does not require completing a specific prior retention period — consistent with Museum.',
    },
    {
      label: 'Commitment',
      value: '12-month minimum',
      note: 'Minimum 12-month engagement at NGO & Government before progression to Technology Collaboration.',
    },
    {
      label: 'Vendor Qualification',
      value: 'Fair Trade and Procurement Compliance',
      note: 'Vendors must comply with fair-trade standards and align with NGO/government procurement frameworks.',
    },
    {
      label: 'Institution Qualification',
      value: 'Registered NGO, Development Agency, or Government Body',
      note: 'Institutional buyers must be formally registered with active fair-trade sourcing or development mandates.',
    },
    {
      label: 'Fee Structure',
      value: 'Waivable via MoU, Grant, or State Agreement',
      note: 'Platform fees may be waived or negotiated through Memoranda of Understanding, grant funding, or government agreements.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation available for qualified institutional partners.',
    },
  ],
  progressionNote:
    'After completing 12 months at NGO & Government with strong performance, partners unlock Technology Collaboration — the final Institutional tier — with digital infrastructure integration, technology transfer, and innovation-driven trade partnerships.',
  nextSlug: 'technology-partnership',
  nextLabel: 'Technology Collaboration',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// IMPORTANT: No validation category — only general, vendor, buyer.
// 11 questions total. Same structure as Museum.
// Raw introCard.meta said "8 questions" — corrected to "11 questions".
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx.

export const ngoGovernmentEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for NGO & Government Collaboration and whether you qualify for faster progression into Technology Collaboration.',
  introCard: {
    icon: 'Target',
    title: 'NGO & Government Eligibility Assessment',
    description:
      'Eleven questions. Personalised results. No email required. Understand your institutional compliance readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '11 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your NGO & Government Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'NGO & Government',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as NgoGovernmentQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Fully traceable and institutionally certified',
        ],
        category: 'general' as NgoGovernmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as NgoGovernmentQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Meets global institutional procurement standards',
        ],
        category: 'general' as NgoGovernmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainability and SDG alignment?',
        type: 'single' as NgoGovernmentQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Formally aligned with SDGs and eco-certifications',
        ],
        category: 'general' as NgoGovernmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your institutional or community engagement approach?',
        type: 'single' as NgoGovernmentQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Community-focused with measurable procurement outcomes',
        ],
        category: 'general' as NgoGovernmentAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as NgoGovernmentQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Formal fair-trade certification and living wage compliance',
        ],
        category: 'general' as NgoGovernmentAssessmentCategory,
        weight: 1,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_fair_trade_compliance',
        question: 'Do you comply with fair-trade standards and artisan safety requirements?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_procurement_rules',
        question:
          'Are you aligned with NGO or government procurement rules and documentation requirements?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_institutional_scale',
        question: 'Can you supply at institutional or policy-programme scale volumes?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },

      // ── Buyer (institution) questions — unscored ─────────────────────────
      {
        id: 'buyer_fair_trade_sourcing',
        question: 'Is your organisation formally committed to fair-trade sourcing policies?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_livelihood_programs',
        question:
          'Does your organisation actively integrate crafts into livelihood or CSR programmes?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_grants_contracts',
        question:
          'Can your organisation support artisans through grants, subsidies, or procurement contracts?',
        type: 'yesno' as NgoGovernmentQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as NgoGovernmentAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'NGO & Government Collaboration (TIER 4 / L15)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'NGO & Government + Fast Track to Technology Collaboration',
        fastTrackEligible: true,
        nextLevel: 'Technology Collaboration',
      },
      21: {
        eligibility: 'Technology Collaboration (TIER 4 / L16)',
        fastTrackEligible: true,
        nextLevel: 'Technology Collaboration',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'NGO & Government Collaboration',
        kpiThreshold: 9.0,
        retentionPeriod: 'None',
        minCommitment: '12 months at NGO & Government',
        tpif: 'Fair trade, sustainable procurement, policy partnerships',
        mpf: 'Waived or negotiated via MoUs, grants, or state agreements',
      },
      buyer: {
        commitment: 'NGO & Government Collaboration',
        kpiThreshold: 9.0,
        cep: 'Open Access',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'NGO & Government Collaboration (TIER 4 / L15)':
          "You're eligible for NGO & Government Collaboration. Build your institutional compliance capability and progress toward Technology Collaboration from here.",
        'NGO & Government + Fast Track to Technology Collaboration':
          "Great fundamentals. You're eligible for NGO & Government with a fast track to Technology Collaboration.",
        'Technology Collaboration (TIER 4 / L16)':
          'Exceptional. Your institutional record makes you eligible for Technology Collaboration via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'NGO & Government Collaboration (TIER 4 / L15)': [
          'Join the NGO & Government Collaboration programme.',
          'Submit fair-trade and compliance documentation.',
          'Align with NGO and government procurement frameworks.',
          'Enhance fair-trade certifications and impact reporting capability.',
        ],
        'NGO & Government + Fast Track to Technology Collaboration': [
          'Prepare fast-track documentation for Technology Collaboration progression.',
          'Strengthen fair-trade systems, procurement compliance, and reporting readiness.',
          'Complete advanced KHCRF institutional and policy-readiness review.',
          'Align data, governance, and programme delivery materials for Technology track.',
        ],
        'Technology Collaboration (TIER 4 / L16)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit governance, compliance, and operational documentation.',
          'Complete KHCRF Technology Collaboration progression review.',
          'Prepare for direct transition into Technology Collaboration onboarding.',
        ],
      },
      strengthsByOutcome: {
        'NGO & Government Collaboration (TIER 4 / L15)': [
          'Commitment to fair trade and institutional governance',
          'Strong SDG alignment and compliance foundation',
        ],
        'NGO & Government + Fast Track to Technology Collaboration': [
          'Institutional procurement compliance capability',
          'Community impact reporting and programme delivery readiness',
          'Clear Technology Collaboration progression trajectory',
        ],
        'Technology Collaboration (TIER 4 / L16)': [
          'Full institutional governance and compliance infrastructure',
          'Strong KHCRF and fair-trade compliance record',
          'Digital capability and institutional implementation readiness',
        ],
      },
      improvementsByOutcome: {
        'NGO & Government Collaboration (TIER 4 / L15)': [
          'Improve compliance with NGO and government procurement rules.',
          'Expand community impact reporting and SDG measurement systems.',
          'Develop formal fair-trade certifications and institutional documentation.',
        ],
        'NGO & Government + Fast Track to Technology Collaboration': [
          'Advance digital capability and institutional implementation systems.',
          'Strengthen governance documentation for Technology Collaboration entry.',
        ],
        'Technology Collaboration (TIER 4 / L16)': [],
      },
      defaultStrengths: [
        'Commitment to fair trade and institutional compliance',
        'Strong institutional-tier foundation',
      ],
      defaultDevelopmentAreas: [
        'Improve compliance with procurement rules and documentation.',
        'Expand community impact reporting and SDG measurement capability.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// SDG references preserved — contextually appropriate for institutional context.
// Combined "Vendor / Buyer Advantages" section split into separate sections.

export const ngoGovernmentCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Institutional Programme Infrastructure for Artisan Development',
  subheadline: 'Policy-backed support aligning funding, compliance, and fair-trade growth.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Landmark',
      items: [
        'Artisans connected with NGOs and government programmes',
        'Policy-driven contracts defining compliance and procurement',
        'Structured funding through grants and subsidies',
      ],
    },
    {
      title: 'Programme Support',
      icon: 'Truck',
      items: [
        'Training, certification, and development initiatives',
        'Legal, financial, and operational assistance',
        'Community programmes promoting inclusion and equity',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Impact reporting on livelihoods and programme outcomes',
        'Policy insights driving sector-level improvements',
        'Funding performance tracking and scaling analysis',
      ],
    },
    {
      title: 'Institutional Integration',
      icon: 'Building',
      items: [
        'Access to global development and trade frameworks',
        'Expansion into diplomatic and institutional networks',
        'Alignment with sustainability and fair-trade standards',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Institutional Advantages',
      items: [
        'Align procurement with fair-trade and sustainability goals',
        'Demonstrate measurable artisan livelihood impact',
        'Strengthen credibility in global development initiatives',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Access stable institutional contracts and funding',
        'Benefit from fair wages and labour protections',
        'Receive training and support for long-term growth',
      ],
    },
  },

  impact: [
    {
      title: 'Inclusive Growth',
      description: 'Expanding opportunities for women and marginalised artisans',
    },
    {
      title: 'Sustainability Alignment',
      description: 'Embedding craft within global development frameworks',
    },
    {
      title: 'Global Recognition',
      description: 'Strengthening international credibility and trade networks',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: institution (buyer) and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// Raw non-standard section labels rebuilt to standard pattern.

// export const ngoGovernmentPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir and Global Development.',
//   description:
//     "DKC's NGO & Government partnership integrates fair-trade, sustainability, and global development initiatives — supporting artisan livelihoods, enhancing sector credibility, and embedding Kashmir craft into the institutional frameworks that create lasting, measurable change.",
//   roles: {
//     buyer: {
//       headline: 'Institutional Advantages',
//       items: [
//         {
//           title: 'Fair-Trade and Sustainability-Aligned Procurement',
//           description:
//             'Align institutional procurement directly with fair-trade and sustainability goals — sourcing from verified, GI-certified Kashmir craft vendors whose compliance documentation meets institutional programme reporting requirements.',
//         },
//         {
//           title: 'Measurable Artisan Livelihood Impact',
//           description:
//             'Demonstrate and document measurable artisan livelihood impact through structured programme participation — with SDG reporting, gender inclusion metrics, and community outcome evidence for institutional accountability.',
//         },
//         {
//           title: 'Credibility in Global Humanitarian and CSR Initiatives',
//           description:
//             'Strengthen global institutional credibility by integrating authentic, verified Kashmir craft into humanitarian initiatives and CSR frameworks — demonstrating ethical sourcing with documented provenance and fair-trade governance.',
//         },
//         {
//           title: 'UN SDG Support With Craft-Centred Interventions',
//           description:
//             'Support measurable SDG outcomes — SDG 1, 5, 8, 10, 12 — through verified Kashmir craft-centred interventions with full impact tracking, community reporting, and institutional audit compliance.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Stable Institutional Contracts Through NGO Programmes',
//           description:
//             'Secure stable, policy-backed procurement contracts through NGO and government programmes — providing revenue predictability and institutional market access that commercial trade channels cannot offer.',
//         },
//         {
//           title: 'Fair Wages and Stronger Labour Protections',
//           description:
//             'Institutional programme participation provides formal fair-wage guarantees, labour standards monitoring, and policy-backed protections — creating working conditions that commercial markets rarely enforce.',
//         },
//         {
//           title: 'Training, Funding, and Policy-Driven Support',
//           description:
//             'Access artisan training programmes, institutional funding opportunities, certification support, and policy-driven development resources — building capability and resilience beyond commercial market dependency.',
//         },
//         {
//           title: 'Transparent Procurement Reducing Exploitation Risk',
//           description:
//             'Structured institutional procurement frameworks eliminate the exploitation risks of informal commercial channels — with documented compensation, traceable supply chains, and institutional accountability.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Embedding Kashmir Craft in Global Development Frameworks',
//         description:
//           'Institutional integration embeds Kashmiri handicrafts into global development and policy frameworks — moving craft from peripheral cultural trade to a recognised instrument of sustainable development.',
//       },
//       {
//         title: 'Promoting Inclusive Growth for Women and Marginalised Artisans',
//         description:
//           'NGO and government programme participation actively promotes inclusive economic growth — with structured pathways for women artisans and marginalised producers to access institutional markets and recognition.',
//       },
//       {
//         title: 'Strengthening Sustainability Credentials Internationally',
//         description:
//           "Formal SDG alignment and institutional partnership documentation enhances Kashmir craft's sustainability credentials internationally — building market credibility with procurement bodies that prioritise ethical sourcing.",
//       },
//       {
//         title: 'Expanding Diplomatic and Trade Networks',
//         description:
//           "Government and NGO partnerships expand Kashmir craft's diplomatic and trade network reach — creating soft-power visibility and institutional recognition that strengthens the sector's long-term global standing.",
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// Same pricing as Logistics — $120/$300/$6,000/year. No onboarding fee.
// Fees may be waived via MoU, grant, or state agreement (see FLAG 5).

export const ngoGovernmentPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Adaptable for Institutional and Development Programme Contexts.',
  description:
    'Three yearly package tiers covering programme integration depth, compliance support, and institutional collaboration scale. Fees may be waived or negotiated through Memoranda of Understanding, grant funding, or government agreements for qualifying institutional partners.',
  note: 'NGO and government institutions may qualify for fee waivers or negotiated rates via MoU, grant funding, or state procurement agreements. Contact the institutional partnerships team to discuss.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'NGO & Government partnerships have no separate onboarding fee. Select a yearly package to begin institutional programme activation.',
    note: 'Project-specific fees may apply depending on the funding body, trade volume, and compliance scope of the partnership.',
    badge: 'Fee Waivers Available via MoU, Grant, or State Agreement',
  },
  packages: [
    {
      name: 'Standard Partnership',
      price: '$120',
      billingPeriod: 'year',
      features: [
        'Vendor placement in NGO and government programme catalogs',
        'Documentation and compliance support',
        'Basic programme integration and reporting',
        'Standard fair-trade compliance tracking',
      ],
      recommended: false,
    },
    {
      name: 'Growth Partnership',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Vendor recognition in development and livelihood programmes',
        'Policy collaboration and advocacy support',
        'Enhanced documentation and procurement compliance',
        'SDG impact reporting and measurement tools',
      ],
      recommended: true,
    },
    {
      name: 'Premium Partnership',
      price: '$6,000',
      billingPeriod: 'year',
      features: [
        'Strategic role in high-level government programmes',
        'NGO grant access and global institutional collaborations',
        'Premium compliance, logistics, and programme delivery support',
        'Dedicated institutional relationship manager',
      ],
      recommended: false,
    },
  ],
  range: '$120–$6,000/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// HandHeart is NOT standard Lucide → HeartHandshake (valid).
// IdCard valid. AlertTriangle valid. All others valid.
// Prime Logic removed from support line.

export const ngoGovernmentTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'NGO and Government Policy Technology Platform',
  description:
    'Drives sustainable Kashmiri craft ecosystems with policy governance infrastructure, fair-trade compliance systems, artisan support tools, and SDG tracking dashboards purpose-built for institutional development partnerships.',
  features: [
    {
      icon: 'FileText',
      title: 'Policy and Rights Systems',
      description:
        'Protect artisan rights through GI enforcement infrastructure, fair-trade policy rules, and institutional compliance documentation management.',
    },
    {
      icon: 'HeartHandshake',
      title: 'Artisan Support Portals',
      description:
        'Provide structured access to grants, skill development programmes, cooperative funding channels, and welfare scheme integration for artisan vendors.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Labour Compliance Engines',
      description:
        'Ensure fair wage compliance, safe workplace standards, child labour prevention monitoring, and institutional audit trail maintenance.',
    },
    {
      icon: 'Users',
      title: 'Multi-Stakeholder Collaboration Hubs',
      description:
        'Unite NGOs, government bodies, and craft councils for coordinated SDG action — with shared governance, joint programme delivery, and institutional accountability frameworks.',
    },
    {
      icon: 'IdCard',
      title: 'Artisan Identity Registries',
      description:
        'Register artisans in institutional benefit systems — enabling recognition, policy inclusion, programme access, and formal identity documentation.',
    },
    {
      icon: 'Globe',
      title: 'Heritage and SDG Progress Portals',
      description:
        'Showcase craft clusters, heritage products, and publicly accessible SDG progress reporting for transparent institutional accountability.',
    },
    {
      icon: 'AlertTriangle',
      title: 'Crisis Response Systems',
      description:
        'Provide structured artisan support infrastructure during disasters, pandemics, or market disruptions — with emergency funding, logistics, and programme continuity tools.',
    },
    {
      icon: 'BarChart2',
      title: 'SDG Tracking Dashboards',
      description:
        'Track carbon use, eco-material adoption, social impact metrics, and full SDG compliance progress across all active institutional programme partnerships.',
    },
  ],
  support:
    'Platform infrastructure provides transparent, SDG-aligned governance and artisan support tools for governments, NGOs, and development institutions globally.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both institutions managing programmes and vendors supplying them.
// 12 features preserved from raw file.
// ScrollText, HandCoins, ShoppingBasket, BookOpenCheck, ShieldAlert — all valid Lucide.
// Prime Logic removed throughout.

export const ngoGovernmentApiIntegration = {
  sectionLabel: 'Programme Integration',
  headline: 'Already Advancing SDGs? Accelerate With DKC.',
  description:
    'Align policy frameworks, funding orchestration, ethical procurement, and transparent SDG impact reporting at institutional scale — through a single integrated NGO and government platform.',
  features: [
    {
      icon: 'ScrollText',
      title: 'Policy and SDG Framework Mapping',
      description:
        'Map institutional programmes to specific SDG goals, targets, indicators, and theory-of-change frameworks — with structured outcome documentation and reporting.',
    },
    {
      icon: 'HandCoins',
      title: 'Grants and Funding Orchestration',
      description:
        'RFP management, grant application processing, scoring and selection workflows, disbursement management, and milestone-compliance tracking for all funding programmes.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Vendor and Beneficiary Verification',
      description:
        'KYC and KYB verification, international sanctions screening, GI and KHCRF compliance checks, and institutional safeguarding screens for all programme participants.',
    },
    {
      icon: 'ShoppingBasket',
      title: 'Ethical Procurement and Fair Trade',
      description:
        'Fair-trade procurement templates, ethical scoring criteria, GI labelling compliance, and living-wage contract clause management for institutional purchasing.',
    },
    {
      icon: 'BarChart3',
      title: 'Monitoring, Evaluation, and Learning',
      description:
        'Baseline and endline measurement, counterfactual analysis, community surveys, randomised audit management, and secure impact data pipeline infrastructure.',
    },
    {
      icon: 'Database',
      title: 'SDG Reporting and Open Data',
      description:
        'IATI and SDMX-compliant data exports, institutional impact dashboards, and public transparency portal management for programme accountability reporting.',
    },
    {
      icon: 'Users',
      title: 'Community Inclusion and Gender Equity',
      description:
        'Participation rate metrics, community grievance redressal systems, accessibility compliance management, and DEI programme monitoring tools.',
    },
    {
      icon: 'BookOpenCheck',
      title: 'Education and Capacity Building',
      description:
        'Artisan skills curriculum management, LMS integration, certification tracking, and train-the-trainer programme delivery systems.',
    },
    {
      icon: 'Leaf',
      title: 'Climate and Sustainability Controls',
      description:
        'Carbon accounting integration, circular economy metrics, waste reduction tracking, and eco-packaging standards compliance across all programme activities.',
    },
    {
      icon: 'ShieldAlert',
      title: 'Risk, Safeguards, and Anti-Corruption',
      description:
        'Conflict-of-interest registry management, whistleblower channel infrastructure, investigation workflows, and full audit trail maintenance.',
    },
    {
      icon: 'Handshake',
      title: 'Inter-Agency MoU and Partnership Management',
      description:
        'Multi-party MoU management, milestone tracking, joint governance documentation, shared outcome reporting, and inter-agency data rights management.',
    },
    {
      icon: 'Truck',
      title: 'Field Logistics and Distribution',
      description:
        'Programme warehousing management, last-mile delivery coordination, beneficiary targeting systems, and proof-of-delivery evidence collection.',
    },
  ],
  support: {
    description:
      'NGO and government integration support covering IATI and SDMX schema configuration, e-procurement system onboarding, grants and MEL platform setup, community grievance portal configuration, open-data pipeline integration, sandbox environments, SDKs, and SLAs.',
    note: 'Purpose-built integration support for governments, NGOs, and global development programme delivery organisations.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for institutions and vendors.

export const ngoGovernmentWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Institutional Programme — Five Steps',
  description:
    'A structured, compliance-governed activation process for NGO and government Kashmir craft partnerships.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your NGO & Government application with institutional registration, fair-trade documentation, and KPI credentials.',
    },
    {
      step: 2,
      label: 'Evaluation',
      description:
        'Platform evaluates institutional qualification, fair-trade compliance, procurement framework alignment, and KPI 9.0+ status.',
    },
    {
      step: 3,
      label: 'Matching',
      description:
        'Verified Kashmir craft vendors are matched with institutional partners based on programme focus, SDG alignment, and supply capability.',
    },
    {
      step: 4,
      label: 'Agreement',
      description:
        'Programme agreements executed — covering procurement terms, compliance requirements, artisan compensation, impact reporting, and timeline.',
    },
    {
      step: 5,
      label: 'Execution and Impact',
      description:
        'Institutional programmes launch. SDG tracking activated. Impact reporting live. Artisan livelihood outcomes documented and measured.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'technology-partnership',
    name: 'Technology Collaboration',
    kpiRequired: '9.0+',
    retentionRequired: '12 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const ngoGovernmentFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About NGO & Government Partnerships',
  items: [
    {
      question: 'Do NGOs and governments pay vendors directly?',
      answer:
        'Yes. Most NGO and government programmes guarantee funding, disbursed securely through the platform escrow system to verified artisan vendors — with full transaction documentation and compliance records.',
    },
    {
      question: 'Can smaller vendors participate?',
      answer:
        'Yes. Vendors who meet the KPI 9.0+ threshold and hold valid fair-trade and GI documentation can participate. Institutional scale supply capability is assessed during the evaluation stage.',
    },
    {
      question: 'Is insurance mandatory for NGO and government programmes?',
      answer:
        'Yes. All NGO and government programme partnerships require trade insurance for supply security. Insurance costs and responsibilities are negotiated as part of the programme agreement.',
    },
    {
      question: 'How do government institutions benefit?',
      answer:
        'Governments gain verified, traceable Kashmir craft supply chains fully aligned with fair-trade, sustainability metrics, and procurement compliance documentation — enabling transparent programme delivery and institutional accountability reporting.',
    },
    {
      question: 'What happens if a vendor fails to meet compliance requirements?',
      answer:
        'Non-compliant vendors are paused from programme participation until KPI and certification standards are restored. The platform manages compliance monitoring, communication, and reinstatement processes.',
    },
    {
      question: 'Are platform fees waivable for NGO and government institutions?',
      answer:
        'Yes. Platform fees can be waived or negotiated through Memoranda of Understanding, grant funding arrangements, or state procurement agreements for qualifying institutional partners.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: different framing for institutions vs vendors.

export const ngoGovernmentFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline:
      'Empower Artisans. Advance SDGs. Scale Impact Through Institutional Craft Partnerships.',
    description:
      'Policy-linked programme integration, fair-trade governance, SDG impact tracking, and transparent institutional agreements — an NGO & Government partnership that brings Kashmiri heritage craft into the development frameworks that create lasting, measurable change.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Integrate Authentic Kashmir Craft Into Your Development Programmes?',
      supportingPoints: [
        'Verified, GI-certified artisan supply aligned with fair-trade and SDG procurement requirements.',
        'Measurable impact documentation — community outcomes, SDG evidence, and institutional reporting included.',
        'Fee waivers available via MoU, grant funding, or state procurement agreements.',
      ],
      primaryCta: {
        label: 'Apply as an Institution',
        href: '/registration',
      },
      secondaryCta: {
        label: 'Book a Discovery Call',
        href: '/book-consultation',
      },
    },
    vendor: {
      headline: 'Ready to Access Policy-Backed Institutional Markets and Fair-Trade Programmes?',
      supportingPoints: [
        'Stable institutional contracts, fair-wage guarantees, and policy-backed protection beyond commercial channels.',
        'NGO and government recognition builds the institutional credibility that Technology Collaboration requires.',
        "KPI 9.0+ — the platform's highest tier. This is the institutional-grade partnership your craft deserves.",
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

export const NGO_GOVERNMENT = {
  meta: ngoGovernmentMeta,
  heroSection: ngoGovernmentHero,
  overviewSection: ngoGovernmentOverview,
  modelDifferenceSection: ngoGovernmentModelDifference,
  eligibilityRulesSection: ngoGovernmentEligibilityRules,
  eligibilityAssessmentSection: ngoGovernmentEligibilityAssessment,
  capabilitiesSection: ngoGovernmentCapabilities,
  // platformAdvantageSection: ngoGovernmentPlatformAdvantage,
  pricingSection: ngoGovernmentPricing,
  technologySection: ngoGovernmentTechnology,
  apiIntegrationSection: ngoGovernmentApiIntegration,
  workflowSection: ngoGovernmentWorkflow,
  faqSection: ngoGovernmentFaq,
  finalCtaSection: ngoGovernmentFinalCta,
} as const;

export type NgoGovernmentContent = typeof NGO_GOVERNMENT;
