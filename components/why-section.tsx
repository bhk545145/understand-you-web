import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import type { HomepageData } from "@/types/site";

export default function WhySection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0" id="why">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why"
            title={homepage.whyTitle}
            description="生活本身是连续的，但我们常常被迫用不同工具把它拆开处理。"
            level="h2"
            className="mb-0"
          />

          <div className="panel grid gap-5 p-8 md:grid-cols-[1fr_220px]">
            <RichTextContent content={homepage.whyContent} />

            <div className="why-illustration">
              <div className="why-illustration-card">
                <span>记账</span>
              </div>
              <div className="why-illustration-card">
                <span>待办</span>
              </div>
              <div className="why-illustration-card">
                <span>随笔</span>
              </div>
              <div className="why-illustration-merge">
                <strong>懂你</strong>
                <p>一个入口，重新收拢这些表达</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
