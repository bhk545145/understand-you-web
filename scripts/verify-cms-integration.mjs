const siteUrl = (
  process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000"
).replace(/\/$/, "");
const strapiUrl = (process.env.STRAPI_URL ?? "http://127.0.0.1:1337").replace(/\/$/, "");

function flattenEntity(entity) {
  if (!entity) {
    return null;
  }

  if (Array.isArray(entity)) {
    return entity.map((item) => flattenEntity(item));
  }

  if (typeof entity !== "object") {
    return entity;
  }

  if (entity.data !== undefined) {
    return flattenEntity(entity.data);
  }

  if (entity.attributes) {
    return flattenEntity({
      ...entity.attributes,
      id: entity.id,
      documentId: entity.documentId,
    });
  }

  const {
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    publishedAt: _publishedAt,
    locale: _locale,
    localizations: _localizations,
    ...rest
  } = entity;

  return Object.fromEntries(
    Object.entries(rest).map(([key, value]) => [key, flattenEntity(value)]),
  );
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
  if (!expected || !content.includes(expected)) {
    throw new Error(`Expected ${label} to include: ${expected}`);
  }
}

async function main() {
  const [
    siteConfigResponse,
    homepageResponse,
    featureScenesResponse,
    featuresPageResponse,
    featureDetailsResponse,
    platformLinksResponse,
    downloadPageResponse,
    releaseNotesResponse,
    faqResponse,
  ] = await Promise.all([
    fetchJson(`${strapiUrl}/api/site-config?populate=*`),
    fetchJson(`${strapiUrl}/api/homepage?populate=*`),
    fetchJson(
      `${strapiUrl}/api/feature-scenes?filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=6&populate=*`,
    ),
    fetchJson(`${strapiUrl}/api/features-page?populate=*`),
    fetchJson(
      `${strapiUrl}/api/feature-details?filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=12&populate=*`,
    ),
    fetchJson(
      `${strapiUrl}/api/platform-links?filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=6&populate=*`,
    ),
    fetchJson(`${strapiUrl}/api/download-page?populate=*`),
    fetchJson(
      `${strapiUrl}/api/release-notes?sort[0]=isLatest:desc&sort[1]=releaseDate:desc&pagination[pageSize]=12`,
    ),
    fetchJson(
      `${strapiUrl}/api/faqs?filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=20`,
    ),
  ]);

  const siteConfig = flattenEntity(siteConfigResponse.data);
  const homepage = flattenEntity(homepageResponse.data);
  const firstScene = flattenEntity(featureScenesResponse.data?.[0]);
  const featuresPage = flattenEntity(featuresPageResponse.data);
  const firstFeatureDetail = flattenEntity(featureDetailsResponse.data?.[0]);
  const firstPlatform = flattenEntity(platformLinksResponse.data?.[0]);
  const downloadPage = flattenEntity(downloadPageResponse.data);
  const latestRelease = flattenEntity(releaseNotesResponse.data?.[0]);
  const firstFaq = flattenEntity(faqResponse.data?.[0]);

  if (
    !siteConfig ||
    !homepage ||
    !firstScene ||
    !featuresPage ||
    !firstFeatureDetail ||
    !firstPlatform ||
    !downloadPage ||
    !latestRelease ||
    !firstFaq
  ) {
    throw new Error("CMS returned incomplete content for verification.");
  }

  const [homeHtml, featuresHtml, downloadHtml, faqHtml, privacyHtml, aboutHtml] =
    await Promise.all([
      fetchText(`${siteUrl}/`),
      fetchText(`${siteUrl}/features`),
      fetchText(`${siteUrl}/download`),
      fetchText(`${siteUrl}/faq`),
      fetchText(`${siteUrl}/privacy`),
      fetchText(`${siteUrl}/about`),
    ]);

  assertContains(homeHtml, siteConfig.siteTagline, "home page");
  assertContains(homeHtml, firstScene.title, "home page scenes");
  assertContains(featuresHtml, featuresPage.title, "features page");
  assertContains(featuresHtml, firstFeatureDetail.title, "features page blocks");
  assertContains(downloadHtml, downloadPage.title, "download page");
  assertContains(downloadHtml, firstPlatform.platformName, "download page platform cards");
  assertContains(downloadHtml, latestRelease.version, "download page release note");
  assertContains(faqHtml, firstFaq.question, "faq page");
  assertContains(privacyHtml, "隐私政策", "privacy page");
  assertContains(aboutHtml, homepage.storyTitle, "about page");

  console.log("Verified CMS endpoints:");
  console.log(`- ${strapiUrl}/api/site-config`);
  console.log(`- ${strapiUrl}/api/homepage`);
  console.log(`- ${strapiUrl}/api/feature-scenes`);
  console.log(`- ${strapiUrl}/api/platform-links`);
  console.log(`- ${strapiUrl}/api/features-page`);
  console.log(`- ${strapiUrl}/api/feature-details`);
  console.log(`- ${strapiUrl}/api/download-page`);
  console.log(`- ${strapiUrl}/api/release-notes`);
  console.log(`- ${strapiUrl}/api/faqs`);
  console.log("Verified website pages:");
  console.log(`- ${siteUrl}/`);
  console.log(`- ${siteUrl}/features`);
  console.log(`- ${siteUrl}/about`);
  console.log(`- ${siteUrl}/download`);
  console.log(`- ${siteUrl}/privacy`);
  console.log(`- ${siteUrl}/faq`);
  console.log("CMS integration verification passed.");
}

main().catch((error) => {
  console.error("CMS integration verification failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
