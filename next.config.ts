import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
};

export default withSentryConfig(nextConfig, {
  org: "black-flag-systems",
  project: "black-flag-systems",
  silent: true,
  widenClientFileUpload: true,
  sourcemaps: { disable: true },
});
