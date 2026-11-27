"use client";

import React from "react";
import Image from "next/image";

// Pixels of scrolling needed to move from one card to the next.
// Smaller = faster card change, larger = slower.
const CARD_STEP = 440;

// How many full laps the cards make before the page moves to the next section.
const LOOPS = 1;

const milestones = [
  {
    year: "2021",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/Transformers-earth-spark.jpeg",
    blobRadius: "54% 46% 42% 58% / 60% 45% 55% 40%",
  },
  {
    year: "2022",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/bad-guys.webp",
    blobRadius: "48% 52% 62% 38% / 52% 58% 42% 48%",
  },
  {
    year: "2023",
    title: "The First Sketch",
    description:
      "It all started in a small creative studio with a handful of passionate storytellers, artists and animators. Our dream was simple – to bring ideas, characters and emotions to life through animation.",
    image: "/images/Bad-Guys-Breaking-In.jpeg",
    blobRadius: "60% 40% 48% 52% / 44% 56% 44% 56%",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description:
      "Scaling into international storytelling and full-length animated productions with cutting-edge pipelines and creative direction.",
    image: "/images/Transformers-earth-spark.jpeg",
    blobRadius: "45% 55% 40% 60% / 55% 42% 58% 45%",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Scaling into international storytelling and full-length animated productions with cutting-edge pipelines and creative direction.",
    image: "/images/Transformers-Final-Season.jpeg",
    blobRadius: "45% 55% 40% 60% / 55% 42% 58% 45%",
  },
  {
    year: "2026",
    title: "Global Expansion",
    description:
      "Scaling into international storytelling and full-length animated productions with cutting-edge pipelines and creative direction.",
    image: "/images/bad-guys.webp",
    blobRadius: "45% 55% 40% 60% / 55% 42% 58% 45%",
  },
  {
    year: "2027",
    title: "Global Expansion",
    description:
      "Scaling into international storytelling and full-length animated productions with cutting-edge pipelines and creative direction.",
    image: "/images/Bad-Guys-Breaking-In.jpeg",
    blobRadius: "45% 55% 40% 60% / 55% 42% 58% 45%",
  },
];

const StoryTimelineSection: React.FC = () => {
  return (
    <section
      data-story-section
      style={
        {
          // extra scroll length = full loop(s) through all cards
          "--story-scroll": `${milestones.length * CARD_STEP * LOOPS}px`,
        } as React.CSSProperties
      }
      className="
        horizontal-section
        relative
        w-full min-w-full lg:min-w-0
        lg:shrink-0
        lg:w-[calc(100vw_+_var(--story-scroll))]
        h-auto lg:h-screen
        min-h-screen lg:min-h-0
        overflow-hidden
        bg-[#fff]
        text-[#18181B]
        select-none
      "
    >
      {/* PINNED LAYER – HorizontalWrapper keeps this fixed on screen (desktop) */}
      <div
        data-story-pin
        className="
          relative
          lg:absolute lg:top-0 lg:left-0
          lg:w-screen lg:h-screen
        "
      >
        {/* BACKGROUND PATTERN */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none bg-repeat"
          style={{
            backgroundImage: "url('/images/sketch-bg-pattern.png')",
            backgroundSize: "500px",
          }}
        />

        {/* HEADER */}
        <div
          data-story-header
          className="
            relative lg:absolute
            lg:top-28 lg:left-20
            z-30
            px-6 pt-10 pb-6
            sm:px-10
            lg:px-0 lg:pt-0 lg:pb-0
            max-w-md sm:max-w-lg lg:max-w-2xl
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
            type="button"
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
              <svg
                className="w-3 h-3 fill-current ml-0.5"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>

            <span>Watch Our Journey</span>
          </button>
        </div>

        {/* CARD STAGE – full width; the curve starts low on the left so cards never touch the header */}
        <div
          data-story-stage
          data-step={CARD_STEP}
          className="
            relative z-10
            flex flex-col items-center gap-16
            px-6 sm:px-10 pb-16
            lg:block lg:p-0
            lg:absolute lg:inset-0
            lg:overflow-hidden
          "
        >
          {/* ORANGE CURVE (path is generated in HorizontalWrapper) */}
          <svg
            className="
              hidden lg:block
              absolute inset-0
              w-full h-full
              pointer-events-none
              z-10
            "
            fill="none"
          >
            <path
              data-story-curve
              d=""
              stroke="#FF6B00"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* MILESTONE CARDS */}
          {milestones.map((item) => (
            <div
              key={item.year}
              className="
                story-snap-card
                relative z-20
                w-full sm:w-[340px] lg:w-[370px]
                max-w-[370px]
                shrink-0
                flex flex-col items-start
                lg:absolute lg:left-0 lg:top-0
                lg:opacity-0
                will-change-transform
              "
            >
              {/* IMAGE */}
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

              {/* TIMELINE DOT (sits on the orange curve) */}
              <div
                data-story-dot
                className="
                  w-4 h-4 rounded-full
                  bg-[#D4D4D8]
                  border-[3px] border-white
                  shadow-sm mt-3
                  ml-24 sm:ml-28
                "
              />

              {/* CARD CONTENT */}
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

                  <h3 className="font-bold text-base sm:text-lg text-[#18181B]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTimelineSection;