
import React from "react";
import { notFound } from "next/navigation";
import {
  ANIMATION_3D_PROJECTS,
  createProjectSlug,
} from "../../data/animation3dProjects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ANIMATION_3D_PROJECTS.map((project) => ({
    slug: createProjectSlug(project.title),
  }));
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;

  const project = ANIMATION_3D_PROJECTS.find(
    (item) => createProjectSlug(item.title) === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
