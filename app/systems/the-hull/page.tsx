import type { Metadata } from "next";
import CategoryPage, { CategoryContent } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "The Hull — Web & Brand | Black Flag Systems",
  description:
    "Web and brand systems from Black Flag Systems: new websites, redesigns, hosting and maintenance, branding and identity, and e-commerce storefronts.",
};

const content: CategoryContent = {
  eyebrow: "WEB & BRAND",
  title: "THE HULL",
  label: "Web & Brand",
  intro:
    "Build the vessel everything else sails on. From a conversion-focused new site to a full rebrand, these systems give your operation a presence worth optimizing.",
  systems: [
    {
      name: "Dry Dock",
      tag: "New Website",
      description:
        "A new, conversion-focused website designed and built from the keel up.",
    },
    {
      name: "The Refit",
      tag: "Redesign",
      description:
        "A full redesign and remodel of your existing site — modernized, optimized, and rebuilt to perform.",
    },
    {
      name: "Keel Maintenance",
      tag: "Hosting & Care",
      description:
        "Ongoing hosting, updates, and maintenance that keep your site fast, secure, and online.",
    },
    {
      name: "The Crest",
      tag: "Branding & Identity",
      description:
        "Complete branding and identity — logo, color, and brand kit that command respect on sight.",
    },
    {
      name: "The Marketplace",
      tag: "E-Commerce",
      description:
        "E-commerce and Shopify storefront setup, built from the ground up to sell.",
    },
  ],
};

export default function Page() {
  return <CategoryPage content={content} />;
}
