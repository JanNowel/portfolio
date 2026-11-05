import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { triggerConfetti } from '../../utils/confetti';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavItem {
  name: string;
  href: string;
  shortName?: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about', shortName: 'About' },
  { name: 'Projects', href: '#projects', shortName: 'Projects' },
  { name: 'Experience', href: '#experience', shortName: 'Exp' },
  { name: 'Stack', href: '#skills', shortName: 'Stack' },
  { name: 'Certifications', href: '#certifications', shortName: 'Certs' },
  { name: 'Services', href: '#services', shortName: 'Services' },
  { name: 'GitHub', href: '#github', shortName: 'GitHub' },
  { name: 'Contact', href: '#contact', shortName: 'Contact' },
];

interface NavbarProps {
  onOpenCVModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [activeSection, setActiveSection] = useState('about');
  const mobileDockRef = useRef<HTMLDivElement>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', ...NAV_ITEMS.map((item) => item.href.substring(1))];
      const scrollPosition = window.scrollY + (window.innerWidth < 1024 ? 120 : 200);

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-center active item in mobile bottom dock
  useEffect(() => {
    if (mobileDockRef.current) {
      const activeBtn = mobileDockRef.current.querySelector<HTMLElement>(
        `[data-section="${activeSection}"]`
      );
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [activeSection]);

  // Accurate offset navigation (prevents section headings from being obscured by mobile header)
  const handleNavClick = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth < 1024 ? 68 : 24;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    triggerConfetti();
    if (onOpenCVModal) {
      onOpenCVModal();
    } else {
      handleNavClick('#contact');
    }
  };

  return (
    <>
      {/* =========================================================
          DESKTOP FIXED LEFT SIDEBAR (Matching iging.tech / Inspired Design)
          ========================================================= */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 xl:w-72 bg-black border-r border-zinc-900 flex-col justify-between p-6 xl:p-8 z-40 select-none overflow-y-auto no-scrollbar">
        {/* Top: Brand Monogram & Navigation Links */}
        <div className="space-y-8">
          {/* Brand Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="block group focus:outline-none"
          >
            <h1 className="text-base xl:text-lg font-mono font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">
              Software Developer
            </p>
          </a>

          {/* Navigation Links with Active Arrow Indicator */}
          <nav className="space-y-2.5 pt-2 font-mono text-sm">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left transition-colors duration-150 focus:outline-none ${
                    isActive
                      ? 'text-white font-medium pl-1'
                      : 'text-zinc-400 hover:text-white pl-1'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    {isActive ? (
                      <span className="text-white">→</span>
                    ) : (
                      <span className="opacity-0">→</span>
                    )}
                    <span>{item.name}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Live Viewer Count, Theme Switcher & Contact Prompts */}
        <div className="pt-8 space-y-6 border-t border-zinc-900 font-mono">
          {/* Live Viewer Indicator matching reference */}
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>1 person viewing now</span>
          </div>

          {/* Theme Switcher & CV Button */}
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-zinc-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Contact Prompt matching reference video */}
          <div className="space-y-2 text-xs">
            <p className="text-[11px] text-zinc-400 uppercase tracking-wider">
              For work, collabs & everything else, reach me at
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="block text-zinc-300 hover:text-white text-xs break-all transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>

            {/* Social Handles with ↗ */}
            <div className="pt-2 flex flex-col gap-1.5 text-xs text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>@JanNowel</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>in/jhonnoelbaculpo</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================
          MOBILE & TABLET NAVIGATION (< lg)
          Clean Top Header + Bottom Floating Capsule Dock
          (Ergonomic, Touch-Friendly, No Clunky Hamburger Menus)
          ========================================================= */}
      {/* 1. Mobile Top Minimal Header */}
      <header className="fixed top-0 inset-x-0 z-40 lg:hidden bg-black/90 backdrop-blur-md border-b border-zinc-900 px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden p-0.5 shrink-0">
              <img
                src={PERSONAL_INFO.logoImage}
                alt="JNB Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            </div>
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 active:scale-95 transition-transform"
            >
              <FileDown className="w-3 h-3 text-zinc-400" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Mobile Floating Bottom Capsule Dock */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-3 inset-x-0 z-40 lg:hidden flex justify-center px-3 pointer-events-none"
      >
        <div
          ref={mobileDockRef}
          className="pointer-events-auto bg-black/90 dark:bg-black/95 backdrop-blur-xl border border-zinc-800/90 rounded-full px-2 py-1.5 shadow-2xl shadow-black/80 flex items-center gap-1 overflow-x-auto no-scrollbar scroll-smooth max-w-[calc(100vw-1.5rem)] sm:max-w-md touch-pan-x"
        >
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                data-section={sectionId}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-tight transition-colors duration-150 rounded-full focus:outline-none shrink-0 min-h-[34px] flex items-center justify-center ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 active:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveDock"
                    className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700/80"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{item.shortName || item.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
