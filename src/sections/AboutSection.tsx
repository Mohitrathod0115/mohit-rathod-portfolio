import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, Terminal, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Label & Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>01 / ABOUT ME</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight uppercase text-white leading-tight">
              MORE THAN A STUDENT. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                I'M BUILDING MY FUTURE.
              </span>
            </h2>

            <div className="pt-6 border-t border-white/[0.08] space-y-3 font-mono text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                <span>LOCATION: PUNE, MAHARASHTRA, INDIA</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>POSITIONING: STUDENT DEVELOPER</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>FOCUS: FULL-STACK & MODERN TECH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-8 space-y-8 text-neutral-300 text-lg sm:text-xl font-light leading-relaxed">
            {PORTFOLIO_DATA.profile.aboutParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="first-of-type:text-white first-of-type:font-normal"
              >
                {para}
              </p>
            ))}

            {/* Philosophy Pill Ribbon */}
            <div className="pt-8 flex flex-wrap items-center gap-3">
              {['Learn', 'Build', 'Experiment', 'Improve', 'Create'].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-sm bg-white/[0.03] border border-white/10 font-mono text-xs uppercase tracking-widest text-neutral-200"
                >
                  <span className="text-cyan-400 font-bold">0{index + 1}</span>
                  <span>{step}</span>
                  {index < 4 && <span className="text-neutral-600">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

