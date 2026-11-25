export type ProjectStage = "ongoing" | "recent" | "past";

export interface TeamMember {
  name: string;
  role: string;
}

export interface AnimationProject {
  id: string;
  title: string;
  image: string;
  stage: ProjectStage;
  description: string;
  team: TeamMember[];
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
  // 1. ONGOING PROJECTS
  {
    id: "on-1",
    title: "The Legend",
    image: "/assets/img/2D_animation/poster1.webp",
    stage: "ongoing",
    description:
      "An intense 2D mythological action-drama following a lone warrior rising from dusty ruins into legend. Currently in active keyframe animation and compositing.",
    team: [
      { name: "Aarav Sen", role: "2D Director & Storyboard" },
      { name: "Riya Chatterjee", role: "Lead Character Animator" },
      { name: "Vikram Roy", role: "Background & Layout Artist" },
      { name: "Ananya Das", role: "Cleanup & Ink/Paint Lead" },
    ],
  },
  {
    id: "on-2",
    title: "Neon Chronicles",
    image: "/assets/img/2D_animation/poster2.webp",
    stage: "ongoing",
    description:
      "High-contrast futuristic 2D series set in rain-soaked night districts with expressive frame-by-frame action sequences.",
    team: [
      { name: "Kabir Verma", role: "Showrunner & Art Director" },
      { name: "Meera Nair", role: "FX & Lighting Animator" },
      { name: "Rohan Ghosh", role: "Key Animator" },
      { name: "Pooja Kulkarni", role: "Compositor" },
    ],
  },
  {
    id: "on-3",
    title: "Shadow Realm",
    image: "/assets/img/2D_animation/poster3.webp",
    stage: "ongoing",
    description:
      "A dark fantasy 2D adventure exploring hidden spirit worlds, dynamic camera pans, and hand-painted environments.",
    team: [
      { name: "Siddharth Bose", role: "Concept & Environment Lead" },
      { name: "Neha Sharma", role: "Character Designer" },
      { name: "Arjun Menon", role: "2D Animator" },
    ],
  },
  {
    id: "on-4",
    title: "Emerald Horizon",
    image: "/assets/img/2D_animation/poster4.webp",
    stage: "ongoing",
    description:
      "An uplifting hand-drawn journey across lush floating islands, crafted with vibrant color palettes and fluid motion.",
    team: [
      { name: "Tanya Mukherjee", role: "Color Script & BG Artist" },
      { name: "Devansh Patel", role: "Senior Animator" },
      { name: "Ishita Paul", role: "Storyboard Artist" },
    ],
  },

  // 2. RECENT PROJECTS
  {
    id: "rec-1",
    title: "Cyber Drift",
    image: "/assets/img/2D_animation/poster5.webp",
    stage: "recent",
    description:
      "Fast-paced street-racing 2D short packed with snappy smear frames, kinetic typography, and custom sound-synced cuts.",
    team: [
      { name: "Rohan Ghosh", role: "Action Animator" },
      { name: "Kabir Verma", role: "Director & Editor" },
      { name: "Meera Nair", role: "FX Animator" },
    ],
  },
  {
    id: "rec-2",
    title: "Lost Echoes",
    image: "/assets/img/2D_animation/poster6.webp",
    stage: "recent",
    description:
      "An emotional narrative 2D piece focusing on subtle facial acting, memory transitions, and soft watercolor textures.",
    team: [
      { name: "Ananya Das", role: "Character & Acting Animator" },
      { name: "Vikram Roy", role: "Background Artist" },
      { name: "Aarav Sen", role: "Writer & Director" },
    ],
  },
  {
    id: "rec-3",
    title: "Solar Vanguard",
    image: "/assets/img/2D_animation/poster7.webp",
    stage: "recent",
    description:
      "Sci-fi orbital rescue sequence blending crisp 2D linework with dramatic solar flare and thruster effects.",
    team: [
      { name: "Devansh Patel", role: "Lead Animator" },
      { name: "Pooja Kulkarni", role: "2D FX & Compositing" },
      { name: "Siddharth Bose", role: "Vehicle & Prop Design" },
    ],
  },
  {
    id: "rec-4",
    title: "Midnight Ronin",
    image: "/assets/img/2D_animation/poster8.webp",
    stage: "recent",
    description:
      "Stylized samurai duel short built around sharp silhouette timing, minimal palette shifts, and dramatic pauses.",
    team: [
      { name: "Riya Chatterjee", role: "Lead Key Animator" },
      { name: "Arjun Menon", role: "In-Between & Cleanup" },
      { name: "Tanya Mukherjee", role: "Background Painter" },
    ],
  },

  // 3. PAST PROJECTS
  {
    id: "past-1",
    title: "Ancient Sparks",
    image: "/assets/img/2D_animation/poster9.webp",
    stage: "past",
    description:
      "A heritage-inspired 2D short celebrating traditional motifs brought to life through modern frame-by-frame timing.",
    team: [
      { name: "Vikram Roy", role: "Art & Background Lead" },
      { name: "Ishita Paul", role: "Animator" },
      { name: "Aarav Sen", role: "Creative Producer" },
    ],
  },
  {
    id: "past-2",
    title: "Vortex Pulse",
    image: "/assets/img/2D_animation/poster10.webp",
    stage: "past",
    description:
      "High-energy rhythmic 2D visual piece driven by geometric transitions, loop cycles, and bold contrast.",
    team: [
      { name: "Meera Nair", role: "Motion & FX Lead" },
      { name: "Devansh Patel", role: "2D Animator" },
    ],
  },
  {
    id: "past-3",
    title: "Phantom Grid",
    image: "/assets/img/2D_animation/poster11.webp",
    stage: "past",
    description:
      "A sleek episodic pilot exploring digital espionage with clean perspective grids and sharp character poses.",
    team: [
      { name: "Kabir Verma", role: "Director" },
      { name: "Pooja Kulkarni", role: "Layout & Compositing" },
      { name: "Rohan Ghosh", role: "Key Animator" },
    ],
  },
  {
    id: "past-4",
    title: "Origin Zero",
    image: "/assets/img/2D_animation/poster12.webp",
    stage: "past",
    description:
      "Our foundational studio showcase establishing our core 2D character pipeline, expression sheets, and storytelling style.",
    team: [
      { name: "Aarav Sen", role: "Studio Mentor & Director" },
      { name: "Riya Chatterjee", role: "Lead Animator" },
      { name: "Ananya Das", role: "Cleanup Lead" },
      { name: "Vikram Roy", role: "Background Artist" },
    ],
  },
];