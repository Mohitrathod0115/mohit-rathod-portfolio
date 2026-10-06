import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const BuildingSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>07 / PASSION DOMAINS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              WHAT I LIKE BUILDING
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            CREATIVE EXPLORATION • EXPERIMENTAL CODING
          </div>
        </div>

        {/* Interactive Typography Flow */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {PORTFOLIO_DATA.whatILikeBuilding.map((item, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group py-6 sm:py-8 flex items-center justify-between cursor-pointer transition-all duration-300 hover:px-4"
                data-cursor="INTEREST"
              >
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-xs sm:text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors">
                    0{index + 1}
                  </span>
                  <h3
                    className={`font-display text-2xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight transition-all duration-300 ${
                      isHovered
                        ? 'text-white translate-x-3 text-glow'
                        : 'text-neutral-400'
                    }`}
                  >
                    {item}
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-mono tracking-widest uppercase transition-opacity duration-200 hidden sm:inline ${
                      isHovered ? 'text-cyan-400 opacity-100' : 'opacity-0'
                    }`}
                  >
                    PASSION
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isHovered
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 rotate-45'
                        : 'border-white/10 text-neutral-600'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
