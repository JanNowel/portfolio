import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingTechItem } from '../../data/floatingTechData';
import { TechLogo } from './TechLogos';

interface FloatingTechBadgeProps {
  item: FloatingTechItem;
}

export const FloatingTechBadge: React.FC<FloatingTechBadgeProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const wander = isMobile ? item.mobileWander : item.desktopWander;

  return (
    <motion.div
      className={`absolute ${item.initialPlacement} ${item.visibilityClass} z-10 pointer-events-auto select-none`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.85, 1, 0.9, 1],
        scale: isHovered ? 1.1 : 1,
        x: isHovered ? 0 : wander.x,
        y: isHovered ? 0 : wander.y,
        rotate: isHovered ? 0 : wander.rotate,
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, repeatType: 'reverse' },
        scale: { duration: 0.25, ease: 'easeOut' },
        x: isHovered
          ? { duration: 0.2 }
          : {
              duration: wander.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: wander.delay,
            },
        y: isHovered
          ? { duration: 0.2 }
          : {
              duration: wander.duration * 1.1,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: wander.delay * 1.2,
            },
        rotate: isHovered
          ? { duration: 0.2 }
          : {
              duration: wander.duration * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: wander.delay * 0.5,
            },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div
        className={`relative flex items-center gap-1.5 sm:gap-2.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#101016]/85 backdrop-blur-md border border-white/10 shadow-lg shadow-black/60 transition-all duration-300 group cursor-pointer ${item.glowClass} hover:border-white/40 hover:bg-[#14141e]/95`}
      >
        {/* Ambient radial flare on hover */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 10% 10%, ${item.accentColor}30, transparent 70%)`,
          }}
        />

        {/* Tech Icon */}
        <div
          className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center p-1 sm:p-1.5 group-hover:scale-110 transition-transform duration-300 shrink-0"
          style={{
            borderColor: isHovered ? `${item.accentColor}66` : 'rgba(255,255,255,0.08)',
          }}
        >
          <TechLogo techKey={item.techKey} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>

        {/* Text Details */}
        <div className="text-left">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="text-[10px] sm:text-xs font-bold text-white group-hover:text-white transition-colors tracking-tight font-mono whitespace-nowrap">
              {item.name}
            </span>
            <span
              className={`text-[8px] sm:text-[9px] font-mono px-1 sm:px-1.5 py-0.2 rounded whitespace-nowrap ${item.tagBgClass}`}
            >
              {item.shortTag}
            </span>
          </div>
          <div className="text-[9px] sm:text-[10px] text-zinc-400 group-hover:text-zinc-300 transition-colors font-sans whitespace-nowrap hidden xs:block">
            {item.category}
          </div>
        </div>

        {/* Interactive Detailed Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.92 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-0 mt-2 w-52 sm:w-60 p-2.5 sm:p-3 rounded-xl bg-[#0d0d12]/98 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/95 z-50 pointer-events-none text-left"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.accentColor }}
                />
                <span className="text-[11px] font-mono font-bold text-white">
                  {item.name}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-300 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
