/**
 * Professional work and projects.
 *
 * Sources, in order of authority: the LinkedIn profile (precise dates,
 * locations, and figures), then the live connorholm.com, which had itself run
 * ahead of this repository — the deployed site carried a full experience
 * section that never existed in the old constants.js.
 *
 * Dates confirmed by Connor: Vantix was founded January 2026, and the cloud
 * internship ended June 2025 (LinkedIn's "Mar 2026" was wrong).
 *
 * Entries lead with what happened rather than what the thing is. Anything
 * older than university is `archived` and renders in a collapsed list.
 */

export type Role = {
  org: string;
  title: string;
  /** ISO year-month. `end: null` means current. */
  start: string;
  end: string | null;
  /** Where the role happened — remote, or a city. */
  location: string;
  summary: string;
  tags: readonly string[];
  href?: string;
};

export const ROLES: readonly Role[] = [
  {
    org: "Vantix Strategies",
    title: "Founder & Principal Consultant",
    start: "2026-01",
    end: null,
    location: "Self-employed",
    summary:
      "A firm of forward deployed engineers, built on the belief that the value of AI shows up in production rather than in a proof of concept. We embed as an extension of a client's engineering org, target under six weeks from kickoff to deployment, and hand over full IP: production code, not recommendations. The work spans AI orchestration (RAG, agents, LLM ops), embedded data engineering, and post-acquisition tech-stack consolidation.",
    tags: ["Python", "LangChain", "Snowflake", "dbt", "RAG", "Agents"],
    href: "https://www.vantixstrategies.com/",
  },
  {
    org: "UnitedHealthcare",
    title: "AI Engineer",
    start: "2025-07",
    end: null,
    location: "Minnetonka, MN",
    summary:
      "Architected an enterprise AI observability platform covering both legacy and cloud-native applications, preventing over $1M in annual losses by cutting mean time to recovery on systems where downtime is valued at $600K per minute. Also built custom pipeline tooling and MCP servers that let autonomous agents map complex system dependencies, and agent-driven data retrieval that made member information far easier to reach internally.",
    tags: ["Python", "MCP", "LangChain", "FastAPI", "Observability"],
  },
  {
    org: "UnitedHealth Group",
    title: "Software Engineering Intern, Cloud",
    start: "2024-06",
    end: "2025-06",
    location: "Eden Prairie, MN",
    summary:
      "Containerized 52 .NET APIs and 10 Angular web apps with Docker, Kubernetes, and Helm, and built the CI/CD pipelines behind them with GitHub Actions and Octopus Deploy. Used generative AI to automate the bash scripting that cloud-migration standards required.",
    tags: ["Docker", "Kubernetes", "Helm", "GitHub Actions", ".NET"],
  },
  {
    org: "UnitedHealth Group",
    title: "Software Engineering Intern, AI/ML",
    start: "2023-06",
    end: "2023-08",
    location: "Eden Prairie, MN",
    summary:
      "Designed CNN architectures for a computer-vision system that detects section headers in medical documents at a 90% success rate, using image processing, transfer learning, and character recognition to make the model robust. It shipped into a platform that has since processed more than 2M documents.",
    tags: ["PyTorch", "TensorFlow", "OpenCV", "Computer Vision", "CNNs"],
  },
  {
    org: "The Jed Mahonis Group",
    title: "Software Engineer, Mobile",
    start: "2021-05",
    end: "2022-09",
    location: "St. Louis Park, MN",
    summary:
      "Built client Android applications in Kotlin and Java across more than three apps: authentication, API integration, Google Maps, and the user interfaces on top of them.",
    tags: ["Kotlin", "Java", "Android", "Google Maps"],
  },
  {
    org: "Eden Prairie Chamber of Commerce",
    title: "Intern",
    start: "2020-09",
    end: "2021-05",
    location: "Eden Prairie, MN",
    summary:
      "Volunteered at Chamber events and built connections with local businesses. The first thing on this list, and the only one with no code in it.",
    tags: [],
  },
];

export type Project = {
  slug: string;
  title: string;
  /** The result, not the description. One line. */
  outcome: string;
  description: string;
  year: number;
  tags: readonly string[];
  image?: string;
  /** Drawn glyph used when there is no screenshot to show. */
  icon?: "network";
  source?: string;
  visit?: string;
  /** Featured projects appear on the home page. Keep this to three. */
  featured?: boolean;
  /** Archived projects render as a compact list under a disclosure. */
  archived?: boolean;
};

export const PROJECTS: readonly Project[] = [
  {
    slug: "luup",
    title: "Luup",
    outcome: "A SaaS platform that finds the people worth knowing in a network you already have.",
    description:
      "Surfaces professional connections by shared criteria (alumni, past employers, location) with a dashboard for matches, companies, and roles, AI-generated outreach emails, and a discovery feed that keeps suggesting new people.",
    year: 2026,
    tags: ["TypeScript", "Node.js", "Postgres", "Google Gemini"],
    icon: "network",
    featured: true,
  },
  {
    slug: "py-doc",
    title: "Py-Doc",
    outcome: "Document-layout computer vision, published on PyPI as an open-source library.",
    description:
      "Makes document-layout CV and OCR accessible from a few lines of Python. An object-detection CNN trained on IBM's PubLayNet dataset parses the structure of a page, then Tesseract extracts the text region by region rather than treating the page as one flat block.",
    year: 2025,
    tags: ["Python", "Computer Vision", "OCR", "Open Source"],
    image: "/images/py-doc.jpg",
    source: "https://github.com/connorholm/py-doc",
    visit: "https://pypi.org/project/py-doc/",
    featured: true,
  },
  {
    slug: "tiktok-watermark-remover",
    title: "TikTok Watermark Remover",
    outcome: "Object detection plus inpainting, trained end to end to erase a moving watermark.",
    description:
      "A YOLOv7 detector locates the watermark frame by frame, since it drifts around the video and a fixed mask will not work. Computer-vision inpainting then reconstructs what was behind it. The interesting part was the training data: the detector needed watermarks composited over enough backgrounds that it learned the mark rather than the content underneath.",
    year: 2023,
    tags: ["PyTorch", "YOLOv7", "Computer Vision", "Python"],
    image: "/images/watermark-detect.jpg",
    source: "https://github.com/connorholm/tiktok-watermark-yolov7",
    featured: true,
  },
  {
    slug: "covid-19-information-provider",
    title: "COVID-19 Information Provider",
    outcome: "Won the Congressional App Challenge for Minnesota's 3rd district.",
    description:
      "A Flask site that scraped and republished current COVID-19 figures during the period when official dashboards were slow and hard to read. Data came from the COVID Tracking Project API plus BeautifulSoup where the API fell short, running on a self-managed Ubuntu box.",
    year: 2021,
    tags: ["Flask", "BeautifulSoup", "Python", "Ubuntu"],
    image: "/images/covid-app.png",
    source: "https://github.com/connorholm/Covid-19-Website",
    visit: "https://www.youtube.com/watch?v=JMSGNJM0_Kk",
  },
  {
    slug: "little-free-library",
    title: "Little Free Library Android App",
    outcome:
      "Shipped map, auth, and profile features into a nonprofit app with a global user base.",
    description:
      "Worked on the Android client for Little Free Library: the Google Maps integration for finding nearby libraries, the authentication flow, profile pictures and user information, and several of the UI screens.",
    year: 2021,
    tags: ["Android", "Kotlin", "Google Maps", "REST"],
    image: "/images/little-free-library.jpeg",
    visit: "https://littlefreelibrary.org/app/",
  },
  {
    slug: "flappy-bird-genetic-algorithm",
    title: "Flappy Bird Genetic Algorithm",
    outcome: "A population that starts at random weights and reliably solves the game.",
    description:
      "Reimplemented Flappy Bird so a genetic algorithm could drive it, then evolved a population of networks from random initialisation through selection and mutation until the birds cleared pipes indefinitely. Written up as a short paper.",
    year: 2023,
    tags: ["Genetic Algorithms", "Python", "AI"],
    image: "/images/flappybird.png",
    source: "https://github.com/connorholm/flappybird-genetic-algorithm",
    visit: "/flappybird-genetic-algorithm.pdf",
  },
  {
    slug: "target-practice-mania",
    title: "Target Practice Mania",
    outcome: "Released on the App Store with Game Center leaderboards.",
    description:
      "A 3D iOS game built on SceneKit with models made in Blender, plus a Game Center leaderboard so players could compete. My first end-to-end ship: build, submit, review, release.",
    year: 2021,
    tags: ["Swift", "SceneKit", "GameCenter", "Blender"],
    image: "/images/target-app.png",
    source: "https://github.com/connorholm/TargetPractice",
    visit: "https://apps.apple.com/us/app/target-practice-mania/id1551670619",
  },
  {
    slug: "ephs-app",
    title: "EPHS App",
    outcome: "Released on the App Store for my own high school's students.",
    description:
      "A SwiftUI app that authenticated against the Schoology API so students could see assignments, grades, and announcements, alongside the school calendar, counselor sign-ups, and contacts.",
    year: 2020,
    tags: ["SwiftUI", "REST", "Swift"],
    image: "/images/ephs-app.png",
    source: "https://github.com/connorholm/ephsapp2020",
    visit: "https://apps.apple.com/us/app/ephs/id1540598932",
  },
  {
    slug: "daily-dose-of-laughter",
    title: "Daily Dose of Laughter",
    outcome: "A full MERN stack build, front to back, as a way to learn the whole pipeline.",
    description:
      "Authenticated users post jokes and interact with each other's posts. React on the front, an Express API and MongoDB behind it.",
    year: 2022,
    tags: ["React", "Express", "MongoDB", "Node"],
    image: "/images/joke.png",
    source: "https://github.com/connorholm/jokes_frontend",
    archived: true,
  },
  {
    slug: "python-chat-app",
    title: "Python Chat App",
    outcome: "Terminal and GUI clients over raw sockets, talking to a server I ran myself.",
    description:
      "A chat application in two forms, a terminal client and a Tkinter GUI, communicating through a public Ubuntu server. Mostly an excuse to learn sockets properly.",
    year: 2020,
    tags: ["Python", "Sockets", "Tkinter"],
    image: "/images/chat-app.png",
    source: "https://github.com/connorholm/ChatApp",
    archived: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const ACTIVE_PROJECTS = PROJECTS.filter((p) => !p.archived);
export const ARCHIVED_PROJECTS = PROJECTS.filter((p) => p.archived);

export type Education = {
  school: string;
  degree: string;
  graduated: string;
};

/** Compressed to the lines anyone actually reads — no course lists. */
export const EDUCATION: readonly Education[] = [
  {
    school: "University of Minnesota",
    degree: "MS, Computer Science",
    graduated: "2025",
  },
  {
    school: "University of Minnesota",
    degree: "BS, Computer Science",
    graduated: "2024",
  },
];

/**
 * Skills, grouped by the work they were used for rather than as an icon wall.
 */
export type SkillGroup = {
  area: string;
  items: readonly string[];
};

export const SKILLS: readonly SkillGroup[] = [
  {
    area: "AI systems",
    items: ["LangChain", "RAG", "LLM agents", "MCP servers", "LLM ops", "Evals"],
  },
  {
    area: "Machine learning",
    items: ["PyTorch", "OpenCV", "Computer vision", "CNNs", "OCR", "Transfer learning"],
  },
  {
    area: "Backend & data",
    items: ["Python", "FastAPI", "Node / Express", "Postgres", "Snowflake", "dbt"],
  },
  {
    area: "Platform",
    items: ["Docker", "Kubernetes", "Helm", "GitHub Actions", "Octopus Deploy", "Azure"],
  },
  {
    area: "Web",
    items: ["TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    area: "Mobile",
    items: ["Swift", "SwiftUI", "Kotlin", "Android SDK"],
  },
];
