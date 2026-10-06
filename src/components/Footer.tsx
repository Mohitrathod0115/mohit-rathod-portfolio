import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Phone, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative w-full py-16 bg-[#07080a] border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand & Direct Contact */}
          <div className="space-y-3">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              {PORTFOLIO_DATA.profile.name}
            </h3>
            <p className="font-mono text-xs text-neutral-400">
              {PORTFOLIO_DATA.profile.college} • {PORTFOLIO_DATA.academic.score}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-xs">
              <a
                href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.contact.phone}</span>
              </a>
              <span className="text-neutral-700 hidden sm:inline">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </a>
              <span className="text-neutral-700 hidden sm:inline">•</span>
              <a
                href={PORTFOLIO_DATA.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-wider text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-all cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-6">
            <span>GitHub (ADD LINK)</span>
            <span>LinkedIn (ADD LINK)</span>
            {PORTFOLIO_DATA.socialLinks
              .filter((social) => social.name === 'Instagram' && !social.placeholder)
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Instagram
                </a>
              ))}
          </div>

          <div>
            © 2026 Mohit Madhukar Rathod. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
