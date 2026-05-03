import { httpClient } from '../http/client';
import { API_ENDPOINTS } from '@dkc/constants';
import type { AuthSession, AuthTokens, User } from '@dkc/types';
import type { RegisterInput, LoginInput } from '@dkc/validators';

export const authService = {
  register: (data: RegisterInput) =>
    httpClient.post<AuthSession>(API_ENDPOINTS.AUTH.REGISTER, data),

  login: (data: LoginInput) =>
    httpClient.post<AuthSession>(API_ENDPOINTS.AUTH.LOGIN, data),

  logout: () =>
    httpClient.post<void>(API_ENDPOINTS.AUTH.LOGOUT, {}),

  refresh: (refreshToken: string) =>
    httpClient.post<AuthTokens>(API_ENDPOINTS.AUTH.REFRESH, { refreshToken }),

  me: () =>
    httpClient.get<User>(API_ENDPOINTS.AUTH.ME),
};
