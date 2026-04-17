import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { iconMap } from "@/lib/icons";
import type { HomepageData } from "@/types/site";

export default function CapabilitiesSection({ homepage }: { homepage: HomepageData }) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <div className="capabilities-shell">
          <SectionHeading
            eyebrow="能力"
            title={homepage.capabilitiesTitle}
            description="一套围绕表达、理解与整理搭起来的产品结构。"
            className="max-w-2xl"
          />

          <div className="capabilities-grid">
            {homepage.capabilitiesItems.map((item, index) => (
              <article
                className={`capability-card${index === 0 ? " capability-card-featured" : ""}`}
                key={item.title}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="capability-icon">{iconMap[item.iconName] ?? "•"}</div>
                  <span className="capability-index">{`0${index + 1}`}</span>
                </div>
                <h3 className="mt-8 text-2xl">{item.title}</h3>
                <p className="body-copy mt-4">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
