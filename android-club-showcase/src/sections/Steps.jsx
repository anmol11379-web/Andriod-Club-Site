import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { RECRUITMENT_STEPS } from '../data/clubData';
import { Target, Code2, Users, Rocket } from 'lucide-react';

export default function Steps() {
  const stepIcons = [
    <Target className="w-5 h-5 text-[#3DDC84]" />,
    <Code2 className="w-5 h-5 text-[#00F0FF]" />,
    <Users className="w-5 h-5 text-[#FF7300]" />,
    <Rocket className="w-5 h-5 text-[#BF00FF]" />
  ];

  return (
    <section className="flex flex-col w-full bg-[#0D0D14] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-12 md:gap-16 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-10">
        <SectionHeader
          tag="[02] RECRUITMENT ROADMAP"
          title={"FOUR STEPS.\nONE CORE TEAM."}
          subtitle="Joining the Android Club core team is a transparent, merit-focused journey designed to test your enthusiasm, creativity, and commitment to building real software."
        />

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {RECRUITMENT_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 bg-[#0A090F] border border-[#232332] hover:border-[#3DDC84] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-grotesk text-[42px] font-bold text-[#3DDC84] tracking-[-2px] leading-none">
                    {s.step}
                  </span>
                  <div className="p-2 bg-[#14141E] border border-[#232332] group-hover:border-[#3DDC84]/50 transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="font-grotesk text-[17px] font-bold text-[#F5F5F0] tracking-tight mb-2 group-hover:text-[#3DDC84] transition-colors">
                  {s.title}
                </h3>

                <p className="font-mono text-[11px] text-[#888899] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#232332] flex items-center justify-between text-[9px] font-mono text-[#888899]">
                <span>STAGE {idx + 1} OF 4</span>
                <span className="text-[#3DDC84]">REQUIRED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

