import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date", labels: { "en-US": "Launch & Status" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay & Content" } },
  { href: "/wiki", labels: { "en-US": "Guides & Reference" } },
  { href: "/reviews", labels: { "en-US": "Community" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date", labels: { "en-US": "Release Date" } },
  { href: "/download", labels: { "en-US": "Download" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" } },
  { href: "/wiki", labels: { "en-US": "Wiki" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
