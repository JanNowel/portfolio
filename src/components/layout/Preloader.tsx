import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        // Smooth random increment
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          y: '-100%',
          opacity: 0,
          transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] },
        }}
        className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#080808] text-white"
      >
        {/* Ambient radial glow */}
        <div className="absolute w-96 h-96 rounded-full bg-accent-violet/10 blur-[120px] pointer-events-none" />

        <div className="relative flex flex-col items-center">
          {/* Animated JB Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-2xl bg-[#121216] border border-white/10 flex items-center justify-center shadow-2xl shadow-accent-violet/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 to-transparent" />
              <span className="text-4xl font-black font-mono tracking-tighter bg-gradient-to-br from-white via-purple-200 to-accent-violet bg-clip-text text-transparent">
                JB
              </span>
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-accent-violet to-accent-blue"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-sm font-semibold tracking-widest text-zinc-300 uppercase font-mono">
              Jhon Noel Baculpo
            </h1>
            <p className="text-xs text-zinc-400 mt-1">Full-Stack & Systems Developer</p>
          </motion.div>

          {/* Progress number */}
          <div className="mt-8 flex items-center gap-3">
            <div className="w-40 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-violet to-accent-blue"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-zinc-400 w-9 text-right tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
