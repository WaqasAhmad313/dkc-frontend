import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { Package } from '@dkc/types';

export const packageService = {
  getAll: () =>
    httpClient.get<Package[]>(API_ENDPOINTS.PACKAGES),

  getRecommendation: (data: Record<string, unknown>) =>
    httpClient.post<{ packageId: string; reason: string }>(
      API_ENDPOINTS.RECOMMENDATION_PREVIEW,
      data,
    ),
};
