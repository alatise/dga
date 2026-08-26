import { FiArrowRight } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Page not found</h1>
        <p className="mt-4 max-w-md text-ink-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/" variant="primary">
            Back to Home <FiArrowRight aria-hidden size={16} />
          </Button>
          <Button to="/programmes" variant="secondary">
            View Programmes
          </Button>
        </div>
      </Container>
    </>
  );
}
