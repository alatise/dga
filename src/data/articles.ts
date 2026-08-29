import type { Article } from "../types/content";

// Placeholder-but-real-shaped articles, pending the client's actual content
// per the Scope doc's "content + metadata + image direction provided
// separately" note. Swap title/summary/body/date once the real copy lands —
// the structure (category, reading time, gating) is final.

export const ARTICLES: Article[] = [
  {
    slug: "governing-ai-in-african-institutions",
    title: "Governing Artificial Intelligence in African Institutions",
    category: "AI Governance",
    date: "2026-05-12",
    readingTime: "7 min read",
    summary:
      "A practical look at how African governments and enterprises can build AI governance frameworks that balance innovation with accountability.",
    body: `Artificial intelligence is moving from pilot projects to core institutional infrastructure across Africa — in tax administration, healthcare triage, credit scoring, and public service delivery. That shift changes what governance means: it is no longer a policy statement, but an operating discipline.

Most institutions we work with start in the same place — enthusiasm for what AI can do, and no structured way to answer basic governance questions. Who owns a model's decisions? What happens when it's wrong? Who signs off before it touches a citizen or a customer?

A workable AI governance framework starts with three things: a clear inventory of where AI is actually in use (often broader than leadership assumes), a risk-tiering approach so oversight is proportionate rather than uniform, and a human-oversight model that's specific about who intervenes and when — not a general statement about "human-in-the-loop."

None of this requires waiting for continental or national AI legislation to mature. Institutions that build this internal discipline now are the ones that will adapt fastest once formal regulation catches up.`,
    gated: true,
    featured: true,
  },
  {
    slug: "data-as-a-strategic-national-asset",
    title: "Data as a Strategic National Asset",
    category: "Data Governance",
    date: "2026-03-24",
    readingTime: "6 min read",
    summary:
      "Why treating government and enterprise data as a governed strategic asset — not just an IT byproduct — is foundational to digital transformation.",
    body: `Data governance is often framed as a compliance exercise — a response to a data protection law, or a prerequisite for an audit. That framing undersells what's actually at stake.

Data that is fragmented, poorly classified, and inconsistently owned is a direct constraint on institutional capability. Policy decisions get made on incomplete pictures. Digital services can't interoperate. AI initiatives stall because there's no trustworthy data to train or validate against.

Treating data as a strategic asset means assigning real ownership and stewardship — not just an IT custodian, but a business owner accountable for its quality and use. It means classifying data by sensitivity and value, not just storing it uniformly. And it means building the sharing models that let institutions collaborate without each one re-collecting the same information from citizens and businesses.

Institutions that get this right don't just reduce risk — they materially increase the value they can extract from digital transformation investments already underway.`,
    gated: true,
  },
  {
    slug: "why-digital-transformation-is-a-governance-challenge",
    title: "Why Digital Transformation Is a Governance Challenge",
    category: "Executive Insights",
    date: "2026-01-30",
    readingTime: "5 min read",
    summary:
      "Digital transformation programmes fail more often from weak governance than weak technology. Here's what that means for executive sponsors.",
    body: `When a digital transformation programme stalls, the postmortem usually points at technology — the platform was wrong, the integration was too complex, the timeline was unrealistic. In our experience advising institutions across the continent, the more common root cause is governance, not technology.

Transformation programmes that succeed have a small number of governance features in common: a clear decision-rights model so trade-offs get resolved quickly rather than escalating indefinitely; an accountable senior sponsor who owns outcomes, not just budget; and a change-management track that's resourced as seriously as the technical build.

For executive sponsors, the practical implication is this: the questions worth asking in a steering committee aren't "is the platform on track," but "do we have clear ownership for the decisions this programme will force us to make," and "is someone accountable for whether this actually changes how the institution operates."

Technology is necessary. It has never been sufficient.`,
    gated: false,
  },
];
