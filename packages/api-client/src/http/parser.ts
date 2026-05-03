import type { ApiError, ApiResponse } from '@dkc/types';

export class HttpError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly error: string,
    public readonly details?: Record<string, string[]>,
  ) {
    super(error);
    this.name = 'HttpError';
  }
}

export async function parseResponse<T>(response: Response): Promise<T> {
  const json = await response.json();

  if (!response.ok) {
    const err = json as ApiError;
    throw new HttpError(err.statusCode, err.error, err.details);
  }

  return (json as ApiResponse<T>).data;
}
