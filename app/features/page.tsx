import type { Metadata } from "next";

import Container from "@/components/container";
import FeatureCard from "@/components/feature-card";
import SectionHeading from "@/components/section-heading";
import { getFeatureItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "功能",
  description: "浏览懂你的核心能力，包括 AI 对话记录、财务管理、生活记录与多端体验。",
};

export default async function FeaturesPage() {
  const features = await getFeatureItems();

  return (
    <main>
      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="不是堆功能，而是把常用小事收进同一个入口"
            description="懂你把聊天、记账、待办、随笔、预算、日历与账户管理组织成一个顺手的生活系统。"
            level="h1"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard feature={feature} key={feature.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container className="grid gap-6 md:grid-cols-3">
          <article className="panel p-7">
            <p className="eyebrow mb-4">Interaction</p>
            <h2 className="text-2xl">对话即界面</h2>
            <p className="body-copy mt-4">
              你不需要在复杂菜单里寻找入口。说一句话，系统去判断该记录、该查询，还是该反馈。
            </p>
          </article>

          <article className="panel p-7">
            <p className="eyebrow mb-4">Architecture</p>
            <h2 className="text-2xl">本地优先</h2>
            <p className="body-copy mt-4">
              核心流程尽量不依赖重后端链路，离线也能保留主要能力，让记录体验更稳，也更可控。
            </p>
          </article>

          <article className="panel p-7">
            <p className="eyebrow mb-4">Consistency</p>
            <h2 className="text-2xl">多端一致</h2>
            <p className="body-copy mt-4">
              iOS、Android 与 macOS 使用统一的产品语言，无论你在桌面整理还是在手机随手记录，都能无缝切换。
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
