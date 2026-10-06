import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Sparkles, Check } from 'lucide-react';

export const WhyMeSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>11 / AUTHENTIC VALUE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white leading-tight">
              WHY COLLABORATE WITH ME
            </h2>

            <div className="p-6 rounded-sm bg-gradient-to-br from-cyan-950/30 to-blue-950/20 border border-cyan-500/30 space-y-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <p className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                "{PORTFOLIO_DATA.profile.whyMeQuote}"
              </p>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest pt-2">
                — MOHIT MADHUKAR RATHOD
              </div>
            </div>

            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              As an ambitious first-year developer, I bring high energy, disciplined commitment, fresh curiosity, and rapid assimilation of new engineering concepts to any project or collaborative team.
            </p>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.whyWorkWithMe.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-2"
              >
                <div className="flex items-center gap-2 font-display text-sm font-bold uppercase text-white">
                  <span className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item.trait}</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-light pl-6">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

