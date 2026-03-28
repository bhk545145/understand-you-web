import Link from "next/link";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import type { PlatformLink } from "@/types/site";

const platformVisualMap: Record<string, { label: string; note: string }> = {
  iOS: { label: "掌心里", note: "适合随手记下一句刚刚发生的事" },
  Android: { label: "灵活地", note: "快速记录，也能顺手整理生活的分区" },
  macOS: { label: "桌面上", note: "更适合把最近的片段慢慢回看和归拢" },
};

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
            <article className="platform-card glow-panel" key={platform.platformName}>
              <div className="platform-card-top">
                <p className="eyebrow mb-0">{platform.platformName}</p>
                <span className="platform-tone-label">
                  {platformVisualMap[platform.platformName]?.label ?? "随时"}
                </span>
              </div>

              <div className="platform-device">
                <div className="platform-device-screen">
                  <span>{platform.platformName}</span>
                  <strong>{platform.title}</strong>
                  <p>{platformVisualMap[platform.platformName]?.note ?? platform.description}</p>
                </div>
              </div>

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
