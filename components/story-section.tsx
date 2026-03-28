import Container from "@/components/container";
import RichTextContent from "@/components/rich-text-content";
import SectionHeading from "@/components/section-heading";
import type { HomepageData } from "@/types/site";

export default function StorySection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0">
      <Container className="max-w-4xl">
        <div className="panel px-8 py-10 md:px-12 md:py-14">
          <SectionHeading
            eyebrow="Story"
            title={homepage.storyTitle}
            description="这一屏不是解释功能，而是回答品牌气质从哪里来。"
            level="h2"
          />

          <RichTextContent
            className="story-body"
            content={homepage.storyContent}
          />
        </div>
      </Container>
    </section>
  );
}
