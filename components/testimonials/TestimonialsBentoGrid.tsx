"use client";

import React, { useState } from "react";
import { Play, Star, X } from "lucide-react";

interface VideoModalData {
  isOpen: boolean;
  title: string;
  speaker: string;
}

const TestimonialsBentoGrid = () => {
  const [activeVideo, setActiveVideo] = useState<VideoModalData | null>(null);

  return (
    <>
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28">
        {/* Header Element: Orange Accent Bar & Subtitle */}
        <div className="text-center mb-14 md:mb-16">
          <div className="w-12 h-1 bg-[#E05A20] rounded-full mx-auto mb-6 shadow-[0_0_12px_rgba(224,90,32,0.6)]" />
          <p className="font-rajdhani text-gray-300 text-base sm:text-lg md:text-xl font-medium tracking-wide max-w-xl mx-auto leading-relaxed">
            Trusted by industry leaders worldwide to deliver production-ready visual excellence.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Video Image Card */}
            <div
              onClick={() =>
                setActiveVideo({
                  isOpen: true,
                  title: "Client Story & Project Showcase",
                  speaker: "Sarah Jenkins, Marketing Head",
                })
              }
              className="group relative h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-[#121319] cursor-pointer shadow-xl transition-all duration-300 hover:border-[#E05A20]/40 hover:shadow-[0_8px_30px_rgba(224,90,32,0.15)]"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Executive Testimonial"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E05A20] group-hover:border-[#E05A20] shadow-lg">
                  <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
                </div>
              </div>
            </div>

            {/* Card 2: Detailed Review with Stars & Author */}
            <div className="bg-[#121319] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300">
              {/* Orange Play Badge + 5 Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#E05A20] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5 text-white" />
                </div>
                <div className="flex gap-1 text-[#E05A20]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E05A20]" />
                  ))}
                </div>
              </div>

              {/* Main Quote Text */}
              <p className="font-rajdhani text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                We are able to measure and manage all mediums effectively and increase customer satisfaction and resolution time drastically compared to previous solutions we used like Intercom and Zendesk.
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Chris Sees"
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-rajdhani font-bold text-white text-sm tracking-wide">
                    Chris Sees
                  </h4>
                  <p className="font-rajdhani text-xs text-gray-400">
                    Hoxton Mix
                  </p>
                </div>
              </div>

              {/* Secondary Quote Subtext */}
              <p className="font-rajdhani text-gray-400 text-xs mt-4 pt-3 border-t border-white/5 leading-relaxed">
                Crisp has been amazing and the first thing that really attracted me to, as a techy, was the size of the chat widget.
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Review Card with Author Header */}
            <div className="bg-[#121319] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Edoardo Moreni"
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-rajdhani font-bold text-white text-sm tracking-wide">
                    Edoardo Moreni
                  </h4>
                  <p className="font-rajdhani text-xs text-gray-400">
                    Emma
                  </p>
                </div>
              </div>

              <p className="font-rajdhani text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                We chose Crisp from the beginning because of its flexibility and level of automations it allowed
              </p>
            </div>

            {/* Card 2: Centerpiece Quote Card */}
            <div className="bg-[#121319] border border-white/10 rounded-2xl p-6 text-center shadow-xl hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="mb-2">
                <span className="text-[#E05A20] text-4xl font-serif leading-none select-none drop-shadow-[0_0_8px_rgba(224,90,32,0.4)]">
                  &ldquo;
                </span>
              </div>
              <p className="font-rajdhani text-gray-300 text-xs sm:text-sm leading-relaxed italic max-w-sm">
                All is ready to use &ldquo;out of the box&rdquo; and Crisp support is stellar... We have tried many other solutions, Crisp is the only one that allowed us to do everything easily within the same app.
              </p>
            </div>

            {/* Card 3: Team Workshop Video Image Card */}
            <div
              onClick={() =>
                setActiveVideo({
                  isOpen: true,
                  title: "Creative Studio Production Behind The Scenes",
                  speaker: "Production Team Workflow",
                })
              }
              className="group relative h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-[#121319] cursor-pointer shadow-xl transition-all duration-300 hover:border-[#E05A20]/40 hover:shadow-[0_8px_30px_rgba(224,90,32,0.15)]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Production Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E05A20] group-hover:border-[#E05A20] shadow-lg">
                  <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-6">
            {/* Card 1: Stars Rating Review Card */}
            <div className="bg-[#121319] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300">
              {/* Orange Play Badge + 5 Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 rounded-full bg-[#E05A20] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Play className="w-2.5 h-2.5 fill-white ml-0.5 text-white" />
                </div>
                <div className="flex gap-1 text-[#E05A20]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E05A20]" />
                  ))}
                </div>
              </div>

              <p className="font-rajdhani text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                What I really like in Crisp is the level of reliability of the service, the overall interface &amp; interface speed, the fact that it&apos;s much more than just customer messaging, there are a galaxy of addons (mostly free of extra charges) really useful.
              </p>
            </div>

            {/* Card 2: Video Portrait Card */}
            <div
              onClick={() =>
                setActiveVideo({
                  isOpen: true,
                  title: "Partner Testimonial & Industry Growth",
                  speaker: "David Miller, Creative Director",
                })
              }
              className="group relative h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-[#121319] cursor-pointer shadow-xl transition-all duration-300 hover:border-[#E05A20]/40 hover:shadow-[0_8px_30px_rgba(224,90,32,0.15)]"
            >
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                alt="Partner Video"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/45 backdrop-blur-md border border-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E05A20] group-hover:border-[#E05A20] shadow-lg">
                  <Play className="w-4 h-4 fill-white ml-0.5 text-white" />
                </div>
              </div>
            </div>

            {/* Card 3: Review with Author Header */}
            <div className="bg-[#121319] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80"
                  alt="Emmanuel Nataf"
                  className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-rajdhani font-bold text-white text-sm tracking-wide">
                    Emmanuel Nataf
                  </h4>
                  <p className="font-rajdhani text-xs text-gray-400">
                    Reedsy
                  </p>
                </div>
              </div>

              <p className="font-rajdhani text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                Crisp has become a central asset for Reedsy, empowering the team to provide fast, personalized responses and make customer support more effective through AI-powered solutions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Video Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#121319] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div>
                <h3 className="font-michroma text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {activeVideo.title}
                </h3>
                <p className="font-rajdhani text-gray-400 text-xs">
                  {activeVideo.speaker}
                </p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Simulated Player View */}
            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#E05A20] flex items-center justify-center mb-4 text-white shadow-[0_0_25px_rgba(224,90,32,0.6)] animate-pulse">
                <Play className="w-6 h-6 fill-white ml-0.5 text-white" />
              </div>
              <p className="font-michroma text-white text-sm uppercase tracking-widest mb-1">
                Hi-Tech Animation Studio Showreel
              </p>
              <p className="font-rajdhani text-gray-400 text-xs max-w-md">
                Production-scale character animation, VFX pipelines, and photorealistic CGI breakdown.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsBentoGrid;
