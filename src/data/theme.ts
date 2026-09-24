import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#F4EFE3",
    surface1: "#FAF6EA",
    surface2: "#EBE3CF",
    surface3: "#D9CFB6",
    surfaceInverse: "#1A1B33",
    textPrimary: "#231E12",
    textMuted: "#5B5240",
    textInverse: "#F1ECDD",
    textOnAccentPrimary: "#FAF6EA",
    textLink: "#3D3675",
    focusRing: "#C2913B",
    line: "#C8BC9F",
    lineStrong: "#A08B5C",
    accentPrimary: "#3D3675",
    accentSecondary: "#A8703C",
    accentBright: "#D9A24A",
    statusConfirmed: "#3F6B3A",
    statusCaution: "#B07526",
    statusUnknown: "#7E6A4A",
  },
  typography: {
    headingFamily:
      "'Cormorant Garamond', 'Libre Caslon Text', 'Source Serif Pro', Georgia, serif",
    bodyFamily:
      "'Inter', 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "8px",
    borderWidth: "1px",
    shadow:
      "0 1px 2px rgba(35, 30, 18, 0.08), 0 8px 24px rgba(35, 30, 18, 0.06)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "media-hero",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;
