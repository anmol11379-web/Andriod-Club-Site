import React, { useState, useEffect } from 'react';

export default function WebsiteIntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING KERNEL 6.1-ANDROID...');
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock body scroll during bootloader
    document.body.style.overflow = 'hidden';

    const bootSteps = [
      { at: 15, text: 'MOUNTING VIT BHOPAL REPOSITORIES...' },
      { at: 35, text: 'SYNCHRONIZING 7 CORE TECH DOMAINS & SDC...' },
      { at: 60, text: 'COMPILING JETPACK COMPOSE & ON-DEVICE AI...' },
      { at: 80, text: 'STAGING 3D HARDWARE ZOOM & EVENT ASSETS...' },
      { at: 95, text: 'ENGAGING GPU ACCELERATION & SHADERS...' },
      { at: 100, text: 'CORE SYSTEM READY // ENGAGING INTERFACE' }
    ];

    let current = 0;
    // Fast & snappy bootloader count-up
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 3) + 2;

      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setProgress(100);
        setStatusText('CORE SYSTEM READY // ENGAGING INTERFACE');

        // Hold at 100% briefly before curtain lift
        setTimeout(() => {
          setIsExiting(true);
          // Snappy, sleek shutter slide animation (950ms)
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 950);
        }, 160);
      } else {
        setProgress(current);
        const match = bootSteps.find(s => current >= s.at && current < s.at + 20);
        if (match) setStatusText(match.text);
      }
    }, 48);

    // Skip on user interaction (Click or any Key)
    const handleSkip = () => {
      clearInterval(interval);
      setProgress(100);
      setStatusText('SKIPPING BOOTLOADER // WELCOME TO ANDROID CLUB');
      setIsExiting(true);
      setTimeout(() => {
        setIsDone(true);
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 800);
    };

    window.addEventListener('keydown', handleSkip, { once: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleSkip);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      onClick={() => {
        if (!isExiting) {
          setIsExiting(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 800);
        }
      }}
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden cursor-pointer select-none transition-opacity duration-[950ms] ${
        isExiting ? 'pointer-events-none' : ''
      }`}
    >
      {/* Top Shutter Curtain - Sleek Seamless Reveal */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#06050A] transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="absolute inset-0 bg-tech-grid opacity-25" />
      </div>

      {/* Bottom Shutter Curtain - Sleek Seamless Reveal */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#06050A] transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="absolute inset-0 bg-tech-grid opacity-25" />
      </div>

      {/* Center Content Box (Fades out smoothly as curtains open) */}
      <div
        className={`relative z-20 flex flex-col items-center justify-center m-auto w-full max-w-lg px-6 transition-all duration-500 ease-out ${
          isExiting ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top Header Telemetry */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#888899] mb-7 pb-2 border-b border-[#232332]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-ping" />
            <span className="text-[#3DDC84] font-bold">BOOT_SYSTEM // v2.6</span>
          </div>
          <span>VIT BHOPAL UNIVERSITY</span>
        </div>

        {/* Pulsing Android Club Brand Emblem */}
        <div className="relative mb-6 flex items-center justify-center">
          <div className="absolute w-24 h-24 bg-[#3DDC84]/15 rounded-full blur-2xl animate-pulse" />
          <div className="absolute w-32 h-32 bg-[#00F0FF]/10 rounded-full blur-3xl" />
          
          <div className="relative w-20 h-20 bg-[#12111C] border border-[#3DDC84]/50 p-3 shadow-[0_0_30px_rgba(61,220,132,0.3)] flex items-center justify-center group">
            <img
              src="/Logo.png"
              alt="Android Club Logo"
              className="w-14 h-14 object-contain filter drop-shadow-[0_0_12px_rgba(61,220,132,0.6)] animate-pulse"
            />
            {/* Corner Tech Reticles */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-[#3DDC84]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-[#3DDC84]" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-[#3DDC84]" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-[#3DDC84]" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="font-grotesk text-2xl sm:text-3xl font-bold tracking-[2px] text-white">
            ANDROID CLUB
          </h1>
          <p className="font-mono text-[10px] sm:text-[11px] text-[#3DDC84] tracking-[1.5px] mt-1 uppercase">
            BUILD WITHOUT LIMITS • OFFICIAL TECHNICAL CHAPTER
          </p>
        </div>

        {/* Terminal Boot Log */}
        <div className="w-full bg-[#0A0912]/90 border border-[#232332] p-3 mb-4 font-mono text-left">
          <div className="flex items-center justify-between text-[9px] text-[#555566] mb-1">
            <span>TERMINAL_OUTPUT</span>
            <span className="text-[#3DDC84]">LIVE</span>
          </div>
          <div className="text-[11px] text-[#F5F5F0] truncate flex items-center gap-2">
            <span className="text-[#3DDC84] font-bold">&gt;</span>
            <span>{statusText}</span>
          </div>
        </div>

        {/* Sleek Monospace Progress Bar */}
        <div className="w-full space-y-2">
          <div className="flex justify-between items-center font-mono text-[11px]">
            <span className="text-[#888899]">INITIALIZATION:</span>
            <span className="text-[#3DDC84] font-bold text-sm tracking-wider">
              {String(progress).padStart(3, '0')}%
            </span>
          </div>
          
          <div className="w-full h-1.5 bg-[#14141E] border border-[#232332] overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#00F0FF] via-[#3DDC84] to-[#36EA66] shadow-[0_0_15px_rgba(61,220,132,0.8)] transition-all duration-75 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Subtle Skip Hint */}
        <div className="mt-7 font-mono text-[9px] text-[#555566] tracking-[1px] uppercase hover:text-[#888899] transition-colors">
          [CLICK ANYWHERE OR PRESS ANY KEY TO SKIP]
        </div>
      </div>
    </div>
  );
}
