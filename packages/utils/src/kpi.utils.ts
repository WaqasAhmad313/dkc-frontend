import { KPI_THRESHOLDS } from '@dkc/constants';

export function getKpiStatus(score: number): 'excellent' | 'on_track' | 'at_risk' | 'below_threshold' {
  if (score >= KPI_THRESHOLDS.EXCELLENT) return 'excellent';
  if (score >= KPI_THRESHOLDS.ON_TRACK) return 'on_track';
  if (score >= KPI_THRESHOLDS.AT_RISK) return 'at_risk';
  return 'below_threshold';
}

export function getKpiColor(status: string): string {
  const map: Record<string, string> = {
    excellent: 'var(--color-success)',
    on_track: 'var(--color-primary)',
    at_risk: 'var(--color-warning)',
    below_threshold: 'var(--color-danger)',
  };
  return map[status] ?? 'var(--color-muted)';
}
