import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "懂你 | 把生活记录变成一场自然对话",
    template: "%s | 懂你",
  },
  description:
    "懂你是一款以 AI 对话为入口的个人生活记录助手，把记账、待办、随笔、预算与日历收进同一个更自然的入口。",
  openGraph: {
    title: "懂你 | 把生活记录变成一场自然对话",
    description:
      "记账、待办、随笔、预算、日历与账户管理，不再分散在多个工具里。",
    locale: "zh_CN",
    siteName: "懂你",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "懂你 | 把生活记录变成一场自然对话",
    description:
      "一款以 AI 对话为入口的个人生活记录助手，把繁琐操作还原成自然表达。",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
