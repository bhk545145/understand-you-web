import type { FeatureItem } from "@/types/site";

export default function FeatureCard({ feature }: { feature: FeatureItem }) {
  return (
    <article className="panel glow-panel p-7">
      <p className="eyebrow mb-4">{feature.highlight}</p>
      <h2 className="text-2xl md:text-3xl">{feature.title}</h2>
      <p className="mt-4 text-lg leading-8 text-[color:var(--ink)]">{feature.summary}</p>
      <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{feature.detail}</p>
    </article>
  );
}
