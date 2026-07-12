"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, Reveal } from "./ui";
import { FAQS } from "@/data/faqs";

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
        aria-expanded={open}
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
      {/* Keep answers in the DOM for crawlers even when visually collapsed */}
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="open"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <p className="px-7 pb-7 text-sm leading-relaxed text-ink-muted sm:text-base">
              {a}
            </p>
          </motion.div>
        ) : (
          <p className="sr-only">{a}</p>
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
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Frequently asked questions.
          </h1>
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
