import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { triggerConfetti } from '../../utils/confetti';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onOpenCVModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
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
    setMobileMenuOpen(false);
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
      window.open('#contact', '_self');
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'py-3.5 bg-[#080808]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-lg shadow-black/40'
            : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Monogram / Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-3 relative focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-[#141418] border border-white/10 overflow-hidden flex items-center justify-center p-0.5 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all duration-300">
                <img
                  src={PERSONAL_INFO.logoImage}
                  alt="JNB Logo"
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                  Developer
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#121216]/70 border border-white/[0.08] backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full focus:outline-none ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavBackground"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10 shadow-sm"
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={handleDownloadCV}
                className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium font-mono text-white bg-white/5 border border-white/10 hover:border-accent-violet/50 hover:bg-accent-violet/10 hover:shadow-glow-violet transition-all duration-300"
              >
                <FileDown className="w-3.5 h-3.5 text-accent-violet group-hover:translate-y-[1px] transition-transform" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Actions: Theme Toggle & Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden rounded-2xl bg-[#111115]/95 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl shadow-black/80"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left ${isActive
                        ? 'bg-accent-violet/20 text-white border border-accent-violet/30'
                        : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs font-mono text-zinc-300">Theme Appearance</span>
                  <ThemeToggle />
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleDownloadCV();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10"
                >
                  <FileDown className="w-4 h-4 text-accent-violet" />
                  <span>Download Curriculum Vitae</span>
                </button>

                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black bg-white hover:bg-zinc-200"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
