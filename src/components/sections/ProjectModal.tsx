import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Check, Layers, Play, AlertTriangle } from 'lucide-react';
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Minimalist Modal Dialog */}
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 max-h-[88vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close Project Details"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Category & Status */}
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              Status: {project.status}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 mb-5">
            {project.subtitle}
          </p>

          {/* Stats Banner if present */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80 mb-6">
              {project.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              System Architecture & Overview
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
              Core Engineered Capabilities
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-zinc-400 mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Implementation Highlights */}
          {project.architecture && (
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-zinc-400" />
                <span>Technical Specifications</span>
              </h4>
              <ul className="space-y-1.5">
                {project.architecture.map((item, i) => (
                  <li key={i} className="text-xs font-mono text-zinc-400 pl-3 border-l border-zinc-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Under Development Toast Message if triggered inside modal */}
          {showUnderDev && (
            <div className="mb-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2.5 text-xs text-amber-200">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Interactive demo for <strong>{project.title}</strong> is currently under development.</span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800/80">
            <div className="text-xs text-zinc-400 font-mono">
              Role: <span className="text-zinc-200 font-medium">{project.role}</span>
            </div>

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              ) : (
                <button
                  onClick={() => setShowUnderDev(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors"
                >
                  <Play className="w-3 h-3 text-zinc-400" />
                  <span>Launch Live Demo</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
