"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EvolutionSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Cards ko ref array mein collect karne ke liye helper function
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Har card ek-ek karke scroll ke sath fade-in aur upar aayega
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Jab card viewport ke 85% par aayega tab animation start hogi
              end: "top 50%",
              scrub: true, // Scroll ke sath smooth sync rahega
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full min-h-screen bg-[#060B09] rounded-t-[3rem] sm:rounded-t-[4rem] px-4 sm:px-8 lg:px-16 py-20 sm:py-28 text-white select-none shadow-[0_-30px_50px_rgba(0,0,0,0.8)]"
    >
      {/* Section Header */}
      <div className="max-w-[1320px] mx-auto mb-16 sm:mb-24">
        <h2 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[5rem] leading-[0.92] tracking-tight uppercase text-white">
          2D
        </h2>
        <span className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[5.25rem] leading-[0.95] tracking-wide uppercase text-transparent [-webkit-text-stroke:2px_white] mt-1 block">
          EVOLUTION
        </span>
      </div>

      {/* Cards Container - One by One Scroll Animation */}
      <div className="max-w-[1320px] mx-auto flex flex-col gap-16 sm:gap-24">
        
        {/* Card 1 */}
        <div
          ref={addToRefs}
          className="w-full bg-[#111A16] border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden relative group"
        >
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden mb-8">
            {/* Aap yahan apni image lagayein */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20 space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#10D876] text-[#04120B] font-orbitron font-bold text-xs tracking-wider uppercase">
                2D Animation
              </span>
              <h3 className="font-orbitron font-bold text-2xl sm:text-4xl text-white">
                Abyss of the Unseen Oracle
              </h3>
            </div>
            {/* Replace with <Image src="..." alt="..." fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-400 font-rajdhani text-xl">
              [Card 1 Image Preview]
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          ref={addToRefs}
          className="w-full bg-[#111A16] border border-white/10 rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden relative group"
        >
          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-6 left-6 z-20 space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-[#10D876] text-[#04120B] font-orbitron font-bold text-xs tracking-wider uppercase">
                2D Motion
              </span>
              <h3 className="font-orbitron font-bold text-2xl sm:text-4xl text-white">
                Chronicles of the Eldritch Realm
              </h3>
            </div>
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-400 font-rajdhani text-xl">
              [Card 2 Image Preview]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EvolutionSection;