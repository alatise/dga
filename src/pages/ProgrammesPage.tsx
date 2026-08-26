import { FiFlag, FiBriefcase } from "react-icons/fi";
import type { IconType } from "react-icons";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ProgramCard } from "../components/cards/ProgramCard";
import { InquiryForm } from "../components/forms/InquiryForm";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { PROGRAMS, PROGRAMME_CATEGORIES } from "../data/programs";

// Category header images, min. 1400x800px — only these two categories have one per the imagery spec.
const CATEGORY_HEADER_ICONS: Partial<Record<(typeof PROGRAMME_CATEGORIES)[number], IconType>> = {
  "Government and Public Sector": FiFlag,
  "Corporate Governance": FiBriefcase,
};

export function ProgrammesPage() {
  return (
    <>
      <PageMeta
        title="Programmes"
        description="Executive programmes for future-ready leaders across government, corporate governance, and legal and compliance."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Programmes"
            title="Executive Programmes for Future-Ready Leaders"
            subtitle="Our programmes help leaders understand emerging technologies, strengthen governance and translate learning into practical institutional action."
          />
        </Container>
      </section>

      {PROGRAMME_CATEGORIES.map((category, sectionIndex) => {
        const headerIcon = CATEGORY_HEADER_ICONS[category];
        return (
          <section
            key={category}
            className={sectionIndex % 2 === 1 ? "border-t border-line bg-surface-alt py-20" : "py-20"}
          >
            <Container>
              <SectionHeading title={category} />
              {headerIcon && (
                <PlaceholderImage
                  label={`${category} — category header image`}
                  icon={headerIcon}
                  aspect="wide"
                  className="mt-6"
                />
              )}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROGRAMS.filter((program) => program.category === category).map((program, index) => (
                  <Reveal key={program.slug} delayMs={staggerDelay(index)}>
                    <ProgramCard program={program} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="border-t border-line py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Custom Organisational Programmes"
            title="Tailored to your institution"
            subtitle="Programmes can be tailored to institutional mandates, leadership levels, sector priorities and transformation objectives."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="mx-auto max-w-xl">
          <InquiryForm
            variant="programme"
            heading="Request a Programme Proposal"
          />
        </Container>
      </section>
    </>
  );
}
