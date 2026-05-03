export type CollaborativeTrackId =
  | 'packaging'
  | 'design-co-creation'
  | 'storytelling-media'
  | 'warehousing';

export type Role = 'buyer' | 'vendor';

export const collaborativeData = {
  meta: {
    id: 'collaborative',
    slug: 'collaborative',
    tier: 3,
    pageLabel: 'Collaborative',
    pageTitle: 'Collaborative Partnerships',
    pageDescription:
      'Collaborative partnerships that help vendors and buyers co-create products, strengthen brand storytelling, share infrastructure, and unlock innovation beyond traditional trade.',
  },

  heroSection: {
    sectionLabel: 'Collaborative',
    headline: 'Collaborative Partnerships — Where Capability Extends Beyond Trade',
    roles: {
      buyer: {
        description:
          'Move beyond sourcing into co-creation, stronger brand presentation, richer storytelling, and shared operational support through structured collaborative pathways.',
        cta: {
          label: 'Start Buyer Application',
          href: '/registration',
        },
      },
      vendor: {
        description:
          'Move beyond supply into co-design, stronger storytelling, better packaging, and shared infrastructure that improves market differentiation and long-term growth.',
        cta: {
          label: 'Start Vendor Application',
          href: '/registration',
        },
      },
    },
  },

  tradeModelsSection: {
    sectionLabel: 'Collaboration Models',
    headline: 'Four Collaborative Models. One Capability-Building Layer.',
    description:
      'Collaborative Partnerships are designed for partners who want more than trade. These models support co-creation, better branding, shared infrastructure, and stronger market differentiation.',
    cards: [
      {
        id: 'packaging',
        icon: 'Box',
        title: 'Packaging',
        roles: {
          buyer:
            'Strengthen presentation, sustainability, and retail readiness through better packaging systems.',
          vendor:
            'Improve product presentation, reduce rejection risk, and raise perceived brand value through stronger packaging support.',
        },
        href: '/partnership-paths/collaborative/packaging',
      },
      {
        id: 'design-co-creation',
        icon: 'PenTool',
        title: 'Design Collaboration',
        roles: {
          buyer:
            'Co-create exclusive product lines, retail variations, and design-led collections that improve market differentiation.',
          vendor:
            'Work directly with buyers and designers to build differentiated products and stronger creative value.',
        },
        href: '/partnership-paths/collaborative/design-collaboration',
      },
      {
        id: 'storytelling-media',
        icon: 'Camera',
        title: 'Storytelling & Media',
        roles: {
          buyer:
            'Strengthen customer trust and product value through authentic narrative, campaign content, and cultural storytelling.',
          vendor:
            'Build visibility, trust, and brand recognition through stronger narrative, media, and digital presentation.',
        },
        href: '/partnership-paths/collaborative/storytelling-media',
      },
      {
        id: 'warehousing',
        icon: 'Warehouse',
        title: 'Warehousing',
        roles: {
          buyer:
            'Reduce lead times and improve fulfilment through structured storage, handling, and distribution support.',
          vendor:
            'Access shared warehousing and fulfilment systems that reduce shipping friction and improve delivery reliability.',
        },
        href: '/partnership-paths/collaborative/warehousing',
      },
    ],
  },

  marketProblemSection: {
    sectionLabel: 'Why Collaborative',
    headline: 'Fixing the Capability Gap in Craft Trade',
    roles: {
      buyer: {
        description:
          'Trade alone does not solve product differentiation, narrative strength, packaging quality, or fulfilment support. Collaborative pathways address those missing layers.',
      },
      vendor: {
        description:
          'Trade alone does not solve co-creation, visibility, branding, packaging, or infrastructure gaps. Collaborative pathways add the capability layer vendors often lack.',
      },
    },
    problems: [
      'Vendors remain isolated without enough co-creation opportunities.',
      'Buyers lack storytelling, media, and stronger brand differentiation support.',
      'There is no shared infrastructure for warehousing and packaging.',
      'Technology adoption remains limited across the craft value chain.',
    ],
    solutions: [
      'Design co-creation between vendors and buyers.',
      'Shared services for warehousing, packaging, and logistics.',
      'Storytelling, digital media, and co-marketing support.',
      'Technology-enabled innovation and stronger transparency.',
    ],
  },

  eligibilitySection: {
    sectionLabel: 'Eligibility',
    headline: 'Collaborative Entry Requires Maturity and Fit',
    description:
      'Collaborative Partnerships are intended for partners who have already developed trade or brand-growth maturity and are ready to add co-creation, infrastructure, and innovation capabilities.',
    roles: {
      buyer:
        'Buyers enter based on sourcing maturity, budget readiness, and a clear need for collaboration, branding, or infrastructure-backed growth.',
      vendor:
        'Vendors enter based on operational maturity, quality consistency, and readiness to work inside more collaborative and structured partnership models.',
    },
    standardPath: {
      title: 'Standard Eligibility',
      vendors:
        'KPI 8+ with long-term retention expectations and prior experience in Core Trade or Brand Growth.',
      buyers:
        'KPI 8+ with long-term retention expectations, proven sourcing budget, and prior platform engagement.',
      note: 'Partners progress naturally through KPI performance, retention, and prerequisite completion.',
      description:
        'This path is designed for partners building toward collaboration through structured maturity and prior progression.',
      cta: {
        label: 'Apply for Standard Path',
        href: '/registration',
      },
    },
    fastTrackPath: {
      title: 'Lateral Entry (Fast-Track Path)',
      description:
        'Independent evaluation by Hamadan Craft Revival Foundation is intended for exceptional vendors and buyers with a proven record, stronger capacity, and higher readiness for collaborative programs.',
      points: [
        'KHCRF evaluates performance, compliance, and authenticity.',
        'If the evaluation is promising, the partner may opt into Lateral Entry by paying a Lateral Fee.',
        'Retention requirements can be reduced or bypassed for direct access to collaborative tracks.',
      ],
      note: 'Fast-track is designed for high performers, certified artisans, and buyers with strong capacity, and may require tighter ongoing compliance checks.',
      vendors:
        'Vendors should demonstrate established operations, consistent quality, and strong compliance readiness. Prior export or award recognition may strengthen eligibility.',
      buyers:
        'Buyers should demonstrate clear scaling capacity, investment readiness, and suitability for collaborative or infrastructure-backed programs.',
      cta: {
        label: 'Apply for KHCRF Evaluation',
        href: 'https://khcrf.org/',
      },
    },
  },

  tracksSection: {
    sectionLabel: 'Collaborative Tracks',
    headline: 'Structured Progression Into Capability and Differentiation',
    description:
      'Each track adds a practical capability layer, from packaging and design to storytelling and shared infrastructure.',
    tracks: [
      {
        id: 'packaging' as CollaborativeTrackId,
        name: 'Packaging & Branding Solutions',
        icon: 'Package',
        href: '/partnership-paths/collaborative/packaging',
        previousLevel: 'Brick & Mortar',
        kpiRequired: '8+',
        retentionRequired: '18 months',
        bestFor:
          'Vendors moving toward premium buyers and buyers who need stronger branded packaging.',
        coreBenefit: 'Branded kits, eco solutions, custom bundles, and packaging support.',
        ctaLabel: 'Apply for Packaging',
        fastTrackAvailable: true,
      },
      {
        id: 'design-co-creation' as CollaborativeTrackId,
        name: 'Design & Product Innovation',
        icon: 'Paintbrush',
        href: '/partnership-paths/collaborative/design-collaboration',
        previousLevel: 'Packaging',
        kpiRequired: '8+',
        retentionRequired: '4 months',
        bestFor: 'Buyers seeking unique product lines and vendors open to creative innovation.',
        coreBenefit:
          'Exclusive designs, shared IP potential, branding support, and collaborative product creation.',
        ctaLabel: 'Apply for Co-Creation',
        fastTrackAvailable: true,
      },
      {
        id: 'storytelling-media' as CollaborativeTrackId,
        name: 'Storytelling, Media & Brand Engagement',
        icon: 'BookOpen',
        href: '/partnership-paths/collaborative/storytelling-media',
        previousLevel: 'Design & Product Innovation',
        kpiRequired: '8.5+',
        retentionRequired: '4 months',
        bestFor: 'Brands, retailers, and vendors needing narrative-driven market differentiation.',
        coreBenefit:
          'Campaigns, digital media, richer storytelling, and stronger brand engagement.',
        ctaLabel: 'Apply for Storytelling',
        fastTrackAvailable: true,
      },
      {
        id: 'warehousing' as CollaborativeTrackId,
        name: 'Warehousing & Shared Services',
        icon: 'Warehouse',
        href: '/partnership-paths/collaborative/warehousing',
        previousLevel: 'Storytelling & Media',
        kpiRequired: '8.5+',
        retentionRequired: '4 months',
        bestFor:
          'Buyers needing distribution support and vendors needing storage and fulfilment assistance.',
        coreBenefit: 'Shared warehousing, logistics pooling, and lower operational friction.',
        ctaLabel: 'Apply for Warehousing',
        fastTrackAvailable: true,
      },
    ],
  },

  processSection: {
    sectionLabel: 'Process',
    headline: 'Two Ways to Enter Collaborative Partnerships',
    description:
      'Partners can progress through a standard pathway or apply for KHCRF-reviewed fast-track access where appropriate.',
    flows: [
      {
        id: 'standard',
        title: 'Standard Path',
        steps: [
          'Apply',
          'KPI Evaluation',
          'Track Match',
          'Activation',
          'Progression via KPI and Retention',
        ],
      },
      {
        id: 'fast-track',
        title: 'Fast-Track Path',
        steps: [
          'Apply',
          'KHCRF Evaluation',
          'If promising, opt into Lateral Entry',
          'Direct access to a collaborative track',
        ],
      },
    ],
  },

  journeySection: {
    sectionLabel: 'Progression',
    headline: 'From Trade Maturity to Shared Capability',
    description:
      'Collaborative Partnerships add co-creation, storytelling, branding, and infrastructure capabilities that prepare partners for more advanced institutional pathways.',
    phases: [
      {
        title: 'Choose Your Collaborative Track',
        items: [
          'Packaging & Branding Solutions for stronger product presentation and more capable packaging systems.',
          'Design & Product Innovation for co-created products and differentiated offerings.',
          'Storytelling, Media & Brand Engagement for richer narratives and stronger market presence.',
          'Warehousing & Shared Services for storage, fulfilment, and logistics support.',
        ],
        note: 'This layer typically follows Core Trade or Brand Growth maturity.',
      },
      {
        title: 'Complete Evaluation and Activation',
        description:
          'Partners are assessed for KPI performance, prerequisite readiness, and practical fit for the selected collaboration model.',
      },
      {
        title: 'Use Fast-Track if Eligible',
        description:
          'KHCRF evaluation may accelerate entry for partners with demonstrated readiness and stronger capacity.',
      },
      {
        title: 'Move Toward Institutional Pathways',
        items: [
          'Institutional Partnerships with museums, NGOs, governments, logistics networks, and technology partners.',
        ],
      },
    ],
  },

  pricingSection: {
    sectionLabel: 'Pricing',
    headline: 'Collaborative Fee Summary',
    description:
      'Each collaborative model includes onboarding logic and package options aligned with the type of value-added service or shared capability involved.',
    note: 'Pricing structures apply to both buyers and vendors depending on role-specific engagement within each track.',
    tracks: [
      {
        trackId: 'packaging' as CollaborativeTrackId,
        trackName: 'Packaging & Branding Solutions',
        icon: 'Package',
        onboarding: 'Free for eligible partners progressing from Core Trade or Brand Growth.',
        priceRange: '$50–$250',
        plans: [
          {
            name: 'Standard',
            price: '$50/month',
            features: [
              'Basic branded packaging kit',
              'Standard packaging templates',
              'Logistics waiver: 5%',
              'Basic branding support',
            ],
          },
          {
            name: 'Growth',
            price: '$125/month',
            features: [
              'Eco-packaging solutions',
              'Branded packaging kits',
              'Logistics waiver: 10%',
              'Priority branding support',
            ],
          },
          {
            name: 'Premium',
            price: '$250/month',
            features: [
              'Fully custom branded packaging bundles',
              'Eco-friendly premium solutions',
              'Logistics waiver: 15%',
              'Dedicated branding manager',
            ],
          },
        ],
      },
      {
        trackId: 'design-co-creation' as CollaborativeTrackId,
        trackName: 'Design & Product Innovation',
        icon: 'Paintbrush',
        onboarding: 'Free for eligible partners progressing from Core Trade or Brand Growth.',
        priceRange: '$50–$250',
        plans: [
          {
            name: 'Basic',
            price: '$50/month',
            features: [
              'Shared design pool',
              'Basic branding templates',
              'Logistics waiver: 5% discount',
              'Standard vendor-buyer matching',
            ],
          },
          {
            name: 'Growth',
            price: '$125/month',
            features: [
              'Co-owned IP potential',
              'Premium branding support',
              'Logistics waiver: 10% discount',
              'Priority design collaboration',
            ],
          },
          {
            name: 'Premium',
            price: '$250/month',
            features: [
              'Exclusive design collaborations',
              'Legal and IP support',
              'Logistics waiver: 15% discount',
              'Dedicated design manager',
            ],
          },
        ],
      },
      {
        trackId: 'storytelling-media' as CollaborativeTrackId,
        trackName: 'Storytelling & Media',
        icon: 'BookOpen',
        onboarding: 'Free for eligible partners progressing from Core Trade or Brand Growth.',
        priceRange: '$50–$250',
        plans: [
          {
            name: 'Standard',
            price: '$50/month',
            features: [
              'Basic digital campaigns',
              'Standard content templates',
              'Logistics waiver: 5%',
              'Standard media support',
            ],
          },
          {
            name: 'Pro',
            price: '$125/month',
            features: [
              'AR and VR campaign support',
              'Co-funded media',
              'Logistics waiver: 10%',
              'Priority content placement',
            ],
          },
          {
            name: 'Enterprise',
            price: '$250/month',
            features: [
              'Global campaigns',
              'Premium media rights support',
              'Logistics waiver: 15%',
              'Dedicated media manager',
            ],
          },
        ],
      },
      {
        trackId: 'warehousing' as CollaborativeTrackId,
        trackName: 'Warehousing & Shared Services',
        icon: 'Warehouse',
        onboarding: '$500 one-time setup.',
        priceRange: '$75–$400',
        plans: [
          {
            name: 'Standard',
            price: '$75/month',
            features: [
              'Shared local storage',
              'Basic logistics support',
              'Logistics waiver: 5%',
              'Standard inventory tracking',
            ],
          },
          {
            name: 'Growth',
            price: '$200/month',
            features: [
              'Regional warehousing',
              'Logistics waiver: 10%',
              'Advanced inventory analytics',
              'Priority distribution support',
            ],
          },
          {
            name: 'Premium',
            price: '$400/month',
            features: [
              'Global warehouse access',
              'Logistics waiver: 15%',
              'Dedicated logistics manager',
              'Real-time inventory dashboard',
            ],
          },
        ],
      },
    ],
  },

  roleBenefitsSection: {
    sectionLabel: 'Platform Advantage',
    headline: 'Different Value for Each Side — Same Collaborative Layer',
    description:
      'Collaborative Partnerships create value beyond transactions by combining branding, co-design, storytelling, and operational support in one structured layer.',
    audiences: [
      {
        id: 'buyers',
        title: 'Buyer Benefits',
        items: [
          'Packaging: eco-friendly, export-compliant packaging with stronger retail presentation.',
          'Design Collaboration: trend-aligned co-creations and more exclusive product innovation.',
          'Storytelling & Media: cultural narratives and authentic heritage marketing tools.',
          'Warehousing: faster delivery, reduced lead times, and lower logistics costs.',
        ],
      },
      {
        id: 'vendors',
        title: 'Vendor Benefits',
        items: [
          'Packaging: branding upgrades, reduced shipment rejection risk, and stronger retail value.',
          'Design Collaboration: co-design with global buyers and product innovation support.',
          'Storytelling & Media: stronger digital visibility, artisan recognition, and buyer trust.',
          'Warehousing: U.S.-based inventory support, faster B2B fulfilment, and reduced shipping risk.',
        ],
      },
    ],
  },

  entryPathSection: {
    sectionLabel: 'Entry Paths',
    headline: 'Choose How You Enter',
    description:
      'Collaborative Partnerships support both standard progression and accelerated entry for partners with stronger readiness.',
    options: [
      {
        id: 'standard',
        title: 'Standard Path',
        subtitle: 'Default progression for all partners',
        features: [
          'No upfront lateral fee.',
          'Progress through KPI and retention requirements.',
          'Best for partners seeking steady, sustainable capability growth.',
          'Supports lower-risk expansion through staged readiness.',
          'Encourages stronger market fit before deeper collaboration.',
        ],
        note: 'This path takes longer because retention and prior progression matter.',
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
          'Retention may be reduced or bypassed for direct access to collaborative tracks.',
          'Recognition as a KHCRF-reviewed partner can strengthen advanced entry.',
          'Best for vendors and buyers ready to scale faster.',
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
        question: 'Do I need advanced tech adoption to join Collaborative Partnerships?',
        answer:
          'Not necessarily. Most collaborative tracks focus on packaging, design, storytelling, or warehousing readiness rather than requiring advanced technology adoption at entry.',
      },
      {
        question: 'Can smaller vendors access Packaging or Storytelling tracks?',
        answer:
          'Yes, if they meet the relevant KPI, readiness, and progression requirements for the selected track.',
      },
      {
        question: 'Is Lateral Entry possible for Warehousing?',
        answer: 'Yes, subject to KHCRF evaluation and fast-track approval.',
      },
    ],
  },
} as const;
