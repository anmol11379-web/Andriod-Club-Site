import React from 'react';
import { Terminal, ArrowUpRight, Code, Sparkles, ChevronRight } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';
import CollaborativeCursors from '../components/CollaborativeCursors';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -60, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center w-full bg-[#0A090F] pt-28 pb-16 px-4 sm:px-6 md:pt-36 md:pb-24 md:px-12 overflow-hidden border-b border-[#232332]">
      {/* Collaborative Live Android Developer Cursors */}
      <CollaborativeCursors />

      {/* Background Cyber Tech Grid & Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3DDC84]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center w-full max-w-[1280px] mx-auto text-center">
        {/* Top Announcement Pill (Cloned from v0: [NEW] // VERSION 2.0 NOW LIVE) */}
        <div className="inline-flex items-center justify-center gap-2 h-8 px-3 sm:px-4 bg-[#14141E] border-2 border-[#3DDC84] shadow-[0_0_15px_rgba(61,220,132,0.2)]">
          <div className="w-2 h-2 bg-[#3DDC84] shrink-0 animate-blink" />
          <span className="font-mono text-[9px] sm:text-[11px] font-bold text-[#3DDC84] tracking-[1.5px] whitespace-nowrap">
            {CLUB_INFO.announcement}
          </span>
        </div>

        {/* Spacing */}
        <div className="h-6 md:h-8" />

        {/* Massive Dual Display Heading (Cloned from v0 pixel perfect) */}
        <h1 className="font-grotesk text-[clamp(34px,7.5vw,90px)] font-bold text-[#F5F5F0] tracking-[-1px] md:tracking-[-2px] leading-[0.98] text-center w-full max-w-[1150px]">
          BUILD WITHOUT
          <br />
          <span className="text-[#3DDC84] drop-shadow-[0_0_35px_rgba(61,220,132,0.3)]">
            LIMITS.
          </span>
        </h1>

        <div className="h-2 md:h-3" />

        <div className="font-grotesk text-[clamp(20px,4.5vw,46px)] font-bold text-[#F5F5F0]/90 tracking-[-0.5px] leading-tight">
          ANDROID CLUB
        </div>

        {/* Subtitle / Supporting Line */}
        <p className="mt-5 font-mono text-[11px] sm:text-[13px] md:text-[15px] text-[#888899] tracking-[0.5px] md:tracking-[1px] leading-[1.65] max-w-[760px]">
          {CLUB_INFO.subTagline}
        </p>

        {/* Dual Primary & Secondary CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('apply')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#3DDC84] hover:bg-[#36EA66] text-[#0A090F] font-grotesk font-bold text-[13px] md:text-[14px] tracking-[1.5px] transition-all shadow-[0_0_25px_rgba(61,220,132,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>JOIN THE CLUB</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#14141E] hover:bg-[#1a1a28] text-[#F5F5F0] hover:text-[#3DDC84] border border-[#323246] hover:border-[#3DDC84] font-grotesk font-bold text-[13px] md:text-[14px] tracking-[1.5px] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Code className="w-4 h-4 text-[#3DDC84]" />
            <span>EXPLORE PROJECTS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Micro Telemetry Footer in Hero */}
        <div className="mt-14 pt-6 border-t border-[#232332]/60 w-full max-w-[850px] flex flex-wrap items-center justify-around gap-4 text-left">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF0055]" />
            <span className="font-mono text-[10px] md:text-[11px] text-[#888899]">
              CORE RECRUITMENT: <strong className="text-[#FF0055]">CLOSED</strong>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF7300]" />
            <span className="font-mono text-[10px] md:text-[11px] text-[#888899]">
              NEXT EVENT: <strong className="text-white">YET TO ANNOUNCE</strong>
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#FF7300]" />
            <span className="font-mono text-[10px] md:text-[11px] text-[#888899]">
              TARGET APIS: <strong className="text-white">ANDROID 14 / 15</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

