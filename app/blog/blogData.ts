export interface Article {
  id: string;
  slug: string;
  headline: string;
  subheadline: string;
  category: string;
  author: string;
  date: string;
  image?: string;
  paragraphs: string[];
}

export const broadsheetArticles: Article[] = [
  {
    id: "art-1",
    slug: "praesidiarti-id-magnas-goria-eum-subsit-rioria-sedition",
    headline: "Praesidiarti id Magna's Goria Eum Subsit Rioria Sedition",
    subheadline:
      "The shifting paradigms of modern digital animation workflows and real-time rendering infrastructure.",
    category: "Pipeline & Tech",
    author: "Marcus Vance",
    date: "May 16, 2026",
    image:
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800",
    paragraphs: [
      "As render times shrink and client expectations skyrocket, our studio's latest multi-platform project tested the limits of real-time lighting workflows. Traditional pipelines are undergoing their biggest transformation in two decades.",
      "The barrier between game engines and cinematic offline rendering is practically gone. Artists are now able to tweak complex shaders and particle simulations on the fly, reducing feedback loops drastically across departments.",
      "Furthermore, integration of hardware-accelerated ray tracing within standard asset management suites allows technical directors to forecast pipeline bottlenecks well before final compositing stages begin.",
    ],
  },
  {
    id: "art-2",
    slug: "hac-modi-terrestres-vestra-hice-pretiademion",
    headline: "Hac Modi Terrestres's Vestra Hice PretiaDemion",
    subheadline:
      "Exploring environmental destruction visual effects and pyro-solver fluid caching strategies.",
    category: "VFX Production",
    author: "Elena Rostova",
    date: "May 15, 2026",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    paragraphs: [
      "Mastering hyper-realistic fluid simulations requires precise voxel density controls and multi-layered particle emission masks. When crafting large-scale destruction sequences for commercial spots, calculation accuracy is paramount.",
      "By decoupling high-resolution smoke solvers from low-res collision meshes, artists save countless hours of cache generation while preserving fine-grained turbulence near boundary interactions.",
      "The resulting compositions bridge the gap between physical realism and artistic stylization, giving directors complete command over atmosphere and mood.",
    ],
  },
  {
    id: "art-3",
    slug: "alterationes-in-eoqueo-malt-cum-inscio-sensim-quabem",
    headline: "Alterationes in Eoque'o Malt Cum Inscio Sensim Quabem",
    subheadline:
      "Character rigging innovations and procedural muscle-simulation techniques in 3D shorts.",
    category: "Character Art",
    author: "Arjun Sharma",
    date: "May 14, 2026",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    paragraphs: [
      "Anatomy of expressive rigging goes far beyond simple bone weighting. Breathing life into stylized characters demands sophisticated squash-and-stretch algorithms combined with sliding skin geometry.",
      "Our latest character pipeline incorporates automated corrective blendshapes triggered by joint rotational limits, preventing undesirable volume loss during extreme facial expressions.",
    ],
  },
  {
    id: "art-4",
    slug: "conservatione-desiderium-telsinici-numiop",
    headline: "Conservatione Desiderium telsinici Numiop",
    subheadline:
      "Virtual production stages and LED wall calibration protocols for independent cinema.",
    category: "Virtual Production",
    author: "Vikram Roy",
    date: "May 12, 2026",
    image:
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    paragraphs: [
      "In-camera visual effects have transformed soundstage economics. By syncing camera tracking data directly with real-time perspective matrices on curved LED volumes, parallax distortion is eliminated entirely in-camera.",
      "Directors can now visualize complex weather phenomena and shifting daylight hours directly on set, inspiring more natural performances from talent.",
    ],
  },
];