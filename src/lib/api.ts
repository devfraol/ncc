import { fetchFromStrapi } from '@/lib/strapi';

export type ApiResponse<T> = {
  data: T;
};

export async function getApiData<T>(path: string) {
  return fetchFromStrapi<ApiResponse<T>>(path);
}
