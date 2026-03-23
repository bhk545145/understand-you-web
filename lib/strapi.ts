import type {
  StrapiCollectionResponse,
  StrapiEntity,
  StrapiSingleResponse,
} from "@/types/strapi";

const STRAPI_URL = process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

function buildUrl(pathname: string, query?: string) {
  if (!STRAPI_URL) {
    return null;
  }

  const base = STRAPI_URL.replace(/\/$/, "");
  const normalizedPath = pathname.replace(/^\/+/, "");
  const queryString = query ? `?${query}` : "";

  return `${base}/api/${normalizedPath}${queryString}`;
}

function normalizeEntity<T>(entity: StrapiEntity<T> | null | undefined): T | null {
  if (!entity) {
    return null;
  }

  if ("attributes" in entity && entity.attributes) {
    return entity.attributes;
  }

  const flattenedEntity = entity as Record<string, unknown>;
  const {
    id: _id,
    documentId: _documentId,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    publishedAt: _publishedAt,
    locale: _locale,
    ...attributes
  } = flattenedEntity;

  return attributes as T;
}

async function fetchStrapi<T>(pathname: string, query?: string): Promise<T | null> {
  const url = buildUrl(pathname, query);

  if (!url) {
    return null;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_API_TOKEN
          ? {
              Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            }
          : {}),
      },
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      console.warn(`[strapi] ${response.status} while requesting ${url}`);
      return null;
    }

    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[strapi] failed to reach ${url}`, error);
    return null;
  }
}

export async function fetchStrapiSingle<T>(
  contentType: string,
  query?: string,
): Promise<T | null> {
  const response = await fetchStrapi<StrapiSingleResponse<T>>(contentType, query);
  return normalizeEntity(response?.data);
}

export async function fetchStrapiCollection<T>(
  contentType: string,
  query?: string,
): Promise<T[] | null> {
  const response = await fetchStrapi<StrapiCollectionResponse<T>>(contentType, query);

  if (!response?.data?.length) {
    return null;
  }

  return response.data
    .map((entity) => normalizeEntity(entity))
    .filter((entity): entity is T => entity !== null);
}
