import React, { useState } from 'react';
import { Smartphone, Globe, Cpu, Trophy, Sparkles, BookOpen, UserCheck, Shield, Mail, ChevronRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { HIGHLIGHT_STATS_PILLARS, CLUB_INFO } from '../data/clubData';

export default function About() {
  const [selectedCoord, setSelectedCoord] = useState(1); // default to Dr. Adarsh Patel (Faculty Coordinator)

  const icons = [
    <Smartphone className="w-5 h-5 text-[#3DDC84]" />,
    <Globe className="w-5 h-5 text-[#00F0FF]" />,
    <Cpu className="w-5 h-5 text-[#BF00FF]" />,
    <Trophy className="w-5 h-5 text-[#FFB700]" />
  ];

  const currentCoord = CLUB_INFO.coordinators[selectedCoord] || CLUB_INFO.coordinators[1];

  return (
    <section id="about" className="relative flex flex-col w-full bg-[#0A090F] pt-20 md:pt-28 pb-16 md:pb-24 px-4 sm:px-6 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-10">
        {/* Story & Heritage Callout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#111118] border border-[#232332] p-6 sm:p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#3DDC84]/5 blur-3xl pointer-events-none" />

          {/* Left 2 Cols: Founding Heritage & Mission */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-[#3DDC84] tracking-[2px] mb-2">HERITAGE & MISSION</div>
              <h3 className="font-grotesk text-[22px] sm:text-[28px] font-bold text-white mb-4">
                Founded in 2017 by Abhay Nigam
              </h3>
              <p className="font-sans text-[13px] sm:text-[15px] text-[#A1A1AA] leading-relaxed mb-4">
                {CLUB_INFO.founded.story}
              </p>
              <p className="font-sans text-[13px] sm:text-[15px] text-[#A1A1AA] leading-relaxed">
                Whether organizing 12-hour high-octane coding sprints, hosting international open-source contribution drives, or collaborating with leading tech companies, Android Club remains a launching pad for ambitious student technologists.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-[#232332] flex flex-wrap gap-4 text-xs font-mono text-[#888899]">
              <span className="flex items-center gap-1.5 text-white">
                <Shield className="w-3.5 h-3.5 text-[#3DDC84]" />
                Official Technical Chapter
              </span>
              <span>•</span>
              <span className="text-[#3DDC84]">VIT Bhopal University</span>
              <span>•</span>
              <span>Active Since 2017</span>
            </div>
          </div>

          {/* Right Col: Interactive Faculty Leadership Card with Actual Photo */}
          <div className="flex flex-col justify-between bg-[#14141E] border border-[#262638] p-5 sm:p-6 relative group overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3DDC84]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232332]">
                <div className="font-mono text-[9px] text-[#00F0FF] tracking-[2px] font-bold">FACULTY LEADERSHIP</div>
                <span className="font-mono text-[8px] bg-[#3DDC84]/15 text-[#3DDC84] px-2 py-0.5 border border-[#3DDC84]/40 font-semibold tracking-wider">
                  MENTOR
                </span>
              </div>

              {/* Photo & Mentor Meta */}
              <div className="flex items-center gap-4 mb-4">
                {/* Official Faculty Photo */}
                <div className="relative w-20 h-24 sm:w-22 sm:h-26 shrink-0 bg-[#0A090F] border-2 border-[#3DDC84]/50 overflow-hidden shadow-[0_0_15px_rgba(61,220,132,0.15)] group-hover:border-[#3DDC84] transition-all">
                  <img
                    src={currentCoord.photo}
                    alt={currentCoord.name}
                    className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-[#3DDC84]" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-grotesk text-[16px] sm:text-[18px] font-bold text-white leading-tight mb-1">
                    {currentCoord.name}
                  </h4>
                  <p className="font-mono text-[11px] text-[#3DDC84] font-medium leading-snug">
                    {currentCoord.role}
                  </p>
                  <span className="font-mono text-[10px] text-[#888899] block mt-1">
                    VIT Bhopal University
                  </span>

                  {currentCoord.email && (
                    <a
                      href={`mailto:${currentCoord.email}`}
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-[#00F0FF] hover:underline mt-2"
                      title="Contact coordinator"
                    >
                      <Mail className="w-3 h-3" />
                      <span className="truncate max-w-[130px] sm:max-w-[160px]">{currentCoord.email}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Coordinator Bio */}
              <p className="font-sans text-[12px] sm:text-[13px] text-[#A1A1AA] leading-relaxed mb-4 line-clamp-3">
                {currentCoord.bio}
              </p>

              {/* Coordinator Switcher Buttons */}
              <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-[#232332]">
                {CLUB_INFO.coordinators.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCoord(idx)}
                    className={`px-1.5 py-1 text-[9px] font-mono font-bold transition-all text-center border truncate cursor-pointer ${
                      selectedCoord === idx
                        ? 'bg-[#3DDC84] text-[#0A090F] border-[#3DDC84]'
                        : 'bg-[#0f0f17] text-[#888899] border-[#222232] hover:text-white hover:border-[#444455]'
                    }`}
                    title={c.name}
                  >
                    {idx === 0 ? 'AD-SW' : idx === 1 ? 'COORD' : 'CO-COORD'}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#232332] flex items-center justify-between text-xs font-mono">
              <span className="text-[#888899]">STUDENT CORE:</span>
              <span className="text-white font-bold">80+ LEADS & DEVS</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (Cloned Card Style from v0) */}
        <div>
          <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#888899]">
            <span className="w-1.5 h-1.5 bg-[#3DDC84]" />
            <span className="tracking-[2px]">CLUB FOCUS PILLARS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HIGHLIGHT_STATS_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between p-6 bg-[#111118] border border-[#232332] hover:border-[#3DDC84] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(61,220,132,0.15)]"
              >
                {/* Tech corner accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#3DDC84] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top row: Metric & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#888899] tracking-wider">
                      [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <div className="p-2 bg-[#181824] border border-[#26263a] group-hover:border-[#3DDC84]/50 transition-colors">
                      {icons[idx]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-grotesk text-[17px] font-bold text-[#F5F5F0] group-hover:text-[#3DDC84] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-[13px] text-[#888899] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Highlight Stat */}
                <div className="mt-6 pt-4 border-t border-[#1f1f2e] flex items-center justify-between">
                  <span className="font-mono text-[11px] font-bold text-[#3DDC84]">
                    {pillar.highlight}
                  </span>
                  <span className="text-[10px] font-mono text-[#666677] uppercase">
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
