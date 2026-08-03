"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "./ui";

const INTRO_KEY = "mux-intro-played";
/** Total intro duration before fade-out (~1.5s). */
const INTRO_HOLD_MS = 1500;
/** Absolute failsafe so the site never stays blank. */
const INTRO_FAILSAFE_MS = 2800;

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const finished = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    setVisible(false);
    try {
      document.body.style.overflow = "";
    } catch {
      /* ignore */
    }
    onDoneRef.current();
  }, []);

  // Play the intro only once per browser session; skip instantly on return visits.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_KEY)) {
        finish();
        return;
      }
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Private mode / blocked storage — still show a short intro then continue.
    }

    const timeout = setTimeout(finish, INTRO_HOLD_MS);
    const failsafe = setTimeout(finish, INTRO_FAILSAFE_MS);
    return () => {
      clearTimeout(timeout);
      clearTimeout(failsafe);
    };
  }, [finish]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence onExitComplete={finish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050505]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
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
              width={1600}
              height={1600}
              priority
              draggable={false}
              className="relative h-auto w-[min(92vw,480px)] max-w-none select-none object-contain sm:w-[min(78vw,560px)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
