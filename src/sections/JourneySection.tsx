import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Calendar, ChevronRight } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>03 / EVOLUTION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              MY JOURNEY
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            CHRONOLOGICAL EXPEDITION • FOUNDATIONS TO FRONTIER
          </div>
        </div>

        {/* Visual Timeline Track */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {PORTFOLIO_DATA.journey.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#090a0d] border border-cyan-400/60 group-hover:border-cyan-400 group-hover:scale-125 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 animate-pulse" />
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  {item.highlight && (
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 font-mono text-[11px] text-cyan-300">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {item.institution && (
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-3">
                    {item.institution}
                  </p>
                )}

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/[0.06]">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-xs bg-white/[0.03] border border-white/10 font-mono text-[11px] text-neutral-300 flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3 text-cyan-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

