import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onConnectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Learning', href: '#learning' },
    { label: 'Goals', href: '#goals' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#090a0d]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/50'
          : 'bg-transparent border-b border-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-3"
          data-cursor="MOHIT"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-sm bg-white/[0.04] border border-white/10 group-hover:border-cyan-400/50 transition-colors">
            <span className="font-mono text-xs font-bold text-cyan-400">MR</span>
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span className="font-display text-xs sm:text-sm tracking-widest font-bold uppercase text-white group-hover:text-cyan-300 transition-colors">
            {PORTFOLIO_DATA.profile.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wider uppercase text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 hover:text-white transition-colors duration-200 group"
              data-cursor="GOTO"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Direct Action Hub */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Direct Phone Call Link */}
          <a
            href={`tel:${PORTFOLIO_DATA.contact.phone}`}
            title="Call Mohit directly"
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-cyan-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Quick WhatsApp Chat */}
          <a
            href={PORTFOLIO_DATA.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-neutral-300 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </a>

          {/* Connect CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onConnectClick) onConnectClick();
              else {
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            data-cursor="CONNECT"
            className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium uppercase tracking-widest text-neutral-200 bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/60 rounded-full transition-all duration-300 shadow-sm"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-neutral-300 hover:text-white focus:outline-hidden"
          data-cursor="MENU"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#090a0d]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-70px)] overflow-y-auto">
          {/* Quick Direct Mobile Contact Ribbon */}
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-white/[0.08]">
            <a
              href={`tel:${PORTFOLIO_DATA.contact.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-semibold uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL NOW</span>
            </a>
            <a
              href={PORTFOLIO_DATA.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WHATSAPP</span>
            </a>
          </div>

          <div className="flex flex-col gap-2.5 text-sm font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 border-b border-white/[0.04] text-neutral-300 hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-neutral-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="flex items-center justify-center gap-2 py-3 px-6 text-xs font-mono tracking-widest uppercase bg-white/[0.04] border border-white/15 text-neutral-200 rounded-xs hover:bg-white/[0.08] transition-all text-center"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{PORTFOLIO_DATA.contact.email}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 py-3 px-6 text-xs font-mono tracking-widest uppercase bg-cyan-400 text-black font-semibold rounded-xs hover:bg-cyan-300 transition-all text-center shadow-lg shadow-cyan-400/20"
            >
              <span>SEND MESSAGE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
