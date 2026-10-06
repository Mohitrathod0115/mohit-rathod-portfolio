import React, { useState } from 'react';
import { PORTFOLIO_DATA, type ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, ShieldAlert, CheckCircle, Lock, X, Play, RotateCcw, Activity } from 'lucide-react';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Interactive Graph Simulation State for ALGOVORTEX
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [visitedNodes, setVisitedNodes] = useState<number[]>([1]);
  const [activeAlgorithm, setActiveAlgorithm] = useState<'Dijkstra' | 'BFS'>('Dijkstra');

  const nodes = [
    { id: 1, label: 'Node A', x: 20, y: 35, weight: 0 },
    { id: 2, label: 'Node B', x: 50, y: 18, weight: 4 },
    { id: 3, label: 'Node C', x: 50, y: 65, weight: 2 },
    { id: 4, label: 'Node D', x: 80, y: 30, weight: 7 },
    { id: 5, label: 'Node E', x: 82, y: 75, weight: 9 },
  ];

  const edges = [
    { from: 1, to: 2, weight: 4 },
    { from: 1, to: 3, weight: 2 },
    { from: 3, to: 2, weight: 1 },
    { from: 2, to: 4, weight: 3 },
    { from: 3, to: 5, weight: 7 },
    { from: 4, to: 5, weight: 2 },
  ];

  const runTraversal = (algo: 'Dijkstra' | 'BFS') => {
    setActiveAlgorithm(algo);
    setIsRunning(true);
    setVisitedNodes([1]);
    setActiveStep(1);

    const steps = algo === 'Dijkstra' ? [[1], [1, 3], [1, 3, 2], [1, 3, 2, 4], [1, 3, 2, 4, 5]] : [[1], [1, 2, 3], [1, 2, 3, 4, 5]];
    
    steps.forEach((stepSet, index) => {
      setTimeout(() => {
        setVisitedNodes(stepSet);
        setActiveStep(index + 1);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 700);
    });
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setVisitedNodes([1]);
    setActiveStep(0);
  };

  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="relative w-full py-24 sm:py-32 bg-[#090a0d] border-t border-white/[0.06] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-4">
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
            ENGINEERING WORKBENCH • ALGORITHMIC ARCHITECTURE
          </div>
        </div>

        {/* Project Showcase */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => {
            const isFirst = idx === 0;

            if (isFirst) {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-sm bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-2xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Left: Project Details */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-between space-y-8">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 rounded-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] tracking-widest uppercase">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-neutral-500 uppercase">
                            PROJECT 01 • PROTOTYPE
                          </span>
                        </div>

                        <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-white group-hover:text-cyan-300 transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-mono text-xs sm:text-sm text-cyan-400 uppercase tracking-wide">
                          {project.subtitle}
                        </p>

                        <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed pt-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Problem & Solution Quick Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08]">
                        <div className="space-y-1.5 p-3 rounded-sm bg-white/[0.01] border border-white/[0.04]">
                          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-rose-400">
                            <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                            <span>THE CHALLENGE</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                            {project.problem}
                          </p>
                        </div>
                        <div className="space-y-1.5 p-3 rounded-sm bg-white/[0.01] border border-white/[0.04]">
                          <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-emerald-400">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>THE ARCHITECTURE</span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Pills & CTA */}
                      <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-xs bg-white/[0.04] border border-white/10 font-mono text-[10px] sm:text-[11px] text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          data-cursor="VIEW"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-cyan-400 hover:bg-cyan-300 text-[#090a0d] font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md shadow-cyan-500/20"
                        >
                          <span>{project.linkText}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Right: Live Interactive Graph Topology Workbench */}
                    <div className="lg:col-span-5 bg-[#0b0e14]/95 border-t lg:border-t-0 lg:border-l border-white/10 p-5 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                      {/* Workbench HUD Header */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-[11px] text-neutral-400">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            GRAPH TOPOLOGY SIMULATOR
                          </span>
                          <span className="text-cyan-400 font-semibold">{activeAlgorithm.toUpperCase()}</span>
                        </div>

                        {/* Interactive Canvas Graph Preview */}
                        <div className="relative w-full h-52 sm:h-56 rounded-sm bg-[#080a0f] border border-white/10 overflow-hidden flex items-center justify-center">
                          {/* SVG Edges */}
                          <svg className="absolute inset-0 w-full h-full">
                            {edges.map((e, index) => {
                              const fromNode = nodes.find((n) => n.id === e.from)!;
                              const toNode = nodes.find((n) => n.id === e.to)!;
                              const isHighlighted = visitedNodes.includes(e.from) && visitedNodes.includes(e.to);

                              return (
                                <g key={index}>
                                  <line
                                    x1={`${fromNode.x}%`}
                                    y1={`${fromNode.y}%`}
                                    x2={`${toNode.x}%`}
                                    y2={`${toNode.y}%`}
                                    stroke={isHighlighted ? '#38bdf8' : 'rgba(255,255,255,0.15)'}
                                    strokeWidth={isHighlighted ? 2.5 : 1.2}
                                    strokeDasharray={isHighlighted ? 'none' : '4,3'}
                                    className="transition-all duration-500"
                                  />
                                </g>
                              );
                            })}
                          </svg>

                          {/* Nodes */}
                          {nodes.map((node) => {
                            const isVisited = visitedNodes.includes(node.id);
                            return (
                              <div
                                key={node.id}
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                                className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full font-mono text-[11px] font-bold transition-all duration-300 ${
                                  isVisited
                                    ? 'bg-cyan-400 text-black border-2 border-white shadow-lg shadow-cyan-400/40 scale-110'
                                    : 'bg-white/[0.06] text-neutral-400 border border-white/20'
                                }`}
                              >
                                {node.label.slice(-1)}
                              </div>
                            );
                          })}

                          {/* Overlay Controls */}
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono">
                            <span className="px-2 py-0.5 rounded-xs bg-black/60 text-cyan-300 backdrop-blur-xs">
                              NODES: {visitedNodes.length} / {nodes.length}
                            </span>
                            <span className="px-2 py-0.5 rounded-xs bg-black/60 text-neutral-400 backdrop-blur-xs">
                              STEP: {activeStep}
                            </span>
                          </div>
                        </div>

                        {/* Interactive Simulation Controls */}
                        <div className="grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider">
                          <button
                            type="button"
                            disabled={isRunning}
                            onClick={() => runTraversal('Dijkstra')}
                            className="p-2 rounded-xs bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/25 transition-colors flex items-center justify-center gap-1 disabled:opacity-50"
                          >
                            <Play className="w-3 h-3" />
                            <span>DIJKSTRA</span>
                          </button>
                          <button
                            type="button"
                            disabled={isRunning}
                            onClick={() => runTraversal('BFS')}
                            className="p-2 rounded-xs bg-indigo-500/15 border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/25 transition-colors flex items-center justify-center gap-1 disabled:opacity-50"
                          >
                            <Play className="w-3 h-3" />
                            <span>BFS</span>
                          </button>
                          <button
                            type="button"
                            onClick={resetSimulation}
                            className="p-2 rounded-xs bg-white/[0.04] border border-white/10 text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>RESET</span>
                          </button>
                        </div>

                        {/* Real-Time Telemetry Stats */}
                        <div className="space-y-2 font-mono text-xs">
                          <div className="p-2.5 rounded-sm bg-white/[0.02] border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-400">TIME COMPLEXITY:</span>
                            <span className="text-emerald-400 font-semibold">O((V + E) log V)</span>
                          </div>
                          <div className="p-2.5 rounded-sm bg-white/[0.02] border border-white/10 flex items-center justify-between">
                            <span className="text-neutral-400">SPACE OVERHEAD:</span>
                            <span className="text-cyan-300 font-semibold">O(V) HEAP MATRIX</span>
                          </div>
                        </div>

                        <div className="p-3.5 rounded-sm bg-cyan-950/20 border border-cyan-500/20 text-neutral-300 text-xs font-mono leading-relaxed">
                          <strong className="text-cyan-400 block mb-0.5">MOHIT'S CONTRIBUTION:</strong>
                          {project.contribution}
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                        <span>ENGINE: GRAPH MATRIX V1</span>
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Activity className="w-3 h-3" /> LIVE SIMULATOR
                        </span>
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
                className="relative rounded-sm bg-white/[0.02] border border-dashed border-white/15 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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

                <div className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-sm bg-white/[0.03] border border-white/10 text-neutral-400 font-mono text-xs uppercase tracking-widest">
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
          <div className="relative w-full max-w-3xl rounded-sm bg-[#0d1017] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
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
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
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
