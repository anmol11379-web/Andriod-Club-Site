import React from 'react';
import { CLUB_INFO } from '../data/clubData';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#07070C] border-t border-[#232332] pt-14 pb-10 px-4 sm:px-6 md:px-12 text-[#888899]">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#232332]">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-[#3DDC84]" />
              <img src="/Logo.png" alt="Logo" className="w-6 h-6 object-contain" />
              <span className="font-grotesk text-[14px] font-bold text-white tracking-[2px]">
                ANDROID CLUB
              </span>
            </div>
            <p className="font-mono text-[11px] text-[#888899] max-w-sm leading-relaxed">
              The premier student chapter driving mobile and software innovation at VIT Bhopal University. Building open-source software, hackathons, and empowering the next generation of engineers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLUB_INFO.contacts.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#14141E] border border-[#232332] hover:border-[#3DDC84] hover:text-[#3DDC84] text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.contacts.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#14141E] border border-[#232332] hover:border-[#00F0FF] hover:text-[#00F0FF] text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.contacts.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#14141E] border border-[#232332] hover:border-[#FF0055] hover:text-[#FF0055] text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLUB_INFO.contacts.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#14141E] border border-[#232332] hover:border-[#00F0FF] hover:text-[#00F0FF] text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <div className="font-mono text-[10px] text-[#3DDC84] tracking-[2px] uppercase mb-4">DIRECTORY</div>
            <ul className="space-y-2 text-[12px] font-mono">
              <li><a href="#about" className="hover:text-[#3DDC84] transition-colors">[01] About Us</a></li>
              <li><a href="#domains" className="hover:text-[#3DDC84] transition-colors">[02] Domains</a></li>
              <li><a href="#projects" className="hover:text-[#3DDC84] transition-colors">[03] Projects</a></li>
              <li><a href="#events" className="hover:text-[#3DDC84] transition-colors">[04] Events</a></li>
              <li><a href="#team" className="hover:text-[#3DDC84] transition-colors">[05] Team</a></li>
            </ul>
          </div>

          {/* Technical Tracks */}
          <div>
            <div className="font-mono text-[10px] text-[#00F0FF] tracking-[2px] uppercase mb-4">TECH TRACKS</div>
            <ul className="space-y-2 text-[12px] font-mono">
              <li><span className="text-[#C4C4D0]">Android Core</span></li>
              <li><span className="text-[#C4C4D0]">Software Dev Cell (SDC)</span></li>
              <li><span className="text-[#C4C4D0]">Edge ML & IoT R&D</span></li>
              <li><span className="text-[#C4C4D0]">UI / UX Design</span></li>
              <li><span className="text-[#C4C4D0]">Cloud & DevOps</span></li>
            </ul>
          </div>

          {/* University Info */}
          <div>
            <div className="font-mono text-[10px] text-[#FFB700] tracking-[2px] uppercase mb-4">CAMPUS</div>
            <p className="font-mono text-[11px] text-[#888899] leading-relaxed mb-3">
              VIT Bhopal University<br />
              Sehore, Madhya Pradesh<br />
              India – 466114
            </p>
            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#3DDC84] hover:underline"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#666677]">
          <div>
            © {new Date().getFullYear()} ANDROID CLUB • VIT BHOPAL UNIVERSITY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1">
            <span>ENGINEERED FOR RECRUITMENT 2026-27</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

