import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Play, ArrowRight, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectModal } from './ProjectModal';
import { ProjectVisualPreview } from './ProjectVisualPreview';
import { UnderDevelopmentToast } from '../ui/UnderDevelopmentToast';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastProject, setToastProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Mobile', 'AI & System', 'Desktop'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleDemoClick = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setToastProject(project);
    }
  };

  return (
    <section id="projects" className="pt-4 border-t border-zinc-900">
      {/* Section Header */}
      <SectionHeading
        badge="02 — projects"
        title="Featured Projects."
        titleHighlight="Built for Impact."
        subtitle="Showcasing production-ready full-stack applications, mobile apps, and intelligent system utilities."
        actionText="All Projects"
        onActionClick={() => setActiveCategory('All')}
      />

      {/* Minimalist Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
              activeCategory === cat
                ? 'bg-white text-zinc-950 font-medium'
                : 'text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Minimalist Project Cards Stack matching Reference Style */}
      <motion.div
        layout
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/90 hover:border-zinc-700 transition-all p-5 sm:p-7 group cursor-pointer"
              >
                {/* Top Bar: Icon/Monogram + Title + Meta Tags */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5 text-zinc-300" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-mono text-white group-hover:text-zinc-100 transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                        {project.category} • {project.status}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                        aria-label="View Source Code"
                        title="View Source Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={(e) => handleDemoClick(e, project)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        project.liveUrl
                          ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700'
                          : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                      }`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Demo</span>
                      {project.liveUrl && <ExternalLink className="w-3 h-3 ml-0.5" />}
                    </button>
                  </div>
                </div>

                {/* Architecture Preview Frame */}
                <div className="rounded-xl overflow-hidden border border-zinc-800/80 mb-4 bg-zinc-950">
                  <ProjectVisualPreview projectId={project.id} />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Solid White Full-Width CTA matching Reference Video */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-sm"
                >
                  <span>View project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Under Development Toast */}
      {toastProject && (
        <UnderDevelopmentToast
          projectTitle={toastProject.title}
          onClose={() => setToastProject(null)}
        />
      )}
    </section>
  );
};
