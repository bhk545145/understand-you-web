import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import type { HomepageData } from "@/types/site";

const iconMap: Record<string, string> = {
  spark: "✦",
  orbit: "◎",
  shield: "◌",
  devices: "⌘",
};

export default function CapabilitiesSection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title={homepage.capabilitiesTitle}
          description="这不是一句漂亮口号，而是一套围绕表达、理解与整理搭起来的产品结构。"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {homepage.capabilitiesItems.map((item) => (
            <article className="panel p-7" key={item.title}>
              <div className="capability-icon">{iconMap[item.iconName] ?? "•"}</div>
              <h2 className="mt-6 text-2xl">{item.title}</h2>
              <p className="body-copy mt-4">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
