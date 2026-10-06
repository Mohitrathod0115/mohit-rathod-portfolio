import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Zap } from 'lucide-react';

export const StrengthsSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>08 / MINDSET & CHARACTER</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              PERSONAL STRENGTHS
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            DISCIPLINED CURIOSITY • ADAPTIVE PROBLEM SOLVING
          </div>
        </div>

        {/* 6 Grid Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.personalStrengths.map((strength, index) => (
            <div
              key={index}
              className="p-8 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                  <Zap className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {strength.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {strength.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] text-[10px] font-mono tracking-widest uppercase text-neutral-600 group-hover:text-cyan-500/70 transition-colors">
                INTERNALIZED TRAIT
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

