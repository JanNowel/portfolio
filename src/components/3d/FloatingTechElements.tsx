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
  const items: FloatingItem[] = [
    {
      label: 'MERN & TS',
      sub: 'Full-Stack Web',
      icon: <Code2 className="w-4 h-4 text-accent-violet" />,
      position: 'top-12 left-4 md:left-8 lg:left-12',
      delay: 0.2,
      duration: 6,
      yOffset: 14,
    },
    {
      label: 'Flutter & Native',
      sub: 'Cross-Platform Mobile',
      icon: <Smartphone className="w-4 h-4 text-accent-blue" />,
      position: 'top-28 right-4 md:right-8 lg:right-16',
      delay: 0.6,
      duration: 7,
      yOffset: -16,
    },
    {
      label: 'Python & Systems',
      sub: 'Diagnostic & Scripts',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      position: 'bottom-28 left-6 md:left-16',
      delay: 0.4,
      duration: 6.5,
      yOffset: 12,
    },
    {
      label: 'Leaflet & AI Ops',
      sub: 'eBantay Incident GIS',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      position: 'bottom-20 right-6 md:right-20',
      delay: 0.8,
      duration: 7.5,
      yOffset: -14,
    },
    {
      label: 'Git & Cloudflare',
      sub: 'Modern Workflows',
      icon: <GitBranch className="w-4 h-4 text-orange-400" />,
      position: 'hidden xl:flex top-1/2 -translate-y-1/2 left-2',
      delay: 1.0,
      duration: 8,
      yOffset: 10,
    },
    {
      label: 'MongoDB & Supabase',
      sub: 'Scalable Data Stores',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
      position: 'hidden xl:flex top-1/2 -translate-y-1/2 right-2',
      delay: 1.2,
      duration: 7,
      yOffset: -12,
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.position} pointer-events-auto`}
          initial={{ opacity: 0, scale: 0.8 }}
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
          whileHover={{ scale: 1.08, y: -4 }}
        >
          <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#111114]/85 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 hover:border-accent-violet/40 transition-colors duration-300 group cursor-default">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-accent-violet/10 group-hover:border-accent-violet/20 transition-colors">
              {item.icon}
            </div>
            <div>
              <div className="text-xs font-semibold text-white/90 group-hover:text-white flex items-center gap-1.5 font-mono">
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
