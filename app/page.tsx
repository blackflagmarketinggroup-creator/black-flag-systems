"use client";

import {
  Sword,
  Anchor,
  Compass,
  Wind,
  Crosshair,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CARD_BASE, DIVIDER, METALLIC_TEXT } from "@/components/siteStyles";
import SiteShell from "@/components/SiteShell";
import { useContact } from "@/components/ContactContext";

// ── StatCounter ───────────────────────────────────────────────────────────────
function StatCounter({
  target,
  suffix,
  decimals = 0,
  label,
  sublabel,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  label: string;
  sublabel?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / 2200, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals]);

  return (
    <div ref={ref} className="text-center px-4">
      <div
        className="font-cinzel text-5xl md:text-6xl font-black tracking-tight"
        style={METALLIC_TEXT}
      >
        {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        {suffix}
      </div>
      <div
        className="font-cinzel text-sm tracking-[0.25em] font-bold mt-3 mb-1"
        style={{ color: "rgba(124,58,237,0.9)" }}
      >
        {label}
      </div>
      {sublabel && (
        <div
          className="font-mono text-xs tracking-[0.15em] uppercase"
          style={{ color: "rgba(245,245,241,0.65)" }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

// ── SectionLabel ──────────────────────────────────────────────────────────────
function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-16">
      <div
        className="inline-block font-mono text-xs tracking-[0.35em] uppercase mb-4 px-3 py-1"
        style={{
          color: "rgba(124,58,237,0.95)",
          border: "1px solid rgba(124,58,237,0.45)",
        }}
      >
        {eyebrow}
      </div>
      <h2
        className="font-cinzel text-4xl md:text-5xl font-black"
        style={METALLIC_TEXT}
      >
        {title}
      </h2>
    </div>
  );
}

// ── OpeningSalvo (Hero) ───────────────────────────────────────────────────────
function OpeningSalvo() {
  const openContact = useContact();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.18) 0%, rgba(76,29,149,0.06) 45%, transparent 70%)",
        }}
      />
      {/* Subtle top vignette */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)",
        }}
      />

      {/* Decorative compass rose watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <Compass
          size={480}
          strokeWidth={0.3}
          style={{ color: "rgba(124,58,237,0.04)", flexShrink: 0 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-20">
        {/* Pre-headline label */}
        <div
          className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.35em] uppercase mb-10"
          style={{ color: "rgba(124,58,237,0.95)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 8px rgba(124,58,237,0.8)",
              animation: "blink 2.4s ease-in-out infinite",
            }}
          />
          Digital Asset Management Company
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 8px rgba(124,58,237,0.8)",
              animation: "blink 2.4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Main headline */}
        <h1 className="font-cinzel font-black leading-[1.05] tracking-tight mb-8">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl"
            style={METALLIC_TEXT}
          >
            NO QUARTER GIVEN.
          </span>
          <span
            className="block text-4xl md:text-6xl lg:text-7xl mt-2"
            style={{
              background:
                "linear-gradient(180deg, rgba(200,180,255,0.95) 0%, rgba(124,58,237,0.85) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TOTAL MARKET DOMINANCE.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(245,245,241,0.78)" }}
        >
          <Wind
            size={16}
            className="inline mr-2 -mt-0.5"
            style={{ color: "rgba(124,58,237,0.7)" }}
          />
          Building the autonomous systems that hunt and scale your revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => openContact()}
            className="group relative inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] font-bold px-10 py-4 transition-all duration-300"
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
            <Sword size={14} />
            BOARD NOW
            <ChevronRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
          <a
            href="#results"
            className="inline-flex items-center gap-2 font-cinzel text-sm tracking-[0.2em] font-bold px-10 py-4 transition-all duration-200"
            style={{
              border: "1px solid rgba(245,245,241,0.18)",
              color: "rgba(245,245,241,0.7)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(124,58,237,0.4)";
              el.style.color = "rgba(245,245,241,0.95)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(245,245,241,0.18)";
              el.style.color = "rgba(245,245,241,0.7)";
            }}
          >
            VIEW THE MANIFEST
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{ color: "rgba(245,245,241,0.5)" }}
        >
          <div
            className="w-px h-14"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)",
            }}
          />
          <span className="font-mono text-[10px] tracking-[0.3em]">MAKE WAY</span>
        </div>
      </div>
    </section>
  );
}

// ── TheHold (Capabilities) ────────────────────────────────────────────────────
function TheHold() {
  const capabilities = [
    {
      icon: <Sword size={22} />,
      title: "REVENUE ENGINES",
      description:
        "Autonomous sales funnels and pipeline architectures that close deals while you sleep. Zero manual intervention required.",
      tag: "Automated Conversion",
    },
    {
      icon: <Anchor size={22} />,
      title: "DEEP WATER OUTREACH",
      description:
        "AI-driven prospecting systems that surface high-value targets at scale. Multi-channel sequences built to convert cold water into revenue.",
      tag: "AI Prospecting",
    },
    {
      icon: <Compass size={22} />,
      title: "FLEET INTELLIGENCE",
      description:
        "Full-stack data architecture and analytics dashboards giving you X-ray vision on your market, your pipeline, and your competition.",
      tag: "Growth Analytics",
    },
    {
      icon: <Wind size={22} />,
      title: "WIND AT YOUR BACK",
      description:
        "End-to-end workflow automation that eliminates 80+ hours of manual execution per month. Your crew focused on conquest, not maintenance.",
      tag: "Workflow Automation",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(to bottom, #050505 0%, #120321 40%, #120321 60%, #050505 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel eyebrow="OUR ARSENAL" title="THE HOLD" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative p-8 transition-all duration-300"
              style={{
                ...CARD_BASE,
                cursor: "default",
              }}
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
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 mb-6"
                style={{
                  border: "1px solid rgba(124,58,237,0.35)",
                  color: "rgba(124,58,237,0.85)",
                }}
              >
                {cap.icon}
              </div>

              {/* Tag */}
              <div
                className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ color: "rgba(124,58,237,0.88)" }}
              >
                {cap.tag}
              </div>

              {/* Title */}
              <h3
                className="font-cinzel text-xl font-bold tracking-wide mb-4"
                style={METALLIC_TEXT}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: "rgba(245,245,241,0.72)" }}
              >
                {cap.description}
              </p>

              {/* Corner accent */}
              <div
                className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none"
                style={{
                  borderBottom: "1px solid rgba(124,58,237,0.25)",
                  borderRight: "1px solid rgba(124,58,237,0.25)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BountyBoard (Social Proof / Stats) ────────────────────────────────────────
function BountyBoard() {
  return (
    <section id="results" className="relative py-28 overflow-hidden">
      {/* Centered radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76,29,149,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionLabel eyebrow="THE MANIFEST" title="THE PLUNDER" />

        {/* Stats */}
        <div
          className="relative p-10 md:p-16 mb-16"
          style={{
            ...CARD_BASE,
            border: "1px solid rgba(124,58,237,0.22)",
          }}
        >
          {/* Top rule */}
          <div className="absolute top-0 inset-x-0 h-px" style={DIVIDER} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
            <StatCounter
              target={412}
              suffix="%"
              label="REVENUE INCREASE"
              sublabel="Average client result"
            />

            {/* Vertical divider — desktop */}
            <div className="hidden md:flex flex-col items-center">
              <div
                className="absolute top-10 bottom-10"
                style={{
                  width: "1px",
                  left: "33.33%",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(124,58,237,0.25), transparent)",
                }}
              />
              <StatCounter
                target={3.4}
                suffix="x"
                decimals={1}
                label="RETURN ON INVESTMENT"
                sublabel="Measured over 90 days"
              />
              <div
                className="absolute top-10 bottom-10"
                style={{
                  width: "1px",
                  left: "66.66%",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(124,58,237,0.25), transparent)",
                }}
              />
            </div>

            {/* Mobile: show middle stat without dividers */}
            <div className="md:hidden">
              <StatCounter
                target={3.4}
                suffix="x"
                decimals={1}
                label="RETURN ON INVESTMENT"
                sublabel="Measured over 90 days"
              />
            </div>

            <StatCounter
              target={80}
              suffix="+"
              label="HOURS RECLAIMED"
              sublabel="Monthly per client"
            />
          </div>

          {/* Bottom rule */}
          <div className="absolute bottom-0 inset-x-0 h-px" style={DIVIDER} />
        </div>

        {/* Testimonial / manifest quote */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="font-mono text-[11px] tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(124,58,237,0.88)" }}
          >
            — Field Report —
          </div>
          <blockquote
            className="font-cinzel text-xl md:text-2xl font-bold leading-relaxed mb-6"
            style={{ color: "rgba(245,245,241,0.82)" }}
          >
            &ldquo;They didn&rsquo;t just automate our workflows. They rebuilt the
            entire revenue architecture. We closed $2.1M in pipeline we
            would&rsquo;ve missed entirely.&rdquo;
          </blockquote>
          <cite
            className="font-mono text-xs tracking-[0.25em] not-italic"
            style={{ color: "rgba(245,245,241,0.65)" }}
          >
            DIRECTOR OF GROWTH — SERIES B SAAS
          </cite>
        </div>
      </div>
    </section>
  );
}

// ── Provisions (Scoping — replaces fixed pricing tiers) ────────────────────────
function Provisions() {
  const openContact = useContact();

  const factors = [
    {
      icon: <Crosshair size={20} />,
      name: "SYSTEM",
      detail: "Which systems you deploy",
    },
    {
      icon: <Compass size={20} />,
      name: "SCOPE",
      detail: "Depth and scale of the work",
    },
    {
      icon: <Anchor size={20} />,
      name: "COMPLIANCE",
      detail: "Regulatory & security requirements",
    },
    {
      icon: <Wind size={20} />,
      name: "URGENCY",
      detail: "Speed of delivery",
    },
  ];

  return (
    <section
      id="provisions"
      className="relative py-28"
      style={{
        background:
          "linear-gradient(to bottom, #050505 0%, #120321 35%, #120321 65%, #050505 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionLabel eyebrow="EVERY ENGAGEMENT IS SCOPED" title="PROVISIONS" />

        <div className="relative p-10 md:p-14" style={CARD_BASE}>
          {/* Top rule */}
          <div className="absolute top-0 inset-x-0 h-px" style={DIVIDER} />

          {/* Statement */}
          <p
            className="font-sans text-lg md:text-xl text-center leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: "rgba(245,245,241,0.82)" }}
          >
            No fixed price lists. Every engagement is built to the mission. What
            you invest depends on the{" "}
            <strong style={{ color: "#F5F5F1" }}>system</strong>,{" "}
            <strong style={{ color: "#F5F5F1" }}>scope</strong>,{" "}
            <strong style={{ color: "#F5F5F1" }}>compliance</strong> requirements,
            and <strong style={{ color: "#F5F5F1" }}>urgency</strong> of delivery.
          </p>

          {/* Factor grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {factors.map((f) => (
              <div
                key={f.name}
                className="flex flex-col items-center text-center gap-3 p-5"
                style={{
                  border: "1px solid rgba(124,58,237,0.22)",
                  background: "rgba(124,58,237,0.04)",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10"
                  style={{
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: "rgba(124,58,237,0.85)",
                  }}
                >
                  {f.icon}
                </div>
                <div
                  className="font-cinzel text-sm font-bold tracking-[0.18em]"
                  style={METALLIC_TEXT}
                >
                  {f.name}
                </div>
                <div
                  className="font-mono text-[10px] tracking-[0.12em] uppercase leading-relaxed"
                  style={{ color: "rgba(245,245,241,0.6)" }}
                >
                  {f.detail}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
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
              <Sword size={14} />
              REQUEST YOUR SCOPE
              <ChevronRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Bottom rule */}
          <div className="absolute bottom-0 inset-x-0 h-px" style={DIVIDER} />
        </div>

        {/* Fine print */}
        <p
          className="text-center font-mono text-[11px] tracking-[0.2em] mt-10"
          style={{ color: "rgba(245,245,241,0.58)" }}
        >
          ALL ENGAGEMENTS BEGIN WITH A STRATEGY CALL. NO QUARTER GIVEN ON RESULTS.
        </p>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <SiteShell>
      <OpeningSalvo />

      <div className="max-w-5xl mx-auto px-6">
        <div style={DIVIDER} />
      </div>

      <TheHold />

      <div className="max-w-5xl mx-auto px-6">
        <div style={DIVIDER} />
      </div>

      <BountyBoard />

      <div className="max-w-5xl mx-auto px-6">
        <div style={DIVIDER} />
      </div>

      <Provisions />
    </SiteShell>
  );
}
