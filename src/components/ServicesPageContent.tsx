"use client";

import Link from "next/link";
import { Reveal, SectionTitle } from "./ui";

const SERVICES = [
  {
    title: "Mobile Apps",
    body: "Apps your customers enjoy using, built to last.",
  },
  {
    title: "Websites & Web Platforms",
    body: "Fast, clean, and built to convert visitors into customers.",
  },
  {
    title: "Dashboards & Internal Tools",
    body: "Software that runs your operations, not slows them down.",
  },
  {
    title: "Design & Branding",
    body: "An identity customers remember and trust.",
  },
  {
    title: "Ongoing Support",
    body: "We stay involved after launch. Your product keeps improving.",
  },
];

export default function ServicesPageContent() {
  return (
    <>
      <section className="bg-dark pt-28 pb-16 text-fg sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Services
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            What we do.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Software development, product design, and business automation, built
            to help your business run better and grow faster.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="mx-auto mb-10 max-w-2xl text-center text-pretty text-base leading-relaxed text-ink-muted">
              Every business needs the right product, not just a working one. We
              design and build mobile apps, websites, and dashboards that fit how
              your business actually runs.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-linel bg-white p-6 shadow-[0_14px_36px_-20px_rgba(10,11,13,0.1)]">
                  <span className="font-mono text-xs text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight text-ink">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl border border-linel bg-white p-8 text-center">
              <SectionTitle
                text="Need automation too?"
                className="text-ink !text-2xl sm:!text-3xl"
              />
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
                We also build AI voice agents, workflow automation, and CRM
                systems that run your business around the clock.
              </p>
              <Link
                href="/automation"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-linel px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-deep"
              >
                See Automation Services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
