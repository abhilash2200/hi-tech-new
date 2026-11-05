"use client";

import React from "react";
import { BookOpen, Monitor, Award, Users } from "lucide-react";

const EducationalTechPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F] font-orbitron">
        
        {/* LEFT COLUMN: HERO CONTENT CARD */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#ffc107]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-[#C6632B]/10 blur-[100px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-[#ffc107] flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#ffc107] uppercase border-b border-[#ffc107]/20 py-0.5">
              Hub
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-[45px] sm:text-[60px] lg:text-[70px] font-black tracking-tight text-[#ffc107] leading-none uppercase">
                ED-TECH
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-xs lg:text-sm max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Revolutionizing education through immersive 3D content and AR/VR solutions.
              </p>
              <p>
                We specialize in creating high-quality 3D educational videos, interactive simulations, and K-12 digital content that makes learning engaging and effective.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#ffc107] pl-3 py-1">
                Explore our portfolio of interactive learning.
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
                className="relative w-24 h-24 rounded-full border border-[#ffc107] bg-[#0B0A0F] text-[#ffc107] hover:text-[#0B0A0F] hover:bg-[#ffc107] hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(255,193,7,0.3)] hover:shadow-[0_0_35px_rgba(255,193,7,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-[#ffc107]/40 group-hover:border-[#0B0A0F]/40 animate-[spin_25s_linear_infinite]" />
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

          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#ffc107]/10 blur-[120px] rounded-full z-10" />

        </div>
      </section>

      {/* Section 2: What we do */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-white text-black p-20 flex items-center border-l border-gray-100">
        <div className="container mx-auto flex gap-20 items-center">
          <div className="w-1/2">
            <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">OUR EXPERTISE</span>
            <h2 className="font-orbitron text-6xl font-black mb-8 tracking-tight uppercase">Interactive <br /> <span className="text-brand-red">Curriculum</span></h2>
            <p className="text-gray-500 text-xl leading-relaxed font-rajdhani mb-10">
              We specialize in creating high-quality 3D educational videos, interactive simulations, and K-12 digital content that makes learning engaging and effective.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <BookOpen className="w-6 h-6" />, title: "K-12 Content", desc: "Syllabus-aligned 3D animations for all grades." },
                { icon: <Monitor className="w-6 h-6" />, title: "E-Learning", desc: "Comprehensive digital modules for higher ed." },
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
          <div className="w-1/2">
            <div className="aspect-video bg-gray-50 rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-2xl group">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent group-hover:opacity-0 transition-opacity" />
               <div className="w-full h-full flex items-center justify-center">
                  <div className="text-brand-red/20 font-orbitron text-[10vw] font-black select-none">EDTECH</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: AR/VR in Education */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-gray-50 text-black p-20 flex items-center border-l border-gray-100">
        <div className="container mx-auto flex gap-24 items-center">
          <div className="w-1/2 order-2">
            <span className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4 block">NEXT-GEN TECH</span>
            <h2 className="font-orbitron text-6xl font-black mb-8 tracking-tight uppercase">Immersive <br /> <span className="text-brand-red">Simulations</span></h2>
            <p className="text-gray-500 text-xl leading-relaxed font-rajdhani mb-10">
              Beyond traditional videos, we create AR and VR experiences that allow students to explore the human body, travel through space, or conduct virtual lab experiments safely.
            </p>
            <div className="space-y-4">
              {['Virtual Reality Classrooms', 'Augmented Reality Textbooks', 'Gamified Learning Modules', '3D Interactive Science Labs'].map((list, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 bg-brand-red rounded-full group-hover:scale-150 transition-transform" />
                  <span className="font-orbitron text-sm font-bold tracking-wider text-gray-600">{list}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-8 flex flex-col justify-end group hover:bg-brand-red transition-all duration-500">
                   <Award className="w-10 h-10 text-brand-red mb-4 group-hover:text-white transition-colors" />
                   <h4 className="font-orbitron font-bold text-lg group-hover:text-white transition-colors">Award Winning</h4>
                   <p className="text-gray-400 text-xs font-rajdhani group-hover:text-white/70 transition-colors">Best EdTech Content Provider 2024</p>
                </div>
                <div className="aspect-square bg-brand-red rounded-3xl shadow-xl overflow-hidden p-8 flex flex-col justify-end text-white translate-y-12">
                   <Users className="w-10 h-10 mb-4" />
                   <h4 className="font-orbitron font-bold text-lg">1M+ Students</h4>
                   <p className="text-white/70 text-xs font-rajdhani">Learning through our 3D modules daily.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="horizontal-section shrink-0 w-screen h-screen bg-white flex flex-col items-center justify-center text-black text-center p-20 relative border-l border-gray-100">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none select-none">
          <span className="font-orbitron text-[40vw] font-black text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">EDU</span>
        </div>
        <h2 className="font-orbitron text-8xl font-black mb-8 leading-none tracking-tighter relative z-10">
          READY TO TRANSFORM <br /> <span className="text-brand-red">EDUCATION?</span>
        </h2>
        <p className="max-w-xl text-gray-500 text-2xl font-rajdhani mb-12 relative z-10">
          Let&apos;s collaborate to build the digital future of your institution or startup.
        </p>
        <button className="px-16 py-6 bg-brand-red text-white font-orbitron font-bold text-sm tracking-[0.3em] hover:bg-black transition-all rounded-full shadow-2xl relative z-10">
          GET A QUOTE
        </button>
      </section>
    </>
  );
};

export default EducationalTechPage;
