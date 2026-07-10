"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, PROJECTS, type Category } from "@/data/projects";
import { EASE, Reveal } from "./ui";

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="group"
    >
      <a
        href={project.href}
        target={project.href.startsWith("http") ? "_blank" : undefined}
        rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        <div className="relative overflow-hidden rounded-3xl border border-linel bg-white shadow-[0_24px_60px_-24px_rgba(10,11,13,0.14)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-24px_rgba(59,141,224,0.28)]">
          {project.frame === "browser" && (
            <div className="flex items-center gap-1.5 border-b border-linel bg-[#eceef1] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 flex-1 truncate rounded-md bg-white/80 px-2 py-0.5 font-mono text-[8px] text-ink-dim">
                {project.href.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
              </span>
            </div>
          )}
          <div className="relative aspect-[16/10] overflow-hidden bg-paper">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}, ${project.kind}`}
              fill
              className={`transition-transform duration-700 group-hover:scale-[1.03] ${
                project.frame === "browser"
                  ? "object-cover object-top"
                  : "object-cover object-center"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              </div>
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5 pt-16">
              <div className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                {project.metric}
              </div>
              <div className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.name}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between px-1">
          <div>
            <div className="text-sm font-medium text-ink">{project.kind}</div>
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-dim"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-linel text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            ↗
          </span>
        </div>
      </a>
    </motion.article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="bg-bg pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-deep">
              Portfolio
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Work that ships and{" "}
              <span className="font-serif italic">wins markets.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-ink-muted">
              Real products across mobile, web, automation, and design, each
              with a live link you can explore.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active === category
                    ? "text-white"
                    : "border border-linel bg-white text-ink-muted hover:text-ink"
                }`}
              >
                {active === category && (
                  <motion.span
                    layoutId="portfolio-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{category}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
