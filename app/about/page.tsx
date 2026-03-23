import type { Metadata } from "next";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { getAboutPageData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "项目故事",
  description: "了解懂你的起点、设计理念与产品愿景。",
};

export default async function AboutPage() {
  const about = await getAboutPageData();

  return (
    <main>
      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <span className="eyebrow">About</span>
            <h1 className="section-title text-balance">{about.title}</h1>
            <p className="body-copy">{about.intro}</p>
          </div>

          <div className="panel space-y-5 p-8">
            {about.story.map((paragraph) => (
              <p className="body-copy" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Journey"
            title="从一个想法，到三端落地"
            description="我们希望把生活记录从多个分散工具里拉回到一个更自然的入口。产品的每一步扩展，都是围绕这个方向慢慢生长出来的。"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {about.journey.map((item) => (
              <article className="panel glow-panel p-7" key={item.title}>
                <p className="eyebrow mb-4">{item.year}</p>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="body-copy mt-4">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Principles"
            title="我们坚持的设计原则"
            description="不是把更多功能堆进产品里，而是让记录、理解与反馈尽量顺滑地融到同一条体验里。"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {about.principles.map((item) => (
              <article className="panel p-7" key={item.title}>
                <h2 className="text-2xl">{item.title}</h2>
                <p className="body-copy mt-4">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
