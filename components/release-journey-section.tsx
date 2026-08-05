import Link from "next/link";

import Container from "@/components/container";
import ReleaseStatusBadge from "@/components/release-status-badge";
import SectionHeading from "@/components/section-heading";
import { releaseDateLabel } from "@/lib/release-presentation";
import type { ReleaseNote } from "@/types/site";

export default function ReleaseJourneySection({
  releases,
}: {
  releases: ReleaseNote[];
}) {
  const milestones = releases.slice(0, 3);

  if (!milestones.length) {
    return null;
  }

  return (
    <section className="section-shell release-journey-section">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              className="mb-0 max-w-3xl"
              eyebrow="持续进化"
              title="从一句话记录，到更懂你的财务助手"
              description="每一次更新都有清晰的状态和边界。开发进展、送审版本与正式发布不会混在一起。"
            />
            <Link className="button-secondary shrink-0" href="/changelog">
              查看完整更新历程
            </Link>
          </div>

          <div className="panel release-journey-track">
            {milestones.map((release, index) => (
              <article className="release-journey-item" key={release.version}>
                <span className="release-journey-index" aria-hidden="true">
                  {index === 0 ? "现在" : `${index + 1}`.padStart(2, "0")}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <ReleaseStatusBadge status={release.status} />
                  <span className="text-sm text-[color:var(--muted)]">
                    {releaseDateLabel(release.releaseDate, release.status)}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl">懂你 {release.version}</h3>
                <p className="body-copy mt-3">{release.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
