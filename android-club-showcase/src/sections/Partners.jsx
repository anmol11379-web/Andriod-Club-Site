import React from 'react';
import { PARTNERS_LIST } from '../data/clubData';

export default function Partners() {
  return (
    <section className="flex flex-col items-center w-full bg-[#0D0D14] py-10 px-4 sm:px-6 md:px-12 border-b border-[#232332]">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-1.5 h-1.5 bg-[#3DDC84]" />
        <span className="font-mono text-[10px] md:text-[11px] text-[#888899] tracking-[3px] uppercase">
          SPONSORS, PLATFORMS & ECOSYSTEM PARTNERS
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 w-full max-w-[1200px]">
        {PARTNERS_LIST.map((partner, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#14141E]/60 border border-[#232332] hover:border-[#3DDC84]/60 transition-colors group cursor-default"
          >
            <span className="font-grotesk text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#888899] group-hover:text-[#F5F5F0] tracking-[2px] transition-colors">
              {partner.name}
            </span>
            <span className="font-mono text-[8px] text-[#3DDC84]/70 bg-[#3DDC84]/10 px-1.5 py-0.2">
              {partner.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

