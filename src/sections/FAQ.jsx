import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { FAQS } from '../data/clubData';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="flex flex-col w-full bg-[#07070C] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
        {/* Left Header */}
        <div className="lg:w-1/3 flex flex-col justify-start">
          <SectionHeader
            tag="[10] COMMON QUERIES"
            title={"GOT\nQUESTIONS?"}
            subtitle="Everything you need to know about the recruitment process, domain requirements, and expectations from core members."
          />

          <div className="mt-8 p-5 bg-[#14141E] border border-[#232332] text-left">
            <div className="font-mono text-[9px] text-[#3DDC84] tracking-[1.5px] uppercase mb-1">NEED CLARIFICATION?</div>
            <p className="font-sans text-[12px] text-[#888899] mb-3">
              Reach out directly to our student coordinators via Discord or campus office hours.
            </p>
            <a
              href="mailto:androidclub@vitbhopal.ac.in"
              className="font-mono text-[11px] text-[#3DDC84] hover:underline"
            >
              androidclub@vitbhopal.ac.in →
            </a>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:w-2/3 flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`border transition-all duration-200 ${
                  isOpen 
                    ? 'bg-[#14141E] border-[#3DDC84]' 
                    : 'bg-[#0E0E16] border-[#232332] hover:border-[#333348]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#3DDC84]"
                  aria-expanded={isOpen}
                >
                  <span className="font-grotesk text-[15px] sm:text-[17px] font-bold text-[#F5F5F0]">
                    {faq.q}
                  </span>
                  <div className="p-1 bg-[#1A1A26] border border-[#2B2B3D] shrink-0 text-[#3DDC84]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-left border-t border-[#232332]/60 animate-fadeIn">
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#A1A1AA] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

