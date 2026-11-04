import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#060608] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-accent-violet/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-white/10 flex items-center justify-center font-mono font-black text-lg text-white">
                <span className="bg-gradient-to-br from-white via-purple-200 to-accent-violet bg-clip-text text-transparent">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
                <p className="text-xs text-zinc-400 font-mono">Full-Stack & Systems Developer</p>
              </div>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Designing and building modern web, mobile, and intelligent software experiences with clean architecture and thoughtful interaction.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for internships, developer roles & collaboration</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 mb-4">
                Featured Projects
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                    REGESuite
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                    eBantay AI
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                    Student Hub
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                    Python SysInfo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Connect & Source
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-accent-violet/40 hover:bg-accent-violet/10 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-400/40 hover:bg-purple-400/10 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Designed with precision for fast deployment on Cloudflare Pages and GitHub Pages.
            </p>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {PERSONAL_INFO.name}. Built with</span>
            <span className="text-accent-violet font-mono">React</span>
            <span>&</span>
            <span className="text-accent-blue font-mono">Framer Motion</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-zinc-400">
              <Sparkles className="w-3 h-3 text-accent-violet" /> Ready for Production
            </span>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 transition-colors focus:outline-none"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
