import coverDataGovernance from "../assets/covers/cover-report.svg";
import coverExecutiveInsights from "../assets/covers/cover-commentary.svg";
import coverAiGovernance from "../assets/covers/cover-case-study.svg";
import coverPolicy from "../assets/covers/cover-media.svg";
import type { ArticleCategory } from "../types/content";

// Default cover per category, used when an Article has no coverImage of its own.
// Swap an entry here to re-theme every card in that category at once, or set
// `coverImage` on an individual article in data/articles.ts to override just one.
export const ARTICLE_CATEGORY_COVERS: Record<ArticleCategory, string> = {
  "AI Governance": coverAiGovernance,
  "Data Governance": coverDataGovernance,
  "Executive Insights": coverExecutiveInsights,
  Policy: coverPolicy,
};
