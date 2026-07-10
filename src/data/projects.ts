export const CATEGORIES = [
  "All",
  "Mobile Apps",
  "Web",
  "Admin Panels",
  "Automation & CRM",
  "UI/UX",
] as const;

export type Category = (typeof CATEGORIES)[number];

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

export const PROJECTS: Project[] = [
  // —— Mobile Apps ——
  {
    id: "eurojobs-pro",
    name: "Eurojobs Pro",
    kind: "Job Search & CV Platform",
    category: "Mobile Apps",
    tags: ["Flutter", "Product Design"],
    metric: "Pan-European job matching",
    image: "/portfolio/eurojobs-pro.png",
    href: "https://apps.apple.com/us/app/eurojobs-pro/id6477157892",
    featured: true,
    frame: "banner",
  },
  {
    id: "myfoodbuddy",
    name: "MyFoodBuddy",
    kind: "AI Nutrition Tracker",
    category: "Mobile Apps",
    tags: ["Voice AI", "Swift"],
    metric: "Voice-powered meal logging",
    image: "/portfolio/myfoodbuddy.png",
    href: "https://foodbuddy.my/",
    featured: true,
    frame: "banner",
  },
  {
    id: "the-challenge",
    name: "The Challenge",
    kind: "Team Fitness App",
    category: "Mobile Apps",
    tags: ["React Native", "Social"],
    metric: "Group challenges & progress",
    image: "/portfolio/the-challenge.png",
    href: "#contact",
    frame: "banner",
  },
  {
    id: "frnezone",
    name: "Frnezone",
    kind: "Creator Social Network",
    category: "Mobile Apps",
    tags: ["Flutter", "Feed Design"],
    metric: "Connect, share & inspire",
    image: "/portfolio/frnezone.png",
    href: "https://www.frenzone.live/",
    featured: true,
    frame: "banner",
  },
  {
    id: "voisbe",
    name: "Voisbe",
    kind: "Voice & Audio Social",
    category: "Mobile Apps",
    tags: ["Audio", "UX Design"],
    metric: "Real-time voice conversations",
    image: "/portfolio/share-your-voice.png",
    href: "https://apps.apple.com/us/app/voisbe/id6702029635",
    frame: "banner",
  },
  {
    id: "repairoo-app",
    name: "Repairoo",
    kind: "Home Services Marketplace",
    category: "Mobile Apps",
    tags: ["React Native", "Marketplace"],
    metric: "Offers in under 1 minute",
    image: "/portfolio/repairo-app.jpeg",
    href: "https://repairoo.ae/",
    featured: true,
    frame: "banner",
  },
  {
    id: "ambit",
    name: "Ambit",
    kind: "Team Sports Community",
    category: "Mobile Apps",
    tags: ["Flutter", "Social"],
    metric: "Live court booking & matching",
    image: "/portfolio/ambit.jpeg",
    href: "https://www.ambit-oursports.com/en/app-landing-page-1",
    frame: "banner",
  },
  {
    id: "pocket-muslim",
    name: "My Pocket Muslim",
    kind: "Islamic Lifestyle App",
    category: "Mobile Apps",
    tags: ["Flutter", "UX Design"],
    metric: "Prayer, Quran & Qibla in one app",
    image: "/portfolio/pocket-muslim.png",
    href: "https://mypocketmuslim.co.uk/",
    frame: "banner",
  },
  {
    id: "tamred",
    name: "Tamred",
    kind: "Travel & Adventure Social",
    category: "Mobile Apps",
    tags: ["React Native", "Maps"],
    metric: "Plan & share journeys globally",
    image: "/portfolio/tamred.png",
    href: "https://www.spacemantis.eu/",
    frame: "banner",
  },

  // —— Web ——
  {
    id: "bmessentia",
    name: "BMEssentia",
    kind: "Biomedical Education Platform",
    category: "Web",
    tags: ["Next.js", "LMS"],
    metric: "22+ expert BME courses",
    image: "/portfolio/bmessentia.png",
    href: "https://bmessentia.com/",
    featured: true,
    frame: "banner",
  },
  {
    id: "repairoo-web",
    name: "Repairoo",
    kind: "Service Marketplace Website",
    category: "Web",
    tags: ["Next.js", "SEO"],
    metric: "Reverse-bid home repairs",
    image: "/portfolio/repairo-web.png",
    href: "https://repairoo.ae/",
    featured: true,
    frame: "banner",
  },
  {
    id: "papermark",
    name: "Papermark",
    kind: "Document Sharing SaaS",
    category: "Web",
    tags: ["Next.js", "Analytics"],
    metric: "Secure doc rooms & tracking",
    image: "/portfolio/papermark-web.jpg",
    href: "https://papermark.io/",
    featured: true,
    frame: "browser",
  },
  {
    id: "spacemantis",
    name: "Space Mantis",
    kind: "Venture Studio Website",
    category: "Web",
    tags: ["React", "Branding"],
    metric: "Startup launchpad platform",
    image: "/portfolio/spacemantis-web.jpg",
    href: "https://www.spacemantis.eu/",
    featured: true,
    frame: "browser",
  },

  // —— Automation & CRM ——
  {
    id: "fillout",
    name: "Client Form Automation",
    kind: "Automation workflow built on Fillout",
    category: "Automation & CRM",
    tags: ["Integrations", "No-code"],
    metric: "Smart forms that sync everywhere",
    image: "/portfolio/fillout-automation.jpg",
    href: "https://fillout.com/",
    featured: true,
    frame: "browser",
  },
  {
    id: "tally",
    name: "Lead Capture Automation",
    kind: "Automation workflow built on Tally for client lead capture",
    category: "Automation & CRM",
    tags: ["Webhooks", "Zapier"],
    metric: "Forms connected to your stack",
    image: "/portfolio/tally-forms.jpg",
    href: "https://tally.so/",
    featured: true,
    frame: "browser",
  },
  {
    id: "cronitor",
    name: "Uptime Alert Automation",
    kind: "Monitoring workflow built on Cronitor for client ops",
    category: "Automation & CRM",
    tags: ["Cron jobs", "Slack"],
    metric: "Automated uptime workflows",
    image: "/portfolio/cronitor-automation.jpg",
    href: "https://cronitor.io/",
    featured: true,
    frame: "browser",
  },

  // —— Admin Panels ——
  {
    id: "repairoo-admin",
    name: "Repairoo Ops",
    kind: "Operations Dashboard",
    category: "Admin Panels",
    tags: ["React", "Analytics"],
    metric: "Real-time job dispatch",
    image: "/portfolio/repairo-app.jpeg",
    href: "https://repairoo.ae/",
    frame: "banner",
  },

  // —— UI/UX ——
  {
    id: "eurojobs-ui",
    name: "Eurojobs Pro",
    kind: "Mobile UI System",
    category: "UI/UX",
    tags: ["Figma", "Design System"],
    metric: "End-to-end product design",
    image: "/portfolio/eurojobs-pro.png",
    href: "https://apps.apple.com/us/app/eurojobs-pro/id6477157892",
    frame: "banner",
  },
];

/** Home carousel — balanced mix across categories */
export const FEATURED_PROJECTS = [
  PROJECTS.find((p) => p.id === "eurojobs-pro")!,
  PROJECTS.find((p) => p.id === "myfoodbuddy")!,
  PROJECTS.find((p) => p.id === "frnezone")!,
  PROJECTS.find((p) => p.id === "repairoo-app")!,
  PROJECTS.find((p) => p.id === "bmessentia")!,
  PROJECTS.find((p) => p.id === "repairoo-web")!,
  PROJECTS.find((p) => p.id === "papermark")!,
  PROJECTS.find((p) => p.id === "spacemantis")!,
  PROJECTS.find((p) => p.id === "fillout")!,
  PROJECTS.find((p) => p.id === "tally")!,
  PROJECTS.find((p) => p.id === "cronitor")!,
];
