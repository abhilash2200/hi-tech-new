"use client";

import React, { useState } from "react";
import GeodesicGlobe from "./GeodesicGlobe";

const WhoWeAreContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", course: "" });
    }, 4000);
  };

  return (
    <section className="relative w-full bg-[#0A0B0E] text-white overflow-hidden pt-12 pb-20 lg:pb-28">
      {/* Background atmosphere radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_95%,rgba(184,74,26,0.06),transparent_65%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: "WHO WE ARE" & EXACT 3D STUDIO ARTWORK       */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Title: "WHO" in Orange Outline, "WE ARE" in Solid White */}
            <h2 className="font-michroma text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.2em] mb-6 flex items-center flex-wrap">
              <span className="text-transparent [-webkit-text-stroke:1.5px_#E05A20] mr-3 drop-shadow-[0_0_15px_rgba(224,90,32,0.5)]">
                WHO
              </span>
              <span className="text-white">WE ARE</span>
            </h2>

            {/* Description Paragraph */}
            <p className="font-rajdhani text-gray-300 text-sm sm:text-base uppercase tracking-wider leading-relaxed font-medium mb-10 max-w-xl">
              HI-TECH ANIMATION IS AN INDIA-BASED ANIMATION PRODUCTION STUDIO WITH A STATE-OF-THE-ART PRODUCTION FACILITY WITH OFFICES LOCATED IN KOLKATA AND MUMBAI.
            </p>

            {/* Exact 3D Studio Production Artwork (Cube, Clapperboard, Film Strip & Sphere) */}
            <div className="relative w-full max-w-[480px] h-[210px] sm:h-[230px]">
              <svg
                viewBox="0 0 480 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible select-none drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              >
                <defs>
                  {/* Orange Glow Filters */}
                  <filter id="studioOrangeGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Clapperboard Body Shading */}
                  <linearGradient id="clapperBodySlate" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E2028" />
                    <stop offset="60%" stopColor="#121319" />
                    <stop offset="100%" stopColor="#0B0C0F" />
                  </linearGradient>

                  {/* 3D Wireframe Sphere Gradients */}
                  <radialGradient id="sphereVolumeGrad" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#2A2D3A" />
                    <stop offset="45%" stopColor="#14151C" />
                    <stop offset="100%" stopColor="#060709" />
                  </radialGradient>
                </defs>

                {/* 1. 3D Isometric Wireframe Cube (Far Left) */}
                <g stroke="#E05A20" strokeWidth="1.2">
                  <polygon
                    points="50,110 90,90 130,110 90,130"
                    fill="#15171F"
                    fillOpacity="0.35"
                    stroke="#E05A20"
                    strokeOpacity="0.85"
                  />
                  <polygon
                    points="50,110 90,130 90,180 50,160"
                    fill="#0E1017"
                    fillOpacity="0.45"
                    stroke="#E05A20"
                    strokeOpacity="0.85"
                  />
                  <polygon
                    points="90,130 130,110 130,160 90,180"
                    fill="#12131C"
                    fillOpacity="0.3"
                    stroke="#E05A20"
                    strokeOpacity="0.85"
                  />

                  <line x1="50" y1="160" x2="90" y2="140" stroke="#E05A20" strokeOpacity="0.3" strokeDasharray="3 3" />
                  <line x1="130" y1="160" x2="90" y2="140" stroke="#E05A20" strokeOpacity="0.3" strokeDasharray="3 3" />
                  <line x1="90" y1="90" x2="90" y2="140" stroke="#E05A20" strokeOpacity="0.3" strokeDasharray="3 3" />

                  <circle cx="50" cy="110" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="90" cy="90" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="130" cy="110" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="90" cy="130" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="50" cy="160" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="90" cy="180" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                  <circle cx="130" cy="160" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                </g>

                {/* 2. 3D Director's Clapperboard (Center) */}
                <g transform="translate(130, 68)">
                  <rect
                    x="10"
                    y="52"
                    width="142"
                    height="94"
                    rx="5"
                    fill="url(#clapperBodySlate)"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1.2"
                  />

                  <line x1="22" y1="82" x2="140" y2="82" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="22" y1="104" x2="140" y2="104" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="70" y1="82" x2="70" y2="132" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <line x1="108" y1="82" x2="108" y2="132" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

                  <line x1="14" y1="145" x2="148" y2="145" stroke="#E05A20" strokeWidth="1.8" strokeOpacity="0.7" strokeLinecap="round" />

                  {/* Top Hinged Clapper Arm */}
                  <g transform="rotate(-15 10 52)">
                    <rect
                      x="10"
                      y="26"
                      width="142"
                      height="26"
                      rx="3"
                      fill="#121319"
                      stroke="#E05A20"
                      strokeWidth="1"
                      strokeOpacity="0.8"
                    />

                    <polygon points="26,52 38,26 50,26 38,52" fill="rgba(255,255,255,0.85)" />
                    <polygon points="56,52 68,26 80,26 68,52" fill="rgba(255,255,255,0.85)" />
                    <polygon points="86,52 98,26 110,26 98,52" fill="rgba(255,255,255,0.85)" />
                    <polygon points="116,52 128,26 140,26 128,52" fill="rgba(255,255,255,0.85)" />

                    <circle cx="15" cy="39" r="3.2" fill="#3D404C" stroke="#E05A20" strokeWidth="1" />
                  </g>
                </g>

                {/* 3. Sweeping 35mm Film Strip Ribbon */}
                <g>
                  <path
                    d="M 180 165 C 225 150, 260 115, 280 68 C 295 38, 335 38, 370 78 C 392 104, 382 150, 350 176"
                    stroke="#E05A20"
                    strokeWidth="34"
                    strokeOpacity="0.14"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 180 148 C 225 133, 260 98, 280 51 C 295 21, 335 21, 370 61 C 392 87, 382 133, 350 159"
                    stroke="#E05A20"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                    fill="none"
                  />
                  <path
                    d="M 180 182 C 225 167, 260 132, 280 85 C 295 55, 335 55, 370 95 C 392 121, 382 167, 350 193"
                    stroke="#E05A20"
                    strokeWidth="1.2"
                    strokeOpacity="0.75"
                    fill="none"
                  />

                  <line x1="222" y1="137" x2="232" y2="169" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.55" />
                  <line x1="262" y1="94" x2="277" y2="124" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.55" />
                  <line x1="298" y1="48" x2="318" y2="74" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.55" />
                  <line x1="345" y1="42" x2="357" y2="72" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.55" />
                  <line x1="378" y1="82" x2="374" y2="116" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.55" />

                  <rect x="204" y="136" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="240" y="108" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="276" y="68" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="312" y="40" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="348" y="46" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="375" y="74" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />

                  <rect x="204" y="168" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="240" y="140" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="276" y="100" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="312" y="72" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="348" y="78" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                  <rect x="375" y="106" width="3" height="4" rx="0.5" fill="#E05A20" opacity="0.85" />
                </g>

                {/* 4. 3D Wireframe Sphere */}
                <g transform="translate(365, 150)">
                  <circle cx="0" cy="0" r="40" fill="url(#sphereVolumeGrad)" stroke="#E05A20" strokeWidth="1" strokeOpacity="0.8" />
                  <ellipse cx="0" cy="0" rx="40" ry="15" stroke="#E05A20" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
                  <ellipse cx="0" cy="-19" rx="35" ry="10" stroke="#E05A20" strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
                  <ellipse cx="0" cy="19" rx="35" ry="10" stroke="#E05A20" strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
                  <ellipse cx="0" cy="0" rx="15" ry="40" stroke="#E05A20" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
                  <line x1="-40" y1="0" x2="40" y2="0" stroke="#E05A20" strokeWidth="0.8" strokeOpacity="0.5" />
                  <line x1="0" y1="-40" x2="0" y2="40" stroke="#E05A20" strokeWidth="0.8" strokeOpacity="0.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#E05A20" filter="url(#studioOrangeGlow)" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: "KEEP UP TO DATE" FORM CARD                 */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#121318] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl relative z-10">
              <h3 className="font-michroma text-white text-sm sm:text-base font-bold uppercase tracking-[0.2em] mb-6">
                KEEP UP TO DATE
              </h3>

              {formSubmitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#E05A20]/20 border border-[#E05A20] flex items-center justify-center mx-auto mb-4 text-[#E05A20]">
                    ✓
                  </div>
                  <h4 className="font-michroma text-white text-sm uppercase tracking-wider mb-2">
                    Application Received!
                  </h4>
                  <p className="font-rajdhani text-gray-400 text-xs">
                    Our team will contact you shortly with the enrollment details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full bg-[#181a20] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E05A20]/60 transition-colors font-rajdhani tracking-wide"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full bg-[#181a20] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E05A20]/60 transition-colors font-rajdhani tracking-wide"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone No."
                      className="w-full bg-[#181a20] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E05A20]/60 transition-colors font-rajdhani tracking-wide"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      placeholder="Course"
                      className="w-full bg-[#181a20] border border-white/5 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E05A20]/60 transition-colors font-rajdhani tracking-wide"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E05A20] hover:bg-[#eb652a] text-white font-michroma font-bold py-3.5 rounded-lg text-xs tracking-[0.25em] uppercase transition-all shadow-[0_4px_25px_rgba(224,90,32,0.45)] hover:shadow-[0_4px_30px_rgba(224,90,32,0.65)] cursor-pointer active:scale-[0.99] mt-2"
                  >
                    APPLY NOW
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SOCIAL LINKS BAR WITH SUBTLE TOP DIVIDER LINE      */}
        {/* ========================================================= */}
        <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-center gap-6 sm:gap-10 text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-[#E05A20] transition-colors group"
          >
            <span className="w-4 h-4 rounded border border-gray-500 group-hover:border-[#E05A20] flex items-center justify-center text-[10px] transition-colors">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </span>
            <span>TWITTER</span>
          </a>

          <span className="text-white/20 select-none">|</span>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-[#E05A20] transition-colors group"
          >
            <span className="w-4 h-4 rounded border border-gray-500 group-hover:border-[#E05A20] flex items-center justify-center text-[10px] transition-colors">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            <span>YOUTUBE</span>
          </a>

          <span className="text-white/20 select-none">|</span>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-[#E05A20] transition-colors group"
          >
            <span className="w-4 h-4 rounded border border-gray-500 group-hover:border-[#E05A20] flex items-center justify-center text-[10px] transition-colors">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <span>FACEBOOK</span>
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT BOTTOM CORNER: EXACT 3D GEODESIC SPHERE SVG         */}
      {/* (Placed seamlessly in corner matching the screenshot)      */}
      {/* ========================================================= */}
      <div className="absolute right-0 bottom-0 translate-x-[22%] translate-y-[18%] w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] pointer-events-none select-none z-0 opacity-30 sm:opacity-35 transition-opacity duration-500">
        <GeodesicGlobe
          size={420}
          color="#B84A1A"
          nodeColor="#C65322"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default WhoWeAreContact;
