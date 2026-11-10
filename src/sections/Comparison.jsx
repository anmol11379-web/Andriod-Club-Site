import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { COMPARISON_TABLE } from '../data/clubData';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  return (
    <section id="comparison" className="flex flex-col w-full bg-[#07070C] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <SectionHeader
          tag="[06] COMPETITIVE ADVANTAGE"
          title={"WHY ANDROID CLUB\nWINS."}
          subtitle="How our engineering discipline, peer code review culture, and production standards differentiate our core developers from standard university student chapters."
        />

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between font-mono text-[10px] text-[#888899] px-1">
          <span>SWIPE HORIZONTALLY TO COMPARE</span>
          <span className="text-[#3DDC84]">⇄</span>
        </div>

        {/* Comparison Matrix Table */}
        <div className="w-full overflow-x-auto border border-[#232332] bg-[#0E0E16] touch-pan-x">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#232332] bg-[#14141E]">
                <th className="p-4 sm:p-5 font-mono text-[11px] font-bold text-[#888899] tracking-[1.5px] uppercase w-1/3">
                  CRITERIA • METRIC
                </th>
                <th className="p-4 sm:p-5 font-mono text-[11px] font-bold text-[#3DDC84] tracking-[1.5px] uppercase bg-[#3DDC84]/10 border-x border-[#3DDC84]/30 w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#3DDC84]" />
                    <span>ANDROID CLUB CORE</span>
                  </div>
                </th>
                <th className="p-4 sm:p-5 font-mono text-[11px] font-bold text-[#666677] tracking-[1.5px] uppercase w-1/3">
                  AVERAGE STUDENT SOCIETY
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#232332]/60 hover:bg-[#12121D] transition-colors"
                >
                  <td className="p-4 sm:p-5 font-grotesk text-[14px] font-bold text-[#F5F5F0]">
                    {row.metric}
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-[12px] text-[#A3E635] bg-[#3DDC84]/5 border-x border-[#3DDC84]/20 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#3DDC84] shrink-0 mt-0.5" />
                      <span>{row.androidClub}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 font-mono text-[12px] text-[#777788] leading-relaxed">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-[#FF0055] shrink-0 mt-0.5" />
                      <span>{row.typicalClub}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

