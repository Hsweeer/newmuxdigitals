"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, SectionTitle } from "./ui";

const FEATURES = [
  "Human Focused",
  "Clarity Driven",
  "Built for Scale",
  "Precision Crafted",
];

function FeaturePill({
  title,
  index,
  align = "left",
}: {
  title: string;
  index: number;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
        delay: 0.07 * index,
      }}
      className={align === "right" ? "text-right" : "text-left"}
    >
      <span className="inline-block whitespace-nowrap rounded-lg border border-linel bg-white px-2.5 py-1.5 text-[11px] font-semibold tracking-tight text-ink shadow-[0_8px_24px_-8px_rgba(10,11,13,0.15)] sm:rounded-xl sm:px-4 sm:py-2 sm:text-[15px]">
        {title}
      </span>
    </motion.div>
  );
}

/** Crisp in-phone UI — no banner crop hacks */
function PhoneMockup() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start 0.9", "center 0.6"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <div ref={wrapRef} className="relative mx-auto w-[132px] sm:w-[200px]">
      <motion.div style={{ y, rotate, scale }} className="relative">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[26px] border-[5px] border-[#1a1b1e] bg-[#f4f6f8] shadow-[0_28px_60px_-22px_rgba(10,11,13,0.45)] sm:rounded-[36px] sm:border-[6px]">
          <div className="absolute left-1/2 top-2 z-20 h-3 w-10 -translate-x-1/2 rounded-full bg-[#1a1b1e] sm:h-3.5 sm:w-12" />

          <div className="flex h-full flex-col bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] p-2.5 pt-7 sm:p-3 sm:pt-8">
            <div className="mb-2">
              <p className="text-[7px] text-[#8b95a5] sm:text-[8px]">Good morning 👋</p>
              <p className="text-[9px] font-semibold text-[#0a0b0d] sm:text-[11px]">
                Fiona
              </p>
            </div>

            <div className="mb-2 rounded-xl bg-gradient-to-br from-[#3b8de0] to-[#1e5799] p-2 shadow-[0_6px_16px_-4px_rgba(59,141,224,0.55)] sm:p-2.5">
              <p className="text-[6px] font-medium text-white/85 sm:text-[7px]">
                Today&apos;s progress
              </p>
              <p className="mt-0.5 text-[11px] font-bold text-white sm:text-[13px]">
                1,482 <span className="text-[7px] font-medium text-white/75">kcal</span>
              </p>
              <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/25">
                <div className="h-full w-[72%] rounded-full bg-white" />
              </div>
            </div>

            <div className="mb-2 grid grid-cols-3 gap-1">
              {[
                { label: "Protein", val: "95g" },
                { label: "Carbs", val: "168g" },
                { label: "Fiber", val: "24g" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-[#e7e9ed] bg-white px-1 py-1 text-center sm:py-1.5"
                >
                  <p className="text-[6px] text-[#8b95a5] sm:text-[7px]">{s.label}</p>
                  <p className="text-[8px] font-semibold text-[#0a0b0d] sm:text-[9px]">
                    {s.val}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-2 flex-1 rounded-xl border border-[#e7e9ed] bg-white p-1.5 sm:p-2">
              <p className="mb-1 text-[6px] font-medium text-[#5f6673] sm:text-[7px]">
                Recent meals
              </p>
              <div className="space-y-1">
                {["Grilled chicken bowl", "Oatmeal & berries"].map((meal) => (
                  <div
                    key={meal}
                    className="flex items-center gap-1 rounded-md bg-[#f5f6f8] px-1 py-0.5 sm:px-1.5 sm:py-1"
                  >
                    <span className="h-3 w-3 shrink-0 rounded bg-[#d4e8fb] sm:h-3.5 sm:w-3.5" />
                    <span className="truncate text-[6px] text-[#0a0b0d] sm:text-[7px]">
                      {meal}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-around rounded-xl border border-[#e7e9ed] bg-white py-1.5 sm:py-2">
              {["⌂", "◷", "◎", "☺"].map((icon, i) => (
                <span
                  key={icon}
                  className={`text-[8px] sm:text-[9px] ${i === 0 ? "text-[#3b8de0]" : "text-[#9aa1ab]"}`}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/20 via-transparent to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-4 max-w-3xl text-center lg:mb-6">
          <SectionTitle
            text="Software people actually want to use."
            className="text-ink !text-3xl sm:!text-4xl lg:!text-5xl"
          />
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-muted sm:text-base">
            We design every screen around the person using it, not just the
            feature list.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-10">
          <div className="flex flex-col items-end gap-8 sm:gap-12">
            {FEATURES.slice(0, 2).map((title, i) => (
              <FeaturePill key={title} title={title} index={i} align="right" />
            ))}
          </div>

          <PhoneMockup />

          <div className="flex flex-col items-start gap-8 sm:gap-12">
            {FEATURES.slice(2).map((title, i) => (
              <FeaturePill key={title} title={title} index={i + 2} align="left" />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-linel to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE }}
      />
    </section>
  );
}
