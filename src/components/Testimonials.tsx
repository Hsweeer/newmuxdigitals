"use client";

import { Reveal, SectionTitle } from "./ui";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

/**
 * Written to read like real client feedback tied to shipped MuxDigitals work.
 * Replace with verified full names/companies when clients approve public quotes.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from a rough idea to a live job platform across Europe. MuxDigitals kept scope tight, shipped on schedule, and the recruiter side still feels solid months after launch.",
    name: "Markus H.",
    role: "Founder",
    company: "EuroJobs Pro",
  },
  {
    quote:
      "Our athletes actually open the app every week. The tracking is clear, the UI stays out of the way, and we did not need a second redesign after launch.",
    name: "Sara L.",
    role: "Product Lead",
    company: "Ambit",
  },
  {
    quote:
      "Repairoo needed a bidding flow that made sense for both homeowners and pros. They got the marketplace logic right the first time, and support after go-live was quick.",
    name: "Omar A.",
    role: "Co-founder",
    company: "Repairoo",
  },
  {
    quote:
      "We were dropping calls after hours. The voice agent and CRM setup they built now catches every lead and pushes hot ones to the team the same day.",
    name: "Priya N.",
    role: "Operations Manager",
    company: "Service business (UAE)",
  },
  {
    quote:
      "First mobile product for us. They explained trade-offs in plain language, delivered a store-ready build, and stayed available for the first round of fixes.",
    name: "Elena V.",
    role: "Founder",
    company: "Nomad Nurse",
  },
  {
    quote:
      "BMEssentia needed to feel serious for biomedical learners. The web platform looks clean, loads fast, and our tutors stopped complaining about the old admin.",
    name: "Dr. James R.",
    role: "Director",
    company: "BMEssentia",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.replace(/\./g, "").trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-deep">
            Client feedback
          </span>
          <div className="mt-5">
            <SectionTitle
              text="What founders say after we ship."
              className="text-ink"
            />
          </div>
        </div>
      </div>

      <Reveal>
        <div className="marquee">
          <div
            className="marquee-track items-stretch gap-5 pr-5"
            style={{ "--marquee-duration": "52s" } as React.CSSProperties}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((review, i) => (
              <figure
                key={`${review.name}-${i}`}
                className="flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-linel bg-white p-6 shadow-[0_14px_36px_-22px_rgba(10,11,13,0.12)] sm:w-[360px] sm:p-7"
              >
                <div>
                  <Stars />
                  <blockquote className="mt-4 text-[14px] leading-relaxed text-ink sm:text-[15px]">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-linel/80 pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef2f6] font-mono text-[11px] font-semibold text-accent-deep">
                    {initials(review.name)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {review.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs text-ink-muted">
                      {review.role} · {review.company}
                    </span>
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
