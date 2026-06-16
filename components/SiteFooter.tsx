"use client";

import Image from "next/image";
import Link from "next/link";
import { DIVIDER, METALLIC_TEXT } from "@/components/siteStyles";
import { useContact } from "@/components/ContactContext";

// ── SiteFooter (The Horizon) ──────────────────────────────────────────────────
export default function SiteFooter() {
  const openContact = useContact();

  const navItems = [
    { label: "Capabilities", href: "/#capabilities", internal: false },
    { label: "Results", href: "/#results", internal: false },
    { label: "Systems", href: "/systems", internal: true },
    { label: "Provisions", href: "/#provisions", internal: false },
  ];

  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid rgba(124,58,237,0.15)" }}
    >
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
              <Link href="/" className="flex items-center gap-3">
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
              </Link>
              <p
                className="font-sans text-sm text-center md:text-left leading-relaxed"
                style={{ color: "rgba(245,245,241,0.65)" }}
              >
                Digital Asset Management Company.
                <br />
                No quarter given on results.
              </p>
              <div
                className="flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase font-bold"
                style={{ animation: "pulse-purple 2.4s ease-in-out infinite" }}
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
                  style={{ color: "rgba(124,58,237,0.88)" }}
                >
                  Navigation
                </div>
                {navItems.map((item) =>
                  item.internal ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block font-sans text-sm mb-3 transition-colors duration-200"
                      style={{ color: "rgba(245,245,241,0.68)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(245,245,241,0.95)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "rgba(245,245,241,0.68)")
                      }
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block font-sans text-sm mb-3 transition-colors duration-200"
                      style={{ color: "rgba(245,245,241,0.68)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(245,245,241,0.95)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          "rgba(245,245,241,0.68)")
                      }
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
              <div>
                <div
                  className="font-mono text-[10px] tracking-[0.3em] uppercase mb-5"
                  style={{ color: "rgba(124,58,237,0.88)" }}
                >
                  Contact
                </div>
                {["Hello@blackflagsystems.dev", "Schedule a Call"].map((item) => (
                  <button
                    key={item}
                    onClick={() => openContact()}
                    className="block font-sans text-sm mb-3 transition-colors duration-200 text-left"
                    style={{
                      color: "rgba(245,245,241,0.68)",
                      cursor: "pointer",
                      background: "none",
                      border: "none",
                      padding: 0,
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(245,245,241,0.95)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "rgba(245,245,241,0.68)")
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
                style={{ color: "rgba(124,58,237,0.95)" }}
              >
                SYSTEM STATUS: OPERATIONAL
              </span>
              <div
                className="w-px h-4 mx-1"
                style={{ background: "rgba(124,58,237,0.25)" }}
              />
              <span
                className="font-cinzel text-[11px] tracking-[0.2em] font-bold"
                style={{ color: "rgba(245,245,241,0.78)" }}
              >
                THE WIND IS AT OUR BACK.
              </span>
            </div>

            {/* Copyright + Privacy */}
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-[11px] tracking-[0.18em]"
                style={{ color: "rgba(245,245,241,0.58)" }}
              >
                © {new Date().getFullYear()} BLACK FLAG SYSTEMS. ALL RIGHTS RESERVED.
              </span>
              <span style={{ color: "rgba(124,58,237,0.55)" }}>·</span>
              <a
                href="/privacy"
                className="font-mono text-[11px] tracking-[0.18em] transition-colors duration-200"
                style={{ color: "rgba(245,245,241,0.58)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,245,241,0.95)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,245,241,0.58)")
                }
              >
                PRIVACY POLICY
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
