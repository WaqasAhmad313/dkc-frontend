// Public routes
export const PUBLIC_ROUTES = {
  HOME:              '/',
  PARTNERSHIP_PATHS: '/partnership-paths',
  HOW_GROWTH_WORKS:  '/how-growth-works',
  PRICING:           '/pricing',
  TRUST_STANDARDS:   '/trust-and-standards',
  BOOK_CONSULTATION: '/book-consultation',
  ABOUT:             '/about',
  CONTACT:           '/contact',
  LOGIN:             '/login',
  REGISTER:          '/register',
  APPLY:             '/apply',
  BOOKING:           '/booking',

  /**
   * Sub-partnership detail — these ARE role-prefixed because each role
   * sees a genuinely different detail page for the same partnership slug.
   * /buyer/partnership-paths/[slug]
   * /vendor/partnership-paths/[slug]
   */
  BUYER_SUB_PARTNERSHIP:  (slug: string) => `/buyer/partnership-paths/${slug}`,
  VENDOR_SUB_PARTNERSHIP: (slug: string) => `/vendor/partnership-paths/${slug}`,
} as const;

// Authenticated user routes
export const USER_ROUTES = {
  DASHBOARD:  '/dashboard',
  MY_PATH:    '/dashboard/my-path',
  KPI:        '/dashboard/kpi',
  DOCUMENTS:  '/dashboard/documents',
  MEETINGS:   '/dashboard/meetings',
  ONBOARDING: '/dashboard/onboarding',
  PLACEMENT:  '/dashboard/placement',
  PACKAGE:    '/dashboard/package',
  BILLING:    '/dashboard/billing',
  UPGRADE:    '/dashboard/upgrade',
  SUPPORT:    '/dashboard/support',
} as const;

// Admin routes
export const ADMIN_ROUTES = {
  DASHBOARD:     '/admin',
  APPLICATIONS:  '/admin/applications',
  PLACEMENTS:    '/admin/placements',
  PACKAGES:      '/admin/packages',
  SUBSCRIPTIONS: '/admin/subscriptions',
  PAYMENTS:      '/admin/payments',
  AUDIT:         '/admin/audit',
  USERS:         '/admin/users',
} as const;