/**
 * Android Club - Official Showcase & Recruitment Data
 * Sourced directly from https://androidclub.tech and recruitment portal
 */

export const CLUB_INFO = {
  name: "Android Club",
  shortName: "AC VITB",
  institution: "VIT Bhopal University",
  tagline: "BUILD WITHOUT LIMITS.",
  taglineAccent: "SHAPE THE ANDROID ECOSYSTEM.",
  subTagline: "The premier mobile development and software engineering chapter at VIT Bhopal. We engineer high-performance Android apps, scalable cloud backends, and cutting-edge edge AI systems.",
  announcement: "CORE RECRUITMENT: CLOSED • NEXT EVENT: YET TO ANNOUNCE",
  founded: {
    year: "2017",
    founder: "Abhay Nigam",
    story: "Founded in 2017 by Abhay Nigam, the Android Club at VIT Bhopal has evolved into a powerhouse of technical innovation and peer mentorship. From hands-on Kotlin & Jetpack Compose bootcamps to national hackathon triumphs, our mission is to empower developers to ship impactful production software."
  },
  coordinators: [
    {
      name: "Dr. Chandan Kumar Behera",
      role: "Assistant Director – Students' Welfare",
      photo: "/AboutPage_Assets/ChandanSir.webp",
      email: "chandank.behera@vitbhopal.ac.in",
      bio: "The cornerstone of technical chapters at VIT Bhopal, providing visionary backing, student welfare advocacy, and strategic guidance across our flagship initiatives."
    },
    {
      name: "Dr. Adarsh Patel",
      role: "Faculty Coordinator",
      photo: "/AboutPage_Assets/AdarshSir.webp",
      email: "adarsh.patel@vitbhopal.ac.in",
      bio: "Dedicated faculty mentor offering technical direction, academic integration, and steadfast encouragement to student developers."
    },
    {
      name: "Dr. G Ganeshan",
      role: "Co-Faculty Coordinator",
      photo: "/AboutPage_Assets/GanesanSir_C.webp",
      email: "g.ganeshan@vitbhopal.ac.in",
      bio: "Plays a vital role in steering research and development, ensuring technical excellence and ethical engineering practices."
    }
  ],
  contacts: {
    email: "androidclub@vitbhopal.ac.in",
    recruitmentEmail: "recruitment@androidclub.tech",
    campus: "VIT Bhopal University, Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh – 466114",
    officeHours: "Monday – Friday: 09:00 AM – 10:00 PM | Saturday: 09:00 AM – 06:00 PM",
    socials: {
      github: "https://github.com/androidvitb",
      linkedin: "https://www.linkedin.com/company/android-club-vit-bhopal/",
      instagram: "https://www.instagram.com/androidclub.vitb/",
      twitter: "https://x.com/AndroidClubVitb",
      whatsapp: "https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK",
      website: "https://androidclub.tech"
    }
  },
  colors: {
    androidGreen: "#3DDC84",
    androidGlow: "#36EA66",
    cyberCyan: "#00F0FF",
    neonOrange: "#FF7300",
    neonAmber: "#FFB700",
    electricPurple: "#BF00FF",
    neonPink: "#FF0055",
    background: "#0A090F",
    surface: "#111118",
    card: "#14141E",
    border: "#232332",
    textPrimary: "#F5F5F0",
    textMuted: "#888899"
  }
};

export const PARTNERS_LIST = [
  { name: "GOOGLE DEVELOPERS", badge: "ECOSYSTEM" },
  { name: "DAINIK BHASKAR", badge: "MEDIA" },
  { name: "CODECHEF", badge: "COMPETITIVE" },
  { name: "CODING NINJAS", badge: "LEARNING" },
  { name: "HACKEREARTH", badge: "HACKATHONS" },
  { name: "UNSTOP", badge: "CHALLENGES" },
  { name: "NOTION", badge: "PRODUCTIVITY" },
  { name: ".XYZ", badge: "DOMAINS" },
  { name: "GMC CERTIFIED", badge: "CREDENTIALS" }
];

export const STATS = [
  { value: "80+", label: "CORE MEMBERS", accent: "text-[#3DDC84]" },
  { value: "1,000+", label: "COMMUNITY REACH", accent: "text-[#00F0FF]" },
  { value: "40+", label: "HACKATHONS & GIGS", accent: "text-[#FF7300]" },
  { value: "3B+", label: "ECOSYSTEM DEVICES", accent: "text-[#BF00FF]" }
];

export const TELEMETRY_METRICS = {
  globalShare: { val: "70%+", label: "GLOBAL MOBILE OS SHARE" },
  activeDevices: { val: "3B+", label: "ACTIVE ANDROID DEVICES" },
  coreLatency: { val: "14ms", label: "AVERAGE RESPONSE TIME" },
  systemUptime: { val: "99.9%", label: "SYSTEM ARCHITECTURE UPTIME" }
};

export const HIGHLIGHT_STATS_PILLARS = [
  {
    num: "01",
    title: "NATIVE & MODERN ANDROID",
    desc: "Kotlin first. Modern declarative UI with Jetpack Compose, MVVM/Clean Architecture, Coroutines, Flow, and Room persistent storage.",
    tag: "KOTLIN • COMPOSE"
  },
  {
    num: "02",
    title: "CROSS-DOMAIN SDC BUILDS",
    desc: "Software Development Cell engineering full-stack production systems, microservices, cloud deployments, and developer tooling.",
    tag: "REACT • NODE • CLOUD"
  },
  {
    num: "03",
    title: "EDGE AI & EMBEDDED R&D",
    desc: "Deploying on-device machine learning with TensorFlow Lite, hardware interfacing via Bluetooth Low Energy (BLE), and IoT prototyping.",
    tag: "TFLITE • BLE • IOT"
  },
  {
    num: "04",
    title: "IMPACTFUL HACKATHONS & WARS",
    desc: "Organizing high-stakes hackathons like Geek Rush, DSA Tussle, and Android Fusion with nationwide participation and cash prizes.",
    tag: "COMPETITIVE • SUMMITS"
  }
];

export const DOMAINS_DATA = {
  technical: [
    {
      id: "android",
      title: "ANDROID DEVELOPMENT",
      tagline: "Build native mobile experiences with modern Android frameworks",
      skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Room DB", "Koin / Hilt", "Material 3"],
      focus: "Crafting fluid, accessible, high-performance applications targeting Android 14+ with offline-first architectures.",
      accent: "#3DDC84"
    },
    {
      id: "sdc",
      title: "SOFTWARE DEVELOPMENT CELL (SDC)",
      tagline: "Engineering full-stack web platforms and developer infrastructure",
      skills: ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      focus: "Building club portals, event ticketing systems, real-time leaderboard dashboards, and internal automation bots.",
      accent: "#00F0FF"
    },
    {
      id: "rnd",
      title: "R&D (ML, IOT & CYBER)",
      tagline: "Pushing boundaries with Edge Intelligence and hardware connectivity",
      skills: ["TensorFlow Lite", "MediaPipe", "Python", "Raspberry Pi / ESP32", "BLE Telemetry", "App Security"],
      focus: "Integrating computer vision models onto mobile chips, telemetry sensor tracking, and security penetration audits.",
      accent: "#BF00FF"
    },
    {
      id: "uiux",
      title: "UI / UX DESIGN",
      tagline: "Designing intuitive digital interfaces and visual systems",
      skills: ["Figma", "Design Systems", "Material You", "Micro-interactions", "User Research", "Wireframing"],
      focus: "Designing pixel-perfect mobile flows, user journey maps, brand aesthetics, and motion design prototypes.",
      accent: "#FFB700"
    }
  ],
  nonTechnical: [
    {
      id: "operations",
      title: "OPERATIONS & LOGISTICS",
      desc: "Cross-functional synchronization, faculty approvals, venue administration, and maintaining smooth day-to-day club governance."
    },
    {
      id: "evm",
      title: "EVENT MANAGEMENT",
      desc: "Planning, organizing, and executing large-scale hackathons, coding duels, masterclasses, and technical summits."
    },
    {
      id: "pr_outreach",
      title: "PR & CORPORATE OUTREACH",
      desc: "Securing brand sponsorships, partnering with tech organizations, inviting industry speakers, and university networking."
    },
    {
      id: "media",
      title: "MEDIA & VIDEO EDITING",
      desc: "Directing cinematic event trailers, after-movies, social motion reels, photography, and high-impact digital storytelling."
    },
    {
      id: "content",
      title: "CONTENT & TECHNICAL WRITING",
      desc: "Authoring in-depth technical blogs on Medium, drafting press releases, curating newsletters, and defining copy."
    },
    {
      id: "finance",
      title: "FINANCE & DOCUMENTATION",
      desc: "Managing club budget allocations, prize distributions, compliance documentation, and financial accountability."
    }
  ]
};

export const RECRUITMENT_STEPS = [
  {
    step: "01",
    title: "SELECT YOUR DOMAIN",
    desc: "Choose between Technical (Android, SDC, R&D, UI/UX) or Non-Technical (Operations, Events, PR, Media, Content, Finance) based on where your passion lies.",
    icon: "Target"
  },
  {
    step: "02",
    title: "CHALLENGE & TASK SUBMISSION",
    desc: "Complete our interactive domain questionnaire and submit your portfolio, GitHub repositories, or scenario response directly through this portal.",
    icon: "Code2"
  },
  {
    step: "03",
    title: "TECHNICAL INTERVIEW",
    desc: "Engage in a friendly one-on-one session with our domain leads to discuss your passion, problem-solving mindset, and project experience.",
    icon: "Users"
  },
  {
    step: "04",
    title: "INDUCTION & ONBOARDING",
    desc: "Join the elite core team, receive personalized onboarding from senior developers, and start shipping production-grade projects immediately.",
    icon: "Rocket"
  }
];

export const PROJECTS_DATA = [
  {
    id: "spendwise",
    name: "Spendwise",
    category: "Android App",
    subtitle: "Modern Privacy-First Expense & Budget Tracker",
    description: "An intuitive personal finance application designed to help users organize spending habits, set smart monthly budgets, and analyze categorical expenditure trends with zero third-party tracking.",
    tech: ["Kotlin", "Jetpack Compose", "Room DB", "Coroutines", "MVVM"],
    status: "Production Ready",
    github: "https://github.com/androidvitb/Spendwise",
    liveUrl: "https://github.com/androidvitb/Spendwise",
    featured: true,
    accent: "#3DDC84",
    highlights: ["100% Offline SQLite/Room Storage", "Dynamic Material You Colors", "Visual Analytics Charts"]
  },
  {
    id: "workout-assistant",
    name: "Workout-Assistant",
    category: "Mobile Companion",
    subtitle: "AI-Powered Rep Counting & Routine Planner",
    description: "A cross-platform mobile workout companion helping fitness enthusiasts build structured exercise regimes, follow tempo timers, and track progression over weekly milestones.",
    tech: ["Flutter", "Dart", "Provider", "Hive DB", "Audio FX"],
    status: "Active Open Source",
    github: "https://github.com/androidvitb/Workout-Assistant",
    liveUrl: "https://github.com/androidvitb/Workout-Assistant",
    featured: true,
    accent: "#00F0FF",
    highlights: ["Custom Rest Timers & Audio Cues", "Offline Routine Builder", "Streak & Calorie Metrics"]
  },
  {
    id: "acwoc",
    name: "AcWoC (Winter of Code)",
    category: "Web Platform",
    subtitle: "Open Source Mentorship & Evaluation Portal",
    description: "The official platform powering Android Club's seasonal open-source hackathons. Features GitHub webhook syncing, automated leaderboard scoring, and mentor review workflows.",
    tech: ["React", "TypeScript", "Node.js", "GitHub API", "Tailwind CSS"],
    status: "Flagship Initiative",
    github: "https://github.com/androidvitb/AcWoC-Practice",
    liveUrl: "https://androidclub.tech",
    featured: true,
    accent: "#FF7300",
    highlights: ["Automated PR Tracking", "Real-Time Student Leaderboard", "Mentor Assessment Pipeline"]
  },
  {
    id: "agriscan",
    name: "AgriScan AI",
    category: "Edge AI / ML",
    subtitle: "Instant Crop Disease Diagnosis via Mobile Camera",
    description: "An offline-first Android application designed for farmers and agronomists to diagnose leaf pathology in real time using on-device quantized neural networks with CameraX integration.",
    tech: ["Kotlin", "TensorFlow Lite", "CameraX", "Material 3"],
    status: "R&D Prototype",
    github: "https://github.com/androidvitb",
    liveUrl: "https://github.com/androidvitb",
    featured: false,
    accent: "#36EA66",
    highlights: ["Sub-50ms On-Device Inference", "Zero Internet Requirement", "Confidence Score Visualizer"]
  },
  {
    id: "cardiopulse",
    name: "CardioPulse BLE",
    category: "IoT / Healthcare",
    subtitle: "Bluetooth Low Energy Wearable Telemetry Receiver",
    description: "A low-latency mobile dashboard communicating with custom ESP32/nRF BLE wearables to stream high-frequency ECG cardiac readings and trigger anomaly emergency alerts.",
    tech: ["Android BLE", "Kotlin Flow", "MPAndroidChart", "Foreground Services"],
    status: "R&D Project",
    github: "https://github.com/androidvitb",
    liveUrl: "https://github.com/androidvitb",
    featured: false,
    accent: "#FF0055",
    highlights: ["60Hz Real-Time Waveform Graphing", "BLE Auto-Reconnection", "Encrypted Session Logs"]
  },
  {
    id: "campusnav",
    name: "VITB CampusNav",
    category: "Campus Utility",
    subtitle: "Indoor Wayfinding & Academic Block Navigator",
    description: "Designed for freshmen and visitors to effortlessly navigate the vast academic blocks, computer studios, and auditoriums of VIT Bhopal with floor-by-floor vector pathfinding.",
    tech: ["Kotlin", "MapLibre SDK", "GeoJSON", "Vector Rendering"],
    status: "Campus Utility",
    github: "https://github.com/androidvitb",
    liveUrl: "https://github.com/androidvitb",
    featured: false,
    accent: "#BF00FF",
    highlights: ["Multi-Level Floor Plan Switching", "Search by Lab & Cabin Code", "Accessible Route Filtering"]
  }
];

export const EVENTS_DATA = [
  {
    id: "geek-rush-2026",
    name: "Geek Rush: Campus Tech Quest",
    status: "past",
    badge: "FLAGSHIP",
    date: "01/04/2026",
    time: "11:40 AM",
    location: "AB-2 Auditorium-2",
    description: "Geek Rush is a dynamic, multi-round tech event combining fun and competition through an Escape Room, Scribble, and Buzzer round. Designed for freshers, it promotes teamwork, problem-solving, and quick thinking with rewarding prizes.",
    tags: ["Escape Room", "Buzzer Round", "Flagship"],
    price: "₹79 / Team",
    image: "/events/geek-rush.jpg"
  },
  {
    id: "meet-greet-3",
    name: "Meet & Greet 3.0",
    status: "past",
    badge: "400+ ATTENDEES",
    date: "18/09/2025",
    time: "05:00 PM",
    location: "AB-02 Auditorium-02",
    description: "The grand annual community mixer bringing together curious freshmen, club alumni, and tech domain leads for interactive live coding demos, project showcases, and career roadmaps in mobile tech.",
    tags: ["Networking", "Keynote", "Community"],
    price: "Free",
    image: "/events/meet-greet.jpg"
  },
  {
    id: "pydroid-x",
    name: "Pydroid X: Python on Android",
    status: "past",
    badge: "WORKSHOP",
    date: "26/07/2025",
    time: "10:00 AM",
    location: "AB-02 Auditorium",
    description: "An intensive masterclass on bridging Python data science algorithms into production Android mobile pipelines using Chaquopy and on-device scripts.",
    tags: ["Python", "Android Bridges", "Hands-on"],
    price: "Free",
    image: "/events/pydroid-workshop.jpg"
  },
  {
    id: "fun-found-404",
    name: "404: Fun Found",
    status: "past",
    badge: "TECH FIESTA",
    date: "22/02/2025",
    time: "02:00 PM",
    location: "AB-128",
    description: "A creative playground blending quirky coding challenges, speed debugging, cryptic logic hunts, and retro gaming battles for engineers who love solving problems under pressure.",
    tags: ["Gaming", "Debugging", "Puzzles"],
    price: "Free",
    image: "/events/fun-found-404.jpg"
  },
  {
    id: "android-fusion",
    name: "Android Fusion: IoT & ML",
    status: "past",
    badge: "FLAGSHIP",
    date: "09/05/2024",
    time: "09:00 AM",
    location: "LC-205",
    description: "A 3-day deep dive into the convergence of modern Android with physical IoT microcontrollers and TensorFlow Lite models. Participants connected ESP8266 boards to custom mobile control panels.",
    tags: ["IoT Hardware", "Machine Learning", "Hackathon"],
    price: "₹100",
    image: "/events/android-fusion.jpg"
  },
  {
    id: "dsa-tussle",
    name: "DSA Tussle",
    status: "past",
    badge: "COMPETITIVE",
    date: "22/02/2024",
    time: "03:00 PM",
    location: "AB-420",
    description: "High-stakes algorithmic combat testing coders on graph theory, dynamic programming, and data structure efficiency with automated online judge grading.",
    tags: ["Algorithms", "Speed Coding", "Leaderboard"],
    price: "Free",
    image: "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/EventGallery%2FclubEvent12%2Fimg2.jpg?alt=media&token=3fbd9467-c822-4ef2-b3ef-5a57204f42d7"
  }
];

export const TEAM_MEMBERS = [
  {
    "name": "Shreyash Srivastava",
    "role": "President",
    "domain": "Executive Leadership",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fsdc%2Fshreyash.23bce10931%40vitbhopal.ac.in?alt=media&token=94099cd7-4a5d-4d5b-af67-38fd941b1e92",
    "quote": "Shreyash is the driving force behind the club’s vision, blending innovation with decisive leadership. Always ready to inspire and guide, he turns ideas into impactful actions that push the club forward.",
    "email": "shreyash.23bce10931@vitbhopal.ac.in",
    "badge": "PRESIDENT",
    "socials": {
      "email": "shreyash.23bce10931@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/shreyash-srivastava-1a1161280",
      "instagram": "https://www.instagram.com/x3_shreyash_x3",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Kataru Heramb Murthy",
    "role": "Vice President",
    "domain": "Executive Leadership",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fadmin%2Fkataru.23bcy10225%40vitbhopal.ac.in?alt=media&token=b686f660-8bab-44a2-aa8a-a247b9d3481f",
    "quote": "Heramb brings balance, clarity, and a problem-solving mindset to the leadership team. With a calm demeanor and sharp insights, he ensures the club stays organized and on track toward its goals.",
    "email": "kataru.23bcy10225@vitbhopal.ac.in",
    "badge": "VICE PRESIDENT",
    "socials": {
      "email": "kataru.23bcy10225@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/heramb-murthy-309b841a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "instagram": "https://www.instagram.com/murthyheramb",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Shree Charan N",
    "role": "General Secretary",
    "domain": "Executive Leadership",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fadmin%2Fshree.23bcy10004%40vitbhopal.ac.in?alt=media&token=be818c96-da28-4f4f-a685-9e352d574e02",
    "quote": "Shree Charan keeps the club’s operations seamless, ensuring communication flows effortlessly. His friendly approach and attention to detail make him the go-to person for keeping everything running smoothly.",
    "email": "shree.23bcy10004@vitbhopal.ac.in",
    "badge": "EXECUTIVE",
    "socials": {
      "email": "shree.23bcy10004@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/shree-charan-n-816a511a4/",
      "instagram": "https://www.instagram.com/fr_charan",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Gourav Agarwal",
    "role": "Lead",
    "domain": "Android Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fandroid%2Fgourav.23bcy10094%40vitbhopal.ac.in?alt=media&token=1a4399a2-e908-45e3-8c7a-78208ce78c97",
    "quote": "Gourav leads the Android team with focus, clarity, and a deep passion for mobile development. Whether it’s guiding teammates through projects or contributing his own technical expertise, he brings structure and direction to the team’s efforts.",
    "email": "gourav.23bcy10094@vitbhopal.ac.in",
    "badge": "ANDROID LEAD",
    "socials": {
      "email": "gourav.23bcy10094@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/gourav--ag/",
      "instagram": "https://www.instagram.com/gourav__ag",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Dhruv Maheshwari",
    "role": "Core Member",
    "domain": "Android Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fandroid%2Fdhruv.24bce10610%40vitbhopal.ac.in?alt=media&token=abbde9f3-8416-4502-9e4d-5e4152050ea1",
    "quote": "Dhruv contributes with precision and teamwork, turning ideas into code and driving steady progress.",
    "email": "dhruv.24bce10610@vitbhopal.ac.in",
    "badge": "ANDROID",
    "socials": {
      "email": "dhruv.24bce10610@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/dhruv-maheshwari-7616b8339",
      "instagram": "https://www.instagram.com/dhruv._.maheshwari",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Amaan Syed",
    "role": "Core Member",
    "domain": "Android Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fandroid%2Famaan.23mip10116%40vitbhopal.ac.in?alt=media&token=5f808438-9822-43db-a1e4-e57f3e605e5f",
    "quote": "Amaan Syed is an active core contributor to Android Club VIT Bhopal.",
    "email": "amaan.23mip10116@vitbhopal.ac.in",
    "badge": "ANDROID",
    "socials": {
      "email": "amaan.23mip10116@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/amaansyed27/",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Shashi Singh",
    "role": "Core Member",
    "domain": "Android Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Shashi works on Android app development, helping design, debug, and implement features. His contributions ensure smooth and functional mobile projects for the club.",
    "email": "shashi.24bai10686@vitbhopal.ac.in",
    "badge": "ANDROID",
    "socials": {
      "email": "shashi.24bai10686@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vaibhav Pandey",
    "role": "Core Member",
    "domain": "Android Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Vaibhav assists in developing and testing Android applications. His support helps bring app ideas to life and maintain reliable performance.",
    "email": "vaibhav.24bce11523@vitbhopal.ac.in",
    "badge": "ANDROID",
    "socials": {
      "email": "vaibhav.24bce11523@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Harshvardhan Girish Jajoo",
    "role": "Lead",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fsdc%2Fharshvardhan.23bai10330%40vitbhopal.ac.in?alt=media&token=7b5daddb-bd5d-457f-9b4d-711c89e597d2",
    "quote": "Harshvardhan leads the SDC team with a focus on building strong skills and delivering impactful development projects.",
    "email": "harshvardhan.23bai10330@vitbhopal.ac.in",
    "badge": "SOFTWARE LEAD",
    "socials": {
      "email": "harshvardhan.23bai10330@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/hgjajoo",
      "instagram": "https://www.instagram.com/hgjajoo",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Harshit Maurya",
    "role": "Co-Lead",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fsdc%2Fharshit.24bce10764%40vitbhopal.ac.in?alt=media&token=20c6f17a-2455-48a5-b894-c07d1af8a7d0",
    "quote": "Harshit, a skilled web developer, brings fresh energy to the SDC team, ensuring projects are built with modern tech and precision.",
    "email": "harshit.24bce10764@vitbhopal.ac.in",
    "badge": "SOFTWARE LEAD",
    "socials": {
      "email": "harshit.24bce10764@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/44-harshit-maurya",
      "instagram": "https://www.instagram.com/harshit_749",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Mishita Tiwari",
    "role": "Core Member",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Mishita is a talented developer with a passion for clean code and creative solutions. She is always eager to learn and contributes a fresh perspective to the team.",
    "email": "mishita.24bai10204@vitbhopal.ac.in",
    "badge": "SOFTWARE",
    "socials": {
      "email": "mishita.24bai10204@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Saksham Jaiswal",
    "role": "Core Member",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Saksham is a sharp and analytical developer who excels at turning complex ideas into functional code. His problem-solving skills make him a go-to person for technical challenges.",
    "email": "saksham.24bai10745@vitbhopal.ac.in",
    "badge": "SOFTWARE",
    "socials": {
      "email": "saksham.24bai10745@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Samay Dutta",
    "role": "Core Member",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Samay is a dedicated and resourceful developer with a knack for finding efficient solutions. He is a strong collaborator who helps elevate the team's projects to the next level.",
    "email": "samay.24bai10027@vitbhopal.ac.in",
    "badge": "SOFTWARE",
    "socials": {
      "email": "samay.24bai10027@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Pratham Srivastava",
    "role": "Core Member",
    "domain": "Software Development Cell (SDC)",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Pratham is a quick-thinking developer who is passionate about building innovative solutions. His enthusiasm and technical abilities make him a valuable asset to the development team.",
    "email": "pratham.24bce11232@vitbhopal.ac.in",
    "badge": "SOFTWARE",
    "socials": {
      "email": "pratham.24bce11232@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Madhuram Patil",
    "role": "Lead",
    "domain": "Research & Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fr_and_d%2Fmadhuram.23bai10521%40vitbhopal.ac.in?alt=media&token=dcbbda57-14a0-4aba-9bbe-8c3a820bb497",
    "quote": "Madhram guides the R&D team with innovative thinking, turning new ideas into practical solutions for the club.",
    "email": "madhuram.23bai10521@vitbhopal.ac.in",
    "badge": "RESEARCH LEAD",
    "socials": {
      "email": "madhuram.23bai10521@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/madhuram_2901",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Rana Talukdar",
    "role": "Co-Lead",
    "domain": "Research & Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fr_and_d%2Frana.23bai10186%40vitbhopal.ac.in?alt=media&token=0136c59a-8a76-4c44-9675-6ae3667eb854",
    "quote": "Rana works closely with the R&D team, bringing creativity and problem-solving skills to every project.",
    "email": "rana.23bai10186@vitbhopal.ac.in",
    "badge": "RESEARCH LEAD",
    "socials": {
      "email": "rana.23bai10186@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/rana-talukdar-782b60293/",
      "instagram": "https://www.instagram.com/_kafi_rana_",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Krishnashish Munshi",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fr_and_d%2Fkrishnashish.24bcy10058%40vitbhopal.ac.in?alt=media&token=8fce5cf5-c793-4fae-bf9d-2a1da8248671",
    "quote": "Krishnashish contributes fresh ideas and helps the team explore new possibilities through research and development.",
    "email": "krishnashish.24bcy10058@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "krishnashish.24bcy10058@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/krishnashish-munshi",
      "instagram": "https://www.instagram.com/snapped_outside",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "KUSHAL ZAMBARE",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fr_and_d%2Fkushal.24bce10640%40vitbhopal.ac.in?alt=media&token=35e79203-2378-4024-9871-03b290beea1a",
    "quote": "Kushal blends versatility with initiative, driving ML and IoT projects forward through clear, adaptive contributions that power team progress.",
    "email": "kushal.24bce10640@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "kushal.24bce10640@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/kushalzambare",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Garvit Audichya",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fr_and_d%2Fgarvit.23bai10142%40vitbhopal.ac.in?alt=media&token=2647c5f0-6177-4cf2-b1e9-d04dbe1511b2",
    "quote": "Garvit contributes steadily to the R&D team’s ML efforts, offering technical support and data-driven insights with a calm, methodical approach.",
    "email": "garvit.23bai10142@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "garvit.23bai10142@vitbhopal.ac.in",
      "linkedin": "http://www.linkedin.com/in/garvit-audichya-305132337",
      "instagram": "https://www.instagram.com/garvit.010",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Amrit Raj",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Amrit is a forward-thinker who supports R&D initiatives across ML, IoT, and cybersecurity. His contributions help the team explore and implement cutting-edge solutions.",
    "email": "amrit.24mei10033@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "amrit.24mei10033@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Anubhav Mishra",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Anubhav is an analytical thinker who assists with R&D in ML, IoT, and cybersecurity. He brings a methodical approach to complex problems, ensuring solutions are well-researched.",
    "email": "anubhav.24bec10083@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "anubhav.24bec10083@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Mangal Singh",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Mangal contributes to research tasks and development projects in ML, IoT, and cybersecurity. His practical approach ensures smooth progress on technical explorations.",
    "email": "mangal.24bce10599@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "mangal.24bce10599@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vaibhav Santosh Tiwari",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Vaibhav assists in developing innovative solutions and conducting experiments. His role helps bring technical ideas from concept to implementation.",
    "email": "vaibhav.24bey10058@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "vaibhav.24bey10058@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Swara Mishra",
    "role": "Core Member",
    "domain": "Research & Development",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Swara supports research and development work in ML, IoT, and cybersecurity projects. She helps ensure the team’s experiments and solutions are executed accurately.",
    "email": "swara.24bce10021@vitbhopal.ac.in",
    "badge": "RESEARCH",
    "socials": {
      "email": "swara.24bce10021@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Nityam Bhatt",
    "role": "Lead",
    "domain": "UI/UX Design",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fdesign%2Fnityam.24bai10108%40vitbhopal.ac.in?alt=media&token=46c39411-ed0f-470f-a81d-4aa8d1f5d048",
    "quote": "Nityam focuses on creating smooth and user-friendly designs, making sure every detail feels easy and enjoyable for users.",
    "email": "nityam.24bai10108@vitbhopal.ac.in",
    "badge": "UI/UX LEAD",
    "socials": {
      "email": "nityam.24bai10108@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/nityam-bhatt-7789b7323",
      "instagram": "https://www.instagram.com/nityam7706",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Priiyanka Priyadarshinee",
    "role": "Co - lead",
    "domain": "UI/UX Design",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fui_ux%2Fpriyanka.24bcg10069%40vitbhopal.ac.in?alt=media&token=9bffeb4e-bc7f-4e03-9095-a2183477a332",
    "quote": "Priyanka adds creativity and fresh ideas to UI/UX work, helping make designs that are both beautiful and practical.",
    "email": "priyanka.24bcg10069@vitbhopal.ac.in",
    "badge": "UI/UX CO-LEAD",
    "socials": {
      "email": "priyanka.24bcg10069@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/priyanka-priyadarshinee-9b309a31a/",
      "instagram": "https://www.instagram.com/fogxyz_",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Khengar Chaun",
    "role": "Core Member",
    "domain": "UI/UX Design",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Khengar is a creative and empathetic designer who excels at understanding user needs. With a talent for crafting intuitive and visually appealing interfaces, he ensures a seamless user experience.",
    "email": "khengar.24bce10801@vitbhopal.ac.in",
    "badge": "UI/UX",
    "socials": {
      "email": "khengar.24bce10801@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Riddhi Agnihotri",
    "role": "Core Member",
    "domain": "Design & Graphics",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fdesign%2Friddhi.23bcg10020%40vitbhopal.ac.in?alt=media&token=e6928e89-6703-4207-ab0b-cbd89d6a17a4",
    "quote": "Riddhi brings clarity and refined structure to visuals, supporting design flow with thoughtful, consistent contributions.",
    "email": "riddhi.23bcg10020@vitbhopal.ac.in",
    "badge": "DESIGN",
    "socials": {
      "email": "riddhi.23bcg10020@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/riddhi-agnihotri-85b31b28a/",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "PIRAKALA SUSHWANTH",
    "role": "Co Lead",
    "domain": "Design & Graphics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sushwanth brings a vibrant and creative energy to the design team. His imaginative approach and keen eye for detail ensure that every visual is both polished and purposeful.",
    "email": "pirakala.24mim10048@vitbhopal.ac.in",
    "badge": "DESIGN LEAD",
    "socials": {
      "email": "pirakala.24mim10048@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Palak Choithani",
    "role": "Core Member",
    "domain": "Design & Graphics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Palak is a design enthusiast who turns creative ideas into polished visuals. Her thoughtful approach ensures that every design is both beautiful and functional.",
    "email": "palak.24bce10567@vitbhopal.ac.in",
    "badge": "DESIGN",
    "socials": {
      "email": "palak.24bce10567@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Lavanya Pandit",
    "role": "Lead",
    "domain": "Design & Graphics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Lavanya has a keen eye for aesthetics, blending artistic flair with practical design. Her work is always thoughtful and adds a touch of elegance to the team's visuals.",
    "email": "lavanya.24bce11039@vitbhopal.ac.in",
    "badge": "DESIGN LEAD",
    "socials": {
      "email": "lavanya.24bce11039@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Archi Israni",
    "role": "Core Member",
    "domain": "Design & Graphics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Archi brings a fresh and modern perspective to the design team. With a talent for creating clean and impactful visuals, she ensures every design is on point.",
    "email": "archi.24bhi10003@vitbhopal.ac.in",
    "badge": "DESIGN",
    "socials": {
      "email": "archi.24bhi10003@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Hiya Dullu",
    "role": "Lead",
    "domain": "Content & Editorial",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fcontent%2Fhiya.23bce11063%40vitbhopal.ac.in?alt=media&token=6585b44d-d8e7-4916-a974-96b3d672ac73",
    "quote": "Hiya crafts engaging narratives that capture the club’s voice. Her words connect ideas with impact and clarity.",
    "email": "hiya.23bce11063@vitbhopal.ac.in",
    "badge": "CONTENT LEAD",
    "socials": {
      "email": "hiya.23bce11063@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/hiya-dullu-3a2338286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/adorakkru",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "M B Pragathi",
    "role": "Co-Lead",
    "domain": "Content & Editorial",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fcontent%2Fpragathi.23bce11751%40vitbhopal.ac.in?alt=media&token=2c3d3082-ae3a-49ab-8683-6fabb98e050c",
    "quote": "Pragathi brings creativity and precision to content creation. Her contributions ensure every message leaves a lasting impression.",
    "email": "pragathi.23bce11751@vitbhopal.ac.in",
    "badge": "CONTENT LEAD",
    "socials": {
      "email": "pragathi.23bce11751@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/mbpragathi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/pragathi_mb",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Diya Patel",
    "role": "Core Member",
    "domain": "Content & Editorial",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fcontent%2Fpatel.24bce10007%40vitbhopal.ac.in?alt=media&token=9a654926-fdac-42ae-98ca-94ef6faefbef",
    "quote": "Diya supports content creation with consistency and collaboration, helping shape event write-ups and refine posts to keep the team’s momentum strong.",
    "email": "patel.24bce10007@vitbhopal.ac.in",
    "badge": "CONTENT",
    "socials": {
      "email": "patel.24bce10007@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/diya-patel-4b0375335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/diya_2.306",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Aleena Manesh I",
    "role": "Core Member",
    "domain": "Content & Editorial",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Aleena brings a creative spark to the team, crafting engaging narratives and fresh ideas. Her imaginative approach ensures the content is both original and impactful.",
    "email": "aleena.24mim@vitbhopal.ac.in",
    "badge": "CONTENT",
    "socials": {
      "email": "aleena.24mim@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "SHARMILI DAS",
    "role": "Core Member",
    "domain": "Content & Editorial",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sharmili is a creative force, shaping stories that resonate with the audience. With her clear and compelling writing, she ensures every message is delivered with impact.",
    "email": "sharmili.24bey10043@vitbhopal.ac.in",
    "badge": "CONTENT",
    "socials": {
      "email": "sharmili.24bey10043@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Parv Dube",
    "role": "Core Member",
    "domain": "Content & Editorial",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Parv is a versatile team player who adds a creative flair to every project. He is always ready to contribute fresh ideas and ensures the team's work stands out.",
    "email": "parv.24bce10863@vitbhopal.ac.in",
    "badge": "CONTENT",
    "socials": {
      "email": "parv.24bce10863@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Gauri Gupta",
    "role": "Lead",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fevent_management%2Fgauri.23bhi10001%40vitbhopal.ac.in?alt=media&token=bbcb3d39-111c-4a11-8986-9747f33d860d",
    "quote": "Gauri Gupta provides organized support, keeping tasks structured and calmly executed.",
    "email": "gauri.23bhi10001@vitbhopal.ac.in",
    "badge": "EVENT LEAD",
    "socials": {
      "email": "gauri.23bhi10001@vitbhopal.ac.in",
      "linkedin": "http://linkedin.com/in/gauri-gupta-5b5584340",
      "instagram": "https://www.instagram.com/gauri_gupta1803",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Akshat Pandey",
    "role": "Co-Lead",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fevent_management%2Fakshat.23bce11570%40vitbhopal.ac.in?alt=media&token=de3c2c73-305e-4b87-8ad5-a356a5b7227d",
    "quote": "Akshat adds creativity and precision to event execution. His coordination keeps every detail on track.",
    "email": "akshat.23bce11570@vitbhopal.ac.in",
    "badge": "EVENT LEAD",
    "socials": {
      "email": "akshat.23bce11570@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/Akshat pandey",
      "instagram": "https://www.instagram.com/akshat_28_p",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vriti Yadav",
    "role": "Co Lead",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fevent_management%2Fvriti.24bce11122%40vitbhopal.ac.in?alt=media&token=199d9e62-46b3-4a83-aee6-1431edc4138b",
    "quote": "Vriti Yadav ensures checklist management and smooth coordination, supporting flow from behind the scenes.",
    "email": "vriti.24bce11122@vitbhopal.ac.in",
    "badge": "EVENT LEAD",
    "socials": {
      "email": "vriti.24bce11122@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/_vriti_29",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Atharv Dev Tripathi",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fevent_management%2Fathatharv.23bai10256%40vitbhopal.ac.in.jpg?alt=media&token=4b5a0375-4e37-4235-9b06-8cffa78fbcc6",
    "quote": "Atharv Dev Tripathi brings a proactive mindset, handling event tasks with steady commitment and quick action.",
    "email": "athatharv.23bai10256@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "athatharv.23bai10256@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/_atharv_dev",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Diya Bhargava",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fevent_management%2Fdiya.23bce10715%40vitbhopal.ac.in?alt=media&token=08a92ead-73ad-4873-b1c0-26e39ab82efb",
    "quote": "Diya Bhargava offers reliable logistical support, assisting with essential responsibilities and coordination.",
    "email": "diya.23bce10715@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "diya.23bce10715@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/diya.b95",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vikalp Joshi",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Vikalp ensures every event runs smoothly from start to finish. His planning turns ideas into engaging experiences.",
    "email": "vikalp.23bai10316@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "vikalp.23bai10316@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/joshivikalp905",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vidhi Thakur",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fevent_management%2Fvidhi.24bai10444%40vitbhopal.ac.in?alt=media&token=ea136cee-a7c9-464e-8de9-6770f3969311",
    "quote": "Vidhi Thakur supports task division with composed focus, helping the team stay aligned throughout the event.",
    "email": "vidhi.24bai10444@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "vidhi.24bai10444@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Ridhima Agarwal",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Ridhima is a natural planner, bringing a sense of calm and order to every event. With her keen attention to detail, she ensures that everything runs smoothly from start to finish.",
    "email": "ridhima.24bce10320@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "ridhima.24bce10320@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Anshita",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Anshita is a proactive and energetic team member who excels at bringing plans to life. Her hands-on approach and positive attitude make her a key player in executing successful events.",
    "email": "anshita.24bce11328@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "anshita.24bce11328@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Pratik Parsewar",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Pratik is a master of multitasking, effortlessly juggling various responsibilities to keep events on track. His ability to stay calm under pressure ensures a seamless experience for everyone.",
    "email": "pratik.24bce11164@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "pratik.24bce11164@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Kshitika Atri",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Kshitika is a creative problem-solver who brings fresh ideas to the team. She has a knack for turning challenges into opportunities, ensuring every event is memorable and engaging.",
    "email": "kshitika.24bsa10275@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "kshitika.24bsa10275@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Saba Parveen",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Saba is a reliable and organized team player who keeps everything running like clockwork. Her meticulous planning ensures that no detail is overlooked, making her a cornerstone of the team.",
    "email": "saba.24bai10111@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "saba.24bai10111@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Akshat Ghatiya",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Akshat is a dynamic and resourceful member of the team, always ready to take initiative. His energetic approach and ability to think on his feet make him invaluable during events.",
    "email": "akshat.24bce11211@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "akshat.24bce11211@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Dhanashri Bhausaheb Dhatrak",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Dhanashri is a dedicated and hardworking team member with a talent for coordination. She ensures everyone is on the same page, making collaboration smooth and effective.",
    "email": "dhanashri.24bai10534@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "dhanashri.24bai10534@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Narra Harshitha",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Harshitha is an enthusiastic and detail-oriented team member who ensures every aspect of an event is perfected. Her passion for creating memorable experiences shines through in her work.",
    "email": "narra.24mim10005@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "narra.24mim10005@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "GUDI SIVASHANKAR",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sivashankar is a practical and efficient team member who excels at execution. He is a master of logistics, ensuring that all moving parts of an event come together seamlessly.",
    "email": "gudi.24mip10054@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "gudi.24mip10054@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Aniket Gawai",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Aniket is a calm and focused team member who thrives in a fast-paced environment. His steady hand and ability to stay composed make him a reliable presence during any event.",
    "email": "gawai.24bce11368@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "gawai.24bce11368@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Priyanshi Prajapati",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Priyanshi is a creative and resourceful team member with a flair for bringing ideas to life. Her innovative thinking ensures that every event is fresh, exciting, and unforgettable.",
    "email": "priyanshi.24bai10708@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "priyanshi.24bai10708@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "ANUSHKA KUMAR",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Anushka is a highly organized and efficient team member who excels at managing tasks. Her structured approach ensures that deadlines are met and events are executed flawlessly.",
    "email": "anushka.24bce11304@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "anushka.24bce11304@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Jalaj Srivastava",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Jalaj is a proactive and reliable team member who is always ready to lend a hand. His willingness to take on any task makes him an essential part of the event management team.",
    "email": "jalaj.24bce10130@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "jalaj.24bce10130@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "MUSKAN SUKHIJA",
    "role": "Core Member",
    "domain": "Event Management",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Muskan is an enthusiastic and personable team member who excels at creating a welcoming atmosphere. Her friendly demeanor ensures that everyone feels included and engaged.",
    "email": "muskan.24bai10927@vitbhopal.ac.in",
    "badge": "EVENT",
    "socials": {
      "email": "muskan.24bai10927@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Prashasti Joshi",
    "role": "Core member",
    "domain": "Finance & Treasury",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Ffinance%2Fprashasti.23bce10893%40vitbhopal.ac.in?alt=media&token=be8ce54c-29f9-48cc-8224-a87adf75f349",
    "quote": "Prashasti Joshi is an active core contributor to Android Club VIT Bhopal.",
    "email": "prashasti.23bce10893@vitbhopal.ac.in",
    "badge": "FINANCE",
    "socials": {
      "email": "prashasti.23bce10893@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/prashasti-joshi-449620332",
      "instagram": "https://www.instagram.com/prashasti_joshi__",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Sonakshi Dashore",
    "role": "Core member",
    "domain": "Finance & Treasury",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sonakshi brings clarity and precision to the team. She ensures every document and detail is well-managed, keeping the workflow neat and professional.",
    "email": "sonakshi.24bcy10243@vitbhopal.ac.in",
    "badge": "FINANCE",
    "socials": {
      "email": "sonakshi.24bcy10243@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "HARSHIT SHARMA",
    "role": "Core member",
    "domain": "Finance & Treasury",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Harshit is detail-oriented and reliable, making sure financial records and documentation are accurate. His steady approach keeps everything in perfect order.",
    "email": "harshit.24bba10017@vitbhopal.ac.in",
    "badge": "FINANCE",
    "socials": {
      "email": "harshit.24bba10017@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "PRIYAM PRAKASH",
    "role": "Core member",
    "domain": "Finance & Treasury",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Priyam has a sharp eye for detail and ensures that all financial and documentation tasks are handled with precision. His systematic approach makes him an invaluable asset to the team.",
    "email": "priyam.24bec10139@vitbhopal.ac.in",
    "badge": "FINANCE",
    "socials": {
      "email": "priyam.24bec10139@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Jay pratap singh rajput",
    "role": "Co Lead",
    "domain": "Finance & Treasury",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Jay is a meticulous and organized team member who excels at keeping records straight. His dedication ensures that all financial and documentation matters are handled efficiently.",
    "email": "jay.24bcy10291@vitbhopal.ac.in",
    "badge": "FINANCE LEAD",
    "socials": {
      "email": "jay.24bcy10291@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Muhammad Sufyaan Khan",
    "role": "Core member",
    "domain": "Finance & Treasury",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sufyaan is a dependable and thorough team member, ensuring that all financial records and documents are perfectly maintained. His careful work keeps the team organized and on track.",
    "email": "muhammad.24bsa10231@vitbhopal.ac.in",
    "badge": "FINANCE",
    "socials": {
      "email": "muhammad.24bsa10231@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Dikshika",
    "role": "Lead",
    "domain": "Media & Production",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fmedia%2Fdikshika.23bai10331%40vitbhopal.ac.in.png?alt=media&token=8ef5bfab-130e-4861-ac16-4c198d127cf2",
    "quote": "Dikshika shapes the club’s visual and digital presence. Her creative vision ensures every story is told with impact.",
    "email": "dikshika.23bai10331@vitbhopal.ac.in",
    "badge": "MEDIA LEAD",
    "socials": {
      "email": "dikshika.23bai10331@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/dikshika-sachdeva-103455289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      "instagram": "https://www.instagram.com/dikshikka",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "T.V.VAMSI KRISHNA",
    "role": "Co- Lead",
    "domain": "Media & Production",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Vamsi is a creative storyteller who captures the club's moments with a unique vision. His keen eye and technical skills ensure that every photo and video is a work of art.",
    "email": "vamsi.23bai10680@vitbhopal.ac.in",
    "badge": "MEDIA LEAD",
    "socials": {
      "email": "vamsi.23bai10680@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Omkar Ravindra Shastri",
    "role": "Core Member",
    "domain": "Media & Production",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fmedia%2Fomkar.23bce11229%40vitbhopal.ac.in?alt=media&token=21ff233f-7b03-44be-add2-65856b7d0ad1",
    "quote": "Omkar Ravindra Shastri supports media flow from coverage to content creation with adaptability.",
    "email": "omkar.23bce11229@vitbhopal.ac.in",
    "badge": "MEDIA",
    "socials": {
      "email": "omkar.23bce11229@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/omrshastri",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Kirti Sonam Pattnaik",
    "role": "Co Lead",
    "domain": "Media & Production",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fmedia%2Fkirti.24bai10611%40vitbhopal.ac.in?alt=media&token=d8212b3b-c108-4614-accd-900c38a426a7",
    "quote": "Kirti Sonam Pattnaik documents club moments with calm organization and a thoughtful touch.",
    "email": "kirti.24bai10611@vitbhopal.ac.in",
    "badge": "MEDIA LEAD",
    "socials": {
      "email": "kirti.24bai10611@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "https://www.instagram.com/_pattnaikkirti_",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Tanish Kumar",
    "role": "Core Member",
    "domain": "Media & Production",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Tanish has a natural talent for capturing compelling visuals. His creative compositions and technical expertise make him a key contributor to the media team.",
    "email": "tanish.24bce10190@vitbhopal.ac.in",
    "badge": "MEDIA",
    "socials": {
      "email": "tanish.24bce10190@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Janhavi Raut",
    "role": "Core Member",
    "domain": "Media & Production",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Janhavi is a dynamic and creative force, always ready with innovative ideas for shoots and edits. Her passion for visual storytelling brings a fresh perspective to the team.",
    "email": "raut.24bcy10030@vitbhopal.ac.in",
    "badge": "MEDIA",
    "socials": {
      "email": "raut.24bcy10030@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Sai hanish",
    "role": "Core Member",
    "domain": "Media & Production",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Sai is a skilled and dedicated team member who excels at capturing the perfect shot. His commitment to quality ensures that every piece of media is polished and professional.",
    "email": "rathikindi.24mim10240@vitbhopal.ac.in",
    "badge": "MEDIA",
    "socials": {
      "email": "rathikindi.24mim10240@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Shamim Uz Zaman",
    "role": "Core Member",
    "domain": "Media & Production",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Shamim is a versatile and talented team member with a keen eye for visual storytelling. He consistently delivers high-quality work that captures the essence of the club's activities.",
    "email": "shamim.24bsa10159@vitbhopal.ac.in",
    "badge": "MEDIA",
    "socials": {
      "email": "shamim.24bsa10159@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Dhriti Mittal",
    "role": "Lead",
    "domain": "Operations & Logistics",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Foperations%2Fdhriti.23bce10704%40vitbhopal.ac.in?alt=media&token=63806de6-c3c5-4474-ab1b-afac3a12f9aa",
    "quote": "Dhriti ensures every plan turns into smooth execution. Her quick decisions and focus keep club activities on track.",
    "email": "dhriti.23bce10704@vitbhopal.ac.in",
    "badge": "OPERATIONS LEAD",
    "socials": {
      "email": "dhriti.23bce10704@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/dhriti-mittal-143700288?trk=contact-info",
      "instagram": "https://www.instagram.com/crystyn1912",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Ujjawal Patidar",
    "role": "Operation Manager",
    "domain": "Operations & Logistics",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Foperations%2Fujjawal.24bce10663%40vitbhopal.ac.in?alt=media&token=fe8a7ef6-d71f-42f3-9312-def5b3c00573",
    "quote": "Ujjawal ensures everything runs smoothly behind the scenes. His coordination makes sure nothing slips through the cracks.",
    "email": "ujjawal.24bce10663@vitbhopal.ac.in",
    "badge": "OPERATIONS",
    "socials": {
      "email": "ujjawal.24bce10663@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/ujjawal-patidar-876a09328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "instagram": "https://www.instagram.com/ujjawal_patidar94",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Anan Nakrani",
    "role": "Core Member",
    "domain": "Operations & Logistics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Anan is the organizer who ensures everything runs on schedule. With his structured approach, he makes sure no detail is overlooked, keeping events smooth and stress-free.",
    "email": "nakrani.24bsa10051@vitbhopal.ac.in",
    "badge": "OPERATIONS",
    "socials": {
      "email": "nakrani.24bsa10051@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Aniket Atul Karkhelikar",
    "role": "Core Member",
    "domain": "Operations & Logistics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Aniket is dependable and energetic, always ready to take on challenges. His ability to balance planning with quick execution makes him an asset to the operations team.",
    "email": "aniket.24bai10120@vitbhopal.ac.in",
    "badge": "OPERATIONS",
    "socials": {
      "email": "aniket.24bai10120@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Anant Singh",
    "role": "Core Member",
    "domain": "Operations & Logistics",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Anant is known for his practical and hands-on approach. Whether it’s handling tasks or solving last-minute issues, he ensures that plans turn into successful outcomes.",
    "email": "anant.24bai10345@vitbhopal.ac.in",
    "badge": "OPERATIONS",
    "socials": {
      "email": "anant.24bai10345@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Rishit Singh",
    "role": "Lead",
    "domain": "PR & Outreach",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2025%2Fpr_outreach%2Frishit.23bcg10008%40vitbhopal.ac.in.jpg?alt=media&token=5416e158-28bf-44b8-b447-b65c9ca99a6f",
    "quote": "Rishit builds strong connections and ensures the club’s presence is felt far and wide. His communication skills open doors to endless opportunities.",
    "email": "rishit.23bcg10008@vitbhopal.ac.in",
    "badge": "PR LEAD",
    "socials": {
      "email": "rishit.23bcg10008@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Fiona Dey",
    "role": "Co-Lead",
    "domain": "PR & Outreach",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fpr_outreach%2Ffiona.24bcg10020%40vitbhopal.ac.in?alt=media&token=4e0eaccc-032e-4e1b-a464-1ac00dbef482",
    "quote": "Fiona helps connect the club with more people, making sure we build good relationships and grow together.",
    "email": "fiona.24bcg10020@vitbhopal.ac.in",
    "badge": "PR LEAD",
    "socials": {
      "email": "fiona.24bcg10020@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/fiona-dey-a8572631a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5YqFTJ9qQGGzmGNjmKv%2BfA%3D%3D",
      "instagram": "https://www.instagram.com/dey_fiona",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Vitthal Das Srivastava",
    "role": "Core member",
    "domain": "PR & Outreach",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/users%2FPdOx30EOtAT9GKbekaVrNo5Zm343?alt=media&token=b185e5cc-fde9-4b70-b2f5-3b25fa33d84a",
    "quote": "Vitthal Srivastava contributes with focus and attention to detail, helping manage updates and communications.",
    "email": "vitthal.23bai10349@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "vitthal.23bai10349@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Abhimanyu Manojawas",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://firebasestorage.googleapis.com/v0/b/android-club-65a70.appspot.com/o/Team%2FcoreTeam2026%2Fpr_outreach%2Fabhimanyu.24bce10133%40vitbhopal.ac.in?alt=media&token=d0ce9f25-a8fe-4b61-8198-0bee4242c88e",
    "quote": "Abhimanyu Manojawas supports planning and communication with practical focus and adaptability.",
    "email": "abhimanyu.24bce10133@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "abhimanyu.24bce10133@vitbhopal.ac.in",
      "linkedin": "https://www.linkedin.com/in/abhimanyu-manojawas-50687528b/",
      "instagram": "https://www.instagram.com/manyu_elayath_",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Aman Prasad",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Aman is a natural communicator with a talent for building connections. He is always ready to represent the club and engage with others, making him a perfect fit for outreach.",
    "email": "aman.24bec10096@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "aman.24bec10096@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Shreya Ramesh",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Shreya is a strategic thinker who excels at building and maintaining relationships. Her professional approach ensures that every interaction is positive and productive.",
    "email": "shreya.24bce10042@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "shreya.24bce10042@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Samriddhi jain",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Samriddhi is an enthusiastic and outgoing team member who loves connecting with people. Her friendly demeanor and communication skills make her an excellent ambassador for the club.",
    "email": "samriddhi.24bce11416@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "samriddhi.24bce11416@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Gauri Nandwana",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Gauri is a confident and persuasive communicator who is passionate about sharing the club's vision. Her ability to connect with diverse audiences makes her a valuable asset to the team.",
    "email": "gauri.24bce10245@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "gauri.24bce10245@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  },
  {
    "name": "Rhythm Sharma",
    "role": "Core Member",
    "domain": "PR & Outreach",
    "photo": "https://androidclub.tech/TeamPage_Assets/admin.webp",
    "quote": "Rhythm is a creative and energetic team member who excels at crafting engaging messages. Her innovative approach to outreach helps the club connect with a wider audience.",
    "email": "rhythm.24bcy10103@vitbhopal.ac.in",
    "badge": "PR",
    "socials": {
      "email": "rhythm.24bcy10103@vitbhopal.ac.in",
      "linkedin": "",
      "instagram": "",
      "github": "https://github.com/androidvitb"
    }
  }
];

export const COMPARISON_TABLE = [
  {
    metric: "App Development Architecture",
    androidClub: "Production MVVM/MVI, Jetpack Compose, Kotlin Coroutines, Clean Architecture",
    typicalClub: "Outdated XML layouts, legacy Java tutorials, boilerplate copy-pasting"
  },
  {
    metric: "Project Shipping",
    androidClub: "Actual Play Store deployments & active GitHub open-source repositories",
    typicalClub: "Classroom submissions discarded after semester grading"
  },
  {
    metric: "Inter-Domain Synergy",
    androidClub: "Tech, SDC, R&D, UI/UX, Operations, Media, and Finance acting as one startup unit",
    typicalClub: "Disjointed teams working in complete isolation"
  },
  {
    metric: "Events & Hackathons",
    androidClub: "National-scale coding sprints, flagship hackathons, sponsor cash prizes",
    typicalClub: "Generic classroom presentations and dry slide decks"
  },
  {
    metric: "Mentorship & Growth",
    androidClub: "1-on-1 code reviews, senior PR mentoring, alumni network across tech leaders",
    typicalClub: "Self-study with no peer feedback or structured roadmap"
  },
  {
    metric: "Industry Tooling",
    androidClub: "Figma DS, GitHub Actions CI/CD, Firebase, Supabase, Docker, Postman",
    typicalClub: "Basic text editors and local-only development"
  }
];

export const FAQS = [
  {
    q: "Do I need to be an expert in Android or Kotlin to apply?",
    a: "Not at all! While familiarity with programming basics is helpful for technical domains, what we value most is your curiosity, eagerness to learn, and grit. We have dedicated mentoring pipelines for newcomers."
  },
  {
    q: "Can I apply for more than one domain?",
    a: "Yes! You can choose your primary domain and note secondary interests in your application form. We frequently support cross-domain contributions (e.g. an Android dev passionate about UI design)."
  },
  {
    q: "What is the expected time commitment for Core Team members?",
    a: "Core members typically invest 4-6 hours per week on projects, workshops, and team syncs. During flagship event weeks (like Geek Rush), collaborative hours may increase, but we always balance academics."
  },
  {
    q: "What does the recruitment process involve?",
    a: "The process has 3 simple steps: 1) Online Application & Domain Task on this portal, 2) Technical/Domain interaction with our leads, and 3) Final induction and project allocation."
  },
  {
    q: "Are non-technical roles equally valued in the club?",
    a: "Absolutely! The Non-Tech team (Operations, Event Management, PR & Outreach, Finance, Media, Content) is the powerhouse that makes our hackathons, sponsorships, and viral reach possible."
  },
  {
    q: "What perks do Core Team members receive?",
    a: "Core team members gain real production experience, official certificates, club merchandise, direct access to hackathon funding/sponsors, and mentorship from senior engineers placed at top tech companies."
  }
];

