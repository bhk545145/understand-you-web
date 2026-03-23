const siteUrl = (process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const strapiUrl = (process.env.STRAPI_URL ?? "http://127.0.0.1:1337").replace(/\/$/, "");

function flattenEntity(entity) {
  if (!entity) {
    return null;
  }

  if (entity.attributes) {
    return entity.attributes;
  }

  const {
    id: _id,
    documentId: _documentId,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    publishedAt: _publishedAt,
    locale: _locale,
    ...attributes
  } = entity;

  return attributes;
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${url}`);
  }

  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${url}`);
  }

  return response.text();
}

function assertContains(content, expected, label) {
  if (!content.includes(expected)) {
    throw new Error(`Expected ${label} to include: ${expected}`);
  }
}

async function main() {
  const siteConfigResponse = await fetchJson(`${strapiUrl}/api/site-config?populate=*`);
  const homepageResponse = await fetchJson(`${strapiUrl}/api/homepage?populate=*`);
  const featuresResponse = await fetchJson(
    `${strapiUrl}/api/features?sort[0]=sort:asc&pagination[pageSize]=12&populate=*`,
  );
  const downloadResponse = await fetchJson(`${strapiUrl}/api/download-page?populate=*`);
  const faqResponse = await fetchJson(
    `${strapiUrl}/api/faqs?sort[0]=sort:asc&pagination[pageSize]=20`,
  );

  const siteConfig = flattenEntity(siteConfigResponse.data);
  const homepage = flattenEntity(homepageResponse.data);
  const firstFeature = flattenEntity(featuresResponse.data?.[0]);
  const downloadPage = flattenEntity(downloadResponse.data);
  const firstFaq = flattenEntity(faqResponse.data?.[0]);

  if (!siteConfig || !homepage || !firstFeature || !downloadPage || !firstFaq) {
    throw new Error("CMS returned incomplete content for verification.");
  }

  const [homeHtml, featuresHtml, downloadHtml, faqHtml] = await Promise.all([
    fetchText(`${siteUrl}/`),
    fetchText(`${siteUrl}/features`),
    fetchText(`${siteUrl}/download`),
    fetchText(`${siteUrl}/faq`),
  ]);

  assertContains(homeHtml, siteConfig.tagline, "home page");
  assertContains(homeHtml, homepage.story?.title ?? "", "home page story");
  assertContains(featuresHtml, firstFeature.title, "features page");
  assertContains(downloadHtml, downloadPage.options?.[0]?.platform ?? "", "download page");
  assertContains(faqHtml, firstFaq.question, "faq page");

  console.log("Verified CMS endpoints:");
  console.log(`- ${strapiUrl}/api/site-config`);
  console.log(`- ${strapiUrl}/api/homepage`);
  console.log(`- ${strapiUrl}/api/features`);
  console.log(`- ${strapiUrl}/api/download-page`);
  console.log(`- ${strapiUrl}/api/faqs`);
  console.log("Verified website pages:");
  console.log(`- ${siteUrl}/`);
  console.log(`- ${siteUrl}/features`);
  console.log(`- ${siteUrl}/download`);
  console.log(`- ${siteUrl}/faq`);
  console.log("CMS integration verification passed.");
}

main().catch((error) => {
  console.error("CMS integration verification failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
