export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectMedia {
  type: "image" | "video" | "placeholder";
  src?: string;
  poster?: string;
  alt?: string;
  // Only used when type === "placeholder" — shown until real media exists.
  placeholderLabel?: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  // Terser label for the homepage table's "Project" column — falls back
  // to `title` when omitted.
  shortTitle?: string;
  status: string;
  metaLine: string;
  // Short teaser/result shown on the homepage table and in meta descriptions.
  teaser: string;
  // Short, recruiter-skimmable bullets shown on the project detail page.
  summary: string[];
  stack: string[];
  media: ProjectMedia;
  links: ProjectLink[];
  // Shown in the homepage "Featured field work" table.
  featured: boolean;
}

// Field robotics work first, then legacy software projects — see
// new_files_and_updates/PLAN.md for the reasoning behind the reorder.
export const PROJECTS: Project[] = [
  {
    slug: "underwater-rov",
    title: "Underwater ROV — Sea Urchin Survey",
    shortTitle: "Underwater ROV",
    status: "Fielded · Sept 2025",
    metaLine: "UBC Marine Robotics Lab, with the Sc'ianew First Nation",
    teaser:
      "Fielded with the Sc'ianew First Nation for sea urchin population monitoring.",
    summary: [
      "Designed and built an underwater ROV from the ground up — mechanical design, electronics and control software — for a real field survey, not a lab demo.",
      "Deployed it on-site with the Sc'ianew First Nation to support sea urchin population monitoring.",
      "Owned the full stack: CAD and fabrication through to real-time telemetry, under the reliability pressure of an actual field deployment.",
    ],
    stack: ["CAD", "Embedded", "Telemetry"],
    media: {
      type: "placeholder",
      placeholderLabel: "Photo or video from the field deployment — coming soon",
      width: 320,
      height: 240,
    },
    links: [],
    featured: true,
  },
  {
    slug: "bio-inspired-surface-vehicle",
    title: "Bio-Inspired Surface Vehicle",
    shortTitle: "Bio-inspired surface vehicle",
    status: "In development · 2025–26",
    metaLine: "UBC Marine Robotics Lab",
    teaser:
      "Built and tested a propulsion mechanism inspired by nature; AUV variant in simulation.",
    summary: [
      "Designed and prototyped a surface vehicle using a propulsion mechanism inspired by nature, rather than a conventional propeller.",
      "Built and on-water tested the vehicle to validate the propulsion concept.",
      "Now developing a simulator to optimize the topology of an AUV variant and train its deep reinforcement learning controller.",
    ],
    stack: ["Simulation", "RL", "CAD"],
    media: {
      type: "placeholder",
      placeholderLabel: "Video of the vehicle underway — coming soon",
      width: 320,
      height: 240,
    },
    links: [],
    featured: true,
  },
  {
    slug: "vessel-classification",
    title: "Edge ML Vessel Classification",
    shortTitle: "Vessel classification, edge ML",
    status: "In development",
    metaLine: "UBC Marine Robotics Lab",
    teaser:
      "Acoustic models for edge-deployed vessel detection and classification.",
    summary: [
      "Developing specialized acoustic models to classify and detect vessels from edge-deployed hardware.",
      "Early-stage, ongoing work — write-up to follow as results land.",
    ],
    stack: ["ML", "Edge"],
    media: {
      type: "placeholder",
      placeholderLabel: "Spectrogram / results visualization — coming soon",
      width: 320,
      height: 240,
    },
    links: [],
    featured: true,
  },
  {
    slug: "monocopter",
    title: "Monocopter Flight Avionics",
    shortTitle: "Monocopter avionics",
    status: "Flown · 2020",
    metaLine: "Royal Military College of Canada",
    teaser:
      "Flight avionics for a 375g single-bladed helicopter, successful test flight.",
    summary: [
      "Designed, programmed and manufactured flight avionics for a 375 g single-bladed helicopter.",
      "Built a Bluetooth telemetry link for real-time monitoring during flight.",
      "Automated wind-tunnel data acquisition with a custom script — saved 2 hours of labour per run and eliminated operator error.",
      "Culminated in a successful test flight.",
    ],
    stack: ["Arduino", "C/C++"],
    media: {
      type: "video",
      src: "/projects/monocopter_testflight.mp4",
      poster: "/projects/monocopter_thumbnail.png",
      alt: "Monocopter test flight",
      width: 256,
      height: 455,
    },
    links: [],
    featured: true,
  },
  {
    slug: "crypto-currency-trader",
    title: "Crypto-Currency Trader",
    status: "Personal project",
    metaLine: "Self-directed",
    teaser:
      "Takes advantage of Binance's API to trade cryptocurrency following an algorithmic strategy.",
    summary: [
      "Built an automated trading bot against Binance's API.",
      "Trained a model (Keras) to drive trade decisions as part of the strategy.",
      "Personal project exploring algorithmic trading and applied ML.",
    ],
    stack: ["Python", "Keras", "Binance API"],
    media: {
      type: "image",
      src: "/projects/CryptoDiagram.png",
      alt: "A schematic of the cryptocurrency trading software",
      width: 256,
      height: 207,
    },
    links: [
      {
        label: "View the repo",
        href: "https://github.com/griffstaples/CryptocurrencyTrader",
        external: true,
      },
    ],
    featured: false,
  },
  {
    slug: "blood-pressure-monitor",
    title: "Blood Pressure Monitor",
    status: "Undergraduate thesis · 2020",
    metaLine: "Queen's University, Engineering Physics",
    teaser:
      "Designed a blood pressure monitor that measures blood pressure optically instead of via the traditional auscultatory method.",
    summary: [
      "4th-year Engineering Physics design thesis at Queen's University.",
      "Designed and prototyped a lightweight, low-cost ambulatory blood pressure monitor.",
      "Trained an ML model on an open-source ECG dataset to predict blood pressure from the optical signal.",
    ],
    stack: ["Python", "Keras", "NumPy", "Hardware prototyping"],
    media: {
      type: "image",
      src: "/projects/BP_Schematic.png",
      alt: "A schematic of an optical blood pressure monitor",
      width: 256,
      height: 202,
    },
    links: [
      {
        label: "View the repo",
        href: "https://github.com/griffstaples/EngPhysThesis",
        external: true,
      },
    ],
    featured: false,
  },
  {
    slug: "comment-explorer",
    title: "Comment Explorer",
    status: "Live · 0 → 85 users",
    metaLine: "Self-employed, 2023",
    teaser:
      "A web app for analyzing YouTube comment sections — sentiment, emotional content, subject analysis, and a ChatGPT integration to query the comments directly.",
    summary: [
      "Founded and built an LLM-powered app for analyzing YouTube comment sections.",
      "Sentiment, emotional-content and subject analysis, plus a ChatGPT integration to query a video's comments directly.",
      "Grew it from 0 to 85 users as a self-employed freelance project.",
    ],
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "ChatGPT"],
    media: {
      type: "image",
      src: "/projects/CommentExplorerDashboard.png",
      alt: "An image of the Comment Explorer analysis",
      width: 300,
      height: 238,
    },
    links: [
      { label: "Try it live", href: "https://www.commentexplorer.com", external: true },
    ],
    featured: false,
  },
  {
    slug: "embedding-dictionary",
    title: "Embedding Dictionary",
    status: "Live",
    metaLine: "Self-directed",
    teaser:
      "Explore the English language in embedding space with a fuzzy nearest-neighbours search for related words.",
    summary: [
      "Built a tool for exploring the English language in embedding space.",
      "A fuzzy nearest-neighbours search surfaces related words from a word's embedding.",
    ],
    stack: ["Next.js", "TypeScript", "Python", "FastAPI"],
    media: {
      type: "image",
      src: "/projects/EmbeddingDictionaryGraph.jpg",
      alt: "An image showing the nearest neighbours in an embedding space map",
      width: 300,
      height: 238,
    },
    links: [
      {
        label: "Try it live",
        href: "https://www.embeddingdictionary.com",
        external: true,
      },
    ],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);
