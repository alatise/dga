import { Link } from "react-router-dom";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";

export function PrivacyPolicyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Digital Governance Africa's privacy policy."
      />
      <Container className="max-w-3xl py-20">
        <SectionHeading eyebrow="Legal" title="Privacy Policy" />
        <p className="mt-6 text-sm leading-relaxed text-ink-muted">
          Our full privacy policy is pending legal review and will be published here. In the
          meantime, if you have questions about how we handle your data, please{" "}
          <Link to="/contact" className="text-gold underline underline-offset-2">
            contact us
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
