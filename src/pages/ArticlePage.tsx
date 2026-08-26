import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FiArrowLeft, FiLock } from "react-icons/fi";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { Badge } from "../components/ui/Badge";
import { ScrollProgressBar } from "../components/insights/ScrollProgressBar";
import { ARTICLES } from "../data/articles";
import { ARTICLE_CATEGORY_COVERS } from "../data/articleCovers";

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const cover = article.coverImage ?? ARTICLE_CATEGORY_COVERS[article.category];
  const paragraphs = article.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <>
      <PageMeta title={article.title} description={article.summary} />
      <ScrollProgressBar targetRef={bodyRef} />

      <section className="border-b border-line bg-surface-alt py-16">
        <Container className="max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-gold"
          >
            <FiArrowLeft aria-hidden size={14} /> Back to Insights
          </Link>
          <div className="mt-6 flex items-center gap-2">
            <Badge>{article.category}</Badge>
            {article.gated && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-muted">
                <FiLock aria-hidden size={11} /> Registration required
              </span>
            )}
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
            <time dateTime={article.date}>{DATE_FORMATTER.format(new Date(article.date))}</time>
            <span aria-hidden>&middot;</span>
            <span>{article.readingTime}</span>
          </div>
        </Container>
      </section>

      {cover && (
        <Container className="max-w-3xl">
          <img
            src={cover}
            alt=""
            className="-mt-8 aspect-video w-full rounded-lg object-cover shadow-md"
          />
        </Container>
      )}

      <section className="py-16">
        <Container className="max-w-3xl">
          <div ref={bodyRef} className="space-y-5 text-base leading-relaxed text-ink-muted">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
