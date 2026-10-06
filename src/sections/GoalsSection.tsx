import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="relative w-full py-32 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>09 / VISION & TRAJECTORY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
              THE JOURNEY HAS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                JUST STARTED.
              </span>
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            STRATEGIC ASPIRATIONS • LONG-TERM ARCHITECTURE
          </div>
        </div>

        {/* Cinematic Vertical Timeline / Milestone List */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {PORTFOLIO_DATA.futureGoals.map((goal, index) => (
            <div key={goal.id} className="relative group">
              {/* Timeline Pin */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#0b0d13] border border-white/30 group-hover:border-cyan-400 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              <div className="p-6 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs text-neutral-500">OBJECTIVE 0{index + 1}</span>
                  <span className="px-2 py-0.5 rounded-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] uppercase tracking-widest">
                    {goal.category}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white uppercase group-hover:text-cyan-300 transition-colors">
                  {goal.title}
                </h3>

                <p className="mt-2 text-neutral-400 text-sm font-light leading-relaxed">
                  {goal.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
