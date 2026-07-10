"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, EASE, Reveal, SectionTitle } from "./ui";

const STEPS = ["Discover", "Design", "Build", "Scale"];

const STACK = [
  {
    label: "AI Voice",
    title: "AI Voice Agents",
    body: "Every call answered, every lead qualified, every booking made. Around the clock, without adding headcount.",
    tags: ["Call handling", "Qualification", "Booking"],
  },
  {
    label: "Workflow Automation",
    title: "Workflow Automation (n8n)",
    body: "Custom automations that connect your tools and remove repetitive work. Leads, invoices, and reports, handled end to end.",
    tags: ["Integrations", "Data sync", "Alerts"],
  },
  {
    label: "CRM",
    title: "GoHighLevel CRM",
    body: "Full pipeline setup with automatic follow-up, so no lead ever goes cold.",
    tags: ["Pipelines", "Follow-ups", "Reporting"],
  },
];

const TRUST = [
  "Senior team only",
  "Weekly live demos",
  "Fixed scope & pricing",
  "Full code ownership",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-3.5 w-3.5 shrink-0"
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProcessStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-3xl">
      <div className="absolute left-[12%] right-[12%] top-[18px] h-px bg-linel sm:top-[22px]">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-accent via-accent/60 to-accent/20"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
        />
      </div>

      <div className="relative grid grid-cols-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.25 + i * 0.12 }}
            className="flex flex-col items-center gap-2.5"
          >
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper bg-accent text-xs font-semibold text-white shadow-[0_4px_14px_-2px_rgba(59,141,224,0.55)] sm:h-11 sm:w-11 sm:text-sm"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 18,
                delay: 0.3 + i * 0.12,
              }}
            >
              {i + 1}
            </motion.span>
            <span className="text-xs font-medium text-ink sm:text-[15px]">
              {step}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto mb-4 max-w-3xl text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent-deep">
            Automation
          </span>
          <div className="mt-4">
            <SectionTitle
              text="The Part of Your Business That Never Clocks Out"
              className="text-ink !text-3xl sm:!text-4xl lg:!text-5xl"
            />
          </div>
        </div>
        <Reveal>
          <p className="mx-auto mb-10 max-w-xl text-center text-pretty text-[15px] leading-relaxed text-ink-muted sm:mb-12">
            Most companies lose customers before a human ever answers the phone.
            We build the systems that answer, qualify, and follow up
            automatically, so nothing slips through, ever.
          </p>
        </Reveal>

        <motion.div
          className="grid gap-4 sm:grid-cols-3 sm:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          {STACK.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              className="group relative overflow-hidden rounded-3xl border border-linel bg-white p-6 shadow-[0_16px_40px_-24px_rgba(10,11,13,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-24px_rgba(59,141,224,0.3)] sm:p-7"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-deep">
                {item.label}
              </span>
              <h3 className="mt-2.5 text-lg font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-linel bg-paper px-2.5 py-1 text-[11px] font-medium text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-pretty text-sm leading-relaxed text-ink-muted sm:text-base">
            A great product earns trust. Automation earns time back. That&apos;s
            the difference between a business that grows and one that just stays
            busy.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 text-center">
            <Link
              href="/automation"
              className="inline-flex items-center gap-2 rounded-full border border-linel bg-white px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-accent hover:text-accent-deep"
            >
              See What We Automate
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 sm:mt-14">
          <ProcessStrip />
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-linel bg-white px-6 py-7 shadow-[0_16px_40px_-24px_rgba(10,11,13,0.12)] sm:mt-14 sm:flex-row sm:justify-between sm:gap-8 sm:px-9">
            <div className="flex items-center gap-8 sm:gap-10">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-semibold tracking-tight text-accent-deep sm:text-4xl">
                  <CountUp to={120} suffix="+" />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  Products shipped
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-semibold tracking-tight text-accent-deep sm:text-4xl">
                  <CountUp to={98} suffix="%" />
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  Client retention
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {TRUST.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-deep">
                    <CheckIcon />
                  </span>
                  <span className="whitespace-nowrap text-[13px] font-medium text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
