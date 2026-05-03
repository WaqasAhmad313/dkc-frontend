export enum SubscriptionStatus {
  ACTIVE = 'active',
  TRIAL = 'trial',
  PAUSED = 'paused',
  OVERDUE = 'overdue',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
}

export interface Subscription {
  id: string;
  userId: string;
  packageId: string;
  status: SubscriptionStatus;
  billingModel: import('../package/package.types').BillingModel;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  stripeSubscriptionId?: string;
  cancelledAt?: string;
}

export interface Entitlement {
  id: string;
  subscriptionId: string;
  feature: string;
  value: string | number | boolean;
}
