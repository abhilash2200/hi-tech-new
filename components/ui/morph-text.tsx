"use client";

import React, { useEffect, useRef, useId } from "react";
import { cn } from "@/lib/utils";

export interface MorphTextProps {
  /** Array of words to morph between */
  words?: string[];
  /** Duration of the liquid morph transition in seconds (default: 1.1) */
  morphTime?: number;
  /** Duration each word stays stationary and crisp in seconds (default: 2.2) */
  cooldownTime?: number;
  /** Extra CSS classes on the root container */
  className?: string;
  /** Extra CSS classes on the text elements */
  textClassName?: string;
}

export function MorphText({
  words = ["DEVELOPER", "ANIMATOR", "DESIGNER", "VISIONARY", "CREATOR"],
  morphTime = 1.1,
  cooldownTime = 2.2,
  className,
  textClassName,
}: MorphTextProps) {
  const uid = useId().replace(/:/g, "");
  const filterId = `morph-threshold-${uid}`;

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!words || words.length <= 1) return;

    let currentIndex = 0;
    let nextIndex = 1;
    let state: "cooldown" | "morphing" = "cooldown";
    let elapsed = 0;
    let lastTime = performance.now();

    const text1 = text1Ref.current;
    const text2 = text2Ref.current;
    if (!text1 || !text2) return;

    // Initial state: text1 visible & sharp, text2 hidden
    text1.textContent = words[currentIndex];
    text2.textContent = words[nextIndex];
    text1.style.opacity = "1";
    text1.style.filter = "none";
    text2.style.opacity = "0";
    text2.style.filter = "none";

    let animId: number;

    const tick = (now: number) => {
      animId = requestAnimationFrame(tick);

      // Clamp delta time to avoid large jumps when returning from inactive tabs
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      elapsed += dt;

      if (state === "cooldown") {
        if (elapsed >= cooldownTime) {
          state = "morphing";
          elapsed = 0;
          text2.textContent = words[nextIndex];
        }
      } else if (state === "morphing") {
        const rawProgress = Math.min(1, elapsed / morphTime);
        // Smooth sine ease-in-out curve for natural liquid velocity
        const progress = 0.5 - 0.5 * Math.cos(rawProgress * Math.PI);

        // Controlled blur range keeps letterforms legible while creating gooey threshold
        const maxBlur = 12;
        const text1Blur = progress * maxBlur;
        const text2Blur = (1 - progress) * maxBlur;

        text1.style.filter = `blur(${text1Blur.toFixed(2)}px)`;
        text1.style.opacity = `${(1 - progress).toFixed(3)}`;

        text2.style.filter = `blur(${text2Blur.toFixed(2)}px)`;
        text2.style.opacity = `${progress.toFixed(3)}`;

        if (rawProgress >= 1) {
          // Seamless handoff:
          // text1 adopts text2's exact content and styles at 100% opacity with 0 blur.
          // Because both look identical, this handoff is 100% invisible with zero cut or jump.
          currentIndex = nextIndex;
          nextIndex = (nextIndex + 1) % words.length;

          text1.textContent = words[currentIndex];
          text1.style.opacity = "1";
          text1.style.filter = "none";

          text2.textContent = words[nextIndex];
          text2.style.opacity = "0";
          text2.style.filter = "none";

          state = "cooldown";
          elapsed = 0;
        }
      }
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [words, morphTime, cooldownTime]);

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), words[0] || "");

  return (
    <div className={cn("relative flex items-center select-none overflow-visible", className)}>
      {/* Liquid morph container with SVG contrast threshold */}
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
        {/* Invisible spacer prevents layout shifts across different word lengths */}
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
