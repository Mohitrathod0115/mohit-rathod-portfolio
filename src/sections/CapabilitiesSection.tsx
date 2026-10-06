import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Layers, ArrowUpRight } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>10 / CAPABILITY ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              WHAT I'M BUILDING TOWARD
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] uppercase tracking-widest">
            CURRENTLY DEVELOPING THESE CAPABILITIES
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-neutral-500">0{idx + 1}</span>
                  <Layers className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {cap.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px] tracking-widest uppercase text-neutral-500 group-hover:text-cyan-400 transition-colors">
                <span>IN ACTIVE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

