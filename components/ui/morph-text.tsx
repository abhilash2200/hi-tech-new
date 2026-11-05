"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MorphTextProps {
  /**
   * Array of words / phrases to cycle through.
   * @default ["DEVELOPER", "ANIMATOR", "DESIGNER", "VISIONARY", "CREATOR"]
   */
  words?: string[];
  /**
   * Duration (ms) each word is displayed before transitioning.
   * @default 2800
   */
  interval?: number;
  /**
   * Optional subtext rendered beneath the morphing word.
   */
  subtext?: string;
  /**
   * Alignment of the text: "left" | "center" | "right".
   * @default "left"
   */
  align?: "left" | "center" | "right";
  /** Extra CSS classes on the root wrapper. */
  className?: string;
  /** Extra CSS classes on the morphing text element. */
  textClassName?: string;
  /** Extra CSS classes on the subtext element. */
  subtextClassName?: string;
}

export function MorphText({
  words = ["DEVELOPER", "ANIMATOR", "DESIGNER", "VISIONARY", "CREATOR"],
  interval = 2800,
  subtext,
  align = "left",
  className,
  textClassName,
  subtextClassName,
}: MorphTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index] || "";

  return (
    <div
      className={cn(
        "morph-text-root relative flex flex-col",
        align === "left"
          ? "items-start text-left"
          : align === "right"
          ? "items-end text-right"
          : "items-center text-center",
        className
      )}
    >
      <div className="relative min-h-[1.15em] flex items-center overflow-visible">
        {/* mode="wait" guarantees the exiting word finishes completely before the next mounts, preventing any overlapping */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{
              opacity: 0,
              y: 12,
              filter: "blur(6px)",
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -12,
              filter: "blur(6px)",
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={cn(
              "inline-block font-orbitron font-black uppercase whitespace-nowrap select-none",
              textClassName
            )}
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </div>

      {subtext && (
        <p className={cn("mt-4 text-gray-400 font-rajdhani", subtextClassName)}>
          {subtext}
        </p>
      )}
    </div>
  );
}

export default MorphText;
