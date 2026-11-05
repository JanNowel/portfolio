import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
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

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#000000]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Prominent Profile Picture */}
          <motion.div variants={fadeInUp} className="mb-8 w-full flex justify-start">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-contain object-bottom"
              />
              
              {/* Subtle status dot inside photo */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Online & Coding</span>
              </div>
            </div>
          </motion.div>

          {/* Name in Bold Clean Typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Subtitle in Wide Monospace */}
          <motion.div variants={fadeInUp} className="mb-6">
            <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              Full-Stack & Mobile Developer • AI Prompt Engineer
            </p>
          </motion.div>

          {/* Two Clean Narrative Paragraphs matching reference style */}
          <motion.div variants={fadeInUp} className="space-y-3.5 max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            <p>
              I am a full-stack developer based in Bohol, Philippines, building modern web and cross-platform mobile applications. Currently, my work centers on MERN, React Native, Flutter, and practical AI workflows.
            </p>
            <p>
              I spend my time building software products. I love transforming early concepts into clean, reliable applications that people rely on.
            </p>
          </motion.div>

          {/* Minimalist Inline Links Strip with arrows (github ↗  linkedin ↗  curriculum vitae ↗) */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 pb-6 border-b border-zinc-900 w-full text-xs font-mono"
          >
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>github</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>linkedin</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors focus:outline-none"
            >
              <span>curriculum vitae</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
            >
              <span>contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Availability Status Badge */}
          <motion.div variants={fadeInUp} className="mt-5 flex items-center justify-between w-full">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for internships, junior roles & commissions</span>
            </div>

            <button
              onClick={scrollToAbout}
              className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <span>scroll down</span>
              <ArrowDown className="w-3 h-3" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
