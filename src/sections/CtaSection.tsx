import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative w-full py-36 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden text-center">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 font-mono text-xs uppercase tracking-widest text-cyan-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{PORTFOLIO_DATA.profile.tagline.toUpperCase()}</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase text-white leading-tight">
          YOUR NEXT DIGITAL EXPERIENCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
            STARTS WITH AN IDEA.
          </span>
        </h2>

        <p className="text-neutral-400 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          I'm learning, building and exploring what technology can create.
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href="#contact"
            data-cursor="CONNECT"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-cyan-400 hover:bg-cyan-300 text-[#090a0d] font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-cyan-500/20"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

