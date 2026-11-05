"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play, Cpu, Box, Layers, Zap, Star, Trophy, Users, Globe } from "lucide-react";

const AnimationPage = () => {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO — Split Cinematic Intro (Career Page Style)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex flex-col lg:flex-row overflow-hidden bg-[#0B0A0F] font-orbitron">
        
        {/* LEFT COLUMN: HERO CONTENT CARD (Match Career page Hero panel) */}
        <div className="w-full lg:w-[40vw] h-auto lg:h-full min-h-[60vh] lg:min-h-0 relative flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0B0A0F] text-white shrink-0">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#51EDB2]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

          {/* Character Illustration sketch */}
          <div className="absolute bottom-0 left-0 w-[60%] lg:w-[65%] max-w-[280px] h-[45%] pointer-events-none select-none opacity-20 transition-transform duration-500 hover:scale-105 origin-bottom z-0">
            <Image
              src="/assets/home/animation.webp"
              alt="Animation hero sketch"
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
              Hub
            </span>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-[#51EDB2] leading-none uppercase">
                ANIMATION
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-base md:text-lg xl:text-xl max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                Step into the future of visual design. Master the fundamentals and advanced engines.
              </p>
              <p>
                From character sculpting to motion physics, we train the creators shaping global commercials and cinematic films.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#51EDB2] pl-3 py-1">
                Explore our programs in 2D and 3D animation systems.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between h-48 lg:h-56 mt-auto">

            {/* Circular DISCOVER badge */}
            <div className="absolute right-0 bottom-2 lg:-right-4 z-20">
              <button 
                onClick={() => {
                  const el = document.getElementById("specialties-section");
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

        {/* RIGHT COLUMN: PREVIEW PANEL (Autoplaying video background & quick nav) */}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 z-10" />
          </div>

          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#51EDB2]/10 blur-[120px] rounded-full z-10" />

          {/* Quick Navigation Cards */}
          <div className="absolute bottom-8 left-6 right-6 md:left-auto md:right-10 md:bottom-10 z-20 flex gap-4 justify-between sm:justify-end">
            <Link href="/2d-animation" className="group relative w-[48%] h-48 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/5 bg-zinc-950/30 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-[#51EDB2]/30 hover:shadow-[0_0_25px_rgba(81,237,178,0.15)]">
              <Image 
                src="/assets/home/animation.webp" 
                alt="2D Animation" 
                fill 
                sizes="(max-width: 640px) 48vw, 192px"
                className="object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6 z-10">
                <span className="text-[10px] md:text-[11px] text-[#51EDB2] font-black tracking-[0.2em] uppercase mb-1.5">Explore</span>
                <h3 className="text-white font-black text-sm md:text-lg tracking-[0.05em] uppercase leading-tight">2D MOTION</h3>
              </div>
            </Link>
            
            <Link href="/3d-animation" className="group relative w-[48%] h-48 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/5 bg-zinc-950/30 backdrop-blur-sm shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:border-pink-400/30 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]">
              <Image 
                src="/assets/home/bumbal_bee.webp" 
                alt="3D Animation" 
                fill 
                sizes="(max-width: 640px) 48vw, 192px"
                className="object-contain object-bottom grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6 z-10">
                <span className="text-[10px] md:text-[11px] text-pink-400 font-black tracking-[0.2em] uppercase mb-1.5">Discover</span>
                <h3 className="text-white font-black text-sm md:text-lg tracking-[0.05em] uppercase leading-tight">3D WORLD</h3>
              </div>
            </Link>
          </div>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: CORE SPECIALTIES (Warm Sand Background #FAF9F6)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="specialties-section" className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FAF9F6] flex items-center p-6 sm:p-12 lg:p-20 border-l border-gray-100 font-orbitron text-black relative py-20 lg:py-0">
        <div className="absolute top-20 right-20 text-[15vw] font-black text-[#51EDB2]/5 -z-0 select-none hidden lg:block">CREATIVE</div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto relative z-10">
          {/* Main Card */}
          <Link
            href="/2d-animation"
            className="col-span-1 lg:col-span-2 group relative bg-white border border-black/5 p-8 sm:p-12 lg:p-20 rounded-2xl lg:rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-700 hover:shadow-[#51EDB2]/10 hover:border-[#51EDB2]/20 cursor-pointer overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#51EDB2]/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 w-full lg:w-[60%] flex flex-col justify-between h-full space-y-6">
              <Layers className="w-10 h-10 lg:w-16 lg:h-16 text-[#51EDB2] mb-4 lg:mb-6" />
              <h3 className="font-orbitron text-3xl sm:text-5xl lg:text-7xl font-black mb-3 lg:mb-4 tracking-tight uppercase leading-none">2D <br /> <span className="text-[#51EDB2]">Evolution</span></h3>
              <p className="text-zinc-700 text-sm sm:text-lg lg:text-xl leading-relaxed mb-4 lg:mb-6 max-w-xl font-rajdhani font-semibold uppercase tracking-wider">Classical techniques meet digital precision. We specialize in character-driven narratives and fluid motion graphics.</p>
              <div className="inline-flex items-center gap-4 text-xs sm:text-sm font-bold tracking-widest uppercase py-3 px-8 lg:py-4 lg:px-10 rounded-full bg-black text-white group-hover:bg-[#51EDB2] transition-all shadow-lg group-hover:shadow-[#51EDB2]/30 w-fit">
                The Gallery <ChevronRight size={18} />
              </div>
            </div>
            <div className="relative lg:absolute lg:right-4 lg:bottom-0 w-full lg:w-[40%] h-64 lg:h-[90%] mt-6 lg:mt-0 pointer-events-none z-20">
              <Image 
                src="/assets/img/2D_animation/chinku-and-bunty.webp" 
                alt="2D Animation Showcase" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain object-bottom lg:object-right-bottom group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </Link>

          {/* Secondary Card */}
          <Link
            href="/3d-animation"
            className="group relative bg-white border border-black/5 p-8 lg:p-12 rounded-2xl lg:rounded-3xl flex flex-col justify-between hover:border-pink-500/20 transition-all cursor-pointer shadow-lg hover:shadow-2xl min-h-[250px] lg:min-h-fit"
          >
            <Box className="w-10 h-10 lg:w-12 lg:h-12 text-[#EC4899] opacity-40 group-hover:opacity-100 transition-colors" />
            
            <div className="my-6 relative h-48 w-full shrink-0">
              <Image 
                src="/assets/img/3D_animation/ekans/ekans.webp" 
                alt="3D Animation Showcase" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="mt-4 lg:mt-0">
              <h3 className="font-orbitron text-2xl lg:text-3xl font-black mb-3 lg:mb-4 tracking-tight uppercase">3D Realism</h3>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mb-6 lg:mb-8 font-rajdhani font-semibold uppercase tracking-wider">State-of-the-art environment design and character performance.</p>
              <div className="w-full h-[1px] bg-gray-100 group-hover:bg-[#EC4899] transition-all" />
              <div className="mt-4 text-[10px] font-bold text-gray-400 group-hover:text-[#EC4899] transition-colors tracking-widest uppercase flex items-center gap-2">
                Explore World <ChevronRight size={12} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: INDUSTRY BENCHMARKS (Warm Sand Background #FAF9F6)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FAF9F6] flex items-center p-6 sm:p-12 lg:p-20 border-l border-gray-100 font-orbitron text-black relative overflow-hidden py-20 lg:py-0">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-500/5 blur-[150px] rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl mx-auto items-center relative z-10">
          <div className="space-y-10 lg:space-y-16">
            <div className="space-y-2 lg:space-y-4">
              <p className="text-[#EC4899] font-bold tracking-[0.4em] text-xs uppercase">The Benchmarks</p>
              <h2 className="font-orbitron text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight uppercase leading-[0.85]">Global <br /> <span className="text-zinc-200 -webkit-text-stroke-1 text-stroke-black">Impact</span></h2>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-12 lg:gap-y-20">
              {[
                { icon: Trophy, value: "50+", label: "Awards Won", color: "text-[#51EDB2]" },
                { icon: Users, value: "100+", label: "Expert Artists", color: "text-[#EC4899]" },
                { icon: Star, value: "500+", label: "Projects Completed", color: "text-violet-400" },
                { icon: Globe, value: "24/7", label: "Global Ops", color: "text-[#51EDB2]" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 lg:space-y-4 group cursor-default">
                  <stat.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
                  <p className="text-3xl lg:text-5xl font-black tracking-tighter">{stat.value}</p>
                  <p className="text-zinc-400 text-[8px] lg:text-[10px] tracking-[0.3em] uppercase font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-2xl lg:rounded-[3rem] p-8 lg:p-20 relative overflow-hidden group shadow-sm">
            <div className="absolute -bottom-10 -right-10 text-[25vw] font-black text-[#51EDB2]/5 select-none transition-transform group-hover:scale-110 duration-1000 hidden lg:block">01</div>
            <p className="text-zinc-700 text-sm sm:text-lg lg:text-xl italic mb-8 lg:mb-12 leading-relaxed font-rajdhani font-semibold uppercase tracking-wider relative z-10">&ldquo;Animation is not just movement; it&apos;s the soul of the visual narrative. We don&apos;t just move pixels; we breathe life into them.&rdquo;</p>
            <div className="flex items-center gap-6 relative z-10">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl overflow-hidden shadow-lg border border-black/10">
                <Image
                  src="/assets/team/anurag-chirimar.webp"
                  alt="Anurag Chirimar"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-sm lg:text-lg uppercase tracking-tight">Anurag Chirimar</p>
                <p className="text-zinc-400 text-[9px] lg:text-xs uppercase tracking-[0.2em]">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: THE STUDIO PIPELINE (Deep Dark Background #0B0A0F)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#0B0A0F] flex items-center border-l border-white/5 font-orbitron text-white overflow-hidden relative py-20 lg:py-0">
        {/* Sidebar Vertical Text (Hidden on Mobile) */}
        <div className="w-[150px] h-full bg-[#07060A] hidden lg:flex items-center justify-center border-r border-white/5 shrink-0">
          <h2 className="text-white text-8xl font-black tracking-tighter uppercase -rotate-90 whitespace-nowrap opacity-5">
            WORKFLOW
          </h2>
        </div>

        <div className="flex-1 p-6 sm:p-12 lg:p-24 bg-gradient-to-br from-[#0B0A0F] to-[#050507] w-full">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12 lg:mb-24">
              <div>
                <p className="text-[#51EDB2] text-xs font-bold tracking-[0.5em] uppercase mb-4">The Process</p>
                <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-8xl font-black tracking-tight uppercase mb-4 leading-none">Studio <br /> <span className="text-[#51EDB2]">Pipeline</span></h2>
              </div>
              <div className="p-4 lg:p-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hidden sm:block">
                <Play className="text-[#51EDB2] w-6 h-6 lg:w-10 lg:h-10 fill-[#51EDB2]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", label: "Pre-Viz", title: "Storyboarding", desc: "Mapping the visual journey and narrative beats." },
                { step: "02", label: "Modeling", title: "Sculpting", desc: "Building high-fidelity assets and characters." },
                { step: "03", label: "Motion", title: "Rig & Animate", desc: "Giving life and weight to digital entities." },
                { step: "04", label: "Output", title: "Comp & FX", desc: "The final layer of lighting and visual magic." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 lg:p-10 bg-white/5 rounded-[1.5rem] lg:rounded-[2.5rem] border border-white/5 group hover:bg-white/10 hover:border-[#51EDB2]/40 transition-all duration-500">
                  <span className="text-[60px] lg:text-[100px] font-black absolute -top-8 -right-2 lg:-top-12 lg:-right-4 text-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    {item.step}
                  </span>
                  <p className="text-[#51EDB2] text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase mb-4 lg:mb-6">{item.label}</p>
                  <h4 className="font-orbitron text-lg lg:text-2xl font-black mb-2 lg:mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-white/50 text-xs lg:text-sm leading-relaxed font-rajdhani font-semibold uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: TECHNOLOGY STACK (Warm Sand Background #FAF9F6)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-[#FAF9F6] flex items-center p-6 sm:p-12 lg:p-20 border-l border-gray-100 font-orbitron text-black relative py-20 lg:py-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#51EDB2]/5 blur-[120px] rounded-full -z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full max-w-7xl mx-auto items-center relative z-10">
          <div className="relative">
            <p className="text-[#51EDB2] font-bold tracking-[0.4em] text-xs uppercase mb-4 lg:mb-6">The Infrastructure</p>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-6 lg:mb-10 leading-[0.85]">
              Industry <br /> <span className="text-zinc-200 -webkit-text-stroke-1 text-stroke-black">Standard</span> <br /> <span className="text-[#51EDB2]">Engines</span>
            </h2>
            <p className="text-zinc-700 text-sm sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 font-rajdhani font-semibold uppercase tracking-wider">
              We leverage the world&apos;s most powerful engines and tools to deliver physics-defying visuals and cinematic experiences.
            </p>
            <div className="flex flex-wrap gap-4 lg:gap-8">
              {[
                { icon: Cpu, label: "Unreal 5", color: "text-[#51EDB2]" },
                { icon: Zap, label: "After Effects", color: "text-[#EC4899]" },
                { icon: Box, label: "Maya 2024", color: "text-blue-400" }
              ].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2 lg:gap-4 bg-white/70 p-4 lg:p-8 rounded-2xl lg:rounded-[2rem] border border-black/5 w-28 lg:w-40 hover:bg-white hover:shadow-xl transition-all group">
                  <tech.icon className={`${tech.color} w-6 h-6 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform`} />
                  <span className="text-[8px] lg:text-[10px] tracking-[0.2em] uppercase font-black text-center">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-auto lg:aspect-square bg-white rounded-2xl lg:rounded-[4rem] border border-black/5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.02)] lg:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] flex items-center justify-center group overflow-hidden p-6 lg:p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#51EDB2]/10 to-[#EC4899]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="grid grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-12 relative z-10 w-full h-full">
              {[
                { name: "Blender", tech: "Cycles Render", desc: "Modeling & sculpting", color: "hover:border-[#51EDB2]/30 text-[#51EDB2] bg-[#51EDB2]/5" },
                { name: "Cinema 4D", tech: "Redshift Engine", desc: "Premium motion design", color: "hover:border-[#EC4899]/30 text-[#EC4899] bg-[#EC4899]/5" },
                { name: "Houdini", tech: "Vellum / Pyro", desc: "Advanced FX simulation", color: "hover:border-[#51EDB2]/30 text-[#51EDB2] bg-[#51EDB2]/5" },
                { name: "DaVinci", tech: "Color Grading", desc: "Post-production & edit", color: "hover:border-[#EC4899]/30 text-[#EC4899] bg-[#EC4899]/5" }
              ].map((tech, i) => (
                <div key={i} className={`w-full h-full rounded-xl lg:rounded-[2.5rem] border border-black/5 p-4 lg:p-6 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 bg-white/85 backdrop-blur-sm ${tech.color} min-h-[140px] lg:min-h-fit`}>
                  <div>
                    <span className="text-[8px] lg:text-[10px] font-bold tracking-widest uppercase opacity-60 block mb-1">{tech.tech}</span>
                    <h4 className="text-sm lg:text-xl font-black tracking-tight text-black">{tech.name}</h4>
                  </div>
                  <p className="text-[9px] lg:text-[11px] font-semibold text-zinc-400 font-rajdhani">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimationPage;
