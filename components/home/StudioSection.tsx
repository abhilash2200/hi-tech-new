"use client";

import React from "react";
import Image from "next/image";

const StudioSection = () => {
  return (
    <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen relative flex overflow-visible lg:overflow-hidden bg-[#F5F7F8] py-10 lg:py-0">
      {/* 1. Legacy Vertical Sidebar (Hidden on Mobile) */}
      <div className="w-[130px] h-full bg-black hidden lg:flex flex-col items-center justify-between py-10 z-50">
        <div className="w-12 h-12" /> {/* Spacer where header logo would overlap */}

        <div className="flex-1 flex items-center justify-center">
          <h2 className="text-white text-8xl font-black tracking-tighter uppercase origin-center -rotate-90 whitespace-nowrap opacity-100">
            Legacy
          </h2>
        </div>
      </div>

      {/* 2. Main Content Area with Watercolor Background */}
      <div className="flex-1 relative h-auto lg:h-full flex items-center px-4 py-6 sm:p-12 lg:px-24">
        {/* Watercolor Background Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/home/about.jpg"
            alt="Background"
            fill
            className="object-cover opacity-60 mix-blend-multiply"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-12 gap-6 sm:gap-8 lg:gap-12 relative z-10">

          {/* Left Side: The Green Glassmorphism Card */}
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-[#638C7E]/40 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-[40px] p-5 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group">
              {/* Decorative Tag */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 mb-6 lg:mb-8">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/90 uppercase">
                  Pioneering Production
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-8 leading-[1.1] tracking-tight font-michroma">
                Hi-Tech Animation Studio
              </h1>

              <div className="space-y-4 lg:space-y-6 text-white/80 text-sm lg:text-base font-medium leading-relaxed">
                <p>
                  Imagination and reality can be combined in such a manner wonderful animations and effects are created. This evokes emotions in your audience, and you are going to tell a story while bringing your imagination and ideas to life.
                </p>
                <p>
                  Every single animation designed and created by us is filled with emotions, details, and imagination. We at Hi-Tech Animation Studio are committed and imaginative in bringing your simple ideas to life in the field of entertainment, and branding, and we are always there to support your ideas to in a wonderful way.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-8 lg:mt-12 pt-6 lg:pt-10 border-t border-white/10">
                {[
                  { label: "Centers", val: "15+" },
                  { label: "Placement", val: "95%" },
                  { label: "Production", val: "Live" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                      {stat.val}
                    </span>
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider sm:tracking-widest text-white/60 font-bold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Mission & Vision Stacks */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-12 pl-0 lg:pl-12 pt-6 lg:pt-0">

            {/* Vision Card */}
            <div className="relative group">
              {/* Overlapping Script Image (Hidden on small screens to avoid overlay clutter) */}
              <div className="absolute -top-16 -left-16 w-48 h-64 z-20 shadow-2xl rotate-[-5deg] transition-transform group-hover:rotate-0 duration-500 hidden xl:block">
                <Image
                  src="/assets/home/scriptText.png"
                  alt="Script"
                  fill
                  sizes="192px"
                  className="object-cover border-4 border-white shadow-xl"
                />
              </div>

              <div className="bg-white/70 backdrop-blur-sm border-2 border-black p-5 sm:p-10 lg:p-14 rounded-sm ml-auto w-full lg:w-[85%] relative z-10">
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 lg:mb-6 flex items-center gap-4">
                  The Vision <span className="flex-1 h-0.5 bg-black/10" />
                </h3>
                <p className="text-sm sm:text-lg text-black/80 font-medium leading-relaxed">
                  We shall strive to touch <span className="text-[#E91E63] font-bold italic">and empower as many lives</span> as possible by fostering creativity. We shall equip young minds.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="relative group pt-4 lg:pt-10">
              {/* Overlapping Portrait Image (Hidden on small screens to avoid overlay clutter) */}
              <div className="absolute top-0 -left-12 w-40 h-40 z-20 shadow-2xl rotate-[8deg] transition-transform group-hover:rotate-0 duration-500 hidden xl:block">
                <Image
                  src="/assets/home/textMen.png"
                  alt="Portrait"
                  fill
                  sizes="160px"
                  className="object-cover border-4 border-white shadow-xl"
                />
              </div>

              <div className="bg-white/70 backdrop-blur-sm border-2 border-black p-5 sm:p-10 lg:p-14 rounded-sm ml-auto w-full lg:w-[85%] relative z-10">
                <h3 className="text-lg font-bold uppercase tracking-widest mb-4 lg:mb-6 flex items-center gap-4">
                  The Mission <span className="flex-1 h-0.5 bg-black/10" />
                </h3>
                <p className="text-sm sm:text-lg text-black/80 font-medium leading-relaxed">
                  We will make our organisation a significant contributor in making this world a better place by being a responsible corporate citizen.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StudioSection;
