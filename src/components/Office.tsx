"use client";

import { Reveal } from "./ui";

const ADDRESS = "203-B, Shah Rukn-e-Alam Colony, Multan, Punjab, Pakistan";
const MAP_QUERY = encodeURIComponent("Shah Rukn-e-Alam Colony, Multan, Punjab, Pakistan");
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export default function Office() {
  return (
    <section className="bg-bg pb-12 pt-4 sm:pb-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-linel bg-white shadow-[0_16px_40px_-24px_rgba(10,11,13,0.14)] lg:grid lg:grid-cols-[minmax(0,340px)_1fr]">
          {/* Contact details */}
          <div className="flex flex-col justify-center gap-5 p-6 sm:p-7">
            <Reveal>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-deep">
                Location
              </span>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Multan,{" "}
                <span className="font-serif italic">Pakistan.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                    <path d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-medium leading-relaxed text-ink">
                    {ADDRESS}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-dim">
                    Registered office
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap gap-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-deep"
                >
                  Get directions
                  <span>↗</span>
                </a>
                <a
                  href="mailto:support@muxdigitals.com"
                  className="inline-flex items-center gap-2 rounded-full border border-linel px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-accent/40 hover:text-ink"
                >
                  support@muxdigitals.com
                </a>
              </div>
            </Reveal>
          </div>

          {/* Map embed */}
          <div className="relative min-h-[220px] border-t border-linel lg:min-h-[260px] lg:border-l lg:border-t-0">
            <iframe
              title="MuxDigitals office — Multan, Pakistan"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`}
              className="absolute inset-0 h-full w-full border-0 grayscale-[30%] contrast-[1.05] transition-[filter] duration-500 hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
