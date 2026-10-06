export interface SkillItem {
  name: string;
  category: 'web' | 'programming' | 'backend' | 'database' | 'interactive' | 'tools';
  status: 'Current Skill' | 'Currently Learning' | 'Exploring';
  progressNote?: string;
  description: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  institution?: string;
  description: string;
  tags: string[];
  highlight?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  technologies: string[];
  linkText: string;
  isUpcoming?: boolean;
}

export interface GoalItem {
  id: string;
  title: string;
  category: string;
  details: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "MOHIT RATHOD",
    fullName: "Mohit Madhukar Rathod",
    role: "Student Developer & Technology Enthusiast",
    status: "First Year Student",
    college: "GH Raisoni College, Wagholi, Pune",
    academicAchievement: "92.12% — MHT-CET 2026",
    tagline: "Learning today. Building tomorrow.",
    supportingTagline: "Learning. Building. Experimenting. Creating with Technology.",
    secondaryTagline: "Curious today. Capable tomorrow.",
    philosophy: "Learn → Build → Experiment → Improve → Create",
    summary:
      "I'm Mohit Madhukar Rathod, a first-year student at GH Raisoni College, Wagholi, Pune, passionate about programming, web development, databases and emerging technologies.",
    aboutParagraphs: [
      "My name is Mohit Madhukar Rathod. I am a first-year student at GH Raisoni College, Wagholi, Pune. I am passionate about programming, web development, databases and emerging technologies.",
      "I enjoy learning how technology works and turning ideas into practical digital experiences. My current technical journey includes HTML, CSS, JavaScript, Python, C++, Java, React, Node.js, Supabase and PostgreSQL.",
      "I am continuously learning new languages, frameworks and technologies with the goal of becoming a strong full-stack developer and eventually building impactful technology products."
    ],
    whyMeQuote: "I'm not finished learning — and that's exactly what makes the journey exciting."
  },

  academic: {
    score: "92.12%",
    exam: "MHT-CET 2026",
    college: "GH Raisoni College, Wagholi, Pune",
    year: "First Year Student",
    verified: true
  },

  skills: [
    // Web Development
    {
      name: "HTML",
      category: "web",
      status: "Current Skill",
      description: "Web structure and semantic development"
    },
    {
      name: "CSS",
      category: "web",
      status: "Current Skill",
      description: "Responsive design and visual styling"
    },
    {
      name: "JavaScript",
      category: "web",
      status: "Current Skill",
      description: "Interactive web experiences and core DOM logic"
    },
    {
      name: "React",
      category: "web",
      status: "Currently Learning",
      description: "Component-based frontend development and UI state"
    },

    // Programming
    {
      name: "Python",
      category: "programming",
      status: "Current Skill",
      description: "Programming, automation and future AI exploration"
    },
    {
      name: "C++",
      category: "programming",
      status: "Current Skill",
      description: "Programming fundamentals and algorithmic problem solving"
    },
    {
      name: "Java",
      category: "programming",
      status: "Currently Learning",
      progressNote: "68% Completed — Currently Learning",
      description: "Object-oriented programming, data structures and core syntax"
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      status: "Currently Learning",
      description: "Backend, runtime architecture and server-side development"
    },

    // Database
    {
      name: "Supabase",
      category: "database",
      status: "Currently Learning",
      description: "Backend and database platform, auth & realtime data"
    },
    {
      name: "PostgreSQL",
      category: "database",
      status: "Currently Learning",
      description: "Relational database development, schema design & SQL"
    },

    // Interactive Web
    {
      name: "Three.js",
      category: "interactive",
      status: "Exploring",
      description: "Interactive 3D web exploration and WebGL scene graphs"
    },
    {
      name: "React Three Fiber",
      category: "interactive",
      status: "Exploring",
      description: "Declarative 3D component systems in React"
    },
    {
      name: "GSAP",
      category: "interactive",
      status: "Exploring",
      description: "Advanced web animation and cinematic motion orchestration"
    },
    {
      name: "ScrollTrigger",
      category: "interactive",
      status: "Exploring",
      description: "Scroll-synchronized interactive motion and storytelling"
    },
    {
      name: "Lenis",
      category: "interactive",
      status: "Exploring",
      description: "Smooth inertial scrolling physics and viewport pacing"
    },

    // Development Tools
    {
      name: "VS Code",
      category: "tools",
      status: "Current Skill",
      description: "Primary engineering and development environment"
    },
    {
      name: "Git",
      category: "tools",
      status: "Current Skill",
      description: "Version control, branching workflows and commit history"
    },
    {
      name: "GitHub",
      category: "tools",
      status: "Current Skill",
      description: "Source code repository hosting and collaborative workflows"
    }
  ] as SkillItem[],

  learningCurriculum: {
    currentlyLearning: [
      { name: "Java", note: "Core OOP & Data Structures (68% Complete)" },
      { name: "Advanced JavaScript", note: "Closures, async runtime, performance" },
      { name: "React", note: "Hooks, architecture, component lifecycle" },
      { name: "Node.js", note: "REST APIs, asynchronous event loops" },
      { name: "Database Concepts", note: "Normalization, relational queries, indexes" },
      { name: "Full-Stack Development", note: "End-to-end integration of client and server" },
      { name: "AI & Machine Learning", note: "Foundational mathematics and python models" },
      { name: "Modern Web Technologies", note: "Responsive UX, accessibility & web vitals" }
    ],
    exploring: [
      { name: "Three.js", note: "Interactive 3D geometry & shaders" },
      { name: "React Three Fiber", note: "3D scenes inside React component trees" },
      { name: "GSAP", note: "High-precision timeline motion & tweening" },
      { name: "Advanced Backend Development", note: "Microservices and caching strategies" },
      { name: "AI-Powered Applications", note: "Integrating inference APIs into apps" },
      { name: "Advanced Database Systems", note: "PostgreSQL scaling and query planning" }
    ]
  },

  journey: [
    {
      period: "2026",
      title: "MHT-CET 2026 Achievement",
      description: "Secured a remarkable 92.12 percentile in MHT-CET 2026, marking a pivotal academic milestone.",
      tags: ["92.12%", "MHT-CET", "Academic Merit"],
      highlight: "Scored 92.12%"
    },
    {
      period: "2026",
      title: "Started College Journey",
      institution: "GH Raisoni College, Wagholi, Pune",
      description: "Commenced formal engineering education as a first-year student, embarking on a deep exploration of computer science.",
      tags: ["GH Raisoni College", "Pune", "Engineering"],
      highlight: "First Year Student"
    },
    {
      period: "2026",
      title: "Started Building Technical Foundations",
      description: "Dove into core programming fundamentals, algorithmic thinking, and modern web building blocks.",
      tags: ["HTML", "CSS", "JavaScript", "Python", "C++"],
      highlight: "Core Languages"
    },
    {
      period: "2026 — PRESENT",
      title: "Expanding Development Skills",
      description: "Actively studying object-oriented programming in Java (68% complete), full-stack frontend with React, backend services with Node.js, and data persistence with Supabase and PostgreSQL.",
      tags: ["Java", "React", "Node.js", "Supabase", "PostgreSQL"],
      highlight: "Full-Stack In Progress"
    },
    {
      period: "PRESENT → FUTURE",
      title: "Continuous Learning & Creation",
      description: "Committed to mastering full-stack architecture, machine learning experiments, and cinematic 3D web experiences while creating meaningful digital solutions.",
      tags: ["Full-Stack", "AI & ML", "3D Web", "Software Products"],
      highlight: "Building Tomorrow"
    }
  ] as JourneyMilestone[],

  projects: [
    {
      id: "traceai",
      name: "TRACEAI",
      subtitle: "Explainable Email Threat Detection & Forensic Intelligence",
      category: "Cybersecurity / AI / Web Application",
      description: "TRACEAI is a platform designed to analyze suspicious emails, identify phishing, spoofing and impersonation indicators, calculate explainable risk and provide forensic intelligence.",
      problem: "Traditional anti-phishing gateways function as opaque black boxes—flagging or quarantining messages without providing clear explanations, actionable forensic evidence, or user education.",
      solution: "An interactive, transparent forensic dashboard that inspects email headers, SPF/DKIM/DMARC authentication parameters, structural anomalies, and semantic indicators to provide an explainable risk breakdown.",
      contribution: "Designed the architecture and responsive dashboard UI, structured detection heuristics, and developed clear data visualizations for threat severity and explainability metrics.",
      technologies: ["React", "Python", "FastAPI", "Database", "AI-assisted analysis"],
      linkText: "VIEW PROJECT →"
    },
    {
      id: "project-02",
      name: "PROJECT 02",
      subtitle: "Currently building something new",
      category: "Full-Stack / Exploring",
      description: "An upcoming project exploring full-stack engineering, interactive design, and database architectures. Clean architectural foundation ready to expand upon launch.",
      problem: "Identifying practical challenges that can be solved with modern web applications and automated data processing.",
      solution: "In active ideation and prototyping phase. Applying continuous learning in React, Node.js, and PostgreSQL.",
      contribution: "Concept development, architecture planning, and exploratory coding.",
      technologies: ["React", "Node.js", "PostgreSQL", "Coming Soon"],
      linkText: "COMING SOON",
      isUpcoming: true
    }
  ] as ProjectItem[],

  whatILikeBuilding: [
    "Web Experiences",
    "Programming Projects",
    "AI Applications",
    "Machine Learning Experiments",
    "Cybersecurity Projects",
    "Database Applications",
    "Interactive Websites",
    "Creative UI/UX",
    "Technology Experiments"
  ],

  personalStrengths: [
    {
      title: "Curiosity",
      description: "Always interested in understanding how things work under the hood, from compiler details to web protocols."
    },
    {
      title: "Continuous Learning",
      description: "Actively acquiring new technologies and programming concepts daily through disciplined practice."
    },
    {
      title: "Problem Solving",
      description: "Enjoy untangling complex programming bugs and formulating clean algorithmic solutions."
    },
    {
      title: "Creativity",
      description: "Passionate about creating unique digital experiences where design integrity meets solid engineering."
    },
    {
      title: "Adaptability",
      description: "Comfortable pivoting between languages, tools, and paradigms as technology evolves."
    },
    {
      title: "Team Collaboration",
      description: "Eager to exchange knowledge, participate in team development, and build impactful software together."
    }
  ],

  futureGoals: [
    {
      id: "g1",
      title: "Become a strong full-stack developer",
      category: "Mastery",
      details: "Master the entire pipeline from clean responsive interfaces to robust database architecture and APIs."
    },
    {
      id: "g2",
      title: "Build real-world software products",
      category: "Engineering",
      details: "Ship applications that solve genuine problems for real users and scale reliably."
    },
    {
      id: "g3",
      title: "Explore Artificial Intelligence and Machine Learning",
      category: "Innovation",
      details: "Deepen understanding of machine learning models, neural architectures, and intelligent web agents."
    },
    {
      id: "g4",
      title: "Master modern web development",
      category: "Frontend",
      details: "Gain expert-level command of modern rendering paradigms, performance metrics, and responsive systems."
    },
    {
      id: "g5",
      title: "Improve programming and problem-solving skills",
      category: "Foundations",
      details: "Consistently practice data structures, algorithmic efficiency, and clean code principles."
    },
    {
      id: "g6",
      title: "Build advanced interactive websites",
      category: "Creative Dev",
      details: "Combine 3D WebGL, GSAP physics, and creative interaction into memorable web journeys."
    },
    {
      id: "g7",
      title: "Participate in hackathons & technical competitions",
      category: "Collaboration",
      details: "Collaborate under pressure with fellow builders to prototype and validate ambitious concepts."
    },
    {
      id: "g8",
      title: "Create technology that solves real-world problems",
      category: "Impact",
      details: "Direct technical energy toward tools that make education, productivity, and safety accessible."
    },
    {
      id: "g9",
      title: "Continuously learn new programming languages & frameworks",
      category: "Growth",
      details: "Cultivate lifelong technical curiosity across systems languages, web ecosystems, and data pipelines."
    }
  ] as GoalItem[],

  capabilities: [
    { title: "Modern Websites", desc: "Clean semantic markup, fluid responsive design, and editorial visual hierarchy." },
    { title: "Interactive Web Experiences", desc: "Engaging scroll-driven motion, micro-interactions, and visual feedback." },
    { title: "Full-Stack Web Applications", desc: "Connecting responsive client interfaces to scalable backend APIs and auth." },
    { title: "AI-Powered Applications", desc: "Integrating intelligent threat detection and modern machine learning concepts." },
    { title: "Database-Driven Applications", desc: "Structured relational models, data normalization, and fast SQL queries." },
    { title: "Creative Developer Websites", desc: "Bespoke digital portfolios and product showcases tailored to personal brands." },
    { title: "Interactive 3D Websites", desc: "Three.js and WebGL camera scenes seamlessly driven by scroll and interaction." }
  ],

  whyWorkWithMe: [
    { trait: "Strong Curiosity", detail: "Relentless desire to dig deeper and understand every layer of technology." },
    { trait: "Continuous Learning", detail: "Proactive, self-directed study habit across languages, frameworks, and tools." },
    { trait: "Willingness to Experiment", detail: "Unintimidated by novel tools; eager to prototype, test, and iterate rapidly." },
    { trait: "Programming Foundation", detail: "Grounded in foundational C++, Python, and web standards before abstractions." },
    { trait: "Creative Thinking", detail: "Belief that high technical function deserves world-class visual aesthetics." },
    { trait: "Problem Solving", detail: "Systematic breakdown of challenges into verifiable, step-by-step solutions." },
    { trait: "Adaptability", detail: "Quick to absorb emerging engineering patterns, documentation, and tooling." },
    { trait: "Interest in Modern Tech", detail: "Energized by the frontiers of 3D web, artificial intelligence, and cloud data." }
  ],

  achievements: [
    {
      title: "92.12% — MHT-CET 2026",
      subtitle: "State-level Engineering Entrance Examination",
      date: "2026",
      status: "Verified",
      description: "Demonstrated strong quantitative aptitude, logical reasoning, and academic dedication in the Maharashtra Common Entrance Test."
    }
  ],

  socialLinks: [
    { name: "GitHub", label: "ADD LINK", url: "https://github.com", placeholder: true },
    { name: "LinkedIn", label: "ADD LINK", url: "https://linkedin.com", placeholder: true },
    { name: "Instagram", label: "ADD LINK", url: "https://instagram.com", placeholder: true },
    { name: "Email", label: "ADD EMAIL", url: "mailto:mohit@example.com", placeholder: true }
  ],

  marquees: {
    primary: "CODE • CREATE • LEARN • BUILD • EXPLORE • INNOVATE • ",
    secondary: "FULL-STACK DEVELOPMENT • CREATIVE WEB • PROGRAMMING • DATABASES • AI • TECHNOLOGY • "
  }
};

