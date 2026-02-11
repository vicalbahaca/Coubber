import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPages = process.env.GITHUB_ACTIONS === "true" && Boolean(repo);
const basePath = isGithubPages ? `/${repo}` : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  // GitHub Pages requires a fully static build.
  output: "export",
  trailingSlash: true,

  // `next/image` optimization isn't available on GitHub Pages.
  images: { unoptimized: true },

  // Deploy under `/<repo>` for project pages.
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),

  // Avoid Next inferring a higher-level workspace root (e.g. when other lockfiles exist).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
