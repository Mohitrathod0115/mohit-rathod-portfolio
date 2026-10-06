# Premium 360° Portfolio — Mohit Madhukar Rathod

> **Student Developer | Full-Stack Developer in Progress | Technology Enthusiast**  
> **GH Raisoni College, Wagholi, Pune**  
> **Academic Merit: 92.12% — MHT-CET 2026**  
> **Philosophy:** *Learn → Build → Experiment → Improve → Create*  
> **Tagline:** *Learning today. Building tomorrow.*

---

## 🌟 Overview

A bespoke, editorial, cinematic personal portfolio designed for **Mohit Madhukar Rathod**. This website balances high visual artistry with authentic student positioning—avoiding SaaS clichés, bloated templates, and unverified achievements.

### Key Highlights
- **True 360° Interactive Hero Experience**: Scroll-synchronized continuous rotation (0° Front → 90° Lateral → 180° Rear Core → 270° Lateral → 360° Full Cycle) built with Three.js, GSAP ScrollTrigger, and real-time telemetry HUD.
- **Inertial Smooth Scrolling**: Integrated physics using Lenis.
- **Editorial Typography**: Styled with Cabinet/Syne display headers, Space Grotesk, Inter, and JetBrains Mono.
- **Interactive Skills HUD**: Typography-based skill matrix with real-time contextual descriptions and clear learning progression statuses (including Java 68% indicator).
- **Featured Project Showcase**: Full forensic case study of **TRACEAI** (Explainable Email Threat Detection & Forensic Intelligence) with interactive heuristic breakdown + expandable architecture for future work.
- **Authentic Roadmap & Vision**: Sections for Academic Foundation (92.12% MHT-CET), Chronological Journey, Passion Domains, Personal Strengths, Trajectory Goals, and Capabilities.
- **Custom Desktop Cursor**: Magnetic follower with contextual action badges (`EXPLORE`, `VIEW`, `CONNECT`, `TOP`), automatically disabled on mobile/touch screens.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, TypeScript, Vite 8, Tailwind CSS v3
- **3D & Graphics**: Three.js, WebGL with fallback
- **Motion & Physics**: GSAP, ScrollTrigger, Lenis
- **Icons**: Lucide React

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 📂 Project Architecture

```
C:\Local Disk\Coding\Portfolio\
├── src/
│   ├── assets/             # Static media assets
│   ├── components/         # Reusable UI components
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── Marquee.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── portfolioData.ts # Authentic single source of truth for all info
│   ├── hooks/
│   │   └── useLenis.ts     # Smooth scroll & ScrollTrigger sync
│   ├── sections/           # Modular page sections
│   │   ├── AboutSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── BuildingSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── GoalsSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── JourneySection.tsx
│   │   ├── LearningSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── StrengthsSection.tsx
│   │   ├── WhyMeSection.tsx
│   │   └── WorkSection.tsx
│   ├── three/
│   │   └── HeroCanvas.tsx  # Three.js 360° interactive engine
│   ├── App.tsx             # Main layout & section orchestration
│   ├── index.css           # Tailwind directives & luxury design styling
│   └── main.tsx
├── tailwind.config.js      # Palette, display typography & animations
└── vite.config.ts          # Rollup vendor chunking (Three.js, GSAP)
```

---

## 📝 Updating Your Information

All personal details, skills, social links, and project descriptions are cleanly decoupled inside:
[`src/data/portfolioData.ts`](file:///C:/Local%20Disk/Coding/Portfolio/src/data/portfolioData.ts)

When you are ready to add your live links or new projects, simply update the fields in this file!
