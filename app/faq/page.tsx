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
    absolute: "常见问题 | 懂你",
  },
  description: "查看懂你的常见问题。",
};

export default async function FaqPage() {
  const faqs = await getFaqItems();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            title="常见问题"
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
