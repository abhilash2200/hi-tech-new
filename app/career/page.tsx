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
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const cardsContainer = cardsContainerRef.current;
        if (!cardsContainer) return;

        const totalScrollWidth = cardsContainer.scrollWidth;
        const visibleWidth = cardsContainer.parentElement?.offsetWidth || window.innerWidth * 0.6;
        const scrollDistance = totalScrollWidth - visibleWidth;

        if (scrollDistance <= 0) {
          gsap.set(cardsContainer, { x: 0 });
          return;
        }

        const anim = gsap.to(cardsContainer, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance * 1.3}`, // control scroll sensitivity
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          anim.kill();
        };
      });
    },
    { scope: containerRef, dependencies: [selectedFeatured, selectedType, selectedLocation, selectedExperience] }
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
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${
                    selectedFeatured !== "ALL"
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
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${
                    selectedType !== "ALL"
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
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${
                    selectedLocation !== "ALL"
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
                  className={`w-full px-5 py-3.5 flex justify-between items-center transition-all border text-xs font-bold tracking-widest uppercase cursor-pointer ${
                    selectedExperience !== "ALL"
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
          <div className="flex-grow flex items-center overflow-x-auto lg:overflow-x-visible pb-6 lg:pb-0 select-none">
            
            {filteredJobs.length > 0 ? (
              <div 
                ref={cardsContainerRef}
                className="flex flex-col lg:flex-row gap-6 w-full lg:w-fit py-4 shrink-0"
              >
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`flex flex-col justify-between border border-black/15 rounded-3xl p-6 md:p-8 ${job.color} w-full lg:w-[32vw] lg:min-w-[420px] lg:h-[500px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] relative overflow-hidden group shrink-0`}
                  >
                    {/* Abstract design geometry */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Top Content */}
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-5">
                        <h3 className="font-orbitron text-2xl md:text-3xl font-black tracking-tight leading-none text-black uppercase max-w-[85%]">
                          {job.title}
                        </h3>
                        {job.isFeatured && (
                          <span className="bg-black text-white text-[9px] font-bold tracking-[0.2em] px-2.5 py-1 uppercase rounded-full shrink-0 select-none">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <p className="font-rajdhani text-sm md:text-base text-zinc-800 font-semibold leading-relaxed tracking-wider mb-8 uppercase">
                        {job.desc}
                      </p>
                    </div>

                    {/* Bottom Action Section */}
                    <div>
                      <button
                        onClick={() => setActiveJob(job)}
                        className="px-6 py-2.5 bg-black text-white text-xs font-bold tracking-widest uppercase font-orbitron hover:bg-zinc-800 transition-colors shadow-sm self-start inline-block mb-6 cursor-pointer"
                      >
                        Details
                      </button>

                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-black/60 text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase pt-5 border-t border-black/10">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-black" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-black" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-black" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
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
