import Link from "next/link";

import Container from "@/components/container";
import type { HomepageData, PlatformLink } from "@/types/site";

function CtaAction({ href, label }: { href: string | null; label: string }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="button-primary cursor-not-allowed opacity-60"
      >
        {label}
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <Link
      className="button-primary"
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
        <div className="panel cta-panel grid gap-8 px-8 py-10 md:px-12 md:py-12">
          <div className="space-y-4">
            <p className="eyebrow">Download</p>
            <h2 className="section-title text-balance">{homepage.ctaTitle}</h2>
            <p className="body-copy max-w-2xl">{homepage.ctaDescription}</p>
          </div>

          <div className="flex flex-wrap gap-4">
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
