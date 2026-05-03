export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },

  // Public
  PARTNERSHIP_SYSTEMS: '/partnership-systems',
  SUB_PARTNERSHIPS: '/sub-partnerships',
  SUB_PARTNERSHIP_BY_SLUG: (slug: string) => `/sub-partnerships/${slug}`,
  PACKAGES: '/packages',
  PRICING: '/pricing',
  RECOMMENDATION_PREVIEW: '/recommendation-preview',

  // Applications
  APPLICATIONS: '/applications',
  APPLICATION_BY_ID: (id: string) => `/applications/${id}`,
  APPLICATION_DOCUMENTS: (id: string) => `/applications/${id}/documents`,
  APPLICATION_STATUS: (id: string) => `/applications/${id}/status`,

  // User dashboard
  ONBOARDING_ME: '/onboarding/me',
  PLACEMENT_ME: '/placements/me',
  KPI_ME: '/kpis/me',
  UNLOCKS_ME: '/unlocks/me',
  SUBSCRIPTIONS_ME: '/subscriptions/me',
  ENTITLEMENTS_ME: '/entitlements/me',
  INVOICES_ME: '/invoices/me',

  // Booking
  BOOKINGS: '/bookings',

  // Admin
  ADMIN: {
    APPLICATIONS: '/admin/applications',
    REVIEW_DECISION: (id: string) => `/admin/reviews/${id}/decision`,
    PLACEMENTS: '/admin/placements',
    PLACEMENT_BY_ID: (id: string) => `/admin/placements/${id}`,
    AUDIT_LOGS: '/admin/audit-logs',
    PACKAGES: '/admin/packages',
    PACKAGE_BY_ID: (id: string) => `/admin/packages/${id}`,
    SUBSCRIPTIONS: '/admin/subscriptions',
    PAYMENTS: '/admin/payments',
  },
} as const;
