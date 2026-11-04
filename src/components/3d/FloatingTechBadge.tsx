import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingTechItem } from '../../data/floatingTechData';
import { TechLogo } from './TechLogos';

interface FloatingTechBadgeProps {
  item: FloatingTechItem;
}

export const FloatingTechBadge: React.FC<FloatingTechBadgeProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute ${item.placementClass} ${item.visibilityClass} z-20 pointer-events-auto select-none`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: isHovered ? 1.08 : 1,
        y: isHovered ? 0 : item.motion.y,
        x: isHovered ? 0 : item.motion.x,
        rotate: isHovered ? 0 : item.motion.rotate,
      }}
      transition={{
        opacity: { duration: 0.7, delay: item.motion.delay },
        scale: { duration: 0.25, ease: 'easeOut' },
        y: isHovered
          ? { duration: 0.2 }
          : {
              duration: item.motion.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: item.motion.delay,
            },
        x: isHovered
          ? { duration: 0.2 }
          : {
              duration: item.motion.duration * 1.15,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
              delay: item.motion.delay * 1.2,
            },
        rotate: isHovered
          ? { duration: 0.2 }
          : {
              duration: item.motion.duration * 1.25,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#111116]/90 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/70 transition-all duration-300 group cursor-pointer ${item.glowClass} hover:border-white/30`}
      >
        {/* Subtle accent corner highlight */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 10% 10%, ${item.accentColor}18, transparent 70%)`,
          }}
        />

        {/* Official Technology Logo */}
        <div
          className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300"
          style={{
            borderColor: isHovered ? `${item.accentColor}66` : 'rgba(255,255,255,0.08)',
          }}
        >
          <TechLogo techKey={item.techKey} className="w-4 h-4" />
        </div>

        {/* Text Content */}
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white group-hover:text-white transition-colors tracking-tight font-mono">
              {item.name}
            </span>
            <span
              className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${item.tagBgClass}`}
            >
              {item.shortTag}
            </span>
          </div>
          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors font-sans">
            {item.category}
          </div>
        </div>

        {/* Interactive Detailed Tooltip (Revealed on hover) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2.5 w-60 p-3 rounded-xl bg-[#0e0e13]/95 backdrop-blur-2xl border border-white/15 shadow-2xl shadow-black/90 z-50 pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.accentColor }}
                />
                <span className="text-[11px] font-mono font-bold text-white">
                  {item.name}
                </span>
              </div>
              <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
