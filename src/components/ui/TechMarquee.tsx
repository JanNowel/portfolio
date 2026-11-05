import React from 'react';

interface TechItem {
  name: string;
  category: string;
  svg: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    svg: (
      <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Language',
    svg: (
      <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.75 14.5h-2.1v-7h-2.5V5.5h7.1v2h-2.5v7zm4.35.15c.95 0 1.7-.3 2.25-.85.55-.55.85-1.3.85-2.2v-.1c0-.95-.3-1.7-.85-2.2-.55-.55-1.3-.85-2.25-.85-.9 0-1.6.25-2.1.8-.5.55-.75 1.25-.75 2.15v.1c0 .95.25 1.7.8 2.25.5.55 1.2.9 2.05.9z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Framework',
    svg: (
      <svg className="w-3.5 h-3.5 text-zinc-100" viewBox="0 0 180 180" fill="currentColor">
        <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <path d="M149.508 157.438L69.1478 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="currentColor" />
        <rect fill="currentColor" height="72" width="12" x="115" y="54" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Backend',
    svg: (
      <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2zm0 2.3L4.5 8.7v8.6l7.5 4.4 7.5-4.4V8.7L12 4.3z" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    category: 'Backend',
    svg: (
      <svg className="w-3.5 h-3.5 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 18.5h-5.2l-3-4.5-3 4.5H7.5l4.8-7.1-4.6-6.9h5.3l2.8 4.3 2.8-4.3h5.3l-4.6 6.9 4.7 7.1zM4 4.5h2v14H4v-14z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    category: 'Database',
    svg: (
      <svg className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0s-5.6 4.9-5.6 11.2c0 4.8 3.5 8.8 5.6 12.8 2.1-4 5.6-8 5.6-12.8C17.6 4.9 12 0 12 0zm.4 18.5c-.3 0-.5-.4-.5-.9 0-3.3 1.8-6.1 1.8-8.7 0-.3.2-.5.5-.5s.5.2.5.5c0 2.6-1.8 5.4-1.8 8.7 0 .5-.2.9-.5.9z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    svg: (
      <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    svg: (
      <svg className="w-3.5 h-3.5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6 15.7L2.3 12 14.314 24h7.37L9.7 12 6 15.7zm8.314 4.15L18.464 24H22l-4.15-4.15H14.314z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Language',
    svg: (
      <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 1c-5.2 0-4.9 2.3-4.9 2.3l.1 2.3h4.9v.7H5c-3.3 0-3.9 2.1-3.9 4.3 0 2.2.8 4.2 3.9 4.2h1.6v-2.3c0-1.8 1.5-3.3 3.3-3.3h5V7c0-2-1.7-6-3-6zm-1.8 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm2 20.3c5.2 0 4.9-2.3 4.9-2.3l-.1-2.3h-4.9v-.7h6.9c3.3 0 3.9-2.1 3.9-4.3 0-2.2-.8-4.2-3.9-4.2h-1.6v2.3c0 1.8-1.5 3.3-3.3 3.3h-5V17c0 2 1.7 6 3 6zm1.8-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'Backend / DB',
    svg: (
      <svg className="w-3.5 h-3.5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.53-.19L1.47 13.11a.3.3 0 0 0 .23.49H11v9.054a.3.3 0 0 0 .53.19l10-13a.3.3 0 0 0-.168-.49z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'DevOps',
    svg: (
      <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 10.5c-.3-.2-1.3-.7-2.7-.4-.3-1.1-1.1-1.9-2.2-2.3l-.5-.2-.3.4c-.7 1.1-.9 2.4-.4 3.7-.8.5-1.9.7-3.1.7H2c-.6 0-1 .4-1 1 0 2.2.7 4.2 2 5.7C4.7 20.8 7.3 22 10.3 22c5.8 0 10.4-3.8 11.4-9.3.8-.3 1.5-.9 1.8-1.5l.2-.4-.7-.3zM4 11h2v2H4v-2zm3 0h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6-3h2v2H7V8zm3 0h2v2h-2V8zm3 0h2v2h-2V8zm-3-3h2v2h-2V5z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    category: 'VCS',
    svg: (
      <svg className="w-3.5 h-3.5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.6 10.9L13.1.4c-.5-.5-1.4-.5-1.9 0L8.7 2.9l3.5 3.5c.4-.1.8-.1 1.2.1.8.4 1.1 1.3.8 2.1l3.3 3.3c.8-.3 1.7 0 2.1.8.6.9.4 2.2-.6 2.7-.9.6-2.2.4-2.7-.6-.3-.6-.3-1.3 0-1.8L13 9.7v5.6c.3.2.5.5.6.8.6.9.4 2.2-.6 2.7-.9.6-2.2.4-2.7-.6-.6-.9-.4-2.2.6-2.7.3-.2.7-.3 1-.3V9.5c-.3 0-.7-.1-1-.3-.6-.4-.9-1.1-.8-1.8L6.7 3.9.4 10.2c-.5.5-.5 1.4 0 1.9l10.5 10.5c.5.5 1.4.5 1.9 0l10.8-10.8c.5-.5.5-1.4 0-1.9z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    svg: (
      <svg className="w-3.5 h-3.5 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93v-3.48c1.36-.26 2.44-1.3 2.76-2.65h1.22c-.39 2.5-2.22 4.47-3.98 6.13zm-2-13.86v3.48c-1.36.26-2.44 1.3-2.76 2.65H7.02c.39-2.5 2.22-4.47 3.98-6.13z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    category: 'API Testing',
    svg: (
      <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.8 7.3l-2.6 4.5h-2.1l1.7-3-2.4-1.5 5.4 0zm-7.6 9.4l-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
      </svg>
    ),
  },
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-3 border-y border-zinc-900 group select-none">
      {/* Subtle edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-black dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-black dark:from-black to-transparent z-10 pointer-events-none" />

      {/* Continuously Animated Infinite Track */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
        {/* Track 1 */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4">
          {TECH_ITEMS.map((tech) => (
            <div
              key={tech.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0c0e] border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 cursor-default shrink-0 text-xs font-mono"
            >
              <span className="shrink-0 flex items-center justify-center">{tech.svg}</span>
              <span className="font-medium tracking-tight text-[11px] sm:text-xs">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Track 2 (Exact duplicate for seamless infinite loop with zero visible resets) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 pr-3 sm:pr-4" aria-hidden="true">
          {TECH_ITEMS.map((tech) => (
            <div
              key={`${tech.name}-dup`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0c0c0e] border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 cursor-default shrink-0 text-xs font-mono"
            >
              <span className="shrink-0 flex items-center justify-center">{tech.svg}</span>
              <span className="font-medium tracking-tight text-[11px] sm:text-xs">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
