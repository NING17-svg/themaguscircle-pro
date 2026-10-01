import type { PageContent } from "@/types/content";

export const page_release_date: PageContent = {
  "id": "release-date",
  "translationKey": "release-date",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "release-date",
  "url": "/release-date",
  "pageType": "release",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "The Magus Circle release date",
  "seoTitle": "The Magus Circle release date — launched on Steam, Patch 1.0.3 live",
  "metaDescription": "The Magus Circle released on Steam on September 24, 2026 with 179 reviews and a Very Positive (92%) label. Patches 1.0.1, 1.0.2, and the 1.0.3 hotfix are live; see the What changed in 1.0.3 callout below.",
  "summary": "The Magus Circle released on September 24, 2026 on Steam (AppID 2796640), developed and published by Witchlight. The Steam store page lists the title as released with 179 reviews and a",
  "hero": {
    "eyebrow": "Status",
    "subtitle": "When does The Magus Circle release?",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/2796640"
      }
    ]
  },
  "quickAnswer": "The Magus Circle released on September 24, 2026 on Steam (AppID 2796640), developed and published by Witchlight. The Steam store page now lists the title as released with 179 reviews carrying a Very Positive (92%) label. Witchlight shipped Patches 1.0.1, 1.0.2, and the 1.0.3 hotfix in quick succession; the Steam Community Hub lists the 1.0.3 patch notes above the prior two updates. After 1.0.3 the only two reported bugs still open are the post-Matcha character-selection reset and the Wacom Cintiq cursor flicker. See the What changed in 1.0.3 and Known issues sections below before installing.",
  "keyFacts": [
    {
      "label": "Page type",
      "value": "status"
    },
    {
      "label": "Source rule",
      "value": "Steam store page and SteamDB only"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-27"
    }
  ],
  "modules": [
    {
      "id": "faq",
      "type": "prose",
      "heading": "Frequently Asked Questions",
      "body": "Short answers sourced from the Steam store page and SteamDB."
    },
    {
      "id": "release-date-what-the-steam-store-page-lists-now-that-the-magus-circle-ha",
      "type": "prose",
      "heading": "What the Steam store page lists now that The Magus Circle has launched",
      "body": "The Magus Circle is listed on the Steam store page (AppID 2796640) as released on September 24, 2026. Witchlight is credited as both developer and publisher. The store page shows one base listing rather than separate regional SKUs, and the supported language set remains English and Korean for interface, full audio, and subtitles."
    },
    {
      "id": "release-date-current-launch-facts-as-of-2026-09-27",
      "type": "prose",
      "heading": "Current launch facts as of 2026-09-27:",
      "body": "- Release: September 24, 2026 on Steam (AppID 2796640)\n- Platform at launch: Windows PC (Steam)\n- Developer and publisher: Witchlight\n- Steam user reviews: 179 reviews, Very Positive (92%)\n- Interface and full audio and subtitles: English, Korean\n- Current build: Patch 1.0.3 hotfix (Sep 25, 2026)\n\nThe SteamDB record for AppID 2796640 mirrors the release status and is used here as a cross-check, not as a separate timing source. The review count and Very Positive label are read directly from the store page and reflect the cumulative user-review state of the listing."
    },
    {
      "id": "release-date-day-1-patches-1-0-1-and-1-0-2-then-patch-1-0-3-hotfix",
      "type": "prose",
      "heading": "Day 1 patches 1.0.1 and 1.0.2, then Patch 1.0.3 hotfix",
      "body": "Witchlight is actively patching the launch build. Three updates have shipped by name in the Steam Community Hub and in launch coverage:\n\n- **Patch 1.0.1 (Day 1 stability)** — landed alongside or just after release. This patch focuses on launch-day stability, crash fixes, and the first wave of post-launch regressions reported by players in the Steam Community Hub.\n- **Patch 1.0.2 (hotfix)** — the first hotfix layered on top of 1.0.1. This patch addresses follow-up bugs that surfaced once 1.0.1 reached a wider audience, including character-specific fix scopes for Wheel, Hermit, Matcha, and Anchan.\n- **Patch 1.0.3 (hotfix, Sep 25)** — the current build. Witchlight's \"1.0.3 Hotfix!\" event on the Steam Community Hub explicitly enumerates the closed bug list (see the callout below).\n\nA Witchlight launch statement recorded by Happy Gamer also commits to \"continue to provide support and updates for the next couple months,\" so the patch cadence is expected to continue beyond 1.0.3. The exact release timestamps for each patch should be re-checked on the Steam news hub; this page records the patch names and scopes, not the precise minute each one shipped."
    },
    {
      "id": "release-date-what-changed-in-patch-1-0-3",
      "type": "prose",
      "heading": "What changed in Patch 1.0.3",
      "body": "The Patch 1.0.3 post on the Steam Community Hub lists every bug this hotfix closes and the one balance change worth flagging. Treat this as the authoritative closure set rather than the residual list below.\n\n- **Bugs fixed:** Exsanguinate getting stuck without exploding, accidental extractions, Riptide, Poppet Master upgrade, ending sequence failing to reset, spell effects getting stuck on screen, chest pickup logic, Jam pausing with the game, Milk no longer forced until Matcha unlock, incorrect reroll count, incorrect ability charge count, Mana Efficiency display, missing Steam achievement, achievements unlocking too soon, and potion craft tutorial fixes.\n- **Balance change:** No more star-shaped shielded enemies. Exsanguinate area reduced by 25%; Ink base area increased slightly with Inky Area scaling decreased; Prismatic Gale no longer costs mana.\n- **Enhancement:** New spell scrolls are acquirable by exploring the hub.\n\nIf you were holding off because of any item in the fixed list, 1.0.3 is the build to install. The two residual bugs below are the only items the page still tracks as open."
    },
    {
      "id": "release-date-known-issues-still-open-after-patch-1-0-3",
      "type": "prose",
      "heading": "Known issues still open after Patch 1.0.3",
      "body": "Two reported bugs remain visible in the Steam Community Hub after the 1.0.3 hotfix and are not listed as fixed in any shipped patch. They are recorded here so readers do not assume the current build is bug-free.\n\n- **Character-selection reset (post-Matcha unlock only)** — until Patch 1.0.3 the launcher forced Milk on every new save; 1.0.3 closes that pre-Matcha lock. The active Steam Community Hub thread \"Can't change characters\" still tracks a residual reset for players who have already unlocked Matcha. Affected characters named in the thread include Macha (Matcha), Coffee, and the flower-girl unlockable.\n- **Wacom Cintiq cursor flicker** — stylus / drawing-tablet users on Wacom Cintiq hardware can see the cursor flicker while tracing sigils. This is a separate issue from the character-selection bug and is not mentioned in the 1.0.1, 1.0.2, or 1.0.3 fix scopes.\n\nIf a reader hits either bug, the right move is to subscribe to the Steam news hub so a future patch (1.0.4 or later) lands in the email, and to follow the Steam Community Hub threads where Witchlight and the community track workarounds. The Known issues section will be updated once a future patch closes either entry."
    },
    {
      "id": "release-date-how-to-follow-official-release-news-going-forward",
      "type": "prose",
      "heading": "How to follow official release news going forward",
      "body": "Date changes after launch are unlikely; what changes now is the patch cadence. Two channels carry the next round of updates first: the Steam news hub on the store page and Witchlight's own Steam posts. Treat third-party trackers as echoes of those sources, not as primary timing."
    },
    {
      "id": "release-date-for-related-status-checks-in-the-days-after-launch",
      "type": "prose",
      "heading": "For related status checks in the days after launch:",
      "body": "- [Demo status](/demo) — confirm whether a separate demo app appears.\n- [Price](/price) — confirm the published retail figure and the introductory-offer end date.\n- [Platforms](/platforms) — confirm whether Windows remains the only platform.\n- [Download](/download) — prepare the Steam install path or fix a broken install.\n- [System requirements](/system-requirements) — confirm Windows minimum specs before installing.\n- [Characters](/characters) — see the named playable mage roster and the 1.0.3 Poppet Master / Matcha-unlock fixes."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [
    "demo",
    "platforms",
    "price",
    "download",
    "system-requirements",
    "characters"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-27"
}

export const page_demo: PageContent = {
  "id": "demo",
  "translationKey": "demo",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "demo",
  "url": "/demo",
  "pageType": "release",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "The Magus Circle demo",
  "seoTitle": "The Magus Circle demo — where to find one on Steam",
  "metaDescription": "The Magus Circle demo has not been listed on Steam as of 2026-09-24. Find where an official demo announcement from Witchlight would appear.",
  "summary": "The Magus Circle demo has not been listed on the Steam store page as of 2026-09-24. The Steam store page (AppID 2796640) and the SteamDB record show a single base listing for the f",
  "hero": {
    "eyebrow": "Status",
    "subtitle": "Does The Magus Circle have a demo and how do I play it?",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/2796640"
      }
    ]
  },
  "quickAnswer": "The Magus Circle demo has not been listed on the Steam store page. The Steam store page (AppID 2796640) and the SteamDB record show a single base listing for the full game with no separate demo app entry. Steam demos appear as their own app entry when published, so the right action is to wishlist The Magus Circle and recheck the store page closer to the September 24, 2026 launch.",
  "keyFacts": [
    {
      "label": "Page type",
      "value": "status"
    },
    {
      "label": "Source rule",
      "value": "Steam store page and SteamDB only"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-24"
    }
  ],
  "modules": [
    {
      "id": "faq",
      "type": "prose",
      "heading": "Frequently Asked Questions",
      "body": "Short answers sourced from the Steam store page and SteamDB."
    },
    {
      "id": "demo-how-steam-currently-lists-the-magus-circle-demo-status",
      "type": "prose",
      "heading": "How Steam currently lists The Magus Circle demo status",
      "body": "The Steam store page for The Magus Circle (AppID 2796640) currently lists the base game only — the page is configured for a planned release on September 24, 2026 rather than a separate demo app. Steam demos are published as their own app entries with their own store page, and that separate entry is what players install when a demo is available. Because that second entry is not present, there is no playable The Magus Circle demo on Steam.\n\nWhat this means for a reader who searched \"The Magus Circle demo\":\n\n- The Steam store page does not list a \"Download Demo\" or \"Play Demo\" button.\n- SteamDB mirrors the store page's app list and likewise shows only AppID 2796640, not a paired demo AppID.\n- Third-party hosts that claim a demo installer are not official channels and are not endorsed here; the [download page](/download) covers why unofficial mirrors are not the right answer."
    },
    {
      "id": "demo-how-to-try-the-magus-circle-when-no-demo-is-available",
      "type": "prose",
      "heading": "How to try The Magus Circle when no demo is available",
      "body": "Until Witchlight publishes a demo entry, the supported path to play The Magus Circle is to buy and install the full game on its planned September 24, 2026 launch on Steam. Three practical steps cover both the demo-watch and the launch-day setup:\n\n- Add The Magus Circle to your Steam wishlist from the store page; Steam sends a one-time \"now available\" notice if the demo or the full game goes live.\n- Confirm your Steam account owns a copy of the base game on launch day; the full game is the only published way to play The Magus Circle.\n- Pre-load the game client through the [download page](/download) route if Steam offers pre-load ahead of release; pre-load availability is decided by Witchlight and surfaced on the store page when enabled.\n\nFor launch-day platform readers, the [platforms page](/platforms) confirms Windows PC is the only listed platform; console versions are not announced."
    },
    {
      "id": "demo-where-an-official-demo-announcement-would-appear",
      "type": "prose",
      "heading": "Where an official demo announcement would appear",
      "body": "The Magus Circle demo announcement, if Witchlight publishes one, would show up first on the Steam store page for AppID 2796640 (as a new demo app entry or as an in-page banner) and on Witchlight's own channels. Two reliable signals to watch:\n\n- A second Steam app entry paired to the base game. Steam creates a separate demo app entry with its own store page; readers should verify any \"The Magus Circle demo\" download link is hosted on `store.steampowered.com` or `steamcommunity.com` and tied to the same publisher, Witchlight.\n- A store-page banner or news post on the base game page. Steam surfaces demo news from the developer's news feed; readers can subscribe to news on the store page to receive those notes by email.\n\nThird-party coverage can echo either signal, but only the store page change or Witchlight's own post can confirm a demo is officially playable. Treat any non-Steam demo installer as unofficial."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [
    "release-date",
    "download",
    "platforms"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-24"
}

export const page_download: PageContent = {
  "id": "download",
  "translationKey": "download",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "download",
  "url": "/download",
  "pageType": "guides",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "The Magus Circle download on Steam",
  "seoTitle": "The Magus Circle download — Steam install guide",
  "metaDescription": "The Magus Circle download lands on Steam (AppID 2796640). Follow the official install path, avoid unofficial mirrors, and prepare for the September 24, 2026 launch.",
  "summary": "The official The Magus Circle download channel is Steam (AppID 2796640). The Steam store page is the only verified host for the game client because Witchlight uses Steam as the sol",
  "hero": {
    "eyebrow": "Guide",
    "subtitle": "How do I get The Magus Circle on Steam (and avoid the unofficial mirrors)?",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/2796640"
      }
    ]
  },
  "quickAnswer": "The official The Magus Circle download channel is Steam (AppID 2796640). The Steam store page is the only verified host for the game client because Witchlight uses Steam as the sole distribution platform, and the game has not launched so the store page currently shows a wishlist and add-to-cart flow. Avoid any \"The Magus Circle download\" hosted outside Steam or `steamcommunity.com`, including \"igg games\" mirrors and free-install aggregators.",
  "keyFacts": [
    {
      "label": "Page type",
      "value": "guide"
    },
    {
      "label": "Source rule",
      "value": "Steam store page and SteamDB only"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-24"
    }
  ],
  "modules": [
    {
      "id": "faq",
      "type": "prose",
      "heading": "Frequently Asked Questions",
      "body": "Short answers sourced from the Steam store page and SteamDB."
    },
    {
      "id": "download-the-official-steam-install-path-for-the-magus-circle-downloa",
      "type": "prose",
      "heading": "The official Steam install path for The Magus Circle download",
      "body": "The Magus Circle download follows the standard Steam purchase-and-install flow that every PC Steam title uses. Because the game is in the planned-release window for September 24, 2026, the steps below describe the in-store actions a reader will see on launch day and in the days leading up to it.\n\n- Open the Steam client on Windows and sign in to the account that will own the game.\n- Search \"The Magus Circle\" or follow the store page link for AppID 2796640; confirm the developer and publisher are both Witchlight before purchasing.\n- Add the game to the cart, complete checkout through Steam's payment flow, and accept any Steam Subscriber Agreement prompt.\n- After purchase, the Steam client will offer an Install button; choose the install location on a drive that meets the [system requirements](/system-requirements) minimums.\n- The game remains bound to the Steam account that purchased it; play launches through the Steam client and requires an online sign-in.\n\nIf a reader has not used Steam before, the same Steam installer that powers the storefront also downloads the game client, so no additional launcher is required for The Magus Circle download. Console and mobile downloads are not part of the official path because those versions are not announced; the [platforms page](/platforms) keeps that boundary current."
    },
    {
      "id": "download-preparing-for-launch-day-on-september-24-2026",
      "type": "prose",
      "heading": "Preparing for launch day on September 24, 2026",
      "body": "Pre-launch is the safest time to set up The Magus Circle download so launch day runs smoothly. A few steps reduce friction on the planned date:\n\n- Wishlist the game from the store page. Steam will send a one-time \"now available\" alert to the email tied to the account.\n- Confirm payment method. Steam checkout typically accepts credit cards, PayPal, Steam Wallet funds, and region-appropriate options; missing payment methods are the most common launch-day blocker.\n- Free up disk space. The store page will list the install size once published; reserve a buffer rather than waiting for the exact number on launch.\n- Pre-load if offered. Witchlight may enable Steam pre-load a day or two ahead of release; a pre-loaded install means The Magus Circle download is already staged and only unlocks on release.\n\nIf the reader wants a marker for \"when does it unlock,\" the [release date page](/release-date) carries the launch window and any date change."
    },
    {
      "id": "download-why-igg-games-mirrors-are-not-the-right-answer-for-the-magus",
      "type": "prose",
      "heading": "Why \"igg games\" mirrors are not the right answer for The Magus Circle download",
      "body": "Google Suggest surfaces an \"igg games\" variant for The Magus Circle download, but third-party mirrors are not an answer to this question. Three concrete reasons apply:\n\n- Witchlight uses Steam as the sole distribution channel. The Steam store page is the only host maintained by the publisher, and Steam's encryption and DRM layers are tied to it. Mirrors cannot guarantee a current build because they re-host older or modified clients.\n- Magus Circle mirrors do not carry Steam's auto-update. If the game receives a day-one patch, a mirrored client will fall behind; the official Steam install picks up patches automatically.\n- Mirrored installers sometimes bundle unrelated offers or altered binaries that change runtime behavior. The Steam client authenticates each install against Witchlight's signed builds; mirrors cannot.\n\nTreat any \"The Magus Circle download free\" or \"igg games\" listing as unofficial. If a reader already opened such a host, the safer next step is to remove the unofficial installer, run a malware scan, and purchase the game through Steam directly."
    },
    {
      "id": "download-troubleshooting-a-missing-or-pre-load-purchase",
      "type": "prose",
      "heading": "Troubleshooting a missing or pre-load purchase",
      "body": "Most launch-day issues for The Magus Circle download fall into three buckets. The fixes below keep the reader inside the Steam-validated path.\n\n- Purchase did not appear in the library. A handful of launches create a Steam license delay. Sign out of Steam and sign back in; the license typically appears within a few minutes.\n- Install button is greyed out. Confirm the system date and time, confirm Steam is online, and restart the client. If the issue persists, re-check the [release date page](/release-date) for any update.\n- Pre-load enabled but stuck at 0%. Pre-load bandwidth is throttled to keep Steam usable for the broader player base; restart the client after an hour and resume. The download will catch up before launch.\n\nIf a question is not covered above, the [price page](/price) confirms where the retail figure appears, and the [demo page](/demo) confirms whether a separate demo installer exists."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [
    "release-date",
    "demo",
    "price",
    "platforms"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-24"
}

export const page_price: PageContent = {
  "id": "price",
  "translationKey": "price",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "price",
  "url": "/price",
  "pageType": "release",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "The Magus Circle price",
  "seoTitle": "The Magus Circle price — $12.99 retail, $11.69 launch offer",
  "metaDescription": "The Magus Circle price is $12.99 USD on Steam with an introductory offer of $11.69 (10% off) ending October 1, 2026. One base listing, no separate editions currently advertised.",
  "summary": "The Magus Circle price on Steam is $12.99 USD retail, with a launch introductory offer of $11.69 USD (10% off) ending on October 1, 2026. The game is sold exclusively through Steam (",
  "hero": {
    "eyebrow": "Status",
    "subtitle": "How much does The Magus Circle cost and where is it sold?",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/2796640"
      }
    ]
  },
  "quickAnswer": "The Magus Circle price on Steam is $12.99 USD retail, with a launch introductory offer of $11.69 USD (10% off) ending on October 1, 2026. The game is sold exclusively through Steam (AppID 2796640) by Witchlight, and the Steam store page currently shows a single base listing with no separate edition tiers. The introductory-offer banner and 10% discount line are visible on the live Steam listing.",
  "keyFacts": [
    {
      "label": "Page type",
      "value": "status"
    },
    {
      "label": "Source rule",
      "value": "Steam store page and SteamDB only"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-26"
    }
  ],
  "modules": [
    {
      "id": "faq",
      "type": "prose",
      "heading": "Frequently Asked Questions",
      "body": "Short answers sourced from the Steam store page and SteamDB."
    },
    {
      "id": "price-current-steam-price-for-the-magus-circle",
      "type": "prose",
      "heading": "Current Steam price for The Magus Circle",
      "body": "The Steam store page for AppID 2796640 lists The Magus Circle at $12.99 USD retail. A 10% introductory offer drops the price to $11.69 USD during the launch window, and the offer ends on October 1, 2026. Both figures are read directly from the live Steam store page and cross-checked against the launch-day coverage that captured them."
    },
    {
      "id": "price-headline-price-facts-as-of-2026-09-26",
      "type": "prose",
      "heading": "Headline price facts as of 2026-09-26:",
      "body": "- Retail price: $12.99 USD on Steam (AppID 2796640)\n- Introductory offer: $11.69 USD (10% off)\n- Offer end date: October 1, 2026\n- Sales channel: Steam only, no third-party storefront or publisher site\n- Edition tiers: one base listing; no Deluxe / Standard / collector tiers currently advertised\n\nThe SteamDB record mirrors the price field but is not a separate source of truth; the Steam store page is. Prices outside the US display in regional currency on the localized Steam storefront and may differ from the USD figures above."
    },
    {
      "id": "price-how-the-introductory-offer-works",
      "type": "prose",
      "heading": "How the introductory offer works",
      "body": "The introductory offer is a time-limited 10% discount applied to the $12.99 USD retail price. During the offer window, the Steam store page shows the discounted $11.69 USD figure with a strike-through of the $12.99 USD retail line. Once October 1, 2026 passes, the price returns to the $12.99 USD retail figure."
    },
    {
      "id": "price-three-practical-notes-for-a-reader-deciding-when-to-buy",
      "type": "prose",
      "heading": "Three practical notes for a reader deciding when to buy:",
      "body": "- The offer is automatic at checkout. No coupon code or redemption step is required; the discounted price is what the Steam store page shows during the window.\n- The offer end date is October 1, 2026. Steam applies the cutoff automatically; readers who want the discounted price should buy before that date or wait for a separate promotion.\n- The price after the offer ends is $12.99 USD. Witchlight has not announced a future sale; any subsequent promotion would surface on the Steam store page.\n\nIf a reader wants a marker for \"what is the current price right now,\" the live Steam store page for AppID 2796640 is the only source that updates in real time."
    },
    {
      "id": "price-editions-and-what-s-currently-advertised",
      "type": "prose",
      "heading": "Editions and what's currently advertised",
      "body": "The Steam store page for AppID 2796640 currently shows a single base listing for The Magus Circle. No Deluxe, Standard, or collector tier appears alongside the base listing, and Witchlight has not announced tiered SKUs. DLC plans or post-launch upgrade editions are also not announced."
    },
    {
      "id": "price-what-this-means-for-a-reader-asking-about-editions",
      "type": "prose",
      "heading": "What this means for a reader asking about editions:",
      "body": "- Editions visible: one base listing only.\n- Announced tiers: none published; Witchlight has not announced Standard vs. Deluxe separation.\n- Upgrade or DLC plans: not announced.\n\nIf Witchlight publishes a tiered edition later, this page will reflect the change only after the Steam store page updates, and the change will appear on the same listing rather than as a parallel SKU."
    },
    {
      "id": "price-how-steam-regional-pricing-works-for-the-magus-circle",
      "type": "prose",
      "heading": "How Steam regional pricing works for The Magus Circle",
      "body": "The Magus Circle price displays in the local currency selected by the reader's Steam client. Steam applies regional pricing through a localized storefront per country; the underlying price bands and currency conversions are managed by Steam rather than by Witchlight. Three practical notes for international readers:\n\n- The US dollar price is the typical anchor, but the localized storefront shows the regional price. The Magus Circle price in any region should be confirmed on the localized Steam store page rather than a third-party host.\n- Steam Wallet funds, credit card, and PayPal (or region-appropriate) payment options follow regional availability. The price in local currency is what the reader pays; conversion to a home currency is the reader's bank's responsibility.\n- Steam support handles refunds and regional disputes, not Witchlight. The publisher's role is to publish a single price per region; Steam's checkout handles the rest.\n\nFor launch-day readers, the [platforms page](/platforms) confirms whether the game ships only on Windows PC or expands to consoles; the [release date page](/release-date) keeps the launch window and patch status current."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [
    "release-date",
    "download",
    "platforms"
  ],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-26"
}

export const page_platforms: PageContent = {
  "id": "platforms",
  "translationKey": "platforms",
  "locale": "en-US",
  "routeKind": "fixed",
  "slug": "platforms",
  "url": "/platforms",
  "pageType": "site",
  "presentation": {
    "shell": "content",
    "variant": "reading-right-rail"
  },
  "h1": "The Magus Circle platforms",
  "seoTitle": "The Magus Circle platforms — Steam, console, mobile",
  "metaDescription": "The Magus Circle platforms include Steam for Windows PC at launch (Sep 24, 2026). Console and mobile ports are unannounced as of 2026-09-24 — platform status.",
  "summary": "The Magus Circle platforms at launch are Steam for Windows PC, with AppID 2796640 listing the title for a September 24, 2026 release window. No PS5, Nintendo Switch, or mobile rele",
  "hero": {
    "eyebrow": "Comparison",
    "subtitle": "Is The Magus Circle on PS5, Nintendo Switch, or mobile?",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/2796640"
      }
    ]
  },
  "quickAnswer": "The Magus Circle platforms at launch are Steam for Windows PC, with AppID 2796640 listing the title for a September 24, 2026 release window. No PS5, Nintendo Switch, or mobile release has been announced for The Magus Circle platforms. The Steam store page and SteamDB record both show Windows as the only confirmed launch platform, and console or mobile availability remains unannounced.",
  "keyFacts": [
    {
      "label": "Page type",
      "value": "comparison"
    },
    {
      "label": "Source rule",
      "value": "Steam store page and SteamDB only"
    },
    {
      "label": "Last reviewed",
      "value": "2026-09-24"
    }
  ],
  "modules": [
    {
      "id": "faq",
      "type": "prose",
      "heading": "Frequently Asked Questions",
      "body": "Short answers sourced from the Steam store page and SteamDB."
    },
    {
      "id": "platforms-confirmed-the-magus-circle-platforms-at-launch",
      "type": "prose",
      "heading": "Confirmed The Magus Circle platforms at launch",
      "body": "The only confirmed entry in The Magus Circle platforms at launch is Steam for Windows PC, listed under AppID 2796640 with a planned release date of September 24, 2026. Witchlight is listed as both developer and publisher on the Steam store page, and the supported language set currently names English and Korean for interface, full audio, and subtitles. The SteamDB entry mirrors the store page metadata and confirms the same Windows-only launch scope.\n\nFor a player asking whether The Magus Circle platforms include a console or handheld version, the practical answer is that Steam is the only channel through which a launch purchase can be made. Anyone who searches for the title on the PlayStation Store or the Nintendo eShop will not find a listing, and that absence is consistent with the current store-page scope rather than a temporary regional gap. The platforms page should be revisited on launch day to confirm whether the store metadata has changed, because launch windows often bring last-minute platform-list updates."
    },
    {
      "id": "platforms-why-ps5-and-nintendo-switch-are-not-yet-announced",
      "type": "prose",
      "heading": "Why PS5 and Nintendo Switch are not yet announced",
      "body": "PlayStation 5 and Nintendo Switch are not announced as The Magus Circle platforms at launch. The Steam store page does not mention either console, and SteamDB does not show a separate PSN product ID or a Switch eShop listing tied to AppID 2796640. The game's new-IP profile, the single-developer studio footprint, and the Steam-first distribution path together explain why the launch scope is PC-only.\n\nGoogle Suggest does record \"the magus circle ps5\" and \"the magus circle switch\" as autocomplete siblings of the main title. That signal shows real user demand for a console edition, but autocomplete is demand evidence and not a fact source. The Magus Circle platforms status remains Steam-only until Witchlight posts a console announcement through the Steam news hub or the studio's official channels. If a console edition is announced later, the same platforms page will need to be updated with the new SKU, regional stores, and any cross-buy notes."
    },
    {
      "id": "platforms-mobile-status-for-the-magus-circle-platforms",
      "type": "prose",
      "heading": "Mobile status for The Magus Circle platforms",
      "body": "Mobile is also unannounced as part of The Magus Circle platforms. Neither the Steam store page nor the SteamDB record indicates an iOS or Android SKU, and Witchlight has not posted a mobile release notice on the Steam news hub. \"The magus circle mobile release date\" appears in the autocomplete evidence as a demand phrasing, but the underlying game has no confirmed mobile build.\n\nPlayers who search for a mobile version are most often looking for either a native iOS or Android app or a cloud-streamed path through Steam Link, GeForce NOW, or Xbox Cloud Gaming. The store page does not address cloud streaming, so The Magus Circle platforms status on mobile should be read as \"not announced\" rather than as a confirmed no. If Witchlight later announces a mobile port or a streaming partner, that fact will appear on the store page first and should then be reflected here."
    },
    {
      "id": "platforms-macos-and-steamos-linux-in-the-magus-circle-listing",
      "type": "prose",
      "heading": "macOS and SteamOS+Linux in The Magus Circle listing",
      "body": "The SteamDB metadata for AppID 2796640 includes platform identifiers for macOS and SteamOS+Linux in addition to Windows, but those identifiers only mean that the developer registered the underlying platform fields on the Steamworks side. They do not mean that a playable macOS or SteamOS+Linux build ships on launch day. The Steam store page itself currently lists Windows as the primary supported OS, and Steam is the only confirmed storefront entry for The Magus Circle platforms at this stage.\n\nFor a reader deciding whether to wait for a macOS or SteamOS+Linux build, the right move is to treat the SteamOS+Linux and macOS fields as a Steamworks registration rather than a shipping feature, and to confirm launch-day support on the Steam store page or in Witchlight's launch news post. If a Steam Deck or Linux build does ship on September 24, 2026, the system requirements and store description will be updated to reflect that, and the Steam Deck Verified status should appear in the Deck section of the listing."
    }
  ],
  "faqIds": [],
  "relatedPageIds": [],
  "schemaTypes": [
    "Article",
    "BreadcrumbList",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-24"
}

export const releasePages: PageContent[] = [
  {
    "id": "release-date",
    "translationKey": "release-date",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "release-date",
    "url": "/release-date",
    "pageType": "release",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "The Magus Circle release date",
    "seoTitle": "The Magus Circle release date — launched on Steam, Patch 1.0.3 live",
    "metaDescription": "The Magus Circle released on Steam on September 24, 2026 with 179 reviews and a Very Positive (92%) label. Patches 1.0.1, 1.0.2, and the 1.0.3 hotfix are live; see the What changed in 1.0.3 callout below.",
    "summary": "The Magus Circle released on September 24, 2026 on Steam (AppID 2796640), developed and published by Witchlight. The Steam store page lists the title as released with 179 reviews and a",
    "hero": {
      "eyebrow": "Status",
      "subtitle": "When does The Magus Circle release?",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Steam Store",
          "href": "https://store.steampowered.com/app/2796640"
        }
      ]
    },
    "quickAnswer": "The Magus Circle released on September 24, 2026 on Steam (AppID 2796640), developed and published by Witchlight. The Steam store page now lists the title as released with 179 reviews carrying a Very Positive (92%) label. Witchlight shipped Patches 1.0.1, 1.0.2, and the 1.0.3 hotfix in quick succession; the Steam Community Hub lists the 1.0.3 patch notes above the prior two updates. After 1.0.3 the only two reported bugs still open are the post-Matcha character-selection reset and the Wacom Cintiq cursor flicker. See the What changed in 1.0.3 and Known issues sections below before installing.",
    "keyFacts": [
      {
        "label": "Page type",
        "value": "status"
      },
      {
        "label": "Source rule",
        "value": "Steam store page and SteamDB only"
      },
      {
        "label": "Last reviewed",
        "value": "2026-09-27"
      }
    ],
    "modules": [
      {
        "id": "faq",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Short answers sourced from the Steam store page and SteamDB."
      },
      {
        "id": "release-date-what-the-steam-store-page-lists-now-that-the-magus-circle-ha",
        "type": "prose",
        "heading": "What the Steam store page lists now that The Magus Circle has launched",
        "body": "The Magus Circle is listed on the Steam store page (AppID 2796640) as released on September 24, 2026. Witchlight is credited as both developer and publisher. The store page shows one base listing rather than separate regional SKUs, and the supported language set remains English and Korean for interface, full audio, and subtitles."
      },
      {
        "id": "release-date-current-launch-facts-as-of-2026-09-27",
        "type": "prose",
        "heading": "Current launch facts as of 2026-09-27:",
        "body": "- Release: September 24, 2026 on Steam (AppID 2796640)\n- Platform at launch: Windows PC (Steam)\n- Developer and publisher: Witchlight\n- Steam user reviews: 179 reviews, Very Positive (92%)\n- Interface and full audio and subtitles: English, Korean\n- Current build: Patch 1.0.3 hotfix (Sep 25, 2026)\n\nThe SteamDB record for AppID 2796640 mirrors the release status and is used here as a cross-check, not as a separate timing source. The review count and Very Positive label are read directly from the store page and reflect the cumulative user-review state of the listing."
      },
      {
        "id": "release-date-day-1-patches-1-0-1-and-1-0-2-then-patch-1-0-3-hotfix",
        "type": "prose",
        "heading": "Day 1 patches 1.0.1 and 1.0.2, then Patch 1.0.3 hotfix",
        "body": "Witchlight is actively patching the launch build. Three updates have shipped by name in the Steam Community Hub and in launch coverage:\n\n- **Patch 1.0.1 (Day 1 stability)** — landed alongside or just after release. This patch focuses on launch-day stability, crash fixes, and the first wave of post-launch regressions reported by players in the Steam Community Hub.\n- **Patch 1.0.2 (hotfix)** — the first hotfix layered on top of 1.0.1. This patch addresses follow-up bugs that surfaced once 1.0.1 reached a wider audience, including character-specific fix scopes for Wheel, Hermit, Matcha, and Anchan.\n- **Patch 1.0.3 (hotfix, Sep 25)** — the current build. Witchlight's \"1.0.3 Hotfix!\" event on the Steam Community Hub explicitly enumerates the closed bug list (see the callout below).\n\nA Witchlight launch statement recorded by Happy Gamer also commits to \"continue to provide support and updates for the next couple months,\" so the patch cadence is expected to continue beyond 1.0.3. The exact release timestamps for each patch should be re-checked on the Steam news hub; this page records the patch names and scopes, not the precise minute each one shipped."
      },
      {
        "id": "release-date-what-changed-in-patch-1-0-3",
        "type": "prose",
        "heading": "What changed in Patch 1.0.3",
        "body": "The Patch 1.0.3 post on the Steam Community Hub lists every bug this hotfix closes and the one balance change worth flagging. Treat this as the authoritative closure set rather than the residual list below.\n\n- **Bugs fixed:** Exsanguinate getting stuck without exploding, accidental extractions, Riptide, Poppet Master upgrade, ending sequence failing to reset, spell effects getting stuck on screen, chest pickup logic, Jam pausing with the game, Milk no longer forced until Matcha unlock, incorrect reroll count, incorrect ability charge count, Mana Efficiency display, missing Steam achievement, achievements unlocking too soon, and potion craft tutorial fixes.\n- **Balance change:** No more star-shaped shielded enemies. Exsanguinate area reduced by 25%; Ink base area increased slightly with Inky Area scaling decreased; Prismatic Gale no longer costs mana.\n- **Enhancement:** New spell scrolls are acquirable by exploring the hub.\n\nIf you were holding off because of any item in the fixed list, 1.0.3 is the build to install. The two residual bugs below are the only items the page still tracks as open."
      },
      {
        "id": "release-date-known-issues-still-open-after-patch-1-0-3",
        "type": "prose",
        "heading": "Known issues still open after Patch 1.0.3",
        "body": "Two reported bugs remain visible in the Steam Community Hub after the 1.0.3 hotfix and are not listed as fixed in any shipped patch. They are recorded here so readers do not assume the current build is bug-free.\n\n- **Character-selection reset (post-Matcha unlock only)** — until Patch 1.0.3 the launcher forced Milk on every new save; 1.0.3 closes that pre-Matcha lock. The active Steam Community Hub thread \"Can't change characters\" still tracks a residual reset for players who have already unlocked Matcha. Affected characters named in the thread include Macha (Matcha), Coffee, and the flower-girl unlockable.\n- **Wacom Cintiq cursor flicker** — stylus / drawing-tablet users on Wacom Cintiq hardware can see the cursor flicker while tracing sigils. This is a separate issue from the character-selection bug and is not mentioned in the 1.0.1, 1.0.2, or 1.0.3 fix scopes.\n\nIf a reader hits either bug, the right move is to subscribe to the Steam news hub so a future patch (1.0.4 or later) lands in the email, and to follow the Steam Community Hub threads where Witchlight and the community track workarounds. The Known issues section will be updated once a future patch closes either entry."
      },
      {
        "id": "release-date-how-to-follow-official-release-news-going-forward",
        "type": "prose",
        "heading": "How to follow official release news going forward",
        "body": "Date changes after launch are unlikely; what changes now is the patch cadence. Two channels carry the next round of updates first: the Steam news hub on the store page and Witchlight's own Steam posts. Treat third-party trackers as echoes of those sources, not as primary timing."
      },
      {
        "id": "release-date-for-related-status-checks-in-the-days-after-launch",
        "type": "prose",
        "heading": "For related status checks in the days after launch:",
        "body": "- [Demo status](/demo) — confirm whether a separate demo app appears.\n- [Price](/price) — confirm the published retail figure and the introductory-offer end date.\n- [Platforms](/platforms) — confirm whether Windows remains the only platform.\n- [Download](/download) — prepare the Steam install path or fix a broken install.\n- [System requirements](/system-requirements) — confirm Windows minimum specs before installing.\n- [Characters](/characters) — see the named playable mage roster and the 1.0.3 Poppet Master / Matcha-unlock fixes."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "demo",
      "platforms",
      "price",
      "download",
      "system-requirements",
      "characters"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-27"
  },
  {
    "id": "demo",
    "translationKey": "demo",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "demo",
    "url": "/demo",
    "pageType": "release",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "The Magus Circle demo",
    "seoTitle": "The Magus Circle demo — where to find one on Steam",
    "metaDescription": "The Magus Circle demo has not been listed on Steam as of 2026-09-24. Find where an official demo announcement from Witchlight would appear.",
    "summary": "The Magus Circle demo has not been listed on the Steam store page as of 2026-09-24. The Steam store page (AppID 2796640) and the SteamDB record show a single base listing for the f",
    "hero": {
      "eyebrow": "Status",
      "subtitle": "Does The Magus Circle have a demo and how do I play it?",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Steam Store",
          "href": "https://store.steampowered.com/app/2796640"
        }
      ]
    },
    "quickAnswer": "The Magus Circle demo has not been listed on the Steam store page. The Steam store page (AppID 2796640) and the SteamDB record show a single base listing for the full game with no separate demo app entry. Steam demos appear as their own app entry when published, so the right action is to wishlist The Magus Circle and recheck the store page closer to the September 24, 2026 launch.",
    "keyFacts": [
      {
        "label": "Page type",
        "value": "status"
      },
      {
        "label": "Source rule",
        "value": "Steam store page and SteamDB only"
      },
      {
        "label": "Last reviewed",
        "value": "2026-09-24"
      }
    ],
    "modules": [
      {
        "id": "faq",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Short answers sourced from the Steam store page and SteamDB."
      },
      {
        "id": "demo-how-steam-currently-lists-the-magus-circle-demo-status",
        "type": "prose",
        "heading": "How Steam currently lists The Magus Circle demo status",
        "body": "The Steam store page for The Magus Circle (AppID 2796640) currently lists the base game only — the page is configured for a planned release on September 24, 2026 rather than a separate demo app. Steam demos are published as their own app entries with their own store page, and that separate entry is what players install when a demo is available. Because that second entry is not present, there is no playable The Magus Circle demo on Steam.\n\nWhat this means for a reader who searched \"The Magus Circle demo\":\n\n- The Steam store page does not list a \"Download Demo\" or \"Play Demo\" button.\n- SteamDB mirrors the store page's app list and likewise shows only AppID 2796640, not a paired demo AppID.\n- Third-party hosts that claim a demo installer are not official channels and are not endorsed here; the [download page](/download) covers why unofficial mirrors are not the right answer."
      },
      {
        "id": "demo-how-to-try-the-magus-circle-when-no-demo-is-available",
        "type": "prose",
        "heading": "How to try The Magus Circle when no demo is available",
        "body": "Until Witchlight publishes a demo entry, the supported path to play The Magus Circle is to buy and install the full game on its planned September 24, 2026 launch on Steam. Three practical steps cover both the demo-watch and the launch-day setup:\n\n- Add The Magus Circle to your Steam wishlist from the store page; Steam sends a one-time \"now available\" notice if the demo or the full game goes live.\n- Confirm your Steam account owns a copy of the base game on launch day; the full game is the only published way to play The Magus Circle.\n- Pre-load the game client through the [download page](/download) route if Steam offers pre-load ahead of release; pre-load availability is decided by Witchlight and surfaced on the store page when enabled.\n\nFor launch-day platform readers, the [platforms page](/platforms) confirms Windows PC is the only listed platform; console versions are not announced."
      },
      {
        "id": "demo-where-an-official-demo-announcement-would-appear",
        "type": "prose",
        "heading": "Where an official demo announcement would appear",
        "body": "The Magus Circle demo announcement, if Witchlight publishes one, would show up first on the Steam store page for AppID 2796640 (as a new demo app entry or as an in-page banner) and on Witchlight's own channels. Two reliable signals to watch:\n\n- A second Steam app entry paired to the base game. Steam creates a separate demo app entry with its own store page; readers should verify any \"The Magus Circle demo\" download link is hosted on `store.steampowered.com` or `steamcommunity.com` and tied to the same publisher, Witchlight.\n- A store-page banner or news post on the base game page. Steam surfaces demo news from the developer's news feed; readers can subscribe to news on the store page to receive those notes by email.\n\nThird-party coverage can echo either signal, but only the store page change or Witchlight's own post can confirm a demo is officially playable. Treat any non-Steam demo installer as unofficial."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "release-date",
      "download",
      "platforms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-24"
  },
  {
    "id": "download",
    "translationKey": "download",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "download",
    "url": "/download",
    "pageType": "guides",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "The Magus Circle download on Steam",
    "seoTitle": "The Magus Circle download — Steam install guide",
    "metaDescription": "The Magus Circle download lands on Steam (AppID 2796640). Follow the official install path, avoid unofficial mirrors, and prepare for the September 24, 2026 launch.",
    "summary": "The official The Magus Circle download channel is Steam (AppID 2796640). The Steam store page is the only verified host for the game client because Witchlight uses Steam as the sol",
    "hero": {
      "eyebrow": "Guide",
      "subtitle": "How do I get The Magus Circle on Steam (and avoid the unofficial mirrors)?",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Steam Store",
          "href": "https://store.steampowered.com/app/2796640"
        }
      ]
    },
    "quickAnswer": "The official The Magus Circle download channel is Steam (AppID 2796640). The Steam store page is the only verified host for the game client because Witchlight uses Steam as the sole distribution platform, and the game has not launched so the store page currently shows a wishlist and add-to-cart flow. Avoid any \"The Magus Circle download\" hosted outside Steam or `steamcommunity.com`, including \"igg games\" mirrors and free-install aggregators.",
    "keyFacts": [
      {
        "label": "Page type",
        "value": "guide"
      },
      {
        "label": "Source rule",
        "value": "Steam store page and SteamDB only"
      },
      {
        "label": "Last reviewed",
        "value": "2026-09-24"
      }
    ],
    "modules": [
      {
        "id": "faq",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Short answers sourced from the Steam store page and SteamDB."
      },
      {
        "id": "download-the-official-steam-install-path-for-the-magus-circle-downloa",
        "type": "prose",
        "heading": "The official Steam install path for The Magus Circle download",
        "body": "The Magus Circle download follows the standard Steam purchase-and-install flow that every PC Steam title uses. Because the game is in the planned-release window for September 24, 2026, the steps below describe the in-store actions a reader will see on launch day and in the days leading up to it.\n\n- Open the Steam client on Windows and sign in to the account that will own the game.\n- Search \"The Magus Circle\" or follow the store page link for AppID 2796640; confirm the developer and publisher are both Witchlight before purchasing.\n- Add the game to the cart, complete checkout through Steam's payment flow, and accept any Steam Subscriber Agreement prompt.\n- After purchase, the Steam client will offer an Install button; choose the install location on a drive that meets the [system requirements](/system-requirements) minimums.\n- The game remains bound to the Steam account that purchased it; play launches through the Steam client and requires an online sign-in.\n\nIf a reader has not used Steam before, the same Steam installer that powers the storefront also downloads the game client, so no additional launcher is required for The Magus Circle download. Console and mobile downloads are not part of the official path because those versions are not announced; the [platforms page](/platforms) keeps that boundary current."
      },
      {
        "id": "download-preparing-for-launch-day-on-september-24-2026",
        "type": "prose",
        "heading": "Preparing for launch day on September 24, 2026",
        "body": "Pre-launch is the safest time to set up The Magus Circle download so launch day runs smoothly. A few steps reduce friction on the planned date:\n\n- Wishlist the game from the store page. Steam will send a one-time \"now available\" alert to the email tied to the account.\n- Confirm payment method. Steam checkout typically accepts credit cards, PayPal, Steam Wallet funds, and region-appropriate options; missing payment methods are the most common launch-day blocker.\n- Free up disk space. The store page will list the install size once published; reserve a buffer rather than waiting for the exact number on launch.\n- Pre-load if offered. Witchlight may enable Steam pre-load a day or two ahead of release; a pre-loaded install means The Magus Circle download is already staged and only unlocks on release.\n\nIf the reader wants a marker for \"when does it unlock,\" the [release date page](/release-date) carries the launch window and any date change."
      },
      {
        "id": "download-why-igg-games-mirrors-are-not-the-right-answer-for-the-magus",
        "type": "prose",
        "heading": "Why \"igg games\" mirrors are not the right answer for The Magus Circle download",
        "body": "Google Suggest surfaces an \"igg games\" variant for The Magus Circle download, but third-party mirrors are not an answer to this question. Three concrete reasons apply:\n\n- Witchlight uses Steam as the sole distribution channel. The Steam store page is the only host maintained by the publisher, and Steam's encryption and DRM layers are tied to it. Mirrors cannot guarantee a current build because they re-host older or modified clients.\n- Magus Circle mirrors do not carry Steam's auto-update. If the game receives a day-one patch, a mirrored client will fall behind; the official Steam install picks up patches automatically.\n- Mirrored installers sometimes bundle unrelated offers or altered binaries that change runtime behavior. The Steam client authenticates each install against Witchlight's signed builds; mirrors cannot.\n\nTreat any \"The Magus Circle download free\" or \"igg games\" listing as unofficial. If a reader already opened such a host, the safer next step is to remove the unofficial installer, run a malware scan, and purchase the game through Steam directly."
      },
      {
        "id": "download-troubleshooting-a-missing-or-pre-load-purchase",
        "type": "prose",
        "heading": "Troubleshooting a missing or pre-load purchase",
        "body": "Most launch-day issues for The Magus Circle download fall into three buckets. The fixes below keep the reader inside the Steam-validated path.\n\n- Purchase did not appear in the library. A handful of launches create a Steam license delay. Sign out of Steam and sign back in; the license typically appears within a few minutes.\n- Install button is greyed out. Confirm the system date and time, confirm Steam is online, and restart the client. If the issue persists, re-check the [release date page](/release-date) for any update.\n- Pre-load enabled but stuck at 0%. Pre-load bandwidth is throttled to keep Steam usable for the broader player base; restart the client after an hour and resume. The download will catch up before launch.\n\nIf a question is not covered above, the [price page](/price) confirms where the retail figure appears, and the [demo page](/demo) confirms whether a separate demo installer exists."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "release-date",
      "demo",
      "price",
      "platforms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-24"
  },
  {
    "id": "price",
    "translationKey": "price",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "price",
    "url": "/price",
    "pageType": "release",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "The Magus Circle price",
    "seoTitle": "The Magus Circle price — $12.99 retail, $11.69 launch offer",
    "metaDescription": "The Magus Circle price is $12.99 USD on Steam with an introductory offer of $11.69 (10% off) ending October 1, 2026. One base listing, no separate editions currently advertised.",
    "summary": "The Magus Circle price on Steam is $12.99 USD retail, with a launch introductory offer of $11.69 USD (10% off) ending on October 1, 2026. The game is sold exclusively through Steam (",
    "hero": {
      "eyebrow": "Status",
      "subtitle": "How much does The Magus Circle cost and where is it sold?",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Steam Store",
          "href": "https://store.steampowered.com/app/2796640"
        }
      ]
    },
    "quickAnswer": "The Magus Circle price on Steam is $12.99 USD retail, with a launch introductory offer of $11.69 USD (10% off) ending on October 1, 2026. The game is sold exclusively through Steam (AppID 2796640) by Witchlight, and the Steam store page currently shows a single base listing with no separate edition tiers. The introductory-offer banner and 10% discount line are visible on the live Steam listing.",
    "keyFacts": [
      {
        "label": "Page type",
        "value": "status"
      },
      {
        "label": "Source rule",
        "value": "Steam store page and SteamDB only"
      },
      {
        "label": "Last reviewed",
        "value": "2026-09-26"
      }
    ],
    "modules": [
      {
        "id": "faq",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Short answers sourced from the Steam store page and SteamDB."
      },
      {
        "id": "price-current-steam-price-for-the-magus-circle",
        "type": "prose",
        "heading": "Current Steam price for The Magus Circle",
        "body": "The Steam store page for AppID 2796640 lists The Magus Circle at $12.99 USD retail. A 10% introductory offer drops the price to $11.69 USD during the launch window, and the offer ends on October 1, 2026. Both figures are read directly from the live Steam store page and cross-checked against the launch-day coverage that captured them."
      },
      {
        "id": "price-headline-price-facts-as-of-2026-09-26",
        "type": "prose",
        "heading": "Headline price facts as of 2026-09-26:",
        "body": "- Retail price: $12.99 USD on Steam (AppID 2796640)\n- Introductory offer: $11.69 USD (10% off)\n- Offer end date: October 1, 2026\n- Sales channel: Steam only, no third-party storefront or publisher site\n- Edition tiers: one base listing; no Deluxe / Standard / collector tiers currently advertised\n\nThe SteamDB record mirrors the price field but is not a separate source of truth; the Steam store page is. Prices outside the US display in regional currency on the localized Steam storefront and may differ from the USD figures above."
      },
      {
        "id": "price-how-the-introductory-offer-works",
        "type": "prose",
        "heading": "How the introductory offer works",
        "body": "The introductory offer is a time-limited 10% discount applied to the $12.99 USD retail price. During the offer window, the Steam store page shows the discounted $11.69 USD figure with a strike-through of the $12.99 USD retail line. Once October 1, 2026 passes, the price returns to the $12.99 USD retail figure."
      },
      {
        "id": "price-three-practical-notes-for-a-reader-deciding-when-to-buy",
        "type": "prose",
        "heading": "Three practical notes for a reader deciding when to buy:",
        "body": "- The offer is automatic at checkout. No coupon code or redemption step is required; the discounted price is what the Steam store page shows during the window.\n- The offer end date is October 1, 2026. Steam applies the cutoff automatically; readers who want the discounted price should buy before that date or wait for a separate promotion.\n- The price after the offer ends is $12.99 USD. Witchlight has not announced a future sale; any subsequent promotion would surface on the Steam store page.\n\nIf a reader wants a marker for \"what is the current price right now,\" the live Steam store page for AppID 2796640 is the only source that updates in real time."
      },
      {
        "id": "price-editions-and-what-s-currently-advertised",
        "type": "prose",
        "heading": "Editions and what's currently advertised",
        "body": "The Steam store page for AppID 2796640 currently shows a single base listing for The Magus Circle. No Deluxe, Standard, or collector tier appears alongside the base listing, and Witchlight has not announced tiered SKUs. DLC plans or post-launch upgrade editions are also not announced."
      },
      {
        "id": "price-what-this-means-for-a-reader-asking-about-editions",
        "type": "prose",
        "heading": "What this means for a reader asking about editions:",
        "body": "- Editions visible: one base listing only.\n- Announced tiers: none published; Witchlight has not announced Standard vs. Deluxe separation.\n- Upgrade or DLC plans: not announced.\n\nIf Witchlight publishes a tiered edition later, this page will reflect the change only after the Steam store page updates, and the change will appear on the same listing rather than as a parallel SKU."
      },
      {
        "id": "price-how-steam-regional-pricing-works-for-the-magus-circle",
        "type": "prose",
        "heading": "How Steam regional pricing works for The Magus Circle",
        "body": "The Magus Circle price displays in the local currency selected by the reader's Steam client. Steam applies regional pricing through a localized storefront per country; the underlying price bands and currency conversions are managed by Steam rather than by Witchlight. Three practical notes for international readers:\n\n- The US dollar price is the typical anchor, but the localized storefront shows the regional price. The Magus Circle price in any region should be confirmed on the localized Steam store page rather than a third-party host.\n- Steam Wallet funds, credit card, and PayPal (or region-appropriate) payment options follow regional availability. The price in local currency is what the reader pays; conversion to a home currency is the reader's bank's responsibility.\n- Steam support handles refunds and regional disputes, not Witchlight. The publisher's role is to publish a single price per region; Steam's checkout handles the rest.\n\nFor launch-day readers, the [platforms page](/platforms) confirms whether the game ships only on Windows PC or expands to consoles; the [release date page](/release-date) keeps the launch window and patch status current."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "release-date",
      "download",
      "platforms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-26"
  },
  {
    "id": "platforms",
    "translationKey": "platforms",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "platforms",
    "url": "/platforms",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-right-rail"
    },
    "h1": "The Magus Circle platforms",
    "seoTitle": "The Magus Circle platforms — Steam, console, mobile",
    "metaDescription": "The Magus Circle platforms include Steam for Windows PC at launch (Sep 24, 2026). Console and mobile ports are unannounced as of 2026-09-24 — platform status.",
    "summary": "The Magus Circle platforms at launch are Steam for Windows PC, with AppID 2796640 listing the title for a September 24, 2026 release window. No PS5, Nintendo Switch, or mobile rele",
    "hero": {
      "eyebrow": "Comparison",
      "subtitle": "Is The Magus Circle on PS5, Nintendo Switch, or mobile?",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Steam Store",
          "href": "https://store.steampowered.com/app/2796640"
        }
      ]
    },
    "quickAnswer": "The Magus Circle platforms at launch are Steam for Windows PC, with AppID 2796640 listing the title for a September 24, 2026 release window. No PS5, Nintendo Switch, or mobile release has been announced for The Magus Circle platforms. The Steam store page and SteamDB record both show Windows as the only confirmed launch platform, and console or mobile availability remains unannounced.",
    "keyFacts": [
      {
        "label": "Page type",
        "value": "comparison"
      },
      {
        "label": "Source rule",
        "value": "Steam store page and SteamDB only"
      },
      {
        "label": "Last reviewed",
        "value": "2026-09-24"
      }
    ],
    "modules": [
      {
        "id": "faq",
        "type": "prose",
        "heading": "Frequently Asked Questions",
        "body": "Short answers sourced from the Steam store page and SteamDB."
      },
      {
        "id": "platforms-confirmed-the-magus-circle-platforms-at-launch",
        "type": "prose",
        "heading": "Confirmed The Magus Circle platforms at launch",
        "body": "The only confirmed entry in The Magus Circle platforms at launch is Steam for Windows PC, listed under AppID 2796640 with a planned release date of September 24, 2026. Witchlight is listed as both developer and publisher on the Steam store page, and the supported language set currently names English and Korean for interface, full audio, and subtitles. The SteamDB entry mirrors the store page metadata and confirms the same Windows-only launch scope.\n\nFor a player asking whether The Magus Circle platforms include a console or handheld version, the practical answer is that Steam is the only channel through which a launch purchase can be made. Anyone who searches for the title on the PlayStation Store or the Nintendo eShop will not find a listing, and that absence is consistent with the current store-page scope rather than a temporary regional gap. The platforms page should be revisited on launch day to confirm whether the store metadata has changed, because launch windows often bring last-minute platform-list updates."
      },
      {
        "id": "platforms-why-ps5-and-nintendo-switch-are-not-yet-announced",
        "type": "prose",
        "heading": "Why PS5 and Nintendo Switch are not yet announced",
        "body": "PlayStation 5 and Nintendo Switch are not announced as The Magus Circle platforms at launch. The Steam store page does not mention either console, and SteamDB does not show a separate PSN product ID or a Switch eShop listing tied to AppID 2796640. The game's new-IP profile, the single-developer studio footprint, and the Steam-first distribution path together explain why the launch scope is PC-only.\n\nGoogle Suggest does record \"the magus circle ps5\" and \"the magus circle switch\" as autocomplete siblings of the main title. That signal shows real user demand for a console edition, but autocomplete is demand evidence and not a fact source. The Magus Circle platforms status remains Steam-only until Witchlight posts a console announcement through the Steam news hub or the studio's official channels. If a console edition is announced later, the same platforms page will need to be updated with the new SKU, regional stores, and any cross-buy notes."
      },
      {
        "id": "platforms-mobile-status-for-the-magus-circle-platforms",
        "type": "prose",
        "heading": "Mobile status for The Magus Circle platforms",
        "body": "Mobile is also unannounced as part of The Magus Circle platforms. Neither the Steam store page nor the SteamDB record indicates an iOS or Android SKU, and Witchlight has not posted a mobile release notice on the Steam news hub. \"The magus circle mobile release date\" appears in the autocomplete evidence as a demand phrasing, but the underlying game has no confirmed mobile build.\n\nPlayers who search for a mobile version are most often looking for either a native iOS or Android app or a cloud-streamed path through Steam Link, GeForce NOW, or Xbox Cloud Gaming. The store page does not address cloud streaming, so The Magus Circle platforms status on mobile should be read as \"not announced\" rather than as a confirmed no. If Witchlight later announces a mobile port or a streaming partner, that fact will appear on the store page first and should then be reflected here."
      },
      {
        "id": "platforms-macos-and-steamos-linux-in-the-magus-circle-listing",
        "type": "prose",
        "heading": "macOS and SteamOS+Linux in The Magus Circle listing",
        "body": "The SteamDB metadata for AppID 2796640 includes platform identifiers for macOS and SteamOS+Linux in addition to Windows, but those identifiers only mean that the developer registered the underlying platform fields on the Steamworks side. They do not mean that a playable macOS or SteamOS+Linux build ships on launch day. The Steam store page itself currently lists Windows as the primary supported OS, and Steam is the only confirmed storefront entry for The Magus Circle platforms at this stage.\n\nFor a reader deciding whether to wait for a macOS or SteamOS+Linux build, the right move is to treat the SteamOS+Linux and macOS fields as a Steamworks registration rather than a shipping feature, and to confirm launch-day support on the Steam store page or in Witchlight's launch news post. If a Steam Deck or Linux build does ship on September 24, 2026, the system requirements and store description will be updated to reflect that, and the Steam Deck Verified status should appear in the Deck section of the listing."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-24"
  }
]
