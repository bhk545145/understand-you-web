import { fetchStrapiCollection, fetchStrapiSingle } from "@/lib/strapi";
import type {
  AboutPageData,
  DownloadPageData,
  FaqItem,
  FeatureItem,
  HomepageData,
  PrivacyPageData,
  SiteConfig,
} from "@/types/site";

const siteConfigFallback: SiteConfig = {
  name: "懂你",
  shortName: "Understand You",
  tagline: "AI 生活记录助手",
  description:
    "把记账、待办、随笔、预算、日历与账户管理放进一场更自然的对话。",
  primaryCta: {
    label: "查看下载",
    href: "/download",
  },
  secondaryCta: {
    label: "浏览功能",
    href: "/features",
  },
  platforms: ["iOS", "Android", "macOS"],
};

const homepageFallback: HomepageData = {
  heroTitle: "把生活记录\n变成一场自然对话",
  heroSubtitle:
    "懂你是一款以 AI 对话为入口的个人生活记录助手。记账、待办、随笔、预算、日历与账户管理，被收拢到一个更自然的入口里。",
  heroCards: [
    {
      title: "一句话就能开始",
      body: "无论是记一笔支出、加一个待办，还是写下一段心情，你都不需要在多个页面里来回切换。",
    },
    {
      title: "本地优先，更安心",
      body: "核心数据优先保存在设备本地，离线也能继续使用主要能力，在隐私与稳定之间保持平衡。",
    },
  ],
  metrics: [
    {
      label: "已支持平台",
      value: "iOS / Android / macOS",
    },
    {
      label: "交互方式",
      value: "自然语言 + 卡片反馈",
    },
    {
      label: "设计原则",
      value: "本地优先、长期可用",
    },
  ],
  values: [
    {
      eyebrow: "Natural",
      title: "像聊天一样记录",
      description:
        "不用先想清楚功能入口，也不用打开一堆表单。像平常说话一样表达，系统来理解和归档。",
    },
    {
      eyebrow: "Unified",
      title: "把分散的小事收回来",
      description:
        "记账、待办、随笔、预算与日历不再割裂。你面前只有一个入口，但背后是一整套生活系统。",
    },
    {
      eyebrow: "Reliable",
      title: "智能感之外，更要可用",
      description:
        "流式回复、多模型回退与本地优先架构共同保证体验的稳定性，不让“智能”成为不确定的代名词。",
    },
  ],
  story: {
    title: "为什么叫「懂你」",
    body:
      "我们想做的不是又一个功能清单很长的工具，而是一个先理解你表达方式，再帮你整理生活的助手。",
    quote:
      "真正好的工具，不该要求你适应系统，而该先理解你的表达。",
  },
  finalCta: {
    title: "开始把生活还给更自然的表达",
    body:
      "这版官网已经具备多页面结构、统一视觉系统和 Strapi 接口占位，后续可以直接接入 CMS 做内容运营。",
    primaryLabel: "查看下载",
    primaryHref: "/download",
    secondaryLabel: "了解产品故事",
    secondaryHref: "/about",
  },
};

const featureFallback: FeatureItem[] = [
  {
    slug: "chat-first-recording",
    title: "AI 对话入口",
    summary: "一句话完成记录、查询与反馈。",
    detail:
      "你不必先判断自己现在是在“记账页面”还是“待办页面”。自然语言就是入口，产品负责理解上下文。",
    highlight: "Conversation",
  },
  {
    slug: "finance-system",
    title: "财务系统",
    summary: "账户、预算、借款、账单与月度总览被组织进同一条链路。",
    detail:
      "从日常支出到预算执行，再到借贷与账单管理，财务能力既完整又不脱离聊天体验。",
    highlight: "Finance",
  },
  {
    slug: "life-capture",
    title: "待办与随笔",
    summary: "生活管理不只有数字，也包括提醒、灵感与情绪。",
    detail:
      "随手留下一条想法、补一条任务、记录一段心情，都可以自然地进入同一个生活轨迹。",
    highlight: "Life",
  },
  {
    slug: "calendar-context",
    title: "日历聚合视图",
    summary: "让记录从零散事件，变成可回看的生活上下文。",
    detail:
      "当记账、待办和随笔能够回到同一时间线，系统就不只是“记下来了”，而是更接近理解你的生活节奏。",
    highlight: "Timeline",
  },
  {
    slug: "offline-first",
    title: "本地优先架构",
    summary: "核心记录体验优先依赖本地数据，尽量减少对重后端链路的依赖。",
    detail:
      "这让产品在弱网或离线状态下仍旧可用，也让数据控制感更多地回到用户自己手里。",
    highlight: "Local-first",
  },
  {
    slug: "cross-platform",
    title: "多端一致体验",
    summary: "iOS、Android 与 macOS 使用统一产品语言。",
    detail:
      "你可以在手机上快速记录，在桌面上集中整理，而不需要重新学习一套不同的使用逻辑。",
    highlight: "Cross-platform",
  },
];

const aboutFallback: AboutPageData = {
  title: "做一个真正理解表达方式的生活助手",
  intro:
    "懂你源于一个很简单的念头: 生活记录不该被拆成太多繁琐步骤，也不该被分散在一堆互不相通的工具里。",
  story: [
    "我们日常会在记账 App、待办 App、日历 App 与备忘录之间反复切换。每个工具都有自己的入口、自己的数据结构，也都有自己的学习成本。",
    "大型语言模型的出现，让我们重新思考这件事。既然系统已经能理解自然语言，为什么不能先听懂你，再决定该怎么记录、呈现与提醒？",
    "于是“懂你”慢慢成形。它不只是一个 AI 功能叠加在旧工具上的产品，而是试图用对话重写个人生活记录的入口。",
  ],
  journey: [
    {
      year: "起点",
      title: "对话式原型",
      body:
        "从最早的聊天驱动原型开始，我们先验证了一件事: 用户是否愿意直接用自然语言完成记账和查询。",
    },
    {
      year: "扩展",
      title: "把生活系统补完整",
      body:
        "随后能力逐步扩展到待办、随笔、预算、借款、账单和日历，让产品从一个点子成长为一个真正可用的个人系统。",
    },
    {
      year: "现在",
      title: "跨平台落地",
      body:
        "如今产品已经覆盖 iOS、Android 与 macOS。我们希望记录生活的方式，在不同设备上都能保持同样自然。",
    },
  ],
  principles: [
    {
      title: "自然交互",
      body:
        "少一点“先学会怎么用”，多一点“直接说你要什么”。这是我们构建界面的起点。",
    },
    {
      title: "长期可用",
      body:
        "对话体验必须建立在稳定链路之上。真正可用的产品，不会让核心记录能力受限于偶发的模型不稳定。",
    },
    {
      title: "有温度的工具",
      body:
        "我们不想把它做成冷冰冰的管理后台，而是希望它更像一个能理解你节奏、帮助你整理生活的数字伙伴。",
    },
  ],
};

const downloadFallback: DownloadPageData = {
  title: "选择适合你的使用场景",
  intro:
    "官网的下载页不仅承接跳转，也会成为版本说明与平台状态的统一出口。现在已经预留了 iOS、Android 和 macOS 三个入口位。",
  options: [
    {
      platform: "iOS",
      audience: "适合随手记录、即时查询与移动场景中的高频使用。",
      detail: "后续可直接接入 App Store 或 TestFlight 链接，由 Strapi 后台统一配置。",
      href: null,
      status: "已支持平台",
    },
    {
      platform: "Android",
      audience: "适合希望快速下载安装包、在主力移动设备上长期使用的用户。",
      detail: "可配置为官网 APK 下载、应用商店链接或灰度包分发地址。",
      href: null,
      status: "已支持平台",
    },
    {
      platform: "macOS",
      audience: "适合在桌面环境里集中整理财务、任务与生活记录的用户。",
      detail: "可配置为官网安装包、TestFlight for Mac 或其他内部发布渠道。",
      href: null,
      status: "已支持平台",
    },
  ],
  note:
    "推荐把下载链接、版本号和平台说明放进 Strapi 的 single type 里统一维护。这样发布新版本时，你只需要在后台改内容，不需要重复改官网代码。",
};

const faqFallback: FaqItem[] = [
  {
    question: "懂你到底是什么类型的产品？",
    answer:
      "它是一款以 AI 对话为入口的个人生活记录助手，用自然语言承接记账、待办、随笔、预算、日历与账户管理。",
  },
  {
    question: "它和传统记账或待办 App 的区别是什么？",
    answer:
      "区别不在于多了一个聊天框，而在于交互起点被重写了。你不必先选择功能页，而是先表达需求，系统再理解并反馈。",
  },
  {
    question: "现在已经支持哪些平台？",
    answer: "当前项目已经覆盖 iOS、Android 与 macOS 三端，官网也会围绕这三类入口展开展示与下载承接。",
  },
  {
    question: "数据一定要联网吗？",
    answer:
      "不是。产品强调本地优先，核心记录链路优先依赖本地数据组织，这也是我们非常看重的体验基础。",
  },
  {
    question: "为什么官网要接 Strapi？",
    answer:
      "因为产品介绍、FAQ、下载链接与版本说明都属于高频内容更新。把这些内容放进 CMS，可以让官网长期维护更轻，也更适合后续运营。",
  },
  {
    question: "这版官网现在已经能做什么？",
    answer:
      "当前前端已经具备首页、功能、故事、下载、FAQ 和隐私页面，并且预留了 Strapi 数据读取层，可以直接对接后台。",
  },
];

const privacyFallback: PrivacyPageData = {
  title: "把数据控制感尽量还给用户",
  intro:
    "隐私页不只是法律文本的容器，也是在官网上建立产品信任感的重要一环。第一版先明确说明产品的本地优先理念与数据处理边界。",
  sections: [
    {
      title: "本地优先",
      body: [
        "懂你的核心记录体验以本地数据组织为优先。对用户来说，这意味着在很多关键场景下，数据不需要先绕一圈远端服务才能继续使用。",
        "我们希望把“可控感”留在设备端，而不是要求所有能力都建立在持续联网和远程依赖上。",
      ],
    },
    {
      title: "AI 请求的边界",
      body: [
        "当产品需要调用 AI 能力理解自然语言或生成回答时，相关内容会按照你配置的模型链路进行处理。",
        "官网本身不会额外声明超出产品实际行为的能力，后续如有更细的模型与请求说明，也建议在 Strapi 后台单独维护文本。",
      ],
    },
    {
      title: "同步与账号",
      body: [
        "如果后续开启登录、同步或订阅服务，你可以在官网隐私页继续补充对应的数据说明与账号策略。",
        "这版站点已经为隐私内容预留了结构化页面，方便随着产品迭代继续完善。",
      ],
    },
  ],
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

export async function getSiteConfig(): Promise<SiteConfig> {
  const remote = await fetchStrapiSingle<Partial<SiteConfig>>("site-config", "populate=deep");
  return mergeWithFallback(siteConfigFallback, remote);
}

export async function getHomepageData(): Promise<HomepageData> {
  const remote = await fetchStrapiSingle<Partial<HomepageData>>("homepage", "populate=deep");

  return {
    ...homepageFallback,
    ...remote,
    heroCards: remote?.heroCards?.length ? remote.heroCards : homepageFallback.heroCards,
    metrics: remote?.metrics?.length ? remote.metrics : homepageFallback.metrics,
    values: remote?.values?.length ? remote.values : homepageFallback.values,
    story: mergeWithFallback(homepageFallback.story, remote?.story ?? null),
    finalCta: mergeWithFallback(homepageFallback.finalCta, remote?.finalCta ?? null),
  };
}

export async function getFeatureItems(): Promise<FeatureItem[]> {
  const remote = await fetchStrapiCollection<Partial<FeatureItem>>(
    "features",
    "sort[0]=sort:asc&pagination[pageSize]=12&populate=deep",
  );

  if (!remote?.length) {
    return featureFallback;
  }

  return remote.map((item, index) => ({
    slug: item.slug ?? featureFallback[index]?.slug ?? `feature-${index + 1}`,
    title: item.title ?? featureFallback[index]?.title ?? "未命名功能",
    summary: item.summary ?? featureFallback[index]?.summary ?? "",
    detail: item.detail ?? featureFallback[index]?.detail ?? "",
    highlight: item.highlight ?? featureFallback[index]?.highlight ?? "Feature",
  }));
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const remote = await fetchStrapiSingle<Partial<AboutPageData>>("about-page", "populate=deep");

  return {
    ...aboutFallback,
    ...remote,
    story: remote?.story?.length ? remote.story : aboutFallback.story,
    journey: remote?.journey?.length ? remote.journey : aboutFallback.journey,
    principles: remote?.principles?.length ? remote.principles : aboutFallback.principles,
  };
}

export async function getDownloadPageData(): Promise<DownloadPageData> {
  const remote = await fetchStrapiSingle<Partial<DownloadPageData>>(
    "download-page",
    "populate=deep",
  );

  return {
    ...downloadFallback,
    ...remote,
    options: remote?.options?.length ? remote.options : downloadFallback.options,
  };
}

export async function getFaqItems(): Promise<FaqItem[]> {
  const remote = await fetchStrapiCollection<Partial<FaqItem>>(
    "faqs",
    "sort[0]=sort:asc&pagination[pageSize]=20",
  );

  if (!remote?.length) {
    return faqFallback;
  }

  return remote.map((item, index) => ({
    question: item.question ?? faqFallback[index]?.question ?? "未命名问题",
    answer: item.answer ?? faqFallback[index]?.answer ?? "",
  }));
}

export async function getPrivacyPageData(): Promise<PrivacyPageData> {
  const remote = await fetchStrapiSingle<Partial<PrivacyPageData>>(
    "privacy-page",
    "populate=deep",
  );

  return {
    ...privacyFallback,
    ...remote,
    sections: remote?.sections?.length ? remote.sections : privacyFallback.sections,
  };
}
