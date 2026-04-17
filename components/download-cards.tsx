import DownloadActionLink from "@/components/download-action-link";
import type { PlatformLink } from "@/types/site";

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
              <h3 className="text-3xl">{platform.title}</h3>
              <p className="body-copy max-w-2xl">{platform.description}</p>
            </div>

            <DownloadActionLink
              href={platform.downloadUrl}
              label={platform.buttonText}
              variant="primary"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
