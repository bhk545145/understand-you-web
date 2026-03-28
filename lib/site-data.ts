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
  siteTagline: "把生活记录，变成一场自然对话",
  siteDescription:
    "懂你是一个把生活记录变成自然对话的个人助手，把记账、待办、随笔、日历与 AI 助手融合在一个入口中。",
  logo: null,
  favicon: null,
  defaultSeoTitle: "懂你 | 把生活记录，变成一场自然对话",
  defaultSeoDescription:
    "记账、待办、随笔、日历与 AI 助手融合在一个入口中。你不需要学习系统，系统先学会理解你。",
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
  heroTitle: "懂你",
  heroSubtitle: "把生活记录，变成一场自然对话",
  heroDescription:
    "记账、待办、随笔、日历与 AI 助手融合在一个入口中。你不需要学习系统，系统先学会理解你。",
  heroPrimaryButtonText: "立即下载",
  heroPrimaryButtonLink: "/download",
  heroSecondaryButtonText: "了解更多",
  heroSecondaryButtonLink: "#why",
  heroPlatformsText: "支持 iOS · Android · macOS",
  heroMockupImage: null,
  heroBackgroundImage: null,
  whyTitle: "记录生活，本来不该这么复杂。",
  whyContent:
    "我们习惯在不同应用之间来回切换。记账用一个，待办用一个，写下情绪又是另一个。\n\n但生活本身不是割裂的，表达也不应该被拆碎。“懂你”想做的，是把这些重新合并。你只需要自然地说一句话，剩下的交给系统理解。",
  capabilitiesTitle: "产品如何理解你",
  capabilitiesItems: [
    {
      title: "自然语言驱动",
      description: "你先表达，系统负责理解与整理。",
      iconName: "spark",
    },
    {
      title: "一个入口，管理多种记录",
      description: "财务、待办、随笔与日历，不再分散在不同工具里。",
      iconName: "orbit",
    },
    {
      title: "本地优先，更安心",
      description: "核心体验围绕本地记录展开，让数据更可控。",
      iconName: "shield",
    },
    {
      title: "多端一致体验",
      description: "无论在手机上快速记录，还是在桌面上整理生活，体验都保持连贯。",
      iconName: "devices",
    },
  ],
  storyTitle: "为什么叫“懂你”",
  storyContent:
    "因为我们相信，好的产品不只是响应指令。它应该先理解你说话的方式，理解你记录生活的习惯，也理解你不想被复杂流程打断的心情。\n\n“懂你”不是一个更复杂的工具，而是一个更自然的入口。\n\n我们希望它陪你记录支出、安排待办、写下感受，也陪你慢慢整理自己的节奏。",
  ctaTitle: "开始使用懂你",
  ctaDescription: "让记录回到自然的样子。",
  ctaPrimaryButtonText: "下载懂你",
  ctaPrimaryButtonLink: "/download",
  seoTitle: "懂你 | 把生活记录，变成一场自然对话",
  seoDescription:
    "懂你是一个把生活记录变成自然对话的个人助手，用更自然的方式承接记账、待办、随笔与日历。",
  seoImage: null,
};

const featureSceneFallback: FeatureScene[] = [
  {
    title: "一句话，记下一笔生活开支",
    subtitle: "自动识别金额、时间与消费语境",
    exampleText: "今天中午吃饭花了 38 元",
    description:
      "不必打开复杂表单，不必手动切换分类。你像平常一样说出这句话，懂你会帮你完成记录。",
    image: null,
    sort: 1,
    isActive: true,
  },
  {
    title: "把要紧的事，顺手交给未来的自己",
    subtitle: "把提醒和时间语义直接整理成待办",
    exampleText: "明天下午提醒我给妈妈打电话",
    description: "当待办像聊天一样自然，它才会真正进入你的生活节奏。",
    image: null,
    sort: 2,
    isActive: true,
  },
  {
    title: "有些记录，不只是为了效率",
    subtitle: "情绪、想法与片刻感受也值得被留下",
    exampleText: "今天有点累，但事情终于推进了",
    description:
      "除了支出和任务，生活也由情绪、想法和片刻感受构成。懂你希望这些都能被温柔地留下来。",
    image: null,
    sort: 3,
    isActive: true,
  },
];

const platformLinkFallback: PlatformLink[] = [
  {
    platformName: "iOS",
    title: "随时记录",
    description: "适合随手记录与移动场景使用。",
    downloadUrl: "/download#ios",
    buttonText: "下载 iOS",
    icon: null,
    sort: 1,
    isActive: true,
  },
  {
    platformName: "Android",
    title: "灵活管理",
    description: "适合灵活管理与快速记录。",
    downloadUrl: "/download#android",
    buttonText: "下载 Android",
    icon: null,
    sort: 2,
    isActive: true,
  },
  {
    platformName: "macOS",
    title: "整理与回顾",
    description: "更适合整理、回顾与长期使用。",
    downloadUrl: "/download#macos",
    buttonText: "下载 macOS",
    icon: null,
    sort: 3,
    isActive: true,
  },
];

const featuresPageFallback: FeaturesPageData = {
  title: "用更自然的方式，管理你的生活记录",
  description:
    "懂你不是把更多功能堆在一起，而是把原本分散的记录行为重新组织成一个更自然的入口。",
  seoTitle: "功能 | 懂你",
  seoDescription: "进一步了解懂你的产品能力，包括 AI 对话、财务记录、待办随笔、节奏回看与数据隐私。",
};

const featureDetailFallback: FeatureDetailItem[] = [
  {
    title: "先说出来，再交给系统理解",
    subtitle: "AI 对话助手",
    description:
      "通过自然语言完成记账、待办、查询与记录，减少手动操作。",
    image: null,
    sort: 1,
    slug: "ai-conversation",
    isActive: true,
  },
  {
    title: "把每一笔收支都留在更清晰的轨迹里",
    subtitle: "财务记录",
    description:
      "支持记录支出、收入、账户、预算和更多财务信息。",
    image: null,
    sort: 2,
    slug: "finance-records",
    isActive: true,
  },
  {
    title: "不只是任务，也包括你的片刻想法",
    subtitle: "待办与随笔",
    description:
      "待办和随笔都可以像聊天一样轻松记下。",
    image: null,
    sort: 3,
    slug: "notes-and-todos",
    isActive: true,
  },
  {
    title: "从记录，到回看自己的生活节奏",
    subtitle: "日历与节奏",
    description:
      "通过日历和汇总视图，更清楚地看到最近的状态与变化。",
    image: null,
    sort: 4,
    slug: "calendar-and-rhythm",
    isActive: true,
  },
  {
    title: "更可控，也更安心",
    subtitle: "数据与隐私",
    description:
      "围绕本地优先设计核心体验，让记录更稳定，使用更安心。",
    image: null,
    sort: 5,
    slug: "data-and-privacy",
    isActive: true,
  },
];

const aboutFallback: AboutPageData = {
  title: "懂你，从一个简单的问题开始",
  intro:
    "为什么记录生活这件事，要被拆成这么多步骤？为什么记账、待办、随笔、日历，要散落在不同的应用中？我们想把这些重新变简单。",
  beliefTitle: "表达应该先于操作",
  beliefContent:
    "人不是先想“我要打开哪个功能”，而是先想“我现在想记下什么”。产品设计应该顺着人的表达方式，而不是反过来要求人适应系统。",
  visionTitle: "做一个真正陪伴你的生活助手",
  visionContent:
    "我们希望“懂你”不仅是一个记录工具，更是一个在你每天生活里安静工作、持续理解你的助手。",
  seoTitle: "关于 | 懂你",
  seoDescription: "了解懂你的项目缘起、产品信念和长期愿景。",
};

const downloadFallback: DownloadPageData = {
  title: "下载懂你",
  description: "选择你正在使用的平台，开始体验更自然的生活记录方式。",
  versionTitle: "当前版本",
  versionDescription: "展示版本号、更新日期、更新摘要，并提供更新说明入口。",
  seoTitle: "下载 | 懂你",
  seoDescription: "查看懂你的三端下载入口、平台说明和版本信息。",
};

const releaseNoteFallback: ReleaseNote[] = [
  {
    version: "0.1.0 Beta",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-03-28",
    summary: "官网新版内容结构与多端下载承接页已同步上线。",
    content:
      "首个版本重点完成官网重设计、Strapi 内容模型升级，以及首页叙事结构与下载页版本信息的统一承接。",
    isLatest: true,
  },
];

const faqFallback: FaqItem[] = [
  {
    question: "懂你是什么？",
    answer: "懂你是一个把生活记录变成自然对话的个人助手。",
    sort: 1,
    isActive: true,
  },
  {
    question: "它和传统记账或待办工具有什么不同？",
    answer:
      "懂你不要求你先进入某个功能页，而是先让你自然表达，再由系统去理解和整理。",
    sort: 2,
    isActive: true,
  },
  {
    question: "现在支持哪些平台？",
    answer: "目前官网承接 iOS、Android 和 macOS 三端下载与说明。",
    sort: 3,
    isActive: true,
  },
  {
    question: "为什么要接入 Strapi？",
    answer:
      "因为首页叙事、下载入口、版本说明、FAQ 和隐私内容都需要可持续运营，放进 CMS 后维护成本会更低。",
    sort: 4,
    isActive: true,
  },
];

const privacyFallback: PrivacyPageData = {
  title: "隐私政策",
  updatedAtText: "2026 年 3 月 28 日更新",
  content:
    "<h2>我们如何看待你的数据</h2><p>懂你围绕本地优先设计核心体验。我们希望在带来 AI 理解力的同时，也尽可能把数据的控制感留在你自己手里。</p><h2>本地优先</h2><p>核心记录体验优先围绕本地数据展开，让你在很多关键场景里不需要先依赖远端链路，才能继续使用产品。</p><h2>AI 请求边界</h2><p>当产品需要调用 AI 能力理解自然语言或生成回答时，相关内容会在对应模型链路内被处理。我们会持续完善这部分说明，让能力边界更清晰。</p><h2>同步与账号</h2><p>如果后续提供登录、同步或订阅能力，我们会同步更新官网中的隐私说明，确保政策文本和产品能力保持一致。</p>",
  seoTitle: "隐私政策 | 懂你",
  seoDescription: "查看懂你的隐私政策，了解本地优先和 AI 请求边界。",
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
    title: item.title ?? featureSceneFallback[index]?.title ?? "未命名场景",
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
    title: item.title ?? platformLinkFallback[index]?.title ?? "未命名平台",
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
    title: item.title ?? featureDetailFallback[index]?.title ?? "未命名功能",
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
    version: item.version ?? releaseNoteFallback[index]?.version ?? "未命名版本",
    platforms: item.platforms ?? releaseNoteFallback[index]?.platforms ?? ["iOS"],
    releaseDate: item.releaseDate ?? releaseNoteFallback[index]?.releaseDate ?? "2026-03-28",
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
    question: item.question ?? faqFallback[index]?.question ?? "未命名问题",
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
