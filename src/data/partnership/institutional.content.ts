export type InstitutionalTrackId = 'logistics' | 'museum' | 'ngo-government' | 'tech-alliance';

export type Role = 'buyer' | 'vendor';

export const institutionalData = {
  meta: {
    id: 'institutional',
    slug: 'institutional',
    tier: 4,
    pageLabel: 'Institutional',
    pageTitle: 'Institutional Partnerships',
    pageDescription:
      'Institutional partnerships that connect craft ecosystems with museums, NGOs, governments, logistics networks, and technology allies through heritage, compliance, and long-term global collaboration.',
  },

  heroSection: {
    sectionLabel: 'Institutional',
    headline:
      'Institutional Partnerships — Where Trust, Heritage, Infrastructure, and Policy Converge',
    roles: {
      buyer: {
        description:
          'Enter long-horizon partnership models built for institutions, procurement actors, and serious organizations that require trust, compliance, heritage credibility, and structured operational support.',
        cta: {
          label: 'Start Buyer Application',
          href: '/registration',
        },
      },
      vendor: {
        description:
          'Enter institutional pathways designed for mature vendors and ecosystem actors seeking recognition, logistics support, policy-linked collaboration, and long-term legitimacy beyond standard trade.',
        cta: {
          label: 'Start Vendor Application',
          href: '/registration',
        },
      },
    },
  },

  tradeModelsSection: {
    sectionLabel: 'Institutional Models',
    headline: 'Four Institutional Models. One Long-Horizon Partnership Layer.',
    description:
      'Institutional Partnerships extend the platform into logistics, preservation, policy engagement, and technology-backed global alliances.',
    cards: [
      {
        id: 'logistics',
        icon: 'Truck',
        title: 'Logistics',
        roles: {
          buyer:
            'Strengthen supply continuity, customs coordination, and operational reliability through structured logistics pathways.',
          vendor:
            'Reduce trade friction, improve fulfilment coordination, and gain stronger access to delivery infrastructure and supply support.',
        },
        href: '/partnership-paths/institutional/logistics',
      },
      {
        id: 'museum',
        icon: 'Landmark',
        title: 'Museum',
        roles: {
          buyer:
            'Access authenticated cultural procurement and preservation-linked partnerships through museum and institutional channels.',
          vendor:
            'Gain institutional recognition, heritage positioning, and preservation-led visibility through museum-aligned pathways.',
        },
        href: '/partnership-paths/institutional/museum',
      },
      {
        id: 'ngo-government',
        icon: 'Globe2',
        title: 'NGO & Government',
        roles: {
          buyer:
            'Source through fair-trade, policy-aware, and sustainability-linked procurement environments.',
          vendor:
            'Access ethical buyer networks, policy-aligned collaborations, and longer-term impact-oriented relationships.',
        },
        href: '/partnership-paths/institutional/ngo-government',
      },
      {
        id: 'tech-alliance',
        icon: 'Cpu',
        title: 'Technology Alliances',
        roles: {
          buyer:
            'Use traceability, intelligence, and immersive systems to strengthen procurement confidence and operational insight.',
          vendor:
            'Adopt digital systems, improve traceability, and connect to innovation-led partnerships that expand credibility and market readiness.',
        },
        href: '/partnership-paths/institutional/technology-partnership',
      },
    ],
  },

  marketProblemSection: {
    sectionLabel: 'Why Institutional',
    headline: 'Fixing the Trust, Policy, and Infrastructure Gap',
    roles: {
      buyer: {
        description:
          'Serious organizations often need more than supply. They need governance, heritage credibility, logistics reliability, and policy-safe partnership conditions.',
      },
      vendor: {
        description:
          'Mature vendors often need more than market access. They need institutional legitimacy, policy linkage, infrastructure support, and long-term trust frameworks.',
      },
    },
    problems: [
      'Limited global policy-level engagement.',
      'Too few institutional alliances to safeguard heritage.',
      'Weak logistics and infrastructure support.',
      'Minimal recognition in global policy and cultural forums.',
    ],
    solutions: [
      'Strategic partnerships with museums, NGOs, governments, and institutions.',
      'Long-term logistics and compliance frameworks.',
      'Technology-enabled recognition through blockchain, AI, and immersive tools.',
      'Policy engagement that supports craft heritage and fair participation.',
    ],
  },

  eligibilitySection: {
    sectionLabel: 'Eligibility',
    headline: 'Institutional Entry Requires Maturity, Fit, and Compliance Readiness',
    description:
      'Institutional Partnerships are intended for mature partners, organizations, and institutions that can operate within heritage, compliance, logistics, or innovation-led collaboration structures.',
    roles: {
      buyer:
        'Buyers enter based on organizational maturity, procurement seriousness, compliance needs, and readiness for long-term or policy-sensitive collaboration.',
      vendor:
        'Vendors enter based on operational maturity, authenticity strength, compliance readiness, and ability to perform inside high-trust institutional relationships.',
    },
    standardPath: {
      title: 'Standard Eligibility',
      vendors:
        'KPI 8+ with long-term retention expectations and prior completion of relevant Collaborative or advanced partnership pathways.',
      buyers:
        'KPI 8+ with long-term retention expectations and prior engagement in Brand Growth or Collaborative pathways where relevant.',
      note: 'Partners normally progress through KPI, retention, and prerequisite completion before entering institutional layers.',
      description:
        'This path supports partners building toward long-term, compliance-heavy, or heritage-sensitive institutional collaboration.',
      cta: {
        label: 'Apply for Standard Path',
        href: '/registration',
      },
    },
    fastTrackPath: {
      title: 'Lateral Entry (Fast-Track Path)',
      description:
        'Independent evaluation by Hamadan Craft Revival Foundation is intended for high-performing partners or institutions that meet benchmarks earlier and can demonstrate readiness for institutional engagement.',
      points: [
        'KHCRF evaluates vendor, buyer, or institutional readiness.',
        'If the evaluation is promising, the partner may opt into Lateral Entry by paying a Lateral Fee.',
        'Prerequisites and retention may be reduced or bypassed for direct institutional access.',
        'This route is best suited for partners with proven credibility and capacity.',
      ],
      note: 'Fast-track is an accelerated path and depends on strong performance history, compliance readiness, and institutional fit.',
      cta: {
        label: 'Apply for KHCRF Evaluation',
        href: 'https://khcrf.org/',
      },
    },
  },

  tracksSection: {
    sectionLabel: 'Institutional Tracks',
    headline: 'Structured Progression Into Institutional Legitimacy and Alliance',
    description:
      'Each track supports a different type of institutional value, from operational infrastructure and preservation to public-sector engagement and advanced technology alliances.',
    tracks: [
      {
        id: 'logistics' as InstitutionalTrackId,
        name: 'Logistics & Infrastructure',
        icon: 'Truck',
        href: '/partnership-paths/institutional/logistics',
        previousLevel: 'Warehousing',
        kpiRequired: 'Negotiable',
        retentionRequired: '12 months',
        bestFor: 'Large buyers, cooperatives, exporters, and logistics-oriented partners.',
        coreBenefit: 'Supply integration, warehousing support, and operational efficiency.',
        ctaLabel: 'Apply for Logistics',
        fastTrackAvailable: true,
      },
      {
        id: 'museum' as InstitutionalTrackId,
        name: 'Art & Culture Museums',
        icon: 'Landmark',
        href: '/partnership-paths/institutional/museum',
        previousLevel: 'Logistics & Infrastructure',
        kpiRequired: 'None',
        retentionRequired: 'None',
        bestFor: 'Heritage vendors, cultural institutions, and preservation-focused partnerships.',
        coreBenefit:
          'Museum showcases, cultural preservation, and global institutional visibility.',
        ctaLabel: 'Apply for Museum',
        fastTrackAvailable: true,
      },
      {
        id: 'ngo-government' as InstitutionalTrackId,
        name: 'NGOs & Governments',
        icon: 'Globe',
        href: '/partnership-paths/institutional/ngo-government',
        previousLevel: 'Museum',
        kpiRequired: 'None',
        retentionRequired: 'None',
        bestFor: 'Social enterprises, NGOs, governments, and policy-oriented actors.',
        coreBenefit: 'Fair-trade advocacy, social impact collaboration, and craft policy support.',
        ctaLabel: 'Apply for NGO & Government',
        fastTrackAvailable: true,
      },
      {
        id: 'tech-alliance' as InstitutionalTrackId,
        name: 'Technology Alliances',
        icon: 'Cpu',
        href: '/partnership-paths/institutional/technology-partnership',
        previousLevel: 'NGOs & Governments',
        kpiRequired: 'None',
        retentionRequired: 'None',
        bestFor:
          'Tech-driven vendors, innovation partners, and buyers seeking traceability and immersive systems.',
        coreBenefit: 'Traceability, intelligence, and technology-backed craft innovation.',
        ctaLabel: 'Apply for Tech Alliance',
        fastTrackAvailable: true,
      },
    ],
  },

  processSection: {
    sectionLabel: 'Process',
    headline: 'Two Ways to Enter Institutional Partnerships',
    description:
      'Institutional Partnerships can be entered through the standard route or through KHCRF-reviewed fast-track access where readiness is established early.',
    flows: [
      {
        id: 'standard',
        title: 'Standard Path',
        steps: [
          'Apply',
          'KPI and Compliance Evaluation',
          'Track Match',
          'Activation',
          'Institutional or Policy Recognition',
        ],
      },
      {
        id: 'fast-track',
        title: 'Fast-Track Path',
        steps: [
          'Apply',
          'KHCRF Evaluation',
          'If promising, opt into Lateral Entry',
          'Direct institutional access',
        ],
      },
    ],
  },

  journeySection: {
    sectionLabel: 'Progression',
    headline: 'From Advanced Participation to Institutional Alliance',
    description:
      'Institutional Partnerships move the ecosystem into formal alliances, policy engagement, heritage preservation, and advanced operational or technological support.',
    phases: [
      {
        title: 'Choose Your Institutional Track',
        items: [
          'Logistics & Infrastructure for supply chain integration and operational support.',
          'Art & Culture Museums for heritage positioning and preservation-led collaboration.',
          'NGOs & Governments for policy, sustainability, and social-impact partnerships.',
          'Technology Alliances for traceability, intelligence, and immersive innovation.',
        ],
        note: 'This layer generally follows maturity built in Collaborative or Brand Growth pathways, unless fast-track access applies.',
      },
      {
        title: 'Complete Evaluation and Compliance Review',
        description:
          'Partners are assessed for KPI, compliance, readiness, and institutional suitability based on the selected track.',
      },
      {
        title: 'Activate the Institutional Relationship',
        description:
          'Approved partners gain access to museum, NGO, logistics, government, or technology-alliance collaboration models.',
      },
      {
        title: 'Use Fast-Track if Eligible',
        description:
          'KHCRF evaluation may reduce waiting time and allow earlier entry into institutional programs.',
      },
      {
        title: 'Build Policy Recognition and Global Alliances',
        items: [
          'Policy Alliance Partnerships across museums, NGOs, governments, logistics ecosystems, and technology institutions.',
        ],
      },
    ],
  },

  pricingSection: {
    sectionLabel: 'Pricing',
    headline: 'Institutional Fee Summary',
    description:
      'Institutional tracks include onboarding and package structures aligned with higher-complexity partnerships, compliance expectations, and long-term organizational collaboration.',
    note: 'Pricing structures apply to both buyers and vendors depending on role-specific engagement within each institutional track.',
    tracks: [
      {
        trackId: 'museum' as InstitutionalTrackId,
        trackName: 'Museums',
        icon: 'Landmark',
        onboarding: '$1000 one-time setup.',
        priceRange: '$250–$1000',
        plans: [
          {
            name: 'Standard',
            price: '$250/month',
            features: [
              'Heritage showcase access',
              'Basic exhibition templates',
              'Logistics waiver: 5%',
              'Standard museum support',
            ],
          },
          {
            name: 'Growth',
            price: '$500/month',
            features: [
              'Curated exhibitions',
              'Branding kits',
              'Logistics waiver: 10%',
              'Priority museum placement',
            ],
          },
          {
            name: 'Premium',
            price: '$1000/month',
            features: [
              'Global exhibitions',
              'Premium packaging',
              'AR and VR museum catalogs',
              'Logistics waiver: 15%',
            ],
          },
        ],
      },
      {
        trackId: 'ngo-government' as InstitutionalTrackId,
        trackName: 'NGOs & Governments',
        icon: 'Globe',
        onboarding: '$1000 one-time setup.',
        priceRange: '$150–$750',
        plans: [
          {
            name: 'Standard',
            price: '$150/month',
            features: [
              'Fair-trade certification support',
              'Basic policy engagement',
              'Logistics waiver: 5%',
              'Standard NGO support',
            ],
          },
          {
            name: 'Pro',
            price: '$375/month',
            features: [
              'Policy advocacy programs',
              'Branding support',
              'Logistics waiver: 10%',
              'Priority NGO partnerships',
            ],
          },
          {
            name: 'Institutional',
            price: '$750/month',
            features: [
              'Direct policy alliances',
              'Funding access',
              'Logistics waiver: 15%',
              'Dedicated policy manager',
            ],
          },
        ],
      },
      {
        trackId: 'logistics' as InstitutionalTrackId,
        trackName: 'Logistics & Infrastructure',
        icon: 'Truck',
        onboarding: '$1000 one-time setup.',
        priceRange: '$200–$800',
        plans: [
          {
            name: 'Standard',
            price: '$200/month',
            features: [
              'Shared logistics infrastructure',
              'Basic warehousing access',
              'Logistics waiver: 5%',
              'Standard supply chain support',
            ],
          },
          {
            name: 'Growth',
            price: '$400/month',
            features: [
              'Priority global distribution',
              'Logistics waiver: 10%',
              'Advanced warehousing analytics',
              'Priority logistics support',
            ],
          },
          {
            name: 'Premium',
            price: '$800/month',
            features: [
              'Institutional-level warehousing',
              'Logistics waiver: 15%',
              'Dedicated logistics manager',
              'Real-time supply chain dashboard',
            ],
          },
        ],
      },
      {
        trackId: 'tech-alliance' as InstitutionalTrackId,
        trackName: 'Technology Alliances',
        icon: 'Cpu',
        onboarding: '$1000 one-time setup.',
        priceRange: '$300–$1500',
        plans: [
          {
            name: 'Compliance',
            price: '$300/month',
            features: [
              'Blockchain traceability setup',
              'Basic tech integration',
              'Logistics waiver: 5%',
              'Standard tech support',
            ],
          },
          {
            name: 'Expansion',
            price: '$750/month',
            features: [
              'AI integration',
              'AR and VR catalog setup',
              'Logistics waiver: 10%',
              'Priority tech support',
            ],
          },
          {
            name: 'Institutional',
            price: '$1500/month',
            features: [
              'Full enterprise-level integration',
              'Policy-level recognition',
              'Logistics waiver: 15%',
              'Dedicated tech consultant',
            ],
          },
        ],
      },
    ],
  },

  roleBenefitsSection: {
    sectionLabel: 'Platform Advantage',
    headline: 'Different Value for Each Side — Same Institutional Layer',
    description:
      'Institutional Partnerships connect the ecosystem to long-term infrastructure, preservation, policy engagement, and advanced innovation networks.',
    audiences: [
      {
        id: 'buyers',
        title: 'Buyer Benefits',
        items: [
          'Logistics: streamlined freight, customs coordination, and more reliable supply access.',
          'Museum: authentic cultural collections and heritage-preservation collaboration.',
          'NGO & Government: verified fair-trade sourcing and sustainability-linked partnerships.',
          'Technology Alliances: AI insights, blockchain traceability, and immersive product engagement.',
        ],
      },
      {
        id: 'vendors',
        title: 'Vendor Benefits',
        items: [
          'Logistics: fewer trade barriers, stronger freight support, and customs coordination.',
          'Museum: institutional recognition, heritage positioning, and archival collaboration.',
          'NGO & Government: ethical buyer networks, fairer pricing, and longer-term policy-linked relationships.',
          'Technology Alliances: digital adoption, product traceability, and entry into global tech-craft ecosystems.',
        ],
      },
    ],
  },

  entryPathSection: {
    sectionLabel: 'Entry Paths',
    headline: 'Choose How You Enter',
    description:
      'Institutional Partnerships support both standard maturity-based progression and accelerated access for qualified high-readiness partners.',
    options: [
      {
        id: 'standard',
        title: 'Standard Path',
        subtitle: 'Default progression for all partners',
        features: [
          'No upfront lateral fee.',
          'Progress through KPI, compliance, and prerequisite completion.',
          'Best for institutions and partners building steady, reliable long-term collaboration.',
          'Supports stronger readiness before entering complex institutional layers.',
        ],
        note: 'This path takes longer because it usually depends on previous track maturity and compliance review.',
        cta: {
          label: 'Apply with Standard Path',
          href: '/registration',
        },
      },
      {
        id: 'lateral-entry',
        title: 'Lateral Entry (KHCRF Fast-Track)',
        subtitle: 'Optional accelerated route',
        features: [
          'KHCRF evaluation comes first.',
          'Lateral fee applies only after a promising evaluation result.',
          'Prerequisites and retention may be reduced or bypassed for direct institutional access.',
          'Recognition as a KHCRF-reviewed institutional partner may strengthen trust and visibility.',
          'Best for institutions and partners ready to scale faster.',
        ],
        note: 'Paid only after successful evaluation.',
        cta: {
          label: 'Apply for KHCRF Fast-Track',
          href: 'https://khcrf.org/',
        },
      },
    ],
  },

  faqSection: {
    sectionLabel: 'FAQ',
    headline: 'Frequently Asked Questions',
    items: [
      {
        question: 'Do I need to complete Collaborative before joining Institutional?',
        answer:
          'Usually yes, unless you qualify through KHCRF-reviewed fast-track entry or meet another approved advanced-entry condition.',
      },
      {
        question: 'Can NGOs and smaller institutions join directly?',
        answer:
          'Yes, if they meet the readiness, compliance, and track-fit requirements for the selected partnership model, or qualify through fast-track review.',
      },
      {
        question: 'Is technology adoption mandatory?',
        answer:
          'Only for the Technology Alliances track. Other institutional tracks focus on different readiness and collaboration requirements.',
      },
      {
        question: 'Can museums join without GI-certified vendors?',
        answer:
          'Museum-oriented partnerships are expected to maintain strong authenticity, heritage, and compliance standards, and certification requirements should be defined explicitly in your final business rules.',
      },
    ],
  },
} as const;
