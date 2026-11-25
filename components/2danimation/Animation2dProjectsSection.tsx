
"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ANIMATION_2D_PROJECTS,
  createProjectSlug,
  ProjectStage,
} from "../../app/data/animation2dProjects";

gsap.registerPlugin(ScrollTrigger);

interface StageBlockConfig {
  stage: ProjectStage;
  heading: string;
}

const STAGE_BLOCKS: StageBlockConfig[] = [
  { stage: "ongoing", heading: "Ongoing Projects" },
  { stage: "recent", heading: "Recent Projects" },
  { stage: "past", heading: "Past Projects" },
];

const Animation2dProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>(".project-stage-block")
        .forEach((block) => {
          const heading = block.querySelector(".stage-heading");
          const cards = block.querySelectorAll(".poster-card");

          // Heading fade animation
          if (heading) {
            gsap.fromTo(
              heading,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: block,
                  start: "top 85%",
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }

          // Poster cards fade animation (NO ZOOM)
          if (cards.length > 0) {
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 25,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: block,
                  start: "top 80%",
                  toggleActions: "play reverse play reverse",
                },
              }
            );
          }
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="specialties-section"
      ref={sectionRef}
      className="relative w-full bg-[#F7F7F5] text-[#171717] py-20 sm:py-28 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-[1800px] mx-auto space-y-20 sm:space-y-24">
        {STAGE_BLOCKS.map(({ stage, heading }) => {
          const projects = ANIMATION_2D_PROJECTS.filter(
            (item) => item.stage === stage
          );

          return (
            <div key={stage} className="project-stage-block space-y-8">

              {/* Stage Heading */}
              <div className="stage-heading flex items-center gap-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E53935]" />

                <h2 className="font-orbitron font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#171717]">
                  {heading}
                </h2>
              </div>

              {/* 1 Row = 4 Poster Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
                {projects.map((project) => {
                  const slug = createProjectSlug(project.title);

                  return (
                    <Link
                      key={project.id}
                      href={`/2d-animation/${slug}`}
                      className="poster-card group relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white transition-colors duration-300 hover:border-[#E53935]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center"
                      />

                      {/* Hover Overlay */}
                      <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-white/95 via-white/40 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="font-orbitron font-extrabold text-lg sm:text-xl uppercase tracking-wide text-[#171717] translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Animation2dProjectsSection;
