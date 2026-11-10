import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { TEAM_MEMBERS, CLUB_INFO } from '../data/clubData';
import { Github, Linkedin, Mail, Instagram, ShieldCheck, Award } from 'lucide-react';

export default function Team() {
  // Default active category: Faculty Leadership
  const [filter, setFilter] = useState('faculty');

  // Faculty mentors formatted with official profiles
  const facultyMembers = useMemo(() => CLUB_INFO.coordinators.map((c) => ({
    name: c.name,
    role: c.role,
    domain: 'University Faculty Leadership',
    photo: c.photo,
    email: c.email,
    bio: c.bio,
    badge: 'FACULTY PATRON',
    isFaculty: true,
    socials: {
      email: c.email
    }
  })), []);

  const allMembers = useMemo(() => [...facultyMembers, ...TEAM_MEMBERS], [facultyMembers]);

  // Specific team divisions
  const adminMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain === 'Executive Leadership' || 
      m.role.toLowerCase().includes('president') || 
      m.role.toLowerCase().includes('secretary') || 
      m.role.toLowerCase().includes('operation manager')
    )
  ), [allMembers]);

  const leadMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.role.toLowerCase().includes('lead')
    )
  ), [allMembers]);

  const techMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain.includes('Android') || 
      m.domain.includes('Software Development') || 
      m.domain.includes('SDC')
    )
  ), [allMembers]);

  const rndMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain.includes('Research') || 
      m.domain.includes('R&D')
    )
  ), [allMembers]);

  const designMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain.includes('Design') || 
      m.domain.includes('UI/UX')
    )
  ), [allMembers]);

  const managementMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain.includes('Event') || 
      m.domain.includes('Operations') || 
      m.domain.includes('Finance')
    )
  ), [allMembers]);

  const mediaMembers = useMemo(() => allMembers.filter((m) => 
    !m.isFaculty && (
      m.domain.includes('Media') || 
      m.domain.includes('Content') || 
      m.domain.includes('PR') || 
      m.domain.includes('Outreach')
    )
  ), [allMembers]);

  const categories = [
    { id: 'faculty', label: 'FACULTIES', count: facultyMembers.length, desc: 'University Faculty Coordinators & Patrons' },
    { id: 'admins', label: 'ADMINS', count: adminMembers.length, desc: 'Executive Board & Senior Administration' },
    { id: 'leads', label: 'LEADS', count: leadMembers.length, desc: 'Domain Leads & Co-Leads' },
    { id: 'tech', label: 'TECHNICAL', count: techMembers.length, desc: 'Android Development & Software Development Cell' },
    { id: 'rnd', label: 'R&D', count: rndMembers.length, desc: 'Machine Learning & Applied Research Labs' },
    { id: 'design', label: 'DESIGN', count: designMembers.length, desc: 'UI/UX & Visual Design Systems' },
    { id: 'management', label: 'MANAGEMENT', count: managementMembers.length, desc: 'Events, Logistics & Treasury' },
    { id: 'media', label: 'MEDIA & PR', count: mediaMembers.length, desc: 'Media Production, Editorial & Public Relations' },
    { id: 'all', label: 'ALL CORE', count: allMembers.length, desc: 'Complete 2025–2026 Core Chapter Roster' }
  ];

  const currentCategory = categories.find((c) => c.id === filter) || categories[0];

  const filteredTeam = useMemo(() => {
    switch (filter) {
      case 'faculty':
        return facultyMembers;
      case 'admins':
        return adminMembers;
      case 'leads':
        return leadMembers;
      case 'tech':
        return techMembers;
      case 'rnd':
        return rndMembers;
      case 'design':
        return designMembers;
      case 'management':
        return managementMembers;
      case 'media':
        return mediaMembers;
      case 'all':
      default:
        return allMembers;
    }
  }, [filter, facultyMembers, adminMembers, leadMembers, techMembers, rndMembers, designMembers, managementMembers, mediaMembers, allMembers]);

  return (
    <section id="team" className="flex flex-col w-full bg-[#0A090F] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            tag="[09] CORE TEAM MEMBERS"
            title={"MEET THE MINDS.\nBEHIND THE BUILDS."}
            subtitle="The visionary faculty mentors, student leads, organizers, and architects steering Android Club at VIT Bhopal University."
          />

          {/* Section Navigation Tabs - Horizontally swipeable on mobile */}
          <div className="flex overflow-x-auto no-scrollbar sm:flex-wrap items-center gap-1.5 p-1.5 bg-[#14141E] border border-[#232332] w-full md:w-auto max-w-full touch-pan-x">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-3 py-1.5 font-mono text-[10px] sm:text-[11px] font-bold tracking-[1px] transition-all cursor-pointer whitespace-nowrap ${
                  filter === c.id
                    ? 'bg-[#3DDC84] text-[#0A090F] shadow-[0_0_15px_rgba(61,220,132,0.3)]'
                    : 'text-[#888899] hover:text-white hover:bg-[#1a1a28]'
                }`}
              >
                [{c.label} ({c.count})]
              </button>
            ))}
          </div>
        </div>

        {/* Active Section Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-[#111118] border border-[#232332] font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
            <span className="text-[#888899]">VIEWING SECTION:</span>
            <span className="text-white font-bold uppercase">[{currentCategory.label}]</span>
            <span className="hidden sm:inline text-[#555566]">—</span>
            <span className="hidden sm:inline text-[#A1A1AA]">{currentCategory.desc}</span>
          </div>
          <span className="text-[#3DDC84] font-bold">
            {filteredTeam.length} {filteredTeam.length === 1 ? 'MEMBER' : 'MEMBERS'}
          </span>
        </div>

        {/* Faculties View - Dedicated High-Profile Presentation */}
        {filter === 'faculty' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, idx) => (
              <div
                key={idx}
                className="pixel-card flex flex-col justify-between overflow-hidden group border border-[#3DDC84]/40 bg-[#12121a] hover:border-[#3DDC84] transition-all"
              >
                {/* Photo Container */}
                <div className="relative aspect-[4/4.5] w-full bg-[#161622] overflow-hidden border-b border-[#232332]">
                  <img
                    src={faculty.photo}
                    alt={faculty.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300 filter contrast-105"
                    onError={(e) => {
                      e.target.src = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090F] via-transparent to-transparent opacity-75" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#3DDC84] text-[#0A090F] font-mono text-[9px] font-bold tracking-wider shadow flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3" />
                    <span>FACULTY PATRON</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <div className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-[1px] mb-1.5">
                      {faculty.domain}
                    </div>
                    <h3 className="font-grotesk font-bold text-[18px] text-[#F5F5F0] group-hover:text-[#3DDC84] transition-colors leading-snug">
                      {faculty.name}
                    </h3>
                    <p className="font-mono text-[12px] text-[#3DDC84] mt-1 font-semibold">
                      {faculty.role}
                    </p>
                    <p className="font-sans text-[12px] text-[#A1A1AA] mt-3 leading-relaxed border-t border-[#1f1f2e] pt-3">
                      "{faculty.bio}"
                    </p>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="pt-3 border-t border-[#1f1f2e] flex items-center justify-between">
                    <span className="font-mono text-[9px] text-[#555566] tracking-wider uppercase">
                      VIT BHOPAL UNIVERSITY
                    </span>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1a1a26] hover:bg-[#3DDC84] text-[#C4C4D0] hover:text-black font-mono text-[10px] font-bold tracking-[1px] transition-all border border-[#2d2d3e]"
                      title={`Email ${faculty.name}`}
                    >
                      <Mail className="w-3 h-3" />
                      <span>CONTACT</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Student Members Grid (Admins, Leads, Tech, R&D, Design, Management, Media, All) */
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredTeam.map((member, idx) => (
              <div
                key={idx}
                className="pixel-card flex flex-col justify-between overflow-hidden group hover:border-[#3DDC84] transition-all"
              >
                {/* Photo Box */}
                <div className="relative aspect-[4/4.5] w-full bg-[#161622] overflow-hidden border-b border-[#232332]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.src = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A090F] via-transparent to-transparent opacity-80" />

                  {/* Executive / Lead Badge */}
                  {(member.domain === 'Executive Leadership' || member.role.toLowerCase().includes('president') || member.role.toLowerCase().includes('secretary')) && (
                    <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-[#00F0FF] text-[#0A090F] font-mono text-[8px] font-bold tracking-wider shadow">
                      EXECUTIVE
                    </div>
                  )}
                  {member.role.toLowerCase().includes('lead') && member.domain !== 'Executive Leadership' && (
                    <div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-[#FFD600] text-[#0A090F] font-mono text-[8px] font-bold tracking-wider shadow">
                      LEAD
                    </div>
                  )}
                </div>

                {/* Info Box */}
                <div className="p-4 flex flex-col justify-between flex-1 gap-3">
                  <div>
                    <div className="font-mono text-[9px] text-[#00F0FF] uppercase tracking-[1px] mb-1 truncate">
                      {member.domain}
                    </div>
                    <h3 className="font-grotesk font-bold text-[15px] sm:text-[16px] text-[#F5F5F0] group-hover:text-[#3DDC84] transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-mono text-[11px] text-[#888899] mt-0.5 leading-snug">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="pt-2 border-t border-[#1f1f2e] flex items-center justify-between text-[#888899]">
                    <span className="font-mono text-[8px] text-[#555566] tracking-wider uppercase truncate max-w-[90px]">
                      {member.badge || 'CORE'}
                    </span>
                    <div className="flex items-center gap-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-[#00F0FF] transition-colors"
                          title="Send Email"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials?.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#00F0FF] transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials?.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#FF0055] transition-colors"
                          title="Instagram"
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {member.socials?.github && member.socials.github !== 'https://github.com/androidvitb' && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-[#3DDC84] transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
