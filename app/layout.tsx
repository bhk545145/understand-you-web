import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getSiteShell } from "@/lib/site-data";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteShell();
  const defaultTitle = `${site.name} | ${site.tagline}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    openGraph: {
      title: defaultTitle,
      description: site.description,
      locale: "zh_CN",
      siteName: site.name,
      type: "website",
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: site.description,
    },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const site = await getSiteShell();

  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader site={site} />
        {children}
        <SiteFooter site={site} />
      </body>
    </html>
  );
}
