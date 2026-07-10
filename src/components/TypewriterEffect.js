"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypewriterEffect() {
  const el = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      if (el.current) el.current.textContent = "Data Scientist";
      return;
    }

    const typed = new Typed(el.current, {
      strings: [
        "Data Scientist",
        "ML Engineer",
        "Data Engineer",
        "AI Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: "_",
    });

    return () => typed.destroy();
  }, []);

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <span ref={el} style={{ color: "var(--accent-blue)" }} />
    </span>
  );
}
