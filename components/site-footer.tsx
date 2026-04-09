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
    <footer className="mt-20 pb-8">
      <Container>
        <div className="site-footer-shell flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <span className="brand-mark">懂</span>
            <div>
              <p className="text-lg font-semibold">{site.siteName}</p>
              <p className="text-sm text-[color:var(--muted)]">{site.siteTagline}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[color:var(--muted)]">
            {primaryLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
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

          <p className="mt-6 text-sm text-[color:var(--muted)]">{site.footerCopyright}</p>
        </div>
      </Container>
    </footer>
  );
}
