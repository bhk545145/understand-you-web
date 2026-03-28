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
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[rgba(251,246,240,0.78)] backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="brand-mark">懂</span>
          <span className="space-y-0.5">
            <strong className="block text-lg font-semibold">{site.siteName}</strong>
            <span className="text-xs tracking-[0.08em] text-[color:var(--muted)]">
              {site.siteTagline}
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm md:gap-6">
          {navLinks.map((link) => (
            <Link
              className="rounded-full px-3 py-2 transition hover:bg-white/50"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button-secondary" href={site.primaryDownloadLink}>
          {site.primaryDownloadText}
        </Link>
      </Container>
    </header>
  );
}
