import type { Metadata } from "next";

export const SITE_URL = "https://muxdigitals.com";
export const SITE_NAME = "MuxDigitals";

/** Brand spellings Google/Bing should associate with the company. */
export const BRAND_ALTERNATES = [
  "Mux Digitals",
  "Mux Digital",
  "MuxDigital",
  "muxdigitals",
  "muxdigitals.com",
] as const;

export const SITE = {
  name: SITE_NAME,
  url: SITE_URL,
  email: "support@muxdigitals.com",
  /** Square logo for Organization schema (min 112×112). */
  logo: `${SITE_URL}/logo-512.png`,
  ogImage: `${SITE_URL}/intro-logo.png`,
  favicon: `${SITE_URL}/favicon.ico`,
  description:
    "MuxDigitals (Mux Digital) builds production-ready web apps, mobile apps, and business automation for founders and growing businesses worldwide.",
  keywords: [
    "MuxDigitals",
    "Mux Digital",
    "MuxDigitals software",
    "MuxDigital",
    "muxdigitals",
    "software development company",
    "business automation agency",
    "mobile app development",
    "web app development",
  ],
  address: {
    street: "203-B, Shah Rukn-e-Alam Colony",
    city: "Multan",
    region: "Punjab",
    postalCode: "",
    country: "PK",
  },
  sameAs: [
    "https://x.com/muxdigitals",
    "https://instagram.com/muxdigitals",
    "https://www.linkedin.com/company/mux-digitals",
    "https://youtube.com/@muxdigitals",
  ],
} as const;

/** Normalize path to trailing-slash form used by the static export. */
export function sitePath(path = ""): string {
  if (!path || path === "/") return "/";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export const siteIcons: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
  ],
  apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  shortcut: "/favicon.ico",
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const normalized = sitePath(path);
  const url =
    normalized === "/" ? SITE_URL : `${SITE_URL}${normalized.replace(/\/$/, "")}/`;

  const mergedKeywords = keywords ?? [...SITE.keywords];

  const verification: Metadata["verification"] = {};
  if (process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  }

  return {
    title,
    description,
    applicationName: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    keywords: mergedKeywords,
    icons: siteIcons,
    manifest: "/site.webmanifest",
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: SITE.ogImage,
          width: 2000,
          height: 2000,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}
