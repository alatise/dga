import { useMemo, useState } from "react";
import { PageMeta } from "../components/seo/PageMeta";
import { Container } from "../components/layout/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ArticleCard } from "../components/cards/ArticleCard";
import { Reveal } from "../components/ui/Reveal";
import { staggerDelay } from "../lib/motion";
import { InquiryForm } from "../components/forms/InquiryForm";
import { NewsletterForm } from "../components/forms/NewsletterForm";
import { ARTICLES } from "../data/articles";
import type { ArticleCategory } from "../types/content";
import { cn } from "../lib/cn";

const CATEGORIES: Array<ArticleCategory | "All"> = [
  "All",
  "AI Governance",
  "Data Governance",
  "Executive Insights",
  "Policy",
];

export function InsightsPage() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const featured = useMemo(() => ARTICLES.find((article) => article.featured), []);
  const rest = useMemo(
    () =>
      ARTICLES.filter((article) => article !== featured).filter(
        (article) => category === "All" || article.category === category,
      ),
    [category, featured],
  );

  return (
    <>
      <PageMeta
        title="Insights & Thought Leadership"
        description="Research, ideas and practical insight from Digital Governance Africa on AI governance, data governance, digital government and regulatory developments."
      />

      <section className="border-b border-line bg-surface-alt py-20">
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Research, Ideas and Practical Insight"
            subtitle="Explore DGA perspectives on artificial intelligence governance, digital government, data governance, digital transformation and regulatory developments."
          />
        </Container>
      </section>

      {featured && (
        <section className="py-16">
          <Container>
            <ArticleCard article={featured} featured />
          </Container>
        </section>
      )}

      <section className="pb-20">
        <Container>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-standard",
                  category === item
                    ? "border-gold bg-gold text-navy"
                    : "border-line text-ink-muted hover:border-gold hover:text-gold",
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:auto-rows-fr">
            {rest.map((article, index) => (
              <Reveal
                key={article.slug}
                delayMs={staggerDelay(index)}
                className={index % 3 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}
              >
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-8 text-sm text-ink-muted">No items in this category yet.</p>
          )}
        </Container>
      </section>

      <section className="border-t border-line bg-surface-alt py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <InquiryForm variant="gated-download" />
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-ink">Never miss a briefing</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Subscribe for new research, executive briefings, and programme updates.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
