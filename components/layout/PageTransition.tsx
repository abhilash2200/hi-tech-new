"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const PageTransition = () => {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Disable native browser scroll restoration globally to allow custom smooth transitions
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // 1. Entrance Animation (Slide panels out when pathname changes)
  useEffect(() => {
    const bars = containerRef.current?.querySelectorAll(".transition-bar");
    if (!bars || bars.length === 0) return;

    // Reset window scroll to top immediately behind the cover panels
    window.scrollTo(0, 0);

    // Show transition panel container and block pointer events
    if (containerRef.current) {
      containerRef.current.style.display = "flex";
      containerRef.current.classList.remove("pointer-events-none");
      containerRef.current.classList.add("pointer-events-auto");
    }

    gsap.killTweensOf(bars);
    
    // Animate panels upwards out of the screen
    gsap.fromTo(bars, 
      { y: "0%" },
      {
        y: "-100%",
        duration: 0.75,
        ease: "power4.inOut",
        stagger: 0.05,
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = "none";
            containerRef.current.classList.remove("pointer-events-auto");
            containerRef.current.classList.add("pointer-events-none");
          }
        }
      }
    );
  }, [pathname]);

  // 2. Exit Animation & Global Link Interceptor (Slide panels in before routing)
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement;

      // Find closest anchor tag parent if clicked inside a link
      while (target && target.tagName !== "A") {
        target = target.parentElement as HTMLElement;
      }

      if (!target || target.tagName !== "A") return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Intercept only internal links (start with / and don't open in new tab/download)
      if (
        href.startsWith("/") && 
        !href.startsWith("//") && 
        !target.getAttribute("target") &&
        !target.getAttribute("download")
      ) {
        // Prevent immediate navigation
        e.preventDefault();

        const bars = containerRef.current?.querySelectorAll(".transition-bar");
        if (!bars || bars.length === 0) {
          router.push(href, { scroll: false });
          return;
        }

        // Show container and block pointer events during animation
        if (containerRef.current) {
          containerRef.current.style.display = "flex";
          containerRef.current.classList.remove("pointer-events-none");
          containerRef.current.classList.add("pointer-events-auto");
        }

        gsap.killTweensOf(bars);
        gsap.fromTo(bars,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.65,
            ease: "power4.inOut",
            stagger: 0.04,
            onComplete: () => {
              // Navigate to the route once screen is fully covered
              router.push(href, { scroll: false });
            }
          }
        );
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [router]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[99999] pointer-events-none flex w-screen h-screen overflow-hidden"
    >
      {/* 4 Staggered vertical bars covering the viewport */}
      <div className="transition-bar flex-1 h-screen bg-[#0B0A0F] border-r border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#51EDB2]/10 blur-3xl rounded-full" />
      </div>
      <div className="transition-bar flex-1 h-screen bg-[#0B0A0F] border-r border-white/5 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/5 blur-3xl rounded-full" />
      </div>
      <div className="transition-bar flex-1 h-screen bg-[#0B0A0F] border-r border-white/5 relative">
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#51EDB2]/5 blur-3xl rounded-full" />
      </div>
      <div className="transition-bar flex-1 h-screen bg-[#0B0A0F] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default PageTransition;
