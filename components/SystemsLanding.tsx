"use client";

import Link from "next/link";
import { Compass, Sword, Wind, Anchor, ChevronRight } from "lucide-react";
import { CARD_BASE, METALLIC_TEXT } from "@/components/siteStyles";
import SiteShell from "@/components/SiteShell";

type Category = {
  icon: React.ReactNode;
  title: string;
  label: string;
  blurb: string;
  href: string;
};

const categories: Category[] = [
  {
    icon: <Compass size={24} />,
    title: "THE BEACON",
    label: "Search & Visibility (SEO)",
    blurb:
      "Get found. Paid search, local SEO, technical audits, and full optimization that put you in front of buyers with intent.",
    href: "/systems/the-beacon",
  },
  {
    icon: <Sword size={24} />,
    title: "COLORS",
    label: "Social Media Management",
    blurb:
      "Fly your colors. Content, community, and paid social that build presence and pipeline across every platform.",
    href: "/systems/colors",
  },
  {
    icon: <Wind size={24} />,
    title: "THE ENGINE ROOM",
    label: "Automation Workflows",
    blurb:
      "Automate the grind. Lead capture, follow-up, onboarding, AI assistants, and custom workflows that run around the clock.",
    href: "/systems/the-engine-room",
  },
  {
    icon: <Anchor size={24} />,
    title: "THE HULL",
    label: "Web & Brand",
    blurb:
      "Build the vessel. Websites, redesigns, hosting, branding, and e-commerce — the foundation everything else sails on.",
    href: "/systems/the-hull",
  },
];

export default function SystemsLanding() {
  return (
    <SiteShell>
      <section
        className="relative pt-36 pb-28"
        style={{
          background:
            "linear-gradient(to bottom, #050505 0%, #120321 40%, #120321 60%, #050505 100%)",
        }}
      >
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-block font-mono text-xs tracking-[0.35em] uppercase mb-4 px-3 py-1"
              style={{
                color: "rgba(124,58,237,0.95)",
                border: "1px solid rgba(124,58,237,0.45)",
              }}
            >
              THE FULL ARSENAL
            </div>
            <h1
              className="font-cinzel text-5xl md:text-7xl font-black mb-6"
              style={METALLIC_TEXT}
            >
              SYSTEMS
            </h1>
            <p
              className="font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "rgba(245,245,241,0.75)" }}
            >
              A Digital Asset Management Company runs more than one engine. Choose
              a division to see every system we deploy — search, social,
              automation, and web.
            </p>
          </div>

          {/* Category windows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative p-8 md:p-10 flex flex-col transition-all duration-300"
                style={CARD_BASE}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow =
                    "0 0 50px rgba(124,58,237,0.18), inset 0 1px 0 rgba(245,245,241,0.05)";
                  el.style.borderColor = "rgba(124,58,237,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow =
                    "0 0 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(245,245,241,0.04)";
                  el.style.borderColor = "rgba(124,58,237,0.28)";
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-6"
                  style={{
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: "rgba(124,58,237,0.85)",
                  }}
                >
                  {cat.icon}
                </div>

                {/* Title */}
                <h2
                  className="font-cinzel text-2xl md:text-3xl font-black tracking-wide mb-1.5"
                  style={METALLIC_TEXT}
                >
                  {cat.title}
                </h2>

                {/* Functional label */}
                <div
                  className="font-mono text-xs tracking-[0.18em] uppercase mb-5"
                  style={{ color: "rgba(245,245,241,0.5)" }}
                >
                  {cat.label}
                </div>

                {/* Blurb */}
                <p
                  className="font-sans text-sm leading-relaxed mb-8 flex-1"
                  style={{ color: "rgba(245,245,241,0.72)" }}
                >
                  {cat.blurb}
                </p>

                {/* View link */}
                <div
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(124,58,237,0.9)" }}
                >
                  View Systems
                  <ChevronRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                  style={{
                    borderBottom: "1px solid rgba(124,58,237,0.25)",
                    borderRight: "1px solid rgba(124,58,237,0.25)",
                  }}
                />
              </Link>
            ))}
          </div>

          {/* Scoping note */}
          <p
            className="text-center font-mono text-[11px] tracking-[0.2em] mt-14"
            style={{ color: "rgba(245,245,241,0.55)" }}
          >
            EVERY ENGAGEMENT IS SCOPED INDIVIDUALLY — BY SYSTEM, SCOPE, COMPLIANCE,
            AND URGENCY.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
