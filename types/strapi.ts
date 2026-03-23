type StrapiV4Entity<T> = {
  id?: number;
  attributes: T;
};

type StrapiV5Entity<T> = T & {
  id?: number;
  documentId?: string;
};

export type StrapiEntity<T> = StrapiV4Entity<T> | StrapiV5Entity<T>;

export type StrapiSingleResponse<T> = {
  data: StrapiEntity<T> | null;
  meta?: Record<string, unknown>;
};

export type StrapiCollectionResponse<T> = {
  data: StrapiEntity<T>[];
  meta?: Record<string, unknown>;
};
