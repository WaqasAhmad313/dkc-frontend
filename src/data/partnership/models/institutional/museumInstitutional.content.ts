export type MuseumCollaborationAssessmentCategory = 'general' | 'vendor' | 'buyer';
export type MuseumCollaborationQuestionType = 'single' | 'multiple' | 'yesno';

// ─── Meta ─────────────────────────────────────────────────────────────────────

export const museumMeta = {
  slug: 'museum',
  system: 'institutional',
  tier: 4,
  label: 'Museum Collaboration',
  pageTitle: 'Museum Partnerships',
  seoDescription:
    "An institutional museum collaboration pathway that preserves Kashmiri craft heritage through curated exhibitions, preservation agreements, digital archives, and global cultural recognition — connecting master artisans with the world's leading cultural institutions.",
  kpiRequired: '9.0+',
  retentionRequired: 'None — institutional qualification required',
  previousSlug: 'logistics',
  nextSlug: 'ngo-government',
  lateralEntryAvailable: true,
  fastTrackAvailable: true,
  tags: ['museum', 'heritage', 'cultural-preservation', 'exhibition', 'institutional', 'archive'],
} as const;

// ─── Hero Section ─────────────────────────────────────────────────────────────
// Role-split: buyer (institution) curates and preserves Kashmir craft in collections.
// Vendor (artisan) gains global heritage recognition and institutional legitimacy.
// "Apply as an Institution" label preserved for the buyer CTA — correct for context.

export const museumHero = {
  sectionLabel: 'Museum Partnership',
  shared: {
    badge: 'Institutional — Tier 4',
    statusChip: 'KPI 9.0+ Required — Institutional Qualification Required',
  },
  roles: {
    buyer: {
      headline: 'Bring Authentic Kashmiri Craft Heritage Into Your Museum Collection.',
      description:
        'Partner directly with verified Kashmiri master artisans to curate, acquire, and preserve authentic handmade craft for your museum collection — with full GI certification, blockchain provenance documentation, insurance coverage, and transparent artisan attribution built into every collaboration.',
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
      headline: "Place Your Kashmir Craft in the World's Leading Museum Collections.",
      description:
        'Gain global heritage recognition by collaborating with leading museums, galleries, and cultural institutions — with transparent exhibition agreements, cargo insurance, digital archiving, and artisan attribution that preserves your craft legacy for future generations.',
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

export const museumOverview = {
  sectionLabel: 'Why Museum Collaboration',
  headline: 'Connecting Craft With Global Institutions',
  description:
    'Artisan heritage rarely reaches institutional platforms due to access and structural barriers. This pathway enables secure, recognized, and long-term collaboration with global institutions.',
  problems: [
    'Artisan work lacks proper credit and heritage attribution',
    'Limited access to institutional buyers and curators',
    'High costs block participation in museum collaborations',
    'No structured framework for long-term partnerships',
  ],
  solutions: [
    'Verified collaboration between artisans and institutions',
    'Structured agreements covering rights and responsibilities',
    'Support for participation through reduced operational barriers',
    'Long-term preservation and documentation of artisan work',
  ],
} as const;

// ─── Model Difference Section ─────────────────────────────────────────────────
// Shared platform features + role-split feature groups.
// Archive, Building, Landmark, BookOpen all valid Lucide icons.

export const museumModelDifference = {
  sectionLabel: 'What Makes This Different',
  headline: 'Structured Artisan-Museum Collaboration. Heritage-First. Globally Recognised.',
  exclusivityNote:
    'Exclusively for authentic Kashmiri handmade craft — no mass-produced items, no undocumented provenance. Every museum collaboration is GI-certified, blockchain-traced, and governed by institutional preservation standards.',
  sharedFeatures: [
    {
      icon: 'Globe',
      title: 'Global Museum and Cultural Institution Network',
      description:
        'Platform connects verified Kashmiri artisan vendors with museums, galleries, heritage organisations, and cultural institutions — with governed collaboration agreements, insurance requirements, and cultural compliance standards from the outset.',
    },
    {
      icon: 'Archive',
      title: 'Heritage Preservation and Digital Archiving',
      description:
        'Every collaborated craft is preserved through digital documentation — high-resolution cataloguing, provenance metadata, artisan attribution records, and blockchain-linked heritage archives maintained in perpetuity.',
    },
    {
      icon: 'Building',
      title: 'Exhibition Partnerships and Rotating Showcases',
      description:
        'Crafts are featured in rotating museum exhibitions, permanent collection showcases, travelling exhibitions, and educational catalogues — giving artisans structured access to the most prestigious cultural display environments globally.',
    },
    {
      icon: 'Shield',
      title: 'Cultural Heritage Law and Museum Protocol Compliance',
      description:
        'All collaborations are aligned with KHCRF standards, GI protection frameworks, international cultural heritage laws, and global museum ethical acquisition protocols — ensuring every partnership is legally and culturally sound.',
    },
  ],
  roles: {
    buyer: {
      headline: 'What Institutions Get',
      features: [
        {
          icon: 'Landmark',
          title: 'Authentic Heritage Craft for Cultural Collections',
          description:
            'Source verified, GI-certified Kashmiri handmade craft directly from master artisans — with full provenance documentation, cultural context, and artisan attribution that institutional acquisition policies require.',
        },
        {
          icon: 'CheckCircle',
          title: 'Blockchain-Verified Provenance on Every Acquisition',
          description:
            'Every craft carries a blockchain-linked provenance record verifiable by curatorial teams, acquisition committees, and compliance officers — ensuring institutional due diligence requirements are fully met.',
        },
        {
          icon: 'BookOpen',
          title: 'Cultural Storytelling and Heritage Contextualisation',
          description:
            'Every exhibited craft comes with curated cultural context — artisan biography, craft technique documentation, historical lineage, and heritage narrative — ready for museum interpretation programmes.',
        },
        {
          icon: 'TrendingUp',
          title: 'Prestige and Audience Growth Through Heritage Exhibitions',
          description:
            'Authentic Kashmiri heritage exhibitions attract heritage-focused audiences, expand institutional reach, and strengthen cultural reputation — supporting both museum prestige and broader public engagement goals.',
        },
      ],
    },
    vendor: {
      headline: 'What Vendors Get',
      features: [
        {
          icon: 'Store',
          title: 'Prestigious Global Museum Display',
          description:
            "Showcase crafts in the world's leading cultural institutions — with formal artisan attribution and cultural credit that elevates heritage recognition far beyond what commercial trade channels can achieve.",
        },
        {
          icon: 'Lock',
          title: 'Insurance and Professional Preservation',
          description:
            'All exhibited craft is professionally insured against theft, loss, and damage — with museum-grade preservation and climate-controlled storage maintaining product integrity throughout every collaboration.',
        },
        {
          icon: 'Award',
          title: 'Permanent Legacy in International Archives',
          description:
            'Museum collaborations ensure artisan craft is permanently documented in international cultural archives — preserving heritage for future generations and establishing a lasting legacy beyond commercial sales.',
        },
        {
          icon: 'ArrowUpRight',
          title: 'Pathway to Auctions, Exports, and Institutional Markets',
          description:
            'Museum recognition opens pathways into premium auction markets, luxury retail collaborations, cultural export opportunities, and NGO and government institutional procurement — the full range of heritage-level trade.',
        },
      ],
    },
  },
} as const;

// ─── Eligibility Rules Section ────────────────────────────────────────────────
// Shared: same entry rules for both roles.
// specialRules states retentionPeriod: "None" — no prior retention required.
// This is unique in the platform. See CLIENT FLAGS 1, 2, 3.

export const museumEligibilityRules = {
  sectionLabel: 'Entry Rules',
  headline: 'Museum Collaboration Requires Institutional Qualification and Heritage Readiness',
  description:
    'Museum Collaboration is a parallel Institutional pathway — it does not require completion of a specific prior partnership retention period. Entry is governed by KPI threshold, institutional qualification, and cultural heritage readiness. Museums, galleries, and heritage organisations apply directly.',
  requirements: [
    {
      label: 'KPI Required',
      value: '9.0+',
      note: 'Platform-maximum KPI threshold — confirms institutional trade readiness.',
    },
    {
      label: 'Prior Retention',
      value: 'None required',
      note: 'Museum entry does not require completing a specific prior partnership retention period — unique in the platform.',
    },
    {
      label: 'Museum Commitment',
      value: '12-month minimum',
      note: 'Minimum 12-month collaboration commitment at Museum before progression to other institutional tracks.',
    },
    {
      label: 'Vendor Qualification',
      value: 'Heritage Significance and GI Documentation',
      note: 'Vendor crafts must hold heritage or museum significance with GI and KHCRF documentation.',
    },
    {
      label: 'Institution Qualification',
      value: 'Recognised Museum, Gallery, or Heritage Organisation',
      note: 'Institutional buyers must be recognised cultural institutions aligned with global heritage protocols.',
    },
    {
      label: 'Fast-Track',
      value: 'Available',
      note: 'KHCRF lateral evaluation available for qualified partners with existing institutional relationships.',
    },
  ],
  progressionNote:
    'After completing 12 months at Museum Collaboration, partners unlock NGO & Government and Technology Partnership tracks — the remaining Institutional tiers — based on their specific sector focus.',
  nextSlug: 'ngo-government',
  nextLabel: 'NGO & Government',
} as const;

// ─── Eligibility Assessment Section ──────────────────────────────────────────
// IMPORTANT: Museum assessment has NO validation category.
// Only 'general', 'vendor', 'buyer' questions — 11 total.
// This is intentional: museum entry has no prior retention requirement.
// resultContent keys match threshold eligibility strings exactly.
// All messages and next steps extracted from EligibilityProvider.tsx
// calculateResults() museumcollaboration block.

export const museumEligibilityAssessment = {
  sectionLabel: 'Eligibility Assessment',
  headline: 'Find Out Where You Stand Before You Apply',
  description:
    'A short role-based assessment that returns your current fit for Museum Collaboration, your heritage readiness, and whether you qualify for faster progression into NGO & Government.',
  introCard: {
    icon: 'Target',
    title: 'Museum Collaboration Eligibility Assessment',
    description:
      'Eleven questions. Personalised results. No email required. Understand your museum and heritage collaboration readiness and what pathway is available to you.',
    primaryCta: {
      label: 'Start Assessment',
      action: 'start-assessment',
    },
    meta: '11 questions • Personalised results • No email required',
  },
  resultCard: {
    heading: 'Your Museum Collaboration Eligibility Results',
    scoreLabel: 'Your Score',
    recommendationLabel: 'Recommended Track',
    strengthsLabel: 'Your Strengths',
    developmentLabel: 'Areas for Development',
    nextStepsLabel: 'Your Next Steps',
    retakeCtaLabel: 'Retake Assessment',
    fastTrackBadgeLabel: 'Fast-Track Eligible',
  },
  assessment: {
    name: 'Museum Collaboration',
    maxScore: 25,
    questions: [
      // ── General questions — scored, apply to all roles ──────────────────
      {
        id: 'product_authenticity',
        question: 'How would you rate the authenticity of your products or sourcing?',
        type: 'single' as MuseumCollaborationQuestionType,
        options: [
          'Synthetic or mixed materials',
          'Partially authentic',
          'Verified sourcing',
          'Certified suppliers',
          'Blockchain-verified and museum-certified',
        ],
        category: 'general' as MuseumCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'quality',
        question: 'How would you describe the quality of your products?',
        type: 'single' as MuseumCollaborationQuestionType,
        options: [
          'Inconsistent',
          'Acceptable with some flaws',
          'High with minor flaws',
          'Meets export standards consistently',
          'Museum-grade heritage excellence',
        ],
        category: 'general' as MuseumCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'sustainability',
        question: 'What is your focus on sustainable production and heritage preservation?',
        type: 'single' as MuseumCollaborationQuestionType,
        options: [
          'None',
          'Some sustainable practices',
          'Significant sustainable efforts',
          'Mostly eco-friendly operations',
          'Heritage-preservation standards met in full',
        ],
        category: 'general' as MuseumCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'customer_experience',
        question: 'How would you rate your institutional or visitor engagement approach?',
        type: 'single' as MuseumCollaborationQuestionType,
        options: [
          'No defined strategy',
          'Needs significant improvement',
          'Generally satisfactory',
          'Well-managed and structured',
          'Immersive cultural storytelling and interpretation',
        ],
        category: 'general' as MuseumCollaborationAssessmentCategory,
        weight: 1,
      },
      {
        id: 'fair_trade',
        question: 'How do you ensure fair trade practices and artisan dignity in your operations?',
        type: 'single' as MuseumCollaborationQuestionType,
        options: [
          'No compliance policy',
          'Minimum compliance only',
          'Fair wages with limited safety provisions',
          'Fair wages and safe working conditions',
          'Ethical sourcing with full artisan dignity standards',
        ],
        category: 'general' as MuseumCollaborationAssessmentCategory,
        weight: 1,
      },

      // ── Vendor-only questions — unscored ────────────────────────────────
      {
        id: 'vendor_heritage_significance',
        question: 'Do your crafts hold heritage or museum-grade cultural significance?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_gi_tag',
        question: 'Can you provide GI tag certification and KHCRF documentation for your products?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'vendor_exhibition_agreements',
        question:
          'Are you open to long-term preservation agreements or rotating exhibition placements?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'vendor' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },

      // ── Buyer (institution) questions — unscored ─────────────────────────
      {
        id: 'buyer_exhibition_spaces',
        question: 'Does your institution maintain active exhibition or preservation spaces?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_cultural_preservation',
        question:
          'Is your institution formally committed to cultural preservation and heritage storytelling?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },
      {
        id: 'buyer_heritage_protocols',
        question:
          'Is your institution aligned with global heritage acquisition and ethical sourcing protocols?',
        type: 'yesno' as MuseumCollaborationQuestionType,
        options: ['Yes', 'No'],
        category: 'buyer' as MuseumCollaborationAssessmentCategory,
        weight: 0,
      },
    ],

    // Keys must match eligibility strings exactly — component uses these as lookup keys
    thresholds: {
      10: {
        eligibility: 'Museum Collaboration (TIER 4 / L14)',
        fastTrackEligible: false,
        nextLevel: null,
      },
      16: {
        eligibility: 'Museum Collaboration + Fast Track to NGO & Government',
        fastTrackEligible: true,
        nextLevel: 'NGO & Government',
      },
      21: {
        eligibility: 'NGO & Government/Technology (TIER 4 / L15–16)',
        fastTrackEligible: true,
        nextLevel: 'NGO & Government/Technology',
      },
    },

    specialRules: {
      vendor: {
        certificationsRequired: true,
        commitment: 'Museum Collaboration',
        kpiThreshold: 9.0,
        retentionPeriod: 'None',
        minCommitment: '12 months at Museum Collaboration',
        tpif: 'Cultural preservation, heritage exhibitions',
        mpf: 'Custom agreements per institution',
      },
      buyer: {
        commitment: 'Museum Collaboration',
        kpiThreshold: 9.0,
        cep: 'Open Access',
      },
    },

    // ── Result content — extracted from EligibilityProvider.tsx ──────────
    // Keys match threshold eligibility strings exactly.
    resultContent: {
      messagesByOutcome: {
        'Museum Collaboration (TIER 4 / L14)':
          "You're eligible for Museum Collaboration. Build your heritage exhibition capability and cultural documentation from here.",
        'Museum Collaboration + Fast Track to NGO & Government':
          "Great fundamentals. You're eligible for Museum Collaboration with a fast track to NGO & Government.",
        'NGO & Government/Technology (TIER 4 / L15–16)':
          'Exceptional. Your heritage record makes you eligible for NGO & Government or Technology Partnership via Lateral Entry.',
      },
      nextStepsByOutcome: {
        'Museum Collaboration (TIER 4 / L14)': [
          'Join the Museum Collaboration programme.',
          'Enrol in the Readiness Programme (RP).',
          'Enhance cultural documentation and heritage storytelling archives.',
          'Secure international heritage approvals and institutional agreements.',
        ],
        'Museum Collaboration + Fast Track to NGO & Government': [
          'Prepare fast-track documentation for NGO & Government progression.',
          'Strengthen institutional documentation, provenance, and cultural compliance systems.',
          'Complete advanced KHCRF heritage and institutional-readiness review.',
          'Align public-interest and preservation collaboration materials for NGO track.',
        ],
        'NGO & Government/Technology (TIER 4 / L15–16)': [
          'Apply for the Lateral Entry Programme (LEP).',
          'Submit heritage, governance, and cultural collaboration documentation.',
          'Complete KHCRF institutional progression review.',
          'Prepare for direct transition into the selected institutional pathway onboarding.',
        ],
      },
      strengthsByOutcome: {
        'Museum Collaboration (TIER 4 / L14)': [
          'Solid heritage foundation and cultural preservation potential',
          'GI certification and KHCRF documentation readiness',
        ],
        'Museum Collaboration + Fast Track to NGO & Government': [
          'Museum-grade craft quality and provenance capability',
          'Heritage storytelling and exhibition documentation readiness',
          'Clear institutional progression trajectory',
        ],
        'NGO & Government/Technology (TIER 4 / L15–16)': [
          'Full institutional heritage collaboration capability',
          'Strong KHCRF and cultural provenance record',
          'International heritage protocol alignment demonstrated',
        ],
      },
      improvementsByOutcome: {
        'Museum Collaboration (TIER 4 / L14)': [
          'Build multimedia-ready exhibition content and heritage documentation.',
          'Develop digital storytelling archives for museum interpretation use.',
          'Secure international heritage approvals and institutional partnership agreements.',
        ],
        'Museum Collaboration + Fast Track to NGO & Government': [
          'Advance public-interest collaboration materials for NGO and Government tracks.',
          'Strengthen international protocol alignment and reporting systems.',
        ],
        'NGO & Government/Technology (TIER 4 / L15–16)': [],
      },
      defaultStrengths: [
        'Solid heritage foundation and cultural preservation potential',
        'Strong institutional-tier progression from the Logistics pathway',
      ],
      defaultDevelopmentAreas: [
        'Build multimedia-ready exhibition content and heritage documentation.',
        'Develop digital cultural storytelling archives for institutional use.',
      ],
    },
  },
} as const;

// ─── Capabilities Section ─────────────────────────────────────────────────────
// Shared: platform capabilities serve both roles.
// "Museum Partner Advantages" → "Institutional Partner Advantages" for clarity.

export const museumCapabilities = {
  sectionLabel: 'Platform Capabilities',
  headline: 'Museum Infrastructure for Cultural Heritage Preservation',
  subheadline: 'Institutional partnerships preserving and elevating Kashmir craft globally.',

  capabilities: [
    {
      title: 'Trade Infrastructure',
      icon: 'Landmark',
      items: [
        'Artisans connected with global museum institutions',
        'Curatorial contracts defining rights and attribution',
        'Digital archives preserving craft heritage records',
      ],
    },
    {
      title: 'Exhibition & Preservation',
      icon: 'Truck',
      items: [
        'Curated exhibition spaces with climate-controlled storage',
        'Insured handling and secure artifact management',
        'Safe return logistics with condition documentation',
      ],
    },
    {
      title: 'Growth Intelligence',
      icon: 'BarChart3',
      items: [
        'Visitor insights and engagement analytics',
        'Cultural impact and research reporting',
        'Pathways into auctions and institutional markets',
      ],
    },
    {
      title: 'Institutional Presence',
      icon: 'Building',
      items: [
        'Museum-level recognition for artisan work',
        'Integration into global heritage collections',
        'Long-term cultural and academic collaborations',
      ],
    },
  ],

  platformValue: {
    buyer: {
      title: 'Institutional Advantages',
      items: [
        'Access verified heritage craft with full provenance',
        'Enhance prestige through curated cultural exhibitions',
        'Expand education and research programmes with authentic material',
      ],
    },
    vendor: {
      title: 'Vendor Advantages',
      items: [
        'Global recognition through museum collaborations',
        'Permanent archival presence for cultural legacy',
        'Stronger credibility for premium and institutional markets',
      ],
    },
  },

  impact: [
    {
      title: 'Heritage Elevation',
      description: 'Positioning Kashmir craft as global cultural heritage',
    },
    {
      title: 'Authenticity Protection',
      description: 'Securing provenance against imitation and misrepresentation',
    },
    {
      title: 'Cultural Diplomacy',
      description: 'Expanding international recognition through institutional networks',
    },
  ],
} as const;

// ─── Platform Advantage Section ───────────────────────────────────────────────
// Role-split: institution (buyer) and vendor benefits rendered per role.
// industryImpact shared — always shown for both roles.
// Raw file used non-standard section labels — rebuilt to standard pattern.

// export const museumPlatformAdvantage = {
//   sectionLabel: 'Platform Advantage',
//   headline: 'Different Value for Each Side. Shared Impact for Kashmir Heritage.',
//   description:
//     "DKC's Museum Collaboration partnership elevates Kashmir craft from commercial commodity to globally recognised cultural heritage — creating institutional prestige for museums and permanent legacy recognition for artisans.",
//   roles: {
//     buyer: {
//       headline: 'Institutional Advantages',
//       items: [
//         {
//           title: 'Authentic Heritage Craft for Cultural Preservation',
//           description:
//             'Acquire verified, GI-certified Kashmiri craft for cultural preservation — with full provenance documentation, artisan attribution, and blockchain traceability that institutional acquisition standards require.',
//         },
//         {
//           title: 'Enhanced Prestige Through Rare Heritage Exhibitions',
//           description:
//             'Kashmiri heritage exhibitions attract new audiences, expand institutional reach, and position your museum as a leader in cultural representation — strengthening both public engagement and institutional prestige.',
//         },
//         {
//           title: 'Cross-Cultural Visitor Engagement Through Curated Showcases',
//           description:
//             'Support cross-cultural understanding through exhibitions that contextualise Kashmiri craftsmanship — with artisan storytelling, heritage interpretation, and cultural education materials provided.',
//         },
//         {
//           title: 'Expanded Educational Programmes With Authentic Materials',
//           description:
//             'Expand educational programmes with genuine Kashmiri heritage materials — workshops, school engagement toolkits, guided tours, and residency programmes anchored in authentic artisan craft.',
//         },
//       ],
//     },
//     vendor: {
//       headline: 'Vendor Advantages',
//       items: [
//         {
//           title: 'Global Visibility in Prestigious Museum Collections',
//           description:
//             "Gain formal recognition in the world's leading cultural institutions — elevating your craft and heritage status far beyond what commercial trade channels can achieve.",
//         },
//         {
//           title: 'Permanent Legacy in International Heritage Archives',
//           description:
//             'Museum collaborations ensure your artisan craft is permanently documented in international archives — creating a lasting cultural legacy that protects and honours your heritage for future generations.',
//         },
//         {
//           title: 'Strengthened Credibility Through Institutional Partnerships',
//           description:
//             'Formal museum partnerships build artisan credibility at the highest institutional level — creating recognition that opens doors to premium auction markets, institutional procurement, and cultural diplomacy.',
//         },
//         {
//           title: 'Inspiration for the Next Generation of Kashmiri Artisans',
//           description:
//             'Museum-level recognition of Kashmiri craft heritage inspires younger artisans — demonstrating the global cultural value of traditional craft and encouraging its continuation across generations.',
//         },
//       ],
//     },
//   },
//   industryImpact: {
//     headline: 'Industry Impact',
//     items: [
//       {
//         title: 'Elevating Kashmiri Craft From Commodity to Heritage Treasure',
//         description:
//           'Museum collaborations formally establish the cultural and heritage value of Kashmir craft — elevating its global status from traded commodity to internationally recognised artisan heritage of significance.',
//       },
//       {
//         title: 'Protecting Authenticity Against Imitation and Counterfeiting',
//         description:
//           'Blockchain provenance, GI certification, and institutional documentation create an authoritative authenticity record that protects Kashmir craft from imitation and counterfeit misrepresentation globally.',
//       },
//       {
//         title: 'Positioning Kashmir in Global Cultural Diplomacy Networks',
//         description:
//           "Museum partnerships position Kashmir craft within international cultural diplomacy frameworks — building soft power recognition that complements and strengthens the craft sector's commercial international standing.",
//       },
//       {
//         title: 'Building International Respect for Kashmiri Cultural Identity',
//         description:
//           'Sustained museum-level engagement with Kashmiri heritage crafts builds deep, lasting international respect for Kashmiri cultural identity — creating permanent institutional recognition that commercial trade alone cannot establish.',
//       },
//     ],
//   },
// } as const;

// ─── Pricing Section ──────────────────────────────────────────────────────────
// All packages are custom-priced — no fixed fee structure.
// This is appropriate for institutional partnerships where every collaboration
// is bespoke. The freeOffer block explains the pricing philosophy.
// See CLIENT FLAG 4.

export const museumPricing = {
  sectionLabel: 'Pricing',
  headline: 'Customised Pricing for Every Museum Collaboration.',
  description:
    'Museum partnerships are tailored rather than fixed-fee — pricing depends on the type of engagement, craft category, museum location, insurance requirements, and logistics including packaging, preservation, and storage. Every partnership receives a full cost breakdown before confirmation.',
  note: 'Vendors and institutions receive a detailed cost breakdown covering all fees, insurance, logistics, and preservation requirements before any partnership is confirmed.',
  freeOffer: {
    title: 'Fully Customised Partnership Agreements',
    description:
      'Museum partnerships are structured as bespoke institutional agreements — crafted to reflect the specific collection requirements, exhibition scope, and preservation needs of each individual museum-artisan collaboration.',
    note: 'No standardised fee schedule applies. A full cost disclosure is provided to all partners before commitment.',
    badge: 'Institutional-Grade — Fully Custom Pricing',
  },
  packages: [
    {
      name: 'Standard Exhibition',
      price: 'Custom',
      billingPeriod: 'year',
      features: [
        'Nominal annual membership and platform access',
        'Exhibition handling and logistics coordination',
        'Basic insurance coverage for exhibited crafts',
        'Artisan attribution and digital archive entry',
      ],
      recommended: false,
    },
    {
      name: 'Growth Exhibition',
      price: 'Custom',
      billingPeriod: 'year',
      features: [
        'Annual membership with expanded exhibition access',
        'Curatorial collaboration and heritage contextualisation',
        'Enhanced insurance coverage and preservation services',
        'Digital storytelling and multimedia archive integration',
      ],
      recommended: true,
    },
    {
      name: 'Premium Exhibition',
      price: 'Custom',
      billingPeriod: 'year',
      features: [
        'Annual membership with institutional-grade exhibition access',
        'Premium insurance and full preservation logistics',
        'Permanent collection acquisition support',
        'International loan exhibition coordination',
      ],
      recommended: false,
    },
  ],
  range: 'All museum partnership fees are tailored per institutional agreement.',
} as const;

// ─── Technology Section ───────────────────────────────────────────────────────
// Shared: platform technology is role-agnostic.
// Archive, Layout, GraduationCap, Ticket all valid Lucide icons.
// Prime Logic removed from support line.

export const museumTechnology = {
  sectionLabel: 'Platform Technology',
  headline: 'Museum and Cultural Heritage Technology Platform',
  description:
    'Supports cultural institutions with digital collection management, provenance verification, visitor engagement systems, and advanced exhibition technologies — purpose-built for authentic Kashmiri heritage craft.',
  features: [
    {
      icon: 'Archive',
      title: 'Digital Collection Management',
      description:
        'Digitise collection catalogues, track provenance records, maintain conservation notes, and manage acquisition documentation — with long-term digital preservation standards.',
    },
    {
      icon: 'Shield',
      title: 'Provenance and Authenticity Engine',
      description:
        'Ensure craft authenticity through GI certification validation, blockchain provenance verification, ownership tracking, and counterfeit prevention systems.',
    },
    {
      icon: 'Database',
      title: 'Heritage Digital Archives',
      description:
        'Preserve cultural heritage with high-resolution imaging, IIIF-compatible metadata standards, artisan attribution records, and secure long-term archival storage.',
    },
    {
      icon: 'Layout',
      title: 'Exhibition Design and Display Systems',
      description:
        'Deploy smart display technology, intelligent exhibition lighting, environmental sensor monitoring, and interactive panel systems for heritage craft showcases.',
    },
    {
      icon: 'Users',
      title: 'Visitor Engagement Systems',
      description:
        'Provide AR-enhanced heritage tours, multilingual audio guides, cultural storytelling stations, and accessibility-compliant visitor interpretation systems.',
    },
    {
      icon: 'GraduationCap',
      title: 'Education and Outreach Portals',
      description:
        'Connect museums with schools, universities, and cultural institutions through structured education programmes, workshop materials, and community outreach tools.',
    },
    {
      icon: 'Ticket',
      title: 'Institutional Access APIs',
      description:
        'Enable QR-based ticketing, membership management, institutional access control, and visitor crowd-flow optimisation for exhibition events.',
    },
    {
      icon: 'BarChart',
      title: 'Cultural Impact Dashboards',
      description:
        'Analyse visitor demographics, exhibition engagement rates, educational programme outcomes, and cultural impact metrics across all institutional collaborations.',
    },
  ],
  support:
    'Platform infrastructure is maintained with continuous upgrades, 24/7 technical support, and dedicated cultural institution integration for seamless museum operations.',
} as const;

// ─── API Integration Section ──────────────────────────────────────────────────
// Shared: relevant to both institutions managing collections and vendors managing exhibitions.
// 12 features preserved from raw file.
// Accessibility is valid in current Lucide. Copyright valid. FileSearch valid.
// Prime Logic removed throughout.

export const museumApiIntegration = {
  sectionLabel: 'Museum Integration',
  headline: 'Already Partnering With Cultural Institutions? Accelerate With DKC.',
  description:
    'Accelerate museum operations with ethical curation workflows, digital collection management, audience engagement systems, and responsible artisan monetisation — all integrated into a single cultural heritage platform.',
  features: [
    {
      icon: 'UserCheck',
      title: 'Ethical Onboarding and Verification',
      description:
        'Digital acquisition applications, KYC verification, GI and KHCRF certification checks, and cultural heritage policy acknowledgement management for all institutional partnerships.',
    },
    {
      icon: 'FileSearch',
      title: 'Provenance Research and Due Diligence',
      description:
        'Automated provenance source checks, cultural heritage due diligence workflows, repatriation claim management, and preserved audit trail documentation.',
    },
    {
      icon: 'Image',
      title: 'Digital Catalog and Imaging',
      description:
        'High-resolution multi-angle imaging, IIIF viewer integration, standardised metadata schemas, and long-term digital preservation workflows for all catalogued heritage craft.',
    },
    {
      icon: 'Package',
      title: 'Loan and Exhibition Logistics',
      description:
        'Loan agreement management, specialist art packing coordination, courier tracking, condition report management, exhibition scheduling, and cultural import compliance.',
    },
    {
      icon: 'Shield',
      title: 'Exhibition Insurance and Risk',
      description:
        'Inbound and outbound handling insurance, climate-controlled storage coverage, all-risk exhibition coverage, and structured claims management workflows.',
    },
    {
      icon: 'BookOpen',
      title: 'Education Programme Management',
      description:
        'Workshop and residency coordination, school engagement toolkit delivery, guided tour management, educational resource distribution, and programme impact tracking.',
    },
    {
      icon: 'ShoppingBag',
      title: 'Museum Shop and Consignment',
      description:
        'Artisan consignment agreement management, GI-certified product labelling, transparent revenue share reporting, and supplier compliance tracking.',
    },
    {
      icon: 'Copyright',
      title: 'Rights and Licensing Management',
      description:
        'Cultural copyright clearance, image licensing governance, press kit management, reproduction rights management, and usage policy enforcement.',
    },
    {
      icon: 'Accessibility',
      title: 'Inclusive Access and WCAG Compliance',
      description:
        'WCAG-compliant content management, alt text and caption systems, multilingual exhibition guides, accessible wayfinding, and inclusive visitor experience tools.',
    },
    {
      icon: 'Leaf',
      title: 'Sustainable Exhibition Design',
      description:
        'Reusable exhibition materials management, low-energy lighting integration, carbon footprint tracking per exhibition, and green supplier standards compliance.',
    },
    {
      icon: 'BarChart2',
      title: 'Visitor Analytics and Impact Measurement',
      description:
        'Exhibition footfall tracking, dwell time analysis, membership conversion monitoring, donation management, and cultural engagement dashboard reporting.',
    },
    {
      icon: 'Globe',
      title: 'International Cultural Exchange',
      description:
        'International museum partnership management, travelling exhibition coordination, co-curation programme facilitation, and cross-border cultural knowledge sharing systems.',
    },
  ],
  support: {
    description:
      'Museum integration support covering TMS and eMuseum onboarding, CollectionSpace and ArchivesSpace configuration, IIIF standards integration, DAM and CMS mapping, ticketing and CRM system connections, and consignment and payment processing.',
    note: 'Sandbox environments, SDKs, and SLAs available for all active Museum Collaboration partners.',
  },
} as const;

// ─── Workflow Section ─────────────────────────────────────────────────────────
// Shared: activation pathway is the same for institutions and vendors.

export const museumWorkflow = {
  sectionLabel: 'Partnership Pathway',
  headline: 'From Application to Active Heritage Exhibition — Five Steps',
  description:
    'A structured, heritage-governed activation process for institutional Kashmir craft museum collaboration.',
  steps: [
    {
      step: 1,
      label: 'Apply',
      description:
        'Submit your Museum Collaboration application with institutional credentials, craft heritage documentation, or vendor GI certification.',
    },
    {
      step: 2,
      label: 'Evaluation',
      description:
        'Platform evaluates cultural heritage significance, institutional qualification, GI documentation, and KPI status for all applicants.',
    },
    {
      step: 3,
      label: 'Matching',
      description:
        'Artisan vendors are matched with institutional partners based on craft category, heritage significance, and institutional collection focus.',
    },
    {
      step: 4,
      label: 'Agreement',
      description:
        'Exhibition agreements executed — covering rights, attribution, insurance, preservation, compensation, and collaboration timeline.',
    },
    {
      step: 5,
      label: 'Showcase and Legacy',
      description:
        'Heritage exhibitions launch. Digital archives activated. Artisan legacy documented. Museum collections enriched. Institutional recognition established.',
    },
  ],
  nextUnlock: {
    label: 'Next Partnership',
    slug: 'ngo-government',
    name: 'NGO & Government',
    kpiRequired: '9.0+',
    retentionRequired: '12 months',
  },
} as const;

// ─── FAQ Section ──────────────────────────────────────────────────────────────
// Shared: not role-specific.

export const museumFaq = {
  sectionLabel: 'FAQ',
  headline: 'Common Questions About Museum Collaboration',
  items: [
    {
      question: 'Who pays for exhibition insurance?',
      answer:
        'Insurance costs are negotiated as part of the individual partnership agreement. Museums often co-sponsor insurance for exhibitions they initiate. The full cost breakdown — including insurance responsibilities — is provided to both parties before any partnership is confirmed.',
    },
    {
      question: 'Do vendors receive permanent recognition in museum records?',
      answer:
        'Yes. Vendor names, artisan profiles, and craft heritage documentation are permanently tied to their exhibited work in museum digital archives and collection records — ensuring lasting artisan attribution.',
    },
    {
      question: 'Can museums acquire Kashmiri craft for permanent collections?',
      answer:
        'Yes. Some artifacts are purchased outright for permanent museum collections based on the specific acquisition agreement. Both temporary exhibition loans and permanent acquisitions are supported under the partnership framework.',
    },
    {
      question: 'What happens if an exhibited craft is damaged?',
      answer:
        'Insurance and preservation contracts in the exhibition agreement ensure vendor compensation for any damage. The platform manages claims documentation and the compensation process on behalf of both parties.',
    },
    {
      question: 'Will vendors receive travel support for museum visits?',
      answer:
        'Yes. Visa support documentation — museum invitations, institutional letters, and insurance proof — is provided for vendor travel to museum locations. Visa approval is determined entirely by the relevant embassy; DKC and the museum provide supporting documentation only.',
    },
    {
      question: 'Does Museum Collaboration require completing a prior partnership tier?',
      answer:
        "No. Unlike all other partnerships in the platform, Museum Collaboration does not require completing a specific prior tier's retention period. Entry is governed by KPI 9.0+, craft heritage significance, GI documentation, and institutional qualification.",
    },
  ],
} as const;

// ─── Final CTA Section ────────────────────────────────────────────────────────
// Role-split: different framing for institutions vs vendors.

export const museumFinalCta = {
  sectionLabel: 'Start Today',
  shared: {
    headline: "Preserve Heritage. Empower Artisans. Partner With the World's Leading Museums.",
    description:
      'GI-certified provenance, blockchain documentation, institutional-grade insurance, and transparent agreements — a Museum Collaboration that protects Kashmir craft heritage, uplifts artisan legacy, and creates lasting global cultural recognition.',
  },
  roles: {
    buyer: {
      headline: 'Ready to Enrich Your Museum Collection With Authentic Kashmir Craft Heritage?',
      supportingPoints: [
        'GI-certified, blockchain-verified provenance on every acquisition — full institutional due diligence met.',
        'Complete artisan attribution and cultural heritage context included with every collaboration.',
        'Insurance, preservation logistics, and loan management fully governed through the platform.',
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
      headline: 'Ready to Place Your Kashmir Craft in Prestigious Museum Collections?',
      supportingPoints: [
        'Permanent artisan attribution in international museum archives — cultural legacy documented forever.',
        'Cargo insurance, preservation support, and transparent compensation on every exhibition agreement.',
        'Museum recognition opens pathways to NGO partnerships, cultural exports, and institutional procurement.',
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

export const MUSEUM = {
  meta: museumMeta,
  heroSection: museumHero,
  overviewSection: museumOverview,
  modelDifferenceSection: museumModelDifference,
  eligibilityRulesSection: museumEligibilityRules,
  eligibilityAssessmentSection: museumEligibilityAssessment,
  capabilitiesSection: museumCapabilities,
  // platformAdvantageSection: museumPlatformAdvantage,
  pricingSection: museumPricing,
  technologySection: museumTechnology,
  apiIntegrationSection: museumApiIntegration,
  workflowSection: museumWorkflow,
  faqSection: museumFaq,
  finalCtaSection: museumFinalCta,
} as const;

export type MuseumContent = typeof MUSEUM;
