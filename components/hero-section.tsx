import Link from "next/link";

import Container from "@/components/container";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import type { HomepageData } from "@/types/site";

const heroMetrics = [
  { label: "今日支出", value: "¥ 38", note: "自动识别 1 笔" },
  { label: "待办", value: "02", note: "1 条需要提醒" },
  { label: "随笔", value: "01", note: "已留下情绪片段" },
];

const heroTimelineItems = [
  {
    tone: "expense",
    badge: "餐饮",
    title: "午餐 38 元",
    meta: "12:24 · 已归类到餐饮",
    detail: "一句话完成记录，不用再打开表单。",
  },
  {
    tone: "todo",
    badge: "待办",
    title: "明天下午给妈妈打电话",
    meta: "已放进提醒节奏",
    detail: "保留时间语义，也保留这件事的重要程度。",
  },
  {
    tone: "note",
    badge: "随笔",
    title: "今天有点累，但事情终于推进了",
    meta: "21:10 · 片刻感受",
    detail: "情绪和进展一起留下，而不只是冷冰冰的备忘。",
  },
];

function HeroDevicePreview({
  heroMockupUrl,
}: {
  heroMockupUrl: string | null;
}) {
  return (
    <div className="hero-device-ui">
      <div className="hero-device-statusbar">
        <span>9:41</span>
        <div className="hero-device-status-icons" aria-hidden="true">
          <span className="hero-device-signal" />
          <span className="hero-device-wifi" />
          <span className="hero-device-battery" />
        </div>
      </div>

      <div className="hero-device-topbar">
        <div>
          <p className="hero-device-greeting">晚上好，今天也被你认真过了一遍。</p>
          <strong>今天的生活轨迹</strong>
        </div>
        <div className="hero-device-avatar">懂</div>
      </div>

      <div className="hero-device-tabs" aria-label="页面导航">
        <span className="hero-device-tab hero-device-tab-active">生活</span>
        <span className="hero-device-tab">财务</span>
        <span className="hero-device-tab">日历</span>
      </div>

      <div className="hero-device-composer">
        <div className="hero-device-composer-copy">
          <span className="hero-device-composer-label">AI 入口</span>
          <p>今天中午吃饭花了 38 元，明天下午提醒我给妈妈打电话。</p>
        </div>
        <span className="hero-device-composer-action">发送</span>
      </div>

      {heroMockupUrl ? (
        <div className="hero-device-shot">
          <img
            alt="懂你应用截图"
            className="hero-device-shot-image"
            src={heroMockupUrl}
          />
          <div className="hero-device-shot-overlay">
            <span>今日快照</span>
            <strong>真实界面预览</strong>
          </div>
        </div>
      ) : null}

      <div className="hero-device-metrics">
        {heroMetrics.map((metric) => (
          <div className="hero-device-metric" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </div>
        ))}
      </div>

      <div className="hero-device-section-head">
        <span>Today</span>
        <p>由一句表达，展开成今天的完整记录。</p>
      </div>

      <div className="hero-device-timeline">
        {heroTimelineItems.map((item) => (
          <div
            className={`hero-device-entry hero-device-entry-${item.tone}`}
            key={item.title}
          >
            <div className="hero-device-entry-dot" aria-hidden="true" />
            <div className="hero-device-entry-copy">
              <div className="hero-device-entry-head">
                <span className="hero-device-entry-badge">{item.badge}</span>
                <strong>{item.title}</strong>
              </div>
              <p className="hero-device-entry-meta">{item.meta}</p>
              <p className="hero-device-entry-detail">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-device-nav">
        <span className="hero-device-nav-item hero-device-nav-item-active">入口</span>
        <span className="hero-device-nav-item">时间线</span>
        <span className="hero-device-nav-item">预算</span>
        <span className="hero-device-nav-item">我的</span>
      </div>
    </div>
  );
}

export default function HeroSection({ homepage }: { homepage: HomepageData }) {
  const heroBackgroundUrl = resolveStrapiMediaUrl(homepage.heroBackgroundImage?.url);
  const heroMockupUrl = resolveStrapiMediaUrl(homepage.heroMockupImage?.url);

  return (
    <section className="hero-shell section-shell pb-12 pt-10 md:pb-24 md:pt-16">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hero-copy-stack">
          <span className="eyebrow">Personal Life Assistant</span>

          <div className="hero-copy-frame">
            <p className="hero-kicker">从一句自然表达开始</p>
            <h1 className="display-title text-balance">{homepage.heroTitle}</h1>
            <div className="space-y-4">
              <p className="hero-subtitle text-balance">{homepage.heroSubtitle}</p>
              <p className="body-copy max-w-2xl">{homepage.heroDescription}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link className="button-primary" href={homepage.heroPrimaryButtonLink}>
                {homepage.heroPrimaryButtonText}
              </Link>
              <Link className="button-secondary" href={homepage.heroSecondaryButtonLink}>
                {homepage.heroSecondaryButtonText}
              </Link>
            </div>
          </div>

          <div className="hero-proof-grid">
            <div className="hero-proof-card">
              <span className="hero-proof-label">一句话输入</span>
              <strong>记账、待办、随笔在同一个入口里开始</strong>
            </div>
            <div className="hero-proof-card">
              <span className="hero-proof-label">同一条时间线</span>
              <strong>把支出、任务与感受重新放回连续生活里</strong>
            </div>
          </div>

          <p className="hero-platforms-note">{homepage.heroPlatformsText}</p>
        </div>

        <div className="relative">
          <div className="hero-ambient hero-ambient-left" />
          <div className="hero-ambient hero-ambient-right" />

          <div className="hero-stage">
            <div className="hero-stage-caption">
              <span>Today</span>
              <p>把今天的生活，收拢到同一块画布里。</p>
            </div>

            {heroBackgroundUrl ? (
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
                src={heroBackgroundUrl}
              />
            ) : null}

            <div className="hero-stage-orbit" />

            <div className="hero-phone-frame">
              <div className="hero-phone-screen">
                <HeroDevicePreview heroMockupUrl={heroMockupUrl} />
              </div>
            </div>

            <div className="hero-float-card hero-float-card-left">
              <span className="hero-float-label">记账</span>
              <strong>午餐 38 元</strong>
              <p>已自动归类为餐饮</p>
            </div>

            <div className="hero-float-card hero-float-card-right">
              <span className="hero-float-label">待办</span>
              <strong>明天下午打电话</strong>
              <p>已加入提醒节奏</p>
            </div>

            <div className="hero-float-card hero-float-card-bottom">
              <span className="hero-float-label">日历</span>
              <strong>本周生活轨迹</strong>
              <p>支出、任务与感受在同一时间线上回看</p>
            </div>

            <div className="hero-timeline-strip">
              <span>支出</span>
              <span>待办</span>
              <span>感受</span>
              <span>回看</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
