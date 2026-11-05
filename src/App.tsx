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
    }, 1100);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 relative selection:overflow-hidden transition-colors duration-300">
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
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <Hero onOpenCVModal={() => setCvModalOpen(true)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Structured Sections in Requested Hierarchy */}
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

        <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
