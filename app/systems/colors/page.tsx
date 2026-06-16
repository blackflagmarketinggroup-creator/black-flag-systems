import type { Metadata } from "next";
import CategoryPage, { CategoryContent } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Colors — Social Media Management | Black Flag Systems",
  description:
    "Social media systems from Black Flag Systems: profile setup, content calendars, content creation, community management, paid social, analytics, and full management.",
};

const content: CategoryContent = {
  eyebrow: "SOCIAL PRESENCE",
  title: "COLORS",
  label: "Social Media Management",
  intro:
    "Fly your colors across every platform. From a managed content calendar to full-service command, these systems build the presence — and the pipeline — that turn followers into revenue.",
  systems: [
    {
      name: "Raising Colors",
      tag: "Setup & Branding",
      description:
        "Profile setup, optimization, and brand alignment across every platform you fly on.",
    },
    {
      name: "The Watch Rotation",
      tag: "Content Calendar",
      description:
        "A managed content calendar with consistent scheduling so your feed never goes dark.",
    },
    {
      name: "The Forge",
      tag: "Content Creation",
      description:
        "Original content creation — graphics, captions, and short-form video built to stop the scroll.",
    },
    {
      name: "Hailing the Fleet",
      tag: "Community Management",
      description:
        "Active community management — replies, DMs, and engagement that turn followers into leads.",
    },
    {
      name: "Paid Boarding",
      tag: "Paid Social",
      description:
        "Paid social ad campaigns engineered to expand reach and convert attention into customers.",
    },
    {
      name: "Spyglass",
      tag: "Analytics",
      description:
        "Social analytics and reporting that show exactly what's working and where to double down.",
    },
    {
      name: "Full Command",
      tag: "Complete Retainer",
      description:
        "Full-service social media management bundling every system above under one engagement.",
    },
  ],
};

export default function Page() {
  return <CategoryPage content={content} />;
}
