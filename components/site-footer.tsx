import Link from "next/link";

import Container from "@/components/container";
import type { SiteShell } from "@/types/site";

const primaryLinks = [
  { href: "/features", label: "功能" },
  { href: "/about", label: "关于" },
  { href: "/download", label: "下载" },
  { href: "/privacy", label: "隐私" },
];

export default function SiteFooter({ site }: { site: SiteShell }) {
  return (
    <footer className="mt-20 border-t border-[color:var(--line)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="brand-mark">懂</span>
            <div>
              <p className="text-lg font-semibold">{site.siteName}</p>
              <p className="text-sm text-[color:var(--muted)]">{site.siteTagline}</p>
            </div>
          </div>

          <p className="body-copy max-w-xl">{site.siteDescription}</p>
          <p className="text-sm text-[color:var(--muted)]">{site.footerCopyright}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Explore
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {primaryLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Connect
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {site.socialLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
