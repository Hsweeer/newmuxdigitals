"use client";

import { motion } from "framer-motion";
import { CountUp, EASE, Reveal, SectionTitle } from "./ui";

function ScoreRing({
  score,
  label,
  delay,
}: {
  score: number;
  label: string;
  delay: number;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-[74px] w-[74px]">
        <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="var(--color-linel)"
            strokeWidth="5"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="34"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: score / 100 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.6, delay, ease: EASE }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-ink">
          <CountUp to={score} duration={1.6} />
        </span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-dim">
        {label}
      </span>
    </div>
  );
}

const FEATURES = [
  {
    title: "Fast Delivery",
    body: "A senior team and a focused process mean production-quality work in weeks, not quarters.",
    content: (
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-5xl font-semibold tracking-tight text-accent-deep">
          <CountUp to={14} />
        </span>
        <span className="text-sm text-ink-muted">days to first release, on average</span>
      </div>
    ),
  },
  {
    title: "Performance Obsessed",
    body: "Clean structure and real optimization. Your product performs well from day one, not after a rebuild.",
    content: (
      <div className="mt-6 flex justify-between gap-2">
        <ScoreRing score={98} label="Performance" delay={0} />
        <ScoreRing score={100} label="SEO" delay={0.15} />
        <ScoreRing score={96} label="Accessibility" delay={0.3} />
      </div>
    ),
  },
  {
    title: "Next Gen with AI",
    body: "We pair proven engineering with AI-assisted workflows to build faster without cutting corners.",
    content: (
      <div className="mt-6 flex flex-wrap gap-2">
        {["Next.js", "React", "TypeScript", "AI Tooling", "Cloud Native"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-linel bg-paper px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    title: "Ongoing Support",
    body: "Launch is the start, not the finish. We stay involved as your product and your business grow.",
    content: (
      <div className="mt-6 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm text-ink-muted">Dedicated support, always on</span>
      </div>
    ),
  },
];

export default function Outcomes() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionTitle
            text="We measure success the way you do."
            className="text-ink"
          />
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted">
              Not by how a product looks in a screenshot. By what it does for
              your business after launch.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="rounded-2xl border border-linel bg-white p-8 shadow-[0_14px_36px_-20px_rgba(10,11,13,0.1)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-22px_rgba(30,87,153,0.22)]"
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {feature.body}
              </p>
              {feature.content}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
