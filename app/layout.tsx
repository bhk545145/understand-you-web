import type { Metadata } from "next";
import type { ReactNode } from "react";

import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import { getSiteConfig, getSiteShell } from "@/lib/site-data";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();
  const defaultTitle = site.defaultSeoTitle || `${site.siteName} | ${site.siteTagline}`;
  const faviconUrl = resolveStrapiMediaUrl(site.favicon?.url);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${site.siteName}`,
    },
    description: site.defaultSeoDescription || site.siteDescription,
    icons: faviconUrl
      ? {
          icon: faviconUrl,
        }
      : undefined,
    openGraph: {
      title: defaultTitle,
      description: site.defaultSeoDescription || site.siteDescription,
      locale: "zh_CN",
      siteName: site.siteName,
      type: "website",
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: site.defaultSeoDescription || site.siteDescription,
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
