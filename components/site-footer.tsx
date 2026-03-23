import Link from "next/link";

import Container from "@/components/container";
import type { SiteShell } from "@/types/site";

const primaryLinks = [
  { href: "/features", label: "功能" },
  { href: "/about", label: "故事" },
  { href: "/download", label: "下载" },
  { href: "/faq", label: "FAQ" },
];

const secondaryLinks = [
  { href: "/privacy", label: "隐私" },
  { href: "https://github.com/bhk545145/understand-you-web", label: "GitHub" },
];

export default function SiteFooter({ site }: { site: SiteShell }) {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(201,112,73,0.14)] text-lg font-semibold">
              懂
            </span>
            <div>
              <p className="text-lg font-semibold">{site.name}</p>
              <p className="text-sm text-[color:var(--muted)]">{site.shortName}</p>
            </div>
          </div>

          <p className="body-copy max-w-xl">{site.description}</p>
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
              More
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {secondaryLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
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
