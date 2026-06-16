// ── Shared style constants ────────────────────────────────────────────────────
// Centralized so the home page and every /systems page share identical glass,
// metallic-text, and divider treatments.

export const CARD_BASE: React.CSSProperties = {
  background: "rgba(18, 3, 33, 0.55)",
  backdropFilter: "blur(14px) saturate(160%)",
  WebkitBackdropFilter: "blur(14px) saturate(160%)",
  border: "1px solid rgba(124, 58, 237, 0.28)",
  boxShadow:
    "0 0 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(245,245,241,0.04)",
};

export const CARD_VANGUARD: React.CSSProperties = {
  background: "rgba(18, 3, 33, 0.65)",
  backdropFilter: "blur(18px) saturate(200%)",
  WebkitBackdropFilter: "blur(18px) saturate(200%)",
  border: "1px solid rgba(124, 58, 237, 0.65)",
  boxShadow:
    "0 0 60px rgba(124,58,237,0.28), 0 0 120px rgba(124,58,237,0.10), inset 0 0 40px rgba(124,58,237,0.04), inset 0 1px 0 rgba(245,245,241,0.06)",
};

export const DIVIDER: React.CSSProperties = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 30%, rgba(124,58,237,0.3) 70%, transparent)",
};

export const METALLIC_TEXT: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #F5F5F1 0%, rgba(220,210,240,0.9) 50%, rgba(245,245,241,0.75) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};
