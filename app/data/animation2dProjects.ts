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
    image: "/assets/img/2D_animation/posters/the-legend.jpg",
    stage: "ongoing",
  },
  {
    id: "on-2",
    title: "Neon Chronicles",
    image: "/assets/img/2D_animation/posters/neon-chronicles.jpg",
    stage: "ongoing",
  },
  {
    id: "on-3",
    title: "Shadow Realm",
    image: "/assets/img/2D_animation/posters/shadow-realm.jpg",
    stage: "ongoing",
  },
  {
    id: "on-4",
    title: "Emerald Horizon",
    image: "/assets/img/2D_animation/posters/emerald-horizon.jpg",
    stage: "ongoing",
  },

  // 2. RECENT PROJECTS (4 cards in 1 row)
  {
    id: "rec-1",
    title: "Cyber Drift",
    image: "/assets/img/2D_animation/posters/cyber-drift.jpg",
    stage: "recent",
  },
  {
    id: "rec-2",
    title: "Lost Echoes",
    image: "/assets/img/2D_animation/posters/lost-echoes.jpg",
    stage: "recent",
  },
  {
    id: "rec-3",
    title: "Solar Vanguard",
    image: "/assets/img/2D_animation/posters/solar-vanguard.jpg",
    stage: "recent",
  },
  {
    id: "rec-4",
    title: "Midnight Ronin",
    image: "/assets/img/2D_animation/posters/midnight-ronin.jpg",
    stage: "recent",
  },

  // 3. PAST PROJECTS (4 cards in 1 row)
  {
    id: "past-1",
    title: "Ancient Sparks",
    image: "/assets/img/2D_animation/posters/ancient-sparks.jpg",
    stage: "past",
  },
  {
    id: "past-2",
    title: "Vortex Pulse",
    image: "/assets/img/2D_animation/posters/vortex-pulse.jpg",
    stage: "past",
  },
  {
    id: "past-3",
    title: "Phantom Grid",
    image: "/assets/img/2D_animation/posters/phantom-grid.jpg",
    stage: "past",
  },
  {
    id: "past-4",
    title: "Origin Zero",
    image: "/assets/img/2D_animation/posters/origin-zero.jpg",
    stage: "past",
  },
];