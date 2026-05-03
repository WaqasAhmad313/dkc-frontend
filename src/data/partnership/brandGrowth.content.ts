export type BrandGrowthTrackId = 'exhibition' | 'auction' | 'white-label' | 'brick-mortar';

export type Role = 'buyer' | 'vendor';

export const brandGrowthData = {
  meta: {
    id: 'brand-expansion',
    slug: 'brand-expansion',
    tier: 2,
    pageLabel: 'Brand Expansion',
    pageTitle: 'Brand Expansion Partnerships',
    pageDescription:
      'Structured brand expansion pathways that help vendors and buyers move beyond trade into visibility, exclusivity, premium positioning, and retail presence.',
  },

  heroSection: {
    sectionLabel: 'Brand Expansion',
    headline: 'Brand Expansion — Move Beyond Trade Into Market Presence',
    roles: {
      buyer: {
        description:
          'Access partnership models designed to improve visibility, secure stronger exclusivity, and build a more premium retail or brand position beyond standard trade.',
        cta: {
          label: 'Start Buyer Application',
          href: '/registration',
        },
      },
      vendor: {
        description:
          'Enter structured growth pathways designed to increase visibility, improve valuation, secure premium placements, and build long-term brand authority in global markets.',
        cta: {
          label: 'Start Vendor Application',
          href: '/registration',
        },
      },
    },
  },

  tradeModelsSection: {
    sectionLabel: 'Growth Models',
    headline: 'Four Brand Expansion Models. One Premium Expansion System.',
    description:
      'Brand Expansion builds on successful trade participation and opens pathways for visibility, exclusivity, premium valuation, and long-term retail expansion.',
    cards: [
      {
        id: 'exhibition',
        icon: 'Presentation',
        title: 'Exhibition',
        roles: {
          buyer:
            'Access curated showcases, stronger product storytelling, and more selective premium discovery environments.',
          vendor:
            'Present products in verified showcases that improve visibility, buyer access, and premium positioning.',
        },
        href: '/partnership-paths/brand-expansion/exhibition',
      },
      {
        id: 'auction',
        icon: 'Gavel',
        title: 'Auction',
        roles: {
          buyer:
            'Compete for rare, premium, or differentiated craft pieces through structured bidding and transparent valuation.',
          vendor:
            'Place premium work into competitive demand environments where valuation, rarity, and trust matter more.',
        },
        href: '/partnership-paths/brand-expansion/auction',
      },
      {
        id: 'white-label',
        icon: 'Tag',
        title: 'White Label',
        roles: {
          buyer:
            'Build stronger brand differentiation through private-label production using verified craft supply.',
          vendor:
            'Enter stable private-brand production relationships that support longer-term growth and repeat commercial demand.',
        },
        href: '/partnership-paths/brand-expansion/white-label',
      },
      {
        id: 'brick-mortar',
        icon: 'Building',
        title: 'Brick & Mortar',
        roles: {
          buyer:
            'Strengthen physical retail presence with premium product access and stronger in-store brand positioning.',
          vendor:
            'Place products into physical retail channels that improve visibility, credibility, and long-term sales continuity.',
        },
        href: '/partnership-paths/brand-expansion/brick-mortar',
      },
    ],
  },

  marketProblemSection: {
    sectionLabel: 'Why Brand Expansion',
    headline: 'The Gap Between Trade and Recognition',
    roles: {
      buyer: {
        description:
          'Trade makes sourcing possible, but stronger visibility, exclusivity, and premium retail differentiation require a more advanced structure.',
      },
      vendor: {
        description:
          'Trade creates market entry, but stronger visibility, premium valuation, and lasting brand recognition require a more advanced growth framework.',
      },
    },
    problems: [
      'Trade may happen, but brand visibility remains limited.',
      'Vendors struggle to access global showcases and high-value buyers.',
      'Buyers cannot easily secure exclusivity or premium retail placement.',
      'There is no structured growth ladder beyond initial transactions.',
    ],
    solutions: [
      'Verified exhibitions and catalogs for international exposure.',
      'Structured auction systems to build credibility and premium valuation.',
      'White Label pathways for private-brand scaling.',
      'Brick & Mortar access for premium retail expansion.',
    ],
  },

  eligibilitySection: {
    sectionLabel: 'Eligibility',
    headline: 'Entry Requires More Than Trade Readiness',
    description:
      'Brand Expansion is designed for partners who have already established basic trade readiness and are prepared to move into stronger visibility, exclusivity, and premium market positions.',
    roles: {
      buyer:
        'Buyers enter based on sourcing readiness, budget flexibility, exclusivity intent, and ability to operate in premium market environments.',
      vendor:
        'Vendors enter based on product quality, authenticity, capacity, and ability to perform in higher-visibility or brand-sensitive channels.',
    },
    standardPath: {
      title: 'Standard Eligibility',
      vendors:
        'KPI 7-8+ with retention requirements depending on track, plus prerequisite progression from Core Trade.',
      buyers:
        'KPI 7-8+ with retention requirements depending on track, plus budget and sourcing readiness based on the selected growth model.',
      note: 'Partners move step by step through KPI performance, retention, and previous-level eligibility.',
      description:
        'This is a structured progression path from Core Trade into Brand Expansion for steady, verified expansion.',
      cta: {
        label: 'Apply for Standard Path',
        href: '/registration',
      },
    },
    fastTrackPath: {
      title: 'Lateral Entry (Fast-Track Path)',
      description:
        'Independent evaluation by Hamadan Craft Revival Foundation is designed for partners with proven records, certifications, external recognition, or demonstrated capacity to scale quickly.',
      points: [
        'If evaluation is promising, the partner may opt into Lateral Entry by paying a Lateral Fee.',
        'Retention can be reduced or bypassed for direct access to more advanced Brand Expansion tracks.',
        'KPI thresholds still apply.',
        'Performance is monitored closely during the early entry period.',
      ],
      note: 'Fast-track is intended for proven performers, certified vendors, and buyers with external validation or strong investment capacity.',
      vendors:
        'Vendors are assessed for compliance, authenticity, quality, and demonstrated ability to serve premium markets.',
      buyers:
        'Buyers are assessed for scale potential, investment readiness, and suitability for advanced market positioning.',
      cta: {
        label: 'Apply for KHCRF Fast-Track',
        href: 'https://khcrf.org/',
      },
    },
  },

  tracksSection: {
    sectionLabel: 'Growth Tracks',
    headline: 'Structured Progression Into Brand Authority',
    description:
      'Each track helps partners move from visibility into stronger market authority, premium positioning, and long-term commercial presence.',
    tracks: [
      {
        id: 'exhibition' as BrandGrowthTrackId,
        name: 'Exhibition',
        icon: 'Frame',
        href: '/partnership-paths/brand-expansion/exhibition',
        previousLevel: 'Import / Export',
        kpiRequired: '7+',
        retentionRequired: '4 months',
        bestFor: 'Partners seeking showcases, catalogs, and curated exposure.',
        coreBenefit: 'Verified exhibitions and catalog visibility.',
        ctaLabel: 'Apply for Exhibition',
        fastTrackAvailable: false,
      },
      {
        id: 'auction' as BrandGrowthTrackId,
        name: 'Auction',
        icon: 'Gavel',
        href: '/partnership-paths/brand-expansion/auction',
        previousLevel: 'Exhibition',
        kpiRequired: '7.5+',
        retentionRequired: '4 months',
        bestFor: 'Rare craft buyers and vendors seeking premium valuation.',
        coreBenefit: 'Structured, verified auction access.',
        ctaLabel: 'Apply for Auction',
        fastTrackAvailable: true,
      },
      {
        id: 'white-label' as BrandGrowthTrackId,
        name: 'White Label',
        icon: 'Tag',
        href: '/partnership-paths/brand-expansion/white-label',
        previousLevel: 'Auction',
        kpiRequired: '8+',
        retentionRequired: '4 months',
        bestFor: 'Partners focused on private branding and differentiated retail identity.',
        coreBenefit: 'Scalable private branding partnerships.',
        ctaLabel: 'Apply for White Label',
        fastTrackAvailable: true,
      },
      {
        id: 'brick-mortar' as BrandGrowthTrackId,
        name: 'Brick & Mortar',
        icon: 'Building',
        href: '/partnership-paths/brand-expansion/brick-mortar',
        previousLevel: 'White Label',
        kpiRequired: '8+',
        retentionRequired: '4 months',
        bestFor: 'Partners pursuing physical retail expansion and stronger market trust.',
        coreBenefit: 'Premium retail presence and flagship opportunities.',
        ctaLabel: 'Apply for Brick & Mortar',
        fastTrackAvailable: true,
      },
    ],
  },

  processSection: {
    sectionLabel: 'Process',
    headline: 'Two Ways to Enter Brand Expansion',
    description:
      'Partners can grow through the standard pathway or apply for KHCRF-reviewed fast-track access where appropriate.',
    flows: [
      {
        id: 'standard',
        title: 'Standard Path',
        steps: [
          'Apply',
          'KPI Evaluation',
          'Track Match',
          'Activation',
          'Progress via KPI and Retention',
        ],
      },
      {
        id: 'fast-track',
        title: 'Fast-Track Path',
        steps: [
          'Apply',
          'KHCRF Evaluation',
          'If promising, opt into Lateral Entry',
          'Direct access to more advanced Brand Expansion tracks',
        ],
      },
    ],
  },

  journeySection: {
    sectionLabel: 'Progression',
    headline: 'From Visibility to Market Authority',
    description:
      'Brand Expansion extends the partnership ladder beyond trade and into premium visibility, exclusivity, and stronger market authority.',
    phases: [
      {
        title: 'Choose Your Entry Track',
        items: [
          'Exhibition for curated visibility and showcase access.',
          'Auction for premium valuation and collector-focused trade.',
          'White Label for private branding and product exclusivity.',
          'Brick & Mortar for physical retail presence and long-term market trust.',
        ],
        note: 'Brand Expansion begins after relevant readiness from Core Trade.',
      },
      {
        title: 'Build Through KPI and Retention',
        description:
          'Partners strengthen performance, brand value, and market fit through progression requirements tied to each track.',
      },
      {
        title: 'Use Fast-Track if Eligible',
        description:
          'KHCRF evaluation can accelerate access to higher-value tracks for proven performers.',
      },
      {
        title: 'Move Into Higher Partnership Pillars',
        items: ['Collaborative Partnerships', 'Institutional Partnerships'],
      },
    ],
  },

  pricingSection: {
    sectionLabel: 'Pricing',
    headline: 'Brand Expansion Fee Summary',
    description:
      'Each Brand Expansion model includes onboarding logic and package options aligned with visibility level, business complexity, and expansion needs.',
    note: 'Pricing structures apply to both buyers and vendors depending on role-specific engagement within each track.',
    tracks: [
      {
        trackId: 'exhibition' as BrandGrowthTrackId,
        trackName: 'Exhibition',
        icon: 'Frame',
        onboarding: 'Free for partners progressing from Core Trade.',
        priceRange: '$25–$150',
        plans: [
          {
            name: 'Basic',
            price: '$25/month',
            features: [
              'Access to standard exhibitions',
              'Basic catalog placement',
              'Logistics waiver: 5% discount',
              'Standard vendor-buyer matching',
              'Email support during business hours',
            ],
          },
          {
            name: 'Growth',
            price: '$75/month',
            features: [
              'Expanded exhibition access',
              'Branded catalog features',
              'Logistics waiver: 10% discount',
              'Priority buyer matching and analytics',
              'Performance insights dashboard',
            ],
          },
          {
            name: 'Premium',
            price: '$150/month',
            features: [
              'Premium exhibition showcases',
              'Customized catalog placement',
              'Logistics waiver: 15% discount',
              'Higher support priority',
              'Early Auction eligibility',
            ],
          },
        ],
      },
      {
        trackId: 'auction' as BrandGrowthTrackId,
        trackName: 'Auction',
        icon: 'Gavel',
        onboarding: '$250 one-time setup.',
        priceRange: '$75–$300',
        plans: [
          {
            name: 'Standard',
            price: '$75/month',
            features: [
              'Access to verified auctions',
              'Basic listing templates',
              'Logistics waiver: 5%',
              'Standard auction monitoring',
              'Email support during business hours',
            ],
          },
          {
            name: 'Pro',
            price: '$150/month',
            features: [
              'Expanded auction placement',
              'Branded listing kit',
              'Logistics waiver: 10%',
              'Priority bidder allocation',
              'Analytics dashboard',
            ],
          },
          {
            name: 'Elite',
            price: '$300/month',
            features: [
              'Premium auction features',
              'Custom listing bundles',
              'Logistics waiver: 15%',
              'Dedicated account manager',
              'Early White Label eligibility',
            ],
          },
        ],
      },
      {
        trackId: 'white-label' as BrandGrowthTrackId,
        trackName: 'White Label',
        icon: 'Tag',
        onboarding: '$500 one-time setup.',
        priceRange: '$125–$500',
        plans: [
          {
            name: 'Standard',
            price: '$125/month',
            features: [
              'Private label contract access',
              'Basic branding templates',
              'Logistics waiver: 5%',
              'KPI monitoring dashboard',
              'Email support during business hours',
            ],
          },
          {
            name: 'Growth',
            price: '$250/month',
            features: [
              'Scalable private branding support',
              'Branded kit access',
              'Logistics waiver: 10%',
              'Priority partner allocation',
              'Performance dashboard',
            ],
          },
          {
            name: 'Premium',
            price: '$500/month',
            features: [
              'Strategic white label partnerships',
              'Custom branding bundles',
              'Logistics waiver: 15%',
              'Dedicated manager',
              'Early Brick & Mortar eligibility',
            ],
          },
        ],
      },
      {
        trackId: 'brick-mortar' as BrandGrowthTrackId,
        trackName: 'Brick & Mortar',
        icon: 'Building',
        onboarding: '$750 one-time setup.',
        priceRange: '$150–$750',
        plans: [
          {
            name: 'Retail',
            price: '$150/month',
            features: [
              'Access to premium retail channels',
              'Basic store templates',
              'Logistics waiver: 5%',
              'Basic trade advisory',
              'Email support during business hours',
            ],
          },
          {
            name: 'Flagship',
            price: '$375/month',
            features: [
              'Flagship store access',
              'Branded retail kit',
              'Logistics waiver: 10%',
              'Priority market matching',
              'Analytics dashboard',
            ],
          },
          {
            name: 'Global',
            price: '$750/month',
            features: [
              'Global retail linkage',
              'Premium co-branded solutions',
              'Logistics waiver: 15%',
              'Legal and documentation concierge',
              'Policy-level engagement',
            ],
          },
        ],
      },
    ],
  },

  roleBenefitsSection: {
    sectionLabel: 'Platform Advantage',
    headline: 'Different Value for Each Side — Same Growth System',
    description:
      'Brand Expansion helps buyers secure stronger exclusivity and premium access while helping vendors build visibility, valuation, and long-term retail opportunities.',
    audiences: [
      {
        id: 'buyers',
        title: 'Buyer Benefits',
        items: [
          'Exhibition: access to curated showcases and stronger cultural storytelling.',
          'Auction: competitive access to rare collections and premium craft pieces.',
          'White Label: custom branding, exclusivity, and stronger retail differentiation.',
          'Brick & Mortar: physical retail access with more dependable inventory continuity.',
        ],
      },
      {
        id: 'vendors',
        title: 'Vendor Benefits',
        items: [
          'Exhibition: stronger showcase opportunities, artisan exposure, and direct B2B leads.',
          'Auction: premium valuation and transparent demand discovery.',
          'White Label: private-brand partnerships and longer-term retail contracts.',
          'Brick & Mortar: store presence, stronger trust, and steadier sales cycles.',
        ],
      },
    ],
  },

  entryPathSection: {
    sectionLabel: 'Entry Paths',
    headline: 'Choose How You Enter',
    description:
      'Brand Expansion supports both steady progression and accelerated access for partners who can prove readiness.',
    options: [
      {
        id: 'standard',
        title: 'Standard Path',
        subtitle: 'Default progression for all partners',
        features: [
          'No upfront lateral fee.',
          'Requires KPI thresholds and retention milestones.',
          'Structured progression from Exhibition to Auction to White Label to Brick & Mortar.',
          'Best for partners seeking steady, sustainable Brand Expansion.',
          'Designed to build credibility over time.',
        ],
        note: 'This path takes longer but develops stronger step-by-step progression.',
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
          'Independent KHCRF evaluation.',
          'Lateral fee applies only after a promising evaluation result.',
          'Can reduce waiting time before entering Auction, White Label, or Brick & Mortar.',
          'KHCRF review adds credibility to advanced entry.',
          'Best for partners ready to scale faster.',
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
        question: 'Can I skip Exhibition and join Auction directly?',
        answer:
          'Yes, through KHCRF-reviewed fast-track entry if the evaluation outcome is strong enough.',
      },
      {
        question: 'Are KPIs different for vendors and buyers?',
        answer:
          'Yes. Vendors are assessed on compliance, authenticity, quality, and capacity, while buyers are assessed on sourcing model, budget, and partnership readiness.',
      },
      {
        question: 'Do fees apply immediately?',
        answer: 'No. Onboarding and monthly package fees apply only after track activation.',
      },
      {
        question: 'Can White Label partners progress into Brick & Mortar?',
        answer:
          'Yes, through standard KPI and retention requirements or through fast-track where applicable.',
      },
    ],
  },
} as const;
