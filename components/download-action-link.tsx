"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const variantClassNameMap = {
  primary: "button-primary",
  secondary: "button-secondary",
  cta: "cta-button-white",
} as const;

type DownloadActionLinkProps = {
  href: string | null;
  label: string;
  variant: keyof typeof variantClassNameMap;
};

function isPlaceholderDownloadLink(href: string) {
  return href.startsWith("/download#");
}

export default function DownloadActionLink({
  href,
  label,
  variant,
}: DownloadActionLinkProps) {
  const pathname = usePathname();
  const className = variantClassNameMap[variant];
  const isPlaceholder = href ? isPlaceholderDownloadLink(href) : false;
  const isUnavailableOnDownloadPage = pathname === "/download" && isPlaceholder;

  if (!href || isUnavailableOnDownloadPage) {
    return (
      <span
        aria-disabled="true"
        className="inline-flex flex-col items-center gap-1 cursor-not-allowed opacity-60"
      >
        <span className={className}>{label}</span>
        <small className="text-xs text-[color:var(--muted)]">
          {!href ? "即将上线" : "下载地址待补充"}
        </small>
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <Link
      className={className}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}
