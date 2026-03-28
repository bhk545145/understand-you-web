import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import type { HomepageData } from "@/types/site";

export default function WhySection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0" id="why">
      <Container>
        <div className="why-panel">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Why"
              title={homepage.whyTitle}
              description="生活本身是连续的，但我们常常被迫用不同工具把它拆开处理。"
              level="h2"
              className="mb-0 max-w-2xl"
            />

            <RichTextContent className="why-body" content={homepage.whyContent} />
          </div>

          <div className="why-illustration">
            <div className="why-illustration-heading">
              <span>Before</span>
              <span>After</span>
            </div>

            <div className="why-illustration-stack">
              <div className="why-illustration-card">
                <span>记账</span>
                <small>一个表单</small>
              </div>
              <div className="why-illustration-card">
                <span>待办</span>
                <small>一个提醒列表</small>
              </div>
              <div className="why-illustration-card">
                <span>随笔</span>
                <small>又是另一块空白页</small>
              </div>
            </div>

            <div className="why-illustration-merge">
              <span className="hero-mini-label">一句自然表达</span>
              <strong>今天中午吃饭花了 38 元</strong>
              <p>懂你会把它理解成一笔支出，也理解它属于今天的生活片段。</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
