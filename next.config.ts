import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  typedRoutes: true,
  /**
   * The deck is a static file in /public, and Next serves no directory index
   * for those. Without this, trailingSlash normalises /about-deck to
   * /about-deck/ and that 404s, leaving /about-deck/index.html as the only
   * working URL. The rewrite makes the clean URL serve the file.
   */
  async rewrites() {
    return [{ source: "/about-deck", destination: "/about-deck/index.html" }];
  },
};

export default nextConfig;
