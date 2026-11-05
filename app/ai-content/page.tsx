"use client";

import React from "react";
import { Cpu, Sparkles, Wand2, Database } from "lucide-react";

const AIContentPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F] font-orbitron">
        
        {/* LEFT COLUMN: HERO CONTENT CARD */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#817cf9]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-[#51EDB2]/10 blur-[100px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-[#817cf9] flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#817cf9] uppercase border-b border-[#817cf9]/20 py-0.5">
              Hub
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-[45px] sm:text-[60px] lg:text-[70px] font-black tracking-tight text-[#817cf9] leading-none uppercase">
                AI CONTENT
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-xs lg:text-sm max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Harnessing the power of artificial intelligence to redefine digital content production.
              </p>
              <p>
                We integrate cutting-edge AI models into our creative pipeline to speed up production, generate unique assets, and create hyper-personalized content for our clients.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#817cf9] pl-3 py-1">
                Explore our portfolio of AI-generated content.
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
                className="relative w-24 h-24 rounded-full border border-[#817cf9] bg-[#0B0A0F] text-[#817cf9] hover:text-white hover:bg-[#817cf9] hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(129,124,249,0.3)] hover:shadow-[0_0_35px_rgba(129,124,249,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#817cf9]/40 group-hover:border-white/40 animate-[spin_25s_linear_infinite]" />
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

          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#817cf9]/10 blur-[120px] rounded-full z-10" />

        </div>
      </section>

      {/* Section 2: AI Capabilities */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-white text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-16 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">TECH STACK</span>
            <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 tracking-tight uppercase">Infinite <br /> <span className="text-brand-red">Possibilities</span></h2>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed font-rajdhani mb-8 lg:mb-10">
              We integrate cutting-edge AI models into our creative pipeline to speed up production, generate unique assets, and create hyper-personalized content for our clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {[
                { icon: <Cpu className="w-6 h-6" />, title: "AI Animation", desc: "Automating complex character movements." },
                { icon: <Sparkles className="w-6 h-6" />, title: "Generative Art", desc: "Unique visual styles powered by neural networks." },
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
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute inset-0 bg-brand-red/5 blur-[100px] -z-10 rounded-full" />
                <div className="aspect-square bg-white border border-gray-100 rounded-[2.5rem] shadow-sm p-8 sm:p-10 flex flex-col justify-center items-center text-center hover:scale-105 transition-transform group">
                   <div className="text-brand-red mb-4 group-hover:rotate-12 transition-transform"><Wand2 size={40} /></div>
                   <h5 className="font-orbitron font-bold text-sm uppercase">Auto-VFX</h5>
                </div>
                <div className="aspect-square bg-gray-50 border border-gray-100 rounded-[2.5rem] shadow-sm p-8 sm:p-10 flex flex-col justify-center items-center text-center translate-y-0 sm:translate-y-10 hover:scale-105 transition-transform group">
                   <div className="text-brand-red mb-4 group-hover:rotate-12 transition-transform"><Database size={40} /></div>
                   <h5 className="font-orbitron font-bold text-sm uppercase">Asset Gen</h5>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: The AI Workflow */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-gray-50 text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-16 lg:py-0">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">HUMAN + AI</span>
            <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 tracking-tight uppercase">Augmented <br /> <span className="text-brand-red">Artistry</span></h2>
            <p className="text-gray-500 text-base sm:text-xl leading-relaxed font-rajdhani mb-8 lg:mb-10">
              We believe AI is a tool that empowers artists, not replaces them. Our team uses AI to handle repetitive tasks, giving them more time to focus on the soul of the project: the story and the emotion.
            </p>
            <div className="space-y-6">
               {[
                 { t: "Faster Turnaround", d: "Reduced production time by up to 40%." },
                 { t: "Infinite Scalability", d: "Generate variations for global campaigns instantly." },
                 { t: "Precision Craft", d: "Pixel-perfect detail through AI upscaling." }
               ].map((feature, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="text-brand-red font-orbitron font-black text-2xl opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                    <div>
                       <h4 className="font-orbitron font-bold text-sm uppercase mb-1">{feature.t}</h4>
                       <p className="text-gray-400 font-rajdhani text-sm">{feature.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-1">
             <div className="aspect-square bg-white rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-2xl flex items-center justify-center p-12 sm:p-20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 to-transparent group-hover:opacity-0 transition-opacity" />
                <div className="relative z-10 w-full h-full border-2 border-dashed border-gray-100 rounded-full flex items-center justify-center animate-pulse">
                   <Sparkles className="text-brand-red w-12 h-12 sm:w-20 sm:h-20" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-white flex flex-col items-center justify-center text-black text-center p-6 sm:p-12 lg:p-20 relative border-l border-gray-100 py-16 lg:py-0">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-none">
          <span className="font-orbitron text-[40vw] font-black text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">AUTO</span>
        </div>
        <h2 className="font-orbitron text-4xl sm:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 leading-none tracking-tighter relative z-10">
          THE FUTURE IS <br /> <span className="text-brand-red">NOW</span>
        </h2>
        <p className="max-w-xl text-gray-500 text-lg sm:text-2xl font-rajdhani mb-8 sm:mb-12 relative z-10">
          Join the AI revolution and elevate your content production to the next level.
        </p>
        <button className="px-16 py-6 bg-brand-red text-white font-orbitron font-bold text-sm tracking-[0.3em] hover:bg-black transition-all rounded-full shadow-2xl relative z-10">
          EXPLORE AI
        </button>
      </section>
    </>
  );
};

export default AIContentPage;
