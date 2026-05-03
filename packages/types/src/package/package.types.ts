export enum PackageSlug {
  STARTER_ENTRY = 'starter-entry',
  TRADE_GROWTH = 'trade-growth',
  BRAND_EXPANSION = 'brand-expansion',
  COLLABORATION_ENABLEMENT = 'collaboration-enablement',
  INSTITUTIONAL_ALLIANCE = 'institutional-alliance',
  LATERAL_REVIEW = 'lateral-review',
  ONBOARDING_SUPPORT = 'onboarding-support',
  COMPLIANCE_SUPPORT = 'compliance-support',
  ADVISORY = 'advisory',
  INTEGRATION_SUPPORT = 'integration-support',
}

export enum BillingModel {
  ONE_TIME = 'one_time',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  ANNUAL = 'annual',
  ENTERPRISE = 'enterprise',
  PROJECT_BASED = 'project_based',
}

export interface Package {
  id: string;
  name: string;
  slug: PackageSlug;
  description: string;
  features: string[];
  billingModels: BillingModel[];
  isAddon: boolean;
}
