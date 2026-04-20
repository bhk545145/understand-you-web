import Link from "next/link";

import Container from "@/components/container";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import { iconMap } from "@/lib/icons";
import type { HomepageData } from "@/types/site";

const heroMetrics = [
  { label: "支出", value: "¥ 38", note: "1 笔已记录" },
  { label: "预算", value: "68%", note: "本月剩余可控" },
  { label: "提醒", value: "02", note: "1 笔账单将到期" },
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
          <p className="hero-device-greeting">今天的财务工作台</p>
          <strong>记账 · 预算 · 提醒</strong>
        </div>
        <div className="hero-device-avatar">懂</div>
      </div>

      <div className="hero-device-composer">
        <div className="hero-device-composer-copy">
          <span className="hero-device-composer-label">输入</span>
          <p>今天中午吃饭花了 38 元，下周提醒我还招行信用卡 2000。</p>
        </div>
        <span className="hero-device-composer-action">发送</span>
      </div>

      {heroMockupUrl ? (
        <div className="hero-device-shot">
          <img
            alt="懂你应用截图"
            className="hero-device-shot-image"
            loading="lazy"
            src={heroMockupUrl}
          />
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
        <span>今日动作</span>
        <p>由一句话直接展开。</p>
      </div>

      <div className="hero-device-timeline">
        <div className="hero-device-entry hero-device-entry-expense">
          <div className="hero-device-entry-dot" aria-hidden="true" />
          <div className="hero-device-entry-copy">
            <div className="hero-device-entry-head">
              <span className="hero-device-entry-badge">支出</span>
              <strong>午餐 38 元</strong>
            </div>
            <p className="hero-device-entry-meta">12:24 · 已归类</p>
          </div>
        </div>
        <div className="hero-device-entry hero-device-entry-todo">
          <div className="hero-device-entry-dot" aria-hidden="true" />
          <div className="hero-device-entry-copy">
            <div className="hero-device-entry-head">
              <span className="hero-device-entry-badge">提醒</span>
              <strong>下周还招行信用卡 2000 元</strong>
            </div>
            <p className="hero-device-entry-meta">已创建还款提醒</p>
          </div>
        </div>
        <div className="hero-device-entry hero-device-entry-note">
          <div className="hero-device-entry-dot" aria-hidden="true" />
          <div className="hero-device-entry-copy">
            <div className="hero-device-entry-head">
              <span className="hero-device-entry-badge">预算</span>
              <strong>本月餐饮预算已用 68%</strong>
            </div>
            <p className="hero-device-entry-meta">建议留意晚餐与咖啡支出</p>
          </div>
        </div>
      </div>

      <div className="hero-device-nav">
        <span className="hero-device-nav-item hero-device-nav-item-active">首页</span>
        <span className="hero-device-nav-item">账户</span>
        <span className="hero-device-nav-item">预算</span>
        <span className="hero-device-nav-item">借还款</span>
      </div>
    </div>
  );
}

export default function HeroSection({ homepage }: { homepage: HomepageData }) {
  const heroMockupUrl = resolveStrapiMediaUrl(homepage.heroMockupImage?.url);
  const capabilities = homepage.capabilitiesItems?.slice(0, 3) ?? [];

  return (
    <section aria-labelledby="hero-heading" className="hero-shell section-shell pb-12 pt-10 md:pb-24 md:pt-16">
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="hero-copy-stack">
          <div className="hero-copy-frame">
            <h1 className="display-title text-balance" id="hero-heading">{homepage.heroTitle}</h1>
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

          {capabilities.length > 0 ? (
            <div className="hero-features">
              {capabilities.map((item) => (
                <div className="hero-feature-item" key={item.title}>
                  <div className="hero-feature-icon">
                    {iconMap[item.iconName] ?? "✦"}
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="hero-ambient hero-ambient-left" />
          <div className="hero-ambient hero-ambient-right" />

          <div className="hero-stage">
            <div className="hero-phone-frame">
              <div className="hero-phone-screen">
                <HeroDevicePreview heroMockupUrl={heroMockupUrl} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
