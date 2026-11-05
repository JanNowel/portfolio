import React, { useState, useEffect } from 'react';
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
  { name: 'Skills', href: '#skills', shortName: 'Skills' },
  { name: 'Certifications', href: '#certifications', shortName: 'Certs' },
  { name: 'Services', href: '#services', shortName: 'Services' },
  { name: 'Contact', href: '#contact', shortName: 'Contact' },
];

interface NavbarProps {
  onOpenCVModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', ...NAV_ITEMS.map((item) => item.href.substring(1))];
      const scrollPosition = window.scrollY + 220;

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

  const handleNavClick = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <>
      {/* =========================================================
          DESKTOP & TABLET NAVIGATION: Floating Minimalist Island
          ========================================================= */}
      <header className="fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 px-4 hidden md:block">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 border transition-all duration-300 ${
            isScrolled
              ? 'bg-zinc-950/85 backdrop-blur-md border-zinc-800 shadow-xl shadow-black/40'
              : 'bg-zinc-950/60 backdrop-blur-sm border-zinc-800/80'
          }`}
        >
          {/* Brand Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 overflow-hidden p-0.5 flex items-center justify-center">
              <img
                src={PERSONAL_INFO.logoImage}
                alt="JNB Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-400">
                Software Developer
              </span>
            </div>
          </a>

          {/* Minimal Text Links */}
          <nav className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium tracking-wide transition-colors duration-150 rounded-full focus:outline-none ${
                    isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700/60"
                      transition={{ type: 'spring', damping: 28, stiffness: 380 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & CV */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:text-white transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 text-zinc-400" />
              <span>CV</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-200 transition-colors"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION: Clean Top Header + Floating Bottom Dock
          (Zero Hamburger Drawer, Fast Single-Tap Access)
          ========================================================= */}
      {/* 1. Mobile Top Minimal Header */}
      <header className="fixed top-0 inset-x-0 z-40 md:hidden bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden p-0.5">
              <img
                src={PERSONAL_INFO.logoImage}
                alt="JNB Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-zinc-100">{PERSONAL_INFO.initials}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          </a>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-zinc-200 bg-zinc-900 border border-zinc-800"
            >
              <FileDown className="w-3 h-3 text-zinc-400" />
              <span>CV</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Mobile Floating Bottom Capsule Dock */}
      <nav
        aria-label="Mobile Navigation"
        className="fixed bottom-3 inset-x-2 z-40 md:hidden max-w-sm mx-auto"
      >
        <div className="bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/90 rounded-full px-2 py-1.5 shadow-2xl shadow-black/80 flex items-center justify-around overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-2 py-1 text-[11px] font-mono tracking-tight transition-colors duration-150 rounded-full focus:outline-none shrink-0 ${
                  isActive ? 'text-zinc-100 font-semibold' : 'text-zinc-400 hover:text-zinc-200'
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
