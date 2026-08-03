"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, type PanInfo } from "framer-motion";
import type { Project } from "@/data/projects";

const SLIDE_EASE = [0.32, 0.72, 0, 1] as const;

function ProjectCard({
  project,
  isCenter,
}: {
  project: Project;
  isCenter: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_20px_50px_-24px_rgba(10,11,13,0.28)] transition-shadow duration-500 sm:rounded-[1.75rem] ${
        isCenter
          ? "border-linel shadow-[0_28px_60px_-20px_rgba(59,141,224,0.22)]"
          : "border-linel/60"
      }`}
    >
      {project.frame === "browser" && (
        <div className="flex items-center gap-1.5 border-b border-linel bg-[#eceef1] px-3 py-2 sm:px-3.5 sm:py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/80 px-2.5 py-1 font-mono text-[8px] text-ink-dim sm:text-[9px]">
            {project.href.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
          </span>
        </div>
      )}
      <div className="relative aspect-[16/10] overflow-hidden bg-paper">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}, ${project.kind}`}
          fill
          className={`transition-transform duration-700 ${
            project.frame === "browser"
              ? "object-cover object-top"
              : "object-cover object-center"
          } ${isCenter ? "group-hover:scale-[1.02]" : ""}`}
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 720px"
          priority={isCenter}
        />
        <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-black/45 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-[10px]">
          {project.category}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold tracking-tight text-ink sm:text-lg">
            {project.name}
          </h3>
          <p className="mt-0.5 truncate text-sm text-ink-muted sm:text-[15px]">
            {project.kind}
          </p>
        </div>
        {isCenter && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linel text-sm text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:h-10 sm:w-10 sm:text-base">
            ↗
          </span>
        )}
      </div>
    </div>
  );
}

function measureCardWidth(viewportW: number, containerW: number) {
  if (viewportW < 480) return Math.min(containerW, Math.max(300, viewportW - 28));
  if (viewportW < 640) return Math.min(containerW, Math.max(340, viewportW - 40));
  if (viewportW < 900) return Math.min(560, Math.max(420, containerW * 0.72));
  if (viewportW < 1200) return Math.min(640, Math.max(520, containerW * 0.58));
  return Math.min(720, Math.max(580, containerW * 0.52));
}

export default function WorkCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(560);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const count = projects.length;
  const safeActive = count === 0 ? 0 : ((active % count) + count) % count;
  const activeProject = projects[safeActive];

  const gap = cardW < 400 ? 16 : cardW < 560 ? 22 : 28;
  const step = cardW + gap;
  const cardH = cardW * 0.625 + (cardW < 400 ? 96 : 108);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const next = measureCardWidth(window.innerWidth, el.offsetWidth);
      setCardW((prev) => (prev === next ? prev : next));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count === 0) return;
      setActive((i) => (i + dir + count) % count);
    },
    [count]
  );

  const snap = useCallback(
    (offset: number, velocity: number) => {
      const threshold = step * 0.18;
      if (offset < -threshold || velocity < -350) go(1);
      else if (offset > threshold || velocity > 350) go(-1);
      setDragX(0);
    },
    [go, step]
  );

  const onDrag = (_: unknown, info: PanInfo) => {
    setIsDragging(true);
    setDragX(info.offset.x);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    snap(info.offset.x, info.velocity.x);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!activeProject) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-[1400px] px-3 sm:px-6 lg:px-8">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-6 bg-gradient-to-r from-bg to-transparent sm:w-16 lg:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-6 bg-gradient-to-l from-bg to-transparent sm:w-16 lg:w-24" />

      {/* Full-width stage so cards can grow; slides centered via absolute positioning */}
      <div ref={wrapRef} className="relative mx-auto w-full">
        <motion.div
          className="relative touch-pan-y"
          style={{ height: cardH }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.06}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          {projects.map((project, i) => {
            let offset = i - active;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            if (Math.abs(offset) > 2) return null;

            const isCenter = offset === 0;
            const isAdjacent = Math.abs(offset) === 1;
            const scale = isCenter ? 1 : cardW < 420 ? 0.9 : 0.88;
            const opacity = isCenter ? 1 : isAdjacent ? 0.5 : 0;

            return (
              <motion.article
                key={project.id}
                className="absolute top-0 left-1/2 cursor-grab active:cursor-grabbing"
                style={{
                  width: cardW,
                  marginLeft: -cardW / 2,
                  transformOrigin: "center top",
                }}
                animate={{
                  x: offset * step + dragX,
                  scale,
                  opacity,
                  zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                }}
                transition={
                  isDragging
                    ? { duration: 0 }
                    : { duration: 0.55, ease: SLIDE_EASE }
                }
                onClick={() => {
                  if (offset < 0) go(-1);
                  if (offset > 0) go(1);
                }}
              >
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block"
                  tabIndex={isCenter ? 0 : -1}
                  onClick={(e) => {
                    if (!isCenter) e.preventDefault();
                  }}
                >
                  <ProjectCard project={project} isCenter={isCenter} />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* Active meta — fixed slot, no layout jump */}
      <div className="mx-auto mt-4 flex min-h-[40px] max-w-2xl flex-wrap items-center justify-center gap-2 px-2 sm:mt-5 sm:gap-2.5">
        <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-deep sm:text-[10px]">
          {activeProject.metric}
        </span>
        {activeProject.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink-dim sm:text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Controls */}
      <div className="mx-auto mt-4 flex max-w-xl items-center justify-between gap-3 sm:mt-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-linel bg-white text-ink-muted transition-all duration-300 hover:border-accent hover:text-accent sm:h-11 sm:w-11"
        >
          ←
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              aria-label={`Go to ${project.name}`}
              onClick={() => setActive(i)}
              className="flex h-5 w-5 shrink-0 items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-1.5 w-5 bg-accent"
                    : "h-1.5 w-1.5 bg-linel hover:bg-ink-dim"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-linel bg-white text-ink-muted transition-all duration-300 hover:border-accent hover:text-accent sm:h-11 sm:w-11"
        >
          →
        </button>
      </div>

      <p className="mt-2.5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim sm:mt-3">
        {active + 1} / {count}
      </p>
    </div>
  );
}
