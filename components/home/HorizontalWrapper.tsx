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

interface GeometryData {
  totalWidth: number;
  scrollDistance: number;
  snapProgresses: number[];
}

const HorizontalWrapper = ({ children }: HorizontalWrapperProps) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Always reset scroll to top on mount / route transition
      window.scrollTo(0, 0);
      ScrollTrigger.clearScrollMemory();

      const mm = gsap.matchMedia();

      // Desktop: Pin and horizontal scrub (≥ 1024px)
      mm.add("(min-width: 1024px)", () => {
        const wrapper = wrapperRef.current;
        const container = containerRef.current;
        if (!wrapper || !container) return;

        const calculateGeometry = (): GeometryData => {
          const totalWidth = wrapper.scrollWidth;
          const scrollDistance = Math.max(0, totalWidth - window.innerWidth);
          const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

          const snapProgresses =
            scrollDistance > 0
              ? sections.map((sec) =>
                  Math.min(1, Math.max(0, sec.offsetLeft / scrollDistance))
                )
              : [0];

          return { totalWidth, scrollDistance, snapProgresses };
        };

        let geometry = calculateGeometry();

        // 1. Initialize Lenis for smooth vertical scroll physics
        const lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        // 2. Synchronize Lenis and GSAP via a single unified requestAnimationFrame ticker
        const updateRaf = (time: number) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateRaf);
        gsap.ticker.lagSmoothing(0);

        // 3. Cache geometry on resize — NO reading offsetLeft inside scroll loops
        let resizeTimer: ReturnType<typeof setTimeout> | null = null;
        const resizeObserver = new ResizeObserver(() => {
          if (resizeTimer) clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            geometry = calculateGeometry();
            ScrollTrigger.refresh();
          }, 100);
        });
        resizeObserver.observe(wrapper);

        // 4. GSAP horizontal scroll tween with magnetic snapping
        const tween = gsap.to(wrapper, {
          x: () => -geometry.scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1.1,
            start: "top top",
            end: () => `+=${geometry.scrollDistance}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: {
              snapTo: (progress: number) => {
                if (!geometry.snapProgresses.length) return progress;
                let closest = geometry.snapProgresses[0];
                let minDiff = Math.abs(progress - closest);
                for (let i = 1; i < geometry.snapProgresses.length; i++) {
                  const diff = Math.abs(progress - geometry.snapProgresses[i]);
                  if (diff < minDiff) {
                    minDiff = diff;
                    closest = geometry.snapProgresses[i];
                  }
                }
                return closest;
              },
              duration: { min: 0.2, max: 0.5 },
              delay: 0.08,
              ease: "power2.out",
            },
          },
        });

        // Trigger initial refresh once DOM is fully painted
        const refreshTimer = setTimeout(() => {
          geometry = calculateGeometry();
          ScrollTrigger.refresh();
        }, 150);

        return () => {
          if (resizeTimer) clearTimeout(resizeTimer);
          clearTimeout(refreshTimer);
          resizeObserver.disconnect();
          gsap.ticker.remove(updateRaf);
          lenis.destroy();
          tween.kill();
        };
      });

      // Mobile / Tablet: Smooth vertical flow (< 1024px)
      mm.add("(max-width: 1023px)", () => {
        const lenis = new Lenis({
          duration: 0.9,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        const updateRaf = (time: number) => {
          lenis.raf(time * 1000);
        };
        gsap.ticker.add(updateRaf);

        return () => {
          gsap.ticker.remove(updateRaf);
          lenis.destroy();
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [pathname] }
  );

  return (
    <div ref={containerRef} className="lg:overflow-hidden min-h-screen w-full bg-white">
      <div
        ref={wrapperRef}
        className="flex flex-col lg:flex-row lg:flex-nowrap w-full lg:w-fit h-auto lg:h-screen overflow-visible will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalWrapper;
