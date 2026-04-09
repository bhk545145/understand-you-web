import Container from "@/components/container";
import type { FeatureScene } from "@/types/site";

export default function ScenesSection({ scenes }: { scenes: FeatureScene[] }) {
  return (
    <section id="how-it-works" className="section-shell pt-0">
      <Container>
        <div className="mb-10 space-y-4">
          <span className="eyebrow">产品机制</span>
          <h2 className="section-title text-balance">你说一句，系统负责整理</h2>
          <p className="body-copy max-w-2xl">
            不需要先打开某个功能页。说一句话，系统自动判断这是支出、待办还是随笔。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {scenes.map((scene, index) => (
            <article className="scene-card" key={`${scene.title}-${index}`}>
              <div className="scene-card-copy">
                <p className="scene-index">{`0${index + 1}`}</p>
                <h2 className="scene-card-title">{scene.title}</h2>
                <p className="scene-card-subtitle">{scene.subtitle}</p>

                <div className="mt-4 rounded-xl border border-white/60 bg-white/60 px-4 py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-strong)]">
                    你说
                  </span>
                  <p className="mt-2 text-sm leading-6">{scene.exampleText}</p>
                </div>

                <div className="mt-3 rounded-xl border border-[color:var(--line)] bg-[rgba(24,144,255,0.03)] px-4 py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    结果
                  </span>
                  <p className="mt-2 text-sm leading-6">{scene.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
