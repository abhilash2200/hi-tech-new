"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const milestones = [
  {
    year: "2021",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/story-2021.jpg",
    offset: "lg:mt-44 lg:sm:mt-52",
    blobRadius: "54% 46% 42% 58% / 60% 45% 55% 40%",
  },
  {
    year: "2022",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/story-2022.jpg",
    offset: "lg:mt-16 lg:sm:mt-20",
    blobRadius: "48% 52% 62% 38% / 52% 58% 42% 48%",
  },
  {
    year: "2023",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/story-2023.jpg",
    offset: "lg:-mt-10 lg:sm:-mt-12",
    blobRadius: "60% 40% 48% 52% / 44% 56% 44% 56%",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Scaling into international storytelling and full-length animated productions with cutting-edge pipelines and creative direction.",
    image: "/images/story-2024.jpg",
    offset: "lg:-mt-32 lg:sm:-mt-36",
    blobRadius: "45% 55% 40% 60% / 55% 42% 58% 45%",
  },
];

const StoryTimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleMap, setVisibleMap] = useState<Record<number, boolean>>({
    0: true,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || cards.length === 0) return;

  const updateCardsOnScroll = () => {
  const isDesktop = window.innerWidth >= 1024;
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  const sectionRect = section.getBoundingClientRect();

  const scrolledPastEnd = isDesktop
    ? sectionRect.right <= vw - 40
    : sectionRect.bottom <= vh - 40;

  setVisibleMap((prev) => {
    const next: Record<number, boolean> = {};
    let changed = false;

    cards.forEach((card, idx) => {
      const rect = card.getBoundingClientRect();
      let shouldShow = false;

      if (idx === 0) {
        shouldShow = true;
      } else if (idx === cards.length - 1) {
        shouldShow = scrolledPastEnd || (
          isDesktop
            ? rect.left <= vw * 0.92 && rect.right >= 80
            : rect.top <= vh * 0.8 && rect.bottom >= 60
        );
      } else {
        shouldShow = isDesktop
          ? rect.left <= vw * 0.75 && rect.right >= 80
          : rect.top <= vh * 0.8 && rect.bottom >= 60;
      }

      next[idx] = shouldShow;

      if (prev[idx] !== shouldShow) {
        changed = true;
      }
    });

    return changed ? next : prev;
  });
};

    updateCardsOnScroll();
    window.addEventListener("scroll", updateCardsOnScroll, { passive: true });
    window.addEventListener("resize", updateCardsOnScroll);

    const rafId = requestAnimationFrame(updateCardsOnScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", updateCardsOnScroll);
      window.removeEventListener("resize", updateCardsOnScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        horizontal-section shrink-0
        w-full lg:w-max lg:min-w-full
        min-h-screen lg:h-screen
        relative
        overflow-hidden
        bg-[#FAFAFA]
        text-[#18181B]
        select-none
      "
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-repeat"
        style={{
          backgroundImage: "url('/images/sketch-bg-pattern.png')",
          backgroundSize: "500px",
        }}
      />

      {/* Header */}
      <div
        className="
          relative lg:absolute
          top-0 lg:top-10 sm:lg:top-14
          left-0 lg:left-14 lg:left-20
          z-30
          px-6 pt-10 pb-6
          sm:px-10 lg:px-0 lg:pt-0
          max-w-md sm:max-w-lg
          pointer-events-auto
        "
      >
        <h2
          className="
            font-orbitron font-black
            text-4xl sm:text-6xl lg:text-[4.25rem]
            leading-none tracking-tight uppercase
            flex items-center gap-3 sm:gap-4
          "
        >
          <span className="text-[#1A1A1A]">OUR</span>

          <span
            className="
              text-transparent
              [-webkit-text-stroke:1.5px_#1A1A1A]
              sm:[-webkit-text-stroke:2px_#1A1A1A]
            "
          >
            STORY
          </span>
        </h2>

        <p
          className="
            mt-4 text-gray-600
            font-rajdhani text-sm sm:text-base
            leading-relaxed
          "
        >
          From a small creative setup to a full-fledged animation production
          house, our journey has been driven by one belief – the power of
          storytelling through animation.
        </p>

        <button
          className="
            mt-5 inline-flex items-center gap-2.5
            pl-2 pr-5 py-1.5 rounded-full
            bg-[#121A14]
            border border-[#10D876]/40
            text-white text-xs sm:text-sm font-medium
            hover:border-[#10D876]
            transition-all duration-300 shadow-md group
          "
        >
          <span
            className="
              w-6 h-6 rounded-full
              bg-[#10D876]
              flex items-center justify-center
              text-[#04120B]
              group-hover:scale-105 transition-transform
            "
          >
            <svg className="w-3 h-3 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          <span>Watch Our Journey</span>
        </button>
      </div>

      {/* Horizontal Timeline Track */}
      <div
        className="
          relative
          w-full lg:w-max
          min-h-0 lg:h-full
          flex flex-col lg:flex-row
          items-center lg:items-center
          px-6 sm:px-10
          lg:pl-20 lg:pr-32
          gap-16 lg:gap-36
          pb-16 lg:pb-0
        "
      >
        {/* Orange Curve - Desktop */}
        <svg
          className="
            hidden lg:block
            absolute inset-0
            w-full h-full
            pointer-events-none z-10
          "
          viewBox="0 0 2400 900"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M -50 760 C 120 620, 260 660, 420 630 C 580 600, 680 480, 860 510 C 1040 540, 1140 510, 1280 430 C 1440 330, 1620 340, 1780 410 C 1940 480, 2080 390, 2240 280 C 2320 230, 2380 220, 2460 210"
            stroke="#FF6B00"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Cards */}
        {milestones.map((item, index) => {
          const isVisible = true;

          return (
            <div
              key={item.year}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`
                story-snap-card
                relative z-20
                w-full sm:w-[340px] lg:w-[370px]
                max-w-[370px]
                shrink-0
                flex flex-col items-start
                ${item.offset}
                ${item.offset}
                lg:scale-100
              `}
            >
              {/* Image */}
              <div
                className="
                  relative
                  w-[220px] h-[180px]
                  sm:w-[270px] sm:h-[220px]
                  overflow-hidden shadow-xl
                  bg-slate-900 group
                "
                style={{ borderRadius: item.blobRadius }}
              >
                <Image
                  src={item.image}
                  alt={`${item.year} - ${item.title}`}
                  fill
                  sizes="(max-width: 640px) 220px, 370px"
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform duration-700
                  "
                />
              </div>

              {/* Timeline Dot */}
              <div
                className="
                  w-4 h-4 rounded-full
                  bg-[#D4D4D8]
                  border-[3px] border-white
                  shadow-sm mt-3
                  ml-24 sm:ml-28
                "
              />

              {/* Content */}
              <div className="mt-3 pl-4 sm:pl-8 space-y-2 w-full">
                <span
                  className="
                    font-orbitron font-black
                    text-4xl sm:text-5xl
                    text-transparent
                    [-webkit-text-stroke:1.5px_#52525B]
                    block leading-none
                  "
                >
                  {item.year}
                </span>

                <div className="flex items-center gap-2 pt-1">
                  <span
                    className="
                      w-[3px] h-4
                      bg-[#FF6B00]
                      rounded-full inline-block
                    "
                  />

                  <h3
                    className="
                      font-bold text-base sm:text-lg
                      text-[#18181B]
                    "
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className="
                    text-gray-500
                    text-xs sm:text-sm
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StoryTimelineSection;