# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-24 - Adsterra integration for The Magus Circle

- Task: Populate the fixed six Adsterra unit values in `src/data/ads.ts` (Native Banner, Banner 728x90, 468x60, 320x50, 160x600, Smartlink) so the V3 ad components begin requesting real Adsterra placements after launch.
- Files changed: `src/data/ads.ts`.
- URLs affected: All fixed V3 routes now load the fixed Adsterra placements through the shared ad components (`native-banner` after the second article module, responsive 728x90/468x60/320x50 banner shell, right-rail 160x600, footer Smartlink).
- Ad baseline: All six Adsterra values are now non-empty and match the private platform codes captured for `themaguscircle-pro`.
- Verification: `npm run verify` (typecheck, lint, template/content/rendered-seo validators, IndexNow local tests, full build) passes.
- Follow-up: None.

### 2026-09-24 - V3 launch configuration for The Magus Circle

- Task: Apply the approved Site Plan, V3 content package, and theme direction for the launch of The Magus Circle (Steam AppID 2796640).
- Files changed: `src/data/site.ts`, `src/data/navigation.ts`, `src/data/faq.ts`, `src/data/pages/home.ts`, `src/data/pages/release-pages.ts`, `src/data/pages/guide-pages.ts`, `src/data/pages/wiki-pages.ts`, `src/data/pages/site-pages.ts`, `route-manifest.json`, `package.json`, `wrangler.jsonc`, `.env.example`, `README.md`, `AGENTS.md`, `CONTENT_INDEX.md`, `public/indexnow-*.txt`.
- URLs affected: `/`, `/release-date`, `/demo`, `/download`, `/price`, `/platforms`, `/system-requirements`, `/gameplay`, `/characters`, `/magic-and-sigils`, `/wiki`, `/witchlight`, `/reviews`, `/multiplayer`, `/similar-games`, `/guides`.
- SEO changed: Primary locale is `en-US`; canonical, hreflang, sitemap, and route-manifest align with content-package.json and the Site Plan.
- Content changed: Replaced template placeholder copy with the V3 content package (15 pages + 1 guides hub fixture).
- Verification: Typecheck, lint, template validator, content validator, IndexNow local tests, full build, and rendered SEO validator all pass. V3 route contract validator passes against the Site Plan and content package.
- Follow-up: Theme implementation will adjust `src/data/theme.ts` to match the Witchlight study direction.

### 2026-09-24 - V3 template baseline initialized

- Task: Create the initial generated guide-site baseline for themaguscircle.pro.
- Files changed: Template project files plus identity overrides for The Magus Circle.
- URLs affected: All baseline URLs replaced with the V3 launch URLs in this commit.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Verification: `npm run verify` passes for the shared V3 template.
