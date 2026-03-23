import Link from "next/link";

import Container from "@/components/container";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import { getFeatureItems, getHomepageData, getSiteConfig } from "@/lib/site-data";

export default async function HomePage() {
  const [siteConfig, homepage, features] = await Promise.all([
    getSiteConfig(),
    getHomepageData(),
    getFeatureItems(),
  ]);

  const featuredFeatures = features.slice(0, 4);

  return (
    <main className="overflow-hidden">
      <section className="section-shell">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="eyebrow">{siteConfig.tagline}</span>

            <h1 className="display-title text-balance">
              {homepage.heroTitle.split("\n").map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="body-copy max-w-2xl">{homepage.heroSubtitle}</p>

            <div className="flex flex-wrap gap-4">
              <Link className="button-primary" href={siteConfig.primaryCta.href}>
                {siteConfig.primaryCta.label}
              </Link>
              <Link className="button-secondary" href={siteConfig.secondaryCta.href}>
                {siteConfig.secondaryCta.label}
              </Link>
            </div>

            <dl className="grid gap-4 pt-4 sm:grid-cols-3">
              {homepage.metrics.map((metric) => (
                <div className="panel p-5" key={metric.label}>
                  <dt className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {metric.label}
                  </dt>
                  <dd className="mt-3 text-lg font-semibold leading-7">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-8 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(247,198,166,0.65),transparent_68%)] lg:block" />

            <div className="panel soft-grid glow-panel p-6 sm:p-8">
              <div className="rounded-[24px] bg-[rgba(255,255,255,0.74)] p-6 shadow-[0_20px_60px_rgba(80,54,32,0.08)]">
                <div className="space-y-4">
                  <div className="ml-auto max-w-[78%] rounded-[22px] bg-[rgba(201,112,73,0.16)] px-4 py-3 text-sm leading-7">
                    晚饭 68 元，顺手记一下。还有明天上午提醒我和客户开会。
                  </div>
                  <div className="max-w-[88%] rounded-[22px] bg-white px-4 py-3 text-sm leading-7 text-[color:var(--muted)] shadow-[0_16px_30px_rgba(70,48,31,0.08)]">
                    已帮你记录一笔餐饮支出，并新增一条明早会议提醒。预算与待办会同步更新。
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {homepage.heroCards.map((card) => (
                  <article className="rounded-[24px] bg-[rgba(255,255,255,0.65)] p-5" key={card.title}>
                    <h2 className="text-xl">{card.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                      {card.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Value"
            title="让记录这件事，不再像填表"
            description="官网的第一性表达不是“功能很多”，而是让用户立刻感受到这是一种更自然的使用方式。"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {homepage.values.map((value) => (
              <article className="panel p-7" key={value.title}>
                <p className="eyebrow mb-4">{value.eyebrow}</p>
                <h2 className="text-2xl">{value.title}</h2>
                <p className="body-copy mt-4">{value.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="Story"
              title={homepage.story.title}
              description={homepage.story.body}
            />
          </div>

          <div className="panel p-8">
            <p className="text-3xl leading-[1.5] text-balance md:text-4xl">
              “{homepage.story.quote}”
            </p>
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title="把高频生活场景收进一个统一系统"
            description="首页先呈现四个最能建立认知的能力模块，完整列表放在功能页继续展开。"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {featuredFeatures.map((feature) => (
              <FeatureCard feature={feature} key={feature.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Platforms"
            title="现在，懂你已支持多端体验"
            description="无论你是在手机上随手记一笔，还是在桌面上集中整理生活，都能保持一致的产品语言。"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {siteConfig.platforms.map((platform) => (
              <article className="panel p-7" key={platform}>
                <p className="eyebrow mb-4">Available</p>
                <h2 className="text-3xl">{platform}</h2>
                <p className="body-copy mt-4">
                  围绕相同的对话式入口设计，让你在不同设备上都能快速进入状态。
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <div className="panel glow-panel grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="eyebrow mb-4">Ready to ship</p>
              <h2 className="section-title text-balance">{homepage.finalCta.title}</h2>
              <p className="body-copy mt-4 max-w-2xl">{homepage.finalCta.body}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link className="button-primary" href={homepage.finalCta.primaryHref}>
                {homepage.finalCta.primaryLabel}
              </Link>
              <Link className="button-secondary" href={homepage.finalCta.secondaryHref}>
                {homepage.finalCta.secondaryLabel}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
