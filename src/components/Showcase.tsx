"use client";

import Link from "next/link";
import { Reveal, SectionTitle } from "./ui";
import WorkCarousel from "./WorkCarousel";
import { FEATURED_PROJECTS } from "@/data/projects";

export default function Showcase() {
  return (
    <section id="work" className="overflow-hidden bg-bg py-20 sm:py-28">
      <div className="mx-auto mb-12 flex max-w-7xl flex-col gap-6 px-5 sm:mb-16 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-deep">
            Selected work
          </span>
          <div className="mt-5">
            <SectionTitle
              text="Products we've helped shape and scale."
              className="text-ink"
            />
          </div>
        </div>
        <Reveal delay={0.15}>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-dim">
            Swipe or drag to explore →
          </p>
        </Reveal>
      </div>

      <WorkCarousel projects={FEATURED_PROJECTS} />

      <Reveal delay={0.2}>
        <div className="mx-auto mt-8 max-w-7xl px-5 text-center sm:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-linel bg-white px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:border-accent hover:text-accent-deep"
          >
            View full portfolio
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
