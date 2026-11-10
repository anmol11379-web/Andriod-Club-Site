import React from 'react';
import { STATS } from '../data/clubData';

export default function StatsBanner() {
  return (
    <section className="flex flex-col w-full bg-[#3DDC84] py-12 px-4 sm:px-6 md:py-16 md:px-12 text-[#0A090F] select-none border-y-2 border-[#222]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#0A090F]" />
          <span className="font-mono text-[11px] font-bold text-[#0A090F] tracking-[3px] uppercase">
            [03] TELEMETRY & SCALE
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-2">
          {STATS.map((stat, idx) => (
            <div 
              key={idx}
              className={`flex flex-col gap-1 items-start sm:items-center justify-center ${
                idx !== STATS.length - 1 ? 'lg:border-r lg:border-[#0A090F]/20 lg:pr-8' : ''
              }`}
            >
              <span className="font-grotesk text-[42px] sm:text-[54px] md:text-[68px] font-bold text-[#0A090F] tracking-[-2px] leading-none">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#0A090F]/80 tracking-[2px] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

