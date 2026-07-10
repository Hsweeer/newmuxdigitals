"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { EASE } from "./ui";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Automation", href: "/automation" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar({ show = true }: { show?: boolean }) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160 && !menuOpen);
  });

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5"
      initial={{ y: -96, opacity: 0 }}
      animate={{
        y: show && !hidden ? 0 : -96,
        opacity: show && !hidden ? 1 : 0,
      }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0c0e]/95 py-2 pl-2 pr-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 pl-2"
            aria-label="MuxDigitals home"
          >
            <Image
              src="/logo-mark.png"
              alt="MuxDigitals logo mark"
              width={34}
              height={23}
              priority
            />
            <span className="hidden text-[15px] font-semibold tracking-tight text-fg sm:block">
              Mux<span className="text-accent">Digitals</span>
            </span>
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
            {LINKS.map((link) => {
              const active =
                !link.href.includes("#") && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 hover:text-fg ${
                    active ? "text-fg" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-fg transition-colors hover:bg-white/10"
          >
            <motion.svg
              viewBox="0 0 20 20"
              className="h-4.5 w-4.5"
              animate={{ rotate: menuOpen ? 45 : 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <path
                d="M10 3v14M3 10h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </motion.svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c0e]/95 shadow-[0_20px_60px_-16px_rgba(0,0,0,0.7)] backdrop-blur-md"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <div className="grid gap-1 p-3 sm:grid-cols-2">
                {[{ label: "Home", href: "/" }, ...LINKS].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] text-muted transition-colors hover:bg-white/5 hover:text-fg"
                    >
                      {link.label}
                      <span className="text-dim transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3.5 text-[15px] font-semibold text-[#04121f] transition-colors hover:bg-accent-bright sm:col-span-2"
                >
                  Start a Project →
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
