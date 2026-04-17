import Container from "@/components/container";
import DownloadActionLink from "@/components/download-action-link";
import type { HomepageData, PlatformLink } from "@/types/site";

export default function CtaSection({
  homepage,
  platforms,
}: {
  homepage: HomepageData;
  platforms: PlatformLink[];
}) {
  return (
    <section aria-labelledby="cta-heading" className="section-shell pt-0">
      <Container>
        <div className="cta-panel px-8 py-12 text-center md:px-16 md:py-16">
          <p className="eyebrow cta-eyebrow">下载</p>
          <h2 className="section-title mt-4 text-balance" id="cta-heading">{homepage.ctaTitle}</h2>
          <p className="body-copy mx-auto mt-4 max-w-2xl">{homepage.ctaDescription}</p>
          <p className="cta-meta mt-3">iOS · Android · macOS</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <DownloadActionLink
                href={platform.downloadUrl}
                key={platform.platformName}
                label={platform.buttonText}
                variant="cta"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
