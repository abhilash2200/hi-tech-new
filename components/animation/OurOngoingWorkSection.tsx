"use client";

import React, { useEffect, useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const OurOngoingWorkSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
      ];

      if (cards.some((card) => !card)) return;

      // INITIAL POSITIONS
      // Card 1 visible rahega
      // Baaki cards completely hidden rahenge

      gsap.set(cards[0], {
        x: 0,
        yPercent: 0,
        zIndex: 1,
        autoAlpha: 1,
      });

      gsap.set(cards[1], {
        x: -90,
        yPercent: 135,
        zIndex: 2,
        autoAlpha: 0,
      });

      gsap.set(cards[2], {
        x: -90,
        yPercent: 135,
        zIndex: 3,
        autoAlpha: 0,
      });

      gsap.set(cards[3], {
        x: -90,
        yPercent: 135,
        zIndex: 4,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // STEP 1:
      // Card 1 upar jayega
      // Card 2 bottom-left se center mein enter karega

      tl.to(
        cards[0],
        {
          yPercent: -108,
          ease: "none",
          duration: 1,
        },
        0
      ).to(
        cards[1],
        {
          x: 0,
          yPercent: 0,
          autoAlpha: 1,
          ease: "none",
          duration: 1,
        },
        0
      );

      // STEP 2:
      // Card 1 upar bahar
      // Card 2 half-cut position
      // Card 3 center mein enter karega

      tl.to(
        cards[0],
        {
          yPercent: -216,
          ease: "none",
          duration: 1,
        },
        1
      )
        .to(
          cards[1],
          {
            yPercent: -108,
            ease: "none",
            duration: 1,
          },
          1
        )
        .to(
          cards[2],
          {
            x: 0,
            yPercent: 0,
            autoAlpha: 1,
            ease: "none",
            duration: 1,
          },
          1
        );

      // STEP 3:
      // Card 2 upar bahar
      // Card 3 half-cut position
      // Card 4 center mein enter karega

      tl.to(
        cards[1],
        {
          yPercent: -216,
          ease: "none",
          duration: 1,
        },
        2
      )
        .to(
          cards[2],
          {
            yPercent: -108,
            ease: "none",
            duration: 1,
          },
          2
        )
        .to(
          cards[3],
          {
            x: 0,
            yPercent: 0,
            autoAlpha: 1,
            ease: "none",
            duration: 1,
          },
          2
        );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full min-h-screen bg-[#EAEFF2] text-[#0B1310] px-6 sm:px-12 lg:px-20 select-none flex items-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* LEFT SIDE: CARD CONTAINER */}
        <div className="lg:col-span-7 relative w-full h-[450px] lg:h-screen flex items-center">

          {/* CARD 1 */}
          <div
            ref={card1Ref}
            className="absolute left-0 w-full h-[430px] rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-xl will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

            <div className="absolute bottom-6 left-6 z-20 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10D876]/20 text-[#10D876] font-rajdhani text-xs font-bold uppercase tracking-widest">
                Step 01
              </span>

              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                Strategy & Analysis
              </h3>

              <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                We analyze the brand, the audience, and the goal. We develop
                the concept and artistic direction that will drive your project.
              </p>
            </div>

            <Image
              src="/assets/home/mowgli.webp"
              alt="Strategy Showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* CARD 2 */}
          <div
            ref={card2Ref}
            className="absolute left-0 w-full h-[430px] rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-xl will-change-transform opacity-0 invisible"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

            <div className="absolute bottom-6 left-6 z-20 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10D876]/20 text-[#10D876] font-rajdhani text-xs font-bold uppercase tracking-widest">
                Step 02
              </span>

              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                AI Production
              </h3>

              <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                We generate visuals and videos using generative AI tools,
                with full control over style, direction, and detail.
              </p>
            </div>

            <Image
              src="/assets/home/chiranjevi.webp"
              alt="AI Production Showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* CARD 3 */}
          <div
            ref={card3Ref}
            className="absolute left-0 w-full h-[430px] rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-xl will-change-transform opacity-0 invisible"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

            <div className="absolute bottom-6 left-6 z-20 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10D876]/20 text-[#10D876] font-rajdhani text-xs font-bold uppercase tracking-widest">
                Step 03
              </span>

              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                Refinement
              </h3>

              <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                We refine and optimize the output to ensure it's ready for
                campaigns and platforms, perfecting every detail.
              </p>
            </div>

            <Image
              src="/assets/home/mowgli.webp"
              alt="Refinement Showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* CARD 4 */}
          <div
            ref={card4Ref}
            className="absolute left-0 w-full h-[430px] rounded-[1.5rem] overflow-hidden bg-slate-900 shadow-xl will-change-transform opacity-0 invisible"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-10" />

            <div className="absolute bottom-6 left-6 z-20 space-y-1.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10D876]/20 text-[#10D876] font-rajdhani text-xs font-bold uppercase tracking-widest">
                Step 04
              </span>

              <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
                Delivery
              </h3>

              <p className="font-rajdhani text-xs sm:text-sm text-gray-300 max-w-md tracking-wide">
                We deliver polished content, tailored to the required formats
                and channels, ready to make an impact.
              </p>
            </div>

            <Image
              src="/assets/home/chiranjevi.webp"
              alt="Delivery Showcase"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT SIDE: STATIC STUCK CONTENT */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-10 lg:pl-6">

          <div>
            <span className="font-rajdhani text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
              How we work
            </span>

            <h2 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[4.5rem] leading-[0.92] tracking-tight uppercase text-[#0B1310]">
              OUR
            </h2>

            <span className="font-orbitron font-black text-4xl sm:text-6xl lg:text-[4.5rem] leading-[0.95] tracking-wide uppercase text-transparent [-webkit-text-stroke:2px_#0B1310] mt-1 block">
              PROCESS
            </span>

            <p className="font-rajdhani text-sm sm:text-base text-gray-600 mt-4 max-w-md">
              We’ve been perfecting our steps for over 15 years to assure
              success for every single client we create for.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">

            <div className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1310] text-[#10D876] flex items-center justify-center shadow-md">
                <Calendar className="w-5 h-5" />
              </div>

              <h4 className="font-orbitron font-extrabold text-xl sm:text-2xl text-[#0B1310]">
                3-5 Days
              </h4>

              <p className="font-rajdhani text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed uppercase tracking-wider">
                To kick off after signing. No lengthy onboarding, just straight
                to work.
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1310] text-[#10D876] flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5" />
              </div>

              <h4 className="font-orbitron font-extrabold text-xl sm:text-2xl text-[#0B1310]">
                48 Hour
              </h4>

              <p className="font-rajdhani text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed uppercase tracking-wider">
                Turnaround on most requests. Complex projects broken down
                into manageable sprints.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default OurOngoingWorkSection;