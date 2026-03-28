import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import type { FeatureScene } from "@/types/site";

export default function ScenesSection({ scenes }: { scenes: FeatureScene[] }) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <SectionHeading
          eyebrow="Scenes"
          title="先看到使用它的样子，再理解它的能力"
          description="不急着罗列功能，而是从真实场景出发，让用户先感受到懂你如何进入生活。"
        />

        <div className="grid gap-6">
          {scenes.map((scene, index) => (
            <article className="scene-card" key={`${scene.title}-${index}`}>
              <div className="scene-card-copy">
                <p className="eyebrow mb-4">{`Scene 0${index + 1}`}</p>
                <h2 className="text-3xl text-balance md:text-4xl">{scene.title}</h2>
                <p className="mt-5 text-base leading-7 text-[color:var(--ink)]">
                  {scene.subtitle}
                </p>
                <p className="body-copy mt-5">{scene.description}</p>
              </div>

              <div className="scene-card-chat">
                <div className="scene-chat-bubble scene-chat-bubble-user">{scene.exampleText}</div>
                <div className="scene-chat-bubble scene-chat-bubble-ai">
                  系统会把它理解成一条更自然的生活记录，而不是一项需要你手动拆解的操作。
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
