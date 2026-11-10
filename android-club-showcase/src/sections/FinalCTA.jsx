import React from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export default function FinalCTA() {
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
    <section className="flex flex-col items-center w-full bg-[#0A090F] py-20 px-4 sm:px-6 md:py-28 md:px-12 gap-8 md:gap-10 border-t-2 border-t-[#3DDC84] text-center relative overflow-hidden">
      {/* Background cyber accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3DDC84]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Pill Badge */}
      <div className="flex items-center justify-center gap-2 h-8 px-4 bg-[#14141E] border border-[#FF0055] text-[#FF0055]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF0055]" />
        <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[2px]">
          [CORE RECRUITMENT: CLOSED]
        </span>
      </div>

      {/* Massive Callout Heading */}
      <h2 className="font-grotesk text-[clamp(32px,6vw,72px)] font-bold text-[#F5F5F0] tracking-[-1px] leading-[1.05] max-w-[900px]">
        BUILD WITH THE
        <br />
        <span className="text-[#3DDC84] drop-shadow-[0_0_25px_rgba(61,220,132,0.3)]">
          ANDROIDS OF VIT BHOPAL.
        </span>
      </h2>

      <p className="font-mono text-[12px] sm:text-[14px] text-[#888899] max-w-[600px] leading-relaxed">
        While core recruitment is currently closed, our open-source software and public community hackathons are open to everyone.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <a
          href="https://github.com/androidvitb"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto px-8 py-3.5 bg-[#3DDC84] hover:bg-[#36EA66] text-[#0A090F] font-grotesk font-bold text-[13px] md:text-[14px] tracking-[1.5px] transition-all shadow-[0_0_25px_rgba(61,220,132,0.35)] flex items-center justify-center gap-2 group cursor-pointer"
        >
          <Github className="w-4 h-4" />
          <span>EXPLORE GITHUB PROJECTS</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <button
          onClick={() => scrollTo('contact')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#14141E] hover:bg-[#1a1a28] text-[#F5F5F0] hover:text-[#3DDC84] border border-[#323246] hover:border-[#3DDC84] font-grotesk font-bold text-[13px] md:text-[14px] tracking-[1.5px] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>DIRECT INQUIRY</span>
        </button>
      </div>
    </section>
  );
}

