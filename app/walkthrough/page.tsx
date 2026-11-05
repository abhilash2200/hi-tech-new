"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────
   Data: 8 Walkthrough Projects
   ────────────────────────────────────────────── */

interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  heroImage: string;
  gallery: string[];
  imageCount: number;
  tags: string[];
  video?: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: "new-town",
    number: "01",
    title: "NEW TOWN",
    subtitle: "Residential Complex",
    desc: "A premium residential development featuring luxurious amenities, landscaped gardens, and modern architecture. Our 3D walkthrough captures every detail — from infinity pools to curated green spaces — in photorealistic quality.",
    heroImage: "/assets/img/walkthrough/new-town/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/new-town/${i + 1}.webp`),
    imageCount: 14,
    tags: ["Residential", "14 Renders", "Photorealistic", "Exterior"],
  },
  {
    id: "science-city",
    number: "02",
    title: "SCIENCE CITY",
    subtitle: "Exhibition & Museum",
    desc: "An immersive 3D tour of the Science City exhibition center. Detailed interior and exterior visualization showcasing futuristic exhibition halls, interactive zones, and sprawling campus landscapes.",
    heroImage: "/assets/img/walkthrough/science-city/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/science-city/${i + 1}.webp`),
    imageCount: 21,
    tags: ["Exhibition", "21 Renders", "Interior + Exterior", "Immersive"],
    video: "/assets/img/walkthrough/science-city/NUMA_TEASER.mp4",
  },
  {
    id: "kalikapur",
    number: "03",
    title: "KALIKAPUR",
    subtitle: "Residential Township",
    desc: "A sprawling residential township with children's play areas, lush landscaping, and modern architectural facades. Every render is crafted with meticulous attention to material textures, lighting, and environmental detail.",
    heroImage: "/assets/img/walkthrough/kalikapur/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/kalikapur/${i + 1}.webp`),
    imageCount: 17,
    tags: ["Township", "17 Renders", "Landscape", "HD"],
  },
  {
    id: "quintessa",
    number: "04",
    title: "QUINTESSA",
    subtitle: "Luxury Residences",
    desc: "An ultra-premium luxury residential project featuring elegant interiors, grand lobbies, and meticulously designed common areas. Our cinematic walkthrough video brings the entire experience to life.",
    heroImage: "",
    gallery: [],
    imageCount: 0,
    tags: ["Luxury", "Cinematic Video", "4K", "Premium"],
    video: "/assets/img/walkthrough/quintessa/quintessa.mp4",
  },
  {
    id: "sector-v",
    number: "05",
    title: "SECTOR V",
    subtitle: "Corporate Tech Park",
    desc: "A state-of-the-art corporate tech park with modern glass facades, collaborative workspaces, and premium office environments. The walkthrough showcases both the grandeur of the campus and the precision of interior design.",
    heroImage: "/assets/img/walkthrough/sector-v/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/sector-v/${i + 1}.webp`),
    imageCount: 8,
    tags: ["Corporate", "8 Renders", "Glass Facade", "Modern"],
  },
  {
    id: "balmoral",
    number: "06",
    title: "BALMORAL",
    subtitle: "Premium Residences",
    desc: "A distinguished residential development with classical design elements and modern amenities. Our visualization captures ornate lobby details, terrace gardens, and sweeping architectural views with cinematic lighting.",
    heroImage: "/assets/img/walkthrough/balmoral/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/balmoral/${i + 1}.webp`),
    imageCount: 30,
    tags: ["Residential", "30 Renders", "Classical", "Premium"],
  },
  {
    id: "kona",
    number: "07",
    title: "KONA",
    subtitle: "Logistics Hub",
    desc: "A large-scale logistics and warehousing facility visualized with precision. Aerial views, interior warehouse layouts, and infrastructure detailing showcase the project's industrial scale and functional design.",
    heroImage: "/assets/img/walkthrough/kona/1.webp",
    gallery: Array.from({ length: 6 }, (_, i) => `/assets/img/walkthrough/kona/${i + 1}.webp`),
    imageCount: 13,
    tags: ["Industrial", "13 Renders", "Aerial", "Infrastructure"],
    video: "/assets/img/walkthrough/kona/Kona Logistic New Lineup_V03.mp4",
  },
  {
    id: "metiapuruj",
    number: "08",
    title: "METIAPURUJ",
    subtitle: "Beach Resort",
    desc: "A serene beachside resort project featuring ocean-view villas, infinity pools, and tropical landscaping. Our walkthrough transports viewers into a world of coastal luxury and architectural elegance.",
    heroImage: "/assets/img/walkthrough/metiapuruj/1.webp",
    gallery: Array.from({ length: 5 }, (_, i) => `/assets/img/walkthrough/metiapuruj/${i + 1}.webp`),
    imageCount: 5,
    tags: ["Resort", "5 Renders", "Oceanfront", "Luxury"],
  },
];

/* ──────────────────────────────────────────────
   ProjectSection — Each project with interactive gallery
   ────────────────────────────────────────────── */

const ProjectSection = ({ project, index }: { project: ProjectData; index: number }) => {
  const [activeImage, setActiveImage] = useState(project.heroImage);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.55, // Trigger when 55% of the section is visible in the viewport
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const hasImage = activeImage !== "";
  const hasVideo = !!project.video;

  return (
    <section
      ref={sectionRef}
      className="horizontal-section shrink-0 w-full lg:w-screen h-screen relative overflow-hidden border-l border-white/5 bg-[#F2EEED] transition-colors duration-1000"
    >
      {/* 1. Paint Splatter / Full Background Container */}
      <div
        className={`absolute transition-all duration-[1400ms] ease-[cubic-bezier(0.25,1,0.3,1)] overflow-hidden ${
          isInView
            ? "inset-0 w-full h-full rounded-none z-0"
            : "w-[75vw] h-[50vh] left-[12.5vw] top-[22.5vh] md:w-[60vw] md:h-[55vh] md:left-[20vw] md:top-[22.5vh] lg:w-[50vw] lg:h-[60vh] lg:left-[25vw] lg:top-[20vh] rounded-[45%_55%_65%_35%_/_45%_45%_55%_55%] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] z-10"
        }`}
        style={{
          filter: isInView ? "none" : "url(#paint-brush-filter)",
        }}
      >
        {hasImage && (
          <Image
            key={activeImage}
            src={activeImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 75vw, (max-width: 1024px) 60vw, 50vw"
            className="object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.25,1,0.3,1)]"
            style={{
              transform: isInView ? "scale(1.02)" : "scale(1.15)",
            }}
          />
        )}
        {!hasImage && hasVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.25,1,0.3,1)]"
            style={{
              transform: isInView ? "scale(1.02)" : "scale(1.15)",
            }}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        )}
      </div>
      <div
        className={`absolute left-0 top-0 bottom-0 w-[100px] hidden lg:flex items-center justify-center border-r border-white/10 z-20 bg-black/25 backdrop-blur-sm transition-all duration-1000 ease-out ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
      >
        <h2 className="text-white text-2xl xl:text-3xl font-michroma font-black tracking-[0.4em] uppercase -rotate-90 origin-center whitespace-nowrap drop-shadow-2xl">
          {project.title}
        </h2>
      </div>

      {/* 3. Main Text Content overlay */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.3,1)] ${
          isInView ? "translate-y-0" : "translate-y-6"
        }`}
      >


        {/* 4. Interactive Bottom Area (Thumbnails and Button) */}
        <div
          className={`absolute bottom-12 lg:bottom-16 z-30 flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl px-8 transition-all duration-[1200ms] ease-out delay-200 ${
            isInView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          {/* Thumbnails */}
          {project.gallery.length > 0 && (
            <div className="flex gap-3 justify-center items-center">
              {project.gallery.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(img);
                  }}
                  className={`relative w-16 h-12 lg:w-20 lg:h-14 border-2 overflow-hidden group transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                    activeImage === img
                      ? "border-[#C6632B] ring-1 ring-[#C6632B]/30 scale-105"
                      : "border-white/20 hover:border-white/60"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} render ${i + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Action Button: Styled like the violet "LETS PLAY !" button from the user's screenshot */}
          <button className="px-8 py-3 bg-[#5F5FFF] hover:bg-[#4d4dff] text-white font-orbitron font-black text-xs lg:text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(95,95,255,0.4)] cursor-pointer">
            EXPLORE PROJECT
          </button>
        </div>
      </div>
    </section>
  );
};

const WalkthroughPage = () => {
  return (
    <>
      {/* global SVG displacement map to generate paint splatter edges */}
      <svg className="hidden w-0 h-0">
        <defs>
          <filter id="paint-brush-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F] font-orbitron">
        
        {/* LEFT COLUMN: HERO CONTENT CARD */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#C6632B]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-[#E0A96D]/10 blur-[100px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-[#C6632B] flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#C6632B] uppercase border-b border-[#C6632B]/20 py-0.5">
              Hub
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-[45px] sm:text-[60px] lg:text-[70px] font-black tracking-tight text-[#C6632B] leading-none uppercase">
                WALKTHROUGH
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-xs lg:text-sm max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Photorealistic visualizations for architecture, real estate & infrastructure.
              </p>
              <p>
                From premium residential developments to large-scale logistics hubs, we capture every detail in breathtaking clarity.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#C6632B] pl-3 py-1">
                Explore our portfolio of immersive 3D tours.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between h-48 lg:h-56 mt-auto">

            {/* Circular DISCOVER badge */}
            <div className="absolute right-0 bottom-2 lg:-right-4 z-20">
              <button 
                onClick={() => {
                  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
                }}
                className="relative w-24 h-24 rounded-full border border-[#E0A96D] bg-[#0B0A0F] text-[#E0A96D] hover:text-white hover:bg-[#E0A96D] hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(224,169,109,0.3)] hover:shadow-[0_0_35px_rgba(224,169,109,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#E0A96D]/40 group-hover:border-white/40 animate-[spin_25s_linear_infinite]" />
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

        {/* RIGHT COLUMN: PREVIEW PANEL */}
        <div className="w-full lg:w-[60vw] h-[50vh] lg:h-full relative overflow-hidden bg-black flex-grow shrink-0">
          {/* Background Video Layer */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-[10s] hover:scale-100"
            >
              <source src="/assets/img/walkthrough/quintessa/quintessa.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#C6632B]/10 blur-[120px] rounded-full z-10" />


        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECT SECTIONS — Alternating light/dark
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {PROJECTS.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}
    </>
  );
};

export default WalkthroughPage;
