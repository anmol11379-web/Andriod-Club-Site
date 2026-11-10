import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../data/clubData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['about', 'domains', 'projects', 'events', 'team', 'faq', 'apply'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '[01] ABOUT', href: '#about', id: 'about' },
    { name: '[02] DOMAINS', href: '#domains', id: 'domains' },
    { name: '[03] PROJECTS', href: '#projects', id: 'projects' },
    { name: '[04] EVENTS', href: '#events', id: 'events' },
    { name: '[05] TEAM', href: '#team', id: 'team' },
    { name: '[06] FAQ', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -60, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A090F]/90 backdrop-blur-md border-b border-[#232332] py-2' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="flex items-center justify-between h-[52px] px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto">
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#3DDC84]"
          aria-label="Android Club Home"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-[#3DDC84] group-hover:scale-125 transition-transform" />
            <span className="absolute w-4 h-4 bg-[#3DDC84]/30 animate-ping rounded-full pointer-events-none" />
          </div>
          <div className="flex items-center gap-2">
            <img 
              src="/Logo.png" 
              alt="Android Club Logo" 
              className="w-7 h-7 object-contain drop-shadow-[0_0_8px_rgba(61,220,132,0.4)]"
            />
            <span className="font-grotesk text-[13px] md:text-[14px] font-bold text-[#F5F5F0] tracking-[2px] group-hover:text-[#3DDC84] transition-colors">
              ANDROID CLUB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative font-mono text-[11px] tracking-[1.5px] transition-colors duration-200 py-1 ${
                  isActive ? 'text-[#3DDC84]' : 'text-[#888899] hover:text-[#F5F5F0]'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute left-0 bottom-0 h-[1.5px] bg-[#3DDC84] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#apply"
            onClick={(e) => handleNavClick(e, '#apply')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#14141E] border border-[#3DDC84] hover:bg-[#3DDC84] text-[#3DDC84] hover:text-[#0A090F] font-mono text-[11px] font-bold tracking-[1.5px] transition-all shadow-[0_0_12px_rgba(61,220,132,0.15)] hover:shadow-[0_0_20px_rgba(61,220,132,0.4)]"
          >
            <span className="w-1.5 h-1.5 bg-[#3DDC84] animate-pulse rounded-full" />
            <span>JOIN THE CLUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#888899] hover:text-[#3DDC84] border border-[#232332] bg-[#14141E] focus:outline-none focus:ring-2 focus:ring-[#3DDC84]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A090F] border-b border-[#232332] px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[10px] text-[#3DDC84] tracking-[2px] pb-2 border-b border-[#232332]/60">NAVIGATION DIRECTORY</div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-[13px] tracking-[1.5px] text-[#F5F5F0] hover:text-[#3DDC84] py-2 flex items-center justify-between border-b border-[#232332]/30"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#3DDC84]" />
              </a>
            ))}
            <a
              href="#apply"
              onClick={(e) => handleNavClick(e, '#apply')}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-[#3DDC84] text-[#0A090F] font-grotesk font-bold tracking-[1.5px] text-[12px]"
            >
              <Terminal className="w-4 h-4" />
              <span>JOIN THE CLUB</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

