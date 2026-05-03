export type StorytellingMediaAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type StorytellingMediaQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const storytellingMediaMeta = {
  slug: 'storytelling-media',
  system: 'collaborative',
  tier: 3,
  label: 'Storytelling & Media',
  pageTitle: 'Storytelling & Media Partnerships',
  seoDescription:
    'A collaborative storytelling and media partnership that transforms Kashmiri craft into protected, authentic, globally marketable narratives — through professional photography, documentary video, cultural branding, and DRM-protected digital content.',
  kpiRequired: '8.5+',
  retentionRequired: '4 months at Design Collaboration',
  previousSlug: 'design-collaboration',
  nextSlug: 'warehousing',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['storytelling', 'media', 'branding', 'cultural-narrative', 'content', 'collaborative'],
} as const;

export const storytellingMediaHero = {
  sectionLabel: 'Storytelling & Media Partnership',
  shared: {
    badge: 'Collaborative — Tier 3',
    statusChip: 'KPI 8.5+ Required — Design Collaboration Completion Required',
  },
  roles: {
    buyer: {
      headline: 'Tell the Story Behind Your Kashmir Craft. Build the Brand Loyalty That Lasts.',
      description:
        'Access professional storytelling media assets — artisan narratives, photography, documentary video, and cultural content — that give your Kashmir craft collections the authentic brand depth premium consumers respond to. License DRM-protected storytelling assets that differentiate your brand from every competitor sourcing the same product.',
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
        'Give Your Kashmir Craft the Story It Deserves. Reach Premium Markets Without Studio Costs.',
      description:
        'Partner with professional media teams to create photography, artisan narratives, documentary content, and cultural heritage archives — without the upfront investment that professional studio production requires. Your story, your ownership, your reach — protected by DRM and blockchain from the moment it goes live.',
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

export const storytellingMediaOverview = {
  sectionLabel: 'Why Storytelling & Media',
  headline: 'Building Brand Value Through Craft Stories',
  description:
    'Without strong storytelling, authentic craft is treated as a commodity. This pathway enables structured media and brand narratives that build trust and market differentiation.',
  problems: [
    'Buyers struggle to distinguish authentic craft from counterfeits',
    'Vendors lack tools to communicate heritage and identity',
    'No structured system for consistent craft storytelling',
    'Limited reach of authentic narratives in premium markets',
  ],
  solutions: [
    'Professional media supporting artisan storytelling',
    'Clear differentiation through verified brand narratives',
    'Structured distribution of content across markets',
    'Improved trust and positioning in premium segments',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// "Partner" terminology replaced with buyer throughout.

export const storytellingMediaModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Storytelling That Protects Heritage and Builds Commercial Brand Value.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no generic content, no unverified narratives. Every story is GI-anchored, artisan-owned, and DRM-protected from creation.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Media and Branding Partner Network',
      description:
        'Platform connects Kashmiri craft vendors with certified media professionals, photographers, filmmakers, and branding partners — with governed creative rights, usage licences, and royalty structures defined from day one.',
    },
    {
      icon: 'Camera',
      title: 'Professional Photo and Video Studio Access',
      description:
        'Curated professional photography and videography — product shoots, artisan portraits, behind-the-scenes craft documentation, and documentary-format cultural storytelling — for every vendor regardless of location.',
    },
    {
      icon: 'Book',
      title: 'Digital Cultural Heritage Archives',
      description:
        'Structured digital archives preserve Kashmiri craft heritage stories, traditional technique documentation, and artisan origin records — protecting cultural identity from misrepresentation and ensuring authentic global reach.',
    },
    {
      icon: 'Megaphone',
      title: 'Cross-Border Campaign Distribution',
      description:
        'Marketplace drives global promotion through curated media partnerships, retail channel syndication, social platform distribution, and press collaborations — putting Kashmir craft stories where premium buyers are.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers Get',
      features: [
        {
          icon: 'Share2',
          title: 'Licensed Storytelling Assets for Marketing Campaigns',
          description:
            'Access DRM-protected, GI-verified artisan storytelling content — photography, video, and narrative text — licensed for use across your marketing channels, retail environments, and digital campaigns.',
        },
        {
          icon: 'Star',
          title: 'Brand Differentiation Through Cultural Authenticity',
          description:
            'Differentiate your brand with marketing assets that carry genuine artisan provenance — content competitors cannot replicate because it is tied to a specific artisan, a specific craft, and a verified cultural story.',
        },
        {
          icon: 'TrendingUp',
          title: 'Customer Education That Builds Purchase Confidence',
          description:
            'Educate consumers on heritage, craft technique, and artisan livelihoods — transforming product awareness into purchase confidence and brand loyalty that extends well beyond a single transaction.',
        },
        {
          icon: 'Users',
          title: 'CSR Credibility Through Artisan Promotion',
          description:
            'Enhance your corporate social responsibility profile by visibly promoting the artisan livelihoods and cultural heritage behind your Kashmir craft sourcing — with verified, documented impact content.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Professional Media Visibility Without Upfront Studio Costs',
          description:
            'Access professional photo studios, video production, and artisan narrative creation — building a brand media library that reaches global premium buyers without requiring independent studio investment.',
        },
        {
          icon: 'Award',
          title: 'Artisan Recognition Through Cultural Brand Building',
          description:
            'Products promoted through photography, cultural storytelling, and brand narrative campaigns — building artisan credibility, increasing global visibility, and establishing a distinct identity in premium markets.',
        },
        {
          icon: 'DollarSign',
          title: 'Professional Content That Drives Sales',
          description:
            'Professional storytelling content directly increases product perceived value and buyer engagement — driving higher conversion rates across e-commerce, retail, and exhibition channels.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Media Infrastructure for Exhibition and Export Readiness',
          description:
            'Media partnerships provide the campaign-ready content, product photography, and cultural documentation that exhibitions, wholesale buyers, and institutional partners require before engagement.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// KPI 8.5+ from specialRules — first tier to step up above 8.0. See FLAGS 1 and 2.

export const storytellingMediaEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Storytelling & Media Requires Design Collaboration Completion and Narrative Readiness',
  description:
    'Storytelling & Media is the third tier of the Collaborative system. Partners entering at this level have completed structured design co-creation through Design Collaboration and are ready for professional media production, cultural narrative development, and global brand content distribution.',
  requirements: [
    {
      label: 'KPI Required',
      value: '8.5+',
      note: 'Minimum performance score from prior Design Collaboration — higher than all preceding tiers.',
    },
    {
      label: 'Retention Period',
      value: '4 months at Design Collaboration',
      note: 'Full Design Collaboration retention must be completed before entry.',
    },
    {
      label: 'Previous Level',
      value: 'Design Collaboration',
      note: 'Standard path requires Design Collaboration completion within the Collaborative tier.',
    },
    {
      label: 'Compliance',
      value: 'Storytelling Materials and Visual Narrative Content',
      note: 'Approved product storytelling materials and visual or narrative brand content required.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Storytelling & Media with strong performance, partners unlock Warehousing — the final Collaborative tier — with integrated logistics, storage systems, and distribution-ready operational infrastructure.',
  nextSlug: 'warehousing',
  nextLabel: 'Warehousing',
} as const;

export const storytellingMediaEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Storytelling & Media, your narrative readiness, and whether you qualify for faster progression into Warehousing.',
  introCard: {
    icon: 'Target',
    title: 'Storytelling & Media Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your media and storytelling readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Storytelling & Media Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Storytelling & Media',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified',
        ],
        category: 'general' as StorytellingMediaAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Exceeds export excellence standards',
        ],
        category: 'general' as StorytellingMediaAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and trade?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Full zero-waste, carbon-tracked commitment',
        ],
        category: 'general' as StorytellingMediaAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Personalised with active feedback loop',
        ],
        category: 'general' as StorytellingMediaAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Fully certified safe workplaces and fair trade',
        ],
        category: 'general' as StorytellingMediaAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored ─────────────────────────────────
      {
        id: 'design_collaboration_retention',
        question: 'Did you complete 4 months retention in Design Collaboration?',
        type: 'single' as StorytellingMediaQuestionType,
        options: ['Yes', 'No', 'In Progress'],
        category: 'validation' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'design_collaboration_kpi',
        question: 'Did you maintain KPI 8.0 or above in Design Collaboration?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'storytelling_materials',
        question:
          'Do you have approved product storytelling materials — digital or media-ready content?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'visual_narrative_content',
        question: 'Have you developed visual or narrative content for brand promotion?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_media_assets',
        question:
          'Do you maintain a media asset library — product photos, videos, or artisan stories?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_digital_marketing',
        question:
          'Have you invested in digital marketing or storytelling campaigns for your craft?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_cultural_standards',
        question:
          'Are you prepared to meet international cultural storytelling guidelines and standards?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_readiness',
        question:
          'Which of these storytelling readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as StorytellingMediaQuestionType,
        options: [
          'Craft origin documentation — artisan background and craft technique records prepared',
          'Digital storytelling capability — able to produce or co-produce media content',
          'Cultural preservation storytelling — heritage narrative materials developed and ready',
        ],
        category: 'vendor' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type',
        question: 'What best describes your storytelling and media buying operation?',
        type: 'single' as StorytellingMediaQuestionType,
        options: [
          'Retail chain — integrating artisan storytelling into product marketing and in-store experience',
          'Wholesaler — using cultural content to differentiate Kashmir craft in distribution channels',
          'Cultural brand — building brand identity around authentic Kashmiri craft narratives',
        ],
        category: 'buyer' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_co_branded_media',
        question:
          'Do you require co-branded media storytelling assets for your marketing campaigns?',
        type: 'yesno' as StorytellingMediaQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_readiness',
        question:
          'Which of these buyer storytelling readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as StorytellingMediaQuestionType,
        options: [
          'Marketing integration budgets — campaign resources allocated for storytelling content',
          'Willingness to co-promote artisans — actively featuring artisan identity in marketing',
          'Adoption of cultural storytelling guidelines — aligned with platform content governance standards',
        ],
        category: 'buyer' as StorytellingMediaAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Storytelling & Media (TIER 3 / L11)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Storytelling & Media + Fast Track to Warehousing',
        fastTrackEligible: true,
        nextLevel: 'Warehousing',
      },
      21: {
        eligibility: 'Warehousing (TIER 3 / L12)',
        fastTrackEligible: true,
        nextLevel: 'Warehousing',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Storytelling & Media',
        kpiThreshold: 8.5,
        retentionPeriod: '4 months at Design Collaboration',
        minCommitment: '4 months at Storytelling & Media',
      },
      buyer: {
        commitment: 'Storytelling & Media',
        kpiThreshold: 8.5,
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Storytelling & Media (TIER 3 / L11)':
          "You're eligible for Storytelling & Media. Build your narrative capability and media infrastructure from here.",
        'Storytelling & Media + Fast Track to Warehousing':
          "Great fundamentals. You're eligible for Storytelling & Media with a fast track to Warehousing.",
        'Warehousing (TIER 3 / L12)':
          'Exceptional. Your storytelling and media record makes you eligible for Warehousing via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Storytelling & Media (TIER 3 / L11)': [
          'Join the Storytelling & Media programme.',
          'Upload artisan stories and product media assets.',
          'Complete KHCRF storytelling compliance review.',
          'Improve visual media quality and cultural narrative documentation.',
        ],
        'Storytelling & Media + Fast Track to Warehousing': [
          'Prepare fast-track documentation for Warehousing progression.',
          'Strengthen media systems, content readiness, and campaign delivery workflows.',
          'Complete advanced KHCRF storytelling and compliance review.',
          'Align distribution-ready content and operational partner documentation.',
        ],
        'Warehousing (TIER 3 / L12)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit storytelling, media, and operational documentation.',
          'Complete KHCRF distribution-readiness and Warehousing progression review.',
          'Prepare for direct transition into Warehousing onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Storytelling & Media (TIER 3 / L11)': [
          'Commitment to craft storytelling and narrative building',
          'Strong Collaborative tier foundation from Design Collaboration',
        ],
        'Storytelling & Media + Fast Track to Warehousing': [
          'Media assets and digital storytelling capability',
          'Cultural preservation documentation readiness',
          'Clear Warehousing progression trajectory',
        ],
        'Warehousing (TIER 3 / L12)': [
          'Full storytelling and media infrastructure established',
          'Strong KHCRF compliance and cultural narrative record',
          'Distribution-ready campaign content systems',
        ],
      },
      improvementsByOutcome: {
        'Storytelling & Media (TIER 3 / L11)': [
          'Develop craft origin documentation and artisan heritage records.',
          'Adopt international cultural storytelling guidelines and governance standards.',
          'Build digital storytelling capability and media asset library.',
        ],
        'Storytelling & Media + Fast Track to Warehousing': [
          'Strengthen distribution-ready content and logistics-linked campaign systems.',
          'Align channel-ready media with Warehousing operational requirements.',
        ],
        'Warehousing (TIER 3 / L12)': [],
      },
      defaultStrengths: [
        'Commitment to authentic storytelling and cultural narrative',
        'Strong Collaborative tier foundation from Design Collaboration',
      ],
      defaultDevelopmentAreas: [
        'Develop craft origin documentation and cultural heritage records.',
        'Adopt cultural storytelling guidelines and build media asset capability.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Media Partner Advantages" renamed to "Media and Content Partner Advantages".

export const storytellingMediaCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Media Infrastructure for Kashmir Craft Storytelling',
  subheadline:
    'Professional content and brand narratives building trust, visibility, and buyer conversion.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Vendors connected with certified media and branding partners',
        'Structured contracts covering rights, usage, and licensing',
        'Secure archives for long-term campaign and heritage assets',
      ],
    },
    {
      title: 'Media Production',
      icon: 'Camera',
      items: [
        'Professional photography, video, and post-production support',
        'Content adapted for retail, digital, and exhibition use',
        'Campaign refinement based on performance and market needs',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Engagement analytics across all campaign channels',
        'Narrative insights showing what drives buyer response',
        'ROI tracking across content, products, and categories',
      ],
    },
    {
      title: 'Brand Visibility',
      icon: 'Film',
      items: [
        'Authentic artisan storytelling for premium positioning',
        'Licensed media assets strengthening buyer campaigns',
        'Global exposure through heritage-led brand content',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Use authentic artisan stories in premium brand campaigns',
        'Educate customers through heritage-led product narratives',
        'Access exclusive media assets competitors cannot replicate',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Gain professional storytelling without major upfront cost',
        'Build trust through authentic heritage-driven branding',
        'Attract premium buyers through stronger market visibility',
      ],
    },
  },

  impact: [
    {
      title: 'Heritage Protection',
      description: 'Keeping artisan narratives accurate, owned, and globally respected',
    },
    {
      title: 'Global Cultural Branding',
      description: 'Strengthening Kashmir’s identity as a craft origin worldwide',
    },
    {
      title: 'Premium Positioning',
      description: 'Reframing craft as a heritage experience, not a commodity',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed per global architecture.

// export const storytellingMediaPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Storytelling & Media partnership enhances global visibility for Kashmir craft — building premium brand trust through authentic artisan narratives, multimedia campaigns, and heritage-led content that elevates both vendor credibility and buyer brand identity.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Stronger Brand Campaigns With Cultural Storytelling',
//           description:
//             'Use authentic artisan heritage stories, photography, and documentary content in your marketing — creating cultural brand depth that differentiates your Kashmir craft collections from every competitor.',
//         },
//         {
//           title: 'Customer Education That Drives Purchase Confidence',
//           description:
//             'Educate your customers on heritage, artisan technique, and ethical sourcing — transforming product awareness into purchase conviction and the kind of brand loyalty that generates repeat business.',
//         },
//         {
//           title: 'Unique Artisan Media Assets No Competitor Can Access',
//           description:
//             'License DRM-protected storytelling assets — photography, video, artisan narratives — that are tied to specific artisans and verified heritage stories that no competitor can replicate or reassign.',
//         },
//         {
//           title: 'CSR Credibility Through Visible Artisan Impact',
//           description:
//             'Demonstrate your commitment to ethical sourcing and artisan livelihoods through documented, verifiable impact content — strengthening your CSR profile in markets where sourcing integrity increasingly drives purchase decisions.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Global Media Visibility Through Professional Storytelling',
//           description:
//             'Gain multimedia brand visibility through professional craft storytelling campaigns — reaching premium buyers globally through channels that informal trade channels and generic product listings never access.',
//         },
//         {
//           title: 'Authentic Heritage Story Builds Long-Term Trust',
//           description:
//             'Sharing verified artisan heritage stories builds a level of buyer trust and brand recognition that product quality alone cannot create — establishing your craft business as a premium, credible global brand.',
//         },
//         {
//           title: 'Stronger Branding Attracts Premium Buyers',
//           description:
//             'Professional media content positions your Kashmir craft in the premium market tier — attracting buyers who specifically seek authentic heritage products and are willing to pay the premium they command.',
//         },
//         {
//           title: 'Long-Term Recognition Beyond Transactional Sales',
//           description:
//             'Brand storytelling creates lasting artisan recognition — building an identity that persists across sales cycles, generates inbound buyer interest, and supports pricing stability in premium channels.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Protecting Heritage Narratives From Misrepresentation',
//         description:
//           'Governed storytelling infrastructure protects authentic Kashmiri heritage narratives from misrepresentation, cultural appropriation, and unauthorised commercial use — ensuring stories remain accurate and artisan-owned.',
//       },
//       {
//         title: "Enhancing Kashmir's Cultural Brand Globally",
//         description:
//           'Professional storytelling campaigns that consistently represent authentic Kashmiri craft heritage build a powerful, consistent global cultural brand for Kashmir as a craft origin — beyond any individual product or artisan.',
//       },
//       {
//         title: 'Elevating Craft as Heritage Experience, Not Commodity',
//         description:
//           'Structured media storytelling repositions Kashmir craft in the global market from a product commodity to a cultural experience — attracting premium buyers and institutional partners who value heritage.',
//       },
//       {
//         title: 'Building Global Respect for Kashmiri Artisan Communities',
//         description:
//           'Authentic, artisan-first storytelling campaigns build genuine international respect and recognition for Kashmiri craft communities — strengthening sector credibility and consumer trust across all global markets.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles.
// $250 one-time onboarding fee covers content rights registration, contracts,
// and platform hosting. Yearly billing.
// See CLIENT FLAGS 3 and 4.

export const storytellingMediaPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Authentic Storytelling.',
  description:
    'Three clear yearly package tiers covering storytelling access, media production depth, and content distribution scope. One-time onboarding fee covers content rights registration, contracts, and media hosting setup.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Storytelling & Media partnership.',
  freeOffer: {
    title: 'One-Time Onboarding Fee',
    description:
      'A $250 one-time onboarding fee covers content rights registration, creative contracts, and media platform hosting configuration.',
    note: 'Annual package fees apply after onboarding is complete.',
    badge: 'Required for All Storytelling & Media Partners',
  },
  packages: [
    {
      name: 'Standard',
      price: '$100',
      billingPeriod: 'year',
      features: [
        'Basic storytelling package — artisan profile story and product catalog',
        'Global platform media repository hosting',
        'Standard digital rights and copyright protection',
        'Basic content distribution to platform partners',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$250',
      billingPeriod: 'year',
      features: [
        'Enhanced storytelling kit — photography and artisan interviews',
        'Content distribution via platform media partners',
        'Extended DRM and global monitoring protection',
        'Co-branded media assets for buyer marketing use',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$500',
      billingPeriod: 'year',
      features: [
        'Full media package — documentary video and cultural story integration',
        'Global marketing distribution — online and exhibition channels',
        'Dedicated content manager and legal protection suite',
        'Eligibility consideration for Institutional Partnership pathways',
      ],
      recommended: false,
    },
  ],
  range: '$100–$500/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// All 8 icons valid Lucide icons — preserved from raw file.
// Support line is clean — preserved as-is.

export const storytellingMediaTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Storytelling Protection Framework',
  description:
    "Every Kashmir craft story is safeguarded under DKC's Protection Suite — ensuring narrative authenticity, artisan ownership, and commercial content security across all global markets.",
  features: [
    {
      icon: 'Lock',
      title: 'Digital Rights Management',
      description:
        'DRM systems protect all storytelling videos, photography, and written narrative content — with usage rights, access controls, and licence enforcement applied automatically.',
    },
    {
      icon: 'Link',
      title: 'Blockchain Story Ledger',
      description:
        'Blockchain links every piece of storytelling content metadata to its artisan origin — creating secure, immutable traceability from creation through every commercial use.',
    },
    {
      icon: 'Server',
      title: 'Encrypted Media Hosting',
      description:
        'Military-grade encrypted storage for all digital media files — photography, video, audio, and narrative documents — accessible only to licensed partners.',
    },
    {
      icon: 'Globe',
      title: 'Global Content Monitoring',
      description:
        'Continuous internet-wide scanning for unauthorised use of storytelling content — detecting misuse across social platforms, e-commerce channels, and global digital marketplaces.',
    },
    {
      icon: 'Search',
      title: 'AI Content Tracking',
      description:
        'AI-powered reverse image and video tracking detects misuse of artisan photography and storytelling content worldwide — with automated alert and response workflows.',
    },
    {
      icon: 'Gavel',
      title: 'Legal Enforcement Support',
      description:
        'Direct access to legal consultation and enforcement mechanisms — providing immediate support for any content rights violation or unauthorised use of protected storytelling assets.',
    },
    {
      icon: 'Shield',
      title: 'Access Control Systems',
      description:
        'Restricts unauthorised downloads, copying, and redistribution of creative storytelling works — with role-based access controls per licence and partner type.',
    },
    {
      icon: 'Clock',
      title: 'Usage Analytics and Reporting',
      description:
        'Monitors content engagement, view counts, and usage patterns across all digital platforms — providing both vendors and buyers with performance insights per storytelling asset.',
    },
  ],
  support:
    'Every Kashmir craft story remains authentic, artisan-owned, and commercially protected across all global markets and media channels.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers managing campaign assets and vendors managing media.
// 12 features preserved from raw file.
// Prime Logic removed throughout.
// ShoppingBag is valid Lucide — kept.

export const storytellingMediaApiIntegration = {
  sectionLabel: 'Media Integration',
  headline: 'Already Producing Brand Media? Accelerate With DKC.',
  description:
    'Accelerate brand media production with studio-grade asset management, rights protection infrastructure, and global content syndication tools — all integrated into a single storytelling platform.',
  features: [
    {
      icon: 'UserCheck',
      title: 'Rights and Release Management',
      description:
        'Model releases, NDAs, content licences, usage window definitions, and property rights — all centralised and digitally executed for every media production.',
    },
    {
      icon: 'BookOpen',
      title: 'Creative Strategy and Narrative Alignment',
      description:
        'Heritage narratives aligned to target audiences, distribution channels, campaign objectives, and cultural authenticity standards for every partner story.',
    },
    {
      icon: 'Camera',
      title: 'Professional Photo Studio',
      description:
        'Colour-accurate multi-angle photography, 360-degree product views, turntable shoots, macro detail capture, and calibrated lighting profiles for all craft categories.',
    },
    {
      icon: 'Video',
      title: 'Video Production Pipeline',
      description:
        'Reels, explainer videos, behind-the-scenes documentation, subtitle management, caption creation, and multi-language localisation packages for global distribution.',
    },
    {
      icon: 'Palette',
      title: 'Brand Guideline Systems',
      description:
        'Typography standards, colour systems, packaging lockup specifications, social media templates, and usage governance documentation for co-branded content.',
    },
    {
      icon: 'Globe',
      title: 'AR and Immersive Asset Creation',
      description:
        'GLB and USDZ 3D model production, virtual try-on experiences, room placement viewers, and embeddable AR SDKs for premium product engagement.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Marketplace Content Syndication',
      description:
        'Publish product images, video assets, and storytelling specifications directly to Shopify, Amazon, and international retail buyer portals.',
    },
    {
      icon: 'Search',
      title: 'SEO and Accessibility Optimisation',
      description:
        'Schema.org structured data, optimised alt text, WCAG-compliant captions, and localised language variant management for maximum content discoverability.',
    },
    {
      icon: 'Users',
      title: 'User-Generated Content Community',
      description:
        'Rights request workflows, content curation, partner whitelisting, moderation systems, and incentive compliance management for UGC programmes.',
    },
    {
      icon: 'Calendar',
      title: 'Campaign Orchestration Tools',
      description:
        'Content calendars, multi-stakeholder approval workflows, influencer whitelisting, UTM link tracking, and campaign performance attribution management.',
    },
    {
      icon: 'BarChart',
      title: 'Media Performance Analytics',
      description:
        'View-through and click-through tracking, assisted revenue attribution, audience cohort analysis, and long-term retention insight dashboards.',
    },
    {
      icon: 'Newspaper',
      title: 'Press and Media Partnerships',
      description:
        'Media kit generation, embargo management, curator and press outreach coordination, and coverage tracking dashboards for earned media campaigns.',
    },
  ],
  support: {
    description:
      'Storytelling media integration support covering DAM, PIM, and CMS onboarding, CDN optimisation configuration, AI watermarking API setup, schema automation, and marketplace content connectors.',
    note: 'Sandbox environments, SDKs, and SLAs available for all active Storytelling & Media partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const storytellingMediaWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Storytelling — Five Steps',
  description:
    'A structured, rights-governed activation process for professional Kashmir craft media partnerships.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Storytelling & Media application with identity, business details, and Design Collaboration completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Check',
      description:
        'Platform validates KPI from Design Collaboration (8.5+ required), storytelling material status, and visual narrative content readiness.',
    },
    {
      step: 3,
      label: 'Story Development',
      description:
        'Media brief creation, artisan narrative documentation, photo and video production, and DRM-protected content hosting activated.',
    },
    {
      step: 4,
      label: 'Story Distribution',
      description:
        'Storytelling assets distributed across platform partners, retail channels, e-commerce marketplaces, and global campaign networks.',
    },
    {
      step: 5,
      label: 'Growth and Progression',
      description:
        'Content performance tracked. With 4 months and strong KPI, partners unlock Warehousing — the final Collaborative tier.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'warehousing',
    name: 'Warehousing',
    kpiRequired: '8.5+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const storytellingMediaFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Storytelling & Media',
  items: [
    {
      question: 'Do I need to complete Design Collaboration before joining?',
      answer:
        'Yes. Four months of Design Collaboration with KPI 8.0+ is required for the standard path. KHCRF lateral evaluation can bypass this for qualified partners with existing professional media and storytelling capability.',
    },
    {
      question: 'What kind of media content is included?',
      answer:
        'Artisan profile stories, product photography, artisan interviews, behind-the-scenes craft documentation, and documentary-format cultural videos — depending on the package tier selected.',
    },
    {
      question: 'Who owns the storytelling content?',
      answer:
        'The artisan retains full ownership of their heritage story, identity, and cultural narrative. Buyers receive a commercial usage licence — defined in the media contract — for marketing and promotional purposes. Ownership is never transferred.',
    },
    {
      question: 'How is content authenticity verified?',
      answer:
        'Through GI certification, blockchain metadata linking, artisan identity verification, and KHCRF compliance review — ensuring every piece of storytelling content is anchored to a verified, authentic Kashmir craft source.',
    },
    {
      question: 'Can buyers use these stories in their own marketing campaigns?',
      answer:
        'Yes. Storytelling assets are structured as licensed, DRM-protected marketing assets — cleared for buyer use across defined channels and usage windows per the commercial licence agreement.',
    },
    {
      question: 'What does Storytelling & Media unlock after completion?',
      answer:
        'Completing 4 months at Storytelling & Media with KPI 8.5+ unlocks Warehousing — the final Collaborative tier — with integrated logistics infrastructure, storage systems, and distribution-ready operational capability.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const storytellingMediaFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: 'Authentic Kashmir Craft Stories. Protected. Branded. Globally Distributed.',
    description:
      'DRM-protected storytelling assets, professional media production, and global distribution infrastructure — a Storytelling & Media partnership that turns Kashmir craft heritage into commercially powerful brand narrative.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Differentiate Your Brand With Authentic Kashmir Craft Storytelling?',
      supportingPoints: [
        'Licensed DRM-protected content — artisan narratives and photography tied to verified heritage.',
        'Cultural brand depth that mass-market sourcing competitors cannot replicate or access.',
        'Storytelling assets structured for immediate marketing, retail, and campaign deployment.',
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
      headline: 'Ready to Give Your Kashmir Craft the Professional Media Story It Deserves?',
      supportingPoints: [
        'Professional photography, documentary video, and artisan narratives — without upfront studio costs.',
        'Full artisan ownership of your story — DRM and blockchain protection from creation to global distribution.',
        'Storytelling media is the foundation for Warehousing and every institutional partnership ahead.',
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

export const STORYTELLING_MEDIA = {
  meta: storytellingMediaMeta,
  heroSection: storytellingMediaHero,
  overviewSection: storytellingMediaOverview,
  modelDifferenceSection: storytellingMediaModelDifference,
  eligibilityRulesSection: storytellingMediaEligibilityRules,
  eligibilityAssessmentSection: storytellingMediaEligibilityAssessment,
  capabilitiesSection: storytellingMediaCapabilities,
  // platformAdvantageSection: storytellingMediaPlatformAdvantage,
  pricingSection: storytellingMediaPricing,
  technologySection: storytellingMediaTechnology,
  apiIntegrationSection: storytellingMediaApiIntegration,
  workflowSection: storytellingMediaWorkflow,
  faqSection: storytellingMediaFaq,
  finalCtaSection: storytellingMediaFinalCta,
} as const;

export type StorytellingMediaContent = typeof STORYTELLING_MEDIA;
