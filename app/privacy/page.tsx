import type { Metadata } from "next";

// 强制动态渲染
export const dynamic = "force-dynamic";
export const revalidate = 0;


import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { getPrivacyPageData } from "@/lib/site-data";

export async function generateMetadata(): Promise<Metadata> {
  const privacy = await getPrivacyPageData();

  return {
    title: {
      absolute: privacy.seoTitle,
    },
    description: privacy.seoDescription,
  };
}

export default async function PrivacyPage() {
  const privacy = await getPrivacyPageData();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            title={privacy.title}
            description={privacy.updatedAtText}
            level="h1"
          />

          <article className="panel p-8 md:p-10">
            <RichTextContent content={privacy.content} />
          </article>
        </Container>
      </section>
    </main>
  );
}
