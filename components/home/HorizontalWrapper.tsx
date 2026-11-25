"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HorizontalWrapperProps {
  children: React.ReactNode;
}

const HorizontalWrapper = ({ children }: HorizontalWrapperProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;

      if (!container || !wrapper) return;

      window.scrollTo(0, 0);
      ScrollTrigger.clearScrollMemory();

      const mm = gsap.matchMedia();

      /* ================= DESKTOP (1024px and above) ================= */
      mm.add("(min-width: 1024px)", () => {
        const getScrollDistance = () =>
          Math.max(0, wrapper.scrollWidth - window.innerWidth);

        let scrollDistance = getScrollDistance();

        /* ---------------- STORY SECTION (looping cards) ---------------- */
        const storySection = wrapper.querySelector<HTMLElement>(
          "[data-story-section]"
        );
        const pin = storySection?.querySelector<HTMLElement>(
          "[data-story-pin]"
        );
        const stage = storySection?.querySelector<HTMLElement>(
          "[data-story-stage]"
        );
        const curve = storySection?.querySelector<SVGPathElement>(
          "[data-story-curve]"
        );
        const cards = storySection
          ? gsap.utils.toArray<HTMLElement>(
              storySection.querySelectorAll(".story-snap-card")
            )
          : [];

        const n = cards.length;
        const step = Number(stage?.dataset.step ?? 440); // px between cards
        const loopLen = n * step; // scroll distance for one full lap
        const activeX = 60; // left position of the active (first) card
        const waveLen = 1100; // length of one wave of the orange curve

        const INACTIVE_SCALE = 0.95;
        const ACTIVE_SCALE = 1.1;

        let W = 0;
        let H = 0;
        let dotCx = 0;
        let dotCy = 0;

        // The orange curve: low on the left, rising to the right, with a wave.
        // Cards use this same formula, so their dots always sit on the line.
        const curveY = (x: number) =>
          H * (0.72 - 0.3 * (x / W)) -
          H * 0.035 * Math.sin((2 * Math.PI * x) / waveLen);

        const measure = () => {
          if (!stage || !n) return;

          W = stage.clientWidth;
          H = stage.clientHeight;

          const dot = cards[0].querySelector<HTMLElement>("[data-story-dot]");
          if (dot) {
            dotCx = dot.offsetLeft + dot.offsetWidth / 2;
            dotCy = dot.offsetTop + dot.offsetHeight / 2;
          }

          // scale around the dot so the dot never leaves the curve
          gsap.set(cards, { transformOrigin: `${dotCx}px ${dotCy}px` });

          if (curve) {
            const pts: string[] = [];
            for (let x = -20; x <= W + 20; x += 20) {
              pts.push(`${x === -20 ? "M" : "L"}${x} ${curveY(x).toFixed(1)}`);
            }
            curve.setAttribute("d", pts.join(" "));
          }
        };

        const updateStory = () => {
          if (!storySection || !pin || !n) return;

          const rect = storySection.getBoundingClientRect();
          const maxShift = Math.max(1, rect.width - window.innerWidth);
          const shift = gsap.utils.clamp(0, maxShift, -rect.left);

          // keep header + stage fixed on screen while the section scrolls by
          gsap.set(pin, { x: shift });

          // 1px of scroll = 1px of card movement
          const s = shift;

          cards.forEach((card, i) => {
            // position relative to the active slot, wrapped into [-step, loopLen - step)
            // -> a card leaving on the left re-enters from the right
            const d =
              ((((i * step - s + step) % loopLen) + loopLen) % loopLen) - step;

            const x = activeX + d;
            const y = curveY(x + dotCx) - dotCy;

            const k = Math.min(Math.abs(d) / step, 1);
            const opacity = d < 0 ? 1 - k : 1 - 0.45 * k; // fades out as it leaves

            // active card is larger, inactive cards stay smaller
            const scale =
              INACTIVE_SCALE + (ACTIVE_SCALE - INACTIVE_SCALE) * (1 - k);

            gsap.set(card, { x, y, opacity, scale });
          });
        };

        /* ---------------- SMOOTH SCROLL ---------------- */
        const lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const updateRaf = (time: number) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateRaf);
        gsap.ticker.lagSmoothing(0);

        measure();
        updateStory(); // first card active on load

        const tween = gsap.to(wrapper, {
          x: () => -scrollDistance,
          ease: "none",
          onUpdate: updateStory,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        const refresh = () => {
          scrollDistance = getScrollDistance();
          measure();
          tween.invalidate();
          ScrollTrigger.refresh();
          updateStory();
        };

        const observer = new ResizeObserver(() => {
          refresh();
        });

        observer.observe(wrapper);

        const refreshTimer = window.setTimeout(refresh, 250);

        return () => {
          window.clearTimeout(refreshTimer);
          observer.disconnect();

          gsap.ticker.remove(updateRaf);
          lenis.destroy();

          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });

      /* ================= MOBILE / TABLET (below 1024px) =================
         Normal vertical scroll. Cards reveal one by one. */
      mm.add("(max-width: 1023px)", () => {
        const mobileCards = gsap.utils.toArray<HTMLElement>(
          wrapper.querySelectorAll(".story-snap-card")
        );

        mobileCards.forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 70,
            scale: 0.92,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });

        return () => {
          mobileCards.forEach((card) => gsap.set(card, { clearProps: "all" }));
        };
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
      dependencies: [pathname],
      revertOnUpdate: true,
    }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen overflow-x-hidden bg-white lg:overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="
          flex flex-col
          w-full min-w-0
          lg:w-max lg:min-w-full
          lg:flex-row lg:flex-nowrap
          lg:h-screen
          lg:overflow-visible
          will-change-transform
        "
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalWrapper;