import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { KpiScore } from '@dkc/types';

export const dashboardService = {
  getPlacement: () =>
    httpClient.get<unknown>(API_ENDPOINTS.PLACEMENT_ME),

  getKpi: () =>
    httpClient.get<KpiScore>(API_ENDPOINTS.KPI_ME),

  getUnlocks: () =>
    httpClient.get<unknown[]>(API_ENDPOINTS.UNLOCKS_ME),

  getOnboarding: () =>
    httpClient.get<unknown>(API_ENDPOINTS.ONBOARDING_ME),
};
