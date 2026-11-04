export interface FloatingTechItem {
  id: string;
  name: string;
  shortTag: string;
  category: string;
  description: string;
  techKey:
    | 'mern'
    | 'react'
    | 'typescript'
    | 'nodejs'
    | 'flutter'
    | 'python'
    | 'mongodb'
    | 'cloudflare'
    | 'leaflet';
  accentColor: string;
  glowClass: string;
  tagBgClass: string;
  // Fixed anchor inside the floating layer (percentages)
  anchor: { top: string; left?: string; right?: string };
  // Visibility on devices (visible on mobile too!)
  visibilityClass: string;
  // Dynamic wandering amplitudes
  desktopWander: {
    x: number[];
    y: number[];
    rotate: number[];
    duration: number;
    delay: number;
  };
  mobileWander: {
    x: number[];
    y: number[];
    rotate: number[];
    duration: number;
    delay: number;
  };
}

export const FLOATING_TECH_ECOSYSTEM: FloatingTechItem[] = [
  // 1. MERN Stack (Top Left quadrant, wanders gracefully)
  {
    id: 'mern-stack',
    name: 'MERN Stack',
    shortTag: 'Full-Stack',
    category: 'Web Architecture',
    description: 'MongoDB, Express.js, React, and Node.js full-stack applications with TypeScript.',
    techKey: 'mern',
    accentColor: '#8B5CF6',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]',
    tagBgClass: 'bg-purple-500/15 text-purple-300',
    anchor: { top: '3%', left: '3%' },
    visibilityClass: 'flex', // Visible on all screens
    desktopWander: {
      x: [0, 55, -35, 45, -25, 0],
      y: [0, -45, 35, -55, 25, 0],
      rotate: [0, 5, -4, 6, -3, 0],
      duration: 18,
      delay: 0,
    },
    mobileWander: {
      x: [0, 20, -15, 18, -10, 0],
      y: [0, -22, 18, -25, 12, 0],
      rotate: [0, 4, -3, 5, -2, 0],
      duration: 14,
      delay: 0,
    },
  },

  // 2. React & TypeScript (Top Right quadrant, wandering diagonal)
  {
    id: 'react-ts',
    name: 'React & TS',
    shortTag: 'Frontend',
    category: 'UI Engineering',
    description: 'Type-safe reactive component development with React, TypeScript, and Tailwind CSS.',
    techKey: 'react',
    accentColor: '#00D8FF',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(0,216,255,0.5)]',
    tagBgClass: 'bg-cyan-500/15 text-cyan-300',
    anchor: { top: '12%', right: '3%' },
    visibilityClass: 'flex',
    desktopWander: {
      x: [0, -50, 40, -35, 30, 0],
      y: [0, 50, -40, 35, -30, 0],
      rotate: [0, -5, 4, -6, 3, 0],
      duration: 20,
      delay: 1.5,
    },
    mobileWander: {
      x: [0, -18, 15, -12, 10, 0],
      y: [0, 20, -18, 15, -12, 0],
      rotate: [0, -4, 3, -4, 2, 0],
      duration: 15,
      delay: 1,
    },
  },

  // 3. Flutter & Mobile (Upper Mid-Right / drifting around)
  {
    id: 'flutter-native',
    name: 'Flutter & Native',
    shortTag: 'Mobile',
    category: 'Cross-Platform',
    description: 'Cross-platform mobile apps for Android and iOS using Flutter, Dart & React Native.',
    techKey: 'flutter',
    accentColor: '#38BDF8',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]',
    tagBgClass: 'bg-sky-500/15 text-sky-300',
    anchor: { top: '30%', right: '2%' },
    visibilityClass: 'flex',
    desktopWander: {
      x: [0, -45, -20, 35, -25, 0],
      y: [0, -35, 55, -40, 30, 0],
      rotate: [0, 4, -5, 3, -4, 0],
      duration: 19,
      delay: 0.8,
    },
    mobileWander: {
      x: [0, -16, -8, 14, -10, 0],
      y: [0, -18, 22, -15, 12, 0],
      rotate: [0, 3, -4, 2, -3, 0],
      duration: 16,
      delay: 0.5,
    },
  },

  // 4. Node.js & Express (Middle Left / wandering outwards)
  {
    id: 'node-express',
    name: 'Node & Express',
    shortTag: 'Backend',
    category: 'REST & APIs',
    description: 'Scalable backend services, JWT authorization, middleware, and microservices.',
    techKey: 'nodejs',
    accentColor: '#22C55E',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]',
    tagBgClass: 'bg-emerald-500/15 text-emerald-300',
    anchor: { top: '44%', left: '2%' },
    visibilityClass: 'hidden sm:flex',
    desktopWander: {
      x: [0, 40, -30, 45, -20, 0],
      y: [0, 45, -50, 35, -40, 0],
      rotate: [0, -4, 5, -3, 4, 0],
      duration: 22,
      delay: 2.2,
    },
    mobileWander: {
      x: [0, 15, -12, 16, -8, 0],
      y: [0, 18, -20, 14, -15, 0],
      rotate: [0, -3, 4, -2, 3, 0],
      duration: 17,
      delay: 1.5,
    },
  },

  // 5. MongoDB & Supabase (Bottom Left, sweeping curves)
  {
    id: 'db-stack',
    name: 'MongoDB & Supabase',
    shortTag: 'Database',
    category: 'Data Storage',
    description: 'Mongoose schemas, cloud MongoDB Atlas, and relational Supabase with Row Level Security.',
    techKey: 'mongodb',
    accentColor: '#10B981',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]',
    tagBgClass: 'bg-emerald-500/15 text-emerald-300',
    anchor: { top: '62%', left: '4%' },
    visibilityClass: 'flex',
    desktopWander: {
      x: [0, 60, -45, 50, -30, 0],
      y: [0, -50, 35, -45, 30, 0],
      rotate: [0, 6, -5, 4, -4, 0],
      duration: 21,
      delay: 1.0,
    },
    mobileWander: {
      x: [0, 22, -18, 16, -12, 0],
      y: [0, -20, 16, -18, 12, 0],
      rotate: [0, 4, -3, 3, -3, 0],
      duration: 15,
      delay: 0.8,
    },
  },

  // 6. Python & Systems (Bottom Right, drifting upwards)
  {
    id: 'python-sys',
    name: 'Python & AI',
    shortTag: 'Systems',
    category: 'Diagnostics & AI',
    description: 'Hardware telemetry diagnostics, Python desktop GUIs, and intelligent system integration.',
    techKey: 'python',
    accentColor: '#F59E0B',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]',
    tagBgClass: 'bg-amber-500/15 text-amber-300',
    anchor: { top: '74%', right: '4%' },
    visibilityClass: 'flex',
    desktopWander: {
      x: [0, -55, 35, -45, 30, 0],
      y: [0, -40, 50, -35, 40, 0],
      rotate: [0, -5, 6, -4, 5, 0],
      duration: 23,
      delay: 2.8,
    },
    mobileWander: {
      x: [0, -20, 14, -16, 12, 0],
      y: [0, -16, 20, -14, 16, 0],
      rotate: [0, -3, 4, -3, 3, 0],
      duration: 17,
      delay: 2,
    },
  },

  // 7. Cloudflare & Edge (Top Center / Mid Upper)
  {
    id: 'cloudflare-edge',
    name: 'Cloudflare & Deploy',
    shortTag: 'Cloud Edge',
    category: 'Edge Infrastructure',
    description: 'Fast edge hosting, global DNS, serverless functions, and production continuous delivery.',
    techKey: 'cloudflare',
    accentColor: '#F97316',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]',
    tagBgClass: 'bg-orange-500/15 text-orange-300',
    anchor: { top: '4%', left: '42%' },
    visibilityClass: 'hidden md:flex',
    desktopWander: {
      x: [0, 45, -40, 30, -35, 0],
      y: [0, 35, -40, 45, -25, 0],
      rotate: [0, 4, -5, 4, -3, 0],
      duration: 24,
      delay: 3.2,
    },
    mobileWander: {
      x: [0, 16, -14, 12, -12, 0],
      y: [0, 14, -16, 18, -10, 0],
      rotate: [0, 3, -3, 3, -2, 0],
      duration: 18,
      delay: 2,
    },
  },

  // 8. Leaflet & GIS (Mid Right Center)
  {
    id: 'leaflet-gis',
    name: 'Leaflet GIS',
    shortTag: 'Mapping',
    category: 'Geospatial Radar',
    description: 'Real-time municipal incident mapping and GIS dispatch coordination.',
    techKey: 'leaflet',
    accentColor: '#84CC16',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(132,204,22,0.5)]',
    tagBgClass: 'bg-lime-500/15 text-lime-300',
    anchor: { top: '56%', right: '3%' },
    visibilityClass: 'hidden sm:flex',
    desktopWander: {
      x: [0, -40, 30, -35, 25, 0],
      y: [0, -45, 40, -30, 35, 0],
      rotate: [0, -4, 4, -3, 4, 0],
      duration: 20,
      delay: 1.8,
    },
    mobileWander: {
      x: [0, -15, 12, -14, 10, 0],
      y: [0, -18, 16, -12, 14, 0],
      rotate: [0, -3, 3, -2, 3, 0],
      duration: 16,
      delay: 1.2,
    },
  },
];
