"use client";

import { useEffect, useRef } from "react";
import TechTag from "./TechTag";

export default function NeoCard({ title, subtitle, description, tags, children, style, tilt = true }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!tilt || !cardRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let VanillaTilt;
    import("vanilla-tilt").then((mod) => {
      VanillaTilt = mod.default;
      if (cardRef.current) {
        VanillaTilt.init(cardRef.current, {
          max: 6,
          speed: 400,
          glare: true,
          "max-glare": 0.08,
          scale: 1.02,
        });
      }
    });

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, [tilt]);

  // Mouse spotlight
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className="neo-card"
      style={{ display: "flex", flexDirection: "column", height: "100%", ...style }}
      onMouseMove={handleMouseMove}
    >
      {title && <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>}
      {subtitle && (
        <h4 style={{ marginBottom: "1rem", color: "var(--secondary)" }}>
          {subtitle}
        </h4>
      )}
      {description && <p style={{ flexGrow: 1 }}>{description}</p>}
      {children && <div style={{ flexGrow: 1 }}>{children}</div>}
      {tags && (
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap" }}>
          {tags.map((tag, idx) => (
            <TechTag key={idx} name={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
