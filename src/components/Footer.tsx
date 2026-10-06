import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              {PORTFOLIO_DATA.profile.name}
            </h3>
            <p className="font-mono text-xs text-neutral-400">
              {PORTFOLIO_DATA.profile.college} • {PORTFOLIO_DATA.academic.score}
            </p>
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
            className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 font-mono text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div className="flex items-center gap-6">
            <span>GitHub (ADD LINK)</span>
            <span>LinkedIn (ADD LINK)</span>
            <span>Instagram (ADD LINK)</span>
          </div>

          <div>
            © 2026 Mohit Madhukar Rathod. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

