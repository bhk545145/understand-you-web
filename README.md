# understand-you-web

Official website for 懂你 (Understand You).

## Stack

- Next.js 14 App Router
- Tailwind CSS
- Strapi-ready content layer with local fallback data

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: public site URL, used for metadata.
- `STRAPI_URL`: Strapi base URL, for example `http://localhost:1337`.
- `STRAPI_API_TOKEN`: read-only Strapi API token.

If `STRAPI_URL` is missing or the CMS is unreachable, the site automatically falls back to local mock content in [`lib/site-data.ts`](./lib/site-data.ts).

## Current pages

- `/`
- `/features`
- `/about`
- `/download`
- `/faq`
- `/privacy`

## Suggested Strapi content types

Single types:

- `site-config`
- `homepage`
- `about-page`
- `download-page`
- `privacy-page`

Collection types:

- `features`
- `faqs`

## Notes

- The data layer in [`lib/strapi.ts`](./lib/strapi.ts) is written to tolerate both flattened Strapi responses and legacy `attributes` nesting.
- Download links are intentionally configurable through the CMS, so version and channel changes do not require frontend code edits.
