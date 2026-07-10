"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Viewport-triggered fade + rise reveal. */
export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Small mono uppercase section label. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/** Big section heading with word-by-word rise animation. */
export function SectionTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <motion.h2
      className={`text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.045 }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: { duration: 0.8, ease: EASE },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </motion.h2>
  );
}

/** Number that counts up when scrolled into view. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Local flag (not a ref) so React Strict Mode remounts can restart cleanly
    let hasRun = false;
    let cancelled = false;
    let controls: { stop: () => void } | undefined;
    let raf = 0;

    const run = () => {
      if (hasRun || cancelled) return;
      hasRun = true;

      controls = animate(0, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          if (!cancelled) {
            setDisplay(`${prefix}${Math.round(value)}${suffix}`);
          }
        },
        onComplete: () => {
          if (!cancelled) {
            setDisplay(`${prefix}${to}${suffix}`);
          }
        },
      });
    };

    const isVisible = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.95 && rect.bottom > 0 && rect.height > 0;
    };

    if (isVisible()) {
      // Defer one frame so parent Reveal / layout has settled
      raf = requestAnimationFrame(() => run());
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run();
      },
      { threshold: 0, rootMargin: "80px" },
    );
    observer.observe(el);

    // Lenis can break IntersectionObserver; poll on scroll as backup
    const onScroll = () => {
      if (!hasRun && isVisible()) run();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      controls?.stop();
    };
  }, [to, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
