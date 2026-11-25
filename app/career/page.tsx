"use client";

import React, { useState, useRef } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, X, ChevronDown, Check, FileText } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Mock Jobs Database with Experience field
const jobs = [
  {
    id: 1,
    title: "Senior 3D Animator",
    location: "Kolkata, IN",
    type: "Full Time",
    category: "Animation",
    experience: "SENIOR LEVEL",
    isFeatured: true,
    color: "bg-[#DCD6FF]", // Pastel Purple
    desc: "We are seeking a senior animator to breathe life into complex characters. You will work on international movies, television series, and collaborate with leading directors to set the standard.",
    requirements: [
      "5+ years of experience in character animation.",
      "Expert knowledge of Autodesk Maya or Blender.",
      "Strong understanding of weight, timing, and physics.",
      "A rich portfolio/showreel demonstrating human and creature animation."
    ]
  },
  {
    id: 2,
    title: "VFX Compositor",
    location: "Remote",
    type: "Contract",
    category: "VFX",
    experience: "MID LEVEL",
    isFeatured: true,
    color: "bg-[#C2F3D9]", // Pastel Mint Green
    desc: "Join our post-production team to integrate live action, CGI, and matte painting. You will ensure photo-realism, seamless compositing, and color integration for international commercials and films.",
    requirements: [
      "3+ years of experience as a compositor in high-end VFX productions.",
      "Proficient in Foundry Nuke and Adobe After Effects.",
      "Strong understanding of color space, lighting, and camera optics.",
      "Ability to solve complex technical problems on tight deadlines."
    ]
  },
  {
    id: 3,
    title: "Lead UI/UX Designer",
    location: "Kolkata, IN",
    type: "Full Time",
    category: "Design",
    experience: "SENIOR LEVEL",
    isFeatured: false,
    color: "bg-[#FFE5D9]", // Pastel Peach
    desc: "Oversee the visual identity and interface design for our digital web experiences, student portals, and interactive media. Create layouts that delight students and industry clients alike.",
    requirements: [
      "4+ years of UI/UX design experience for web & mobile apps.",
      "Expert skills in Figma, Adobe Creative Suite.",
      "Deep understanding of responsive layouts, grids, typography, and color theory.",
      "Experience setting up design systems and collaborating with front-end developers."
    ]
  },
  {
    id: 4,
    title: "Technical Animator",
    location: "Kolkata, IN",
    type: "Full Time",
    category: "Animation",
    experience: "MID LEVEL",
    isFeatured: false,
    color: "bg-[#C6E6F6]", // Pastel Blue
    desc: "Bridge the gap between art and code. You will build and support robust skeletal rigs, develop custom scripts and tools for the animation pipeline, and resolve complex technical bottlenecks.",
    requirements: [
      "Rigging experience in Maya, Unreal, or Unity.",
      "Proficiency in Python, MEL, or C++ scripting.",
      "Strong eye for joint placement, deformations, and motion performance.",
      "Excellent communication skills to mediate between developers and artists."
    ]
  },
  {
    id: 5,
    title: "Project Manager",
    location: "Mumbai, IN",
    type: "Full Time",
    category: "Management",
    experience: "MID LEVEL",
    isFeatured: true,
    color: "bg-[#F5F2EB]", // Warm Pastel Sand
    desc: "Help keep our studio projects running smoothly. You will manage production timelines, resources, deliverables, and interface directly with studio executives and corporate partners.",
    requirements: [
      "3+ years of project coordination or project management experience.",
      "Faint familiarity with Agile frameworks and tracking software like Jira/Trello.",
      "Background in animation, gaming, or creative studio environments is highly preferred.",
      "Superb organizational and interpersonal communication skills."
    ]
  },
  {
    id: 6,
    title: "2D Concept Artist",
    location: "Remote",
    type: "Contract",
    category: "Design",
    experience: "ENTRY LEVEL",
    isFeatured: false,
    color: "bg-[#FFE5D9]", // Pastel Peach
    desc: "Create striking environment layouts, character concepts, and prop designs for our upcoming pre-production projects. Establish visual guides and reference sheets for 3D modelers.",
    requirements: [
      "Expert painting skills in Photoshop or Procreate.",
      "Strong drafting skills and understanding of perspective, anatomy, and costume design.",
      "Ability to translate rough scripts or director ideas into complete visual layouts.",
      "Strong digital portfolio showing a range of cartoon and realistic designs."
    ]
  }
];

const renderCardIllustration = (category: string, index: number) => {
  const key = (category || "").toLowerCase();

  if (key.includes("vfx") || index % 3 === 1) {
    return (
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="absolute -top-8 -left-4 w-10 h-10 drop-shadow-[0_6px_12px_rgba(56,189,248,0.45)] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"
        >
          <defs>
            <linearGradient id="sparkleGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path
            d="M20 2 C21.5 14, 26 18.5, 38 20 C26 21.5, 21.5 26, 20 38 C18.5 26, 14 21.5, 2 20 C14 18.5, 18.5 14, 20 2 Z"
            fill="url(#sparkleGrad)"
          />
        </svg>

        <div className="relative w-24 h-24 rounded-2xl rotate-[18deg] bg-gradient-to-br from-white/75 via-cyan-200/40 to-purple-300/60 border-2 border-white/90 backdrop-blur-md shadow-[0_18px_30px_rgba(31,38,135,0.18),inset_0_0_16px_rgba(255,255,255,0.85)] transition-transform duration-500 group-hover:rotate-[26deg] group-hover:scale-105">
          <div className="absolute inset-2.5 rounded-xl border border-white/70 bg-gradient-to-tr from-emerald-200/30 via-transparent to-indigo-300/40" />
        </div>
      </div>
    );
  }

  if (key.includes("design") || index % 3 === 2) {
    return (
      <svg
        viewBox="0 0 140 140"
        className="w-32 h-32 drop-shadow-[0_18px_22px_rgba(25,20,35,0.22)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-6"
      >
        <g transform="rotate(32 70 70)">
          <path d="M26 52 Q70 28 114 52" stroke="#D97706" strokeWidth="3.5" fill="none" />
          <circle cx="26" cy="52" r="5" fill="#FBBF24" />
          <circle cx="114" cy="52" r="5" fill="#FBBF24" />
          <path d="M70 18 L100 84 L40 84 Z" fill="#D1D5DB" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="70" y1="18" x2="70" y2="62" stroke="#4B5563" strokeWidth="2.5" />
          <circle cx="70" cy="64" r="6" fill="#4B5563" />
        </g>
      </svg>
    );
  }

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg
        viewBox="0 0 140 140"
        className="w-28 h-28 drop-shadow-[0_18px_22px_rgba(25,20,35,0.28)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-rotate-3"
      >
        <g transform="rotate(-12 70 70)">
          <rect x="22" y="30" width="96" height="16" rx="4" fill="#1F242D" />
          <rect x="22" y="60" width="96" height="58" rx="10" fill="#1E222B" />
          <path d="M63 78 L83 89 L63 100 Z" fill="#F9FAFB" />
        </g>
      </svg>
    </div>
  );
};

const CareerPage = () => {
  // GSAP Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Dropdown states
  const [selectedFeatured, setSelectedFeatured] = useState("ALL");
  const [selectedType, setSelectedType] = useState("ALL");
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [selectedExperience, setSelectedExperience] = useState("ALL");

  // Dropdown open states
  const [featuredOpen, setFeaturedOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  // Selected Job for Details Modal
  const [activeJob, setActiveJob] = useState<typeof jobs[0] | null>(null);

  // Application Form States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFullName("");
      setEmail("");
      setPortfolio("");
      setMessage("");
      setFormSubmitted(false);
      setActiveJob(null);
    }, 2500);
  };

  // Unique options for filters
  const featuredOptions = ["ALL", "FEATURED", "ANIMATION", "VFX", "DESIGN", "MANAGEMENT"];
  const typeOptions = ["ALL", "FULL TIME", "CONTRACT"];
  const locationOptions = ["ALL", "KOLKATA, IN", "MUMBAI, IN", "REMOTE"];
  const experienceOptions = ["ALL", "ENTRY LEVEL", "MID LEVEL", "SENIOR LEVEL"];

  // Filtering Logic
  const filteredJobs = jobs.filter((job) => {
    const matchFeatured =
      selectedFeatured === "ALL"
        ? true
        : selectedFeatured === "FEATURED"
          ? job.isFeatured
          : job.category.toUpperCase() === selectedFeatured.toUpperCase();

    const matchType =
      selectedType === "ALL"
        ? true
        : job.type.toUpperCase() === selectedType.toUpperCase();

    const matchLocation =
      selectedLocation === "ALL"
        ? true
        : job.location.toUpperCase() === selectedLocation.toUpperCase();

    const matchExperience =
      selectedExperience === "ALL"
        ? true
        : job.experience.toUpperCase() === selectedExperience.toUpperCase();

    return matchFeatured && matchType && matchLocation && matchExperience;
  });

  // Horizontal Scroll Animation using GSAP
    // Horizontal Scroll Animation using GSAP
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const cardsContainer = cardsContainerRef.current;

        if (!cardsContainer) return;

        const parent = cardsContainer.parentElement;
        if (!parent) return;

        // Calculate actual horizontal overflow
        const totalWidth = cardsContainer.scrollWidth;
        const visibleWidth = parent.clientWidth;
        const scrollDistance = Math.max(0, totalWidth - visibleWidth);

        // Always start from the first card
        gsap.set(cardsContainer, { x: 0 });

        if (scrollDistance === 0) return;

        const animation = gsap.to(cardsContainer, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          animation.kill();
        };
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
      dependencies: [
        selectedFeatured,
        selectedType,
        selectedLocation,
        selectedExperience,
      ],
    }
  );

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FAF9F6] text-black font-rajdhani overflow-x-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen w-full">

        {/* LEFT COLUMN: FIXED HERO PANEL */}
        <div className="w-full lg:w-[40vw] lg:sticky lg:left-0 lg:top-0 lg:h-screen bg-[#0B0A0F] text-white flex flex-col justify-between p-8 md:p-12 xl:p-16 z-30 overflow-hidden select-none border-b lg:border-b-0 lg:border-r border-white/5">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-[#51EDB2]/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

          {/* Top Row */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-1.5 font-orbitron font-black text-base md:text-lg tracking-[0.25em] text-white">
              <span className="text-[#51EDB2] flex gap-0.5 animate-pulse">
                <span>•</span><span>•</span><span>•</span>
              </span>
              <span>HI-TECH</span>
            </div>
            <a
              href="mailto:jobs@hitech.com"
              className="text-xs md:text-sm font-semibold tracking-widest text-[#51EDB2] hover:text-white transition-colors uppercase border-b border-[#51EDB2]/20 hover:border-white py-0.5"
            >
              jobs@hitech.com
            </a>
          </div>

          {/* Title Area */}
          <div className="my-auto py-12 lg:py-0 relative z-10">
            <div className="relative flex items-center mb-8 pr-12 w-fit">
              <h1 className="font-orbitron text-6xl md:text-7xl xl:text-8xl font-black tracking-tight text-[#51EDB2] leading-none uppercase">
                CAREERS
              </h1>
              <div className="absolute right-0 top-0 bottom-0 flex items-center pl-6 border-l border-white/10">
                <span className="font-orbitron text-[10px] md:text-xs font-black tracking-[0.35em] text-white/40 uppercase [writing-mode:vertical-lr] rotate-180">
                  AT HI-TECH
                </span>
              </div>
            </div>

            <div className="space-y-6 text-white/70 font-rajdhani text-base md:text-lg xl:text-xl max-w-sm md:max-w-md leading-relaxed uppercase tracking-[0.1em]">
              <p>
                We strive to inspire the world to create and experience premium visual content on a scale like never before.
              </p>
              <p>
                We value creative passion, technical determination, constant learning, and stellar teamwork.
              </p>
              <p className="text-white font-semibold border-l-2 border-[#51EDB2] pl-3 py-1">
                Join the team that is shaping the future of production.
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="relative z-10 flex items-end justify-between h-48 lg:h-56 mt-auto">
            {/* Character Illustration sketch */}
            <div className="absolute bottom-0 left-0 w-[60%] lg:w-[70%] max-w-[280px] pointer-events-none select-none opacity-90 transition-transform duration-500 hover:scale-105 origin-bottom">
              <img
                src="/assets/career_character.png"
                alt="Moople creative character line sketch"
                className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              />
            </div>

            {/* Circular APPLY NOW badge */}
            <div className="absolute right-0 bottom-2 lg:-right-4 z-20">
              <button
                onClick={() => {
                  const el = document.getElementById("jobs-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative w-24 h-24 rounded-full border border-pink-500 bg-[#0B0A0F] text-pink-500 hover:text-white hover:bg-pink-500 hover:border-transparent transition-all duration-500 flex items-center justify-center group shadow-[0_0_25px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.5)] cursor-pointer"
              >
                {/* Spin outer dotted line */}
                <div className="absolute inset-1 rounded-full border border-dashed border-pink-500/40 group-hover:border-white/40 animate-[spin_25s_linear_infinite]" />
                <div className="flex flex-col items-center justify-center gap-1.5">
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
                    APPLY NOW
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

        {/* RIGHT COLUMN: SCROLLABLE LIST OF CARDS */}
        <div className="w-full lg:w-[60vw] min-h-screen flex flex-col justify-between pt-24 pb-12 lg:py-16 px-6 md:px-12 xl:px-16 shrink-0 bg-[#FAF9F6]">

          {/* Top Filters Block */}
          <div id="jobs-section" className="mb-6 lg:mb-10 relative z-40">
            <span className="text-[10px] font-bold tracking-[0.25em] text-zinc-400 uppercase block mb-3">
              Join the team that is shaping the future
            </span>

            {/* Custom Dropdown Filters Row */}
            <div className="flex flex-wrap gap-4 items-center">

              {/* Category / Featured Dropdown */}
              <div className="relative min-w-[170px] sm:min-w-[190px]">
                <button
                  onClick={() => {
                    setFeaturedOpen(!featuredOpen);
                    setTypeOpen(false);
                    setLocationOpen(false);
                    setExperienceOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${selectedFeatured !== "ALL"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/15 hover:border-black"
                    }`}
                >
                  <span>{selectedFeatured === "ALL" ? "FEATURED" : selectedFeatured}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${featuredOpen ? "rotate-180" : ""}`} />
                </button>
                {featuredOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-black shadow-xl rounded-none z-40 py-1 max-h-60 overflow-y-auto">
                    {featuredOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedFeatured(opt);
                          setFeaturedOpen(false);
                        }}
                        className="w-full px-5 py-2.5 text-left text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {selectedFeatured === opt && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Job Type Dropdown */}
              <div className="relative min-w-[170px] sm:min-w-[190px]">
                <button
                  onClick={() => {
                    setTypeOpen(!typeOpen);
                    setFeaturedOpen(false);
                    setLocationOpen(false);
                    setExperienceOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${selectedType !== "ALL"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/15 hover:border-black"
                    }`}
                >
                  <span>{selectedType === "ALL" ? "SELECT JOB TYPE" : selectedType}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${typeOpen ? "rotate-180" : ""}`} />
                </button>
                {typeOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-black shadow-xl rounded-none z-40 py-1">
                    {typeOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedType(opt);
                          setTypeOpen(false);
                        }}
                        className="w-full px-5 py-2.5 text-left text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {selectedType === opt && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Location Dropdown */}
              <div className="relative min-w-[170px] sm:min-w-[190px]">
                <button
                  onClick={() => {
                    setLocationOpen(!locationOpen);
                    setFeaturedOpen(false);
                    setTypeOpen(false);
                    setExperienceOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${selectedLocation !== "ALL"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/15 hover:border-black"
                    }`}
                >
                  <span>{selectedLocation === "ALL" ? "SELECT JOB LOCATION" : selectedLocation}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationOpen ? "rotate-180" : ""}`} />
                </button>
                {locationOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-black shadow-xl rounded-none z-40 py-1">
                    {locationOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedLocation(opt);
                          setLocationOpen(false);
                        }}
                        className="w-full px-5 py-2.5 text-left text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {selectedLocation === opt && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Experience Dropdown */}
              <div className="relative min-w-[170px] sm:min-w-[190px]">
                <button
                  onClick={() => {
                    setExperienceOpen(!experienceOpen);
                    setFeaturedOpen(false);
                    setTypeOpen(false);
                    setLocationOpen(false);
                  }}
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${selectedExperience !== "ALL"
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-black/15 hover:border-black"
                    }`}
                >
                  <span>{selectedExperience === "ALL" ? "SELECT EXPERIENCE" : selectedExperience}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${experienceOpen ? "rotate-180" : ""}`} />
                </button>
                {experienceOpen && (
                  <div className="absolute left-0 right-0 mt-1.5 bg-white border border-black shadow-xl rounded-none z-40 py-1">
                    {experienceOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => {
                          setSelectedExperience(opt);
                          setExperienceOpen(false);
                        }}
                        className="w-full px-5 py-2.5 text-left text-xs font-bold tracking-widest uppercase hover:bg-black hover:text-white transition-colors flex items-center justify-between"
                      >
                        <span>{opt}</span>
                        {selectedExperience === opt && <Check className="w-3.5 h-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Reset/Clear Button */}
              {(selectedFeatured !== "ALL" || selectedType !== "ALL" || selectedLocation !== "ALL" || selectedExperience !== "ALL") && (
                <button
                  onClick={() => {
                    setSelectedFeatured("ALL");
                    setSelectedType("ALL");
                    setSelectedLocation("ALL");
                    setSelectedExperience("ALL");
                  }}
                  className="px-4 py-2 text-xs font-bold tracking-wider text-[#EC4899] hover:text-pink-700 transition-colors uppercase flex items-center gap-1.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" /> Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Horizontal/Vertical Scrollable Cards Container */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-6 py-10 px-4 overflow-hidden">

            {filteredJobs.length > 0 ? (
              <div
                ref={cardsContainerRef}
                className="flex flex-col lg:flex-row items-stretch gap-6 w-full lg:w-max py-4 shrink-0"
              >

                {filteredJobs.map((job, index) => {
  // Fallback pastel themes if job.color isn't updated yet
  const pastelThemes = [
    {
      bg: "bg-gradient-to-br from-[#DFD3FF] via-[#D6C7FF] to-[#C8B5FF]",
      pill: "bg-white/75 text-[#181822]",
      dot: "bg-[#2E1065]",
      wave1: "bg-white/25",
      wave2: "bg-[#B79EFF]/35",
    },
    {
      bg: "bg-gradient-to-br from-[#DFF7E6] via-[#CCF0D8] to-[#B5E6C7]",
      pill: "bg-[#BCE8CC]/85 text-[#132A1C]",
      dot: "bg-[#14532D]",
      wave1: "bg-white/35",
      wave2: "bg-[#8CD4A7]/35",
    },
    {
      bg: "bg-gradient-to-br from-[#FFE0D6] via-[#FDD0C3] to-[#F9BCAE]",
      pill: "bg-[#F8B8A8]/75 text-[#2D1510]",
      dot: "bg-[#9A3412]",
      wave1: "bg-white/30",
      wave2: "bg-[#F39C87]/35",
    },
  ];
  const theme = pastelThemes[index % pastelThemes.length];

  return (
    <div
      key={job.id}
      className={`
        relative flex flex-col justify-between
        w-full max-w-[420px] lg:w-[395px] lg:max-w-none
        min-h-[500px] sm:min-h-[520px] lg:min-h-[540px] h-auto
        shrink-0 select-none
        rounded-[28px] border border-white/70
        p-6 sm:p-7 md:p-8
        ${job.color || theme.bg}
        shadow-[0_22px_45px_-12px_rgba(32,24,56,0.14)]
        hover:shadow-[0_34px_65px_-12px_rgba(32,24,56,0.24)]
        group cursor-pointer
      `}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Clipped Organic Swooping Wave Shapes */}
      <div className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
        {/* Top-to-bottom sweeping pastel curve */}
        <div
          className={`absolute -right-24 -top-12 w-[310px] h-[440px] rounded-[100%] ${theme.wave1} transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-2`}
        />
        {/* Secondary bottom sweeping curve */}
        <div
          className={`absolute -right-12 -bottom-28 w-[340px] h-[260px] rounded-[100%] ${theme.wave2} transition-transform duration-700 ease-out group-hover:scale-110`}
        />
        {/* Subtle inner glass sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/30" />
      </div>

      {/* Top Bar: Category Pill & Index Counter */}
      <div
        className="relative z-10 flex items-center justify-between"
        style={{ transform: "translateZ(30px)" }}
      >
        <span
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.pill} backdrop-blur-md text-[11px] font-bold tracking-[0.08em] uppercase shadow-[0_2px_10px_rgba(0,0,0,0.04)]`}
        >
          <span className={`w-2 h-2 rounded-full ${theme.dot}`} />
          {job.category}
        </span>

        <span className="text-xs font-semibold tracking-wider text-[#181822]">
          0{index + 1} <span className="text-black/40 font-normal">/ 0{filteredJobs.length || 6}</span>
        </span>
      </div>

      {/* Middle Content: Title & Description */}
      <div
        className="relative z-10 my-auto pt-4 pr-16 sm:pr-20"
        style={{ transform: "translateZ(42px)" }}
      >
        <h3 className="text-[26px] sm:text-[28px] md:text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] text-[#171821]">
          {job.title}
        </h3>

        <p className="text-[13.5px] md:text-[14px] text-[#171821]/75 font-medium leading-[1.5] mt-3.5 line-clamp-3">
          {job.desc}
        </p>
      </div>

      {/* Bottom Section: Compact Metadata & Left-Aligned Circular Arrow Button */}
      <div
        className="relative z-10 flex flex-col items-start gap-4"
        style={{ transform: "translateZ(38px)" }}
      >
        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#171821]/85 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-[#171821]" />
            {job.type}
          </span>

          <span className="text-[#171821]/40">•</span>

          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#171821]" />
            {job.location}
          </span>

          {job.experience && (
            <>
              <span className="text-[#171821]/40">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#171821]" />
                {job.experience}
              </span>
            </>
          )}
        </div>

        {/* Bottom-Left Circular Action Button */}
        <button
          type="button"
          onClick={() => setActiveJob(job)}
          aria-label={`View details for ${job.title}`}
          className="w-11 h-11 rounded-full bg-[#171821] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(23,24,33,0.28)] transition-all duration-300 hover:bg-black hover:scale-110 group-hover:translate-x-0.5 cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Floating 3D Object (Positioned outside overflow-hidden so it pops out of the card edge on hover) */}
      <div
        className="absolute -right-4 bottom-8 z-20 pointer-events-none transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2"
        style={{ transform: "translateZ(68px)" }}
      >
        {renderCardIllustration(job.category, index)}
      </div>
    </div>
  );
})}
              </div>
            ) : (
              <div className="w-full py-20 text-center border border-dashed border-black/10 rounded-3xl">
                <Briefcase className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
                <h4 className="font-orbitron font-bold text-lg text-zinc-400 uppercase tracking-widest mb-1">
                  No Job Openings Found
                </h4>
                <p className="text-sm text-zinc-400 uppercase tracking-wider">
                  Try clearing or adjusting your search filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* JOB DETAILS & APPLICATION OVERLAY MODAL */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-[scaleUp_0.3s_cubic-bezier(0.16,1,0.3,1)]">

            {/* Modal Header */}
            <div className={`p-8 pb-6 border-b border-black/5 ${activeJob.color} relative`}>
              <button
                onClick={() => {
                  setActiveJob(null);
                  setFormSubmitted(false);
                }}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/70 hover:bg-black hover:text-white transition-colors flex items-center justify-center cursor-pointer shadow-sm z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-12">
                <span className="text-[10px] font-bold tracking-[0.2em] text-black/60 uppercase block mb-1.5">
                  OPPORTUNITIES / {activeJob.category}
                </span>
                <h2 className="font-orbitron text-2xl md:text-3xl font-black text-black tracking-tight uppercase mb-3 leading-tight">
                  {activeJob.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-black/80 text-[10px] font-bold tracking-widest uppercase">
                  <span className="bg-white/60 px-3 py-1.5 rounded-full">{activeJob.type}</span>
                  <span className="bg-white/60 px-3 py-1.5 rounded-full">{activeJob.location}</span>
                </div>
              </div>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8">

              {/* Job Description */}
              <div>
                <h4 className="font-orbitron text-xs font-black tracking-[0.2em] text-zinc-400 uppercase mb-3">
                  Overview
                </h4>
                <p className="text-zinc-700 text-sm md:text-base leading-relaxed uppercase tracking-wider font-semibold">
                  {activeJob.desc}
                </p>
              </div>

              {/* Requirements list */}
              <div>
                <h4 className="font-orbitron text-xs font-black tracking-[0.2em] text-zinc-400 uppercase mb-3">
                  Requirements
                </h4>
                <ul className="space-y-2.5">
                  {activeJob.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-zinc-600 text-xs md:text-sm uppercase tracking-wider leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply Form */}
              <div className="pt-6 border-t border-black/10">
                <h4 className="font-orbitron text-xs font-black tracking-[0.2em] text-zinc-400 uppercase mb-4">
                  Quick Application
                </h4>

                {formSubmitted ? (
                  <div className="bg-[#C2F3D9] border border-emerald-300 p-6 rounded-2xl flex flex-col items-center justify-center text-center text-emerald-900 animate-pulse">
                    <Check className="w-10 h-10 text-emerald-600 mb-2" />
                    <h5 className="font-orbitron font-bold text-sm uppercase tracking-widest mb-1">Application Sent!</h5>
                    <p className="text-xs uppercase tracking-wider font-medium text-emerald-800">
                      Thank you for applying. We will get in touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-zinc-50 border border-black/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider placeholder:text-zinc-300 focus:border-black outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="youremail@hitech.com"
                          className="w-full bg-zinc-50 border border-black/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider placeholder:text-zinc-300 focus:border-black outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1.5">
                        Portfolio Link *
                      </label>
                      <input
                        type="url"
                        required
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        placeholder="https://behance.net/yourprofile"
                        className="w-full bg-zinc-50 border border-black/10 px-4 py-3 text-xs font-semibold placeholder:text-zinc-300 focus:border-black outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black tracking-widest text-zinc-400 uppercase mb-1.5">
                        Tell Us About Yourself (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="What drives you? Highlight key animation or design skills..."
                        className="w-full bg-zinc-50 border border-black/10 px-4 py-3 text-xs font-semibold uppercase tracking-wider placeholder:text-zinc-300 focus:border-black outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white text-xs font-bold tracking-widest uppercase font-orbitron hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <FileText className="w-4 h-4" /> Submit Application
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Animation Helper Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default CareerPage;
