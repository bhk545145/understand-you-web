import type { Metadata } from "next";

// 强制动态渲染
export const dynamic = "force-dynamic";
export const revalidate = 0;


import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import { getReleaseNotes } from "@/lib/site-data";

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export const metadata: Metadata = {
  title: {
    absolute: "更新说明 | 懂你",
  },
  description: "查看懂你的版本更新与最近变更。",
};

export default async function ChangelogPage() {
  const releaseNotes = await getReleaseNotes();

  return (
    <main>
      <section className="section-shell">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Changelog"
            title="更新说明"
            description="版本信息与更新摘要可以通过 Strapi 统一维护。"
            level="h1"
          />

          <div className="space-y-5">
            {releaseNotes.map((note) => (
              <article className="panel p-7" key={`${note.version}-${note.releaseDate}`}>
                <div className="flex flex-wrap items-center gap-3">
                  {note.isLatest ? <span className="eyebrow">Latest</span> : null}
                  <h2 className="text-2xl">{note.version}</h2>
                  <span className="text-sm text-[color:var(--muted)]">
                    {formatReleaseDate(note.releaseDate)}
                  </span>
                </div>

                <p className="body-copy mt-4">{note.summary}</p>
                <p className="mt-4 text-sm text-[color:var(--muted)]">
                  适用平台：{note.platforms.join(" · ")}
                </p>
                <div className="mt-5">
                  <RichTextContent content={note.content} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
