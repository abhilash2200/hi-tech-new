
"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface HorizontalWrapperProps {
  children: React.ReactNode;
}

interface StoryCardPosition {
  element: HTMLElement;
  left: number;
  width: number;
}

interface GeometryData {
  totalWidth: number;
  scrollDistance: number;
  snapProgresses: number[];
  storySnaps: number[];
  storyCards: StoryCardPosition[];
}

const HorizontalWrapper = ({ children }: HorizontalWrapperProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      window.scrollTo(0, 0);
      ScrollTrigger.clearScrollMemory();

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;

        if (!wrapper || !container) return;

        const getOffset = (element: HTMLElement) => {
          let left = 0;
          let current: HTMLElement | null = element;

          while (current && current !== wrapper) {
            left += current.offsetLeft;
            current = current.offsetParent as HTMLElement | null;
          }

          return left;
        };

        const calculateGeometry = (): GeometryData => {
          const totalWidth = wrapper.scrollWidth;
          const scrollDistance = Math.max(
            0,
            totalWidth - window.innerWidth
          );

          const sections =
            gsap.utils.toArray<HTMLElement>(".horizontal-section");

          const storyElements =
            gsap.utils.toArray<HTMLElement>(".story-snap-card");

          const storyCards: StoryCardPosition[] = storyElements.map(
            (element) => ({
              element,
              left: getOffset(element),
              width: element.offsetWidth,
            })
          );

          const sectionSnaps = sections.map((section) =>
            Math.min(
              1,
              Math.max(
                0,
                section.offsetLeft / Math.max(1, scrollDistance)
              )
            )
          );

          const storySnaps = storyCards.map((card) => {
            const centeredPosition =
              card.left - (window.innerWidth - card.width) / 2;

            return Math.min(
              1,
              Math.max(
                0,
                centeredPosition / Math.max(1, scrollDistance)
              )
            );
          });

          const snapProgresses =
            storySnaps.length > 0
              ? [...new Set(storySnaps)].sort((a, b) => a - b)
              : [...new Set(sectionSnaps)].sort((a, b) => a - b);

          return {
            totalWidth,
            scrollDistance,
            snapProgresses,
            storySnaps,
            storyCards,
          };
        };

        let geometry = calculateGeometry();

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

        let activeStoryIndex = 0;

        const updateStoryCards = (progress: number) => {
          if (!geometry.storyCards.length) return;

          const currentScroll =
            progress * geometry.scrollDistance;

          const viewportCenter = window.innerWidth / 2;

          let activeIndex = 0;
          let closestDistance = Infinity;

          if (progress <= 0.01) {
            activeIndex = 0;
          } else if (progress >= 0.99) {
            activeIndex = geometry.storyCards.length - 1;
          } else {
            geometry.storyCards.forEach((card, index) => {
              const cardCenter =
                card.left - currentScroll + card.width / 2;

              const distance = Math.abs(
                cardCenter - viewportCenter
              );

              if (distance < closestDistance) {
                closestDistance = distance;
                activeIndex = index;
              }
            });
          }

          activeStoryIndex = activeIndex;

          geometry.storyCards.forEach((card, index) => {
            const active = index === activeIndex;

            gsap.to(card.element, {
              opacity: active ? 1 : 0.25,
              scale: active ? 1 : 0.94,
              filter: active ? "blur(0px)" : "blur(1px)",
              duration: 0.3,
              overwrite: "auto",
            });
          });
        };

        let resizeTimer: ReturnType<typeof setTimeout> | null = null;

        const resizeObserver = new ResizeObserver(() => {
          if (resizeTimer) clearTimeout(resizeTimer);

          resizeTimer = setTimeout(() => {
            geometry = calculateGeometry();
            ScrollTrigger.refresh();
          }, 150);
        });

        resizeObserver.observe(wrapper);

        const tween = gsap.to(wrapper, {
          x: () => -geometry.scrollDistance,
          ease: "none",

          onUpdate: function () {
            updateStoryCards(this.progress());
          },

          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1.1,
            start: "top top",
            end: () => `+=${geometry.scrollDistance}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,

            snap: {
              snapTo: (progress, self) => {
                const snaps = geometry.snapProgresses;

                if (!snaps.length) return progress;

                if (geometry.storySnaps.length > 0) {
                  const direction = self?.direction || 1;

                  const nextIndex =
                    direction > 0
                      ? Math.min(activeStoryIndex + 1, snaps.length - 1)
                      : Math.max(activeStoryIndex - 1, 0);

                  return snaps[nextIndex];
                }

                return gsap.utils.snap(snaps, progress);
              },

              duration: { min: 0.35, max: 0.55 },
              delay: 0.08,
              ease: "power2.out",
            },
          },
        });

        const refreshTimer = setTimeout(() => {
          geometry = calculateGeometry();
          ScrollTrigger.refresh();
          updateStoryCards(tween.progress());
        }, 200);

        return () => {
          if (resizeTimer) clearTimeout(resizeTimer);

          clearTimeout(refreshTimer);
          resizeObserver.disconnect();

          gsap.ticker.remove(updateRaf);
          lenis.destroy();
          tween.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        return () => { };
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
      dependencies: [pathname],
    }
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full min-h-screen bg-white overflow-x-hidden lg:overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="flex flex-col lg:flex-row lg:flex-nowrap w-full max-w-full lg:w-fit h-auto lg:h-screen overflow-x-hidden lg:overflow-visible will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalWrapper;
