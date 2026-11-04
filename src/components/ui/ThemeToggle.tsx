import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center overflow-hidden group focus:outline-none ${
        isDark
          ? 'bg-white/5 border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-cyan-300 shadow-sm shadow-cyan-500/10'
          : 'bg-zinc-100 border-zinc-200 hover:border-amber-500/50 hover:bg-amber-500/10 text-amber-600 shadow-sm shadow-amber-500/10'
      } ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Ambient background glow */}
      <span
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none ${
          isDark ? 'bg-cyan-400/15' : 'bg-amber-400/20'
        }`}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark-icon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center relative z-10"
          >
            <Moon className="w-4 h-4 fill-cyan-400/20 text-cyan-400" />
            <Sparkles className="w-2 h-2 text-cyan-300 absolute -top-1 -right-1 opacity-70 animate-pulse" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="flex items-center justify-center relative z-10"
          >
            <Sun className="w-4 h-4 text-amber-500 fill-amber-400/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute -top-0.5 -right-0.5 animate-ping opacity-60" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
