import Link from "next/link";

import Container from "@/components/container";
import type { SiteShell } from "@/types/site";

const navLinks = [
  { href: "/features", label: "功能" },
  { href: "/about", label: "关于" },
  { href: "/download", label: "下载" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader({ site }: { site: SiteShell }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="site-header-shell">
          <Link className="site-header-brand" href="/">
            <span className="brand-mark">懂</span>
            <span className="space-y-0.5">
              <strong className="block text-lg font-semibold">{site.siteName}</strong>
              <span className="text-xs tracking-[0.08em] text-[color:var(--muted)]">
                {site.siteTagline}
              </span>
            </span>
          </Link>

          <nav className="site-header-nav">
            {navLinks.map((link) => (
              <Link className="site-header-link" href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link className="button-secondary site-header-action" href={site.primaryDownloadLink}>
            {site.primaryDownloadText}
          </Link>
        </div>
      </Container>
    </header>
  );
}
