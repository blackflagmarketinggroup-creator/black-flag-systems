"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CARD_BASE, DIVIDER, METALLIC_TEXT } from "@/components/siteStyles";
import SiteShell from "@/components/SiteShell";
import { useContact } from "@/components/ContactContext";

export type SystemItem = {
  name: string;
  tag: string;
  description: string;
};

export type CategoryContent = {
  eyebrow: string; // small label above title, e.g. "SEARCH & VISIBILITY"
  title: string; // themed name, e.g. "THE BEACON"
  label: string; // functional label, e.g. "Search & Visibility (SEO)"
  intro: string;
  systems: SystemItem[];
};

// ── SystemRow ─────────────────────────────────────────────────────────────────
function SystemRow({ system }: { system: SystemItem }) {
  const openContact = useContact();

  return (
    <div
      className="group relative flex items-center gap-5 p-6 md:p-7 transition-all duration-300"
      style={CARD_BASE}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow =
          "0 0 40px rgba(124,58,237,0.15), inset 0 1px 0 rgba(245,245,241,0.05)";
        el.style.borderColor = "rgba(124,58,237,0.45)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow =
          "0 0 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(245,245,241,0.04)";
        el.style.borderColor = "rgba(124,58,237,0.28)";
      }}
    >
      <div className="flex-1">
        <div
          className="font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
          style={{ color: "rgba(124,58,237,0.88)" }}
        >
          {system.tag}
        </div>
        <h3
          className="font-cinzel text-lg md:text-xl font-bold tracking-wide mb-2"
          style={METALLIC_TEXT}
        >
          {system.name}
        </h3>
        <p
          className="font-sans text-sm leading-relaxed max-w-2xl"
          style={{ color: "rgba(245,245,241,0.72)" }}
        >
          {system.description}
        </p>
      </div>

      {/* Small arrow CTA */}
      <button
        onClick={() => openContact(system.name)}
        aria-label={`Request ${system.name}`}
        className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200"
        style={{
          border: "1px solid rgba(124,58,237,0.4)",
          color: "rgba(245,245,241,0.85)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background =
            "linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(76,29,149,0.75) 100%)";
          el.style.borderColor = "rgba(124,58,237,0.7)";
          el.style.boxShadow = "0 0 22px rgba(124,58,237,0.35)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "transparent";
          el.style.borderColor = "rgba(124,58,237,0.4)";
          el.style.boxShadow = "none";
        }}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

// ── CategoryPage ──────────────────────────────────────────────────────────────
export default function CategoryPage({ content }: { content: CategoryContent }) {
  return (
    <SiteShell>
      <section
        className="relative pt-36 pb-28"
        style={{
          background:
            "linear-gradient(to bottom, #050505 0%, #120321 45%, #120321 60%, #050505 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/systems"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.25em] uppercase mb-10 transition-colors duration-200"
            style={{ color: "rgba(245,245,241,0.5)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(245,245,241,0.9)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(245,245,241,0.5)")
            }
          >
            <ChevronLeft size={14} />
            All Systems
          </Link>

          {/* Header */}
          <div className="mb-14">
            <div
              className="inline-block font-mono text-xs tracking-[0.35em] uppercase mb-4 px-3 py-1"
              style={{
                color: "rgba(124,58,237,0.95)",
                border: "1px solid rgba(124,58,237,0.45)",
              }}
            >
              {content.eyebrow}
            </div>
            <h1
              className="font-cinzel text-5xl md:text-6xl font-black mb-3"
              style={METALLIC_TEXT}
            >
              {content.title}
            </h1>
            <div
              className="font-mono text-sm tracking-[0.18em] uppercase mb-6"
              style={{ color: "rgba(245,245,241,0.55)" }}
            >
              {content.label}
            </div>
            <p
              className="font-sans text-base md:text-lg leading-relaxed max-w-2xl"
              style={{ color: "rgba(245,245,241,0.75)" }}
            >
              {content.intro}
            </p>
          </div>

          {/* System list */}
          <div className="flex flex-col gap-4">
            {content.systems.map((system) => (
              <SystemRow key={system.name} system={system} />
            ))}
          </div>

          {/* Scoping note */}
          <p
            className="text-center font-mono text-[11px] tracking-[0.2em] mt-12"
            style={{ color: "rgba(245,245,241,0.55)" }}
          >
            EVERY ENGAGEMENT IS SCOPED INDIVIDUALLY — BY SYSTEM, SCOPE, COMPLIANCE,
            AND URGENCY.
          </p>

          {/* Category CTA */}
          <div
            className="relative mt-8 p-10 text-center"
            style={CARD_BASE}
          >
            <div className="absolute top-0 inset-x-0 h-px" style={DIVIDER} />
            <h2
              className="font-cinzel text-2xl md:text-3xl font-black mb-3"
              style={METALLIC_TEXT}
            >
              READY TO DEPLOY?
            </h2>
            <p
              className="font-sans text-sm mb-7 max-w-md mx-auto leading-relaxed"
              style={{ color: "rgba(245,245,241,0.72)" }}
            >
              Every engagement begins with a strategy call. We&rsquo;ll scope the
              right systems for your operation — no quarter given on results.
            </p>
            <CategoryCta />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

// ── CategoryCta ───────────────────────────────────────────────────────────────
function CategoryCta() {
  const openContact = useContact();
  return (
    <button
      onClick={() => openContact()}
      className="group inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] font-bold px-10 py-4 transition-all duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.9) 0%, rgba(76,29,149,0.8) 100%)",
        border: "1px solid rgba(124,58,237,0.7)",
        boxShadow:
          "0 0 30px rgba(124,58,237,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
        color: "#F5F5F1",
        cursor: "pointer",
      }}
    >
      BOARD NOW
      <ChevronRight
        size={14}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </button>
  );
}
