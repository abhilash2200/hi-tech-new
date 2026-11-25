"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimationProject, ProjectStage } from "../../data/animation3dProjects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailClientProps {
  project: AnimationProject;
}

const STAGE_LABEL_MAP: Record<ProjectStage, string> = {
  ongoing: "Ongoing Project",
  recent: "Recent Project",
  past: "Past Project",
};

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero / top info entrance
      gsap.fromTo(
        ".detail-hero-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // "People Who Worked On This" - one by one scroll reveal
      gsap.fromTo(
        ".team-member-card",
        { opacity: 0, y: 28, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.14, // ek-ek karke load hoga
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [project.id]);

  return (
    <main
      ref={pageRef}
      className="min-h-screen w-full bg-[#F8FAFC] text-[#111827] py-14 sm:py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Top Bar: Back Link + Brand Badge */}
        <div className="detail-hero-item flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <Link
            href="/3d-animation"
            className="inline-flex items-center gap-2 font-orbitron text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 hover:text-[#C81D25] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#0284C7]" />
            Back to 3D Animation
          </Link>

          <span className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-1.5 shadow-sm border border-slate-200 font-orbitron text-[11px] font-extrabold tracking-wider uppercase">
            <span className="text-[#C81D25]">Hi-Tech</span>
            <span className="text-[#0284C7]">3D Studio</span>
          </span>
        </div>

        {/* Main Project Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Poster Image */}
          <div className="detail-hero-item md:col-span-5 relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Project Info & People Who Worked On This */}
          <div className="md:col-span-7 space-y-6">
            <div className="detail-hero-item space-y-3">
              <span className="inline-block rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 px-4 py-1 font-orbitron text-xs font-bold uppercase tracking-widest text-[#0284C7]">
                {STAGE_LABEL_MAP[project.stage]}
              </span>

              <h1 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-wide text-[#111827]">
                {project.title}
              </h1>
            </div>

            {/* Project-Specific Description */}
            <p className="detail-hero-item font-rajdhani text-base sm:text-lg font-medium text-slate-700 leading-relaxed bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              {project.description}
            </p>

            {/* People Who Worked On This (Scroll One-by-One Animation) */}
            <div className="team-section pt-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C81D25]/10 text-[#C81D25]">
                  <Users className="w-4 h-4" />
                </span>
                <h2 className="font-orbitron font-extrabold text-lg sm:text-xl uppercase tracking-wide text-[#111827]">
                  People Who Worked On This
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.team.map((member, index) => (
                  <div
                    key={`${member.name}-${index}`}
                    className="team-member-card rounded-xl border border-slate-200 bg-white p-4 shadow-xs hover:border-[#0284C7]/50 transition-colors"
                  >
                    <p className="font-orbitron text-sm font-bold text-[#111827]">
                      {member.name}
                    </p>
                    <p className="font-rajdhani text-sm font-semibold text-[#C81D25] mt-0.5">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}