import React, { useState } from 'react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, ShieldAlert, CheckCircle, Lock, X } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="relative w-full py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3">
              <span className="w-2 h-[1px] bg-cyan-400" />
              <span>06 / SELECTED WORK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="text-xs font-mono tracking-wider uppercase text-neutral-400">
            EDITORIAL CASE STUDIES • AUTHENTIC DEVELOPMENT
          </div>
        </div>

        {/* Project 01: TRACEAI — Grand Editorial Presentation */}
        <div className="space-y-16">
          {projects.map((project, idx) => {
            const isFirst = idx === 0;

            if (isFirst) {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-sm bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-500"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Left: Project Details */}
                    <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 rounded-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] tracking-widest uppercase">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-neutral-500 uppercase">
                            PROJECT 01
                          </span>
                        </div>

                        <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-mono text-xs sm:text-sm text-cyan-400 uppercase tracking-wide">
                          {project.subtitle}
                        </p>

                        <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed pt-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Problem & Solution Quick Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08]">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-rose-400">
                            <ShieldAlert className="w-3.5 h-3.5" />
                            <span>THE PROBLEM</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-emerald-400">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>THE SOLUTION</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Pills & CTA */}
                      <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-xs bg-white/[0.04] border border-white/10 font-mono text-[11px] text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          data-cursor="VIEW"
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-cyan-400 hover:bg-cyan-300 text-[#090a0d] font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md shadow-cyan-500/20"
                        >
                          <span>{project.linkText}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Visual Forensic Inspection Showcase */}
                    <div className="lg:col-span-5 bg-[#0e121a]/90 border-t lg:border-t-0 lg:border-l border-white/10 p-8 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                      {/* Mock Forensic Dashboard UI */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[11px] text-neutral-400">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            FORENSIC THREAT TELEMETRY
                          </span>
                          <span className="text-cyan-400">STATUS: ACTIVE SCAN</span>
                        </div>

                        {/* Interactive Heuristic Indicators */}
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-sm bg-white/[0.03] border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-400">SPF / DKIM / DMARC:</span>
                            <span className="text-amber-400 font-semibold">MISMATCH DETECTED</span>
                          </div>
                          <div className="p-3 rounded-sm bg-white/[0.03] border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-400">PAYLOAD ANOMALY:</span>
                            <span className="text-rose-400 font-semibold">HOMOGLYPH URL</span>
                          </div>
                          <div className="p-3 rounded-sm bg-white/[0.03] border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-400">EXPLAINABLE RISK SCORE:</span>
                            <span className="text-cyan-300 font-bold">89.4 / 100 [HIGH]</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-sm bg-cyan-950/20 border border-cyan-500/20 text-neutral-300 text-xs font-mono leading-relaxed">
                          <strong className="text-cyan-400 block mb-1">MOHIT'S CONTRIBUTION:</strong>
                          {project.contribution}
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                        <span>MODULE: FORENSIC ENGINE</span>
                        <span>VERSION 0.1 PROTOTYPE</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Project 02: COMING SOON Placeholder
            return (
              <div
                key={project.id}
                className="relative rounded-sm bg-white/[0.02] border border-dashed border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-xs bg-white/[0.04] border border-white/10 text-neutral-400 font-mono text-[10px] tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 uppercase">
                      PROJECT 02
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                    {project.name} — <span className="text-cyan-400">{project.linkText}</span>
                  </h3>
                  <p className="text-neutral-400 text-sm max-w-xl font-light">
                    "Currently building something new." Exploring modern web frameworks, full-stack pipelines, and database systems. Architecture designed to expand seamlessly.
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3 px-6 py-3 rounded-sm bg-white/[0.03] border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>IN ACTIVE DEVELOPMENT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-sm bg-[#0d1017] border border-cyan-500/30 p-8 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="px-2.5 py-0.5 rounded-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] uppercase tracking-widest">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-3xl font-bold uppercase text-white">
                {selectedProject.name}
              </h3>
              <p className="font-mono text-xs text-cyan-400 uppercase">
                {selectedProject.subtitle}
              </p>
            </div>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              {selectedProject.description}
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                  Problem Context
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                  Engineered Solution
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-1">
                  Mohit's Specific Contribution
                </h4>
                <p className="text-xs sm:text-sm text-cyan-200 leading-relaxed font-mono">
                  {selectedProject.contribution}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-xs bg-white/[0.04] border border-white/10 font-mono text-[11px] text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2 rounded-sm bg-cyan-400 text-[#090a0d] font-mono text-xs font-semibold uppercase tracking-wider"
              >
                CLOSE SPECIFICATION
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
