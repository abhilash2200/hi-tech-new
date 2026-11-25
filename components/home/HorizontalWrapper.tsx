
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

      mm.add("(min-width: 1024px)", () => {
        const getScrollDistance = () =>
          Math.max(0, wrapper.scrollWidth - window.innerWidth);

        let scrollDistance = getScrollDistance();

        const storySection = wrapper.querySelector<HTMLElement>(
          "[data-story-section]"
        );

        const cards = storySection
          ? gsap.utils.toArray<HTMLElement>(
              storySection.querySelectorAll(".story-snap-card")
            )
          : [];

        const header = storySection?.querySelector<HTMLElement>(
          "[data-story-header]"
        );

        let storyStartLeft = 0;
        let cardCenters: number[] = [];

        const calculateStoryPositions = () => {
          if (!storySection || !cards.length) return;

          const sectionRect = storySection.getBoundingClientRect();
          storyStartLeft = sectionRect.left;

          cardCenters = cards.map((card) => {
            const rect = card.getBoundingClientRect();
            return rect.left - sectionRect.left + rect.width / 2;
          });
        };

        const updateCards = () => {
          if (!storySection || !cards.length) return;

          const sectionRect = storySection.getBoundingClientRect();

          // Actual horizontal movement of the Story section.
          const storyScroll = storyStartLeft - sectionRect.left;

          // First card remains active at the beginning.
          let activeIndex = 0;

          // Next card activates only after scroll crosses
          // the midpoint between consecutive cards.
          for (let i = 1; i < cardCenters.length; i++) {
            const threshold =
              (cardCenters[i - 1] + cardCenters[i]) / 2;

            if (storyScroll >= threshold) {
              activeIndex = i;
            }
          }

          cards.forEach((card, index) => {
            const active = index === activeIndex;

            gsap.set(card, {
              opacity: active ? 1 : 0.25,
              scale: active ? 1 : 0.94,
              filter: active ? "blur(0px)" : "blur(1px)",
              transformOrigin: "center center",
            });
          });
        };

        const updateHeader = () => {
          if (!storySection || !header) return;

          const rect = storySection.getBoundingClientRect();

          const visible =
            rect.right > 0 && rect.left < window.innerWidth;

          gsap.set(header, {
            x: -rect.left,
            autoAlpha: visible ? 1 : 0,
          });
        };

        const lenis = new Lenis({
          duration: 1.15,
          easing: (t) =>
            Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

        calculateStoryPositions();

        // Set first card active immediately on page load.
        cards.forEach((card, index) => {
          gsap.set(card, {
            opacity: index === 0 ? 1 : 0.25,
            scale: index === 0 ? 1 : 0.94,
            filter: index === 0 ? "blur(0px)" : "blur(1px)",
          });
        });

        const tween = gsap.to(wrapper, {
          x: () => -scrollDistance,
          ease: "none",

          onUpdate: () => {
            updateCards();
            updateHeader();
          },

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
          calculateStoryPositions();
          tween.invalidate();
          ScrollTrigger.refresh();
          updateCards();
          updateHeader();
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
