export type ProjectStage = "ongoing" | "recent" | "past";

export interface AnimationProject {
  id: string;
  title: string;
  image: string;
  stage: ProjectStage;
}

export function createProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const ANIMATION_2D_PROJECTS: AnimationProject[] = [
  // 1. ONGOING PROJECTS (4 cards in 1 row)
  {
    id: "on-1",
    title: "The Legend",
    image: "/assets/img/2D_animation/poster1.webp",
    stage: "ongoing",
  },
  {
    id: "on-2",
    title: "Neon Chronicles",
    image: "/assets/img/2D_animation/poster2.webp",
    stage: "ongoing",
  },
  {
    id: "on-3",
    title: "Shadow Realm",
    image: "/assets/img/2D_animation/poster3.webp",
    stage: "ongoing",
  },
  {
    id: "on-4",
    title: "Emerald Horizon",
    image: "/assets/img/2D_animation/poster4.webp",
    stage: "ongoing",
  },

  // 2. RECENT PROJECTS (4 cards in 1 row)
  {
    id: "rec-1",
    title: "Cyber Drift",
    image: "/assets/img/2D_animation/poster5.webp",
    stage: "recent",
  },
  {
    id: "rec-2",
    title: "Lost Echoes",
    image: "/assets/img/2D_animation/poster6.webp",
    stage: "recent",
  },
  {
    id: "rec-3",
    title: "Solar Vanguard",
    image: "/assets/img/2D_animation/poster7.webp",
    stage: "recent",
  },
  {
    id: "rec-4",
    title: "Midnight Ronin",
    image: "/assets/img/2D_animation/poster8.webp",
    stage: "recent",
  },

  // 3. PAST PROJECTS (4 cards in 1 row)
  {
    id: "past-1",
    title: "Ancient Sparks",
    image: "/assets/img/2D_animation/poster9.webp",
    stage: "past",
  },
  {
    id: "past-2",
    title: "Vortex Pulse",
    image: "/assets/img/2D_animation/poster10.webp",
    stage: "past",
  },
  {
    id: "past-3",
    title: "Phantom Grid",
    image: "/assets/img/2D_animation/poster11.webp",
    stage: "past",
  },
  {
    id: "past-4",
    title: "Origin Zero",
    image: "/assets/img/2D_animation/poster12.webp",
    stage: "past",
  },
];