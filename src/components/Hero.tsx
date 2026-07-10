"use client";

import { motion } from "framer-motion";
import Halftone from "./Halftone";
import { EASE } from "./ui";

const LINE_1 = ["We", "Build", "It.", "We", "Automate", "It."];
const LINE_2 = ["It", "Never", "Stops."];

const TECH_STACK = [
  { name: "Flutter", logo: "/tech/flutter.svg", height: 22 },
  { name: "React Native", logo: "/tech/react-native.svg", height: 24 },
  { name: "Firebase", logo: "/tech/firebase.svg", height: 24 },
  { name: "Node.js", logo: "/tech/nodejs.svg", height: 26 },
  { name: "n8n", logo: "/tech/n8n.svg", height: 22 },
  { name: "AI Automation", logo: "/tech/ai-automation.svg", height: 22 },
  { name: "Supabase", logo: "/tech/supabase.svg", height: 24 },
];

function Word({
  children,
  index,
}: {
  children: string;
  index: number;
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.16em] -mb-[0.16em] align-top">
      <motion.span
        className="inline-block"
        variants={{
          hidden: { y: "115%" },
          show: {
            y: 0,
            transition: { duration: 0.9, ease: EASE, delay: 0.3 + index * 0.05 },
          },
        }}
      >
        {children}
      </motion.span>
      {"\u00A0"}
    </span>
  );
}

export default function Hero({ start }: { start: boolean }) {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden bg-dark text-fg"
    >
      <Halftone />
      <div
        className="orb h-[560px] w-[560px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,141,224,0.22) 0%, rgba(30,87,153,0.1) 45%, transparent 70%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pt-32 pb-12 text-center"
        initial="hidden"
        animate={start ? "show" : "hidden"}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: EASE, delay: 0.15 },
            },
          }}
          className="mb-7 font-mono text-[11px] uppercase tracking-[0.28em] text-muted"
        >
          Software Development · Business Automation
        </motion.p>

        <h1 className="text-balance text-[36px] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block">
            {LINE_1.map((word, i) => (
              <Word key={i} index={i}>
                {word}
              </Word>
            ))}
          </span>
          <span className="block">
            {LINE_2.map((word, i) => (
              <Word key={i} index={LINE_1.length + i}>
                {word}
              </Word>
            ))}
          </span>
        </h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: EASE, delay: 0.9 },
            },
          }}
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          One senior team building the software you need and the automation that
          runs it, without adding headcount.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: EASE, delay: 1.05 },
            },
          }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-accent-bright"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-fg backdrop-blur transition-all duration-300 hover:scale-[1.03] hover:bg-white/10"
          >
            Learn More
          </a>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: EASE, delay: 1.2 },
            },
          }}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-dim"
        >
          Trusted by founders and business owners worldwide.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 pb-10"
        initial={{ opacity: 0 }}
        animate={start ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="marquee">
          <div
            className="marquee-track items-center"
            style={{ "--marquee-duration": "38s" } as React.CSSProperties}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech.name}-${i}`}
                className="group mx-8 flex shrink-0 items-center gap-3 whitespace-nowrap sm:mx-11"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.logo}
                  alt={`${tech.name} technology logo`}
                  className="w-auto opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                  style={{ height: tech.height }}
                />
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition-all duration-300 group-hover:text-white sm:text-[15px]">
                  {tech.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
