import Container from "@/components/container";
import type { FeatureScene } from "@/types/site";

export default function ScenesSection({ scenes }: { scenes: FeatureScene[] }) {
  const [featured, ...rest] = scenes;

  return (
    <section aria-labelledby="scenes-heading" className="section-shell pt-0" id="how-it-works">
      <Container>
        <div className="mb-10 space-y-4">
          <span className="eyebrow">产品机制</span>
          <h2 className="section-title text-balance" id="scenes-heading">你说一句，系统负责整理</h2>
          <p className="body-copy max-w-2xl">
            不需要先打开某个功能页。说一句话，系统自动判断这是支出、待办还是随笔。
          </p>
        </div>

        {/* Featured scene — full width, horizontal layout */}
        {featured ? (
          <article className="scene-featured">
            <div className="scene-featured-copy">
              <p className="scene-index">01</p>
              <h3 className="scene-featured-title">{featured.title}</h3>
              <p className="scene-card-subtitle">{featured.subtitle}</p>
            </div>
            <div className="scene-featured-demo">
              <div className="scene-demo-chat">
                <span className="scene-demo-label">你说</span>
                <p className="scene-demo-text">{featured.exampleText}</p>
              </div>
              <div className="scene-demo-outcome">
                <span className="scene-demo-label">结果</span>
                <p className="scene-demo-text">{featured.description}</p>
              </div>
            </div>
          </article>
        ) : null}

        {/* Secondary scenes — compact row */}
        {rest.length > 0 ? (
          <div className="scene-secondary-grid">
            {rest.map((scene, index) => (
              <article className="scene-secondary-card" key={scene.title}>
                <p className="scene-index-sm">{`0${index + 2}`}</p>
                <h3 className="scene-secondary-title">{scene.title}</h3>
                <p className="scene-card-subtitle">{scene.subtitle}</p>
                <div className="mt-3 space-y-2">
                  <div className="scene-demo-chat scene-demo-chat-sm">
                    <span className="scene-demo-label">你说</span>
                    <p className="text-sm leading-6">{scene.exampleText}</p>
                  </div>
                  <div className="scene-demo-outcome scene-demo-outcome-sm">
                    <span className="scene-demo-label">结果</span>
                    <p className="text-sm leading-6">{scene.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
