import type { NextConfig } from "next";

/**
 * Static export keeps the existing GitHub Pages pipeline working.
 * Moving to a Node host (Vercel et al.) means dropping `output` and
 * `images.unoptimized` — nothing else in the app depends on it.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typedRoutes: true,
};

export default nextConfig;
