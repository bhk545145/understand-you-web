import Link from "next/link";

import type { PlatformLink } from "@/types/site";

function DownloadAction({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="button-primary cursor-not-allowed opacity-60"
      >
        {label}
      </span>
    );
  }

  const external = href.startsWith("http");

  return (
    <Link
      className="button-primary"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

export default function DownloadCards({ platforms }: { platforms: PlatformLink[] }) {
  return (
    <div className="grid gap-5">
      {platforms.map((platform) => (
        <article
          className="panel p-7"
          id={platform.platformName.toLowerCase()}
          key={platform.platformName}
        >
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-3">
              <p className="eyebrow">{platform.platformName}</p>
              <h2 className="text-3xl">{platform.title}</h2>
              <p className="body-copy max-w-2xl">{platform.description}</p>
            </div>

            <DownloadAction href={platform.downloadUrl} label={platform.buttonText} />
          </div>
        </article>
      ))}
    </div>
  );
}
