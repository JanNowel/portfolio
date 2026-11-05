import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, FileText } from 'lucide-react';
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
          className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close CV Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-mono font-semibold text-zinc-200 text-xs">
              CV
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">
                Curriculum Vitae Preview
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          {/* Notice */}
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 mb-6 flex items-start gap-2.5">
            <FileText className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
            <span>
              Digital preview of Jhon Noel's developer CV. Use the print action to generate a clean PDF or email directly to request reference transcripts.
            </span>
          </div>

          {/* Resume Content Sheet */}
          <div className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-5 sm:p-7 space-y-6 text-zinc-300 text-xs sm:text-sm">
            {/* Top Resume Header */}
            <div className="border-b border-zinc-800 pb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-zinc-100">{PERSONAL_INFO.name}</h4>
              <p className="text-xs font-mono text-zinc-400 mt-0.5">
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
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-1.5">
                Professional Summary
              </h5>
              <p className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                Software developer with demonstrated experience in full-stack web and cross-platform mobile application development. Focused on engineering clean, maintainable software and practical digital experiences utilizing modern stacks (MERN, TypeScript, Flutter, Python, and Supabase).
              </p>
            </div>

            {/* Featured Projects */}
            <div>
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-2.5">
                Featured Projects
              </h5>
              <div className="space-y-2.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                    <div className="flex items-center justify-between font-semibold text-zinc-200 text-xs sm:text-sm">
                      <span>{proj.title}</span>
                      <span className="text-[10px] font-mono text-zinc-400 font-normal">
                        {proj.technologies.slice(0, 3).join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h5 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-2">
                Core Competencies
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-400 font-mono">
                <div>• Frontend: React, TypeScript, React Native, Flutter</div>
                <div>• Backend: Node.js, Express, REST APIs, Python</div>
                <div>• Databases: MongoDB, Supabase, PostgreSQL, SQLite</div>
                <div>• Tools: Git, GitHub, VS Code, Postman, Docker</div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between gap-3 pt-5 mt-6 border-t border-zinc-800">
            <span className="text-xs font-mono text-zinc-400">
              Format: Standard Developer Resume
            </span>

            <div className="flex items-center gap-2.5">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-zinc-400" />
                <span>Print / Save PDF</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=CV%20Inquiry%20-%20Jhon%20Noel%20Baculpo`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Jhon</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
