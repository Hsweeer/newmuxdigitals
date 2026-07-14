"use client";

import { motion } from "framer-motion";
import { CountUp, EASE, Reveal } from "./ui";

const MILESTONES = [
  { year: "2016", label: "Founded" },
  { year: "2019", label: "Full studio" },
  { year: "2022", label: "Global clients" },
  { year: "Today", label: "Automation" },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-dark pb-10 pt-28 text-fg sm:pb-12 sm:pt-36">
      <div
        className="orb h-[420px] w-[420px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,141,224,0.18) 0%, rgba(30,87,153,0.06) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              About us
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              A decade of software that{" "}
              <span className="font-serif italic">leads markets.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted sm:text-[15px]">
              MuxDigitals is a senior-led product engineering studio from
              Multan — web, mobile, and automation for startups worldwide since
              2016.
            </p>
          </Reveal>
        </div>

        {/* Stats — slim bar */}
        <Reveal delay={0.18}>
          <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card/60 py-4 sm:mt-10 sm:py-5">
            {[
              { to: 10, suffix: "+", label: "Years" },
              { to: 120, suffix: "+", label: "Shipped" },
              { to: 98, suffix: "%", label: "Retention" },
            ].map((stat) => (
              <div key={stat.label} className="px-2 text-center">
                <div className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                  <CountUp to={stat.to} suffix={stat.suffix} />
                </div>
                <div className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-muted sm:text-[9px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Timeline — short labels, one row on all screens */}
        <motion.div
          className="mx-auto mt-6 flex max-w-xl items-center justify-between gap-1 sm:mt-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          transition={{ staggerChildren: 0.06 }}
        >
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
              className="relative flex flex-1 flex-col items-center"
            >
              {i > 0 && (
                <span className="absolute -left-1/2 top-[9px] hidden h-px w-full bg-line sm:block" />
              )}
              <span className="relative z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/50 bg-card">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="mt-2 font-mono text-[9px] tracking-wider text-accent sm:text-[10px]">
                {m.year}
              </span>
              <span className="mt-0.5 text-center text-[10px] font-medium leading-tight text-fg sm:text-[11px]">
                {m.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
