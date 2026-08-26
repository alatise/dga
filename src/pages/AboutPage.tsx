import { FiArrowRight, FiUsers, FiHome } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { PlaceholderImage } from "../components/ui/PlaceholderImage";
import { VALUES } from "../data/team";

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About DGA"
        description="Digital Governance Africa is a Nigerian-based organisation advancing digital governance, responsible artificial intelligence and institutional transformation across Africa."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About DGA
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Shaping Africa's Digital Future
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Digital Governance Africa is a Nigerian-based organisation advancing digital
            governance, responsible artificial intelligence and institutional transformation
            across Africa.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Technology alone does not transform institutions." />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              We were founded on a simple conviction: sustainable transformation requires
              effective governance, trusted data, capable leadership and responsible innovation.
              DGA was established to bridge the gap between technology, policy, governance and
              institutional development. We help organisations navigate digital change while
              strengthening accountability, resilience and public trust.
            </p>
          </div>
          {/* About story/office image, min. 1200x800px — swap this slot for the supplied photo. */}
          <PlaceholderImage
            label="About story / office image"
            icon={FiHome}
            aspect="video"
            className="rounded-lg"
          />
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Vision</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To become Africa's leading centre of excellence for Digital Governance and
              Responsible Artificial Intelligence, empowering trusted institutions,
              transformational leaders and sustainable innovation.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Mission</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To empower governments, institutions, regulators, businesses, development
              organisations and communities to harness artificial intelligence, digital
              technologies and governance frameworks to build trusted, transparent, accountable,
              inclusive and future-ready institutions.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Purpose</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              To help Africa build the governance capability required to innovate responsibly,
              strengthen institutions and create sustainable public value in the digital age.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          {/* About team/leadership photo, min. 1400x1000px — client-supplied preferred, this is the stock fallback slot. */}
          <PlaceholderImage
            label="About team / leadership photo"
            icon={FiUsers}
            aspect="portrait"
            className="rounded-lg lg:order-2"
          />
          <div className="lg:order-1">
            <SectionHeading eyebrow="Our People" title="Built by practitioners, for practitioners" />
            <p className="mt-6 text-base leading-relaxed text-ink-muted">
              DGA is led by a multidisciplinary team spanning governance, law, policy, technology
              and executive education — combining African institutional experience with global
              governance practice.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What guides our work" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <value.icon aria-hidden size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-bold text-ink sm:text-3xl">
            Explore our executive programmes or get in touch with our team.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/programmes" variant="primary">
              Explore Programmes <FiArrowRight aria-hidden size={16} />
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
