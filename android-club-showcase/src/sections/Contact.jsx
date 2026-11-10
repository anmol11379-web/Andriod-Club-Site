import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { CLUB_INFO } from '../data/clubData';
import { Mail, MapPin, Github, Linkedin, Instagram, Twitter, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [inquiry, setInquiry] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiry.name || !inquiry.email || !inquiry.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiry({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="flex flex-col w-full bg-[#0D0D14] py-16 px-4 sm:px-6 md:py-24 md:px-12 gap-10 md:gap-14 border-b border-[#232332]">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col gap-8">
        <SectionHeader
          tag="[12] GET IN TOUCH"
          title={"CONNECT WITH US.\nON CAMPUS & ONLINE."}
          subtitle="Have a question about upcoming events, hackathon partnerships, or recruitment rounds? Reach out to our organizing committee."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info & Social Hub */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="pixel-card p-5 flex items-start gap-4">
                <div className="p-2.5 bg-[#1C1C28] border border-[#2B2B3D] text-[#3DDC84] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#888899] uppercase tracking-[1px]">Official Email</div>
                  <a href={`mailto:${CLUB_INFO.contacts.email}`} className="font-grotesk text-[15px] font-bold text-white hover:text-[#3DDC84] transition-colors">
                    {CLUB_INFO.contacts.email}
                  </a>
                </div>
              </div>

              <div className="pixel-card p-5 flex items-start gap-4">
                <div className="p-2.5 bg-[#1C1C28] border border-[#2B2B3D] text-[#00F0FF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#888899] uppercase tracking-[1px]">Campus Location</div>
                  <p className="font-sans text-[13px] text-[#F5F5F0] leading-relaxed">
                    {CLUB_INFO.contacts.campus}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div>
              <div className="font-mono text-[10px] text-[#3DDC84] tracking-[2px] mb-3 uppercase">SOCIAL CHANNELS & COMMUNITY</div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={CLUB_INFO.contacts.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#14141E] border border-[#232332] hover:border-[#3DDC84] hover:text-[#3DDC84] font-mono text-[11px] flex items-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={CLUB_INFO.contacts.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#14141E] border border-[#232332] hover:border-[#00F0FF] hover:text-[#00F0FF] font-mono text-[11px] flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={CLUB_INFO.contacts.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#14141E] border border-[#232332] hover:border-[#FF0055] hover:text-[#FF0055] font-mono text-[11px] flex items-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CLUB_INFO.contacts.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#14141E] border border-[#232332] hover:border-[#00F0FF] hover:text-[#00F0FF] font-mono text-[11px] flex items-center gap-2 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={CLUB_INFO.contacts.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#14141E] border border-[#232332] hover:border-[#3DDC84] hover:text-[#3DDC84] font-mono text-[11px] flex items-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Community</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct Contact Form */}
          <div className="bg-[#111118] border border-[#232332] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[10px] text-[#3DDC84] tracking-[1.5px] uppercase mb-1">DIRECT INQUIRY</div>
              <h3 className="font-grotesk text-[20px] font-bold text-white mb-4">
                Leave a Message for the Leads
              </h3>

              {submitted ? (
                <div className="p-4 bg-[#3DDC84]/10 border border-[#3DDC84] text-[#3DDC84] font-mono text-[12px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Message delivered successfully! We'll reply shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#888899] uppercase mb-1">Your Name</label>
                    <input
                      type="text"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                      className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#888899] uppercase mb-1">Your Email</label>
                    <input
                      type="email"
                      value={inquiry.email}
                      onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                      placeholder="name.regno@vitbhopal.ac.in"
                      required
                      className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] px-3 py-2 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#888899] uppercase mb-1">Message</label>
                    <textarea
                      rows="3"
                      value={inquiry.message}
                      onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                      placeholder="Inquiry regarding workshop, collaboration or recruitment..."
                      required
                      className="w-full bg-[#0A090F] border border-[#232332] focus:border-[#3DDC84] text-white font-mono text-[12px] p-3 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#171724] hover:bg-[#3DDC84] text-white hover:text-black font-grotesk font-bold text-[12px] tracking-[1px] transition-colors border border-[#323246] flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#232332] text-[10px] font-mono text-[#888899]">
              RESPONSE TIME: &lt; 24 HOURS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

