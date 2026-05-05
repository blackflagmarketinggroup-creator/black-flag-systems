import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Black Flag Systems",
  description: "Privacy Policy for Black Flag Systems.",
};

const METALLIC_TEXT: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #F5F5F1 0%, rgba(220,210,240,0.9) 50%, rgba(245,245,241,0.75) 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const DIVIDER: React.CSSProperties = {
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 30%, rgba(124,58,237,0.3) 70%, transparent)",
  margin: "2.5rem 0",
};

const SECTION_LABEL: React.CSSProperties = {
  color: "rgba(124,58,237,0.75)",
  fontFamily: "var(--jetbrains)",
  fontSize: "0.65rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  marginBottom: "0.75rem",
};

const BODY: React.CSSProperties = {
  color: "rgba(245,245,241,0.55)",
  lineHeight: "1.85",
  fontSize: "0.925rem",
};

const HEADING: React.CSSProperties = {
  ...METALLIC_TEXT,
  fontFamily: "var(--cinzel)",
  fontWeight: 700,
  fontSize: "1.15rem",
  letterSpacing: "0.08em",
  marginBottom: "0.75rem",
  marginTop: "2rem",
};

export default function PrivacyPolicy() {
  const lastUpdated = "May 5, 2025";

  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
      }}
    >
      {/* Top nav bar */}
      <nav
        style={{
          background: "rgba(5,5,5,0.96)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
          borderBottom: "1px solid rgba(124,58,237,0.22)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--cinzel)",
              fontSize: "0.8rem",
              letterSpacing: "0.18em",
              fontWeight: 700,
              background:
                "linear-gradient(90deg, #F5F5F1 0%, rgba(200,180,255,0.95) 50%, #F5F5F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textDecoration: "none",
            }}
          >
            ← BLACK FLAG SYSTEMS
          </Link>
          <span
            style={{
              fontFamily: "var(--jetbrains)",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "rgba(124,58,237,0.6)",
              textTransform: "uppercase",
            }}
          >
            Legal
          </span>
        </div>
      </nav>

      {/* Content */}
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "5rem 1.5rem 8rem",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={SECTION_LABEL}>Legal · Compliance</div>
          <h1
            style={{
              fontFamily: "var(--cinzel)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "-0.01em",
              marginBottom: "1rem",
              ...METALLIC_TEXT,
            }}
          >
            PRIVACY POLICY
          </h1>
          <p style={{ ...BODY, fontSize: "0.8rem", color: "rgba(245,245,241,0.3)" }}>
            Last updated: {lastUpdated}
          </p>
        </div>

        <div style={DIVIDER} />

        {/* Intro */}
        <p style={BODY}>
          Black Flag Systems (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
          committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard information when you visit our website
          blackflagsystems.dev (the &ldquo;Site&rdquo;) or engage our services. Please read
          this policy carefully. If you disagree with its terms, please discontinue use of
          the Site.
        </p>

        {/* 1 */}
        <h2 style={HEADING}>1. INFORMATION WE COLLECT</h2>
        <p style={BODY}>
          We may collect information about you in a variety of ways, including:
        </p>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          <strong style={{ color: "rgba(245,245,241,0.75)" }}>Personal Data.</strong>{" "}
          When you fill out a contact form, request a strategy call, or otherwise interact
          with the Site, you may voluntarily provide personally identifiable information
          such as your name, email address, company name, phone number, and any other
          details you choose to share.
        </p>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          <strong style={{ color: "rgba(245,245,241,0.75)" }}>Derivative Data.</strong>{" "}
          Our servers may automatically log standard information when you access the Site,
          including your IP address, browser type and version, operating system, referring
          URLs, pages visited, and the dates and times of your visits.
        </p>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          <strong style={{ color: "rgba(245,245,241,0.75)" }}>Analytics Data.</strong>{" "}
          We use Vercel Analytics to collect aggregated, anonymized data about how visitors
          interact with the Site (e.g., page views, session duration, geographic region).
          This data does not identify you personally.
        </p>

        {/* 2 */}
        <h2 style={HEADING}>2. HOW WE USE YOUR INFORMATION</h2>
        <p style={BODY}>
          We use the information we collect to:
        </p>
        <ul
          style={{
            ...BODY,
            paddingLeft: "1.5rem",
            marginTop: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <li>Respond to inquiries and provide the services you request</li>
          <li>Schedule and conduct strategy calls and onboarding sessions</li>
          <li>Send administrative communications such as confirmations and updates</li>
          <li>Improve the Site&rsquo;s content, features, and user experience</li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Prevent fraudulent transactions and protect against criminal activity</li>
          <li>Comply with applicable laws and legal obligations</li>
        </ul>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          We will not sell, rent, or share your personal data with third parties for their
          own marketing purposes without your explicit consent.
        </p>

        {/* 3 */}
        <h2 style={HEADING}>3. COOKIES AND TRACKING TECHNOLOGIES</h2>
        <p style={BODY}>
          The Site may use cookies and similar tracking technologies (e.g., pixels, web
          beacons) to enhance your experience. Cookies are small data files stored on your
          device. We use:
        </p>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          <strong style={{ color: "rgba(245,245,241,0.75)" }}>Strictly Necessary Cookies</strong>{" "}
          — required for the Site to function correctly and cannot be switched off.
        </p>
        <p style={{ ...BODY, marginTop: "0.75rem" }}>
          <strong style={{ color: "rgba(245,245,241,0.75)" }}>Analytics Cookies</strong>{" "}
          — used to count visits and traffic sources so we can measure and improve the
          Site&rsquo;s performance. All data is aggregated and anonymized.
        </p>
        <p style={{ ...BODY, marginTop: "0.75rem" }}>
          You can instruct your browser to refuse all cookies or to alert you when cookies
          are being sent. If you disable cookies, some parts of the Site may not function
          properly.
        </p>

        {/* 4 */}
        <h2 style={HEADING}>4. THIRD-PARTY SERVICE PROVIDERS</h2>
        <p style={BODY}>
          We may share your information with trusted third-party vendors who assist us in
          operating the Site or conducting our business, provided those parties agree to
          keep your information confidential. These may include:
        </p>
        <ul
          style={{
            ...BODY,
            paddingLeft: "1.5rem",
            marginTop: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Vercel</strong> — website
            hosting and analytics (vercel.com)
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Supabase</strong> — database
            and backend infrastructure (supabase.com)
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Email & Calendar Platforms</strong>{" "}
            — used to facilitate scheduling and communications
          </li>
        </ul>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          We do not control these third parties&rsquo; privacy practices and encourage you
          to review their respective privacy policies.
        </p>

        {/* 5 */}
        <h2 style={HEADING}>5. DATA RETENTION</h2>
        <p style={BODY}>
          We retain your personal data for as long as necessary to fulfill the purposes
          outlined in this policy, unless a longer retention period is required or
          permitted by law. Contact form submissions and client communications are retained
          for the duration of our business relationship and for a reasonable period
          thereafter for record-keeping purposes. You may request deletion of your data at
          any time by contacting us at the address below.
        </p>

        {/* 6 */}
        <h2 style={HEADING}>6. SECURITY OF YOUR INFORMATION</h2>
        <p style={BODY}>
          We implement commercially reasonable technical and organizational measures
          designed to protect your personal information from unauthorized access,
          disclosure, alteration, or destruction. However, no method of transmission over
          the Internet or method of electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>

        {/* 7 */}
        <h2 style={HEADING}>7. YOUR PRIVACY RIGHTS</h2>
        <p style={BODY}>
          Depending on your location, you may have certain rights regarding your personal
          data, including:
        </p>
        <ul
          style={{
            ...BODY,
            paddingLeft: "1.5rem",
            marginTop: "0.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right of Access</strong>{" "}
            — the right to request a copy of the personal data we hold about you
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right to Rectification</strong>{" "}
            — the right to request correction of inaccurate or incomplete data
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right to Erasure</strong>{" "}
            — the right to request deletion of your personal data, subject to legal retention
            obligations
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right to Restrict Processing</strong>{" "}
            — the right to request that we limit how we use your data
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right to Data Portability</strong>{" "}
            — the right to receive your data in a structured, machine-readable format
          </li>
          <li>
            <strong style={{ color: "rgba(245,245,241,0.65)" }}>Right to Object</strong>{" "}
            — the right to object to our processing of your data in certain circumstances
          </li>
        </ul>
        <p style={{ ...BODY, marginTop: "1rem" }}>
          California residents may also have rights under the California Consumer Privacy
          Act (CCPA), including the right to know what personal information is collected
          and the right to opt out of any sale of personal information. We do not sell
          personal information.
        </p>
        <p style={{ ...BODY, marginTop: "0.75rem" }}>
          To exercise any of these rights, please contact us using the information in
          Section 10 below. We will respond to verifiable requests within 30 days.
        </p>

        {/* 8 */}
        <h2 style={HEADING}>8. CHILDREN&rsquo;S PRIVACY</h2>
        <p style={BODY}>
          The Site is not directed to individuals under the age of 18. We do not knowingly
          collect personal information from minors. If you become aware that a minor has
          provided us with personal data without parental consent, please contact us and we
          will take steps to delete such information.
        </p>

        {/* 9 */}
        <h2 style={HEADING}>9. CHANGES TO THIS POLICY</h2>
        <p style={BODY}>
          We reserve the right to update this Privacy Policy at any time. When we do, we
          will revise the &ldquo;Last updated&rdquo; date at the top of this page. We
          encourage you to review this policy periodically. Your continued use of the Site
          after changes are posted constitutes your acceptance of the revised policy.
        </p>

        {/* 10 */}
        <h2 style={HEADING}>10. CONTACT US</h2>
        <p style={BODY}>
          If you have questions, concerns, or requests regarding this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <div
          style={{
            marginTop: "1.25rem",
            padding: "1.5rem 2rem",
            background: "rgba(18, 3, 33, 0.55)",
            backdropFilter: "blur(14px) saturate(160%)",
            border: "1px solid rgba(124, 58, 237, 0.28)",
            boxShadow: "0 0 24px rgba(124,58,237,0.08), inset 0 1px 0 rgba(245,245,241,0.04)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--cinzel)",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              ...METALLIC_TEXT,
              marginBottom: "0.5rem",
            }}
          >
            BLACK FLAG SYSTEMS
          </p>
          <a
            href="mailto:hello@blackflagsystems.dev"
            style={{
              fontFamily: "var(--jetbrains)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              color: "rgba(124,58,237,0.8)",
              textDecoration: "none",
            }}
          >
            hello@blackflagsystems.dev
          </a>
        </div>

        <div style={DIVIDER} />

        {/* Back link */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--cinzel)",
              fontSize: "0.7rem",
              letterSpacing: "0.25em",
              color: "rgba(245,245,241,0.35)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
          >
            ← Return to Command
          </Link>
        </div>
      </div>
    </main>
  );
}
