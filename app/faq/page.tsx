import type { Metadata } from "next";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { getFaqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "常见问题",
  description: "查看懂你的常见问题，了解产品定位、平台支持与数据处理方式。",
};

export default async function FaqPage() {
  const faqs = await getFaqItems();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="把你最关心的问题先回答清楚"
            description="官方站点的 FAQ 会优先由 Strapi 管理，后续你只需要在后台改内容，不需要重新写页面结构。"
            align="center"
            level="h1"
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details className="panel group p-6" key={item.question}>
                <summary className="cursor-pointer list-none pr-8 text-xl font-semibold leading-8">
                  {item.question}
                </summary>
                <p className="body-copy mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
