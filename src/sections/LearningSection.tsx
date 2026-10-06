import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, Compass, ArrowUpRight } from 'lucide-react';

export const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="relative w-full py-32 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
            <span className="w-2 h-[1px] bg-cyan-400" />
            <span>05 / CONTINUOUS PROGRESSION</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white leading-tight">
            ALWAYS LEARNING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              NEVER FINISHED.
            </span>
          </h2>

          <p className="text-lg text-neutral-300 font-light leading-relaxed">
            Technology never stops evolving. Neither does my learning journey.
          </p>
        </div>

        {/* Dual Grid: Currently Learning vs Exploring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Column 1: Currently Learning */}
          <div className="p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-cyan-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>CURRENTLY LEARNING</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-xs bg-cyan-500/10 text-cyan-400 font-mono text-[10px] tracking-widest uppercase border border-cyan-500/30">
                  ACTIVE SYLLABUS
                </span>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.learningCurriculum.currentlyLearning.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/40 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white uppercase">
                        {item.name}
                      </h4>
                      <p className="font-mono text-xs text-neutral-400 mt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <span className="text-cyan-400 font-mono text-xs">IN PROGRESS</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-500">
              DISCIPLINED DAILY PRACTICE • CONCEPTUAL DEPTH
            </div>
          </div>

          {/* Column 2: Exploring */}
          <div className="p-8 sm:p-10 rounded-sm bg-white/[0.02] border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-indigo-300">
                  <Compass className="w-4 h-4 text-indigo-400" />
                  <span>EXPLORING & RESEARCHING</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-xs bg-indigo-500/10 text-indigo-300 font-mono text-[10px] tracking-widest uppercase border border-indigo-500/30">
                  EXPERIMENTAL
                </span>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.learningCurriculum.exploring.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-sm bg-white/[0.02] border border-white/[0.06] hover:border-indigo-400/40 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white uppercase">
                        {item.name}
                      </h4>
                      <p className="font-mono text-xs text-neutral-400 mt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-indigo-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs font-mono text-neutral-500">
              PROTOTYPING & SYSTEM ARCHITECTURE EVALUATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

