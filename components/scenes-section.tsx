import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import type { FeatureScene } from "@/types/site";

const sceneStoryboards = [
  {
    chips: ["时间 今天中午", "金额 ¥38", "分类 餐饮"],
    resultLabel: "系统理解",
    resultTitle: "已记一笔午餐支出",
    resultBody: "自动归类进今天的时间线里，之后回看时也能自然找到它。",
  },
  {
    chips: ["时间 明天下午", "动作 打电话", "对象 妈妈"],
    resultLabel: "系统理解",
    resultTitle: "已创建提醒待办",
    resultBody: "它不再只是一个提醒，而是进入你接下来节奏的一件事。",
  },
  {
    chips: ["状态 有点累", "进展 有推进", "类型 随笔"],
    resultLabel: "系统理解",
    resultTitle: "已留下一条生活片段",
    resultBody: "懂你会把情绪和进展一起留下，而不是只把它当成一句闲话。",
  },
];

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
                <p className="scene-index">{`0${index + 1}`}</p>
                <p className="eyebrow mb-4">{`Scene 0${index + 1}`}</p>
                <h2 className="text-3xl text-balance md:text-4xl">{scene.title}</h2>
                <p className="scene-card-subtitle">{scene.subtitle}</p>
                <p className="body-copy mt-5">{scene.description}</p>
              </div>

              <div className="scene-card-stage">
                <div className="scene-stage-shell">
                  <div className="scene-stage-topline">
                    <span>你说</span>
                    <span>系统理解</span>
                  </div>

                  <div className="scene-chat-bubble scene-chat-bubble-user">{scene.exampleText}</div>

                  <div className="scene-chip-row">
                    {(sceneStoryboards[index] ?? sceneStoryboards[0]).chips.map((chip) => (
                      <span className="scene-chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="scene-result-card">
                    <span className="scene-result-label">
                      {(sceneStoryboards[index] ?? sceneStoryboards[0]).resultLabel}
                    </span>
                    <strong>{(sceneStoryboards[index] ?? sceneStoryboards[0]).resultTitle}</strong>
                    <p>{(sceneStoryboards[index] ?? sceneStoryboards[0]).resultBody}</p>
                  </div>

                  <p className="scene-stage-note">
                    懂你先顺着人的表达方式理解，再替你把记录整理好。
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
