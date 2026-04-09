import Link from "next/link";

import Container from "@/components/container";
import type { HomepageData, PlatformLink } from "@/types/site";

function CtaAction({ href, label }: { href: string | null; label: string }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="cta-button-white cursor-not-allowed opacity-60"
      >
        {label}
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <Link
      className="cta-button-white"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

export default function CtaSection({
  homepage,
  platforms,
}: {
  homepage: HomepageData;
  platforms: PlatformLink[];
}) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <div className="cta-panel px-8 py-12 text-center md:px-16 md:py-16">
          <p className="eyebrow cta-eyebrow">下载</p>
          <h2 className="section-title mt-4 text-balance">{homepage.ctaTitle}</h2>
          <p className="body-copy mx-auto mt-4 max-w-2xl">{homepage.ctaDescription}</p>
          <p className="cta-meta mt-3">iOS · Android · macOS</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <CtaAction
                href={platform.downloadUrl}
                key={platform.platformName}
                label={platform.buttonText}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
