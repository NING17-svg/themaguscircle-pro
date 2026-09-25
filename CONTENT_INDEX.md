# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for `themaguscircle.pro`. Localized versions keep the same `translationKey`, use their configured locale prefix, and must appear in canonical, hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Home | The Magus Circle | Find launch status, gameplay basics, system requirements, community discussion | Release Date / Steam Store | Hub | Cluster-index hub for the four launch clusters. |
| `/release-date` | `src/data/pages/release-pages.ts` | Status | The Magus Circle release date | When does The Magus Circle release? | Demo / Platforms | Hub | Post-launch as of 2026-09-26; Patch 1.0.1 and 1.0.2 with a Known issues callout for the character-selection reset and drawing-tablet cursor flicker. |
| `/demo` | `src/data/pages/release-pages.ts` | Status | The Magus Circle demo | Does The Magus Circle have a demo? | Release Date | Supporting | No demo entry on Steam as of 2026-09-26. |
| `/download` | `src/data/pages/release-pages.ts` | Guide | The Magus Circle download | How do I get The Magus Circle on Steam? | Steam Store | Supporting | Steam install path only; unofficial mirrors are not endorsed. |
| `/price` | `src/data/pages/release-pages.ts` | Status | The Magus Circle price | How much does The Magus Circle cost? | Steam Store | Supporting | $12.99 USD retail, $11.69 introductory offer (10% off) ending Oct 1, 2026; single base listing, no separate editions currently advertised. |
| `/platforms` | `src/data/pages/release-pages.ts` | Comparison | The Magus Circle platforms | Is The Magus Circle on PS5, Switch, mobile? | Release Date | Supporting | Windows PC at launch; consoles and mobile not announced. |
| `/system-requirements` | `src/data/pages/guide-pages.ts` | Reference | The Magus Circle system requirements | What PC do I need to run The Magus Circle? | Release Date | Supporting | Steam store page source for minimum/recommended tiers. |
| `/gameplay` | `src/data/pages/guide-pages.ts` | Guide | The Magus Circle gameplay | How does The Magus Circle play (sigils, upgrades, familiars)? | Magic and Sigils | Hub | Mechanics anchor: sigil spellcasting, 250+ upgrades, familiars. |
| `/characters` | `src/data/pages/guide-pages.ts` | Hub | The Magus Circle characters | Who are the mages and familiars? | Magic and Sigils | Hub | Six named playable mages (Milk, Macha, Coffee, Anchan, Wheel, Hermit) plus the crazy flower girl unlockable; Known issue callout for the character-selection reset bug. |
| `/magic-and-sigils` | `src/data/pages/guide-pages.ts` | Explanation | The Magus Circle magic and sigils | How do arcane sigils and the magic system work? | Gameplay | Supporting | Drawn-input spellcasting and run-modifier interaction. |
| `/wiki` | `src/data/pages/wiki-pages.ts` | Reference | The Magus Circle wiki | General overview / wiki-style facts | Release Date | Hub | Identity, languages, developer, publisher summary. |
| `/witchlight` | `src/data/pages/wiki-pages.ts` | Reference | Witchlight The Magus Circle | Who develops and publishes The Magus Circle (Witchlight)? | Wiki | Supporting | Developer/publisher identity. |
| `/reviews` | `src/data/pages/wiki-pages.ts` | Reference | The Magus Circle reviews | Where can I read reviews and Steam community discussion? | Similar Games | Supporting | Steam community hub + Reddit pointers. |
| `/multiplayer` | `src/data/pages/guide-pages.ts` | Status | The Magus Circle multiplayer | Does The Magus Circle have multiplayer or co-op? | Gameplay | Supporting | Single-player confirmation; co-op not announced. |
| `/similar-games` | `src/data/pages/guide-pages.ts` | List | games like The Magus Circle | What games are like The Magus Circle? | Gameplay | Supporting | Mechanic-cue comparison with magic roguelikes. |
| `/guides` | `src/data/pages/guide-pages.ts` | Hub | The Magus Circle guides | Browse all launch guides | Release Date | Hub | Template contract fixture hub for the guide-pages cluster. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`. The Magus Circle declares no entity families at first launch.
- Final route inventory: `npm run routes:manifest`.
- Locale scope: `en-US` only at first launch (per Site Plan and content-package.json).

## Content Clusters

- Launch & Status: `/release-date`, `/demo`, `/download`, `/price`, `/platforms`
- Gameplay & Content: `/gameplay`, `/magic-and-sigils`, `/characters`, `/wiki`
- Guides & Reference: `/system-requirements`, `/multiplayer`, `/witchlight`, `/reviews`
- Community: `/reviews`, `/similar-games`

## Internal Linking Map

- Homepage links to the highest-demand launch pages and the four cluster hubs.
- Release date page links to demo, platforms, price, download, and system requirements.
- Gameplay page links to magic-and-sigils, characters, and similar-games.
- Wiki page links to release-date, gameplay, witchlight-studio, magic-and-sigils, and characters.
- Reviews page links to wiki-overview and similar-games.
- Multiplayer page links to gameplay and system-requirements.

## Open Questions

- Confirm whether a demo is published as a separate Steam app entry after launch.
- Track the post-launch patch cadence (Patch 1.0.3 or later) to see when the character-selection reset bug is closed.
- Track any console or mobile announcements that change the platform scope.
- Per-character role bios and individual familiar names will be added to `/characters` once Witchlight publishes them on the Steam store page or in patch notes.
