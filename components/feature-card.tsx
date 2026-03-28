import RichTextContent from "@/components/rich-text-content";
import type { FeatureDetailItem } from "@/types/site";

export default function FeatureCard({ feature }: { feature: FeatureDetailItem }) {
  return (
    <article className="panel glow-panel p-7">
      <p className="eyebrow mb-4">{feature.subtitle}</p>
      <h2 className="text-2xl md:text-3xl">{feature.title}</h2>
      <div className="mt-5">
        <RichTextContent content={feature.description} />
      </div>
    </article>
  );
}
