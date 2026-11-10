import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { TEAM_MEMBERS } from '../data/clubData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = TEAM_MEMBERS.filter((m) => m.quote);

  return (
    <section className="flex flex-col w-full bg-[#0D0D14] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <SectionHeader
          tag="[08] VOICES FROM THE CORE"
          title={"REAL BUILDERS.\nREAL GROWTH."}
          subtitle="Hear directly from the student leaders and engineers who steer Android Club initiatives, mentor incoming recruits, and build community."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((member, idx) => (
            <div
              key={idx}
              className="pixel-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#3DDC84]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232332]">
                  <Quote className="w-6 h-6 text-[#3DDC84] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-[#171724] text-[#888899] border border-[#2B2B3D]">
                    {member.badge}
                  </span>
                </div>

                <p className="font-sans text-[13px] sm:text-[14px] text-[#D4D4D8] leading-relaxed italic mb-6">
                  "{member.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#232332] flex items-center gap-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-none border border-[#3DDC84]/50 object-cover bg-[#1E1E2C]"
                  onError={(e) => {
                    e.target.src = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';
                  }}
                />
                <div className="flex flex-col">
                  <span className="font-grotesk text-[14px] font-bold text-white group-hover:text-[#3DDC84] transition-colors">
                    {member.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#888899]">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

