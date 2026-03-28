import type { Metadata } from "next";

import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { getAboutPageData, getHomepageData } from "@/lib/site-data";

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
  const [about, homepage] = await Promise.all([
    getAboutPageData(),
    getHomepageData(),
  ]);

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="About"
            title={about.title}
            description="官网的关于页继续品牌叙事，但更偏向解释它为什么存在、相信什么，以及想走向哪里。"
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
              <h2 className="text-2xl md:text-3xl">{homepage.storyTitle}</h2>
              <div className="mt-5">
                <RichTextContent content={homepage.storyContent} />
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
