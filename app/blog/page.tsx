"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { broadsheetArticles } from "./blogData";

export default function NewspaperSpread() {
  const router = useRouter();

  const openArticle = (slug: string) => {
    router.push(`/blog/${slug}`);
  };

  return (
    <main className="w-full min-h-screen bg-[#e8e3d5] text-[#2c2824] py-8 px-2 sm:px-6 font-serif select-none">

      {/* NEWSPAPER SPREAD CONTAINER */}
      <div className="max-w-full mx-auto p-4 sm:p-10 relative overflow-hidden">

        {/* CENTER FOLD SHADOW EFFECT */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none hidden lg:block z-10" />

        {/* TOP BROADSHEET BANNER / HEADER */}
        <header className="border-b-2 border-[#2c2824] pb-4 mb-6">
          <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#615a52] border-b border-[#2c2824]/30 pb-1 mb-3">
            <span>VOL. XXIV NO. 108</span>
            <span>THE GLOBAL ANIMATION BROADSHEET SPREAD</span>
            <span>EDITION: GLOBAL WIRE — $3.50</span>
          </div>

          <div className="text-center">
            <span className="text-[9px] font-sans uppercase tracking-[0.4em] text-[#b73526] font-extrabold block mb-1">
              Official Journal of Motion & 3D Production
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter uppercase">
              The Animation{" "}
              <span className="text-[#b73526] italic font-normal lowercase">
                Chronicle
              </span>
            </h1>
          </div>

          <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#615a52] border-t border-[#2c2824]/30 pt-1 mt-3">
            <span>Monday, May 18, 2026</span>
            <span>Established 2000</span>
            <span>Special Production Supplement</span>
          </div>
        </header>

        {/* MAIN 4-COLUMN BROADSHEET GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#2c2824]/30">

          {/* COLUMN 1: LEAD STORY */}
          <div className="lg:pr-4 flex flex-col justify-between">
            <article
              className="group cursor-pointer"
              onClick={() => openArticle(broadsheetArticles[0].slug)}
            >
              <span className="text-[9px] font-sans font-black uppercase text-[#b73526] tracking-widest block mb-1">
                [ {broadsheetArticles[0].category} ]
              </span>

              <h2 className="text-xl sm:text-2xl font-bold leading-tight mb-2 group-hover:text-[#b73526] transition-colors">
                {broadsheetArticles[0].headline}
              </h2>

              <p className="italic text-xs text-[#554f46] mb-3">
                {broadsheetArticles[0].subheadline}
              </p>

              <div className="aspect-[4/3] bg-[#dfd9cb] overflow-hidden mb-3 border border-[#2c2824]/20">
                <img
                  src={broadsheetArticles[0].image}
                  alt={broadsheetArticles[0].headline}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* MULTI-COLUMN TEXT SIMULATION */}
              <div className="text-[11px] leading-relaxed text-[#3a3530] space-y-2 column-count-1">
                <p className="first-letter:float-left first-letter:text-4xl first-letter:font-black first-letter:mr-2 first-letter:leading-none first-letter:text-[#b73526]">
                  {broadsheetArticles[0].paragraphs[0]}
                </p>

                <p className="line-clamp-3">
                  {broadsheetArticles[0].paragraphs[1]}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#2c2824]/20 flex justify-between items-center text-[9px] font-sans font-bold uppercase text-[#b73526]">
                <span>By {broadsheetArticles[0].author}</span>
                <span className="flex items-center gap-1 group-hover:underline">
                  Read Full Story →
                </span>
              </div>
            </article>
          </div>

          {/* COLUMN 2: SECONDARY STORY */}
          <div className="lg:px-4 pt-6 lg:pt-0 flex flex-col justify-between">
            <article
              className="group cursor-pointer"
              onClick={() => openArticle(broadsheetArticles[1].slug)}
            >
              <span className="text-[9px] font-sans font-black uppercase text-[#b73526] tracking-widest block mb-1">
                [ {broadsheetArticles[1].category} ]
              </span>

              <h2 className="text-lg sm:text-xl font-bold leading-tight mb-2 group-hover:text-[#b73526] transition-colors">
                {broadsheetArticles[1].headline}
              </h2>

              <div className="aspect-[16/10] bg-[#dfd9cb] overflow-hidden mb-3 border border-[#2c2824]/20">
                <img
                  src={broadsheetArticles[1].image}
                  alt={broadsheetArticles[1].headline}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="text-[11px] leading-relaxed text-[#3a3530] space-y-2">
                <p className="first-letter:float-left first-letter:text-3xl first-letter:font-black first-letter:mr-2 first-letter:leading-none first-letter:text-[#b73526]">
                  {broadsheetArticles[1].paragraphs[0]}
                </p>

                <p className="line-clamp-4">
                  {broadsheetArticles[1].paragraphs[1]}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#2c2824]/20 flex justify-between items-center text-[9px] font-sans font-bold uppercase text-[#b73526]">
                <span>By {broadsheetArticles[1].author}</span>
                <span className="flex items-center gap-1 group-hover:underline">
                  Read Dispatch →
                </span>
              </div>
            </article>
          </div>

          {/* COLUMN 3: TERTIARY STORIES */}
          <div className="lg:px-4 pt-6 lg:pt-0 space-y-6">
            <article
              className="group cursor-pointer border-b border-[#2c2824]/20 pb-4"
              onClick={() => openArticle(broadsheetArticles[2].slug)}
            >
              <span className="text-[8px] font-sans font-black uppercase text-[#b73526] tracking-widest block mb-0.5">
                {broadsheetArticles[2].category}
              </span>

              <h3 className="text-base font-bold leading-snug mb-1 group-hover:text-[#b73526]">
                {broadsheetArticles[2].headline}
              </h3>

              <p className="text-[10px] leading-relaxed text-[#4a443c] line-clamp-3">
                {broadsheetArticles[2].paragraphs[0]}
              </p>

              <span className="text-[8px] font-sans font-bold uppercase text-[#615a52] mt-1 block">
                By {broadsheetArticles[2].author}
              </span>

              <span className="mt-2 inline-block text-[8px] font-sans font-bold uppercase tracking-widest text-[#b73526] group-hover:underline">
                Read Story →
              </span>
            </article>

            {/* ADVERTISEMENT / BULLETIN BOX */}
            <div className="border border-dashed border-[#2c2824]/40 p-4 bg-[#eae4d5] text-center">
              <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-[#b73526] block mb-1">
                Studio Announcement
              </span>

              <h4 className="font-serif font-bold text-sm mb-1">
                Join Our Masterclass in Unreal Engine 5
              </h4>

              <p className="text-[10px] text-[#554f46] mb-3">
                Master real-time virtual production with industry leads.
              </p>

              <button
                type="button"
                onClick={() => alert("Registration link clicked!")}
                className="bg-[#2c2824] text-[#f4f0e6] text-[8px] font-sans font-bold uppercase px-3 py-1.5 tracking-widest hover:bg-[#b73526] transition-colors cursor-pointer"
              >
                Secure Seat
              </button>
            </div>
          </div>

          {/* COLUMN 4: NEWSROOM BRIEFS & ARCHIVE */}
          <div className="lg:pl-4 pt-6 lg:pt-0 space-y-5">
            <h3 className="font-sans font-black text-xs uppercase tracking-widest border-b-2 border-[#2c2824] pb-1">
              Wire Dispatches
            </h3>

            <article
              className="group cursor-pointer"
              onClick={() => openArticle(broadsheetArticles[3].slug)}
            >
              <span className="text-[8px] font-sans font-bold text-[#b73526] uppercase">
                {broadsheetArticles[3].category}
              </span>

              <h4 className="font-bold text-sm leading-snug group-hover:text-[#b73526] mb-1">
                {broadsheetArticles[3].headline}
              </h4>

              <p className="text-[10px] text-[#4a443c] line-clamp-3">
                {broadsheetArticles[3].paragraphs[0]}
              </p>

              <span className="mt-2 inline-block text-[8px] font-sans font-bold uppercase tracking-widest text-[#b73526] group-hover:underline">
                Read Dispatch →
              </span>
            </article>

            <div className="border-t border-[#2c2824]/20 pt-4">
              <h5 className="font-sans font-bold text-[9px] uppercase tracking-wider text-[#615a52] mb-2">
                Editorial Note
              </h5>

              <p className="font-serif italic text-[11px] text-[#4a443c] leading-snug">
                "Traditional linear animation pipelines are undergoing their biggest transformation in two decades. The barrier between game engines and cinematic rendering is practically gone."
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BROADSHEET FOOTER */}
        <footer className="border-t-2 border-[#2c2824] mt-8 pt-3 text-center text-[9px] font-sans uppercase tracking-[0.2em] text-[#615a52]">
          <span>
            © 2000–2026 The Animation Chronicle · All Rights Reserved · Designed in Broadsheet Print Style
          </span>
        </footer>

      </div>
    </main>
  );
}