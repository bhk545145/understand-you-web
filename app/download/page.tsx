import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { getDownloadPageData, getSiteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "下载",
  description: "查看懂你的平台支持情况，并从官网统一跳转到对应下载入口。",
};

function DownloadAction({
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
      className="button-primary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

export default async function DownloadPage() {
  const [siteConfig, downloadPage] = await Promise.all([
    getSiteConfig(),
    getDownloadPageData(),
  ]);

  return (
    <main>
      <section className="section-shell">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <span className="eyebrow">Download</span>
            <h1 className="section-title text-balance">{downloadPage.title}</h1>
            <p className="body-copy">{downloadPage.intro}</p>

            <div className="panel p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                已支持平台
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteConfig.platforms.map((platform) => (
                  <span
                    className="rounded-full border border-[color:var(--line)] px-4 py-2 text-sm font-medium"
                    key={platform}
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {downloadPage.options.map((option) => (
              <article className="panel p-7" key={option.platform}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-4">{option.status}</p>
                    <h2 className="text-3xl">{option.platform}</h2>
                    <p className="body-copy mt-3">{option.audience}</p>
                    <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                      {option.detail}
                    </p>
                  </div>

                  <DownloadAction
                    href={option.href}
                    label={option.href ? "立即前往" : "后台配置下载链接"}
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <SectionHeading
            eyebrow="Release Flow"
            title="下载入口可以由 Strapi 统一维护"
            description={downloadPage.note}
          />
        </Container>
      </section>
    </main>
  );
}
