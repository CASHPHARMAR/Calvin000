import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';
import CommandPalette from '@/components/CommandPalette';
import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';

// Sections
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Skills from '@/sections/Skills';
import Work from '@/sections/Work';
import Journey from '@/sections/Journey';
import Contact from '@/sections/Contact';

export default function Home() {
  const [appReady, setAppReady] = useState(false);

  return (
    <>
      <Helmet>
        <title>Calvin Selassie — Full-Stack Developer</title>
        <meta name="description" content="Calvin Selassie is a Full-Stack Developer specializing in frontend development. Building modern, responsive web applications with React, TypeScript, and Tailwind CSS." />
        <meta property="og:title" content="Calvin Selassie — Full-Stack Developer" />
        <meta property="og:description" content="Building beautiful, fast, and user-focused web experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="Calvin Selassie, Full-Stack Developer, Frontend Developer, React Developer, Web Developer" />
      </Helmet>

      <Loader onLoadingComplete={() => setAppReady(true)} />
      
      {appReady && (
        <div className="min-h-screen flex flex-col bg-background text-foreground animate-in fade-in duration-700">
          <ScrollProgress />
          <CustomCursor />
          <CommandPalette />
          <Navbar />
          
          <main className="flex-1 flex flex-col">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Work />
            <Journey />
            <Contact />
          </main>
          
          <Footer />
          <BackToTop />

          {/* Hint for command palette */}
          <div className="fixed bottom-6 left-6 hidden xl:flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm border border-border rounded-lg text-xs text-muted-foreground shadow-sm z-40 pointer-events-none">
            Press <kbd className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">Ctrl+K</kbd> or <kbd className="font-mono bg-muted px-1.5 py-0.5 rounded text-[10px]">⌘K</kbd> for menu
          </div>
        </div>
      )}
    </>
  );
}
