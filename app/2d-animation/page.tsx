"use client";

import React from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   Data: Two flagship IPs + Production Pipeline
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
    id: "chikoo",
    number: "01",
    title: "CHIKOO & BUNTY",
    subtitle: "Nickelodeon India",
    desc: "A vibrant sibling rivalry story produced for Nickelodeon India. Fast-paced humor, relatable storytelling, and expressive 2D character animation set this series apart. Every frame is crafted with classical drawing techniques enhanced by modern digital pipelines.",
    heroImage: "/assets/img/2D_animation/chinku-and-bunty.webp",
    gallery: [
      "/assets/img/2D_animation/Pose_01.png",
      "/assets/img/2D_animation/Pose_02.png",
      "/assets/img/2D_animation/Pose_03.png",
    ],
    tags: ["Comedy", "26 × 11 min", "HD", "Nickelodeon"],
  },
  {
    id: "pino",
    number: "02",
    title: "PINO & SHINOBY",
    subtitle: "Original IP",
    desc: "A magical world where friendship meets high-octane adventure. Expertly crafted with classical 2D techniques and modern digital effects, this series follows four adorable companions through a world of wonder, mischief, and heartfelt lessons.",
    heroImage: "/assets/img/2D_animation/pino-and-shino.webp",
    gallery: [
      "/assets/img/2D_animation/Pino and Shino/PINO.png",
      "/assets/img/2D_animation/Pino and Shino/SHINOBY.png",
      "/assets/img/2D_animation/Pino and Shino/MiaoMiao.png",
      "/assets/img/2D_animation/Pino and Shino/Ninmaru.png",
    ],
    tags: ["Adventure", "52 × 7 min", "HD", "Pre-School"],
  },
];

const TwoDAnimation = () => {
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
              src="/assets/img/2D_animation/chinku-and-bunty.webp"
              alt="2D Animation character sketch"
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
              2D STUDIO
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-[#51EDB2] leading-none uppercase">
                2D ANIMATION
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  CREATIVE HUB
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-base md:text-lg xl:text-xl max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Storytelling in two dimensions. Frame-by-frame artistry for broadcast, OTT, and film.
              </p>
              <p>
                We blend classical drawings with digital technology to produce memorable, character-driven visual narratives.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#51EDB2] pl-3 py-1">
                Explore our flagship series and character portfolios.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between h-48 lg:h-56 mt-auto">
            {/* Circular DISCOVER badge */}
            <div className="absolute right-0 bottom-2 lg:-right-4 z-20">
              <button 
                onClick={() => {
                  const el = document.getElementById("chikoo-section");
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
              <source src="/assets/img/2D_animation/2d.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 z-10" />
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
          SECTION 2: CHIKOO & BUNTY — Showcase (Mint Green Accent #51EDB2)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="chikoo-section" className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FAF9F6] text-black relative overflow-visible lg:overflow-hidden border-l border-gray-100 py-20 lg:py-0">
        {/* Huge faded number */}
        <span className="absolute -top-16 -left-8 font-orbitron text-[45vw] font-black text-black/[0.015] select-none pointer-events-none leading-none z-0 hidden lg:block">
          01
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
          {/* Left — Character art with gradient base */}
          <div className="w-full lg:w-[45%] h-[40vh] lg:h-full relative flex items-end justify-center overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#51EDB2]/5 to-transparent z-0" />
            <div className="relative z-10 w-[85%] h-[85%] lg:h-[80%]">
              <Image
                src={SHOWS[0].heroImage}
                alt={SHOWS[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="w-full lg:w-[55%] h-auto lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-12">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 border border-[#51EDB2]/30 text-[#51EDB2] text-[10px] font-orbitron font-black tracking-[0.2em] uppercase mb-6 lg:mb-8">
                {SHOWS[0].subtitle}
              </div>
              <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4 lg:mb-6 leading-none">
                {SHOWS[0].title.split(" ").map((w, i) =>
                  i === 1 ? <span key={i} className="text-[#51EDB2]"> {w} </span> : <span key={i}>{w}</span>
                )}
              </h2>
              <p className="font-rajdhani text-zinc-700 text-sm sm:text-lg leading-relaxed font-semibold mb-6 lg:mb-8 uppercase tracking-wider">
                {SHOWS[0].desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-10">
                {SHOWS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-orbitron font-bold tracking-widest uppercase px-3 py-1.5 border border-black/15 text-zinc-600 hover:border-[#51EDB2]/40 hover:text-[#51EDB2] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini character gallery */}
              <div className="flex gap-3 items-end">
                {SHOWS[0].gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 bg-white border border-black/10 shadow-sm overflow-hidden group hover:border-[#51EDB2]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image
                      src={img}
                      alt={`Character pose ${i + 1}`}
                      fill
                      sizes="96px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: PINO & SHINOBY — Dark Panel (Pink Accent #EC4899)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#0B0A0F] text-white relative overflow-visible lg:overflow-hidden border-l border-white/5 py-20 lg:py-0">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.006)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.006)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        {/* Huge faded number */}
        <span className="absolute -bottom-20 -right-16 font-orbitron text-[45vw] font-black text-white/[0.015] select-none pointer-events-none leading-none z-0 hidden lg:block">
          02
        </span>

        <div className="relative z-10 flex flex-col lg:flex-row w-full h-full">
          {/* Right — Character art (Order 1 on mobile, 2 on desktop) */}
          <div className="w-full lg:w-[50%] h-[40vh] lg:h-full relative flex items-center justify-center overflow-hidden order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-l from-[#EC4899]/5 to-transparent z-0" />
            <div className="relative z-10 w-[90%] h-[85%] lg:h-[70%]">
              <Image
                src={SHOWS[1].heroImage}
                alt={SHOWS[1].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_15px_40px_rgba(236,72,153,0.1)] transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Left — Content (Order 2 on mobile, 1 on desktop) */}
          <div className="w-full lg:w-[50%] h-auto lg:h-full flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-12 order-2 lg:order-1">
            <div className="max-w-xl">
              <span className="text-[#EC4899] font-orbitron font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
                {SHOWS[1].subtitle}
              </span>
              <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4 lg:mb-6 leading-none">
                {SHOWS[1].title.split(" ").map((w, i) =>
                  i === 1 ? <span key={i} className="text-[#EC4899]"> {w} </span> : <span key={i}>{w}</span>
                )}
              </h2>
              <p className="font-rajdhani text-zinc-300 text-sm sm:text-lg leading-relaxed font-semibold mb-6 lg:mb-8 uppercase tracking-wider">
                {SHOWS[1].desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:gap-3 mb-8 lg:mb-10">
                {SHOWS[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-orbitron font-bold tracking-widest uppercase px-3 py-1.5 border border-white/15 text-zinc-400 hover:border-[#EC4899]/40 hover:text-[#EC4899] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Character roster */}
              <div className="flex gap-3 items-end">
                {SHOWS[1].gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden group hover:border-[#EC4899]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Image
                      src={img}
                      alt={`Character ${i + 1}`}
                      fill
                      sizes="96px"
                      className="object-contain scale-[2.85] origin-center group-hover:scale-[3.1] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TwoDAnimation;
