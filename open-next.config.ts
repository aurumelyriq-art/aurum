// open-next.config.ts — Cloudflare Pages/Workers build config for this Next.js app.
// See https://opennext.js.org/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";

export default defineCloudflareConfig({
  // Requires the aurum-elyriq-opennext-cache R2 bucket declared in wrangler.jsonc
  // to exist before deploying — see https://opennext.js.org/cloudflare/caching
  incrementalCache: r2IncrementalCache,
});
