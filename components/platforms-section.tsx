import Container from "@/components/container";
import DownloadActionLink from "@/components/download-action-link";
import SectionHeading from "@/components/section-heading";
import type { PlatformLink } from "@/types/site";

const platformVisualMap: Record<string, { label: string; note: string }> = {
  iOS: { label: "掌心里", note: "适合随手记下一句刚刚发生的事" },
  Android: { label: "灵活地", note: "快速记录，也能顺手整理生活的分区" },
  macOS: { label: "桌面上", note: "更适合把最近的片段慢慢回看和归拢" },
};

export default function PlatformsSection({ platforms }: { platforms: PlatformLink[] }) {
  const [primary, ...secondary] = platforms;

  return (
    <section className="section-shell pt-0">
      <Container>
        <SectionHeading
          eyebrow="多端"
          title="在你最顺手的设备上使用懂你"
          description="无论是外出时随手记录，还是在桌面端回看生活轨迹，懂你都尽量保持一致、轻盈而自然的体验。"
        />

        <div className="platforms-grid">
          {/* Featured platform */}
          {primary ? (
            <article className="platform-card glow-panel">
              <div className="platform-card-top">
                <p className="eyebrow mb-0">{primary.platformName}</p>
                <span className="platform-tone-label">
                  {platformVisualMap[primary.platformName]?.label ?? "随时"}
                </span>
              </div>

              <div className="platform-device">
                <div className="platform-device-screen">
                  <span>{primary.platformName}</span>
                  <strong>{primary.title}</strong>
                  <p>{platformVisualMap[primary.platformName]?.note ?? primary.description}</p>
                </div>
              </div>

              <h3 className="text-3xl">{primary.title}</h3>
              <p className="body-copy mt-4">{primary.description}</p>
              <div className="mt-6">
                <DownloadActionLink
                  href={primary.downloadUrl}
                  label={primary.buttonText}
                  variant="secondary"
                />
              </div>
            </article>
          ) : null}

          {/* Secondary platforms */}
          {secondary.length > 0 ? (
            <div className="platform-card-secondary">
              {secondary.map((platform) => (
                <article className="platform-card" key={platform.platformName}>
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

                  <h3 className="text-2xl">{platform.title}</h3>
                  <p className="body-copy mt-3">{platform.description}</p>
                  <div className="mt-4">
                    <DownloadActionLink
                      href={platform.downloadUrl}
                      label={platform.buttonText}
                      variant="secondary"
                    />
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
