import type { Metadata } from "next";

// 强制动态渲染
export const dynamic = "force-dynamic";
export const revalidate = 0;


import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { getFaqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ | 懂你",
  },
  description: "查看懂你的常见问题，快速了解产品定位、平台支持与内容维护方式。",
};

export default async function FaqPage() {
  const faqs = await getFaqItems();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="把最常被问到的问题先回答清楚"
            description="这里的内容默认也可以通过 Strapi 维护，方便后续持续补充。"
            align="center"
            level="h1"
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <details className="panel group p-6" key={item.question}>
                <summary className="cursor-pointer list-none pr-8 text-xl font-semibold leading-8">
                  {item.question}
                </summary>
                <div className="mt-4">
                  <RichTextContent content={item.answer} />
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
