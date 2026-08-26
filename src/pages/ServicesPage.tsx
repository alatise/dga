import { FiUsers } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { SERVICES } from "../data/services";

export function ServicesPage() {
  return (
    <>
      <PageMeta
        title="Services"
        description="Digital Governance Africa's services span AI governance advisory, digital transformation, data governance, governance risk and compliance, executive education, and research and policy advisory."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Governance-Led Solutions for a Changing Digital World"
            subtitle="We help organisations strengthen governance, build institutional capability and adopt digital technologies responsibly."
          />
          {/* Services top hero image, min. 1600x900px — reuses Hero Photo 1 or 2 with the same navy duotone. */}
          <PlaceholderImage
            label="Services hero image (reuses Hero Photo 1/2)"
            icon={FiUsers}
            aspect="video"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-10">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delayMs={staggerDelay(index, 60, 300)}>
              <Card className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <service.icon aria-hidden size={20} />
                  </span>
                  <h2 className="mt-4 text-xl font-semibold text-ink">{service.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.summary}</p>
                </div>

                <div className="grid gap-6 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Services may include
                    </p>
                    <ul className="mt-3 grid gap-1.5 text-sm text-ink-muted sm:grid-cols-2">
                      {service.capabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-gold/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">{service.outcome}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
