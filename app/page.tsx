import type { Metadata } from "next";

import CapabilitiesSection from "@/components/capabilities-section";
import CtaSection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import PlatformsSection from "@/components/platforms-section";
import ScenesSection from "@/components/scenes-section";
import StorySection from "@/components/story-section";
import WhySection from "@/components/why-section";
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
    <main className="overflow-hidden">
      <HeroSection homepage={homepage} />
      <WhySection homepage={homepage} />
      <ScenesSection scenes={scenes} />
      <CapabilitiesSection homepage={homepage} />
      <PlatformsSection platforms={platforms} />
      <StorySection homepage={homepage} />
      <CtaSection homepage={homepage} platforms={platforms} />
    </main>
  );
}
