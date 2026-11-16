"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

interface AnimationHeroProps {
  onExploreWork?: () => void;
}

const HERO_LINE_ONE = "WE MAKE";

const AnimationHero: React.FC<AnimationHeroProps> = ({ onExploreWork }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = () => {
    if (onExploreWork) {
      onExploreWork();
      return;
    }
    const el = document.getElementById("specialties-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // GSAP Sequential Timeline Animation on Mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Animate "WE MAKE" characters one by one
      tl.fromTo(
        ".char-3d",
        { opacity: 0, y: 40, rotateX: -85, transformPerspective: 900 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.04, duration: 0.8 }
      )
        // 2. Animate Video Pill + ANIMATION title row
        .fromTo(
          ".hero-row-2",
          { opacity: 0, y: 30, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.4"
        )
        // 3. Animate Subtitle Paragraph
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        // 4. Animate CTA Button
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.4"
        )
        // 5. Animate Bottom Right Cards
        .fromTo(
          ".hero-cards-container",
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative isolate w-full min-h-[100svh] overflow-hidden bg-[#060B09] text-white flex flex-col justify-between select-none"
    >
      {/* Custom Keyframe & Skewed 3D Styles */}
      <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes spinBorder {
          to {
            --border-angle: 360deg;
          }
        }

        @keyframes outline3DFloat {
          0%,
          100% {
            transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateZ(0px);
            filter: drop-shadow(0 6px 0 rgba(16, 216, 118, 0.16))
              drop-shadow(0 0 16px rgba(81, 237, 178, 0.2));
          }
          50% {
            transform: perspective(1000px) rotateY(5deg) rotateX(-2deg) translateZ(14px);
            filter: drop-shadow(-4px 8px 0 rgba(16, 216, 118, 0.28))
              drop-shadow(0 0 28px rgba(81, 237, 178, 0.42));
          }
        }

        .perspective-stage {
          perspective: 1100px;
          transform-style: preserve-3d;
        }

        .char-3d {
          display: inline-block;
          opacity: 0;
          transform-origin: bottom center;
          text-shadow: 0 2px 0 rgba(16, 216, 118, 0.18),
            0 10px 25px rgba(0, 0, 0, 0.65);
        }

        .hero-row-2,
        .hero-subtitle,
        .hero-cta,
        .hero-cards-container {
          opacity: 0;
        }

        .outline-title-3d {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.82);
          transform-style: preserve-3d;
          animation: outline3DFloat 5.5s ease-in-out infinite;
          transition: -webkit-text-stroke 0.3s ease;
        }

        .outline-title-3d:hover {
          -webkit-text-stroke: 2px #51edb2;
        }

        @media (min-width: 768px) {
          .outline-title-3d {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.85);
          }
        }

        /* Skewed Transparent Card Styling */
        .card-skewed-shell {
          background: transparent;
          transform: skewX(-8deg);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .card-skewed-shell:hover {
          transform: skewX(-8deg) translateY(-5px);
          box-shadow: 0 20px 40px -10px rgba(16, 216, 118, 0.28);
        }

        /* Counter-skew content so text & icons remain straight */
        .card-content-straight {
          transform: skewX(8deg);
        }

        .card-3d-border {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1.5px;
          background: conic-gradient(
            from var(--border-angle),
            rgba(16, 216, 118, 0.95) 0%,
            rgba(81, 237, 178, 0.25) 25%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(16, 216, 118, 0.9) 75%,
            rgba(81, 237, 178, 0.95) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spinBorder 4.5s linear infinite;
          pointer-events: none;
        }

        .card-skewed-shell:hover .card-3d-border {
          padding: 2px;
          animation-duration: 2s;
        }
      `}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FULL-SCREEN MUTED BACKGROUND VIDEO
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/assets/img/2D_animation/2d.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040807]/95 via-[#060C0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040807]/90 via-transparent to-[#040807]/60" />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MAIN HERO CONTENT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-28 sm:pt-32 lg:pt-0 my-auto flex flex-col justify-center">
        <div className="max-w-5xl perspective-stage">
          {/* Line 1: 3D Per-Character Flip-In "WE MAKE" */}
          <h1
            aria-label="WE MAKE"
            className="font-orbitron font-black text-5xl sm:text-7xl md:text-8xl xl:text-[6.5rem] leading-[0.95] tracking-tight uppercase text-white flex flex-wrap"
          >
            {HERO_LINE_ONE.split("").map((char, idx) => (
              <span key={idx} className="char-3d">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* Line 2: INLINE PILL VIDEO + OUTLINED 3D "ANIMATION" SIDE-BY-SIDE */}
          <div className="hero-row-2 mt-3 sm:mt-5 flex flex-nowrap items-center gap-3 sm:gap-6 md:gap-8">
            {/* Short Muted Loop Video Pill */}
            <div className="relative w-28 h-14 sm:w-44 sm:h-20 md:w-56 md:h-24 rounded-[30px] overflow-hidden border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.75)] shrink-0 group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              >
                <source src="/assets/img/2D_animation/2d.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-[#51EDB2]/15 pointer-events-none" />
            </div>

            {/* Outlined Stroked 3D Text Locked Beside Video */}
            <span className="outline-title-3d font-orbitron font-black text-[clamp(2.15rem,6.4vw,6.2rem)] leading-[0.95] tracking-wide uppercase whitespace-nowrap">
              ANIMATION
            </span>
          </div>

          {/* Subtitle Paragraph */}
          <div className="hero-subtitle mt-7 sm:mt-9 max-w-xl space-y-1.5 text-white/80 font-rajdhani text-sm sm:text-base md:text-lg font-medium leading-relaxed tracking-wide">
            <p>Let&apos;s build the future of decentralized entertainment together.</p>
            <p>
              We are a self sustaining decentralized global community of Dreamers,
              Gamers, Artists, Storytellers, Musicians, Advertisers, Investors and
              Technical Creators.
            </p>
          </div>

          {/* CTA Button */}
          <div className="hero-cta mt-8 sm:mt-10">
            <button
              type="button"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-9 sm:py-4 rounded-lg bg-[#10D876] hover:bg-[#51EDB2] text-[#04120B] font-orbitron font-extrabold text-xs sm:text-sm tracking-[0.12em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(16,216,118,0.35)] hover:shadow-[0_0_38px_rgba(81,237,178,0.65)] hover:-translate-y-0.5 cursor-pointer"
            >
              EXPLORE OUR WORK
            </button>
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM-RIGHT SKEWED CHARACTER CARDS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hero-cards-container relative z-20 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pb-8 sm:pb-10 pt-20 lg:pt-0 flex flex-col sm:flex-row items-stretch sm:items-end justify-end gap-6 sm:gap-8">
        {/* Card 1: 2D Motion */}
        <Link
          href="/2d-animation"
          className="card-skewed-shell group relative flex items-center justify-between w-full sm:w-[320px] md:w-[340px] h-24 sm:h-22 rounded-2xl bg-transparent backdrop-blur-[2px] px-6"
        >
          {/* Animated Rotating Conic Border */}
          <span aria-hidden="true" className="card-3d-border" />

          {/* Character Bursting Out of Top-Left */}
          <div className="absolute -top-14 left-4 w-24 h-32 sm:w-28 sm:h-36 pointer-events-none z-30">
            <Image
              src="/assets/home/girl.webp"
              alt="2D Motion Character"
              fill
              sizes="112px"
              className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_22px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Straightened Content Inside Skewed Shell */}
          <div className="card-content-straight flex items-center justify-between w-full pl-24 sm:pl-28">
            <div className="flex flex-col">
              <span className="font-orbitron text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#10D876] uppercase mb-0.5">
                EXPLORE
              </span>
              <h3 className="font-orbitron font-black text-base sm:text-lg text-white tracking-wider uppercase leading-tight">
                2D MOTION
              </h3>
            </div>

            <span className="w-10 h-10 rounded-full border border-white/25 bg-transparent flex items-center justify-center text-white/85 group-hover:border-[#51EDB2] group-hover:bg-[#51EDB2] group-hover:text-black transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Card 2: 3D World */}
        <Link
          href="/3d-animation"
          className="card-skewed-shell group relative flex items-center justify-between w-full sm:w-[320px] md:w-[340px] h-24 sm:h-22 rounded-2xl bg-transparent backdrop-blur-[2px] px-6"
        >
          {/* Animated Rotating Conic Border */}
          <span aria-hidden="true" className="card-3d-border" />

          {/* Character Bursting Out of Top-Left */}
          <div className="absolute -top-14 left-4 w-24 h-32 sm:w-28 sm:h-36 pointer-events-none z-30">
            <Image
              src="/assets/home/boy.webp"
              alt="3D Animation Character"
              fill
              sizes="112px"
              className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_12px_22px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Straightened Content Inside Skewed Shell */}
          <div className="card-content-straight flex items-center justify-between w-full pl-24 sm:pl-28">
            <div className="flex flex-col">
              <span className="font-orbitron text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#10D876] uppercase mb-0.5">
                EXPLORE
              </span>
              <h3 className="font-orbitron font-black text-base sm:text-lg text-white tracking-wider uppercase leading-tight">
                3D WORLD
              </h3>
            </div>

            <span className="w-10 h-10 rounded-full border border-white/25 bg-transparent flex items-center justify-center text-white/85 group-hover:border-[#51EDB2] group-hover:bg-[#51EDB2] group-hover:text-black transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AnimationHero;