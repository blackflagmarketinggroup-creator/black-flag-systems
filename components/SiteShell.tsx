"use client";

import { ContactProvider } from "@/components/ContactContext";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Wraps a page in the shared chrome: contact modal provider, fixed nav, and
// footer. Used by the home page and every /systems route.
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ContactProvider>
      <main style={{ background: "#050505" }}>
        <SiteNav />
        {children}
        <SiteFooter />
      </main>
    </ContactProvider>
  );
}
