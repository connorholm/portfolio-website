import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    // public/ holds vendored, third-party, and static-embed assets (e.g. the
    // Iceland scrapbook's self-hosted Leaflet build) — not project source.
    ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts", "public/**"],
  },
  ...coreWebVitals,
  ...typescript,
];

export default config;
