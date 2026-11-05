import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, ThemeMode } from '../../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

interface ModeOption {
  value: ThemeMode;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  getRotation: (isSelected: boolean) => number;
}

const MODES: ModeOption[] = [
  {
    value: 'light',
    label: 'Light',
    icon: Sun,
    getRotation: (isSelected) => (isSelected ? 0 : 45),
  },
  {
    value: 'system',
    label: 'System',
    icon: Monitor,
    getRotation: () => 0,
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: Moon,
    getRotation: (isSelected) => (isSelected ? 0 : -25),
  },
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { mode, setMode } = useTheme();

  const handleSelect = (targetMode: ThemeMode, e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    setMode(targetMode, origin);
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={`inline-flex items-center p-0.5 rounded-full bg-zinc-200/80 dark:bg-[#121215] border border-zinc-300/80 dark:border-zinc-800/80 shadow-inner select-none transition-colors duration-200 ${className}`}
    >
      {MODES.map((item) => {
        const isSelected = mode === item.value;
        const IconComponent = item.icon;

        return (
          <motion.button
            key={item.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleSelect(item.value, e)}
            className={`relative p-1.5 sm:px-2 sm:py-1 rounded-full text-xs font-mono transition-colors duration-150 flex items-center justify-center focus:outline-none ${
              isSelected
                ? 'text-zinc-950 dark:text-white font-medium'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
            aria-label={`${item.label} mode`}
            title={`${item.label} Mode`}
          >
            {isSelected && (
              <motion.div
                layoutId="active-theme-pill"
                className="absolute inset-0 rounded-full bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700/60 shadow-sm"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <motion.span
              className="relative z-10 flex items-center justify-center"
              animate={{
                rotate: item.getRotation(isSelected),
                scale: isSelected ? 1.05 : 0.85,
              }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <IconComponent className="w-3.5 h-3.5 shrink-0" />
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
};
