import { Link } from "react-router-dom";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

export function TermsPage() {
  return (
    <>
      <PageMeta title="Terms of Use" description="Digital Governance Africa's terms of use." />
      <Container className="max-w-3xl py-20">
        <SectionHeading eyebrow="Legal" title="Terms of Use" />
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          Our full terms of use are pending legal review and will be published here. In the
          meantime, if you have questions, please{" "}
          <Link to="/contact" className="text-gold underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
