import type { Metadata } from "next";
import CategoryPage, { CategoryContent } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "The Beacon — Search & Visibility | Black Flag Systems",
  description:
    "SEO systems from Black Flag Systems: Google Ads, local SEO, technical audits, on-page optimization, content strategy, link building, and full retainers.",
};

const content: CategoryContent = {
  eyebrow: "SEARCH & VISIBILITY",
  title: "THE BEACON",
  label: "Search & Visibility (SEO)",
  intro:
    "Get found the moment your market goes looking. From a single paid campaign to full search dominance, these are the systems that put you in front of buyers with intent.",
  systems: [
    {
      name: "Paid Reconnaissance",
      tag: "Google Ads",
      description:
        "Google Ads campaign setup and active management to put you in front of buyers the instant they search.",
    },
    {
      name: "Local Colors",
      tag: "Local SEO",
      description:
        "Google Business Profile optimization and local SEO so you dominate the map pack in your service area.",
    },
    {
      name: "Hull Inspection",
      tag: "Technical Audit",
      description:
        "A full technical SEO audit that surfaces every crawl, speed, and indexing issue dragging your rankings down.",
    },
    {
      name: "Charted Waters",
      tag: "On-Page",
      description:
        "On-page optimization of titles, structure, and content so every page earns its place in the rankings.",
    },
    {
      name: "The Logbook",
      tag: "Content Strategy",
      description:
        "Keyword and content strategy mapped to exactly what your market is searching for — and ready to buy.",
    },
    {
      name: "Reinforcements",
      tag: "Authority Building",
      description:
        "Backlink and authority building that strengthens your domain's standing against entrenched competitors.",
    },
    {
      name: "Reputation Watch",
      tag: "Reviews",
      description:
        "Automated review generation and monitoring to build, surface, and defend your reputation everywhere it counts.",
    },
    {
      name: "Full Blockade",
      tag: "Complete Retainer",
      description:
        "An end-to-end SEO retainer that runs every system above as one coordinated, ongoing engagement.",
    },
  ],
};

export default function Page() {
  return <CategoryPage content={content} />;
}
