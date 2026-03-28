import Link from "next/link";

import Container from "@/components/container";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import type { HomepageData } from "@/types/site";

export default function HeroSection({ homepage }: { homepage: HomepageData }) {
  const heroMockupUrl = resolveStrapiMediaUrl(homepage.heroMockupImage?.url);
  const heroBackgroundUrl = resolveStrapiMediaUrl(homepage.heroBackgroundImage?.url);

  return (
    <section className="section-shell pb-10 pt-12 md:pb-20 md:pt-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-7">
          <span className="eyebrow">Personal Life Assistant</span>
          <h1 className="display-title text-balance">{homepage.heroTitle}</h1>
          <div className="space-y-4">
            <p className="text-2xl leading-tight text-[color:var(--ink)] md:text-4xl">
              {homepage.heroSubtitle}
            </p>
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

          <p className="text-sm tracking-[0.08em] text-[color:var(--muted)]">
            {homepage.heroPlatformsText}
          </p>
        </div>

        <div className="relative">
          <div className="hero-ambient hero-ambient-left" />
          <div className="hero-ambient hero-ambient-right" />

          <div className="hero-stage">
            {heroBackgroundUrl ? (
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
                src={heroBackgroundUrl}
              />
            ) : null}

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
          </div>
        </div>
      </Container>
    </section>
  );
}
