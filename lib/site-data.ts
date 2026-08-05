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
  ReleaseStatus,
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
    title: "今日可花与余额复盘",
    subtitle: "现金流事实",
    description:
      "结合可用余额、发薪周期、必要消费和已确认预留，在本地计算今天可以安心花多少；更新余额后可解释差额且不会重复扣款。",
    image: null,
    sort: 3,
    slug: "safe-spend-and-reconciliation",
    isActive: true,
  },
  {
    title: "待办与随笔",
    subtitle: "记录",
    description:
      "提醒、待办、想法和感受，都在同一个入口记下。",
    image: null,
    sort: 4,
    slug: "notes-and-todos",
    isActive: true,
  },
  {
    title: "日历与回顾",
    subtitle: "回看",
    description:
      "通过日历视图查看支出、待办和随笔的时间线。",
    image: null,
    sort: 5,
    slug: "calendar-review",
    isActive: true,
  },
  {
    title: "数据与隐私",
    subtitle: "安全",
    description:
      "核心记录优先围绕本地数据展开。调用 AI 时会明确说明处理边界。",
    image: null,
    sort: 6,
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
    version: "2.0.1",
    platforms: ["iOS"],
    releaseDate: "2026-08-05",
    summary:
      "财务感知升级正在开发：用“今日可花—余额复盘—行动反馈”建立更清楚的日常现金流闭环。",
    content:
      "<h3>开发进展</h3><ul><li>新增“今日可花”、安全余额、缺口、风险状态和计算依据，核心计算在设备本地完成</li><li>余额更新后可以解释差额，补充的事实流水不会重复改变余额</li><li>30 天预测、自动复盘、Pro 和跨域洞察已完成基础能力，但会通过开关逐步开放</li><li>Widget 协议升级并强化隐私模式，不向小组件导出真实金额</li><li>聊天历史改为按日期加载，长时间使用后仍能保持首页响应</li></ul><p>当前版本尚未提交 TestFlight，以上内容属于开发进展，不代表已经正式发布。</p>",
    status: "development",
    sort: 201,
    isLatest: true,
  },
  {
    version: "1.1.6",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-07-10",
    summary: "AI 财务分析、多账本、预算体系和流水检索的一次系统升级。",
    content:
      "<h3>主要更新</h3><ul><li>新增带证据校验和安全过滤的 AI 财务分析</li><li>交易、预算、财务目标和账户首页按账本隔离</li><li>预算支持月度、年度和自定义周期</li><li>财务报表、净资产走势和账单日历全面升级</li><li>新增跨全部时间的流水快速搜索</li></ul><p>该版本已提交审核，最终上架状态仍以应用商店为准。</p>",
    status: "submitted",
    sort: 116,
    isLatest: false,
  },
  {
    version: "1.1.5",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-06-12",
    summary: "锁屏小组件、iCloud 自动备份和聊天首页体验重塑。",
    content:
      "<h3>主要更新</h3><ul><li>新增锁屏与灵动岛财务小组件</li><li>新增 iCloud 自动备份、保留策略和密钥保护</li><li>聊天首页增加快捷操作栏与首页偏好</li><li>账户按类型分组，并支持快速更新余额</li><li>周期记账通知和八个维度的财务报表得到增强</li></ul><p>该版本已提交审核，最终上架状态仍以应用商店为准。</p>",
    status: "submitted",
    sort: 115,
    isLatest: false,
  },
  {
    version: "1.1.3",
    platforms: ["iOS", "macOS"],
    releaseDate: null,
    summary: "桌面小组件、记账天数分享和多通道遥测体系升级。",
    content:
      "<h3>主要更新</h3><ul><li>新增财务概览和快捷记账桌面小组件</li><li>新增记账天数统计与分享海报</li><li>建立自有分析网关、友盟和 Aptabase 多通道遥测能力</li><li>完善小组件深链和数据刷新</li></ul>",
    status: "archived",
    sort: 113,
    isLatest: false,
  },
  {
    version: "1.1.2",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-05-05",
    summary: "智能提醒、预算建议、周期记账和报表目录进一步完善。",
    content:
      "<h3>主要更新</h3><ul><li>增加智能提醒与预算建议</li><li>补充周期记账能力</li><li>完善财务报表目录与主要入口</li></ul>",
    status: "archived",
    sort: 112,
    isLatest: false,
  },
  {
    version: "1.1.1",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-04-30",
    summary: "围绕数据可信度，补齐加密备份与安全导出。",
    content:
      "<h3>主要更新</h3><ul><li>新增 AES-256-GCM 加密备份与恢复</li><li>支持 CSV 和 XLSX 安全导出</li><li>备份元信息记录版本和时间，便于恢复前确认</li></ul>",
    status: "archived",
    sort: 111,
    isLatest: false,
  },
  {
    version: "1.1.0",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-04-28",
    summary: "国际化、分类图标和财务报表重构组成财务主线大版本。",
    content:
      "<h3>主要更新</h3><ul><li>完整接入中文与英文国际化</li><li>建立内置分类图标和图标选择能力</li><li>重构财务报表图表与分析面板</li><li>优化日历时间线分页和性能</li></ul>",
    status: "archived",
    sort: 110,
    isLatest: false,
  },
  {
    version: "1.0.6",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-04-15",
    summary: "卡片类型能力升级，并增强图片记账的识别与兜底路径。",
    content:
      "<h3>主要更新</h3><ul><li>完善基础记录、类型元数据和字段定义能力</li><li>记录详情和编辑链路支持图片附件</li><li>图片输入增加 AI 直识与 OCR 兜底</li><li>补齐类型切换、日历和时间线展示</li></ul><p>该版本已提交审核，最终上架状态仍以应用商店为准。</p>",
    status: "submitted",
    sort: 106,
    isLatest: false,
  },
  {
    version: "1.0.5",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-04-08",
    summary:
      "基础记录打底版——任何输入都能被接住、保存、回看、编辑。",
    content:
      "<h3>新增内容</h3><ul><li>新增「基础记录」写入能力，承接暂时不适合直接归类的输入</li><li>聊天新增基础记录写入路径，支持预览确认后提交</li><li>新增基础记录详情页，支持查看与编辑标题、内容、时间、地点</li><li>基础记录接入统一时间线，支持日历查看、顺延和删除</li><li>数据备份导出新增 baseRecords 和 recordTypeDefinitions，bundle schema 升级到 2</li></ul>",
    status: "released",
    sort: 105,
    isLatest: false,
  },
  {
    version: "1.0.4",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-03-30",
    summary: "语音、图片和快捷指令输入，让一句话记账有了更多入口。",
    content:
      "<h3>主要更新</h3><ul><li>新增语音转文字输入</li><li>支持小票、支付截图和信用卡账单图片识别</li><li>聊天消息和操作记录增加输入来源标记</li><li>iOS 快捷指令可通过深链唤起记账</li></ul>",
    status: "archived",
    sort: 104,
    isLatest: false,
  },
  {
    version: "0.1.0 Beta",
    platforms: ["iOS", "Android", "macOS"],
    releaseDate: "2026-03-28",
    summary: "首个测试版本。",
    content:
      "完成核心记录功能、AI 识别和三端基础适配。",
    status: "beta",
    sort: 1,
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
  updatedAtText: "2026 年 8 月 5 日更新",
  content:
    "<h2>数据存储</h2><p>核心记录优先围绕本地数据展开。账户余额、收支流水、今日可花、余额复盘、预测和自动复盘默认在设备本地存储与计算。</p><h2>现金流协议</h2><p>计算公式、风险阈值和预留去重协议随 App 版本发布，不由远端内容系统动态修改。</p><h2>Widget 与隐私模式</h2><p>启用桌面 Widget 时，App 会向系统扩展提供展示所需的汇总数据。开启隐私隐藏后，不会向 Widget 导出真实金额。</p><h2>动态配置</h2><p>App 可能读取远端功能开关，用于控制功能是否显示或分阶段开放；这些开关不包含你的账户、流水或余额数据。</p><h2>AI 请求</h2><p>今日可花、余额复盘和 30 天预测不依赖 AI。只有在你主动使用需要模型处理的能力并完成相应授权时，相关内容才会进入所选模型链路。</p><h2>同步</h2><p>当前财务记录仍以设备本地数据为主。本版本不提供账目云同步、家庭预算或多人共享账本。</p>",
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

const releaseStatuses: ReleaseStatus[] = [
  "development",
  "submitted",
  "released",
  "archived",
  "beta",
];

function isReleaseStatus(value: unknown): value is ReleaseStatus {
  return releaseStatuses.includes(value as ReleaseStatus);
}

function versionSortValue(version: string) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)/);
  if (!match) {
    return 0;
  }

  return Number(match[1]) * 10000 + Number(match[2]) * 100 + Number(match[3]);
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
    "sort[0]=isLatest:desc&sort[1]=releaseDate:desc&pagination[pageSize]=30",
  );
  const fallbackByVersion = new Map(
    releaseNoteFallback.map((note) => [note.version, note]),
  );
  const notesByVersion = new Map<string, ReleaseNote>(fallbackByVersion);

  for (const item of remote ?? []) {
    const version = item.version?.trim();
    if (!version) {
      continue;
    }

    const fallback = fallbackByVersion.get(version);
    const status = isReleaseStatus(item.status)
      ? item.status
      : fallback?.status ?? "archived";
    notesByVersion.set(version, {
      version,
      platforms: item.platforms?.length
        ? item.platforms
        : fallback?.platforms ?? ["iOS"],
      releaseDate:
        item.releaseDate === undefined
          ? fallback?.releaseDate ?? null
          : item.releaseDate,
      summary: item.summary ?? fallback?.summary ?? "",
      content: item.content ?? fallback?.content ?? "",
      isLatest: false,
      status,
      sort: item.sort ?? fallback?.sort ?? versionSortValue(version),
    });
  }

  return [...notesByVersion.values()]
    .sort((left, right) => {
      const sortOrder = right.sort - left.sort;
      if (sortOrder !== 0) {
        return sortOrder;
      }

      return (right.releaseDate ?? "").localeCompare(left.releaseDate ?? "");
    })
    .map((note, index) => ({
      ...note,
      isLatest: index === 0,
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
