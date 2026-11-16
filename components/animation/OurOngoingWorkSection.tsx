"use client";

import React, { useEffect, useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const OurOngoingWorkSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Column Cards Animation (Fade in & Slide up on scroll)
            gsap.fromTo(
                leftColRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Right Column Heading & Stats Animation
            gsap.fromTo(
                rightColRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    delay: 0.2, // Thoda stagger effect dene ke liye
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-20 w-full min-h-screen bg-[#EAEFF2] text-[#0B1310] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] px-6 sm:px-12 lg:px-20 py-20 sm:py-28 shadow-[0_-30px_60px_rgba(0,0,0,0.5)] select-none flex items-center"
        >
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Stacked Project Cards */}
                <div ref={leftColRef} className="lg:col-span-7 flex flex-col gap-8">

                    {/* Card 1 */}
                    <div className="group relative w-full overflow-hidden border border-white/10">
                        <div className="relative w-full h-[260px] sm:h-[450px] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-900">
                            {/* Image yahan lagayein */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <div className="absolute bottom-5 left-5 z-20 space-y-1">
                                <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                                    AI Production
                                </h3>
                                <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                                    We generate visuals and videos using generative AI tools, with full control over style, direction, and detail.
                                </p>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-rajdhani">
                                <Image
                                    src="/assets/home/mowgli.webp"
                                    alt="2D Motion Character"
                                    fill
                                    className="group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative w-full overflow-hidden border border-white/10">
                        <div className="relative w-full h-[260px] sm:h-[450px] rounded-[1.5rem] overflow-hidden mb-4 bg-slate-900">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                            <div className="absolute bottom-5 left-5 z-20 space-y-1">
                                <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                                    AI Production
                                </h3>
                                <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                                    We generate visuals and videos using generative AI tools, with full control over style, direction, and detail.
                                </p>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-gray-500 font-rajdhani">
                                <Image
                                    src="/assets/home/chiranjevi.webp"
                                    alt="2D Motion Character"
                                    fill
                                    className="group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Heading & Turnaround Info */}
                <div ref={rightColRef} className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-6">

                    {/* Section Heading */}
                    <div>
                        <h2 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[4.5rem] leading-[0.92] tracking-tight uppercase text-[#0B1310]">
                            OUR
                        </h2>
                        <span className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-wide uppercase text-transparent [-webkit-text-stroke:2px_#0B1310] mt-1 block">
                            ONGOING WORK
                        </span>
                    </div>

                    {/* Stats / Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">

                        {/* Stat 1: 3-5 Days */}
                        <div className="flex flex-col space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-[#0B1310] text-[#10D876] flex items-center justify-center shadow-md">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <h4 className="font-orbitron font-extrabold text-xl sm:text-2xl text-[#0B1310]">
                                3-5 Days
                            </h4>
                            <p className="font-rajdhani text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed uppercase tracking-wider">
                                To kick off after signing. No lengthy onboarding, just straight to work.
                            </p>
                        </div>

                        {/* Stat 2: 48 Hour */}
                        <div className="flex flex-col space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-[#0B1310] text-[#10D876] flex items-center justify-center shadow-md">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h4 className="font-orbitron font-extrabold text-xl sm:text-2xl text-[#0B1310]">
                                48 Hour
                            </h4>
                            <p className="font-rajdhani text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed uppercase tracking-wider">
                                Turnaround on most requests. Complex projects broken into manageable sprints.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default OurOngoingWorkSection;