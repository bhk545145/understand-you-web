import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import type { HomepageData } from "@/types/site";

export default function StorySection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0">
      <Container className="max-w-5xl">
        <div className="story-panel">
          <SectionHeading
            eyebrow="故事"
            title={homepage.storyTitle}
            description="这一屏不是解释功能，而是回答品牌气质从哪里来。"
            level="h2"
            align="center"
            className="mx-auto max-w-3xl text-center"
          />

          <div className="story-divider" />

          <RichTextContent
            className="story-body"
            content={homepage.storyContent}
          />
        </div>
      </Container>
    </section>
  );
}
