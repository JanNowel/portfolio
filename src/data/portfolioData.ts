import { Project, SkillCategory, TimelineItem, Certification, Service } from '../types';

export const PERSONAL_INFO = {
  name: 'Jhon Noel Baculpo',
  initials: 'JNB',
  title: 'Full-Stack Developer | Software Developer | AI Prompt Engineer',
  roles: [
    'Full-Stack Developer',
    'Software Developer',
    'Mobile App Developer',
    'AI Prompt Engineer',
  ],
  profileImage: '/images/profile-transparent.png',
  logoImage: '/images/logo-jnb.jpg',
  shortIntro:
    'I build modern web and mobile applications, intelligent software solutions, and practical digital experiences. I enjoy transforming ideas into functional applications through clean code, thoughtful design, and modern technologies.',
  status: 'Open to Internships, Junior Roles & Freelance Projects',
  isAvailable: true,
  email: 'baculpojhonnoele@gmail.com',
  github: 'https://github.com/JanNowel',
  linkedin: 'https://linkedin.com/in/jhonnoelbaculpo',
  location: 'Bien Unido, Bohol, Philippines',
  resumeFileName: 'Jhon_Noel_Baculpo_CV.pdf',
};

export const ABOUT_DATA = {
  intro:
    "I'm an aspiring software developer with a strong foundation in full-stack web and mobile development. My focus is on writing maintainable, clean code, architecting reliable digital solutions, and continuously expanding my technical depth.",
  philosophy:
    "I believe technology should solve tangible everyday problems. Whether building responsive web interfaces, robust backend APIs, or cross-platform mobile apps, I prioritize user experience, performance, and solid architectural principles.",
  areasOfInterest: [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Architecting scalable client-server applications with the MERN stack, TypeScript, and modern API architectures.',
      icon: 'Layers',
    },
    {
      title: 'Mobile App Development',
      desc: 'Creating fluid, responsive cross-platform mobile applications utilizing React Native and Flutter.',
      icon: 'Smartphone',
    },
    {
      title: 'Intelligent Systems & AI',
      desc: 'Exploring Large Language Model (LLM), incident detection, and smart automation to enhance civic and enterprise workflows.',
      icon: 'Brain',
    },
    {
      title: 'Modern IT Infrastructure',
      desc: 'Understanding cloud deployments, containerization with Docker, and edge computing via Cloudflare.',
      icon: 'Cloud',
    },
  ],
  stats: [
    {
      id: 'projects',
      label: 'Featured Projects',
      value: 4,
      suffix: '+',
      description: 'End-to-end full-stack & mobile apps',
    },
    {
      id: 'technologies',
      label: 'Core Technologies',
      value: 15,
      suffix: '+',
      description: 'Languages, frameworks & databases',
    },
    {
      id: 'passion',
      label: 'Learning Commitment',
      value: 100,
      suffix: '%',
      description: 'Continuous growth & practical building',
    },
    {
      id: 'repos',
      label: 'GitHub Repositories',
      value: 10,
      suffix: '+',
      description: 'Open source & exploratory code',
    },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'regebook',
    title: 'REGEBook',
    subtitle: 'AN Online Booking & Client Management System for REGE Styling & Catering Services',
    description:
      'A comprehensive online booking and client management system built for REGE Styling and Catering Services to streamline reservations, package customization, and customer communication.',
    fullDescription:
      'REGEBook was engineered to solve scheduling conflicts, manual order tracking, and client communication challenges for REGE Styling and Catering Services. The system provides real-time calendar availability, customizable package tiering, automated booking workflows, and an administrative dashboard for event managers.',
    category: 'Full-Stack',
    technologies: [
      'MERN Stack',
      'TypeScript',
      'React Native',
      'MongoDB',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
    ],
    features: [
      'Real-time event booking and slot reservation system',
      'Interactive catering package builder and price calculation',
      'Client management portal with reservation tracking and invoice previews',
      'Admin dashboard for calendar management, booking approvals, and customer records',
      'Cross-platform mobile capabilities via React Native for staff on the go',
    ],
    architecture: [
      'RESTful Express & Node.js backend with JWT authentication',
      'MongoDB schemas with Mongoose for booking states, clients, and menu packages',
      'Type-safe frontend state management with React and TypeScript',
    ],
    role: 'Lead Full-Stack Developer',
    githubUrl: 'https://github.com/JanNowel',
    liveUrl: undefined,
    status: 'Completed',
    accentColor: '#8B5CF6',
    stats: [
      { label: 'Platform', value: 'Web & Mobile' },
      { label: 'Client', value: 'REGE Styling' },
      { label: 'Stack', value: 'MERN + TS' },
    ],
  },
  {
    id: 'ebantay',
    title: 'eBantay',
    subtitle: 'AI-Powered Municipal Incident Reporting System',
    description:
      'An intelligent municipal incident reporting and monitoring platform designed for rapid citizen reporting, geospatial mapping, and automated dispatch triage.',
    fullDescription:
      'eBantay empowers citizens and local government responders to quickly report, verify, and resolve community hazards and municipal incidents. Integrating interactive Leaflet geospatial maps with AI-driven incident analysis, it categorizes urgency, tracks GPS coordinates, and provides real-time situational awareness.',
    category: 'AI & System',
    technologies: [
      'MERN Stack',
      'React Native',
      'Expo',
      'MongoDB',
      'Leaflet',
      'Node.js',
      'Express.js',
    ],
    features: [
      'One-tap citizen emergency and hazard reporting with photo uploads',
      'Interactive Leaflet GIS mapping with heatmap of active incidents',
      'AI-assisted severity classification and priority tagging',
      'Responder dashboard for dispatch coordination and live status updates',
      'Offline-first synchronization for emergency situations with low connectivity',
    ],
    architecture: [
      'Geospatial MongoDB queries ($near and geoJSON indexing)',
      'Cross-platform Expo/React Native mobile app for community users',
      'Secure REST endpoints with role-based access for citizens and municipal staff',
    ],
    role: 'Full-Stack & Mobile Developer',
    githubUrl: 'https://github.com/JanNowel',
    liveUrl: 'https://e-bantay-app-kappa.vercel.app/',
    status: 'Completed',
    accentColor: '#38BDF8',
    stats: [
      { label: 'Focus', value: 'Civic Tech & Safety' },
      { label: 'Mapping', value: 'Leaflet GIS' },
      { label: 'AI Support', value: 'Incident Triage' },
    ],
  },
  {
    id: 'student-hub',
    title: 'Student Hub',
    subtitle: 'Academic Collaboration & Productivity Mobile App',
    description:
      'A student-focused cross-platform mobile application built to foster seamless academic collaboration, peer study groups, and schedule management.',
    fullDescription:
      'Student Hub bridges the gap between campus communication and individual academic planning. Engineered with Flutter and Supabase, it provides students with instant peer group discussions, task prioritization boards, lecture note sharing, and deadline countdown reminders in a clean, distraction-free interface.',
    category: 'Mobile',
    technologies: [
      'Flutter',
      'Dart',
      'Supabase',
      'PostgreSQL',
      'Realtime DB',
      'Row Level Security',
    ],
    features: [
      'Real-time peer chat and study group collaboration rooms',
      'Task management and academic assignment deadline reminders',
      'Secure document and lecture note sharing via Supabase Storage',
      'Offline caching for class schedules and to-do lists',
      'Clean modern Material 3 interface with dark mode support',
    ],
    architecture: [
      'Flutter reactive UI architecture with BLoC / Provider state management',
      'Supabase backend with PostgreSQL and Row-Level Security (RLS)',
      'Real-time database subscriptions for instant messaging and study notices',
    ],
    role: 'Mobile Developer',
    githubUrl: 'https://github.com/JanNowel',
    liveUrl: undefined,
    status: 'Completed',
    accentColor: '#A855F7',
    stats: [
      { label: 'Ecosystem', value: 'Flutter & Dart' },
      { label: 'Backend', value: 'Supabase BaaS' },
      { label: 'Target', value: 'Android & iOS' },
    ],
  },
  {
    id: 'python-system-info',
    title: 'Python System Information',
    subtitle: 'Hardware & OS Diagnostic Desktop Utility',
    description:
      'A responsive Windows desktop application for analyzing, inspecting, and managing computer hardware, thermal diagnostics, and OS process metrics.',
    fullDescription:
      'A lightweight, responsive utility developed in Python with a graphical interface. It provides in-depth inspection of CPU load, memory utilization, GPU telemetry, storage health, active background processes, and system hardware specifications with clean data visual charts.',
    category: 'Desktop',
    technologies: [
      'Python',
      'Desktop GUI',
      'Psutil',
      'OS APIs',
      'Hardware Telemetry',
    ],
    features: [
      'Real-time CPU, RAM, and disk utilization telemetry graphing',
      'Granular hardware breakdown: motherboard, processor, storage drives, network adapters',
      'Background process manager with memory footprint ranking',
      'Exportable system health and diagnostic logs',
      'Native Windows execution with minimal overhead and zero unnecessary dependencies',
    ],
    architecture: [
      'Modular Python desktop architecture with separation of UI and metric pollers',
      'Multi-threaded background sampling to prevent UI freezing',
      'Low-level Windows OS API and WMI hardware queries',
    ],
    role: 'Software Developer',
    githubUrl: 'https://github.com/JanNowel',
    liveUrl: undefined,
    status: 'Completed',
    accentColor: '#10B981',
    stats: [
      { label: 'Platform', value: 'Windows OS' },
      { label: 'Language', value: 'Python' },
      { label: 'Type', value: 'Desktop Utility' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    subtitle: 'Crafting responsive, high-performance interfaces',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'Proficient', tag: 'Core Library' },
      { name: 'TypeScript', level: 'Proficient', tag: 'Typed JS' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Language' },
      { name: 'React Native', level: 'Proficient', tag: 'Mobile' },
      { name: 'Flutter', level: 'Proficient', tag: 'Mobile' },
      { name: 'HTML5', level: 'Advanced', tag: 'Markup' },
      { name: 'CSS3 / Tailwind', level: 'Advanced', tag: 'Styling' },
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Building reliable server architectures and services',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'Proficient', tag: 'Runtime' },
      { name: 'Express.js', level: 'Proficient', tag: 'Framework' },
      { name: 'REST APIs', level: 'Proficient', tag: 'Architecture' },
      { name: 'Python', level: 'Proficient', tag: 'Language' },
    ],
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Data modeling, persistence, and queries',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Proficient', tag: 'NoSQL' },
      { name: 'Mongoose', level: 'Proficient', tag: 'ODM' },
      { name: 'Supabase', level: 'Proficient', tag: 'BaaS / SQL' },
      { name: 'SQLite', level: 'Proficient', tag: 'Embedded' },
    ],
  },
  {
    title: 'Developer Tools & Cloud',
    subtitle: 'Workflow optimization, version control, and tooling',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 'Proficient', tag: 'VCS' },
      { name: 'GitHub', level: 'Proficient', tag: 'Collaboration' },
      { name: 'VS Code', level: 'Advanced', tag: 'IDE' },
      { name: 'Postman', level: 'Proficient', tag: 'API Testing' },
      { name: 'Docker', level: 'Familiar', tag: 'Containers' },
      { name: 'Cloudflare', level: 'Familiar', tag: 'DNS / Edge' },
    ],
  },
  {
    title: 'Specialized & Future Interests',
    subtitle: 'Expanding frontiers in intelligent computing and design',
    icon: 'Sparkles',
    skills: [
      { name: 'AI Integration', level: 'Active Interest', tag: 'LLMs & Vision' },
      { name: 'API Integration', level: 'Proficient', tag: 'Webhooks & Services' },
      { name: 'UI/UX Design', level: 'Practicing', tag: 'Design Systems' },
      { name: 'Software Architecture', level: 'Continuous Study', tag: 'Patterns' },
      { name: 'IT Infrastructure', level: 'Foundational', tag: 'Systems' },
    ],
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'learning-journey',
    period: '2024 — Present',
    title: 'Continuous Technical Learning & Full-Stack Mastery',
    organization: 'Self-Directed & Project-Based Development',
    location: 'Remote / Independent',
    category: 'Learning',
    description:
      'Deepening practical knowledge in full-stack web architectures, mobile development (React Native & Flutter), modern state management, and cloud integrations. Actively building hands-on projects to simulate enterprise workflows.',
    highlights: [
      'Authored end-to-end full-stack solutions with MERN and TypeScript',
      'Implemented real-time features and database migrations',
      'Explored AI application hooks and modern developer tooling',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'Flutter', 'MongoDB'],
    isPlaceholder: false,
  },
  {
    id: 'ojt-experience',
    period: 'Upcoming / Editable Entry',
    title: 'On-the-Job Training (OJT) / Internship',
    organization: 'FAST Distribution Corporation / Trinidad Municipal College',
    location: 'Ubay, Bohol',
    category: 'OJT',
    description:
      'Editable placeholder for OJT internship experience. Prepared to contribute to software development teams, code reviews, feature implementation, and collaborative Agile sprints.',
    highlights: [
      'Open for Commission-based part-time full-stack and mobile development skills in professional environments',
      'Eager to learn team engineering practices, CI/CD pipelines, and production QA',
      'Open to local and remote software development internship opportunities',
    ],
    technologies: ['Agile', 'Team Git Workflow', 'Code Review', 'Full-Stack'],
    isPlaceholder: true,
  },
  {
    id: 'academic-journey',
    period: 'Academic Background',
    title: 'Information Technology / Computer Studies Program',
    organization: '[College / University Name - Editable Placeholder]',
    location: 'Philippines',
    category: 'Education',
    description:
      'Pursuing an IT/Computer-related degree with an emphasis on software engineering, database management, algorithms, networking fundamentals, and systems development.',
    highlights: [
      'Strong academic focus on programming fundamentals and database systems',
      'Collaborated on student capstone and team course deliverables',
      'Active participant in tech learning groups and hands-on coding labs',
    ],
    technologies: ['Data Structures', 'Database Systems', 'Software Engineering', 'Networking'],
    isPlaceholder: true,
  },
  {
    id: 'featured-development',
    period: 'Project Development Milestones',
    title: 'Practical Application Building & Systems Prototyping',
    organization: 'Independent & Client Projects',
    category: 'Project',
    description:
      'Designed and developed real-world solutions including REGESuite (catering management), eBantay (municipal incident tracking), Student Hub (mobile productivity), and Python System Info.',
    highlights: [
      'Translated user requirements into working software prototypes and production builds',
      'Engineered GIS incident tracking with Leaflet and cross-platform mobile apps',
      'Maintained clean Git version control across multi-repository workflows',
    ],
    technologies: ['MERN', 'Expo', 'Dart', 'Python', 'Leaflet'],
    isPlaceholder: false,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-fullstack-dev',
    title: 'Full-Stack Web Development & Architecture',
    issuer: 'Technical Capstone & Independent Software Projects',
    date: '2024',
    category: 'Full-Stack',
    skills: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs'],
    credentialId: 'JNB-FS-2024-CAPSTONE',
  },
  {
    id: 'cert-mobile-eng',
    title: 'Cross-Platform Mobile Application Engineering',
    issuer: 'Mobile Development Track & Hands-on Production Builds',
    date: '2024',
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Dart', 'Expo', 'Supabase'],
    credentialId: 'JNB-MOB-2024-ENG',
  },
  {
    id: 'cert-python-dev',
    title: 'Python Software & Systems Engineering',
    issuer: 'Independent Systems & Desktop Development',
    date: '2023',
    category: 'Software & Systems',
    skills: ['Python', 'OS APIs', 'Algorithms', 'Hardware Telemetry'],
    credentialId: 'JNB-PY-2023-SYS',
  },
  {
    id: 'cert-ai-prompt',
    title: 'Applied AI & Advanced Prompt Engineering',
    issuer: 'Generative AI & LLM Systems Specialization',
    date: '2024',
    category: 'AI Specialization',
    skills: ['Prompt Engineering', 'LLM Workflow Design', 'API Integration', 'Incident Triage'],
    credentialId: 'JNB-AI-2024-PROMPT',
  },
  {
    id: 'cert-git-collab',
    title: 'Git Version Control & Agile Team Practices',
    issuer: 'Collaborative Software Engineering Practices',
    date: '2023',
    category: 'DevOps & Tools',
    skills: ['Git', 'GitHub', 'Code Review', 'Branching Strategies'],
    credentialId: 'JNB-GIT-2023-COLLAB',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-engineering',
    title: 'Full-Stack Web Applications',
    shortDesc: 'End-to-end web applications crafted with React, TypeScript, Node.js, and MongoDB/PostgreSQL. Engineered for responsiveness, speed, and maintainability.',
    deliverables: [
      'Responsive, modern, and accessible web interfaces',
      'REST API design & secure JWT authentication',
      'Database modeling & query optimization',
      'Production deployment and performance tuning',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    badge: 'Core Service',
  },
  {
    id: 'mobile-development',
    title: 'Cross-Platform Mobile Apps',
    shortDesc: 'Smooth, reliable iOS and Android mobile applications built using React Native and Flutter with real-time features and offline capabilities.',
    deliverables: [
      'Cross-platform UI/UX implementation',
      'Supabase & Firebase real-time sync',
      'Geolocation, mapping, and native device APIs',
      'Clean state management and offline persistence',
    ],
    technologies: ['React Native', 'Flutter', 'Expo', 'Dart', 'Supabase'],
    badge: 'Mobile First',
  },
  {
    id: 'backend-architecture',
    title: 'Backend APIs & Systems Integration',
    shortDesc: 'Secure, modular server architectures, RESTful endpoints, database schemas, and external service integrations built for scale.',
    deliverables: [
      'Modular REST endpoints & API documentation',
      'Role-based access control (RBAC) & security',
      'Third-party webhooks, payments, and notifications',
      'Automated testing & structured error handling',
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Postman'],
    badge: 'Backend & Cloud',
  },
  {
    id: 'python-automation',
    title: 'Desktop Software & Automation Scripts',
    shortDesc: 'Custom desktop utilities, telemetry inspectors, data extraction pipelines, and automated scripts to streamline manual workflows.',
    deliverables: [
      'Native desktop GUI utilities',
      'Automated batch processes & script routines',
      'System telemetry, diagnostic tools, and OS queries',
      'Stand-alone executables with minimal dependencies',
    ],
    technologies: ['Python', 'Desktop GUI', 'Psutil', 'Automation', 'OS APIs'],
    badge: 'Automation',
  },
  {
    id: 'ai-prompt-engineering',
    title: 'AI Integration & Prompt Engineering',
    shortDesc: 'Connecting Large Language Models, structured JSON outputs, and automated classification systems into real-world business workflows.',
    deliverables: [
      'Structured prompt engineering & testing',
      'Automated incident triage and categorization',
      'Intelligent conversational workflows and search',
      'Safe model outputs with strict schema validation',
    ],
    technologies: ['LLM APIs', 'Prompt Design', 'JSON Schema', 'Smart Triage'],
    badge: 'AI Specialization',
  },
  {
    id: 'commission-refactoring',
    title: 'Commission Projects & Code Refactoring',
    shortDesc: 'Available for freelance commissions, sprint help, refactoring existing codebases to clean TypeScript, and UI modernization.',
    deliverables: [
      'Codebase migration to typed TypeScript',
      'UI modernization & component cleanup',
      'Performance audit & bundle optimization',
      'Clear documentation and pull request reviews',
    ],
    technologies: ['TypeScript', 'Git', 'Agile', 'Code Review', 'Clean Architecture'],
    badge: 'Open for Commissions',
  },
];
