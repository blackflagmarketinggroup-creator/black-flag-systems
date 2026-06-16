"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContact } from "@/components/ContactContext";

// ── SiteNav (Command Bridge) ──────────────────────────────────────────────────
// Shared across the home page and every /systems page. Anchor links use the
// "/#section" form so they resolve correctly even from a sub-page route.
export default function SiteNav() {
  const openContact = useContact();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "CAPABILITIES", href: "/#capabilities", internal: false },
    { label: "RESULTS", href: "/#results", internal: false },
    { label: "SYSTEMS", href: "/systems", internal: true },
    { label: "PROVISIONS", href: "/#provisions", internal: false },
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
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-[0.22em] transition-colors duration-200"
                style={{ color: "rgba(245,245,241,0.72)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(245,245,241,0.98)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(245,245,241,0.72)")
                }
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-[0.22em] transition-colors duration-200"
                style={{ color: "rgba(245,245,241,0.72)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,245,241,0.98)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,245,241,0.72)")
                }
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Brand — right side */}
        <Link href="/" className="flex items-center gap-3 ml-auto">
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
        </Link>

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
          {navLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                href={link.href}
                className="block px-6 py-4 font-mono text-xs tracking-[0.22em] transition-colors duration-200"
                style={{ color: "rgba(245,245,241,0.55)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block px-6 py-4 font-mono text-xs tracking-[0.22em] transition-colors duration-200"
                style={{ color: "rgba(245,245,241,0.55)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <div className="px-6 py-4">
            <button
              className="block w-full text-center font-cinzel text-xs tracking-[0.2em] py-3 px-6"
              style={{
                border: "1px solid rgba(124,58,237,0.5)",
                color: "rgba(245,245,241,0.9)",
              }}
              onClick={() => {
                setMenuOpen(false);
                openContact();
              }}
            >
              BOARD NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
