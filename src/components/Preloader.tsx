"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./ui";

const INTRO_KEY = "mux-intro-played";
/** Total intro duration before fade-out (~1.5s). */
const INTRO_HOLD_MS = 1500;

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setVisible(false);
    onDone();
  }, [onDone]);

  // Play the intro only once per browser session; skip instantly on return visits.
  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      finished.current = true;
      setSkipped(true);
      setVisible(false);
      onDone();
    } else {
      sessionStorage.setItem(INTRO_KEY, "1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    if (skipped) return;
    const timeout = setTimeout(finish, INTRO_HOLD_MS);
    return () => clearTimeout(timeout);
  }, [finish, skipped]);

  if (skipped) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-dark"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          {/* Premium glow — separate layer, never blurs the logo */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute z-0 h-[min(72vw,520px)] w-[min(72vw,520px)] rounded-full blur-3xl sm:h-[620px] sm:w-[620px]"
            style={{
              background:
                "radial-gradient(circle, rgba(59,141,224,0.28) 0%, rgba(59,141,224,0.08) 45%, transparent 72%)",
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          />

          {/* Crisp logo — opacity + scale only, no blur filters */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.75, ease: EASE }}
            style={{ willChange: "opacity, transform" }}
          >
            <Image
              src="/intro-logo.png"
              alt="MuxDigitals"
              width={2000}
              height={2000}
              priority
              draggable={false}
              className="relative h-auto w-[min(92vw,560px)] max-w-none select-none object-contain sm:w-[min(78vw,640px)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
