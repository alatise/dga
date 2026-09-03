import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { SERVICES } from "../data/services";
import servicesHero from "../assets/images/Services_top_hero.webp";
import { ImageWithOverlay } from "../components/ui/ImageOverlay";

export function ServicesPage() {
  const serviceGroups = [
    {
      services: SERVICES.slice(0, 2),
      background: "bg-white",
      dark: false,
    },
    {
      services: SERVICES.slice(2, 4),
      background: "bg-navy",
      dark: true,
    },
    {
      services: SERVICES.slice(4, 6),
      background: "bg-surface-alt",
      dark: false,
    },
  ];

  return (
    <>
      <PageMeta
        title="Services"
        description="Digital Governance Africa's services span AI governance advisory, digital transformation, data governance, governance risk and compliance, executive education, and research and policy advisory."
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface-alt py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Services"
            title="Governance-Led Solutions for a Changing Digital World"
            subtitle="We help organisations strengthen governance, build institutional capability and adopt digital technologies responsibly."
          />

          <ImageWithOverlay
            src={servicesHero}
            alt="Services hero image"
            className="rounded-lg"
          />
        </Container>
      </section>

      {/* Services */}
      {serviceGroups.map((group, groupIndex) => (
        <section key={groupIndex} className={`${group.background} py-20`}>
          <Container className="space-y-10">
            {group.services.map((service, index) => {
              const serviceIndex = groupIndex * 2 + index;

              return (
                <Reveal key={service.slug} delayMs={staggerDelay(serviceIndex)}>
                  <Card className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
                    <div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                        <service.icon aria-hidden size={20} />
                      </span>

                      <h2 className="mt-4 text-xl font-semibold text-ink">
                        {service.title}
                      </h2>

                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {service.summary}
                      </p>
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

                        <p className="mt-1.5 text-sm leading-relaxed text-ink">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </Container>
        </section>
      ))}
    </>
  );
}
