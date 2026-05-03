export const PARTNERSHIP_SYSTEMS = [
  {
    slug: 'core-trade',
    name: 'Core Trade',
    subPartnerships: ['dropshipping', 'consignment', 'wholesale', 'import-export'],
  },
  {
    slug: 'brand-expansion',
    name: 'Brand Expansion',
    subPartnerships: ['exhibition', 'auction-bidding', 'white-label', 'brick-mortar'],
  },
  {
    slug: 'collaborative',
    name: 'Collaborative Partnerships',
    subPartnerships: ['packaging', 'design-collaboration', 'storytelling-media', 'warehouse-fulfillment'],
  },
  {
    slug: 'institutional',
    name: 'Institutional Pathways',
    subPartnerships: ['logistics', 'museum-institutional', 'ngo-government', 'technology-partnership'],
  },
] as const;
