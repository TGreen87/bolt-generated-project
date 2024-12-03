/**
 * API client utilities
 */
import { ApiError } from '@/types/api';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

/**
 * Enhanced fetch with timeout and error handling
 */
export async function apiFetch<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { timeout = 5000, ...fetchOptions } = options;

  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    });

    clearTimeout(id);

    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}
