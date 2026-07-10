"use client";

import { useCallback, useEffect, useState } from "react";
import { ParticlesProvider } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleCanvas() {
  const particlesLoaded = useCallback(async (container) => {
    // particles loaded
  }, []);

  return (
    <Particles
      id="hero-particles"
      particlesLoaded={particlesLoaded}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, width: 1200, height: 800 },
          },
          color: { value: ["#66aaff", "#00ccff", "#8b5cf6"] },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.3, max: 0.7 },
            animation: { enable: true, speed: 0.8, minimumValue: 0.2 },
          },
          size: {
            value: { min: 1.5, max: 3.5 },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#66aaff",
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.35 } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default function ParticleNetwork() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (reducedMotion) return null;

  return (
    <ParticlesProvider init={particlesInit}>
      <ParticleCanvas />
    </ParticlesProvider>
  );
}
