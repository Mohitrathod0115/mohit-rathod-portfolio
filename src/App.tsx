import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import { FloatingMobileBar } from './components/FloatingMobileBar';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { EducationSection } from './sections/EducationSection';
import { JourneySection } from './sections/JourneySection';
import { SkillsSection } from './sections/SkillsSection';
import { LearningSection } from './sections/LearningSection';
import { WorkSection } from './sections/WorkSection';
import { BuildingSection } from './sections/BuildingSection';
import { StrengthsSection } from './sections/StrengthsSection';
import { GoalsSection } from './sections/GoalsSection';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { WhyMeSection } from './sections/WhyMeSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { CtaSection } from './sections/CtaSection';

import { PORTFOLIO_DATA } from './data/portfolioData';

export function App() {
  // Initialize luxury smooth inertial scrolling physics
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#090a0d] text-white selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Precision custom desktop cursor */}
      <CustomCursor />

      {/* Sticky header navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* Full-screen Cinematic 360° Hero */}
        <HeroSection />

        {/* Primary Marquee */}
        <Marquee text={PORTFOLIO_DATA.marquees.primary} speed="normal" />

        {/* 01 / About Me */}
        <AboutSection />

        {/* 02 / Academic Foundation */}
        <EducationSection />

        {/* 03 / My Journey Timeline */}
        <JourneySection />

        {/* Secondary Reverse Marquee */}
        <Marquee text={PORTFOLIO_DATA.marquees.secondary} reverse speed="normal" />

        {/* 04 / Skills & Architecture */}
        <SkillsSection />

        {/* 05 / Continuous Progression (Always Learning) */}
        <LearningSection />

        {/* 06 / Selected Work (TRACEAI & Project 02) */}
        <WorkSection />

        {/* 07 / What I Like Building */}
        <BuildingSection />

        {/* 08 / Personal Strengths */}
        <StrengthsSection />

        {/* 09 / Future Goals */}
        <GoalsSection />

        {/* 10 / What I'm Building Toward (Capabilities) */}
        <CapabilitiesSection />

        {/* 11 / Why Collaborate With Me */}
        <WhyMeSection />

        {/* 12 / Verified Achievements */}
        <AchievementsSection />

        {/* 13 / Contact & Social */}
        <ContactSection />

        {/* 14 / Cinematic Final CTA */}
        <CtaSection />
      </main>

      {/* Floating mobile quick contact bar */}
      <FloatingMobileBar />

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}

export default App;
