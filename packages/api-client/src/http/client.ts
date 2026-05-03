import { parseResponse } from './parser';

let _baseUrl = '';
let _getAccessToken: (() => string | null) | null = null;
let _onUnauthorized: (() => void) | null = null;

export function configureClient(options: {
  baseUrl: string;
  getAccessToken?: () => string | null;
  onUnauthorized?: () => void;
}) {
  _baseUrl = options.baseUrl;
  _getAccessToken = options.getAccessToken ?? null;
  _onUnauthorized = options.onUnauthorized ?? null;
}

async function request<T>(
  path: string,
  options: RequestInit = {},
  signal?: AbortSignal,
): Promise<T> {
  const token = _getAccessToken?.();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch(`${_baseUrl}${path}`, {
      ...options,
      headers,
      signal: signal ?? controller.signal,
    });

    if (response.status === 401) {
      _onUnauthorized?.();
      throw new Error('Unauthorized');
    }

    return await parseResponse<T>(response);
  } finally {
    clearTimeout(timeout);
  }
}

export const httpClient = {
  get: <T>(path: string, signal?: AbortSignal) =>
    request<T>(path, { method: 'GET' }, signal),

  post: <T>(path: string, body: unknown, signal?: AbortSignal) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }, signal),

  patch: <T>(path: string, body: unknown, signal?: AbortSignal) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }, signal),

  put: <T>(path: string, body: unknown, signal?: AbortSignal) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }, signal),

  delete: <T>(path: string, signal?: AbortSignal) =>
    request<T>(path, { method: 'DELETE' }, signal),
};
