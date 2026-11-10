import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Terminal, ArrowUpRight, Shield, CheckCircle2 } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export default function MobileZoomShowcase() {
  const containerRef = useRef(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  // High-performance pinned RAF scroll loop with silky LERP smoothing (0.20 damping)
  useEffect(() => {
    let animId;
    let isMounted = true;

    const onScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      // Calculate scroll progress exclusively while section is pinned to top of viewport
      // rect.top = 0: top of section locks to top of viewport (progress = 0)
      // rect.top = -(containerHeight - windowHeight): bottom of section reaches bottom of viewport (progress = 1)
      const scrollableDistance = containerHeight - windowHeight;
      if (scrollableDistance <= 0) return;
      
      const rawProgress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
      targetProgressRef.current = rawProgress;
    };

    const updateLoop = () => {
      if (!isMounted) return;
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.12;
        setSmoothProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setSmoothProgress(targetProgressRef.current);
      }
      animId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    animId = requestAnimationFrame(updateLoop);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // =========================================================================
  // USER-REQUESTED PACING & CHOREOGRAPHY:
  // 1. AT START (p = 0.0):
  //    Screen matches user screenshot: phone in center, "Explore the Android"
  //    text and quote visible.
  // 2. ON SCROLL -> IMMEDIATE ZOOM (p: 0.00 -> 0.32):
  //    Mobile zooms from 1.0x to 5.5x as user scrolls towards 32%.
  //    Initial text quickly fades out (0.00 -> 0.12).
  // 3. AT 32% SCROLL:
  //    Mobile fades out (0.26 -> 0.32).
  //    Next heading appears RIGHT AT 32% dead-center in front of user (not up, not down).
  // 4. HEADING READABLE & FADES OUT TO NEXT SECTION (p: 0.34 -> 0.95):
  //    Heading is clearly readable in front of user (0.34 -> 0.78).
  //    Then fades out smoothly (0.78 -> 0.95) as user scrolls into #about!
  // =========================================================================

  // Initial text fades out smoothly as zoom begins (0.00 -> 0.15)
  let initialTextOpacity = 1;
  if (smoothProgress > 0) {
    const t = Math.min(smoothProgress / 0.15, 1);
    initialTextOpacity = 1 - (t * t * (3 - 2 * t)); // buttery smoothstep
  }
  const initialTextTranslateX = (1 - initialTextOpacity) * 35;

  // Phone scale: zooms from 1.0x to 5.5x smoothly by 32% scroll (0.00 -> 0.32)
  let phoneScale = 1.0;
  if (smoothProgress > 0) {
    const zoomRatio = Math.min(smoothProgress / 0.32, 1.0);
    // Smooth cubic ease-out for silky expansion
    const ease = 1 - Math.pow(1 - zoomRatio, 3);
    phoneScale = 1.0 + ease * 4.5;
  }

  // Mobile disappears in a buttery fade as it finishes zooming (0.24 -> 0.32)
  let phoneOpacity = 1;
  if (smoothProgress > 0.24) {
    const t = Math.min((smoothProgress - 0.24) / 0.08, 1);
    phoneOpacity = 1 - (t * t * (3 - 2 * t));
  }

  // Phone chassis dissolves smoothly between 0.14 and 0.28
  let chassisOpacity = 1;
  if (smoothProgress > 0.14) {
    const t = Math.min((smoothProgress - 0.14) / 0.14, 1);
    chassisOpacity = 1 - (t * t * (3 - 2 * t));
  }

  // Inner phone content fades out between 0.10 and 0.24
  let innerContentOpacity = 1;
  if (smoothProgress > 0.10) {
    const t = Math.min((smoothProgress - 0.10) / 0.14, 1);
    innerContentOpacity = 1 - (t * t * (3 - 2 * t));
  }

  // Next heading appears right at 32% scroll with smoothstep fade, holds, then fades out into #about
  let nextHeadingOpacity = 0;
  if (smoothProgress >= 0.28 && smoothProgress <= 0.80) {
    const t = Math.min((smoothProgress - 0.28) / 0.07, 1);
    nextHeadingOpacity = t * t * (3 - 2 * t); // buttery smooth fade-in
  } else if (smoothProgress > 0.80) {
    const t = Math.min((smoothProgress - 0.80) / 0.16, 1);
    nextHeadingOpacity = 1 - (t * t * (3 - 2 * t)); // buttery smooth fade-out
  }

  // Gallery rail step computation
  const gallerySteps = [
    { label: 'EXPLORE', target: 0.0 },
    { label: 'ZOOM', target: 0.32 },
    { label: 'ABOUT', target: 0.65 }
  ];
  const currentStep = smoothProgress < 0.15 ? 0 : smoothProgress < 0.40 ? 1 : 2;

  const scrollToStep = (target) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const containerTop = rect.top + scrollTop;
    const scrollableDistance = rect.height - windowHeight;
    const targetScroll = containerTop + scrollableDistance * target;
    const targetY = Math.max(targetScroll, 0);
    if (window.lenis) {
      window.lenis.scrollTo(targetY, { duration: 1.2 });
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
      className="relative w-full h-[230vh] sm:h-[250vh] bg-[#0A090F] text-white"
    >
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Grid Lines matching androidclub.tech */}
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-800/40 -translate-x-1/2 pointer-events-none hidden md:block" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-neutral-900/30 pointer-events-none hidden lg:block" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-neutral-900/30 pointer-events-none hidden lg:block" />

        {/* Dynamic Ambient Radial Glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#3DDC84]/15 blur-[150px] pointer-events-none transition-transform duration-500"
          style={{
            transform: `scale(${1 + (phoneScale > 1 ? (phoneScale - 1) * 0.3 : 0)})`,
            opacity: 0.4 + nextHeadingOpacity * 0.5
          }}
        />

        {/* Cyber Cyan Accent Glow */}
        <div
          className="absolute w-[450px] h-[450px] rounded-full bg-[#00F0FF]/10 blur-[140px] pointer-events-none -translate-x-56"
          style={{ opacity: 0.2 + nextHeadingOpacity * 0.5 }}
        />

        {/* ========================================================= */}
        {/* 1. "Explore the Android Community" (LEFT FLANK)            */}
        {/* Held 100% visible throughout reading zone so user can read */}
        {/* ========================================================= */}
        <div
          className="absolute left-4 sm:left-12 md:left-20 top-16 sm:top-24 md:top-28 z-20 max-w-[280px] sm:max-w-sm md:max-w-md pointer-events-none"
          style={{
            opacity: initialTextOpacity,
            transform: `translate3d(-${initialTextTranslateX}px, 0, 0)`,
            willChange: 'transform, opacity'
          }}
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
            <span className="font-mono text-[9px] sm:text-[10px] text-[#3DDC84] bg-[#14141E] px-2 py-0.5 sm:px-2.5 sm:py-1 border border-[#232332] hidden sm:inline-block">
              OPEN ECOSYSTEM
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. Community Quote Callout (RIGHT FLANK)                  */}
        {/* ========================================================= */}
        <div
          className="absolute right-6 sm:right-12 md:right-24 bottom-24 sm:bottom-32 z-20 max-w-xs md:max-w-sm text-right pointer-events-none hidden sm:block"
          style={{
            opacity: initialTextOpacity,
            transform: `translate3d(${initialTextTranslateX}px, 0, 0)`,
            willChange: 'transform, opacity'
          }}
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
        {/* 3. CENTER FOCAL ELEMENT: PHONE ZOOMING IN TO WHOLE SCREEN */}
        {/* Holds at 1.0x during reading zone, then zooms to 5.4x      */}
        {/* Mobile disappears in fade way as it finishes zooming in   */}
        {/* ========================================================= */}
        <div
          className="relative z-20 select-none pointer-events-none"
          style={{
            transform: `scale(${phoneScale}) translate3d(0, 0, 0)`,
            transformOrigin: 'center center',
            opacity: phoneOpacity,
            willChange: 'transform, opacity'
          }}
        >
          {/* Cyber bracket accents around phone */}
          <div 
            className="hidden sm:block absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#3DDC84]/60 transition-opacity duration-300"
            style={{ opacity: chassisOpacity }}
          />
          <div 
            className="hidden sm:block absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#3DDC84]/60 transition-opacity duration-300"
            style={{ opacity: chassisOpacity }}
          />
          <div 
            className="hidden sm:block absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#3DDC84]/60 transition-opacity duration-300"
            style={{ opacity: chassisOpacity }}
          />
          <div 
            className="hidden sm:block absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#3DDC84]/60 transition-opacity duration-300"
            style={{ opacity: chassisOpacity }}
          />

          {/* Phone Hardware Chassis (dissolves as screen envelops viewport) */}
          <div 
            className="relative w-[230px] sm:w-[290px] md:w-[340px] aspect-[9/19] bg-[#0c0c14] rounded-[42px] sm:rounded-[48px] p-2.5 sm:p-3.5 border-[2.5px] sm:border-[3px] border-[#2c2c3d] shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
            style={{
              opacity: chassisOpacity,
              willChange: 'opacity'
            }}
          >
            {/* Outer Metallic Rim Highlight */}
            <div className="absolute inset-0 rounded-[46px] border border-white/10 pointer-events-none" />

            {/* Antenna lines */}
            <div className="absolute top-16 -left-[3px] w-[3px] h-6 bg-[#3DDC84]/50" />
            <div className="absolute top-44 -right-[3px] w-[3px] h-10 bg-[#00F0FF]/50" />

            {/* Inner Screen Display */}
            <div className="relative w-full h-full bg-[#050508] rounded-[36px] overflow-hidden border border-[#1f1f2e] flex flex-col justify-between">
              {/* Status Bar */}
              <div 
                className="flex items-center justify-between px-5 pt-3 pb-1 text-[9px] font-mono text-[#888899] z-20"
                style={{ opacity: innerContentOpacity }}
              >
                <span className="font-bold text-white tracking-wider">13:37</span>
                {/* Punch Hole Camera */}
                <div className="w-3.5 h-3.5 bg-black rounded-full border border-[#222] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#091114] rounded-full" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#3DDC84]">5G</span>
                  <span className="w-2.5 h-1.5 border border-[#3DDC84] rounded-sm bg-[#3DDC84]" />
                </div>
              </div>

              {/* Inside Screen Content */}
              <div 
                className="flex-1 flex flex-col items-center justify-center text-center px-4 py-4"
                style={{ opacity: innerContentOpacity }}
              >
                {/* Glowing Android Robot Logo */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#3DDC84]/20 blur-md animate-pulse" />
                  <img
                    src="/Logo.png"
                    alt="Android Robot"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain relative z-10 drop-shadow-[0_0_15px_#3DDC84]"
                  />
                </div>

                <div className="font-mono text-[9px] sm:text-[10px] text-[#3DDC84] tracking-[2px] font-bold uppercase mb-1">
                  EXPLORE MORE ABOUT
                </div>
                <h3 className="font-grotesk text-[16px] sm:text-[18px] font-bold text-white tracking-tight mb-2">
                  THE ANDROID CLUB
                </h3>

                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#14141E] border border-[#2d2d40] text-[9px] font-mono text-[#A1A1AA] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84] animate-ping" />
                  <span>AC-OS 15.0 • VIT BHOPAL</span>
                </div>

                <div className="text-[9px] font-mono text-[#666677] flex items-center gap-1">
                  <ChevronDown className="w-3 h-3 text-[#3DDC84] animate-bounce" />
                  <span>SCROLL TO DIVE IN</span>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div 
                className="pb-2.5 pt-1 flex justify-center"
                style={{ opacity: innerContentOpacity }}
              >
                <div className="w-24 h-1 bg-[#2e2e42] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. BLENDED NEXT HEADING: APPEARS AT 32% SCROLL            */}
        {/* Moved down cleanly in between the green & black space      */}
        {/* ========================================================= */}
        <div
          className="absolute inset-x-0 top-[42%] sm:top-[44%] md:top-[46%] z-40 px-4 sm:px-6 md:px-12 pointer-events-none"
          style={{
            opacity: nextHeadingOpacity,
            willChange: 'opacity'
          }}
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
            <h2 className="font-grotesk text-[24px] sm:text-[34px] md:text-[44px] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.05] mb-2 sm:mb-2.5">
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

          <div className="mt-4 font-mono text-[9px] text-[#3DDC84]">
            {Math.round(smoothProgress * 100)}%
          </div>
        </div>
      </div>
    </section>
  );
}
