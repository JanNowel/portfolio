import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Check, Layers, Code2, Play, AlertTriangle } from 'lucide-react';
import { Project } from '../../types';
import { modalVariants } from '../../utils/animations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showUnderDev, setShowUnderDev] = useState(false);

  useEffect(() => {
    setShowUnderDev(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-3xl rounded-2xl bg-[#121217] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium"
              style={{
                backgroundColor: `${project.accentColor}18`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}33`,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">Status: {project.status}</span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-accent-violet-light mt-1 mb-6">
            {project.subtitle}
          </p>

          {/* Quick Metrics / Stats Banner if present */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
              {project.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{s.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Project Overview */}
          <div className="space-y-4 mb-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Project Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-accent-violet" />
              <span>Key Features & Functional Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-zinc-300 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          {project.architecture && (
            <div className="mb-6">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-accent-blue" />
                <span>Technical Architecture</span>
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((arch, index) => (
                  <li key={index} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium font-mono text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4 ml-0.5" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowUnderDev(!showUnderDev)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold font-mono text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all duration-200 group"
                  title="Click to view live demo status"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Live Demo</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500/20 border border-amber-500/30 text-amber-200">
                    Under Development
                  </span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>

          {/* Under Development Banner Notice */}
          <AnimatePresence>
            {showUnderDev && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 overflow-hidden"
              >
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                <div className="flex-1 text-xs leading-relaxed">
                  <div className="font-bold text-amber-300 font-mono uppercase tracking-wide mb-0.5">
                    Live Demo Under Development
                  </div>
                  <p className="text-zinc-300">
                    The live web/cloud deployment for <strong className="text-white">{project.title}</strong> is currently being prepared. Full source code, architecture schema, and documentation are accessible via the GitHub repository.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
