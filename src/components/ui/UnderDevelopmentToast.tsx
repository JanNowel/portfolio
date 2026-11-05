import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, X, Github, ArrowUpRight } from 'lucide-react';

interface UnderDevelopmentToastProps {
  isOpen?: boolean;
  projectName?: string;
  projectTitle?: string;
  githubUrl?: string;
  onClose: () => void;
}

export const UnderDevelopmentToast: React.FC<UnderDevelopmentToastProps> = ({
  isOpen = true,
  projectName,
  projectTitle,
  githubUrl,
  onClose,
}) => {
  const name = projectTitle || projectName || 'Selected Project';

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-[9999] max-w-sm w-[calc(100vw-2rem)] pointer-events-auto"
        >
          <div className="relative rounded-xl bg-zinc-950 border border-zinc-700 p-4 shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0 pr-2">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-200">
                    Under Development
                  </h4>
                  <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-800">
                    Notice
                  </span>
                </div>

                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Interactive demo for <strong className="text-zinc-200 font-medium">"{name}"</strong> is currently in development.
                </p>

                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-lg text-zinc-500 hover:text-zinc-300 transition-colors"
                aria-label="Close Toast"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
