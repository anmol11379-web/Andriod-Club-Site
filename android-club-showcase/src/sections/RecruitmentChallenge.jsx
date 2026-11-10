import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { Lock } from 'lucide-react';

export default function RecruitmentChallenge() {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    phone: '',
    batch: '2025',
    domain: 'android',
    github: '',
    linkedin: '',
    experience: '',
    reasonToJoin: ''
  });

  const domainsList = [
    { id: 'android', name: 'Android Development', track: 'Tech' },
    { id: 'sdc', name: 'Software Development Cell (SDC)', track: 'Tech' },
    { id: 'rnd', name: 'R&D (IoT, ML & Cyber Security)', track: 'Tech' },
    { id: 'uiux', name: 'UI / UX Design', track: 'Tech' },
    { id: 'operations', name: 'Operations & Logistics', track: 'Non-Tech' },
    { id: 'evm', name: 'Event Management', track: 'Non-Tech' },
    { id: 'pr_outreach', name: 'PR & Corporate Outreach', track: 'Non-Tech' },
    { id: 'media', name: 'Media Team & Video Production', track: 'Non-Tech' },
    { id: 'content', name: 'Content & Technical Writing', track: 'Non-Tech' },
    { id: 'finance', name: 'Finance & Documentation', track: 'Non-Tech' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="apply" className="relative flex flex-col w-full bg-[#0A090F] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF0055]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8 relative z-10">
        <SectionHeader
          tag="[11] CORE RECRUITMENT"
          title={"CORE RECRUITMENT.\nCURRENTLY CLOSED."}
          subtitle="Explore domain requirements and application criteria. Submissions are temporarily paused until the next official induction drive."
        />

        {/* Application Form Card */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="max-w-3xl mx-auto w-full bg-[#111118] border border-[#232332] p-6 sm:p-10 shadow-2xl relative"
        >
          {/* Closed Status Notice Header */}
          <div className="mb-6 p-3.5 bg-[#FF0055]/10 border border-[#FF0055]/40 text-[#FF0055] font-mono text-[11px] flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 shrink-0 text-[#FF0055]" />
              <span className="font-bold">CORE RECRUITMENT: CLOSED</span>
              <span className="text-[#A1A1AA] hidden sm:inline">— Submissions are currently paused</span>
            </div>
            <span className="px-2 py-0.5 bg-[#FF0055]/20 text-[#FF0055] text-[9px] font-bold tracking-wider uppercase shrink-0">
              NOT LIVE
            </span>
          </div>

          <div className="space-y-6">
            {/* Row 1: Name and Reg No */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  name="regNo"
                  value={formData.regNo}
                  onChange={handleChange}
                  placeholder="e.g. Registration No."
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: College Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  VIT Bhopal Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name.regno@vitbhopal.ac.in"
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  WhatsApp Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98XXX XXXXX"
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Domain Selection */}
            <div>
              <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                Target Domain Track
              </label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors cursor-pointer"
              >
                {domainsList.map((d) => (
                  <option key={d.id} value={d.id} className="bg-[#0A090F] text-white">
                    [{d.track.toUpperCase()}] {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Row 4: Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  GitHub / Portfolio Profile
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourhandle"
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourhandle"
                  className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3.5 py-2.5 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 5: Experience */}
            <div>
              <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                Prior Technical Experience & Projects
              </label>
              <textarea
                rows="3"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Share any past apps, GitHub repos, design portfolios, event management experience, or relevant coursework..."
                className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] p-3.5 outline-none transition-colors"
              />
            </div>

            {/* Row 6: Motivation */}
            <div>
              <label className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-[1px] mb-2">
                Why do you want to join Android Club?
              </label>
              <textarea
                rows="3"
                name="reasonToJoin"
                value={formData.reasonToJoin}
                onChange={handleChange}
                placeholder="Tell us what specifically motivates you to contribute to Android Club and what you hope to build together..."
                className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] p-3.5 outline-none transition-colors"
              />
            </div>

            {/* Faded Submit Button Centered */}
            <div className="pt-4 flex justify-center w-full">
              <button
                type="button"
                disabled
                className="w-full sm:w-auto px-10 py-3.5 bg-[#171722] text-[#777788] border border-[#2a2a38] font-grotesk font-bold text-[13px] tracking-[1.5px] opacity-45 cursor-not-allowed flex items-center justify-center gap-2.5 shadow-none select-none transition-none"
                title="Recruitment is not live now"
              >
                <Lock className="w-4 h-4 text-[#777788]" />
                <span>SUBMIT APPLICATION</span>
                <span className="font-mono text-[9px] text-[#FF0055] px-1.5 py-0.5 bg-[#FF0055]/10 border border-[#FF0055]/30 tracking-wider">
                  CLOSED
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
