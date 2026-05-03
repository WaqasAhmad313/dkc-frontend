import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { Application } from '@dkc/types';

export const applicationService = {
  create: (data: { subPartnershipId: string; packageId: string }) =>
    httpClient.post<Application>(API_ENDPOINTS.APPLICATIONS, data),

  updateStep: (id: string, stepData: Record<string, unknown>) =>
    httpClient.patch<Application>(API_ENDPOINTS.APPLICATION_BY_ID(id), stepData),

  getStatus: (id: string) =>
    httpClient.get<Application>(API_ENDPOINTS.APPLICATION_STATUS(id)),

  uploadDocument: (id: string, formData: FormData) =>
    fetch(`${API_ENDPOINTS.APPLICATION_DOCUMENTS(id)}`, {
      method: 'POST',
      body: formData,
    }).then((r) => r.json()),
};
