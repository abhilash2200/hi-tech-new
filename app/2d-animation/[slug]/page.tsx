import React from "react";
import { notFound } from "next/navigation";
import {
  ANIMATION_2D_PROJECTS,
  createProjectSlug,
} from "../../data/animation2dProjects";
import ProjectDetailClient from "./ProjectDetailClient";

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

  return <ProjectDetailClient project={project} />;
}