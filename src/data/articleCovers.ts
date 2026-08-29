// import coverPolicy from "../assets/covers/cover-media.svg";
import type { ArticleCategory } from "../types/content";
import imageAfricaIsBuying from "../assets/images/Africa-is-buying-faster.webp";
import imageExecutiveInsights from "../assets/images/executive-fluency.webp";
import imageDataGovernance from "../assets/images/Data_Governance_Article_2.webp";

// Default cover per category, used when an Article has no coverImage of its own.
// Swap an entry here to re-theme every card in that category at once, or set
// `coverImage` on an individual article in data/articles.ts to override just one.
export const ARTICLE_CATEGORY_COVERS: Record<ArticleCategory, string> = {
  "AI Governance": imageAfricaIsBuying,
  "Data Governance": imageDataGovernance,
  "Executive Insights": imageExecutiveInsights,
  Policy: imageExecutiveInsights,
};
