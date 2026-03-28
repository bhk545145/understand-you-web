import Link from "next/link";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import type { PlatformLink } from "@/types/site";

function PlatformButton({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="button-secondary cursor-not-allowed opacity-60"
      >
        {label}
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <Link
      className="button-secondary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

export default function PlatformsSection({ platforms }: { platforms: PlatformLink[] }) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <SectionHeading
          eyebrow="Platforms"
          title="在你最顺手的设备上使用懂你"
          description="无论是外出时随手记录，还是在桌面端回看生活轨迹，懂你都尽量保持一致、轻盈而自然的体验。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {platforms.map((platform) => (
            <article className="panel glow-panel p-7" key={platform.platformName}>
              <p className="eyebrow mb-4">{platform.platformName}</p>
              <h2 className="text-3xl">{platform.title}</h2>
              <p className="body-copy mt-4">{platform.description}</p>
              <div className="mt-6">
                <PlatformButton href={platform.downloadUrl} label={platform.buttonText} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
