"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

interface SubCategory {
  title: string;
  description: string;
  href?: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  subCategories: SubCategory[];
  accentColor: string;
}

const CategoryPageTemplate = ({ title, subtitle, description, subCategories, accentColor }: CategoryPageProps) => {
  return (
    <>
      {/* Hero Section with Mesh Gradient */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-screen relative flex items-center justify-center overflow-hidden bg-white text-black">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            background: `radial-gradient(circle at 20% 30%, ${accentColor} 0%, transparent 40%), 
                         radial-gradient(circle at 80% 70%, #9333ea 0%, transparent 40%)`
          }}
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-orbitron text-4xl sm:text-6xl md:text-[8vw] lg:text-[10vw] font-black leading-none tracking-tighter uppercase text-black">
            {title}
          </h1>
          <div className="mt-6 lg:mt-8 max-w-2xl mx-auto">
             <p className="text-base sm:text-xl font-rajdhani text-gray-400 tracking-widest uppercase mb-4">{subtitle}</p>
             <p className="text-sm sm:text-lg text-gray-500 leading-relaxed font-rajdhani font-semibold">{description}</p>
          </div>
        </div>
        
        {/* Animated Background Text (Hidden on Mobile) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none pointer-events-none opacity-[0.03] hidden lg:block">
          <span className="font-orbitron text-[40vw] font-black text-black">{title.substring(0, 1)}</span>
        </div>
      </section>

      {/* Sub-categories Grid (Collapses to 1 column on mobile) */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-white text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-20 lg:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full max-w-7xl mx-auto">
          {subCategories.map((cat, i) => (
            <a 
              key={i} 
              href={cat.href || "#"}
              className="group relative bg-gray-50 border border-gray-100 p-6 sm:p-10 lg:p-12 rounded-2xl hover:bg-brand-red hover:text-white transition-all duration-700 cursor-pointer overflow-hidden block shadow-sm hover:shadow-xl"
            >
               <div 
                 className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity"
                 style={{ background: `radial-gradient(circle at top right, ${accentColor}, transparent)` }}
               />
               <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 group-hover:text-white/50 uppercase block mb-4">0{i+1} / CATEGORY</span>
               <h3 className="font-orbitron text-2xl sm:text-4xl font-black mb-4 tracking-tight group-hover:text-white leading-none">
                 {cat.title}
               </h3>
               <p className="text-sm sm:text-lg text-gray-400 group-hover:text-white/70 leading-relaxed mb-6 lg:mb-10 font-rajdhani">
                 {cat.description}
               </p>
               <button className="flex items-center gap-2 font-bold tracking-widest text-[10px] sm:text-xs uppercase border-b border-current pb-2 group-hover:translate-x-2 transition-transform cursor-pointer">
                 View Details <ChevronRight size={14} />
               </button>
            </a>
          ))}
        </div>
      </section>

      {/* The Method Section (Collapses to vertical stack on mobile) */}
      <section className="horizontal-section shrink-0 w-full lg:w-screen h-auto lg:h-screen min-h-screen bg-gray-50 text-black p-6 sm:p-12 lg:p-20 flex items-center border-l border-gray-100 py-20 lg:py-0">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="font-orbitron text-3xl sm:text-5xl lg:text-6xl font-black mb-10 lg:mb-20 tracking-tighter uppercase">THE <span className="text-brand-red">METHOD</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
             {[
               { step: "01", title: "CONCEPT", desc: "Developing the core idea and visual language." },
               { step: "02", title: "DESIGN", desc: "Creating detailed characters, environments, and assets." },
               { step: "03", title: "ANIMATE", desc: "Bringing static elements to life with professional movement." },
               { step: "04", title: "RENDER", desc: "Finalizing with lighting, effects, and post-production." }
             ].map((item, i) => (
                <div key={i} className="relative group">
                   <span className="font-orbitron text-6xl lg:text-8xl font-black opacity-5 absolute -top-8 -left-4 lg:-top-10 lg:-left-6 group-hover:opacity-10 transition-opacity">{item.step}</span>
                   <h4 className="font-orbitron font-bold text-lg lg:text-xl mb-3 relative z-10">{item.title}</h4>
                   <p className="text-gray-500 font-rajdhani text-sm sm:text-lg leading-relaxed">{item.desc}</p>
                   <div 
                     className="h-1 w-12 mt-4 transition-all group-hover:w-full" 
                     style={{ backgroundColor: i % 2 === 0 ? accentColor : '#9333ea' }} 
                   />
                </div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPageTemplate;
