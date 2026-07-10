"use client";

import { motion } from "framer-motion";
import { EASE, SectionTitle } from "./ui";

const SERVICES = [
  {
    title: "Mobile Apps",
    body: "Apps your customers open again and again, built to last, not just to launch.",
  },
  {
    title: "Websites & Web Apps",
    body: "Fast, modern sites and web products built to convert, not just to look good.",
  },
  {
    title: "Admin Panels & Dashboards",
    body: "Software that runs your operations quietly in the background, exactly the way you need it to.",
  },
  {
    title: "Automation & CRM",
    body: "The systems that follow up, qualify, and close, so no opportunity is lost to a slow response.",
  },
  {
    title: "UI/UX & Branding",
    body: "An identity and interface customers trust the moment they see it.",
  },
  {
    title: "Support & Growth",
    body: "We keep improving what we built, long after the invoice is paid.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <SectionTitle
            text="What we help teams build and scale."
            className="text-ink !text-3xl sm:!text-4xl lg:!text-5xl"
          />
        </div>

        <motion.div
          className="mx-auto grid max-w-4xl overflow-hidden rounded-3xl border border-linel bg-white shadow-[0_20px_50px_-28px_rgba(10,11,13,0.15)] sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.06 }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE },
                },
              }}
              className={`group px-5 py-4 transition-colors duration-300 hover:bg-paper sm:px-7 sm:py-5 ${
                i > 0 ? "border-t border-linel" : ""
              } ${i === 1 ? "sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l sm:border-l-linel" : ""
              }`}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold tracking-tight text-ink sm:text-base">
                  {service.title}
                </h3>
              </div>
              <p className="mt-1 pl-8 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
                {service.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
