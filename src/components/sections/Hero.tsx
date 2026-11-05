import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { triggerConfetti } from '../../utils/confetti';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { TechMarquee } from '../ui/TechMarquee';

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

  return (
    <section id="home" className="pt-8 sm:pt-12 pb-14 bg-black">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {/* Main 2-Column Hero Header matching Inspired Design video */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Square Portrait Image */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-5 flex justify-center md:justify-start"
          >
            <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[300px] rounded-2xl overflow-hidden bg-transparent border border-zinc-800/80 shadow-2xl">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-contain object-bottom drop-shadow-xl"
              />
              
              {/* Subtle status tag */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Available</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Typography, Bio, and Inline Links */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-7 flex flex-col justify-center"
          >
            {/* Name */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-mono font-bold tracking-tight text-white mb-2">
              {PERSONAL_INFO.name}
            </h1>

            {/* Subtitle in Wide Monospace */}
            <div className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-5">
              Full-Stack & Mobile Developer • AI Prompt Engineer
            </div>

            {/* Narrative Paragraphs matching reference video */}
            <div className="space-y-3.5 text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              <p>
                I am a full-stack engineer building web and mobile applications. Currently, my work centers on MERN architectures, cross-platform mobile apps, and practical AI workflows.
              </p>
              <p>
                I spend my time building software products. I love transforming early concepts into applications people rely on.
              </p>
            </div>

            {/* Inline Links Strip with arrows (github ↗  linkedin ↗  contact ↗  resume ↗) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono pt-2 border-t border-zinc-900">
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
                <span>resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-zinc-300 hover:text-white transition-colors"
              >
                <span>contact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Seamless Infinite Tech Marquee */}
        <motion.div variants={fadeInUp} className="w-full">
          <TechMarquee />
        </motion.div>
      </motion.div>
    </section>
  );
};
