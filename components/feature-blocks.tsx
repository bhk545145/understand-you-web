import RichTextContent from "@/components/rich-text-content";
import { resolveStrapiMediaUrl } from "@/lib/strapi";
import type { FeatureDetailItem } from "@/types/site";

export default function FeatureBlocks({ features }: { features: FeatureDetailItem[] }) {
  return (
    <div className="grid gap-6">
      {features.map((feature, index) => {
        const imageUrl = resolveStrapiMediaUrl(feature.image?.url);

        return (
          <article
            className="feature-block"
            key={feature.slug}
          >
            <div className="space-y-4">
              <p className="eyebrow">{feature.subtitle}</p>
              <h2 className="text-3xl text-balance md:text-4xl">{feature.title}</h2>
              <RichTextContent content={feature.description} />
            </div>

            <div className="feature-block-visual">
              {imageUrl ? (
                <img
                  alt={feature.title}
                  className="h-full w-full rounded-[28px] object-cover"
                  src={imageUrl}
                />
              ) : (
                <div className="feature-placeholder">
                  <span>{`0${index + 1}`}</span>
                  <strong>{feature.subtitle}</strong>
                  <p>{feature.title}</p>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
