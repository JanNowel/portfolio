import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Preloader } from './components/layout/Preloader';
import { SkeletonHero } from './components/ui/SkeletonHero';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Services } from './components/sections/Services';
import { GitHubShowcase } from './components/sections/GitHubShowcase';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { CVModal } from './components/ui/CVModal';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isSkeleton, setIsSkeleton] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIsSkeleton(true);
    setTimeout(() => {
      setIsSkeleton(false);
    }, 900);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 relative selection:overflow-hidden transition-colors duration-300">
        <CustomCursor />
        <ScrollProgressBar />

        {loading && <Preloader onComplete={handlePreloaderComplete} />}
        
        {/* Navigation: Fixed Left Sidebar on Desktop + Top Bar & Bottom Dock on Mobile */}
        <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

        {/* Right Main Scrollable Content Area matching iging.tech reference layout */}
        <div className="lg:pl-64 xl:pl-72 min-h-screen bg-black">
          <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10 space-y-20 sm:space-y-24">
            <AnimatePresence mode="wait">
              {isSkeleton ? (
                <SkeletonHero key="hero-skeleton" />
              ) : (
                <motion.div
                  key="hero-live"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <Hero onOpenCVModal={() => setCvModalOpen(true)} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sections in Exact Order */}
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Certifications />
            <Services />
            <GitHubShowcase />
            <Contact />
          </main>

          <Footer />
        </div>

        <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
