export const CATEGORIES = [
  "All",
  "Mobile Apps",
  "Web",
  "Admin Panels",
  "Automation & CRM",
  "UI/UX",
] as const;

export type Category = (typeof CATEGORIES)[number];

/** URL slug ↔ category label for shareable portfolio tabs */
export const CATEGORY_SLUGS: Record<string, Category> = {
  all: "All",
  mobile: "Mobile Apps",
  "mobile-apps": "Mobile Apps",
  apps: "Mobile Apps",
  web: "Web",
  websites: "Web",
  admin: "Admin Panels",
  "admin-panels": "Admin Panels",
  automation: "Automation & CRM",
  crm: "Automation & CRM",
  "automation-crm": "Automation & CRM",
  uiux: "UI/UX",
  "ui-ux": "UI/UX",
  design: "UI/UX",
};

export function categoryToSlug(category: Category): string {
  switch (category) {
    case "All":
      return "all";
    case "Mobile Apps":
      return "mobile";
    case "Web":
      return "web";
    case "Admin Panels":
      return "admin";
    case "Automation & CRM":
      return "automation";
    case "UI/UX":
      return "uiux";
  }
}

export function slugToCategory(slug: string | null | undefined): Category {
  if (!slug) return "All";
  return CATEGORY_SLUGS[slug.toLowerCase().trim()] ?? "All";
}

export type Project = {
  id: string;
  name: string;
  kind: string;
  category: Exclude<Category, "All">;
  tags: string[];
  metric: string;
  image: string;
  href: string;
  featured?: boolean;
  /** Browser chrome for live-site screenshots */
  frame?: "browser" | "banner";
};

/**
 * Full live portfolio — URLs verified against portfolio/Full_Live_Portfolio.md
 * (last verified April 13, 2026). Unavailable listings omitted.
 */
export const PROJECTS: Project[] = [
  // —— Mobile Apps ——
  {
    id: "ambit",
    name: "Ambit",
    kind: "Sports Productivity & Team Coordination",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Performance tracking & team analytics",
    image: "/work/ambit.jpeg",
    href: "https://apps.apple.com/pk/app/ambit-oursports/id6523413424",
    featured: true,
    frame: "banner",
  },
  {
    id: "eurojobs-pro",
    name: "EuroJobs Pro",
    kind: "Recruiter Job Management",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Pan-European recruiter tooling",
    image: "/work/eurojobs-pro.png",
    href: "https://apps.apple.com/pk/app/eurojobs-pro/id6477157892",
    featured: true,
    frame: "banner",
  },
  {
    id: "eurojobs-search",
    name: "EuroJobs Search",
    kind: "Job Seeker Platform",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Profiles, matching & recommendations",
    image: "/work/eurojobs-search.png",
    href: "https://apps.apple.com/pk/app/eurojobs-search/id6477697476",
    featured: true,
    frame: "banner",
  },
  {
    id: "frenzone",
    name: "Frenzone Live",
    kind: "Social Live Streaming",
    category: "Mobile Apps",
    tags: ["Flutter", "Socket.io"],
    metric: "Real-time video & virtual gifting",
    image: "/work/frnezone.png",
    href: "https://apps.apple.com/in/app/frenzone-live/id6499107492",
    featured: true,
    frame: "banner",
  },
  {
    id: "hikespot",
    name: "HikeSpot",
    kind: "Travel & Meetup Companion",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Navigation, rides & trail meetups",
    image: "/work/hikespot.png",
    href: "https://play.google.com/store/apps/details?id=com.app.hikespot",
    frame: "banner",
  },
  {
    id: "kwasi",
    name: "Kwasi",
    kind: "AI Language Learning",
    category: "Mobile Apps",
    tags: ["Flutter", "AI"],
    metric: "Cameroonian languages, offline-ready",
    image: "/work/kwasi.png",
    href: "https://play.google.com/store/apps/details?id=com.app.kwasi",
    frame: "banner",
  },
  {
    id: "my-boutique",
    name: "My Boutique",
    kind: "Property Seller App",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Listings, media & document handling",
    image: "/work/my-boutique.png",
    href: "https://apps.apple.com/pk/app/boutique-das-casas/id6742420424",
    frame: "banner",
  },
  {
    id: "myaipal",
    name: "MyAiPal",
    kind: "AI Mental Wellness Companion",
    category: "Mobile Apps",
    tags: ["Flutter", "AI"],
    metric: "Chat, journal & mood tracking",
    image: "/work/myaipal.png",
    href: "https://apps.apple.com/us/app/myaipal/id6753610068",
    featured: true,
    frame: "banner",
  },
  {
    id: "myaudiocash",
    name: "MyAudioCash",
    kind: "African Music Streaming",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Stream, upload & artist monetization",
    image: "/work/myaudiocash.png",
    href: "https://apps.apple.com/us/app/myaudiocash/id6745150892",
    frame: "banner",
  },
  {
    id: "nomad-nurse",
    name: "Nomad Nurse",
    kind: "Healthcare Professional Platform",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Matching & scheduling for nurses",
    image: "/work/nomad-nurse.png",
    href: "https://apps.apple.com/gb/app/nomad-nurse-app/id6503719145",
    frame: "banner",
  },
  {
    id: "petty",
    name: "Petty",
    kind: "Pet Care Booking",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Grooming, sitting & dog walking",
    image: "/work/petty.png",
    href: "https://apps.apple.com/pk/app/petty/id6475017473",
    frame: "banner",
  },
  {
    id: "prosready",
    name: "ProsReady",
    kind: "Home Services Marketplace",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "$50K+ monthly transactions",
    image: "/work/prosready.png",
    href: "https://play.google.com/store/apps/details?id=com.shees1.services_provider",
    featured: true,
    frame: "banner",
  },
  {
    id: "soul-software",
    name: "Soul Software",
    kind: "Personal Development",
    category: "Mobile Apps",
    tags: ["Flutter"],
    metric: "Wellness & self-improvement",
    image: "/work/soul-software.png",
    href: "https://apps.apple.com/us/app/soul-software/id6467176071",
    frame: "banner",
  },
  {
    id: "sportlytics",
    name: "Sportlytics",
    kind: "Sports Content Creation",
    category: "Mobile Apps",
    tags: ["Flutter", "Strava"],
    metric: "Performance stickers for social",
    image: "/work/sportlytics.png",
    href: "https://play.google.com/store/apps/details?id=com.sportlytics.mobile",
    frame: "banner",
  },
  {
    id: "tamred",
    name: "Tamred",
    kind: "Travel Planning",
    category: "Mobile Apps",
    tags: ["Flutter", "Maps"],
    metric: "3D maps, itineraries & travel logs",
    image: "/work/tamred.png",
    href: "https://apps.apple.com/it/app/tamred/id6479984272",
    featured: true,
    frame: "banner",
  },
  {
    id: "the-challenge",
    name: "The Challenge",
    kind: "Fitness Challenges",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Workouts, goals & group challenges",
    image: "/work/the-challenge.png",
    href: "https://apps.apple.com/pk/app/the-challenge-stay-fit/id6479254800",
    featured: true,
    frame: "banner",
  },
  {
    id: "two-six",
    name: "Two Six",
    kind: "Retreat Companion",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Events, logistics & live updates",
    image: "/work/two-six.png",
    href: "https://apps.apple.com/us/app/two-six/id6745799942",
    frame: "banner",
  },
  {
    id: "voisbe",
    name: "VOISBE",
    kind: "Voice-First Social Platform",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Voice messaging & creator monetization",
    image: "/work/share-your-voice.png",
    href: "https://apps.apple.com/us/app/voisbe/id6702029635",
    featured: true,
    frame: "banner",
  },
  {
    id: "repairoo-app",
    name: "Repairoo",
    kind: "Service Bidding Marketplace",
    category: "Mobile Apps",
    tags: ["Flutter", "Firebase"],
    metric: "Dual-sided home services bidding",
    image: "/work/repairo-app.jpeg",
    href: "https://play.google.com/store/apps/details?id=com.repairoo.app",
    featured: true,
    frame: "banner",
  },

  // —— Web (professional banners / live screenshots only) ——
  {
    id: "bmessentia",
    name: "BMEssentia",
    kind: "Biomedical Education Platform",
    category: "Web",
    tags: ["React", "LMS"],
    metric: "Expert BME courses online",
    image: "/work/bmessentia.png",
    href: "https://bmessentia-web.netlify.app/",
    featured: true,
    frame: "browser",
  },
  {
    id: "cannacabana",
    name: "Cannacabana",
    kind: "Cannabis Retail E-commerce",
    category: "Web",
    tags: ["E-commerce", "Web"],
    metric: "Regulated retail storefront",
    image: "/work/cannacabana.png",
    href: "https://cannacabana.com/",
    featured: true,
    frame: "browser",
  },
  {
    id: "repairoo-web",
    name: "Repairoo",
    kind: "Service Marketplace Website",
    category: "Web",
    tags: ["Web", "Marketplace"],
    metric: "Reverse-bid home repairs",
    image: "/work/repairo-web.png",
    href: "https://repairoo.ae/",
    featured: true,
    frame: "browser",
  },

  // —— Admin Panels ——
  {
    id: "repairoo-admin",
    name: "Repairoo Ops",
    kind: "Marketplace Operations",
    category: "Admin Panels",
    tags: ["React", "Analytics"],
    metric: "Real-time job dispatch",
    image: "/work/repairo-app.jpeg",
    href: "https://repairoo.ae/",
    frame: "banner",
  },

  // —— Automation & CRM (client stacks on focused professional tools) ——
  {
    id: "fillout",
    name: "Client Form Automation",
    kind: "Workflows built on Fillout",
    category: "Automation & CRM",
    tags: ["Forms", "Integrations"],
    metric: "Smart forms that sync everywhere",
    image: "/work/fillout-automation.jpg",
    href: "https://www.fillout.com/",
    featured: true,
    frame: "browser",
  },
  {
    id: "tally",
    name: "Lead Capture Automation",
    kind: "Lead pipelines built on Tally",
    category: "Automation & CRM",
    tags: ["Webhooks", "Zapier"],
    metric: "Forms connected to your stack",
    image: "/work/tally-forms.jpg",
    href: "https://tally.so/",
    featured: true,
    frame: "browser",
  },
  {
    id: "cronitor",
    name: "Uptime Alert Automation",
    kind: "Ops monitoring on Cronitor",
    category: "Automation & CRM",
    tags: ["Cron jobs", "Alerts"],
    metric: "Automated uptime workflows",
    image: "/work/cronitor-automation.jpg",
    href: "https://cronitor.io/",
    featured: true,
    frame: "browser",
  },
  {
    id: "papermark",
    name: "Secure Doc Rooms",
    kind: "Document sharing on Papermark",
    category: "Automation & CRM",
    tags: ["Analytics", "Sales ops"],
    metric: "Tracked decks & data rooms",
    image: "/work/papermark-web.jpg",
    href: "https://www.papermark.io/",
    featured: true,
    frame: "browser",
  },
  {
    id: "baserow",
    name: "Ops Database Automation",
    kind: "Internal data ops on Baserow",
    category: "Automation & CRM",
    tags: ["No-code DB", "API"],
    metric: "Airtable-style ops without lock-in",
    image: "/work/baserow-automation.png",
    href: "https://baserow.io/",
    featured: true,
    frame: "browser",
  },
  {
    id: "appsmith",
    name: "Internal Tools Suite",
    kind: "Admin apps built on Appsmith",
    category: "Automation & CRM",
    tags: ["Low-code", "Dashboards"],
    metric: "Custom internal tools, fast",
    image: "/work/appsmith-automation.png",
    href: "https://www.appsmith.com/",
    featured: true,
    frame: "browser",
  },
  {
    id: "calcom",
    name: "Booking Automation",
    kind: "Scheduling workflows on Cal.com",
    category: "Automation & CRM",
    tags: ["Scheduling", "CRM sync"],
    metric: "Self-serve bookings that sync",
    image: "/work/calcom-automation.png",
    href: "https://cal.com/",
    frame: "browser",
  },
  {
    id: "attio",
    name: "Relationship CRM",
    kind: "CRM workflows on Attio",
    category: "Automation & CRM",
    tags: ["CRM", "Pipelines"],
    metric: "Modern CRM for growing teams",
    image: "/work/attio-automation.png",
    href: "https://attio.com/",
    frame: "browser",
  },

  // —— UI/UX ——
  {
    id: "eurojobs-ui",
    name: "EuroJobs Pro",
    kind: "Mobile UI System",
    category: "UI/UX",
    tags: ["Figma", "Design System"],
    metric: "End-to-end product design",
    image: "/work/eurojobs-pro.png",
    href: "https://apps.apple.com/pk/app/eurojobs-pro/id6477157892",
    frame: "banner",
  },
];

/** Home carousel — live apps + webs with verified links */
export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
