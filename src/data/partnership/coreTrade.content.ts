export type CoreTradeTrackId = 'dropshipping' | 'consignment' | 'wholesale' | 'import-export';

export type Role = 'buyer' | 'vendor';

export const coreTradeData = {
  meta: {
    id: 'core-trade',
    slug: 'core-trade',
    tier: 1,
    pageLabel: 'Core Trade',
    pageTitle: 'Core Trade Partnerships',
    pageDescription:
      'Structured trade entry pathways connecting Kashmiri vendors and global buyers through dropshipping, consignment, wholesale, and import/export models.',
  },

  heroSection: {
    sectionLabel: 'Core Trade',
    headline: 'Core Trade — Where Real Trade Actually Begins',

    roles: {
      buyer: {
        description:
          'Access structured sourcing models designed to reduce risk, improve supplier credibility, and create a clear path from small test orders to large-scale trade relationships.',
        cta: {
          label: 'Start Buyer Application',
          href: '/registration',
        },
      },

      vendor: {
        description:
          'Enter global trade through structured supply pathways designed to increase visibility, stabilize demand, and build toward export-ready commercial relationships.',
        cta: {
          label: 'Start Vendor Application',
          href: '/registration',
        },
      },
    },
  },

  tradeModelsSection: {
    sectionLabel: 'Partnership Models',
    headline: 'Four Trade Models. One Structured Progression System.',
    description:
      'Core Trade begins with accessible entry points and builds toward more advanced, compliance-driven trade relationships.',
    cards: [
      {
        id: 'dropshipping',
        icon: 'Package',
        title: 'Dropshipping',
        roles: {
          buyer:
            'Sell without holding inventory. Test demand quickly with low risk and minimal operational complexity.',
          vendor:
            'Reach global buyers without needing full export infrastructure. Start selling with lower operational pressure.',
        },
        href: '/partnership-paths/core-trade/dropshipping',
      },
      {
        id: 'consignment',
        icon: 'Truck',
        title: 'Consignment',
        roles: {
          buyer:
            'Place products in retail environments with reduced upfront investment and pay-after-sale flexibility.',
          vendor:
            'Get products into retail channels while maintaining visibility and improving sales cycles.',
        },
        href: '/partnership-paths/core-trade/consignment',
      },
      {
        id: 'wholesale',
        icon: 'Store',
        title: 'Wholesale',
        roles: {
          buyer:
            'Procure at scale with better pricing, consistent supply, and repeat trade relationships.',
          vendor:
            'Secure bulk orders, increase production stability, and grow through structured buyer demand.',
        },
        href: '/partnership-paths/core-trade/wholesale',
      },
      {
        id: 'import-export',
        icon: 'Globe',
        title: 'Import / Export',
        roles: {
          buyer:
            'Access compliance-ready cross-border sourcing with clearer pricing and structured logistics.',
          vendor:
            'Enter export-ready trade with certification, compliance support, and stronger global credibility.',
        },
        href: '/partnership-paths/core-trade/import-export',
      },
    ],
  },

  marketProblemSection: {
    sectionLabel: 'Why Core Trade',
    headline: 'Fixing What Traditional Trade Gets Wrong',
    roles: {
      buyer: {
        description:
          'Buyers face unreliable sourcing, inconsistent quality, and unclear pricing structures in traditional craft trade.',
      },
      vendor: {
        description:
          'Vendors face limited market access, dependency on intermediaries, and unstable demand cycles.',
      },
    },
    problems: [
      'Vendors exploited by intermediaries.',
      'Buyers exposed to counterfeits and inflated prices.',
      'No digital systems and no fair-trade compliance.',
      'No growth ladder for small or large players.',
    ],
    solutions: [
      'Verified vendors and buyers with KPI checks.',
      'Low-risk entry models such as dropshipping and consignment.',
      'Transparent contracts and structured progression.',
      'A clear first step into the broader partnership framework.',
    ],
  },

  eligibilitySection: {
    sectionLabel: 'Eligibility',
    headline: 'Entry Is Structured — Not Arbitrary',
    roles: {
      buyer:
        'Buyers enter based on sourcing readiness, budget flexibility, and ability to engage in structured trade models.',
      vendor:
        'Vendors enter based on product readiness, quality consistency, and ability to meet progression benchmarks.',
    },
    standardPath: {
      title: 'Standard Eligibility',
      vendors:
        'KPI 6+ with retention requirements depending on track. Certification required for Import / Export.',
      buyers:
        'KPI 6+ with retention requirements depending on track. Budget flexibility varies by model.',
      note: 'Progression happens through measurable KPI and retention milestones.',
    },
    fastTrackPath: {
      title: 'Lateral Entry (Fast-Track Path)',
      description:
        'Partners can bypass waiting periods through external evaluation if they are already prepared for higher-level trade.',
      points: [
        'Evaluation by Hamadan Craft Revival Foundation (KHCRF).',
        'Optional lateral fee only after approval.',
        'Faster access to higher-level trade pathways.',
        'Standard progression remains available if not selected.',
      ],
      cta: {
        label: 'Apply for KHCRF Evaluation',
        href: 'https://khcrf.org/',
      },
    },
  },

  tracksSection: {
    sectionLabel: 'Trade Tracks',
    headline: 'Structured Progression — Not Random Growth',
    description:
      'Each track builds on the previous one, forming a clear commercial progression system.',
    tracks: [
      {
        id: 'dropshipping' as CoreTradeTrackId,
        name: 'Dropshipping',
        icon: 'Truck',
        href: '/partnership-paths/core-trade/dropshipping',
        previousLevel: null,
        kpiRequired: 'None',
        retentionRequired: 'None',
        bestFor: 'Online stores, new artisans, and small-scale buyers.',
        coreBenefit: 'Zero risk entry point.',
        ctaLabel: 'Start Dropshipping',
        fastTrackAvailable: false,
      },
      {
        id: 'consignment' as CoreTradeTrackId,
        name: 'Consignment',
        icon: 'ShoppingBag',
        href: '/partnership-paths/core-trade/consignment',
        previousLevel: 'Dropshipping',
        kpiRequired: '6.0+',
        retentionRequired: '12 months',
        bestFor: 'Boutiques, retail stores, and artisan groups.',
        coreBenefit: 'Pay-after-sale retail entry.',
        ctaLabel: 'Apply for Consignment',
        fastTrackAvailable: true,
      },
      {
        id: 'wholesale' as CoreTradeTrackId,
        name: 'Wholesale',
        icon: 'Package',
        href: '/partnership-paths/core-trade/wholesale',
        previousLevel: 'Consignment',
        kpiRequired: '6.5+',
        retentionRequired: '4 months',
        bestFor: 'Distributors, chain stores, and large buyers.',
        coreBenefit: 'Scale through bulk trade.',
        ctaLabel: 'Apply for Wholesale',
        fastTrackAvailable: true,
      },
      {
        id: 'import-export' as CoreTradeTrackId,
        name: 'Import / Export',
        icon: 'Globe',
        href: '/partnership-paths/core-trade/import-export',
        previousLevel: 'Wholesale',
        kpiRequired: '7+',
        retentionRequired: '4 months',
        bestFor: 'Compliance-driven trade and larger distributors.',
        coreBenefit: 'Compliance-led global trade.',
        ctaLabel: 'Apply for Import / Export',
        fastTrackAvailable: true,
      },
    ],
  },

  processSection: {
    sectionLabel: 'Process',
    headline: 'Two Paths Into Core Trade',
    description:
      'Partners can progress through structured growth or accelerate through evaluation.',
    flows: [
      {
        id: 'standard',
        title: 'Standard Path',
        steps: [
          'Apply',
          'Evaluation (KPI)',
          'Track Match',
          'Trade Activation',
          'Progression via KPI and Retention',
        ],
      },
      {
        id: 'fast-track',
        title: 'Fast-Track Path',
        steps: [
          'Apply',
          'KHCRF Evaluation',
          'Optional Lateral Entry',
          'Direct access to advanced tracks',
        ],
      },
    ],
  },

  journeySection: {
    sectionLabel: 'Progression',
    headline: 'From Entry to Advanced Trade',
    description: 'Core Trade is not the end — it is the structured starting layer.',
    phases: [
      {
        title: 'Enter Through the Right Track',
        items: [
          'Dropshipping for low-risk entry.',
          'Consignment for retail exposure.',
          'Wholesale for scale.',
          'Import / Export for compliance-led trade.',
        ],
      },
      {
        title: 'Build Performance',
        description: 'Progress through KPI and retention milestones to unlock higher-level access.',
      },
      {
        title: 'Accelerate if Eligible',
        description: 'Use KHCRF evaluation to reduce waiting time where appropriate.',
      },
      {
        title: 'Move Beyond Core Trade',
        items: [
          'Brand Growth Partnerships',
          'Collaborative Partnerships',
          'Institutional Partnerships',
        ],
      },
    ],
  },

  pricingSection: {
    sectionLabel: 'Pricing',
    headline: 'Partnership Fee Summary',
    description:
      'Each trade model includes an onboarding structure and monthly package options aligned to operating complexity and growth stage.',
    note: 'Pricing structures apply to both buyers and vendors depending on role-specific engagement within each track.',
    tracks: [
      {
        trackId: 'dropshipping' as CoreTradeTrackId,
        trackName: 'Dropshipping',
        icon: 'Truck',
        onboarding:
          'Free only if enrolled within the next 6 months, with 6-month free access. After that, paid packages apply.',
        priceRange: '$12.50–$75',
        plans: [
          {
            name: 'Basic',
            price: '$12.50/month',
            features: [
              'Up to 25 listings',
              'Basic packaging templates',
              'Logistics waiver: 5%',
              'Standard vendor-buyer matching',
            ],
          },
          {
            name: 'Growth',
            price: '$37.50/month',
            features: [
              'Up to 100 listings',
              'Branded packaging kit',
              'Logistics waiver: 10%',
              'Priority buyer matching and analytics',
            ],
          },
          {
            name: 'Premium',
            price: '$75/month',
            features: [
              'Unlimited listings',
              'Custom packaging bundle',
              'Logistics waiver: 15%',
              'Catalog placement and support',
            ],
          },
        ],
      },
      {
        trackId: 'consignment' as CoreTradeTrackId,
        trackName: 'Consignment',
        icon: 'ShoppingBag',
        onboarding: '$200 one-time onboarding for contracts and setup.',
        priceRange: '$50–$250',
        plans: [
          {
            name: 'Standard',
            price: '$50/month',
            features: [
              'Boutique consignment networks',
              'Pay-after-sale setup',
              'Standard packaging templates',
              'Logistics waiver: 5%',
            ],
          },
          {
            name: 'Pro',
            price: '$125/month',
            features: [
              'Expanded retail placement',
              'Branded packaging kit',
              'Logistics waiver: 10%',
              'Settlement cycle: 20–30 days',
            ],
          },
          {
            name: 'Enterprise',
            price: '$250/month',
            features: [
              'Premium showcase placement',
              'Custom packaging solutions',
              'Logistics waiver: 15%',
              'Settlement cycle: 7–10 days',
            ],
          },
        ],
      },
      {
        trackId: 'wholesale' as CoreTradeTrackId,
        trackName: 'Wholesale',
        icon: 'Package',
        onboarding: '$500 one-time onboarding for compliance and contracts.',
        priceRange: '$125–$500',
        plans: [
          {
            name: 'Standard',
            price: '$125/month',
            features: [
              'Bulk order contracts',
              'Basic packaging templates',
              'Logistics waiver: 5%',
              'KPI monitoring dashboard',
            ],
          },
          {
            name: 'Growth',
            price: '$250/month',
            features: [
              'Distributor access',
              'Branded packaging kit',
              'Logistics waiver: 10%',
              'Priority buyer allocation',
            ],
          },
          {
            name: 'Premium',
            price: '$500/month',
            features: [
              'Wholesale partnerships',
              'Custom packaging bundles',
              'Logistics waiver: 15%',
              'Dedicated account manager',
            ],
          },
        ],
      },
      {
        trackId: 'import-export' as CoreTradeTrackId,
        trackName: 'Import / Export',
        icon: 'Globe',
        onboarding: '$1,000 one-time onboarding for GI or fair-trade verification and compliance.',
        priceRange: '$150–$750',
        plans: [
          {
            name: 'Compliance',
            price: '$150/month',
            features: [
              'GI certificate validation',
              'Compliance packaging',
              'Logistics waiver: 5%',
              'Basic trade advisory',
            ],
          },
          {
            name: 'Expansion',
            price: '$375/month',
            features: [
              'Buyer directory access',
              'Export packaging kit',
              'Logistics waiver: 10%',
              'Export market matching',
            ],
          },
          {
            name: 'Institutional',
            price: '$750/month',
            features: [
              'Institutional buyer linkage',
              'Co-branded packaging',
              'Logistics waiver: 15%',
              'Policy-level engagement',
            ],
          },
        ],
      },
    ],
  },

  roleBenefitsSection: {
    sectionLabel: 'Platform Advantage',
    headline: 'Different Value for Each Side — Same System',
    description:
      'Core Trade gives buyers and vendors different advantages at each model level while keeping the partnership system aligned.',
    audiences: [
      {
        id: 'buyers',
        title: 'Buyer Benefits',
        items: [
          'Low-risk sourcing entry through dropshipping.',
          'Reduced upfront investment via consignment.',
          'Scalable procurement via wholesale.',
          'Compliance-ready sourcing via import/export.',
        ],
      },
      {
        id: 'vendors',
        title: 'Vendor Benefits',
        items: [
          'Global exposure without infrastructure burden.',
          'Retail placement and faster sales cycles.',
          'Bulk demand and scaling opportunities.',
          'Export readiness and compliance credibility.',
        ],
      },
    ],
  },

  entryPathSection: {
    sectionLabel: 'Entry Paths',
    headline: 'Choose How You Enter',
    description:
      'Partners can either grow steadily through the standard route or accelerate through evaluated fast-track access.',
    options: [
      {
        id: 'standard',
        title: 'Standard Path',
        subtitle: 'Steady progression model',
        features: [
          'No upfront lateral fee.',
          'Progress through KPI and retention.',
          'Clear structured growth path.',
        ],
        note: 'Best for partners who want transparent, step-by-step progression into stronger trade models.',
        cta: {
          label: 'Start Standard Path',
          href: '/registration',
        },
      },
      {
        id: 'lateral-entry',
        title: 'Lateral Entry',
        subtitle: 'Accelerated route',
        features: ['KHCRF evaluation.', 'Faster progression.', 'Access to advanced tracks.'],
        note: 'Best for partners who are already prepared for higher-level trade and want to reduce waiting periods.',
        cta: {
          label: 'Apply for Fast-Track',
          href: 'https://khcrf.org/',
        },
      },
    ],
  },

  faqSection: {
    sectionLabel: 'FAQ',
    headline: 'Common Questions',
    items: [
      {
        question: 'What is Lateral Entry?',
        answer: 'A fast-track pathway that reduces waiting periods after KHCRF evaluation.',
      },
      {
        question: 'Do I pay before evaluation?',
        answer: 'No. Payment only applies after successful evaluation.',
      },
      {
        question: 'Can I progress without fast-track?',
        answer: 'Yes. Standard progression remains fully available.',
      },
      {
        question: 'Why use fast-track?',
        answer: 'To reach advanced partnership levels faster if already prepared.',
      },
      {
        question: 'Does KHCRF replace system evaluation?',
        answer: 'No. It adds an optional acceleration layer.',
      },
    ],
  },
} as const;
