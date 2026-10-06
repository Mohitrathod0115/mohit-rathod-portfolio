import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ShieldCheck, Award, BookOpen, MapPin } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 bg-[#0b0d13] border-t border-white/[0.06] overflow-hidden">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>02 / ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              EDUCATION & MERIT
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            ENGINEERING ASPIRATION • RIGOROUS APTITUDE
          </div>
        </div>

        {/* Big Editorial Metric Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Stat Banner */}
          <div className="lg:col-span-7 relative p-8 sm:p-12 rounded-sm bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 flex flex-col justify-between overflow-hidden group">
            {/* Ambient watermarking & glow */}
            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIALLY VERIFIED</span>
            </div>

            <div>
              <div className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>STATE MERIT PERCENTILE</span>
              </div>
              {/* Ultra large expressive typography */}
              <div className="font-display text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-white leading-none my-4">
                {PORTFOLIO_DATA.academic.score}
              </div>
              <div className="font-mono text-sm sm:text-base tracking-widest uppercase text-cyan-400 font-semibold">
                {PORTFOLIO_DATA.academic.exam}
              </div>
            </div>

            <p className="mt-8 text-neutral-400 text-sm sm:text-base font-light max-w-lg leading-relaxed">
              Demonstrated strong analytical problem solving, logical consistency, and mathematical aptitude in Maharashtra's premier technical entrance examination.
            </p>
          </div>

          {/* College Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="p-8 rounded-sm bg-white/[0.03] border border-white/10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>CURRENT ENROLLMENT</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                  {PORTFOLIO_DATA.academic.college}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Wagholi, Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-500">ACADEMIC STATUS</div>
                  <div className="font-display text-lg font-bold text-white uppercase">{PORTFOLIO_DATA.academic.year}</div>
                </div>
                <div className="px-3 py-1.5 rounded-sm bg-white/[0.04] border border-white/10 font-mono text-xs text-neutral-300">
                  BATCH 2026+
                </div>
              </div>
            </div>

            <div className="p-6 rounded-sm bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
              <div className="font-mono text-xs text-cyan-200">
                <span className="text-cyan-400 font-bold">FOCUS:</span> Core Computer Engineering & Software Principles
              </div>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

