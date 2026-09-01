import type { Program } from "../types/content";

export const PROGRAMME_CATEGORIES = [
  "Government and Public Sector",
  "Corporate Governance",
  "Legal and Compliance",
] as const;

export const PROGRAMS: Program[] = [
  // Government and Public Sector
  {
    slug: "digital-government-governance",
    title: "Digital Government Governance",
    category: "Government and Public Sector",
    summary:
      "For public-sector leaders shaping the governance of digital government services.",
  },
  {
    slug: "data-governance-stewardship",
    title: "Data Governance and Stewardship",
    category: "Government and Public Sector",
    summary:
      "For officials responsible for establishing accountable, trustworthy data practice.",
  },
  {
    slug: "ai-public-sector-leaders",
    title: "AI for Public Sector Leaders",
    category: "Government and Public Sector",
    summary:
      "For leaders navigating responsible AI adoption within government institutions.",
  },
  {
    slug: "sustainable-development-intelligence",
    title: "Sustainable Development Intelligence",
    category: "Government and Public Sector",
    summary:
      "For teams using data and intelligence to advance sustainable development outcomes.",
  },
  {
    slug: "national-digital-infrastructure-governance",
    title: "National Digital Infrastructure Governance",
    category: "Government and Public Sector",
    summary:
      "For institutions overseeing the governance of national digital infrastructure.",
  },

  // Corporate Governance
  {
    slug: "enterprise-governance-2030",
    title: "Enterprise Governance 2030™",
    category: "Corporate Governance",
    summary:
      "For Legal, Compliance, Risk and Internal Audit leaders preparing institutions for the future.",
  },
  {
    slug: "ai-governance-boards-executives",
    title: "AI Governance for Boards and Executives",
    category: "Corporate Governance",
    summary:
      "For boards and executives building fluency in AI governance and oversight.",
  },
  {
    slug: "data-governance-leadership",
    title: "Data Governance Leadership",
    category: "Corporate Governance",
    summary:
      "For leaders establishing enterprise-wide data governance capability.",
  },
  {
    slug: "digital-governance-assurance",
    title: "Digital Governance and Governance Assurance",
    category: "Corporate Governance",
    summary:
      "For leaders strengthening digital governance oversight and assurance practice.",
  },

  // Legal and Compliance
  {
    slug: "future-corporate-legal-function",
    title: "The Future Corporate Legal Function",
    category: "Legal and Compliance",
    summary:
      "For General Counsel, in-house lawyers and governance professionals.",
  },
  {
    slug: "ai-governance-in-house-lawyers",
    title: "AI Governance for In-House Lawyers",
    category: "Legal and Compliance",
    summary:
      "For legal teams advising on the governance and regulation of AI adoption.",
  },
  {
    slug: "digital-regulatory-intelligence",
    title: "Digital Regulatory Intelligence",
    category: "Legal and Compliance",
    summary:
      "For professionals tracking and interpreting digital regulatory developments.",
  },
  {
    slug: "legal-operations-responsible-ai",
    title: "Legal Operations and Responsible AI",
    category: "Legal and Compliance",
    summary:
      "For legal operations leaders integrating responsible AI into legal practice.",
  },
];
