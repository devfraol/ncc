export const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

export async function fetchFromStrapi<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${STRAPI_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}
