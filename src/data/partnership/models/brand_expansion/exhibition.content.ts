export type ExhibitionAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type ExhibitionQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const exhibitionMeta = {
  slug: 'exhibition',
  system: 'brand-growth',
  previousSystem: 'core-trade',
  tier: 2,
  label: 'Exhibition',
  pageTitle: 'Exhibition Partnerships',
  seoDescription:
    'A global showcase pathway that brings authentic Kashmiri craft to international buyers through curated exhibitions, trade fairs, and cultural events — with professional booth support, branding, and verified lead generation.',
  kpiRequired: '7.0+',
  retentionRequired: '4 months',
  previousSlug: 'import-export',
  nextSlug: 'auction',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['exhibition', 'showcase', 'trade-fair', 'premium', 'visibility', 'brand-expansion'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer is an exhibition organizer/event planner sourcing craft for events.
// Vendor is an artisan or craft business showcasing at exhibitions.
// Screenshot 1 copy used as basis — upgraded and role-split.

export const exhibitionHero = {
  sectionLabel: 'Exhibition Partnership',
  shared: {
    badge: 'Brand Expansion — Tier 2',
    statusChip: 'KPI 7.0+ Required — Fast-Track Available',
  },
  roles: {
    buyer: {
      headline: 'Curate Premium Kashmir Craft Exhibitions. Source Directly From Verified Artisans.',
      description:
        'Source GI-certified Kashmir craft collections for high-profile trade events, cultural showcases, and exhibitions — directly from verified artisan vendors.',
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
      headline: 'Showcase Your Kashmir Craft on the Global Exhibition Stage.',
      description:
        'DKC organises and supports vendors with booth placement, branding, digital catalogs, and verified buyer engagement at curated global exhibitions.',
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
// Screenshot 1 overview copy used and enhanced.

export const exhibitionOverview = {
  sectionLabel: 'Why Exhibition',
  headline: 'Accessing Global Craft Exhibitions',
  description:
    'Global exhibitions are difficult to access due to cost, logistics, and lack of structure. This pathway enables vendors to participate in curated events while giving buyers verified sourcing access.',
  problems: [
    'Vendors lack access to global exhibitions and trade fairs',
    'High logistics and participation costs limit artisan entry',
    'No structured support for booth setup and presentation',
    'Buyers lack verified sourcing channels for exhibition-ready craft',
  ],
  solutions: [
    'Access to curated exhibitions in high-demand global markets',
    'Managed logistics and reduced participation complexity',
    'Professional booth setup, branding, and catalog support',
    'Verified sourcing for buyers and event organizers',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Organizer/Exhibitor terminology fully replaced with buyer/vendor.

export const exhibitionModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Not a Generic Trade Show. Kashmir-Exclusive. Professionally Supported.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — every exhibition partnership is verified, GI-authenticated, and professionally managed from booth to buyer lead.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Curated Global Exhibition Access',
      description:
        'Connects verified Kashmiri craft vendors with exhibition organizers, buyers, and event planners globally.',
    },
    {
      icon: 'Shield',
      title: 'GI and KHCRF Certification Standards',
      description:
        'Every DKC exhibition product is GI-certified and KHCRF-verified — only genuine Kashmir craft.',
    },
    {
      icon: 'BookOpen',
      title: 'Digital Catalogs and Promotional Visibility',
      description:
        'Collections featured in digital exhibition catalogs — pre-event, during-event, and post-event visibility.',
    },
    {
      icon: 'MapPin',
      title: 'Multi-Venue Exhibition Reach',
      description:
        'DKC exhibitions span trade fairs, museums, international expos, and artisan showcases globally.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Buyers and Organizers Get',
      features: [
        {
          icon: 'Briefcase',
          title: 'Curated Kashmiri Craft Collections',
          description:
            'GI-certified Kashmir craft from handwoven textiles to fine woodwork — for premium exhibitions.',
        },
        {
          icon: 'CheckCircle',
          title: 'Certified and Ethically Sourced Products',
          description:
            'Every collection authenticity-verified, ethically sourced, and certified for premium events.',
        },
        {
          icon: 'Users',
          title: 'Direct Artisan Engagement',
          description:
            'Engage directly with artisan vendors for cultural context and deeper exhibition storytelling.',
        },
        {
          icon: 'TrendingUp',
          title: 'Exclusive Sourcing and Pre-Order Access',
          description:
            'Place bulk pre-orders during exhibitions — limited-edition collections unavailable through standard trade channels.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Premium Curated Exhibition Placement',
          description:
            'Showcase products in premium exhibition environments with professional booth and branding support.',
        },
        {
          icon: 'Award',
          title: 'Artisan Credibility and Global Recognition',
          description:
            'GI certification and cultural branding elevate artisan credibility in global markets.',
        },
        {
          icon: 'DollarSign',
          title: 'Direct Sales and Wholesale Lead Generation',
          description:
            'Drive direct exhibition sales and wholesale inquiries from authenticated Kashmir craft buyers.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Progression to Auction and White Label',
          description:
            'Exhibition performance builds buyer relationships that unlock Auction and White Label tiers.',
        },
      ],
    },
  },
} as const;

// ─── Key Features Section (NEW) ───────────────────────────────────────────────
// Source: Screenshot 2 — seven tabbed feature categories.
// Shared: platform features are not role-specific.
// Renderer: tabbed grid. Default active tab = 'sourcing'.

// export const exhibitionKeyFeatures = {
//   sectionLabel: 'Platform Features',
//   headline: 'Exhibition Infrastructure Built for Premium Kashmir Craft Showcases.',
//   subheadline:
//     'A business model designed to elevate buyers, retailers, and exhibition organizers on the global stage for sourcing authentic Kashmiri handicrafts.',
//   defaultTab: 'sourcing',
//   categories: [
//     {
//       id: 'sourcing',
//       label: 'Advanced Exhibition & Trade Integration',
//       items: [
//         'Seamless access to verified Kashmiri craft vendors for direct exhibition procurement.',
//         'AI-powered sourcing insights to track trending handicrafts and emerging buyer demand.',
//         'Cloud-based buyer dashboard for streamlined order and exhibition management.',
//         'Mobile-friendly marketplace for wholesale and retail buyer engagement at events.',
//         'Secure buyer authentication to ensure full trade and exhibition compliance.',
//         'Smart matchmaking tools to connect exhibitors with top-tier qualified buyers.',
//         'Automated order notifications for efficient procurement tracking after events.',
//       ],
//     },
//     {
//       id: 'api-integrations',
//       label: 'Seamless API-Driven Trade Tools',
//       items: [
//         'Logistics APIs for optimised shipment coordination to and from exhibition venues.',
//         'Payment APIs for secure and fast transaction processing at events.',
//         'Marketing automation APIs to promote curated Kashmiri exhibition collections.',
//         'Social media APIs for buyer engagement and wider exhibition visibility.',
//         'Product authentication APIs to ensure sourcing credibility for all buyers.',
//         'Multi-language APIs for broader global market access at international exhibitions.',
//         'Customs compliance APIs for smooth cross-border import processes.',
//       ],
//     },
//     {
//       id: 'authentication',
//       label: 'Product Authentication & Compliance',
//       items: [
//         'GI certification for heritage verification of all showcased Kashmiri crafts.',
//         'Blockchain-backed traceability to prevent counterfeits at exhibition events.',
//         'US-compliant labelling and packaging for retail-ready exhibition products.',
//         'Legal documentation support for customs approvals and cross-border participation.',
//         'Tamper-proof authenticity tags for luxury market positioning at exhibitions.',
//         'Ethical sourcing verification to ensure fair trade practices across all vendors.',
//         'Counterfeit detection systems for full buyer protection at every event.',
//       ],
//     },
//     {
//       id: 'marketing',
//       label: 'Market-Driven Trade Promotion Features',
//       items: [
//         'AI-powered recommendations for premium buyer curation at exhibition events.',
//         'Geo-targeted digital advertising for exclusive Kashmiri handicraft showcases.',
//         'Tailored retail branding solutions for artisan collection promotion.',
//         'Cultural storytelling integration to engage consumer markets at exhibitions.',
//         'Influencer and media collaborations for enhanced brand and exhibition exposure.',
//         'SEO-optimised digital catalogs to boost product discoverability globally.',
//         'Curated craft collections for retail buyers and event planners.',
//       ],
//     },
//     {
//       id: 'logistics',
//       label: 'Global Logistics & Supply Chain Solutions',
//       items: [
//         'End-to-end freight solutions for efficient import and exhibition delivery.',
//         'Strategic US-based warehousing for streamlined order fulfilment after events.',
//         'Real-time shipment tracking for buyers and retailers throughout the process.',
//         'Customs brokerage assistance to simplify trade compliance for international vendors.',
//         'Reverse logistics support for buyer-friendly return policies after exhibitions.',
//         'Optimised export-ready packaging for international exhibition distribution.',
//         'Sustainable shipping solutions to meet eco-conscious exhibition standards.',
//       ],
//     },
//     {
//       id: 'outreach',
//       label: 'Content & Outreach Management',
//       items: [
//         'Multilingual content creation for international buyers and exhibition audiences.',
//         'AI-driven sourcing insights for market expansion and exhibition planning.',
//         'SEO-enhanced exhibitor profiles for increased global visibility.',
//         'Interactive storytelling features to highlight artisan heritage and cultural identity.',
//         'Automated content workflow tools for event organisers and exhibition managers.',
//         'Translation services for seamless cross-border collaboration at international events.',
//         'Press release and media partnerships to enhance event and exhibition exposure.',
//       ],
//     },
//     {
//       id: 'financing',
//       label: 'Financial & Buyer Support',
//       items: [
//         'Trade financing solutions to support bulk purchases at exhibition events.',
//         'Flexible payment terms for large-scale procurement through exhibitions.',
//         'Buy Now, Pay Later (BNPL) and instalment options for exhibition buyers.',
//         'Vendor-backed trade credit lines for trusted long-term exhibition buyers.',
//         'Insurance policies for secured transactions at exhibition events.',
//         'Pre-approved credit facilities for long-term procurement partnerships.',
//         'Customised transaction models for wholesale buyers at exhibition scale.',
//       ],
//     },
//   ],
// } as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// Values taken from cluster file (brandGrowth_content.ts).

export const exhibitionEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Exhibition Requires Core Trade Completion and Brand Presence',
  description:
    'Exhibition is the first tier of Brand Expansion. Partners entering Exhibition have demonstrated consistent international trade performance through Core Trade and are ready to build global brand visibility through curated showcase environments.',
  requirements: [
    {
      label: 'KPI Required',
      value: '7.0+',
      note: 'Minimum performance score from prior Import & Export trade.',
    },
    {
      label: 'Retention Period',
      value: '4 months',
      note: 'Minimum time at Exhibition before progressing to Auction.',
    },
    {
      label: 'Previous Level',
      value: 'Import & Export',
      note: 'Standard path requires Import & Export completion from Core Trade.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation can bypass retention for qualified partners.',
    },
  ],
  progressionNote:
    'After completing 4 months at Exhibition with KPI 7.5+, partners unlock Auction — the next Brand Expansion tier — with premium competitive bidding and collector-grade product positioning.',
  nextSlug: 'auction',
  nextLabel: 'Auction & Bidding',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// Shared structure. Questions are role-filtered at runtime.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() exhibition block.

export const exhibitionEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Exhibition, your readiness level, and whether you qualify for faster progression into Auction.',
  introCard: {
    icon: 'Target',
    title: 'Exhibition Eligibility Assessment',
    description:
      'Thirteen questions. Personalised results. No email required. Understand your exhibition readiness and what progression pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '13 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Exhibition Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Exhibition',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'Mixed or synthetic',
          'Mostly authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-certified',
        ],
        category: 'general' as ExhibitionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets platform and exhibition standards',
          'Exceeds exhibition and premium market standards',
        ],
        category: 'general' as ExhibitionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'No focus',
          'Some sustainable practices',
          'Significant sustainable portion',
          'Mostly eco-friendly production',
          'Full zero-waste commitment',
        ],
        category: 'general' as ExhibitionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your customer or buyer experience approach?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'No defined approach',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Exceptional and proactive',
        ],
        category: 'general' as ExhibitionAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices in your operations?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'No clear policy',
          'Minimum wages only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Market-rate wages with fully certified safe workplaces',
        ],
        category: 'general' as ExhibitionAssessmentCategory,
        weight: 1,
      },

      // ── Validation questions — unscored, check prior level completion ───
      {
        id: 'import_export_retention',
        question: 'Did you complete 4 months retention in Import & Export?',
        type: 'single' as ExhibitionQuestionType,
        options: ['No', 'In Progress', 'Yes'],
        category: 'validation' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'import_export_kpi',
        question: 'Did you maintain KPI 7.0 or above in Import & Export?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'packaging_compliance',
        question: 'Do you have international packaging and branding compliance documentation?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'customs_audit',
        question: 'Did you complete a customs and logistics readiness audit?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'validation' as ExhibitionAssessmentCategory,
        weight: 0,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_catalogs',
        question: 'Do you have digital catalogs or portfolios ready for trade fairs?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_exhibition_inventory',
        question: 'Can you manage exhibition inventory and logistics coordination?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_branding_materials',
        question: 'Do you have branding and cultural storytelling materials prepared?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_exhibition_readiness',
        question:
          'Which vendor exhibition readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ExhibitionQuestionType,
        options: [
          'Booth display capability — physical or digital booth setup ready',
          'Cultural storytelling integration — heritage narrative prepared for exhibition',
          'Event compliance — permits, certifications, and documentation in order',
          'Valid passport for international exhibition participation',
        ],
        category: 'vendor' as ExhibitionAssessmentCategory,
        weight: 0,
      },

      // ── Buyer-only questions — unscored ─────────────────────────────────
      {
        id: 'buyer_type_exhibition',
        question: 'What best describes your exhibition buying or organising role?',
        type: 'single' as ExhibitionQuestionType,
        options: [
          'Retailer or boutique buyer sourcing at exhibitions',
          'Wholesaler or distributor attending trade fairs',
          'Institutional buyer — museum, gallery, or cultural organisation',
        ],
        category: 'buyer' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_sourcing_capacity_exhibition',
        question: 'What is your approximate annual sourcing budget for exhibition procurement?',
        type: 'single' as ExhibitionQuestionType,
        options: ['Under $50,000', 'Over $50,000'],
        category: 'buyer' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_product_verification',
        question: 'Do you require on-site product verification at exhibitions?',
        type: 'yesno' as ExhibitionQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as ExhibitionAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_exhibition_readiness',
        question:
          'Which buyer exhibition readiness indicators apply to you? Select all that apply.',
        type: 'multiple' as ExhibitionQuestionType,
        options: [
          'Trade show attendance commitment — confirmed event participation',
          'Import licence and clearance readiness for exhibition purchases',
          'Established partnership with certified Kashmiri craft vendors',
        ],
        category: 'buyer' as ExhibitionAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Exhibition (TIER 2 / L5)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Exhibition + Fast Track to Auction',
        fastTrackEligible: true,
        nextLevel: 'Auction',
      },
      21: {
        eligibility: 'Auction (TIER 2 / L6)',
        fastTrackEligible: true,
        nextLevel: 'Auction',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: null,
        kpiThreshold: 7.0,
        retentionPeriod: '4 months',
      },
      buyer: {
        commitment: null,
        kpiThreshold: 7.0,
        retentionPeriod: '4 months',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Exhibition (TIER 2 / L5)':
          "You're eligible for Exhibition. Build your global presence and brand credibility from here.",
        'Exhibition + Fast Track to Auction':
          "Great fundamentals. You're eligible for Exhibition with a fast track to Auction.",
        'Auction (TIER 2 / L6)':
          'Exceptional. Your exhibition performance makes you eligible for Auction via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Exhibition (TIER 2 / L5)': [
          'Join the Exhibition programme.',
          'Submit export documentation and exhibition credentials.',
          'Complete KHCRF customs and exhibition compliance review.',
          'Build international warehousing support for event logistics.',
        ],
        'Exhibition + Fast Track to Auction': [
          'Join the Exhibition programme.',
          'Enrol in the Readiness Programme (RP).',
          'Strengthen catalog, branding, and fair-readiness materials.',
          'Prepare for Auction pathway activation.',
        ],
        'Auction (TIER 2 / L6)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit exhibition participation records and product credentials.',
          'Complete KHCRF product verification review.',
          'Prepare for direct transition into Auction onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Exhibition (TIER 2 / L5)': [
          'Commitment to global trade and exhibition participation',
          'Solid operational foundation from Core Trade',
        ],
        'Exhibition + Fast Track to Auction': [
          'Exhibition catalogs and branding materials ready',
          'Strong exhibition inventory management',
          'Clear Auction progression trajectory',
        ],
        'Auction (TIER 2 / L6)': [
          'Global exhibition experience',
          'Strong compliance and certification record',
          'Premium product positioning capability',
        ],
      },
      improvementsByOutcome: {
        'Exhibition (TIER 2 / L5)': [
          'Strengthen export licences and customs compliance documentation.',
          'Improve booth display and cultural storytelling capability.',
          'Build international warehousing and reverse logistics infrastructure.',
        ],
        'Exhibition + Fast Track to Auction': [
          'Advance auction readiness — premium product documentation.',
          'Strengthen branding and cultural storytelling for Auction positioning.',
        ],
        'Auction (TIER 2 / L6)': [],
      },
      defaultStrengths: [
        'Commitment to global exhibition participation',
        'Strong Core Trade foundation',
        'Exhibition catalog and branding readiness',
      ],
      defaultDevelopmentAreas: [
        'Strengthen export licences and customs compliance.',
        'Improve exhibition booth and storytelling capability.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// Organizer/Exhibitor terminology from raw file replaced with buyer/vendor.

export const exhibitionCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Global Exhibition Infrastructure for Kashmir Craft',
  subheadline: 'Curated showcases connecting verified vendors with high-intent global buyers.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Server',
      items: [
        'Verified vendors connected with buyers and organisers',
        'Standardised exhibition contracts and agreements',
        'Digital catalogs for global exhibition exposure',
      ],
    },
    {
      title: 'Fulfilment & Compliance',
      icon: 'Truck',
      items: [
        'Managed exhibition logistics and venue coordination',
        'GI, KHCRF, and fair-trade compliant participation',
        'Insured inventory with reverse logistics handling',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Buyer leads and engagement analytics post-events',
        'Performance insights across exhibitions and markets',
        'Conversion tracking for retail and wholesale opportunities',
      ],
    },
    {
      title: 'Market Exposure',
      icon: 'Users',
      items: [
        'Premium showcases for artisan brand positioning',
        'Direct engagement with collectors and retail buyers',
        'Pathways into auction, wholesale, and global trade',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Buyer Advantages',
      items: [
        'Access to exclusive GI-certified craft collections',
        'Verified authenticity and ethical sourcing assurance',
        'Direct interaction with artisan vendors',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Global visibility through curated exhibitions',
        'Enhanced brand recognition and market positioning',
        'Direct sales and long-term buyer partnerships',
      ],
    },
  },

  impact: [
    {
      title: 'Global Recognition',
      description: 'Positioning Kashmir craft as a premium global category',
    },
    {
      title: 'Sustainable Trade',
      description: 'Ethical sourcing and fair compensation across all exhibitions',
    },
    {
      title: 'Cultural Preservation',
      description: 'Showcasing heritage crafts to international audiences',
    },
  ],
} as const;

// ─── Comparison Section (NEW) ─────────────────────────────────────────────────
// Source: Screenshot 3 (platform comparison) and Screenshot 4 (cost comparison).
// Shared: not role-specific. Two tabs.
// Competitors: Home Goods Inc., Newton Buying Corp.
// Note: only 3 platforms visible — see CLIENT FLAG 3.

export const exhibitionComparison = {
  sectionLabel: 'Platform Comparison',
  headline: 'See How DKC Exhibition Compares',
  subheadline:
    'A transparent look at where DKC Connect stands against alternative exhibition platforms — on features and on cost.',
  defaultTab: 'platform',
  tabs: [
    {
      id: 'platform',
      label: 'Feature Comparison',
      description: 'Compare exhibition capabilities, craft focus, and vendor support standards.',
      parameters: [
        'Tailored Exhibition Strategies',
        'Booth Space Optimisation',
        'Exhibitor Setup Assistance',
        'Digital Exhibition Integration',
        'Cultural Storytelling Displays',
        'Audience Targeting Solutions',
        'Eco-Friendly Booth Options',
        'Fair Trade Product Showcasing',
        'Marketing & Promotions Support',
        'B2B Networking Events',
        'Revenue Transparency for Vendors',
        'Sustainability Compliance Tools',
        'Seasonal Exhibit Opportunities',
        'Custom Booth Branding Support',
        'Training for Exhibitors',
        'Blockchain-Based Product Verification',
        'Virtual Exhibition Access',
        'Artisan Empowerment Programmes',
        'Exclusive Event Invitations',
        'Post-Exhibition Analytics',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            'Customised for Kashmiri crafts',
            'Yes — with personalised layouts',
            'Yes — with full support',
            'Yes',
            'Yes',
            'Tailored for niche markets',
            'Yes',
            'Yes',
            'Yes — with event-specific campaigns',
            'Included',
            'Yes',
            'Yes',
            'Yes',
            'Yes',
            'Comprehensive',
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
            'Standard',
            'Vendor Responsibility',
            'Limited',
            'No',
            'Generic',
            'No',
            'Limited',
            'Limited',
            'Limited',
            'Limited',
            'No',
            'No',
            'Paid',
            'Limited',
            'No',
            'No',
            'No',
            'No',
            'Limited',
          ],
        },
        {
          id: 'newton-buying-corp',
          name: 'Newton Buying Corp.',
          highlight: false,
          values: [
            'Limited',
            'Minimal',
            'None',
            'No',
            'Limited',
            'Limited',
            'No',
            'No',
            'No',
            'Minimal',
            'No',
            'No',
            'No',
            'Minimal',
            'No',
            'No',
            'No',
            'No',
            'Minimal',
            'No',
          ],
        },
      ],
    },
    {
      id: 'cost',
      label: 'Cost Comparison',
      description: 'Compare exhibition fees, commissions, and included services.',
      parameters: [
        'Annual Registration Fees',
        'Exhibition Booth Fee (Per Event)',
        'Commission on Sales',
        'Display Optimisation Fee',
        'Booth Branding Assistance',
        'Logistics and Booth Transport Fee',
        'Sustainability Compliance Support',
        'Marketing & Promotion Fee',
        'Cultural Storytelling Integration',
        'Fair Trade Certification Fee',
        'Sales Reporting & Analytics Fee',
        'Networking Event Fee',
        'Seasonal Campaign Participation',
        'Customised Booth Design Support',
        'Product Traceability and GI Tagging',
        'Vendor Training & Workshops',
        'Exclusive Exhibitor Access',
        'Revenue Transparency Tools',
        'Post-Exhibition Growth Support',
        'Booth Dismantling Fee',
        'Post-Exhibition Storage Charges',
        'Event or Exhibition Visa Invitations',
      ],
      platforms: [
        {
          id: 'dkc',
          name: 'De Koshur Crafts',
          highlight: true,
          values: [
            '$700',
            '$2,000',
            '5% (flat)',
            'Free',
            'Included',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Included',
            'Free',
            'Free',
            'Free',
            'Free',
            'Free',
            'Comprehensive',
            '$50',
            '$250 per Month',
            '$150 per invitation letter *',
          ],
        },
        {
          id: 'home-goods-inc',
          name: 'Home Goods Inc.',
          highlight: false,
          values: [
            '$850',
            '$2,700',
            '10%–15%',
            '$30',
            'Vendor Responsibility',
            '$50',
            'No Service',
            '$100 per event',
            'No Service',
            'No Service',
            '$20',
            '$10',
            'Limited',
            '$50',
            'No Service',
            'Limited',
            'Limited',
            '$5',
            'Minimal',
            '$100',
            '$350',
            'No Service',
          ],
        },
        {
          id: 'newton-buying-corp',
          name: 'Newton Buying Corp.',
          highlight: false,
          values: [
            '$920',
            '$2,900',
            '12%–18%',
            '$50',
            'Limited',
            '$50',
            'No Service',
            '$150',
            'Limited',
            'No Service',
            '$20',
            '$10',
            'No Service',
            'Limited',
            'No Service',
            'No Service',
            'No Service',
            'No Service',
            'No Support',
            '$150',
            '$350',
            'No Service',
          ],
        },
      ],
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: buyer and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// "US-Based" framing removed. Screenshot 5 content used and enhanced.

// export const exhibitionPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir.',
//   description:
//     "DKC's Exhibition partnership provides a premier opportunity for buyers, exhibition organizers, and vendors to access and showcase authentic Kashmiri handicrafts at high-profile trade events — with tailored sourcing, curated showcases, and direct vendor engagement.",
//   roles: {
//     buyer: {
//       headline: 'Buyer Advantages',
//       items: [
//         {
//           title: 'Exclusive Exhibition Access',
//           description:
//             'Direct access to exclusive GI-certified Kashmir craft collections for premium exhibitions.',
//         },
//         {
//           title: 'Authenticity Assurance',
//           description:
//             'Certified, handcrafted, ethically sourced products reinforce quality and cultural credibility at every event.',
//         },
//         {
//           title: 'Personalised Sourcing Experience',
//           description:
//             'Engage directly with artisan vendors for cultural context and deeper exhibition storytelling.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Curated Craft Showcases',
//           description:
//             'Handpicked artisan collections for immersive cultural exhibits position Kashmir craft as premium.',
//         },
//         {
//           title: 'Enhanced Brand Visibility',
//           description:
//             'Premium exhibition presence enhances vendor prestige, market appeal, and global buyer recognition.',
//         },
//         {
//           title: 'Industry Networking and Partnerships',
//           description:
//             'Build long-term partnerships with Kashmiri artisans and heritage businesses through exhibition.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Global Market Recognition',
//         description:
//           'Exhibitions position Kashmir crafts as a high-value, luxury trade sector — increasing global buyer demand and establishing Kashmir as a recognised international craft market.',
//       },
//       {
//         title: 'Sustainable and Ethical Sourcing',
//         description:
//           'Connecting buyers with artisans at exhibitions promotes sustainable trade — ensuring ethical procurement, fair compensation, and transparent craft supply chains.',
//       },
//       {
//         title: 'Cultural Heritage and Storytelling',
//         description:
//           'Exhibitions highlight authentic Kashmiri craftsmanship and foster cross-cultural appreciation — preserving traditional art forms while creating new international audiences.',
//       },
//       {
//         title: 'Eco-Conscious Crafting',
//         description:
//           'Promoting eco-friendly production, responsible sourcing, and ethical business practices across all exhibition partnerships ensures sustainable long-term growth for Kashmir craft.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// Shared: applies to both roles based on engagement level.
// IMPORTANT: Exhibition pricing is YEARLY not monthly.
// billingPeriod: 'year' — different from all Core Trade files.
// No onboarding fee — packages cover membership and support only.
// Physical exhibition costs are separate and communicated in freeOffer.note.

export const exhibitionPricing = {
  sectionLabel: 'Pricing',
  headline: 'Transparent Pricing. Built Around Exhibition Participation.',
  description:
    'Three clear yearly package tiers covering membership, branding support, and exhibition placement. Physical exhibition costs are separate and confirmed in advance for each event.',
  note: 'Pricing applies to both buyers and vendors based on role-specific engagement level within the Exhibition partnership.',
  freeOffer: {
    title: 'No Onboarding Fee',
    description:
      'Exhibition partnerships have no separate onboarding fee. Select a yearly package to begin participation.',
    note: 'Physical exhibition costs — booth fees, venue logistics, transport — are separate and shared with partners in advance of each event.',
    badge: 'Yearly Membership — No Upfront Onboarding Cost',
  },
  packages: [
    {
      name: 'Standard',
      price: '$100',
      billingPeriod: 'year',
      features: [
        'Basic exhibition listing and shared booth placement',
        'Standard branding materials and catalog feature',
        'Basic digital exhibition visibility',
        'Standard buyer and vendor matching',
      ],
      recommended: false,
    },
    {
      name: 'Growth',
      price: '$300',
      billingPeriod: 'year',
      features: [
        'Dedicated booth space in curated shared section',
        'Branded packaging and premium catalog placement',
        'Buyer lead sharing after exhibition events',
        'Priority exhibition event allocation',
      ],
      recommended: true,
    },
    {
      name: 'Premium',
      price: '$500',
      billingPeriod: 'year',
      features: [
        'Premium booth placement at top exhibition events',
        'Customised branding and exclusive product showcases',
        'US-based storage access and priority buyer matchmaking',
        'Dedicated on-site support team per event',
      ],
      recommended: false,
    },
  ],
  range: '$100–$500/year',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// "Prime Logic Solutions" removed from support line.

export const exhibitionTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Exhibition Technology Built for Scale and Visitor Engagement',
  description:
    'DKC Connect enhances trade exhibitions with digital booth allocation, intelligent visitor management tools, real-time lead capture, and post-event analytics — built for professional exhibition operations at any scale.',
  features: [
    {
      icon: 'Map',
      title: 'Digital Booth Allocation',
      description:
        'Floor mapping, booth assignment, and exhibition space optimisation via digital management.',
    },
    {
      icon: 'Scan',
      title: 'Visitor Check-In and Badge Management',
      description:
        'QR scanning, digital badge printing, ticketing management, and streamlined visitor entry.',
    },
    {
      icon: 'Tablet',
      title: 'Lead Capture at Events',
      description:
        'Handheld scanners and NFC tools capture buyer interactions and contact details at booths.',
    },
    {
      icon: 'ClipboardList',
      title: 'Event Logistics Coordination',
      description:
        'Track booth setup, dismantling, and exhibitor schedules with automated status notifications.',
    },
    {
      icon: 'Monitor',
      title: 'Smart Product Display Systems',
      description:
        'Smart shelving, interactive kiosks, and RFID tracking for digital management in physical exhibitions.',
    },
    {
      icon: 'CreditCard',
      title: 'Integrated Order and Payment Systems',
      description:
        'POS integration, instant booking management, and live inventory linking at exhibition events.',
    },
    {
      icon: 'BarChart',
      title: 'Visitor Engagement Analytics',
      description:
        'Footfall patterns, dwell times, and visitor engagement data across booths in real time.',
    },
    {
      icon: 'FileBarChart',
      title: 'Post-Event Reporting',
      description:
        'Comprehensive lead reports, sales performance insights, and ROI analytics per exhibition.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated event operations integration for smooth exhibition management.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both buyers organising events and vendors participating.
// "Prime Logic Solutions" removed throughout.

export const exhibitionApiIntegration = {
  sectionLabel: 'Exhibition Integration',
  headline: 'Already Exhibiting or Organising? Accelerate With DKC.',
  description:
    'Run exhibitions more efficiently — onboard exhibitors, capture leads, manage compliance, and monetise globally through a single integrated platform.',
  features: [
    {
      icon: 'ClipboardCheck',
      title: 'Exhibitor Onboarding and Compliance',
      description:
        'Digital applications, KYC, GI and KHCRF checks, contract execution, and fee collection.',
    },
    {
      icon: 'Calendar',
      title: 'Booth Management and Scheduling',
      description:
        'Floor plan management, booth slotting, demonstration calendars, and staff assignments.',
    },
    {
      icon: 'BookOpen',
      title: 'Digital Catalogs and Media Assets',
      description:
        'Rich product pages, live pricing, QR assets, AR experiences, and press kit generation.',
    },
    {
      icon: 'ScanLine',
      title: 'Lead Capture and CRM Integration',
      description:
        'QR scan data routed into Salesforce, HubSpot, or ERP — automated follow-ups post-event.',
    },
    {
      icon: 'PackageCheck',
      title: 'Logistics, Insurance, and Returns',
      description:
        'Inbound and outbound shipping, US storage management, cargo coverage, and return workflows.',
    },
  ],
  support: {
    description:
      'Exhibition integration support covering registration, ticketing, badge scanning, CRM and DAM mapping, sandbox environments, SDKs, and documented SLAs.',
    note: 'API documentation and sandbox environments available to all active partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for buyers and vendors.

export const exhibitionWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Global Exhibition — Four Steps',
  description:
    'A structured, professionally supported pathway from application to active exhibition participation.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Exhibition application with identity, business details, and Core Trade completion credentials.',
    },
    {
      step: 2,
      label: 'Eligibility Check',
      description:
        'Platform validates KPI record from Import & Export (7.0+ required), GI certification, and exhibition readiness.',
    },
    {
      step: 3,
      label: 'Select Package & Onboard',
      description:
        'Select your yearly package, then complete booth assignment, digital catalog setup, branding, and event logistics.',
    },
    {
      step: 4,
      label: 'Exhibit and Progress',
      description:
        'Engage buyers at global exhibitions — post-event analytics, lead follow-up, and KPI building toward Auction.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'auction',
    name: 'Auction & Bidding',
    kpiRequired: '7.5+',
    retentionRequired: '4 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const exhibitionFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Exhibition',
  items: [
    {
      question: 'Do I need to complete Core Trade before Exhibition?',
      answer:
        'Yes. Exhibition eligibility requires completion of Import & Export — the final Core Trade tier — with KPI 7.0+. KHCRF lateral evaluation can bypass this for qualified partners.',
    },
    {
      question: 'Are physical exhibition costs included in yearly packages?',
      answer:
        'No. Yearly packages cover membership, branding support, digital catalog placement, and buyer matching — physical booth and venue costs are separate and confirmed per event.',
    },
    {
      question: 'Does DKC guarantee visa approval for international vendors?',
      answer:
        'No. Visa approval is determined by the relevant embassy — DKC provides invitation letters at $150 each but cannot guarantee outcomes.',
    },
    {
      question: 'Can unsold products be stored after exhibitions?',
      answer:
        'Yes. Storage facilities are available at selected US locations — charges apply at $250 per month as disclosed in the cost comparison.',
    },
    {
      question: 'Can exhibition buyers place advance orders during events?',
      answer:
        'Yes. Bulk pre-orders can be placed during exhibitions for seasonal demand — the Premium package includes priority buyer matchmaking and storage access.',
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: headline, supporting points, and button labels differ by role.

export const exhibitionFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline:
      'Kashmir Craft on the Global Exhibition Stage. Verified. Supported. Commercially Ready.',
    description:
      "Professional booth support, GI-certified products, digital catalog placement, and direct buyer engagement — an Exhibition partnership that takes Kashmir craft into the world's finest trade events.",
  },
  roles: {
    buyer: {
      headline: 'Ready to Source Exclusive Kashmir Craft for Your Exhibitions and Events?',
      supportingPoints: [
        'Direct access to GI-certified, handcrafted Kashmir collections for premium exhibitions.',
        'Every vendor verified for authenticity, compliance, and ethical production.',
        'Place advance bulk orders at exhibitions — storage included in Premium.',
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
      headline: 'Ready to Showcase Your Kashmir Craft to International Buyers at Global Events?',
      supportingPoints: [
        'Professional booth setup, branded catalogs, and storytelling support included.',
        'GI certification and blockchain provenance on every showcased product.',
        'Exhibition performance builds the buyer relationships that unlock Auction.',
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

export const EXHIBITION = {
  meta: exhibitionMeta,
  heroSection: exhibitionHero,
  overviewSection: exhibitionOverview,
  modelDifferenceSection: exhibitionModelDifference,
  // keyFeaturesSection: exhibitionKeyFeatures,
  eligibilityRulesSection: exhibitionEligibilityRules,
  eligibilityAssessmentSection: exhibitionEligibilityAssessment,
  capabilitiesSection: exhibitionCapabilities,
  comparisonSection: exhibitionComparison,
  // platformAdvantageSection: exhibitionPlatformAdvantage,
  pricingSection: exhibitionPricing,
  technologySection: exhibitionTechnology,
  apiIntegrationSection: exhibitionApiIntegration,
  workflowSection: exhibitionWorkflow,
  faqSection: exhibitionFaq,
  finalCtaSection: exhibitionFinalCta,
} as const;

export type ExhibitionContent = typeof EXHIBITION;
