"use client";

import React, { useEffect, useRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface MorphTextProps {
  /** Array of words to morph between */
  words?: string[];
  /** Duration of the morphing transition in seconds (default: 1.0) */
  morphTime?: number;
  /** Duration each word stays stationary and crisp in seconds (default: 2.0) */
  cooldownTime?: number;
  /** Extra CSS classes on the root container */
  className?: string;
  /** Extra CSS classes on the text elements */
  textClassName?: string;
}

export function MorphText({
  words = ["DEVELOPER", "ANIMATOR", "DESIGNER", "VISIONARY", "CREATOR"],
  morphTime = 1.0,
  cooldownTime = 2.0,
  className,
  textClassName,
}: MorphTextProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `morph-threshold-${uid}`;

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!words || words.length === 0) return;

    let textIndex = 0;
    let time = performance.now();
    let morph = 0;
    let cooldown = cooldownTime;

    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    if (!text1 || !text2) return;

    text1.textContent = words[textIndex % words.length];
    text2.textContent = words[(textIndex + 1) % words.length];
    text1.style.filter = "";
    text1.style.opacity = "1";
    text2.style.filter = "";
    text2.style.opacity = "0";

    let animationFrameId: number;

    const setMorph = (fraction: number) => {
      // Dynamic blur curve: creates the authentic liquid morphing threshold
      const blurFraction = Math.min(8 / fraction - 8, 100);
      const blurFractionInv = Math.min(8 / (1 - fraction) - 8, 100);

      text2.style.filter = `blur(${Math.max(0, blurFraction)}px)`;
      text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      text1.style.filter = `blur(${Math.max(0, blurFractionInv)}px)`;
      text1.style.opacity = `${Math.pow(1 - fraction, 0.4) * 100}%`;

      text1.textContent = words[textIndex % words.length];
      text2.textContent = words[(textIndex + 1) % words.length];
    };

    const doCooldown = () => {
      morph = 0;
      // During cooldown, clear all blur filters so the Orbitron font stays 100% crisp & razor-sharp
      text2.style.filter = "";
      text2.style.opacity = "0%";
      text1.style.filter = "";
      text1.style.opacity = "100%";
      text1.textContent = words[textIndex % words.length];
      text2.textContent = words[(textIndex + 1) % words.length];
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction >= 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);

      if (fraction === 1) {
        textIndex = (textIndex + 1) % words.length;
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const dt = (now - time) / 1000;
      time = now;

      cooldown -= dt;

      if (cooldown <= 0) {
        doMorph();
      } else {
        doCooldown();
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [words, morphTime, cooldownTime]);

  // Find longest word to provide layout stability
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), words[0] || "");

  return (
    <div className={cn("relative flex items-center select-none overflow-visible", className)}>
      {/* Morphing container with SVG threshold filter for the authentic liquid morph effect */}
      <div
        className="relative flex items-center overflow-visible"
        style={{ filter: `url(#${filterId})` }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 font-orbitron font-black uppercase whitespace-nowrap will-change-transform",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 font-orbitron font-black uppercase whitespace-nowrap will-change-transform",
            textClassName
          )}
        />
        {/* Invisible spacer prevents layout shifts while words morph */}
        <span
          aria-hidden="true"
          className={cn(
            "invisible pointer-events-none font-orbitron font-black uppercase whitespace-nowrap",
            textClassName
          )}
        >
          {longestWord}
        </span>
      </div>

      {/* SVG feColorMatrix threshold filter */}
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default MorphText;
