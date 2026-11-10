import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { PROJECTS_DATA } from '../data/clubData';
import { Github, ExternalLink, Code2, Layers, CheckCircle2, Star } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'ALL BUILDS' },
    { id: 'android', label: 'ANDROID NATIVE' },
    { id: 'web', label: 'WEB / SDC' },
    { id: 'ai-iot', label: 'EDGE AI & IOT' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'android') return p.category.includes('Android') || p.category.includes('Mobile');
    if (filter === 'web') return p.category.includes('Web') || p.category.includes('Utility');
    if (filter === 'ai-iot') return p.category.includes('AI') || p.category.includes('IoT');
    return true;
  });

  return (
    <section id="projects" className="flex flex-col w-full bg-[#0D0D14] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            tag="[05] OPEN SOURCE SHOWCASE"
            title={"BUILT BY STUDENTS.\nSHIPPED TO PRODUCTION."}
            subtitle="Explore our active GitHub projects, production utilities, and research prototypes engineered with industry-standard architectures."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-[#14141E] border border-[#232332] self-start md:self-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[1px] transition-all ${
                  filter === c.id
                    ? 'bg-[#3DDC84] text-[#0A090F]'
                    : 'text-[#888899] hover:text-white'
                }`}
              >
                [{c.label}]
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="pixel-card p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#232332]">
                  <span className="font-mono text-[9px] px-2 py-0.5 bg-[#1C1C2B] text-[#3DDC84] border border-[#2B2B3D]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3DDC84]" />
                    {project.status}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-grotesk text-[20px] font-bold text-white group-hover:text-[#3DDC84] transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="font-mono text-[11px] text-[#00F0FF] mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-[13px] text-[#888899] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-1.5 mb-5 bg-[#0e0e17] p-3 border border-[#222230]">
                  <div className="font-mono text-[8px] text-[#888899] tracking-[1px] uppercase mb-1">
                    KEY HIGHLIGHTS:
                  </div>
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-1.5 font-mono text-[10px] text-[#F5F5F0]">
                      <CheckCircle2 className="w-3 h-3 text-[#3DDC84] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges & GitHub Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[9px] px-2 py-0.5 bg-[#171722] text-[#F5F5F0] border border-[#28283a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#232332] flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#F5F5F0] hover:text-[#3DDC84] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE</span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1C1C28] hover:bg-[#3DDC84] hover:text-[#0A090F] text-[#888899] transition-all"
                    aria-label={`Open ${project.name} repository`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

