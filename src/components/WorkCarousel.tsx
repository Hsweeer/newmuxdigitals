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
      className={`relative overflow-hidden rounded-2xl border bg-white shadow-[0_20px_50px_-24px_rgba(10,11,13,0.28)] transition-shadow duration-500 sm:rounded-3xl ${
        isCenter
          ? "border-linel shadow-[0_28px_60px_-20px_rgba(59,141,224,0.22)]"
          : "border-linel/60"
      }`}
    >
      {project.frame === "browser" && (
        <div className="flex items-center gap-1.5 border-b border-linel bg-[#eceef1] px-2.5 py-1.5 sm:px-3 sm:py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="ml-1.5 flex-1 truncate rounded-md bg-white/80 px-2 py-0.5 font-mono text-[7px] text-ink-dim sm:text-[8px]">
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
          sizes="(max-width: 640px) 88vw, 340px"
          priority={isCenter}
        />
        <span className="absolute left-2.5 top-2.5 rounded-full border border-white/25 bg-black/45 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[9px]">
          {project.category}
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 px-3 py-3 sm:gap-3 sm:px-4 sm:py-3.5">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold tracking-tight text-ink sm:text-base">
            {project.name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-ink-muted sm:text-sm">
            {project.kind}
          </p>
        </div>
        {isCenter && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-linel text-sm text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white sm:h-9 sm:w-9">
            ↗
          </span>
        )}
      </div>
    </div>
  );
}

export default function WorkCarousel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [cardW, setCardW] = useState(300);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const count = projects.length;
  const activeProject = projects[active];

  const gap = cardW < 340 ? 14 : 20;
  const step = cardW + gap;
  const cardH = cardW * 0.625 + 88;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.offsetWidth;
      setCardW(Math.min(w, window.innerWidth < 640 ? 320 : 360));
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
    (dir: -1 | 1) => setActive((i) => (i + dir + count) % count),
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

  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-8">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-30 w-8 bg-gradient-to-r from-bg to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-30 w-8 bg-gradient-to-l from-bg to-transparent sm:w-20" />

      {/* Card stage — fixed height, vertically centred slides */}
      <div
        ref={wrapRef}
        className="relative mx-auto w-full max-w-[360px] sm:max-w-[380px]"
      >
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
            const scale = isCenter ? 1 : 0.86;
            const opacity = isCenter ? 1 : isAdjacent ? 0.55 : 0;

            return (
              <motion.article
                key={project.id}
                className="absolute top-0 cursor-grab active:cursor-grabbing"
                style={{ width: cardW, left: "50%", transformOrigin: "center top" }}
                animate={{
                  x: -cardW / 2 + offset * step + dragX,
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
      <div className="mx-auto mt-3 flex min-h-[36px] max-w-[360px] flex-wrap items-center justify-center gap-1.5 px-1 sm:mt-4 sm:max-w-[380px] sm:gap-2">
        <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-deep sm:px-3 sm:py-1 sm:text-[10px]">
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

      {/* Controls — tight to meta */}
      <div className="mx-auto mt-3 flex max-w-[360px] items-center justify-between gap-2 sm:mt-4 sm:max-w-[380px] sm:gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linel bg-white text-ink-muted transition-all duration-300 hover:border-accent hover:text-accent sm:h-10 sm:w-10"
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
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linel bg-white text-ink-muted transition-all duration-300 hover:border-accent hover:text-accent sm:h-10 sm:w-10"
        >
          →
        </button>
      </div>

      <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
        {active + 1} / {count}
      </p>
    </div>
  );
}
