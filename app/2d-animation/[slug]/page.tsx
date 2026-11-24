import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  ANIMATION_2D_PROJECTS,
  createProjectSlug,
} from "../../data/animation2dProjects";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ANIMATION_2D_PROJECTS.map((project) => ({
    slug: createProjectSlug(project.title),
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = ANIMATION_2D_PROJECTS.find(
    (item) => createProjectSlug(item.title) === slug
  );

  if (!project) {
    notFound();
  }

  const stageLabelMap = {
    ongoing: "Ongoing Project",
    recent: "Recent Project",
    past: "Past Project",
  };

  return (
    <main className="min-h-screen w-full bg-[#060B09] text-white py-16 sm:py-24 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/2d-animation"
            className="inline-flex items-center gap-2 font-orbitron text-xs sm:text-sm uppercase tracking-wider text-white/80 hover:text-[#51EDB2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to 2D Animation
          </Link>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Poster Image */}
          <div className="md:col-span-5 relative aspect-[2/3] w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0B1310]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Project Info */}
          <div className="md:col-span-7 space-y-5">
            <span className="inline-block rounded-full border border-[#10D876]/40 bg-[#10D876]/10 px-4 py-1 font-orbitron text-xs uppercase tracking-widest text-[#51EDB2]">
              {stageLabelMap[project.stage]}
            </span>

            <h1 className="font-orbitron font-black text-3xl sm:text-5xl uppercase tracking-wide text-white">
              {project.title}
            </h1>

            <p className="font-rajdhani text-base sm:text-lg text-white/75 leading-relaxed">
              2D animated production showcase for{" "}
              <span className="text-white font-semibold">{project.title}</span>.
              Detailed breakdown, character art, storyboards, and production
              highlights can be added here as your project evolves.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}