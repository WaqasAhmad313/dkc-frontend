export type PrivateLabelAssessmentCategory = 'general' | 'validation' | 'vendor' | 'buyer';
export type PrivateLabelQuestionType = 'single' | 'multiple' | 'yesno';

export const privateLabelPage = {

  // ─────────────────────────────────────────────────────────────────────────────
  // §01 — HERO
  // ─────────────────────────────────────────────────────────────────────────────
  hero: {
    sectionLabel: ['Brand Expansion', 'Sub-Partnership', 'Private Label / White Label'],
    headline: 'Private Label Partnership',
    subHeadline: 'Launch Kashmiri Craft Under Your Brand',
    description:
      'A structured entry pathway for brands, retailers, gifting companies, lifestyle buyers, and qualified vendors to build brand-ready Kashmiri craft collections — with reviewed sourcing, packaging guidance, and production support built in from the start.',

    roles: {
      buyer: {
        headline: 'Build a Branded Craft Collection',
        description:
          'Launch authentic Kashmiri craft under your brand with reviewed products, packaging guidance, and supply support — while keeping full control of your brand identity and market position.',
        primaryCta: {
          label: 'Start Buyer Application',
          url: '/apply/private-label',
          variant: 'depth',
          icon: 'ArrowRight',
        },
        secondaryCta: {
          label: 'Check Brand Fit',
          url: '/brand-fit',
          variant: 'secondary',
          icon: 'CheckCircle',
        },
      },
      vendor: {
        headline: 'Enter Structured Private-Label Supply',
        description:
          'Move beyond one-off product sales into structured private-label supply pathways where product quality, packaging readiness, MOQ clarity, and communication discipline unlock stronger and more predictable trade opportunities.',
        primaryCta: {
          label: 'Start Vendor Application',
          url: '/apply/private-label',
          variant: 'depth',
          icon: 'ArrowRight',
        },
        secondaryCta: {
          label: 'Check Supplier Fit',
          url: '/brand-fit',
          variant: 'secondary',
          icon: 'CheckCircle',
        },
      },
    },

    ctas: [
      {
        label: 'Start Private Label Application',
        url: '/apply/private-label',
        variant: 'depth',
        icon: 'ArrowRight',
      },
      {
        label: 'Check My Brand Fit',
        url: '/brand-fit',
        variant: 'secondary',
        icon: 'CheckCircle',
      },
    ],

    highlights: [
      { label: 'Private Label', icon: 'tag' },
      { label: 'White Label', icon: 'layers' },
      { label: 'Custom Packaging', icon: 'package' },
      { label: 'MOQ Review', icon: 'scale' },
      { label: 'Brand Approval', icon: 'shieldCheck' },
      { label: 'KPI-Based Growth', icon: 'barChart' },
    ],

    sideCard: {
      title: 'Partnership At A Glance',
      points: [
        {
          label: 'Brand alignment & product review',
          icon: 'SealCheck',
        },
        {
          label: 'Custom branding & packaging support',
          icon: 'Package',
        },
        {
          label: 'MOQ & production guidance',
          icon: 'ClipboardText',
        },
        {
          label: 'Authenticity & compliance assurance',
          icon: 'ShieldCheck',
        },
        {
          label: 'Pathway to global market expansion',
          icon: 'GlobeHemisphereWest',
        },
      ],
      note: 'Build the brand while protecting craft quality, origin, and trust.',
      icon: 'ShieldCheck',
    },

    media: {
      image: '/images/private-label/hero_1.png',
      alt: 'Kashmiri craft products with private label branding placeholders',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §02 — WHY CHOOSE
  // ─────────────────────────────────────────────────────────────────────────────
  whyChoose: {
    headline: 'Why This Partnership Is Different',
    items: [
      {
        title: 'Kashmir-Specific Review',
        description:
          'Only products with verified craft integrity and sourcing suitability are approved for private label — protecting both brand trust and artisan standards.',
        icon: 'shield',
      },
      {
        title: 'Brand-Craft Alignment',
        description:
          'Your brand vision is matched to authentic Kashmiri heritage through a structured review process — not an open listing or self-service upload.',
        icon: 'handshake',
      },
      {
        title: 'Retail-Ready Standards',
        description:
          'Labeling, packaging, compliance language, and presentation expectations are addressed at entry — so products are shelf-ready before scale begins.',
        icon: 'fileCheck',
      },
      {
        title: 'Scalable Growth Path',
        description:
          'Private label entry is the first step. Strong KPI performance unlocks retail placement, corporate gifting, import/export trade, and distribution expansion.',
        icon: 'trendingUp',
      },
      {
        title: 'Quality & Authenticity Assurance',
        description:
          'Every product and vendor is reviewed for quality consistency, material authenticity, ethical sourcing, and GI-aware category alignment.',
        icon: 'star',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §03 — MODEL DIFFERENCE
  // ─────────────────────────────────────────────────────────────────────────────
  modelDifference: {
    sectionLabel: 'What Makes This Different',
    headline: 'Why Structured Private Label Matters',
    exclusivityNote:
      'Built for authentic Kashmiri craft — reviewed sourcing, brand-ready packaging, compliance clarity, and responsible product presentation at every stage.',
    sharedFeatures: [
      {
        icon: 'Globe',
        title: 'Verified Private-Label Network',
        description:
          'A structured platform connecting brand owners, retailers, and verified Kashmiri craft suppliers through reviewed private-label pathways — not an open directory.',
      },
      {
        icon: 'Tag',
        title: 'Branding and Packaging Support',
        description:
          'Guidance for labels, tags, packaging direction, authenticity language, and retail presentation so products can move confidently under a clear brand identity.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Authenticity and Compliance Review',
        description:
          'Product suitability, sourcing integrity, labeling discipline, and brand-use expectations are reviewed before any deeper production commitment is made.',
      },
      {
        icon: 'Truck',
        title: 'Pathway Into Scaled Trade',
        description:
          'Private label entry grows into retail placement, corporate gifting, import/export trade, and distribution expansion when KPI performance and readiness support it.',
      },
    ],
    roles: {
      buyer: {
        headline: 'What Buyers and Brands Get',
        features: [
          {
            icon: 'ShoppingCart',
            title: 'Private-Label Launch Without Production Burden',
            description:
              'Launch authentic Kashmiri craft collections under your brand while the platform guides product selection, production suitability, packaging, and sourcing review.',
          },
          {
            icon: 'CheckCircle',
            title: 'Authenticity Under Your Brand',
            description:
              'Use verified craft origin and responsible authenticity language to strengthen brand trust — without presenting generic imported inventory as premium heritage product.',
          },
          {
            icon: 'TrendingUp',
            title: 'Market Expansion Pathway',
            description:
              'Move from starter private-label production into retail placement, corporate gifting, distribution, and higher trade opportunities as readiness and KPI performance improve.',
          },
          {
            icon: 'BarChart3',
            title: 'Better Cost Control Than Custom Manufacturing',
            description:
              'Start with reviewed products and guided customization instead of building full manufacturing, sourcing, packaging, and compliance operations from scratch.',
          },
        ],
      },
      vendor: {
        headline: 'What Vendors Get',
        features: [
          {
            icon: 'Store',
            title: 'Access to Brand-Led Demand',
            description:
              'Supply authentic Kashmiri craft into brand, retail, gifting, and lifestyle channels that need reliable private-label production support.',
          },
          {
            icon: 'Factory',
            title: 'Production Growth With Structure',
            description:
              'Move from one-off sales toward planned production, packaging expectations, quality review, and repeatable private-label supply opportunities.',
          },
          {
            icon: 'DollarSign',
            title: 'Clearer Revenue Opportunities',
            description:
              'Private-label readiness can support more predictable order flows when product quality, MOQ discipline, packaging standards, and communication consistency are maintained.',
          },
          {
            icon: 'Award',
            title: 'Credibility as a Craft Supplier',
            description:
              'Strong participation builds verified supplier credibility for future trade, retail, institutional, and distribution-level opportunities across the DKC ecosystem.',
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §04 — OVERVIEW
  // ─────────────────────────────────────────────────────────────────────────────
  overview: {
    sectionLabel: 'Why This Model',
    headline: 'Private Label Needs Structure',
    description:
      'Brand-led craft trade only works when sourcing, packaging, compliance, and production readiness are handled before scale — not discovered after problems arise.',
    roles: {
      buyer: {
        headline: 'For Buyers and Brands',
        description:
          'Reduce sourcing risk, protect brand trust, and launch craft collections with clearer product guidance, packaging direction, and MOQ support. This pathway is built for brands that want authentic Kashmiri craft without managing sourcing, compliance, and production independently.',
      },
      vendor: {
        headline: 'For Vendors and Suppliers',
        description:
          'Move from one-off product sales into structured supply opportunities with clearer standards, packaging expectations, and repeatable production pathways. This model rewards vendors who invest in quality consistency, communication discipline, and brand-readiness.',
      },
    },
    problems: [
      'Brands struggle to source authentic Kashmiri craft at consistent quality levels',
      'Vendors often lack access to stable private-label and retail supply opportunities',
      'Packaging, labeling, and compliance gaps make craft products harder to retail globally',
      'Unverified sourcing and counterfeit products weaken trust in premium craft categories',
      'MOQ uncertainty and production misalignment create costly delays before launch',
      'Brands have no clear path from starter production to retail or distribution scale',
    ],
    solutions: [
      'Every vendor is reviewed for craft integrity, material authenticity, and brand suitability before being approved for any private-label pathway — so buyers only work with sources that can deliver consistently at the quality their brand requires.',
      'The entry path creates structured access to brand-led demand for vendors ready to commit to quality, packaging standards, and communication discipline — opening repeatable supply opportunities that one-off sales cannot provide.',
      'Compliance support covering authenticity language, labeling standards, and retail presentation requirements is built into the pathway. Products are prepared for specialty retail, e-commerce, and gifting markets before they reach the shelf.',
      'Product review, sourcing integrity checks, GI-aware category alignment, and authenticity documentation are part of every private-label activation — protecting brand trust and buyer confidence from the first production run.',
      'MOQ and production readiness are reviewed against product category, customization requirements, packaging scope, and market plan — so expectations are aligned before any production commitment is made.',
      'The DKC model is built for progressive scale. Start with a focused starter production run, then grow into retail-ready packaging, corporate gifting, distribution channels, and import/export trade — all within one structured partnership pathway.',
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §05 — WHAT YOU GET
  // ─────────────────────────────────────────────────────────────────────────────
  whatYouGet: {
    headline: 'What This Pathway Includes',
    description:
      'A practical view of the support, review, guidance, and platform capability included across the private-label partnership entry.',
    roles: {
      buyer: {
        headline: 'What Buyers Get',
        description:
          'Brand launch support, product guidance, packaging direction, compliance clarity, and a clear market-readiness pathway — all structured for serious brand-led trade.',
      },
      vendor: {
        headline: 'What Vendors Get',
        description:
          'Supplier positioning support, product review, production guidance, packaging standards clarity, and access to structured brand-led demand channels.',
      },
    },
    items: [
      'Private label eligibility review',
      'White label pathway support',
      'Product & material guidance',
      'MOQ & production guidance',
      'Custom packaging support',
      'Labeling & tag guidance',
      'MSRP & margin guidance',
      'Sample & production review',
      'Authenticity language guidance',
      'Future trade & distribution pathway',
    ],

    capabilities: {
      sectionLabel: 'Platform Capabilities',
      headline: 'Infrastructure for Brand-Led Trade',
      subheadline:
        'Product review, packaging guidance, compliance clarity, and scalable trade readiness — all operating within a single structured private-label pathway.',
      categories: [
        {
          title: 'Trade Infrastructure',
          icon: 'Server',
          items: [
            'Verified vendor and buyer review before activation',
            'Structured product suitability and category alignment',
            'Guided pathway from starter production to distribution expansion',
          ],
        },
        {
          title: 'Brand & Packaging Enablement',
          icon: 'Tag',
          items: [
            'Custom label, tag, and packaging guidance',
            'Retail-ready presentation and brand fit review',
            'Authenticity language guidance for responsible product storytelling',
          ],
        },
        {
          title: 'Fulfilment & Compliance',
          icon: 'Truck',
          items: [
            'MOQ and production readiness review',
            'Sample and production review before deeper scale',
            'Labeling, packaging, and compliance expectations clarified at entry',
          ],
        },
        {
          title: 'Growth Intelligence',
          icon: 'BarChart3',
          items: [
            'Brand profile and market readiness checks',
            'KPI and retention tracking for higher partnership levels',
            'Pathway support into retail placement, corporate gifting, and import/export trade',
          ],
        },
      ],
      roleBenefits: {
        buyer: {
          title: 'Buyer / Brand Advantages',
          items: [
            'Launch branded craft collections without building production from scratch',
            'Customize products, packaging, and presentation with platform guidance',
            'Differentiate through authentic Kashmiri craft and verified sourcing language',
          ],
        },
        vendor: {
          title: 'Vendor Advantages',
          items: [
            'Access structured brand, retail, gifting, and lifestyle demand',
            'Move toward repeatable production and stronger revenue opportunities',
            'Build credibility as a reliable craft supplier for higher trade pathways',
          ],
        },
      },
      impact: [
        {
          title: 'Brand-Led Market Access',
          description:
            'Helping authentic Kashmiri craft enter premium retail and lifestyle channels.',
        },
        {
          title: 'Responsible Craft Positioning',
          description: 'Protecting craft origin while enabling modern brand presentation.',
        },
        {
          title: 'Scalable Supplier Growth',
          description:
            'Creating a path from small starter production into larger trade opportunities.',
        },
      ],
    },
    media: {
      image: '/images/private-label/packaging_1.png',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §06 — ELIGIBILITY
  // ─────────────────────────────────────────────────────────────────────────────
  eligibility: {
    headline: 'Who Can Apply?',
    description:
      'Designed for buyers, brands, and vendors with a clear fit for brand-led Kashmiri craft trade. Entry is reviewed — not open to all.',
    roles: {
      buyer: {
        headline: 'Buyer Fit',
        description:
          'Best for brands, retailers, gifting buyers, lifestyle companies, and institutional retail programs with a clear product category and brand direction.',
      },
      vendor: {
        headline: 'Vendor Fit',
        description:
          'Best for verified suppliers with authentic products, production consistency, packaging readiness, and the communication discipline that brand buyers require.',
      },
    },
    categories: [
      {
        label: 'Brands & Retailers',
        value: 'brands_retailers',
        items: [
          {
            label: 'Ecommerce Brands',
            icon: 'ShoppingCart',
            description:
              'Direct-to-consumer brands building Kashmiri craft lines for digital channels and their own storefronts.',
            fit: [
              'Custom packaging for online fulfillment',
              'SKU-ready product catalog access',
              'Brand-aligned sourcing review',
            ],
          },
          {
            label: 'Boutique Retailers',
            icon: 'Storefront',
            description:
              'Curated retail stores seeking exclusive, story-rich Kashmiri craft to differentiate their product floor.',
            fit: [
              'Small-batch entry with flexible MOQ',
              'Retail-ready product presentation',
              'Exclusivity options by category',
            ],
          },
          {
            label: 'Heritage Brands',
            icon: 'Medal',
            description:
              'Established brands deepening their cultural product range with verified authentic Kashmiri craft.',
            fit: [
              'GI-aware product sourcing',
              'Authenticity documentation support',
              'Craft origin storytelling guidance',
            ],
          },
          {
            label: 'Concept Stores',
            icon: 'Storefront',
            description:
              'Discovery-first retail concepts built around heritage, provenance, and artisan craft experience.',
            fit: [
              'Curated category selection',
              'Display-ready custom packaging',
              'Exclusive product placement pathway',
            ],
          },
        ],
      },
      {
        label: 'Gift & Lifestyle',
        value: 'gift_lifestyle',
        items: [
          {
            label: 'Gift Companies',
            icon: 'Gift',
            description:
              'Corporate and consumer gift brands sourcing premium, culturally meaningful product sets at scale.',
            fit: [
              'Gift-ready packaging guidance',
              'Seasonal volume and lead time planning',
              'Multi-SKU curated gift sets',
            ],
          },
          {
            label: 'Lifestyle Brands',
            icon: 'Sparkle',
            description:
              'Brands building a lifestyle identity around conscious craft, premium materials, and cultural depth.',
            fit: [
              'Craft-aligned brand positioning',
              'Sustainable sourcing pathway',
              'Packaging co-development support',
            ],
          },
          {
            label: 'Corporate Programs',
            icon: 'Buildings',
            description:
              'Companies running internal gifting, recognition, and employee reward programs at volume.',
            fit: [
              'Branded bulk packaging options',
              'Consistent repeat supply planning',
              'Volume-based MOQ guidance',
            ],
          },
          {
            label: 'Corporate Gifting Buyers',
            icon: 'Briefcase',
            description:
              'Procurement leads sourcing distinctive, premium gifts for clients, partners, and stakeholder events.',
            fit: [
              'Curated product and category selection',
              'Custom presentation kits',
              'Delivery-ready fulfillment support',
            ],
          },
        ],
      },
      {
        label: 'Interior & Decor',
        value: 'interior_decor',
        items: [
          {
            label: 'Interior Brands',
            icon: 'HouseLine',
            description:
              'Brands designing interior product ranges with authentic handcrafted pieces for home and contract use.',
            fit: [
              'Category-specific product sourcing',
              'Custom finish and material guidance',
              'Retail-ready presentation support',
            ],
          },
          {
            label: 'Home Decor Retailers',
            icon: 'Armchair',
            description:
              'Retail stores and online shops carrying premium home décor and craft-led living collections.',
            fit: [
              'MOQ-flexible category entry',
              'Seasonal collection planning',
              'Retail display packaging support',
            ],
          },
          {
            label: 'Design Studios',
            icon: 'PenNib',
            description:
              'Architecture and interior design studios sourcing authentic craft for residential and commercial projects.',
            fit: [
              'Project-based MOQ flexibility',
              'Custom specification support',
              'Origin and craft provenance documentation',
            ],
          },
          {
            label: 'Luxury Decor Buyers',
            icon: 'Crown',
            description:
              'High-end buyers sourcing exclusive artisan-crafted décor for luxury residential and hospitality settings.',
            fit: [
              'Exclusive product and category access',
              'Premium packaging and presentation',
              'Full traceability and authenticity',
            ],
          },
        ],
      },
      {
        label: 'Institutional & Others',
        value: 'institutional_others',
        items: [
          {
            label: 'Museum Stores',
            icon: 'Bank',
            description:
              'Cultural institutions retailing authentic craft that reflects heritage, artistic tradition, and verified provenance.',
            fit: [
              'GI certification documentation support',
              'Craft origin and artisan story',
              'Display-ready retail product sets',
            ],
          },
          {
            label: 'Diaspora Entrepreneurs',
            icon: 'UsersThree',
            description:
              'Kashmiri and South Asian entrepreneurs building cultural craft businesses across international markets.',
            fit: [
              'Community-aligned product sourcing',
              'Brand-building pathway support',
              'Market-entry and launch guidance',
            ],
          },
          {
            label: 'Cultural Organizations',
            icon: 'GlobeHemisphereWest',
            description:
              'NGOs, cultural bodies, and foundations promoting authentic Kashmiri craft and artisan welfare globally.',
            fit: [
              'Mission-aligned product curation',
              'Authenticity and craft documentation',
              'Scalable supply access',
            ],
          },
          {
            label: 'Specialty Retail Programs',
            icon: 'PresentationChart',
            description:
              'Curated retail partnerships, pop-up channels, and specialty retail focused on artisan and heritage products.',
            fit: [
              'Flexible MOQ for pop-up programs',
              'Custom branded presentation kits',
              'Category-focused supply pathway',
            ],
          },
        ],
      },
    ],
    helper: {
      text: 'Not sure where you fit?',
      cta: {
        label: 'Take the Brand Fit Check',
        url: '/brand-fit',
        icon: 'ArrowRight',
        variant: 'secondary',
      },
    },
    cta: {
      label: 'Check My Brand Fit',
      url: '/brand-fit',
      icon: 'ArrowRight',
      variant: 'secondary',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §07 — BRAND PATH
  // ─────────────────────────────────────────────────────────────────────────────
  brandPath: {
    headline: 'Build Your Path',
    description:
      'Answer a few fit questions so the platform can guide you toward the right private-label route before you apply.',
    roles: {
      buyer: {
        headline: 'Choose the Right Brand Route',
        description:
          'Clarify your product category, branding needs, quantity readiness, and target market — so the platform can recommend the most suitable entry path.',
      },
      vendor: {
        headline: 'Identify Your Supply Fit',
        description:
          'Clarify your product readiness, customization capacity, MOQ discipline, and supply fit — so the platform can recommend the right supplier entry path.',
      },
    },
    steps: [
      {
        step: 1,
        title: 'Brand Type',
        description: 'What type of brand are you?',
      },
      {
        step: 2,
        title: 'Product Category',
        description: 'Which category interests you?',
      },
      {
        step: 3,
        title: 'Branding Need',
        description: 'White label, private label, or custom?',
      },
      {
        step: 4,
        title: 'Quantity Readiness',
        description: 'What quantity range can you commit to?',
      },
      {
        step: 5,
        title: 'Target Market',
        description: 'Where will you sell?',
      },
      {
        step: 6,
        title: 'Recommendation',
        description: 'We suggest the best private-label path for your profile.',
      },
    ],
    cta: {
      label: 'Build My Brand Path',
      url: '/brand-path',
      icon: 'arrowRight',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §08 — ELIGIBILITY ASSESSMENT
  // ─────────────────────────────────────────────────────────────────────────────
  eligibilityAssessment: {
    sectionLabel: 'Eligibility Assessment',
    headline: 'Check Your Readiness',
    description:
      'A short role-based assessment to gauge your fit, readiness level, and the recommended next step before you submit an application.',
    introCard: {
      icon: 'Target',
      title: 'Private Label Eligibility Assessment',
      description:
        'Thirteen questions. Personalised results. No email required. Understand your private-label readiness before committing to the application process.',
      primaryCta: {
        label: 'Start Assessment',
        action: 'start-assessment',
      },
      meta: '13 questions • Personalised results • No email required',
    },
    resultCard: {
      heading: 'Your Private Label Eligibility Results',
      scoreLabel: 'Your Score',
      recommendationLabel: 'Recommended Track',
      strengthsLabel: 'Your Strengths',
      developmentLabel: 'Areas for Development',
      nextStepsLabel: 'Your Next Steps',
      retakeCtaLabel: 'Retake Assessment',
      fastTrackBadgeLabel: 'Fast-Track Eligible',
    },
    assessment: {
      name: 'Private Label / White Label',
      maxScore: 25,
      questions: [
        {
          id: 'product_authenticity',
          question: 'How would you rate the authenticity of your products or sourcing?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'Mixed or synthetic',
            'Mostly authentic',
            'Verified sourcing',
            'Certified suppliers',
            'Blockchain-certified',
          ],
          category: 'general' as PrivateLabelAssessmentCategory,
          weight: 1,
        },
        {
          id: 'quality',
          question: 'How would you describe the quality of your products?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'Inconsistent',
            'Acceptable with some flaws',
            'High with minor flaws',
            'Meets retail standards',
            'Exceeds private-label grade standards',
          ],
          category: 'general' as PrivateLabelAssessmentCategory,
          weight: 1,
        },
        {
          id: 'sustainability',
          question: 'What is your focus on sustainable production or sourcing?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'No focus',
            'Some sustainable practices',
            'Significant sustainable portion',
            'Mostly eco-friendly production',
            'Full zero-waste commitment',
          ],
          category: 'general' as PrivateLabelAssessmentCategory,
          weight: 1,
        },
        {
          id: 'customer_experience',
          question: 'How would you rate your customer or buyer experience approach?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'No defined approach',
            'Needs significant improvement',
            'Generally satisfactory',
            'Well-managed and structured',
            'Exceptional and proactive',
          ],
          category: 'general' as PrivateLabelAssessmentCategory,
          weight: 1,
        },
        {
          id: 'fair_trade',
          question: 'How do you ensure fair trade practices in your operations?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'No clear policy',
            'Minimum wages only',
            'Fair wages with limited safety provisions',
            'Fair wages and safe working conditions',
            'Market-rate wages with fully safe workplaces',
          ],
          category: 'general' as PrivateLabelAssessmentCategory,
          weight: 1,
        },
        {
          id: 'brand_profile_ready',
          question: 'Do you have a defined brand profile, audience, and market positioning?',
          type: 'yesno' as PrivateLabelQuestionType,
          options: ['Yes', 'No'],
          category: 'validation' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'packaging_readiness',
          question: 'Do you have packaging, labeling, or presentation requirements prepared?',
          type: 'single' as PrivateLabelQuestionType,
          options: ['No', 'Partially prepared', 'Yes, clearly documented'],
          category: 'validation' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'moq_readiness',
          question: 'What quantity range are you ready to discuss for starter production?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'Unsure',
            'Small pilot quantity',
            'Moderate starter quantity',
            'Large recurring quantity',
          ],
          category: 'validation' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'vendor_customization',
          question:
            'Do you have the capacity to customise labelling, packaging, or product presentation for brand buyers?',
          type: 'yesno' as PrivateLabelQuestionType,
          options: ['Yes', 'No'],
          category: 'vendor' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'vendor_production_volume',
          question:
            'Can you consistently meet agreed production quantities across selected product categories?',
          type: 'yesno' as PrivateLabelQuestionType,
          options: ['Yes', 'No'],
          category: 'vendor' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'vendor_private_label_readiness',
          question:
            'Which of these supplier readiness indicators apply to you? Select all that apply.',
          type: 'multiple' as PrivateLabelQuestionType,
          options: [
            'Product catalog is ready for review',
            'Packaging or labeling support is available',
            'Quality consistency can be maintained across repeat orders',
            'Communication response can be maintained within 72 hours',
          ],
          category: 'vendor' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'buyer_type_private_label',
          question: 'What best describes your private-label buying operation?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'Ecommerce brand launching a craft line',
            'Boutique or retail concept store',
            'Gift, lifestyle, or corporate buyer',
            'Distributor or institutional retail program',
          ],
          category: 'buyer' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
        {
          id: 'buyer_branding_rights',
          question: 'What type of branding relationship are you looking for?',
          type: 'single' as PrivateLabelQuestionType,
          options: [
            'White label with minimal customization',
            'Private label with branded packaging',
            'Custom packaging and presentation',
            'Exclusive or semi-exclusive product line',
          ],
          category: 'buyer' as PrivateLabelAssessmentCategory,
          weight: 0,
        },
      ],
      thresholds: {
        10: {
          eligibility: 'Private Label Entry',
          fastTrackEligible: false,
          nextLevel: null,
        },
        16: {
          eligibility: 'Private Label + Fast Track Review',
          fastTrackEligible: true,
          nextLevel: 'Retail Placement',
        },
        21: {
          eligibility: 'Advanced Private Label / White Label Readiness',
          fastTrackEligible: true,
          nextLevel: 'Distribution Expansion',
        },
      },
      specialRules: {
        vendor: {
          certificationsRequired: false,
          commitment: null,
          kpiThreshold: null,
          retentionPeriod: '6–12 months performance review',
        },
        buyer: {
          commitment: null,
          kpiThreshold: null,
          retentionPeriod: '6–12 months performance review',
        },
      },
      resultContent: {
        messagesByOutcome: {
          'Private Label Entry':
            "You're ready to begin with private-label entry. Start with product review, brand fit, and starter production planning.",
          'Private Label + Fast Track Review':
            "Strong fundamentals. You're eligible for private-label entry with a faster review path toward retail or gifting opportunities.",
          'Advanced Private Label / White Label Readiness':
            'Excellent readiness. Your brand, product, or supply profile may support advanced private-label or distribution-level evaluation.',
        },
        nextStepsByOutcome: {
          'Private Label Entry': [
            'Submit the Private Label application.',
            'Prepare your brand profile or product catalog.',
            'Review product category, MOQ, packaging, and market fit.',
            'Begin starter production planning after approval.',
          ],
          'Private Label + Fast Track Review': [
            'Submit private-label documentation and product requirements.',
            'Prepare packaging, labeling, and market positioning details.',
            'Complete brand fit review with the platform team.',
            'Move toward retail placement or corporate gifting opportunities if approved.',
          ],
          'Advanced Private Label / White Label Readiness': [
            'Apply for advanced private-label evaluation.',
            'Submit performance, sourcing, packaging, or retail readiness documentation.',
            'Review exclusivity, distribution, or larger production opportunities.',
            'Prepare for import/export or distribution expansion pathways.',
          ],
        },
        strengthsByOutcome: {
          'Private Label Entry': [
            'Clear interest in brand-led craft trade',
            'Readiness to explore product and packaging fit',
          ],
          'Private Label + Fast Track Review': [
            'Strong brand or supplier fundamentals',
            'Clear product and packaging direction',
          ],
          'Advanced Private Label / White Label Readiness': [
            'Strong market readiness',
            'High private-label compatibility',
            'Clear pathway toward scalable trade',
          ],
        },
        improvementsByOutcome: {
          'Private Label Entry': [
            'Clarify brand positioning and target market.',
            'Improve product, MOQ, and packaging documentation.',
          ],
          'Private Label + Fast Track Review': [
            'Strengthen compliance, packaging, and retail presentation details.',
            'Prepare stronger production or sourcing records.',
          ],
          'Advanced Private Label / White Label Readiness': [],
        },
        defaultStrengths: [
          'Commitment to authentic craft positioning',
          'Interest in structured brand growth',
          'Clear readiness for platform-guided review',
        ],
        defaultDevelopmentAreas: [
          'Build stronger documentation around brand, product, MOQ, and packaging needs.',
          'Strengthen retail readiness and authenticity language before scaling.',
        ],
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §09 — PRICING
  // ─────────────────────────────────────────────────────────────────────────────
  pricing: {
    sectionLabel: 'Pricing',
    headline: 'Packages Built for Private-Label Scale',
    description:
      'Three yearly packages aligned to private-label complexity, SKU volume, packaging needs, and support level. Choose the package that matches where your brand or supply operation is today.',
    range: '$150–$750/year',
    note: 'No onboarding fee at entry. Final scope may vary by product category, customization depth, packaging material, production volume, and compliance requirements.',
    freeOffer: {
      title: 'No Onboarding Fee',
      description:
        'Begin with a yearly package. Early enrollment discounts may apply during launch periods.',
      badge: 'Early Enrollment Available',
    },
    roles: {
      buyer: {
        headline: 'Buyer Pricing',
        description:
          'Choose a package based on SKU volume, packaging complexity, brand support depth, and market activation needs.',
        ctaLabel: 'Start as Buyer',
      },
      vendor: {
        headline: 'Vendor Pricing',
        description:
          'Choose a package based on supply readiness, catalog scale, packaging support requirements, and production coordination needs.',
        ctaLabel: 'Start as Vendor',
      },
    },
    plans: [
      {
        name: 'Standard',
        label: 'Standard',
        price: '$150',
        billingPeriod: 'year',
        eyebrow: 'Starter Access',
        description: 'For early private-label validation and small SKU launches.',
        features: [
          'Up to 25 SKUs under white-label branding',
          'Basic branded packaging templates',
          '5% logistics waiver',
          'Standard vendor-buyer matching',
        ],
        cta: {
          label: 'Start as Buyer',
          vendorLabel: 'Start as Vendor',
          url: '/apply/private-label',
          icon: 'ArrowRight',
        },
        recommended: false,
      },
      {
        name: 'Growth',
        label: 'Most Popular',
        price: '$375',
        billingPeriod: 'year',
        eyebrow: 'Growth',
        description: 'For growing brands that need stronger packaging support and buyer promotion.',
        features: [
          'Up to 100 SKUs across product categories',
          'Custom-branded packaging kits',
          '10% logistics waiver',
          'Marketing catalog placement and buyer promotion',
        ],
        cta: {
          label: 'Start as Buyer',
          vendorLabel: 'Start as Vendor',
          url: '/apply/private-label',
          icon: 'ArrowRight',
        },
        recommended: true,
      },
      {
        name: 'Premium',
        label: 'Premium',
        price: '$750',
        billingPeriod: 'year',
        eyebrow: 'Scale',
        description: 'For larger private-label programs with deeper support and scale requirements.',
        features: [
          'Unlimited SKUs across all categories',
          'Premium branded packaging with AR integration',
          '15% logistics waiver',
          'Dedicated account manager and IP compliance support',
        ],
        cta: {
          label: 'Start as Buyer',
          vendorLabel: 'Start as Vendor',
          url: '/apply/private-label',
          icon: 'ArrowRight',
        },
        recommended: false,
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §10 — PROCESS / KPI / FAST-TRACK
  // ─────────────────────────────────────────────────────────────────────────────
  process: {
    headline: 'Entry Path',
    steps: [
      {
        title: 'Apply',
        description: 'Submit your application with brand or supply details',
        icon: 'PlusCircle',
        status: 'start',
      },
      {
        title: 'Brand Profile Review',
        description: 'We review your brand, business stage, and market positioning',
        icon: 'UserFocus',
        status: 'review',
      },
      {
        title: 'Product Category Review',
        description: 'We assess product suitability, craft integrity, and category alignment',
        icon: 'SquaresFour',
        status: 'review',
      },
      {
        title: 'MOQ & Packaging Review',
        description: 'We check quantity readiness, packaging needs, and compliance expectations',
        icon: 'Package',
        status: 'review',
      },
      {
        title: 'Private Label Fit Decision',
        description: 'We share our decision, recommended path, and next steps',
        icon: 'SealCheck',
        status: 'decision',
      },
      {
        title: 'Retention (6–12 Months)',
        description: 'Performance tracking, KPI monitoring, and partnership support',
        icon: 'ClockCountdown',
        status: 'progress',
      },
      {
        title: 'KPI Review & Upgrade',
        description: 'Strong performance unlocks higher partnership levels and trade opportunities',
        icon: 'ChartLineUp',
        status: 'growth',
      },
    ],
    nextUnlock: {
      label: 'Next Growth Opportunity',
      slug: 'retail-placement',
      name: 'Retail Placement / Corporate Gifting / Distribution Expansion',
      requirement:
        'Strong KPI performance, market readiness, production consistency, and packaging clarity',
    },
  },

  kpi: {
    headline: 'KPI & Retention',
    metrics: [
      { label: 'Brand Profile Completeness', target: '85%' },
      { label: 'Product Category Clarity', target: '85%' },
      { label: 'MOQ Readiness', target: '70%' },
      { label: 'Packaging Clarity', target: '75%' },
      { label: 'Market Readiness', target: '75%' },
      { label: 'Authenticity Discipline', target: 'Required' },
      { label: 'Communication Response', target: 'Within 72 Hours' },
    ],
    note: 'Strong KPI performance unlocks higher trade levels, retail placement, and expanded partnership opportunities.',
  },

  fastTrack: {
    headline: 'Fast-Track Evaluation',
    description:
      'For brands or vendors with stronger readiness, clearer documentation, and proven market fit — a faster path through review and into activation.',
    roles: {
      buyer: {
        headline: 'Buyer Fast-Track',
        description:
          'For brands with clear positioning, documented packaging needs, confirmed sourcing budgets, and defined retail or distribution goals.',
      },
      vendor: {
        headline: 'Vendor Fast-Track',
        description:
          'For suppliers with demonstrated production consistency, complete product documentation, packaging readiness, and active order history.',
      },
    },
    steps: [
      {
        title: 'Apply',
        description: 'Submit fast-track interest with brand, product, or supply details.',
        icon: 'PlusCircle',
      },
      {
        title: 'Evaluation',
        description: 'Readiness, product fit, MOQ, packaging, and market potential are reviewed.',
        icon: 'MagnifyingGlass',
      },
      {
        title: 'Score',
        description: 'A readiness score is assigned based on brand fit and operational clarity.',
        icon: 'Gauge',
      },
      {
        title: 'Level Assigned',
        description: 'The most suitable private-label path or advanced review level is recommended.',
        icon: 'SealCheck',
      },
      {
        title: 'KPI Monitoring',
        description:
          'Performance is tracked from activation to support unlock of stronger trade and distribution opportunities.',
        icon: 'ChartLineUp',
      },
    ],
    cta: {
      label: 'Apply for Fast-Track',
      url: '/apply/fast-track',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §11 — PLATFORM STRENGTH
  // ─────────────────────────────────────────────────────────────────────────────
  platformStrength: {
    sectionLabel: 'Platform Strength',
    headline: 'The Infrastructure Behind This Partnership',
    description:
      'Core systems for brand integration, approval workflows, compliance support, traceability, and scalable production — operating as one structured platform layer.',
    defaultTab: 'brand-integration',
    tabs: [
      {
        id: 'brand-integration',
        label: 'Brand Integration',
        headline: 'Already Operating Private or White Label? Accelerate With DKC.',
        description:
          'Launch private-label briefs, approve artwork, manage product specifications, review compliance, and scale branded Kashmiri craft through one structured platform layer.',
        features: [
          {
            icon: 'FileSignature',
            title: 'Onboarding and Brand Contracts',
            description:
              'Digital NDAs, supply agreements, territory rights, pricing agreements, and brand terms managed through the platform.',
          },
          {
            icon: 'Palette',
            title: 'Design Briefs and Artwork Approval',
            description:
              'Structured creative briefs, packaging direction, artwork approvals, and versioned brand assets for approved partners.',
          },
          {
            icon: 'Calculator',
            title: 'Specifications, BOM, and Costing',
            description:
              'Material specifications, product requirements, finishing expectations, landed-cost review, and margin guidance.',
          },
          {
            icon: 'Factory',
            title: 'Vendor Sourcing and Qualification',
            description:
              'Supplier qualification, capacity review, sample coordination, and pilot production validation before deeper activation.',
          },
          {
            icon: 'ShieldCheck',
            title: 'QA, QC, and Compliance',
            description:
              'Quality checks, certification review, sustainability documentation, and product category compliance support.',
          },
          {
            icon: 'Package',
            title: 'Packaging and Labelling Systems',
            description:
              'Barcode support, eco-certification marks, safety warnings, multilingual label panels, and retail-ready packaging guidance.',
          },
        ],
        support: {
          description:
            'Integration support can include product information setup, brand asset handling, artwork versioning, packaging guidance, and operational mapping for private-label buyers and vendors.',
          note: 'Best suited for brands, retailers, distributors, and vendors with active private-label or branded product plans.',
        },
      },
      {
        id: 'technology',
        label: 'Technology',
        headline: 'Platform Technology Built for Brand Control and Production Scale',
        description:
          'Technology supports customization, compliance, traceability, and scalable production management — without becoming a separate operational burden.',
        features: [
          {
            icon: 'Sliders',
            title: 'Dynamic Product Customisation',
            description:
              'Support for label configuration, design preferences, and packaging specification management.',
          },
          {
            icon: 'Folder',
            title: 'Brand Asset Management',
            description:
              'Centralised storage for brand logos, guidelines, packaging references, and approved creative assets.',
          },
          {
            icon: 'Users',
            title: 'Collaboration and Approval Workflows',
            description:
              'Structured communication, artwork approval, sample review, and production sign-off workflows.',
          },
          {
            icon: 'Shield',
            title: 'Compliance Support Systems',
            description:
              'Compliance checks for product category, labeling, packaging, sourcing, and market requirements.',
          },
          {
            icon: 'Activity',
            title: 'Demand Forecasting',
            description:
              'Forecast order volumes, seasonal demand, and replenishment patterns for branded craft products.',
          },
          {
            icon: 'Layers',
            title: 'Supply Chain Traceability',
            description:
              'Track materials, production, packaging, and delivery milestones for stronger trust and control.',
          },
        ],
        support:
          'Platform infrastructure supports continuous upgrades, technical coordination, and private-label production management.',
      },
      {
        id: 'trade-infrastructure',
        label: 'Trade Infrastructure',
        headline: 'Reviewed Supply Structure That Supports Repeatable Trade',
        description:
          'Vendor review, product alignment, and structured pathways from starter production to distribution expansion.',
        features: [
          {
            icon: 'Factory',
            title: 'Verified Vendor & Buyer Review',
            description:
              'Every supplier and buyer goes through a structured suitability review before activation on any private-label pathway.',
          },
          {
            icon: 'ShieldCheck',
            title: 'Product Suitability & Category Alignment',
            description:
              'Product categories are assessed for craft integrity, material authenticity, and brand suitability before commitment.',
          },
          {
            icon: 'Truck',
            title: 'Pathway Into Scaled Trade',
            description:
              'A guided route from private-label entry into retail placement, corporate gifting, and distribution expansion.',
          },
        ],
        support:
          'Trade infrastructure supports brand-led supply from verified vendor matching to scaled distribution pathway access.',
      },
      {
        id: 'brand-packaging',
        label: 'Brand & Packaging',
        headline: 'Brand Identity Aligned to Authentic Kashmiri Craft',
        description:
          'Custom label, tag, and packaging guidance designed for retail-ready brand presentation.',
        features: [
          {
            icon: 'Tag',
            title: 'Custom Label, Tag & Packaging Guidance',
            description:
              'Structured support for label configuration, packaging specification, and brand-aligned presentation requirements.',
          },
          {
            icon: 'Package',
            title: 'Retail-Ready Presentation & Brand Fit Review',
            description:
              'Products and packaging are reviewed for retail suitability, presentation clarity, and brand alignment before scale.',
          },
          {
            icon: 'Palette',
            title: 'Authenticity Language Guidance',
            description:
              'Responsible storytelling support for product origin, craft heritage, and authenticity language that meets retail standards.',
          },
        ],
        support:
          'Brand and packaging enablement covers labeling, presentation, and authenticity guidance across the private-label pathway.',
      },
      {
        id: 'fulfilment-compliance',
        label: 'Fulfilment & Compliance',
        headline: 'Compliance Clarity Built In Before Production Scale',
        description:
          'MOQ guidance, production readiness, and labeling standards addressed before deeper commitment is made.',
        features: [
          {
            icon: 'Layers',
            title: 'MOQ & Production Readiness Review',
            description:
              'Minimum order quantities and production capacity are reviewed against product category, customization, and market scope.',
          },
          {
            icon: 'ShieldCheck',
            title: 'Sample & Production Review Before Scale',
            description:
              'Sample quality and initial production runs are reviewed before deeper volume and supply commitments are made.',
          },
          {
            icon: 'Package',
            title: 'Labeling, Packaging & Compliance Expectations',
            description:
              'Labeling standards, packaging requirements, and compliance expectations are clarified at entry — not after production begins.',
          },
        ],
        support:
          'Fulfilment and compliance review ensures production, packaging, and labeling are prepared before scale commitment.',
      },
      {
        id: 'growth-intelligence',
        label: 'Growth Intelligence',
        headline: 'Performance Tracking That Unlocks Higher Trade Opportunities',
        description:
          'Brand readiness checks, KPI tracking, and pathway support for retail, gifting, and export trade.',
        features: [
          {
            icon: 'Activity',
            title: 'Brand Profile & Market Readiness Checks',
            description:
              'Brand positioning, target market clarity, and overall readiness are reviewed and tracked as the partnership progresses.',
          },
          {
            icon: 'Layers',
            title: 'KPI & Retention Tracking',
            description:
              'Performance metrics track production consistency, communication, packaging, and market activity to support growth pathway access.',
          },
          {
            icon: 'Factory',
            title: 'Pathway Support Into Higher Trade Levels',
            description:
              'Strong KPI performance supports access to retail placement, corporate gifting, import/export trade, and distribution expansion.',
          },
        ],
        support:
          'Growth intelligence monitors partnership performance and supports transition into higher-tier private-label opportunities.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §12 — COMPARISON
  // ─────────────────────────────────────────────────────────────────────────────
  comparison: {
    sectionLabel: 'Platform Comparison',
    headline: 'How This Model Compares',
    subheadline:
      'A practical comparison of structured private-label trade through DKC against generic suppliers and open marketplaces.',
    defaultTab: 'platform',
    tabs: [
      {
        id: 'platform',
        label: 'Feature Comparison',
        description: 'Compare authenticity, brand control, supply readiness, and platform support.',
        parameters: [
          'Product Authenticity',
          'Supplier Verification',
          'Brand Control',
          'Custom Packaging',
          'MOQ Flexibility',
          'Traceability',
          'Retail Readiness',
          'Supply Stability',
        ],
        platforms: [
          {
            id: 'dkc-private-label',
            name: 'DKC Private Label',
            highlight: true,
            values: [
              'GI-aware, reviewed sourcing',
              'Vendor and product suitability review',
              'Full private-label and white-label pathway support',
              'Custom label, tag, and packaging guidance',
              'Guided MOQ planning by product and production scope',
              'Origin, product, and production-stage traceability support',
              'Packaging, labeling, and compliance readiness reviewed',
              'Structured pathway toward repeatable supply and scale',
            ],
          },
          {
            id: 'generic-suppliers',
            name: 'Generic Suppliers',
            highlight: false,
            values: [
              'Mixed authenticity depending on supplier',
              'Limited or manual supplier checking',
              'Partial branding support',
              'Basic packaging options',
              'Fixed MOQ with limited flexibility',
              'Low traceability beyond supplier claims',
              'Retail readiness varies by supplier',
              'Supply consistency depends on individual vendor capacity',
            ],
          },
          {
            id: 'open-marketplaces',
            name: 'Open Marketplaces',
            highlight: false,
            values: [
              'Mostly unverified listings',
              'No deep supplier validation',
              'No meaningful brand ownership',
              'Little to no packaging control',
              'No structured MOQ planning',
              'No reliable product-origin traceability',
              'Not built for retail-ready private label',
              'Highly inconsistent supply reliability',
            ],
          },
        ],
      },
      {
        id: 'value',
        label: 'Value Comparison',
        description: 'Compare launch effort, control, quality, and long-term growth potential.',
        parameters: [
          'Setup Cost',
          'Brand Ownership',
          'Time to Launch',
          'Quality Control',
          'Compliance Support',
          'Scalability',
          'Long-Term Growth',
        ],
        platforms: [
          {
            id: 'dkc-private-label',
            name: 'DKC Private Label',
            highlight: true,
            values: [
              'Moderate, guided by scope',
              'Clear ownership pathway based on agreement type',
              'Faster launch with reviewed products and guided packaging',
              'Quality review built into product and production flow',
              'Labeling, packaging, and authenticity language support',
              'High scalability through structured growth pathway',
              'Retail, gifting, import/export, and distribution expansion',
            ],
          },
          {
            id: 'generic-suppliers',
            name: 'Generic Suppliers',
            highlight: false,
            values: [
              'Low to moderate upfront',
              'Limited or unclear ownership terms',
              'Medium, depends on supplier readiness',
              'Variable quality control',
              'Usually buyer-managed',
              'Limited scalability without extra systems',
              'Unstructured growth and supplier-dependent expansion',
            ],
          },
          {
            id: 'open-marketplaces',
            name: 'Open Marketplaces',
            highlight: false,
            values: [
              'Low upfront',
              'No serious ownership pathway',
              'Fast for simple resale',
              'Low control over product quality',
              'Minimal to none',
              'Low scalability for premium private label',
              'No structured growth path',
            ],
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §13 — STATS
  // ─────────────────────────────────────────────────────────────────────────────
  stats: {
    headline: 'Platform at a Glance',
    description:
      'Key metrics that reflect the product depth, partner trust, and artisan reach built across the De Koshur Crafts private-label ecosystem.',
    items: [
      { value: '500+', label: 'Product Variants Reviewed' },
      { value: '100+', label: 'Brand Partners Onboarded' },
      { value: '25+', label: 'Craft Categories Available' },
      { value: '1,000+', label: 'Skilled Artisans Connected' },
      { value: 'U.S.-Based', label: 'Partnership Platform' },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §14 — GROWTH PATH
  // ─────────────────────────────────────────────────────────────────────────────
  growthPath: {
    headline: 'Growth Path',
    description:
      'Private label entry is the beginning — not the destination. Strong performance progressively unlocks retail, gifting, import/export, and distribution opportunities.',
    steps: [
      {
        title: 'Private Label Entry',
        icon: 'Tag',
      },
      {
        title: 'Sample Review',
        icon: 'MagnifyingGlass',
      },
      {
        title: 'Starter Production',
        icon: 'Factory',
      },
      {
        title: 'Retail Placement',
        icon: 'Storefront',
      },
      {
        title: 'Corporate Gifting',
        icon: 'Gift',
      },
      {
        title: 'Import / Export Trade',
        icon: 'ShippingContainer',
      },
      {
        title: 'Distribution Expansion',
        icon: 'GlobeHemisphereWest',
      },
      {
        title: 'Brand Certification',
        icon: 'Certificate',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §15 — FAQ
  // ─────────────────────────────────────────────────────────────────────────────
  faq: {
    sectionLabel: 'FAQ',
    headline: 'Private Label FAQ',
    items: [
      {
        question: 'Can small brands apply for Private Label?',
        answer:
          'Yes. Small brands, boutiques, ecommerce brands, gift companies, lifestyle brands, and diaspora entrepreneurs can apply if their brand goals and product category align with the pathway. Entry is reviewed — not guaranteed — but small-scale intent is not a barrier.',
      },
      {
        question: 'What is the difference between white label and private label here?',
        answer:
          'White label typically starts from existing reviewed products with lighter customization and faster entry. Private label usually involves stronger brand control, custom packaging direction, and deeper product presentation requirements — with a longer review process.',
      },
      {
        question: 'Do I need to commit to large quantities at entry?',
        answer:
          'No fixed quantity commitment is collected at entry. MOQ and production readiness are reviewed based on product type, customization level, packaging needs, and your market plan — and discussed as part of the review process, not as an upfront requirement.',
      },
      {
        question: 'Are packaging and labeling included?',
        answer:
          'Packaging and labeling guidance are part of the pathway at all package levels. Final packaging cost and execution scope depend on quantity, customization requirements, selected materials, and production volume.',
      },
      {
        question: 'Can vendors participate in private-label supply?',
        answer:
          'Yes. Vendors with authentic products, demonstrated production consistency, packaging readiness, and communication discipline can be reviewed for private-label supply opportunities within the DKC ecosystem.',
      },
      {
        question: 'Does paying for a package guarantee approval?',
        answer:
          'No. Package fees cover platform access, support, and onboarding services — not the approval decision itself. Entry is reviewed based on readiness, product suitability, brand fit, and compliance alignment.',
      },
      {
        question: 'What does strong performance unlock?',
        answer:
          'Strong KPI performance over the retention period can unlock retail placement, corporate gifting opportunities, import/export trade access, distribution expansion pathways, and higher-tier partnership levels within the DKC B2B ecosystem.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // §16 — FINAL CTA
  // ─────────────────────────────────────────────────────────────────────────────
  finalCTA: {
    headline: 'Your Brand. Kashmiri Craft.\nOne Structured Path.',
    description:
      'Authenticated products, packaging guidance, quality review, and a clear progression path into brand-led craft trade — built for businesses that take quality, authenticity, and long-term growth seriously.',
    trustMarkers: [
      { value: '500+', label: 'Artisans Connected' },
      { value: '100+', label: 'Brand Partners' },
      { value: '25+', label: 'Craft Categories' },
      { value: 'U.S.-Based', label: 'Platform Base' },
    ],
    roles: {
      buyer: {
        headline: 'Your Brand, Backed\nby Authentic Craft.',
        description:
          'Apply for private-label review and access reviewed products, structured packaging guidance, and a clear path to brand-ready Kashmiri craft collections.',
        primaryCta: { label: 'Start Buyer Application', url: '/apply/private-label' },
        secondaryCta: { label: 'Check My Brand Fit', url: '/brand-fit' },
      },
      vendor: {
        headline: 'Quality Products Deserve\nBetter Opportunities.',
        description:
          'Apply for supplier review and position your craft for structured private-label demand from brands, retailers, and international buyers across the DKC ecosystem.',
        primaryCta: { label: 'Start Vendor Application', url: '/apply/private-label' },
        secondaryCta: { label: 'Check Supplier Fit', url: '/brand-fit' },
      },
    },
    actions: [
      { label: 'Start Private Label Application', url: '/apply/private-label' },
      { label: 'Explore Partnership Models', url: '/models' },
    ],
  },
};

export type PrivateLabelPageContent = typeof privateLabelPage;
