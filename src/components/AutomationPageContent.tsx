"use client";

import Link from "next/link";
import { Reveal, SectionTitle } from "./ui";

const OFFERINGS = [
  {
    title: "AI Voice Agents",
    summary:
      "Every call answered, every lead qualified, every booking made, without adding headcount.",
    body: "We design voice agents that greet callers, ask the right questions, and route hot leads to your team instantly. They work nights, weekends, and holidays without a single missed opportunity.",
    example:
      "Example: A home services company gets 40+ calls a day. Our agent answers every call, collects job details, checks availability, and books appointments while the owner is on site.",
    tags: ["Call handling", "Lead qualification", "Appointment booking"],
  },
  {
    title: "Workflow Automation (n8n)",
    summary:
      "Your tools finally talk to each other. Leads, invoices, and reports handled automatically.",
    body: "We connect your CRM, forms, email, spreadsheets, and payment tools into workflows that run on their own. No more copying data between systems or chasing follow-ups manually.",
    example:
      "Example: A new lead fills out a form, CRM record created, welcome email sent, sales rep notified on Slack, follow-up task scheduled, all in under 30 seconds.",
    tags: ["Integrations", "Data sync", "Reporting"],
  },
  {
    title: "GoHighLevel CRM Setup",
    summary:
      "A pipeline that follows up automatically, so no lead goes cold waiting on a reply.",
    body: "We set up your CRM pipelines, automations, and follow-up sequences so every lead gets a timely response. Your team sees a clear dashboard of what's working and what needs attention.",
    example:
      "Example: A coaching business gets leads from Instagram, their website, and referrals. Every lead lands in one pipeline with automated SMS follow-ups and booking links. Nothing falls through the cracks.",
    tags: ["Pipelines", "Follow-ups", "SMS & email sequences"],
  },
];

export default function AutomationPageContent() {
  return (
    <>
      <section className="bg-dark pt-28 pb-16 text-fg sm:pt-36 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            Automation
          </span>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Your business, running itself.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            We build automation systems that answer calls, qualify leads, and
            manage your pipeline around the clock, without adding headcount.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-16">
            {OFFERINGS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="rounded-3xl border border-linel bg-white p-8 shadow-[0_20px_50px_-28px_rgba(10,11,13,0.15)] sm:p-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base font-medium text-ink-muted">
                    {item.summary}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                    {item.body}
                  </p>
                  <p className="mt-4 rounded-2xl border border-linel bg-paper px-5 py-4 text-sm leading-relaxed text-ink-muted">
                    {item.example}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-linel bg-paper px-3 py-1 text-[11px] font-medium text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href="mailto:support@muxdigitals.com?subject=Automation%20inquiry"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#04121f] transition-all duration-300 hover:bg-accent-bright"
                    >
                      Talk about {item.title.split(" (")[0]}
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 rounded-3xl border border-linel bg-white p-8 text-center sm:p-10">
              <SectionTitle
                text="Ready to automate what slows you down?"
                className="text-ink !text-2xl sm:!text-3xl"
              />
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
                Tell us where leads are slipping through. We&apos;ll show you
                exactly what automation can fix, and what it costs.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:support@muxdigitals.com?subject=Automation%20project"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#04121f] transition-all duration-300 hover:bg-accent-bright"
                >
                  Start a Project
                </a>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-linel px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent-deep"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
