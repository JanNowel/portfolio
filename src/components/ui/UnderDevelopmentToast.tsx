import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, X, Github, ArrowUpRight } from 'lucide-react';

interface UnderDevelopmentToastProps {
  isOpen: boolean;
  projectName: string;
  githubUrl?: string;
  onClose: () => void;
}

export const UnderDevelopmentToast: React.FC<UnderDevelopmentToastProps> = ({
  isOpen,
  projectName,
  githubUrl,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[9999] max-w-sm w-[calc(100vw-3rem)] pointer-events-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#14141c]/95 border border-amber-500/30 p-4 shadow-2xl shadow-black/80 backdrop-blur-xl">
            {/* Top glowing accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600/30" />

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 animate-pulse" />
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                    Under Development
                  </h4>
                  <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Demo Notice
                  </span>
                </div>

                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  Live demo for <span className="font-semibold text-white">"{projectName}"</span> is currently under development.
                </p>

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-[11px] font-mono font-medium text-amber-300 hover:text-white transition-colors group"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Inspect source on GitHub</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Timed progress bar */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 4.5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-[2px] bg-amber-500/40"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

