import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { DOMAINS_DATA } from '../data/clubData';
import { Smartphone, Globe, Cpu, Palette, Briefcase, Calendar, Megaphone, Video, PenTool, DollarSign, ArrowRight } from 'lucide-react';

export default function Domains() {
  const [activeTab, setActiveTab] = useState('tech');

  const techIcons = {
    android: <Smartphone className="w-5 h-5 text-[#3DDC84]" />,
    sdc: <Globe className="w-5 h-5 text-[#00F0FF]" />,
    rnd: <Cpu className="w-5 h-5 text-[#BF00FF]" />,
    uiux: <Palette className="w-5 h-5 text-[#FFB700]" />
  };

  const nonTechIcons = [
    <Briefcase className="w-5 h-5 text-[#3DDC84]" />,
    <Calendar className="w-5 h-5 text-[#00F0FF]" />,
    <Megaphone className="w-5 h-5 text-[#FF7300]" />,
    <Video className="w-5 h-5 text-[#FF0055]" />,
    <PenTool className="w-5 h-5 text-[#BF00FF]" />,
    <DollarSign className="w-5 h-5 text-[#FFB700]" />
  ];

  return (
    <section id="domains" className="flex flex-col w-full bg-[#0A090F] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            tag="[04] DOMAINS & SPECIALIZATIONS"
            title={"THE FULL STACK.\nIN ONE ECOSYSTEM."}
            subtitle="Whether you write low-level Kotlin coroutines, design sleek Figma interfaces, or orchestrate 500-attendee national hackathons, there is a dedicated home for your skills."
          />

          {/* Track Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-[#14141E] border border-[#232332] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 font-mono text-[11px] font-bold tracking-[1px] transition-all ${
                activeTab === 'tech'
                  ? 'bg-[#3DDC84] text-[#0A090F]'
                  : 'text-[#888899] hover:text-white'
              }`}
            >
              [TECHNICAL TRACKS]
            </button>
            <button
              onClick={() => setActiveTab('nontech')}
              className={`px-4 py-2 font-mono text-[11px] font-bold tracking-[1px] transition-all ${
                activeTab === 'nontech'
                  ? 'bg-[#3DDC84] text-[#0A090F]'
                  : 'text-[#888899] hover:text-white'
              }`}
            >
              [NON-TECH TRACKS]
            </button>
          </div>
        </div>

        {/* Technical Tracks Grid */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {DOMAINS_DATA.technical.map((domain) => (
              <div
                key={domain.id}
                className="pixel-card p-6 sm:p-8 flex flex-col justify-between group"
                style={{ borderLeftColor: domain.accent, borderLeftWidth: '3px' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1C1C2B] text-[#3DDC84] border border-[#2B2B3D]">
                        TRACK • {domain.id.toUpperCase()}
                      </span>
                    </div>
                    <div className="p-2 bg-[#1A1A26] border border-[#2B2B3D]">
                      {techIcons[domain.id]}
                    </div>
                  </div>

                  <h3 className="font-grotesk text-[20px] sm:text-[24px] font-bold text-white mb-2 group-hover:text-[#3DDC84] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="font-mono text-[12px] text-[#A1A1AA] mb-4">
                    {domain.tagline}
                  </p>

                  <p className="font-sans text-[13px] text-[#888899] leading-relaxed mb-6">
                    {domain.focus}
                  </p>
                </div>

                <div>
                  <div className="font-mono text-[10px] text-[#888899] tracking-[1px] mb-2 uppercase">
                    Core Tooling & Frameworks:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[10px] px-2.5 py-1 bg-[#11111A] text-[#F5F5F0] border border-[#262638]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Non-Technical Tracks Grid */}
        {activeTab === 'nontech' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {DOMAINS_DATA.nonTechnical.map((domain, idx) => (
              <div
                key={domain.id}
                className="pixel-card p-6 flex flex-col justify-between group hover:border-[#00F0FF]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1C1C2B] text-[#00F0FF] border border-[#2B2B3D]">
                      NON-TECH • 0{idx + 1}
                    </span>
                    <div className="p-2 bg-[#1A1A26] border border-[#2B2B3D]">
                      {nonTechIcons[idx]}
                    </div>
                  </div>

                  <h3 className="font-grotesk text-[18px] font-bold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {domain.title}
                  </h3>

                  <p className="font-sans text-[13px] text-[#888899] leading-relaxed">
                    {domain.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#232332] flex items-center justify-between text-[10px] font-mono text-[#888899]">
                  <span>RECRUITMENT STATUS:</span>
                  <span className="text-[#FF0055] font-bold">CLOSED</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

