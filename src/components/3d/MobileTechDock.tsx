import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLOATING_TECH_ECOSYSTEM, FloatingTechItem } from '../../data/floatingTechData';
import { TechLogo } from './TechLogos';

export const MobileTechDock: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<FloatingTechItem | null>(null);

  // Top 5 core technologies for mobile dock
  const mobileTechs = FLOATING_TECH_ECOSYSTEM.slice(0, 5);

  return (
    <div className="flex sm:hidden flex-col items-center w-full mt-4 z-20">
      {/* Horizontal pill dock */}
      <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#111116]/90 border border-white/10 backdrop-blur-xl shadow-lg shadow-black/60 max-w-full overflow-x-auto">
        {mobileTechs.map((item) => {
          const isSelected = selectedTech?.id === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedTech(isSelected ? null : item)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 shrink-0 ${
                isSelected
                  ? 'bg-accent-violet/25 text-white border border-accent-violet/40 shadow-sm'
                  : 'bg-white/[0.03] text-zinc-300 border border-white/5 hover:bg-white/[0.08]'
              }`}
            >
              <TechLogo techKey={item.techKey} className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold">{item.name.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected technology detail preview */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mt-2.5 p-3 rounded-xl bg-[#0f0f14]/95 border border-white/15 shadow-xl text-center max-w-[280px]"
          >
            <div className="flex items-center justify-center gap-1.5 mb-1">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: selectedTech.accentColor }}
              />
              <span className="text-xs font-bold text-white font-mono">
                {selectedTech.name}
              </span>
              <span className="text-[9px] font-mono text-zinc-400">
                • {selectedTech.category}
              </span>
            </div>
            <p className="text-[11px] text-zinc-300 leading-snug">
              {selectedTech.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
