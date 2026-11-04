import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileDown, Code2, CheckCircle2, Terminal, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveHeroCanvas } from '../3d/InteractiveHeroCanvas';
import { FloatingTechElements } from '../3d/FloatingTechElements';
import { MagneticButton } from '../ui/MagneticButton';
import { TiltCard } from '../ui/TiltCard';
import { TypewriterText } from '../ui/TypewriterText';
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
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden bg-[#080808]"
    >
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[650px] h-[320px] sm:h-[500px] lg:h-[650px] bg-gradient-to-tr from-cyan-500/15 via-accent-violet/15 to-accent-blue/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-accent-violet/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-16 left-4 sm:left-10 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <InteractiveHeroCanvas />
      <FloatingTechElements />

      {/* 4. Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Dynamic Typing Name & Current Roles, CTA (7 cols on lg) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Availability Status Badge */}
            <motion.div variants={fadeInUp} className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#121216]/90 border border-white/10 backdrop-blur-md text-[11px] sm:text-xs font-mono text-zinc-300 shadow-lg shadow-black/40">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-400" />
                </span>
                <span>Available for Opportunities & Collaborations</span>
              </div>
            </motion.div>

            {/* Typing Name Greeting */}
            <motion.div variants={fadeInUp} className="mb-2.5 sm:mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Hi, I'm</span>
                <span className="text-white font-bold tracking-tight">
                  <TypewriterText
                    words={[PERSONAL_INFO.name]}
                    typingSpeed={80}
                    pauseDuration={15000}
                    cursorClassName="text-cyan-400"
                  />
                </span>
              </div>
            </motion.div>

            {/* Dynamic Typing Current Role */}
            <motion.div variants={fadeInUp} className="mb-3.5 sm:mb-4">
              <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-zinc-200">
                <span>I'm a </span>
                <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-accent-blue bg-clip-text text-transparent underline decoration-cyan-400/40 decoration-2 underline-offset-4">
                  <TypewriterText
                    words={PERSONAL_INFO.roles}
                    typingSpeed={85}
                    deletingSpeed={45}
                    pauseDuration={2400}
                    cursorClassName="text-accent-violet"
                  />
                </span>
              </div>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-4 sm:mb-6 max-w-2xl break-words"
            >
              Building Digital Experiences{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent-violet via-purple-300 to-accent-blue bg-clip-text text-transparent">
                  Through Code.
                </span>
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
            >
              {PERSONAL_INFO.shortIntro}
            </motion.p>

            {/* Call to Actions & Social Links (Adjusted for mobile responsiveness and z-index) */}
            <motion.div
              variants={fadeInUp}
              className="relative z-30 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 w-full sm:w-auto"
            >
              {/* Primary Action: View Projects */}
              <div className="w-full sm:w-auto">
                <MagneticButton strength={0.2} className="w-full sm:w-auto">
                  <button
                    onClick={scrollToProjects}
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-white hover:bg-zinc-100 shadow-xl shadow-white/10 hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer"
                  >
                    <Code2 className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                    <span>View Projects</span>
                  </button>
                </MagneticButton>
              </div>

              {/* Secondary Action: Download CV */}
              <div className="w-full sm:w-auto">
                <MagneticButton strength={0.2} className="w-full sm:w-auto">
                  <button
                    onClick={handleDownloadCV}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-xl font-medium font-mono text-xs sm:text-sm text-white bg-white/[0.06] border border-white/15 hover:border-accent-violet/60 hover:bg-accent-violet/10 hover:shadow-glow-violet transition-all duration-300 cursor-pointer backdrop-blur-md"
                  >
                    <FileDown className="w-4 h-4 text-accent-violet group-hover:translate-y-[2px] transition-transform" />
                    <span>Download CV</span>
                  </button>
                </MagneticButton>
              </div>

              {/* GitHub & LinkedIn Link Icons */}
              <div className="flex items-center justify-center gap-2.5 pt-1 sm:pt-0">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-400 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: User Portrait Picture (Responsive scaling on all devices) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px]">
              {/* Backlight Glow Rings */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-cyan-500/25 via-accent-violet/20 to-accent-blue/20 rounded-3xl blur-xl sm:blur-2xl opacity-75 animate-pulse-slow pointer-events-none" />

              <TiltCard maxTilt={8} glareOpacity={0.2} className="relative z-10">
                <div className="relative rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-md border border-cyan-400/30 p-2 sm:p-3 shadow-2xl shadow-cyan-500/10 overflow-hidden group">
                  {/* Outer subtle cyber border accent */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-accent-violet/20 pointer-events-none" />

                  {/* Profile Picture with Transparent Background directly on system */}
                  <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-transparent flex items-center justify-center">
                    {/* Ambient subtle backglow circle */}
                    <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-cyan-500/20 via-accent-violet/20 to-transparent blur-xl pointer-events-none" />

                    <img
                      src={PERSONAL_INFO.profileImage}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] relative z-10"
                    />

                    {/* Gradient overlay at bottom of photo for text contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10" />

                    {/* Bottom overlay badge inside photo */}
                    <div className="absolute bottom-2 sm:bottom-2.5 left-2 sm:left-2.5 right-2 sm:right-2.5 z-20 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 drop-shadow-md">
                          <span>{PERSONAL_INFO.name}</span>
                          <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400 fill-cyan-400/20" />
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-zinc-300 drop-shadow-md">
                          Full-Stack & Systems
                        </div>
                      </div>

                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-black/60 border border-white/15 backdrop-blur-md overflow-hidden p-0.5 shadow-md">
                        <img
                          src={PERSONAL_INFO.logoImage}
                          alt="JNB Logo"
                          className="w-full h-full object-cover rounded-md sm:rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Profile Footer Info Strip */}
                  <div className="mt-2 sm:mt-2.5 px-1 py-0.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-400 relative z-10">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Online & Coding</span>
                    </span>
                    <span className="text-cyan-400 font-medium">@JanNowel</span>
                  </div>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 5. Scroll Down Indicator (Centered Button Above, Centered Label Below) */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-3 sm:bottom-6 left-0 right-0 mx-auto z-20 flex flex-col items-center justify-center text-center cursor-pointer group select-none"
        onClick={scrollToAbout}
      >
        {/* The Above Button: Centered Pill with Animated Indicator */}
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-white/25 group-hover:border-cyan-400/60 bg-white/[0.04] backdrop-blur-md flex items-start justify-center p-1 sm:p-1.5 mb-1.5 transition-all duration-300 shadow-lg shadow-black/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 sm:h-2.5 rounded-full bg-cyan-400"
          />
        </div>

        {/* Centered Explore Portfolio Label */}
        <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase text-center group-hover:text-cyan-300 transition-colors flex items-center justify-center gap-1">
          <span>Explore Portfolio</span>
          <ArrowDown className="w-3 h-3 text-cyan-400/80 group-hover:translate-y-0.5 transition-transform" />
        </span>
      </motion.div>
    </section>
  );
};
