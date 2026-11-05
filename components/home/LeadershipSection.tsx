"use client";

import React from "react";
import Image from "next/image";

const leaders = [
  {
    name: "Mr. Subrata Roy",
    role: "Managing Director",
    image: "/assets/home/textMen.png",
  },
  {
    name: "Mr. Amit Roy",
    role: "Executive Director",
    image: "/assets/home/textMen.png",
  },
  {
    name: "Dr. S. Mukherjee",
    role: "Creative Visionary",
    image: "/assets/home/textMen.png",
  },
];

const LeadershipSection = () => {
  return (
    <section className="horizontal-section shrink-0 w-full lg:w-[80vw] h-auto lg:h-screen min-h-screen relative flex overflow-visible lg:overflow-hidden bg-[#F2EEED] py-10 lg:py-0">
      {/* 1. Vertical Sidebar (Hidden on Mobile) */}
      <div className="w-[130px] h-full bg-black hidden lg:flex flex-col items-center justify-center z-50">
        <h2 className="text-white text-8xl font-black uppercase tracking-tighter origin-center -rotate-90 whitespace-nowrap">
          Leadership
        </h2>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:p-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 max-w-7xl w-full">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group rounded-xl border border-black/5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[5/7] w-full overflow-hidden mb-6 rounded-lg bg-gray-50">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info Area */}
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-start sm:items-end md:items-start lg:items-end gap-4 sm:gap-2">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] leading-tight mb-1 font-michroma">
                    {leader.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#C6632B]">
                    {leader.role}
                  </p>
                </div>

                <button className="bg-[#C6632B] hover:bg-black text-white text-[9px] font-bold uppercase tracking-widest px-4 py-2.5 flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 w-full sm:w-auto md:w-full lg:w-auto">
                  Explore <span>&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
