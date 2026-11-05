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

const HorizontalWrapper = ({ children }: HorizontalWrapperProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      let lenisInstance: Lenis | null = null;
      let updateRaf: ((time: number) => void) | null = null;
      let wheelHandler: ((e: WheelEvent) => void) | null = null;
      let touchStartHandler: ((e: TouchEvent) => void) | null = null;
      let touchMoveHandler: ((e: TouchEvent) => void) | null = null;
      let scrollSyncHandler: (() => void) | null = null;

      // Force scroll reset immediately to ensure no scroll state leaks during React render
      window.scrollTo(0, 0);
      ScrollTrigger.update();

      // Ensure all images/content are loaded for accurate measurement
      const timer = setTimeout(() => {
        // Double check scroll is at 0 before creating ScrollTrigger pins
        window.scrollTo(0, 0);
        ScrollTrigger.update();
        ScrollTrigger.clearScrollMemory();
        
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const sections = gsap.utils.toArray(".horizontal-section");
        if (sections.length === 0) return;

        // Use context.add() so that GSAP registers asynchronous animations under this hook's context
        context.add(() => {
          // Initialize GSAP matchMedia
          const mm = gsap.matchMedia();

          // 1024px and wider get the premium horizontal-scroll and pinning experience
          mm.add("(min-width: 1024px)", () => {
            const totalWidth = wrapper.scrollWidth;
            const scrollDistance = totalWidth - window.innerWidth;

            // Initialize Lenis smooth scroll
            const lenis = new Lenis({
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
              orientation: "vertical",
              gestureOrientation: "vertical",
              smoothWheel: true,
            });
            lenisInstance = lenis;

            // Update ScrollTrigger on scroll
            lenis.on("scroll", ScrollTrigger.update);

            // Add Lenis update to GSAP ticker
            updateRaf = (time: number) => {
              lenis.raf(time * 1000);
            };
            gsap.ticker.add(updateRaf);

            // 1. Horizontal Scroll Animation
            gsap.to(wrapper, {
              x: -scrollDistance,
              ease: "none",
              scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + scrollDistance,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            });

            // 2. Premium Section Snapping Observer
            const currentIndexRef = { current: 0 };
            const isAnimatingRef = { current: false };

            const goToSection = (index: number) => {
              const targetIndex = Math.max(0, Math.min(sections.length - 1, index));
              currentIndexRef.current = targetIndex;
              isAnimatingRef.current = true;

              const section = sections[targetIndex] as HTMLElement;
              // Cap targetScrollY at maximum scrollable distance to prevent browser boundary hanging
              const targetScrollY = Math.min(scrollDistance, section.offsetLeft);

              // Animate scrolling using Lenis scrollTo
              lenis.scrollTo(targetScrollY, {
                duration: 0.95,
                immediate: false,
                onComplete: () => {
                  // Cooldown to absorb trackpad inertial momentum events
                  setTimeout(() => {
                    isAnimatingRef.current = false;
                  }, 150);
                },
              });
            };

            wheelHandler = (e: WheelEvent) => {
              e.preventDefault();
              if (isAnimatingRef.current) return;

              const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
              if (Math.abs(delta) < 8) return; // filter minor inputs

              const targetIndex = delta > 0 
                ? currentIndexRef.current + 1 
                : currentIndexRef.current - 1;

              if (targetIndex >= 0 && targetIndex < sections.length) {
                goToSection(targetIndex);
              }
            };

            let touchStartX = 0;
            let touchStartY = 0;
            touchStartHandler = (e: TouchEvent) => {
              touchStartX = e.touches[0].clientX;
              touchStartY = e.touches[0].clientY;
            };

            touchMoveHandler = (e: TouchEvent) => {
              if (isAnimatingRef.current) {
                e.preventDefault();
                return;
              }

              const touchEndX = e.touches[0].clientX;
              const touchEndY = e.touches[0].clientY;

              const diffX = touchStartX - touchEndX;
              const diffY = touchStartY - touchEndY;

              const maxDiff = Math.abs(diffY) > Math.abs(diffX) ? diffY : diffX;

              if (Math.abs(maxDiff) > 50) {
                const targetIndex = maxDiff > 0 
                  ? currentIndexRef.current + 1 
                  : currentIndexRef.current - 1;

                if (targetIndex >= 0 && targetIndex < sections.length) {
                  e.preventDefault();
                  goToSection(targetIndex);
                }
              }
            };

            scrollSyncHandler = () => {
              if (isAnimatingRef.current) return;
              const currentScroll = window.scrollY;

              let closestIndex = 0;
              let minDiff = Infinity;

              sections.forEach((sec, idx) => {
                const section = sec as HTMLElement;
                // Align sync with capped targetScrollY boundary limits
                const targetPos = Math.min(scrollDistance, section.offsetLeft);
                const diff = Math.abs(targetPos - currentScroll);
                if (diff < minDiff) {
                  minDiff = diff;
                  closestIndex = idx;
                }
              });
              currentIndexRef.current = closestIndex;
            };

            // Attach listeners
            window.addEventListener("wheel", wheelHandler, { passive: false });
            window.addEventListener("touchstart", touchStartHandler);
            window.addEventListener("touchmove", touchMoveHandler, { passive: false });
            window.addEventListener("scroll", scrollSyncHandler);
          });
        });

        // Trigger initial refresh
        setTimeout(() => ScrollTrigger.refresh(), 300);
      }, 200);

      return () => {
        clearTimeout(timer);
        if (wheelHandler) window.removeEventListener("wheel", wheelHandler);
        if (touchStartHandler) window.removeEventListener("touchstart", touchStartHandler);
        if (touchMoveHandler) window.removeEventListener("touchmove", touchMoveHandler);
        if (scrollSyncHandler) window.removeEventListener("scroll", scrollSyncHandler);
        if (updateRaf) gsap.ticker.remove(updateRaf);
        if (lenisInstance) lenisInstance.destroy();
      };
    },
    { scope: containerRef, dependencies: [pathname, children] }
  );

  return (
    <div ref={containerRef} className="lg:overflow-hidden min-h-screen w-full bg-white">
      <div 
        ref={wrapperRef} 
        className="flex flex-col lg:flex-row lg:flex-nowrap w-full lg:w-fit h-auto lg:h-screen overflow-visible"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalWrapper;
