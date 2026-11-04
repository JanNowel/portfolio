import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, Eye, Play } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';
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

  return (
    <section id="projects" className="relative py-28 bg-[#080808] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-violet/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-accent-blue/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-6">
          <SectionHeading
            badge="// 02. FEATURED PROJECTS"
            title="Engineered Solutions."
            titleHighlight="Built for Impact."
            subtitle="Showcasing real-world full-stack web platforms, cross-platform mobile apps, AI-powered municipal tooling, and system diagnostic utilities."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-accent-violet/20 text-white border border-accent-violet/30 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={6}
                  glareOpacity={0.15}
                  onClick={() => setSelectedProject(project)}
                  className="h-full bg-[#111116]/90 border border-white/[0.08] hover:border-accent-violet/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl shadow-black/40"
                >
                  <div>
                    {/* Visual Mockup Preview */}
                    <div className="relative overflow-hidden rounded-t-2xl border-b border-white/[0.06]">
                      <ProjectVisualPreview projectId={project.id} />

                      {/* Subtle hover overlay badge */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono text-white bg-black/80 border border-white/20 shadow-xl">
                          <Eye className="w-3.5 h-3.5 text-accent-violet" />
                          <span>View System Details</span>
                        </span>
                      </div>

                      {/* Category tag pill */}
                      <div className="absolute top-3 left-3 z-10">
                        <span
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium backdrop-blur-md shadow-md"
                          style={{
                            backgroundColor: `${project.accentColor}25`,
                            color: project.accentColor,
                            border: `1px solid ${project.accentColor}40`,
                          }}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent-violet-light transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-xs font-mono text-zinc-400 mb-3">{project.subtitle}</p>

                      <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed mb-5">
                        {project.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.07]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-zinc-400 bg-white/[0.02]">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-accent-violet-light hover:text-white transition-colors"
                    >
                      <span>Explore Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Demo Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.liveUrl) {
                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                          } else {
                            setToastProject(project);
                          }
                        }}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                          project.liveUrl
                            ? 'bg-accent-violet/15 hover:bg-accent-violet/25 text-accent-violet-light border-accent-violet/30'
                            : 'bg-white/[0.04] hover:bg-amber-500/10 text-zinc-300 hover:text-amber-300 border-white/10 hover:border-amber-500/30'
                        }`}
                        title={project.liveUrl ? 'Open Live Demo' : 'Live Demo (Under Development)'}
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Demo</span>
                        {!project.liveUrl && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        )}
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/5"
                          aria-label="View on GitHub"
                          title="View on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Under Development Toast Notification */}
      <UnderDevelopmentToast
        isOpen={!!toastProject}
        projectName={toastProject?.title || ''}
        githubUrl={toastProject?.githubUrl}
        onClose={() => setToastProject(null)}
      />
    </section>
  );
};
