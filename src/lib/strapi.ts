const strapiUrl = process.env.STRAPI_URL ?? '';
const strapiToken = process.env.STRAPI_API_TOKEN ?? '';

export function getStrapiConfig() {
  return {
    url: strapiUrl,
    token: strapiToken,
    isConfigured: Boolean(strapiUrl && strapiToken),
  };
}

export function createStrapiHeaders() {
  const { token } = getStrapiConfig();

  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}
