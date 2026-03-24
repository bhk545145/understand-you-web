export type SiteConfig = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  platforms: string[];
};

export type SiteShell = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
};

export type HomepageMetric = {
  label: string;
  value: string;
};

export type HomepageValue = {
  eyebrow: string;
  title: string;
  description: string;
};

export type HomepageHeroCard = {
  title: string;
  body: string;
};

export type HomepageStory = {
  title: string;
  body: string;
  quote: string;
};

export type HomepageFinalCta = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type HomepageData = {
  heroTitle: string;
  heroSubtitle: string;
  heroVisualUrl: string;
  heroVisualAlt: string;
  heroCards: HomepageHeroCard[];
  metrics: HomepageMetric[];
  values: HomepageValue[];
  story: HomepageStory;
  finalCta: HomepageFinalCta;
};

export type FeatureItem = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
  highlight: string;
};

export type JourneyItem = {
  year: string;
  title: string;
  body: string;
};

export type PrincipleItem = {
  title: string;
  body: string;
};

export type AboutPageData = {
  title: string;
  intro: string;
  story: string[];
  journey: JourneyItem[];
  principles: PrincipleItem[];
};

export type DownloadOption = {
  platform: string;
  audience: string;
  detail: string;
  href: string | null;
  status: string;
};

export type DownloadPageData = {
  title: string;
  intro: string;
  options: DownloadOption[];
  note: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PrivacySection = {
  title: string;
  body: string[];
};

export type PrivacyPageData = {
  title: string;
  intro: string;
  sections: PrivacySection[];
};
