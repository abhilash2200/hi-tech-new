"use client";

import React, { useState } from "react";
import Image from "next/image";
import MorphText from "@/components/ui/morph-text";
import { GooeyTextReveal } from "@/components/ui/gooey-text-reveal";

const backgroundFigures = [
  "/assets/home/figure/1.png",
  "/assets/home/figure/2.png",
  "/assets/home/figure/3.png",
  "/assets/home/figure/4.png",
  "/assets/home/figure/5.png"
];

const sections = [
  {
    id: "animation",
    title: "Animation",
    subtitle: "Animation Course",
    color: "bg-[#817cf9]",
    image: "/assets/home/animation.webp",
    description: "Play in an ever changing world in which you aren't merely a player and also a creator and administrator.",
    normalHeight: "h-[48vh]",
    hoveredHeight: "h-[65vh]",
    imgAlign: "bottom left",
  },
  {
    id: "walkthrough",
    title: "Walkthrough",
    subtitle: "Walkthrough",
    color: "bg-[#59e7f2]",
    image: "/assets/home/bumbal_bee.webp",
    description: "Play in an ever changing world in which you aren't merely a player and also a creator and administrator.",
    normalHeight: "h-[42vh]",
    hoveredHeight: "h-[68vh]",
    imgAlign: "bottom right",
  },
  {
    id: "edtech",
    title: "EdTech",
    subtitle: "Educational Tech",
    color: "bg-[#ffc107]",
    image: "/assets/home/web.png",
    description: "Play in an ever changing world in which you aren't merely a player and also a creator and administrator.",
    normalHeight: "h-[50vh]",
    hoveredHeight: "h-[70vh]",
    imgAlign: "bottom center",
  },
  {
    id: "overview",
    title: "Overview",
    subtitle: "Explainer Video",
    color: "bg-[#67eebb]",
    image: "/assets/home/graphics.png",
    description: "Play in an ever changing world in which you aren't merely a player and also a creator and administrator.",
    normalHeight: "h-[46vh]",
    hoveredHeight: "h-[66vh]",
    imgAlign: "bottom right",
  },
  {
    id: "ai-content",
    title: "AI Content",
    subtitle: "AI Content",
    color: "bg-[#817cf9]",
    image: "/assets/home/ai-content.webp",
    description: "Play in an ever changing world in which you aren't merely a player and also a creator and administrator.",
    normalHeight: "h-[44vh]",
    hoveredHeight: "h-[67vh]",
    imgAlign: "bottom left",
  },
];

const HeroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row justify-between overflow-visible lg:overflow-hidden bg-[#0B0A0F]">
        {/* LEFT SIDE HERO (approx 45% width on large screens) */}
        <div className="w-full lg:w-[45%] h-auto lg:h-full min-h-screen lg:min-h-0 relative flex flex-col justify-between px-6 py-20 lg:px-16 lg:pt-28 lg:pb-16 overflow-visible lg:overflow-hidden z-10 shrink-0">

          {/* Animated Background Layers & Character */}
          <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#141A2E_0%,#0B0A0F_60%,#0B0A0F_100%)] opacity-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-[radial-gradient(circle,_rgba(242,193,78,0.08)_0%,_rgba(230,126,34,0.04)_30%,_transparent_70%)] rounded-full blur-[40px]" />

            {/* Character Fade Animation */}
            {backgroundFigures.map((img, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${hoveredIndex === i || (hoveredIndex === null && i === 0) ? 'opacity-30' : 'opacity-0'}`}>
                <Image src={img} alt="Character" fill sizes="(max-width: 1024px) 100vw, 45vw" className="scale-110 object-center object-contain translate-y-[5%]" priority />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 mt-2 lg:mt-4">
            <GooeyTextReveal
              mode="immediate"
              duration={1.2}
              stagger={0.15}
              blurAmount={0.3}
            >
              <p className="text-[#EFE6D8] font-orbitron font-black text-sm lg:text-lg tracking-[0.15em] uppercase mb-1">
                OUR
              </p>
              <p className="text-[#EFE6D8] font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl tracking-widest uppercase leading-none drop-shadow-[0_0_20px_rgba(242,193,78,0.2)]">
                TECHNOLOGY
              </p>
              <p className="text-[#EFE6D8] font-orbitron font-black text-sm lg:text-lg tracking-[0.1em] uppercase mt-2">
                TURNS YOU INTO A
              </p>
            </GooeyTextReveal>

            <div className="mt-4 mb-6 min-h-[50px] sm:min-h-[70px] lg:min-h-[85px] flex items-center overflow-visible drop-shadow-[0_0_15px_rgba(242,193,78,0.4)]">
              <MorphText
                words={["DEVELOPER", "ANIMATOR", "DESIGNER", "VISIONARY", "CREATOR"]}
                morphTime={1.1}
                cooldownTime={2.0}
                textClassName="text-[42px] sm:text-[58px] lg:text-[68px] text-[#F2C14E] font-orbitron font-black uppercase tracking-[0.05em] leading-none"
              />
            </div>
          </div>

          {/* Bottom Text Area (Pushed to bottom) */}
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center mt-auto mb-8 lg:mb-12 text-[#EFE6D8] gap-4 xl:gap-0">
            <h5 className="font-orbitron font-black text-lg lg:text-3xl text-[#F2C14E] tracking-[0.1em] drop-shadow-[0_0_10px_rgba(242,193,78,0.3)] m-0 xl:w-[140px] shrink-0">
              MOOPLE
            </h5>
            <div className="hidden xl:block w-[2px] bg-gradient-to-b from-transparent via-[#C55A1E] to-transparent h-24 opacity-60 shadow-[0_0_8px_rgba(197,90,30,0.4)] mx-6 shrink-0" />
            <div className="w-full xl:max-w-[320px] font-rajdhani text-xs lg:text-sm text-[#CBBBA0] leading-relaxed tracking-wider space-y-3 font-medium">
              <p>Let&apos;s build the future of decentralized entertainment together.</p>
              <p>We are a self sustaining decentralized global community of Dreamers, Gamers, Artists, Storytellers, Musicians, Advertisers, Investors and Technical Creators.</p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row justify-between items-stretch sm:items-end w-full lg:w-[130%] gap-6 sm:gap-0">
            <div className="flex flex-col gap-6 w-full sm:w-auto">
              <div className="flex items-center gap-6 text-[#CBBBA0]">
                <a href="#" className="hover:text-[#F2C14E] hover:-translate-y-1 transition-all duration-300 drop-shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="hover:text-[#F2C14E] hover:-translate-y-1 transition-all duration-300 drop-shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.4 5.3 3 4.6c.8-.8 1.6-.8 2-.9 2.8-.2 7-.2 7-.2s4.2 0 7 .2c.4.1 1.2.1 2 .9.6.7.5 2.5.5 2.5S22 9.2 22 11.3v1.5c0 2.1-.1 4.2-.1 4.2s.1 1.8-.5 2.5c-.8.8-1.8.8-2.3.9-1.4.1-6.7.2-6.7.2s-4.2 0-7-.2c-.4-.1-1.2-.1-2-.9-.6-.7-.5-2.5-.5-2.5S2 13.4 2 11.3v-1.5c0-2.1.1-4.2.1-4.2z"></path><polygon points="9.5,15.5 16,11.5 9.5,7.5"></polygon></svg>
                </a>
                <a href="#" className="hover:text-[#F2C14E] hover:-translate-y-1 transition-all duration-300 drop-shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
              <div>
                <button className="w-full sm:w-auto px-8 py-3 bg-[#0B0A0F] border border-[#C55A1E] text-[#EFE6D8] font-orbitron font-semibold uppercase tracking-widest text-sm hover:bg-[#C55A1E]/20 transition-all duration-300 shadow-[0_0_20px_rgba(197,90,30,0.4)]">
                  CONNECT WITH US
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 text-[#CBBBA0] font-orbitron tracking-widest text-sm uppercase">
              SCROLL
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE GALLERY (approx 55% width on large screens) */}
        <div className="hidden lg:flex lg:w-[55%] h-full relative items-end justify-end bg-[#f4eeec]">
          <div className="flex w-full h-[80%] items-end relative group/gallery overflow-hidden pl-12">
            {sections.map((section, index) => {
              const isHovered = hoveredIndex === index;
              // Heights matching original staggered design when not hovered
              const defaultHeights = ['85%', '90%', '100%', '90%', '88%'];

              return (
                <div
                  key={section.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative flex-1 ${section.color} transition-all duration-700 ease-out cursor-pointer border-l border-black/10 overflow-hidden`}
                  style={{
                    flex: isHovered ? 6 : 1,
                    height: isHovered ? '100%' : defaultHeights[index],
                    transformOrigin: 'bottom'
                  }}
                >
                  {/* 1. Rotated Title (Left edge) */}
                  <div className={`absolute top-28 -left-6 font-orbitron font-black text-xl -rotate-90 origin-center whitespace-nowrap transition-opacity duration-300 text-black ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    {section.title}
                  </div>

                  {/* 2. Big Background Text */}
                  <div className={`absolute top-10 font-orbitron font-black transition-all duration-700 z-0 pointer-events-none overflow-hidden
                    ${isHovered
                      ? 'left-4 text-5xl lg:text-7xl text-black/80 opacity-90 tracking-normal whitespace-nowrap'
                      : 'left-0 right-0 text-[20vh] lg:text-[22vh] text-black/20 opacity-100 leading-none'
                    }`}
                  >
                    {isHovered ? section.title : section.title[0]}
                  </div>

                  {/* 3. Image Component */}
                  <div className={`absolute bottom-0 w-full min-w-[280px] md:min-w-[320px] left-1/2 -translate-x-1/2 transition-all duration-700 ease-out z-10
                    ${isHovered ? section.hoveredHeight : section.normalHeight}`}
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-contain transition-all duration-700 ease-out"
                      style={{
                        objectPosition: isHovered ? "bottom left" : "bottom center",
                      }}
                    />
                  </div>

                  {/* 4. Expanded Text (Upper Right) */}
                  <div className={`absolute top-32 lg:top-[25%] right-4 lg:right-12 z-20 w-48 lg:w-64 transition-all duration-500 delay-100 
                    ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
                  >
                    <p className={`font-rajdhani font-bold text-xs lg:text-sm leading-relaxed tracking-wider mb-4 drop-shadow-md ${index === 1 || index === 2 || index === 3 ? 'text-black' : 'text-white'}`}>
                      {section.description}
                    </p>
                    <button className={`font-orbitron font-bold text-xs lg:text-sm tracking-widest relative group/btn ${index === 1 || index === 2 || index === 3 ? 'text-black hover:text-white' : 'text-white hover:text-black'}`}>
                      Learn More
                      <span className={`absolute -bottom-2 left-0 h-[2px] w-4/5 transition-all duration-300 group-hover/btn:w-full group-hover/btn:h-full -z-10 ${index === 1 || index === 2 || index === 3 ? 'bg-black' : 'bg-white'}`}></span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MOBILE GALLERY LIST (only visible on mobile/tablet) */}
      <div className="w-full lg:hidden flex flex-col gap-6 px-6 pb-20 bg-[#0B0A0F] z-10">
        <h3 className="text-[#EFE6D8] font-orbitron font-black text-2xl tracking-wider uppercase mb-2 border-b border-white/10 pb-4">
          OUR PROGRAMS
        </h3>
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => {
            const isDarkBg = idx === 0 || idx === 4;
            const textColorClass = isDarkBg ? "text-white" : "text-black";
            const subtextColorClass = isDarkBg ? "text-white/60" : "text-black/60";
            const bodyColorClass = isDarkBg ? "text-white/80" : "text-black/85";
            const buttonBorderClass = isDarkBg
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-black text-black hover:bg-black hover:text-white";

            return (
              <div
                key={section.id}
                className={`${section.color} rounded-2xl p-6 flex flex-col sm:flex-row gap-6 relative overflow-hidden shadow-lg border border-black/5`}
              >
                {/* Card Image */}
                <div className="relative w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-black/5 shrink-0">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-col justify-between items-start flex-1">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${subtextColorClass} block mb-1`}>
                      {section.subtitle}
                    </span>
                    <h4 className={`font-orbitron font-black text-2xl ${textColorClass} mb-3`}>
                      {section.title}
                    </h4>
                    <p className={`font-rajdhani font-semibold text-sm leading-relaxed ${bodyColorClass} mb-6 max-w-xl`}>
                      {section.description}
                    </p>
                  </div>

                  <a
                    href={section.id === "edtech" ? "/educational-tech" : section.id === "overview" ? "/explainer-video" : `/${section.id}`}
                    className={`inline-flex items-center justify-center px-6 py-3 border-2 ${buttonBorderClass} font-orbitron font-bold text-xs uppercase tracking-widest transition-all duration-300`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
