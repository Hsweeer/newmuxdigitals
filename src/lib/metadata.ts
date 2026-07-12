import type { Metadata } from "next";

export const SITE_URL = "https://muxdigitals.com";
export const SITE_NAME = "MuxDigitals";

export const SITE = {
  name: SITE_NAME,
  url: SITE_URL,
  email: "support@muxdigitals.com",
  logo: `${SITE_URL}/logo-mark.png`,
  ogImage: `${SITE_URL}/intro-logo.png`,
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

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const normalized = sitePath(path);
  const url =
    normalized === "/" ? SITE_URL : `${SITE_URL}${normalized.replace(/\/$/, "")}/`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
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
      },
    },
  };
}
