import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Partners from './sections/Partners';
import MobileZoomShowcase from './sections/MobileZoomShowcase';
import About from './sections/About';
import Steps from './sections/Steps';
import StatsBanner from './sections/StatsBanner';
import Domains from './sections/Domains';
import Projects from './sections/Projects';
import Comparison from './sections/Comparison';
import Events from './sections/Events';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import FAQ from './sections/FAQ';
import RecruitmentChallenge from './sections/RecruitmentChallenge';
import Contact from './sections/Contact';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';
import WebsiteIntroLoader from './components/WebsiteIntroLoader';

export default function App() {
  useEffect(() => {
    // 0. Disable browser auto-scroll restoration so page always reloads at top
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // If page reloaded with an anchor hash in URL, clear it so browser doesn't jump down
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    // Detect touch device for natural Android & mobile touch acceleration
    const isTouch = typeof window !== 'undefined' && (
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia('(pointer: coarse)').matches
    );

    // 1. Initialize Lenis: smooth wheel for desktop, natural 1:1 hardware momentum for touch
    const lenis = new Lenis({
      duration: isTouch ? 0.8 : 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 1.0,
    });

    // Ensure Lenis starts locked at the very top (y = 0)
    lenis.scrollTo(0, { immediate: true });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    window.lenis = lenis;

    // Reset to top when leaving / refreshing
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 2. Global smooth ripple animation on button click
    const handleButtonClick = (e) => {
      const btn = e.target.closest('button, [role="button"], .pixel-btn-primary, .pixel-btn-secondary');
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.className = 'btn-ripple-wave';

      const computedPos = window.getComputedStyle(btn).position;
      if (computedPos === 'static') {
        btn.style.position = 'relative';
      }
      btn.style.overflow = 'hidden';

      const prev = btn.querySelector('.btn-ripple-wave');
      if (prev) prev.remove();

      btn.appendChild(circle);
      setTimeout(() => {
        circle.remove();
      }, 550);
    };

    window.addEventListener('click', handleButtonClick, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.lenis = null;
      window.removeEventListener('click', handleButtonClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A090F] text-[#F5F5F0] flex flex-col overflow-x-clip">
      {/* Website Entry Opening Animation Loader */}
      <WebsiteIntroLoader />

      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        <Hero />
        <Partners />
        <MobileZoomShowcase />
        <About />
        <Steps />
        <StatsBanner />
        <Domains />
        <Projects />
        <Comparison />
        <Events />
        <Testimonials />
        <Team />
        <FAQ />
        <RecruitmentChallenge />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

