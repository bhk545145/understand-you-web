import type { Metadata } from "next";

// ISR: 每 5 分钟重新验证
export const revalidate = 300;

import Link from "next/link";

import Container from "@/components/container";
import DownloadCards from "@/components/download-cards";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import {
  getDownloadPageData,
  getPlatformLinks,
  getReleaseNotes,
} from "@/lib/site-data";

function formatReleaseDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getDownloadPageData();

  return {
    title: {
      absolute: page.seoTitle,
    },
    description: page.seoDescription,
  };
}

export default async function DownloadPage() {
  const [page, platforms, releaseNotes] = await Promise.all([
    getDownloadPageData(),
    getPlatformLinks(),
    getReleaseNotes(),
  ]);

  const latestRelease = releaseNotes.find((item) => item.isLatest) ?? releaseNotes[0];

  return (
    <main>
      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <SectionHeading
              title={page.title}
              description={page.description}
              level="h1"
              className="mb-0"
            />

            <div className="panel p-7">
              <h2 className="text-2xl">{page.versionTitle}</h2>
              <p className="body-copy mt-4">{page.versionDescription}</p>

              {latestRelease ? (
                <div className="mt-6 space-y-3 rounded-[24px] border border-[color:var(--line)] bg-white/55 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">最新版本</span>
                    <strong className="text-xl">{latestRelease.version}</strong>
                    <span className="text-sm text-[color:var(--muted)]">
                      {formatReleaseDate(latestRelease.releaseDate)}
                    </span>
                  </div>
                  <p className="body-copy">{latestRelease.summary}</p>
                  <RichTextContent content={latestRelease.content} />
                  <Link className="button-secondary" href="/changelog">
                    查看更新说明
                  </Link>
                </div>
              ) : null}

              <div className="mt-6 rounded-[24px] border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="eyebrow">快捷入口</span>
                    <h2 className="text-2xl">想把快捷记账直接加到系统里？</h2>
                    <p className="body-copy">
                      我们已经准备好了快捷记账模板导入页。添加后，你就可以通过 Siri、
                      桌面图标或自动化快速唤起懂你记账。
                    </p>
                  </div>
                  <Link className="button-secondary" href="/shortcut-bookkeeping">
                    查看引导页
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <DownloadCards platforms={platforms} />
        </Container>
      </section>
    </main>
  );
}
