import type { Metadata } from "next";
import CategoryPage, { CategoryContent } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "The Engine Room — Automation Workflows | Black Flag Systems",
  description:
    "Automation systems from Black Flag Systems: lead capture, email automation, bookkeeping, onboarding, AI assistants, missed-call text-back, dashboards, and custom builds.",
};

const content: CategoryContent = {
  eyebrow: "AUTOMATION",
  title: "THE ENGINE ROOM",
  label: "Automation Workflows",
  intro:
    "Automate the grind so your crew stays focused on conquest, not maintenance. These are the autonomous systems that capture, follow up, onboard, and report — around the clock.",
  systems: [
    {
      name: "Lead Funnel",
      tag: "Lead Capture",
      description:
        "Automated lead capture routed straight into your CRM — no lead left on the table.",
    },
    {
      name: "Signal Fires",
      tag: "Email Automation",
      description:
        "Email and notification automation that follows up instantly, every time, without you lifting a finger.",
    },
    {
      name: "The Purser",
      tag: "Bookkeeping",
      description:
        "Bookkeeping and invoice automation that keeps your books current and your cash flowing.",
    },
    {
      name: "First Boarding",
      tag: "Onboarding",
      description:
        "Customer onboarding flows that welcome, inform, and activate new clients automatically.",
    },
    {
      name: "The Quartermaster",
      tag: "AI Assistant",
      description:
        "An AI chat assistant and appointment setter that works your inbox and calendar around the clock.",
    },
    {
      name: "Missed Call Text-Back",
      tag: "Lead Recovery",
      description:
        "Instant automated text replies to missed calls so a hot lead never slips away.",
    },
    {
      name: "Fleet Intelligence",
      tag: "Dashboards",
      description:
        "Custom reporting and analytics dashboards that give you one clear view of the entire operation.",
    },
    {
      name: "Custom Rigging",
      tag: "Bespoke Builds",
      description:
        "Bespoke automation builds for any workflow unique to your business — designed and deployed to spec.",
    },
  ],
};

export default function Page() {
  return <CategoryPage content={content} />;
}
