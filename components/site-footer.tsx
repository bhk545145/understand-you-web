import Link from "next/link";

import Container from "@/components/container";

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

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)]">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(201,112,73,0.14)] text-lg font-semibold">
              懂
            </span>
            <div>
              <p className="text-lg font-semibold">懂你</p>
              <p className="text-sm text-[color:var(--muted)]">Understand You</p>
            </div>
          </div>

          <p className="body-copy max-w-xl">
            一款以 AI 对话为入口的个人生活记录助手，把记账、待办、随笔、预算与日历放回更自然的表达里。
          </p>
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
