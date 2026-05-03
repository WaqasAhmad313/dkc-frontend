export enum ApplicationStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  LATERAL_REVIEW = 'lateral_review',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  ONBOARDING = 'onboarding',
  PLACED = 'placed',
}

export enum ApplicationRoute {
  STANDARD = 'standard',
  LATERAL = 'lateral',
}

export interface Application {
  id: string;
  userId: string;
  subPartnershipId: string;
  packageId: string;
  status: ApplicationStatus;
  route: ApplicationRoute;
  currentStep: number;
  totalSteps: number;
  recommendationData?: Record<string, unknown>;
  reviewNotes?: string;
  createdAt: string;
  updatedAt: string;
}
