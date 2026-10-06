import React, { useState } from 'react';
import { PORTFOLIO_DATA, type SkillItem } from '../data/portfolioData';
import { Info, Code, Server, Database, Sparkles, Wrench, CheckCircle2, Clock } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { key: 'web', title: 'WEB DEVELOPMENT', icon: Code },
    { key: 'programming', title: 'PROGRAMMING LANGUAGES', icon: Code },
    { key: 'backend', title: 'BACKEND SERVICES', icon: Server },
    { key: 'database', title: 'DATABASE PLATFORMS', icon: Database },
    { key: 'interactive', title: 'INTERACTIVE & 3D WEB', icon: Sparkles },
    { key: 'tools', title: 'DEVELOPMENT TOOLS', icon: Wrench },
  ];

  return (
    <section id="skills" className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>04 / TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              SKILLS & ARCHITECTURE
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" /> CURRENT SKILL
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Clock className="w-3.5 h-3.5" /> LEARNING / EXPLORING
            </span>
          </div>
        </div>

        {/* Dynamic Context Description HUD Bar */}
        <div className="mb-12 p-4 rounded-sm bg-white/[0.02] border border-white/10 flex items-center justify-between min-h-[64px] transition-all">
          <div className="flex items-center gap-3">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <div className="font-mono text-xs">
              {activeSkill ? (
                <span>
                  <strong className="text-white uppercase mr-2 font-display">{activeSkill.name}:</strong>
                  <span className="text-neutral-300">{activeSkill.description}</span>
                  {activeSkill.progressNote && (
                    <span className="ml-2 px-2 py-0.5 rounded-xs bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {activeSkill.progressNote}
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-neutral-500 italic">
                  Hover over any technology for contextual architectural insight and learning progression.
                </span>
              )}
            </div>
          </div>
          {activeSkill && (
            <span
              className={`hidden sm:inline-block px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest ${
                activeSkill.status === 'Current Skill'
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                  : 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/30'
              }`}
            >
              {activeSkill.status}
            </span>
          )}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const catSkills = PORTFOLIO_DATA.skills.filter((s) => s.category === cat.key);
            const Icon = cat.icon;

            return (
              <div
                key={cat.key}
                className="p-8 rounded-sm bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-6">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{cat.title}</span>
                  </div>

                  {/* Interactive Typography Cloud */}
                  <div className="flex flex-wrap gap-2.5">
                    {catSkills.map((skill) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setActiveSkill(skill)}
                        onMouseLeave={() => setActiveSkill(null)}
                        className={`group relative px-4 py-2 rounded-sm border cursor-pointer transition-all duration-200 select-none ${
                          activeSkill?.name === skill.name
                            ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                            : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:border-white/30 hover:text-white'
                        }`}
                        data-cursor="INFO"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-semibold tracking-wide">
                            {skill.name}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skill.status === 'Current Skill'
                                ? 'bg-emerald-400'
                                : 'bg-cyan-400 animate-pulse'
                            }`}
                          />
                        </div>

                        {/* Explicit Java 68% or Progress Badge */}
                        {skill.progressNote && (
                          <div className="text-[10px] font-mono text-amber-300 mt-1">
                            {skill.progressNote}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>{catSkills.length} TECHNOLOGIES</span>
                  <span>{cat.key === 'interactive' ? 'EXPLORING' : 'FOUNDATIONAL'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
