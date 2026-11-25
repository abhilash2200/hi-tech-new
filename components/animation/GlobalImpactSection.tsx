"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GlobalImpactProps {
  onMoreAboutUs?: () => void;
}

const GlobalImpactSection: React.FC<GlobalImpactProps> = ({ onMoreAboutUs }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%", // Scroll distance to complete the expansion
          pin: true,
          pinSpacing: false, // Allows the NEXT section to scroll/slide right over this pinned section
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Starts slightly inset like the screenshot, expands to occupy 100% full desktop screen
      tl.fromTo(
        cardRef.current,
        {
          width: "92%",
          height: "88vh",
          borderTopLeftRadius: "3.5rem",
          borderTopRightRadius: "3.5rem",
          y: 40,
        },
        {
          width: "100%",
          height: "100vh",
          borderTopLeftRadius: "0rem", // Optional: keep "2.5rem" if you want rounded corners even at full screen
          borderTopRightRadius: "0rem",
          y: 0,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full h-[100svh] bg-transparent flex items-end justify-center overflow-hidden select-none"
    >
      {/* Main White Card Container - Expands to Full Desktop */}
      <div
        ref={cardRef}
        className="w-full h-full bg-white text-[#0B1310] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.45)] flex items-center justify-center"
      >
        {/* Inner Content Wrapper for clean alignment on ultra-wide screens */}
        <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Heading, Quote, CTA */}
          <div className="w-full lg:w-[48%] flex flex-col justify-between space-y-8 sm:space-y-10">
            <div>
              <h2 className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[5.25rem] leading-[0.92] tracking-tight uppercase text-[#141716]">
                GLOBAL
              </h2>
              <span className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[5.25rem] leading-[0.95] tracking-wide uppercase text-transparent [-webkit-text-stroke:1.8px_#141716] mt-1 block">
                IMPACT
              </span>
            </div>

            {/* Quote Block matching screenshot */}
            <div className="relative pl-6 border-l-2 border-[#10D876] max-w-md">
              <span className="absolute -top-3 left-2 text-3xl font-serif font-bold text-[#141716]">
                “
              </span>
              <p className="font-rajdhani text-sm sm:text-base font-bold text-[#1C2824] uppercase tracking-wider leading-relaxed pt-1">
                Animation is not just movement; it&apos;s the soul of the visual
                narrative. We don&apos;t just move pixels; we breathe life into
                them.&rdquo;
              </p>
            </div>

            <div>
              <Link
                href="/about"
                onClick={onMoreAboutUs}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-[#10D876] hover:bg-[#51EDB2] text-[#04120B] font-orbitron font-extrabold text-xs sm:text-sm tracking-[0.12em] uppercase transition-all duration-300 shadow-[0_10px_25px_rgba(16,216,118,0.25)] hover:shadow-[0_12px_30px_rgba(81,237,178,0.45)] hover:-translate-y-0.5 cursor-pointer"
              >
                MORE ABOUT US
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Stats Grid (Clean look matching screenshot) */}
          <div className="w-full lg:w-[52%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16">
            {/* Stat 1 */}
            <div className="flex flex-col space-y-2">
              <span className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[4rem] text-transparent [-webkit-text-stroke:1.5px_#141716] tracking-tight leading-none">
                50+
              </span>
              <span className="font-rajdhani text-sm sm:text-base font-semibold tracking-wide text-[#2A3330]">
                years experience working
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col space-y-2">
              <span className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[4rem] text-transparent [-webkit-text-stroke:1.5px_#141716] tracking-tight leading-none">
                500+
              </span>
              <span className="font-rajdhani text-sm sm:text-base font-semibold tracking-wide text-[#2A3330]">
                games completed
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col space-y-2">
              <span className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[4rem] text-transparent [-webkit-text-stroke:1.5px_#141716] tracking-tight leading-none">
                100+
              </span>
              <span className="font-rajdhani text-sm sm:text-base font-semibold tracking-wide text-[#2A3330]">
                downloads of all-time
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col space-y-2">
              <span className="font-orbitron font-black text-5xl sm:text-6xl lg:text-[4rem] text-transparent [-webkit-text-stroke:1.5px_#141716] tracking-tight leading-none">
                24/7+
              </span>
              <span className="font-rajdhani text-sm sm:text-base font-semibold tracking-wide text-[#2A3330]">
                downloads of all-time
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalImpactSection;