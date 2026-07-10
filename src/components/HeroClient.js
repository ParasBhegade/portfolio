"use client";

import dynamic from "next/dynamic";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), {
  ssr: false,
  loading: () => null,
});

export default function HeroClient() {
  return <ParticleNetwork />;
}
