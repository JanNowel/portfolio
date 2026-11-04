import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Terminal, Cpu, Database, GitBranch } from 'lucide-react';

interface FloatingItem {
  label: string;
  sub: string;
  icon: React.ReactNode;
  position: string;
  delay: number;
  duration: number;
  yOffset: number;
}

export const FloatingTechElements: React.FC = () => {
  // Only display on large desktop displays (xl / 2xl) so they never crowd or overlap buttons and text on mobile/tablet/laptops!
  const items: FloatingItem[] = [
    {
      label: 'MERN & TS',
      sub: 'Full-Stack Web',
      icon: <Code2 className="w-4 h-4 text-accent-violet" />,
      position: 'hidden xl:flex top-16 left-6 2xl:left-12',
      delay: 0.2,
      duration: 6,
      yOffset: 12,
    },
    {
      label: 'Flutter & Native',
      sub: 'Cross-Platform Mobile',
      icon: <Smartphone className="w-4 h-4 text-accent-blue" />,
      position: 'hidden xl:flex top-20 right-6 2xl:right-16',
      delay: 0.6,
      duration: 7,
      yOffset: -14,
    },
    {
      label: 'Python & Systems',
      sub: 'Diagnostic & Scripts',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      // Positioned safely in bottom perimeter away from View Projects / CTA buttons
      position: 'hidden 2xl:flex bottom-16 left-6 2xl:left-12',
      delay: 0.4,
      duration: 6.5,
      yOffset: 10,
    },
    {
      label: 'Leaflet & AI Ops',
      sub: 'eBantay Incident GIS',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      position: 'hidden xl:flex bottom-16 right-6 2xl:right-16',
      delay: 0.8,
      duration: 7.5,
      yOffset: -12,
    },
    {
      label: 'Git & Cloudflare',
      sub: 'Modern Workflows',
      icon: <GitBranch className="w-4 h-4 text-orange-400" />,
      position: 'hidden 2xl:flex top-1/2 -translate-y-1/2 left-4',
      delay: 1.0,
      duration: 8,
      yOffset: 8,
    },
    {
      label: 'MongoDB & Supabase',
      sub: 'Scalable Data Stores',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      position: 'hidden 2xl:flex top-1/2 -translate-y-1/2 right-4',
      delay: 1.2,
      duration: 7,
      yOffset: -10,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} pointer-events-none`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, item.yOffset, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: item.delay },
            scale: { duration: 0.8, delay: item.delay },
            y: {
              duration: item.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: item.delay,
            },
          }}
        >
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#111114]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/60 cursor-default select-none">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              {item.icon}
            </div>
            <div>
              <div className="text-xs font-semibold text-white/95 flex items-center gap-1.5 font-mono">
                {item.label}
              </div>
              <div className="text-[10px] text-zinc-400 tracking-wide">{item.sub}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
