"use client";

import Image from "next/image";
import {
  Sword,
  Skull,
  Anchor,
  Compass,
  Wind,
  Crosshair,
  Menu,
  X,
  Check,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ContactModal from "@/components/ContactModal";

// ── Shared style constants ────────────────────────────────────────────────────
const CARD_BASE: React.CSSProperties = {
  background: "rgba(18, 3, 33, 0.55)",
  backdropFilter: "blur(14px) saturate(160%)",
  WebkitBackdropFilter: "blur(14px) saturate(160%)",
  border: "1px solid rgba(124, 58, 237, 0.28)",
  boxShadow:
    "0 0 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(245,245,241,0.04)",
};

const CARD_VANGUARD: React.CSSProperties = {
  background: "rgba(18, 3, 33, 0.65)",
  backdropFilter: "blur(18px) saturate(200%)",
  WebkitBackdropFilter: "blur(18px) saturate(200%)",
  border: "1px solid rgba(124, 58, 237, 0.65)",
  boxShadow:
    "0 0 60px rgba(124,58,237,0.28), 0 0 120px rgba(124,58,237,0.10), inset 0 0 40px rgba(124,58,237,0.04), inset 0 1px 0 rgba(245,245,241,0.06)",
};

const DIVIDER: React.CSSProperties = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 30%, rgba(124,58,237,0.3) 70%, transparent)",
};

const METALLIC_TEXT: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #F5F5F1 0%, rgba(220,210,240,0.9) 50%, rgba(245,245,241,0.75) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

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
          style={{ color: "rgba(245,245,241,0.4)" }}
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
          color: "rgba(124,58,237,0.8)",
          border: "1px solid rgba(124,58,237,0.25)",
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

// ── CommandBridgeNav ──────────────────────────────────────────────────────────
function CommandBridgeNav({ onContact }: { onContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "RESULTS", href: "#results" },
    { label: "PROVISIONS", href: "#provisions" },
  ];

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,5,5,0.96)" : "rgba(5,5,5,0.72)",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        borderBottom: "1px solid rgba(124,58,237,0.22)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.7)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-[0.22em] transition-colors duration-200"
              style={{ color: "rgba(245,245,241,0.5)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(245,245,241,0.9)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(245,245,241,0.5)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Brand — right side */}
        <div className="flex items-center gap-3 ml-auto">
          <span
            className="hidden sm:block font-cinzel text-sm tracking-[0.18em] font-bold"
            style={{
              background:
                "linear-gradient(90deg, #F5F5F1 0%, rgba(200,180,255,0.95) 50%, #F5F5F1 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BLACK FLAG SYSTEMS
          </span>
          <div
            className="rounded-full overflow-hidden"
            style={{
              border: "1px solid rgba(124,58,237,0.45)",
              boxShadow: "0 0 14px rgba(124,58,237,0.2)",
            }}
          >
            <Image
              src="/Skull & Cross Swords.png"
              alt="Black Flag Systems"
              width={40}
              height={40}
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-4 transition-colors duration-200"
          style={{ color: "rgba(245,245,241,0.6)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(124,58,237,0.18)",
            background: "rgba(5,5,5,0.98)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-4 font-mono text-xs tracking-[0.22em] transition-colors duration-200"
              style={{ color: "rgba(245,245,241,0.55)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 py-4">
            <button
              className="block w-full text-center font-cinzel text-xs tracking-[0.2em] py-3 px-6"
              style={{
                border: "1px solid rgba(124,58,237,0.5)",
                color: "rgba(245,245,241,0.9)",
              }}
              onClick={() => { setMenuOpen(false); onContact(); }}
            >
              BOARD NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ── OpeningSalvo (Hero) ───────────────────────────────────────────────────────
function OpeningSalvo({ onContact }: { onContact: () => void }) {
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
          style={{ color: "rgba(124,58,237,0.75)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#7c3aed",
              boxShadow: "0 0 8px rgba(124,58,237,0.8)",
              animation: "blink 2.4s ease-in-out infinite",
            }}
          />
          AI Automation & Digital Growth Agency
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
          style={{ color: "rgba(245,245,241,0.55)" }}
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
            onClick={onContact}
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
          style={{ color: "rgba(245,245,241,0.2)" }}
        >
          <div
            className="w-px h-14"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)",
            }}
          />
          <span className="font-mono text-[10px] tracking-[0.3em]">
            MAKE WAY
          </span>
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
                style={{ color: "rgba(124,58,237,0.6)" }}
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
                style={{ color: "rgba(245,245,241,0.5)" }}
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
            style={{ color: "rgba(124,58,237,0.55)" }}
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
            style={{ color: "rgba(245,245,241,0.35)" }}
          >
            DIRECTOR OF GROWTH — SERIES B SAAS
          </cite>
        </div>
      </div>
    </section>
  );
}

// ── ResourceAllocation (Pricing) ──────────────────────────────────────────────
function ResourceAllocation({ onContact }: { onContact: (tier: string) => void }) {
  const tiers = [
    {
      name: "RECON",
      icon: <Crosshair size={20} />,
      price: "From $2,500",
      period: "/month",
      description: "For companies ready to weaponize their first automated revenue channel.",
      features: [
        "Automated lead generation pipeline",
        "AI-powered email sequences",
        "CRM integration & data sync",
        "Monthly strategy session",
        "Performance reporting dashboard",
        "1 active campaign",
      ],
      cta: "BEGIN RECON",
      highlight: false,
    },
    {
      name: "VANGUARD",
      icon: <Sword size={20} />,
      price: "From $5,500",
      period: "/month",
      badge: "MOST PLUNDERED",
      description: "For growth-stage companies ready to dominate multiple channels simultaneously.",
      features: [
        "Everything in RECON",
        "Multi-channel outreach systems",
        "AI prospecting & targeting",
        "Real-time analytics dashboard",
        "Custom workflow builds",
        "3 active campaigns",
        "Priority response (4hr SLA)",
        "Bi-weekly strategy sessions",
      ],
      cta: "TAKE COMMAND",
      highlight: true,
    },
    {
      name: "ARCHITECT",
      icon: <Skull size={20} />,
      price: "Custom",
      period: "engagement",
      description: "Pick your weapons. Built for individuals who need 1 or 2 precision systems deployed — no full retainer required.",
      features: [
        "Automated Lead Funnel",
        "Social Media Content Engine",
        "Email & Notification Systems",
        "CRM Pipeline Automation",
        "Reputation & Review Management",
        "AI Appointment Setter",
        "Reporting & Analytics Dashboards",
        "Missed Call Text-Back",
        "AI Chat Assistant",
        "Invoice & Payment Follow-Up",
      ],
      cta: "REQUEST INTEL",
      highlight: false,
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
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel eyebrow="CHOOSE YOUR ENGAGEMENT" title="PROVISIONS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative p-8 flex flex-col h-full transition-all duration-300"
              style={tier.highlight ? CARD_VANGUARD : CARD_BASE}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 font-mono text-[10px] tracking-[0.3em] uppercase whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(124,58,237,0.9), rgba(76,29,149,0.9))",
                    border: "1px solid rgba(124,58,237,0.6)",
                    color: "#F5F5F1",
                    boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              {/* Tier icon */}
              <div
                className="mb-4 flex items-center gap-2"
                style={{
                  color: tier.highlight
                    ? "rgba(124,58,237,0.9)"
                    : "rgba(245,245,241,0.3)",
                }}
              >
                {tier.icon}
              </div>

              {/* Tier name */}
              <h3
                className="font-cinzel text-3xl font-black tracking-widest mb-2"
                style={METALLIC_TEXT}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(124,58,237,0.18)" }}>
                <span
                  className="font-cinzel text-2xl font-bold"
                  style={{ color: "rgba(245,245,241,0.85)" }}
                >
                  {tier.price}
                </span>
                <span
                  className="font-mono text-xs ml-1"
                  style={{ color: "rgba(245,245,241,0.35)" }}
                >
                  {tier.period}
                </span>
                <p
                  className="font-sans text-sm mt-3 leading-relaxed"
                  style={{ color: "rgba(245,245,241,0.45)" }}
                >
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-sans text-sm"
                    style={{ color: "rgba(245,245,241,0.65)" }}
                  >
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0"
                      style={{ color: "rgba(124,58,237,0.8)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => onContact(tier.name)}
                className="block w-full text-center font-cinzel text-xs tracking-[0.22em] font-bold py-4 px-6 transition-all duration-200"
                style={
                  tier.highlight
                    ? {
                        background:
                          "linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(76,29,149,0.75) 100%)",
                        border: "1px solid rgba(124,58,237,0.6)",
                        color: "#F5F5F1",
                        boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                        cursor: "pointer",
                      }
                    : {
                        border: "1px solid rgba(245,245,241,0.2)",
                        color: "rgba(245,245,241,0.7)",
                        cursor: "pointer",
                      }
                }
                onMouseEnter={(e) => {
                  if (!tier.highlight) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(124,58,237,0.45)";
                    el.style.color = "rgba(245,245,241,0.95)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!tier.highlight) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(245,245,241,0.2)";
                    el.style.color = "rgba(245,245,241,0.7)";
                  }
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p
          className="text-center font-mono text-[11px] tracking-[0.2em] mt-10"
          style={{ color: "rgba(245,245,241,0.22)" }}
        >
          ALL ENGAGEMENTS BEGIN WITH A STRATEGY CALL. NO QUARTER GIVEN ON RESULTS.
        </p>
      </div>
    </section>
  );
}

// ── TheHorizon (Footer) ───────────────────────────────────────────────────────
function TheHorizon({ onContact }: { onContact: () => void }) {
  return (
    <footer className="relative" style={{ borderTop: "1px solid rgba(124,58,237,0.15)" }}>
      <div className="absolute top-0 inset-x-0 h-px" style={DIVIDER} />

      {/* Deep fade from midnight to obsidian */}
      <div
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(to bottom, rgba(18,3,33,0.4) 0%, #050505 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main footer row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 mb-16">
            {/* Brand block */}
            <div className="flex flex-col items-center md:items-start gap-4 max-w-xs">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    border: "1px solid rgba(124,58,237,0.35)",
                    boxShadow: "0 0 12px rgba(124,58,237,0.15)",
                  }}
                >
                  <Image
                    src="/Skull & Cross Swords.png"
                    alt="Black Flag Systems"
                    width={36}
                    height={36}
                    unoptimized
                  />
                </div>
                <span
                  className="font-cinzel text-sm tracking-[0.18em] font-bold"
                  style={METALLIC_TEXT}
                >
                  BLACK FLAG SYSTEMS
                </span>
              </div>
              <p
                className="font-sans text-sm text-center md:text-left leading-relaxed"
                style={{ color: "rgba(245,245,241,0.35)" }}
              >
                AI Automation & Digital System Development.<br />
                No quarter given on results.
              </p>
              <div
                className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(124,58,237,0.6)" }}
              >
                <span>★</span>
                <span>Veteran Owned Company</span>
              </div>
            </div>

            {/* Nav columns */}
            <div className="flex gap-16">
              <div>
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5"
                  style={{ color: "rgba(124,58,237,0.6)" }}
                >
                  Navigation
                </div>
                {["Capabilities", "Results", "Provisions"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block font-sans text-sm mb-3 transition-colors duration-200"
                    style={{ color: "rgba(245,245,241,0.4)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(245,245,241,0.75)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(245,245,241,0.4)")
                    }
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div>
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5"
                  style={{ color: "rgba(124,58,237,0.6)" }}
                >
                  Contact
                </div>
                {["Hello@blackflagsystems.dev", "Schedule a Call"].map((item) => (
                  <button
                    key={item}
                    onClick={onContact}
                    className="block font-sans text-sm mb-3 transition-colors duration-200 text-left"
                    style={{ color: "rgba(245,245,241,0.4)", cursor: "pointer", background: "none", border: "none", padding: 0 }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(245,245,241,0.75)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(245,245,241,0.4)")
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={DIVIDER} />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
            {/* System Status Lantern */}
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#7c3aed",
                  boxShadow:
                    "0 0 6px rgba(124,58,237,0.9), 0 0 14px rgba(124,58,237,0.5)",
                  animation: "blink 2.4s ease-in-out infinite",
                }}
              />
              <span
                className="font-mono text-[11px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(124,58,237,0.8)" }}
              >
                SYSTEM STATUS: OPERATIONAL
              </span>
              <div
                className="w-px h-4 mx-1"
                style={{ background: "rgba(124,58,237,0.25)" }}
              />
              <span
                className="font-cinzel text-[11px] tracking-[0.2em] font-bold"
                style={{ color: "rgba(245,245,241,0.55)" }}
              >
                THE WIND IS AT OUR BACK.
              </span>
            </div>

            {/* Copyright */}
            <div
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "rgba(245,245,241,0.2)" }}
            >
              © {new Date().getFullYear()} Black Flag Systems. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState("");

  const openModal = (tier = "") => {
    setModalTier(tier);
    setModalOpen(true);
  };

  return (
    <main style={{ background: "#050505" }}>
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTier={modalTier}
      />

      <CommandBridgeNav onContact={() => openModal()} />
      <OpeningSalvo onContact={() => openModal()} />

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

      <ResourceAllocation onContact={(tier) => openModal(tier)} />

      <TheHorizon onContact={() => openModal()} />
    </main>
  );
}
