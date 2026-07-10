"use client";

/** Lightweight CSS halftone curtain — GPU-friendly, no canvas jank. */
export default function Halftone({ className = "" }: { className?: string }) {
  return (
    <div className={`halftone-curtain pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <div className="halftone-curtain-inner absolute inset-0" />
    </div>
  );
}
