import { BRAND_ALTERNATES, SITE, sitePath } from "./metadata";
import { FAQS } from "@/data/faqs";

function logoImageObject() {
  return {
    "@type": "ImageObject",
    url: SITE.logo,
    width: 512,
    height: 512,
    caption: `${SITE.name} logo`,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [...BRAND_ALTERNATES],
    url: SITE.url,
    logo: logoImageObject(),
    image: SITE.ogImage,
    description: SITE.description,
    email: SITE.email,
    foundingDate: "2016",
    sameAs: SITE.sameAs,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE.email,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    alternateName: [...BRAND_ALTERNATES],
    url: SITE.url,
    logo: logoImageObject(),
    email: SITE.email,
    image: SITE.ogImage,
    description: SITE.description,
    sameAs: SITE.sameAs,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: "Worldwide",
    parentOrganization: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    alternateName: [...BRAND_ALTERNATES],
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en",
    publisher: {
      "@id": `${SITE.url}/#organization`,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const path = sitePath(item.path);
      const itemUrl =
        path === "/" ? SITE.url : `${SITE.url}${path.replace(/\/$/, "")}/`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
