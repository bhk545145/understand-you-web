import type { Metadata } from "next";

// 强制动态渲染
export const dynamic = "force-dynamic";
export const revalidate = 0;


import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { getAboutPageData } from "@/lib/site-data";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPageData();

  return {
    title: {
      absolute: about.seoTitle,
    },
    description: about.seoDescription,
  };
}

export default async function AboutPage() {
  const about = await getAboutPageData();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-5xl">
          <SectionHeading
            title={about.title}
            level="h1"
          />

          <div className="grid gap-6">
            <article className="panel p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl">项目缘起</h2>
              <div className="mt-5">
                <RichTextContent content={about.intro} />
              </div>
            </article>

            <article className="panel p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl">{about.beliefTitle}</h2>
              <div className="mt-5">
                <RichTextContent content={about.beliefContent} />
              </div>
            </article>


            <article className="panel p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl">{about.visionTitle}</h2>
              <div className="mt-5">
                <RichTextContent content={about.visionContent} />
              </div>
            </article>
          </div>
        </Container>
      </section>
    </main>
  );
}
