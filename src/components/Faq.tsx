"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, Reveal, SectionTitle } from "./ui";

const FAQS = [
  {
    q: "What kinds of projects do you usually take on?",
    a: "We build marketing websites, SaaS platforms, dashboards, and mobile apps for startups and established teams. Most engagements combine strategy, design, and engineering under one roof.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. Our team covers the full journey: research, UX, UI, and front-to-back engineering, so nothing gets lost in a handoff between separate vendors.",
  },
  {
    q: "How long does a typical project take?",
    a: "A marketing site usually ships in 2–4 weeks. Full product builds range from 6–12 weeks depending on scope. We share a concrete timeline after a short discovery call.",
  },
  {
    q: "Can we request revisions during the process?",
    a: "Absolutely. We work in short cycles with regular check-ins, so feedback lands early and revisions are part of the rhythm rather than an afterthought.",
  },
  {
    q: "Will the site be easy to manage after launch?",
    a: "Yes. We build on maintainable stacks, document everything, and can hook up a CMS so your team can update content without touching code.",
  },
  {
    q: "Do you offer ongoing support after delivery?",
    a: "We offer flexible support and growth retainers covering monitoring, improvements, new features, and performance tuning, so your product keeps getting better.",
  },
];

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-linel bg-white shadow-[0_10px_30px_-20px_rgba(10,11,13,0.1)] transition-colors duration-300 hover:border-accent/40">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
      >
        <span className="text-base font-medium text-ink sm:text-lg">{q}</span>
        <motion.span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linel text-lg text-accent-deep"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="px-7 pb-7 text-sm leading-relaxed text-ink-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-14 text-center">
          <SectionTitle
            text="Frequently asked questions."
            className="!text-4xl sm:!text-5xl text-ink"
          />
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05} y={24}>
              <FaqItem
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
