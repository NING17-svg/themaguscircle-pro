import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "The Magus Circle",
  brandMark: "TMC",
  gameName: "The Magus Circle",
  domain: "themaguscircle.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://themaguscircle.pro").replace(/\/$/, ""),
  description:
    "Unofficial launch reference hub for The Magus Circle, with release dates, demo access, mechanics, and platform notes.",
  tagline: "Release info, gameplay basics, and launch reference for The Magus Circle.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "The Magus Circle Reference",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "The Magus Circle on Steam (AppID 2796640)",
      href: "https://store.steampowered.com/app/2796640",
      description: "Official Steam store page; primary current-game source for release date, developer/publisher, and supported languages.",
    },
    {
      label: "SteamDB record for AppID 2796640",
      href: "https://steamdb.info/app/2796640/",
      description: "Steam metadata snapshot used for app type, planned release date, languages list, publisher/developer fields, and Steam tags.",
    },
  ],
  disclaimer:
    "This is an unofficial fan reference site. All facts are sourced from the Steam store page, SteamDB, and the developer's official channels.",
};
