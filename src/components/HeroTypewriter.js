"use client";

import dynamic from "next/dynamic";

const TypewriterEffect = dynamic(() => import("./TypewriterEffect"), {
  ssr: false,
  loading: () => <span style={{ color: "var(--accent-blue)" }}>Data Scientist</span>,
});

export default function HeroTypewriter() {
  return <TypewriterEffect />;
}
