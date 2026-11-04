import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../../data/portfolioData';
import { modalVariants } from '../../utils/animations';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-3xl rounded-2xl bg-[#121217] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/90 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close CV Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center font-mono font-bold text-accent-violet">
              CV
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-zinc-300 mb-6 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-accent-violet shrink-0 mt-0.5" />
            <span>
              This is a digital preview of Jhon Noel's developer CV. You can print to PDF or download directly. To link an existing PDF file, place <code className="text-accent-violet-light font-mono">cv.pdf</code> into the <code className="text-accent-violet-light font-mono">public/</code> directory.
            </span>
          </div>

          {/* Resume Content Sheet */}
          <div className="bg-[#0b0b0e] border border-white/[0.08] rounded-xl p-6 sm:p-8 space-y-6 text-zinc-300 text-xs sm:text-sm">
            {/* Top Resume Header */}
            <div className="border-b border-white/[0.08] pb-4">
              <h4 className="text-2xl font-black text-white">{PERSONAL_INFO.name}</h4>
              <p className="text-xs font-mono text-accent-violet-light mt-0.5">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-zinc-400 font-mono">
                <span>Email: {PERSONAL_INFO.email}</span>
                <span>GitHub: github.com/JanNowel</span>
                <span>Location: {PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                Professional Summary
              </h5>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                Aspiring software developer with demonstrated experience in full-stack web and cross-platform mobile application development. Passionate about engineering clean, maintainable software and practical digital experiences utilizing modern stacks (MERN, TypeScript, Flutter, Python, and Supabase).
              </p>
            </div>

            {/* Featured Projects */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
                Key Software Projects
              </h5>
              <div className="space-y-3">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center justify-between font-bold text-white text-xs sm:text-sm">
                      <span>{proj.title}</span>
                      <span className="text-[10px] font-mono text-zinc-400 font-normal">
                        {proj.technologies.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-2">
                Core Competencies
              </h5>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Frontend: React, TypeScript, React Native, Flutter, HTML/CSS</div>
                <div>• Backend: Node.js, Express, REST APIs, Python</div>
                <div>• Databases: MongoDB, Mongoose, Supabase, SQLite</div>
                <div>• Tools: Git, GitHub, VS Code, Postman, Docker</div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 mt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Inquiry%20-%20Jhon%20Noel%20Baculpo`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Updated CV File</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
