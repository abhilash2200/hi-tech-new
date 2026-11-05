"use client";

import React from "react";
import { Play, Zap, Target, BarChart3 } from "lucide-react";

const ExplainerVideoPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F] font-orbitron">
        
        {/* LEFT COLUMN: HERO CONTENT CARD */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-brand-red flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-brand-red uppercase border-b border-brand-red/20 py-0.5">
              Hub
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-[45px] sm:text-[60px] lg:text-[70px] font-black tracking-tight text-brand-red leading-none uppercase">
                EXPLAINER
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-xs lg:text-sm max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Simplify complex ideas with stunning 2D & 3D explainer videos.
              </p>
              <p>
                We help brands communicate their value proposition through engaging storytelling. Our explainer videos are designed to boost conversions and simplify user onboarding.
              </p>
              <p className="text-white font-semibold border-l-2 border-brand-red pl-3 py-1">
                Explore our portfolio of high-impact visuals.
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
                className="relative w-24 h-24 rounded-full border border-brand-red bg-[#0B0A0F] text-brand-red hover:text-white hover:bg-brand-red hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(166,29,32,0.3)] hover:shadow-[0_0_35px_rgba(166,29,32,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-brand-red/40 group-hover:border-white/40 animate-[spin_25s_linear_infinite]" />
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
              <source src="/assets/img/2D_animation/2d.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-red/10 blur-[120px] rounded-full z-10" />

        </div>
      </section>

      {/* Section 2: Why Explainer Videos */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-white text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-16 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">WHY US?</span>
            <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 tracking-tight uppercase">High Impact <br /> <span className="text-brand-red">Visuals</span></h2>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed font-rajdhani mb-8 lg:mb-10">
              We help brands communicate their value proposition through engaging storytelling. Our explainer videos are designed to boost conversions and simplify user onboarding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                { icon: <Zap className="w-6 h-6" />, title: "Instant Clarity", desc: "Turn complex features into simple benefits." },
                { icon: <Target className="w-6 h-6" />, title: "High Retention", desc: "Visual storytelling ensures higher recall." },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-red/30 transition-all group">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all">
                      {item.icon}
                   </div>
                   <h4 className="font-orbitron font-bold text-sm mb-2">{item.title}</h4>
                   <p className="text-gray-400 text-xs font-rajdhani leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="aspect-video bg-gray-900 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-2xl group flex items-center justify-center cursor-pointer">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
               <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-brand-red rounded-full flex items-center justify-center text-white shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-2" />
               </div>
               <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white/50 font-orbitron text-[8px] uppercase tracking-widest">Showreel 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Process */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-gray-50 text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-16 lg:py-0">
        <div className="container mx-auto">
           <div className="text-center mb-10 lg:mb-16">
              <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">THE PIPELINE</span>
              <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase">How we <span className="text-brand-red">Work</span></h2>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { step: "01", title: "Scripting", desc: "Crafting the narrative that sells." },
                { step: "02", title: "Storyboarding", desc: "Visualizing every frame." },
                { step: "03", title: "Animation", desc: "Bringing the design to life." },
                { step: "04", title: "Voiceover", desc: "Adding the perfect sound." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:bg-brand-red transition-all duration-500">
                   <div className="text-4xl sm:text-5xl font-orbitron font-black text-gray-50 mb-4 sm:mb-6 group-hover:text-white/10 transition-colors">{item.step}</div>
                   <h4 className="font-orbitron font-bold text-base sm:text-lg mb-2 sm:mb-4 group-hover:text-white transition-colors">{item.title}</h4>
                   <p className="text-gray-400 font-rajdhani group-hover:text-white/70 transition-colors text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-white flex flex-col items-center justify-center text-black text-center p-6 sm:p-12 lg:p-20 relative border-l border-gray-100 py-16 lg:py-0">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-none">
          <span className="font-orbitron text-[40vw] font-black text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">PLAY</span>
        </div>
        <h2 className="font-orbitron text-4xl sm:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-none tracking-tighter relative z-10">
          BOOST YOUR <br /> <span className="text-brand-red">CONVERSIONS</span>
        </h2>
        <p className="max-w-xl text-gray-500 text-lg sm:text-2xl font-rajdhani mb-8 sm:mb-12 relative z-10">
          Get a professional explainer video that works as hard as you do.
        </p>
        <button className="px-10 sm:px-16 py-4 sm:py-6 bg-brand-red text-white font-orbitron font-bold text-xs sm:text-sm tracking-[0.3em] hover:bg-black transition-all rounded-full shadow-2xl relative z-10">
          START A PROJECT
        </button>
      </section>
    </>
  );
};

export default ExplainerVideoPage;
