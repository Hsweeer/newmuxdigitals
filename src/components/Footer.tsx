"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionTitle } from "./ui";

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Automation", href: "/automation" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
];

const SERVICES = [
  { label: "Mobile App Development", href: "/services" },
  { label: "Websites & Web Apps", href: "/services" },
  { label: "Dashboards & Internal Tools", href: "/services" },
  { label: "Automation & CRM", href: "/automation" },
  { label: "UI/UX & Branding", href: "/services" },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "X / Twitter", href: "https://x.com/muxdigitals", icon: <XIcon /> },
  {
    label: "Instagram",
    href: "https://instagram.com/muxdigitals",
    icon: <InstagramIcon />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mux-digitals",
    icon: <LinkedInIcon />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@muxdigitals",
    icon: <YouTubeIcon />,
  },
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="mt-0.5 h-4 w-4 shrink-0"
    >
      <path
        d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="mt-0.5 h-4 w-4 shrink-0"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-dark text-fg">
      {/* CTA banner — clean glow, no halftone */}
      <div className="relative px-5 py-28 text-center sm:py-36">
        <div
          className="orb h-[420px] w-[420px]"
          style={{
            background:
              "radial-gradient(circle, rgba(78,159,232,0.3) 0%, rgba(30,87,153,0.12) 50%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
              Start a project
            </span>
          </Reveal>
          <div className="mt-5">
            <SectionTitle
              text="Have an idea worth building? Let's build it right."
              className="text-fg"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-muted">
              Tell us where you want to take your product. We&apos;ll help you
              get there, with software built to lead.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@muxdigitals.com"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-[#04121f] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_50px_rgba(78,159,232,0.4)]"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="mailto:hello@muxdigitals.com"
                className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 text-sm font-medium text-fg transition-colors duration-300 hover:border-accent/60 hover:text-accent"
              >
                hello@muxdigitals.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer body */}
      <div className="relative z-10 border-t border-line bg-surface/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt="MuxDigitals logo"
                width={40}
                height={27}
              />
              <span className="text-lg font-semibold tracking-tight text-fg">
                Mux<span className="text-accent">Digitals</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A senior-led product engineering studio building production-ready
              web and mobile products for startups and SaaS teams since 2016.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
              Sitemap
            </h4>
            <ul className="flex flex-col gap-3">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-dim">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <span className="text-accent">
                  <PinIcon />
                </span>
                <span className="leading-relaxed">
                  203-B, Shah Rukn-e-Alam Colony,
                  <br />
                  Multan, Punjab, Pakistan
                </span>
              </li>
              <li>
                <a
                  href="mailto:hello@muxdigitals.com"
                  className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  <span className="text-accent">
                    <MailIcon />
                  </span>
                  hello@muxdigitals.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@muxdigitals.com"
                  className="flex items-start gap-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  <span className="text-accent">
                    <MailIcon />
                  </span>
                  careers@muxdigitals.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 sm:flex-row sm:px-8">
            <p className="text-xs text-dim">
              © {new Date().getFullYear()} MuxDigitals. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-dim transition-colors hover:text-muted"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-dim transition-colors hover:text-muted"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
