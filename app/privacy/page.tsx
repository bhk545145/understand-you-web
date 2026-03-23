import type { Metadata } from "next";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { getPrivacyPageData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "隐私",
  description: "查看懂你的隐私说明，了解产品如何处理本地数据、同步与 AI 请求。",
};

export default async function PrivacyPage() {
  const privacy = await getPrivacyPageData();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Privacy"
            title={privacy.title}
            description={privacy.intro}
            level="h1"
          />

          <div className="space-y-5">
            {privacy.sections.map((section) => (
              <article className="panel p-7" key={section.title}>
                <h2 className="text-2xl">{section.title}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p className="body-copy" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
