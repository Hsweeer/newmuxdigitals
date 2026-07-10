"use client";

import { Reveal, SectionTitle } from "./ui";

export type Testimonial = {
  quote: string;
  /** Role + project description, or "[Name], [Company]" once confirmed */
  attribution: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "MuxDigitals took our job matching platform from idea to launch across multiple European markets. The team understood what we needed without us having to over-explain it, and the product just worked from day one.",
    attribution: "Founder, Job Matching Platform (Europe)",
  },
  {
    quote:
      "We needed an app people would actually open every day, not just download once. MuxDigitals nailed that. The design is clean, the tracking is simple, and our users noticed the difference immediately.",
    attribution: "Product Lead, Nutrition Tracking App",
  },
  {
    quote:
      "MuxDigitals built exactly what our team needed to stay on track together. Fast delivery, clean execution, and they were still around after launch when we needed small changes.",
    attribution: "Founder, Team Fitness App",
  },
  {
    quote:
      "Before MuxDigitals, we were losing leads because nobody could answer the phone fast enough. Now every call gets picked up, every lead gets qualified, and our pipeline runs itself. It's the best change we've made to how we operate.",
    attribution: "Operations Lead, Automation Client",
  },
  {
    quote:
      "Our old site looked outdated and wasn't bringing in leads. MuxDigitals rebuilt it fast, and it actually converts now. Visitors turn into inquiries instead of just browsing and leaving.",
    attribution: "Founder, Website Rebuild Client",
  },
  {
    quote:
      "This was our first time building an app, and we had no idea what to expect. MuxDigitals walked us through every step and shipped something our customers actually use daily. Couldn't have asked for a smoother first launch.",
    attribution: "First-time Founder, Mobile App Client",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function initials(attribution: string) {
  const parts = attribution.split(",")[0]?.trim().split(/\s+/).filter(Boolean) ?? [];
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-deep">
            Testimonials
          </span>
          <div className="mt-5">
            <SectionTitle text="Feedback from our partners." className="text-ink" />
          </div>
        </div>
      </div>

      <Reveal>
        <div className="marquee">
          <div
            className="marquee-track items-stretch gap-5 pr-5"
            style={{ "--marquee-duration": "48s" } as React.CSSProperties}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((review, i) => (
              <figure
                key={i}
                className="flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-linel bg-white p-7 shadow-[0_14px_36px_-22px_rgba(10,11,13,0.12)] sm:w-[380px]"
              >
                <div>
                  <Stars />
                  <blockquote className="mt-5 text-[15px] leading-relaxed text-ink">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent-deep to-accent font-mono text-xs text-white">
                    {initials(review.attribution)}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    {review.attribution}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
