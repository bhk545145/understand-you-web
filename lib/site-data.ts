import { fetchStrapiCollection, fetchStrapiSingle } from "@/lib/strapi";
import type {
  AboutPageData,
  DownloadPageData,
  FaqItem,
  FeatureDetailItem,
  FeatureScene,
  FeaturesPageData,
  HomepageData,
  PlatformLink,
  PrivacyPageData,
  ReleaseNote,
  SiteConfig,
  SiteShell,
} from "@/types/site";

const siteConfigFallback: SiteConfig = {
  siteName: "懂你",
  siteTagline: "一句话记录生活的 AI 助手",
  siteDescription:
    "记账、待办、随笔和日历，在同一个入口完成。支持 iOS、Android、macOS。",
  logo: null,
  favicon: null,
  defaultSeoTitle: "懂你 | 一句话记录生活的 AI 助手",
  defaultSeoDescription:
    "记账、待办、随笔和日历，在同一个入口完成。本地优先，支持 iOS、Android、macOS。",
  footerCopyright: "© 2026 懂你. All rights reserved.",
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/bhk545145/understand-you-web",
    },
  ],
  primaryDownloadText: "立即下载",
  primaryDownloadLink: "/download",
};

const homepageFallback: HomepageData = {
  heroTitle: "一句话，记下今天",
  heroSubtitle: "记账、待办、随笔和日历，在同一个入口完成。",
  heroDescription:
    "本地优先。支持 iOS、Android、macOS。",
  heroPrimaryButtonText: "立即下载",
  heroPrimaryButtonLink: "/download",
  heroSecondaryButtonText: "查看示例",
  heroSecondaryButtonLink: "#how-it-works",
  heroPlatformsText: "",
  heroMockupImage: null,
  heroBackgroundImage: null,
  whyTitle: "",
  whyContent: "",
  capabilitiesTitle: "不只是输入更快",
  capabilitiesItems: [
    {
      title: "同一入口",
      description: "支出、待办、随笔和日历，不再分散在不同工具里。",
      iconName: "spark",
    },
    {
      title: "本地优先",
      description: "核心记录围绕本地数据展开。",
      iconName: "shield",
    },
    {
      title: "多端可用",
      description: "手机上快速记录，桌面上整理回顾。",
      iconName: "devices",
    },
  ],
  storyTitle: "",
  storyContent: "",
  ctaTitle: "开始记录",
  ctaDescription: "记账、待办、随笔，一个入口完成。",
  ctaPrimaryButtonText: "下载懂你",
  ctaPrimaryButtonLink: "/download",
  seoTitle: "懂你 | 一句话记录生活的 AI 助手",
  seoDescription:
    "记账、待办、随笔和日历，在同一个入口完成。本地优先，支持 iOS、Android、macOS。",
  seoImage: null,
};

const featureSceneFallback: FeatureScene[] = [
  {
    title: "记一笔支出",
    subtitle: "自动识别金额、时间和分类",
    exampleText: "今天中午吃饭花了 38 元",
    description:
      "说一句话，系统识别金额、时间、分类，直接记到支出表里。",
    image: null,
    sort: 1,
    isActive: true,
  },
  {
    title: "创建一条提醒",
    subtitle: "时间语义直接转成待办",
    exampleText: "明天下午提醒我给妈妈打电话",
    description:
      "系统识别时间和动作，自动创建一条带提醒的待办。",
    image: null,
    sort: 2,
    isActive: true,
  },
  {
    title: "留一条随笔",
    subtitle: "情绪和想法也值得记下来",
    exampleText: "今天有点累，但事情终于推进了",
    description:
      "不只是支出和任务，感受和想法也可以记在同一个地方。",
    image: null,
    sort: 3,
    isActive: true,
  },
];

const platformLinkFallback: PlatformLink[] = [
  {
    platformName: "iOS",
    title: "iPhone / iPad",
    description: "随手记录，支持 Siri 快速唤起。",
    downloadUrl: "/download#ios",
    buttonText: "下载 iOS 版",
    icon: null,
    sort: 1,
    isActive: true,
  },
  {
    platformName: "Android",
    title: "Android",
    description: "支持桌面快捷方式，一触即达。",
    downloadUrl: "/download#android",
    buttonText: "下载 Android 版",
    icon: null,
    sort: 2,
    isActive: true,
  },
  {
    platformName: "macOS",
    title: "macOS",
    description: "适合整理、回顾与长期使用。",
    downloadUrl: "/download#macos",
    buttonText: "下载 macOS 版",
    icon: null,
    sort: 3,
    isActive: true,
  },
];

const featuresPageFallback: FeaturesPageData = {
  title: "功能一览",
  description:
    "懂你把记账、待办、随笔和日历合并到一个入口。你只需要说一句话，剩下的交给系统处理。",
  seoTitle: "功能 | 懂你",
  seoDescription: "了解懂你的核心能力：AI 识别、支出记录、待办随笔、快捷入口与数据隐私。",
};

const featureDetailFallback: FeatureDetailItem[] = [
  {
    title: "说一句话，完成记录",
    subtitle: "AI 识别",
    description:
      "输入一句话，系统自动识别金额、时间、分类和动作类型，直接生成对应记录。",
    image: null,
    sort: 1,
    slug: "ai-recognition",
    isActive: true,
  },
  {
    title: "支出记录",
    subtitle: "财务",
    description:
      "记录每一笔支出和收入，支持分类、账户和预算管理。",
    image: null,
    sort: 2,
    slug: "finance-records",
    isActive: true,
  },
  {
    title: "待办与随笔",
    subtitle: "记录",
    description:
      "提醒、待办、想法和感受，都在同一个入口记下。",
    image: null,
    sort: 3,
    slug: "notes-and-todos",
    isActive: true,
  },
  {
    title: "日历与回顾",
    subtitle: "回看",
    description:
      "通过日历视图查看支出、待办和随笔的时间线。",
    image: null,
    sort: 4,
    slug: "calendar-review",
    isActive: true,
  },
  {
    title: "数据与隐私",
    subtitle: "安全",
    description:
      "核心记录优先围绕本地数据展开。调用 AI 时会明确说明处理边界。",
    image: null,
    sort: 5,
    slug: "data-and-privacy",
    isActive: true,
  },
];

const aboutFallback: AboutPageData = {
  title: "为什么做懂你",
  intro:
    "记账、待办、随笔、日历——这些事情本来不该散落在四五个 App 里。懂你把它们合并到一个入口，你只需要说一句话。",
  beliefTitle: "先表达，再整理",
  beliefContent:
    "人不是先想\u201C我要打开哪个功能\u201D，而是先想\u201C我现在要记什么\u201D。产品应该顺着人的表达方式，而不是反过来。",
  visionTitle: "一个够用的生活记录工具",
  visionContent:
    "懂你不追求功能大而全，而是把记支出、记待办、记想法这件事做短、做准。",
  seoTitle: "关于 | 懂你",
  seoDescription: "了解懂你的产品背景和设计思路。",
};

const downloadFallback: DownloadPageData = {
  title: "下载懂你",
  description: "选择你的平台，开始使用。",
  versionTitle: "当前版本",
  versionDescription: "",
  seoTitle: "下载 | 懂你",
  seoDescription: "下载懂你 iOS、Android、macOS 版本。",
};

const releaseNoteFallback: ReleaseNote[] = [
  {
    version: "1.0.5",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-04-08",
    summary:
      "基础记录打底版——任何输入都能被接住、保存、回看、编辑。",
    content:
      "<h3>新增内容</h3><ul><li>新增「基础记录」写入能力，承接暂时不适合直接归类的输入</li><li>聊天新增基础记录写入路径，支持预览确认后提交</li><li>新增基础记录详情页，支持查看与编辑标题、内容、时间、地点</li><li>基础记录接入统一时间线，支持日历查看、顺延和删除</li><li>数据备份导出新增 baseRecords 和 recordTypeDefinitions，bundle schema 升级到 2</li></ul>",
    isLatest: true,
  },
  {
    version: "0.1.0 Beta",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-03-28",
    summary: "首个测试版本。",
    content:
      "完成核心记录功能、AI 识别和三端基础适配。",
    isLatest: false,
  },
];

const faqFallback: FaqItem[] = [
  {
    question: "懂你是什么？",
    answer: "一个把记账、待办、随笔和日历合并到同一个入口的 AI 助手。你只需要说一句话，系统负责识别和整理。",
    sort: 1,
    isActive: true,
  },
  {
    question: "它和普通记账/待办 App 有什么区别？",
    answer: "普通 App 要求你先打开对应的功能页。懂你不用——你先说一句话，系统自动判断这是支出、待办还是随笔，再生成对应记录。",
    sort: 2,
    isActive: true,
  },
  {
    question: "支持哪些平台？",
    answer: "目前支持 iOS、Android 和 macOS。",
    sort: 3,
    isActive: true,
  },
  {
    question: "数据存在哪里？",
    answer: "核心记录优先存储在本地。调用 AI 识别时，相关内容会在模型链路内处理。详见隐私政策。",
    sort: 4,
    isActive: true,
  },
  {
    question: "支持哪些快捷入口？",
    answer: "iOS 支持 Siri 语音唤起，Android 支持桌面快捷方式，macOS 支持自动化脚本调用。",
    sort: 5,
    isActive: true,
  },
];

const privacyFallback: PrivacyPageData = {
  title: "隐私政策",
  updatedAtText: "2026 年 3 月 28 日更新",
  content:
    "<h2>数据存储</h2><p>核心记录优先围绕本地数据展开。你的支出、待办和随笔默认存储在本机，不需要先上传到服务器才能使用。</p><h2>AI 请求</h2><p>当产品需要调用 AI 识别一句话中的时间、金额、分类等信息时，相关内容会在模型链路内被处理。模型不会存储你的原始输入。</p><h2>同步</h2><p>如果后续开放账号同步功能，我们会在此页面同步更新说明，确保政策文本和产品能力保持一致。</p>",
  seoTitle: "隐私政策 | 懂你",
  seoDescription: "了解懂你的数据处理方式和隐私边界。",
};

function mergeWithFallback<T extends object>(fallback: T, remote: Partial<T> | null): T {
  if (!remote) {
    return fallback;
  }

  return {
    ...fallback,
    ...remote,
  };
}

function preferArray<T>(remote: T[] | null | undefined, fallback: T[]) {
  return remote?.length ? remote : fallback;
}

export async function getSiteConfig(): Promise<SiteConfig> {
  const remote = await fetchStrapiSingle<Partial<SiteConfig>>("site-config", "populate=*");

  return {
    ...siteConfigFallback,
    ...remote,
    socialLinks: preferArray(remote?.socialLinks, siteConfigFallback.socialLinks),
  };
}

export async function getHomepageData(): Promise<HomepageData> {
  const remote = await fetchStrapiSingle<Partial<HomepageData>>("homepage", "populate=*");

  return {
    ...homepageFallback,
    ...remote,
    capabilitiesItems: preferArray(
      remote?.capabilitiesItems,
      homepageFallback.capabilitiesItems,
    ),
  };
}

export async function getFeatureScenes(): Promise<FeatureScene[]> {
  const remote = await fetchStrapiCollection<Partial<FeatureScene>>(
    "feature-scenes",
    "filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=6&populate=*",
  );

  if (!remote?.length) {
    return featureSceneFallback;
  }

  return remote.map((item, index) => ({
    title: item.title ?? featureSceneFallback[index]?.title ?? "",
    subtitle: item.subtitle ?? featureSceneFallback[index]?.subtitle ?? "",
    exampleText: item.exampleText ?? featureSceneFallback[index]?.exampleText ?? "",
    description: item.description ?? featureSceneFallback[index]?.description ?? "",
    image: item.image ?? featureSceneFallback[index]?.image ?? null,
    sort: item.sort ?? featureSceneFallback[index]?.sort ?? index + 1,
    isActive: item.isActive ?? true,
  }));
}

export async function getPlatformLinks(): Promise<PlatformLink[]> {
  const remote = await fetchStrapiCollection<Partial<PlatformLink>>(
    "platform-links",
    "filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=6&populate=*",
  );

  if (!remote?.length) {
    return platformLinkFallback;
  }

  return remote.map((item, index) => ({
    platformName:
      item.platformName ?? platformLinkFallback[index]?.platformName ?? "iOS",
    title: item.title ?? platformLinkFallback[index]?.title ?? "",
    description: item.description ?? platformLinkFallback[index]?.description ?? "",
    downloadUrl: item.downloadUrl ?? platformLinkFallback[index]?.downloadUrl ?? null,
    buttonText: item.buttonText ?? platformLinkFallback[index]?.buttonText ?? "立即下载",
    icon: item.icon ?? platformLinkFallback[index]?.icon ?? null,
    sort: item.sort ?? platformLinkFallback[index]?.sort ?? index + 1,
    isActive: item.isActive ?? true,
  }));
}

export async function getFeaturesPageData(): Promise<FeaturesPageData> {
  const remote = await fetchStrapiSingle<Partial<FeaturesPageData>>(
    "features-page",
    "populate=*",
  );

  return mergeWithFallback(featuresPageFallback, remote);
}

export async function getFeatureDetails(): Promise<FeatureDetailItem[]> {
  const remote = await fetchStrapiCollection<Partial<FeatureDetailItem>>(
    "feature-details",
    "filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=12&populate=*",
  );

  if (!remote?.length) {
    return featureDetailFallback;
  }

  return remote.map((item, index) => ({
    title: item.title ?? featureDetailFallback[index]?.title ?? "",
    subtitle: item.subtitle ?? featureDetailFallback[index]?.subtitle ?? "",
    description: item.description ?? featureDetailFallback[index]?.description ?? "",
    image: item.image ?? featureDetailFallback[index]?.image ?? null,
    sort: item.sort ?? featureDetailFallback[index]?.sort ?? index + 1,
    slug: item.slug ?? featureDetailFallback[index]?.slug ?? `feature-${index + 1}`,
    isActive: item.isActive ?? true,
  }));
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const remote = await fetchStrapiSingle<Partial<AboutPageData>>("about-page", "populate=*");
  return mergeWithFallback(aboutFallback, remote);
}

export async function getDownloadPageData(): Promise<DownloadPageData> {
  const remote = await fetchStrapiSingle<Partial<DownloadPageData>>(
    "download-page",
    "populate=*",
  );

  return mergeWithFallback(downloadFallback, remote);
}

export async function getReleaseNotes(): Promise<ReleaseNote[]> {
  const remote = await fetchStrapiCollection<Partial<ReleaseNote>>(
    "release-notes",
    "sort[0]=isLatest:desc&sort[1]=releaseDate:desc&pagination[pageSize]=12",
  );

  if (!remote?.length) {
    return releaseNoteFallback;
  }

  return remote.map((item, index) => ({
    version: item.version ?? releaseNoteFallback[index]?.version ?? "",
    platforms: item.platforms ?? releaseNoteFallback[index]?.platforms ?? ["iOS"],
    releaseDate: item.releaseDate ?? releaseNoteFallback[index]?.releaseDate ?? "",
    summary: item.summary ?? releaseNoteFallback[index]?.summary ?? "",
    content: item.content ?? releaseNoteFallback[index]?.content ?? "",
    isLatest: item.isLatest ?? index === 0,
  }));
}

export async function getFaqItems(): Promise<FaqItem[]> {
  const remote = await fetchStrapiCollection<Partial<FaqItem>>(
    "faqs",
    "filters[isActive][$eq]=true&sort[0]=sort:asc&pagination[pageSize]=20",
  );

  if (!remote?.length) {
    return faqFallback;
  }

  return remote.map((item, index) => ({
    question: item.question ?? faqFallback[index]?.question ?? "",
    answer: item.answer ?? faqFallback[index]?.answer ?? "",
    sort: item.sort ?? faqFallback[index]?.sort ?? index + 1,
    isActive: item.isActive ?? true,
  }));
}

export async function getPrivacyPageData(): Promise<PrivacyPageData> {
  const remote = await fetchStrapiSingle<Partial<PrivacyPageData>>(
    "privacy-page",
    "populate=*",
  );

  return mergeWithFallback(privacyFallback, remote);
}

export async function getSiteShell(): Promise<SiteShell> {
  const siteConfig = await getSiteConfig();

  return {
    siteName: siteConfig.siteName,
    siteTagline: siteConfig.siteTagline,
    siteDescription: siteConfig.siteDescription,
    footerCopyright: siteConfig.footerCopyright,
    socialLinks: siteConfig.socialLinks,
    primaryDownloadText: siteConfig.primaryDownloadText,
    primaryDownloadLink: siteConfig.primaryDownloadLink,
  };
}
