import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { PartnershipSystem, SubPartnership } from '@dkc/types';

export const partnershipService = {
  getSystems: () =>
    httpClient.get<PartnershipSystem[]>(API_ENDPOINTS.PARTNERSHIP_SYSTEMS),

  getSubPartnerships: () =>
    httpClient.get<SubPartnership[]>(API_ENDPOINTS.SUB_PARTNERSHIPS),

  getSubPartnershipBySlug: (slug: string) =>
    httpClient.get<SubPartnership>(API_ENDPOINTS.SUB_PARTNERSHIP_BY_SLUG(slug)),
};
