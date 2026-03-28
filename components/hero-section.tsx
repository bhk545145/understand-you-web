import Link from "next/link";

import Container from "@/components/container";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import type { HomepageData } from "@/types/site";

export default function HeroSection({ homepage }: { homepage: HomepageData }) {
  const heroMockupUrl = resolveStrapiMediaUrl(homepage.heroMockupImage?.url);
  const heroBackgroundUrl = resolveStrapiMediaUrl(homepage.heroBackgroundImage?.url);

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
                {heroMockupUrl ? (
                  <img
                    alt="懂你应用界面"
                    className="h-full w-full object-cover"
                    src={heroMockupUrl}
                  />
                ) : (
                  <div className="space-y-4">
                    <div className="hero-mini-bubble hero-mini-bubble-user">
                      今天中午吃饭花了 38 元
                    </div>
                    <div className="hero-mini-bubble hero-mini-bubble-ai">
                      已记录餐饮支出，归档到今天的生活轨迹。
                    </div>
                    <div className="grid gap-3">
                      <div className="hero-mini-panel">
                        <span className="hero-mini-label">待办</span>
                        <strong>明天下午给妈妈打电话</strong>
                      </div>
                      <div className="hero-mini-panel">
                        <span className="hero-mini-label">感受</span>
                        <strong>今天有点累，但事情终于推进了</strong>
                      </div>
                    </div>
                  </div>
                )}
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
