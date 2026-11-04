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
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
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
    }, 1300);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#080808] text-white selection:bg-purple-600/30 selection:text-purple-200 relative selection:overflow-hidden transition-colors duration-300">

        <CustomCursor />
        <ScrollProgressBar />

        {loading && <Preloader onComplete={handlePreloaderComplete} />}
        <Navbar onOpenCVModal={() => setCvModalOpen(true)} />
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            {isSkeleton ? (
              <SkeletonHero key="hero-skeleton" />
            ) : (
              <motion.div
                key="hero-live"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Hero onOpenCVModal={() => setCvModalOpen(true)} />
              </motion.div>
            )}
          </AnimatePresence>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <GitHubShowcase />
          <Contact />
        </main>

        <Footer />

        <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
