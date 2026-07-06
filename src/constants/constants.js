export const typewriter_list = [
  "AI/ML",
  "AI Agents",
  "Data Engineering",
  "Web Dev",
  "Cloud Services",
  "Mobile Dev"
];


export const accomplishments = [
  { number: "8+", text: 'Years of Programming Experience'},
  { number: 12, text: "Programming Languages" },
  { number: 4, text: 'Mobile Applications'},
  { number: "6+", text: "AI / ML Projects"},
];

// Professional experience. Roles have no logos, so each renders with an icon
// (resolved in the Experience component) per the "icon fallback" approach.
export const experience = [
  {
    company: "Vantix Strategies",
    role: "Founder & Principal Consultant",
    date: "2025 — Present",
    location: "Remote",
    icon: "rocket",
    description:
      "Founded a boutique firm of Forward Deployed Engineers who embed inside client teams and ship production AI systems — not strategy decks — in under six weeks, with full IP owned by the client. Deliver across AI orchestration (RAG, agents, LLM ops), embedded data engineering, and post-acquisition tech-stack consolidation.",
    tags: ["Python", "LangChain", "Snowflake", "dbt", "RAG", "Agents"],
    visit: "https://www.vantixstrategies.com/",
  },
  {
    company: "UnitedHealthcare",
    role: "AI Engineer",
    date: "2025 — Present",
    location: "Minnetonka, MN",
    icon: "robot",
    description:
      "Built an AI observability platform for legacy and cloud-native systems, and a seamless benefits API that lets internal agents retrieve member data through natural language, powered by MCP servers for agentic capabilities. Sharply reduced Mean Time to Recovery on systems where downtime is valued at $600K/minute.",
    tags: ["Python", "MCP", "LangChain", "FastAPI", "Observability"],
    visit: "",
  },
  {
    company: "UnitedHealth Group",
    role: "Software Engineer Intern — Cloud Migration",
    date: "2024 — 2025",
    location: "Minneapolis, MN",
    icon: "cloud",
    description:
      "Containerized 52 .NET APIs and 10 Angular apps with Docker, Kubernetes, and Helm, and built CI/CD pipelines with GitHub Actions and Octopus Deploy — saving $100K+ in operating costs through horizontal pod autoscaling.",
    tags: ["Docker", "Kubernetes", "Helm", "GitHub Actions", ".NET"],
    visit: "",
  },
  {
    company: "UnitedHealth Group",
    role: "Software Engineer Intern — Machine Learning",
    date: "2023 — 2024",
    location: "Minneapolis, MN",
    icon: "eye",
    description:
      "Designed CNN architectures for section-header detection (90% accuracy) using image processing, transfer learning, and OCR. The model powers a platform processing 2M+ medical documents and generating $27M in annual revenue.",
    tags: ["PyTorch", "OpenCV", "Computer Vision", "CNNs"],
    visit: "",
  },
  {
    company: "Jed Mahonis Group",
    role: "Android Software Engineer",
    date: "2021 — 2022",
    location: "St. Louis Park, MN",
    icon: "android",
    description:
      "Built native Android applications in Kotlin and Java — implementing authentication, REST API integration, and Google Maps features — while collaborating with QA under Agile and Git workflows.",
    tags: ["Kotlin", "Java", "Android", "Google Maps"],
    visit: "",
  },
];

export const projects = [
  {
    title: "Luup",
    description:
      "A SaaS platform for smarter professional networking, surfacing connections by shared criteria such as alumni, past employers, and location. Built a dashboard for matches, companies, roles, and AI-generated outreach emails, plus a discovery feed that continuously suggests new connections.",
    image: '',
    icon: 'users',
    tags: ["TypeScript", "Node.js", "Postgres", "Google Gemini"],
    source: '',
    visit: '',
    id: 14,
  },
  {
    title: "Py-Doc",
    description:
      "An open-source Python library that makes document-layout computer vision and OCR accessible. Trained an object-detection CNN on the IBM PubLayNet dataset to parse document structure, then extracts text region-by-region with Tesseract.",
    image: '/images/py-doc.jpg',
    tags: ["Python", "Computer Vision", "OCR", "Open Source"],
    source: 'https://github.com/connorholm/py-doc',
    visit: 'https://pypi.org/project/py-doc/',
    id: 13,
  },
  {
    title: "Tiktok Watermark Remover",
    description: "This is a machine learning project that removes the Tiktok watermark from videos. It uses a convolutional neural network to detect where the watermark is on an image then removes it using computer vision inpainting.",
    image: '/images/watermark-detect.jpg',
    tags: ["ML", "Pytorch", "CNN", "Computer Vision"],
    source: 'https://github.com/connorholm/tiktok-watermark-yolov7',
    visit: '',
    id: 12,

  },
  {
    title: "Flappy Bird Genetic Algorithm",
    description: "Modified the Flappy Bird game to use a genetic algorithm to train the bird to play the game. The bird starts off with random weights and then the algorithm trains the bird to play the game.",
    image: '/images/flappybird.png',
    tags: ["Genetic Algorithms", "AI", "Python"],
    source: 'https://github.com/connorholm/flappybird-genetic-algorithm',
    visit: "/flappybird-genetic-algorithm.pdf",
    id: 10,
  },
  {
    title: "Little Free Library Android App",
    description: "Helped build the Android app. Built out mapping features (Google Maps API), authentication, and the UI screens. Worked with configuring profile picutres and user information.",
    image: '/images/little-free-library.jpeg',
    tags: ["Android", "Kotlin", "Google Maps Library", "APIs"],
    source: '',
    visit: 'https://littlefreelibrary.org/app/',
    id: 11,
  },
  {
    title: "Daily Dose of Laughter",
    description: "This website displays jokes to users! An authenticated user is able to publish jokes and interact with other people's posts. The frontend was build with React and the backend is a fully functionally Express API with a MongoDB database.",
    image: '/images/joke.png',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    source: 'https://github.com/connorholm/jokes_frontend',
    visit: 'https://jokes-frontend.herokuapp.com/',
    id: 0,
  },
  {
    title: 'Target Practice Mania',
    description: "This app is a game I created for the App Store. It uses Apple's SceneKit to allow the user to interact with 3D shapes created in Blender. The app also has a leaderboard system so the user can compete with others.",
      image: '/images/target-app.png',
      tags: ['Swift', 'SceneKit', 'GameCenter', 'Blender'],
    source: 'https://github.com/connorholm/TargetPractice',
    visit: 'https://apps.apple.com/us/app/target-practice-mania/id1551670619',
    id: 1,
  },
  {
    title: 'COVID-19 Information Provider',
    description:"Using Flask, I ran a website that displays current COVID-19 information. This was run on a Ubuntu server and the data was gathered using BeautifulSoup and the COVID Tracking Project API.",
    image: '/images/covid-app.png',
    tags: ['Flask', 'BeautifulSoup', 'HTML', 'CSS'],
    source: 'https://github.com/connorholm/Covid-19-Website',
    visit: 'https://www.youtube.com/watch?v=JMSGNJM0_Kk',
    id: 2,
  },
  {
    title: 'EPHS App',
    description: "EPHS app is an app that allows for a user to be able to connect to their schoology api. Once logged in, the user is able to see their completed assignments aswell as some upcoming announcements and grades. The app is design for students and also lets them view important websites like our grading portal, counselor appointment sign up, school contacts, and highschool calendar!",
      image: '/images/ephs-app.png',
      tags: ['SwiftUI', 'APIs'],
    source: 'https://github.com/connorholm/ephsapp2020',
    visit: 'https://apps.apple.com/us/app/ephs/id1540598932',
    id: 3,
  },
  {
    title: 'Python Chat App',
    description: "In this project, I coded a terminal and gui based chat application. It communicates through a public ubuntu server to allow for anyone to communicate with each other.",
    image: '/images/chat-app.png',
    tags: ['Python', 'TKinter', 'Sockets'],
    source: 'https://github.com/connorholm/ChatApp',
    visit: '',
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2018, text: 'Started my journey, learned Java through a highschool class', },
  { year: 2020, text: 'Took an iOS App Development class, and build EPHS app', },
  { year: 2021, text: 'Released Target Practice Mania', },
  { year: 2021, text: 'Won Congressional App Challenege for district MN-03 for COVID-19 Info Provider', },
  { year: 2021, text: 'Helped Build Out Little Free Library Android App', },
  { year: 2022, text: 'Used Ruby on Rails to build out an appointment app\'s API', },
  { year: 2023, text: 'Took interest in AI, built a Flappy Bird agent using a genetic algorithm', },
  { year: 2023, text: 'Interned at UnitedHealth Group building computer-vision models for medical documents', },
  { year: 2024, text: 'Earned a BS in Computer Science from the University of Minnesota and began a Master\'s in CS', },
  { year: 2024, text: 'Joined UnitedHealth Group as a Cloud Migration engineer, containerizing services with Docker & Kubernetes', },
  { year: 2025, text: 'Founded Vantix Strategies, an AI consulting firm of Forward Deployed Engineers shipping production AI systems', },
  { year: 2025, text: 'Completed my Master\'s in Computer Science and became an AI Engineer at UnitedHealthcare', },
  { year: 2026, text: 'Building AI observability platforms and agentic systems (MCP, LLM agents) in production', },
  { year: 2026, text: 'Always Learning More!', },
];

export const education = [
  { school: 'University of Minnesota',
    degree: 'MS in Computer Science',
    graducation: 'Spring 2025',
    image: '/images/university.jpg',
    classes: [
      'Advanced Machine Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Data Visualization',
      'Web Development',
      'Computational Genomics',
      'Mathematics of Financial Derivatives',
    ]
  },
  { school: 'University of Minnesota',
    degree: 'BS in Computer Science',
    graducation: 'Spring 2024',
    image: '/images/university.jpg',
    classes: [
      'CSCI 1133 - Intro to Computing and Programming Concepts',
      'CSCI 1933 - Intro to Algorithms and Data Structures',
      'CSCI 2011 - Discrete Structures of Computer Science',
      'CSCI 2021 - Machine Architecture and Organization',
      'CSCI 2033 - Elementary Computational Linear Algebra',
      'CSCI 2041 - Advanced Programming Principles',
      'CSCI 4041 - Algorithms and Data Structures',
      'CSCI 4061 - Introduction to Operating Systems',
      'CSCI 4511W - Introduction to Artificial Intelligence',
      'CSCI 4707 - Practice of Database Systems',
      'CSCI 5421 - Advanced Algorithms and Data Structures',
      'CSCI 5521 - Introduction to Machine Learning',
      'STAT 3021 - Introduction to Probability and Statistics'
    ]
  },
  { school: 'Eden Prairie High School',
    degree: 'High School Diploma',
    graducation: '2021',
    image: '/images/high-school.jpg',
    classes: [
      "AP Computer Science Principles",
      "AP Java",
      "AP Calculus AB",
      "AP Calculus BC",
      "Multivariable Calculus",
      "AP Statistics",
      "AP Physics C",
      "AP Chemistry",
      "AP Macro Economics",
      "iOS App Development",
      "Advanced iOS App Development",
      "Cyber Security",
    ]
  },
]
