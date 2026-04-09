import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import CtaSection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import ScenesSection from "@/components/scenes-section";
import TrustSection from "@/components/trust-section";
import { getFeatureScenes, getHomepageData, getPlatformLinks } from "@/lib/site-data";

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepageData();

  return {
    title: {
      absolute: homepage.seoTitle,
    },
    description: homepage.seoDescription,
  };
}

export default async function HomePage() {
  const [homepage, scenes, platforms] = await Promise.all([
    getHomepageData(),
    getFeatureScenes(),
    getPlatformLinks(),
  ]);

  return (
    <main className="home-shell overflow-hidden">
      <HeroSection homepage={homepage} />
      <ScenesSection scenes={scenes} />
      <TrustSection />
      <CtaSection homepage={homepage} platforms={platforms} />
    </main>
  );
}
