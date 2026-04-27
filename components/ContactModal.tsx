"use client";

import { useState, useEffect } from "react";
import { X, Sword, Send, Loader2 } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

const TIERS = ["RECON — Sloop", "VANGUARD — Frigate", "ARCHITECT — Man-O'-War", "Not sure yet"];

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  background: "rgba(5,5,5,0.8)",
  border: "1px solid rgba(124,58,237,0.25)",
  color: "#F5F5F1",
  padding: "12px 16px",
  fontSize: "14px",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactModal({ isOpen, onClose, defaultTier }: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    tier: defaultTier || "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Sync defaultTier when it changes
  useEffect(() => {
    if (defaultTier) setForm((f) => ({ ...f, tier: defaultTier }));
  }, [defaultTier]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", tier: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...INPUT_STYLE,
    borderColor: focusedField === field ? "rgba(124,58,237,0.7)" : "rgba(124,58,237,0.25)",
    boxShadow: focusedField === field ? "0 0 0 2px rgba(124,58,237,0.08)" : "none",
  });

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
        style={{
          background: "#0a0114",
          border: "1px solid rgba(124,58,237,0.45)",
          boxShadow: "0 0 80px rgba(124,58,237,0.2), 0 0 160px rgba(124,58,237,0.08)",
        }}
      >
        {/* Top rule */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)",
        }} />

        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sword size={14} style={{ color: "rgba(124,58,237,0.8)" }} />
              <span
                className="font-mono text-[10px] tracking-[0.35em] uppercase"
                style={{ color: "rgba(124,58,237,0.7)" }}
              >
                Begin Your Engagement
              </span>
            </div>
            <h2
              className="font-cinzel text-2xl font-black tracking-wide"
              style={{
                background: "linear-gradient(180deg, #F5F5F1 0%, rgba(245,245,241,0.75) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MAKE CONTACT
            </h2>
          </div>
          <button
            onClick={onClose}
            className="transition-colors duration-200"
            style={{ color: "rgba(245,245,241,0.35)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,245,241,0.8)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(245,245,241,0.35)")}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Success state */}
        {status === "success" ? (
          <div className="px-8 py-16 text-center">
            <div
              className="w-14 h-14 flex items-center justify-center mx-auto mb-6"
              style={{ border: "1px solid rgba(124,58,237,0.5)", color: "rgba(124,58,237,0.9)" }}
            >
              <Sword size={24} />
            </div>
            <h3
              className="font-cinzel text-2xl font-black mb-3"
              style={{ color: "#F5F5F1" }}
            >
              MESSAGE RECEIVED.
            </h3>
            <p
              className="font-sans text-sm leading-relaxed mb-8"
              style={{ color: "rgba(245,245,241,0.5)" }}
            >
              Your intel has reached the fleet. We&apos;ll be in contact within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="font-cinzel text-xs tracking-[0.2em] px-8 py-3 transition-all duration-200"
              style={{
                border: "1px solid rgba(124,58,237,0.4)",
                color: "rgba(245,245,241,0.7)",
              }}
            >
              STAND DOWN
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(245,245,241,0.4)" }}
                >
                  Name <span style={{ color: "rgba(124,58,237,0.8)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  style={focusStyle("name")}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(245,245,241,0.4)" }}
                >
                  Email <span style={{ color: "rgba(124,58,237,0.8)" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={focusStyle("email")}
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            {/* Phone + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(245,245,241,0.4)" }}
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  style={focusStyle("phone")}
                  placeholder="+1 (000) 000-0000"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "rgba(245,245,241,0.4)" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("company")}
                  onBlur={() => setFocusedField(null)}
                  style={focusStyle("company")}
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Tier */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(245,245,241,0.4)" }}
              >
                Interested In
              </label>
              <select
                name="tier"
                value={form.tier}
                onChange={handleChange}
                onFocus={() => setFocusedField("tier")}
                onBlur={() => setFocusedField(null)}
                style={{
                  ...focusStyle("tier"),
                  appearance: "none",
                  cursor: "pointer",
                }}
              >
                <option value="" style={{ background: "#0a0114" }}>Select a vessel...</option>
                {TIERS.map((t) => (
                  <option key={t} value={t} style={{ background: "#0a0114" }}>{t}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-mono text-[10px] tracking-[0.25em] uppercase"
                style={{ color: "rgba(245,245,241,0.4)" }}
              >
                Message <span style={{ color: "rgba(124,58,237,0.8)" }}>*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                style={{
                  ...focusStyle("message"),
                  minHeight: "110px",
                  resize: "vertical",
                }}
                placeholder="Tell us about your business and what you're looking to achieve..."
                required
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <p
                className="font-mono text-xs tracking-wide"
                style={{ color: "rgba(239,68,68,0.8)" }}
              >
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 font-cinzel text-sm tracking-[0.2em] font-bold py-4 mt-2 transition-all duration-200"
              style={{
                background: status === "sending"
                  ? "rgba(124,58,237,0.4)"
                  : "linear-gradient(135deg, rgba(124,58,237,0.9) 0%, rgba(76,29,149,0.8) 100%)",
                border: "1px solid rgba(124,58,237,0.6)",
                color: "#F5F5F1",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                boxShadow: "0 0 30px rgba(124,58,237,0.2)",
              }}
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  <Send size={14} />
                  SEND INTEL
                </>
              )}
            </button>

            <p
              className="text-center font-mono text-[10px] tracking-[0.15em]"
              style={{ color: "rgba(245,245,241,0.2)" }}
            >
              We respond within 24 hours. No quarter given on follow-through.
            </p>
          </form>
        )}

        {/* Bottom rule */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
        }} />
      </div>
    </div>
  );
}
