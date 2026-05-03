export enum KpiStatus {
  ON_TRACK = 'on_track',
  AT_RISK = 'at_risk',
  BELOW_THRESHOLD = 'below_threshold',
  EXCELLENT = 'excellent',
}

export interface KpiScore {
  participantId: string;
  period: string;
  score: number;
  status: KpiStatus;
  retentionMonths: number;
  retentionRequired: number;
  unlockEligible: boolean;
  evaluatedAt: string;
}
