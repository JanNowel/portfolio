import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
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
    <footer className="border-t border-zinc-900 pt-12 pb-24 lg:pb-12 bg-black">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden p-0.5">
                <img
                  src={PERSONAL_INFO.logoImage}
                  alt="JNB Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-sm font-semibold text-white font-mono">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Designing and engineering modern full-stack web platforms, cross-platform mobile apps, and practical AI tooling.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Available for commissions & technical internships</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Overview
              </div>
              <ul className="space-y-1.5 text-xs font-mono">
                {['About', 'Projects', 'Experience', 'Stack'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Focus
              </div>
              <ul className="space-y-1.5 text-xs font-mono">
                {['Certifications', 'Services', 'GitHub', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back to top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500 font-mono">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div>
            Inspired by iging.tech • Minimalist Precision
          </div>
        </div>
      </div>
    </footer>
  );
};
