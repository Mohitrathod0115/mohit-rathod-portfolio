import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroCanvas } from '../three/HeroCanvas';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Sparkles, GraduationCap, Code2, Compass, Phone, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualWrapperRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const narrativeCardRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activePhase, setActivePhase] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;

    // Pinning the hero section for a cinematic 360° scroll (optimized for mobile ergonomics)
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: isMobile ? '+=70%' : '+=175%',
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;
        setScrollProgress(p);

        // Update narrative phase based on rotation milestones
        if (p < 0.22) {
          setActivePhase(0);
        } else if (p < 0.48) {
          setActivePhase(1);
        } else if (p < 0.74) {
          setActivePhase(2);
        } else {
          setActivePhase(3);
        }

        // Fade out scroll indicator quickly upon start of scroll
        if (scrollIndicatorRef.current) {
          const indicatorOpacity = Math.max(0, 1 - p * 5);
          scrollIndicatorRef.current.style.opacity = indicatorOpacity.toString();
          scrollIndicatorRef.current.style.pointerEvents = indicatorOpacity < 0.1 ? 'none' : 'auto';
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const narrativePhases = [
    {
      badge: "IDENTITY & ORIGIN",
      icon: Sparkles,
      title: "Learning today. Building tomorrow.",
      desc: "First-year student at G.H. Raisoni College of Engineering and Management, Wagholi, Pune, turning raw curiosity into functional code.",
      tag: "FRONT PROFILE (0°)"
    },
    {
      badge: "ACADEMIC EXCELLENCE",
      icon: GraduationCap,
      title: "92.12% — MHT-CET 2026",
      desc: "Strong quantitative foundations and disciplined problem solving leading into Computer Engineering.",
      tag: "LATERAL VIEW (90°)"
    },
    {
      badge: "CORE CODEBASE",
      icon: Code2,
      title: "C++, Python, Java & Web Foundations",
      desc: "Solid algorithmic base in C++ and Python, with Java 68% completed and actively expanding daily.",
      tag: "REAR ARCHITECTURE (180°)"
    },
    {
      badge: "FUTURE STACK",
      icon: Compass,
      title: "React, Node.js & Database Systems",
      desc: "Building toward full-stack capability with PostgreSQL, Supabase, and immersive 3D interactive graphics.",
      tag: "COMPLETING 360° ROTATION"
    }
  ];

  const currentPhase = narrativePhases[activePhase];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen bg-[#090a0d] overflow-hidden flex flex-col justify-between"
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8 flex flex-col justify-between">
        {/* Top Header Information */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
          <div className="space-y-2.5 sm:space-y-3">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{PORTFOLIO_DATA.profile.status.toUpperCase()} • DEVELOPER • TECHNOLOGY ENTHUSIAST</span>
            </div>

            {/* Main Name Identity */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white leading-tight">
              {PORTFOLIO_DATA.profile.fullName}
            </h1>

            {/* Academic badge callout */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-neutral-400">
              <span className="px-2.5 py-0.5 rounded-sm bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold">
                {PORTFOLIO_DATA.academic.score}
              </span>
              <span>{PORTFOLIO_DATA.academic.exam}</span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="text-neutral-300">{PORTFOLIO_DATA.academic.college}</span>
            </div>

            {/* Direct Contact Badges in Hero */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono">
              <a
                href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.contact.phone}</span>
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PORTFOLIO_DATA.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#journey"
              data-cursor="EXPLORE"
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-mono font-semibold uppercase tracking-widest text-[#090a0d] bg-cyan-400 hover:bg-cyan-300 rounded-sm transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              EXPLORE JOURNEY
            </a>
            <a
              href="#projects"
              data-cursor="VIEW"
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs font-mono font-semibold uppercase tracking-widest text-white hover:text-cyan-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/15 hover:border-cyan-400/40 rounded-sm transition-all duration-300"
            >
              VIEW WORK
            </a>
          </div>
        </div>

        {/* Center: 360° Visual Canvas */}
        <div
          ref={visualWrapperRef}
          className="relative flex-1 w-full min-h-[260px] sm:min-h-[340px] flex items-center justify-center my-2"
        >
          <HeroCanvas scrollProgress={scrollProgress} />

          {/* Floating Contextual Narrative Telemetry Box (Desktop & Tablet) */}
          <div
            ref={narrativeCardRef}
            className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 max-w-sm hidden md:block p-4 rounded-lg bg-[#0d1017]/85 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-500"
          >
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-cyan-400 mb-2">
              <span className="flex items-center gap-1.5">
                {React.createElement(currentPhase.icon, { className: 'w-3 h-3' })}
                {currentPhase.badge}
              </span>
              <span className="text-neutral-500">{currentPhase.tag}</span>
            </div>
            <h3 className="font-display text-sm font-semibold text-white mb-1">
              {currentPhase.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-sans">
              {currentPhase.desc}
            </p>
          </div>
        </div>

        {/* Bottom Hero Controls & Indicator */}
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/[0.08]">
          <div className="text-xs font-mono text-neutral-400 tracking-wider">
            <span>PUNE, INDIA</span>
            <span className="mx-2 text-neutral-600">•</span>
            <span className="text-cyan-400 hidden sm:inline">{PORTFOLIO_DATA.profile.philosophy}</span>
            <span className="text-cyan-400 sm:hidden">LEARN → BUILD</span>
          </div>

          {/* Bottom Indicator (fades out as scrolling begins) */}
          <div
            ref={scrollIndicatorRef}
            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 animate-bounce transition-opacity duration-300"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
