import type { Metadata } from "next";

// 强制动态渲染
export const dynamic = "force-dynamic";
export const revalidate = 0;


import Container from "@/components/container";
import FeatureBlocks from "@/components/feature-blocks";
import SectionHeading from "@/components/section-heading";
import { getFeatureDetails, getFeaturesPageData } from "@/lib/site-data";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getFeaturesPageData();

  return {
    title: {
      absolute: page.seoTitle,
    },
    description: page.seoDescription,
  };
}

export default async function FeaturesPage() {
  const [page, features] = await Promise.all([
    getFeaturesPageData(),
    getFeatureDetails(),
  ]);

  return (
    <main>
      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Features"
            title={page.title}
            description={page.description}
            level="h1"
          />

          <FeatureBlocks features={features} />
        </Container>
      </section>
    </main>
  );
}
