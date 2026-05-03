import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { Subscription, Entitlement } from '@dkc/types';

export const subscriptionService = {
  getMine: () =>
    httpClient.get<Subscription>(API_ENDPOINTS.SUBSCRIPTIONS_ME),

  getEntitlements: () =>
    httpClient.get<Entitlement[]>(API_ENDPOINTS.ENTITLEMENTS_ME),

  getInvoices: () =>
    httpClient.get<unknown[]>(API_ENDPOINTS.INVOICES_ME),
};
