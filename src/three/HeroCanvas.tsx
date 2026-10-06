import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface HeroCanvasProps {
  scrollProgress: number; // 0.0 to 1.0
  onAngleChange?: (angleDeg: number, orientationLabel: string) => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({
  scrollProgress,
  onAngleChange,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const targetRotationYRef = useRef<number>(0);
  const currentRotationYRef = useRef<number>(0);
  const mouseTiltXRef = useRef<number>(0);
  const mouseTiltYRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  const previousMouseXRef = useRef<number>(0);
  const manualDragOffsetRef = useRef<number>(0);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [currentDegree, setCurrentDegree] = useState<number>(0);
  const [viewLabel, setViewLabel] = useState<string>('FRONT PERSPECTIVE');

  // Convert scrollProgress (0 to 1) into angle in radians (0 to 2*PI)
  useEffect(() => {
    targetRotationYRef.current = scrollProgress * Math.PI * 2 + manualDragOffsetRef.current;
  }, [scrollProgress]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.3, 4.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // --- Root 360 Pivot Group ---
    const rootPivot = new THREE.Group();
    scene.add(rootPivot);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0e1726, 2.4);
    scene.add(ambientLight);

    // Key Light (Cyan / Electric Blue)
    const keyLight = new THREE.DirectionalLight(0x38bdf8, 3.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    // Back / Rim Light (Cold Platinum / Cyan)
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 4.0);
    rimLight.position.set(-3, 3, -3);
    scene.add(rimLight);

    // Warm Under-glow Accent Light
    const accentLight = new THREE.PointLight(0xf59e0b, 1.8, 10);
    accentLight.position.set(0, -2, 2);
    scene.add(accentLight);

    // Core Heart Light (inside the model)
    const coreLight = new THREE.PointLight(0x38bdf8, 2.5, 6);
    coreLight.position.set(0, 0.3, 0);
    rootPivot.add(coreLight);

    // --- Developer Avatar & Core Hologram Geometry ---
    // Materials
    const obsidianMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c1017,
      metalness: 0.88,
      roughness: 0.22,
    });

    const brushedTitanium = new THREE.MeshStandardMaterial({
      color: 0x1e2638,
      metalness: 0.95,
      roughness: 0.15,
    });

    const cyberGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const amberAccentMaterial = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.8,
      roughness: 0.3,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.25,
    });

    // 1. Torso / Developer Silhouette
    const torsoGeo = new THREE.CylinderGeometry(0.55, 0.42, 1.3, 32);
    const torsoMesh = new THREE.Mesh(torsoGeo, obsidianMaterial);
    torsoMesh.position.set(0, -0.4, 0);
    rootPivot.add(torsoMesh);

    // Front Chest Reactor / Crest (Indicates Front)
    const chestCoreGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.1, 32);
    chestCoreGeo.rotateX(Math.PI / 2);
    const chestCoreMesh = new THREE.Mesh(chestCoreGeo, amberAccentMaterial);
    chestCoreMesh.position.set(0, 0.05, 0.52);
    rootPivot.add(chestCoreMesh);

    // Back Spine Data Conduit (Indicates Back at 180 deg)
    const spineGroup = new THREE.Group();
    for (let i = 0; i < 7; i++) {
      const segGeo = new THREE.BoxGeometry(0.14, 0.08, 0.12);
      const segMesh = new THREE.Mesh(segGeo, brushedTitanium);
      segMesh.position.set(0, 0.15 - i * 0.12, -0.48);
      spineGroup.add(segMesh);
    }
    rootPivot.add(spineGroup);

    // 2. Neck
    const neckGeo = new THREE.CylinderGeometry(0.22, 0.26, 0.35, 24);
    const neckMesh = new THREE.Mesh(neckGeo, brushedTitanium);
    neckMesh.position.set(0, 0.38, 0);
    rootPivot.add(neckMesh);

    // 3. Head / Developer Bust
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.82, 0);

    const craniumGeo = new THREE.SphereGeometry(0.44, 32, 28);
    craniumGeo.scale(0.85, 1.05, 0.95);
    const craniumMesh = new THREE.Mesh(craniumGeo, obsidianMaterial);
    headGroup.add(craniumMesh);

    // Holographic Visor / Optical Terminal (Front Feature)
    const visorGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.18, 32, 1, false, 0, Math.PI);
    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.3,
      roughness: 0.1,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
    });
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    visorMesh.rotation.y = Math.PI / 2;
    visorMesh.position.set(0, 0.02, 0.05);
    headGroup.add(visorMesh);

    // Cyber Wireframe Halo over Head
    const wireHaloGeo = new THREE.SphereGeometry(0.48, 16, 12);
    wireHaloGeo.scale(0.88, 1.08, 0.98);
    const wireHaloMesh = new THREE.Mesh(wireHaloGeo, cyberGlowMaterial);
    headGroup.add(wireHaloMesh);

    rootPivot.add(headGroup);

    // 4. 360° Orbital Gimbal & HUD Rings
    const ringGroup = new THREE.Group();

    // Equatorial Ring
    const eqRingGeo = new THREE.TorusGeometry(1.4, 0.012, 16, 100);
    eqRingGeo.rotateX(Math.PI / 2);
    const eqRingMesh = new THREE.Mesh(eqRingGeo, brushedTitanium);
    ringGroup.add(eqRingMesh);

    // Tilted Orbital Data Ring
    const orbitRingGeo = new THREE.TorusGeometry(1.65, 0.008, 16, 100);
    orbitRingGeo.rotateX(Math.PI / 3);
    const orbitRingMesh = new THREE.Mesh(orbitRingGeo, cyberGlowMaterial);
    ringGroup.add(orbitRingMesh);

    // Floor Pedestal Ring
    const baseRingGeo = new THREE.TorusGeometry(1.1, 0.02, 16, 80);
    baseRingGeo.rotateX(Math.PI / 2);
    const baseRingMesh = new THREE.Mesh(baseRingGeo, obsidianMaterial);
    baseRingMesh.position.set(0, -1.15, 0);
    ringGroup.add(baseRingMesh);

    rootPivot.add(ringGroup);

    // 5. Ambient Neural Node Swarm (Floating Particles)
    const particleCount = 240;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) + (Math.random() - 0.5) * 0.4;
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootPivot.add(particles);

    // --- Interactive Mouse Handlers ---
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseTiltXRef.current = x * 0.22;
      mouseTiltYRef.current = y * 0.15;

      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMouseXRef.current;
        manualDragOffsetRef.current += deltaX * 0.008;
        targetRotationYRef.current += deltaX * 0.008;
        previousMouseXRef.current = e.clientX;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMouseXRef.current = e.clientX;
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMouseXRef.current = e.touches[0].clientX;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMouseXRef.current;
        manualDragOffsetRef.current += deltaX * 0.012;
        targetRotationYRef.current += deltaX * 0.012;
        previousMouseXRef.current = e.touches[0].clientX;
      }
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // --- Animation & Render Loop ---
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth interpolation for rotation (zero jitter, cinematic spring lerp)
      currentRotationYRef.current += (targetRotationYRef.current - currentRotationYRef.current) * 0.085;

      // Apply 360 degree rotation
      rootPivot.rotation.y = currentRotationYRef.current;

      // Subtle mouse tilt for depth parallax
      rootPivot.rotation.x = mouseTiltYRef.current;
      rootPivot.rotation.z = -mouseTiltXRef.current * 0.5;

      // Subtle floating breathing motion
      rootPivot.position.y = Math.sin(elapsedTime * 1.5) * 0.04;

      // Gently counter-spin ambient particles & orbit ring
      particles.rotation.y = elapsedTime * 0.05;
      orbitRingMesh.rotation.z = elapsedTime * 0.12;

      // Calculate degrees normalized 0 - 360
      const rawDeg = ((currentRotationYRef.current * 180) / Math.PI) % 360;
      const normalizedDeg = Math.round(rawDeg < 0 ? rawDeg + 360 : rawDeg);

      // Determine precise perspective label per Section 12
      let label = 'FRONT PERSPECTIVE (0°)';
      if (normalizedDeg >= 338 || normalizedDeg < 22) {
        label = '0% — FRONT PERSPECTIVE';
      } else if (normalizedDeg >= 22 && normalizedDeg < 68) {
        label = '12% — 3/4 FRONT ANGLE';
      } else if (normalizedDeg >= 68 && normalizedDeg < 112) {
        label = '25% — LATERAL PROFILE';
      } else if (normalizedDeg >= 112 && normalizedDeg < 158) {
        label = '37% — 3/4 REAR PERSPECTIVE';
      } else if (normalizedDeg >= 158 && normalizedDeg < 202) {
        label = '50% — SYSTEM CORE / REAR';
      } else if (normalizedDeg >= 202 && normalizedDeg < 248) {
        label = '62% — OPPOSITE 3/4 ANGLE';
      } else if (normalizedDeg >= 248 && normalizedDeg < 292) {
        label = '75% — OPPOSITE LATERAL';
      } else if (normalizedDeg >= 292 && normalizedDeg < 338) {
        label = '87% — 3/4 FRONT HORIZON';
      }

      setCurrentDegree(normalizedDeg);
      setViewLabel(label);
      if (onAngleChange) {
        onAngleChange(normalizedDeg, label);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      // Clean up Three.js resources
      renderer.dispose();
      torsoGeo.dispose();
      craniumGeo.dispose();
      visorGeo.dispose();
      particleGeo.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-pan-y"
      data-cursor="ROTATE 360°"
    >
      {/* Fallback if WebGL disabled */}
      {!webglSupported && (
        <div className="flex flex-col items-center justify-center p-8 text-center text-neutral-400">
          <div className="w-48 h-48 rounded-full border border-cyan-500/30 bg-cyan-950/20 flex items-center justify-center mb-4">
            <span className="font-mono text-cyan-400 text-sm">360° VISUAL</span>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Hardware acceleration mode
          </p>
        </div>
      )}

      {/* Real-time 360° Gimbal Telemetry HUD */}
      <div className="pointer-events-none absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] sm:text-xs font-mono tracking-widest uppercase text-neutral-300 shadow-2xl">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-300 font-bold">{currentDegree}°</span>
        <span className="text-neutral-600">|</span>
        <span className="text-neutral-300">{viewLabel}</span>
        <span className="hidden sm:inline text-neutral-600">|</span>
        <span className="hidden sm:inline text-neutral-400">DRAG OR SCROLL</span>
      </div>
    </div>
  );
};

