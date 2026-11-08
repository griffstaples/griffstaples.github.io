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
  // Only used when type === "placeholder" — describes the image/diagram
  // that should go here. Swap the entry for a real image when it exists.
  placeholderLabel?: string;
  width: number;
  height: number;
  caption?: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface ProjectBodySection {
  heading: string;
  body?: string;
  bullets?: string[];
  media?: ProjectMedia[];
}

export type ProjectCategory = "field" | "research" | "software";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  field: "Field robotics & embedded systems",
  research: "Research, simulation & applied ML",
  software: "Software systems",
};

export interface Project {
  slug: string;
  title: string;
  // Terser label for the homepage table's "Project" column — falls back
  // to `title` when omitted.
  shortTitle?: string;
  status: string;
  period?: string;
  category: ProjectCategory;
  metaLine: string;
  // Short teaser/result shown on the homepage table, the projects index,
  // and in meta descriptions.
  teaser: string;
  // Even shorter line for the homepage "Result" column — falls back to
  // `teaser` when omitted.
  result?: string;
  // The opening pitch on the detail page: the problem and why it matters.
  overview: string;
  // Datasheet-style quick facts shown under the overview.
  atAGlance: SpecRow[];
  // Case-study sections on the detail page.
  sections: ProjectBodySection[];
  // "What this shows" — the robotics / IoT / systems-engineering skills
  // the project demonstrates. Keep these short and skimmable.
  demonstrates: string[];
  stack: string[];
  media: ProjectMedia;
  links: ProjectLink[];
  // Shown in the homepage "Featured field work" table.
  featured: boolean;
}

/**
 * Content rules for this file:
 * - Only facts from Griffin's resumes and the existing site.
 * - Anything not yet known is a string starting with "TODO" — the detail
 *   page renders those as amber callouts so they're easy to spot and fill.
 *   `grep -n TODO data/projects.ts` lists everything still open.
 * - Placeholders (type: "placeholder") mark where photos/diagrams should go.
 */
export const PROJECTS: Project[] = [
  // ───────────────────────── Field robotics ─────────────────────────
  {
    slug: "edge-acoustic-monitoring",
    title: "Edge-Deployed Hydro-Acoustic Monitoring",
    shortTitle: "Edge acoustic monitoring",
    status: "MASc thesis · In progress",
    period: "Sept 2026 – Present",
    category: "field",
    metaLine: "UBC Marine Robotics Lab · MASc thesis",
    teaser:
      "Large hydro-acoustic models distilled to run on edge hardware aboard underwater, surface and bio-inspired vehicles, with compute and energy measured on each.",
    result:
      "Distilling acoustic vessel-detection models for edge hardware on UUV, USV and BSV platforms.",
    overview:
      "Listening for vessels from a small robotic platform means the detection has to run on the vehicle itself, on limited compute and a limited battery. My thesis takes hydro-acoustic vessel detection and classification all the way from large models trained on a workstation to compact models running on edge hardware, then looks at the whole system to ask which robotic platform is best suited to carry it: an uncrewed underwater vehicle (UUV), an uncrewed surface vehicle (USV), or a bio-inspired surface vehicle (BSV).",
    atAGlance: [
      { label: "Role", value: "MASc researcher, thesis lead" },
      { label: "Lab", value: "UBC Marine Robotics Lab (Dr. Adrien Desjardins)" },
      { label: "Platforms", value: "UUV · USV · BSV" },
      { label: "Edge hardware", value: "TODO: name the target board(s)" },
      { label: "Sensor", value: "TODO: hydrophone / acoustic sensor model" },
    ],
    sections: [
      {
        heading: "From big model to small device",
        bullets: [
          "Train and fine-tune large hydro-acoustic models for vessel detection and classification.",
          "Distill smaller models from them while maintaining accuracy, so they fit the memory and compute of edge hardware.",
          "Integrate the distilled models onto edge hardware and measure their compute and energy performance on the device.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel:
              "System diagram: acoustic sensor → edge hardware → onboard detection → vehicle / operator",
            width: 712,
            height: 300,
          },
        ],
      },
      {
        heading: "Whole-system view",
        body: "A model that is accurate on a desk is only half the answer. The other half is how it behaves on the vehicle that carries it. I evaluate whole-system performance and compare platform suitability across UUV, USV and BSV platforms, measuring the compute and energy cost on each.",
        media: [
          {
            type: "placeholder",
            placeholderLabel:
              "Chart: accuracy vs. energy per inference for each model size, by platform",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Photo: edge hardware mounted on a vehicle",
            width: 344,
            height: 240,
          },
        ],
      },
      {
        heading: "Results",
        bullets: [
          "TODO: Accuracy of the large model vs. the distilled model.",
          "TODO: Model size, inference latency and energy per inference on the target hardware.",
          "TODO: Which platform came out best suited, and why.",
        ],
      },
    ],
    demonstrates: [
      "Deploying ML on embedded hardware under real compute and power limits",
      "Benchmarking compute and energy on physical devices",
      "System-level trade-off analysis across three vehicle types",
      "Owning a research pipeline end to end, from training to hardware",
    ],
    stack: ["Edge ML", "Model distillation", "Energy benchmarking", "UUV / USV / BSV"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: spectrogram of a vessel passing, or the edge device in its enclosure",
      width: 712,
      height: 360,
    },
    links: [],
    featured: true,
  },
  {
    slug: "bio-inspired-surface-vehicle",
    title: "Bio-Inspired Surface Vehicle",
    shortTitle: "Bio-inspired surface vehicle",
    status: "Built & water-tested",
    period: "Jan – Sept 2026",
    category: "field",
    metaLine: "UBC Marine Robotics Lab",
    teaser:
      "Designed and built end to end, from the structure and waterproofing to the battery, power regulation and ESP32 electronics, around a propulsion mechanism inspired by nature.",
    result:
      "Built end to end (structure, waterproofing, power, ESP32) and water-tested.",
    overview:
      "Most small surface vehicles push themselves along with a propeller. This one uses a bio-inspired propulsion mechanism instead. I designed and built the vehicle end to end: the mechanical structure, the waterproofing, and the power and electronics integration. Then I calibrated its servos and IMU while optimizing the propulsion mechanism on the water.",
    atAGlance: [
      { label: "Role", value: "Designer & builder, end to end" },
      { label: "Controller", value: "ESP32" },
      { label: "Power", value: "Battery + two BECs" },
      { label: "Actuation", value: "Servos (calibrated in-house)" },
      { label: "Sensing", value: "IMU (calibrated in-house)" },
      { label: "Propulsion", value: "TODO: one line on the mechanism and what it mimics" },
    ],
    sections: [
      {
        heading: "What I built",
        bullets: [
          "Mechanical structure of the vehicle, designed and built from scratch.",
          "Waterproofing for the electronics so the vehicle could operate on the water.",
          "Power and electronics integration: a battery and two BECs powering an ESP32 controller and servos.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel:
              "Block diagram: battery → 2× BEC → ESP32 controller → servos, with IMU feedback",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Photo: open electronics bay / wiring",
            width: 344,
            height: 240,
          },
        ],
      },
      {
        heading: "Calibration & tuning",
        bullets: [
          "Calibrated the vehicle's servos and IMU while optimizing its bio-inspired propulsion mechanism.",
          "TODO: How the propulsion was optimized (parameters tuned, how you measured improvement).",
        ],
      },
      {
        heading: "On the water",
        bullets: [
          "Built and tested on the water to validate the propulsion concept.",
          "TODO: Test results, e.g. speed, endurance or efficiency compared with a baseline.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Video: the vehicle underway",
            width: 712,
            height: 360,
          },
        ],
      },
    ],
    demonstrates: [
      "Power distribution design (battery, BECs) for a mobile robot",
      "Embedded integration on an ESP32 with servos and an IMU",
      "Waterproofing electronics for marine operation",
      "Sensor and actuator calibration, then iterating on real hardware",
    ],
    stack: ["ESP32", "Servos", "IMU", "Power (BECs)", "Waterproofing"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: the vehicle on the water",
      width: 712,
      height: 360,
    },
    links: [],
    featured: true,
  },
  {
    slug: "water-quality-usv",
    title: "Remotely Operated Water-Quality USV",
    shortTitle: "Water-quality sampling USV",
    status: "Team project",
    period: "Jan – Sept 2026",
    category: "field",
    metaLine: "UBC Marine Robotics Lab",
    teaser:
      "A BlueBoat uncrewed surface vehicle fitted for live water-quality sensing and pump-based discrete sampling. I built its deck and supported the electronics and software.",
    result:
      "BlueBoat USV for live water-quality sensing and pump-based sampling.",
    overview:
      "The goal was to let one remotely operated vehicle do two jobs at once: stream live water-quality readings, and bring back physical water samples from chosen locations. Our team developed a live water-sensing and pump-based sampling system on a Blue Robotics BlueBoat USV. I built the lightweight deck that carries the payload and supported the electronics and software.",
    atAGlance: [
      { label: "Platform", value: "Blue Robotics BlueBoat USV" },
      { label: "Operation", value: "Remotely operated" },
      { label: "Payload", value: "Live water-quality sensing + pump-based sampler" },
      { label: "My role", value: "Built the deck; supported electronics & software" },
      { label: "Team", value: "TODO: team size / collaborators" },
    ],
    sections: [
      {
        heading: "The system",
        body: "Two payloads share one vehicle: sensors that report water quality live, and a pump that fills discrete samples for lab analysis.",
        bullets: [
          "TODO: Which water-quality parameters are measured live.",
          "TODO: How many discrete samples the sampler holds, and how a sample is triggered.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel:
              "System diagram: sensors + pump sampler → onboard electronics → live data to operator",
            width: 712,
            height: 300,
          },
        ],
      },
      {
        heading: "My contribution",
        bullets: [
          "Built the lightweight deck that mounts the sensing and sampling payload on the BlueBoat.",
          "Supported the electronics and software integration of the payload.",
          "TODO: One or two specifics, e.g. a wiring, power or software piece you owned.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Photo: the deck and payload installed on the BlueBoat",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Photo: deck CAD or fabrication",
            width: 344,
            height: 240,
          },
        ],
      },
      {
        heading: "Deployment",
        bullets: ["TODO: Where it was used, how many missions, and what data came back."],
      },
    ],
    demonstrates: [
      "Payload integration on a commercial robotic platform",
      "Live remote sensing, the IoT pattern applied on the water",
      "Mechanical and electrical integration in a team setting",
    ],
    stack: ["BlueBoat USV", "Sensor integration", "Pump sampling", "Deck fabrication"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: the USV sampling on the water",
      width: 712,
      height: 360,
    },
    links: [],
    featured: true,
  },
  {
    slug: "underwater-rov",
    title: "Underwater ROV — Sea Urchin Survey",
    shortTitle: "Underwater ROV",
    status: "Fielded",
    period: "Sept 2025",
    category: "field",
    metaLine: "UBC Marine Robotics Lab, with the Sc'ianew First Nation",
    teaser:
      "Assembled a BlueROV and deployed it in the field with the Sc'ianew First Nation for sea urchin population monitoring.",
    result:
      "Fielded with the Sc'ianew First Nation for sea urchin monitoring.",
    overview:
      "A survey vehicle only proves itself in the water, on the day, with partners counting on it. I assembled a Blue Robotics BlueROV and field-deployed it in partnership with the Sc'ianew First Nation to support sea urchin population monitoring.",
    atAGlance: [
      { label: "Platform", value: "Blue Robotics BlueROV" },
      { label: "Partner", value: "Sc'ianew First Nation" },
      { label: "Mission", value: "Sea urchin population monitoring" },
      { label: "Field certs", value: "ROC(M) VHF radio · Pleasure Craft Operator Card · Wilderness First Aid" },
    ],
    sections: [
      {
        heading: "Build",
        bullets: [
          "Assembled the BlueROV and readied it for field use.",
          "TODO: Any payload, camera, tether or software changes you made for the survey.",
        ],
      },
      {
        heading: "Field deployment",
        bullets: [
          "Deployed in the field with the Sc'ianew First Nation to support sea urchin population monitoring.",
          "TODO: Location, number of dives, and what the survey produced.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Photo: launching the ROV from the shore or boat",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Still: ROV camera footage of the sea floor",
            width: 344,
            height: 240,
          },
        ],
      },
    ],
    demonstrates: [
      "Vehicle assembly and checkout before deployment",
      "Real field operations with an external partner",
      "Marine field readiness (VHF radio, boating and first-aid certifications)",
    ],
    stack: ["BlueROV", "Field ops", "Subsea"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: the ROV in the water during the survey",
      width: 712,
      height: 360,
    },
    links: [],
    featured: true,
  },
  {
    slug: "monocopter",
    title: "Monocopter Flight Avionics",
    shortTitle: "Monocopter avionics",
    status: "Flown",
    period: "May – Sept 2020",
    category: "field",
    metaLine: "Research Assistant, Royal Military College of Canada",
    teaser:
      "Designed, programmed and built the flight avionics for a 375 g single-bladed helicopter, ending in a successful test flight.",
    result:
      "Flight avionics for a 375 g single-bladed helicopter; successful test flight.",
    overview:
      "A monocopter is a helicopter with a single spinning blade, so the whole aircraft rotates. That makes sensing and control unusual. I designed, programmed and manufactured the flight avionics for a 375 g monocopter, built the data link to watch it in real time, and automated the wind-tunnel testing behind it. The project ended in a successful test flight.",
    atAGlance: [
      { label: "Vehicle", value: "375 g single-bladed helicopter" },
      { label: "Role", value: "Research Assistant (avionics)" },
      { label: "Hardware", value: "Arduino-based avionics" },
      { label: "Telemetry", value: "Bluetooth, real time" },
      { label: "Outcome", value: "Successful test flight" },
    ],
    sections: [
      {
        heading: "Avionics",
        bullets: [
          "Designed, programmed and manufactured the flight avionics.",
          "Calibrated the onboard IMU.",
          "Built a Bluetooth data-acquisition link for real-time monitoring of the vehicle.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Diagram or photo: the avionics board and its sensors",
            width: 712,
            height: 300,
          },
        ],
      },
      {
        heading: "Test automation",
        bullets: [
          "Automated wind-tunnel data acquisition with a custom script, saving 2 hours of labour per run and eliminating operator error.",
        ],
      },
    ],
    demonstrates: [
      "Flight avionics design, from board to firmware",
      "IMU calibration and real-time telemetry",
      "Test automation that saves time and removes human error",
    ],
    stack: ["Arduino", "C/C++", "IMU", "Bluetooth"],
    media: {
      type: "video",
      src: "/projects/monocopter_testflight.mp4",
      poster: "/projects/monocopter_thumbnail.png",
      alt: "Monocopter test flight",
      width: 256,
      height: 455,
      caption: "Test flight",
    },
    links: [],
    featured: true,
  },

  // ─────────────────── Research, simulation & applied ML ───────────────────
  {
    slug: "bio-inspired-swimmer-control",
    title: "Bio-Inspired Swimmer Control Optimization",
    shortTitle: "Swimmer control optimization",
    status: "Research",
    period: "Jan – Apr 2026",
    category: "research",
    metaLine: "UBC",
    teaser:
      "A simulator for a bio-inspired underwater vehicle, used to optimize its body layout and train a deep reinforcement learning controller.",
    overview:
      "A vehicle that swims like an animal has no off-the-shelf controller. This project built a simulator for a bio-inspired autonomous underwater vehicle and used it to optimize the vehicle's topology and train its controller with deep reinforcement learning.",
    atAGlance: [
      { label: "Vehicle", value: "Bio-inspired AUV (simulated)" },
      { label: "Method", value: "Topology optimization + deep RL controller" },
      { label: "Context", value: "TODO: course or lab project, solo or team" },
    ],
    sections: [
      {
        heading: "Approach",
        bullets: [
          "TODO: Confirm this page matches your resume line 'Developing a simulator to optimize the topology of a bio-inspired AUV and train its deep reinforcement learning controller'. If this was separate work, rewrite this page.",
          "Built a simulator for a bio-inspired AUV.",
          "Used it to optimize the vehicle's topology.",
          "Trained the vehicle's controller with deep reinforcement learning.",
          "TODO: Simulator / physics engine and RL algorithm used.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Render: the simulated swimmer mid-stroke",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Chart: training reward over time",
            width: 344,
            height: 240,
          },
        ],
      },
      {
        heading: "Results",
        bullets: ["TODO: What the optimized design / controller achieved vs. the starting point."],
      },
    ],
    demonstrates: [
      "Modelling and simulation of a robotic vehicle",
      "Control design for unconventional actuation",
      "Applying deep RL to a physical-systems problem",
    ],
    stack: ["Simulation", "Deep RL", "Optimization"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: simulated swimmer or learned gait",
      width: 712,
      height: 360,
    },
    links: [],
    featured: false,
  },
  {
    slug: "bio-inspired-heat-fin",
    title: "Bio-Inspired Heat Fin Design & Simulation",
    shortTitle: "Bio-inspired heat fin",
    status: "Design study",
    period: "Sept – Dec 2025",
    category: "research",
    metaLine: "UBC",
    teaser:
      "Designed a heat fin inspired by nature and evaluated its thermal performance in simulation.",
    overview:
      "Getting heat out is a hard limit on how much power electronics and compute can go into a sealed enclosure. This project designed a heat fin inspired by nature and evaluated it in simulation.",
    atAGlance: [
      { label: "Inspiration", value: "TODO: the natural structure the fin is based on" },
      { label: "Tools", value: "TODO: CAD and simulation software (e.g. CFD / FEA package)" },
      { label: "Context", value: "TODO: course or lab project, solo or team" },
    ],
    sections: [
      {
        heading: "Design",
        bullets: ["TODO: The fin geometry and why the natural structure should help heat transfer."],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Render: fin geometry",
            width: 344,
            height: 240,
          },
          {
            type: "placeholder",
            placeholderLabel: "Plot: simulated temperature field",
            width: 344,
            height: 240,
          },
        ],
      },
      {
        heading: "Simulation & results",
        bullets: [
          "TODO: Simulation setup (boundary conditions, mesh) and how you checked it.",
          "TODO: Performance vs. a conventional fin of the same size.",
        ],
      },
    ],
    demonstrates: [
      "Thermal design for electronics and power hardware",
      "Simulation-driven design iteration",
    ],
    stack: ["Thermal design", "Simulation"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: fin render with a thermal contour overlay",
      width: 712,
      height: 360,
    },
    links: [],
    featured: false,
  },
  {
    slug: "kidney-transplant-ml",
    title: "Explainable ML for Kidney Transplant Outcomes",
    shortTitle: "Kidney transplant ML",
    status: "Research",
    period: "Jan – Apr 2025",
    category: "research",
    metaLine: "Machine Learning Research Assistant, UBC, with the urology lab",
    teaser:
      "Built explainable ML models with UBC's urology lab to predict negative outcomes after kidney transplants.",
    overview:
      "In a clinical setting a prediction is only useful if people can see why it was made. Working with UBC's urology lab, I built explainable machine learning models to predict negative outcomes after kidney transplants, so that each prediction comes with the factors behind it.",
    atAGlance: [
      { label: "Role", value: "Machine Learning Research Assistant" },
      { label: "Partner", value: "UBC urology lab" },
      { label: "Data", value: "TODO: dataset size / source (as much as you can share)" },
      { label: "Models", value: "TODO: model types and explainability method" },
    ],
    sections: [
      {
        heading: "Approach",
        bullets: [
          "Built explainable ML models to predict negative outcomes after kidney transplants.",
          "TODO: How the models were evaluated and validated.",
        ],
        media: [
          {
            type: "placeholder",
            placeholderLabel: "Chart: feature importance / explanation plot",
            width: 712,
            height: 300,
          },
        ],
      },
      {
        heading: "Results",
        bullets: ["TODO: Key metric(s) and what the explanations revealed."],
      },
    ],
    demonstrates: [
      "Careful model evaluation on real-world data",
      "Explainability, the same discipline needed for trustworthy diagnostics and fault detection",
      "Working with domain experts outside engineering",
    ],
    stack: ["Explainable ML", "Model evaluation"],
    media: {
      type: "placeholder",
      placeholderLabel: "Hero image: model explanation figure",
      width: 712,
      height: 360,
    },
    links: [],
    featured: false,
  },
  {
    slug: "blood-pressure-monitor",
    title: "Optical Blood Pressure Monitor",
    shortTitle: "Blood pressure monitor",
    status: "Undergraduate design thesis",
    period: "2020",
    category: "research",
    metaLine: "Queen's University, Engineering Physics",
    teaser:
      "Designed and prototyped a lightweight, low-cost ambulatory monitor that measures blood pressure optically instead of with a cuff and stethoscope.",
    overview:
      "The traditional way to measure blood pressure uses a cuff and a stethoscope, which is hard to do on the move. For my Engineering Physics design thesis I designed and prototyped a lightweight, low-cost ambulatory monitor that measures blood pressure optically, with a machine learning model turning the signal into a reading.",
    atAGlance: [
      { label: "Context", value: "4th-year design thesis, Queen's Engineering Physics" },
      { label: "Sensing", value: "Optical" },
      { label: "Model", value: "ML trained on an open-source ECG dataset" },
    ],
    sections: [
      {
        heading: "Hardware",
        bullets: [
          "Designed and prototyped a lightweight, low-cost ambulatory blood pressure monitor.",
          "TODO: Sensor and board used in the prototype.",
        ],
      },
      {
        heading: "Signal to reading",
        bullets: [
          "Trained an ML model on an open-source ECG dataset to predict blood pressure.",
        ],
      },
    ],
    demonstrates: [
      "Sensor hardware prototyping",
      "Building a full pipeline from raw signal to a useful measurement",
    ],
    stack: ["Hardware prototyping", "Optical sensing", "Python", "Keras"],
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

  // ───────────────────────── Software systems ─────────────────────────
  {
    slug: "comment-explorer",
    title: "Comment Explorer",
    status: "Live · 0 → 85 users",
    period: "2023",
    category: "software",
    metaLine: "Founder & developer, self-employed",
    teaser:
      "An LLM-powered web app for analyzing YouTube comment sections, built end to end and grown from 0 to 85 users.",
    overview:
      "Comment Explorer analyzes a video's comment section for sentiment, emotional content and subjects, and lets you ask questions about the comments directly through a ChatGPT integration. I founded it and built the whole system, from the Python analysis backend to the web front end, and grew it to 85 users.",
    atAGlance: [
      { label: "Role", value: "Founder, sole developer" },
      { label: "Backend", value: "Python, FastAPI" },
      { label: "Frontend", value: "Next.js, TypeScript" },
      { label: "Users", value: "0 → 85" },
    ],
    sections: [
      {
        heading: "What it does",
        bullets: [
          "Sentiment, emotional-content and subject analysis of a video's comments.",
          "A ChatGPT integration to query the comments directly.",
        ],
      },
    ],
    demonstrates: [
      "Shipping and running a complete system for real users",
      "Backend and data-pipeline design",
    ],
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "LLMs"],
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
    period: "2023",
    category: "software",
    metaLine: "Self-directed",
    teaser:
      "Explore the English language in embedding space with a fuzzy nearest-neighbours search for related words.",
    overview:
      "Embedding Dictionary lets you explore English in embedding space: type a word and a fuzzy nearest-neighbours search surfaces related words from its embedding.",
    atAGlance: [
      { label: "Backend", value: "Python, FastAPI" },
      { label: "Frontend", value: "Next.js, TypeScript" },
    ],
    sections: [
      {
        heading: "How it works",
        bullets: [
          "Words are mapped into an embedding space.",
          "A fuzzy nearest-neighbours search finds related words.",
        ],
      },
    ],
    demonstrates: ["Search over high-dimensional data", "Full-stack delivery"],
    stack: ["Python", "FastAPI", "Next.js", "TypeScript"],
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
  {
    slug: "crypto-currency-trader",
    title: "Crypto-Currency Trader",
    status: "Personal project",
    category: "software",
    metaLine: "Self-directed",
    teaser:
      "An automated bot that trades cryptocurrency through Binance's API, following an algorithmic strategy driven by a Keras model.",
    overview:
      "An automated trading bot built on Binance's API. It follows an algorithmic strategy, with a model trained in Keras driving trade decisions.",
    atAGlance: [
      { label: "Interface", value: "Binance API" },
      { label: "Model", value: "Keras" },
    ],
    sections: [
      {
        heading: "How it works",
        bullets: [
          "Trades through Binance's API without manual input.",
          "Trade decisions are driven by a model trained in Keras.",
        ],
      },
    ],
    demonstrates: ["Automated decision loops against a live external system", "Applied ML"],
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
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((project) => project.slug === slug);

export const isTodo = (text: string): boolean => /^TODO\b/.test(text.trim());
