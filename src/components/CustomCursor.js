"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setVisible(true);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let glowX = 0, glowY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnterInteractive = () => {
      if (dotRef.current) dotRef.current.classList.add("cursor-dot--hover");
      if (glowRef.current) glowRef.current.classList.add("cursor-glow--hover");
    };

    const handleMouseLeaveInteractive = () => {
      if (dotRef.current) dotRef.current.classList.remove("cursor-dot--hover");
      if (glowRef.current) glowRef.current.classList.remove("cursor-glow--hover");
    };

    const animate = () => {
      // Dot follows instantly
      dotX = mouseX;
      dotY = mouseY;
      // Glow trails behind
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    // Attach to interactive elements
    const attachListeners = () => {
      const interactive = document.querySelectorAll("a, button, input, textarea, [role='button']");
      interactive.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnterInteractive);
        el.addEventListener("mouseleave", handleMouseLeaveInteractive);
      });
      return interactive;
    };

    // Use MutationObserver to re-attach when DOM changes
    let elements = attachListeners();
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
      elements = attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.body.classList.add("hide-system-cursor");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
      document.body.classList.remove("hide-system-cursor");
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
