export type RichTextNode = {
  type?: string;
  level?: number;
  text?: string;
  format?: string;
  url?: string;
  children?: RichTextNode[];
  [key: string]: unknown;
};

export type RichTextValue = string | RichTextNode[] | null;

export type MediaAsset = {
  id?: number;
  documentId?: string;
  url: string;
  alternativeText?: string | null;
  name?: string | null;
  mime?: string | null;
  width?: number | null;
  height?: number | null;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type PlatformName = "iOS" | "Android" | "macOS";

export type SiteConfig = {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  logo: MediaAsset | null;
  favicon: MediaAsset | null;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
  footerCopyright: string;
  socialLinks: SocialLink[];
  primaryDownloadText: string;
  primaryDownloadLink: string;
};

export type SiteShell = {
  siteName: string;
  siteTagline: string;
  siteDescription: string;
  footerCopyright: string;
  socialLinks: SocialLink[];
  primaryDownloadText: string;
  primaryDownloadLink: string;
};

export type CapabilityItem = {
  title: string;
  description: string;
  iconName: string;
};

export type HomepageData = {
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroPrimaryButtonText: string;
  heroPrimaryButtonLink: string;
  heroSecondaryButtonText: string;
  heroSecondaryButtonLink: string;
  heroPlatformsText: string;
  heroMockupImage: MediaAsset | null;
  heroBackgroundImage: MediaAsset | null;
  whyTitle: string;
  whyContent: RichTextValue;
  capabilitiesTitle: string;
  capabilitiesItems: CapabilityItem[];
  storyTitle: string;
  storyContent: RichTextValue;
  ctaTitle: string;
  ctaDescription: string;
  ctaPrimaryButtonText: string;
  ctaPrimaryButtonLink: string;
  seoTitle: string;
  seoDescription: string;
  seoImage: MediaAsset | null;
};

export type FeatureScene = {
  title: string;
  subtitle: string;
  exampleText: string;
  description: string;
  image: MediaAsset | null;
  sort: number;
  isActive: boolean;
};

export type PlatformLink = {
  platformName: PlatformName;
  title: string;
  description: string;
  downloadUrl: string | null;
  buttonText: string;
  icon: MediaAsset | null;
  sort: number;
  isActive: boolean;
};

export type FeaturesPageData = {
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

export type FeatureDetailItem = {
  title: string;
  subtitle: string;
  description: RichTextValue;
  image: MediaAsset | null;
  sort: number;
  slug: string;
  isActive: boolean;
};

export type AboutPageData = {
  title: string;
  intro: RichTextValue;
  beliefTitle: string;
  beliefContent: RichTextValue;
  visionTitle: string;
  visionContent: RichTextValue;
  seoTitle: string;
  seoDescription: string;
};

export type DownloadPageData = {
  title: string;
  description: string;
  versionTitle: string;
  versionDescription: string;
  seoTitle: string;
  seoDescription: string;
};

export type ReleaseStatus =
  | "development"
  | "submitted"
  | "released"
  | "archived"
  | "beta";

export type ReleaseNote = {
  version: string;
  platforms: PlatformName[];
  releaseDate: string | null;
  summary: string;
  content: RichTextValue;
  isLatest: boolean;
  status: ReleaseStatus;
  sort: number;
};

export type FaqItem = {
  question: string;
  answer: RichTextValue;
  sort?: number;
  isActive?: boolean;
};

export type PrivacyPageData = {
  title: string;
  updatedAtText: string;
  content: RichTextValue;
  seoTitle: string;
  seoDescription: string;
};
