import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";

const shortcutTemplateUrl =
  process.env.NEXT_PUBLIC_SHORTCUT_TEMPLATE_URL ??
  "https://www.icloud.com/shortcuts/6d9ae319e25b4baa921a02a8950ce7d3";

const updatedAt = "2026 年 4 月 4 日";
const authorName = "懂你团队";
const authorRole = "快捷记账模板发布者";
const shortcutBookId = "DN-SHORTCUT-20260404";

const highlights = [
  { label: "模板状态", value: "官方维护" },
  { label: "适用平台", value: "iPhone / iPad / Mac" },
  { label: "触发方式", value: "Siri / 桌面 / 自动化" },
];

const steps = [
  {
    title: "添加模板",
    description:
      "点击页面里的按钮，系统会打开快捷指令导入页。第一次添加时，只需要确认一次即可。",
  },
  {
    title: "填写参数",
    description:
      "运行模板时输入金额、类型、分类和备注。模板会把这些参数整理成懂你可识别的结构化记账请求。",
  },
  {
    title: "懂你记账",
    description:
      "快捷指令会唤起懂你 App，并自动完成记账。成功后你可以在聊天页看到确认提示和最新记录。",
  },
];

const scenes = [
  {
    title: "一句话就记账",
    description: "把常用模板挂到 Siri，出门买咖啡、打车、点外卖时直接说一句就能记。",
  },
  {
    title: "桌面一键触发",
    description: "把快捷指令放到桌面或小组件里，适合高频支出场景，点一下就进入参数填写。",
  },
  {
    title: "配合自动化",
    description: "和到店、到家、时间段提醒联动，做成你自己的轻量记账工作流。",
  },
];

const faqs = [
  {
    question: "为什么不是直接在网页里记账？",
    answer:
      "这个页面的职责是帮你把模板快捷指令导入系统。真正写账仍然由懂你 App 完成，这样可以复用你已经配置好的账户、分类和聊天确认能力。",
  },
  {
    question: "添加后每次都要重新导入吗？",
    answer:
      "不用。模板只需要添加一次。后续你可以在系统快捷指令里编辑名称、图标、参数默认值，或者复制出多个个人版本。",
  },
  {
    question: "Mac 上也能用吗？",
    answer:
      "可以。只要你的系统支持快捷指令，并且已经安装懂你，就可以用同一套模板唤起应用完成记账。",
  },
];

export const metadata: Metadata = {
  title: "快捷记账模板",
  description:
    "一键把懂你的快捷记账模板添加到系统快捷指令，之后就能通过 Siri、桌面图标或自动化快速记账。",
};

export default function ShortcutBookkeepingPage() {
  return (
    <main className="overflow-hidden">
      <section className="section-shell pb-10 pt-10 md:pb-14">
        <Container className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-5">
            <article className="panel glow-panel overflow-hidden p-5 md:p-6">
              <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--line)] bg-[linear-gradient(160deg,rgba(36,89,84,0.96),rgba(24,60,59,0.96))] p-6 text-white">
                <div className="absolute inset-0 opacity-25">
                  <Image
                    alt="懂你快捷记账封面背景"
                    className="h-full w-full object-cover"
                    fill
                    priority
                    src="/illustrations/hero-orbit.svg"
                  />
                </div>

                <div className="relative flex min-h-[360px] flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                      Shortcut Book
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/72">
                      {shortcutBookId}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-[22px] bg-white/12 text-3xl font-semibold shadow-[0_20px_50px_rgba(8,18,22,0.28)] backdrop-blur">
                      懂
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                        官方模板
                      </p>
                      <h2 className="text-[clamp(2.4rem,6vw,4rem)] leading-[0.96]">
                        快捷记账
                      </h2>
                      <p className="max-w-sm text-sm leading-7 text-white/78">
                        让懂你记账从 App 内操作，变成系统级的随手动作。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div className="panel p-4" key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-[color:var(--ink)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel p-7 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">快捷记账模板</span>
                <span className="rounded-full border border-[color:var(--line)] bg-white/55 px-3 py-1 text-sm text-[color:var(--muted)]">
                  iCloud Shortcut
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <h1 className="section-title text-balance text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.94]">
                  懂你快捷记账
                  <br />
                  模板详情
                </h1>
                <p className="hero-subtitle max-w-3xl">
                  把预设好的记账工作流直接放进系统快捷指令，让记账从“打开 App”
                  变成“说一句”。
                </p>
                <p className="body-copy max-w-3xl">
                  适合想把随手记账做成系统级入口的人。添加一次模板后，你就可以通过
                  Siri、桌面图标、小组件和自动化快速触发懂你记账。
                </p>
              </div>

              <div className="mt-7 grid gap-4 rounded-[28px] border border-[color:var(--line)] bg-white/68 p-5 md:grid-cols-[1fr_auto] md:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[color:var(--accent-soft)] text-xl font-semibold text-[color:var(--accent-strong)]">
                    懂
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[color:var(--ink)]">
                      {authorName}
                    </p>
                    <p className="text-sm text-[color:var(--muted)]">{authorRole}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      更新于 {updatedAt}
                    </p>
                  </div>
                </div>

                <div className="rounded-[22px] border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--muted)]">
                  模板名称
                  <p className="mt-1 text-base font-semibold text-[color:var(--ink)]">
                    懂你快捷记账
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className="button-primary"
                  href={shortcutTemplateUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  一键添加模板快捷指令
                </a>
                <Link className="button-secondary" href="/download">
                  先下载懂你 App
                </Link>
              </div>
            </div>

            <div className="panel glow-panel overflow-hidden p-7 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--forest)]">
                    Ready to import
                  </p>
                  <h2 className="mt-3 text-3xl">官方模板包含什么</h2>
                </div>
                <div className="rounded-full border border-[color:var(--line)] bg-white/55 px-3 py-1 text-sm text-[color:var(--muted)]">
                  已预置
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-[28px] border border-[color:var(--line)] bg-white/70 p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "支出 / 收入 / 转账",
                    "金额与备注参数",
                    "结构化 deep link 调用",
                    "导入后可自行复制改造",
                  ].map((feature) => (
                    <div
                      className="rounded-[22px] border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-4 py-3 text-sm text-[color:var(--ink)]"
                      key={feature}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="rounded-[24px] bg-[color:var(--forest)] px-5 py-4 text-sm leading-7 text-white/88">
                  模板导入后会调用懂你的快捷记账入口。你可以继续在系统快捷指令里修改图标、
                  重命名、增加默认分类，或者为不同记账场景复制出多套个人版本。
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell py-12">
        <Container>
          <SectionHeading
            eyebrow="使用步骤"
            title="三步完成系统级快捷记账"
            description="不改你原来的记账习惯，只是把入口提前到系统层。"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => (
              <article className="panel p-7" key={step.title}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-lg font-semibold text-[color:var(--accent-strong)]">
                    0{index + 1}
                  </span>
                  <h2 className="text-2xl">{step.title}</h2>
                </div>
                <p className="body-copy mt-5">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell py-12">
        <Container className="grid gap-5 lg:grid-cols-3">
          {scenes.map((scene) => (
            <article className="panel glow-panel p-7" key={scene.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--forest)]">
                Scene
              </p>
              <h2 className="mt-4 text-3xl">{scene.title}</h2>
              <p className="body-copy mt-5">{scene.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="section-shell py-12">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-7 md:p-8">
            <SectionHeading
              eyebrow="检查清单"
              title="添加前先确认这三件事"
              description="避免导入后点了没反应，或者只能打开 App 却不能记账。"
              className="mb-0"
            />

            <div className="mt-8 space-y-4">
              {[
                "已经安装懂你，并使用最新版本。",
                "系统允许快捷指令运行来自分享链接的模板。",
                "首次运行模板时，按提示确认参数和访问权限。",
              ].map((item) => (
                <div
                  className="rounded-[24px] border border-[color:var(--line)] bg-white/65 px-5 py-4 text-[15px] leading-7 text-[color:var(--ink)]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-7 md:p-8">
            <SectionHeading
              eyebrow="FAQ"
              title="常见问题"
              description="你可以先导入模板，后续再慢慢把它改造成更适合自己的版本。"
              className="mb-0"
            />

            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <article
                  className="rounded-[26px] border border-[color:var(--line)] bg-[color:var(--surface-strong)] px-5 py-5"
                  key={faq.question}
                >
                  <h2 className="text-xl">{faq.question}</h2>
                  <p className="body-copy mt-3">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell pt-8">
        <Container>
          <div className="panel glow-panel px-7 py-10 text-center md:px-12">
            <span className="eyebrow">快捷指令就绪</span>
            <h2 className="section-title mx-auto mt-5 max-w-3xl">
              先把模板加进系统，之后再慢慢把记账做成你的自动化习惯
            </h2>
            <p className="body-copy mx-auto mt-5 max-w-2xl">
              这是懂你快捷记账的第一步。你可以先直接使用官方模板，后续再复制一份，做成
              “午饭记账”“通勤记账”“出差记账”等不同版本。
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                className="button-primary"
                href={shortcutTemplateUrl}
                rel="noreferrer"
                target="_blank"
              >
                立即添加模板快捷指令
              </a>
              <Link className="button-secondary" href="/download">
                查看懂你下载方式
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
