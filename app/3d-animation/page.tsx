"use client";

import React from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   Data: Six 3D Animation Projects
   ────────────────────────────────────────────── */

interface ShowData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  heroImage: string;
  gallery: string[];
  tags: string[];
}

const SHOWS: ShowData[] = [
  {
    id: "abhimanyu",
    number: "01",
    title: "ABHIMANYU",
    subtitle: "Nickelodeon India",
    desc: "A sci-fi comedy following the hilarious misadventures of an alien family stranded on Earth. Produced for Nickelodeon India, Abhimanyu pushes the boundaries of 3D character animation with expressive rigs, cinematic lighting, and detailed world-building.",
    heroImage: "/assets/img/3D_animation/abhimanyu/abhimanyu.webp",
    gallery: [
      "/assets/img/3D_animation/abhimanyu/Abhimanyu_Alien_Pose.png",
      "/assets/img/3D_animation/abhimanyu/Arya_Alien_Pose.png",
      "/assets/img/3D_animation/abhimanyu/Kookie_Alien_Pose.png",
    ],
    tags: ["Sci-Fi Comedy", "52 × 11 min", "HD", "Nickelodeon"],
  },
  {
    id: "ekans",
    number: "02",
    title: "EKANS",
    subtitle: "Cartoon Network India",
    desc: "The tech-savvy hero with mystical gemstone powers. A groundbreaking 3D series produced for Cartoon Network India featuring high-energy action sequences, dynamic camera work, and state-of-the-art character animation pipelines.",
    heroImage: "/assets/img/3D_animation/ekans/ekans.webp",
    gallery: [
      "/assets/img/3D_animation/ekans/Chiku_Pose_v01.0001.png",
      "/assets/img/3D_animation/ekans/Ekans_Static_Pose_v01.0001.png",
    ],
    tags: ["Action", "26 × 22 min", "HD", "Cartoon Network"],
  },
  {
    id: "shiva",
    number: "03",
    title: "SHIVA",
    subtitle: "Voot Kids",
    desc: "Experience the legendary story of Shiva in breathtaking 3D detail. A flagship production pushing the boundaries of Indian animation with photorealistic environments, fluid motion capture, and cinematic storytelling.",
    heroImage: "/assets/img/3D_animation/shiva/shiva.webp",
    gallery: [
      "/assets/img/3D_animation/shiva/Shiva_Pose_01_v01.0001.png",
      "/assets/img/3D_animation/shiva/Shiva_Pose _02_v01.0001.png",
      "/assets/img/3D_animation/shiva/Reva_Pose_01_v01.0001.png",
    ],
    tags: ["Adventure", "52 × 11 min", "HD", "Voot"],
  },
  {
    id: "fafa",
    number: "04",
    title: "FAFA",
    subtitle: "Original IP",
    desc: "A heartwarming pre-school series featuring adorable characters in a vibrant, colorful 3D world. Fafa combines educational content with engaging storytelling, brought to life through charming character design and playful animation.",
    heroImage: "/assets/img/3D_animation/fafa/fafa.webp",
    gallery: [
      "/assets/img/3D_animation/fafa/Fafa_ch_v01.0010.png",
      "/assets/img/3D_animation/fafa/Fafa_ch_v02.png",
    ],
    tags: ["Pre-School", "52 × 7 min", "HD", "Original"],
  },
  {
    id: "tarak-mehta",
    number: "05",
    title: "TARAK MEHTA",
    subtitle: "Sony SAB",
    desc: "India's beloved live-action sitcom reimagined in stunning 3D animation. Every character is meticulously modeled to capture the charm of the original series, bringing Gokuldham Society to life in a whole new dimension.",
    heroImage: "/assets/img/3D_animation/tarak-mehta/tarak-mehta.webp",
    gallery: [
      "/assets/img/3D_animation/tarak-mehta/Tarak_Mehta_02_v01.0001.png",
      "/assets/img/3D_animation/tarak-mehta/Tarak_Mehta_03_v01.0001.png",
    ],
    tags: ["Comedy", "52 × 11 min", "HD", "Sony SAB"],
  },
  {
    id: "pandavas",
    number: "06",
    title: "PANDAVAS",
    subtitle: "Mythological Epic",
    desc: "The timeless Mahabharata epic brought to life through cutting-edge 3D animation. Grand battle sequences, intricate costume design, and epic environments make this a visual spectacle unlike anything in Indian animation history.",
    heroImage: "",
    gallery: [],
    tags: ["Mythology", "Feature Film", "4K", "Epic"],
  },
];

const ThreeDAnimation = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro (Career Page Style)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F]">
        
        {/* LEFT COLUMN: HERO CONTENT CARD (Match Career page Hero panel) */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#51EDB2]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

          {/* Character Illustration sketch */}
          <div className="absolute bottom-0 left-0 w-[60%] lg:w-[65%] max-w-[280px] h-[45%] pointer-events-none select-none opacity-20 transition-transform duration-500 hover:scale-105 origin-bottom z-0">
            <Image
              src="/assets/img/3D_animation/ekans/ekans.webp"
              alt="3D Animation character sketch"
              fill
              sizes="(max-width: 1024px) 60vw, 280px"
              priority
              className="object-contain object-bottom filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            />
          </div>

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-[#51EDB2] flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#51EDB2] uppercase border-b border-[#51EDB2]/20 py-0.5">
              3D WORLD
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-[#51EDB2] leading-none uppercase">
                3D ANIMATION
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  CREATIVE HUB
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-base md:text-lg xl:text-xl max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Exploring new dimensions. High-end CGI production for broadcast, OTT, and film.
              </p>
              <p>
                We build rich virtual assets and advanced character performance using state-of-the-art pipelines.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#51EDB2] pl-3 py-1">
                Enter a world of depth, physics, and character emotion.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between h-48 lg:h-56 mt-auto">
            {/* Circular DISCOVER badge */}
            <div className="absolute right-0 bottom-2 lg:-right-4 z-20">
              <button 
                onClick={() => {
                  const el = document.getElementById("show-section-abhimanyu");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative w-24 h-24 rounded-full border border-pink-500 bg-[#0B0A0F] text-pink-500 hover:text-white hover:bg-pink-500 hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-pink-500/40 group-hover:border-white/40 animate-[spin_25s_linear_infinite]" />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
                    DISCOVER
                  </span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 rotate-45 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PREVIEW PANEL (Autoplaying video background) */}
        <div className="w-full lg:w-[60vw] h-[50vh] lg:h-full relative overflow-hidden bg-black flex-grow shrink-0">
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/img/3D_animation/abhimanyu/Abhimanyu_Movie_Promo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/55 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-20" />
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(81,237,178,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(81,237,178,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-20 pointer-events-none" />

          {/* Top-right tag */}
          <div className="absolute top-8 right-8 z-30 flex items-center gap-6">
            <div className="w-16 h-px bg-white/15 hidden sm:block" />
            <span className="text-[10px] font-orbitron font-bold tracking-[0.2em] uppercase text-white/40">Studio 2025</span>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-12 right-12 flex items-center gap-4 text-gray-400 z-30 animate-pulse">
            <span className="text-[10px] font-orbitron font-bold tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-16 h-px bg-gray-600" />
          </div>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECT SECTIONS — Alternating light/dark and colors
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {SHOWS.map((show, index) => {
        const isDark = index % 2 !== 0;
        const isReversed = index % 2 !== 0;
        const hasGallery = show.gallery.length > 0;
        const hasHeroImage = show.heroImage !== "";
        
        // Alternating visual accents: green (#51EDB2) on light, pink (#EC4899) on dark
        const accentTextClass = isDark ? "text-[#EC4899]" : "text-[#51EDB2]";
        const accentBorderClass = isDark ? "border-[#EC4899]/30 text-[#EC4899]" : "border-[#51EDB2]/30 text-[#51EDB2]";
        const accentHoverBorderClass = isDark ? "hover:border-[#EC4899]/40 hover:text-[#EC4899]" : "hover:border-[#51EDB2]/40 hover:text-[#51EDB2]";
        const bgGradientClass = isDark ? "from-[#EC4899]/5" : "from-[#51EDB2]/5";

        return (
          <section
            key={show.id}
            id={`show-section-${show.id}`}
            className={`horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative overflow-visible lg:overflow-hidden border-l py-20 lg:py-0 ${
              isDark
                ? "bg-[#0B0A0F] text-white border-white/5"
                : "bg-[#FAF9F6] text-black border-gray-100"
            }`}
          >
            {/* Subtle grid for dark sections */}
            {isDark && (
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            )}

            {/* Huge faded number */}
            <span
              className={`absolute font-orbitron text-[45vw] font-black select-none pointer-events-none leading-none z-0 hidden lg:block ${
                isDark
                  ? "-bottom-20 -right-16 text-white/[0.015]"
                  : "-top-16 -left-8 text-black/[0.015]"
              }`}
            >
              {show.number}
            </span>

            <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
              {/* Character Art Side */}
              <div
                className={`w-full lg:w-[45%] h-[40vh] lg:h-full relative flex items-end justify-center overflow-hidden ${
                  isReversed ? "order-1 lg:order-2" : ""
                }`}
              >
                {hasHeroImage && (
                  <>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1/2 z-0 bg-gradient-to-t ${bgGradientClass} to-transparent`}
                    />
                    <div className="relative z-10 w-[85%] h-[85%] lg:h-[80%]">
                      <Image
                        src={show.heroImage}
                        alt={show.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.03]"
                      />
                    </div>
                  </>
                )}
                {!hasHeroImage && (
                  <div className="flex items-center justify-center w-full h-full min-h-[200px] lg:min-h-fit">
                    <div className="text-center">
                      <span className={`font-orbitron text-6xl lg:text-8xl font-black block mb-2 lg:mb-4 ${isDark ? 'text-[#EC4899]/10' : 'text-[#51EDB2]/10'}`}>{show.number}</span>
                      <span className={`font-orbitron text-[10px] tracking-widest uppercase ${isDark ? 'text-white/20' : 'text-black/20'}`}>Coming Soon</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div
                className={`w-full lg:w-[55%] h-auto lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-12 ${
                  isReversed ? "order-2 lg:order-1" : ""
                }`}
              >
                <div className="max-w-xl">
                  <div
                    className={`inline-block px-4 py-1.5 border ${accentBorderClass} text-[10px] font-orbitron font-black tracking-widest uppercase mb-6 lg:mb-8`}
                  >
                    {show.subtitle}
                  </div>
                  <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4 lg:mb-6 leading-none">
                    {show.title.split(" ").map((w, i) =>
                      i === 0 ? (
                        <span key={i}>{w} </span>
                      ) : (
                        <span key={i} className={accentTextClass}>
                          {w}{" "}
                        </span>
                      )
                    )}
                  </h2>
                  <p
                    className={`font-rajdhani text-sm sm:text-lg leading-relaxed font-semibold mb-6 lg:mb-8 uppercase tracking-wider ${
                      isDark ? "text-white/70" : "text-zinc-700"
                    }`}
                  >
                    {show.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-10">
                    {show.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-orbitron font-bold tracking-widest uppercase px-3 py-1.5 border transition-colors ${
                          isDark
                            ? `border-white/10 text-gray-500 ${accentHoverBorderClass}`
                            : `border-black/10 text-gray-500 ${accentHoverBorderClass}`
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Character Roster / Gallery */}
                  {hasGallery && (
                    <div className="flex gap-3 items-end">
                      {show.gallery.map((img, i) => (
                        <div
                          key={i}
                          className={`relative w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 border overflow-hidden group transition-all duration-300 hover:-translate-y-1 ${
                            isDark
                              ? `bg-[#0A0A0B] border-white/5 hover:border-[#EC4899]/30`
                              : `bg-white border-black/5 hover:border-[#51EDB2]/30`
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`Character ${i + 1}`}
                            fill
                            sizes="96px"
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ThreeDAnimation;
