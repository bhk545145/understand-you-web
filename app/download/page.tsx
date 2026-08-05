import type { Metadata } from "next";

// ISR: 每 5 分钟重新验证
export const revalidate = 300;

import Link from "next/link";

import Container from "@/components/container";
import DownloadCards from "@/components/download-cards";
import ReleaseStatusBadge from "@/components/release-status-badge";
import SectionHeading from "@/components/section-heading";
import { releaseDateLabel } from "@/lib/release-presentation";
import {
  getDownloadPageData,
  getPlatformLinks,
  getReleaseNotes,
} from "@/lib/site-data";

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

  const latestUpdate = releaseNotes.find((item) => item.isLatest) ?? releaseNotes[0];
  const versionTitle =
    latestUpdate?.status === "released" ? page.versionTitle : "版本动态";

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
              <h2 className="text-2xl">{versionTitle}</h2>
              <p className="body-copy mt-4">{page.versionDescription}</p>

              {latestUpdate ? (
                <div className="mt-6 space-y-3 rounded-[24px] border border-[color:var(--line)] bg-white/55 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="eyebrow">最新进展</span>
                    <ReleaseStatusBadge status={latestUpdate.status} />
                    <strong className="text-xl">{latestUpdate.version}</strong>
                    <span className="text-sm text-[color:var(--muted)]">
                      {releaseDateLabel(latestUpdate.releaseDate, latestUpdate.status)}
                    </span>
                  </div>
                  <p className="body-copy">{latestUpdate.summary}</p>
                  <Link className="button-secondary" href="/changelog">
                    查看更新历程
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
