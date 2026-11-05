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
import { Services } from './components/sections/Services';
import { GitHubShowcase } from './components/sections/GitHubShowcase';
import { Contact } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { CVModal } from './components/ui/CVModal';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  // Initialized to true so the DOM underneath preloader is ALREADY skeleton, eliminating any millisecond portfolio flash
  const [isSkeleton, setIsSkeleton] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setIsSkeleton(true);
    setTimeout(() => {
      setIsSkeleton(false);
    }, 1200);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 relative selection:overflow-hidden transition-colors duration-300">
        <CustomCursor />
        <ScrollProgressBar />

        {loading && <Preloader onComplete={handlePreloaderComplete} />}
        
        {/* Navigation: Fixed Left Sidebar on Desktop + Top Bar & Bottom Dock on Mobile */}
        <Navbar onOpenCVModal={() => setCvModalOpen(true)} />

        {/* Right Main Scrollable Content Area matching iging.tech reference layout */}
        <div className="lg:pl-64 xl:pl-72 min-h-screen">
          <main className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 pt-16 lg:pt-10 pb-28 lg:pb-16">
            <AnimatePresence mode="wait">
              {isSkeleton ? (
                <SkeletonHero key="hero-skeleton" />
              ) : (
                <motion.div
                  key="portfolio-content"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="space-y-20 sm:space-y-24"
                >
                  <Hero onOpenCVModal={() => setCvModalOpen(true)} />
                  <About />
                  <Projects />
                  <Experience />
                  <Skills />
                  <Services />
                  <GitHubShowcase />
                  <Contact />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          <Footer />
        </div>

        <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
