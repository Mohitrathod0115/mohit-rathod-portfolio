import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ShieldCheck, PlusCircle } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>12 / MERIT RECORD</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              VERIFIED ACHIEVEMENTS
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            TRANSPARENT RECORD • ZERO FABRICATION
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Confirmed Achievement Card */}
          {PORTFOLIO_DATA.achievements.map((item, index) => (
            <div
              key={index}
              className="p-8 sm:p-10 rounded-sm bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] uppercase tracking-widest">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">{item.date}</span>
                </div>

                <div className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>{item.subtitle}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-neutral-400">
                <span>OFFICIAL MAHARASHTRA STATE SCORE</span>
                <span className="text-cyan-400 font-semibold">92.12 PERCENTILE</span>
              </div>
            </div>
          ))}

          {/* Expandable Placeholder for Future Achievements */}
          <div className="p-8 sm:p-10 rounded-sm bg-white/[0.01] border border-dashed border-white/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 font-mono text-[10px] uppercase tracking-widest">
                  COMING SOON
                </span>
                <span className="font-mono text-xs text-neutral-500">2026+ HORIZON</span>
              </div>

              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <PlusCircle className="w-4 h-4 text-neutral-500" />
                <span>UPCOMING MILESTONES</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-neutral-300 mb-4">
                HACKATHONS, COMPETITIONS & CERTIFICATIONS
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                This space is reserved for validated achievements as they occur. No unverified certifications, exaggerated competitive counts, or fake awards are listed.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.05] font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
              EXPANDABLE AREA • INTEGRITY FIRST
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

