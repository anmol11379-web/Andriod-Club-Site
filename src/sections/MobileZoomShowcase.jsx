import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MobileZoomShowcase() {
  const containerRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  
  // Direct DOM refs for 120fps hardware-accelerated transforms without React re-renders
  const phoneRef = useRef(null);
  const phoneChassisRef = useRef(null);
  const initialTextRef = useRef(null);
  const quoteRef = useRef(null);
  const nextHeadingRef = useRef(null);
  const glowRef = useRef(null);
  const percentRef = useRef(null);
  const stepDotsRef = useRef([]);

  const [currentStep, setCurrentStep] = useState(0);

  // Gallery rail step targets
  const gallerySteps = [
    { label: 'EXPLORE', target: 0.0 },
    { label: 'ZOOM', target: 0.32 },
    { label: 'ABOUT', target: 0.65 }
  ];

  useEffect(() => {
    let animId;
    let isMounted = true;
    let lastStep = -1;

    // Fast, reflow-free scroll measurement using cached offset
    const onScroll = () => {
      if (!containerRef.current) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollableDistance = containerHeight - windowHeight;
      if (scrollableDistance <= 0) return;

      const rawProgress = (scrollTop - containerTop) / scrollableDistance;
      targetProgressRef.current = Math.min(Math.max(rawProgress, 0), 1);
    };

    // 120fps direct GPU transform update loop (No React state changes per frame!)
    const updateLoop = () => {
      if (!isMounted) return;

      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0002) {
        currentProgressRef.current += diff * 0.16; // Snappy, responsive damping
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const p = currentProgressRef.current;

      // 1. Initial text opacity & translate (0.00 -> 0.15)
      let initialTextOpacity = 1;
      if (p > 0) {
        const t = Math.min(p / 0.15, 1);
        initialTextOpacity = 1 - (t * t * (3 - 2 * t));
      }
      const initialTextTranslateX = (1 - initialTextOpacity) * 30;

      if (initialTextRef.current) {
        initialTextRef.current.style.opacity = initialTextOpacity;
        initialTextRef.current.style.transform = `translate3d(-${initialTextTranslateX}px, 0, 0)`;
      }

      if (quoteRef.current) {
        quoteRef.current.style.opacity = initialTextOpacity;
        quoteRef.current.style.transform = `translate3d(${initialTextTranslateX}px, 0, 0)`;
      }

      // 2. Phone scale: zooms from 1.0x to 5.2x (0.00 -> 0.32)
      let phoneScale = 1.0;
      if (p > 0) {
        const zoomRatio = Math.min(p / 0.32, 1.0);
        const ease = 1 - Math.pow(1 - zoomRatio, 3);
        phoneScale = 1.0 + ease * 4.2;
      }

      // Phone fades out as zoom completes (0.24 -> 0.32)
      let phoneOpacity = 1;
      if (p > 0.24) {
        const t = Math.min((p - 0.24) / 0.08, 1);
        phoneOpacity = 1 - (t * t * (3 - 2 * t));
      }

      if (phoneRef.current) {
        phoneRef.current.style.transform = `scale3d(${phoneScale}, ${phoneScale}, 1) translateZ(0)`;
        phoneRef.current.style.opacity = phoneOpacity;
      }

      // 3. Chassis dissolve (0.14 -> 0.28)
      let chassisOpacity = 1;
      if (p > 0.14) {
        const t = Math.min((p - 0.14) / 0.14, 1);
        chassisOpacity = 1 - (t * t * (3 - 2 * t));
      }
      if (phoneChassisRef.current) {
        phoneChassisRef.current.style.opacity = chassisOpacity;
      }

      // 4. Next heading fade (appears 0.28 -> 0.80, fades out > 0.80)
      let nextHeadingOpacity = 0;
      if (p >= 0.28 && p <= 0.80) {
        const t = Math.min((p - 0.28) / 0.07, 1);
        nextHeadingOpacity = t * t * (3 - 2 * t);
      } else if (p > 0.80) {
        const t = Math.min((p - 0.80) / 0.16, 1);
        nextHeadingOpacity = 1 - (t * t * (3 - 2 * t));
      }

      if (nextHeadingRef.current) {
        nextHeadingRef.current.style.opacity = nextHeadingOpacity;
      }

      // 5. Ambient glow scale
      if (glowRef.current) {
        const glowScale = 1 + (phoneScale > 1 ? (phoneScale - 1) * 0.25 : 0);
        glowRef.current.style.transform = `scale3d(${glowScale}, ${glowScale}, 1) translateZ(0)`;
        glowRef.current.style.opacity = 0.35 + nextHeadingOpacity * 0.45;
      }

      // 6. Rail percentage text
      if (percentRef.current) {
        percentRef.current.textContent = `${Math.round(p * 100)}%`;
      }

      // 7. Update step indicator dot ONLY when step index actually changes (0, 1, or 2)
      const stepIdx = p < 0.15 ? 0 : p < 0.40 ? 1 : 2;
      if (stepIdx !== lastStep) {
        lastStep = stepIdx;
        setCurrentStep(stepIdx);
      }

      animId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    if (window.lenis) {
      window.lenis.on('scroll', onScroll);
    }
    onScroll();
    animId = requestAnimationFrame(updateLoop);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (window.lenis) {
        window.lenis.off('scroll', onScroll);
      }
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToStep = (target) => {
    if (!containerRef.current) return;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollableDistance = containerHeight - windowHeight;
    const targetScroll = containerTop + scrollableDistance * target;
    const targetY = Math.max(targetScroll, 0);

    if (window.lenis) {
      window.lenis.scrollTo(targetY, { duration: 0.9 });
    } else {
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[220vh] sm:h-[240vh] bg-[#0A090F] text-white"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800/40 -translate-x-1/2 pointer-events-none hidden md:block" />

        {/* Ambient Radial Glow (Optimized for Mobile GPU fill-rate) */}
        <div
          ref={glowRef}
          className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#3DDC84]/15 blur-3xl sm:blur-[120px] pointer-events-none will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        />

        {/* ========================================================= */}
        {/* 1. "Explore the Android Community" (LEFT FLANK)            */}
        {/* ========================================================= */}
        <div
          ref={initialTextRef}
          className="absolute left-4 sm:left-12 md:left-20 top-16 sm:top-24 md:top-28 z-20 max-w-[280px] sm:max-w-sm md:max-w-md pointer-events-none will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Tech Double Dots + Tag */}
          <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]" />
            <span className="font-mono text-[9px] text-[#3DDC84] tracking-[2px] ml-1 uppercase font-bold">
              ECOSYSTEM REACH
            </span>
          </div>

          {/* Heading */}
          <div className="relative border-l-2 border-[#3DDC84]/70 pl-3 sm:pl-4 py-0.5 sm:py-1 mb-2 sm:mb-4">
            <h2 className="font-grotesk text-[20px] sm:text-[34px] md:text-[46px] font-bold text-[#F5F5F0] leading-[1.08] tracking-tight">
              Explore the Android Community
            </h2>
          </div>

          {/* Subtitle */}
          <p className="font-sans text-[11px] sm:text-[14px] text-[#A1A1AA] leading-relaxed pl-3 sm:pl-4 line-clamp-2 sm:line-clamp-none">
            Did you know? Android powers <strong className="text-[#3DDC84]">over 70% of smartphones worldwide</strong>, serving billions of users every single day.
          </p>

          {/* Badges */}
          <div className="mt-3 sm:mt-5 pl-3 sm:pl-4 flex flex-wrap items-center gap-1.5 sm:gap-2.5">
            <span className="font-mono text-[9px] sm:text-[10px] text-[#888899] bg-[#14141E] px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#232332]">
              3.5B+ ACTIVE DEVICES
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#00F0FF] bg-[#14141E] px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#232332]">
              KOTLIN FIRST
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. Community Quote Callout (RIGHT FLANK)                  */}
        {/* ========================================================= */}
        <div
          ref={quoteRef}
          className="absolute right-6 sm:right-12 md:right-24 bottom-24 sm:bottom-32 z-20 max-w-xs md:max-w-sm text-right pointer-events-none hidden sm:block will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="border-r-2 border-[#00F0FF]/60 pr-4 py-1">
            <p className="font-sans text-[14px] md:text-[16px] text-[#D4D4D8] leading-relaxed font-medium">
              "Android isn't just an operating system — it's a global community of millions of builders shaping the digital world."
            </p>
          </div>
          <span className="font-mono text-[10px] text-[#888899] pr-4 mt-2 block tracking-[1px]">
            VIT BHOPAL UNIVERSITY CHAPTER
          </span>

          <div className="pr-4 mt-4 inline-flex items-center gap-2 text-[10px] font-mono text-[#3DDC84]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-ping" />
            <span>GLOBAL DEVELOPER NETWORK</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. CENTER FOCAL ELEMENT: HARDWARE-ACCELERATED PHONE ZOOM  */}
        {/* ========================================================= */}
        <div
          ref={phoneRef}
          className="relative z-20 select-none pointer-events-none will-change-transform"
          style={{
            transformOrigin: 'center center',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Phone Hardware Chassis */}
          <div 
            ref={phoneChassisRef}
            className="relative w-[220px] sm:w-[280px] md:w-[320px] aspect-[9/19] bg-[#0c0c14] rounded-[38px] sm:rounded-[46px] p-2.5 sm:p-3.5 border-[2px] sm:border-[3px] border-[#2c2c3d] shadow-2xl sm:shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            style={{ transform: 'translateZ(0)' }}
          >
            {/* Outer Rim Highlight */}
            <div className="absolute inset-0 rounded-[36px] sm:rounded-[44px] border border-white/10 pointer-events-none" />

            {/* Inner Screen Display */}
            <div className="relative w-full h-full bg-[#050508] rounded-[30px] sm:rounded-[36px] overflow-hidden border border-[#1f1f2e] flex flex-col justify-between">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 pt-2.5 pb-1 text-[9px] font-mono text-[#888899] z-20">
                <span className="font-bold text-white tracking-wider">13:37</span>
                <div className="w-3 h-3 bg-black rounded-full border border-[#222] flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#091114] rounded-full" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#3DDC84]">5G</span>
                  <span className="w-2 h-1.5 border border-[#3DDC84] rounded-sm bg-[#3DDC84]" />
                </div>
              </div>

              {/* Inside Screen Content */}
              <div className="flex-1 flex flex-col items-center justify-center text-center px-3 py-2">
                {/* Glowing Android Robot Logo */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#3DDC84]/20 blur-md animate-pulse" />
                  <img
                    src="/Logo.png"
                    alt="Android Robot"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain relative z-10"
                  />
                </div>

                <div className="font-mono text-[9px] text-[#3DDC84] tracking-[2px] font-bold uppercase mb-1">
                  EXPLORE MORE ABOUT
                </div>
                <h3 className="font-grotesk text-[15px] sm:text-[17px] font-bold text-white tracking-tight mb-2">
                  THE ANDROID CLUB
                </h3>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#14141E] border border-[#2d2d40] text-[8px] sm:text-[9px] font-mono text-[#A1A1AA] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-ping" />
                  <span>AC-OS 15.0 • VIT BHOPAL</span>
                </div>

                <div className="text-[9px] font-mono text-[#666677] flex items-center gap-1">
                  <ChevronDown className="w-3 h-3 text-[#3DDC84] animate-bounce" />
                  <span>SCROLL TO DIVE IN</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="pb-2 pt-1 flex justify-center">
                <div className="w-20 sm:w-24 h-1 bg-[#2e2e42] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. BLENDED NEXT HEADING: APPEARS AT 32% SCROLL            */}
        {/* ========================================================= */}
        <div
          ref={nextHeadingRef}
          className="absolute inset-x-0 top-[36%] sm:top-[42%] md:top-[46%] z-40 px-4 sm:px-6 md:px-12 pointer-events-none will-change-transform"
          style={{ transform: 'translateZ(0)', opacity: 0 }}
        >
          <div className="max-w-[1280px] mx-auto w-full flex flex-col items-start text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
              <span className="font-mono text-[9px] md:text-[11px] font-bold tracking-[2px] text-[#3DDC84] uppercase">
                [01] ABOUT ANDROID CLUB
              </span>
            </div>

            {/* Display Heading */}
            <h2 className="font-grotesk text-[22px] sm:text-[34px] md:text-[44px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.08] mb-2 sm:mb-2.5">
              ENGINEERING IMPACT.
              <br />
              <span className="text-[#3DDC84]">
                ONE REPO AT A TIME.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="font-mono text-[11px] sm:text-[12px] md:text-[13px] text-[#A1A1AA] tracking-[0.5px] leading-[1.55] max-w-[680px] mb-3 sm:mb-4">
              We are a collective of student developers, system designers, and creative strategists at VIT Bhopal University. From Jetpack Compose animations to on-device neural networks, we turn curious freshmen into production-grade engineers.
            </p>

            {/* Micro Pillars telemetry */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="font-mono text-[9px] text-white bg-[#14141E] px-2.5 py-0.5 border border-[#232332] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]" />
                Official Technical Chapter
              </span>
              <span className="font-mono text-[9px] text-[#3DDC84] bg-[#14141E] px-2.5 py-0.5 border border-[#232332]">
                Active Since 2017
              </span>
              <span className="font-mono text-[9px] text-[#00F0FF] bg-[#14141E] px-2 py-0.5 border border-[#232332]">
                VIT Bhopal University
              </span>
            </div>

            {/* Reading navigation cue */}
            <div className="flex items-center gap-2 font-mono text-[9px] text-[#888899]">
              <ChevronDown className="w-3 h-3 text-[#3DDC84] animate-bounce" />
              <span>SCROLL TO DIVE INTO CLUB HERITAGE & FACULTY MENTORS</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. RIGHT SIDE VERTICAL GALLERY RAIL (hidden on mobile)     */}
        {/* ========================================================= */}
        <div className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 select-none">
          <span className="font-mono text-[9px] text-[#888899] tracking-[2px] -rotate-90 origin-center mb-6">
            GALLERY
          </span>

          {gallerySteps.map((step, idx) => {
            const isActive = currentStep === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToStep(step.target)}
                className="group p-1 focus:outline-none cursor-pointer"
                aria-label={`Scroll to ${step.label}`}
              >
                <div
                  className={`transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-2.5 h-2.5 bg-[#3DDC84] shadow-[0_0_8px_#3DDC84] scale-125'
                      : 'w-1.5 h-1.5 bg-[#444455] hover:bg-[#888899]'
                  }`}
                />
              </button>
            );
          })}

          <div ref={percentRef} className="mt-4 font-mono text-[9px] text-[#3DDC84]">
            0%
          </div>
        </div>
      </div>
    </section>
  );
}
