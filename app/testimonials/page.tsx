"use client";

import React from "react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  size: "large" | "medium" | "small" | "wide" | "tall";
  company?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vikram Malhotra",
    role: "CEO, TechVibe Solutions",
    content: "Hi-Tech Animation transformed our complex software concept into a simple, beautiful 3D explainer. Their attention to detail is unmatched in the Indian market. The animation quality and professionalism are outstanding.",
    rating: 5,
    size: "large"
  },
  {
    name: "Sarah Jenkins",
    role: "Marketing Head",
    company: "EduGlobal",
    content: "The 3D interactive curriculum they built for us has seen a 60% increase in student engagement. They are innovation partners.",
    rating: 5,
    size: "medium"
  },
  {
    name: "Rajesh Khanna",
    role: "Director",
    company: "Urban Spaces Group",
    content: "Their architectural walkthroughs are photorealistic and helped us close three major pre-sales before the foundation was laid.",
    rating: 5,
    size: "medium"
  },
  {
    name: "Priyadarshini Rao",
    role: "Founder, Edutech Play",
    content: "Hi-Tech Animation's team created our complete nursery rhymes 3D series. The children love the vibrant colors, fluid character movements, and charming world-building. Highly recommended for production-scale kids animation.",
    rating: 5,
    size: "tall"
  },
  {
    name: "David Miller",
    role: "Creative Director, Nexus Games",
    content: "The game assets and character models they delivered surpassed our expectations. Truly a top-tier pipeline partner with optimized textures and clean topologies ready for Unity.",
    rating: 5,
    size: "wide"
  },
  {
    name: "Ananya Sen",
    role: "Production Lead, Animators Guild",
    content: "We partnered with Hi-Tech for key frames and rigging on our feature film. Their speed, modeling precision, and responsiveness are world-class.",
    rating: 5,
    size: "wide"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden py-12">
      {/* High-tech background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(198,99,43,0.05),transparent_50%)] pointer-events-none z-0" />

      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12 lg:pt-20 lg:pb-16 max-w-4xl mx-auto px-4">
        <span className="text-[#C6632B] font-orbitron font-bold tracking-[0.40em] text-xs uppercase mb-4 block drop-shadow-[0_0_15px_rgba(198,99,43,0.3)] animate-pulse">
          Global Recognition
        </span>
        <h1 className="font-michroma text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white">
          Client <span className="text-[#C6632B] italic drop-shadow-[0_0_20px_rgba(198,99,43,0.2)]">Voices</span>
        </h1>
        <p className="font-rajdhani text-lg lg:text-xl text-gray-400 uppercase tracking-widest font-medium max-w-2xl mx-auto leading-relaxed">
          Trusted by industry leaders worldwide to deliver production-ready visual excellence.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[230px]">
          {testimonials.map((t, i) => {
            // Map sizes to responsive column and row spans
            let sizeClasses = "";
            let textClasses = "text-sm lg:text-base";
            
            if (t.size === "large") {
              sizeClasses = "md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#0e0e10] to-[#040405] border-[#C6632B]/20";
              textClasses = "text-lg lg:text-xl font-medium";
            } else if (t.size === "wide") {
              sizeClasses = "md:col-span-2 md:row-span-1";
            } else if (t.size === "tall") {
              sizeClasses = "md:col-span-1 md:row-span-2";
              textClasses = "text-sm lg:text-base leading-relaxed";
            } else {
              sizeClasses = "md:col-span-1 md:row-span-1";
            }

            return (
              <div
                key={i}
                className={`bg-[#080809] border border-white/5 p-6 md:p-8 flex flex-col justify-between relative group hover:border-[#C6632B]/30 transition-all duration-300 shadow-2xl overflow-hidden rounded-none ${sizeClasses}`}
              >
                {/* Tech Bracket Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C6632B] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C6632B] opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Card Background Pattern (for Large Card) */}
                {t.size === "large" && (
                  <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none group-hover:scale-105 transition-transform duration-700">
                    <svg className="w-56 h-56 text-[#C6632B]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                      <polygon points="50,20 80,70 20,70" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                )}

                <div>
                  {/* Rating Stars & Quote */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-4 h-4 fill-[#C6632B] text-[#C6632B] group-hover:scale-110 transition-transform duration-300"
                        />
                      ))}
                    </div>
                    <Quote className="text-white/10 w-8 h-8 group-hover:text-[#C6632B]/20 transition-colors" />
                  </div>

                  {/* Feedback text */}
                  <p className={`font-rajdhani text-gray-300 leading-relaxed font-medium mb-4 ${textClasses}`}>
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Client Profile */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <h4 className="font-orbitron font-bold text-sm tracking-wider text-white group-hover:text-[#C6632B] transition-colors uppercase">
                    {t.name}
                  </h4>
                  <p className="font-rajdhani text-xs text-gray-500 font-bold tracking-widest uppercase mt-0.5">
                    {t.role} {t.company && <span className="text-[#C6632B]/80">/ {t.company}</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
