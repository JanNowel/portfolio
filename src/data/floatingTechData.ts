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
    | 'react-native'
    | 'python'
    | 'mongodb'
    | 'supabase'
    | 'git'
    | 'docker'
    | 'cloudflare'
    | 'leaflet';
  accentColor: string; // Hex color code for glow & borders
  glowClass: string;
  borderClass: string;
  tagBgClass: string;
  // Positioning classes relative to anchor
  placementClass: string;
  visibilityClass: string;
  // Animation path parameters
  motion: {
    y: number[];
    x: number[];
    rotate: number[];
    duration: number;
    delay: number;
  };
}

export const FLOATING_TECH_ECOSYSTEM: FloatingTechItem[] = [
  // 1. TOP-LEFT OF PORTRAIT: MERN Stack
  {
    id: 'mern-stack',
    name: 'MERN Stack',
    shortTag: 'Full-Stack',
    category: 'Full-Stack Web Architecture',
    description: 'MongoDB, Express, React, and Node.js end-to-end applications with TypeScript.',
    techKey: 'mern',
    accentColor: '#8B5CF6',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(139,92,246,0.35)]',
    borderClass: 'border-purple-500/30 group-hover:border-purple-400',
    tagBgClass: 'bg-purple-500/10 text-purple-300',
    placementClass: '-top-6 -left-8 lg:-left-16 xl:-left-20',
    visibilityClass: 'hidden sm:flex',
    motion: {
      y: [0, -8, 0],
      x: [0, 4, 0],
      rotate: [0, -1.5, 0],
      duration: 6.2,
      delay: 0.1,
    },
  },

  // 2. TOP-RIGHT OF PORTRAIT: Flutter & React Native
  {
    id: 'mobile-cross',
    name: 'Flutter & Native',
    shortTag: 'Mobile Apps',
    category: 'Cross-Platform Mobile',
    description: 'High-performance Android and iOS mobile applications built with Flutter, Dart & React Native.',
    techKey: 'flutter',
    accentColor: '#38BDF8',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]',
    borderClass: 'border-cyan-500/30 group-hover:border-cyan-400',
    tagBgClass: 'bg-cyan-500/10 text-cyan-300',
    placementClass: '-top-5 -right-6 lg:-right-14 xl:-right-16',
    visibilityClass: 'hidden sm:flex',
    motion: {
      y: [0, 9, 0],
      x: [0, -3, 0],
      rotate: [0, 1.8, 0],
      duration: 6.8,
      delay: 0.4,
    },
  },

  // 3. MIDDLE-RIGHT OF PORTRAIT: Node.js & Express
  {
    id: 'backend-node',
    name: 'Node.js & Express',
    shortTag: 'Backend APIs',
    category: 'Backend & REST APIs',
    description: 'Event-driven server runtimes, RESTful endpoints, JWT auth, and micro-services.',
    techKey: 'nodejs',
    accentColor: '#22C55E',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]',
    borderClass: 'border-emerald-500/30 group-hover:border-emerald-400',
    tagBgClass: 'bg-emerald-500/10 text-emerald-300',
    placementClass: 'top-1/3 -right-10 lg:-right-20 xl:-right-24',
    visibilityClass: 'hidden md:flex',
    motion: {
      y: [0, -7, 0],
      x: [0, -4, 0],
      rotate: [0, -1.2, 0],
      duration: 7.4,
      delay: 0.6,
    },
  },

  // 4. BOTTOM-LEFT OF PORTRAIT: MongoDB & Supabase
  {
    id: 'database-stack',
    name: 'MongoDB & Supabase',
    shortTag: 'Databases',
    category: 'Data Storage & Persistence',
    description: 'NoSQL document modeling with Mongoose and relational PostgreSQL with Supabase RLS.',
    techKey: 'mongodb',
    accentColor: '#10B981',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]',
    borderClass: 'border-emerald-500/30 group-hover:border-emerald-400',
    tagBgClass: 'bg-emerald-500/10 text-emerald-300',
    placementClass: '-bottom-6 -left-6 lg:-left-14 xl:-left-18',
    visibilityClass: 'hidden sm:flex',
    motion: {
      y: [0, 7, 0],
      x: [0, 3, 0],
      rotate: [0, 1.4, 0],
      duration: 6.5,
      delay: 0.3,
    },
  },

  // 5. BOTTOM-RIGHT OF PORTRAIT: Python & AI Integration
  {
    id: 'python-ai',
    name: 'Python & AI Ops',
    shortTag: 'Systems & AI',
    category: 'Diagnostics & AI Systems',
    description: 'Native desktop utilities, computer telemetry, automation scripts, and LLM integrations.',
    techKey: 'python',
    accentColor: '#F59E0B',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]',
    borderClass: 'border-amber-500/30 group-hover:border-amber-400',
    tagBgClass: 'bg-amber-500/10 text-amber-300',
    placementClass: '-bottom-5 -right-8 lg:-right-16 xl:-right-20',
    visibilityClass: 'hidden sm:flex',
    motion: {
      y: [0, -8, 0],
      x: [0, -3, 0],
      rotate: [0, -1.5, 0],
      duration: 7.1,
      delay: 0.7,
    },
  },

  // 6. HERO CANVAS PERIMETER (Top Left Corner on Wide Screens): React & TypeScript
  {
    id: 'frontend-react',
    name: 'React & TypeScript',
    shortTag: 'UI Framework',
    category: 'Frontend Engineering',
    description: 'Component architecture, modern hooks, type safety, and fluid reactive state systems.',
    techKey: 'react',
    accentColor: '#06B6D4',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]',
    borderClass: 'border-cyan-500/30 group-hover:border-cyan-400',
    tagBgClass: 'bg-cyan-500/10 text-cyan-300',
    placementClass: 'top-14 left-4 xl:left-8',
    visibilityClass: 'hidden xl:flex',
    motion: {
      y: [0, 6, 0],
      x: [0, 4, 0],
      rotate: [0, 1.0, 0],
      duration: 8.0,
      delay: 0.2,
    },
  },

  // 7. HERO CANVAS PERIMETER (Bottom Right Edge on Wide Screens): Git & Cloudflare
  {
    id: 'devops-tools',
    name: 'Cloudflare & Git',
    shortTag: 'Deploy & Edge',
    category: 'Cloud Infrastructure',
    description: 'Edge network hosting, serverless functions, version control, and GitHub Actions CI/CD.',
    techKey: 'cloudflare',
    accentColor: '#F97316',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]',
    borderClass: 'border-orange-500/30 group-hover:border-orange-400',
    tagBgClass: 'bg-orange-500/10 text-orange-300',
    placementClass: 'bottom-16 right-6 xl:right-12',
    visibilityClass: 'hidden xl:flex',
    motion: {
      y: [0, -7, 0],
      x: [0, -4, 0],
      rotate: [0, -1.0, 0],
      duration: 7.8,
      delay: 0.5,
    },
  },

  // 8. HERO CANVAS PERIMETER (Bottom Center / Leaflet GIS): eBantay Real-Time GIS
  {
    id: 'gis-realtime',
    name: 'Leaflet & GIS',
    shortTag: 'Geospatial',
    category: 'Mapping & Real-Time',
    description: 'Interactive geospatial dispatch maps, heatmaps, and situational awareness triage.',
    techKey: 'leaflet',
    accentColor: '#84CC16',
    glowClass: 'group-hover:shadow-[0_0_25px_rgba(132,204,22,0.35)]',
    borderClass: 'border-lime-500/30 group-hover:border-lime-400',
    tagBgClass: 'bg-lime-500/10 text-lime-300',
    placementClass: 'top-1/2 -translate-y-1/2 left-2 xl:left-6',
    visibilityClass: 'hidden 2xl:flex',
    motion: {
      y: [0, 8, 0],
      x: [0, 2, 0],
      rotate: [0, 1.2, 0],
      duration: 8.4,
      delay: 0.9,
    },
  },
];
