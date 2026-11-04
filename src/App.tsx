import React, { useState } from 'react';
import { Preloader } from './components/layout/Preloader';
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
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-purple-600/30 selection:text-purple-200 relative selection:overflow-hidden">

      <CustomCursor />
      <ScrollProgressBar />

      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Navbar onOpenCVModal={() => setCvModalOpen(true)} />
      <main className="relative z-10">
        <Hero onOpenCVModal={() => setCvModalOpen(true)} />
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
  );
};

export default App;
