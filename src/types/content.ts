import type { IconType } from "react-icons";

export interface NavLink {
  label: string;
  to: string;
}

export interface Program {
  slug: string;
  title: string;
  category: string;
  summary: string;
  format?: string;
  duration?: string;
  audience?: string;
}

export interface AdvisoryService {
  slug: string;
  title: string;
  icon: IconType;
  summary: string;
  capabilities: string[];
  outcome: string;
}

export type ArticleCategory = "AI Governance" | "Data Governance" | "Executive Insights" | "Policy";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  date: string;
  readingTime: string;
  summary: string;
  /** Body paragraphs, separated by blank lines — rendered on the article detail page. */
  body: string;
  gated: boolean;
  featured?: boolean;
  /** Optional override for the card image — falls back to a category cover when unset. */
  coverImage?: string;
}

export interface TeamMember {
  title: string;
  department: string;
  bio: string;
}

export interface Value {
  title: string;
  description: string;
  icon: IconType;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Faq {
  question: string;
  answer: string;
}
