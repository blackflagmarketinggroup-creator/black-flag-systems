import type { Metadata } from "next";
import SystemsLanding from "@/components/SystemsLanding";

export const metadata: Metadata = {
  title: "Systems — The Full Arsenal | Black Flag Systems",
  description:
    "Every system Black Flag Systems deploys across SEO, social media management, automation workflows, and web & brand. Digital Asset Management Company.",
};

export default function Page() {
  return <SystemsLanding />;
}
