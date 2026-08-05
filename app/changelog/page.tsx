import type { Metadata } from "next";

// ISR: 每 5 分钟重新验证
export const revalidate = 300;


import Container from "@/components/container";
import ReleaseStatusBadge from "@/components/release-status-badge";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { releaseDateLabel } from "@/lib/release-presentation";
import { getReleaseNotes } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "更新历程 | 懂你",
  },
  description: "查看懂你从早期公测到财务感知升级的版本历程、当前状态与主要变化。",
};

export default async function ChangelogPage() {
  const releaseNotes = await getReleaseNotes();

  return (
    <main id="main-content">
      <section className="section-shell">
        <Container className="max-w-5xl">
          <SectionHeading
            eyebrow="产品历程"
            title="懂你的更新历程"
            description="我们把开发进展、已送审版本、正式发布和历史归档分开标注，让每一次变化都清楚、有据可查。"
            level="h1"
          />

          <ol className="release-timeline">
            {releaseNotes.map((note, index) => (
              <li key={`${note.version}-${note.releaseDate ?? "archive"}`}>
                <article
                  className={`panel release-note-card ${
                    index === 0 ? "release-note-card-latest" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    {note.isLatest ? <span className="eyebrow">最新进展</span> : null}
                    <ReleaseStatusBadge status={note.status} />
                    <span className="text-sm text-[color:var(--muted)]">
                      {releaseDateLabel(note.releaseDate, note.status)}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                    <div>
                      <h2 className="text-3xl">懂你 {note.version}</h2>
                      <p className="body-copy mt-3">{note.summary}</p>
                    </div>
                    <div className="release-platforms" aria-label="适用平台">
                      {note.platforms.map((platform) => (
                        <span key={platform}>{platform}</span>
                      ))}
                    </div>
                  </div>

                  <details className="release-note-details" open={index === 0}>
                    <summary>本次更新详情</summary>
                    <div className="mt-5 border-t border-[color:var(--color-border)] pt-5">
                      <RichTextContent content={note.content} />
                    </div>
                  </details>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </main>
  );
}
