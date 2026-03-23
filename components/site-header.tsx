import Link from "next/link";

import Container from "@/components/container";

const navLinks = [
  { href: "/features", label: "功能" },
  { href: "/about", label: "故事" },
  { href: "/download", label: "下载" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[rgba(251,245,237,0.82)] backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(201,112,73,0.14)] text-lg font-semibold">
            懂
          </span>
          <span>
            <strong className="block text-lg font-semibold">懂你</strong>
            <span className="text-xs text-[color:var(--muted)]">Understand You</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-sm md:gap-6">
          {navLinks.map((link) => (
            <Link className="rounded-full px-3 py-2 transition hover:bg-white/50" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button-secondary" href="/download">
          获取应用
        </Link>
      </Container>
    </header>
  );
}
