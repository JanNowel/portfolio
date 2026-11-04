import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveHeroCanvas } from '../3d/InteractiveHeroCanvas';
import { FloatingTechElements } from '../3d/FloatingTechElements';
import { MagneticButton } from '../ui/MagneticButton';
import { triggerConfetti } from '../../utils/confetti';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface HeroProps {
  onOpenCVModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const handleDownloadCV = () => {
    triggerConfetti();
    if (onOpenCVModal) {
      onOpenCVModal();
    } else {
      const contactEl = document.getElementById('contact');
      contactEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#080808]"
    >
      {/* 1. Atmospheric Ambient Lighting / Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-accent-violet/20 via-purple-600/10 to-accent-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Interactive 3D / Cybernetic Canvas */}
      <InteractiveHeroCanvas />

      {/* 3. Floating Technology Badges with Parallax Physics */}
      <FloatingTechElements />

      {/* 4. Hero Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Availability Status Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300 shadow-lg shadow-black/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>Available for Opportunities & Collaborations</span>
            </div>
          </motion.div>

          {/* Subtitle / Intro Greeting */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-sm sm:text-base font-mono uppercase tracking-widest text-zinc-400">
              Hi, I'm <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
            </span>
          </motion.div>

          {/* Main Editorial Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.08] mb-6 max-w-4xl"
          >
            Building Digital Experiences{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent-violet via-purple-300 to-accent-blue bg-clip-text text-transparent">
                Through Code.
              </span>
              {/* Subtle underline flare */}
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gradient-to-r from-accent-violet/60 to-accent-blue/60 rounded-full blur-[1px] -z-10" />
            </span>
          </motion.h1>

          {/* Supporting Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
          >
            {PERSONAL_INFO.shortIntro}
          </motion.p>

          {/* Call to Actions & Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 w-full max-w-lg mb-12"
          >
            {/* Primary Action: View Projects */}
            <MagneticButton strength={0.2}>
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-black bg-white hover:bg-zinc-100 shadow-xl shadow-white/10 transition-all duration-300 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
              </button>
            </MagneticButton>

            {/* Secondary Action: Download CV */}
            <MagneticButton strength={0.2}>
              <button
                onClick={handleDownloadCV}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium font-mono text-sm text-white bg-white/[0.06] border border-white/15 hover:border-accent-violet/60 hover:bg-accent-violet/10 hover:shadow-glow-violet transition-all duration-300 cursor-pointer backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-accent-violet group-hover:translate-y-[2px] transition-transform" />
                <span>Download CV</span>
              </button>
            </MagneticButton>

            {/* GitHub & LinkedIn Link Icons */}
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* 5. Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={scrollToAbout}
      >
        <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase group-hover:text-zinc-300 transition-colors">
          Explore Portfolio
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-accent-violet/50 transition-colors">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-accent-violet"
          />
        </div>
      </motion.div>
    </section>
  );
};
