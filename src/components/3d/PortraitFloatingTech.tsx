import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLOATING_TECH_ECOSYSTEM, FloatingTechItem } from '../../data/floatingTechData';
import { TechLogo } from './TechLogos';

export const PortraitFloatingTech: React.FC = () => {
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);

  // The 5 core quadrant badges that orbit directly around the developer portrait
  const portraitBadges: FloatingTechItem[] = FLOATING_TECH_ECOSYSTEM.filter(
    (item) =>
      item.id === 'mern-stack' ||
      item.id === 'mobile-cross' ||
      item.id === 'backend-node' ||
      item.id === 'database-stack' ||
      item.id === 'python-ai'
  );

  return (
    <>
      {portraitBadges.map((badge) => {
        const isHovered = activeTooltipId === badge.id;

        return (
          <motion.div
            key={badge.id}
            className={`absolute ${badge.placementClass} ${badge.visibilityClass} z-20 pointer-events-auto select-none`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.08 : 1,
              y: isHovered ? 0 : badge.motion.y,
              x: isHovered ? 0 : badge.motion.x,
              rotate: isHovered ? 0 : badge.motion.rotate,
            }}
            transition={{
              opacity: { duration: 0.8, delay: badge.motion.delay },
              scale: { duration: 0.25, ease: 'easeOut' },
              y: isHovered
                ? { duration: 0.2 }
                : {
                    duration: badge.motion.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: badge.motion.delay,
                  },
              x: isHovered
                ? { duration: 0.2 }
                : {
                    duration: badge.motion.duration * 1.15,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: badge.motion.delay * 1.2,
                  },
              rotate: isHovered
                ? { duration: 0.2 }
                : {
                    duration: badge.motion.duration * 1.25,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  },
            }}
            onMouseEnter={() => setActiveTooltipId(badge.id)}
            onMouseLeave={() => setActiveTooltipId(null)}
          >
            <div
              className={`relative flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#111116]/95 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/80 transition-all duration-300 group cursor-pointer ${badge.glowClass} hover:border-white/35`}
            >
              {/* Subtle ambient gradient flare on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${badge.accentColor}25, transparent 70%)`,
                }}
              />

              {/* Official Tech Logo */}
              <div
                className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0"
                style={{
                  borderColor: isHovered ? `${badge.accentColor}66` : 'rgba(255,255,255,0.08)',
                }}
              >
                <TechLogo techKey={badge.techKey} className="w-4 h-4" />
              </div>

              {/* Text Info */}
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white group-hover:text-white transition-colors tracking-tight font-mono whitespace-nowrap">
                    {badge.name}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.2 rounded whitespace-nowrap ${badge.tagBgClass}`}
                  >
                    {badge.shortTag}
                  </span>
                </div>
                <div className="text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors font-sans whitespace-nowrap">
                  {badge.category}
                </div>
              </div>

              {/* Interactive Tooltip Card on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.92 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2.5 w-60 p-3 rounded-xl bg-[#0d0d12]/98 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/95 z-50 pointer-events-none text-left"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: badge.accentColor }}
                      />
                      <span className="text-[11px] font-mono font-bold text-white">
                        {badge.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed font-sans">
                      {badge.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};
