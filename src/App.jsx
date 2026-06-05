import React, { useState, useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';

import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import SocialDock from './components/SocialDock';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Stats = lazy(() => import('./components/Stats'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if device is desktop for Cursor rendering
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('resize', handleResize);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="relative">
          {isDesktop && <Cursor />}
          <ScrollProgress />
          <Navbar />
          <SocialDock />
          
          <div className="xl:pl-16">
            <main>
              <Hero />
              <Suspense fallback={<div className="h-screen w-full" />}>
                <About />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Certifications />
                <Stats />
                <Resume />
                <Contact />
              </Suspense>
            </main>
            
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
        </div>
    </>
  );
}

export default App;
